import requests
from bs4 import BeautifulSoup
import json
import time
import re
from concurrent.futures import ThreadPoolExecutor, as_completed

def get_abstract_from_page(paper_id):
    """从ACL Anthology页面获取论文摘要"""
    # 构建摘要ID格式
    abstract_id = f"abstract-{paper_id.replace('.', '--').replace('/', '')}"
    
    # 获取整个事件页面
    url = "https://aclanthology.org/events/acl-2025/"
    try:
        response = requests.get(url, timeout=30)
        response.encoding = 'utf-8'
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # 查找摘要div
        abstract_div = soup.find('div', id=abstract_id)
        if abstract_div:
            # 提取摘要文本
            abstract_text = abstract_div.get_text(strip=True)
            return abstract_text
    except Exception as e:
        print(f"获取摘要失败 {paper_id}: {e}")
    
    return ""

def get_abstracts_from_html(html_content):
    """从HTML内容中批量提取所有摘要"""
    soup = BeautifulSoup(html_content, 'html.parser')
    abstracts = {}
    
    # 查找所有摘要div
    for div in soup.find_all('div', id=re.compile(r'^abstract-')):
        abstract_id = div.get('id', '')
        # 转换ID格式: abstract-2025--acl-long--1 -> 2025.acl-long.1
        paper_id = abstract_id.replace('abstract-', '').replace('--', '.')
        abstract_text = div.get_text(strip=True)
        abstracts[paper_id] = abstract_text
    
    return abstracts

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
            'q': text
        }
        response = requests.get(url, params=params, timeout=10)
        result = response.json()
        
        # 提取翻译结果
        translated = ''.join([item[0] for item in result[0] if item[0]])
        return translated
    except Exception as e:
        print(f"翻译失败: {e}")
        return text  # 返回原文

def main():
    print("正在获取ACL 2025页面...")
    url = "https://aclanthology.org/events/acl-2025/"
    response = requests.get(url, timeout=60)
    response.encoding = 'utf-8'
    html_content = response.text
    
    print("正在提取所有摘要...")
    abstracts = get_abstracts_from_html(html_content)
    print(f"共找到 {len(abstracts)} 篇论文的摘要")
    
    # 加载已有的论文数据
    with open('E:\\paper\\ACL2025\\all_papers.json', 'r', encoding='utf-8') as f:
        papers = json.load(f)
    
    # 为每篇论文添加摘要
    print("正在为每篇论文添加摘要...")
    for paper in papers:
        paper_id = paper['id']
        if paper_id in abstracts:
            paper['abstract_en'] = abstracts[paper_id]
        else:
            paper['abstract_en'] = ""
    
    # 保存更新后的论文数据
    with open('E:\\paper\\ACL2025\\all_papers_with_abstracts.json', 'w', encoding='utf-8') as f:
        json.dump(papers, f, ensure_ascii=False, indent=2)
    
    print(f"已保存 {len(papers)} 篇论文数据（含摘要）")
    
    # 翻译摘要（只翻译前100篇作为示例，因为全部翻译需要很长时间）
    print("\n正在翻译摘要（示例：前100篇）...")
    sample_papers = papers[:100]
    
    for i, paper in enumerate(sample_papers):
        if paper.get('abstract_en'):
            print(f"翻译第 {i+1}/100 篇: {paper['title'][:50]}...")
            paper['abstract_zh'] = translate_text(paper['abstract_en'])
            time.sleep(0.1)  # 避免请求过快
    
    # 保存翻译后的数据
    with open('E:\\paper\\ACL2025\\sample_translated.json', 'w', encoding='utf-8') as f:
        json.dump(sample_papers, f, ensure_ascii=False, indent=2)
    
    print("翻译完成！已保存到 sample_translated.json")

if __name__ == "__main__":
    main()