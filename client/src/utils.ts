export const SUBCATEGORY_EN: Record<string, string> = {
  'LLM评测与基准': 'LLM Evaluation & Benchmarking',
  '推理与思维链': 'Reasoning & Chain-of-Thought',
  '代码生成与理解': 'Code Generation & Understanding',
  '提示与上下文学习': 'Prompting & In-Context Learning',
  '指令微调与对齐': 'Instruction Tuning & Alignment',
  '智能体与工具': 'Agents & Tool Use',
  '知识编辑与更新': 'Knowledge Editing & Updating',
  '高效推理与压缩': 'Efficient Inference & Compression',
  '幻觉与检测': 'Hallucination & Detection',
  '数据合成与增强': 'Data Synthesis & Augmentation',
  '长文本处理': 'Long Context Processing',
  '模型融合与路由': 'Model Merging & Routing',
  '安全与可控生成': 'Safety & Controllable Generation',
  'LLM研究': 'LLM Research',
  '同声传译': 'Simultaneous Translation',
  '翻译质量评估': 'Translation Quality Estimation',
  '机器翻译': 'Machine Translation',
  '语音合成与转换': 'Speech Synthesis & Conversion',
  '语音识别与理解': 'Speech Recognition & Understanding',
  '视觉语言模型': 'Vision-Language Models',
  '视频理解': 'Video Understanding',
  '多模态融合': 'Multimodal Fusion',
  '文本转语音': 'Text-to-Audio',
  '对话系统': 'Dialogue Systems',
  '阅读理解': 'Reading Comprehension',
  '问答系统': 'Question Answering',
  '作文评分': 'Essay Scoring',
  '检索增强生成': 'Retrieval-Augmented Generation',
  '信息检索': 'Information Retrieval',
  '知识检索': 'Knowledge Retrieval',
  '命名实体识别': 'Named Entity Recognition',
  '关系抽取': 'Relation Extraction',
  '事件抽取': 'Event Extraction',
  '知识图谱': 'Knowledge Graphs',
  '信息抽取': 'Information Extraction',
  '立场检测': 'Stance Detection',
  '观点挖掘': 'Opinion Mining',
  '情感分析': 'Sentiment Analysis',
  '偏见与公平': 'Bias & Fairness',
  '对抗攻击': 'Adversarial Attacks',
  '隐私保护': 'Privacy Protection',
  '水印与检测': 'Watermarking & Detection',
  '安全与对齐': 'Safety & Alignment',
  '语义解析': 'Semantic Parsing',
  '自然语言推理': 'Natural Language Inference',
  '文本分类': 'Text Classification',
  '语义相似度': 'Semantic Similarity',
  '语法纠错': 'Grammatical Error Correction',
  '关键词抽取': 'Keyphrase Extraction',
  'NLP研究': 'NLP Research',
  '文本摘要': 'Text Summarization',
  '文本生成': 'Text Generation',
  '临床NLP': 'Clinical NLP',
  '生物医学NLP': 'Biomedical NLP',
  '教育应用': 'Educational Applications',
  '评估方法': 'Evaluation Methods',
  '跨语言迁移': 'Cross-lingual Transfer',
  '低资源语言': 'Low-resource Languages',
  '其他': 'Other'
}

interface Rule {
  cat: string
  sub: string
  test: RegExp
}

export const SUB_RULES: Rule[] = [
  // ===== 领域特定规则（优先匹配） =====
  {cat:'机器翻译',sub:'同声传译',test:/simultaneous.translat|speech.translation|streaming.translat/i},
  {cat:'机器翻译',sub:'翻译质量评估',test:/translation.quality|MT.eval|post.edit|translation.eval/i},
  {cat:'机器翻译',sub:'机器翻译',test:/machine.translation|neural.machine|\bNMT\b|\bMT\b.*translat|translat.*\bMT\b/i},
  {cat:'机器翻译',sub:'机器翻译',test:/translat/},
  {cat:'情感分析',sub:'立场检测',test:/stance.detect|claim.detect|argument.min/i},
  {cat:'情感分析',sub:'观点挖掘',test:/opinion.min|aspect.based.sentiment|ABSA/i},
  {cat:'情感分析',sub:'情感分析',test:/sentiment.analysis|sentiment.classif|emotion.detect|emotion.recogni|affective.comput/i},
  {cat:'信息抽取',sub:'命名实体识别',test:/named.entity|\bNER\b|entity.recogni|entity.extract/i},
  {cat:'信息抽取',sub:'关系抽取',test:/relation.extract|relation.classif/i},
  {cat:'信息抽取',sub:'事件抽取',test:/event.extract|event.detect|event.argument/i},
  {cat:'信息抽取',sub:'知识图谱',test:/knowledge.graph|\bKG\b|triple|ontology/i},
  {cat:'信息抽取',sub:'信息抽取',test:/information.extract|slot.fill/i},
  {cat:'NLP基础',sub:'语义解析',test:/semantic.pars|\bAMR\b|dependency.pars|constituency/i},
  {cat:'NLP基础',sub:'自然语言推理',test:/\bNLI\b|natural.language.infer|textual.entail/i},
  {cat:'NLP基础',sub:'文本分类',test:/text.classif|document.classif|news.classif|spam.detect|text.categor/i},
  {cat:'NLP基础',sub:'语义相似度',test:/semantic.similar|sentence.embed|text.similar|\bSTS\b|paraphrase.detect/i},
  {cat:'NLP基础',sub:'语法纠错',test:/grammatical.error|\bGEC\b|grammar.correct/i},
  {cat:'NLP基础',sub:'关键词抽取',test:/keyphrase|keyword.extract/i},
  {cat:'摘要与生成',sub:'文本摘要',test:/text.summar|document.summar|abstractive.summar|extractive.summar|summary.generat/i},
  {cat:'摘要与生成',sub:'文本生成',test:/open.ended.*generat|controllable.*generat|long.form.*generat|text.generat.*evaluat|table.to.text/i},
  {cat:'检索与RAG',sub:'检索增强生成',test:/retrieval.augment.*generat|\bRAG\b/i},
  {cat:'检索与RAG',sub:'信息检索',test:/information.retriev|dense.retriev|sparse.retriev|passage.retriev|neural.retriev/i},
  {cat:'检索与RAG',sub:'知识检索',test:/knowledge.retriev|entity.retriev|fact.retriev/i},
  {cat:'问答与对话',sub:'对话系统',test:/dialogue.system|conversation.system|chatbot|multi.turn.dialog/i},
  {cat:'问答与对话',sub:'阅读理解',test:/reading.comprehension|machine.read|\bMRC\b/i},
  {cat:'问答与对话',sub:'问答系统',test:/question.answer|\bQA\b.*system|open.domain.QA/i},
  {cat:'问答与对话',sub:'作文评分',test:/essay.scor|essay.rat|essay.writ/i},
  {cat:'语音与多模态',sub:'语音合成与转换',test:/text.to.speech|\bTTS\b|speech.synth|voice.conver|vocoder/i},
  {cat:'语音与多模态',sub:'语音识别与理解',test:/speech.recogni|\bASR\b|speaker.verif|speaker.diar/i},
  {cat:'语音与多模态',sub:'视觉语言模型',test:/visual.language|\bVLM\b|vision.language|multimodal.model/i},
  {cat:'语音与多模态',sub:'视频理解',test:/video.understand|video.caption|video.QA|action.recogni/i},
  {cat:'语音与多模态',sub:'多模态融合',test:/multimodal|multi.modal|cross.modal|audio.visual/i},
  {cat:'语音与多模态',sub:'文本转语音',test:/text.to.audio|audio.generat|speech.generat/i},
  {cat:'代码与程序',sub:'代码生成与理解',test:/code.generat|program.synth|code.complet|code.repair|code.understand|software.engineer|\bSWE\b|bug.fix|code.review/i},
  {cat:'医疗与生物',sub:'临床NLP',test:/clinical.NLP|\bEHR\b|clinical.note|clinical.text|medical.record|radiology.report/i},
  {cat:'医疗与生物',sub:'生物医学NLP',test:/biomed.*NLP|bioNLP|biomedical.text|drug.discover|protein.struct/i},
  {cat:'教育与评估',sub:'教育应用',test:/educational.AI|intelligent.tutor|pedagog|learn.*assist|student.learn/i},
  {cat:'教育与评估',sub:'评估方法',test:/evaluation.metric|evaluation.framework|evaluation.method|benchmark.*NLP|NLP.*benchmark/i},
  {cat:'跨语言与低资源',sub:'跨语言迁移',test:/cross.lingual.transfer|multilingual.model|zero.shot.cross/i},
  {cat:'跨语言与低资源',sub:'低资源语言',test:/low.resource.lang|endanger.lang|minority.lang|indigenous.lang/i},
  {cat:'可信AI',sub:'偏见与公平',test:/social.bias|gender.bias|racial.bias|fairness.*NLP|stereotyp.*detect|anthropomorph/i},
  {cat:'可信AI',sub:'对抗攻击',test:/adversarial.attack|adversarial.exampl|text.attack|adversarial.robust/i},
  {cat:'可信AI',sub:'隐私保护',test:/privacy.preserv|differential.privacy|federated.learn|data.anonymi/i},
  {cat:'可信AI',sub:'水印与检测',test:/watermark.*text|detect.AI.generated|AI.generated.text|machine.generated.text/i},
  {cat:'可信AI',sub:'安全与对齐',test:/jailbreak|red.team|safety.align/i},

  // ===== LLM特定规则（要求LLM上下文） =====
  {cat:'LLM与生成',sub:'LLM评测与基准',test:/llm.*evaluat|llm.*benchmark|evaluat.*llm|benchmark.*llm|benchmark.*language.model/i},
  {cat:'LLM与生成',sub:'推理与思维链',test:/chain.of.thought|\bCoT\b|reason.*llm|llm.*reason|step.by.step.reason|math.reason/i},
  {cat:'LLM与生成',sub:'代码生成与理解',test:/llm.*code|code.*llm|coding.*llm|llm.*program/i},
  {cat:'LLM与生成',sub:'提示与上下文学习',test:/prompt.engineer|in.context.learn|\bICL\b|few.shot.*llm|llm.*prompt|prompt.*llm/i},
  {cat:'LLM与生成',sub:'指令微调与对齐',test:/instruct.*tun|instruct.*follow|\bRLHF\b|\bDPO\b|preference.optim|reward.model|align.*llm|llm.*align|fine.tun.*llm/i},
  {cat:'LLM与生成',sub:'智能体与工具',test:/llm.*agent|agent.*llm|tool.use.*llm|llm.*tool|function.call|autonomous.agent/i},
  {cat:'LLM与生成',sub:'知识编辑与更新',test:/knowledge.edit|edit.fact|unlearn|machine.unlearn/i},
  {cat:'LLM与生成',sub:'高效推理与压缩',test:/llm.*efficien|efficien.*llm|quantiz|model.compress|speculative.decod|kv.cache|\blora\b/i},
  {cat:'LLM与生成',sub:'幻觉与检测',test:/hallucin|grounded.*generat|faithful.*generat/i},
  {cat:'LLM与生成',sub:'数据合成与增强',test:/synthetic.data|data.augment|self.instruct/i},
  {cat:'LLM与生成',sub:'长文本处理',test:/long.context|context.window|extend.context|long.document/i},
  {cat:'LLM与生成',sub:'模型融合与路由',test:/model.merg|mixture.of.expert|\bMoE\b/i},
  {cat:'LLM与生成',sub:'安全与可控生成',test:/safety.*llm|llm.*safety|toxic.*llm|guardrail/i},

  // ===== LLM广义匹配 =====
  {cat:'LLM与生成',sub:'LLM研究',test:/\bllm\b|\bllms\b|large.language.model|\bgpt\b|\bchatgpt\b|\bllama\b|\bgemma\b|\bmistral\b|\bqwen\b|\bmllm\b|\bmllms\b/i},

  // ===== NLP广义匹配 =====
  {cat:'NLP基础',sub:'NLP研究',test:/natural.language.process|\bNLP\b|language.model|word.embed|tokeniz/i},
]

export function categorizeDetailed(title: string, abstract: string): { category: string; subcategory: string } {
  const t = ((title || '') + ' ' + (abstract || '')).toLowerCase()
  for (const rule of SUB_RULES) {
    if (rule.test.test(t)) return { category: rule.cat, subcategory: rule.sub }
  }
  return { category: '其他', subcategory: '其他' }
}

export function scholarUrl(title: string): string {
  return 'https://scholar.google.com/scholar?q=' + encodeURIComponent(title || '')
}

// Client-side noun keyword sets (mirrors server/keywords.js)
export const NOUN_SET = new Set([
  'transformer', 'bert', 'gpt', 'llama', 'mistral', 'gemini', 'claude', 't5',
  'roberta', 'albert', 'xlnet', 'electra', 'deberta', 'bloom', 'falcon',
  'mamba', 'rwkv', 'palm', 'chinchilla', 'opt', 'bloomz', 'vicuna', 'alpaca',
  'phi', 'qwen', 'yi', 'internlm', 'baichuan', 'chatglm', 'glm',
  'encoder', 'decoder', 'encoder-decoder', 'tokenizer', 'embedding',
  'lstm', 'gru', 'cnn', 'rnn', 'gan', 'vae', 'diffusion',
  'autoencoder', 'variational', 'recurrent', 'convolutional',
  'attention', 'self-attention', 'cross-attention', 'multi-head',
  'feedforward', 'softmax', 'layernorm', 'batchnorm',
  'fine-tuning', 'pre-training', 'instruction-tuning', 'prompt-tuning',
  'prefix-tuning', 'adapter', 'lora', 'qlora', 'peft',
  'rlhf', 'dpo', 'ppo', 'reward-model', 'policy-gradient',
  'chain-of-thought', 'self-consistency', 'tree-of-thought',
  'in-context-learning', 'few-shot', 'zero-shot', 'one-shot',
  'retrieval-augmented', 'knowledge-distillation', 'model-merging',
  'quantization', 'pruning', 'sparsity', 'low-rank',
  'contrastive-learning', 'self-supervised', 'semi-supervised',
  'multi-task', 'transfer-learning', 'domain-adaptation',
  'data-augmentation', 'curriculum-learning', 'active-learning',
  'beam-search', 'greedy-decoding', 'nucleus-sampling', 'top-k',
  'speculative-decoding', 'parallel-decoding',
  'attention-sink', 'flash-attention', 'grouped-query',
  'positional-encoding', 'rotary-embedding', 'alibi',
  'gradient-checkpointing', 'mixed-precision', 'deepspeed', 'megatron',
  'federated-learning', 'differential-privacy', 'adversarial-training',
  'knowledge-editing', 'model-editing', 'unlearning',
  'ablation', 'ensemble', 'bagging', 'boosting',
  'machine-translation', 'text-summarization', 'question-answering',
  'sentiment-analysis', 'named-entity-recognition', 'relation-extraction',
  'event-extraction', 'coreference-resolution', 'semantic-parsing',
  'dependency-parsing', 'constituency-parsing', 'part-of-speech',
  'text-classification', 'text-generation', 'text-simplification',
  'information-retrieval', 'document-retrieval', 'passage-retrieval',
  'dialogue-system', 'chatbot', 'conversational-ai',
  'reading-comprehension', 'open-domain-qa', 'multi-hop-qa',
  'fact-checking', 'fake-news-detection', 'stance-detection',
  'hate-speech-detection', 'toxicity-detection', 'bias-detection',
  'aspect-based-sentiment', 'opinion-mining', 'emotion-recognition',
  'grammatical-error-correction', 'paraphrase-detection',
  'natural-language-inference', 'textual-entailment',
  'semantic-similarity', 'sentence-embedding', 'text-embedding',
  'image-captioning', 'visual-question-answering', 'visual-grounding',
  'speech-recognition', 'speech-synthesis', 'text-to-speech',
  'code-generation', 'code-completion', 'code-search', 'code-review',
  'program-synthesis', 'software-engineering',
  'slot-filling', 'intent-detection', 'dialogue-act',
  'topic-modeling', 'keyword-extraction', 'keyphrase-extraction',
  'anomaly-detection', 'out-of-distribution', 'continual-learning',
  'multimodal', 'cross-modal', 'vision-language', 'audio-visual',
  'language-model', 'knowledge-graph', 'word-embedding', 'sentence-embedding',
  'attention-mechanism', 'activation-function', 'loss-function',
  'training-data', 'test-set', 'validation-set', 'benchmark',
  'evaluation-metric', 'baseline', 'state-of-the-art',
  'hallucination', 'faithfulness', 'factuality', 'grounding',
  'robustness', 'adversarial-example', 'backdoor-attack', 'jailbreak',
  'fairness', 'bias', 'stereotype', 'toxicity', 'safety',
  'interpretability', 'explainability', 'feature-attribution',
  'knowledge-probing', 'knowledge-tracing', 'knowledge-boundary',
  'context-window', 'long-context', 'context-length',
  'in-context-learning', 'instruction-following', 'alignment',
  'reasoning', 'logical-reasoning', 'mathematical-reasoning',
  'commonsense', 'world-knowledge', 'temporal-reasoning',
  'multi-agent', 'tool-use', 'function-calling', 'planning',
  'summarization', 'abstractive', 'extractive',
  'tokenization', 'subword', 'byte-pair', 'sentencepiece',
  'cross-lingual', 'multilingual', 'low-resource', 'endangered-language',
  'glue', 'superglue', 'squad', 'mnli', 'sst', 'cola', 'qqp',
  'commonsenseqa', 'hellaswag', 'mmlu', 'gsm8k', 'math',
  'humaneval', 'mbpp', 'code-contests', 'apps',
  'wmt', 'iwslt', 'opus', 'flores',
  'imagenet', 'coco', 'vqa', 'visual-genome',
  'squad', 'natural-questions', 'triviaqa', 'hotpotqa',
  'truthfulqa', 'realtoxicityprompts', 'bbq', 'winobias',
  'acl', 'emnlp', 'naacl', 'coling', 'aacl',
  'bleu', 'rouge', 'meteor', 'bertscore', 'comet',
  'perplexity', 'f1-score', 'accuracy', 'precision', 'recall',
  'auc', 'roc', 'matthews', 'cohen-kappa',
  'pass@k', 'human-evaluation', 'automatic-evaluation',
])

export const ZH_NOUN_SET = new Set([
  '大语言模型', '语言模型', '预训练模型', '基础模型',
  '变换器', '编码器', '解码器', '分词器',
  '注意力机制', '自注意力', '交叉注意力', '多头注意力',
  '卷积神经网络', '循环神经网络', '生成对抗网络', '变分自编码器',
  '长短期记忆', '门控循环单元', '残差网络',
  '微调', '预训练', '指令微调', '提示微调', '前缀微调',
  '强化学习', '人类反馈强化学习', '直接偏好优化',
  '思维链', '自一致性', '思维树',
  '上下文学习', '少样本学习', '零样本学习',
  '检索增强', '知识蒸馏', '模型融合',
  '量化', '剪枝', '稀疏化', '低秩适应',
  '对比学习', '自监督学习', '半监督学习',
  '多任务学习', '迁移学习', '领域适应',
  '数据增强', '课程学习', '主动学习',
  '联邦学习', '差分隐私', '对抗训练',
  '知识编辑', '模型编辑', '遗忘学习',
  '梯度检查点', '混合精度', '模型并行', '数据并行',
  '机器翻译', '文本摘要', '问答系统', '阅读理解',
  '情感分析', '命名实体识别', '关系抽取', '事件抽取',
  '共指消解', '语义解析', '依存句法分析', '词性标注',
  '文本分类', '文本生成', '文本简化', '文本纠错',
  '信息检索', '文档检索', '段落检索',
  '对话系统', '聊天机器人', '对话生成',
  '事实核查', '虚假新闻检测', '立场检测',
  '仇恨言论检测', '毒性检测', '偏见检测',
  '方面级情感分析', '观点挖掘', '情感识别',
  '语法纠错', '释义检测', '释义生成',
  '自然语言推理', '文本蕴含',
  '语义相似度', '句子嵌入', '文本嵌入',
  '图像描述', '视觉问答', '视觉定位',
  '语音识别', '语音合成', '语音转换',
  '代码生成', '代码补全', '代码搜索', '代码审查',
  '程序合成', '软件工程',
  '槽填充', '意图检测', '对话行为',
  '主题建模', '关键词抽取', '关键短语抽取',
  '异常检测', '分布外检测', '持续学习',
  '多模态', '跨模态', '视觉语言', '视听',
  '知识图谱', '词嵌入', '句嵌入', '文本嵌入',
  '注意力机制', '激活函数', '损失函数',
  '训练数据', '测试集', '验证集', '基准测试',
  '评估指标', '基线模型', '最先进',
  '幻觉', '忠实性', '事实性', '接地',
  '鲁棒性', '对抗样本', '后门攻击', '越狱',
  '公平性', '偏见', '刻板印象', '毒性', '安全',
  '可解释性', '特征归因',
  '知识探测', '知识追踪', '知识边界',
  '上下文窗口', '长上下文', '上下文长度',
  '指令遵循', '对齐',
  '推理', '逻辑推理', '数学推理',
  '常识', '世界知识', '时间推理',
  '多智能体', '工具使用', '函数调用', '规划',
  '摘要', '抽取式', '生成式',
  '分词', '子词', '字节对',
  '跨语言', '多语言', '低资源', '濒危语言',
  '通用语言理解', '阅读理解', '情感分析基准',
  '机器翻译基准', '代码生成基准',
  '图像分类', '目标检测', '视觉问答',
  '事实性基准', '毒性基准', '偏见基准',
  '双语评估替补', '摘要评估', '语义相似度',
  '困惑度', '准确率', '精确率', '召回率',
  '人工评估', '自动评估',
])

import type { Paper } from './types'

export function extractNounKeywords(papers: Paper[], lang: 'en' | 'zh' = 'en', topN = 150): [string, number][] {
  const keywords: Record<string, number> = {}
  for (const p of papers) {
    if (lang === 'en') {
      const text = (p.title || '') + ' ' + (p.abstract_en || '')
      const words = new Set(
        (text.toLowerCase().match(/\b[a-zA-Z][a-zA-Z\-]{2,}\b/g) || [])
          .map(w => w.replace(/^-+|-+$/g, ''))
      )
      for (const w of words) {
        if (NOUN_SET.has(w)) keywords[w] = (keywords[w] || 0) + 1
      }
    } else {
      const text = p.abstract_zh || ''
      const zhWords = new Set(text.match(/[一-鿿]{2,6}/g) || [])
      for (const w of zhWords) {
        if (ZH_NOUN_SET.has(w)) keywords[w] = (keywords[w] || 0) + 1
      }
    }
  }
  return Object.entries(keywords).sort((a, b) => b[1] - a[1]).slice(0, topN) as [string, number][]
}

// Get the appropriate paper link URL
export function paperLinkUrl(paper: Paper): string {
  if (paper.pdf_url) return paper.pdf_url
  if (paper.source && paper.source !== 'ACL') return ''
  return `https://aclanthology.org/${paper.id}.pdf`
}

// Get the ACL Anthology page URL (only for ACL papers)
export function anthologyUrl(paper: Paper): string {
  if (paper.source && paper.source !== 'ACL') return ''
  return `https://aclanthology.org/${paper.id}/`
}

// Generate BibTeX for a paper
export function generateBibtex(paper: Paper): string {
  const authors = (paper.authors || []).join(' and ')
  const key = (paper.authors?.[0]?.split(' ').pop()?.toLowerCase() || 'unknown') + paper.id.replace(/[^a-z0-9]/gi, '')
  const source = paper.source || 'ACL'
  const year = paper.year || 2025

  const proceedingsMap: Record<string, string> = {
    'ACL': `Proceedings of the ${year === 2025 ? '63rd' : year === 2024 ? '62nd' : '61st'} Annual Meeting of the Association for Computational Linguistics (ACL ${year})`,
    'EMNLP': `Proceedings of the ${year === 2025 ? '29th' : year === 2024 ? '28th' : '27th'} Conference on Empirical Methods in Natural Language Processing (EMNLP ${year})`,
    'ICML': `Proceedings of the ${year === 2025 ? '42nd' : year === 2024 ? '41st' : '40th'} International Conference on Machine Learning (ICML ${year})`,
    'ICLR': `Proceedings of the ${year === 2025 ? '13th' : year === 2024 ? '12th' : '11th'} International Conference on Learning Representations (ICLR ${year})`,
    'NeurIPS': `Proceedings of the ${year === 2025 ? '39th' : year === 2024 ? '38th' : '37th'} Conference on Neural Information Processing Systems (NeurIPS ${year})`,
  }
  const booktitle = proceedingsMap[source] || `Proceedings of ${source} ${year}`

  const url = paper.pdf_url || (source === 'ACL' ? `https://aclanthology.org/${paper.id}/` : '')

  return `@inproceedings{${key},
  title     = {${paper.title}},
  author    = {${authors}},
  booktitle = {${booktitle}},
  year      = {${year}},
  url       = {${url}}
}`
}
