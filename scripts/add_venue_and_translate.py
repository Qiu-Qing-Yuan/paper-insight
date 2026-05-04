import json
import requests
import time
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# 论文类别映射
VENUE_MAP = {
    'acl-long': '主会-长文',
    'acl-short': '主会-短文',
    'acl-demo': '系统演示',
    'acl-industry': '工业Track',
    'acl-srw': '学生研讨会',
    'acl-tutorials': '教程',
    'findings-acl': 'Findings',
    'africanlp-1': 'Workshop-AfricaNLP',
    'analogyangle-1': 'Workshop-AnalogyAngle',
    'argmining-1': 'Workshop-ArgMining',
    'bea-1': 'Workshop-BEA',
    'bionlp-1': 'Workshop-BioNLP',
    'bionlp-share': 'Workshop-BioNLP',
    'bsnlp-1': 'Workshop-BSNLP',
    'climatenlp-1': 'Workshop-ClimateNLP',
    'conll-1': 'Workshop-CoNLL',
    'fever-1': 'Workshop-FEVER',
    'fieldmatters-1': 'Workshop-FieldMatters',
    'gebnlp-1': 'Workshop-GEBNLP',
    'gem-1': 'Workshop-GEM',
    'iwslt-1': 'Workshop-IWSLT',
    'knowllm-1': 'Workshop-KnowLLM',
    'l2m2-1': 'Workshop-L2M2',
    'law-1': 'Workshop-LAW',
    'llmsec-1': 'Workshop-LLMSec',
    'magmar-1': 'Workshop-MAGMAR',
    'nlp4pi-1': 'Workshop-NLP4PI',
    'realm-1': 'Workshop-ReALM',
    'sdp-1': 'Workshop-SDP',
    'semeval-1': 'Workshop-SemEval',
    'sicon-1': 'Workshop-SiCON',
    'sigtyp-1': 'Workshop-SIGTYP',
    'trl-1': 'Workshop-TRL',
    'unlp-1': 'Workshop-UNLP',
    'wikinlp-1': 'Workshop-WikiNLP',
    'woah-1': 'Workshop-WOAH',
    'xllm-1': 'Workshop-XLLM',
}

def get_venue(paper_id):
    """根据论文ID获取会议类别"""
    parts = paper_id.split('.')
    if len(parts) >= 2:
        venue = parts[1]
        return VENUE_MAP.get(venue, f'Workshop-{venue}')
    return '未知'

def translate_text(text, src='en', dest='zh-cn'):
    """使用Google Translate翻译文本"""
    if not text:
        return ""
    try:
        url = "https://translate.googleapis.com/translate_a/single"
        params = {
            'client': 'gtx',
            'sl': src,
            'tl': dest,
            'dt': 't',
            'q': text[:5000]
        }
        response = requests.get(url, params=params, timeout=15)
        result = response.json()
        translated = ''.join([item[0] for item in result[0] if item[0]])
        return translated
    except Exception as e:
        return text

def main():
    # 加载论文数据
    print("正在加载论文数据...")
    with open('E:\\paper\\ACL2025\\data\\all_papers_translated.json', 'r', encoding='utf-8') as f:
        papers = json.load(f)
    
    # 添加会议类别
    print("正在添加会议类别...")
    for paper in papers:
        paper['venue'] = get_venue(paper['id'])
    
    # 统计类别分布
    venue_counts = {}
    for p in papers:
        v = p['venue']
        venue_counts[v] = venue_counts.get(v, 0) + 1
    
    print("\n会议类别分布:")
    for v, c in sorted(venue_counts.items(), key=lambda x: -x[1]):
        print(f"  {v}: {c} 篇")
    
    # 继续翻译未翻译的论文
    need_translate = [i for i, p in enumerate(papers) if p.get('abstract_en') and not p.get('abstract_zh')]
    print(f"\n需要翻译 {len(need_translate)} 篇论文")
    
    batch_size = 100
    for batch_start in range(0, len(need_translate), batch_size):
        batch_end = min(batch_start + batch_size, len(need_translate))
        print(f"\n翻译进度: {batch_start}/{len(need_translate)}")
        
        for idx in need_translate[batch_start:batch_end]:
            paper = papers[idx]
            print(f"  [{idx+1}/{len(papers)}] {paper['title'][:45]}...")
            paper['abstract_zh'] = translate_text(paper['abstract_en'])
            time.sleep(0.03)
        
        # 每批次保存
        if (batch_start // batch_size + 1) % 5 == 0:
            print("保存中间结果...")
            with open('E:\\paper\\ACL2025\\data\\all_papers_final.json', 'w', encoding='utf-8') as f:
                json.dump(papers, f, ensure_ascii=False, indent=2)
    
    # 保存最终结果
    print("\n保存最终结果...")
    with open('E:\\paper\\ACL2025\\data\\all_papers_final.json', 'w', encoding='utf-8') as f:
        json.dump(papers, f, ensure_ascii=False, indent=2)
    
    # 生成带类别的分类报告
    print("\n正在生成分类报告...")
    generate_reports(papers)
    
    print("\n完成！")

def generate_reports(papers):
    """生成带会议类别的分类报告"""
    # 加载分类数据
    with open('E:\\paper\\ACL2025\\data\\categorized_papers.json', 'r', encoding='utf-8') as f:
        categorized = json.load(f)
    
    paper_map = {p['id']: p for p in papers}
    translated_count = sum(1 for p in papers if p.get('abstract_zh'))
    
    # 主会论文统计
    main_papers = [p for p in papers if p['venue'].startswith('主会')]
    findings_papers = [p for p in papers if p['venue'] == 'Findings']
    
    # 生成总览
    print("  生成总览文件...")
    with open('E:\\paper\\ACL2025\\reports\\00_总览.md', 'w', encoding='utf-8') as f:
        f.write("# ACL 2025 论文研究方向分类报告\n\n")
        f.write("## 总体统计\n\n")
        f.write(f"- 总论文数: **{len(papers)}** 篇\n")
        f.write(f"- 已翻译摘要: **{translated_count}** 篇\n")
        f.write(f"- 主会论文: **{len(main_papers)}** 篇（长文 {sum(1 for p in main_papers if '长文' in p['venue'])} + 短文 {sum(1 for p in main_papers if '短文' in p['venue'])}）\n")
        f.write(f"- Findings: **{len(findings_papers)}** 篇\n\n")
        
        f.write("## 会议类别分布\n\n")
        f.write("| 类别 | 论文数 |\n")
        f.write("|------|--------|\n")
        venue_counts = {}
        for p in papers:
            v = p['venue']
            venue_counts[v] = venue_counts.get(v, 0) + 1
        for v, c in sorted(venue_counts.items(), key=lambda x: -x[1]):
            f.write(f"| {v} | {c} |\n")
        
        f.write("\n## 研究方向分类\n\n")
        f.write("| 序号 | 研究方向 | 论文数量 | 文件 |\n")
        f.write("|------|---------|--------|------|\n")
        
        idx = 1
        for category, cat_papers in categorized.items():
            if len(cat_papers) > 0:
                filename = f"{idx:02d}_{category}.md"
                f.write(f"| {idx} | {category} | {len(cat_papers)} | [{filename}](./{filename}) |\n")
                idx += 1
    
    # 为每个分类生成文件
    idx = 1
    for category, cat_papers in categorized.items():
        if len(cat_papers) == 0:
            continue
        
        filename = f"E:\\paper\\ACL2025\\reports\\{idx:02d}_{category}.md"
        print(f"  生成: {idx:02d}_{category}.md")
        
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(f"# {category}\n\n")
            f.write(f"共 **{len(cat_papers)}** 篇论文\n\n")
            
            # 按会议类别分组统计
            venue_in_cat = {}
            for p in cat_papers:
                full = paper_map.get(p['id'], p)
                v = full.get('venue', '未知')
                venue_in_cat[v] = venue_in_cat.get(v, 0) + 1
            
            f.write("### 会议类别分布\n\n")
            f.write("| 类别 | 数量 |\n")
            f.write("|------|------|\n")
            for v, c in sorted(venue_in_cat.items(), key=lambda x: -x[1]):
                f.write(f"| {v} | {c} |\n")
            f.write("\n---\n\n")
            
            # 按会议类别排序输出
            cat_papers_sorted = sorted(cat_papers, key=lambda x: paper_map.get(x['id'], x).get('venue', ''))
            
            for i, paper in enumerate(cat_papers_sorted, 1):
                paper_id = paper['id']
                full_paper = paper_map.get(paper_id, paper)
                
                authors = ', '.join(paper['authors'][:3])
                if len(paper['authors']) > 3:
                    authors += ' et al.'
                
                venue = full_paper.get('venue', '未知')
                
                f.write(f"## {i}. {paper['title']}\n\n")
                f.write(f"**类别**: `{venue}`  \n")
                f.write(f"**作者**: {authors}  \n")
                f.write(f"**ID**: {paper['id']}\n\n")
                
                if full_paper.get('abstract_en'):
                    f.write(f"**摘要(英文)**:\n> {full_paper['abstract_en']}\n\n")
                
                if full_paper.get('abstract_zh'):
                    f.write(f"**摘要(中文)**:\n> {full_paper['abstract_zh']}\n\n")
                
                f.write("---\n\n")
        
        idx += 1
    
    print(f"  共生成 {idx} 个文件")

if __name__ == "__main__":
    main()