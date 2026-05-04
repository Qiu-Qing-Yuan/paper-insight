import json
import requests
import time
import sys
import io
from concurrent.futures import ThreadPoolExecutor, as_completed

# 设置控制台编码为UTF-8
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

def translate_text(text, src='en', dest='zh-cn'):
    """使用Google Translate翻译文本"""
    if not text:
        return ""
    
    try:
        # 使用Google Translate API
        url = "https://translate.googleapis.com/translate_a/single"
        params = {
            'client': 'gtx',
            'sl': src,
            'tl': dest,
            'dt': 't',
            'q': text[:5000]  # 限制长度避免API限制
        }
        response = requests.get(url, params=params, timeout=15)
        result = response.json()
        
        # 提取翻译结果
        translated = ''.join([item[0] for item in result[0] if item[0]])
        return translated
    except Exception as e:
        return text  # 返回原文

def translate_single(paper, index, total):
    """翻译单篇论文"""
    if paper.get('abstract_en') and not paper.get('abstract_zh'):
        print(f"  [{index+1}/{total}] 翻译: {paper['title'][:45]}...")
        paper['abstract_zh'] = translate_text(paper['abstract_en'])
        return True
    return False

def main():
    # 加载所有论文数据
    print("正在加载论文数据...")
    with open('E:\\paper\\ACL2025\\all_papers_with_abstracts.json', 'r', encoding='utf-8') as f:
        papers = json.load(f)
    
    print(f"共 {len(papers)} 篇论文")
    
    # 检查已翻译的论文
    translated_count = sum(1 for p in papers if p.get('abstract_zh'))
    need_translate = sum(1 for p in papers if p.get('abstract_en') and not p.get('abstract_zh'))
    print(f"已翻译: {translated_count} 篇")
    print(f"需要翻译: {need_translate} 篇")
    
    # 批量翻译
    batch_size = 100
    total_batches = (len(papers) + batch_size - 1) // batch_size
    
    for batch_idx in range(total_batches):
        start_idx = batch_idx * batch_size
        end_idx = min(start_idx + batch_size, len(papers))
        
        # 检查当前批次是否需要翻译
        batch_needs_translate = any(
            papers[i].get('abstract_en') and not papers[i].get('abstract_zh')
            for i in range(start_idx, end_idx)
        )
        
        if not batch_needs_translate:
            continue
        
        print(f"\n处理批次 {batch_idx + 1}/{total_batches} (论文 {start_idx + 1}-{end_idx})")
        
        for i in range(start_idx, end_idx):
            translate_single(papers[i], i, len(papers))
            time.sleep(0.03)  # 避免请求过快
        
        # 每5个批次保存一次
        if (batch_idx + 1) % 5 == 0:
            print(f"保存中间结果...")
            with open('E:\\paper\\ACL2025\\all_papers_translated.json', 'w', encoding='utf-8') as f:
                json.dump(papers, f, ensure_ascii=False, indent=2)
    
    # 保存最终结果
    print("\n保存最终结果...")
    with open('E:\\paper\\ACL2025\\all_papers_translated.json', 'w', encoding='utf-8') as f:
        json.dump(papers, f, ensure_ascii=False, indent=2)
    
    # 统计翻译结果
    translated_count = sum(1 for p in papers if p.get('abstract_zh'))
    print(f"\n翻译完成！共翻译 {translated_count} 篇论文摘要")
    
    # 更新MD文件
    print("正在更新MD文件...")
    update_md_file(papers)
    print("MD文件更新完成！")

def update_md_file(papers):
    """更新MD文件，添加摘要"""
    # 加载分类数据
    with open('E:\\paper\\ACL2025\\categorized_papers.json', 'r', encoding='utf-8') as f:
        categorized = json.load(f)
    
    # 创建论文ID到摘要的映射
    paper_map = {p['id']: p for p in papers}
    
    # 生成新的MD文件
    with open('E:\\paper\\ACL2025\\ACL2025_论文分类报告_含摘要.md', 'w', encoding='utf-8') as f:
        f.write("# ACL 2025 论文研究方向分类报告（含摘要）\n\n")
        f.write(f"共收录 **{len(papers)}** 篇论文\n\n")
        f.write("## 分类统计\n\n")
        f.write("| 研究方向 | 论文数量 |\n")
        f.write("|---------|--------|\n")
        
        for category, cat_papers in categorized.items():
            if len(cat_papers) > 0:
                f.write(f"| {category} | {len(cat_papers)} |\n")
        
        f.write("\n## 各方向论文列表\n\n")
        
        for category, cat_papers in categorized.items():
            if len(cat_papers) > 0:
                f.write(f"### {category} ({len(cat_papers)} 篇)\n\n")
                for i, paper in enumerate(cat_papers, 1):
                    paper_id = paper['id']
                    full_paper = paper_map.get(paper_id, paper)
                    
                    authors = ', '.join(paper['authors'][:3])
                    if len(paper['authors']) > 3:
                        authors += ' et al.'
                    
                    f.write(f"{i}. **{paper['title']}**\n")
                    f.write(f"   - 作者: {authors}\n")
                    f.write(f"   - ID: {paper['id']}\n")
                    
                    # 添加英文摘要
                    if full_paper.get('abstract_en'):
                        abstract_en = full_paper['abstract_en']
                        if len(abstract_en) > 300:
                            abstract_en = abstract_en[:300] + "..."
                        f.write(f"   - 摘要(英文): {abstract_en}\n")
                    
                    # 添加中文摘要
                    if full_paper.get('abstract_zh'):
                        abstract_zh = full_paper['abstract_zh']
                        if len(abstract_zh) > 300:
                            abstract_zh = abstract_zh[:300] + "..."
                        f.write(f"   - 摘要(中文): {abstract_zh}\n")
                    
                    f.write("\n")
    
    print("MD文件已生成: ACL2025_论文分类报告_含摘要.md")

if __name__ == "__main__":
    main()