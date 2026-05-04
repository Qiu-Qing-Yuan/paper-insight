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
