import json
import sys

def main():
    print("正在加载数据...")
    with open('E:\\paper\\ACL2025\\data\\all_papers_final.json', 'r', encoding='utf-8') as f:
        papers = json.load(f)

    print("正在压缩数据...")
    mini_papers = []
    for p in papers:
        mini_papers.append({
            'id': p.get('id', ''),
            'title': p.get('title', ''),
            'authors': p.get('authors', [])[:5],
            'venue': p.get('venue', ''),
            'category': p.get('category', ''),
            'abstract_en': (p.get('abstract_en', '') or '')[:800],
            'abstract_zh': (p.get('abstract_zh', '') or '')[:800]
        })

    data_json = json.dumps(mini_papers, ensure_ascii=False)
    print(f"数据大小: {len(data_json) / 1024 / 1024:.1f} MB")

    html = r'''<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ACL 2025 论文数据分析</title>
<script src="https://cdn.jsdelivr.net/npm/echarts@5.5.1/dist/echarts.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/echarts-wordcloud@2.1.0/dist/echarts-wordcloud.min.js"></script>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Microsoft YaHei',sans-serif;background:#0f1923;color:#e0e6ed;min-height:100vh}
.header{background:linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%);padding:0;position:sticky;top:0;z-index:100;border-bottom:1px solid rgba(255,255,255,0.08)}
.header-inner{max-width:1400px;margin:0 auto;padding:0 30px;display:flex;justify-content:space-between;align-items:center;height:64px}
.logo{font-size:22px;font-weight:700;background:linear-gradient(135deg,#667eea,#764ba2);-webkit-background-clip:text;-webkit-text-fill-color:transparent;letter-spacing:1px}
.nav{display:flex;gap:6px}
.nav a{color:rgba(255,255,255,0.6);text-decoration:none;padding:8px 18px;border-radius:8px;transition:all 0.3s;cursor:pointer;font-size:14px;font-weight:500}
.nav a:hover{color:#fff;background:rgba(255,255,255,0.08)}
.nav a.active{color:#fff;background:linear-gradient(135deg,#667eea,#764ba2);box-shadow:0 4px 15px rgba(102,126,234,0.4)}
.main{max-width:1400px;margin:0 auto;padding:30px}
.page{display:none;animation:fadeIn 0.3s ease}
.page.active{display:block}
@keyframes fadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
.stats-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;margin-bottom:30px}
.stat-card{background:linear-gradient(135deg,rgba(102,126,234,0.15),rgba(118,75,162,0.15));border:1px solid rgba(102,126,234,0.2);border-radius:16px;padding:24px;text-align:center;transition:transform 0.3s,box-shadow 0.3s}
.stat-card:hover{transform:translateY(-4px);box-shadow:0 8px 30px rgba(102,126,234,0.2)}
.stat-number{font-size:36px;font-weight:800;background:linear-gradient(135deg,#667eea,#764ba2);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.stat-label{color:rgba(255,255,255,0.5);margin-top:6px;font-size:13px;font-weight:500}
.card{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:24px;margin-bottom:20px;backdrop-filter:blur(10px)}
.card-title{font-size:16px;font-weight:700;color:#fff;margin-bottom:20px;display:flex;align-items:center;gap:10px}
.card-title::before{content:'';width:4px;height:20px;background:linear-gradient(180deg,#667eea,#764ba2);border-radius:2px}
.chart-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(450px,1fr));gap:20px;margin-bottom:20px}
.chart-box{height:380px}
.filters{display:flex;flex-wrap:wrap;gap:14px;margin-bottom:20px}
.filter-group{flex:1;min-width:160px}
.filter-group label{display:block;font-weight:600;margin-bottom:6px;color:rgba(255,255,255,0.6);font-size:13px}
.filter-group select,.filter-group input{width:100%;padding:10px 14px;border:1px solid rgba(255,255,255,0.12);border-radius:10px;font-size:14px;background:rgba(255,255,255,0.06);color:#fff;transition:border-color 0.3s}
.filter-group select option{background:#1a1a2e;color:#fff}
.filter-group select:focus,.filter-group input:focus{outline:none;border-color:#667eea}
.filter-group input::placeholder{color:rgba(255,255,255,0.3)}
.btn{padding:10px 22px;border:none;border-radius:10px;font-size:14px;font-weight:600;cursor:pointer;transition:all 0.3s}
.btn-primary{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;box-shadow:0 4px 15px rgba(102,126,234,0.3)}
.btn-primary:hover{box-shadow:0 6px 20px rgba(102,126,234,0.5);transform:translateY(-1px)}
.btn-secondary{background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.8);border:1px solid rgba(255,255,255,0.12)}
.paper-item{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:14px;padding:20px;margin-bottom:10px;cursor:pointer;transition:all 0.3s;border-left:3px solid transparent}
.paper-item:hover{background:rgba(255,255,255,0.06);border-left-color:#667eea;box-shadow:0 4px 20px rgba(0,0,0,0.2)}
.paper-title{font-size:15px;font-weight:600;color:#fff;margin-bottom:8px;line-height:1.5}
.paper-meta{display:flex;flex-wrap:wrap;gap:10px;align-items:center}
.venue-badge{padding:3px 10px;border-radius:20px;font-size:11px;font-weight:600}
.venue-main{background:rgba(52,168,83,0.2);color:#34a853;border:1px solid rgba(52,168,83,0.3)}
.venue-findings{background:rgba(251,188,4,0.2);color:#fbbc04;border:1px solid rgba(251,188,4,0.3)}
.venue-workshop{background:rgba(66,133,244,0.2);color:#4285f4;border:1px solid rgba(66,133,244,0.3)}
.venue-other{background:rgba(156,39,176,0.2);color:#ce93d8;border:1px solid rgba(156,39,176,0.3)}
.sub-badge{padding:3px 10px;border-radius:20px;font-size:11px;font-weight:500;background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.6);border:1px solid rgba(255,255,255,0.1)}
.paper-authors{color:rgba(255,255,255,0.4);font-size:13px}
.pagination{display:flex;justify-content:center;gap:8px;margin-top:24px}
.page-btn{padding:8px 14px;border:1px solid rgba(255,255,255,0.12);background:rgba(255,255,255,0.04);border-radius:8px;cursor:pointer;font-weight:600;color:rgba(255,255,255,0.7);transition:all 0.3s}
.page-btn:hover{border-color:#667eea;color:#667eea}
.page-btn.active{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;border-color:transparent}
.page-btn.disabled{opacity:0.3;cursor:not-allowed}
.result-info{color:rgba(255,255,255,0.4);margin-bottom:14px;font-size:14px}
.detail-title{font-size:22px;font-weight:700;color:#fff;line-height:1.5;margin-bottom:16px}
.detail-meta{display:flex;flex-wrap:wrap;gap:14px;margin-bottom:20px}
.abstract-section{margin-bottom:20px}
.abstract-label{font-size:15px;font-weight:700;color:#667eea;margin-bottom:10px}
.abstract-content{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);padding:18px;border-radius:12px;line-height:1.8;color:rgba(255,255,255,0.75);font-size:14px}
.back-btn{display:inline-flex;align-items:center;gap:8px;margin-bottom:20px}
.no-data{text-align:center;padding:50px;color:rgba(255,255,255,0.3)}
.home-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}
.home-card{padding:24px;border-radius:14px;cursor:pointer;transition:all 0.3s;border:1px solid rgba(255,255,255,0.08)}
.home-card:hover{transform:translateY(-4px);box-shadow:0 8px 30px rgba(0,0,0,0.3)}
.home-card-icon{font-size:32px;margin-bottom:12px}
.home-card-title{font-weight:700;margin-bottom:8px;font-size:15px;color:#fff}
.home-card-desc{color:rgba(255,255,255,0.45);font-size:13px;line-height:1.6}
.rank-list{list-style:none}
.rank-item{display:flex;align-items:center;padding:11px 0;border-bottom:1px solid rgba(255,255,255,0.06)}
.rank-num{width:30px;height:30px;background:rgba(102,126,234,0.2);color:#667eea;border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:800;margin-right:14px;font-size:13px}
.rank-num.top3{background:linear-gradient(135deg,#ff6d00,#ff9100);color:#fff}
.rank-name{flex:1;font-weight:500;color:rgba(255,255,255,0.8);font-size:14px}
.rank-count{color:rgba(255,255,255,0.4);font-weight:600;font-size:13px}
.wordcloud-tabs{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:20px}
.wc-tab{padding:8px 16px;border-radius:10px;cursor:pointer;font-size:13px;font-weight:600;background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.5);border:1px solid rgba(255,255,255,0.08);transition:all 0.3s}
.wc-tab:hover{background:rgba(255,255,255,0.1);color:#fff}
.wc-tab.active{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;border-color:transparent}
.lang-toggle{display:inline-flex;border-radius:10px;overflow:hidden;border:1px solid rgba(255,255,255,0.12);margin-bottom:16px}
.lang-btn{padding:8px 20px;cursor:pointer;font-size:13px;font-weight:600;background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.5);border:none;transition:all 0.3s}
.lang-btn:hover{background:rgba(255,255,255,0.1);color:#fff}
.lang-btn.active{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff}
.wc-canvas{width:100%;height:500px;border-radius:12px;background:rgba(0,0,0,0.2)}
.cat-group{margin-bottom:24px}
.cat-group-title{font-size:15px;font-weight:700;color:rgba(255,255,255,0.9);margin-bottom:12px;padding:8px 14px;background:rgba(102,126,234,0.12);border-radius:10px;border-left:3px solid #667eea}
.cat-group-items{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:10px}
.sub-item{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:14px 18px;cursor:pointer;transition:all 0.3s;display:flex;justify-content:space-between;align-items:center}
.sub-item:hover{background:rgba(255,255,255,0.08);border-color:rgba(102,126,234,0.3);transform:translateY(-2px)}
.sub-item-name{font-weight:500;color:rgba(255,255,255,0.8);font-size:14px}
.sub-item-count{color:#667eea;font-weight:700;font-size:14px}
@media(max-width:1024px){.stats-grid{grid-template-columns:repeat(3,1fr)}.chart-grid{grid-template-columns:1fr}}
@media(max-width:768px){.stats-grid{grid-template-columns:repeat(2,1fr)}.filters{flex-direction:column}.filter-group{width:100%}.nav{gap:4px}.nav a{padding:6px 10px;font-size:13px}.wc-canvas{height:350px}.cat-group-items{grid-template-columns:1fr}}
</style>
</head>
<body>
<div class="header">
<div class="header-inner">
<div class="logo">ACL 2025</div>
<div class="nav">
<a class="active" onclick="showPage('home')">首页</a>
<a onclick="showPage('list')">论文列表</a>
<a onclick="showPage('wordcloud')">词云分析</a>
<a onclick="showPage('charts')">统计图表</a>
</div>
</div>
</div>
<div class="main">

<div id="homePage" class="page active">
<div class="stats-grid" id="statsGrid"></div>
<div class="card">
<div class="card-title">快速导航</div>
<div class="home-cards">
<div class="home-card" style="background:linear-gradient(135deg,rgba(102,126,234,0.15),rgba(102,126,234,0.05))" onclick="showPage('list')">
<div class="home-card-icon">📋</div>
<div class="home-card-title">论文浏览</div>
<div class="home-card-desc">按细分方向、会议类别筛选，支持关键词搜索</div>
</div>
<div class="home-card" style="background:linear-gradient(135deg,rgba(118,75,162,0.15),rgba(118,75,162,0.05))" onclick="showPage('wordcloud')">
<div class="home-card-icon">☁️</div>
<div class="home-card-title">词云分析</div>
<div class="home-card-desc">全局与各细分方向词云，中英文切换</div>
</div>
<div class="home-card" style="background:linear-gradient(135deg,rgba(234,67,53,0.15),rgba(234,67,53,0.05))" onclick="showPage('charts')">
<div class="home-card-icon">📊</div>
<div class="home-card-title">统计图表</div>
<div class="home-card-desc">细分方向分布、会议类别、热力图等</div>
</div>
</div>
</div>
<div class="card">
<div class="card-title">细分研究方向概览</div>
<div id="subcatOverview"></div>
</div>
</div>

<div id="listPage" class="page">
<div class="card">
<div class="card-title">筛选条件</div>
<div class="filters">
<div class="filter-group"><label>一级方向</label><select id="filterCategory"><option value="">全部方向</option></select></div>
<div class="filter-group"><label>细分方向</label><select id="filterSubcategory"><option value="">全部细分</option></select></div>
<div class="filter-group"><label>会议类别</label><select id="filterVenue"><option value="">全部类别</option><option value="主会">主会</option><option value="Findings">Findings</option><option value="Workshop">Workshop</option></select></div>
<div class="filter-group"><label>关键词搜索</label><input type="text" id="filterSearch" placeholder="搜索标题、摘要..."></div>
<div class="filter-group" style="flex:0;min-width:auto;display:flex;gap:10px;align-items:flex-end">
<button class="btn btn-primary" onclick="filterPapers()">筛选</button>
<button class="btn btn-secondary" onclick="resetFilters()">重置</button>
</div>
</div>
</div>
<div class="result-info" id="resultInfo"></div>
<div id="paperList"></div>
<div class="pagination" id="pagination"></div>
</div>

<div id="detailPage" class="page"><div id="paperDetail"></div></div>

<div id="wordcloudPage" class="page">
<div class="card">
<div class="card-title">词云分析</div>
<p style="color:rgba(255,255,255,0.45);margin-bottom:16px;font-size:14px">支持中英文切换，点击标签切换不同方向的词云</p>
<div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin-bottom:16px">
<div class="lang-toggle">
<button class="lang-btn active" onclick="switchLang('en',this)">English</button>
<button class="lang-btn" onclick="switchLang('zh',this)">中文</button>
</div>
</div>
<div class="wordcloud-tabs" id="wcTabs"></div>
<div id="wcCanvas" class="wc-canvas"></div>
</div>
<div class="chart-grid">
<div class="card"><div class="card-title">高频关键词 Top 30</div><div class="chart-box" id="chartKeywordsBar"></div></div>
<div class="card"><div class="card-title">各细分方向关键词数量</div><div class="chart-box" id="chartKeywordsCount"></div></div>
</div>
</div>

<div id="chartsPage" class="page">
<div class="chart-grid">
<div class="card"><div class="card-title">细分方向分布 (Top 20)</div><div class="chart-box" id="chartSubcategory" style="height:500px"></div></div>
<div class="card"><div class="card-title">会议类别分布</div><div class="chart-box" id="chartVenue"></div></div>
</div>
<div class="chart-grid">
<div class="card"><div class="card-title">主会论文占比 (细分方向)</div><div class="chart-box" id="chartMainRatio" style="height:500px"></div></div>
<div class="card"><div class="card-title">细分方向 × 会议类别</div><div class="chart-box" id="chartHeatmap" style="height:500px"></div></div>
</div>
<div class="chart-grid">
<div class="card"><div class="card-title">热门细分方向 Top 20</div><ol class="rank-list" id="rankList"></ol></div>
<div class="card"><div class="card-title">主会论文占比最高的细分方向</div><ol class="rank-list" id="mainRatioList"></ol></div>
</div>
</div>

</div>

<script>
const allPapers = DATA_PLACEHOLDER;
let filteredPapers = [];
let categories = {};
let subcategories = {};
let catSubMap = {};
let currentPage = 1;
const pageSize = 20;
let chartsRendered = false;
let wcRendered = false;
let wcChart = null;
let currentLang = 'en';
let currentWCCat = 'all';

// ===== 细分方向分类规则 =====
var subRules = [
    // LLM大类细分
    {cat:'LLM与生成',sub:'LLM评测与基准',test:/eval|benchmark|evaluat|assess|leaderboard|arena|rating/i},
    {cat:'LLM与生成',sub:'推理与思维链',test:/reason|chain.of.thought|CoT|logical|math|arithmeti|theorem/i},
    {cat:'LLM与生成',sub:'代码生成与理解',test:/code|program|coding|software|repo|github|compile|debug/i},
    {cat:'LLM与生成',sub:'提示与上下文学习',test:/prompt|in-context|ICL|few-shot|zero-shot|demonstration/i},
    {cat:'LLM与生成',sub:'指令微调与对齐',test:/instruct|alignment|align|RLHF|DPO|preference|reward|fine-tun|finetun/i},
    {cat:'LLM与生成',sub:'智能体与工具',test:/agent|tool.use|function.call|planning|autonomous|multi.agent/i},
    {cat:'LLM与生成',sub:'知识编辑与更新',test:/knowledge.edit|edit.fact|update.knowledge|unlearn|forget/i},
    {cat:'LLM与生成',sub:'高效推理与压缩',test:/efficient|quantiz|prun|distill|compress|accelerat|inference.speed|speculative.decod|KV.cache|low.rank|LoRA/i},
    {cat:'LLM与生成',sub:'幻觉与事实性',test:/hallucin|fact|faithful|grounded|factual/i},
    {cat:'LLM与生成',sub:'数据合成与增强',test:/synthetic|data.augment|generat.data|self.instruct|data.synth/i},
    {cat:'LLM与生成',sub:'长文本处理',test:/long.context|long.document|context.window|extend.context|rope|position/i},
    {cat:'LLM与生成',sub:'模型融合与路由',test:/merg|mixture.of.expert|MoE|routing|ensemble/i},
    {cat:'LLM与生成',sub:'安全与可控生成',test:/safety|jailbreak|guard|toxic|detoxi|censor|red.team/i},
    {cat:'LLM与生成',sub:'文本生成',test:/generat|produce|create|output/i},
    // 机器翻译细分
    {cat:'机器翻译',sub:'同声传译',test:/simultaneous|speech.translation|spoken|streaming/i},
    {cat:'机器翻译',sub:'翻译质量评估',test:/translation.quality|MT.eval|BLEU|COMET|post.edit/i},
    {cat:'机器翻译',sub:'机器翻译',test:/translat|MT\b|machine.translation/i},
    // 语音与多模态细分
    {cat:'语音与多模态',sub:'语音合成与转换',test:/TTS|text.to.speech|speech.synth|voice|vocoder|vocal/i},
    {cat:'语音与多模态',sub:'语音识别与理解',test:/ASR|speech.recogni|speech.understand|whisper|transcri/i},
    {cat:'语音与多模态',sub:'视觉语言模型',test:/VLM|visual.language|LVLM|vision.language|image.understand/i},
    {cat:'语音与多模态',sub:'视频理解',test:/video|temporal.visual|frame/i},
    {cat:'语音与多模态',sub:'多模态融合',test:/multimodal|multi.modal|cross.modal|audio.visual/i},
    // 问答与对话细分
    {cat:'问答与对话',sub:'对话系统',test:/dialogue|conversation|chat|multi.turn/i},
    {cat:'问答与对话',sub:'阅读理解',test:/reading.comprehension|passage|document.QA/i},
    {cat:'问答与对话',sub:'问答系统',test:/question.answer|QA\b|open.domain/i},
    // 检索与RAG细分
    {cat:'检索与RAG',sub:'检索增强生成',test:/RAG|retrieval.augment|retrieval.generat/i},
    {cat:'检索与RAG',sub:'信息检索',test:/information.retriev|IR\b|dense.retriev|sparse.retriev|passage.retriev/i},
    {cat:'检索与RAG',sub:'知识检索',test:/knowledge.retriev|entity.retriev|fact.retriev/i},
    // 信息抽取细分
    {cat:'信息抽取',sub:'命名实体识别',test:/NER|named.entity|entity.recogni/i},
    {cat:'信息抽取',sub:'关系抽取',test:/relation.extract|RE\b|relation.classif/i},
    {cat:'信息抽取',sub:'事件抽取',test:/event.extract|event.detect|event.argument|EE\b/i},
    {cat:'信息抽取',sub:'知识图谱',test:/knowledge.graph|KG\b|triple|ontology/i},
    {cat:'信息抽取',sub:'信息抽取',test:/extract|slot.fill/i},
    // 情感分析细分
    {cat:'情感分析',sub:'立场检测',test:/stance|claim|argument/i},
    {cat:'情感分析',sub:'观点挖掘',test:/opinion|aspect.based|ABSA|review/i},
    {cat:'情感分析',sub:'情感分析',test:/sentiment|emotion|affective|feeling/i},
    // 可信AI细分
    {cat:'可信AI',sub:'偏见与公平',test:/bias|fairness|discriminat|stereotyp|gender.bias|demograph/i},
    {cat:'可信AI',sub:'对抗攻击与鲁棒',test:/adversarial|robust|attack|defense|backdoor|poison/i},
    {cat:'可信AI',sub:'隐私保护',test:/privacy|differential.privacy|federated|anonymi/i},
    {cat:'可信AI',sub:'水印与检测',test:/watermark|detect.machine|AI.generated|plagiarism/i},
    {cat:'可信AI',sub:'可信AI',test:/trust|safety|toxic|harmful|ethic|responsible/i},
    // NLP基础任务细分
    {cat:'NLP基础',sub:'语义解析',test:/semantic.pars|AMR|dependency.pars|constituency|CCG/i},
    {cat:'NLP基础',sub:'自然语言推理',test:/NLI|entailment|inference|contradiction/i},
    {cat:'NLP基础',sub:'文本分类与聚类',test:/classif|categor|cluster|topic.model/i},
    {cat:'NLP基础',sub:'语义相似度',test:/semantic.similar|sentence.embed|text.similar|STS|paraphras/i},
    {cat:'NLP基础',sub:'语法纠错',test:/grammatical.error|GEC|grammar.correct/i},
    // 摘要与生成细分
    {cat:'摘要与生成',sub:'文本摘要',test:/summar|summary|abstract.generat/i},
    {cat:'摘要与生成',sub:'文本简化',test:/simplif|readab|paraphras|edit/i},
    // 代码与程序细分
    {cat:'代码与程序',sub:'代码生成',test:/code.gen|program.synth|code.complet/i},
    {cat:'代码与程序',sub:'代码理解与修复',test:/code.understand|code.repair|bug.fix|vulnerability|code.review/i},
    // 医疗与生物细分
    {cat:'医疗与生物',sub:'临床NLP',test:/clinical|EHR|patient|medical.record|discharge/i},
    {cat:'医疗与生物',sub:'生物医学NLP',test:/biomed|bioNLP|gene|protein|drug|clinical.trial/i},
    // 教育与评估细分
    {cat:'教育与评估',sub:'教育应用',test:/educat|tutor|learn|student|teach|pedagog/i},
    {cat:'教育与评估',sub:'评估方法',test:/evaluat|metric|human.eval|automatic.eval|annotation/i},
    // 跨语言与低资源细分
    {cat:'跨语言与低资源',sub:'跨语言迁移',test:/cross.lingual|transfer|multilingual|language.transfer/i},
    {cat:'跨语言与低资源',sub:'低资源语言',test:/low.resource|endanger|minority|under.resource|African|indigenous/i},
];

var mainCatMap = {
    'LLM与生成':'LLM与生成','机器翻译':'机器翻译','语音与多模态':'语音与多模态',
    '问答与对话':'问答与对话','检索与RAG':'检索与RAG','信息抽取':'信息抽取',
    '情感分析':'情感分析','可信AI':'可信AI','NLP基础':'NLP基础',
    '摘要与生成':'摘要与生成','代码与程序':'代码与程序','医疗与生物':'医疗与生物',
    '教育与评估':'教育与评估','跨语言与低资源':'跨语言与低资源','其他':'其他'
};

function categorizeDetailed(title, abstract) {
    var t = ((title || '') + ' ' + (abstract || '')).toLowerCase();
    for (var i = 0; i < subRules.length; i++) {
        if (subRules[i].test.test(t)) return {category: subRules[i].cat, subcategory: subRules[i].sub};
    }
    // fallback: 尝试用老分类匹配主类别
    if (/translat/i.test(t)) return {category:'机器翻译', subcategory:'机器翻译'};
    if (/sentiment|opinion|emotion/i.test(t)) return {category:'情感分析', subcategory:'情感分析'};
    if (/question.answer|QA\b|dialogue|conversation/i.test(t)) return {category:'问答与对话', subcategory:'问答系统'};
    if (/retriev|rag|search/i.test(t)) return {category:'检索与RAG', subcategory:'信息检索'};
    if (/extract|entity|relation|event|knowledge.graph/i.test(t)) return {category:'信息抽取', subcategory:'信息抽取'};
    if (/speech|audio|multimodal|vision|image|visual/i.test(t)) return {category:'语音与多模态', subcategory:'多模态融合'};
    if (/summar/i.test(t)) return {category:'摘要与生成', subcategory:'文本摘要'};
    if (/classif|categor/i.test(t)) return {category:'NLP基础', subcategory:'文本分类与聚类'};
    if (/semantic|pars|syntax/i.test(t)) return {category:'NLP基础', subcategory:'语义解析'};
    if (/inference|entailment|NLI/i.test(t)) return {category:'NLP基础', subcategory:'自然语言推理'};
    if (/code|program/i.test(t)) return {category:'代码与程序', subcategory:'代码生成'};
    if (/medical|clinical|biomedical/i.test(t)) return {category:'医疗与生物', subcategory:'临床NLP'};
    if (/education|evaluat|benchmark/i.test(t)) return {category:'教育与评估', subcategory:'评估方法'};
    if (/trust|safety|bias|fairness|toxic/i.test(t)) return {category:'可信AI', subcategory:'可信AI'};
    if (/low.resource|few.shot|zero.shot/i.test(t)) return {category:'跨语言与低资源', subcategory:'低资源语言'};
    if (/llm|large.language|gpt|generat|prompt|in-context|instruction|reasoning/i.test(t)) return {category:'LLM与生成', subcategory:'文本生成'};
    return {category:'其他', subcategory:'其他'};
}

function showPage(page) {
    document.querySelectorAll('.page').forEach(function(p){p.classList.remove('active')});
    document.querySelectorAll('.nav a').forEach(function(a){a.classList.remove('active')});
    document.getElementById(page + 'Page').classList.add('active');
    var navMap = {home:'首页',list:'论文列表',wordcloud:'词云分析',charts:'统计图表'};
    document.querySelectorAll('.nav a').forEach(function(a){if(a.textContent===navMap[page])a.classList.add('active')});
    if (page === 'list' && filteredPapers.length === 0) { filteredPapers = allPapers.slice(); renderPaperList(); }
    if (page === 'wordcloud' && !wcRendered) { renderWordcloudPage(); wcRendered = true; }
    if (page === 'charts' && !chartsRendered) { renderChartsPage(); chartsRendered = true; }
}

function processData() {
    allPapers.forEach(function(paper) {
        var result = categorizeDetailed(paper.title, paper.abstract_en);
        paper.category = result.category;
        paper.subcategory = result.subcategory;
        categories[paper.category] = (categories[paper.category] || 0) + 1;
        subcategories[paper.subcategory] = (subcategories[paper.subcategory] || 0) + 1;
        if (!catSubMap[paper.category]) catSubMap[paper.category] = {};
        catSubMap[paper.category][paper.subcategory] = (catSubMap[paper.category][paper.subcategory] || 0) + 1;
    });
}

function renderStats() {
    var mainCount = allPapers.filter(function(p){return p.venue && p.venue.indexOf('主会')===0}).length;
    var findingsCount = allPapers.filter(function(p){return p.venue==='Findings'}).length;
    var translatedCount = allPapers.filter(function(p){return p.abstract_zh}).length;
    document.getElementById('statsGrid').innerHTML =
        '<div class="stat-card"><div class="stat-number">' + allPapers.length + '</div><div class="stat-label">总论文数</div></div>' +
        '<div class="stat-card"><div class="stat-number">' + mainCount + '</div><div class="stat-label">主会论文</div></div>' +
        '<div class="stat-card"><div class="stat-number">' + findingsCount + '</div><div class="stat-label">Findings</div></div>' +
        '<div class="stat-card"><div class="stat-number">' + Object.keys(subcategories).length + '</div><div class="stat-label">细分方向</div></div>' +
        '<div class="stat-card"><div class="stat-number">' + translatedCount + '</div><div class="stat-label">已翻译</div></div>';
}

function renderSubcatOverview() {
    var cats = Object.keys(catSubMap).sort(function(a,b){return categories[b]-categories[a]});
    var html = '';
    cats.forEach(function(cat) {
        var subs = Object.entries(catSubMap[cat]).sort(function(a,b){return b[1]-a[1]});
        html += '<div class="cat-group"><div class="cat-group-title">' + cat + ' (' + categories[cat] + ' 篇)</div><div class="cat-group-items">';
        subs.forEach(function(item) {
            html += '<div class="sub-item" onclick="searchSubcategory(&quot;'+item[0]+'&quot;)"><span class="sub-item-name">' + item[0] + '</span><span class="sub-item-count">' + item[1] + '</span></div>';
        });
        html += '</div></div>';
    });
    document.getElementById('subcatOverview').innerHTML = html;
}

function initFilters() {
    var catSelect = document.getElementById('filterCategory');
    Object.keys(catSubMap).sort(function(a,b){return categories[b]-categories[a]}).forEach(function(cat) {
        var opt = document.createElement('option');
        opt.value = cat; opt.textContent = cat + ' (' + categories[cat] + ')';
        catSelect.appendChild(opt);
    });
    catSelect.addEventListener('change', function() {
        updateSubcatFilter(this.value);
        filterPapers();
    });
    document.getElementById('filterSubcategory').addEventListener('change', function() { filterPapers(); });
    document.getElementById('filterVenue').addEventListener('change', function() { filterPapers(); });
}

function updateSubcatFilter(cat) {
    var subSelect = document.getElementById('filterSubcategory');
    subSelect.innerHTML = '<option value="">全部细分</option>';
    if (!cat) {
        Object.keys(subcategories).sort(function(a,b){return subcategories[b]-subcategories[a]}).forEach(function(sub) {
            var opt = document.createElement('option');
            opt.value = sub; opt.textContent = sub + ' (' + subcategories[sub] + ')';
            subSelect.appendChild(opt);
        });
    } else {
        Object.entries(catSubMap[cat]||{}).sort(function(a,b){return b[1]-a[1]}).forEach(function(item) {
            var opt = document.createElement('option');
            opt.value = item[0]; opt.textContent = item[0] + ' (' + item[1] + ')';
            subSelect.appendChild(opt);
        });
    }
}

function filterPapers() {
    var category = document.getElementById('filterCategory').value;
    var subcategory = document.getElementById('filterSubcategory').value;
    var venue = document.getElementById('filterVenue').value;
    var search = document.getElementById('filterSearch').value.toLowerCase();
    filteredPapers = allPapers.filter(function(paper) {
        if (category && paper.category !== category) return false;
        if (subcategory && paper.subcategory !== subcategory) return false;
        if (venue) {
            if (venue === '主会' && !(paper.venue && paper.venue.indexOf('主会')===0)) return false;
            if (venue === 'Findings' && paper.venue !== 'Findings') return false;
            if (venue === 'Workshop' && !(paper.venue && paper.venue.indexOf('Workshop')===0)) return false;
        }
        if (search) {
            var text = (paper.title + ' ' + (paper.abstract_en||'') + ' ' + (paper.abstract_zh||'')).toLowerCase();
            if (text.indexOf(search) === -1) return false;
        }
        return true;
    });
    currentPage = 1; renderPaperList();
}

function resetFilters() {
    document.getElementById('filterCategory').value = '';
    document.getElementById('filterSubcategory').value = '';
    document.getElementById('filterVenue').value = '';
    document.getElementById('filterSearch').value = '';
    updateSubcatFilter('');
    filteredPapers = allPapers.slice(); currentPage = 1; renderPaperList();
}

function searchCategory(cat) {
    showPage('list');
    document.getElementById('filterCategory').value = cat;
    updateSubcatFilter(cat);
    filterPapers();
}

function searchSubcategory(sub) {
    showPage('list');
    document.getElementById('filterSubcategory').value = sub;
    filterPapers();
}

function renderPaperList() {
    var start = (currentPage-1)*pageSize, end = start+pageSize;
    var pagePapers = filteredPapers.slice(start, end);
    document.getElementById('resultInfo').textContent = '共 ' + filteredPapers.length + ' 篇，第 ' + currentPage + ' / ' + Math.max(1,Math.ceil(filteredPapers.length/pageSize)) + ' 页';
    var container = document.getElementById('paperList');
    if (pagePapers.length === 0) { container.innerHTML = '<div class="no-data">没有匹配的论文</div>'; document.getElementById('pagination').innerHTML = ''; return; }
    container.innerHTML = pagePapers.map(function(paper) {
        var vc = paper.venue && paper.venue.indexOf('主会')===0 ? 'venue-main' : paper.venue==='Findings' ? 'venue-findings' : paper.venue && paper.venue.indexOf('Workshop')===0 ? 'venue-workshop' : 'venue-other';
        var authors = paper.authors ? paper.authors.slice(0,3).join(', ') : '';
        return '<div class="paper-item" onclick="showDetail('+allPapers.indexOf(paper)+')"><div class="paper-title">'+paper.title+'</div><div class="paper-meta"><span class="venue-badge '+vc+'">'+(paper.venue||'')+'</span><span class="sub-badge">'+(paper.subcategory||'')+'</span><span class="paper-authors">'+authors+'</span></div></div>';
    }).join('');
    renderPagination();
}

function renderPagination() {
    var total = Math.ceil(filteredPapers.length/pageSize);
    if (total <= 1) { document.getElementById('pagination').innerHTML = ''; return; }
    var html = '<button class="page-btn '+(currentPage===1?'disabled':'')+'" onclick="goPage('+(currentPage-1)+')">‹</button>';
    for (var i=Math.max(1,currentPage-2);i<=Math.min(total,currentPage+2);i++)
        html += '<button class="page-btn '+(i===currentPage?'active':'')+'" onclick="goPage('+i+')">'+i+'</button>';
    html += '<button class="page-btn '+(currentPage===total?'disabled':'')+'" onclick="goPage('+(currentPage+1)+')">›</button>';
    document.getElementById('pagination').innerHTML = html;
}

function goPage(page) {
    var total = Math.ceil(filteredPapers.length/pageSize);
    if (page<1||page>total) return;
    currentPage = page; renderPaperList();
    window.scrollTo({top:0,behavior:'smooth'});
}

function showDetail(index) {
    var paper = allPapers[index];
    var vc = paper.venue && paper.venue.indexOf('主会')===0 ? 'venue-main' : paper.venue==='Findings' ? 'venue-findings' : paper.venue && paper.venue.indexOf('Workshop')===0 ? 'venue-workshop' : 'venue-other';
    var authors = paper.authors ? paper.authors.join(', ') : '未知';
    document.getElementById('paperDetail').innerHTML =
        '<button class="btn btn-secondary back-btn" onclick="showPage(\'list\')">← 返回列表</button>' +
        '<div class="card"><div class="detail-title">'+paper.title+'</div>' +
        '<div class="detail-meta"><span class="venue-badge '+vc+'" style="font-size:13px;padding:5px 14px">'+(paper.venue||'')+'</span><span class="sub-badge" style="font-size:13px;padding:5px 14px">'+(paper.subcategory||'')+'</span></div>' +
        '<div style="margin-top:12px;color:rgba(255,255,255,0.6);font-size:14px"><strong>作者:</strong> '+authors+'</div>' +
        '<div style="margin-top:8px;color:rgba(255,255,255,0.6);font-size:14px"><strong>一级方向:</strong> '+paper.category+'</div>' +
        '<div style="margin-top:8px;color:rgba(255,255,255,0.6);font-size:14px"><strong>细分方向:</strong> '+paper.subcategory+'</div></div>' +
        '<div class="card"><div class="abstract-section"><div class="abstract-label">📄 英文摘要</div><div class="abstract-content">'+(paper.abstract_en||'暂无')+'</div></div></div>' +
        '<div class="card"><div class="abstract-section"><div class="abstract-label">📝 中文摘要</div><div class="abstract-content">'+(paper.abstract_zh||'暂无翻译')+'</div></div></div>';
    document.querySelectorAll('.page').forEach(function(p){p.classList.remove('active')});
    document.getElementById('detailPage').classList.add('active');
    window.scrollTo({top:0,behavior:'smooth'});
}

// ===== 关键词提取 =====
var stopWords = new Set(['the','and','for','that','this','with','from','are','was','were','been','have','has','had','not','but','what','which','who','when','where','how','all','each','every','both','few','more','most','other','some','such','than','too','very','can','will','just','should','now','their','them','they','these','those','into','about','your','would','could','might','shall','may','must','need','also','over','only','after','before','between','under','again','there','here','then','once','during','while','above','below','down','out','off','further','because','until','using','based','propose','proposed','method','methods','approach','model','models','task','tasks','data','dataset','datasets','performance','results','show','paper','work','works','new','two','first','one','well','like','make','use','used','different','without','within','across','given','high','large','small','does','did','doing','done','being','through','much','many','even','still','however','whether','several','including','existing','current','recent','et','al','compared','achieve','achieved','state','art','significantly','effective','efficiency','experimental','experiments','evaluation','benchmark','benchmarks','challenges','challenge','achieves','outperforms','superior','demonstrate','demonstrates','demonstrated','significant','improve','improved','improvement','improvements','provide','provides','provided','leverage','leveraged','leverages','shows','shown','find','finds','found','suggest','suggests','suggested','indicate','indicates','indicated','reveal','reveals','revealed','highlight','highlights','highlighted','address','addresses','addressed','tackle','tackles','tackled','tackling','solves','solved','solving','handles','handled','handling','deals','dealt','dealing','explores','explored','exploring','investigates','investigated','investigating','studies','studied','studying','analyzes','analyzed','analyzing','examines','examined','examining','presents','presented','presenting','introduces','introduced','introducing','proposes','develops','developed','developing','designs','designed','designing','builds','built','building','constructs','constructed','constructing','creates','created','creating','generates','generated','generating','produces','produced','producing','establishes','established','establishing','obtains','obtained','obtaining','attains','attained','attaining','reaches','reached','reaching','gains','gained','gaining','improves','enhances','enhanced','enhancing','boosts','boosted','boosting','increases','increased','increasing','reduces','reduced','reducing','decreases','decreased','decreasing','minimizes','minimized','minimizing','maximizes','maximized','maximizing','optimizes','optimized','optimizing','learns','learned','learning','trains','trained','training','adapts','adapted','adapting','adaptation','transfers','transferred','transferring','generalizes','generalized','generalizing','generalization','performs','performed','performing','conducts','conducted','conducting','applies','applied','applying','employs','employed','employing','utilizes','utilized','utilizing','enables','enabled','enabling','allows','allowed','allowing','facilitates','facilitated','facilitating','supports','supported','supporting','requires','required','requiring','needs','needed','needing','lacks','lacked','lacking','suffers','suffered','suffering','faces','faced','facing','encounters','encountered','encountering','overcomes','overcame','overcoming','resolves','resolved','resolving','mitigates','mitigated','mitigating','alleviates','alleviated','alleviating','attempt','attempts','attempted','attempting','tries','tried','trying','strives','strove','striving','aims','aimed','aiming','seeks','sought','seeking','endeavors','endeavored','endeavoring','effort','efforts','struggles','struggled','struggling','obstacles','obstacle','barrier','barriers','limitation','limitations','constraint','constraints','bottleneck','bottlenecks','issues','issue','problems','problem','concern','concerns','risks','risk','threat','threats','danger','dangers','hazard','hazards','pitfall','pitfalls','drawback','drawbacks','shortcoming','shortcomings','weakness','weaknesses','defect','defects','flaw','flaws','bugs','bug','errors','error','mistakes','mistake','failures','failure','abstract','achieve','across','adopt','adversarial','analysis','apply','approach','architecture','areas','aspect','attention','augmentation','automatic','available','benchmark','better','beyond','challenges','classification','clustering','common','compared','complex','components','comprehensive','condition','context','contrast','conversational','coreference','cross-lingual','dataset','demonstrate','describe','detection','develop','different','discourse','document','dynamic','effective','efficiency','embeddings','enable','encoder','enhance','entity','evaluation','event','existing','experiments','explain','extract','fact','feature','federated','focus','framework','generate','graph','ground','hallucination','hierarchical','identify','image','impact','improve','include','incorporate','increase','inference','information','input','instance','instruction','integrate','interaction','interpret','investigate','knowledge','label','language','large','layer','learn','level','leveraging','linguistic','logic','long','machine','mapping','measure','memory','metrics','mining','modal','module','multi-hop','multilingual','multiple','natural','navigate','negative','network','neural','node','novel','objective','obtain','open','operate','order','output','overall','pair','parsing','particular','pattern','perception','perform','pipeline','planning','point','polarity','popular','positive','potential','predict','preference','preserve','previous','primarily','principle','prior','problem','process','prompt','propose','prove','provide','purpose','quantitative','query','range','rate','reasoning','recent','recognition','recommendation','reduce','refer','regard','regularization','reinforcement','relation','relevance','represent','require','research','resolution','response','result','retrieve','review','robust','role','scheme','scope','search','semantic','sentence','sequence','serve','set','share','significance','similar','simple','single','source','span','specific','speech','standard','state','structure','subject','substantial','suggest','summarization','supervised','support','survey','symbol','syntactic','system','table','target','technique','temporal','term','test','text','time','token','topic','train','transformer','translation','understand','unified','unsupervised','user','utilize','variety','vector','verify','video','view','vision','visual','vocabulary','word','work','zero-shot']);
var zhStopWords = new Set(['的','了','在','是','我','有','和','就','不','人','都','一','一个','上','也','很','到','说','要','去','你','会','着','没有','看','好','自己','这','他','她','它','们','那','里','为','什么','没','可以','可能','已经','因为','所以','但是','如果','或者','虽然','然而','而且','但','而','与','及','等','对','把','被','让','给','向','从','以','用','这个','那个','什么','怎么','哪个','哪些','多少','几','谁','哪里','为什么','怎样','什么样','之','其','中','将','并','或','则','乃','矣','乎','也','哉','兮','夫','故','盖','若','如','因','则','而','乃','其','所','以','故','是','此','斯','兹','彼','之','于','乎','也','矣','焉','哉','兮','夫','盖','若','如','因','则','而','乃','其','所','以','故','本文','提出','方法','使用','进行','通过','实验','结果','表明','显示','可以','能够','以及','问题','研究','工作','模型','数据','任务','性能','基于','利用','针对','不同','有效','显著','提升','提高','改进','改善','优化','增强','减少','降低','实现','采用','结合','引入','设计','构建','建立','发现','证明','验证','评估','比较','分析','探讨','介绍','描述','总结','综述','概述','讨论','阐述','说明','解释','指出','认为','给出','提供','包括','涉及','关注','聚焦','致力于','侧重','着重','强调','重点','主要','核心','关键','重要','基本','基础','整体','全面','系统','综合','宏观','微观','理论','实践','应用','技术','算法','框架','架构','结构','机制','策略','方案','途径','思路','想法','概念','思想','理论','原理','规律','规则','准则','标准','规范','要求','条件','前提','假设','假说','猜想','推测','推断','推理','论证','论据','证据','事实','现象','特征','属性','性质','特点','特性','特色','标志','标记','标识','指标','参数','变量','因子','因素','要素','元素','成分','组成部分','构成','组成','形成','产生','导致','引起','造成','带来','促使','促进','推动','推进','发展','演变','变化','转变','转化','转换','改变','调整','调节','修正','修改','更新','升级','迭代','演进','进化','退化','衰退','衰减','衰落','消亡','消失','灭亡','毁灭','破坏','摧毁','瓦解','崩溃','解体','分裂','分离','脱离','断开','切断','截断','中断','停止','终止','结束','完结','完成','实现','达成','达到','获得','取得','赢得','获取','得到','收到','接受','接收','吸纳','吸收','消化','融合','整合','统一','合并','结合','连接','链接','关联','联系','关系','纽带','桥梁','通道','路径','线路','轨迹','痕迹','印记','标记','标志','符号','信号','信息','消息','通知','报告','汇报','反映','反馈','回应','响应','回复','答复','回答','解答','解释','说明','阐述','论述','论证','辩论','争论','讨论','商议','协商','沟通','交流','对话','交谈','谈话','讲话','发言','表态','表达','表述','描述','描绘','描写','刻画','勾勒','轮廓','框架','架构','结构','构造','组成','构成','成分','元素','因子','因素','要素','条件','前提','假设','基础','根本','本质','实质','核心','关键','重点','要点','中心','焦点','主题','议题','论题','话题','问题','疑问','困惑','难题','困难','障碍','阻碍','阻挠','妨碍','干扰','影响','作用','效果','效应','功效','功能','用途','应用','运用','利用','使用','采用','采纳','接受','认可','认同','承认','肯定','赞同','支持','拥护','维护','保卫','保护','守护','看管','监管','监督','监控','监测','观察','观看','查看','检查','审查','审核','核实','验证','证实','证明','论证','论据','证据','依据','根据','基础','前提','条件','假设','假定','设想','想象','联想','思考','思维','思想','思路','想法','观念','观点','看法','见解','认识','理解','了解','知晓','知道','明白','清楚','明确','确定','肯定','确认','认可','认定','判定','判断','推断','推理','推测','猜测','猜想','假设','设想','想象','联想','思考','思维','思想','思路','想法','观念','观点','看法','见解','认识','理解','了解','知晓','知道','明白','清楚','明确','确定','肯定','确认','认可','认定','判定','判断','推断','推理','推测','猜测','猜想','假设','设想','想象','联想','研究者','研究人员','学者','专家','团队','合作','共同','一起','联合','协作','配合','帮助','支持','协助','辅助','促进','推动','带动','引领','引导','指导','辅导','教导','教育','培训','培养','培育','锻炼','训练','练习','实习','实践','应用','运用','利用','使用','操作','执行','实施','实行','落实','推进','推动','促进','带动','引领','引导','指导','辅导','帮助','支持','协助','辅助','配合','合作','共同','一起','联合','协作','研究者','研究人员','学者','专家','团队','本文','我们','笔者','作者','研究者','研究人员','学者','专家','团队','合作','共同','一起','联合','协作','配合','帮助','支持','协助','辅助','促进','推动','带动','引领','引导','指导','辅导','教导','教育','培训','培养','培育','锻炼','训练','练习','实习','实践','应用','运用','利用','使用','操作','执行','实施','实行','落实','推进','推动','促进','带动','引领','引导','指导','辅导','帮助','支持','协助','辅助','配合','合作','共同','一起','联合','协作']);

function extractKeywords(texts) {
    var kw = {};
    texts.forEach(function(text) {
        (text||'').toLowerCase().replace(/[^a-z\s]/g,' ').split(/\s+/).forEach(function(w) {
            if (w.length > 3 && !stopWords.has(w)) kw[w] = (kw[w]||0) + 1;
        });
    });
    return Object.entries(kw).sort(function(a,b){return b[1]-a[1]});
}

function extractChineseKeywords(texts) {
    var kw = {};
    texts.forEach(function(text) {
        var matches = (text||'').match(/[\u4e00-\u9fa5]{2,6}/g) || [];
        matches.forEach(function(w) {
            if (!zhStopWords.has(w) && w.length >= 2) {
                var allStop = true;
                for (var i = 0; i < w.length; i++) { if (!zhStopWords.has(w[i])) { allStop = false; break; } }
                if (!allStop) kw[w] = (kw[w]||0) + 1;
            }
        });
    });
    return Object.entries(kw).sort(function(a,b){return b[1]-a[1]});
}

// ===== 词云 =====
function renderWordcloudPage() {
    var allSubs = Object.keys(subcategories).sort(function(a,b){return subcategories[b]-subcategories[a]});
    var tabsHtml = '<span class="wc-tab active" onclick="switchWC(this,\'all\')">全局词云</span>';
    allSubs.forEach(function(sub) {
        tabsHtml += '<span class="wc-tab" onclick="switchWC(this,\''+sub.replace(/'/g,"\\'")+'\')">'+sub+' ('+subcategories[sub]+')</span>';
    });
    document.getElementById('wcTabs').innerHTML = tabsHtml;
    renderWordcloud('all');
    renderKeywordsBar();
    renderKeywordsCount();
}

function switchLang(lang, el) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(function(b){b.classList.remove('active')});
    el.classList.add('active');
    renderWordcloud(currentWCCat);
    renderKeywordsBar();
}

function switchWC(el, cat) {
    document.querySelectorAll('.wc-tab').forEach(function(t){t.classList.remove('active')});
    el.classList.add('active');
    currentWCCat = cat;
    renderWordcloud(cat);
}

function renderWordcloud(cat) {
    var papers = cat === 'all' ? allPapers : allPapers.filter(function(p){return p.subcategory===cat});
    var kw;
    if (currentLang === 'zh') {
        var texts = papers.map(function(p){return p.abstract_zh||''}).filter(function(t){return t.length > 10});
        kw = extractChineseKeywords(texts).slice(0, 120);
    } else {
        var texts = papers.map(function(p){return p.title+' '+(p.abstract_en||'')});
        kw = extractKeywords(texts).slice(0, 120);
    }
    if (!wcChart) wcChart = echarts.init(document.getElementById('wcCanvas'));
    wcChart.setOption({
        series: [{
            type:'wordCloud',shape:'circle',keepAspect:false,left:'center',top:'center',width:'90%',height:'90%',
            sizeRange:[14,60],rotationRange:[-30,30],rotationStep:15,gridSize:8,drawOutOfBound:false,
            textStyle:{
                fontFamily:currentLang==='zh'? "'PingFang SC','Microsoft YaHei','Noto Sans SC',sans-serif" : '-apple-system,BlinkMacSystemFont,sans-serif',
                fontWeight:'bold',
                color:function(){var c=['#667eea','#764ba2','#f093fb','#f5576c','#4facfe','#43e97b','#fa709a','#fee140','#a18cd1','#fbc2eb','#84fab0','#8fd3f4','#fccb90','#d57eeb','#e0c3fc','#8ec5fc'];return c[Math.floor(Math.random()*c.length)]}
            },
            data:kw.map(function(item){return {name:item[0],value:item[1]}})
        }]
    });
}

function renderKeywordsBar() {
    var kw;
    if (currentLang==='zh') {
        var texts = allPapers.map(function(p){return p.abstract_zh||''}).filter(function(t){return t.length>10});
        kw = extractChineseKeywords(texts).slice(0,30);
    } else {
        kw = extractKeywords(allPapers.map(function(p){return p.title+' '+(p.abstract_en||'')})).slice(0,30);
    }
    var barChart = echarts.getInstanceByDom(document.getElementById('chartKeywordsBar'));
    if (!barChart) barChart = echarts.init(document.getElementById('chartKeywordsBar'));
    barChart.setOption({
        tooltip:{trigger:'axis',axisPointer:{type:'shadow'}},
        grid:{left:'3%',right:'8%',bottom:'3%',top:'3%',containLabel:true},
        xAxis:{type:'value',axisLabel:{color:'rgba(255,255,255,0.5)',fontSize:11},splitLine:{lineStyle:{color:'rgba(255,255,255,0.06)'}},axisLine:{lineStyle:{color:'rgba(255,255,255,0.1)'}}},
        yAxis:{type:'category',data:kw.map(function(k){return k[0]}).reverse(),axisLabel:{color:'rgba(255,255,255,0.7)',fontSize:11,fontFamily:currentLang==='zh'?"'PingFang SC','Microsoft YaHei',sans-serif":"sans-serif"},axisLine:{lineStyle:{color:'rgba(255,255,255,0.1)'}}},
        series:[{type:'bar',data:kw.map(function(k){return k[1]}).reverse(),barWidth:'60%',itemStyle:{borderRadius:[0,4,4,0],color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:'#667eea'},{offset:1,color:'#764ba2'}])}}]
    });
}

function renderKeywordsCount() {
    var data = Object.keys(subcategories).sort(function(a,b){return subcategories[b]-subcategories[a]}).slice(0,20).map(function(sub) {
        var papers = allPapers.filter(function(p){return p.subcategory===sub});
        var kw = currentLang==='zh' ? extractChineseKeywords(papers.map(function(p){return p.abstract_zh||''})) : extractKeywords(papers.map(function(p){return p.title+' '+(p.abstract_en||'')}));
        return {name:sub, value:kw.length};
    });
    var cntChart = echarts.getInstanceByDom(document.getElementById('chartKeywordsCount'));
    if (!cntChart) cntChart = echarts.init(document.getElementById('chartKeywordsCount'));
    cntChart.setOption({
        tooltip:{trigger:'axis',axisPointer:{type:'shadow'}},
        grid:{left:'3%',right:'8%',bottom:'3%',top:'3%',containLabel:true},
        xAxis:{type:'value',axisLabel:{color:'rgba(255,255,255,0.5)',fontSize:11},splitLine:{lineStyle:{color:'rgba(255,255,255,0.06)'}},axisLine:{lineStyle:{color:'rgba(255,255,255,0.1)'}}},
        yAxis:{type:'category',data:data.map(function(d){return d.name}).reverse(),axisLabel:{color:'rgba(255,255,255,0.7)',fontSize:11},axisLine:{lineStyle:{color:'rgba(255,255,255,0.1)'}}},
        series:[{type:'bar',data:data.map(function(d){return d.value}).reverse(),barWidth:'60%',itemStyle:{borderRadius:[0,4,4,0],color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:'#43e97b'},{offset:1,color:'#38f9d7'}])}}]
    });
}

// ===== 统计图表 =====
function renderChartsPage() {
    var subSorted = Object.entries(subcategories).sort(function(a,b){return b[1]-a[1]});
    var colors = ['#667eea','#764ba2','#f093fb','#f5576c','#4facfe','#43e97b','#fa709a','#fee140','#a18cd1','#fbc2eb','#84fab0','#8fd3f4','#fccb90','#d57eeb','#e0c3fc','#8ec5fc','#f6d365','#fda085','#89f7fe','#66a6ff'];

    // 细分方向分布 - 横向柱状图 Top 20
    var top20 = subSorted.slice(0,20);
    echarts.init(document.getElementById('chartSubcategory')).setOption({
        tooltip:{trigger:'axis',axisPointer:{type:'shadow'}},
        grid:{left:'3%',right:'10%',bottom:'3%',top:'3%',containLabel:true},
        xAxis:{type:'value',axisLabel:{color:'rgba(255,255,255,0.5)',fontSize:11},splitLine:{lineStyle:{color:'rgba(255,255,255,0.06)'}},axisLine:{lineStyle:{color:'rgba(255,255,255,0.1)'}}},
        yAxis:{type:'category',data:top20.map(function(s){return s[0]}).reverse(),axisLabel:{color:'rgba(255,255,255,0.7)',fontSize:11},axisLine:{lineStyle:{color:'rgba(255,255,255,0.1)'}}},
        series:[{type:'bar',data:top20.map(function(s,i){return {value:s[1],itemStyle:{color:colors[i%colors.length]}}}).reverse(),barWidth:'55%',itemStyle:{borderRadius:[0,4,4,0]}}]
    });

    // 会议类别分布
    var venueData = {};
    allPapers.forEach(function(p){var v=p.venue||'未知';venueData[v]=(venueData[v]||0)+1});
    var venueSorted = Object.entries(venueData).sort(function(a,b){return b[1]-a[1]}).slice(0,10);
    echarts.init(document.getElementById('chartVenue')).setOption({
        tooltip:{trigger:'axis',axisPointer:{type:'shadow'}},
        grid:{left:'3%',right:'6%',bottom:'10%',top:'8%',containLabel:true},
        xAxis:{type:'category',data:venueSorted.map(function(v){return v[0]}),axisLabel:{color:'rgba(255,255,255,0.5)',fontSize:10,rotate:25,interval:0},axisLine:{lineStyle:{color:'rgba(255,255,255,0.1)'}}},
        yAxis:{type:'value',axisLabel:{color:'rgba(255,255,255,0.5)',fontSize:11},splitLine:{lineStyle:{color:'rgba(255,255,255,0.06)'}},axisLine:{lineStyle:{color:'rgba(255,255,255,0.1)'}}},
        series:[{type:'bar',data:venueSorted.map(function(v,i){return {value:v[1],itemStyle:{color:colors[i%colors.length]}}}),barWidth:'50%',itemStyle:{borderRadius:[6,6,0,0]}}]
    });

    // 主会占比
    var mainRatios = Object.keys(subcategories).map(function(sub) {
        var sp = allPapers.filter(function(p){return p.subcategory===sub});
        var mp = sp.filter(function(p){return p.venue && p.venue.indexOf('主会')===0});
        return {name:sub, ratio:sp.length>0?mp.length/sp.length:0, count:sp.length};
    }).filter(function(r){return r.count>=15}).sort(function(a,b){return b.ratio-a.ratio}).slice(0,15);
    echarts.init(document.getElementById('chartMainRatio')).setOption({
        tooltip:{trigger:'axis',axisPointer:{type:'shadow'},formatter:function(p){return p[0].name+': '+(p[0].value*100).toFixed(1)+'%'}},
        grid:{left:'3%',right:'10%',bottom:'3%',top:'3%',containLabel:true},
        xAxis:{type:'value',max:1,axisLabel:{color:'rgba(255,255,255,0.5)',fontSize:11,formatter:function(v){return (v*100)+'%'}},splitLine:{lineStyle:{color:'rgba(255,255,255,0.06)'}},axisLine:{lineStyle:{color:'rgba(255,255,255,0.1)'}}},
        yAxis:{type:'category',data:mainRatios.map(function(r){return r.name}).reverse(),axisLabel:{color:'rgba(255,255,255,0.7)',fontSize:11},axisLine:{lineStyle:{color:'rgba(255,255,255,0.1)'}}},
        series:[{type:'bar',data:mainRatios.map(function(r){return r.ratio}).reverse(),barWidth:'55%',itemStyle:{borderRadius:[0,4,4,0],color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:'#f5576c'},{offset:1,color:'#ff6d00'}])}}]
    });

    // 热力图
    var topSubs = subSorted.slice(0,12).map(function(s){return s[0]});
    var topVenues = venueSorted.slice(0,6).map(function(v){return v[0]});
    var subLabels = topSubs.map(function(s){return s.length > 7 ? s.substring(0,7)+'…' : s});
    var venueLabels = topVenues.map(function(v){return v.length > 6 ? v.substring(0,6)+'…' : v});
    var heatData = [];
    topSubs.forEach(function(sub,ci) {
        topVenues.forEach(function(venue,vi) {
            heatData.push([vi, ci, allPapers.filter(function(p){return p.subcategory===sub && p.venue===venue}).length]);
        });
    });
    echarts.init(document.getElementById('chartHeatmap')).setOption({
        tooltip:{formatter:function(p){return topVenues[p.value[0]]+' × '+topSubs[p.value[1]]+': '+p.value[2]+'篇'}},
        grid:{left:'18%',right:'14%',bottom:'18%',top:'8%',containLabel:false},
        xAxis:{type:'category',data:venueLabels,axisLabel:{color:'rgba(255,255,255,0.6)',fontSize:10,rotate:30,interval:0},axisLine:{lineStyle:{color:'rgba(255,255,255,0.1)'}},splitLine:{show:true,lineStyle:{color:'rgba(255,255,255,0.04)'}}},
        yAxis:{type:'category',data:subLabels,axisLabel:{color:'rgba(255,255,255,0.6)',fontSize:10,width:90,overflow:'truncate'},axisLine:{lineStyle:{color:'rgba(255,255,255,0.1)'}},splitLine:{show:true,lineStyle:{color:'rgba(255,255,255,0.04)'}}},
        visualMap:{min:0,max:150,calculable:true,orient:'horizontal',left:'center',bottom:0,height:20,textStyle:{color:'rgba(255,255,255,0.5)',fontSize:10},inRange:{color:['#16213e','#1a1a2e','#0f3460','#667eea','#764ba2','#f093fb']}},
        series:[{type:'heatmap',data:heatData,label:{show:true,color:'#fff',fontSize:10,formatter:function(p){return p.value[2]>0?p.value[2]:''}},emphasis:{itemStyle:{shadowBlur:10,shadowColor:'rgba(0,0,0,0.5)',borderColor:'#fff',borderWidth:1}}}]
    });

    // 排名
    document.getElementById('rankList').innerHTML = subSorted.slice(0,20).map(function(item,i) {
        return '<li class="rank-item"><span class="rank-num '+(i<3?'top3':'')+'">'+(i+1)+'</span><span class="rank-name">'+item[0]+'</span><span class="rank-count">'+item[1]+' 篇</span></li>';
    }).join('');
    document.getElementById('mainRatioList').innerHTML = mainRatios.slice(0,10).map(function(item,i) {
        return '<li class="rank-item"><span class="rank-num '+(i<3?'top3':'')+'">'+(i+1)+'</span><span class="rank-name">'+item.name+'</span><span class="rank-count">'+(item.ratio*100).toFixed(1)+'%</span></li>';
    }).join('');
}

// ===== 初始化 =====
processData();
renderStats();
renderSubcatOverview();
initFilters();
updateSubcatFilter('');
filteredPapers = allPapers.slice();
window.addEventListener('resize', function() {
    if (wcChart) wcChart.resize();
    document.querySelectorAll('.chart-box').forEach(function(el) {
        var inst = echarts.getInstanceByDom(el);
        if (inst) inst.resize();
    });
});
</script>
</body>
</html>'''

    output_path = 'E:\\paper\\ACL2025\\index.html'
    print(f"正在写入HTML文件: {output_path}")
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html.replace('DATA_PLACEHOLDER', data_json))

    import os
    size = os.path.getsize(output_path)
    print(f"文件大小: {size / 1024 / 1024:.1f} MB")
    print("完成！")

if __name__ == '__main__':
    main()