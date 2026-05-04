// ACL 2025 论文分类规则
// 改进版：领域规则优先，LLM规则要求LLM上下文，避免泛化词误匹配

const SUB_RULES = [
  // ===== 领域特定规则（优先匹配） =====
  ['机器翻译', '同声传译', /simultaneous.translat|speech.translation|streaming.translat/i],
  ['机器翻译', '翻译质量评估', /translation.quality|MT.eval|post.edit|translation.eval/i],
  ['机器翻译', '机器翻译', /machine.translation|neural.machine|\bNMT\b|\bMT\b.*translat|translat.*\bMT\b/i],
  ['机器翻译', '机器翻译', /translat/],
  ['情感分析', '立场检测', /stance.detect|claim.detect|argument.min/i],
  ['情感分析', '观点挖掘', /opinion.min|aspect.based.sentiment|ABSA/i],
  ['情感分析', '情感分析', /sentiment.analysis|sentiment.classif|emotion.detect|emotion.recogni|affective.comput/i],
  ['信息抽取', '命名实体识别', /named.entity|\bNER\b|entity.recogni|entity.extract/i],
  ['信息抽取', '关系抽取', /relation.extract|relation.classif/i],
  ['信息抽取', '事件抽取', /event.extract|event.detect|event.argument/i],
  ['信息抽取', '知识图谱', /knowledge.graph|\bKG\b|triple|ontology/i],
  ['信息抽取', '信息抽取', /information.extract|slot.fill/i],
  ['NLP基础', '语义解析', /semantic.pars|\bAMR\b|dependency.pars|constituency/i],
  ['NLP基础', '自然语言推理', /\bNLI\b|natural.language.infer|textual.entail/i],
  ['NLP基础', '文本分类', /text.classif|document.classif|news.classif|spam.detect|text.categor/i],
  ['NLP基础', '语义相似度', /semantic.similar|sentence.embed|text.similar|\bSTS\b|paraphrase.detect/i],
  ['NLP基础', '语法纠错', /grammatical.error|\bGEC\b|grammar.correct/i],
  ['NLP基础', '关键词抽取', /keyphrase|keyword.extract/i],
  ['摘要与生成', '文本摘要', /text.summar|document.summar|abstractive.summar|extractive.summar|summary.generat/i],
  ['摘要与生成', '文本生成', /open.ended.*generat|controllable.*generat|long.form.*generat|text.generat.*evaluat|table.to.text/i],
  ['检索与RAG', '检索增强生成', /retrieval.augment.*generat|\bRAG\b/i],
  ['检索与RAG', '信息检索', /information.retriev|dense.retriev|sparse.retriev|passage.retriev|neural.retriev/i],
  ['检索与RAG', '知识检索', /knowledge.retriev|entity.retriev|fact.retriev/i],
  ['问答与对话', '对话系统', /dialogue.system|conversation.system|chatbot|multi.turn.dialog/i],
  ['问答与对话', '阅读理解', /reading.comprehension|machine.read|\bMRC\b/i],
  ['问答与对话', '问答系统', /question.answer|\bQA\b.*system|open.domain.QA/i],
  ['问答与对话', '作文评分', /essay.scor|essay.rat|essay.writ/i],
  ['语音与多模态', '语音合成与转换', /text.to.speech|\bTTS\b|speech.synth|voice.conver|vocoder/i],
  ['语音与多模态', '语音识别与理解', /speech.recogni|\bASR\b|speaker.verif|speaker.diar/i],
  ['语音与多模态', '视觉语言模型', /visual.language|\bVLM\b|vision.language|multimodal.model/i],
  ['语音与多模态', '视频理解', /video.understand|video.caption|video.QA|action.recogni/i],
  ['语音与多模态', '多模态融合', /multimodal|multi.modal|cross.modal|audio.visual/i],
  ['语音与多模态', '文本转语音', /text.to.audio|audio.generat|speech.generat/i],
  ['代码与程序', '代码生成与理解', /code.generat|program.synth|code.complet|code.repair|code.understand|software.engineer|\bSWE\b|bug.fix|code.review/i],
  ['医疗与生物', '临床NLP', /clinical.NLP|\bEHR\b|clinical.note|clinical.text|medical.record|radiology.report/i],
  ['医疗与生物', '生物医学NLP', /biomed.*NLP|bioNLP|biomedical.text|drug.discover|protein.struct/i],
  ['教育与评估', '教育应用', /educational.AI|intelligent.tutor|pedagog|learn.*assist|student.learn/i],
  ['教育与评估', '评估方法', /evaluation.metric|evaluation.framework|evaluation.method|benchmark.*NLP|NLP.*benchmark/i],
  ['跨语言与低资源', '跨语言迁移', /cross.lingual.transfer|multilingual.model|zero.shot.cross/i],
  ['跨语言与低资源', '低资源语言', /low.resource.lang|endanger.lang|minority.lang|indigenous.lang/i],
  ['可信AI', '偏见与公平', /social.bias|gender.bias|racial.bias|fairness.*NLP|stereotyp.*detect|anthropomorph/i],
  ['可信AI', '对抗攻击', /adversarial.attack|adversarial.exampl|text.attack|adversarial.robust/i],
  ['可信AI', '隐私保护', /privacy.preserv|differential.privacy|federated.learn|data.anonymi/i],
  ['可信AI', '水印与检测', /watermark.*text|detect.AI.generated|AI.generated.text|machine.generated.text/i],
  ['可信AI', '安全与对齐', /jailbreak|red.team|safety.align/i],

  // ===== LLM特定规则（要求LLM上下文） =====
  ['LLM与生成', 'LLM评测与基准', /llm.*evaluat|llm.*benchmark|evaluat.*llm|benchmark.*llm|benchmark.*language.model/i],
  ['LLM与生成', '推理与思维链', /chain.of.thought|\bCoT\b|reason.*llm|llm.*reason|step.by.step.reason|math.reason/i],
  ['LLM与生成', '代码生成与理解', /llm.*code|code.*llm|coding.*llm|llm.*program/i],
  ['LLM与生成', '提示与上下文学习', /prompt.engineer|in.context.learn|\bICL\b|few.shot.*llm|llm.*prompt|prompt.*llm/i],
  ['LLM与生成', '指令微调与对齐', /instruct.*tun|instruct.*follow|\bRLHF\b|\bDPO\b|preference.optim|reward.model|align.*llm|llm.*align|fine.tun.*llm/i],
  ['LLM与生成', '智能体与工具', /llm.*agent|agent.*llm|tool.use.*llm|llm.*tool|function.call|autonomous.agent/i],
  ['LLM与生成', '知识编辑与更新', /knowledge.edit|edit.fact|unlearn|machine.unlearn/i],
  ['LLM与生成', '高效推理与压缩', /llm.*efficien|efficien.*llm|quantiz|model.compress|speculative.decod|kv.cache|\blora\b/i],
  ['LLM与生成', '幻觉与检测', /hallucin|grounded.*generat|faithful.*generat/i],
  ['LLM与生成', '数据合成与增强', /synthetic.data|data.augment|self.instruct/i],
  ['LLM与生成', '长文本处理', /long.context|context.window|extend.context|long.document/i],
  ['LLM与生成', '模型融合与路由', /model.merg|mixture.of.expert|\bMoE\b/i],
  ['LLM与生成', '安全与可控生成', /safety.*llm|llm.*safety|toxic.*llm|guardrail/i],

  // ===== LLM广义匹配 =====
  ['LLM与生成', 'LLM研究', /\bllm\b|\bllms\b|large.language.model|\bgpt\b|\bchatgpt\b|\bllama\b|\bgemma\b|\bmistral\b|\bqwen\b|\bmllm\b|\bmllms\b/i],

  // ===== NLP广义匹配 =====
  ['NLP基础', 'NLP研究', /natural.language.process|\bNLP\b|language.model|word.embed|tokeniz/i],
];

function categorize(title, abstract = '') {
  const text = (title + ' ' + abstract).toLowerCase();
  for (const [cat, sub, pattern] of SUB_RULES) {
    if (pattern.test(text)) return [cat, sub];
  }
  return ['其他', '其他'];
}

module.exports = { SUB_RULES, categorize };
