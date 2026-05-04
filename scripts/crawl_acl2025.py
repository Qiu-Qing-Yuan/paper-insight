import requests
from bs4 import BeautifulSoup
import re
import json

def crawl_acl2025():
    url = "https://aclanthology.org/events/acl-2025/"
    print("正在获取ACL 2025页面...")
    response = requests.get(url)
    response.encoding = 'utf-8'
    
    print("正在解析HTML...")
    soup = BeautifulSoup(response.text, 'html.parser')
    
    papers = []
    
    # 查找所有论文条目 - 论文标题在strong标签内的a标签中
    for strong in soup.find_all('strong'):
        a_tag = strong.find('a', class_='align-middle')
        if a_tag and a_tag.get('href'):
            href = a_tag.get('href')
            # 只处理论文链接（格式如 /2025.acl-long.1/）
            if re.match(r'/2025\.[^.]+\.\d+/', href):
                title = a_tag.get_text(strip=True)
                paper_id = href.strip('/')
                
                # 获取作者信息（在strong标签后面的br标签后的a标签中）
                authors = []
                parent = strong.parent
                if parent:
                    # 找到作者链接
                    for author_link in parent.find_all('a'):
                        author_href = author_link.get('href', '')
                        if '/people/' in author_href:
                            authors.append(author_link.get_text(strip=True))
                
                papers.append({
                    'id': paper_id,
                    'title': title,
                    'authors': authors
                })
    
    print(f"共找到 {len(papers)} 篇论文")
    return papers

def categorize_papers(papers):
    """根据论文标题进行研究方向分类"""
    categories = {
        '大语言模型与生成': ['LLM', 'Large Language Model', 'GPT', 'Generative', 'Generation', 'In-context Learning', 'Prompt', 'Instruction', 'Chain-of-Thought', 'Reasoning'],
        '机器翻译': ['Translation', 'Translate', 'Machine Translation', 'MT', 'Multilingual', 'Cross-lingual'],
        '信息抽取与知识图谱': ['Extraction', 'Knowledge Graph', 'Entity', 'Relation', 'Event', 'Slot', 'Named Entity'],
        '情感分析与观点挖掘': ['Sentiment', 'Opinion', 'Emotion', 'Affective', 'Stance'],
        '问答系统与阅读理解': ['Question Answering', 'QA', 'Reading Comprehension', 'Dialogue', 'Conversation'],
        '文本分类与聚类': ['Classification', 'Categorization', 'Clustering', 'Topic'],
        '语义分析与理解': ['Semantic', 'Parsing', 'Syntax', 'Dependency', 'AMR', 'Meaning'],
        '自然语言推理与蕴含': ['Inference', 'Entailment', 'NLI', 'Natural Language Inference', 'Contradiction'],
        '摘要与文本简化': ['Summarization', 'Summary', 'Simplification', 'Compression'],
        '语音与多模态': ['Speech', 'Audio', 'Multimodal', 'Vision', 'Image', 'Visual', 'Video'],
        '低资源与跨语言': ['Low-resource', 'Few-shot', 'Zero-shot', 'Cross-lingual', 'Transfer'],
        '可信AI与安全': ['Trust', 'Safety', 'Bias', 'Fairness', 'Toxic', 'Harmful', 'Adversarial', 'Robustness'],
        '检索增强与信息检索': ['Retrieval', 'RAG', 'Search', 'Information Retrieval', 'IR'],
        '代码与程序': ['Code', 'Programming', 'Software', 'Bug'],
        '医疗与生物医学': ['Medical', 'Clinical', 'Biomedical', 'Health', 'BioNLP'],
        '教育与评估': ['Education', 'Evaluation', 'Benchmark', 'Assessment'],
        '多语言与少数民族语言': ['Multilingual', 'Minority', 'Endangered', 'African', 'Chinese', 'Arabic'],
        '其他': []
    }
    
    results = {cat: [] for cat in categories}
    
    for paper in papers:
        title = paper['title']
        categorized = False
        
        for category, keywords in categories.items():
            if category == '其他':
                continue
            for keyword in keywords:
                if keyword.lower() in title.lower():
                    results[category].append(paper)
                    categorized = True
                    break
            if categorized:
                break
        
        if not categorized:
            results['其他'].append(paper)
    
    return results

def main():
    papers = crawl_acl2025()
    
    # 保存所有论文
    with open('E:\\paper\\ACL2025\\all_papers.json', 'w', encoding='utf-8') as f:
        json.dump(papers, f, ensure_ascii=False, indent=2)
    
    # 分类论文
    print("\n正在对论文进行分类...")
    categorized = categorize_papers(papers)
    
    # 打印分类统计
    print("\n" + "="*60)
    print("ACL 2025 论文研究方向分类统计")
    print("="*60)
    
    total = 0
    for category, cat_papers in categorized.items():
        count = len(cat_papers)
        total += count
        if count > 0:
            print(f"{category}: {count} 篇")
    
    print(f"\n总计: {total} 篇论文")
    
    # 保存分类结果
    with open('E:\\paper\\ACL2025\\categorized_papers.json', 'w', encoding='utf-8') as f:
        json.dump(categorized, f, ensure_ascii=False, indent=2)
    
    # 生成Markdown报告
    with open('E:\\paper\\ACL2025\\ACL2025_论文分类报告.md', 'w', encoding='utf-8') as f:
        f.write("# ACL 2025 论文研究方向分类报告\n\n")
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
                    authors = ', '.join(paper['authors'][:3])
                    if len(paper['authors']) > 3:
                        authors += ' et al.'
                    f.write(f"{i}. **{paper['title']}**\n")
                    f.write(f"   - 作者: {authors}\n")
                    f.write(f"   - ID: {paper['id']}\n\n")
    
    print(f"\n文件已保存:")
    print(f"  - all_papers.json: 所有论文数据")
    print(f"  - categorized_papers.json: 分类后的论文数据")
    print(f"  - ACL2025_论文分类报告.md: 分类报告")

if __name__ == "__main__":
    main()