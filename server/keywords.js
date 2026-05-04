// ACL 2025 名词性关键词提取
// 从 scripts/serve.py 迁移

const NOUN_SET = new Set([
  // 模型架构
  'transformer', 'bert', 'gpt', 'llama', 'mistral', 'gemini', 'claude', 't5',
  'roberta', 'albert', 'xlnet', 'electra', 'deberta', 'bloom', 'falcon',
  'mamba', 'rwkv', 'palm', 'chinchilla', 'opt', 'bloomz', 'vicuna', 'alpaca',
  'phi', 'qwen', 'yi', 'internlm', 'baichuan', 'chatglm', 'glm',
  'encoder', 'decoder', 'encoder-decoder', 'tokenizer', 'embedding',
  'lstm', 'gru', 'cnn', 'rnn', 'gan', 'vae', 'diffusion',
  'autoencoder', 'variational', 'recurrent', 'convolutional',
  'attention', 'self-attention', 'cross-attention', 'multi-head',
  'feedforward', 'softmax', 'layernorm', 'batchnorm',
  // 方法技术
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
  // NLP任务
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
  // 研究对象/概念
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
  // 数据集/基准
  'glue', 'superglue', 'squad', 'mnli', 'sst', 'cola', 'qqp',
  'commonsenseqa', 'hellaswag', 'mmlu', 'gsm8k', 'math',
  'humaneval', 'mbpp', 'code-contests', 'apps',
  'wmt', 'iwslt', 'opus', 'flores',
  'imagenet', 'coco', 'vqa', 'visual-genome',
  'squad', 'natural-questions', 'triviaqa', 'hotpotqa',
  'truthfulqa', 'realtoxicityprompts', 'bbq', 'winobias',
  'acl', 'emnlp', 'naacl', 'coling', 'aacl',
  // 评价指标
  'bleu', 'rouge', 'meteor', 'bertscore', 'comet',
  'perplexity', 'f1-score', 'accuracy', 'precision', 'recall',
  'auc', 'roc', 'matthews', 'cohen-kappa',
  'pass@k', 'human-evaluation', 'automatic-evaluation',
]);

const ZH_NOUN_SET = new Set([
  // 模型架构
  '大语言模型', '语言模型', '预训练模型', '基础模型',
  '变换器', '编码器', '解码器', '分词器',
  '注意力机制', '自注意力', '交叉注意力', '多头注意力',
  '卷积神经网络', '循环神经网络', '生成对抗网络', '变分自编码器',
  '长短期记忆', '门控循环单元', '残差网络',
  // 方法技术
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
  // NLP任务
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
  // 研究对象/概念
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
  // 数据集/基准
  '通用语言理解', '阅读理解', '情感分析基准',
  '机器翻译基准', '代码生成基准',
  '图像分类', '目标检测', '视觉问答',
  '事实性基准', '毒性基准', '偏见基准',
  // 评价指标
  '双语评估替补', '摘要评估', '语义相似度',
  '困惑度', '准确率', '精确率', '召回率',
  '人工评估', '自动评估',
]);

/**
 * 提取名词性关键词
 * @param {Array} papers - 论文数组
 * @param {string} lang - 'en' 或 'zh'
 * @param {number} topN - 返回前 N 个关键词
 * @returns {Array} [keyword, count] 数组
 */
function extractNounKeywords(papers, lang = 'en', topN = 150) {
  const keywords = {};

  for (const p of papers) {
    if (lang === 'en') {
      const text = (p.title || '') + ' ' + (p.abstract_en || '');
      const words = new Set(
        (text.toLowerCase().match(/\b[a-zA-Z][a-zA-Z\-]{2,}\b/g) || [])
          .map(w => w.replace(/^-+|-+$/g, ''))
      );
      for (const w of words) {
        if (NOUN_SET.has(w)) {
          keywords[w] = (keywords[w] || 0) + 1;
        }
      }
    } else {
      const text = p.abstract_zh || '';
      const zhWords = new Set(text.match(/[一-龥]{2,6}/g) || []);
      for (const w of zhWords) {
        if (ZH_NOUN_SET.has(w)) {
          keywords[w] = (keywords[w] || 0) + 1;
        }
      }
    }
  }

  return Object.entries(keywords)
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN);
}

module.exports = { extractNounKeywords, NOUN_SET, ZH_NOUN_SET };
