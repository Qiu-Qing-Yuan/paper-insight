# NLP基础

> 本分类共 320 篇论文

## 语义相似度 (45 篇)

---

## 1. EcomScriptBench: A Multi-task Benchmark forE-commerce Script Planning via Step-wise Intention-Driven Product Association

**类别**: `主会-长文`

**作者**: Weiqi Wang, Limeng Cui, Xin Liu, Sreyashi Nag, Wenju Xu, Chen Luo, Sheikh Muhammad Sarwar, Yang Li, Hansu Gu, Hui Liu, Changlong Yu, Jiaxin Bai, Yifan Gao, Haiyang Zhang, Qi He, Shuiwang Ji, Yangqiu Song

**ID**: 2025.acl-long.1

**摘要(英文)**:
> Goal-oriented script planning, or the ability to devise coherent sequences of actions toward specific goals, is commonly employed by humans to plan for typical activities. In e-commerce, customers increasingly seek LLM-based assistants to generate scripts and recommend products at each step, thereby facilitating convenient and efficient shopping experiences. However, this capability remains underexplored due to several challenges, including the inability of LLMs to simultaneously conduct script planning and product retrieval, difficulties in matching products caused by semantic discrepancies between planned actions and search queries, and a lack of methods and benchmark data for evaluation. In this paper, we step forward by formally defining the task of E-commerce Script Planning (EcomScript) as three sequential subtasks. We propose a novel framework that enables the scalable generation of product-enriched scripts by associating products with each step based on the semantic similarity between the actions and their purchase intentions. By applying our framework to real-world e-commerce data, we construct the very first large-scale EcomScript dataset, EcomScriptBench, which includes 605,229 scripts sourced from 2.4 million products. Human annotations are then conducted to provide gold labels for a sampled subset, forming an evaluation benchmark. Extensive experiments reveal that current (L)LMs face significant challenges with EcomScript tasks, even after fine-tuning, while injecting product purchase intentions improves their performance.

**摘要(中文)**:
> 面向目标的脚本规划，或者说针对特定目标设计连贯的行动序列的能力，通常被人类用来规划典型的活动。在电子商务中，客户越来越多地寻求基于LLM的助手来生成脚本并在每个步骤推荐产品，从而促进便捷高效的购物体验。然而，由于存在一些挑战，这种能力仍未得到充分探索，包括大语言模型无法同时进行脚本规划和产品检索、计划操作和搜索查询之间的语义差异导致产品匹配困难，以及缺乏评估方法和基准数据。在本文中，我们将电子商务脚本规划（EcomScript）任务正式定义为三个连续的子任务。我们提出了一种新颖的框架，该框架可以根据操作与其购买意图之间的语义相似性将产品与每个步骤相关联，从而能够可扩展地生成产品丰富的脚本。通过将我们的框架应用于现实世界的电子商务数据，我们构建了第一个大规模 EcomScript 数据集 EcomScriptBench，其中包括来自 240 万种产品的 605,229 个脚本。然后进行人工注释，为采样子集提供黄​​金标签，形成评估基准。大量实验表明，当前的 (L)LM 面临着 EcomScript 任务的重大挑战，即使在微调之后也是如此，同时注入产品购买意图可以提高其性能。

---

## 2. Modular Sentence Encoders: Separating Language Specialization from Cross-Lingual Alignment

**类别**: `主会-长文`

**作者**: Yongxin Huang, Kexin Wang, Goran Glavaš, Iryna Gurevych

**ID**: 2025.acl-long.108

**摘要(英文)**:
> Multilingual sentence encoders (MSEs) are commonly obtained by training multilingual language models to map sentences from different languages into a shared semantic space. As such, they are subject to curse of multilinguality, a loss of monolingual representational accuracy due to parameter sharing. Another limitation of MSEs is the trade-off between different task performance: cross-lingual alignment training distorts the optimal monolingual structure of semantic spaces of individual languages, harming the utility of sentence embeddings in monolingual tasks; cross-lingual tasks, such as cross-lingual semantic similarity and zero-shot transfer for sentence classification, may also require conflicting cross-lingual alignment strategies. In this work, we address both issues by means of modular training of sentence encoders. We first train language-specific monolingual modules to mitigate negative interference between languages (i.e., the curse). We then align all non-English sentence embeddings to the English by training cross-lingual alignment adapters, preventing interference with monolingual specialization from the first step. We train the cross-lingual adapters with two different types of data to resolve the conflicting requirements of different cross-lingual tasks. Monolingual and cross-lingual results on semantic text similarity and relatedness, bitext mining and sentence classification show that our modular solution achieves better and more balanced performance across all the tasks compared to full-parameter training of monolithic multilingual sentence encoders, especially benefiting low-resource languages.

**摘要(中文)**:
> 多语言句子编码器（MSE）通常是通过训练多语言语言模型将不同语言的句子映射到共享语义空间来获得的。因此，它们受到多语言的诅咒，由于参数共享而导致单语表示准确性的损失。 MSE的另一个限制是不同任务性能之间的权衡：跨语言对齐训练扭曲了各个语言语义空间的最佳单语结构，损害了句子嵌入在单语任务中的效用；跨语言任务，例如跨语言语义相似性和句子分类的零样本迁移，也可能需要相互冲突的跨语言对齐策略。在这项工作中，我们通过句子编码器的模块化训练来解决这两个问题。我们首先训练特定于语言的单语模块，以减轻语言之间的负面干扰（即诅咒）。然后，我们通过训练跨语言对齐适配器将所有非英语句子嵌入与英语对齐，从第一步就防止干扰单语言专业化。我们用两种不同类型的数据训练跨语言适配器，以解决不同跨语言任务的冲突需求。关于语义文本相似性和相关性、双文本挖掘和句子分类的单语和跨语言结果表明，与单片多语言句子编码器的全参数训练相比，我们的模块化解决方案在所有任务中实现了更好、更平衡的性能，特别是有利于低资源语言。

---

## 3. Token Prepending: A Training-Free Approach for Eliciting Better Sentence Embeddings fromLLMs

**类别**: `主会-长文`

**作者**: Yuchen Fu, Zifeng Cheng, Zhiwei Jiang, Zhonghui Wang, Yafeng Yin, Zhengliang Li, Qing Gu

**ID**: 2025.acl-long.159

**摘要(英文)**:
> Extracting sentence embeddings from large language models (LLMs) is a promising direction, as LLMs have demonstrated stronger semantic understanding capabilities. Previous studies typically focus on prompt engineering to elicit sentence embeddings from LLMs by prompting the model to encode sentence information into the embedding of the last token.However, LLMs are mostly decoder-only models with causal attention and the earlier tokens in the sentence cannot attend to the latter tokens, resulting in biased encoding of sentence information and cascading effects on the final decoded token.To this end, we propose a novel Token Prepending (TP) technique that prepends each layer’s decoded sentence embedding to the beginning of the sentence in the next layer’s input, allowing earlier tokens to attend to the complete sentence information under the causal attention mechanism.The proposed TP technique is a plug-and-play and training-free technique, which means it can be seamlessly integrated with various prompt-based sentence embedding methods and autoregressive LLMs.Extensive experiments on various Semantic Textual Similarity (STS) tasks and downstream classification tasks demonstrate that our proposed TP technique can significantly improve the performance of existing prompt-based sentence embedding methods across different LLMs, while incurring negligible additional inference cost.

**摘要(中文)**:
> 从大型语言模型（LLM）中提取句子嵌入是一个有前途的方向，因为 LLM 已表现出更强的语义理解能力。以前的研究通常侧重于提示工程，通过促使模型将句子信息编码到最后一个标记的嵌入中来从LLM中引出句子嵌入。然而，LLM大多是具有因果关注的仅解码器模型，句子中较早的标记无法关注后面的标记，导致句子信息的编码有偏差并对最终解码的标记产生级联效应。为此，我们提出了一种新颖的标记预置（TP）技术，将每层解码后的句子嵌入前置到下一层输入中的句子开头，允许较早的标记在因果注意机制下关注完整的句子信息。所提出的TP技术是一种即插即用和免训练的技术，这意味着它可以与各种基于提示的句子嵌入方法和自回归LLM无缝集成。对各种语义文本相似性（STS）任务和下游分类任务的大量实验表明，我们的TP技术可以与各种基于提示的句子嵌入方法和自回归LLM无缝集成。所提出的 TP 技术可以显着提高不同大语言模型现有的基于提示的句子嵌入方法的性能，同时产生的额外推理成本可以忽略不计。

---

## 4. Contrastive Prompting Enhances Sentence Embeddings inLLMs through Inference-Time Steering

**类别**: `主会-长文`

**作者**: Zifeng Cheng, Zhonghui Wang, Yuchen Fu, Zhiwei Jiang, Yafeng Yin, Cong Wang, Qing Gu

**ID**: 2025.acl-long.174

**摘要(英文)**:
> Extracting sentence embeddings from large language models (LLMs) is a practical direction, as it requires neither additional data nor fine-tuning. Previous studies usually focus on prompt engineering to guide LLMs to encode the core semantic information of the sentence into the embedding of the last token. However, the last token in these methods still encodes an excess of non-essential information, such as stop words, limiting its encoding capacity. To this end, we propose a Contrastive Prompting (CP) technique that introduces an extra auxiliary prompt to elicit better sentence embedding. By contrasting with the auxiliary prompt, CP can steer existing prompts to encode the core semantics of the sentence, rather than non-essential information. CP is a plug-and-play inference-time intervention method that can be combined with various prompt-based methods. Extensive experiments on Semantic Textual Similarity (STS) tasks and downstream classification tasks demonstrate that our method can improve the performance of existing prompt-based methods across different LLMs.

**摘要(中文)**:
> 从大型语言模型（LLM）中提取句子嵌入是一个实用的方向，因为它既不需要额外的数据，也不需要微调。之前的研究通常集中在提示工程上，以指导LLM将句子的核心语义信息编码到最后一个token的嵌入中。然而，这些方法中的最后一个标记仍然编码了过多的非必要信息，例如停用词，限制了其编码能力。为此，我们提出了一种对比提示（CP）技术，引入额外的辅助提示来引发更好的句子嵌入。与辅助提示相比，CP 可以引导现有的提示来编码句子的核心语义，而不是非必要的信息。 CP是一种即插即用的推理时间干预方法，可以与各种基于提示的方法结合使用。对语义文本相似性（STS）任务和下游分类任务的大量实验表明，我们的方法可以提高不同大语言模型现有基于提示的方法的性能。

---

## 5. Visual Evidence Prompting Mitigates Hallucinations in Large Vision-Language Models

**类别**: `主会-长文`

**作者**: Wei Li, Zhen Huang, Houqiang Li, Le Lu, Yang Lu, Xinmei Tian, Xu Shen, Jieping Ye

**ID**: 2025.acl-long.205

**摘要(英文)**:
> Large Vision-Language Models (LVLMs) have shown impressive progress by integrating visual perception with linguistic understanding to produce contextually grounded outputs. Despite these advancements achieved, LVLMs still suffer from the hallucination problem, e.g., they tend to produce content that does not exist in the input images. Our investigation suggests that such hallucinations often stem from the deficiencies in fine-grained comprehension on the visual aspect, particularly when visual scenes exhibit appearance or semantic similarities (e.g., bicycle vs. motorcycles, baseball bat vs. baseball). In this work, we show such hallucination is naturally mitigated via a novel method called visual evidence prompting, utilizing small visual models to complement the LVLMs. While traditional visual models are not adept at interacting with humans, they excel at perceiving the fine-grained image contents. By symbolizing the professional outputs of domain-expert models as prompts, the LVLM generalists are able to refer to these evidences as visual knowledge to generate more precise answers. Detailed analysis shows that visual evidence enables models to adjust and rectify the attribution and attention on the images, reducing visual confusion by suppressing false activation while enhancing correct ones. Extensive experiments and in-depth analysis demonstrate the effectiveness of our method. We hope our straightforward but insightful work enhances the comprehension of hallucination in LVLMs and offers valuable perspectives on addressing such challenges.

**摘要(中文)**:
> 大视觉语言模型（LVLM）通过将视觉感知与语言理解相结合来产生基于上下文的输出，从而取得了令人瞩目的进展。尽管取得了这些进步，LVLM 仍然存在幻觉问题，例如，它们往往会产生输入图像中不存在的内容。我们的调查表明，这种幻觉通常源于对视觉方面的细粒度理解的缺陷，特别是当视觉场景表现出外观或语义相似性时（例如，自行车与摩托车、棒球棒与棒球）。在这项工作中，我们展示了这种幻觉可以通过一种称为视觉证据提示的新方法自然减轻，该方法利用小型视觉模型来补充 LVLM。虽然传统的视觉模型不擅长与人类交互，但它们擅长感知细粒度的图像内容。通过将领域专家模型的专业输出符号化为提示，LVLM 通才能够将这些证据作为视觉知识来引用，以生成更精确的答案。详细分析表明，视觉证据使模型能够调整和纠正图像的归因和注意力，通过抑制错误激活同时增强正确激活来减少视觉混乱。大量的实验和深入的分析证明了我们方法的有效性。我们希望我们的直接而富有洞察力的工作能够增强对 LVLM 中幻觉的理解，并为应对此类挑战提供有价值的观点。

---

## 6. IRT-Router: Effective and Interpretable Multi-LLMRouting via Item Response Theory

**类别**: `主会-长文`

**作者**: Wei Song, Zhenya Huang, Cheng Cheng, Weibo Gao, Bihan Xu, GuanHao Zhao, Fei Wang, Runze Wu

**ID**: 2025.acl-long.761

**摘要(英文)**:
> Large language models (LLMs) have demonstrated exceptional performance across a wide range of natural language tasks. However, selecting the optimal LLM to respond to a user query often necessitates a delicate balance between performance and cost. While powerful models deliver better results, they come at a high cost, whereas smaller models are more cost-effective but less capable. To address this trade-off, we propose IRT-Router, a multi-LLM routing framework that efficiently routes user queries to the most suitable LLM. Inspired by Item Response Theory (IRT), a psychological measurement methodology, IRT-Router explicitly models the relationship between LLM capabilities and user query attributes. This not only enables accurate prediction of response performance but also provides interpretable insights, such as LLM abilities and query difficulty. Additionally, we design an online query warm-up technique based on semantic similarity, further enhancing the online generalization capability of IRT-Router. Extensive experiments on 20 LLMs and 12 datasets demonstrate that IRT-Router outperforms most baseline methods in terms of effectiveness and interpretability. Its superior performance in cold-start scenarios further confirms the reliability and practicality of IRT-Router in real-world applications. Code is available athttps://github.com/Mercidaiha/IRT-Router.

**摘要(中文)**:
> 大型语言模型 (LLM) 在各种自然语言任务中都表现出了卓越的性能。然而，选择最佳的大语言模型来响应用户查询通常需要在性能和成本之间取得微妙的平衡。虽然强大的模型可以提供更好的结果，但它们的成本很高，而较小的模型更具成本效益，但能力较差。为了解决这种权衡问题，我们提出了IRT-Router，这是一个多LLM路由框架，可以有效地将用户查询路由到最合适的LLM。受项目响应理论（IRT）（一种心理测量方法）的启发，IRT-Router 显式地建模了 LLM 功能和用户查询属性之间的关系。这不仅可以准确预测响应性能，还可以提供可解释的见解，例如 LLM 能力和查询难度。此外，我们设计了一种基于语义相似性的在线查询预热技术，进一步增强了IRT-Router的在线泛化能力。对 20 个大语言模型和 12 个数据集的大量实验表明，IRT-Router 在有效性和可解释性方面优于大多数基线方法。其在冷启动场景中的优越性能进一步证实了IRT-Router在实际应用中的可靠性和实用性。代码可在 https://github.com/Mercidaiha/IRT-Router 获取。

---

## 7. PRISM: A Framework for Producing Interpretable Political Bias Embeddings with Political-Aware Cross-Encoder

**类别**: `主会-长文`

**作者**: Yiqun Sun, Qiang Huang, Anthony Kum Hoe Tung, Jun Yu

**ID**: 2025.acl-long.1344

**摘要(英文)**:
> Semantic Text Embedding is a fundamental NLP task that encodes textual content into vector representations, where proximity in the embedding space reflects semantic similarity. While existing embedding models excel at capturing general meaning, they often overlook ideological nuances, limiting their effectiveness in tasks that require an understanding of political bias. To address this gap, we introduce PRISM, the first framework designed toProduce inteRpretable polItical biaSeMbeddings. PRISM operates in two key stages: (1) Controversial Topic Bias Indicator Mining, which systematically extracts fine-grained political topics and corresponding bias indicators from weakly labeled news data, and (2) Cross-Encoder Political Bias Embedding, which assigns structured bias scores to news articles based on their alignment with these indicators. This approach ensures that embeddings are explicitly tied to bias-revealing dimensions, enhancing both interpretability and predictive power. Through extensive experiments on large-scale datasets, we demonstrate that PRISM outperforms state-of-the-art text embedding models in political bias classification while offering highly interpretable representations that facilitate diversified retrieval and ideological analysis. The source code is available athttps://anonymous.4open.science/r/PRISM-80B4/.

**摘要(中文)**:
> 语义文本嵌入是一项基本的 NLP 任务，它将文本内容编码为向量表示，其中嵌入空间的接近程度反映了语义相似性。虽然现有的嵌入模型擅长捕捉一般含义，但它们经常忽略意识形态的细微差别，从而限制了它们在需要理解政治偏见的任务中的有效性。为了解决这一差距，我们引入了 PRISM，这是第一个旨在产生可解释的政治偏见的框架。 PRISM 分为两个关键阶段：(1) 有争议的主题偏见指标挖掘，从弱标记的新闻数据中系统地提取细粒度的政治主题和相应的偏见指标；(2) 跨编码器政治偏见嵌入，根据新闻文章与这些指标的一致性，为新闻文章分配结构化偏见分数。这种方法确保嵌入与偏差揭示维度明确相关，从而增强可解释性和预测能力。通过对大规模数据集的大量实验，我们证明 PRISM 在政治偏见分类方面优于最先进的文本嵌入模型，同时提供高度可解释的表示，促进多样化的检索和意识形态分析。源代码可在 https://anonymous.4open.science/r/PRISM-80B4/ 获取。

---

## 8. MIR: Methodology Inspiration Retrieval for Scientific Research Problems

**类别**: `主会-长文`

**作者**: Aniketh Garikaparthi, Manasi Patwardhan, Aditya Sanjiv Kanade, Aman Hassan, Lovekesh Vig, Arman Cohan

**ID**: 2025.acl-long.1390

**摘要(英文)**:
> There has been a surge of interest in harnessing the reasoning capabilities of Large Language Models (LLMs) to accelerate scientific discovery. While existing approaches rely on grounding the discovery process within the relevant literature, effectiveness varies significantly with the quality and nature of the retrieved literature. We address the challenge of retrieving prior work whose concepts can inspire solutions for a given research problem, a task we define as Methodology Inspiration Retrieval (MIR). We construct a novel dataset tailored for training and evaluating retrievers on MIR, and establish baselines. To address MIR, we build the Methodology Adjacency Graph (MAG); capturing methodological lineage through citation relationships. We leverage MAG to embed an “intuitive prior’’ into dense retrievers for identifying patterns of methodological inspiration beyond superficial semantic similarity. This achieves significant gains of +5.4 in Recall@3 and +7.8 in Mean Average Precision (mAP) over strong baselines. Further, we adapt LLM-based re-ranking strategies to MIR, yielding additional improvements of +4.5 in Recall@3 and +4.8 in mAP. Through extensive ablation studies and qualitative analyses, we exhibit the promise of MIR in enhancing automated scientific discovery and outline avenues for advancing inspiration-driven retrieval.

**摘要(中文)**:
> 人们对利用大型语言模型 (LLM) 的推理能力来加速科学发现的兴趣日益高涨。虽然现有方法依赖于相关文献中的发现过程，但有效性随着检索文献的质量和性质的不同而有很大差异。我们解决检索先前工作的挑战，这些工作的概念可以激发给定研究问题的解决方案，我们将这项任务定义为方法论灵感检索（MIR）。我们构建了一个专门用于在 MIR 上训练和评估检索器的新颖数据集，并建立基线。为了解决 MIR，我们构建了方法邻接图 (MAG)；通过引用关系捕捉方法谱系。我们利用 MAG 将“直观先验”嵌入到密集检索器中，以识别超越表面语义相似性的方法灵感模式。这在强基线上实现了 Recall@3 的 +5.4 和平均平均精度 (mAP) 的 +7.8 的显着增益。此外，我们将基于 LLM 的重新排名策略应用于 MIR，在 Recall@3 中产生了 +4.5 的额外改进，在 mAP 中产生了 +4.8 的额外改进。通过广泛的消融研究和定性研究通过分析，我们展示了 MIR 在增强自动化科学发现方面的前景，并概述了推进灵感驱动检索的途径。

---

## 9. From Neurons to Semantics: Evaluating Cross-Linguistic Alignment Capabilities of Large Language Models via Neurons Alignment

**类别**: `主会-长文`

**作者**: Chongxuan Huang, Yongshi Ye, Biao Fu, Qifeng Su, Xiaodong Shi

**ID**: 2025.acl-long.1406

**摘要(英文)**:
> Large language models (LLMs) have demonstrated remarkable multilingual capabilities, however, how to evaluate cross-lingual alignment remains underexplored. Existing alignment benchmarks primarily focus on sentence embeddings, but prior research has shown that neural models tend to induce a non-smooth representation space, which impact of semantic alignment evaluation on low-resource languages. Inspired by neuroscientific findings that similar information activates overlapping neuronal regions, we propose a novel *Neuron State-Based Cross-Lingual Alignment*(NeuronXA)to assess the cross-lingual a lignment capabilities of LLMs, which offers a more semantically grounded approach to assess cross-lingual alignment. We evaluate NeuronXA on several prominent multilingual LLMs (LLaMA, Qwen, Mistral, GLM, and OLMo) across two transfer tasks and three multilingual benchmarks. The results demonstrate that with only 100 parallel sentence pairs, NeuronXA achieves a Pearson correlation of 0.9556 with downstream tasks performance and 0.8524 with transferability. These findings demonstrate NeuronXA’s effectiveness in assessing both cross-lingual alignment and transferability, even with a small dataset. This highlights its potential to advance cross-lingual alignment research and to improve the semantic understanding of multilingual LLMs.

**摘要(中文)**:
> 大型语言模型（LLM）已经表现出了卓越的多语言能力，然而，如何评估跨语言对齐仍然有待探索。现有的对齐基准主要关注句子嵌入，但先前的研究表明，神经模型往往会产生非平滑的表示空间，这会影响语义对齐评估对低资源语言的影响。受神经科学发现相似信息激活重叠神经元区域的启发，我们提出了一种新颖的*基于神经元状态的跨语言对齐*（NeuronXA）来评估大语言模型的跨语言对齐能力，它提供了一种更基于语义的方法来评估跨语言对齐。我们在几个著名的多语言 LLM（LLaMA、Qwen、Mistral、GLM 和 OLMo）上通过两个迁移任务和三个多语言基准评估 NeuronXA。结果表明，仅使用 100 个并行句子对，NeuronXA 与下游任务性能的皮尔逊相关性为 0.9556，与可迁移性的皮尔逊相关性为 0.8524。这些发现证明了 NeuronXA 在评估跨语言对齐和可转移性方面的有效性，即使使用小数据集也是如此。这凸显了其推进跨语言对齐研究和提高多语言大语言模型语义理解的潜力。

---

## 10. Re3Syn: A Dependency-Based Data Synthesis Framework for Long-Context Post-training

**类别**: `主会-长文`

**作者**: Zhiyang Zhang, Ziqiang Liu, Huiming Wang, Renke Shan, Li Kuang, Lu Wang, De Wen Soh

**ID**: 2025.acl-long.1518

**摘要(英文)**:
> An important trend in the realm of large language models (LLMs) is the development of longer context windows. However, training LLMs with long context windows to acquire the capability of effectively modeling lengthy inputs is often hindered by the scarcity of naturally long-context data. Existing methods for constructing long-context data by concatenating short documents have overlooked a crucial characteristic of long-context data quality, namely semantic dependency. In this paper, we propose a novel framework called Retrieval, Dependency Recognition, and Reorder for data synthesis (Re3Syn), which leverages semantic similarity to retrieve relevant documents and form several batches. Within each batch, the framework comprehensively recognizes dependency and utilizes them, along with a reorder algorithm, to organize the short documents into coherent long-context data. Comprehensive experiment on multiple benchmarks indicate that the data generated by the Re3Syn has longer dependencies and significantly enhances the model’s long-context capabilities. For reproducibility, we will release our codebase upon acceptance.

**摘要(中文)**:
> 大型语言模型（LLM）领域的一个重要趋势是开发更长的上下文窗口。然而，训练具有长上下文窗口的大语言模型以获得有效建模冗长输入的能力通常会受到自然长上下文数据稀缺的阻碍。现有的通过连接短文档来构建长上下文数据的方法忽略了长上下文数据质量的一个关键特征，即语义依赖性。在本文中，我们提出了一种名为检索、依赖识别和数据合成重新排序（Re3Syn）的新颖框架，它利用语义相似性来检索相关文档并形成多个批次。在每个批次中，该框架都会全面识别依赖性，并利用它们以及重新排序算法，将短文档组织成连贯的长上下文数据。多个基准的综合实验表明，Re3Syn生成的数据具有更长的依赖关系，显着增强了模型的长上下文能力。为了可重复性，我们将在接受后发布我们的代码库。

---

## 11. Dynamic Chunking and Selection for Reading Comprehension of Ultra-Long Context in Large Language Models

**类别**: `主会-长文`

**作者**: Boheng Sheng, Jiacheng Yao, Meicong Zhang, Guoxiu He

**ID**: 2025.acl-long.1538

**摘要(英文)**:
> Large language models (LLMs) often struggle to accurately read and comprehend extremely long texts. Current methods for improvement typically rely on splitting long contexts into fixed-length chunks. However, fixed truncation risks separating semantically relevant content, leading to ambiguity and compromising accurate understanding. To overcome this limitation, we propose a straightforward approach for dynamically separating and selecting chunks of long context, facilitating a more streamlined input for LLMs. In particular, we compute semantic similarities between adjacent sentences, using lower similarities to adaptively divide long contexts into variable-length chunks. We further train a question-aware classifier to select sensitive chunks that are critical for answering specific questions. Experimental results on both single-hop and multi-hop question-answering benchmarks show that the proposed approach consistently outperforms strong baselines. Notably, it maintains robustness across a wide range of input lengths, handling sequences of up to 256k tokens. Our datasets and code are available at the following link: https://github.com/ECNU-Text-Computing/DCS

**摘要(中文)**:
> 大型语言模型 (LLM) 通常很难准确阅读和理解极长的文本。当前的改进方法通常依赖于将长上下文分割成固定长度的块。然而，固定截断可能会分离语义相关的内容，从而导致歧义并损害准确的理解。为了克服这一限制，我们提出了一种直接的方法来动态分离和选择长上下文块，从而促进大语言模型的更简化的输入。特别是，我们计算相邻句子之间的语义相似度，使用较低的相似度将长上下文自适应地划分为可变长度的块。我们进一步训练问题感知分类器来选择对于回答特定问题至关重要的敏感块。单跳和多跳问答基准的实验结果表明，所提出的方法始终优于强基线。值得注意的是，它在各种输入长度上都保持了鲁棒性，可处理多达 256k 个令牌的序列。我们的数据集和代码可通过以下链接获取：https://github.com/ECNU-Text-Computing/DCS

---

## 12. Squeezed Attention: Accelerating Long Context LengthLLMInference

**类别**: `主会-长文`

**作者**: Coleman Richard Charles Hooper, Sehoon Kim, Hiva Mohammadzadeh, Monishwaran Maheswaran, Sebastian Zhao, June Paik, Michael W. Mahoney, Kurt Keutzer, Amir Gholami

**ID**: 2025.acl-long.1568

**摘要(英文)**:
> Emerging Large Language Model (LLM) applications require long input context in order to perform complex tasks like document analysis and code generation.For these long context length applications, the length of the input prompt poses a significant challenge in terms of inference efficiency since the inference costs increase linearly with sequence length.However, for many of these applications, much of the context in the prompt is fixed across different user inputs, thereby providing the opportunity to perform offline optimizations in order to process user inputs quickly, as they are received. We propose Squeezed Attention to accelerate LLM applications where a large portion of the input context is fixed.We first leverage K-means clustering offline to group the keys for the fixed context based on semantic similarity and represent each cluster with a single centroid value.During inference, we compare query tokens from the user input with the centroids to predict which keys from the fixed context are semantically relevant, and then compute exact attention using only the important keys, thereby reducing bandwidth and computational costs. We also present a hierarchical version of our algorithm which can reduce the complexity of attention from linear to logarithmic with respect to the fixed context length.We evaluate our method on various long-context benchmarks including LongBench, where it achieves a 3.1×reduction in KV budget with no noticeable accuracy loss and up to an 8×reduction with only a 0.5 point accuracy gap for the LLaMA-2-7B-32K, LWM-Text-Chat-1M, and Longchat-7B-v1.5-32K models.Futhermore, we implement kernels for centroid comparison and sparse FlashAttention with important keys, achieving more than 4×speedups during both the prefill and generation phases for long-context inference.Our code is available at https://github.com/SqueezeAILab/SqueezedAttention.

**摘要(中文)**:
> 新兴的大型语言模型 (LLM) 应用程序需要较长的输入上下文，以便执行文档分析和代码生成等复杂任务。对于这些较长上下文长度的应用程序，输入提示的长度对推理效率提出了重大挑战，因为推理成本随序列长度线性增加。但是，对于许多此类应用程序，提示中的大部分上下文在不同的用户输入之间是固定的，从而提供了执行离线优化的机会，以便在收到用户输入时快速处理用户输入。我们提出 Squeezed Attention 来加速 LLM 应用程序，其中大部分输入上下文是固定的。我们首先利用 K 均值离线聚类根据语义相似性对固定上下文的键进行分组，并用单个质心值表示每个集群。在推理过程中，我们将用户输入的查询标记与质心进行比较，以预测固定上下文中的哪些键在语义上相关，然后仅使用重要的键计算精确注意力，从而减少带宽和计算成本。我们还提出了算法的分层版本，可以将相对于固定上下文长度的注意力复杂度从线性降低到对数。我们在包括 LongBench 在内的各种长上下文基准上评估了我们的方法，其中它实现了 KV 预算的 3.1 倍减少，而没有明显的精度损失，并且 LLaMA-2-7B-32K、LWM-Text-Chat-1M 和 LWM-Text-Chat-1M 的 KV 预算减少了 8 倍，精度差距仅为 0.5 点。 Longchat-7B-v1.5-32K 模型。此外，我们实现了用于质心比较的内核和具有重要键的稀疏 FlashAttention，在长上下文推理的预填充和生成阶段实现了超过 4 倍的加速。我们的代码可在 https://github.com/SqueezeAILab/SqueezedAttention 获取。

---

## 13. GenDLN: Evolutionary Algorithm-Based StackedLLMFramework for Joint Prompt Optimization

**类别**: `学生研讨会`

**作者**: Pia Chouayfati, Niklas Herbster, Ábel Domonkos Sáfrán, Matthias Grabmair

**ID**: 2025.acl-srw.92

**摘要(英文)**:
> With Large Language Model (LLM)-based applications becoming more common due to strong performance across many tasks, prompt optimization has emerged as a way to extract better solutions from frozen, often commercial LLMs that are not specifically adapted to a task. LLM-assisted prompt optimization methods provide a promising alternative to manual/human prompt engineering, where LLM “reasoning” can be used to make them optimizing agents. However, the cost of using LLMs for prompt optimization via commercial APIs remains high, especially for heuristic methods like evolutionary algorithms (EAs), which need many iterations to converge, and thus, tokens, API calls, and rate-limited network overhead. We propose GenDLN, an open-source, efficient genetic algorithm-based prompt pair optimization framework that leverages commercial API free tiers. Our approach allows teams with limited resources (NGOs, non-profits, academics, ...) to efficiently use commercial LLMs for EA-based prompt optimization. We conduct experiments on CLAUDETTE for legal terms of service classification and MRPC for paraphrase detection, performing in line with selected prompt optimization baselines, at no cost.

**摘要(中文)**:
> 由于跨许多任务的强大性能，基于大型语言模型 (LLM) 的应用程序变得越来越普遍，即时优化已成为从不专门适应某项任务的冻结的、通常是商业的 LLM 中提取更好解决方案的一种方法。 LLM 辅助提示优化方法为手动/人工提示工程提供了一种有前途的替代方案，其中 LLM“推理”可用于使它们优化代理。然而，通过商业 API 使用 LLM 进行即时优化的成本仍然很高，特别是对于进化算法 (EA) 等启发式方法，它们需要多次迭代才能收敛，因此需要令牌、API 调用和速率限制的网络开销。我们提出 GenDLN，一个开源、高效的基于遗传算法的提示对优化框架，利用商业 API 免费层。我们的方法允许资源有限的团队（非政府组织、非营利组织、学术界……）有效地利用商业大语言模型进行基于 EA 的即时优化。我们在 CLAUDETTE 上进行实验以进行法律服务条款分类，并在 MRPC 上进行释义检测，并根据选定的提示优化基准进行免费实验。

---

## 14. Semantic Outlier Removal with Embedding Models andLLMs

**类别**: `工业Track`

**作者**: Eren Akbiyik, João F. M. De Almeida, Rik Melis, Ritu Sriram, Viviana Petrescu, Vilhjálmur Vilhjálmsson

**ID**: 2025.acl-industry.58

**摘要(英文)**:
> Modern text processing pipelines demand robust methods to remove extraneous content while preserving a document’s core message. Traditional approaches—such as HTML boilerplate extraction or keyword filters—often fail in multilingual settings and struggle with context-sensitive nuances, whereas Large Language Models (LLMs) offer improved quality at high computational cost. We introduce SORE (Semantic Outlier Removal), a cost-effective, transparent method that leverages multilingual sentence embeddings and approximate nearest-neighbor search to identify and excise unwanted text segments. By first identifying core content via metadata embedding and then flagging segments that either closely match predefined outlier groups or deviate significantly from the core, SORE achieves near-LLM extraction precision at a fraction of the cost. Experiments on HTML datasets demonstrate that SORE outperforms structural methods and yield high precision in diverse scenarios. Our system is currently deployed in production, processing millions of documents daily across multiple languages while maintaining both efficiency and accuracy. To facilitate reproducibility and further research, we will publicly release our implementation and evaluation datasets.

**摘要(中文)**:
> 现代文本处理管道需要强大的方法来删除无关内容，同时保留文档的核心信息。传统方法（例如 HTML 样板提取或关键字过滤器）在多语言环境中通常会失败，并且难以应对上下文相关的细微差别，而大型语言模型 (LLM) 可以以较高的计算成本提供更高的质量。我们引入了 SORE（语义异常值去除），这是一种经济高效、透明的方法，它利用多语言句子嵌入和近似最近邻搜索来识别和删除不需要的文本片段。首先通过元数据嵌入来识别核心内容，然后标记与预定义的异常值组紧密匹配或显着偏离核心的片段，SORE 以一小部分成本实现了接近 LLM 的提取精度。 HTML 数据集上的实验表明，SORE 的性能优于结构方法，并且在不同场景下都能产生高精度。我们的系统目前部署在生产中，每天处理数百万个多种语言的文档，同时保持效率和准确性。为了促进可重复性和进一步研究，我们将公开发布我们的实施和评估数据集。

---

## 15. Interpretable Company Similarity with Sparse Autoencoders

**类别**: `工业Track`

**作者**: Marco Molinari, Victor Shao, Luca Imeneo, Mateusz Mikolajczak, Abhimanyu Pandey, Vladimir Tregubiak, Sebastião Kuznetsov Ryder Torres Pereira

**ID**: 2025.acl-industry.73

**摘要(英文)**:
> Determining company similarity is a vital task in finance, underpinning risk management, hedging, and portfolio diversification. Practitioners often rely on sector and industry classifications such as SIC and GICS codes to gauge similarity, the former being used by the U.S. Securities and Exchange Commission (SEC), and the latter widely used by the investment community. Since these classifications lack granularity and need regular updating, using clusters of embeddings of company descriptions has been proposed as a potential alternative, but the lack of interpretability in token embeddings poses a significant barrier to adoption in high-stakes contexts. Sparse Autoencoders (SAEs) have shown promise in enhancing the interpretability of Large Language Models (LLMs) by decomposing Large Language Model (LLM) activations into interpretable features. Moreover, SAEs capture an LLM’s internal representation of a company description, as opposed to semantic similarity alone, as is the case with embeddings. We apply SAEs to company descriptions, and obtain meaningful clusters of equities. We benchmark SAE features against SIC-codes, Industry codes, and Embeddings. Our results demonstrate that SAE features surpass sector classifications and embeddings in capturing fundamental company characteristics. This is evidenced by their superior performance in correlating logged monthly returns – a proxy for similarity – and generating higher Sharpe ratios in co-integration trading strategies, which underscores deeper fundamental similarities among companies. Finally, we verify the interpretability of our clusters, and demonstrate that sparse features form simple and interpretable explanations for our clusters.

**摘要(中文)**:
> 确定公司相似性是金融领域的一项重要任务，是风险管理、对冲和投资组合多元化的基础。从业者经常依靠 SIC 和 GICS 代码等部门和行业分类来衡量相似性，前者被美国证券交易委员会 (SEC) 使用，后者被投资界广泛使用。由于这些分类缺乏粒度并且需要定期更新，因此使用公司描述的嵌入集群已被提议作为一种潜在的替代方案，但令牌嵌入缺乏可解释性对高风险环境中的采用构成了重大障碍。稀疏自动编码器 (SAE) 通过将大语言模型 (LLM) 激活分解为可解释的特征，有望增强大语言模型 (LLM) 的可解释性。此外，SAE 捕获了大语言模型对公司描述的内部表示，而不是单独的语义相似性，就像嵌入的情况一样。我们将 SAE 应用到公司描述中，并获得有意义的股票集群。我们根据 SIC 代码、行业代码和嵌入对 SAE 功能进行基准测试。我们的结果表明，SAE 特征在捕捉公司基本特征方面超越了行业分类和嵌入。这一点可以从它们在关联记录的月度回报（相似性的代理）以及在协整交易策略中产生更高的夏普比率（这突显了公司之间更深层次的基本相似性）方面的卓越表现得到证明。最后，我们验证了集群的可解释性，并证明稀疏特征为我们的集群形成了简单且可解释的解释。

---

## 16. AreLLMs reliable? An exploration of the reliability of large language models in clinical note generation

**类别**: `工业Track`

**作者**: Kristine Ann M. Carandang, Jasper Meynard Arana, Ethan Robert Casin, Christopher Monterola, Daniel Stanley Tan, Jesus Felix B. Valenzuela, Christian Alis

**ID**: 2025.acl-industry.99

**摘要(英文)**:
> Due to the legal and ethical responsibilities of healthcare providers (HCPs) for accurate documentation and protection of patient data privacy, the natural variability in the responses of large language models (LLMs) presents challenges for incorporating clinical note generation (CNG) systems, driven by LLMs, into real-world clinical processes. The complexity is further amplified by the detailed nature of texts in CNG. To enhance the confidence of HCPs in tools powered by LLMs, this study evaluates the reliability of 12 open-weight and proprietary LLMs from Anthropic, Meta, Mistral, and OpenAI in CNG in terms of their ability to generate notes that are string equivalent (consistency rate), have the same meaning (semantic consistency) and are correct (semantic similarity), across several iterations using the same prompt. The results show that (1) LLMs from all model families are stable, such that their responses are semantically consistent despite being written in various ways, and (2) most of the LLMs generated notes close to the corresponding notes made by experts. Overall, Meta’s Llama 70B was the most reliable, followed by Mistral’s Small model. With these findings, we recommend the local deployment of these relatively smaller open-weight models for CNG to ensure compliance with data privacy regulations, as well as to improve the efficiency of HCPs in clinical documentation.

**摘要(中文)**:
> 由于医疗保健提供者 (HCP) 对准确记录和保护患者数据隐私负有法律和道德责任，大语言模型 (LLM) 响应的自然变化给将由 LLM 驱动的临床记录生成 (CNG) 系统纳入现实世界的临床流程带来了挑战。 CNG 中文本的详细性质进一步放大了复杂性。为了增强 HCP 对 LLM 支持的工具的信心，本研究评估了 CNG 中来自 Anthropic、Meta、Mistral 和 OpenAI 的 12 个开放权重和专有 LLM 的可靠性，即它们在使用相同提示的多次迭代中生成字符串等效（一致性）、具有相同含义（语义一致性）和正确（语义相似性）的注释的能力。结果表明，（1）来自所有模型系列的大语言模型都是稳定的，因此尽管以不同的方式编写，他们的回答在语义上是一致的，（2）大多数大语言模型生成的注释与专家所做的相应注释接近。总体而言，Meta 的 Llama 70B 最可靠，其次是 Mistral 的 Small 型号。根据这些发现，我们建议在本地部署这些相对较小的 CNG 开放权重模型，以确保遵守数据隐私法规，并提高 HCP 在临床记录中的效率。

---

## 17. Utilizing Semantic Textual Similarity for Clinical Survey Data Feature Selection

**类别**: `Findings`

**作者**: Benjamin C. Warner, Ziqi Xu, Simon Haroutounian, Thomas Kannampallil, Chenyang Lu

**ID**: 2025.findings-acl.27

**摘要(英文)**:
> Surveys are widely used to collect patient data in healthcare, and there is significant clinical interest in predicting patient outcomes using survey data. However, surveys often include numerous features that lead to high-dimensional inputs for machine learning models. This paper exploits a unique source of information in surveys for feature selection. We observe that feature names (i.e., survey questions) are often semantically indicative of what features are most useful. Using language models, we leverage semantic textual similarity (STS) scores between features and targets to select features. The performance of STS scores in directly ranking features as well as in the minimal-redundancy-maximal-relevance (mRMR) algorithm is evaluated using survey data collected as part of a clinical study on persistent post-surgical pain (PPSP) as well as an accessible dataset collected through the NIH All of Us program. Our findings show that features selected with STS can result in higher performance models compared to traditional feature selection algorithms.

**摘要(中文)**:
> 调查广泛用于收集医疗保健中的患者数据，并且利用调查数据预测患者结果具有重大的临床意义。然而，调查通常包含大量特征，为机器学习模型提供高维输入。本文利用调查中独特的信息源进行特征选择。我们观察到，特征名称（即调查问题）通常在语义上表明哪些特征最有用。使用语言模型，我们利用特征和目标之间的语义文本相似性（STS）分数来选择特征。 STS 分数在直接排名特征以及最小冗余最大相关性 (mRMR) 算法中的表现是使用作为持续性术后疼痛 (PPSP) 临床研究的一部分收集的调查数据以及通过 NIH All of Us 计划收集的可访问数据集进行评估的。我们的研究结果表明，与传统的特征选择算法相比，使用 STS 选择的特征可以产生更高性能的模型。

---

## 18. HopRAG: Multi-Hop Reasoning for Logic-Aware Retrieval-Augmented Generation

**类别**: `Findings`

**作者**: Hao Liu, Zhengren Wang, Xi Chen, Zhiyu Li, Feiyu Xiong, Qinhan Yu, Wentao Zhang

**ID**: 2025.findings-acl.97

**摘要(英文)**:
> Retrieval-Augmented Generation (RAG) systems often struggle with imperfect retrieval, as traditional retrievers focus on lexical or semantic similarity rather than logical relevance. To address this, we proposeHopRAG, a novel RAG framework that augments retrieval with logical reasoning through graph-structured knowledge exploration. During indexing, HopRAG constructs a passage graph, with text chunks as vertices and logical connections established via LLM-generated pseudo-queries as edges. During retrieval, it employs aretrieve-reason-prunemechanism: starting with lexically or semantically similar passages, the system explores multi-hop neighbors guided by pseudo-queries and LLM reasoning to identify truly relevant ones. Experiments on multiple multi-hop benchmarks demonstrate that HopRAG’sretrieve-reason-prunemechanism can expand the retrieval scope based on logical connections and improve final answer quality.

**摘要(中文)**:
> 检索增强生成（RAG）系统经常与不完美的检索作斗争，因为传统检索器关注词汇或语义相似性而不是逻辑相关性。为了解决这个问题，我们提出了HopRAG，一种新颖的 RAG 框架，它通过图结构知识探索来增强逻辑推理检索。在索引过程中，HopRAG 构建一个段落图，其中文本块作为顶点，通过 LLM 生成的伪查询建立的逻辑连接作为边。在检索过程中，它采用检索-推理-剪枝机制：从词汇或语义相似的段落开始，系统在伪查询和 LLM 推理的指导下探索多跳邻居，以识别真正相关的段落。多个多跳基准的实验表明，HopRAG的检索原因剪枝机制可以扩大基于逻辑连接的检索范围并提高最终答案质量。

---

## 19. GeAR: Generation Augmented Retrieval

**类别**: `Findings`

**作者**: Haoyu Liu, Shaohan Huang, Jianfeng Liu, Yuefeng Zhan, Hao Sun, Weiwei Deng, Feng Sun, Furu Wei, Qi Zhang

**ID**: 2025.findings-acl.166

**摘要(英文)**:
> Document retrieval techniques are essential for developing large-scale information systems. The common approach involves using a bi-encoder to compute the semantic similarity between a query and documents. However, the scalar similarity often fail to reflect enough information, hindering the interpretation of retrieval results. In addition, this process primarily focuses on global semantics, overlooking the finer-grained semantic relationships between the query and the document’s content. In this paper, we introduce a novel method,GenerationAugmentedRetrieval (GeAR), which not only improves the global document-query similarity through contrastive learning, but also integrates well-designed fusion and decoding modules. This enables GeAR to generate relevant context within the documents based on a given query, facilitating learning to retrieve local fine-grained information.Furthermore, when used as a retriever, GeAR does not incur any additional computational cost over bi-encoders. GeAR exhibits competitive retrieval performance across diverse scenarios and tasks. Moreover, qualitative analysis and the results generated by GeAR provide novel insights into the interpretation of retrieval results. The code, data, and models will be released at https://github.com/microsoft/LMOps.

**摘要(中文)**:
> 文档检索技术对于开发大规模信息系统至关重要。常见的方法涉及使用双编码器来计算查询和文档之间的语义相似度。然而，标量相似度往往无法反映足够的信息，阻碍了检索结果的解释。此外，这个过程主要关注全局语义，忽略了查询和文档内容之间更细粒度的语义关系。在本文中，我们介绍了一种新颖的方法，GenerationAugmentedRetrieval（GeAR），它不仅通过对比学习提高了全局文档查询相似度，而且还集成了精心设计的融合和解码模块。这使得 GeAR 能够根据给定的查询在文档中生成相关上下文，从而有助于学习检索本地细粒度信息。此外，当用作检索器时，GeAR 不会比双编码器产生任何额外的计算成本。 GeAR 在不同的场景和任务中展现出有竞争力的检索性能。此外，定性分析和 GeAR 生成的结果为检索结果的解释提供了新颖的见解。代码、数据和模型将在 https://github.com/microsoft/LMOps 发布。

---

## 20. DALR: Dual-level Alignment Learning for Multimodal Sentence Representation Learning

**类别**: `Findings`

**作者**: Kang He, Yuzhe Ding, Haining Wang, Fei Li, Chong Teng, Donghong Ji

**ID**: 2025.findings-acl.183

**摘要(英文)**:
> Previous multimodal sentence representation learning methods have achieved impressive performance. However, most approaches focus on aligning images and text at a coarse level, facing two critical challenges: cross-modal misalignment bias and intra-modal semantic divergence, which significantly degrade sentence representation quality. To address these challenges, we propose DALR (Dual-level Alignment Learning for Multimodal Sentence Representation). For cross-modal alignment, we propose a consistency learning module that softens negative samples and utilizes semantic similarity from an auxiliary task to achieve fine-grained cross-modal alignment. Additionally, we contend that sentence relationships go beyond binary positive-negative labels, exhibiting a more intricate ranking structure. To better capture these relationships and enhance representation quality, we integrate ranking distillation with global intra-modal alignment learning. Comprehensive experiments on semantic textual similarity (STS) and transfer (TR) tasks validate the effectiveness of our approach, consistently demonstrating its superiority over state-of-the-art baselines.

**摘要(中文)**:
> 以前的多模态句子表示学习方法已经取得了令人印象深刻的性能。然而，大多数方法侧重于粗略地对齐图像和文本，面临两个关键挑战：跨模态错位偏差和模内语义发散，这会显着降低句子表示质量。为了应对这些挑战，我们提出了 DALR（多模态句子表示的双层对齐学习）。对于跨模态对齐，我们提出了一种一致性学习模块，该模块可以软化负样本并利用辅助任务的语义相似性来实现细粒度的跨模态对齐。此外，我们认为句子关系超越了二元正负标签，表现出更复杂的排名结构。为了更好地捕捉这些关系并提高表示质量，我们将排名蒸馏与全局模内对齐学习相结合。关于语义文本相似性（STS）和迁移（TR）任务的综合实验验证了我们方法的有效性，一致证明了其相对于最先进基线的优越性。

---

## 21. One-Dimensional Object Detection for Streaming Text Segmentation of Meeting Dialogue

**类别**: `Findings`

**作者**: Rui He, Zhongqing Wang, Minjie Qiang, Hongling Wang, Yifan Zhang, Hua Xu, Shuai Fan, Guodong Zhou

**ID**: 2025.findings-acl.213

**摘要(英文)**:
> Dialogue text segmentation aims to partition dialogue content into consecutive paragraphs based on themes or logic, enhancing its comprehensibility and manageability. Current text segmentation models, when applied directly to STS (Streaming Text Segmentation), exhibit numerous limitations, such as imbalances in labels that affect the stability of model training, and discrepancies between the model’s training tasks (sentence classification) and the actual text segmentation that limit the model’s segmentation capabilities.To address these challenges, we first implement STS for the first time using a sliding window-based segmentation method. Secondly, we employ two different levels of sliding window-based balanced label strategies to stabilize the training process of the streaming segmentation model and enhance training convergence speed. Finally, by adding a one-dimensional bounding-box regression task for text sequences within the window, we restructure the training approach of STS tasks, shifting from sentence classification to sequence segmentation, thereby aligning the training objectives with the task objectives, which further enhanced the model’s performance. Extensive experimental results demonstrate that our method is robust, controllable, and achieves state-of-the-art performance.

**摘要(中文)**:
> 对话文本分割旨在根据主题或逻辑将对话内容分割成连续的段落，增强其可理解性和可管理性。当前的文本分割模型在直接应用于STS（流式文本分割）时表现出许多局限性，例如标签不平衡影响模型训练的稳定性，模型的训练任务（句子分类）与实际文本分割之间的差异限制了模型的分割能力。为了解决这些挑战，我们首先使用基于滑动窗口的分割方法实现STS。其次，我们采用两种不同级别的基于滑动窗口的平衡标签策略来稳定流分割模型的训练过程并提高训练收敛速度。最后，通过在窗口内添加文本序列的一维边界框回归任务，我们重构了STS任务的训练方法，从句子分类转向序列分割，从而使训练目标与任务目标保持一致，进一步增强了模型的性能。大量的实验结果表明，我们的方法稳健、可控，并且实现了最先进的性能。

---

## 22. Document Segmentation Matters for Retrieval-Augmented Generation

**类别**: `Findings`

**作者**: Zhitong Wang, Cheng Gao, Chaojun Xiao, Yufei Huang, Shuzheng Si, Kangyang Luo, Yuzhuo Bai, Wenhao Li, Tangjian Duan, Chuancheng Lv, Guoshan Lu, Gang Chen, Fanchao Qi, Maosong Sun

**ID**: 2025.findings-acl.422

**摘要(英文)**:
> Retrieval-augmented generation (RAG) enhances large language models (LLMs) by integrating external knowledge. A critical yet underexplored challenge in RAG is document segmentation, also known as document chunking. Existing widely-used rule-based chunking methods usually lead to suboptimal splits, where overly large chunks introduce irrelevant information and small chunks lack semantic coherence. Existing semantic-based approaches either require costly LLM calls or fail to adaptively group contextually related sentences. To address these limitations, we propose PIC, Pseudo-Instruction for document Chunking), a simple yet effective method that leverages document summaries as pseudo-instructions to guide chunking. By computing semantic similarity between sentences and the summary, PIC dynamically groups sentences into chunks that align with the document’s key themes, ensuring semantic completeness and relevance to potential user instructions. Experiments on multiple open-domain question-answering benchmarks demonstrate that PIC can significantly improve retrieval accuracy (Hits@k) and end-to-end QA performance (Exact Match) without any additional training.

**摘要(中文)**:
> 检索增强生成 (RAG) 通过集成外部知识来增强大型语言模型 (LLM)。 RAG 中一个关键但尚未充分探索的挑战是文档分割，也称为文档分块。现有广泛使用的基于规则的分块方法通常会导致次优分割，其中过大的块会引入不相关的信息，而小块则缺乏语义一致性。现有的基于语义的方法要么需要昂贵的 LLM 调用，要么无法自适应地对上下文相关的句子进行分组。为了解决这些限制，我们提出了 PIC（文档分块伪指令），这是一种简单而有效的方法，利用文档摘要作为伪指令来指导分块。通过计算句子和摘要之间的语义相似性，PIC 动态地将句子分组为与文档关键主题一致的块，确保语义完整性和与潜在用户指令的相关性。在多个开放域问答基准上的实验表明，PIC无需任何额外的训练即可显着提高检索准确性（Hits@k）和端到端QA性能（Exact Match）。

---

## 23. Fine-grained Knowledge Enhancement for Retrieval-Augmented Generation

**类别**: `Findings`

**作者**: Jingxuan Han, Zhendong Mao, Yi Liu, Yexuan Che, Zheren Fu, Quan Wang

**ID**: 2025.findings-acl.522

**摘要(英文)**:
> Retrieval-augmented generation (RAG) effectively mitigates hallucinations in large language models (LLMs) by filling knowledge gaps with retrieved external information. Most existing studies primarily retrieve knowledge documents based on semantic similarity to assist in answering questions but ignore the fine-grained necessary information within documents. In this paper, we propose a novel fine-grained knowledge enhancement method (FKE) for RAG, where fine-grained knowledge primarily includes sentence-level information easily overlooked in the document-based retrieval process. Concretely, we create a disentangled Chain-of-Thought prompting procedure to retrieve fine-grained knowledge from the external knowledge corpus. Then we develop a decoding enhancement strategy to constrain the document-based decoding process using fine-grained knowledge, thereby facilitating more accurate generated answers. Given an existing RAG pipeline, our method could be applied in a plug-and-play manner to enhance its performance with no additional modules or training process. Extensive experiments verify the effectiveness and generality of our method.

**摘要(中文)**:
> 检索增强生成（RAG）通过用检索到的外部信息填补知识空白，有效地减轻了大型语言模型（LLM）中的幻觉。大多数现有研究主要基于语义相似性检索知识文档以帮助回答问题，但忽略了文档中细粒度的必要信息。在本文中，我们提出了一种新颖的 RAG 细粒度知识增强方法（FKE），其中细粒度知识主要包括基于文档的检索过程中容易被忽视的句子级信息。具体来说，我们创建了一个解开的思维链提示程序，以从外部知识语料库中检索细粒度的知识。然后，我们开发一种解码增强策略，使用细粒度知识来约束基于文档的解码过程，从而促进更准确的生成答案。给定现有的 RAG 管道，我们的方法可以以即插即用的方式应用来增强其性能，而无需额外的模块或培训过程。大量的实验验证了我们方法的有效性和通用性。

---

## 24. MinosEval: Distinguishing Factoid and Non-Factoid for Tailored Open-EndedQAEvaluation withLLMs

**类别**: `Findings`

**作者**: Yongqi Fan, Yating Wang, Guandong Wang, Zhai Jie, Jingping Liu, Qi Ye, Tong Ruan

**ID**: 2025.findings-acl.548

**摘要(英文)**:
> Open-ended question answering (QA) is a key task for evaluating the capabilities of large language models (LLMs). Compared to closed-ended QA, it demands longer answer statements, more nuanced reasoning processes, and diverse expressions, making refined and interpretable automatic evaluation both crucial and challenging. Traditional metrics like ROUGE and BERTScore struggle to capture semantic similarities due to different patterns between model responses and reference answers. Current LLM-based evaluation approaches, such as pairwise or listwise comparisons of candidate answers, lack intuitive interpretability. While pointwise scoring of each response provides some descriptions, it fails to adapt across different question contents. Most notably, existing methods overlook the distinction between factoid and non-factoid questions. To address these challenges, we proposeMinosEval, a novel evaluation method that first distinguishes open-ended questions and then ranks candidate answers using different evaluation strategies. For factoid questions, it applies an adaptive key-point scoring strategy, while for non-factoid questions, it uses an instance-aware listwise ranking strategy. Experiments on multiple open-ended QA datasets, including self-built ones with more candidate responses to complement community resources, show that MinosEval better aligns with human annotations and offers more interpretable results.

**摘要(中文)**:
> 开放式问答（QA）是评估大型语言模型（LLM）能力的关键任务。与封闭式问答相比，它需要更长的答案陈述、更细致的推理过程和多样化的表达方式，使得精细化和可解释的自动评估变得至关重要和具有挑战性。由于模型响应和参考答案之间的模式不同，ROUGE 和 BERTScore 等传统指标很难捕获语义相似性。当前基于大语言模型的评估方法，例如候选答案的成对或列表比较，缺乏直观的可解释性。虽然每个答案的逐点评分提供了一些描述，但它无法适应不同的问题内容。最值得注意的是，现有方法忽略了事实陈述和非事实陈述问题之间的区别。为了应对这些挑战，我们提出了MinosEval，这是一种新颖的评估方法，它首先区分开放式问题，然后使用不同的评估策略对候选答案进行排名。对于事实类问题，它采用自适应关键点评分策略，而对于非事实类问题，它使用实例感知列表排序策略。对多个开放式 QA 数据集（包括具有更多候选响应以补充社区资源的自建数据集）进行的实验表明，MinosEval 更好地与人类注释保持一致，并提供了更可解释的结果。

---

## 25. ToolExpNet: Optimizing Multi-Tool Selection inLLMs with Similarity and Dependency-Aware Experience Networks

**类别**: `Findings`

**作者**: Zijing Zhang, Zhanpeng Chen, He Zhu, Ziyang Chen, Nan Du, Xiaolong Li

**ID**: 2025.findings-acl.811

**摘要(英文)**:
> Tool learning enhances Large Language Models’ (LLMs) dynamic interaction with external tools, improving their ability to solve complex problems. However, current empirical methods, which primarily focus on isolated tools learning, still struggle with accurate multi-tool selection due to issues like confusing similar tools and neglecting dependencies. To address these challenges, we propose the Tool Experience Network (ToolExpNet), which integrates tools and trial-and-error experiences into a network characterized by semantic similarity and dependency relationships. ToolExpNet iteratively conducts simulated experiments using adaptive sampling to explore subtle differences and connections between tools, and summarizes these experiences to provide insightful guidance for LLM tool selection. Our experiments demonstrate that learning the relationships between tools helps achieve more comprehensive tool learning. Evaluations on multiple real-world API datasets show that ToolExpNet effectively addresses common challenges in multi-tool selection, significantly outperforming existing baselines across different foundation LLMs.

**摘要(中文)**:
> 工具学习增强了大型语言模型（LLM）与外部工具的动态交互，提高了它们解决复杂问题的能力。然而，当前的实证方法主要关注孤立的工具学习，由于混淆相似工具和忽略依赖性等问题，仍然难以准确选择多工具。为了应对这些挑战，我们提出了工具体验网络（ToolExpNet），它将工具和试错经验集成到以语义相似性和依赖关系为特征的网络中。 ToolExpNet利用自适应采样迭代进行模拟实验，探索工具之间的细微差异和联系，并总结这些经验，为LLM工具选择提供富有洞察力的指导。我们的实验表明，学习工具之间的关系有助于实现更全面的工具学习。对多个真实世界 API 数据集的评估表明，ToolExpNet 有效解决了多工具选择中的常见挑战，显着优于不同基础大语言模型的现有基线。

---

## 26. SynapticRAG: Enhancing Temporal Memory Retrieval in Large Language Models through Synaptic Mechanisms

**类别**: `Findings`

**作者**: Yuki Hou, Haruki Tamoto, Qinghua Zhao, Homei Miyashita

**ID**: 2025.findings-acl.1048

**摘要(英文)**:
> Existing retrieval methods in Large Language Models show degradation in accuracy when handling temporally distributed conversations, primarily due to their reliance on simple similarity-based retrieval. Unlike existing memory retrieval methods that rely solely on semantic similarity, we propose SynapticRAG, which uniquely combines temporal association triggers with biologically-inspired synaptic propagation mechanisms. Our approach uses temporal association triggers and synaptic-like stimulus propagation to identify relevant dialogue histories. A dynamic leaky integrate-and-fire mechanism then selects the most contextually appropriate memories. Experiments on four datasets of English, Chinese and Japanese show that compared to state-of-the-art memory retrieval methods, SynapticRAG achieves consistent improvements across multiple metrics up to 14.66% points. This work bridges the gap between cognitive science and language model development, providing a new framework for memory management in conversational systems.

**摘要(中文)**:
> 大型语言模型中现有的检索方法在处理时间分布的对话时显示出准确性的下降，这主要是由于它们依赖于简单的基于相似性的检索。与仅依赖于语义相似性的现有记忆检索方法不同，我们提出了 SynapticRAG，它将时间关联触发器与受生物学启发的突触传播机制独特地结合起来。我们的方法使用时间关联触发器和类突触刺激传播来识别相关的对话历史。然后，动态泄漏集成和触发机制会选择最适合上下文的内存。在英语、中文和日语四个数据集上的实验表明，与最先进的记忆检索方法相比，SynapticRAG 在多个指标上实现了高达 14.66% 的一致改进。这项工作弥合了认知科学和语言模型开发之间的差距，为会话系统中的内存管理提供了一个新的框架。

---

## 27. Encode Errors: Representational Retrieval of In-Context Demonstrations for Multilingual Grammatical Error Correction

**类别**: `Findings`

**作者**: Guangyue Peng, Wei Li, Wen Luo, Houfeng Wang

**ID**: 2025.findings-acl.1090

**摘要(英文)**:
> Grammatical Error Correction (GEC) involves detecting and correcting the wrong usage of grammar. While large language models (LLMs) with in-context learning (ICL) capabilities have shown significant progress on various natural language processing (NLP) tasks, their few-shot performance on GEC remains suboptimal. This is mainly due to the challenge of retrieving suitable in-context demonstrations that capture error patterns instead of semantic similarity. In this paper, we demonstrate that LLMs can inherently capture information related to grammatical errors through their internal states. From these states, we extract the Grammatical Error Representation (GER), an informative and semantically neutral encoding of grammatical errors. Our novel GER-based retrieval method significantly boosts performance in ICL settings on multilingual GEC datasets, improving the precision of correction. For high-resource languages, our results on 8B-sized open-source models match those of closed-source models such as Deepseek2.5 and GPT-4o-mini. For low-resource languages, ourF0.5scores surpass the baseline by up to a factor of 1.2. This method provides a more precise and resource-efficient solution for multilingual GEC, offering a promising direction for interpretable GEC research.

**摘要(中文)**:
> 语法错误纠正 (GEC) 涉及检测和纠正错误的语法用法。虽然具有上下文学习 (ICL) 功能的大型语言模型 (LLM) 在各种自然语言处理 (NLP) 任务上取得了显着进展，但它们在 GEC 上的少数样本性能仍然不够理想。这主要是由于检索合适的上下文演示来捕获错误模式而不是语义相似性的挑战。在本文中，我们证明了大语言模型可以通过其内部状态本质上捕获与语法错误相关的信息。从这些状态中，我们提取语法错误表示（GER），这是一种信息丰富且语义中立的语法错误编码。我们新颖的基于 GER 的检索方法显着提高了多语言 GEC 数据集上 ICL 设置的性能，提高了校正精度。对于高资源语言，我们在 8B 大小的开源模型上的结果与 Deepseek2.5 和 GPT-4o-mini 等闭源模型的结果相匹配。对于资源匮乏的语言，我们的 F0.5 分数超出基线高达 1.2 倍。该方法为多语言 GEC 提供了更精确、资源效率更高的解决方案，为可解释的 GEC 研究提供了一个有前途的方向。

---

## 28. When Claims Evolve: Evaluating and Enhancing the Robustness of Embedding Models Against Misinformation Edits

**类别**: `Findings`

**作者**: Jabez Magomere, Emanuele La Malfa, Manuel Tonneau, Ashkan Kazemi, Scott A. Hale

**ID**: 2025.findings-acl.1150

**摘要(英文)**:
> Online misinformation remains a critical challenge, and fact-checkers increasingly rely on claim matching systems that use sentence embedding models to retrieve relevant fact-checks. However, as users interact with claims online, they often introduce edits, and it remains unclear whether current embedding models used in retrieval are robust to such edits. To investigate this, we introduce a perturbation framework that generates valid and natural claim variations, enabling us to assess the robustness of a wide-range of sentence embedding models in a multi-stage retrieval pipeline and evaluate the effectiveness of various mitigation approaches. Our evaluation reveals that standard embedding models exhibit notable performance drops on edited claims, while LLM-distilled embedding models offer improved robustness at a higher computational cost. Although a strong reranker helps to reduce the performance drop, it cannot fully compensate for first-stage retrieval gaps. To address these retrieval gaps, we evaluate train- and inference-time mitigation approaches, demonstrating that they can improve in-domain robustness by up to 17 percentage points and boost out-of-domain generalization by 10 percentage points. Overall, our findings provide practical improvements to claim-matching systems, enabling more reliable fact-checking of evolving misinformation.

**摘要(中文)**:
> 在线错误信息仍然是一个严峻的挑战，事实核查人员越来越依赖声明匹配系统，该系统使用句子嵌入模型来检索相关的事实核查。然而，当用户与在线权利要求交互时，他们经常会引入编辑，并且目前尚不清楚检索中使用的当前嵌入模型是否对此类编辑具有鲁棒性。为了研究这一点，我们引入了一个扰动框架，该框架可以生成有效且自然的声明变化，使我们能够评估多阶段检索管道中各种句子嵌入模型的稳健性，并评估各种缓解方法的有效性。我们的评估表明，标准嵌入模型在编辑权利要求时表现出显着的性能下降，而大语言模型蒸馏嵌入模型以更高的计算成本提供了更高的鲁棒性。尽管强大的重新排序器有助于减少性能下降，但它无法完全弥补第一阶段检索的差距。为了解决这些检索差距，我们评估了训练和推理时间缓解方法，证明它们可以将域内鲁棒性提高多达 17 个百分点，并将域外泛化能力提高 10 个百分点。总体而言，我们的研究结果为索赔匹配系统提供了实际改进，从而能够对不断变化的错误信息进行更可靠的事实核查。

---

## 29. CausalRAG: Integrating Causal Graphs into Retrieval-Augmented Generation

**类别**: `Findings`

**作者**: Nengbo Wang, Xiaotian Han, Jagdip Singh, Jing Ma, Vipin Chaudhary

**ID**: 2025.findings-acl.1165

**摘要(英文)**:
> Large language models (LLMs) have revolutionized natural language processing (NLP), particularly through Retrieval-Augmented Generation (RAG), which enhances LLM capabilities by integrating external knowledge. However, traditional RAG systems face critical limitations, including disrupted contextual integrity due to text chunking, and over-reliance on semantic similarity for retrieval. To address these issues, we propose CausalRAG, a novel framework that incorporates causal graphs into the retrieval process. By constructing and tracing causal relationships, CausalRAG preserves contextual continuity and improves retrieval precision, leading to more accurate and interpretable responses. We evaluate CausalRAG against regular RAG and graph-based RAG approaches, demonstrating its superiority across multiple metrics. Our findings suggest that grounding retrieval in causal reasoning provides a promising approach to knowledge-intensive tasks.

**摘要(中文)**:
> 大型语言模型 (LLM) 彻底改变了自然语言处理 (NLP)，特别是通过检索增强生成 (RAG)，它通过集成外部知识来增强 LLM 的能力。然而，传统的 RAG 系统面临着严重的局限性，包括由于文本分块而破坏上下文完整性，以及过度依赖语义相似性进行检索。为了解决这些问题，我们提出了 CausalRAG，这是一种将因果图纳入检索过程的新颖框架。通过构建和追踪因果关系，CausalRAG 保留了上下文连续性并提高了检索精度，从而产生更准确和可解释的响应。我们根据常规 RAG 和基于图的 RAG 方法评估 CausalRAG，证明其在多个指标上的优越性。我们的研究结果表明，基于因果推理的检索为知识密集型任务提供了一种有前景的方法。

---

## 30. DIESEL: A Lightweight Inference-Time Safety Enhancement for Language Models

**类别**: `Findings`

**作者**: Ben Ganon, Alon Zolfi, Omer Hofman, Inderjeet Singh, Hisashi Kojima, Yuval Elovici, Asaf Shabtai

**ID**: 2025.findings-acl.1223

**摘要(英文)**:
> Large language models (LLMs) have demonstrated impressive performance across a wide range of tasks, including open-ended dialogue, driving advancements in virtual assistants and other interactive systems. However, these models often generate outputs misaligned with human values, such as ethical norms and safety constraints, resulting in potentially harmful or inappropriate responses. While several techniques have been proposed to address this problem, they typically involve computationally intensive training procedures or introduce substantial inference-time latency. In this paper, we present DIESEL, a lightweight inference-guidance technique that can be seamlessly integrated into any autoregressive LLM to semantically filter undesirable content during generation. DIESEL guides generation by reranking token candidates according to their semantic similarity to predefined negative concepts in the latent space. It can serve either as a standalone safeguard or as an auxiliary defense layer, enhancing response safety without requiring model fine-tuning or additional data. We demonstrate DIESEL’s effectiveness on state-of-the-art conversational models, including in adversarial jailbreak scenarios. Furthermore, we show that DIESEL generalizes beyond safety applications, enabling flexible and domain-specific response filtering.

**摘要(中文)**:
> 大型语言模型 (LLM) 在广泛的任务中表现出了令人印象深刻的性能，包括开放式对话、推动虚拟助手和其他交互系统的进步。然而，这些模型常常产生与人类价值观（例如道德规范和安全限制）不相符的输出，从而导致潜在有害或不适当的反应。虽然已经提出了几种技术来解决这个问题，但它们通常涉及计算密集型训练过程或引入大量的推理时间延迟。在本文中，我们提出了 DIESEL，这是一种轻量级推理指导技术，可以无缝集成到任何自回归 LLM 中，以在生成过程中从语义上过滤不需要的内容。 DIESEL 通过根据候选标记与潜在空间中预定义的负面概念的语义相似性对标记候选进行重新排序来指导生成。它既可以作为独立的防护措施，也可以作为辅助防御层，增强响应安全性，而无需模型微调或额外数据。我们展示了 DIESEL 在最先进的对话模型上的有效性，包括在对抗性越狱场景中。此外，我们还表明 DIESEL 的泛化能力超出了安全应用范围，能够实现灵活且特定于领域的响应过滤。

---

## 31. Redundancy, Isotropy, and Intrinsic Dimensionality of Prompt-based Text Embeddings

**类别**: `Findings`

**作者**: Hayato Tsukagoshi, Ryohei Sasano

**ID**: 2025.findings-acl.1330

**摘要(英文)**:
> Prompt-based text embedding models, which generate task-specific embeddings upon receiving tailored prompts, have recently demonstrated remarkable performance. However, their resulting embeddings often have thousands of dimensions, leading to high storage costs and increased computational costs of embedding-based operations. In this paper, we investigate how post-hoc dimensionality reduction applied to the embeddings affects the performance of various tasks that leverage these embeddings, specifically classification, clustering, retrieval, and semantic textual similarity (STS) tasks. Our experiments show that even a naive dimensionality reduction, which keeps only the first 25% of the dimensions of the embeddings, results in a very slight performance degradation, indicating that these embeddings are highly redundant. Notably, for classification and clustering, even when embeddings are reduced to less than 0.5% of the original dimensionality the performance degradation is very small. To quantitatively analyze this redundancy, we perform an analysis based on the intrinsic dimensionality and isotropy of the embeddings. Our analysis reveals that embeddings for classification and clustering, which are considered to have very high dimensional redundancy, exhibit lower intrinsic dimensionality and less isotropy compared with those for retrieval and STS.

**摘要(中文)**:
> 基于提示的文本嵌入模型在收到定制提示时生成特定于任务的嵌入，最近表现出了卓越的性能。然而，它们产生的嵌入通常具有数千个维度，导致存储成本很高，并且基于嵌入的操作的计算成本增加。在本文中，我们研究了应用于嵌入的事后降维如何影响利用这些嵌入的各种任务的性能，特别是分类、聚类、检索和语义文本相似性（STS）任务。我们的实验表明，即使是简单的降维（仅保留嵌入的前 25% 维度）也会导致非常轻微的性能下降，这表明这些嵌入是高度冗余的。值得注意的是，对于分类和聚类，即使嵌入减少到原始维度的 0.5% 以下，性能下降也非常小。为了定量分析这种冗余，我们根据嵌入的内在维度和各向同性进行分析。我们的分析表明，用于分类和聚类的嵌入被认为具有非常高的维度冗余，与用于检索和 STS 的嵌入相比，它们表现出较低的内在维度和较小的各向同性。

---

## 32. Evaluating Robustness ofLLMs to Typographical Noise inYorùbáQA

**类别**: `Workshop-AfricaNLP`

**作者**: Paul Okewunmi, Favour James, Oluwadunsin Fajemila

**ID**: 2025.africanlp-1.29

**摘要(英文)**:
> Generative AI models are primarily accessed through chat interfaces, where user queries often contain typographical errors. While these models perform well in English, their robustness to noisy inputs in low-resource languages like Yorùbá remains underexplored. This work investigates a Yorùbá question-answering (QA) task by introducing synthetic typographical noise into clean inputs. We design a probabilistic noise injection strategy that simulates realistic human typos. In our experiments, each character in a clean sentence is independently altered, with noise levels ranging from 10% to 40%. We evaluate performance across three strong multilingual models using two complementary metrics: (1) a multilingual BERTScore to assess semantic similarity between outputs on clean and noisy inputs, and (2) an LLM-as-judge approach, where the best Yorùbá-capable model rates fluency, comprehension, and accuracy on a 1–5 scale. Results show that while English QA performance degrades gradually, Yorùbá QA suffers a sharper decline. At 40% noise, GPT-4o experiences over a 50% drop in comprehension ability, with similar declines for Gemini 2.0 Flash and Claude 3.7 Sonnet. We conclude with recommendations for noise-aware training and dedicated noisy Yorùbá benchmarks to enhance LLM robustness in low-resource settings.

**摘要(中文)**:
> 生成式人工智能模型主要通过聊天界面访问，其中用户查询通常包含印刷错误。虽然这些模型在英语中表现良好，但它们对约鲁巴语等资源匮乏语言的噪声输入的鲁棒性仍有待探索。这项工作通过在干净的输入中引入合成的印刷噪声来研究约鲁巴语问答 (QA) 任务。我们设计了一种概率噪声注入策略来模拟现实的人类打字错误。在我们的实验中，干净句子中的每个字符都被独立更改，噪声水平范围为 10% 到 40%。我们使用两个互补指标来评估三个强大的多语言模型的性能：(1) 多语言 BERTScore，用于评估干净输入和噪声输入的输出之间的语义相似性；(2) LLM 作为评判方法，其中最好的约鲁巴语模型在 1-5 级上对流畅性、理解性和准确性进行评分。结果显示，虽然英语 QA 表现逐渐下降，但约鲁巴语 QA 的下降幅度更大。在 40% 的噪声下，GPT-4o 的理解能力下降了 50% 以上，Gemini 2.0 Flash 和 Claude 3.7 Sonnet 也有类似的下降。最后，我们提出了噪声感知培训和专用噪声 Yorùbá 基准的建议，以增强 LLM 在资源匮乏环境中的稳健性。

---

## 33. DLSUatBEA2025 Shared Task: Towards Establishing Baseline Models for Pedagogical Response Evaluation Tasks

**类别**: `Workshop-BEA`

**作者**: Maria Monica Manlises, Mark Edward Gonzales, Lanz Lim

**ID**: 2025.bea-1.101

**摘要(英文)**:
> We present our submission for Tracks 3 (Providing Guidance), 4 (Actionability), and 5 (Tutor Identification) of the BEA 2025 Shared Task on Pedagogical Ability Assessment of AI-Powered Tutors. Our approach sought to investigate the performance of directly using sentence embeddings of tutor responses as input to downstream classifiers (that is, without employing any fine-tuning). To this end, we benchmarked two general-purpose sentence embedding models: gte-modernbert-base (GTE) and all-MiniLM-L12-v2, in combination with two downstream classifiers: XGBoost and multilayer perceptron. Feeding GTE embeddings to a multilayer perceptron achieved macro-F1 scores of 0.4776, 0.5294, and 0.6420 on the official test sets for Tracks 3, 4, and 5, respectively. While overall performance was modest, these results offer insights into the challenges of pedagogical response evaluation and establish a baseline for future improvements.

**摘要(中文)**:
> 我们提交了 BEA 2025 年人工智能教师教学能力评估共享任务的轨道 3（提供指导）、轨道 4（可操作性）和轨道 5（导师识别）提交的材料。我们的方法试图研究直接使用导师响应的句子嵌入作为下游分类器的输入（即不进行任何微调）的性能。为此，我们对两个通用句子嵌入模型进行了基准测试：gte-modernbert-base (GTE) 和 all-MiniLM-L12-v2，并结合两个下游分类器：XGBoost 和多层感知器。将 GTE 嵌入输入多层感知器，在 Track 3、4 和 5 的官方测试集上分别获得了 0.4776、0.5294 和 0.6420 的宏观 F1 分数。虽然总体表现一般，但这些结果提供了对教学反应评估挑战的见解，并为未来的改进建立了基线。

---

## 34. A Retrieval-Based Approach to Medical Procedure Matching inRomanian

**类别**: `Workshop-BioNLP`

**作者**: Andrei Niculae, Adrian Cosma, Emilian Radoi

**ID**: 2025.bionlp-1.15

**摘要(英文)**:
> Accurately mapping medical procedure names from healthcare providers to standardized terminology used by insurance companies is a crucial yet complex task. Inconsistencies in naming conventions lead to missclasified procedures, causing administrative inefficiencies and insurance claim problems in private healthcare settings. Many companies still use human resources for manual mapping, while there is a clear opportunity for automation. This paper proposes a retrieval-based architecture leveraging sentence embeddings for medical name matching in the Romanian healthcare system. This challenge is significantly more difficult in underrepresented languages such as Romanian, where existing pretrained language models lack domain-specific adaptation to medical text. We evaluate multiple embedding models, including Romanian, multilingual, and medical-domain-specific representations, to identify the most effective solution for this task. Our findings contribute to the broader field of medical NLP for low-resource languages such as Romanian.

**摘要(中文)**:
> 将医疗保健提供者的医疗程序名称准确映射到保险公司使用的标准化术语是一项至关重要但复杂的任务。命名约定的不一致会导致程序分类错误，从而导致私人医疗机构中的管理效率低下和保险索赔问题。许多公司仍然使用人力资源进行手动绘图，而自动化显然有机会。本文提出了一种基于检索的架构，利用句子嵌入在罗马尼亚医疗保健系统中进行医学名称匹配。在罗马尼亚语等代表性不足的语言中，这一挑战要困难得多，因为现有的预训练语言模型缺乏对医学文本的特定领域的适应。我们评估多种嵌入模型，包括罗马尼亚语、多语言和医疗领域特定的表示，以确定该任务的最有效的解决方案。我们的研究结果为罗马尼亚语等资源匮乏语言的更广泛的医学 NLP 领域做出了贡献。

---

## 35. 5cNLPatBioLaySumm2025: Prompts, Retrieval, and Multimodal Fusion

**类别**: `Workshop-BioNLP`

**作者**: Juan Antonio Lossio-Ventura, Callum Chan, Arshitha Basavaraj, Hugo Alatrista-Salas, Francisco Pereira, Diana Inkpen

**ID**: 2025.bionlp-share.27

**摘要(英文)**:
> In this work, we present our approach to addressing all subtasks of the BioLaySumm 2025 shared task by leveraging prompting and retrieval strategies, as well as multimodal input fusion. Our method integrates: (1) zero-shot and few-shot prompting with large language models (LLMs); (2) semantic similarity-based dynamic few-shot prompting; (3) retrieval-augmented generation (RAG) incorporating biomedical knowledge from the Unified Medical Language System (UMLS); and (4) a multimodal fusion pipeline that combines images and captions using image-text-to-text generation for enriched lay summarization. Our framework enables lightweight adaptation of pretrained LLMs for generating lay summaries from scientific articles and radiology reports. Using modern LLMs, including Llama-3.3-70B-Instruct and GPT-4.1, our 5cNLP team achieved third place in Subtask 1.2 and second place in Subtask 2.1, among all submissions.

**摘要(中文)**:
> 在这项工作中，我们提出了通过利用提示和检索策略以及多模式输入融合来解决 BioLaySumm 2025 共享任务的所有子任务的方法。我们的方法集成了：（1）使用大型语言模型（LLM）进行零样本和少样本提示； (2)基于语义相似度的动态小样本提示； (3) 检索增强生成 (RAG)，结合了统一医学语言系统 (UMLS) 的生物医学知识； (4) 多模态融合管道，使用图像-文本-文本生成将图像和标题结合起来，以实现丰富的外行摘要。我们的框架可以对预训练的大语言模型进行轻量级调整，以便根据科学文章和放射学报告生成简单摘要。使用现代 LLM，包括 Llama-3.3-70B-Instruct 和 GPT-4.1，我们的 5cNLP 团队在所有提交的内容中在子任务 1.2 中获得第三名，在子任务 2.1 中获得第二名。

---

## 36. MIRAGESatBioLaySumm2025: The Impact of Search Terms and Data Curation for Biomedical Lay Summarization

**类别**: `Workshop-BioNLP`

**作者**: Benjamin Pong, J u - H u i Chen, Jonathan Jiang, Abimael Jimenez, Melody Vahadi

**ID**: 2025.bionlp-share.28

**摘要(英文)**:
> Biomedical articles are often inaccessible to non-experts due to their technical complexity. To improve readability and factuality of lay summaries, we built on an extract-then-summarize framework by experimenting with novel extractive summarization strategies and employing Low Rank Adaptation (LoRA) fine-tuning of Meta-Llama-3-8B-Instruct on data selected by these strategies. We also explored counterfactual data augmentation and post-processing definition insertion to further enhance factual grounding and accessibility. Our best performing system treats the article’s title and keywords (i.e. search terms) as a single semantic centroid and ranks sentences by their semantic similarity to this centroid. This constrained selection of data serves as input for fine-tuning, achieving marked improvements in readability and factuality of downstream abstractive summaries while maintaining relevance. Our approach highlights the importance of quality data curation for biomedicallay summarization, resulting in 4th best overall performance and 2nd best Readability performance for the BioLaySumm 2025 Shared Task at BioNLP 2025.

**摘要(中文)**:
> 由于技术复杂性，生物医学文章通常对于非专家来说是无法理解的。为了提高外行摘要的可读性和真实性，我们通过尝试新颖的提取摘要策略并在这些策略选择的数据上采用 Meta-Llama-3-8B-Instruct 的低秩适应 (LoRA) 微调，构建了提取然后摘要框架。我们还探索了反事实数据增强和后处理定义插入，以进一步增强事实基础和可访问性。我们性能最佳的系统将文章的标题和关键字（即搜索词）视为单个语义质心，并根据句子与该质心的语义相似度对句子进行排名。这种受限制的数据选择可作为微调的输入，在保持相关性的同时，显着提高下游抽象摘要的可读性和真实性。我们的方法强调了生物医学总结中高质量数据管理的重要性，从而在 BioNLP 2025 的 BioLaySumm 2025 共享任务中获得第四名最佳整体性能和第二名最佳可读性性能。

---

## 37. A Continuous Approach to Metaphorically Motivated Regular Polysemy in Language Models

**类别**: `Workshop-CoNLL`

**作者**: Anna Temerko, Marcos Garcia, Pablo Gamallo

**ID**: 2025.conll-1.28

**摘要(英文)**:
> Linguistic accounts show that a word’s polysemy structure is largely governed by systematic sense alternations that form overarching patterns across the vocabulary. While psycholinguistic studies confirm the psychological validity of regularity in human language processing, in the research on large language models (LLMs) this phenomenon remains largely unaddressed. Revealing models’ sensitivity to systematic sense alternations of polysemous words can give us a better understanding of how LLMs process ambiguity and to what extent they emulate representations in the human mind. For this, we employ the measures of surprisal and semantic similarity as proxies of human judgment on the acceptability of novel senses. We focus on two aspects that have not received much attention previously —metaphorically motivated patterns and the continuous nature of regularity. We find evidence that surprisal from language models represents regularity of polysemic extensions in a human-like way, discriminating between different types of senses and varying regularity degrees, and overall strongly correlating with human acceptability scores.

**摘要(中文)**:
> 语言学的解释表明，一个单词的多义结构在很大程度上受到系统意义交替的控制，这些交替形成了整个词汇的总体模式。虽然心理语言学研究证实了人类语言处理规律性的心理有效性，但在大语言模型（LLM）的研究中，这种现象在很大程度上仍未得到解决。揭示模型对多义词的系统意义交替的敏感性可以让我们更好地理解大语言模型如何处理歧义以及它们在多大程度上模拟人类思维中的表征。为此，我们采用惊讶和语义相似性的度量作为人类对新感官可接受性的判断的代理。我们关注以前没有受到太多关注的两个方面——隐喻动机模式和规律性的连续性。我们发现证据表明，来自语言模型的惊喜以类似人类的方式代表了多义扩展的规律性，区分了不同类型的感官和不同的规律性程度，并且总体上与人类可接受性分数密切相关。

---

## 38. Fathom: A Fast and ModularRAGPipeline for Fact-Checking

**类别**: `Workshop-FEVER`

**作者**: Farrukh Bin Rashid, Saqib Hakak

**ID**: 2025.fever-1.20

**摘要(英文)**:
> We present Fathom, a Retrieval-Augmented Generation (RAG) pipeline for automated fact-checking, built entirely using lightweight open-source language models. The system begins with HyDE-style question generation to expand the context around each claim, followed by a dual-stage retrieval process using BM25 and semantic similarity to gather relevant evidence. Finally, a lightweight LLM performs veracity prediction, producing both a verdict and supporting rationale. Despite relying on smaller models, our system achieved an AVeriTeC score of 0.2043 on the test set, a 0.99% absolute improvement over the baseline and 0.378 on the dev set, marking a 27.7% absolute improvement.

**摘要(中文)**:
> 我们推出了 Fathom，一种用于自动事实检查的检索增强生成 (RAG) 管道，完全使用轻量级开源语言模型构建。该系统首先生成 HyDE 式的问题，以扩展每个主张的上下文，然后使用 BM25 和语义相似性进行双阶段检索过程来收集相关证据。最后，轻量级大语言模型执行准确性预测，产生结论和支持理由。尽管依赖较小的模型，我们的系统在测试集上的 AVeriTeC 分数为 0.2043，比基线提高了 0.99% 的绝对分数；在开发集上的分数为 0.378，绝对提高了 27.7%。

---

## 39. PersonaTwin: A Multi-Tier Prompt Conditioning Framework for Generating and Evaluating Personalized Digital Twins

**类别**: `Workshop-GEM`

**作者**: Sihan Chen, John P. Lalor, Yi Yang, Ahmed Abbasi

**ID**: 2025.gem-1.66

**摘要(英文)**:
> While large language models (LLMs) afford new possibilities for user modeling and approximation of human behaviors, they often fail to capture the multidimensional nuances of individual users. In this work, we introducePersonaTwin, a multi-tier prompt conditioning framework that builds adaptive digital twins by integrating demographic, behavioral, and psychometric data. Using a comprehensive data set in the healthcare context of more than 8,500 individuals, we systematically benchmarkPersonaTwinagainst standard LLM outputs, and our rigorous evaluation unites state-of-the-art text similarity metrics with dedicated demographic parity assessments, ensuring that generated responses remain accurate and unbiased. Experimental results show that our framework produces simulation fidelity on par with oracle settings. Moreover, downstream models trained on persona-twins approximate models trained on individuals in terms of prediction and fairness metrics across both GPT-4o-based and Llama-based models. Together, these findings underscore the potential for LLM digital twin-based approaches in producing realistic and emotionally nuanced user simulations, offering a powerful tool for personalized digital user modeling and behavior analysis.

**摘要(中文)**:
> 虽然大型语言模型 (LLM) 为用户建模和人类行为近似提供了新的可能性，但它们通常无法捕捉单个用户的多维细微差别。在这项工作中，我们介绍了 PersonaTwin，这是一个多层提示调节框架，它通过整合人口统计、行为和心理测量数据来构建自适应数字双胞胎。我们使用超过 8,500 名个人的医疗保健环境中的综合数据集，系统地根据标准大语言模型输出对PersonaTwin进行基准测试，并且我们严格的评估将最先进的文本相似性指标与专门的人口统计平等评估相结合，确保生成的响应保持准确和公正。实验结果表明，我们的框架产生的模拟保真度与预言机设置相当。此外，在基于 GPT-4o 和基于 Llama 的模型的预测和公平性指标方面，在角色双胞胎上训练的下游模型近似于在个体上训练的模型。总之，这些发现强调了基于 LLM 数字孪生的方法在生成逼真且情感细腻的用户模拟方面的潜力，为个性化数字用户建模和行为分析提供了强大的工具。

---

## 40. Memory Tokens: Large Language Models Can Generate Reversible Sentence Embeddings

**类别**: `Workshop-L2M2`

**作者**: Ignacio Sastre, Aiala Rosá

**ID**: 2025.l2m2-1.14

**摘要(英文)**:
> In this work, we observe an interesting phenomenon: it is possible to generate reversible sentence embeddings that allow an LLM to reconstruct the original text exactly, without modifying the model’s weights. This is achieved by introducing a special memory token, whose embedding is optimized through training on a fixed sequence. When prompted with this embedding, the model reconstructs the fixed sequence exactly. We evaluate this phenomenon across English and Spanish datasets, sequences of up to approximately 240 tokens, and model scales ranging from 100M to 8B parameters. Notably, Llama 3.1 8B successfully reconstructs all tested sequences. Our findings highlight an interesting capability of LLMs and suggest potential applications in memory-based retrieval, compression, and controlled text generation.

**摘要(中文)**:
> 在这项工作中，我们观察到一个有趣的现象：可以生成可逆的句子嵌入，使大语言模型能够准确地重建原始文本，而无需修改模型的权重。这是通过引入特殊的记忆标记来实现的，其嵌入是通过固定序列的训练来优化的。当提示进行此嵌入时，模型会准确地重建固定序列。我们在英语和西班牙语数据集、最多大约 240 个标记的序列以及从 100M 到 8B 参数的模型规模中评估了这种现象。值得注意的是，Llama 3.1 8B 成功重建了所有测试序列。我们的研究结果凸显了大语言模型的一项有趣功能，并提出了在基于内存的检索、压缩和受控文本生成方面的潜在应用。

---

## 41. Unsupervised Sustainability Report Labeling based on the integration of theGRIandSDGstandards

**类别**: `Workshop-NLP4PI`

**作者**: Seyed Alireza Mousavian Anaraki, Danilo Croce, Roberto Basili

**ID**: 2025.nlp4pi-1.13

**摘要(英文)**:
> Sustainability reports are key instruments for communicating corporate impact, but their unstructured format and varied content pose challenges for large-scale analysis. This paper presents an unsupervised method to annotate paragraphs from sustainability reports against both the Global Reporting Initiative (GRI) and Sustainable Development Goals (SDG) standards. The approach combines structured metadata from GRI content indexes, official GRI–SDG mappings, and text semantic similarity models to produce weakly supervised annotations at scale. To evaluate the quality of these annotations, we train a multi-label classifier on the automatically labeled data and evaluate it on the trusted OSDG Community Dataset. The results show that our method yields meaningful labels and improves classification performance when combined with human-annotated data. Although preliminary, this work offers a foundation for scalable sustainability analysis and opens future directions toward assessing the credibility and depth of corporate sustainability claims.

**摘要(中文)**:
> 可持续发展报告是传达企业影响的关键工具，但其非结构化格式和多样化内容给大规模分析带来了挑战。本文提出了一种无监督方法，根据全球报告倡议 (GRI) 和可持续发展目标 (SDG) 标准对可持续发展报告中的段落进行注释。该方法结合了来自 GRI 内容索引的结构化元数据、官方 GRI-SDG 映射和文本语义相似性模型，以大规模生成弱监督注释。为了评估这些注释的质量，我们在自动标记的数据上训练多标签分类器，并在可信的 OSDG 社区数据集上对其进行评估。结果表明，我们的方法与人工注释的数据结合时，可以产生有意义的标签并提高分类性能。尽管是初步的，但这项工作为可扩展的可持续发展分析奠定了基础，并为评估企业可持续发展声明的可信度和深度开辟了未来方向。

---

## 42. MathD2: Towards Disambiguation of Mathematical Terms

**类别**: `Workshop-SDP`

**作者**: Shufan Jiang, Mary Ann Tan, Harald Sack

**ID**: 2025.sdp-1.3

**摘要(英文)**:
> In mathematical literature, terms can have multiple meanings based on context. Manual disambiguation across scholarly articles demands massive efforts from mathematicians. This paper addresses the challenge of automatically determining whether two definitions of a mathematical term are semantically different. Specifically, the difficulties and how contextualized textual representation can help resolve the problem, are investigated. A new dataset MathD2 for mathematical term disambiguation is constructed with ProofWiki’s disambiguation pages. Then three approaches based on the contextualized textual representation are studied: (1) supervised classification based on the embedding of concatenated definition and title; (2) zero-shot prediction based on semantic textual similarity(STS) between definition and title and (3) zero-shot LLM prompting. The first two approaches achieve accuracy greater than 0.9 on the ground truth dataset, demonstrating the effectiveness of our methods for the automatic disambiguation of mathematical definitions. Our dataset and source code are available here: https://github.com/sufianj/MathTermDisambiguation.

**摘要(中文)**:
> 在数学文献中，术语根据上下文可以有多种含义。学术文章中的手动消歧需要数学家付出巨大的努力。本文解决了自动确定数学术语的两个定义在语义上是否不同的挑战。具体来说，研究了困难以及情境化文本表示如何帮助解决问题。使用 ProofWiki 的消歧页面构建了用于数学术语消歧的新数据集 MathD2。然后研究了基于上下文文本表示的三种方法：（1）基于串联定义和标题嵌入的监督分类； （2）基于定义和标题之间的语义文本相似性（STS）的零样本预测和（3）零样本LLM提示。前两种方法在地面真实数据集上实现了大于 0.9 的准确度，证明了我们的方法在自动消除数学定义歧义方面的有效性。我们的数据集和源代码可在此处获取：https://github.com/sufianj/MathTermDisambiguation。

---

## 43. Transformer25 atSemEval-2025 Task 1: A similarity-based approach

**类别**: `Workshop-SemEval`

**作者**: Wiebke Petersen, Lara Eulenpesch, Ann Piho, Julio Julio, Victoria Lohner

**ID**: 2025.semeval-1.301

**摘要(英文)**:
> Accurately representing non-compositional language, such as idiomatic expressions, is essential to avoid misinterpretations that could affect subsequent tasks. This paper presents the submission of Transformer25 to the SemEval 2025 task on advancing the representation of multimodal idiomaticity. This challenge involves matching idiomatic expressions with corresponding image descriptions that depict their meanings.Our system utilizes BERT-based pre-trained sentence embeddings model, ChatGPT-generated definitions and preprocessing. Our final submission ranked 7th out of 9 for Subtask A. The paper provides a system description and analysis of our model, including minimal visualizations.

**摘要(中文)**:
> 准确地表示非组合语言（例如惯用表达）对于避免可能影响后续任务的误解至关重要。本文介绍了 Transformer25 向 SemEval 2025 任务提交的内容，该任务旨在推进多模态惯用性的表示。这一挑战涉及将惯用表达与描述其含义的相应图像描述进行匹配。我们的系统利用基于 BERT 的预训练句子嵌入模型、ChatGPT 生成的定义和预处理。我们最终提交的子任务 A 在 9 个项目中排名第 7。本文提供了我们模型的系统描述和分析，包括最小的可视化。

---

## 44. XCOMPS: A Multilingual Benchmark of Conceptual Minimal Pairs

**类别**: `Workshop-SIGTYP`

**作者**: Linyang He, Ercong Nie, Sukru Samet Dindar, Arsalan Firoozi, Adrian Florea, Van Nguyen, Corentin Puffay, Riki Shimizu, Haotian Ye, Jonathan Brennan, Helmut Schmid, Hinrich Schütze, Nima Mesgarani

**ID**: 2025.sigtyp-1.9

**摘要(英文)**:
> In this work, we introduce XCOMPS, a multilingual conceptual minimal pair dataset that covers 17 languages.Using this dataset, we evaluate LLMs’ multilingual conceptual understanding through metalinguistic prompting, direct probability measurement, and neurolinguistic probing. We find that: 1) LLMs exhibit weaker conceptual understanding for low-resource languages, and accuracy varies across languages despite being tested on the same concept sets. 2) LLMs excel at distinguishing concept-property pairs that are visibly different but exhibit a marked performance drop when negative pairs share subtle semantic similarities. 3) More morphologically complex languages yield lower concept understanding scores and require deeper layers for conceptual reasoning.

**摘要(中文)**:
> 在这项工作中，我们引入了 XCOMPS，一个涵盖 17 种语言的多语言概念最小对数据集。使用该数据集，我们通过元语言提示、直接概率测量和神经语言探测来评估大语言模型的多语言概念理解。我们发现：1）大语言模型对低资源语言的概念理解较弱，尽管在相同的概念集上进行了测试，但不同语言的准确性有所不同。 2）大语言模型擅长区分明显不同的概念-属性对，但当负对具有微妙的语义相似性时，表现出明显的性能下降。 3）形态越复杂的语言产生的概念理解分数越低，并且需要更深层次的概念推理。

---

## 45. MisinfoTeleGraph: Network-driven Misinformation Detection forGerman Telegram Messages

**类别**: `Workshop-WOAH`

**作者**: Lu Kalkbrenner, Veronika Solopova, Steffen Zeiler, Robert Nickel, Dorothea Kolossa

**ID**: 2025.woah-1.16

**摘要(英文)**:
> Connectivity and message propagation are central, yet often underutilised, sources of information in misinformation detection—especially on poorly moderated platforms such as Telegram, which has become a critical channel for misinformation dissemination, namely in the German electoral context. In this paper, we introduce Misinfo-TeleGraph, the first German-language Telegram-based graph dataset for misinformation detection. It includes over 5 million messages from public channels, enriched with metadata, channel relationships, and both weak and strong labels. These labels are derived via semantic similarity to fact-checks and news articles using M3-embeddings, as well as manual annotation. To establish reproducible baselines, we evaluate both text-only models and graph neural networks (GNNs) that incorporate message forwarding as a network structure. Our results show that GraphSAGE with LSTM aggregation significantly outperforms text-only baselines in terms of Matthews Correlation Coefficient (MCC) and F1-score. We further evaluate the impact of subscribers, view counts, and automatically versus human-created labels on performance, and highlight both the potential and challenges of weak supervision in this domain. This work provides a reproducible benchmark and open dataset for future research on misinformation detection in German-language Telegram networks and other low-moderation social platforms.

**摘要(中文)**:
> 连通性和消息传播是错误信息检测的核心信息来源，但往往未得到充分利用，尤其是在 Telegram 等监管不力的平台上，尤其是在德国选举背景下，Telegram 已成为错误信息传播的关键渠道。在本文中，我们介绍了 Misinfo-TeleGraph，这是第一个基于德语 Telegram 的错误信息检测图形数据集。它包括来自公共渠道的超过 500 万条消息，其中包含元数据、渠道关系以及弱标签和强标签。这些标签是通过使用 M3 嵌入的事实检查和新闻文章的语义相似性以及手动注释得出的。为了建立可重复的基线，我们评估了纯文本模型和将消息转发作为网络结构的图神经网络（GNN）。我们的结果表明，采用 LSTM 聚合的 GraphSAGE 在马修斯相关系数 (MCC) 和 F1 分数方面显着优于纯文本基线。我们进一步评估订阅者、观看次数以及自动标签与人工创建标签对性能的影响，并强调该领域弱监督的潜力和挑战。这项工作为德语 Telegram 网络和其他低审核社交平台中的错误信息检测的未来研究提供了可重复的基准和开放数据集。

## NLP研究 (155 篇)

---

## 46. GraphNarrator: Generating Textual Explanations for Graph Neural Networks

**类别**: `主会-长文`

**作者**: Bo Pan, Zhen Xiong, Guanchen Wu, Zheng Zhang, Yifei Zhang, Yuntong Hu, Liang Zhao

**ID**: 2025.acl-long.2

**摘要(英文)**:
> Graph representation learning has garnered significant attention due to its broad applications in various domains, such as recommendation systems and social network analysis. Despite advancements in graph learning methods, challenges still remain in explainability when graphs are associated with semantic features. In this paper, we present GraphNarrator, the first method designed to generate natural language explanations for Graph Neural Networks. GraphNarrator employs a generative language model that maps input-output pairs to explanations reflecting the model’s decision-making process. To address the lack of ground truth explanations to train the model, we propose first generating pseudo-labels that capture the model’s decisions from saliency-based explanations, then using Expert Iteration to iteratively train the pseudo-label generator based on training objectives on explanation quality. The high-quality pseudo-labels are finally utilized to train an end-to-end explanation generator model. Extensive experiments are conducted to demonstrate the effectiveness of GraphNarrator in producing faithful, concise, and human-preferred natural language explanations.

**摘要(中文)**:
> 图表示学习由于其在推荐系统和社交网络分析等各个领域的广泛应用而受到广泛关注。尽管图学习方法取得了进步，但当图与语义特征相关联时，在可解释性方面仍然存在挑战。在本文中，我们提出了 GraphNarrator，这是第一个为图神经网络生成自然语言解释的方法。 GraphNarrator 采用生成语言模型，将输入输出对映射到反映模型决策过程的解释。为了解决训练模型时缺乏真实解释的问题，我们建议首先生成伪标签，从基于显着性的解释中捕获模型的决策，然后使用专家迭代根据解释质量的训练目标迭代训练伪标签生成器。高质量的伪标签最终被用来训练端到端的解释生成器模型。进行了大量的实验来证明 GraphNarrator 在生成忠实、简洁和人类偏好的自然语言解释方面的有效性。

---

## 47. Enhancing Hyperbole and Metaphor Detection with Their Bidirectional Dynamic Interaction and Emotion Knowledge

**类别**: `主会-长文`

**作者**: Li Zheng, Sihang Wang, Hao Fei, Zuquan Peng, Fei Li, Jianming Fu, Chong Teng, Donghong Ji

**ID**: 2025.acl-long.23

**摘要(英文)**:
> Text-based hyperbole and metaphor detection are of great significance for natural language processing (NLP) tasks. However, due to their semantic obscurity and expressive diversity, it is rather challenging to identify them. Existing methods mostly focus on superficial text features, ignoring the associations of hyperbole and metaphor as well as the effect of implicit emotion on perceiving these rhetorical devices. To implement these hypotheses, we propose an emotion-guided hyperbole and metaphor detection framework based on bidirectional dynamic interaction (EmoBi). Firstly, the emotion analysis module deeply mines the emotion connotations behind hyperbole and metaphor. Next, the emotion-based domain mapping module identifies the target and source domains to gain a deeper understanding of the implicit meanings of hyperbole and metaphor. Finally, the bidirectional dynamic interaction module enables the mutual promotion between hyperbole and metaphor. Meanwhile, a verification mechanism is designed to ensure detection accuracy and reliability. Experiments show that EmoBi outperforms all baseline methods on four datasets. Specifically, compared to the current SoTA, the F1 score increased by 28.1% for hyperbole detection on the TroFi dataset and 23.1% for metaphor detection on the HYPO-L dataset. These results, underpinned by in-depth analyses, underscore the effectiveness and potential of our approach for advancing hyperbole and metaphor detection.

**摘要(中文)**:
> 基于文本的夸张和隐喻检测对于自然语言处理（NLP）任务具有重要意义。然而，由于它们的语义模糊性和表达多样性，识别它们相当具有挑战性。现有的方法大多关注表面的文本特征，忽略了夸张和隐喻的关联以及隐含情感对感知这些修辞手段的影响。为了实现这些假设，我们提出了一种基于双向动态交互（EmoBi）的情感引导夸张和隐喻检测框架。首先，情感分析模块深入挖掘夸张和隐喻背后的情感内涵。接下来，基于情感的域映射模块识别目标域和源域，以更深入地理解夸张和隐喻的隐含含义。最后，双向动态交互模块使夸张和隐喻之间能够相互促进。同时设计了验证机制，保证检测的准确性和可靠性。实验表明，EmoBi 在四个数据集上的表现优于所有基线方法。具体来说，与当前的 SoTA 相比，TroFi 数据集上的夸张检测的 F1 分数提高了 28.1%，HYPO-L 数据集上的隐喻检测的 F1 分数提高了 23.1%。这些结果以深入分析为基础，强调了我们推进夸张和隐喻检测方法的有效性和潜力。

---

## 48. How Much Do Encoder Models Know About Word Senses?

**类别**: `主会-长文`

**作者**: Simone Teglia, Simone Tedeschi, Roberto Navigli

**ID**: 2025.acl-long.113

**摘要(英文)**:
> Word Sense Disambiguation (WSD) is a key task in Natural Language Processing (NLP), involving selecting the correct meaning of a word based on its context. With Pretrained Language Models (PLMs) like BERT and DeBERTa now well established, significant progress has been made in understanding contextual semantics. Nevertheless, how well these models inherently disambiguate word senses remains uncertain. In this work, we evaluate several encoder-only PLMs across two popular inventories (i.e. WordNet and the Oxford Dictionary of English) by analyzing their ability to separate word senses without any task-specific fine-tuning. We compute centroids of word senses and measure similarity to assess performance across different layers. Our results show that DeBERTa-v3 delivers the best performance on the task, with the middle layers (specifically the 7th and 8th layers) achieving the highest accuracy, outperforming the output layer by approximately 15 percentage points. Our experiments also explore the inherent structure of WordNet and ODE sense inventories, highlighting their influence on the overall model behavior and performance. Finally, based on our findings, we develop a small, efficient model for the WSD task that attains robust performance while significantly reducing the carbon footprint.

**摘要(中文)**:
> 词义消歧 (WSD) 是自然语言处理 (NLP) 中的一项关键任务，涉及根据上下文选择单词的正确含义。随着 BERT 和 DeBERTa 等预训练语言模型 (PLM) 的成熟，在理解上下文语义方面已经取得了重大进展。然而，这些模型在本质上消除词义歧义的效果如何仍然不确定。在这项工作中，我们通过分析两个流行库（即 WordNet 和牛津英语词典）中几个仅编码器的 PLM 分离词义的能力，而不需要任何特定于任务的微调，来评估这些 PLM。我们计算词义的质心并测量相似性以评估不同层的性能。我们的结果表明，DeBERTa-v3 在任务上提供了最佳性能，其中中间层（特别是第 7 层和第 8 层）实现了最高的准确率，比输出层高出约 15 个百分点。我们的实验还探索了 WordNet 和 ODE 意义清单的内在结构，突出了它们对整体模型行为和性能的影响。最后，根据我们的研究结果，我们为 WSD 任务开发了一个小型、高效的模型，该模型可以获得稳健的性能，同时显着减少碳足迹。

---

## 49. Behind Closed Words: Creating and Investigating the forePLay Annotated Dataset forPolish Erotic Discourse

**类别**: `主会-长文`

**作者**: Anna Kołos, Katarzyna Lorenc, Emilia Wiśnios, Agnieszka Karlińska

**ID**: 2025.acl-long.120

**摘要(英文)**:
> The surge in online content has created an urgent demand for robust detection systems, especially in non-English contexts where current tools demonstrate significant limitations. We introduce forePLay, a novel Polish-language dataset for erotic content detection, comprising over 24,000 annotated sentences. The dataset features a multidimensional taxonomy that captures ambiguity, violence, and socially unacceptable behaviors. Our comprehensive evaluation demonstrates that specialized Polish language models achieve superior performance compared to multilingual alternatives, with transformer-based architectures showing particular strength in handling imbalanced categories. The dataset and accompanying analysis establish essential frameworks for developing linguistically-aware content moderation systems, while highlighting critical considerations for extending such capabilities to morphologically complex languages.

**摘要(中文)**:
> 在线内容的激增迫切需要强大的检测系统，特别是在非英语环境中，当前工具显示出很大的局限性。我们引入了forePLay，这是一个用于色情内容检测的新型波兰语数据集，包含超过 24,000 个带注释的句子。该数据集采用多维分类法，捕获歧义、暴力和社会不可接受的行为。我们的综合评估表明，与多语言替代方案相比，专门的波兰语模型实现了卓越的性能，并且基于 Transformer 的架构在处理不平衡类别方面显示出特殊的优势。该数据集和随附的分析为开发语言感知的内容审核系统建立了基本框架，同时强调了将此类功能扩展到形态复杂的语言的关键考虑因素。

---

## 50. Revisiting Common Assumptions aboutArabic Dialects inNLP

**类别**: `主会-长文`

**作者**: Amr Keleg, Sharon Goldwater, Walid Magdy

**ID**: 2025.acl-long.166

**摘要(英文)**:
> Arabic has diverse dialects, where one dialect can be substantially different from the others. In the NLP literature, some assumptions about these dialects are widely adopted (e.g., “Arabic dialects can be grouped into distinguishable regional dialects”) and are manifested in different computational tasks such as Arabic Dialect Identification (ADI). However, these assumptions are not quantitatively verified. We identify four of these assumptions and examine them by extending and analyzing a multi-label dataset, where the validity of each sentence in 11 different country-level dialects is manually assessed by speakers of these dialects. Our analysis indicates that the four assumptions oversimplify reality, and some of them are not always accurate. This in turn might be hindering further progress in different Arabic NLP tasks.

**摘要(中文)**:
> 阿拉伯语有多种方言，其中一种方言可能与其他方言有很大不同。在 NLP 文献中，关于这些方言的一些假设被广泛采用（例如，“阿拉伯方言可以分为可区分的区域方言”），并体现在不同的计算任务中，例如阿拉伯方言识别（ADI）。然而，这些假设并未得到定量验证。我们确定了其中四个假设，并通过扩展和分析多标签数据集来检查它们，其中 11 种不同国家级方言中每个句子的有效性由这些方言的使用者手动评估。我们的分析表明，这四个假设过于简单化了现实，而且其中一些假设并不总是准确的。这反过来可能会阻碍不同的阿拉伯语 NLP 任务的进一步进展。

---

## 51. Retrieve to Explain: Evidence-driven Predictions for Explainable Drug Target Identification

**类别**: `主会-长文`

**作者**: Ravi Patel, Angus Brayne, Rogier Hintzen, Daniel Jaroslawicz, Georgiana Neculae, Dane S. Corneil

**ID**: 2025.acl-long.167

**摘要(英文)**:
> Language models hold incredible promise for enabling scientific discovery by synthesizing massive research corpora. Many complex scientific research questions have multiple plausible answers, each supported by evidence of varying strength. However, existing language models lack the capability to quantitatively and faithfully compare answer plausibility in terms of supporting evidence. To address this, we introduce Retrieve to Explain (R2E), a retrieval-based model that scores and ranks all possible answers to a research question based on evidence retrieved from a document corpus. The architecture represents each answer only in terms of its supporting evidence, with the answer itself masked. This allows us to extend feature attribution methods such as Shapley values, to transparently attribute answer scores to supporting evidence at inference time. The architecture also allows incorporation of new evidence without retraining, including non-textual data modalities templated into natural language. We developed R2E for the challenging scientific discovery task of drug target identification, a human-in-the-loop process where failures are extremely costly and explainability paramount. When predicting whether drug targets will subsequently be confirmed as efficacious in clinical trials, R2E not only matches non-explainable literature-based models but also surpasses a genetics-based target identification approach used throughout the pharmaceutical industry.

**摘要(中文)**:
> 语言模型在通过综合大量研究语料库来实现科学发现方面具有令人难以置信的前景。许多复杂的科学研究问题都有多个看似合理的答案，每个答案都有不同强度的证据支持。然而，现有的语言模型缺乏在支持证据方面定量和忠实地比较答案合理性的能力。为了解决这个问题，我们引入了检索解释（R2E），这是一种基于检索的模型，它根据从文档语料库中检索到的证据对研究问题的所有可能答案进行评分和排名。该架构仅根据其支持证据来表示每个答案，而答案本身被掩盖。这使我们能够扩展 Shapley 值等特征归因方法，以在推理时透明地将答案分数归因于支持证据。该架构还允许合并新证据而无需重新训练，包括模板化为自然语言的非文本数据模式。我们为药物靶标识别这一具有挑战性的科学发现任务开发了 R2E，这是一个人机交互的过程，其中失败的成本极高，而且可解释性至关重要。在预测药物靶点随后是否会在临床试验中被证实有效时，R2E 不仅匹配无法解释的基于文献的模型，而且超越了整个制药行业使用的基于遗传学的靶点识别方法。

---

## 52. Taming Language Models for Text-attributed Graph Learning with Decoupled Aggregation

**类别**: `主会-长文`

**作者**: Chuang Zhou, Zhu Wang, Shengyuan Chen, Jiahe Du, Qiyuan Zheng, Zhaozhuo Xu, Xiao Huang

**ID**: 2025.acl-long.173

**摘要(英文)**:
> Text-attributed graphs (TAGs) are prevalent in various real-world applications, including academic networks, e-commerce platforms, and social networks. Effective learning on TAGs requires leveraging both textual node features and structural graph information. While language models (LMs) excel at processing text and graph neural networks (GNNs) effectively capture relational structures, their direct integration is computationally prohibitive due to the high cost of text and graph representation learning. Existing approaches address this challenge by adopting a two-step pipeline where LMs generate fixed node embeddings, which are then used for GNN training. However, this method neglects the interaction between textual and structural information, leading to suboptimal learning outcomes. To overcome these limitations, we propose SKETCH (Semantic Knowledge and Structure Enrichment), a novel framework that decouples node aggregation from graph convolution and integrates it into the text representation learning process. SKETCH enhances TAG learning by incorporating two key aggregation mechanisms: (1) Semantic aggregation, which retrieves semantically relevant node texts for contextual enrichment, and (2) Structural aggregation, which propagates textual features beyond immediate neighbors to capture broader graph relationships. Extensive experiments demonstrate that SKETCH outperforms state-of-the-art TAG learning methods while requiring fewer computational resources. By enabling a more efficient and effective fusion of textual and structural information, SKETCH provides new insights into TAG problems and offers a practical solution for real applications.

**摘要(中文)**:
> 文本属性图（TAG）在各种现实应用中普遍存在，包括学术网络、电子商务平台和社交网络。对标签的有效学习需要利用文本节点特征和结构图信息。虽然语言模型 (LM) 擅长处理文本，而图形神经网络 (GNN) 可以有效捕获关系结构，但由于文本和图形表示学习的成本高昂，它们的直接集成在计算上是令人望而却步的。现有方法通过采用两步管道来解决这一挑战，其中 LM 生成固定节点嵌入，然后将其用于 GNN 训练。然而，这种方法忽略了文本和结构信息之间的相互作用，导致学习结果不佳。为了克服这些限制，我们提出了 SKETCH（语义知识和结构丰富），这是一种新颖的框架，它将节点聚合与图卷积解耦并将其集成到文本表示学习过程中。 SKETCH 通过合并两个关键聚合机制来增强 TAG 学习：(1) 语义聚合，检索语义相关的节点文本以丰富上下文；(2) 结构聚合，将文本特征传播到直接邻居之外，以捕获更广泛的图关系。大量实验表明，SKETCH 的性能优于最先进的 TAG 学习方法，同时需要更少的计算资源。通过更高效、更有效地融合文本和结构信息，SKETCH 为 TAG 问题提供了新的见解，并为实际应用提供了实用的解决方案。

---

## 53. The Impact of Token Granularity on the Predictive Power of Language Model Surprisal

**类别**: `主会-长文`

**作者**: Byung-Doh Oh, William Schuler

**ID**: 2025.acl-long.209

**摘要(英文)**:
> Word-by-word language model surprisal is often used to model the incremental processing of human readers, which raises questions about how various choices in language modeling influence its predictive power. One factor that has been overlooked in cognitive modeling is the granularity of subword tokens, which explicitly encodes information about word length and frequency, and ultimately influences the quality of vector representations that are learned. This paper presents experiments that manipulate the token granularity and evaluate its impact on the ability of surprisal to account for processing difficulty of naturalistic text and garden-path constructions. Experiments with naturalistic reading times reveal a substantial influence of token granularity on surprisal, with tokens defined by a vocabulary size of 8,000 resulting in surprisal that is most predictive. In contrast, on garden-path constructions, language models trained on coarser-grained tokens generally assigned higher surprisal to critical regions, suggesting a greater sensitivity to garden-path effects than previously reported. Taken together, these results suggest a large role of token granularity on the quality of language model surprisal for cognitive modeling.

**摘要(中文)**:
> 逐字语言模型惊喜通常用于对人类读者的增量处理进行建模，这引发了关于语言建模中的各种选择如何影响其预测能力的问题。认知建模中被忽视的一个因素是子词标记的粒度，它显式编码有关词长和频率的信息，并最终影响所学习的向量表示的质量。本文提出了操纵标记粒度的实验，并评估其对解释自然文本和花园路径构造的处理难度的惊奇能力的影响。自然阅读时间的实验揭示了标记粒度对惊喜的重大影响，由 8,000 词汇量定义的标记导致最有预测性的惊喜。相比之下，在花园小路的构建中，在粗粒度标记上训练的语言模型通常会给关键区域分配更高的惊讶度，这表明对花园小路效应的敏感性比之前报道的要高。总而言之，这些结果表明标记粒度对认知建模的语言模型质量起着重要作用。

---

## 54. Lost in Multilinguality: Dissecting Cross-lingual Factual Inconsistency in Transformer Language Models

**类别**: `主会-长文`

**作者**: Mingyang Wang, Heike Adel, Lukas Lange, Yihong Liu, Ercong Nie, Jannik Strötgen, Hinrich Schuetze

**ID**: 2025.acl-long.253

**摘要(英文)**:
> Multilingual language models (MLMs) store factual knowledge across languages but often struggle to provide consistent responses to semantically equivalent prompts in different languages. While previous studies point out this cross-lingual inconsistency issue, the underlying causes remain unexplored. In this work, we use mechanistic interpretability methods to investigate cross-lingual inconsistencies in MLMs. We find that MLMs encode knowledge in a language-independent concept space through most layers, and only transition to language-specific spaces in the final layers. Failures during the language transition often result in incorrect predictions in the target language, even when the answers are correct in other languages. To mitigate this inconsistency issue, we propose a linear shortcut method that bypasses computations in the final layers, enhancing both prediction accuracy and cross-lingual consistency. Our findings shed light on the internal mechanisms of MLMs and provide a lightweight, effective strategy for producing more consistent factual outputs.

**摘要(中文)**:
> 多语言语言模型 (MLM) 存储跨语言的事实知识，但通常很难对不同语言的语义等效提示提供一致的响应。虽然之前的研究指出了这种跨语言不一致的问题，但其根本原因仍未被探索。在这项工作中，我们使用机械可解释性方法来研究传销中的跨语言不一致问题。我们发现 MLM 在大多数层中将知识编码在与语言无关的概念空间中，并且仅在最后层中过渡到特定于语言的空间。语言转换过程中的失败通常会导致目标语言的预测不正确，即使其他语言的答案是正确的。为了缓解这种不一致问题，我们提出了一种线性快捷方法，绕过最后层的计算，从而提高预测准确性和跨语言一致性。我们的研究结果揭示了传销的内部机制，并提供了一种轻量级、有效的策略来产生更一致的事实输出。

---

## 55. Geometric Signatures of Compositionality Across a Language Model’s Lifetime

**类别**: `主会-长文`

**作者**: Jin Hwa Lee, Thomas Jiralerspong, Lei Yu, Yoshua Bengio, Emily Cheng

**ID**: 2025.acl-long.265

**摘要(英文)**:
> By virtue of linguistic compositionality, few syntactic rules and a finite lexicon can generate an unbounded number of sentences. That is, language, though seemingly high-dimensional, can be explained using relatively few degrees of freedom. An open question is whether contemporary language models (LMs) reflect the intrinsic simplicity of language that is enabled by compositionality. We take a geometric view of this problem by relating the degree of compositionality in a dataset to the intrinsic dimension (ID) of its representations under an LM, a measure of feature complexity. We find not only that the degree of dataset compositionality is reflected in representations’ ID, but that the relationship between compositionality and geometric complexity arises due to learned linguistic features over training. Finally, our analyses reveal a striking contrast between nonlinear and linear dimensionality, showing they respectively encode semantic and superficial aspects of linguistic composition.

**摘要(中文)**:
> 凭借语言的组合性，很少的句法规则和有限的词典可以生成无限数量的句子。也就是说，语言虽然看似高维，但可以用相对较少的自由度来解释。一个悬而未决的问题是，当代语言模型（LM）是否反映了由组合性实现的语言的内在简单性。我们通过将数据集中的组合程度与其在 LM 下表示的内在维度 (ID)（特征复杂性的度量）相关联，从几何角度来看待这个问题。我们发现，数据集的组合性程度不仅反映在表示的 ID 中，而且组合性和几何复杂性之间的关系是由于在训练中学习到的语言特征而产生的。最后，我们的分析揭示了非线性维度和线性维度之间的显着对比，表明它们分别编码了语言构成的语义和表面方面。

---

## 56. Your Model is Overconfident, and Other Lies We Tell Ourselves

**类别**: `主会-长文`

**作者**: Timothee Mickus, Aman Sinha, Raúl Vázquez

**ID**: 2025.acl-long.269

**摘要(英文)**:
> The difficulty intrinsic to a given example, rooted in its inherent ambiguity, is a key yet often overlooked factor in evaluating neural NLP models. We investigate the interplay and divergence among various metrics for assessing intrinsic difficulty, including annotator dissensus, training dynamics, and model confidence. Through a comprehensive analysis using 29 models on three datasets, we reveal that while correlations exist among these metrics, their relationships are neither linear nor monotonic. By disentangling these dimensions of uncertainty, we aim to refine our understanding of data complexity and its implications for evaluating and improving NLP models.

**摘要(中文)**:
> 给定示例的内在困难源于其固有的模糊性，是评估神经 NLP 模型的一个关键但经常被忽视的因素。我们研究了评估内在难度的各种指标之间的相互作用和差异，包括注释者分歧、训练动态和模型置信度。通过对三个数据集使用 29 个模型进行综合分析，我们发现虽然这些指标之间存在相关性，但它们的关系既不是线性的也不是单调的。通过理清这些不确定性维度，我们的目标是加深对数据复杂性及其对评估和改进 NLP 模型的影响的理解。

---

## 57. Decoding Reading Goals from Eye Movements

**类别**: `主会-长文`

**作者**: Omer Shubi, Cfir Avraham Hadar, Yevgeni Berzak

**ID**: 2025.acl-long.280

**摘要(英文)**:
> Readers can have different goals with respect to the text that they are reading. Can these goals be decoded from their eye movements over the text? In this work, we examine for the first time whether it is possible to distinguish between two types of common reading goals: information seeking and ordinary reading for comprehension. Using large-scale eye tracking data, we address this task with a wide range of models that cover different architectural and data representation strategies, and further introduce a new model ensemble. We find that transformer-based models with scanpath representations coupled with language modeling solve it most successfully, and that accurate predictions can be made in real time, shortly after the participant started reading the text. We further introduce a new method for model performance analysis based on mixed effect modeling. Combining this method with rich textual annotations reveals key properties of textual items and participants that contribute to the difficulty of the task, and improves our understanding of the variability in eye movement patterns across the two reading regimes.

**摘要(中文)**:
> 读者对于他们正在阅读的文本可能有不同的目标。这些目标可以从他们在文本上的眼球运动来解码吗？在这项工作中，我们首次研究是否可以区分两种常见的阅读目标：信息寻求和普通阅读以进行理解。使用大规模眼动追踪数据，我们使用涵盖不同架构和数据表示策略的广泛模型来解决此任务，并进一步引入新的模型集合。我们发现，具有扫描路径表示的基于变压器的模型与语言建模相结合最成功地解决了这个问题，并且在参与者开始阅读文本后不久就可以实时做出准确的预测。我们进一步介绍了一种基于混合效应建模的模型性能分析新方法。将此方法与丰富的文本注释相结合，揭示了导致任务难度的文本项和参与者的关键属性，并提高了我们对两种阅读模式中眼动模式变异性的理解。

---

## 58. Can Language Models Reason about Individualistic Human Values and Preferences?

**类别**: `主会-长文`

**作者**: Liwei Jiang, Taylor Sorensen, Sydney Levine, Yejin Choi

**ID**: 2025.acl-long.336

**摘要(英文)**:
> Recent calls for pluralistic alignment emphasize that AI systems should address the diverse needs of all people. Yet, efforts in this space often require sorting people into fixed buckets of pre-specified diversity-defining dimensions (e.g., demographics), risking smoothing out individualistic variations or even stereotyping. To achieve an authentic representation of diversity that respects individuality, we propose individualistic alignment. While individualistic alignment can take various forms, in this paper, we introduce IndieValueCatalog, a dataset transformed from the influential World Values Survey (WVS), to study language models (LMs) on the specific challenge of individualistic value reasoning. Given a sample of an individual’s value-expressing statements, models are tasked with predicting their value judgments in novel cases. With IndieValueCatalog, we reveal critical limitations in frontier LMs’ abilities to predict individualistic values with accuracies only ranging between 55% to 65%. Moreover, our results highlight that a precise description of individualistic values cannot be approximated only via demographic information. Finally, we train a series of IndieValueReasoners to reveal new patterns and dynamics into global human values.

**摘要(中文)**:
> 最近对多元化协调的呼吁强调人工智能系统应该满足所有人的多样化需求。然而，在这一领域的努力通常需要将人们分类到预先指定的多样性定义维度（例如人口统计）的固定桶中，这有消除个人主义差异甚至刻板印象的风险。为了实现尊重个性的多样性的真实表现，我们提出个人主义联盟。虽然个人主义联盟可以采取多种形式，但在本文中，我们引入了 IndieValueCatalog，这是一个从有影响力的世界价值观调查 (WVS) 转换而来的数据集，用于研究针对个人主义价值推理的特定挑战的语言模型 (LM)。给定个人价值表达陈述的样本，模型的任务是预测他们在新案例中的价值判断。通过 IndieValueCatalog，我们揭示了前沿 LM 预测个人价值观的能力的关键局限性，准确率仅在 55% 到 65% 之间。此外，我们的结果强调，个人主义价值观的精确描述不能仅通过人口统计信息来近似。最后，我们训练了一系列 IndieValueReasoners，以揭示全球人类价值观的新模式和动态。

---

## 59. BERT-like Models forSlavic Morpheme Segmentation

**类别**: `主会-长文`

**作者**: Dmitry Morozov, Lizaveta Astapenka, Anna Glazkova, Timur Garipov, Olga Lyashevskaya

**ID**: 2025.acl-long.337

**摘要(英文)**:
> Automatic morpheme segmentation algorithms are applicable in various tasks, such as building tokenizers and language education. For Slavic languages, the development of such algorithms is complicated by the rich derivational capabilities of these languages. Previous research has shown that, on average, these algorithms have already reached expert-level quality. However, a key unresolved issue is the significant decline in performance when segmenting words containing roots not present in the training data. This problem can be partially addressed by using pre-trained language models to better account for word semantics. In this work, we explored the possibility of fine-tuning BERT-like models for morpheme segmentation using data from Belarusian, Czech, and Russian. We found that for Czech and Russian, our models outperform all previously proposed approaches, achieving word-level accuracy of 92.5-95.1%. For Belarusian, this task was addressed for the first time. The best-performing approach for Belarusian was an ensemble of convolutional neural networks with word-level accuracy of 90.45%.

**摘要(中文)**:
> 自动语素分割算法适用于各种任务，例如构建分词器和语言教育。对于斯拉夫语言来说，由于这些语言丰富的派生能力，此类算法的开发变得复杂。之前的研究表明，平均而言，这些算法已经达到了专家级的质量。然而，一个尚未解决的关键问题是，在分割包含训练数据中不存在的词根的单词时，性能显着下降。这个问题可以通过使用预先训练的语言模型来部分解决，以更好地解释单词语义。在这项工作中，我们探索了使用白俄罗斯语、捷克语和俄语的数据微调用于词素分割的类 BERT 模型的可能性。我们发现，对于捷克语和俄语，我们的模型优于之前提出的所有方法，实现了 92.5-95.1% 的单词级准确率。对于白俄罗斯人来说，这是第一次完成这项任务。 Belarusian 表现最好的方法是卷积神经网络集成，单词级准确率达到 90.45%。

---

## 60. Evaluating Theory of (an uncertain) Mind: Predicting the Uncertain Beliefs of Others from Conversational Cues

**类别**: `主会-长文`

**作者**: Anthony Sicilia, Malihe Alikhani

**ID**: 2025.acl-long.395

**摘要(英文)**:
> Typically, when evaluating Theory of Mind, we consider the beliefs of others to be binary: held or not held. But what if someone is unsure about their own beliefs? How can we quantify this uncertainty? We propose a new suite of tasks, challenging language models (LMs) to model the uncertainty of participants in a dialogue. We design these tasks around conversation forecasting, where the goal is to predict the probability of an unobserved conversation outcome. Uniquely, we view conversation agents themselves as forecasters, asking an LM to predict the uncertainty of an individual from their language use. We experiment with scaling methods, bagging, and demographic context for this regression task, conducting experiments on three dialogue corpora (social, negotiation, task-oriented) with eight LMs. While LMs can explain up to 7% variance in the uncertainty of others, we highlight the difficulty of the tasks and room for future work, especially in tasks that require explicit shifts in perspective.

**摘要(中文)**:
> 通常，在评估心理理论时，我们认为他人的信念是二元的：持有或不持有。但如果有人不确定自己的信仰怎么办？我们如何量化这种不确定性？我们提出了一套新的任务，挑战语言模型（LM）来模拟对话参与者的不确定性。我们围绕对话预测设计这些任务，其目标是预测未观察到的对话结果的概率。独特的是，我们将对话代理本身视为预测者，要求语言模型根据个人的语言使用来预测其不确定性。我们针对此回归任务尝试了缩放方法、装袋和人口统计背景，并使用八个语言模型在三个对话语料库（社交、谈判、任务导向）上进行了实验。虽然 LM 可以解释其他人的不确定性中高达 7% 的方差，但我们强调了任务的难度和未来工作的空间，特别是在需要明确转变视角的任务中。

---

## 61. Circuit Stability Characterizes Language Model Generalization

**类别**: `主会-长文`

**作者**: Alan Sun

**ID**: 2025.acl-long.442

**摘要(英文)**:
> Extensively evaluating the capabilities of (large) language models is difficult. Rapid development of state-of-the-art models induce benchmark saturation, while creating more challenging datasets is labor-intensive. Inspired by the recent developments in mechanistic interpretability, we introduce circuit stability as a new way to assess model performance. Circuit stability refers to a model’s ability to apply a consistent reasoning process–its circuit–across various inputs. We mathematically formalize circuit stability and circuit equivalence. Then, through three case studies, we empirically show that circuit stability and the lack thereof can characterize and predict different aspects of generalization. Our proposed methods offer a step towards rigorously relating the generality of models to their interpretability.

**摘要(中文)**:
> 广泛评估（大型）语言模型的功能很困难。最先进模型的快速开发会导致基准饱和，而创建更具挑战性的数据集则需要大量劳动力。受机械可解释性最新发展的启发，我们引入电路稳定性作为评估模型性能的新方法。电路稳定性是指模型在各种输入上应用一致的推理过程（其电路）的能力。我们用数学形式化电路稳定性和电路等效性。然后，通过三个案例研究，我们凭经验证明电路稳定性及其缺乏可以表征和预测泛化的不同方面。我们提出的方法为将模型的通用性与其可解释性严格联系起来迈出了一步。

---

## 62. SelfElicit: Your Language Model Secretly Knows Where is the Relevant Evidence

**类别**: `主会-长文`

**作者**: Zhining Liu, Rana Ali Amjad, Ravinarayana Adkathimar, Tianxin Wei, Hanghang Tong

**ID**: 2025.acl-long.448

**摘要(英文)**:
> Providing Language Models (LMs) with relevant evidence in the context (either via retrieval or user-provided) can significantly improve their ability to provide better-grounded responses. However, recent studies have found that LMs often struggle to fully comprehend and utilize key evidence from the context, especially when it contains noise and irrelevant information—an issue common in real-world scenarios.To address this, we propose SelfElicit, an inference-time approach that helps LMs focus on key contextual evidence through self-guided explicit highlighting.By leveraging the inherent evidence-finding capabilities of LMs using the attention scores of deeper layers, our method automatically identifies and emphasizes key evidence within the input context, facilitating more accurate and grounded responses without additional training or iterative prompting.We demonstrate that SelfElicit brings consistent and significant improvement on multiple evidence-based QA tasks for various LM families while maintaining computational efficiency.Our code and documentation are available at https://github.com/ZhiningLiu1998/SelfElicit.

**摘要(中文)**:
> 为语言模型 (LM) 提供上下文中的相关证据（通过检索或用户提供）可以显着提高其提供更有根据的响应的能力。然而，最近的研究发现，语言模型常常难以完全理解和利用上下文中的关键证据，尤其是当它包含噪声和不相关信息时——这是现实世界场景中常见的问题。为了解决这个问题，我们提出了 SelfElicit，一种推理时间方法，可以帮助语言模型通过自我引导的显式突出显示来关注关键上下文证据。通过使用更深层次的注意力分数来利用语言模型固有的证据查找能力，我们的方法自动识别并强调输入中的关键证据我们证明，SelfElicit 为各种 LM 系列的多个基于证据的 QA 任务带来了一致且显着的改进，同时保持了计算效率。我们的代码和文档可在 https://github.com/ZhiningLiu1998/SelfElicit 上获取。

---

## 63. Efficient Pretraining Data Selection for Language Models via Multi-Actor Collaboration

**类别**: `主会-长文`

**作者**: Tianyi Bai, Ling Yang, Zhen Hao Wong, Fupeng Sun, Xinlin Zhuang, Jiahui Peng, Chi Zhang, Lijun Wu, Qiu Jiantao, Wentao Zhang, Binhang Yuan, Conghui He

**ID**: 2025.acl-long.466

**摘要(英文)**:
> Efficient data selection is crucial to accelerate the pretraining of language model (LMs). While various methods have been proposed to enhance data efficiency, limited research has addressed the inherent conflicts between these approaches to achieve optimal data selection for LM pretraining. To tackle this problem, we propose a multi-actor collaborative data selection mechanism. Each data selection method independently prioritizes data based on its specific criterion and updates its prioritization rules using the current state of the model, functioning as an independent actor for data selection. Additionally, a console is designed to adjust the impacts of different actors at various stages and dynamically integrate information from all actors throughout the LM pretraining process. We conduct extensive empirical studies to evaluate our multi-actor framework. The experimental results demonstrate that our approach significantly improves data efficiency, accelerates convergence in LM pretraining, and achieves an average relative performance gain up to 10.5% across multiple language model benchmarks compared to the state-of-the-art methods.

**摘要(中文)**:
> 有效的数据选择对于加速语言模型（LM）的预训练至关重要。虽然人们提出了各种方法来提高数据效率，但有限的研究解决了这些方法之间的固有冲突，以实现 LM 预训练的最佳数据选择。为了解决这个问题，我们提出了一种多参与者协作数据选择机制。每种数据选择方法根据其特定标准独立地对数据进行优先级排序，并使用模型的当前状态更新其优先级规则，充当数据选择的独立参与者。此外，控制台旨在调整不同阶段不同参与者的影响，并在整个 LM 预训练过程中动态集成来自所有参与者的信息。我们进行了广泛的实证研究来评估我们的多参与者框架。实验结果表明，与最先进的方法相比，我们的方法显着提高了数据效率，加速了 LM 预训练的收敛，并且在多个语言模型基准测试中实现了高达 10.5% 的平均相对性能增益。

---

## 64. Incorporating Domain Knowledge into Materials Tokenization

**类别**: `主会-长文`

**作者**: Yerim Oh, Jun-Hyung Park, Junho Kim, SungHo Kim, SangKeun Lee

**ID**: 2025.acl-long.474

**摘要(英文)**:
> While language models are increasingly utilized in materials science, typical models rely on frequency-centric tokenization methods originally developed for natural language processing. However, these methods frequently produce excessive fragmentation and semantic loss, failing to maintain the structural and semantic integrity of material concepts. To address this issue, we propose MATTER, a novel tokenization approach that integrates material knowledge into tokenization. Based on MatDetector trained on our materials knowledge base and re-ranking method prioritizing material terms in token merging, MATTER maintains the structural integrity of identified materials concepts and prevents fragmentation during tokenization, ensuring their semantic meaning remains intact. The experimental results demonstrate that MATTER outperforms existing tokenization methods, achieving an average performance gain of 4% and 2% in the generation and classification tasks, respectively. These results underscore the importance of domain knowledge for tokenization strategies in scientific text processing.

**摘要(中文)**:
> 虽然语言模型在材料科学中的应用越来越多，但典型模型依赖于最初为自然语言处理开发的以频率为中心的标记化方法。然而，这些方法经常产生过度的碎片化和语义丢失，无法保持物质概念的结构和语义完整性。为了解决这个问题，我们提出了 MATTER，一种将物质知识集成到标记化中的新颖标记化方法。基于在我们的材料知识库上训练的 MatDetector 和在标记合并中优先考虑材料术语的重新排序方法，MATTER 保持了已识别材料概念的结构完整性，并防止在标记化过程中出现碎片，确保其语义保持完整。实验结果表明，MATTER 优于现有的标记化方法，在生成和分类任务中分别实现了 4% 和 2% 的平均性能增益。这些结果强调了领域知识对于科学文本处理中标记化策略的重要性。

---

## 65. Between Circuits andChomsky: Pre-pretraining on Formal Languages Imparts Linguistic Biases

**类别**: `主会-长文`

**作者**: Michael Y. Hu, Jackson Petty, Chuan Shi, William Merrill, Tal Linzen

**ID**: 2025.acl-long.478

**摘要(英文)**:
> Pretraining language models on formal language can improve their acquisition of natural language. Which features of the formal language impart an inductive bias that leads to effective transfer? Drawing on insights from linguistics and complexity theory, we hypothesize that effective transfer occurs when two conditions are met: the formal language should capture the dependency structures present in natural language, and it should remain within the computational limitations of the model architecture. We experiment with pre-pretraining (training on formal language before natural languages) on transformers and find that formal languages capturing hierarchical dependencies indeed enable language models to achieve lower loss on natural language and better linguistic generalization compared to other formal languages. We also find modest support for the hypothesis that the formal language should fall within the computational limitations of the architecture. Strikingly, pre-pretraining reduces loss more efficiently than training on a matched amount of natural language. For a 1B-parameter language model trained on roughly 1.6B tokens of natural language, pre-pretraining achieves the same loss and better linguistic generalization with a 33% smaller token budget. Finally, we also give mechanistic evidence of transfer from formal tonatural language: attention heads acquired during pre-pretraining remain crucial for the model’s performance on syntactic evaluations.

**摘要(中文)**:
> 在形式语言上预训练语言模型可以提高他们对自然语言的习得。形式语言的哪些特征会产生归纳偏差，从而导致有效的迁移？借鉴语言学和复杂性理论的见解，我们假设当满足两个条件时就会发生有效的迁移：形式语言应该捕获自然语言中存在的依赖结构，并且它应该保持在模型架构的计算限制内。我们在 Transformer 上进行了预训练（在自然语言之前对形式语言进行训练）进行实验，发现与其他形式语言相比，捕获层次依赖关系的形式语言确实使语言模型能够实现更低的自然语言损失和更好的语言泛化。我们还发现了对形式语言应该落在架构的计算限制之内的假设的适度支持。引人注目的是，预训练比对匹配数量的自然语言进行训练更有效地减少损失。对于在大约 1.6B 个自然语言标记上训练的 1B 参数语言模型，预训练以减少 33% 的标记预算实现了相同的损失和更好的语言泛化。最后，我们还给出了从正式语言到自然语言转移的机械证据：在预训练期间获得的注意力头对于模型在句法评估方面的表现仍然至关重要。

---

## 66. On Support Samples of Next Word Prediction

**类别**: `主会-长文`

**作者**: Yuqian Li, Yupei Du, Yufang Liu, Feifei Feng, Mou Xiao Feng, Yuanbin Wu

**ID**: 2025.acl-long.507

**摘要(英文)**:
> Language models excel in various tasks by making complex decisions, yet understanding the rationale behind these decisions remains a challenge. This paper investigatesdata-centric interpretabilityin language models, focusing on the next-word prediction task. Using representer theorem, we identify two types ofsupport samples—those that either promote or deter specific predictions. Our findings reveal that being a support sample is an intrinsic property, predictable even before training begins. Additionally, while non-support samples are less influential in direct predictions, they play a critical role in preventing overfitting and shaping generalization and representation learning. Notably, the importance of non-support samples increases in deeper layers, suggesting their significant role in intermediate representation formation.These insights shed light on the interplay between data and model decisions, offering a new dimension to understanding language model behavior and interpretability.

**摘要(中文)**:
> 语言模型通过做出复杂的决策而在各种任务中表现出色，但理解这些决策背后的基本原理仍然是一个挑战。本文研究了语言模型中以数据为中心的可解释性，重点关注下一个单词的预测任务。使用表示定理，我们确定了两种类型的支持样本——促进或阻止特定预测的样本。我们的研究结果表明，作为支持样本是一种内在属性，甚至在训练开始之前就可以预测。此外，虽然非支持样本在直接预测中影响较小，但它们在防止过度拟合以及塑造泛化和表示学习方面发挥着关键作用。值得注意的是，非支持样本的重要性在更深层次上增加，表明它们在中间表示形成中发挥着重要作用。这些见解揭示了数据和模型决策之间的相互作用，为理解语言模型行为和可解释性提供了新的维度。

---

## 67. Mitigating Confounding in Speech-Based Dementia Detection through Weight Masking

**类别**: `主会-长文`

**作者**: Zhecheng Sheng, Xiruo Ding, Brian Hur, Changye Li, Trevor Cohen, Serguei V. S. Pakhomov

**ID**: 2025.acl-long.514

**摘要(英文)**:
> Deep transformer models have been used to detect linguistic anomalies in patient transcripts for early Alzheimer’s disease (AD) screening. While pre-trained neural language models (LMs) fine-tuned on AD transcripts perform well, little research has explored the effects of the gender of the speakers represented by these transcripts. This work addresses gender confounding in dementia detection and proposes two methods: the Extended Confounding Filter and the Dual Filter, which isolate and ablate weights associated with gender. We evaluate these methods on dementia datasets with first-person narratives from patients with cognitive impairment and healthy controls. Our results show transformer models tend to overfit to training data distributions. Disrupting gender-related weights results in a deconfounded dementia classifier, with the trade-off of slightly reduced dementia detection performance.

**摘要(中文)**:
> 深度变压器模型已被用来检测患者转录中的语言异常，以进行早期阿尔茨海默病 (AD) 筛查。虽然针对 AD 转录本进行微调的预训练神经语言模型 (LM) 表现良好，但很少有研究探讨这些转录本所代表的说话者性别的影响。这项工作解决了痴呆症检测中的性别混杂问题，并提出了两种方法：扩展混杂过滤器和双重过滤器，它们隔离并消除与性别相关的权重。我们使用认知障碍患者和健康对照的第一人称叙述在痴呆数据集上评估这些方法。我们的结果表明，变压器模型往往会过度拟合训练数据分布。破坏与性别相关的权重会导致痴呆症分类器去混杂，但代价是痴呆症检测性能略有下降。

---

## 68. The Knowledge Microscope: Features as Better Analytical Lenses than Neurons

**类别**: `主会-长文`

**作者**: Yuheng Chen, Pengfei Cao, Kang Liu, Jun Zhao

**ID**: 2025.acl-long.516

**摘要(英文)**:
> We demonstrate that features, rather than neurons, serve as superior analytical units for understanding the mechanisms of factual knowledge in Language Models (LMs). Previous studies primarily utilize MLP neurons as units of analysis; however, neurons suffer from polysemanticity, leading to limited knowledge expression and poor interpretability. We first conduct preliminary experiments to validate that SAE can effectively decompose neurons into features. With this established, our core findings reveal three key advantages of features over neurons: (1) Features exhibit stronger influence on knowledge expression and superior interpretability. (2) Features demonstrate enhanced monosemanticity, showing distinct activation patterns between related and unrelated facts. (3) Feature-based method demonstrates superior performance over neuron-based approaches in erasing privacy-sensitive information from LMs. Additionally, we propose FeatureEdit, the first feature-based editing method. Code and dataset will be available.

**摘要(中文)**:
> 我们证明，特征（而不是神经元）可以作为理解语言模型（LM）中事实知识机制的高级分析单元。之前的研究主要利用MLP神经元作为分析单位；然而，神经元存在多义性，导致知识表达有限且可解释性差。我们首先进行初步实验来验证SAE可以有效地将神经元分解为特征。有了这一点，我们的核心发现揭示了特征相对于神经元的三个关键优势：（1）特征对知识表达和卓越的可解释性表现出更强的影响。 (2) 特征表现出增强的单语义性，显示相关和不相关事实之间不同的激活模式。 (3) 在从 LM 中删除隐私敏感信息方面，基于特征的方法表现出优于基于神经元的方法的性能。此外，我们提出了FeatureEdit，第一个基于特征的编辑方法。代码和数据集将可用。

---

## 69. PKAG-DDI: Pairwise Knowledge-Augmented Language Model for Drug-Drug Interaction Event Text Generation

**类别**: `主会-长文`

**作者**: Ziyan Wang, Zhankun Xiong, Feng Huang, Wen Zhang

**ID**: 2025.acl-long.539

**摘要(英文)**:
> Drug-drug interactions (DDIs) arise when multiple drugs are administered concurrently. Accurately predicting the specific mechanisms underlying DDIs (named DDI events or DDIEs) is critical for the safe clinical use of drugs. DDIEs are typically represented as textual descriptions. However, most computational methods focus more on predicting the DDIE class label over generating human-readable natural language increasing clinicians’ interpretation costs. Furthermore, current methods overlook the fact that each drug assumes distinct biological functions in a DDI, which, when used as input context, can enhance the understanding of the DDIE process and benefit DDIE generation by the language model (LM). In this work, we propose a novel pairwise knowledge-augmented generative method (termed PKAG-DDI) for DDIE text generation. It consists of a pairwise knowledge selector efficiently injecting structural information between drugs bidirectionally and simultaneously to select pairwise biological functions from the knowledge set, and a pairwise knowledge integration strategy that matches and integrates the selected biological functions into the LM. Experiments on two professional datasets show that PKAG-DDI outperforms existing methods in DDIE text generation, especially in challenging inductive scenarios, indicating its practicality and generalization.

**摘要(中文)**:
> 当同时服用多种药物时，就会出现药物间相互作用 (DDI)。准确预测DDI（称为DDI事件或DDIE）的具体机制对于临床安全使用药物至关重要。 DDIE 通常表示为文本描述。然而，大多数计算方法更侧重于预测 DDIE 类标签，而不是生成人类可读的自然语言，从而增加了临床医生的解释成本。此外，当前的方法忽视了这样一个事实，即每种药物在 DDI 中具有不同的生物学功能，当用作输入上下文时，可以增强对 DDIE 过程的理解，并有利于语言模型 (LM) 的 DDIE 生成。在这项工作中，我们提出了一种用于 DDIE 文本生成的新型成对知识增强生成方法（称为 PKAG-DDI）。它由成对知识选择器和成对知识集成策略组成，成对知识选择器有效地双向、同时注入药物之间的结构信息，以从知识集中选择成对生物功能，以及成对知识集成策略，将所选生物功能匹配并集成到语言模型中。在两个专业数据集上的实验表明，PKAG-DDI 在 DDIE 文本生成方面优于现有方法，尤其是在具有挑战性的归纳场景中，表明了其实用性和泛化性。

---

## 70. Circuit Compositions: Exploring Modular Structures in Transformer-Based Language Models

**类别**: `主会-长文`

**作者**: Philipp Mondorf, Sondre Wold, Barbara Plank

**ID**: 2025.acl-long.727

**摘要(英文)**:
> A fundamental question in interpretability research is to what extent neural networks, particularly language models, implement reusable functions through subnetworks that can be composed to perform more complex tasks. Recent advances in mechanistic interpretability have made progress in identifying circuits, the minimal computational subgraphs responsible for a model’s behavior on specific tasks. However, most studies focus on identifying circuits for individual tasks without investigating how functionally similar circuits relate to each other. To address this gap, we study the modularity of neural networks by analyzing circuits for highly compositional subtasks within a transformer-based language model. Specifically, given a probabilistic context-free grammar, we identify and compare circuits responsible for ten modular string-edit operations. Our results indicate that functionally similar circuits exhibit both notable node overlap and cross-task faithfulness. Moreover, we demonstrate that the circuits identified can be reused and combined through set operations to represent more complex functional model capabilities.

**摘要(中文)**:
> 可解释性研究的一个基本问题是神经网络，特别是语言模型，在多大程度上通过子网络实现可重用的功能，这些子网络可以组合起来执行更复杂的任务。机械可解释性的最新进展在识别电路方面取得了进展，电路是负责模型在特定任务上的行为的最小计算子图。然而，大多数研究侧重于识别单个任务的电路，而不调查功能相似的电路如何相互关联。为了解决这一差距，我们通过分析基于 Transformer 的语言模型中高度组合的子任务的电路来研究神经网络的模块化。具体来说，给定概率上下文无关语法，我们识别并比较负责十个模块化字符串编辑操作的电路。我们的结果表明，功能相似的电路表现出显着的节点重叠和跨任务忠实度。此外，我们证明所识别的电路可以通过集合操作重用和组合，以表示更复杂的功能模型功能。

---

## 71. A New Formulation ofZipf’s Meaning-Frequency Law through Contextual Diversity

**类别**: `主会-长文`

**作者**: Ryo Nagata, Kumiko Tanaka-Ishii

**ID**: 2025.acl-long.744

**摘要(英文)**:
> This paper proposes formulating Zipf’s meaning-frequency law, the power law between word frequency and the number of meanings, as a relationship between word frequency and contextual diversity. The proposed formulation quantifies meaning counts as contextual diversity, which is based on the directions of contextualized word vectors obtained from a Language Model (LM). This formulation gives a new interpretation to the law and also enables us to examine it for a wider variety of words and corpora than previous studies have explored. In addition, this paper shows that the law becomes unobservable when the size of the LM used is small and that autoregressive LMs require much more parameters than masked LMs to be able to observe the law.

**摘要(中文)**:
> 本文建议将齐夫意义频率定律（词频与含义数量之间的幂律）表述为词频与上下文多样性之间的关系。所提出的公式将意义计数量化为上下文多样性，这是基于从语言模型（LM）获得的上下文词向量的方向。这种表述为该法律提供了新的解释，也使我们能够比以前的研究探索更广泛的词汇和语料库来检查它。此外，本文还表明，当使用的 LM 尺寸较小时，该定律将变得不可观察，并且自回归 LM 需要比屏蔽 LM 更多的参数才能观察到该定律。

---

## 72. Quantifying Lexical Semantic Shift via Unbalanced Optimal Transport

**类别**: `主会-长文`

**作者**: Ryo Kishino, Hiroaki Yamagiwa, Ryo Nagata, Sho Yokoi, Hidetoshi Shimodaira

**ID**: 2025.acl-long.774

**摘要(英文)**:
> Lexical semantic change detection aims to identify shifts in word meanings over time. While existing methods using embeddings from a diachronic corpus pair estimate the degree of change for target words, they offer limited insight into changes at the level of individual usage instances. To address this, we apply Unbalanced Optimal Transport (UOT) to sets of contextualized word embeddings, capturing semantic change through the excess and deficit in the alignment between usage instances. In particular, we propose Sense Usage Shift (SUS), a measure that quantifies changes in the usage frequency of a word sense at each usage instance. By leveraging SUS, we demonstrate that several challenges in semantic change detection can be addressed in a unified manner, including quantifying instance-level semantic change and word-level tasks such as measuring the magnitude of semantic change and the broadening or narrowing of meaning.

**摘要(中文)**:
> 词汇语义变化检测旨在识别词义随时间的变化。虽然现有的方法使用历时语料库对的嵌入来估计目标词的变化程度，但它们对单个使用实例级别的变化提供的洞察有限。为了解决这个问题，我们将不平衡最佳传输（UOT）应用于上下文化的词嵌入集，通过使用实例之间的对齐的多余和不足来捕获语义变化。特别是，我们提出了词义使用转变（SUS），这是一种量化每个使用实例中词义使用频率变化的度量。通过利用 SUS，我们证明了可以以统一的方式解决语义变化检测中的几个挑战，包括量化实例级语义变化和单词级任务，例如测量语义变化的幅度以及含义的扩大或缩小。

---

## 73. Disentangling the Roles of Representation and Selection in Data Pruning

**类别**: `主会-长文`

**作者**: Yupei Du, Yingjin Song, Hugh Mee Wong, Daniil Ignatev, Albert Gatt, Dong Nguyen

**ID**: 2025.acl-long.821

**摘要(英文)**:
> Data pruning—selecting small but impactful subsets—offers a promising way to efficiently scale NLP model training. However, existing methods often involve many different design choices, which have not been systematically studied. This limits future developments. In this work, we decompose data pruning into two key components: data representation and selection algorithm, and systematically analyze their influence on selected instances. Our theoretical and empirical results highlight the crucial role of representations: better representations, e.g., training gradients, generally lead to better selected instances, regardless of the chosen selection algorithm. Furthermore, different selection algorithms excel in different settings, and none consistently outperform the others. Moreover, the selection algorithms do not always align with their intended objectives: for example, algorithms designed for the same objective can select drastically different instances, highlighting the need for careful evaluation.

**摘要(中文)**:
> 数据修剪——选择小但有影响力的子集——提供了一种有效扩展 NLP 模型训练的有前途的方法。然而，现有的方法通常涉及许多不同的设计选择，尚未得到系统的研究。这限制了未来的发展。在这项工作中，我们将数据剪枝分解为两个关键组成部分：数据表示和选择算法，并系统地分析它们对所选实例的影响。我们的理论和实证结果强调了表示的关键作用：更好的表示，例如训练梯度，通常会导致更好的实例选择，无论选择哪种选择算法。此外，不同的选择算法在不同的设置中表现出色，并且没有一个算法始终优于其他算法。此外，选择算法并不总是与其预期目标一致：例如，为同一目标设计的算法可以选择截然不同的实例，这凸显了仔细评估的必要性。

---

## 74. From Human Reading toNLMUnderstanding: Evaluating the Role of Eye-Tracking Data in Encoder-Based Models

**类别**: `主会-长文`

**作者**: Luca Dini, Lucia Domenichelli, Dominique Brunato, Felice Dell’Orletta

**ID**: 2025.acl-long.870

**摘要(英文)**:
> Cognitive signals, particularly eye-tracking data, offer valuable insights into human language processing. Leveraging eye-gaze data from the Ghent Eye-Tracking Corpus, we conducted a series of experiments to examine how integrating knowledge of human reading behavior impacts Neural Language Models (NLMs) across multiple dimensions: task performance, attention mechanisms, and the geometry of their embedding space. We explored several fine-tuning methodologies to inject eye-tracking features into the models. Our results reveal that incorporating these features does not degrade downstream task performance, enhances alignment between model attention and human attention patterns, and compresses the geometry of the embedding space.

**摘要(中文)**:
> 认知信号，特别是眼球追踪数据，为人类语言处理提供了宝贵的见解。利用根特眼球追踪语料库的眼球注视数据，我们进行了一系列实验，以研究人类阅读行为的整合知识如何在多个维度上影响神经语言模型（NLM）：任务性能、注意力机制及其嵌入空间的几何形状。我们探索了几种微调方法，将眼球追踪功能注入模型中。我们的结果表明，合并这些特征不会降低下游任务性能，增强模型注意力和人类注意力模式之间的一致性，并压缩嵌入空间的几何形状。

---

## 75. Enhancing Spoken Discourse Modeling in Language Models Using Gestural Cues

**类别**: `主会-长文`

**作者**: Varsha Suresh, M. Hamza Mughal, Christian Theobalt, Vera Demberg

**ID**: 2025.acl-long.886

**摘要(英文)**:
> Research in linguistics shows that non-verbal cues, such as gestures, play a crucial role in spoken discourse. For example, speakers perform hand gestures to indicate topic shifts, helping listeners identify transitions in discourse. In this work, we investigate whether the joint modeling of gestures using human motion sequences and language can improve spoken discourse modeling in language models. To integrate gestures into language models, we first encode 3D human motion sequences into discrete gesture tokens using a VQ-VAE. These gesture token embeddings are then aligned with text embeddings through feature alignment, mapping them into the text embedding space. To evaluate the gesture-aligned language model on spoken discourse, we construct text infilling tasks targeting three key discourse cues grounded in linguistic research: discourse connectives, stance markers, and quantifiers. Results show that incorporating gestures enhances marker prediction accuracy across the three tasks, highlighting the complementary information that gestures can offer in modeling spoken discourse. We view this work as an initial step toward leveraging non-verbal cues to advance spoken language modeling in language models.

**摘要(中文)**:
> 语言学研究表明，手势等非语言线索在口语对话中发挥着至关重要的作用。例如，演讲者通过手势来指示主题转移，帮助听众识别话语中的转换。在这项工作中，我们研究了使用人类运动序列和语言对手势进行联合建模是否可以改进语言模型中的口语对话建模。为了将手势集成到语言模型中，我们首先使用 VQ-VAE 将 3D 人体运动序列编码为离散手势标记。然后，这些手势标记嵌入通过特征对齐与文本嵌入对齐，将它们映射到文本嵌入空间。为了评估口语话语中的手势对齐语言模型，我们构建了针对基于语言研究的三个关键话语线索的文本填充任务：话语连接词、立场标记和量词。结果表明，结合手势可以提高这三个任务的标记预测准确性，突出显示手势在建模口语对话中可以提供的补充信息。我们认为这项工作是利用非语言线索推进语言模型中口语建模的第一步。

---

## 76. Cramming 1568 Tokens into a Single Vector and Back Again: Exploring the Limits of Embedding Space Capacity

**类别**: `主会-长文`

**作者**: Yuri Kuratov, Mikhail Arkhipov, Aydar Bulatov, Mikhail Burtsev

**ID**: 2025.acl-long.948

**摘要(英文)**:
> A range of recent works addresses the problem of compression of sequence of tokens into a shorter sequence of real-valued vectors to be used as inputs instead of token embeddings or key-value cache. These approaches are focused on reduction of the amount of compute in existing language models rather than minimization of number of bits needed to store text. Despite relying on powerful models as encoders, the maximum attainable lossless compression ratio is typically not higher than x10. This fact is highly intriguing because, in theory, the maximum information capacity of large real-valued vectors is far beyond the presented rates even for 16-bit precision and a modest vector size. In this work, we explore the limits of compression by replacing the encoder with a per-sample optimization procedure. We show that vectors with compression ratios up to x1500 exist, which highlights two orders of magnitude gap between existing and practically attainable solutions. Furthermore, we empirically show that the compression limits are determined not by the length of the input but by the amount of uncertainty to be reduced, namely, the cross-entropy loss on this sequence without any conditioning. The obtained limits highlight the substantial gap between the theoretical capacity of input embeddings and their practical utilization, suggesting significant room for optimization in model design.

**摘要(中文)**:
> 最近的一系列工作解决了将令牌序列压缩为较短的实值向量序列以用作输入而不是令牌嵌入或键值缓存的问题。这些方法的重点是减少现有语言模型中的计算量，而不是最小化存储文本所需的位数。尽管依赖强大的模型作为编码器，但可达到的最大无损压缩比通常不高于 x10。这一事实非常有趣，因为从理论上讲，即使对于 16 位精度和适度的向量大小，大型实值向量的最大信息容量也远远超出了所呈现的速率。在这项工作中，我们通过用每样本优化过程替换编码器来探索压缩的极限。我们证明存在压缩比高达 x1500 的向量，这凸显了现有解决方案和实际可实现的解决方案之间存在两个数量级的差距。此外，我们凭经验表明，压缩限制不是由输入的长度决定，而是由要减少的不确定性量决定，即在没有任何条件的情况下该序列的交叉熵损失。所获得的限制凸显了输入嵌入的理论容量与其实际利用率之间的巨大差距，表明模型设计有很大的优化空间。

---

## 77. Steering off Course: Reliability Challenges in Steering Language Models

**类别**: `主会-长文`

**作者**: Patrick Queiroz Da Silva, Hari Sethuraman, Dheeraj Rajagopal, Hannaneh Hajishirzi, Sachin Kumar

**ID**: 2025.acl-long.974

**摘要(英文)**:
> Steering methods for language models (LMs) have gained traction as lightweight alternatives to fine-tuning, enabling targeted modifications to model activations. However, prior studies primarily report results on a few models, leaving critical gaps in understanding the robustness of these methods. In this work, we systematically examine three prominent steering methods—DoLa, function vectors, and task vectors. In contrast to the original studies, which evaluated a handful of models, we test up to 36 models belonging to 14 families with sizes ranging from 1.5B to 70B parameters. Our experiments reveal substantial variability in the effectiveness of the steering approaches, with a large number of models showing no improvement and at times degradation in steering performance. Our analysis reveals fundamental flaws in the assumptions underlying these methods, challenging their reliability as scalable steering solutions.

**摘要(中文)**:
> 语言模型 (LM) 的引导方法作为微调的轻量级替代方案而受到关注，从而能够对模型激活进行有针对性的修改。然而，先前的研究主要报告了一些模型的结果，在理解这些方法的稳健性方面留下了重大差距。在这项工作中，我们系统地研究了三种著名的引导方法——DoLa、函数向量和任务向量。与评估少数模型的原始研究相反，我们测试了属于 14 个系列的多达 36 个模型，参数大小范围从 1.5B 到 70B。我们的实验揭示了转向方法有效性的显着差异，大量模型显示转向性能没有改善，有时甚至下降。我们的分析揭示了这些方法背后的假设存在根本缺陷，挑战了它们作为可扩展转向解决方案的可靠性。

---

## 78. AutoMixer: Checkpoint Artifacts as Automatic Data Mixers

**类别**: `主会-长文`

**作者**: Ernie Chang, Yang Li, Patrick Huber, Vish Vogeti, David Kant, Yangyang Shi, Vikas Chandra

**ID**: 2025.acl-long.979

**摘要(英文)**:
> In language model training, it is desirable to equip models with capabilities from various tasks. However, it is not clear how to directly obtain the right data mixtures for these capabilities as the relationship between data and tasks is difficult to be modeled. In this work, we observe that checkpoint models exhibit emerging capabilities at different points in the training trajectory. Often, the training process saves checkpoints as artifacts that are under-utilized as a source of in-training data signals. We identify these artifact models based on their respective capabilities on the benchmarks and leverage them as data mixers by using their aggregated first-order influence approximation over source data. We demonstrated on eight reasoning benchmarks that the proposed framework shows significant improvements in the pretraining setting, with accuracy increases of up to 1.93%. Overall, this demonstrates the potential of checkpoint models to enhance data quality and optimize data mixtures.

**摘要(中文)**:
> 在语言模型训练中，需要为模型配备各种任务的能力。然而，由于数据和任务之间的关系很难建模，目前尚不清楚如何直接获得这些功能的正确数据混合。在这项工作中，我们观察到检查点模型在训练轨迹的不同点表现出新兴的功能。通常，训练过程将检查点保存为工件，而这些工件未充分利用作为训练中数据信号的来源。我们根据这些工件模型在基准测试中各自的功能来识别它们，并通过使用它们对源数据的聚合一阶影响近似来将它们用作数据混合器。我们在八个推理基准上证明，所提出的框架在预训练设置方面显示出显着改进，准确率提高了高达 1.93%。总的来说，这证明了检查点模型在提高数据质量和优化数据混合方面的潜力。

---

## 79. On the Acquisition of Shared Grammatical Representations in Bilingual Language Models

**类别**: `主会-长文`

**作者**: Catherine Arnett, Tyler A. Chang, James A. Michaelov, Ben Bergen

**ID**: 2025.acl-long.1010

**摘要(英文)**:
> Crosslingual transfer is crucial to contemporary language models’ multilingual capabilities, but how it occurs is not well understood. Weask what happens to a monolingual language model when it begins to be trained on a second language. Specifically, we train small bilingual models for which we control the amount of data for each language and the order of language exposure. To find evidence of shared multilingual representations, we turn to structural priming, a method used to study grammatical representations in humans. We first replicate previous crosslingual structural priming results and find that after controlling for training data quantity and language exposure, there are asymmetrical effects across language pairs and directions. We argue that this asymmetry may shape hypotheses about human structural priming effects. We also find that structural priming effects are less robust for less similar language pairs, highlighting potential limitations of crosslingual transfer learning and shared representations for typologically diverse languages.

**摘要(中文)**:
> 跨语言迁移对于当代语言模型的多语言能力至关重要，但它是如何发生的尚不清楚。弱化单语语言模型在开始接受第二语言训练时会发生什么。具体来说，我们训练小型双语模型，控制每种语言的数据量和语言暴露的顺序。为了寻找共享多语言表征的证据，我们求助于结构启动，这是一种用于研究人类语法表征的方法。我们首先复制了之前的跨语言结构启动结果，发现在控制训练数据量和语言暴露后，跨语言对和方向存在不对称效应。我们认为，这种不对称性可能会形成有关人类结构启动效应的假设。我们还发现，对于不太相似的语言对，结构启动效应不太稳健，这凸显了跨语言迁移学习和类型不同语言的共享表示的潜在局限性。

---

## 80. Using Shapley interactions to understand how models use structure

**类别**: `主会-长文`

**作者**: Divyansh Singhvi, Diganta Misra, Andrej Erkelens, Raghav Jain, Isabel Papadimitriou, Naomi Saphra

**ID**: 2025.acl-long.1011

**摘要(英文)**:
> Language is an intricately structured system, and a key goal of NLP interpretability is to provide methodological insights for understanding how language models internally represent this structure. In this paper, we use Shapley Taylor interaction indices (STII) in order to examine how language and speech models internally relate and structure their inputs. Pairwise Shapley interactions give us an attribution measure of how much two inputs work together to influence model outputs beyond if we linearly added their independent influences, providing a view into how models encode structural interactions between inputs. We relate the interaction patterns in models to three underlying linguistic structures: syntactic structure, non-compositional semantics, and phonetic interaction. We find that autoregressive text models encode interactions that correlate with the syntactic proximity of inputs, and that both autoregressive and masked models encode nonlinear interactions in idiomatic phrases with non-compositional semantics. Our speech results show that inputs are more entangled for pairs where a neighboring consonant is likely to influence a vowel or approximant, showing that models encode the phonetic interaction needed for extracting discrete phonemic representations.

**摘要(中文)**:
> 语言是一个复杂的结构系统，NLP 可解释性的一个关键目标是提供方法论见解，以理解语言模型如何在内部表示这种结构。在本文中，我们使用沙普利泰勒交互指数（STII）来检查语言和语音模型如何内部关联和构建其输入。成对 Shapley 相互作用为我们提供了一种归因度量，衡量两个输入共同作用对模型输出的影响程度，超出了我们线性添加它们的独立影响的程度，从而提供了模型如何编码输入之间的结构相互作用的视图。我们将模型中的交互模式与三种潜在的语言结构联系起来：句法结构、非组合语义和语音交互。我们发现自回归文本模型编码与输入的句法接近度相关的交互，并且自回归和掩码模型都编码具有非组合语义的惯用短语中的非线性交互。我们的语音结果表明，对于相邻辅音可能影响元音或近似音的配对，输入更加纠缠，这表明模型对提取离散音素表示所需的语音交互进行了编码。

---

## 81. Substance over Style: Evaluating Proactive Conversational Coaching Agents

**类别**: `主会-长文`

**作者**: Vidya Srinivas, Xuhai Xu, Xin Liu, Kumar Ayush, Isaac Galatzer-Levy, Shwetak Patel, Daniel McDuff, Tim Althoff

**ID**: 2025.acl-long.1017

**摘要(英文)**:
> While NLP research has made strides in conversational tasks, many approaches focus on single-turn responses with well-defined objectives or evaluation criteria. In contrast, coaching presents unique challenges with initially undefined goals that evolve through multi-turn interactions, subjective evaluation criteria, mixed-initiative dialogue. In this work, we describe and implement five multi-turn coaching agents that exhibit distinct conversational styles, and evaluate them through a user study, collecting first-person feedback on 155 conversations. We find that users highly value core functionality, and that stylistic components in absence of core components are viewed negatively. By comparing user feedback with third-person evaluations from health experts and an LM, we reveal significant misalignment across evaluation approaches. Our findings provide insights into design and evaluation of conversational coaching agents and contribute toward improving human-centered NLP applications.

**摘要(中文)**:
> 虽然 NLP 研究在对话任务方面取得了长足的进步，但许多方法侧重于具有明确目标或评估标准的单轮响应。相比之下，辅导提出了独特的挑战，最初没有明确的目标，但通过多轮互动、主观评估标准、混合主动对话而演变。在这项工作中，我们描述并实现了五种表现出不同对话风格的多回合辅导代理，并通过用户研究对其进行评估，收集 155 次对话的第一人称反馈。我们发现用户高度重视核心功能，并且缺乏核心组件的风格组件会被负面看待。通过将用户反馈与健康专家和 LM 的第三人称评估进行比较，我们发现评估方法之间存在重大偏差。我们的研究结果为对话辅导代理的设计和评估提供了见解，并有助于改进以人为本的 NLP 应用程序。

---

## 82. ProMALex: Progressive Modular Adapters for Multi-Jurisdictional Legal Language Modeling

**类别**: `主会-长文`

**作者**: Santosh T.y.s.s, Mohamed Hesham Elganayni

**ID**: 2025.acl-long.1080

**摘要(英文)**:
> This paper addresses the challenge of adapting language models to the jurisdiction-specific nature of legal corpora. Existing approaches—training separate models for each jurisdiction or using a single shared model—either fail to leverage common legal principles beneficial for low-resource settings or risk negative interference from conflicting jurisdictional interpretations. To overcome these limitations, we propose a parameter-efficient framework ProMALex, that first derives hierarchical relationships across jurisdictions and progressively inserts adapter modules across model layers based on jurisdictional similarity. This design allows modules in lower layers to be shared across jurisdictions, capturing common legal principles, while higher layers specialize through jurisdiction-specific adapters. Experimental results on two legal language modeling benchmarks demonstrate that ProMALex outperforms both fully shared and jurisdiction-specific models.

**摘要(中文)**:
> 本文解决了使语言模型适应法律语料库的司法管辖区特定性质的挑战。现有的方法——为每个司法管辖区训练单独的模型或使用单一的共享模型——要么无法利用有利于资源匮乏环境的共同法律原则，要么面临相互冲突的司法解释带来负面干扰的风险。为了克服这些限制，我们提出了一个参数高效的框架 ProMALex，该框架首先派生跨辖区的层次关系，并根据辖区相似性逐步跨模型层插入适配器模块。这种设计允许较低层的模块可以跨司法管辖区共享，捕获共同的法律原则，而较高层则通过特定于司法管辖区的适配器进行专门化。两个法律语言建模基准的实验结果表明，ProMALex 的性能优于完全共享模型和特定管辖区模型。

---

## 83. WhiSPA: Semantically and Psychologically Aligned Whisper with Self-Supervised Contrastive and Student-Teacher Learning

**类别**: `主会-长文`

**作者**: Rajath Rao, Adithya V Ganesan, Oscar Kjell, Jonah Luby, Akshay Raghavan, Scott Feltman, Whitney Ringwald, Ryan L. Boyd, Benjamin Luft, Camilo Ruggero, Neville Ryant, Roman Kotov, H. Andrew Schwartz

**ID**: 2025.acl-long.1098

**摘要(英文)**:
> Current speech encoding pipelines often rely on an additional text-based LM to get robust representations of human communication, even though SotA speech-to-text models often have a LM within. This work proposes an approach to improve the LM within an audio model such that the subsequent text-LM is unnecessary. We introduce **WhiSPA** (**Whi**sper with **S**emantic and **P**sychological **A**lignment), which leverages a novel audio training objective: contrastive loss with a language model embedding as a teacher. Using over 500k speech segments from mental health audio interviews, we evaluate the utility of aligning Whisper’s latent space with semantic representations from a text autoencoder (SBERT) and lexically derived embeddings of basic psychological dimensions: emotion and personality. Over self-supervised affective tasks and downstream psychological tasks, WhiSPA surpasses current speech encoders, achieving an average error reduction of 73.4% and 83.8%, respectively. WhiSPA demonstrates that it is not always necessary to run a subsequent text LM on speech-to-text output in order to get a rich psychological representation of human communication.

**摘要(中文)**:
> 当前的语音编码管道通常依赖于额外的基于文本的 LM 来获得人类通信的鲁棒表示，尽管 SotA 语音到文本模型通常内部有 LM。这项工作提出了一种改进音频模型内的 LM 的方法，从而不需要后续的文本 LM。我们介绍**WhiSPA**（**Whi**sper 具有**S**语义和**P**心理**A**调整），它利用了一种新颖的音频训练目标：作为教师嵌入语言模型的对比损失。使用来自心理健康音频访谈的超过 50 万个语音片段，我们评估了将 Whisper 的潜在空间与文本自动编码器 (SBERT) 的语义表示以及基本心理维度（情感和个性）的词汇衍生嵌入对齐的效用。在自我监督的情感任务和下游心理任务中，WhiSPA 超越了当前的语音编码器，平均错误率分别降低了 73.4% 和 83.8%。 WhiSPA 证明，为了获得人类交流的丰富心理表征，并不总是需要在语音到文本输出上运行后续文本 LM。

---

## 84. EdiText: Controllable Coarse-to-Fine Text Editing with Diffusion Language Models

**类别**: `主会-长文`

**作者**: Che Hyun Lee, Heeseung Kim, Jiheum Yeom, Sungroh Yoon

**ID**: 2025.acl-long.1111

**摘要(英文)**:
> We propose EdiText, a controllable text editing method that modifies the reference text to desired attributes at various scales. We integrate an SDEdit-based editing technique that allows for broad adjustments in the degree of text editing. Additionally, we introduce a novel fine-level editing method based on self-conditioning, which allows subtle control of reference text. While being capable of editing on its own, this fine-grained method, integrated with the SDEdit approach, enables EdiText to make precise adjustments within the desired range. EdiText demonstrates its controllability to robustly adjust reference text at a broad range of levels across various tasks, including toxicity control and sentiment control.

**摘要(中文)**:
> 我们提出了 EdiText，一种可控的文本编辑方法，可以将参考文本修改为不同比例的所需属性。我们集成了基于 SDEdit 的编辑技术，可以对文本编辑的程度进行广泛的调整。此外，我们引入了一种基于自我调节的新颖的精细编辑方法，可以对参考文本进行微妙的控制。虽然能够自行编辑，但这种细粒度方法与 SDEdit 方法集成，使 EdiText 能够在所需范围内进行精确调整。 EdiText 展示了其在各种任务（包括毒性控制和情绪控制）中在广泛级别上稳健调整参考文本的可控性。

---

## 85. On the Relation Between Fine-Tuning, Topological Properties, and Task Performance in Sense-Enhanced Embeddings

**类别**: `主会-长文`

**作者**: Deniz Ekin Yavas, Timothée Bernard, Benoit Crabbé, Laura Kallmeyer

**ID**: 2025.acl-long.1151

**摘要(英文)**:
> Topological properties of embeddings, such as isotropy and uniformity, are closely linked to their expressiveness, and improving these properties enhances the embeddings’ ability to capture nuanced semantic distinctions. However, fine-tuning can reduce the expressiveness of the embeddings of language models. This study investigates the relation between fine-tuning, topology of the embedding space, and task performance in the context of sense knowledge enhancement, focusing on identifying the topological properties that contribute to the success of sense-enhanced embeddings. We experiment with two fine-tuning methods: *Supervised Contrastive Learning (SCL)* and *Supervised Predictive Learning (SPL)*. Our results show that SPL, the most standard approach, exhibits varying effectiveness depending on the language model and is inconsistent in producing successful sense-enhanced embeddings. In contrast, SCL achieves this consistently. Furthermore, while the embeddings with only increased *sense-alignment* show reduced task performance, those that also exhibit high *isotropy* and balance *uniformity* with *sense-alignment* achieve the best results. Additionally, our findings indicate that supervised and unsupervised tasks benefit from these topological properties to varying degrees.

**摘要(中文)**:
> 嵌入的拓扑属性（例如各向同性和均匀性）与其表达能力密切相关，改进这些属性可以增强嵌入捕捉细微语义区别的能力。然而，微调会降低语言模型嵌入的表达能力。本研究研究了感知知识增强背景下的微调、嵌入空间拓扑和任务表现之间的关系，重点是识别有助于感知增强嵌入成功的拓扑特性。我们尝试了两种微调方法：*监督对比学习（SCL）*和*监督预测学习（SPL）*。我们的结果表明，SPL（最标准的方法）根据语言模型的不同而表现出不同的有效性，并且在产生成功的意义增强嵌入方面不一致。相比之下，SCL 始终如一地实现了这一目标。此外，虽然仅增加“感知对齐”的嵌入显示出任务性能下降，但那些同时表现出高“各向同性”和平衡“均匀性”和“感知对齐”的嵌入实现了最佳结果。此外，我们的研究结果表明，监督和非监督任务在不同程度上受益于这些拓扑特性。

---

## 86. Improving Low-Resource Morphological Inflection via Self-Supervised Objectives

**类别**: `主会-长文`

**作者**: Adam Wiemerslage, Katharina Von Der Wense

**ID**: 2025.acl-long.1195

**摘要(英文)**:
> Self-supervised objectives have driven major advances in NLP by leveraging large-scale unlabeled data, but such resources are scarce for many of the world’s languages. Surprisingly, they have not been explored much for character-level tasks, where smaller amounts of data have the potential to be beneficial. We investigate the effectiveness of self-supervised auxiliary tasks for morphological inflection – a character-level task highly relevant for language documentation – in extremely low-resource settings, training encoder-decoder transformers for 19 languages and 13 auxiliary objectives. Autoencoding yields the best performance when unlabeled data is very limited, while character masked language modeling (CMLM) becomes more effective as data availability increases. Though objectives with stronger inductive biases influence model predictions intuitively, they rarely outperform standard CMLM. However, sampling masks based on known morpheme boundaries consistently improves performance, highlighting a promising direction for low-resource morphological modeling.

**摘要(中文)**:
> 自我监督目标通过利用大规模未标记数据推动了 NLP 的重大进步，但此类资源对于世界上许多语言来说都是稀缺的。令人惊讶的是，它们还没有针对角色级任务进行太多探索，在角色级任务中，少量数据就有可能带来好处。我们研究了在资源极少的环境下，形态变化（一种与语言文档高度相关的字符级任务）的自我监督辅助任务的有效性，为 19 种语言和 13 个辅助目标训练编码器-解码器转换器。当未标记数据非常有限时，自动编码会产生最佳性能，而随着数据可用性的增加，字符掩码语言建模 (CMLM) 会变得更加有效。尽管具有较强归纳偏差的目标直观地影响模型预测，但它们很少优于标准 CMLM。然而，基于已知语素边界的采样掩模不断提高性能，突出了低资源形态建模的一个有前途的方向。

---

## 87. Language Models Grow Less Humanlike beyond Phase Transition

**类别**: `主会-长文`

**作者**: Tatsuya Aoyama, Ethan Wilcox

**ID**: 2025.acl-long.1214

**摘要(英文)**:
> LMs’ alignment with human reading behavior (i.e. psychometric predictive power; PPP) is known to improve during pretraining up to a tipping point, beyond which it either plateaus or degrades. Various factors, such as word frequency, recency bias in attention, and context size, have been theorized to affect PPP, yet there is no current account that explains why such a tipping point exists, and how it interacts with LMs’ pretraining dynamics more generally. We hypothesize that the underlying factor is a pretraining phase transition, characterized by the rapid emergence of specialized attention heads. We conduct a series of correlational and causal experiments to show that such a phase transition is responsible for the tipping point in PPP. We then show that, rather than producing attention patterns that contribute to the degradation in PPP, phase transitions alter the subsequent learning dynamics of the model, such that further training keeps damaging PPP.

**摘要(中文)**:
> 已知 LM 与人类阅读行为的一致性（即心理测量预测能力；PPP）在预训练期间会提高到一个临界点，超过这个临界点就会趋于稳定或下降。理论上，各种因素（例如词频、注意力的新近偏差和上下文大小）都会影响 PPP，但目前还没有任何解释可以解释为什么存在这样的临界点，以及它如何与 LM 的预训练动态相互作用。我们假设潜在因素是训练前阶段的转变，其特征是专门注意力头的快速出现。我们进行了一系列相关和因果实验，以表明这种相变是造成 PPP 临界点的原因。然后我们表明，相变不会产生导致 PPP 退化的注意力模式，而是改变模型的后续学习动态，从而使进一步的训练不断损害 PPP。

---

## 88. The Nature ofNLP: Analyzing Contributions inNLPPapers

**类别**: `主会-长文`

**作者**: Aniket Pramanick, Yufang Hou, Saif M. Mohammad, Iryna Gurevych

**ID**: 2025.acl-long.1224

**摘要(英文)**:
> Natural Language Processing (NLP) is an established and dynamic field. Despite this, what constitutes NLP research remains debated. In this work, we address the question by quantitatively examining NLP research papers. We propose a taxonomy of research contributions and introduce _NLPContributions_, a dataset of nearly2kNLP research paper abstracts, carefully annotated to identify scientific contributions and classify their types according to this taxonomy. We also introduce a novel task of automatically identifying contribution statements and classifying their types from research papers. We present experimental results for this task and apply our model to ~29kNLP research papers to analyze their contributions, aiding in the understanding of the nature of NLP research. We show that NLP research has taken a winding path — with the focus on language and human-centric studies being prominent in the 1970s and 80s, tapering off in the 1990s and 2000s, and starting to rise again since the late 2010s. Alongside this revival, we observe a steady rise in dataset and methodological contributions since the 1990s, such that today, on average, individual NLP papers contribute in more ways than ever before. Our dataset and analyses offer a powerful lens for tracing research trends and offer potential for generating informed, data-driven literature surveys.

**摘要(中文)**:
> 自然语言处理（NLP）是一个成熟且充满活力的领域。尽管如此，NLP 研究的构成仍然存在争议。在这项工作中，我们通过定量研究 NLP 研究论文来解决这个问题。我们提出了研究贡献的分类法，并引入了 _NLPContributions_，这是一个近 2kNLP 研究论文摘要的数据集，经过仔细注释以识别科学贡献并根据该分类法对其类型进行分类。我们还引入了一项新任务，即自动识别贡献陈述并从研究论文中对其类型进行分类。我们展示了该任务的实验结果，并将我们的模型应用于约 29kNLP 研究论文来分析他们的贡献，帮助理解 NLP 研究的本质。我们表明，NLP 研究走过了一条曲折的道路——对语言和以人为中心的研究的关注在 20 世纪 70 年代和 80 年代最为突出，在 1990 年代和 2000 年代逐渐减弱，并自 2010 年代末开始再次兴起。除了这种复兴之外，我们还观察到自 20 世纪 90 年代以来数据集和方法论贡献的稳步增长，因此今天平均而言，每篇 NLP 论文的贡献比以往任何时候都多。我们的数据集和分析为追踪研究趋势提供了强大的视角，并为生成知情的、数据驱动的文献调查提供了潜力。

---

## 89. Information Locality as an Inductive Bias for Neural Language Models

**类别**: `主会-长文`

**作者**: Taiga Someya, Anej Svete, Brian DuSell, Timothy J. O’Donnell, Mario Giulianelli, Ryan Cotterell

**ID**: 2025.acl-long.1357

**摘要(英文)**:
> Inductive biases are inherent in every machine learning system, shaping how models generalize from finite data. In the case of neural language models (LMs), debates persist as to whether these biases align with or diverge from human processing constraints. To address this issue, we propose a quantitative framework that allows for controlled investigations into the nature of these biases. Within our framework, we introducem-local entropy—an information-theoretic measure derived from average lossy-context surprisal—that captures the local uncertainty of a language by quantifying how effectively the preceding symbols disambiguate the next symbol. In experiments on both perturbed natural language corpora and languages defined by probabilistic finite-state automata (PFSA), we show that languages with higherm-local entropy are more difficult for Transformer and LSTM LMs to learn. These results suggest that neural LMs, much like humans, are highly sensitive to the local statistical structure of a language.

**摘要(中文)**:
> 归纳偏差是每个机器学习系统所固有的，影响着模型如何从有限数据中进行概括。就神经语言模型 (LM) 而言，关于这些偏差是否符合或偏离人类处理限制的争论一直存在。为了解决这个问题，我们提出了一个定量框架，允许对这些偏见的性质进行受控调查。在我们的框架内，我们引入了局部熵（一种从平均有损上下文意外中得出的信息论度量），它通过量化前面的符号消除下一个符号的歧义的效率来捕获语言的局部不确定性。在对受扰动的自然语言语料库和概率有限状态自动机 (PFSA) 定义的语言进行的实验中，我们表明具有较高局部熵的语言对于 Transformer 和 LSTM LM 来说更难学习。这些结果表明，神经语言模型与人类非常相似，对语言的局部统计结构高度敏感。

---

## 90. Persistent Homology of Topic Networks for the Prediction of Reader Curiosity

**类别**: `主会-长文`

**作者**: Manuel D. S. Hopp, Vincent Labatut, Arthur Amalvy, Richard Dufour, Hannah Stone, Hayley Jach, Kou Murayama

**ID**: 2025.acl-long.1364

**摘要(英文)**:
> Reader curiosity, the drive to seek information, is crucial for textual engagement, yet remains relatively underexplored in NLP. Building on Loewenstein’s Information Gap Theory, we introduce a framework that models reader curiosity by quantifying semantic information gaps within a text’s semantic structure. Our approach leverages BERTopic-inspired topic modeling and persistent homology to analyze the evolving topology (connected components, cycles, voids) of a dynamic semantic network derived from text segments, treating these features as proxies for information gaps. To empirically evaluate this pipeline, we collect reader curiosity ratings from participants (n = 49) as they read S. Collins’s “The Hunger Games” novel. We then use the topological features from our pipeline as independent variables to predict these ratings, and experimentally show that they significantly improve curiosity prediction compared to a baseline model (73% vs. 30% explained deviance), validating our approach. This pipeline offers a new computational method for analyzing text structure and its relation to reader engagement.

**摘要(中文)**:
> 读者的好奇心，即寻求信息的动力，对于文本参与至关重要，但在 NLP 中仍然相对未得到充分探索。基于洛文斯坦的信息差距理论，我们引入了一个框架，通过量化文本语义结构中的语义信息差距来模拟读者的好奇心。我们的方法利用 BERTopic 启发的主题建模和持久同源性来分析从文本片段派生的动态语义网络的不断演变的拓扑（连接的组件、循环、空隙），将这些特征视为信息差距的代理。为了根据经验评估这条管道，我们收集了参与者（n = 49）在阅读 S. Collins 的《饥饿游戏》小说时的好奇心评级。然后，我们使用管道中的拓扑特征作为自变量来预测这些评级，并通过实验表明，与基线模型相比，它们显着改善了好奇心预测（解释偏差为 73% 与 30%），从而验证了我们的方法。该管道提供了一种新的计算方法来分析文本结构及其与读者参与度的关系。

---

## 91. Training Dynamics Underlying Language Model Scaling Laws: Loss Deceleration and Zero-Sum Learning

**类别**: `主会-长文`

**作者**: Andrei Mircea, Supriyo Chakraborty, Nima Chitsazan, Irina Rish, Ekaterina Lobacheva

**ID**: 2025.acl-long.1366

**摘要(英文)**:
> This work aims to understand how scaling improves language models, specifically in terms of training dynamics. We find that language models undergo loss deceleration early in training—an abrupt slowdown in the rate of loss improvement, resulting in piecewise linear behaviour of the loss curve in log-log space. Scaling up the model mitigates this transition by (1) decreasing the loss at which deceleration occurs, and (2) improving the log-log rate of loss improvement after deceleration. We attribute loss deceleration to a type of degenerate training dynamics we term zero-sum learning (ZSL). In ZSL, per-example gradients become systematically opposed, leading to destructive interference in per-example changes in loss. As a result, improving loss on one subset of examples degrades it on another, bottlenecking overall progress. Loss deceleration and ZSL provide new insights into the training dynamics underlying language model scaling laws, and could potentially be targeted directly to improve language models independent of scale. We make our code and artefacts available at: https://github.com/mirandrom/zsl

**摘要(中文)**:
> 这项工作旨在了解缩放如何改进语言模型，特别是在训练动态方面。我们发现语言模型在训练早期会经历损失减速——损失改善率突然减慢，导致对数空间中损失曲线的分段线性行为。扩大模型的规模可以通过以下方式缓解这种转变：(1) 减少发生减速时的损失，以及 (2) 提高减速后损失改善的双对数比率。我们将损失减速归因于一种退化的训练动态，我们称之为零和学习（ZSL）。在 ZSL 中，每个示例的梯度变得系统地相反，导致每个示例的损失变化产生破坏性干扰。因此，改善一个示例子集的损失会降低另一个示例子集的损失，从而成为整体进度的瓶颈。损失减速和 ZSL 为语言模型缩放法则背后的训练动态提供了新的见解，并且有可能直接用于改进与缩放无关的语言模型。我们在以下位置提供代码和制品：https://github.com/mirandrom/zsl

---

## 92. Causal Estimation of Tokenisation Bias

**类别**: `主会-长文`

**作者**: Pietro Lesci, Clara Meister, Thomas Hofmann, Andreas Vlachos, Tiago Pimentel

**ID**: 2025.acl-long.1374

**摘要(英文)**:
> Modern language models are typically trained over subword sequences, but ultimately define probabilities over character-strings. Ideally, the choice of the tokeniser—which maps character-strings to subwords—should not affect the probability assigned to the underlying character-string; in practice, it does. We define this mismatch as **tokenisation bias**. In this work, we quantify one particular type of tokenisation bias: the effect of including or not a subword (e.g.,⟨hello⟩) in a tokeniser’s vocabulary on the probability a trained model assigns to the corresponding characters (i.e., “hello”). Estimating this effect is challenging because each model is trained with only one tokeniser. We address this by framing tokenisation bias as a causal effect and estimating it using the regression discontinuity design. Specifically, we exploit the fact that tokenisation algorithms rank subwords and add the firstKto a tokeniser’s vocabulary, whereKis an arbitrary cutoff point. As such, we can estimate a causal effect by comparing similar subwords around this cutoff. Experimentally, we find that tokenisation consistently affects models’ outputs across scales, vocabularies, and tokenisers. Notably, a subword’s presence in a small model’s vocabulary may increase its characters’ probability by up to 17 times, highlighting tokenisation as a key design choice in language modelling.

**摘要(中文)**:
> 现代语言模型通常通过子字序列进行训练，但最终定义字符串的概率。理想情况下，标记器（将字符串映射到子词）的选择不应影响分配给基础字符串的概率；实际上，确实如此。我们将这种不匹配定义为**标记化偏差**。在这项工作中，我们量化了一种特定类型的标记化偏差：标记器词汇中包含或不包含子词（例如，⟨hello⟩）对经过训练的模型分配给相应字符（即“hello”）的概率的影响。估计这种效果具有挑战性，因为每个模型仅使用一个标记器进行训练。我们通过将标记化偏差视为因果效应并使用回归不连续性设计来估计它来解决这个问题。具体来说，我们利用分词算法对子词进行排名的事实，并将第一个 K 添加到分词器的词汇表中，其中 K 是任意截止点。因此，我们可以通过比较此截止点周围的相似子词来估计因果效应。通过实验，我们发现标记化持续影响模型在尺度、词汇和标记化器上的输出。值得注意的是，子词出现在小模型的词汇表中可能会将其字符的概率增加多达 17 倍，这凸显了标记化作为语言建模中的关键设计选择。

---

## 93. Learn to Memorize: Scalable Continual Learning in Semiparametric Models with Mixture-of-Neighbors Induction Memory

**类别**: `主会-长文`

**作者**: Guangyue Peng, Tao Ge, Wen Luo, Wei Li, Houfeng Wang

**ID**: 2025.acl-long.1385

**摘要(英文)**:
> Semiparametric language models (LMs) have shown promise in various Natural Language Processing (NLP) tasks. However, they utilize non-parametric memory as static storage, which lacks learning capability and remains disconnected from the internal information flow of the parametric models, limiting scalability and efficiency. Based on recent interpretability theories of LMs, we reconceptualize the non-parametric memory represented bykNN-LM as a learnable Mixture-of-Neighbors Induction Memory (MoNIM), which synergizes the induction capabilities of attention heads with the memorization strength of feed-forward networks (FFN). By integrating into the model’s information flow, MoNIM functions as an FFN-like bypass layer within the Transformer architecture, enabling effective learning of new knowledge. Extensive experiments demonstrate that MoNIM is a retentive and scalable continual learner in both data- and model-wise, enhancing the scalability and continual learning performance of semiparametric LMs.

**摘要(中文)**:
> 半参数语言模型 (LM) 在各种自然语言处理 (NLP) 任务中表现出了良好的前景。然而，它们利用非参数内存作为静态存储，缺乏学习能力，并且与参数模型的内部信息流保持脱节，限制了可扩展性和效率。基于最近的语言模型可解释性理论，我们将 kNN-LM 所代表的非参数记忆重新概念化为可学习的邻居混合归纳记忆（MoNIM），它将注意力头的归纳能力与前馈网络（FFN）的记忆强度相结合。通过集成到模型的信息流中，MoNIM 在 Transformer 架构中充当类似 FFN 的旁路层，从而能够有效学习新知识。大量实验表明，MoNIM 在数据和模型方面都是一种具有记忆性和可扩展性的持续学习器，增强了半参数 LM 的可扩展性和持续学习性能。

---

## 94. Sticking to the Mean: Detecting Sticky Tokens in Text Embedding Models

**类别**: `主会-长文`

**作者**: Kexin Chen, Dongxia Wang, Yi Liu, Haonan Zhang, Wenhai Wang

**ID**: 2025.acl-long.1391

**摘要(英文)**:
> Despite the widespread use of Transformer-based text embedding models in NLP tasks, surprising “sticky tokens” can undermine the reliability of embeddings. These tokens, when repeatedly inserted into sentences, pull sentence similarity toward a certain value, disrupting the normal distribution of embedding distances and degrading downstream performance. In this paper, we systematically investigate such anomalous tokens, formally defining them and introducing an efficient detection method, Sticky Token Detector (STD), based on sentence and token filtering. Applying STD to 40 checkpoints across 14 model families, we discover a total of 868 sticky tokens. Our analysis reveals that these tokens often originate from special or unused entries in the vocabulary, as well as fragmented subwords from multilingual corpora. Notably, their presence does not strictly correlate with model size or vocabulary size. We further evaluate how sticky tokens affect downstream tasks like clustering and retrieval, observing significant performance drops of up to 50%. Through attention-layer analysis, we show that sticky tokens disproportionately dominate the model’s internal representations, raising concerns about tokenization robustness. Our findings show the need for better tokenization strategies and model design to mitigate the impact of sticky tokens in future text embedding applications.

**摘要(中文)**:
> 尽管基于 Transformer 的文本嵌入模型在 NLP 任务中得到广泛使用，但令人惊讶的“粘性标记”可能会破坏嵌入的可靠性。当这些标记重复插入句子中时，会将句子相似度拉向某个值，破坏嵌入距离的正态分布并降低下游性能。在本文中，我们系统地研究了此类异常标记，正式定义了它们，并引入了一种基于句子和标记过滤的有效检测方法，粘性标记检测器（STD）。将 STD 应用到 14 个模型系列的 40 个检查点，我们总共发现了 868 个粘性令牌。我们的分析表明，这些标记通常源自词汇表中的特殊或未使用的条目，以及多语言语料库中的碎片子词。值得注意的是，它们的存在与模型大小或词汇量大小并不严格相关。我们进一步评估粘性令牌如何影响聚类和检索等下游任务，观察到性能显着下降高达 50%。通过注意力层分析，我们发现粘性标记不成比例地主导了模型的内部表示，引发了人们对标记化鲁棒性的担忧。我们的研究结果表明，需要更好的标记化策略和模型设计，以减轻粘性标记在未来文本嵌入应用程序中的影响。

---

## 95. Language Models, Graph Searching, and Supervision Adulteration: When More Supervision is Less and How to Make More More

**类别**: `主会-长文`

**作者**: Arvid Frydenlund

**ID**: 2025.acl-long.1409

**摘要(英文)**:
> This work concerns the path-star task, a minimal example of searching over a graph. The graph,G, is star-shaped withDarms radiating from a start node,s. A language model (LM) is givenG,s, and a target node,t, which ends one of the arms and is tasked with generating the arm containingt. The minimal nature of this task means only a single choice needs to be made: which of the arms contains?Decoder-only LMs fail to solve this elementary task above1/Dchance due to a learned shortcut that absorbs training supervision. We show how this pathology is caused by excess supervision and present a series of solutions demonstrating that the task is solvable via decoder-only LMs. We find that the task’s minimal nature causes its difficulty, as it prevents task decomposition. Our solutions provide insight into the pathology and its implications for LMs trained via next-token prediction.

**摘要(中文)**:
> 这项工作涉及路径星任务，这是在图上搜索的最小示例。该图 G 是星形的，Darms 从起始节点 s 辐射。给定语言模型 (LM)G,s 和目标节点 t，目标节点 t 结束其中一个臂，并负责生成包含 t 的臂。这项任务的最小性质意味着只需要做出一个选择：哪个臂包含？仅解码器的 LM 无法解决上述基本任务，因为吸收了训练监督的学习捷径。我们展示了这种病理现象是如何由过度监督引起的，并提出了一系列解决方案，证明该任务可以通过仅解码器的 LM 来解决。我们发现任务的最小性质导致了它的困难，因为它阻止了任务分解。我们的解决方案提供了对病理学及其对通过下一个令牌预测训练的 LM 的影响的深入了解。

---

## 96. Beyond Text Compression: Evaluating Tokenizers Across Scales

**类别**: `主会-长文`

**作者**: Jonas F. Lotz, António V. Lopes, Stephan Peitz, Hendra Setiawan, Leonardo Emili

**ID**: 2025.acl-long.1546

**摘要(英文)**:
> The choice of tokenizer can profoundly impact language model performance, yet accessible and reliable evaluations of tokenizer quality remain an open challenge. Inspired by scaling consistency, we show that smaller models can accurately predict significant differences in tokenizer impact on larger models at a fraction of the compute cost. By systematically evaluating both English-centric and multilingual tokenizers, we find that tokenizer choice has negligible effects on tasks in English but results in consistent performance differences in multilingual settings. We propose new intrinsic tokenizer metrics inspired by Zipf’s law that correlate more strongly with downstream performance than text compression when modeling unseen languages. By combining several metrics to capture multiple aspects of tokenizer behavior, we develop a reliable framework for intrinsic tokenizer evaluations. Our work offers a more efficient path to informed tokenizer selection in future language model development.

**摘要(中文)**:
> 分词器的选择可以深刻地影响语言模型的性能，但对分词器质量的可访问且可靠的评估仍然是一个开放的挑战。受扩展一致性的启发，我们证明较小的模型可以准确预测分词器对较大模型影响的显着差异，而计算成本仅为一小部分。通过系统地评估以英语为中心的和多语言的分词器，我们发现分词器的选择对英语任务的影响可以忽略不计，但在多语言环境中会导致一致的性能差异。我们提出了受 Zipf 定律启发的新的内在分词器指标，在建模未见过的语言时，该指标与下游性能的相关性比文本压缩的相关性更强。通过结合多个指标来捕获分词器行为的多个方面，我们为内在分词器评估开发了一个可靠的框架。我们的工作为未来语言模型开发中明智的分词器选择提供了更有效的途径。

---

## 97. Optimizing Pre-Training Data Mixtures with Mixtures of Data Expert Models

**类别**: `主会-长文`

**作者**: Lior Belenki, Alekh Agarwal, Tianze Shi, Kristina Toutanova

**ID**: 2025.acl-long.1564

**摘要(英文)**:
> We propose a method to optimize language model pre-training data mixtures through efficient approximation of the cross-entropy loss corresponding to each candidate mixture via a Mixture of Data Experts (MDE). We use this approximation as a source of additional features in a regression model, trained from observations of model loss for a small number of mixtures. Experiments with Transformer decoder-only language models in the range of 70M to 10B parameters on the SlimPajama dataset show that our method achieves significantly better performance than approaches that train regression models using only the mixture rates as input features. Combining this improved optimization method with an objective that takes into account cross-entropy on end task data leads to superior performance on few-shot downstream evaluations. We also provide theoretical insights on why aggregation of data expert predictions can provide good approximations to model losses for data mixtures.

**摘要(中文)**:
> 我们提出了一种通过数据专家混合（MDE）有效近似与每个候选混合相对应的交叉熵损失来优化语言模型预训练数据混合的方法。我们使用这种近似作为回归模型中附加特征的来源，通过对少量混合物的模型损失的观察进行训练。在 SlimPajama 数据集上使用 Transformer 解码器的语言模型在 70M 到 10B 参数范围内进行的实验表明，与仅使用混合率作为输入特征来训练回归模型的方法相比，我们的方法取得了明显更好的性能。将这种改进的优化方法与考虑最终任务数据的交叉熵的目标相结合，可以在少样本下游评估中获得卓越的性能。我们还提供了理论见解，说明为什么数据专家预测的聚合可以为数据混合的模型损失提供良好的近似值。

---

## 98. Mapping 1,000+ Language Models via the Log-Likelihood Vector

**类别**: `主会-长文`

**作者**: Momose Oyama, Hiroaki Yamagiwa, Yusuke Takase, Hidetoshi Shimodaira

**ID**: 2025.acl-long.1584

**摘要(英文)**:
> To compare autoregressive language models at scale, we propose using log-likelihood vectors computed on a predefined text set as model features. This approach has a solid theoretical basis: when treated as model coordinates, their squared Euclidean distance approximates the Kullback-Leibler divergence of text-generation probabilities. Our method is highly scalable, with computational cost growing linearly in both the number of models and text samples, and is easy to implement as the required features are derived from cross-entropy loss. Applying this method to over 1,000 language models, we constructed a “model map,” providing a new perspective on large-scale model analysis.

**摘要(中文)**:
> 为了大规模比较自回归语言模型，我们建议使用在预定义文本集上计算的对数似然向量作为模型特征。这种方法具有坚实的理论基础：当被视为模型坐标时，它们的欧几里德距离平方近似于文本生成概率的 Kullback-Leibler 散度。我们的方法具有高度可扩展性，计算成本随着模型和文本样本的数量呈线性增长，并且易于实现，因为所需的特征是从交叉熵损失中得出的。我们将该方法应用于1000多个语言模型，构建了“模型图”，为大规模模型分析提供了新的视角。

---

## 99. Robust Estimation of Population-Level Effects in Repeated-MeasuresNLPExperimental Designs

**类别**: `主会-长文`

**作者**: Alejandro Benito-Santos, Adrian Ghajari, Víctor Fresno

**ID**: 2025.acl-long.1586

**摘要(英文)**:
> NLP research frequently grapples with multiple sources of variability—spanning runs, datasets, annotators, and more—yet conventional analysis methods often neglect these hierarchical structures, threatening the reproducibility of findings. To address this gap, we contribute a case study illustrating how linear mixed-effects models (LMMs) can rigorously capture systematic language-dependent differences (i.e., population-level effects) in a population of monolingual and multilingual language models. In the context of a bilingual hate speech detection task, we demonstrate that LMMs can uncover significant population-level effects—even under low-resource (small-N) experimental designs—while mitigating confounds and random noise. By setting out a transparent blueprint for repeated-measures experimentation, we encourage the NLP community to embrace variability as a feature, rather than a nuisance, in order to advance more robust, reproducible, and ultimately trustworthy results.

**摘要(中文)**:
> NLP 研究经常要应对多种变异性来源——跨度运行、数据集、注释器等等——但传统的分析方法常常忽略这些层次结构，从而威胁到研究结果的可重复性。为了解决这一差距，我们提供了一个案例研究，说明线性混合效应模型（LMM）如何能够严格捕获单语和多语言语言模型群体中系统的语言依赖差异（即群体水平效应）。在双语仇恨语音检测任务的背景下，我们证明 LMM 可以发现显着的群体水平影响——即使在低资源（小 N）实验设计下也是如此——同时减轻混杂因素和随机噪声。通过为重复测量实验制定透明的蓝图，我们鼓励 NLP 社区将可变性视为一种特征，而不是一种麻烦，以推进更稳健、可重复且最终值得信赖的结果。

---

## 100. Subword models struggle with word learning, but surprisal hides it

**类别**: `主会-短文`

**作者**: Bastian Bunzeck, Sina Zarrieß

**ID**: 2025.acl-short.24

**摘要(英文)**:
> We study word learning in subword and character language models with the psycholinguistic lexical decision task. While subword LMs struggle to discern words and non-words with high accuracy, character LMs solve this task easily and consistently. Only when supplied with further contexts do subword LMs perform similarly to character models. Additionally, when looking at word-level and syntactic learning trajectories, we find that both processes are separable in character LMs. Word learning happens before syntactic learning, whereas both occur simultaneously in subword LMs. This raises questions about the adequacy of subword LMs for modeling language acquisition and positions character LMs as a viable alternative to study processes below the syntactic level.

**摘要(中文)**:
> 我们通过心理语言学词汇决策任务研究子词和字符语言模型中的单词学习。虽然子词 LM 很难以高精度识别单词和非单词，但字符 LM 可以轻松且一致地解决此任务。只有当提供更多上下文时，子词 LM 的性能才会与字符模型类似。此外，当查看单词级和句法学习轨迹时，我们发现这两个过程在字符 LM 中是可分离的。单词学习发生在句法学习之前，而在子词 LM 中两者同时发生。这就提出了关于子词语言模型是否足以对语言习得进行建模的问题，并将字符语言模型定位为句法级别以下研究过程的可行替代方案。

---

## 101. Can Community Notes Replace Professional Fact-Checkers?

**类别**: `主会-短文`

**作者**: Nadav Borenstein, Greta Warren, Desmond Elliott, Isabelle Augenstein

**ID**: 2025.acl-short.42

**摘要(英文)**:
> Two commonly employed strategies to combat the rise of misinformation on social media are (i) fact-checking by professional organisations and (ii) community moderation by platform users. Policy changes by Twitter/X and, more recently, Meta, signal a shift away from partnerships with fact-checking organisations and towards an increased reliance on crowdsourced community notes. However, the extent and nature of dependencies between fact-checking and *helpful* community notes remain unclear. To address these questions, we use language models to annotate a large corpus of Twitter/X community notes with attributes such as topic, cited sources, and whether they refute claims tied to broader misinformation narratives. Our analysis reveals that community notes cite fact-checking sources up to five times more than previously reported. Fact-checking is especially crucial for notes on posts linked to broader narratives, which are *twice* as likely to reference fact-checking sources compared to other sources. Our results show that successful community moderation relies on professional fact-checking and highlight how citizen and professional fact-checking are deeply intertwined.

**摘要(中文)**:
> 打击社交媒体上错误信息增加的两种常用策略是（i）由专业组织进行事实核查和（ii）由平台用户进行社区调节。 Twitter/X 以及最近的 Meta 的政策变化标志着从与事实核查组织的合作关系转向更加依赖众包社区笔记的转变。然而，事实核查和“有用的”社区注释之间的依赖程度和性质仍不清楚。为了解决这些问题，我们使用语言模型来注释大量 Twitter/X 社区笔记，其中包含主题、引用来源以及它们是否反驳与更广泛的错误信息叙述相关的主张等属性。我们的分析显示，社区笔记引用的事实核查来源比之前报道的多五倍。事实核查对于与更广泛的叙述相关的帖子的注释尤其重要，与其他来源相比，这些注释引用事实核查来源的可能性是“两倍”。我们的结果表明，成功的社区调节依赖于专业的事实核查，并强调公民和专业的事实核查是如何紧密交织在一起的。

---

## 102. Revisiting Uncertainty Quantification Evaluation in Language Models: Spurious Interactions with Response Length Bias Results

**类别**: `主会-短文`

**作者**: Andrea Santilli, Adam Golinski, Michael Kirchhof, Federico Danieli, Arno Blaas, Miao Xiong, Luca Zappella, Sinead Williamson

**ID**: 2025.acl-short.60

**摘要(英文)**:
> Uncertainty Quantification (UQ) in Language Models (LMs) is key to improving their safety and reliability. Evaluations often use metrics like AUROC to assess how well UQ methods (e.g., negative sequence probabilities) correlate with task correctness functions (e.g., ROUGE-L). We show that mutual biases-when both UQ methods and correctness functions are biased by the same factors-systematically distort evaluation. First, we formally prove that any mutual bias non-randomly skews AUROC rankings, compromising benchmark integrity. Second, we confirm this happens empirically by testing 7 widely used correctness functions, from lexical-based and embedding-based metrics to LM-as-a-judge approaches, across 4 datasets × 4 models × 8 UQ methods. Our analysis showsthat length biases in correctness functions distort UQ assessments by interacting with length biases in UQ methods. We identify LM-as-a-judge methods as the least length-biased, offering a promising path for a fairer UQ evaluation.

**摘要(中文)**:
> 语言模型 (LM) 中的不确定性量化 (UQ) 是提高其安全性和可靠性的关键。评估通常使用 AUROC 等指标来评估 UQ 方法（例如负序列概率）与任务正确性函数（例如 ROUGE-L）的关联程度。我们表明，当 UQ 方法和正确性函数都受到相同因素的影响时，相互偏差会系统性地扭曲评估。首先，我们正式证明任何相互偏见都会非随机地扭曲 AUROC 排名，从而损害基准完整性。其次，我们通过在 4 个数据集 × 4 个模型 × 8 个 UQ 方法中测试 7 个广泛使用的正确性函数（从基于词汇和基于嵌入的度量到 LM 作为判断方法）来根据经验确认这种情况的发生。我们的分析表明，正确性函数中的长度偏差与 UQ 方法中的长度偏差相互作用，从而扭曲了 UQ 评估。我们认为 LM 作为法官的方法是长度偏差最小的，为更公平的昆士兰大学评估提供了一条有希望的途径。

---

## 103. Meaning Variation and Data Quality in the Corpus of Founding EraAmericanEnglish

**类别**: `主会-短文`

**作者**: Dallas Card

**ID**: 2025.acl-short.66

**摘要(英文)**:
> Legal scholars are increasingly using corpus based methods for assessing historical meaning. Among work focused on the so-called founding era (mid to late 18th century), the majority of such studies use the Corpus of Founding Era American English (COFEA) and rely on methods such as word counting and manual coding. Here, we demonstrate what can be inferred about meaning change and variation using more advanced NLP methods, focusing on terms in the U.S. Constitution. We also carry out a data quality assessment of COFEA, pointing out issues with OCR quality and metadata, compare diachronic change to synchronic variation, and discuss limitations when using NLP methods for studying historical meaning.

**摘要(中文)**:
> 法律学者越来越多地使用基于语料库的方法来评估历史意义。在关注所谓建国时代（18世纪中后期）的工作中，大多数此类研究使用建国时代美式英语语料库（COFEA）并依赖字数统计和手动编码等方法。在这里，我们展示了使用更先进的 NLP 方法可以推断出含义变化和变化的内容，重点关注美国宪法中的术语。我们还对 COFEA 进行了数据质量评估，指出 OCR 质量和元数据的问题，比较历时变化与共时变化，并讨论使用 NLP 方法研究历史意义时的局限性。

---

## 104. Textagon: Boosting Language Models with Theory-guided Parallel Representations

**类别**: `系统演示`

**作者**: John P. Lalor, Ruiyang Qin, David Dobolyi, Ahmed Abbasi

**ID**: 2025.acl-demo.9

**摘要(英文)**:
> Pretrained language models have significantly advanced the state of the art in generating distributed representations of text. However, they do not account for the wide variety of available expert-generated language resources and lexicons that explicitly encode linguistic/domain knowledge. Such lexicons can be paired with learned embeddings to further enhance NLP prediction and linguistic inquiry. In this work we present Textagon, a Python package for generating parallel representations for text based on predefined lexicons and selecting representations that provide the most information. We discuss the motivation behind the software, its implementation, as well as two case studies for its use to demonstrate operational utility.

**摘要(中文)**:
> 预训练的语言模型极大地提高了生成分布式文本表示的技术水平。然而，它们没有考虑到各种可用的专家生成的语言资源和明确编码语言/领域知识的词典。此类词典可以与学习的嵌入配对，以进一步增强 NLP 预测和语言查询。在这项工作中，我们介绍了 Textagon，这是一个 Python 包，用于根据预定义的词典生成文本的并行表示并选择提供最多信息的表示。我们讨论了该软件背后的动机、其实现，以及用于展示其操作实用性的两个案例研究。

---

## 105. DISPUTool 3.0: Fallacy Detection and Repairing in Argumentative Political Debates

**类别**: `系统演示`

**作者**: Pierpaolo Goffredo, Deborah Dore, Elena Cabrio, Serena Villata

**ID**: 2025.acl-demo.45

**摘要(英文)**:
> This paper introduces and evaluates a novel web-based application designed to identify and repair fallacious arguments in political debates. DISPUTool 3.0 offers a comprehensive tool for argumentation analysis of political debate, integrating state-of-the-art natural language processing techniques to mine and classify argument components and relations. DISPUTool 3.0 builds on theElecDeb60to20dataset, covering US presidential debates from 1960 to 2020. In this paper, we introduce a novel task which is integrated as a new module in DISPUTool, i.e., the automatic detection and classification of fallacious arguments, and the automaticrepairingof such misleading arguments. The goal is to show to the user a tool which not only identifies fallacies in political debates, but it also shows how the argument looks like once the veil of fallacy falls down. An extensive evaluation of the module is addressed employing both automated metrics and human assessments. With the inclusion of this module, DISPUTool 3.0 advances even more user critical thinking in front of the augmenting spread of such nefarious kind of content in political debates and beyond. The tool is publicly available here: https://3ia-demos.inria.fr/disputool/

**摘要(中文)**:
> 本文介绍并评估了一种新颖的基于网络的应用程序，旨在识别和修复政治辩论中的错误论点。 DISPUTool 3.0 提供了一个用于政治辩论论证分析的综合工具，集成了最先进的自然语言处理技术来挖掘和分类论证成分和关系。 DISPUTool 3.0 建立在 ElecDeb60to20 数据集的基础上，涵盖了从 1960 年到 2020 年的美国总统辩论。在本文中，我们介绍了一项新任务，该任务集成为 DISPUTool 中的新模块，即错误论点的自动检测和分类，以及此类误导性论点的自动修复。我们的目标是向用户展示一种工具，它不仅可以识别政治辩论中的谬误，而且还可以显示一旦谬论的面纱揭开后论证的样子。使用自动指标和人工评估来对该模块进行广泛的评估。通过包含此模块，DISPUTool 3.0 在此类邪恶内容在政治辩论及其他领域的不断传播面前，进一步提高了用户的批判性思维。该工具可在此处公开使用：https://3ia-demos.inria.fr/disputool/

---

## 106. Zero-shot prompt-based classification: topic labeling in times of foundation models inGerman Tweets

**类别**: `学生研讨会`

**作者**: Simon Münker, Kai Kugler, Achim Rettinger

**ID**: 2025.acl-srw.4

**摘要(英文)**:
> Filtering and annotating textual data are routine tasks in many areas, like social media or news analytics. Automating these tasks allows to scale the analyses wrt. speed and breadth of content covered and decreases the manual effort required. Due to technical advancements in Natural Language Processing, specifically the success of large foundation models, a new tool for automating such annotation processes by using a text-to-text interface given written guidelines without providing training samples has become available. In this work, we assess these advancementsin-the-wildby empirically testing them in an annotation task on German Twitter data about social and political European crises. We compare the prompt-based results with our human annotation and preceding classification approaches, including Naive Bayes and a BERT-based fine-tuning/domain adaptation pipeline. Our results show that the prompt-based approach – despite being limited by local computation resources during the model selection – is comparable with the fine-tuned BERT but without any annotated training data. Our findings emphasize the ongoing paradigm shift in the NLP landscape, i.e., the unification of downstream tasks and elimination of the need for pre-labeled training data.

**摘要(中文)**:
> 过滤和注释文本数据是许多领域的例行任务，例如社交媒体或新闻分析。自动化这些任务可以扩展分析范围。覆盖内容的速度和广度，并减少所需的手动工作。由于自然语言处理技术的进步，特别是大型基础模型的成功，已经出现了一种新工具，可以通过使用给定书面指南的文本到文本界面来自动化此类注释过程，而无需提供训练样本。在这项工作中，我们通过在有关欧洲社会和政治危机的德国 Twitter 数据的注释任务中对这些进展进行实证测试来评估这些进展。我们将基于提示的结果与人工注释和之前的分类方法进行比较，包括朴素贝叶斯和基于 BERT 的微调/域适应管道。我们的结果表明，基于提示的方法尽管在模型选择过程中受到本地计算资源的限制，但与微调的 BERT 相当，但没有任何带注释的训练数据。我们的研究结果强调了 NLP 领域正在进行的范式转变，即下游任务的统一和消除对预先标记的训练数据的需求。

---

## 107. SEPSIS:ICan Catch Your Lies – A New Paradigm for Deception Detection

**类别**: `学生研讨会`

**作者**: Anku Rani, Dwip Dalal, Shreya Gautam, Pankaj Gupta, Vinija Jain, Aman Chadha, Amit Sheth, Amitava Das

**ID**: 2025.acl-srw.7

**摘要(英文)**:
> Deception is the intentional practice of twisting information. It is a nuanced societal practice deeply intertwined with human societal evolution, characterized by a multitude of facets. This research explores the problem of deception through the lens of psychology, employing a framework that categorizes deception into three forms: lies of omission, lies of commission, and lies of influence. The primary focus of this study is specifically on investigating only lies of omission. We propose a novel framework for deception detection leveraging NLP techniques. We curated an annotated dataset of 876,784 samples by amalgamating a popular large-scale fake news dataset and scraped news headlines from the Twitter handle of “Times of India”, a well-known Indian news media house. Each sample has been labeled with four layers, namely: (i) the type of omission (speculation, bias, distortion, sounds factual, and opinion), (ii) colors of lies (black, white, grey, and red), and (iii) the intention of such lies (to influence, gain social prestige, etc) (iv) topic of lies (political, educational, religious, racial, and ethnicity). We present a novel multi-task learning [MTL] pipeline that leverages the dataless merging of fine-tuned language models to address the deception detection task mentioned earlier. Our proposed model achieved an impressive F1 score of 0.87, demonstrating strong performance across all layers including the type, color, intent, and topic aspects of deceptive content. Finally, our research aims to explore the relationship between the lies of omission and propaganda techniques. To accomplish this, we conducted an in-depth analysis, uncovering compelling findings. For instance, our analysis revealed a significant correlation between loaded language and opinion, shedding light on their interconnectedness. To encourage further research in this field, we are releasing the SEPSIS dataset and code athttps://huggingface.co/datasets/ankurani/deception.

**摘要(中文)**:
> 欺骗是故意扭曲信息的行为。它是一种与人类社会进化深深交织在一起的微妙的社会实践，具有多个方面的特点。这项研究通过心理学的视角探讨了欺骗问题，采用的框架将欺骗分为三种形式：不作为的谎言、委托的谎言和影响的谎言。这项研究的主要重点是专门调查遗漏的谎言。我们提出了一种利用 NLP 技术进行欺骗检测的新颖框架。我们通过合并流行的大规模假新闻数据集，并从印度著名新闻媒体《印度时报》的 Twitter 账号上抓取新闻头条，整理了一个包含 876,784 个样本的带注释数据集。每个样本都被标记为四层，即：（i）遗漏的类型（猜测、偏见、歪曲、听起来事实和观点），（ii）谎言的颜色（黑色、白色、灰色和红色），以及（iii）此类谎言的意图（影响、获得社会声望等）（iv）谎言的主题（政治、教育、宗教、种族和民族）。我们提出了一种新颖的多任务学习 [MTL] 管道，它利用微调语言模型的无数据合并来解决前面提到的欺骗检测任务。我们提出的模型取得了 0.87 的令人印象深刻的 F1 分数，在所有层面上都表现出了强大的性能，包括欺骗性内容的类型、颜色、意图和主题方面。最后，我们的研究旨在探讨遗漏谎言与宣传技巧之间的关系。为了实现这一目标，我们进行了深入分析，发现了令人信服的发现。例如，我们的分析揭示了负载语言和观点之间的显着相关性，揭示了它们的相互关联性。为了鼓励该领域的进一步研究，我们在 https://huggingface.co/datasets/ankurani/deception 上发布了 SEPSIS 数据集和代码。

---

## 108. Your Pretrained Model Tells the Difficulty Itself: A Self-Adaptive Curriculum Learning Paradigm for Natural Language Understanding

**类别**: `学生研讨会`

**作者**: Qi Feng, Yihong Liu, Hinrich Schuetze

**ID**: 2025.acl-srw.15

**摘要(英文)**:
> Curriculum learning is a widely adopted training strategy in natural language processing (NLP), where models are exposed to examples organized by increasing difficulty to enhance learning efficiency and performance. However, most existing approaches rely on manually defined difficulty metrics – such as text length – which may not accurately reflect the model’s own perspective. To overcome this limitation, we present a self-adaptive curriculum learning paradigm that prioritizes fine-tuning examples based on difficulty scores predicted by pre-trained language models (PLMs) themselves. Building on these scores, we explore various training strategies that differ in the ordering of examples for the fine-tuning: from easy-to-hard, hard-to-easy, to mixed sampling. We evaluate our method on four natural language understanding (NLU) datasets covering both binary and multi-class classification tasks.Experimental results show that our approach leads to faster convergence and improved performance compared to standard random sampling.

**摘要(中文)**:
> 课程学习是自然语言处理（NLP）领域广泛采用的训练策略，其中模型暴露于按难度增加而组织的示例，以提高学习效率和性能。然而，大多数现有方法依赖于手动定义的难度指标（例如文本长度），这可能无法准确反映模型自身的观点。为了克服这一限制，我们提出了一种自适应课程学习范式，该范式根据预训练语言模型（PLM）本身预测的难度分数来优先调整示例。在这些分数的基础上，我们探索了各种训练策略，这些策略在微调示例的顺序上有所不同：从易到难，难到易，到混合采样。我们在涵盖二元和多类分类任务的四个自然语言理解 (NLU) 数据集上评估我们的方法。实验结果表明，与标准随机采样相比，我们的方法可以实现更快的收敛并提高性能。

---

## 109. Towards Multi-PerspectiveNLPSystems: A Thesis Proposal

**类别**: `学生研讨会`

**作者**: Benedetta Muscato

**ID**: 2025.acl-srw.30

**摘要(英文)**:
> In the field of Natural Language Processing (NLP), a common approach for resolving human disagreement involves establishing a consensus among multiple annotators. However, previous research shows that overlooking individual opinions can result in the marginalization of minority perspectives, particularly in subjective tasks, where annotators may systematically disagree due to their personal preferences. Emerging Multi-Perspective approaches challenge traditional methodologies that treat disagreement as mere noise, instead recognizing it as a valuable source of knowledge shaped by annotators’ diverse backgrounds, life experiences, and values.This thesis proposal aims to (1) identify the challenges of designing disaggregated datasets i.e., preserving individual labels in human-annotated datasets for subjective tasks (2) propose solutions for developing Perspective-Aware by design systems and (3) explore the correlation between human disagreement and model uncertainty leveraging eXplainable AI techniques (XAI).Our long-term goal is to create a framework adaptable to various subjective NLP tasks to promote the development of more responsible and inclusive models.

**摘要(中文)**:
> 在自然语言处理（NLP）领域，解决人类分歧的常见方法是在多个注释者之间建立共识。然而，先前的研究表明，忽视个人观点可能会导致少数观点的边缘化，特别是在主观任务中，注释者可能会因个人偏好而系统性地表达不同意见。新兴的多视角方法挑战了传统方法，这些方法将分歧视为纯粹的噪音，而是将其视为由注释者的不同背景、生活经历和价值观塑造的宝贵知识来源。本论文提案的目的是（1）确定设计分类数据集的挑战，即在主观任务的人工注释数据集中保留单个标签（2）提出通过设计系统开发视角感知的解决方案，以及（3）探索人类分歧与模型不确定性之间的相关性eXplainable AI技术（XAI）。我们的长期目标是创建一个适应各种主观NLP任务的框架，以促进更负责任和更具包容性的模型的开发。

---

## 110. Cross-Genre Learning forOldEnglish PoetryPOSTagging

**类别**: `学生研讨会`

**作者**: Irene Miani, Sara Stymne, Gregory R. Darwin

**ID**: 2025.acl-srw.46

**摘要(英文)**:
> Poetry has always distinguished itself from other literary genres in many ways, including grammatically and syntactically. These differences are evident not only in modern literature but also in earlier stages. Linguistic analysis tools struggle to address these differences. This paper focuses on the dichotomy between Old English poetry and prose, specifically in the context of the POS tagging task.Two annotated corpora representing each genre were analyzed to show that there are several types of structural differences between Old English poetry and prose. For POS tagging, we conduct experiments on both a detailed tag set with over 200 tags and a mapping to the UPOS tag set with 17 tags. We establish a baseline and conduct two cross-genre experiments to investigate the effect of different proportions of prose and poetry data. Across both tag sets, our results indicate that if the divergence between two genres is substantial, simply increasing the quantity of training data from the support genre does not necessarily improve prediction accuracy. However, incorporating even a small amount of target data can lead to better performance compared to excluding it entirely. This study not only highlights the linguistic differences between Old English poetry and prose but also emphasizes the importance of developing effective NLP tools for underrepresented historical languages across all genres.

**摘要(中文)**:
> 诗歌始终在许多方面区别于其他文学流派，包括语法和句法。这些差异不仅在现代文学中很明显，而且在早期阶段也很明显。语言分析工具很难解决这些差异。本文重点关注古英语诗歌和散文之间的二分法，特别是在词性标注任务的背景下。对代表每种体裁的两个带注释的语料库进行了分析，以表明古英语诗歌和散文之间存在几种类型的结构差异。对于 POS 标签，我们对包含 200 多个标签的详细标签集和包含 17 个标签的 UPOS 标签集的映射进行了实验。我们建立基线并进行两个跨流派实验来研究不同比例的散文和诗歌数据的效果。在这两个标签集中，我们的结果表明，如果两种类型之间的差异很大，那么简单地增加支持类型的训练数据量并不一定会提高预测准确性。然而，与完全排除目标数据相比，合并少量目标数据可以带来更好的性能。这项研究不仅强调了古英语诗歌和散文之间的语言差异，还强调了为所有流派中代表性不足的历史语言开发有效的 NLP 工具的重要性。

---

## 111. Is Partial Linguistic Information Sufficient for Discourse Connective Disambiguation? A Case Study of Concession

**类别**: `学生研讨会`

**作者**: Takuma Sato, Ai Kubota, Koji Mineshima

**ID**: 2025.acl-srw.71

**摘要(英文)**:
> Discourse relations are sometimes explicitly conveyed by specific connectives.However, some connectives can signal multiple discourse relations; in such cases, disambiguation is necessary to determine which relation is intended.This task is known as *discourse connective disambiguation* (Pitler and Nenkova, 2009), and particular attention is often given to connectives that can convey both *concession* and other relations (e.g., *synchronous*).In this study, we conducted experiments to analyze which linguistic features play an important role in the disambiguation of polysemous connectives in Japanese.A neural language model (BERT) was fine-tuned using inputs from which specific linguistic features (e.g., word order, specific lexicon, etc.) had been removed.We analyzed which linguistic features affect disambiguation by comparing the model’s performance.Our results show that even after performing drastic removal, such as deleting one of the two arguments that constitute the discourse relation, the model’s performance remained relatively robust.However, the removal of certain lexical items or words belonging to specific lexical categories significantly degraded disambiguation performance, highlighting their importance in identifying the intended discourse relation.

**摘要(中文)**:
> 语篇关系有时是由特定的连接词明确表达的。然而，有些连接词可以表示多种语篇关系；在这种情况下，有必要进行消歧以确定所指的关系。这项任务被称为“话语连接词消歧”（Pitler and Nenkova，2009），并且通常会特别关注可以传达“让步”和其他关系（例如“同步”）的连接词。在这项研究中，我们进行了实验来分析哪些语言特征在日语中多义连接词的消歧中发挥着重要作用。语言模型（BERT）使用已删除特定语言特征（例如，词序、特定词汇等）的输入进行微调。我们通过比较模型的性能来分析哪些语言特征会影响消歧。我们的结果表明，即使在执行大幅删除后，例如删除构成话语关系的两个参数之一，模型的性能仍然相对稳健。然而，删除某些词汇项或属于特定词汇类别的单词会显着降低消歧性能，强调它们在识别预期话语关系中的重要性。

---

## 112. Semantic Frame Induction from a Real-World Corpus

**类别**: `学生研讨会`

**作者**: Shogo Tsujimoto, Kosuke Yamada, Ryohei Sasano

**ID**: 2025.acl-srw.72

**摘要(英文)**:
> Recent studies on semantic frame induction have demonstrated that the emergence of pre-trained language models (PLMs) has led to more accurate results.However, most existing studies evaluate the performance using frame resources such as FrameNet, which may not accurately reflect real-world language usage.In this study, we conduct semantic frame induction using the Colossal Clean Crawled Corpus (C4) and assess the applicability of existing frame induction methods to real-world data.Our experimental results demonstrate that existing frame induction methods are effective on real-world data and that frames corresponding to novel concepts can be induced.

**摘要(中文)**:
> 最近关于语义框架归纳的研究表明，预训练语言模型（PLM）的出现带来了更准确的结果。然而，大多数现有研究使用FrameNet等框架资源来评估性能，这可能无法准确反映现实世界的语言使用情况。在本研究中，我们使用Colossal Clean Crawled Corpus（C4）进行语义框架归纳，并评估现有框架归纳方法对现实世界数据的适用性。我们的实验结果表明，现有框架归纳方法对现实世界数据是有效的，并且可以归纳出与新概念相对应的框架。

---

## 113. Lost and Found: Computational Quality Assurance of Crowdsourced Knowledge on Morphological Defectivity inWiktionary

**类别**: `学生研讨会`

**作者**: Jonathan Sakunkoo, Annabella Sakunkoo

**ID**: 2025.acl-srw.73

**摘要(英文)**:
> Morphological defectivity is an intriguing and understudied phenomenon in linguistics. Addressing defectivity, where expected inflectional forms are absent, is essential for improving the accuracy of NLP tools in morphologically rich languages. However, traditional linguistic resources often lack coverage of morphological gaps as such knowledge requires significant human expertise and effort to document and verify. For scarce linguistic phenomena in under-explored languages, Wikipedia and Wiktionary often serve as among the few accessible resources. Despite their extensive reach, their reliability has been a subject of controversy. This study customizes a novel neural morphological analyzer to annotate Latin and Italian corpora. Using the massive annotated data, crowd-sourced lists of defective verbs compiled from Wiktionary are validated computationally. Our results indicate that while Wiktionary provides a highly reliable account of Italian morphological gaps, 7% of Latin lemmata listed as defective show strong corpus evidence of being non-defective. This discrepancy highlights potential limitations of crowd-sourced wikis as definitive sources of linguistic knowledge, particularly for less-studied phenomena and languages, despite their value as resources for rare linguistic features. By providing scalable tools and methods for quality assurance of crowd-sourced data, this work advances computational morphology and expands linguistic knowledge of defectivity in non-English, morphologically rich languages.

**摘要(中文)**:
> 形态缺陷是语言学中一个有趣且未被充分研究的现象。解决缺乏预期屈折形式的缺陷对于提高形态丰富的语言中 NLP 工具的准确性至关重要。然而，传统语言资源往往缺乏对形态差距的覆盖，因为此类知识需要大量的人类专业知识和努力来记录和验证。对于尚未探索的语言中稀缺的语言现象，维基百科和维基词典通常是为数不多的可用资源之一。尽管其影响范围广泛，但其可靠性一直存在争议。本研究定制了一种新型神经形态分析仪来注释拉丁语和意大利语语料库。使用大量带注释的数据，从维基词典中编译出来的众包缺陷动词列表经过计算验证。我们的结果表明，虽然维基词典提供了对意大利语形态缺陷的高度可靠的描述，但被列为有缺陷的拉丁文引理中 7% 显示出强有力的语料库证据表明其没有缺陷。这种差异凸显了众包维基作为语言知识的权威来源的潜在局限性，特别是对于研究较少的现象和语言，尽管它们作为稀有语言特征的资源具有价值。通过提供可扩展的工具和方法来保证众包数据的质量，这项工作推进了计算形态学并扩展了非英语、形态丰富的语言中缺陷的语言知识。

---

## 114. Proposal: From One-Fit-All to Perspective Aware Modeling

**类别**: `学生研讨会`

**作者**: Leixin Zhang

**ID**: 2025.acl-srw.79

**摘要(英文)**:
> Variation in human annotation and human perspectives has drawn increasing attention in natural language processing research. Disagreement observed in data annotation challenges the conventional assumption of a single “ground truth” and uniform models trained on aggregated annotations, which tend to overlook minority viewpoints and individual perspectives. This proposal investigates three directions of perspective-oriented research: First, annotation formats that better capture the granularity and uncertainty of individual judgments; Second, annotation modeling that leverages socio-demographic features to better represent and predict underrepresented or minority perspectives; Third, personalized text generation that tailors outputs to individual users’ preferences and communicative styles. The proposed tasks aim to advance natural language processing research towards more faithfully reflecting the diversity of human interpretation, enhancing both inclusiveness and fairness in language technologies.

**摘要(中文)**:
> 人类注释和人类视角的变化在自然语言处理研究中引起了越来越多的关注。数据注释中观察到的分歧挑战了单一“基本事实”和基于聚合注释训练的统一模型的传统假设，这些假设往往忽视少数观点和个人观点。该提案调查了面向视角的研究的三个方向：第一，更好地捕捉个人判断的粒度和不确定性的注释格式；其次，注释建模利用社会人口特征来更好地表示和预测代表性不足或少数群体的观点；第三，个性化文本生成，根据个人用户的偏好和交流风格定制输出。拟议的任务旨在推进自然语言处理研究，更忠实地反映人类解释的多样性，增强语言技术的包容性和公平性。

---

## 115. Multi-Prompting Decoder Helps Better Language Understanding

**类别**: `Findings`

**作者**: Zifeng Cheng, Zhaoling Chen, Zhiwei Jiang, Yafeng Yin, Cong Wang, Shiping Ge, Qing Gu

**ID**: 2025.findings-acl.11

**摘要(英文)**:
> Recent large Pre-trained Language Models (PLMs) usually only provide users with the inference APIs, namely the emerging Model-as-a-Service (MaaS) setting. To adapt MaaS PLMs to downstream tasks without accessing their parameters and gradients, some existing methods focus on the output-side adaptation of PLMs, viewing the PLM as an encoder and then optimizing a task-specific decoder for decoding the output hidden states and class scores of the PLM. Despite the effectiveness of these methods, they only use a single prompt to query PLMs for decoding, leading to a heavy reliance on the quality of the adopted prompt. In this paper, we propose a simple yet effective Multi-Prompting Decoder (MPD) framework for MaaS adaptation. The core idea is to query PLMs with multiple different prompts for each sample, thereby obtaining multiple output hidden states and class scores from PLMs for subsequent decoding. Such multi-prompting decoding paradigm can simultaneously mitigate reliance on the quality of a single prompt, alleviate the issue of data scarcity under the few-shot setting, and provide richer knowledge extracted from PLMs. Specifically, we propose two decoding strategies: multi-prompting decoding with optimal transport for hidden states and calibrated decoding for class scores. Extensive experiments demonstrate that our method achieves new state-of-the-art results on multiple natural language understanding datasets under the few-shot setting.

**摘要(中文)**:
> 最近的大型预训练语言模型（PLM）通常只为用户提供推理API，即新兴的模型即服务（MaaS）设置。为了使 MaaS PLM 适应下游任务而不访问其参数和梯度，一些现有方法侧重于 PLM 的输出侧适应，将 PLM 视为编码器，然后优化特定于任务的解码器以解码 PLM 的输出隐藏状态和类别分数。尽管这些方法很有效，但它们仅使用单个提示来查询 PLM 进行解码，从而导致对所采用提示的质量的严重依赖。在本文中，我们提出了一种简单而有效的用于 MaaS 适应的多提示解码器（MPD）框架。其核心思想是针对每个样本查询具有多个不同提示的PLM，从而从PLM中获得多个输出隐藏状态和类别分数以供后续解码。这种多提示解码范式可以同时减轻对单个提示质量的依赖，缓解少样本设置下的数据稀缺问题，并提供从 PLM 中提取更丰富的知识。具体来说，我们提出了两种解码策略：具有隐藏状态最佳传输的多提示解码和类别分数的校准解码。大量的实验表明，我们的方法在少量样本设置下在多个自然语言理解数据集上取得了最先进的结果。

---

## 116. Understanding the Gap: an Analysis of Research Collaborations inNLPand Language Documentation

**类别**: `Findings`

**作者**: Luke Gessler, Alexis Palmer, Katharina Von Der Wense

**ID**: 2025.findings-acl.48

**摘要(英文)**:
> Despite over 20 years of NLP work explicitly intended for application in language documentation (LD), practical use of this work remains vanishingly scarce. This issue has been noted and discussed over the past 10 years, but without the benefit of data to inform the discourse.To address this lack in the literature, we present a survey- and interview-based analysis of the lack of adoption of NLP in LD, focusing on the matter of collaborations between documentary linguists and NLP researchers. Our data show support for ideas from previous work but also reveal the importance of little-discussed factors such as misaligned professional incentives, technical knowledge burdens, and LD software.

**摘要(中文)**:
> 尽管 20 多年来 NLP 工作明确旨在应用于语言文档 (LD)，但这项工作的实际应用仍然很少。这个问题在过去 10 年里已经被注意到和讨论过，但没有数据为讨论提供信息。为了解决文献中的这一不足，我们对 LD 中 NLP 的采用不足进行了基于调查和访谈的分析，重点关注纪实语言学家和 NLP 研究人员之间的合作问题。我们的数据显示了对以前工作中的想法的支持，但也揭示了很少讨论的因素的重要性，例如不一致的专业激励、技术知识负担和 LD 软件。

---

## 117. Systematic Generalization in Language Models Scales with Information Entropy

**类别**: `Findings`

**作者**: Sondre Wold, Lucas Georges Gabriel Charpentier, Étienne Simon

**ID**: 2025.findings-acl.90

**摘要(英文)**:
> Systematic generalization remains challenging for current language models, which are known to be both sensitive to semantically similar permutations of the input and to struggle with known concepts presented in novel contexts. Although benchmarks exist for assessing compositional behavior, it is unclear how to measure the difficulty of a systematic generalization problem. In this work, we show how one aspect of systematic generalization can be described by the entropy of the distribution of component parts in the training data. We formalize a framework for measuring entropy in a sequence-to-sequence task and find that the performance of popular model architectures scales with the entropy. Our work connects systematic generalization to information efficiency, and our results indicate that success at high entropy can be achieved even without built-in priors, and that success at low entropy can serve as a target for assessing progress towards robust systematic generalization.

**摘要(中文)**:
> 对于当前的语言模型来说，系统泛化仍然具有挑战性，众所周知，当前的语言模型既对输入的语义相似排列敏感，又难以应对新上下文中呈现的已知概念。尽管存在评估组合行为的基准，但尚不清楚如何衡量系统泛化问题的难度。在这项工作中，我们展示了如何通过训练数据中组成部分的分布熵来描述系统泛化的一个方面。我们形式化了一个在序列到序列任务中测量熵的框架，并发现流行模型架构的性能随着熵的变化而变化。我们的工作将系统泛化与信息效率联系起来，我们的结果表明，即使没有内置先验，也可以在高熵上取得成功，而在低熵上的成功可以作为评估稳健系统泛化进展的目标。

---

## 118. The Inverse Scaling Effect of Pre-Trained Language Model Surprisal Is Not Due to Data Leakage

**类别**: `Findings`

**作者**: Byung-Doh Oh, Hongao Zhu, William Schuler

**ID**: 2025.findings-acl.91

**摘要(英文)**:
> In psycholinguistic modeling, surprisal from larger pre-trained language models has been shown to be a poorer predictor of naturalistic human reading times. However, it has been speculated that this may be due to data leakage that caused language models to see the text stimuli during training. This paper presents two studies to address this concern at scale. The first study reveals relatively little leakage of five naturalistic reading time corpora in two pre-training datasets in terms of length and frequency of tokenn-gram overlap. The second study replicates the negative relationship between language model size and the fit of surprisal to reading times using models trained on ‘leakage-free’ data that overlaps only minimally with the reading time corpora. Taken together, this suggests that previous results using language models trained on these corpora are not driven by the effects of data leakage.

**摘要(中文)**:
> 在心理语言学建模中，较大的预训练语言模型所带来的惊讶已被证明不能很好地预测自然主义的人类阅读时间。然而，有人推测这可能是由于数据泄漏导致语言模型在训练期间看到文本刺激。本文提出了两项​​研究来大规模解决这一问题。第一项研究揭示了两个预训练数据集中的五个自然阅读时间语料库在 tokenn-gram 重叠的长度和频率方面的泄漏相对较小。第二项研究使用在“无泄漏”数据上训练的模型复制了语言模型大小与惊讶与阅读时间的拟合之间的负相关关系，该数据与阅读时间语料库仅很少重叠。总而言之，这表明之前使用在这些语料库上训练的语言模型得到的结果并不是由数据泄漏的影响驱动的。

---

## 119. Turbocharging Web Automation: The Impact of Compressed History States

**类别**: `Findings`

**作者**: Xiyue Zhu, Peng Tang, Haofu Liao, Srikar Appalaraju

**ID**: 2025.findings-acl.187

**摘要(英文)**:
> Language models have led to leap forward in web automation. The current web automation approaches take the current web state, history actions, and language instruction as inputs to predict the next action, overlooking the importance of history states. However, the highly verbose nature of web page states can result in long input sequence and sparse information, hampering the effective utilization of history states. In this paper, we propose a novel web history compressor approach to turbocharge web automation using history states. Our approach employs a history compressor module that distills the most task-relevant information from each history state into a fixed-length short representation, mitigating the challenges posed by the highly verbose history states. Experiments are conducted on the Mind2Web and WebLINX datasets to evaluate the effectiveness of our approach. Results show that our approach obtains 1.2-5.4% absolute accuracy improvements compared to the baseline approach without history inputs.

**摘要(中文)**:
> 语言模型导致了网络自动化的飞跃。当前的网络自动化方法将当前的网络状态、历史操作和语言指令作为输入来预测下一步操作，而忽略了历史状态的重要性。然而，网页状态的高度冗长的性质会导致输入序列长和信息稀疏，从而阻碍了历史状态的有效利用。在本文中，我们提出了一种新颖的网络历史压缩方法，使用历史状态来增强网络自动化。我们的方法采用历史压缩器模块，将每个历史状态中与任务最相关的信息提取为固定长度的简短表示，从而减轻高度详细的历史状态带来的挑战。在 Mind2Web 和 WebLINX 数据集上进行实验来评估我们方法的有效性。结果表明，与没有历史输入的基线方法相比，我们的方法获得了 1.2-5.4% 的绝对准确度提高。

---

## 120. MALAMUTE: A Multilingual, Highly-granular, Template-free, Education-based Probing Dataset

**类别**: `Findings`

**作者**: Sagi Shaier, George Arthur Baker, Chiranthan Sridhar, Lawrence Hunter, Katharina Von Der Wense

**ID**: 2025.findings-acl.209

**摘要(英文)**:
> Language models (LMs) have excelled in various broad domains. However, to ensure their safe and effective integration into real-world educational settings, they must demonstrate proficiency in specific, granular areas of knowledge. Existing cloze-style benchmarks, commonly used to evaluate LMs’ knowledge, have three major limitations. They: 1) do not cover the educational domain; 2) typically focus on low-complexity, generic knowledge or broad domains, which do not adequately assess the models’ knowledge in specific subjects; and 3) often rely on templates that can bias model predictions. Here, we introduce MALAMUTE, a multilingual, template-free, and highly granular probing dataset comprising expert-written, peer-reviewed probes from 71 university-level textbooks across three languages (English, Spanish, and Polish). MALAMUTE is the first education-based cloze-style dataset. It covers eight domains, each with up to 14 subdomains, further broken down into concepts and concept-based prompts, totaling 33,361 university curriculum concepts and 116,887 prompts. MALAMUTE’s fine granularity, educational focus, and inclusion of both sentence-level and paragraph-level prompts make it an ideal tool for evaluating LMs’ course-related knowledge. Our evaluation of masked and causal LMs on MALAMUTE shows that despite overall proficiency, they have significant gaps in knowledge when examined closely on specific subjects, hindering their safe use in classrooms and underscoring the need for further development.

**摘要(中文)**:
> 语言模型 (LM) 在各个广泛领域都表现出色。然而，为了确保他们安全有效地融入现实世界的教育环境，他们必须表现出对特定、精细知识领域的熟练程度。现有的完形填空式基准通常用于评估 LM 的知识，但存在三个主要局限性。它们：1）不涵盖教育领域； 2）通常关注低复杂性、通用知识或广泛领域，这不能充分评估模型在特定学科中的知识； 3）经常依赖可能使模型预测产生偏差的模板。在这里，我们介绍 MALAMUTE，这是一个多语言、无模板且高度精细的探测数据集，其中包含来自三种语言（英语、西班牙语和波兰语）的 71 本大学级教科书的专家编写、经过同行评审的探测。 MALAMUTE 是第一个基于教育的完形填空数据集。它涵盖8个领域，每个领域最多有14个子领域，进一步细分为概念和基于概念的提示，总计33,361个大学课程概念和116,887个提示。 MALAMUTE 的精细粒度、教育重点以及包含句子级和段落级提示的特性使其成为评估 LM 课程相关知识的理想工具。我们对 MALAMUTE 上的屏蔽和因果 LM 的评估表明，尽管总体熟练，但在特定科目上仔细检查时，它们在知识上存在显着差距，阻碍了它们在课堂上的安全使用，并强调了进一步发展的必要性。

---

## 121. Autonomous Data Selection with Zero-shot Generative Classifiers for Mathematical Texts

**类别**: `Findings`

**作者**: Yifan Zhang, Yifan Luo, Yang Yuan, Andrew C Yao

**ID**: 2025.findings-acl.216

**摘要(英文)**:
> We present Autonomous Data Selection (AutoDS), a method that leverages base language models as zero-shot “generative classifiers” to automatically curate high-quality mathematical texts. Unlike prior approaches that require human annotations or training a dedicated data filter, AutoDS relies solely on a model’s logits to determine whether a given passage is mathematically informative and educational. By integrating AutoDS into a continual pretraining pipeline, we substantially boost downstream performance on challenging math benchmarks (MATH, GSM8K, and BBH) while using far fewer tokens than previous methods. Empirically, our approach achieves roughly a twofold improvement in pretraining token efficiency over strong baselines, underscoring the potential of self-directed data selection in enhancing mathematical reasoning. We will release our curated dataset to facilitate future research in automated domain-specific data curation.

**摘要(中文)**:
> 我们提出了自主数据选择（AutoDS），这是一种利用基本语言模型作为零样本“生成分类器”来自动生成高质量数学文本的方法。与之前需要人工注释或训练专用数据过滤器的方法不同，AutoDS 仅依靠模型的 logits 来确定给定的段落是否具有数学信息和教育意义。通过将 AutoDS 集成到持续的预训练管道中，我们大大提高了具有挑战性的数学基准（MATH、GSM8K 和 BBH）的下游性能，同时使用的令牌比以前的方法少得多。根据经验，我们的方法在预训练标记效率方面比强基线实现了大约两倍的提高，强调了自我引导数据选择在增强数学推理方面的潜力。我们将发布我们整理的数据集，以促进未来自动化特定领域数据整理的研究。

---

## 122. Beyond Text: Characterizing Domain Expert Needs in Document Research

**类别**: `Findings`

**作者**: Sireesh Gururaja, Nupoor Gandhi, Jeremiah Milbauer, Emma Strubell

**ID**: 2025.findings-acl.244

**摘要(英文)**:
> Working with documents is a key part of almost any knowledge work, from contextualizing research in a literature review to reviewing legal precedent. Recently, as their capabilities have expanded, primarily text-based NLP systems have often been billed as able to assist or even automate this kind of work. But to what extent are these systems able to model these tasks as experts conceptualize and perform them now? In this study, we interview sixteen domain experts across two domains to understand their processes of document research, and compare it to the current state of NLP systems. We find that our participants processes are idiosyncratic, iterative, and rely extensively on the social context of a document in addition its content, and that approaches in NLP and adjacent fields that explicitly center the document as an object, rather than as merely a container for text, tend to better reflect our participants’ priorities. We call on the NLP community to more carefully consider the role of the document in building useful tools that are accessible, personalizable, iterative, and socially aware.

**摘要(中文)**:
> 从文献综述中的研究背景到法律先例的审查，处理文档是几乎所有知识工作的关键部分。最近，随着其功能的扩展，主要基于文本的 NLP 系统经常被宣传为能够协助甚至自动化此类工作。但是，当专家现在构思并执行这些任务时，这些系统能够在多大程度上对这些任务进行建模？在这项研究中，我们采访了两个领域的 16 位领域专家，以了解他们的文档研究过程，并将其与 NLP 系统的当前状态进行比较。我们发现，我们的参与者流程是特殊的、迭代的，并且除了内容之外还广泛依赖于文档的社会背景，并且 NLP 和相邻领域中明确将文档作为对象而不是仅仅作为文本容器的方法往往能够更好地反映参与者的优先级。我们呼吁 NLP 社区更仔细地考虑该文档在构建可访问、可个性化、可迭代和具有社会意识的有用工具方面的作用。

---

## 123. TriEmbed: Bridge the Gap between Text and Token Indices with Embedding Reparameterization

**类别**: `Findings`

**作者**: Baizhou Huang, Xiaojun Wan

**ID**: 2025.findings-acl.275

**摘要(英文)**:
> The current paradigm of language modeling is a two-stage pipeline that first transforms raw text to token indices, where the distribution is then estimated. It inherently discards linguistic relations between tokens during tokenization, creating a fundamental gap. To address this, we proposeTriEmbed, a reparameterization method for embeddings that incorporates the morphological relationships inherent in subword tokenizer algorithms. Specifically, by organizing the vocabulary into a Trie structure, we can encode these relations and reparametrize the embeddings, facilitating the recovery of other linguistic relationships during training. Empirical results across various settings demonstrate that TriEmbed outperforms conventional embeddings from the perspective of scaling, while offering more linguistically informative token embeddings.

**摘要(中文)**:
> 当前的语言建模范例是一个两阶段管道，首先将原始文本转换为标记索引，然后估计分布。它本质上在标记化过程中丢弃了标记之间的语言关系，从而造成了根本性的差距。为了解决这个问题，我们提出了 TriEmbed，一种嵌入的重新参数化方法，它结合了子词分词器算法中固有的形态关系。具体来说，通过将词汇组织成 Trie 结构，我们可以对这些关系进行编码并重新参数化嵌入，从而有助于在训练期间恢复其他语言关系。各种设置的经验结果表明，从扩展的角度来看，TriEmbed 优于传统嵌入，同时提供了更多语言信息的标记嵌入。

---

## 124. Rationales Are Not Silver Bullets: Measuring the Impact of Rationales on Model Performance and Reliability

**类别**: `Findings`

**作者**: Chiwei Zhu, Benfeng Xu, An Yang, Junyang Lin, Quan Wang, Chang Zhou, Zhendong Mao

**ID**: 2025.findings-acl.302

**摘要(英文)**:
> Training language models with rationales augmentation has been shown to be beneficial in many existing works. In this paper, we identify that such a prevailing view does not hold consistently. We conduct comprehensive investigations to thoroughly inspect the impact of rationales on model performance as well as a novel perspective of model reliability. The results lead to several key findings that add new insights upon existing understandings: 1) Rationales can, at times, deteriorate model performance; 2) Rationales can, at times, improve model reliability, even outperforming their untrained counterparts; 3) A linear correspondence exists in between the performance and reliability improvements, while both are driven by the intrinsic difficulty of the task. These findings provide informative regulations on the broad utilization of rationales and raise critical implications on the procedure of explicitly aligning language models with implicit human thoughts. Codes can be found in this anonymous link: https://anonymous.4open.science/r/rationales-CEE8.

**摘要(中文)**:
> 在许多现有的工作中，通过基本原理增强来训练语言模型已被证明是有益的。在本文中，我们发现这种普遍观点并不一贯成立。我们进行全面的调查，以彻底检查基本原理对模型性能的影响以及模型可靠性的新视角。结果得出了几个关键发现，为现有理解增添了新的见解：1）基本原理有时会降低模型性能； 2) 基本原理有时可以提高模型的可靠性，甚至超越未经训练的模型； 3）性能和可靠性改进之间存在线性对应关系，而两者都是由任务的内在难度驱动的。这些发现为基本原理的广泛利用提供了信息性的规定，并对将语言模型与隐含的人类思维明确对齐的过程提出了重要的影响。代码可以在此匿名链接中找到：https://anonymous.4open.science/r/rationales-CEE8。

---

## 125. From Imitation to Introspection: Probing Self-Consciousness in Language Models

**类别**: `Findings`

**作者**: Sirui Chen, Shu Yu, Shengjie Zhao, Chaochao Lu

**ID**: 2025.findings-acl.392

**摘要(英文)**:
> Self-consciousness, the introspection of one’s existence and thoughts, represents a high-level cognitive process. As language models advance at an unprecedented pace, a critical question arises: Are these models becoming self-conscious? Drawing upon insights from psychological and neural science, this work presents a practical definition of self-consciousness for language models and refines ten core concepts. Our work pioneers an investigation into self-consciousness in language models by, for the first time, leveraging structural causal games to establish the functional definitions of the ten core concepts. Based on our definitions, we conduct a comprehensive four-stage experiment: quantification (evaluation of ten leading models), representation (visualization of self-consciousness within the models), manipulation (modification of the models’ representation), and acquisition (fine-tuning the models on core concepts). Our findings indicate that although models are in the early stages of developing self-consciousness, there is a discernible representation of certain concepts within their internal mechanisms. However, these representations of self-consciousness are hard to manipulate positively at the current stage, yet they can be acquired through targeted fine-tuning.

**摘要(中文)**:
> 自我意识，即对自己的存在和思想的反省，代表了一种高层次的认知过程。随着语言模型以前所未有的速度发展，一个关键问题出现了：这些模型是否变得具有自我意识？这项工作借鉴了心理学和神经科学的见解，提出了语言模型自我意识的实用定义，并提炼了十个核心概念。我们的工作开创了对语言模型中自我意识的研究，首次利用结构性因果博弈来建立十个核心概念的功能定义。根据我们的定义，我们进行了全面的四阶段实验：量化（评估十个主要模型）、表征（模型内自我意识的可视化）、操纵（修改模型的表征）和获取（根据核心概念微调模型）。我们的研究结果表明，尽管模型处于自我意识发展的早期阶段，但在其内部机制中某些概念有明显的表征。然而，这些自我意识的表征在现阶段很难被积极地操纵，但可以通过有针对性的微调来获得。

---

## 126. A Semantic-Aware Layer-Freezing Approach to Computation-Efficient Fine-Tuning of Language Models

**类别**: `Findings`

**作者**: Jian Gu, Aldeida Aleti, Chunyang Chen, Hongyu Zhang

**ID**: 2025.findings-acl.420

**摘要(英文)**:
> Finetuning language models (LMs) is crucial for adapting the models to downstream data and tasks. However, full finetuning is usually costly. Existing work, such as parameter-efficient finetuning (PEFT), often focuses onhow to finetunebut neglects the issue ofwhere to finetune. As a pioneering work on reducing the cost of backpropagation (at the layer level) by answering where to finetune, we conduct a semantic analysis of the LM inference process. We first propose using transition traces of the latent representation to compute deviations (or loss). Then, using a derived formula of scaling law, we estimate the gain of each layer in reducing deviation (or loss). Further, we narrow down the scope for finetuning, and also, study the cost-benefit balance of LM finetuning. We perform extensive experiments across well-known LMs and datasets. The results show that our approach is effective and efficient, and outperforms the existing baselines. Our approach is orthogonal to other techniques for improving finetuning efficiency, such as PEFT methods, offering practical values on LM finetuning.

**摘要(中文)**:
> 微调语言模型 (LM) 对于使模型适应下游数据和任务至关重要。然而，全面的微调通常成本高昂。现有的工作，例如参数高效微调（PEFT），往往关注如何微调，而忽略了在哪里微调的问题。作为一项通过回答微调位置来降低反向传播成本（在层级别）的开创性工作，我们对 LM 推理过程进行了语义分析。我们首先建议使用潜在表示的转换轨迹来计算偏差（或损失）。然后，使用缩放定律的导出公式，我们估计每一层在减少偏差（或损失）方面的增益。此外，我们缩小了微调的范围，并研究了 LM 微调的成本收益平衡。我们在著名的 LM 和数据集上进行了广泛的实验。结果表明，我们的方法有效且高效，并且优于现有基线。我们的方法与其他提高微调效率的技术（例如 PEFT 方法）正交，为 LM 微调提供了实用价值。

---

## 127. BadWindtunnel: Defending Backdoor in High-noise Simulated Training with Confidence Variance

**类别**: `Findings`

**作者**: Ruyi Zhang, Songlei Jian, Yusong Tan, Heng Gao, Haifang Zhou, Kai Lu

**ID**: 2025.findings-acl.482

**摘要(英文)**:
> Current backdoor attack defenders in Natural Language Processing (NLP) typically involve data reduction or model pruning, risking losing crucial information. To address this challenge, we introduce a novel backdoor defender, i.e., BadWindtunnel, in which we build a high-noise simulated training environment, similar to the wind tunnel, which allows precise control over training conditions to model the backdoor learning behavior without affecting the final model. We also use the confidence variance as a learning behavior quantification metric in the simulated training, which is based on the characteristics of backdoor-poisoned data (shorted in poisoned data): higher learnability and robustness. In addition, we propose a two-step strategy to further model poisoned data, including target label identification and poisoned data revealing. Extensive experiments demonstrate BadWindtunnel’s superiority, with a 21% higher average reduction in attack success rate than the second-best defender.

**摘要(中文)**:
> 当前自然语言处理（NLP）中的后门攻击防御者通常涉及数据缩减或模型修剪，从而冒着丢失关键信息的风险。为了应对这一挑战，我们引入了一种新颖的后门防御者，即BadWindtunnel，在其中我们构建了一个类似于风洞的高噪声模拟训练环境，它允许精确控制训练条件来建模后门学习行为，而不影响最终模型。我们还在模拟训练中使用置信方差作为学习行为量化指标，这是基于后门中毒数据（简称中毒数据）的特点：更高的可学习性和鲁棒性。此外，我们提出了一个两步策略来进一步建模中毒数据，包括目标标签识别和中毒数据揭示。大量实验证明了 BadWindtunnel 的优越性，与第二好的防御者相比，平均攻击​​成功率降低了 21%。

---

## 128. Reasoning Circuits in Language Models: A Mechanistic Interpretation of Syllogistic Inference

**类别**: `Findings`

**作者**: Geonhee Kim, Marco Valentino, Andre Freitas

**ID**: 2025.findings-acl.525

**摘要(英文)**:
> Recent studies on reasoning in language models (LMs) have sparked a debate on whether they can learn systematic inferential principles or merely exploit superficial patterns in the training data. To understand and uncover the mechanisms adopted for formal reasoning in LMs, this paper presents a mechanistic interpretation of syllogistic inference. Specifically, we present a methodology for circuit discovery aimed at interpreting content-independent and formal reasoning mechanisms. Through two distinct intervention methods, we uncover a sufficient and necessary circuit involving middle-term suppression that elucidates how LMs transfer information to derive valid conclusions from premises. Furthermore, we investigate how belief biases manifest in syllogistic inference, finding evidence of partial contamination from additional attention heads responsible for encoding commonsense and contextualized knowledge. Finally, we explore the generalization of the discovered mechanisms across various syllogistic schemes, model sizes and architectures. The identified circuit is sufficient and necessary for syllogistic schemes on which the models achieve high accuracy (≥60%), with compatible activation patterns across models of different families. Overall, our findings suggest that LMs learn transferable content-independent reasoning mechanisms, but that, at the same time, such mechanisms do not involve generalizable and abstract logical primitives, being susceptible to contamination by the same world knowledge acquired during pre-training.

**摘要(中文)**:
> 最近关于语言模型（LM）推理的研究引发了关于它们是否可以学习系统推理原则或仅仅利用训练数据中的表面模式的争论。为了理解和揭示语言模型中形式推理所采用的机制，本文提出了三段论推理的机械解释。具体来说，我们提出了一种电路发现方法，旨在解释与内容无关的形式推理机制。通过两种不同的干预方法，我们发现了一个涉及中期抑制的充分且必要的回路，阐明了语言模型如何传递信息以从前提中得出有效的结论。此外，我们研究了信念偏差如何在三段论推理中表现出来，找到了来自负责编码常识和情境化知识的额外注意力头的部分污染的证据。最后，我们探索了所发现的机制在各种三段论方案、模型大小和架构中的泛化。所识别的电路对于模型实现高精度（≥60%）的三段论方案来说是充分且必要的，并且在不同系列的模型之间具有兼容的激活模式。总体而言，我们的研究结果表明，LM 学习可转移的独立于内容的推理机制，但同时，此类机制不涉及可概括和抽象的逻辑原语，容易受到预训练期间获得的相同世界知识的污染。

---

## 129. Beyond the Spelling Miracle: Investigating Substring Awareness in Character-Blind Language Models

**类别**: `Findings`

**作者**: Cristiano Ciaccio, Marta Sartor, Alessio Miaschi, Felice Dell’Orletta

**ID**: 2025.findings-acl.593

**摘要(英文)**:
> Correctly identifying characters and substrings of words should be a basic but essential ability of any Language Model that aims to proficiently understand and produce language. Despite so, the majority of Pre-trained Language Models (PLMs) are “character-blind” and struggle in spelling tasks, although they still seem to acquire some character knowledge during pre-training, a phenomenon dubbed Spelling Miracle. To shed light on this phenomenon, we systematically evaluate a range of PLMs with different parameter sizes using a controlled binary substring identification task. Through a series of experiments, we propose the first comprehensive investigation on where, when, and how a PLMs develop awareness of characters and substrings, with a particular linguistic focus on morphemic units such as prefixes, suffixes, and roots.

**摘要(中文)**:
> 正确识别字符和单词子串应该是任何旨在熟练理解和生成语言的语言模型的基本但必不可少的能力。尽管如此，大多数预训练语言模型（PLM）都是“字符盲”的，并且在拼写任务中表现不佳，尽管它们似乎仍然在预训练期间获得了一些字符知识，这种现象被称为“拼写奇迹”。为了阐明这一现象，我们使用受控二进制子串识别任务系统地评估了一系列具有不同参数大小的 PLM。通过一系列实验，我们首次全面调查 PLM 在何处、何时以及如何发展字符和子字符串的意识，特别是语言学上的重点，例如前缀、后缀和词根等语素单元。

---

## 130. Exploring Graph Representations of Logical Forms for Language Modeling

**类别**: `Findings`

**作者**: Michael Sullivan

**ID**: 2025.findings-acl.635

**摘要(英文)**:
> We make the case for language models over logical forms (LFLMs), arguing that such models are more data-efficient than their textual counterparts. To that end, we introduce the̲Graph-based̲Formal-̲Logical̲Distributional̲Semantics(GFoLDS) prototype, a pretrained LM over graph representations of logical forms, as a proof-of-concept of LFLMs. Using GFoLDS, we present strong experimental evidence that LFLMs can leverage the built-in, basic linguistic knowledge inherent in such models to immediately begin learning more complex patterns. On downstream tasks, we show that GFoLDS vastly outperforms textual, transformer LMs (BERT) pretrained on the same data, indicating that LFLMs can learn with substantially less data than models over plain text. Furthermore, we show that the performance of this model is likely to scale with additional parameters and pretraining data, suggesting the viability of LFLMs in real-world applications.

**摘要(中文)**:
> 我们论证了基于逻辑形式的语言模型（LFLM），认为此类模型比文本模型更具数据效率。为此，我们引入了基于图的形式形式逻辑逻辑分布式语义（GFoLDS）原型，这是一种基于逻辑形式的图表示的预训练 LM，作为 LFLM 的概念验证。使用 GFOLDS，我们提供了强有力的实验证据，表明 LFLM 可以利用此类模型固有的内置基本语言知识立即开始学习更复杂的模式。在下游任务中，我们表明 GFoLDS 的性能远远优于在相同数据上预训练的文本变换器 LM (BERT)，这表明 LFLM 可以使用比纯文本模型少得多的数据进行学习。此外，我们表明该模型的性能可能会随着额外的参数和预训练数据而扩展，这表明 LFLM 在实际应用中的可行性。

---

## 131. Evaluating Pretrained Causal Language Models for Synonymy

**类别**: `Findings`

**作者**: Ioana Ivan, Carlos Ramisch, Alexis Nasr

**ID**: 2025.findings-acl.649

**摘要(英文)**:
> The scaling of causal language models in size and training data enabled them to tackle increasingly complex tasks. Despite the development of sophisticated tests to reveal their new capabilities, the underlying basis of these complex skills remains unclear. We argue that complex skills might be explained using simpler ones, represented by linguistic concepts. As an initial step in exploring this hypothesis, we focus on the lexical-semantic concept of synonymy, laying the groundwork for research into its relationship with more complex skills. We develop a comprehensive test suite to assess various aspects of synonymy under different conditions, and evaluate causal open-source models ranging up to 10 billion parameters. We find that these models effectively recognize synonymy but struggle to generate synonyms when prompted with relevant context.

**摘要(中文)**:
> 因果语言模型的规模和训练数据的扩展使它们能够处理日益复杂的任务。尽管开发了复杂的测试来揭示他们的新能力，但这些复杂技能的根本基础仍然不清楚。我们认为，复杂的技能可以用更简单的技能（以语言概念为代表）来解释。作为探索这一假设的第一步，我们关注同义词的词汇语义概念，为研究其与更复杂技能的关系奠定基础。我们开发了一个全面的测试套件来评估不同条件下同义词的各个方面，并评估多达 100 亿个参数的因果开源模型。我们发现这些模型可以有效地识别同义词，但在相关上下文提示时很难生成同义词。

---

## 132. LlamaPIE: Proactive In-Ear Conversation Assistants

**类别**: `Findings`

**作者**: Tuochao Chen, Nicholas Scott Batchelder, Alisa Liu, Noah A. Smith, Shyamnath Gollakota

**ID**: 2025.findings-acl.710

**摘要(英文)**:
> We introduce LlamaPIE, the first real-time proactive assistant designed to enhance human conversations through discreet, concise guidance delivered via hearable devices. Unlike traditional language models that require explicit user invocation, this assistant operates in the background, anticipating user needs without interrupting conversations. We address several challenges, including determining when to respond, crafting concise responses that enhance conversations, leveraging knowledge of the user for context-aware assistance, and real-time, on-device processing. To achieve this, we construct a semi-synthetic dialogue dataset and propose a two-model pipeline: a small model that decides when to respond and a larger model that generates the response. We evaluate our approach on real-world datasets, demonstrating its effectiveness in providing helpful, unobtrusive assistance. User studies with our assistant, implemented on Apple Silicon M2 hardware, show a strong preference for the proactive assistant over both a baseline with no assistance and a reactive AI assistant, highlighting the potential of LlamaPIE to enhance live conversations.

**摘要(中文)**:
> 我们推出 LlamaPIE，这是首款实时主动助理，旨在通过可听设备提供谨慎、简洁的指导来增强人类对话。与需要显式用户调用的传统语言模型不同，该助手在后台运行，可以在不中断对话的情况下预测用户需求。我们解决了几个挑战，包括确定何时响应、制定简洁的响应来增强对话、利用用户的知识来提供上下文感知帮助，以及实时设备上处理。为了实现这一目标，我们构建了一个半合成对话数据集，并提出了一个双模型管道：一个决定何时响应的小模型和一个生成响应的较大模型。我们在现实世界的数据集上评估我们的方法，证明其在提供有用的、不引人注目的帮助方面的有效性。在 Apple Silicon M2 硬件上对我们的助手进行的用户研究显示，与无帮助的基线和反应式 AI 助手相比，人们更倾向于主动式助手，这凸显了 LlamaPIE 在增强实时对话方面的潜力。

---

## 133. HiCOT: Improving Neural Topic Models via Optimal Transport and Contrastive Learning

**类别**: `Findings`

**作者**: Hoang Tran Vuong, Tue Le, Tu Vu, Tung Nguyen, Linh Ngo Van, Sang Dinh, Thien Huu Nguyen

**ID**: 2025.findings-acl.715

**摘要(英文)**:
> Recent advances in neural topic models (NTMs) have improved topic quality but still face challenges: weak document-topic alignment, high inference costs due to large pretrained language models (PLMs), and limited modeling of hierarchical topic structures. To address these issues, we introduce HiCOT (Hierarchical Clustering and Contrastive Learning with Optimal Transport for Neural Topic Modeling), a novel framework that enhances topic coherence and efficiency. HiCOT integrates Optimal Transport to refine document-topic relationships using compact PLM-based embeddings, captures semantic structure of the documents. Additionally, it employs hierarchical clustering combine with contrastive learning to disentangle topic-word and topic-topic relationships, ensuring clearer structure and better coherence. Experimental results on multiple benchmark datasets demonstrate HiCOT’s superior effectiveness over existing NTMs in topic coherence, topic performance, representation quality, and computational efficiency.

**摘要(中文)**:
> 神经主题模型 (NTM) 的最新进展提高了主题质量，但仍然面临挑战：文档主题对齐较弱、大型预训练语言模型 (PLM) 导致推理成本较高，以及层次主题结构的建模有限。为了解决这些问题，我们引入了 HiCOT（具有神经主题建模最优传输的分层聚类和对比学习），这是一种增强主题连贯性和效率的新颖框架。 HiCOT 集成了最佳传输，使用基于 PLM 的紧凑嵌入来细化文档主题关系，捕获文档的语义结构。此外，它采用层次聚类与对比学习相结合来理清主题与单词和主题与主题的关系，确保更清晰的结构和更好的连贯性。多个基准数据集上的实验结果表明，HiCOT 在主题连贯性、主题性能、表示质量和计算效率方面优于现有 NTM。

---

## 134. Imagine to Hear: Auditory Knowledge Generation can be an Effective Assistant for Language Models

**类别**: `Findings`

**作者**: Suho Yoo, Hyunjong Ok, Jaeho Lee

**ID**: 2025.findings-acl.730

**摘要(英文)**:
> Language models pretrained on text-only corpora often struggle with tasks that require auditory commonsense knowledge.Previous work addresses this problem by augmenting the language model to retrieve knowledge from external audio databases.This approach has several limitations, such as the potential lack of relevant audio in databases and the high costs associated with constructing the databases. To address these issues, we propose Imagine to Hear, a novel approach that dynamically generates auditory knowledge using generative models. Our framework detects multiple audio-related textual spans from the given prompt and generates corresponding auditory knowledge. We develop several mechanisms to efficiently process multiple auditory knowledge, including a CLAP-based rejection sampler and a language-audio fusion module. Our experiments show that our method achieves state-of-the-art performance on AuditoryBench without relying on external databases, highlighting the effectiveness of our generation-based approach.

**摘要(中文)**:
> 在纯文本语料库上预训练的语言模型通常很难完成需要听觉常识知识的任务。以前的工作通过增强语言模型以从外部音频数据库检索知识来解决这个问题。这种方法有一些局限性，例如数据库中可能缺乏相关音频以及与构建数据库相关的高成本。为了解决这些问题，我们提出了 Imagine to Hear，这是一种使用生成模型动态生成听觉知识的新颖方法。我们的框架从给定的提示中检测多个与音频相关的文本范围，并生成相应的听觉知识。我们开发了多种机制来有效处理多种听觉知识，包括基于 CLAP 的拒绝采样器和语言音频融合模块。我们的实验表明，我们的方法在不依赖外部数据库的情况下在 AuditoryBench 上实现了最先进的性能，凸显了我们基于生成的方法的有效性。

---

## 135. HatePRISM: Policies, Platforms, and Research Integration. AdvancingNLPfor Hate Speech Proactive Mitigation

**类别**: `Findings`

**作者**: Naquee Rizwan, Seid Muhie Yimam, Daryna Dementieva, Dr. Florian Skupin, Tim Fischer, Daniil Moskovskiy, Aarushi Ajay Borkar, Robert Geislinger, Punyajoy Saha, Sarthak Roy, Martin Semmann, Alexander Panchenko, Chris Biemann, Animesh Mukherjee

**ID**: 2025.findings-acl.824

**摘要(英文)**:
> Despite regulations imposed by nations and social media platforms, e.g. (Government of India, 2021; European Parliament and Council of the European Union, 2022), inter alia, hateful content persists as a significant challenge. Existing approaches primarily rely on reactive measures such as blocking or suspending offensive messages, with emerging strategies focusing on proactive measurements like detoxification and counterspeech. In our work, which we call HATEPRISM, we conduct a comprehensive examination of hate speech regulations and strategies from three perspectives: country regulations, social platform policies, and NLP research datasets. Our findings reveal significant inconsistencies in hate speech definitions and moderation practices across jurisdictions and platforms, alongside a lack of alignment with research efforts. Based on these insights, we suggest ideas and research direction for further exploration of a unified framework for automated hate speech moderation incorporating diverse strategies.

**摘要(中文)**:
> 尽管国家和社交媒体平台施加了规定，例如（印度政府，2021 年；欧洲议会和欧盟理事会，2022 年）除其他外，仇恨内容仍然是一项重大挑战。现有的方法主要依赖于反应性措施，例如阻止或暂停攻击性信息，而新兴策略则侧重于主动测量，例如戒毒和反言论。在我们称之为 HATEPRISM 的工作中，我们从国家法规、社交平台政策和 NLP 研究数据集三个角度对仇恨言论法规和策略进行了全面审查。我们的研究结果表明，不同司法管辖区和平台之间的仇恨言论定义和审核实践存在显着不一致，而且与研究工作缺乏一致性。基于这些见解，我们提出了一些想法和研究方向，以进一步探索结合不同策略的自动仇恨言论审核的统一框架。

---

## 136. On Entity Identification in Language Models

**类别**: `Findings`

**作者**: Masaki Sakata, Benjamin Heinzerling, Sho Yokoi, Takumi Ito, Kentaro Inui

**ID**: 2025.findings-acl.858

**摘要(英文)**:
> We analyze the extent to which internal representations of language models (LMs) identify and distinguish mentions of named entities, focusing on the many-to-many correspondence between entities and their mentions.We first formulate two problems of entity mentions — ambiguity and variability — and propose a framework analogous to clustering quality metrics. Specifically, we quantify through cluster analysis of LM internal representations the extent to which mentions of the same entity cluster together and mentions of different entities remain separated.Our experiments examine five Transformer-based autoregressive models, showing that they effectively identify and distinguish entities with metrics analogous to precision and recall ranging from 0.66 to 0.9.Further analysis reveals that entity-related information is compactly represented in a low-dimensional linear subspace at early LM layers.Additionally, we clarify how the characteristics of entity representations influence word prediction performance.These findings are interpreted through the lens of isomorphism between LM representations and entity-centric knowledge structures in the real world, providing insights into how LMs internally organize and use entity information.

**摘要(中文)**:
> 我们分析了语言模型（LM）的内部表示识别和区分命名实体提及的程度，重点关注实体与其提及之间的多对多对应关系。我们首先提出了实体提及的两个问题——歧义性和可变性——并提出了一个类似于聚类质量度量的框架。具体来说，我们通过 LM 内部表示的聚类分析来量化提及相同实体聚类在一起和提及不同实体保持分离的程度。我们的实验检查了五个基于 Transformer 的自回归模型，表明它们有效地识别和区分具有类似于精度和召回率的度量的实体，范围从 0.66 到 0.9。进一步的分析表明，实体相关信息在早期 LM 层的低维线性子空间中被紧凑地表示。此外，我们阐明了特征如何实体表示的影响词预测性能。这些发现是通过现实世界中 LM 表示和以实体为中心的知识结构之间的同构透镜来解释的，为 LM 如何内部组织和使用实体信息提供了见解。

---

## 137. What is in a name? Mitigating Name Bias in Text Embedding Similarity via Anonymization

**类别**: `Findings`

**作者**: Sahil Manchanda, Pannaga Shivaswamy

**ID**: 2025.findings-acl.914

**摘要(英文)**:
> Text-embedding models often exhibit biases arising from the data on which they are trained. In this paper, we examine a hitherto unexplored bias in text-embeddings: bias arising from the presence ofnamessuch as persons, locations, organizations etc. in the text. Our study shows how the presence ofname-biasin text-embedding models can potentially lead to erroneous conclusions in the assessment of thematic similarity.Text-embeddings can mistakenly indicate similarity between texts based on names in the text, even when their actual semantic content has no similarity or indicate dissimilarity simply because of the names in the text even when the texts match semantically. We first demonstrate the presence of name bias in different text-embedding models and then proposetext-anonymizationduring inference which involves removing references to names, while preserving the core theme of the text. The efficacy of the anonymization approach is demonstrated on three downstream NLP tasks involving embedding similarities, achieving significant performance gains. Our simple and training-optimization-free approach offers a practical and easily implementable solution to mitigate name bias.

**摘要(中文)**:
> 文本嵌入模型通常会表现出因训练数据而产生的偏差。在本文中，我们研究了文本嵌入中迄今为止尚未探索的偏差：由于文本中的人名、位置、组织等名称的存在而产生的偏差。我们的研究表明，文本嵌入模型中名称偏差的存在可能会导致在评估主题相似性时得出错误的结论。文本嵌入可能会根据文本中的名称错误地指示文本之间的相似性，即使它们的实际语义内容没有相似性，或者仅仅因为文本中的名称而表明不相似，即使文本在语义上匹配。我们首先证明不同文本嵌入模型中存在名称偏差，然后在推理过程中提出文本匿名化，其中涉及删除对名称的引用，同时保留文本的核心主题。匿名化方法的有效性在涉及嵌入相似性的三个下游 NLP 任务中得到了证明，从而实现了显着的性能提升。我们简单且无需培训优化的方法提供了实用且易于实施的解决方案，以减轻名称偏见。

---

## 138. Annotating the Annotators: Analysis, Insights and Modelling from an Annotation Campaign on Persuasion Techniques Detection

**类别**: `Findings`

**作者**: Davide Bassi, Dimitar Iliyanov Dimitrov, Bernardo D’Auria, Firoj Alam, Maram Hasanain, Christian Moro, Luisa Orrù, Gian Piero Turchi, Preslav Nakov, Giovanni Da San Martino

**ID**: 2025.findings-acl.922

**摘要(英文)**:
> Persuasion (or propaganda) techniques detection is a relatively novel task in Natural Language Processing (NLP). While there have already been a number of annotation campaigns, they have been based on heuristic guidelines, which have never been thoroughly discussed. Here, we present the first systematic analysis of a complex annotation task -detecting 22 persuasion techniques in memes-, for which we provided continuous expert oversight. The presence of an expert allowed us to critically analyze specific aspects of the annotation process. Among our findings, we show that inter-annotator agreement alone inadequately assessed annotation correctness. We thus define and track different error types, revealing that expert feedback shows varying effectiveness across error categories. This pattern suggests that distinct mechanisms underlie different kinds of misannotations. Based on our findings, we advocate for an expert oversight in annotation tasks and periodic quality audits. As an attempt to reduce the costs for this, we introduce a probabilistic model for optimizing intervention scheduling.

**摘要(中文)**:
> 说服（或宣传）技术检测是自然语言处理（NLP）中相对新颖的任务。尽管已经开展了许多注释活动，但它们都是基于启发式指南，而这些指南从未得到过彻底讨论。在这里，我们首次对复杂的注释任务进行系统分析 - 检测模因中的 22 种说服技巧 - 我们为此提供了持续的专家监督。专家的存在使我们能够批判性地分析注释过程的具体方面。在我们的研究结果中，我们表明仅注释者间的一致性不足以评估注释的正确性。因此，我们定义并跟踪不同的错误类型，揭示专家反馈在不同的错误类别中显示出不同的有效性。这种模式表明不同类型的错误注释背后存在不同的机制。根据我们的发现，我们主张对注释任务进行专家监督并定期进行质量审核。为了降低成本，我们引入了一种用于优化干预调度的概率模型。

---

## 139. Fact Recall, Heuristics or Pure Guesswork? Precise Interpretations of Language Models for Fact Completion

**类别**: `Findings`

**作者**: Denitsa Saynova, Lovisa Hagström, Moa Johansson, Richard Johansson, Marco Kuhlmann

**ID**: 2025.findings-acl.942

**摘要(英文)**:
> Language models (LMs) can make a correct prediction based on many possible signals in a prompt, not all corresponding to recall of factual associations. However, current interpretations of LMs fail to take this into account. For example, given the query “Astrid Lindgren was born in” with the corresponding completion “Sweden”, no difference is made between whether the prediction was based on knowing where the author was born or assuming that a person with a Swedish-sounding name was born in Sweden. In this paper, we present a model-specific recipe - PrISM - for constructing datasets with examples of four different prediction scenarios: generic language modeling, guesswork, heuristics recall and exact fact recall. We apply two popular interpretability methods to the scenarios: causal tracing (CT) and information flow analysis. We find that both yield distinct results for each scenario. Results for exact fact recall and generic language modeling scenarios confirm previous conclusions about the importance of mid-range MLP sublayers for fact recall, while results for guesswork and heuristics indicate a critical role of late last token position MLP sublayers. In summary, we contribute resources for a more extensive and granular study of fact completion in LMs, together with analyses that provide a more nuanced understanding of how LMs process fact-related queries.

**摘要(中文)**:
> 语言模型 (LM) 可以根据提示中的许多可能信号做出正确的预测，但并非所有信号都对应于事实关联的回忆。然而，当前对 LM 的解释并未考虑到这一点。例如，给定查询“Astrid Lindgren 出生于”以及相应的完成“瑞典”，无论预测是基于了解作者出生地还是假设一个名字听起来像瑞典语的人出生在瑞典，两者都没有区别。在本文中，我们提出了一种特定于模型的方法 - PrISM - 用于构建数据集，其中包含四种不同预测场景的示例：通用语言建模、猜测、启发式回忆和精确事实回忆。我们将两种流行的解释方法应用于场景：因果追踪（CT）和信息流分析。我们发现两者对于每种情况都会产生不同的结果。精确事实回忆和通用语言建模场景的结果证实了先前关于中范围 MLP 子层对于事实回忆的重要性的结论，而猜测和启发式结果表明最后一个标记位置 MLP 子层的关键作用。总之，我们为 LM 中的事实完成进行更广泛和更精细的研究提供了资源，并提供了对 LM 如何处理事实相关查询的更细致的理解的分析。

---

## 140. Machine Theory of Mind Needs Machine Validation

**类别**: `Findings`

**作者**: Adil Soubki, Owen Rambow

**ID**: 2025.findings-acl.951

**摘要(英文)**:
> In the last couple years, there has been a flood of interest in studying the extent to which language models (LMs) have a theory of mind (ToM) — the ability to ascribe mental states to themselves and others. The results provide an unclear picture of the current state of the art, with some finding near-human performance and others near-zero. To make sense of this landscape, we perform a survey of 16 recent studies aimed at measuring ToM in LMs and find that, while almost all perform checks for human identifiable issues, less than half do so for patterns only a machine might exploit. Among those that do perform such validation, which we call machine validation, none identify LMs to exceed human performance. We conclude that the datasets that show high LM performance on ToM tasks are easier than their peers, likely due to the presence of spurious patterns in the data, and we caution against building ToM benchmarks relying solely on human validation of the data.

**摘要(中文)**:
> 在过去的几年里，人们对研究语言模型（LM）在多大程度上具有心理理论（ToM）——将心理状态归因于自己和他人的能力——产生了浓厚的兴趣。结果提供了一幅当前技术水平的清晰图景，其中一些发现接近人类的表现，而另一些则接近于零。为了理解这一情况，我们对最近 16 项旨在测量 LM 中 ToM 的研究进行了调查，发现虽然几乎所有研究都对人类可识别的问题进行检查，但只有不到一半的研究针对只有机器可能利用的模式进行了检查。在那些执行此类验证（我们称之为机器验证）的机构中，没有一个机构认为 LM 能够超越人类的表现。我们得出的结论是，在 ToM 任务上表现出高 LM 性能的数据集比同类数据集更容易，这可能是由于数据中存在虚假模式，并且我们警告不要仅依赖人类对数据的验证来构建 ToM 基准。

---

## 141. Trick or Neat: Adversarial Ambiguity and Language Model Evaluation

**类别**: `Findings`

**作者**: Antonia Karamolegkou, Oliver Eberle, Phillip Rust, Carina Kauf, Anders Søgaard

**ID**: 2025.findings-acl.954

**摘要(英文)**:
> Detecting ambiguity is important for language understanding, including uncertainty estimation, humour detection, and processing garden path sentences. We assess language models’ sensitivity to ambiguity by introducing an adversarial ambiguity dataset that includes syntactic, lexical, and phonological ambiguities along with adversarial variations (e.g., word-order changes, synonym replacements, and random-based alterations). Our findings show that direct prompting fails to robustly identify ambiguity, while linear probes trained on model representations can decode ambiguity with high accuracy, sometimes exceeding 90%. Our results offer insights into the prompting paradigm and how language models encode ambiguity at different layers.

**摘要(中文)**:
> 检测歧义对于语言理解非常重要，包括不确定性估计、幽默检测和处理花园小径句子。我们通过引入对抗性歧义数据集来评估语言模型对歧义的敏感性，该数据集包括句法、词汇和语音歧义以及对抗性变化（例如，词序变化、同义词替换和基于随机的更改）。我们的研究结果表明，直接提示无法稳健地识别歧义，而基于模型表示训练的线性探针可以高精度解码歧义，有时超过 90%。我们的结果提供了对提示范式以及语言模型如何在不同层编码歧义的见解。

---

## 142. Natural Language Processing in Support of Evidence-based Medicine: A Scoping Review

**类别**: `Findings`

**作者**: Zihan Xu, Haotian Ma, Yihao Ding, Gongbo Zhang, Chunhua Weng, Yifan Peng

**ID**: 2025.findings-acl.1103

**摘要(英文)**:
> Evidence-based medicine (EBM) is at the forefront of modern healthcare, emphasizing the use of the best available scientific evidence to guide clinical decisions. Due to the sheer volume and rapid growth of medical literature and the high cost of curation, there is a critical need to investigate Natural Language Processing (NLP) methods to identify, appraise, synthesize, summarize, and disseminate evidence in EBM. This survey presents an in-depth review of 129 research studies on leveraging NLP for EBM, illustrating its pivotal role in enhancing clinical decision-making processes. The paper systematically explores how NLP supports the five fundamental steps of EBM—Ask, Acquire, Appraise, Apply, and Assess. The review not only identifies current limitations within the field but also proposes directions for future research, emphasizing the potential for NLP to revolutionize EBM by refining evidence extraction, evidence synthesis, appraisal, summarization, enhancing data comprehensibility, and facilitating a more efficient clinical workflow.

**摘要(中文)**:
> 循证医学 (EBM) 处于现代医疗保健的前沿，强调使用现有的最佳科学证据来指导临床决策。由于医学文献数量庞大、增长迅速，以及管理成本高昂，因此迫切需要研究自然语言处理 (NLP) 方法来识别、评估、综合、总结和传播循证医学中的证据。这项调查对 129 项利用 NLP 进行 EBM 的研究进行了深入回顾，说明了其在增强临床决策过程中的关键作用。本文系统地探讨了 NLP 如何支持 EBM 的五个基本步骤——询问、获取、评估、应用和评估。该综述不仅指出了该领域当前的局限性，还提出了未来的研究方向，强调 NLP 通过改进证据提取、证据合成、评估、总结、增强数据可理解性和促进更高效的临床工作流程来彻底改变 EBM 的潜力。

---

## 143. TicTac: Time-aware Supervised Fine-tuning for Automatic Text Dating

**类别**: `Findings`

**作者**: Han Ren, Minna Peng

**ID**: 2025.findings-acl.1129

**摘要(英文)**:
> Pre-trained langauge models have achieved success in many natural language processing tasks, whereas they are trapped by the time-agnostic setting, impacting the performance in automatic text dating. This paper introduces TicTac, a supervised fine-tuning model for automatic text dating. Unlike the existing models that always ignore the temporal relatedness of documents, TicTac has the ability to learn temporal semantic information, which is helpful for capturing the temporal implications over long-time span corpora. As a fine-tuning framework, TicTac employs a contrastive learning-based approach to model two types of temporal relations of diachronic documents. TicTac also adopts a metric learning approach, where the temporal distance between a historical text and its category label is estimated, which benefits to learn temporal semantic information on texts with temporal ordering. Experiments on two diachronic corpora show that our model effectively captures the temporal semantic information and outperforms state-of-the-art baselines.

**摘要(中文)**:
> 预训练的语言模型在许多自然语言处理任务中取得了成功，但它们受到与时间无关的设置的限制，影响了自动文本约会的性能。本文介绍了 TicTac，一种用于自动文本约会的监督微调模型。与总是忽略文档时间相关性的现有模型不同，TicTac 具有学习时间语义信息的能力，这有助于捕获长时间跨度语料库的时间含义。作为一个微调框架，TicTac 采用基于对比学习的方法来对历时文档的两种时间关系进行建模。 TicTac还采用了度量学习方法，估计历史文本与其类别标签之间的时间距离，这有利于学习具有时间顺序的文本的时间语义信息。对两个历时语料库的实验表明，我们的模型有效地捕获了时间语义信息，并且优于最先进的基线。

---

## 144. Unsupervised Morphological Tree Tokenizer

**类别**: `Findings`

**作者**: Qingyang Zhu, Xiang Hu, Pengyu Ji, Wei Wu, Kewei Tu

**ID**: 2025.findings-acl.1146

**摘要(英文)**:
> As a cornerstone in language modeling, tokenization involves segmenting text inputs into pre-defined atomic units. Conventional statistical tokenizers often disrupt constituent boundaries within words, thereby corrupting semantic information. To address this drawback, we introduce morphological structure guidance to tokenization and propose a deep model to induce character-level structures of words. Specifically, the deep model jointly encodes internal structures and representations of words with a mechanism named MorphOverriding to ensure the indecomposability of morphemes. By training the model with self-supervised objectives, our method is capable of inducing character-level structures that align with morphological rules without annotated training data. Based on the induced structures, our algorithm tokenizes words through vocabulary matching in a top-down manner. Empirical results indicate that the proposed method effectively retains complete morphemes and outperforms widely adopted methods such as BPE and WordPiece on both morphological segmentation tasks and language modeling tasks.

**摘要(中文)**:
> 作为语言建模的基石，标记化涉及将文本输入分段为预定义的原子单元。传统的统计标记器经常破坏单词内的组成边界，从而破坏语义信息。为了解决这个缺点，我们引入了词法结构指导来标记化，并提出了一种深度模型来诱导单词的字符级结构。具体来说，深度模型通过名为 MorphOverriding 的机制联合编码单词的内部结构和表示，以确保语素的不可分解性。通过具有自我监督目标的模型训练，我们的方法能够在没有注释的训练数据的情况下引入与形态规则一致的字符级结构。基于归纳结构，我们的算法通过词汇匹配以自上而下的方式对单词进行标记。实证结果表明，该方法有效地保留了完整的语素，并且在形态分割任务和语言建模任务上均优于广泛采用的 BPE 和 WordPiece 等方法。

---

## 145. Splintering Nonconcatenative Languages for Better Tokenization

**类别**: `Findings`

**作者**: Bar Gazit, Shaltiel Shmidman, Avi Shmidman, Yuval Pinter

**ID**: 2025.findings-acl.1151

**摘要(英文)**:
> Common subword tokenization algorithms like BPE and UnigramLM assume that text can be split into meaningful units by concatenative measures alone. This is not true for languages such as Hebrew and Arabic, where morphology is encoded in root-template patterns, or Malay and Georgian, where split affixes are common. We present SPLINTER, a pre-processing step which rearranges text into a linear form that better represents such nonconcatenative morphologies, enabling meaningful contiguous segments to be found by the tokenizer. We demonstrate SPLINTER’s merit using both intrinsic measures evaluating token vocabularies in Hebrew, Arabic, and Malay; as well as on downstream tasks using BERT-architecture models trained for Hebrew.

**摘要(中文)**:
> BPE 和 UnigramLM 等常见的子词标记化算法假设文本可以仅通过串联措施分割成有意义的单元。对于希伯来语和阿拉伯语等语言而言，情况并非如此，这些语言的形态是以根模板模式编码的，或者马来语和格鲁吉亚语，其中分裂词缀很常见。我们提出了 SPLINTER，这是一个预处理步骤，它将文本重新排列成线性形式，以更好地表示这种非连接形态，从而使分词器能够找到有意义的连续片段。我们使用评估希伯来语、阿拉伯语和马来语标记词汇的内在措施来证明 SPLINTER 的优点；以及使用针对希伯来语训练的 BERT 架构模型执行下游任务。

---

## 146. Exploiting Phonetics and Glyph Representation at Radical-level for ClassicalChinese Understanding

**类别**: `Findings`

**作者**: Junyi Xiang, Maofu Liu

**ID**: 2025.findings-acl.1173

**摘要(英文)**:
> The diachronic gap between classical and modern Chinese arises from century-scale language evolution through cumulative changes in phonological, syntactic, and lexical systems, resulting in substantial semantic variation that poses significant challenges for the computational modeling of historical texts. Current methods always enhance classical Chinese understanding of pre-trained language models through corpus pre-training or semantic integration. However, they overlook the synergistic relationship between phonetic and glyph features within Chinese characters, which is a critical factor in deciphering characters’ semantics. In this paper, we propose RPGCM, a radical-level phonetics and glyph representation enhanced Chinese model, with powerful fine-grained semantic modeling capabilities. Our model establishes robust contextualized representations through: (1) rules-based radical decomposition and bype pair encoder (BPE) based radical aggregated for structural pattern recognition, (2) phonetic-glyph semantic mapping, and (3) dynamic semantic fusion. Experimental results on CCMRC, WYWEB, and C³Bench benchmarks demonstrate the RPGCM’s superiority and validate that explicit radical-level modeling effectively mitigates semantic variations.

**摘要(中文)**:
> 古典汉语和现代汉语之间的历时差距是由于语音、句法和词汇系统的累积变化而产生的百年语言演变，导致了巨大的语义变化，这对历史文本的计算建模提出了重大挑战。目前的方法总是通过语料库预训练或语义集成来增强对预训练语言模型的古典汉语理解。然而，他们忽视了汉字中语音和字形特征之间的协同关系，这是破译汉字语义的关键因素。在本文中，我们提出了RPGCM，一种部首级语音和字形表示增强的中文模型，具有强大的细粒度语义建模能力。我们的模型通过以下方式建立强大的上下文表示：（1）基于规则的部首分解和基于字节对编码器（BPE）的部首聚合，用于结构模式识别，（2）语音-字形语义映射，以及（3）动态语义融合。 CCMRC、WYWEB 和 C³Bench 基准测试的实验结果证明了 RPGCM 的优越性，并验证了显式部首级建模可以有效减轻语义变化。

---

## 147. Structured Pruning for Diverse Best-of-NReasoning Optimization

**类别**: `Findings`

**作者**: Hieu Trung Nguyen, Bao Nguyen, Viet Anh Nguyen

**ID**: 2025.findings-acl.1225

**摘要(英文)**:
> Model pruning in transformer-based language models, traditionally seen as a means of computational savings, can enhance the model’s reasoning capabilities. In this work, we uncover the surprising phenomenon that the selective pruning of certain attention heads leads to improvements in reasoning performance, particularly on challenging tasks. Motivated by this observation, we propose SPRINT, a novel contrastive learning framework that dynamically selects the optimal head and layer to prune during inference. By aligning question embeddings with head embeddings, our approach identifies those pruned-head configurations that result in more accurate reasoning. Extensive experiments on the MATH dataset demonstrate that our method significantly outperforms traditional best-of-Nand random head selection strategies on the MATH500 and GSM8K datasets.

**摘要(中文)**:
> 基于 Transformer 的语言模型中的模型剪枝传统上被视为节省计算的一种手段，可以增强模型的推理能力。在这项工作中，我们发现了一个令人惊讶的现象，即选择性修剪某些注意力头会导致推理性能的提高，特别是在具有挑战性的任务上。受这一观察的启发，我们提出了 SPRINT，这是一种新颖的对比学习框架，可以在推理过程中动态选择要修剪的最佳头和层。通过将问题嵌入与头部嵌入对齐，我们的方法可以识别那些导致更准确推理的修剪头部配置。对 MATH 数据集的大量实验表明，我们的方法在 MATH500 和 GSM8K 数据集上显着优于传统的 best-of-Nand 随机头选择策略。

---

## 148. Standard Quality Criteria Derived from CurrentNLPEvaluations for Guiding Evaluation Design and Grounding Comparability andAICompliance Assessments

**类别**: `Findings`

**作者**: Anya Belz, Simon Mille, Craig Thomson

**ID**: 2025.findings-acl.1370

**摘要(英文)**:
> Research shows that two evaluation experiments reporting results for the same quality criterion name (e.g. Fluency) do not necessarily evaluate the same aspect of quality. Not knowing when two evaluations are comparable in this sense means we currently lack the ability to draw conclusions based on multiple independently conducted evaluations. It is hard to see how this issue can be fully addressed other than by the creation of a standard set of quality criterion names and definitions that the evaluations in use in NLP can be grounded in. Taking a descriptivist approach, the QCET Quality Criteria for Evaluation Taxonomy derives a standard set of 114 quality criterion names and definitions from three surveys of a combined total of 933 evaluation experiments in NLP, and structures them into a reference taxonomy. We present QCET and its uses in (i) establishing comparability of existing evaluations, (ii) guiding the design of new evaluations, and (iii) assessing regulation compliance.

**摘要(中文)**:
> 研究表明，报告相同质量标准名称（例如流畅性）结果的两个评估实验不一定评估相同的质量方面。从这个意义上讲，不知道两项评估何时具有可比性意味着我们目前缺乏根据多项独立进行的评估得出结论的能力。除了创建一套标准的质量标准名称和定义（NLP 中使用的评估可以以此为基础）之外，很难看出如何才能完全解决这个问题。QCET 评估分类质量标准采用描述主义方法，从 NLP 中总共 933 个评估实验的三项调查中得出了一套标准的 114 个质量标准名称和定义，并将它们构建为参考分类法。我们介绍 QCET 及其在 (i) 建立现有评估的可比性，(ii) 指导新评估的设计，以及 (iii) 评估法规遵从性方面的用途。

---

## 149. Dynamic Task Vector Grouping for Efficient Multi-Task Prompt Tuning

**类别**: `Findings`

**作者**: Peiyi Zhang, Richong Zhang, Zhijie Nie, Ziqiao Wang

**ID**: 2025.findings-acl.1374

**摘要(英文)**:
> Multi-task prompt tuning utilizes multiple high-resource source tasks to improve performance on low-source target tasks. Existing approaches transfer the soft prompt trained by combining all source tasks or a single “high-similar” source task one-time-only. However, we find that the optimal transfer performance often comes from a combination of source tasks, which is neither one nor all. Further, we find that the similarity between source and target tasks also changes dynamically during fine-tuning after transfering, making similarity calculation in the initiation stage inadequate. To address these issues, we propose a method called Dynamic Task Vector Grouping (DTVG), whose core ideas contain (1) measuring the task similarity with task vectors instead of soft prompt, (2) grouping the optimal source task combination based on two metrics:target similarityandknowledge consistency; (3) dynamically updating the combination in each iteration step. Extensive experiments on the 26 NLP datasets under different settings demonstrate that DTVG effectively groups similar source tasks while reducing negative transfer, achieving the start-of-art performance.

**摘要(中文)**:
> 多任务提示调优利用多个高资源源任务来提高低资源目标任务的性能。现有方法传输通过组合所有源任务或一次性单个“高相似”源任务训练的软提示。然而，我们发现最佳的传输性能往往来自于源任务的组合，它既不是一个也不是全部。此外，我们发现源任务和目标任务之间的相似度在传输后的微调过程中也会动态变化，使得启动阶段的相似度计算不足。为了解决这些问题，我们提出了一种称为动态任务向量分组（DTVG）的方法，其核心思想包括（1）用任务向量而不是软提示来衡量任务相似度，（2）基于目标相似度和知识一致性两个指标对最佳源任务组合进行分组； (3)在每个迭代步骤中动态更新组合。在不同设置下的 26 个 NLP 数据集上进行的大量实验表明，DTVG 有效地将相似的源任务分组，同时减少负迁移，实现了最先进的性能。

---

## 150. Yankari: MonolingualYoruba Dataset

**类别**: `Workshop-AfricaNLP`

**作者**: Maro Akpobi

**ID**: 2025.africanlp-1.1

**摘要(英文)**:
> This paper presents Yankari, a large-scale monolingual dataset for the Yoruba language, aimed at addressing the critical gap in Natural Language Processing (NLP) resources for this important West African language. Despite being spoken by over 30 million people, Yoruba has been severely underrepresented in NLP research and applications. We detail our methodology for creating this dataset, which includes careful source selection, automated quality control, and rigorous data cleaning processes. The Yankari dataset comprises 51,407 documents from 13 diverse sources, totaling over 30 million tokens. Our approach focuses on ethical data collection practices, avoiding problematic sources and addressing issues prevalent in existing datasets. We provide thorough automated evaluations of the dataset, demonstrating its quality compared to existing resources. The Yankari dataset represents a significant advancement in Yoruba language resources, providing a foundation for developing more accurate NLP models, supporting comparative linguistic studies, and contributing to the digital accessibility of the Yoruba language.

**摘要(中文)**:
> 本文介绍了 Yankari，这是一个约鲁巴语的大型单语数据集，旨在解决这种重要的西非语言自然语言处理 (NLP) 资源的关键差距。尽管有超过 3000 万人使用约鲁巴语，但它在 NLP 研究和应用中的代表性严重不足。我们详细介绍了创建此数据集的方法，其中包括仔细的来源选择、自动化质量控制和严格的数据清理流程。 Yankari 数据集包含来自 13 个不同来源的 51,407 个文档，总计超过 3000 万个令牌。我们的方法侧重于道德数据收集实践，避免有问题的来源并解决现有数据集中普遍存在的问题。我们对数据集进行彻底的自动化评估，证明其与现有资源相比的质量。 Yankari 数据集代表了约鲁巴语资源的重大进步，为开发更准确的 NLP 模型、支持比较语言研究并为约鲁巴语的数字可访问性做出了贡献。

---

## 151. Designing and Contextualising Probes forAfrican Languages

**类别**: `Workshop-AfricaNLP`

**作者**: Wisdom Aduah, Francois Meyer

**ID**: 2025.africanlp-1.7

**摘要(英文)**:
> Pretrained language models (PLMs) for African languages are continually improving, but the reasons behind these advances remain unclear. This paper presents the first systematic investigation into how knowledge about African languages is encoded in PLMs. We train layer-wise probes for six typologically diverse African languages to analyse how linguistic features are distributed. We also design control tasks, a way to interpret probe performance, for the MasakhaPOS dataset. We find PLMs adapted for African languages to encode more linguistic information about target languages than massively multilingual PLMs. Our results reaffirm previous findings that token-level syntactic information concentrates in middle-to-last layers, while sentence-level semantic information is distributed across all layers. Through control tasks and probing baselines, we confirm that performance reflects the internal knowledge of PLMs rather than probe memorisation. Our study applies established interpretability techniques to African-language PLMs. In doing so, we highlight the internal mechanisms underlying the success of strategies like active learning and multilingual adaptation.

**摘要(中文)**:
> 非洲语言的预训练语言模型 (PLM) 正在不断改进，但这些进步背后的原因仍不清楚。本文首次对非洲语言知识如何在 PLM 中编码进行系统调查。我们针对六种类型不同的非洲语言训练分层探针，以分析语言特征的分布情况。我们还为 MasakhaPOS 数据集设计了控制任务，这是一种解释探针性能的方法。我们发现，与大规模多语言 PLM 相比，适用于非洲语言的 PLM 能够编码更多有关目标语言的语言信息。我们的结果重申了之前的发现，即标记级句法信息集中在中到最后层，而句子级语义信息分布在所有层中。通过控制任务和探测基线，我们确认性能反映了 PLM 的内部知识，而不是探测记忆。我们的研究将已建立的可解释性技术应用于非洲语言 PLM。在此过程中，我们强调了主动学习和多语言适应等策略成功的内部机制。

---

## 152. Neural Morphological Tagging for Nguni Languages

**类别**: `Workshop-AfricaNLP`

**作者**: Cael Marquard, Simbarashe Mawere, Francois Meyer

**ID**: 2025.africanlp-1.31

**摘要(英文)**:
> Morphological parsing is the task of decomposing words into morphemes, the smallest units of meaning in a language, and labelling their grammatical roles. It is a particularly challenging task for agglutinative languages, such as the Nguni languages of South Africa, which construct words by concatenating multiple morphemes. A morphological parsing system can be framed as a pipeline with two separate components, a segmenter followed by a tagger. This paper investigates the use of neural methods to build morphological taggers for the four Nguni languages. We compare two classes of approaches: training neural sequence labellers (LSTMs and neural CRFs) from scratch and finetuning pretrained language models. We compare performance across these two categories, as well as to a traditional rule-based morphological parser. Neural taggers comfortably outperform the rule-based baseline and models trained from scratch tend to outperform pretrained models. We also compare parsing results across different upstream segmenters and with varying linguistic input features. Our findings confirm the viability of employing neural taggers based on pre-existing morphological segmenters for the Nguni languages.

**摘要(中文)**:
> 形态解析是将单词分解为语素（语言中最小的意义单位）并标记其语法角色的任务。对于粘着语言来说，这是一项特别具有挑战性的任务，例如南非的恩古尼语言，它们通过连接多个语素来构造单词。形态解析系统可以被构建为具有两个独立组件的管道，一个分段器，后面跟着一个标记器。本文研究了使用神经方法为四种恩古尼语言构建形态标记器。我们比较了两类方法：从头开始训练神经序列标记器（LSTM 和神经 CRF）和微调预训练语言模型。我们比较了这两个类别以及传统的基于规则的形态解析器的性能。神经标注器轻松优于基于规则的基线，并且从头开始训练的模型往往优于预训练的模型。我们还比较了不同上游分段器和不同语言输入特征的解析结果。我们的研究结果证实了使用基于恩古尼语言预先存在的形态分割器的神经标记器的可行性。

---

## 153. Investigating Subjective Factors of Argument Strength: Storytelling, Emotions, and Hedging

**类别**: `Workshop-ArgMining`

**作者**: Carlotta Quensel, Neele Falk, Gabriella Lapesa

**ID**: 2025.argmining-1.12

**摘要(英文)**:
> In assessing argument strength, the notions of what makes a good argument are manifold. With the broader trend towards treating subjectivity as an asset and not a problem in NLP, new dimensions of argument quality are studied. Although studies on individual subjective features like personal stories exist, there is a lack of large-scale analyses of the relation between these features and argument strength. To address this gap, we conduct regression analysis to quantify the impact of subjective factors – emotions, storytelling, and hedging-on two standard datasets annotated for objective argument quality and subjective persuasion. As such, our contribution is twofold: at the level of contributed resources, as there are no datasets annotated with all studied dimensions, this work compares and evaluates automated annotation methods for each subjective feature. At the level of novel insights, our regression analysis uncovers different patterns of impact of subjective features on the two facets of argument strength encoded in the datasets. Our results show that storytelling and hedging have contrasting effects on objective and subjective argument quality, while the influence of emotions depends on their rhetoric utilization rather than the domain.

**摘要(中文)**:
> 在评估论证强度时，构成良好论证的概念是多种多样的。随着 NLP 中将主观性视为资产而不是问题的更广泛趋势，人们开始研究论证质量的新维度。尽管存在对个人主观特征（例如个人故事）的研究，但缺乏对这些特征与论证强度之间关系的大规模分析。为了解决这一差距，我们进行回归分析，以量化主观因素（情绪、讲故事和对冲）的影响，这两个标准数据集注释了客观论证质量和主观说服力。因此，我们的贡献是双重的：在贡献资源的层面上，由于没有用所有研究维度注释的数据集，这项工作比较和评估每个主观特征的自动注释方法。在新颖见解的层面上，我们的回归分析揭示了主观特征对数据集中编码的论证强度两个方面的不同影响模式。我们的结果表明，讲故事和对冲对客观和主观论证质量具有相反的影响，而情绪的影响取决于修辞的运用而不是领域。

---

## 154. Multi-Class versus Means-End: Assessing Classification Approaches for Argument Patterns

**类别**: `Workshop-ArgMining`

**作者**: Maximilian Heinrich, Khalid Al Khatib, Benno Stein

**ID**: 2025.argmining-1.19

**摘要(英文)**:
> In the study of argumentation, the schemes introduced by Walton et al. (2008) represent a significant advancement in understanding and analyzing the structure and function of arguments. Walton’s framework is particularly valuable for computational reasoning, as it facilitates the identification of argument patterns and the reconstruction of enthymemes. Despite its practical utility, automatically identifying these schemes remains a challenging problem. To aid human annotators, Visser et al. (2021) developed a decision tree for scheme classification. Building on this foundation, we propose a means-end approach to argument scheme classification that systematically leverages expert knowledge—encoded in a decision tree—to guide language models through a complex classification task. We assess the effectiveness of the means-end approach by conducting a comprehensive comparison with a standard multi-class approach across two datasets, applying both prompting and supervised learning methods to each approach. Our results indicate that the means-end approach, when combined with supervised learning, achieves scores only slightly lower than those of the multi-class classification approach. At the same time, the means-end approach enhances explainability by identifying the specific steps in the decision tree that pose the greatest challenges for each scheme—offering valuable insights for refining the overall means-end classification process.

**摘要(中文)**:
> 在论证研究中，沃尔顿等人提出的方案。 （2008）代表了理解和分析论证的结构和功能方面的重大进步。沃尔顿的框架对于计算推理特别有价值，因为它有助于识别论证模式和重建推理素。尽管它具有实用性，但自动识别这些方案仍然是一个具有挑战性的问题。为了帮助人类注释者，Visser 等人。 (2021) 开发了一种用于方案分类的决策树。在此基础上，我们提出了一种论证方案分类的手段-结束方法，该方法系统地利用编码在决策树中的专家知识来指导语言模型完成复杂的分类任务。我们通过在两个数据集上与标准多类方法进行全面比较，并对每种方法应用提示和监督学习方法，来评估手段-最终方法的有效性。我们的结果表明，当手段-末端方法与监督学习相结合时，其得分仅略低于多类分类方法。同时，手段-目的方法通过识别决策树中对每个方案构成最大挑战的具体步骤来增强可解释性，为改进整个手段-目的分类过程提供有价值的见解。

---

## 155. The Need for Truly Graded Lexical Complexity Prediction

**类别**: `Workshop-BEA`

**作者**: David Alfter

**ID**: 2025.bea-1.25

**摘要(英文)**:
> Recent trends in NLP have shifted towards modeling lexical complexity as a continuous value, but practical implementations often remain binary. This opinion piece argues for the importance of truly graded lexical complexity prediction, particularly in language learning. We examine the evolution of lexical complexity modeling, highlighting the “data bottleneck” as a key obstacle. Overcoming this challenge can lead to significant benefits, such as enhanced personalization in language learning and improved text simplification. We call for a concerted effort from the research community to create high-quality, graded complexity datasets and to develop methods that fully leverage continuous complexity modeling, while addressing ethical considerations. By fully embracing the continuous nature of lexical complexity, we can develop more effective, inclusive, and personalized language technologies.

**摘要(中文)**:
> NLP 的最新趋势已转向将词汇复杂性建模为连续值，但实际实现通常仍然是二进制的。这篇评论文章主张真正分级的词汇复杂性预测的重要性，特别是在语言学习中。我们研究了词汇复杂性建模的演变，强调“数据瓶颈”是一个关键障碍。克服这一挑战可以带来显着的好处，例如增强语言学习的个性化和改进文本简化。我们呼吁研究界共同努力，创建高质量、分级的复杂性数据集，并开发充分利用连续复杂性建模的方法，同时解决伦理问题。通过充分拥抱词汇复杂性的连续性，我们可以开发更有效、更具包容性和个性化的语言技术。

---

## 156. Quasi-symbolic Semantic Geometry over Transformer-based VariationalAutoEncoder

**类别**: `Workshop-CoNLL`

**作者**: Yingji Zhang, Danilo Carvalho, Andre Freitas

**ID**: 2025.conll-1.2

**摘要(英文)**:
> Formal/symbolic semantics can provide canonical, rigid controllability and interpretability to sentence representations due to theirlocalisationorcompositionproperty. How can we deliver such property to the current distributional sentence representations to better control and interpret the generation of language models (LMs)? In this work, we theoretically frame the sentence semantics as the composition ofsemantic role - word contentfeatures and propose the formal semantic geometrical framework. To inject such geometry into Transformer-based LMs (i.e. GPT2), we deploy a supervised Transformer-based Variational AutoEncoder, where the sentence generation can be manipulated and explained over low-dimensional latent Gaussian space. In addition, we propose a new probing algorithm to guide the movement of sentence vectors over such geometry. Experimental results reveal that the formal semantic geometry can potentially deliver better control and interpretation to sentence generation.

**摘要(中文)**:
> 由于其定位或组合属性，形式/符号语义可以为句子表示提供规范的、严格的可控性和可解释性。我们如何将这样的属性传递给当前的分布式句子表示，以更好地控制和解释语言模型（LM）的生成？在这项工作中，我们从理论上将句子语义框架为语义角色-单词内容特征的组合，并提出了形式语义几何框架。为了将这种几何形状注入基于 Transformer 的 LM（即 GPT2），我们部署了一个基于 Transformer 的监督变分自动编码器，其中可以在低维潜在高斯空间上操纵和解释句子生成。此外，我们提出了一种新的探测算法来指导句子向量在这种几何形状上的移动。实验结果表明，形式语义几何可以为句子生成提供更好的控制和解释。

---

## 157. Derivational Probing: Unveiling the Layer-wise Derivation of Syntactic Structures in Neural Language Models

**类别**: `Workshop-CoNLL`

**作者**: Taiga Someya, Ryo Yoshida, Hitomi Yanaka, Yohei Oseki

**ID**: 2025.conll-1.7

**摘要(英文)**:
> Recent work has demonstrated that neural language models encode syntactic structures in their internal *representations*, yet the *derivations* by which these structures are constructed across layers remain poorly understood. In this paper, we propose *Derivational Probing* to investigate how micro-syntactic structures (e.g., subject noun phrases) and macro-syntactic structures (e.g., the relationship between the root verbs and their direct dependents) are constructed as word embeddings propagate upward across layers.Our experiments on BERT reveal a clear bottom-up derivation: micro-syntactic structures emerge in lower layers and are gradually integrated into a coherent macro-syntactic structure in higher layers.Furthermore, a targeted evaluation on subject-verb number agreement shows that the timing of constructing macro-syntactic structures is critical for downstream performance, suggesting an optimal timing for integrating global syntactic information.

**摘要(中文)**:
> 最近的工作表明，神经语言模型在其内部“表示”中编码句法结构，但跨层构建这些结构的“推导”仍然知之甚少。在本文中，我们提出“派生探索”来研究微观句法结构（例如，主语名词短语）和宏观句法结构（例如，词根动词及其直接从属关系）是如何构建为词嵌入跨层向上传播的。我们在 BERT 上的实验揭示了一个清晰的自下而上的推导：微观句法结构出现在较低层中，并逐渐集成为连贯的宏观句法结构。此外，对主谓数一致性的有针对性的评估表明，构建宏观句法结构的时机对于下游性能至关重要，这表明整合全局句法信息的最佳时机。

---

## 158. Polarity inversion operators inPLM

**类别**: `Workshop-CoNLL`

**作者**: David Kletz, Pascal Amsili, Marie Candito

**ID**: 2025.conll-1.20

**摘要(英文)**:
> From a linguistic perspective, negation is a unique and inherently compositional operator. In this study, we investigate whether the bert-large-cased Pretrained Language Model (PLM) properly encodes this compositional aspect of negation when embedding a token that falls within the scope of negation.To explore this, we train two external Multi-Layer Perceptrons to modify contextual embeddings in a controlled manner. The goal is to reverse the polarity information encoded in the embedding while preserving all other token-related information. The first MLP, called the Negator, transforms a negative polarity into a positive one, while the second, the Affirmator, performs the reverse transformation.We then conduct a series of evaluations to assess the effectiveness of these operators. Our results indicate that while the Negator/Affirmator is functional, it only partially simulates the negation operator. Specifically, applying it recursively does not allow us to recover the original polarity, suggesting an incomplete representation of negation within the PLM’s embeddings.In addition, a downstream evaluation on the Negated LAMA dataset reveals that the modifications introduced by the Negator/Affirmator lead to a slight improvement in the model’s ability to account for negation in its predictions. However, applying the Negator/Affirmator recursively results in degraded representations, further reinforcing the idea that negation is not fully compositional within PLM embeddings.

**摘要(中文)**:
> 从语言学的角度来看，否定是一种独特的、本质上的组合运算符。在本研究中，我们研究了 bert-large-cased 预训练语言模型 (PLM) 在嵌入属于否定范围内的标记时是否正确编码了否定的这种组合方面。为了探索这一点，我们训练两个外部多层感知器以受控方式修改上下文嵌入。目标是反转嵌入中编码的极性信息，同时保留所有其他与令牌相关的信息。第一个 MLP 称为否定器，将负极性转换为正极性，而第二个 MLP 称为肯定器，执行相反的转换。然后我们进行一系列评估来评估这些运算符的有效性。我们的结果表明，虽然否定器/肯定器是有效的，但它仅部分模拟否定运算符。具体来说，递归应用它不允许我们恢复原始极性，这表明 PLM 嵌入中否定的表示不完整。此外，对否定 LAMA 数据集的下游评估表明，否定器/肯定器引入的修改导致模型在其预测中解释否定的能力略有提高。然而，递归地应用否定器/肯定器会导致表示性能下降，进一步强化了否定在 PLM 嵌入中并不完全组合的观点。

---

## 159. Construction Identification and Disambiguation UsingBERT: A Case Study ofNPN

**类别**: `Workshop-CoNLL`

**作者**: Wesley Scivetti, Nathan Schneider

**ID**: 2025.conll-1.24

**摘要(英文)**:
> Construction Grammar hypothesizes that knowledge of a language consists chiefly of knowledge of form–meaning pairs (“constructions”) that include vocabulary, general grammar rules, and even idiosyncratic patterns. Recent work has shown that transformer language models represent at least some constructional patterns, including ones where the construction is rare overall. In this work, we probe BERT’s representation of the form and meaning of a minor construction of English, the NPN (noun–preposition–noun) construction—exhibited in such expressions asface to faceandday to day—which is known to be polysemous. We construct a benchmark dataset of semantically annotated corpus instances (including distractors that superficially resemble the construction). With this dataset, we train and evaluate probing classifiers. They achieve decent discrimination of the construction from distractors, as well as sense disambiguation among true instances of the construction, revealing that BERT embeddings carry indications of the construction’s semantics. Moreover, artificially permuting the word order of true construction instances causes them to be rejected, indicating sensitivity to matters of form. We conclude that BERT does latently encode at least some knowledge of the NPN construction going beyond a surface syntactic pattern and lexical cues.

**摘要(中文)**:
> 构式语法假设语言知识主要由形式-意义对（“构式”）的知识组成，其中包括词汇、一般语法规则，甚至特殊模式。最近的工作表明，Transformer 语言模型至少代表了一些构造模式，包括总体上构造很少的模式。在这项工作中，我们探讨了 BERT 对英语小结构 NPN（名词-介词-名词）结构的形式和含义的表示——以 Face to Face 和 Day to Day 等表达形式展示——众所周知，这种结构是多义的。我们构建了语义注释语料库实例的基准数据集（包括表面上类似于构造的干扰项）。利用这个数据集，我们训练和评估探测分类器。他们实现了对结构与干扰项的良好区分，以及结构的真实实例之间的意义消歧，揭示了 BERT 嵌入带有结构语义的指示。此外，人为地排列真实构造实例的词序会导致它们被拒绝，这表明对形式问题的敏感性。我们得出的结论是，BERT 确实潜在地编码了至少一些 NPN 结构的知识，超越了表面句法模式和词汇线索。

---

## 160. Timestep Embeddings Trigger Collapse in Diffusion Text Generation

**类别**: `Workshop-CoNLL`

**作者**: Ryota Nosaka, Takuya Matsuzaki

**ID**: 2025.conll-1.26

**摘要(英文)**:
> Diffusion models have achieved remarkable success in various generative tasks, particularly in image and audio synthesis, which work by iteratively refining random noise into realistic data. Recent studies have highlighted the potential of diffusion models for text generation, but several challenges remain unresolved. One significant issue is that the model begins to degrade a previous sample rather than improve it after a certain timestep in the generation process, resulting in broken text. In this paper, we reveal that timestep embeddings are a principal cause of the collapse problem by analyzing their interactions with word embeddings. Further, we propose two key methods: (a) a simple lightweight word embedding technique that enhances model analyzability as well as learning efficiency; (b) a novel regularization on both word and timestep embeddings. Experimental results demonstrate that our approach effectively mitigates the collapse problem and can lead to a considerable improvement in the quality of generated text.

**摘要(中文)**:
> 扩散模型在各种生成任务中取得了显着的成功，特别是在图像和音频合成方面，其工作原理是将随机噪声迭代地细化为真实数据。最近的研究强调了扩散模型在文本生成方面的潜力，但仍有一些挑战尚未解决。一个重要的问题是，模型在生成过程中的某个时间步长之后开始降低先前样本的质量，而不是对其进行改进，从而导致文本损坏。在本文中，我们通过分析时间步嵌入与词嵌入的相互作用，揭示了时间步嵌入是崩溃问题的主要原因。此外，我们提出了两种关键方法：（a）一种简单的轻量级词嵌入技术，可以增强模型的可分析性和学习效率； (b) 对词和时间步嵌入的新颖正则化。实验结果表明，我们的方法有效地缓解了崩溃问题，并且可以显着提高生成文本的质量。

---

## 161. Investigating Psychometric Predictive Power of Syntactic Attention

**类别**: `Workshop-CoNLL`

**作者**: Ryo Yoshida, Yushi Sugimoto, Yohei Oseki

**ID**: 2025.conll-1.27

**摘要(英文)**:
> In computational psycholinguistics, Merkx and Frank (2021) demonstrated that surprisal values from Transformers exhibit a closer fit to measures of human reading effort than those from Recurrent Neural Networks (RNNs), suggesting that Transformers’ attention mechanisms may capture cue-based retrieval-like operations in human sentence processing. Meanwhile, explicit integration of syntactic structures has been shown to improve language models’ ability to model human sentence processing—for example, Hale et al. (2018) demonstrated that Recurrent Neural Network Grammars (RNNGs), which integrate RNNs with explicit syntactic structures, account for human brain activities that vanilla RNNs cannot capture. In this paper, we investigate the psychometric predictive power of Composition Attention Grammars (CAGs), which integrate Transformers with explicit syntactic structures, to test whether they provide a better fit to human reading times than both vanilla Transformers and RNNGs. We hypothesized that CAGs’ syntactic attention mechanisms capture cue-based retrieval-like operations over syntactic memory representations—operations that may be involved in human sentence processing. The results of our strictly controlled experiments demonstrate that CAGs outperformed vanilla Transformers and RNNGs, suggesting that the syntactic attention mechanisms of CAGs may serve as a mechanistic implementation of cue-based retrieval from syntactic memory.

**摘要(中文)**:
> 在计算心理语言学中，Merkx 和 Frank（2021）证明，与循环神经网络（RNN）相比，变形金刚的惊喜值更适合人类阅读努力的测量，这表明变形金刚的注意力机制可能会捕获人类句子处理中基于线索的类似检索的操作。同时，句法结构的显式集成已被证明可以提高语言模型模拟人类句子处理的能力——例如，Hale 等人。 (2018) 证明了循环神经网络语法 (RNNG) 将 RNN 与显式句法结构相结合，可以解释普通 RNN 无法捕获的人脑活动。在本文中，我们研究了组合注意力语法 (CAG) 的心理测量预测能力，它将 Transformer 与显式句法结构相结合，以测试它们是否比普通 Transformers 和 RNNG 更适合人类阅读时间。我们假设 CAG 的句法注意机制在句法记忆表示上捕获基于线索的类似检索操作，这些操作可能涉及人类句子处理。我们严格控制的实验结果表明，CAG 的性能优于普通 Transformers 和 RNNG，这表明 CAG 的句法注意机制可以作为基于线索的句法记忆检索的机械实现。

---

## 162. Is Incremental Structure Prediction Process Universal across Languages?: Revisiting Parsing Strategy through Speculation

**类别**: `Workshop-CoNLL`

**作者**: Taiga Ishii, Yusuke Miyao

**ID**: 2025.conll-1.29

**摘要(英文)**:
> While natural language is processed incrementally, it is unclear whether the syntactic structure prediction process is universal across languages or language-specific. This study investigates this question by revisiting parsing strategies of syntactic language models that incrementally predict both the next token and the associated syntactic structure. Unlike previous studies that have focused on a few strategies, we examine a wide range of strategies by introducing different parameterizations of “speculation”, which quantifies the degree to which a model predicts syntactic structure before encountering the corresponding tokens. The experiments with 10 typologically diverse languages reveal that the optimal strategy differs depending on the language and the beam size.

**摘要(中文)**:
> 虽然自然语言是增量处理的，但尚不清楚句法结构预测过程是跨语言通用的还是特定于语言的。本研究通过重新审视句法语言模型的解析策略来研究这个问题，这些策略逐步预测下一个标记和相关的句法结构。与之前专注于几种策略的研究不同，我们通过引入不同的“推测”参数化来检查广泛的策略，“推测”量化了模型在遇到相应标记之前预测句法结构的程度。对 10 种类型不同的语言进行的实验表明，最佳策略根据语言和波束大小的不同而有所不同。

---

## 163. IPACHILDES&G2P+: Feature-Rich Resources for Cross-Lingual Phonology and Phonemic Language Modeling

**类别**: `Workshop-CoNLL`

**作者**: Zébulon Goriely, Paula Buttery

**ID**: 2025.conll-1.33

**摘要(英文)**:
> In this paper, we introduce two resources: (i) G2P+, a tool for converting orthographic datasets to a consistent phonemic representation; and (ii) IPA CHILDES, a phonemic dataset of child-centered speech across 31 languages. Prior tools for grapheme-to-phoneme conversion result in phonemic vocabularies that are inconsistent with established phonemic inventories, an issue which G2P+ addresses by leveraging the inventories in the Phoible database. Using this tool, we augment CHILDES with phonemic transcriptions to produce IPA CHILDES. This new resource fills several gaps in existing phonemic datasets, which often lack multilingual coverage, spontaneous speech, and a focus on child-directed language. We demonstrate the utility of this dataset for phonological research by training phoneme language models on 11 languages and probing them for distinctive features, finding that the distributional properties of phonemes are sufficient to learn major class and place features cross-lingually.

**摘要(中文)**:
> 在本文中，我们介绍了两个资源：（i）G2P+，一种用于将正交数据集转换为一致音素表示的工具； (ii) IPA CHILDES，一个涵盖 31 种语言的以儿童为中心的语音的音素数据集。先前的字素到音素转换工具会导致音素词汇与已建立的音素库存不一致，G2P+ 通过利用 Phoible 数据库中的库存来解决这个问题。使用此工具，我们通过音素转录来增强 CHILDES，以生成 IPA CHILDES。这一新资源填补了现有音素数据集的几个空白，这些数据集通常缺乏多语言覆盖、自发语音以及对儿童导向语言的关注。我们通过在 11 种语言上训练音素语言模型并探索它们的独特特征，证明了该数据集在音系研究中的实用性，发现音素的分布特性足以跨语言学习主要类别和位置特征。

---

## 164. GCG-Based Artificial Languages for Evaluating Inductive Biases of Neural Language Models

**类别**: `Workshop-CoNLL`

**作者**: Nadine El-Naggar, Tatsuki Kuribayashi, Ted Briscoe

**ID**: 2025.conll-1.35

**摘要(英文)**:
> Recent work has investigated whether extant neural language models (LMs) have an inbuilt inductive bias towards the acquisition of attested typologically-frequent grammatical patterns as opposed to infrequent, unattested, or impossible patterns using artificial languages (White and Cotterell, 2021; Kuribayashi et al., 2024). The use of artificial languages facilitates isolation of specific grammatical properties from other factors such as lexical or real-world knowledge, but also risks oversimplification of the problem.In this paper, we examine the use of Generalized Categorial Grammars (GCGs) (Wood, 2014) as a general framework to create artificial languages with a wider range of attested word order patterns, including those where the subject intervenes between verb and object (VSO, OSV) and unbounded dependencies in object relative clauses. In our experiments, we exemplify our approach by extending White and Cotterell (2021) and report some significant differences from existing results.

**摘要(中文)**:
> 最近的工作调查了现有的神经语言模型 (LM) 是否对获取经过证明的类型学上频繁的语法模式具有内在的归纳偏差，而不是使用人工语言获取不常见、未经证明或不可能的模式（White 和 Cotterell，2021；Kuribayashi 等人，2024）。人工语言的使用有助于将特定语法属性与其他因素（例如词汇或现实世界知识）隔离开来，但也存在问题过于简单化的风险。在本文中，我们研究了使用广义分类语法（GCG）（Wood，2014）作为通用框架来创建具有更广泛的经过验证的词序模式的人工语言，包括主语介入动词和宾语之间的语言（VSO，OSV）和无界语言对象相关子句中的依赖关系。在我们的实验中，我们通过扩展 White 和 Cotterell (2021) 来举例说明我们的方法，并报告与现有结果的一些显着差异。

---

## 165. A Practical Tool to Help Automate Interlinear Glossing: a Study on MukrīKurdish

**类别**: `Workshop-FieldMatters`

**作者**: Hiwa Asadpour, Shu Okabe, Alexander Fraser

**ID**: 2025.fieldmatters-1.6

**摘要(英文)**:
> Interlinear gloss generation aims to predict linguistic annotations (gloss) for a sentence in a language that is usually under ongoing documentation. Such output is a first draft for the linguist to work with and should reduce the manual workload.This article studies a simple glossing pipeline based on a Conditional Random Field and applies it to a small fieldwork corpus in Mukrī Kurdish, a variety of Central Kurdish.We mainly focus on making the tool as accessible as possible for field linguists, so it can run on standard computers without the need for GPUs. Our pipeline predicts common grammatical patterns robustly and, more generally, frequent combinations of morphemes and glosses. Although more advanced neural models do reach better results, our feature-based system still manages to be competitive and to provide interpretability.To foster further collaboration between field linguistics and NLP, we also provide some recommendations regarding documentation endeavours and release our pipeline code alongside.

**摘要(中文)**:
> 行间注释生成旨在预测通常正在记录的语言中的句子的语言注释（注释）。这样的输出是语言学家使用的初稿，应该减少手动工作量。本文研究了一种基于条件随机场的简单注释管道，并将其应用于 Mukrī 库尔德语（中部库尔德语的变体）的小型实地工作语料库。我们主要致力于使该工具尽可能为现场语言学家所使用，因此它可以在标准计算机上运行，​​而不需要 GPU。我们的管道可以稳健地预测常见的语法模式，更一般地说，可以预测语素和注释的频繁组合。尽管更先进的神经模型确实能达到更好的结果，但我们基于特征的系统仍然具有竞争力并提供可解释性。为了促进现场语言学和 NLP 之间的进一步合作，我们还提供了一些有关文档工作的建议，并同时发布了我们的管道代码。

---

## 166. Field to Model: Pairing Community Data Collection with ScalableNLPthrough theLiFESuite

**类别**: `Workshop-FieldMatters`

**作者**: Karthick Narayanan R, Siddharth Singh, Saurabh Singh, Aryan Mathur, Ritesh Kumar, Shyam Ratan, Bornini Lahiri, Benu Pareek, Neerav Mathur, Amalesh Gope, Meiraba Takhellambam, Yogesh Dawer

**ID**: 2025.fieldmatters-1.7

**摘要(英文)**:
> We present LiFE Suite as a “Field-to-Model” pipeline, designed to bridge community-centred data collection with scalable language model development. This paper describes the various tools integrated into the LiFE Suite that make this unified pipeline possible. Atekho, a mobile-first data collection platform, is designed to empower communities to assert their rights over their data. MATra-Lab, a web-based data processing and annotation tool, supports the management of field data and the creation of NLP-ready datasets with support from existing state-of-the-art NLP models. LiFE Model Studio, built on top of Hugging Face AutoTrain, offers a no-code solution for building scalable language models using the field data. This end-to-end integration ensures that every dataset collected in the field retains its linguistic, cultural, and metadata context, all the way through to deployable AI models and archive-ready datasets.

**摘要(中文)**:
> 我们将 LiFE Suite 作为“现场到模型”管道提供，旨在将以社区为中心的数据收集与可扩展的语言模型开发联系起来。本文介绍了集成到 LiFE Suite 中的各种工具，使这种统一的管道成为可能。 Atekho 是一个移动优先的数据收集平台，旨在帮助社区维护其数据权利。 MATra-Lab 是一种基于网络的数据处理和注释工具，在现有最先进的 NLP 模型的支持下，支持现场数据的管理和 NLP 就绪数据集的创建。 LiFE Model Studio 构建于 Hugging Face AutoTrain 之上，提供了一种无代码解决方案，用于使用现场数据构建可扩展的语言模型。这种端到端集成可确保现场收集的每个数据集保留其语言、文化和元数据上下文，一直到可部署的人工智能模型和存档就绪的数据集。

---

## 167. Detecting Bias and Intersectional Bias inItalian Word Embeddings and Language Models

**类别**: `Workshop-GEBNLP`

**作者**: Alexandre Puttick, Mascha Kurpicz-Briki

**ID**: 2025.gebnlp-1.3

**摘要(英文)**:
> Bias in Natural Language Processing (NLP) applications has become a critical issue, with many methods developed to measure and mitigate bias in word embeddings and language models. However, most approaches focus on single categories such as gender or ethnicity, neglecting the intersectionality of biases, particularly in non-English languages. This paper addresses these gaps by studying both single-category and intersectional biases in Italian word embeddings and language models. We extend existing bias metrics to Italian, introducing GG-FISE, a novel method for detecting intersectional bias while accounting for grammatical gender. We also adapt the CrowS-Pairs dataset and bias metric to Italian. Through a series of experiments using WEAT, SEAT, and LPBS tests, we identify significant biases along gender and ethnic lines, with particular attention to biases against Romanian and South Asian populations. Our results highlight the need for culturally adapted methods to detect and address biases in multilingual and intersectional contexts.

**摘要(中文)**:
> 自然语言处理（NLP）应用中的偏差已成为一个关键问题，人们开发了许多方法来测量和减轻词嵌入和语言模型中的偏差。然而，大多数方法只关注性别或种族等单一类别，忽略了偏见​​的交叉性，特别是在非英语语言中。本文通过研究意大利语单词嵌入和语言模型中的单类别和交叉偏差来解决这些差距。我们将现有的偏见指标扩展到意大利语，引入了 GG-FISE，这是一种在考虑语法性别的同时检测交叉偏见的新方法。我们还将 CrowS-Pairs 数据集和偏差指标改编为意大利语。通过使用 WEAT、SEAT 和 LPBS 测试的一系列实验，我们发现了性别和种族方面的显着偏见，特别关注针对罗马尼亚和南亚人群的偏见。我们的结果强调需要适应文化的方法来检测和解决多语言和交叉环境中的偏见。

---

## 168. Power(ful) Associations: Rethinking “Stereotype” forNLP

**类别**: `Workshop-GEBNLP`

**作者**: Hannah Devinney

**ID**: 2025.gebnlp-1.4

**摘要(英文)**:
> The tendency for Natural Language Processing (NLP) technologies to reproduce stereotypical associations, such as associating Black people with criminality or women with care professions, is a site of major concern and, therefore, much study. Stereotyping is a powerful tool of oppression, but the social and linguistic mechanisms behind it are largely ignored in the NLP field. Thus, we fail to effectively challenge stereotypes and the power asymmetries they reinforce. This opinion paper problematizes several common aspects of current work addressing stereotyping in NLP, and offers practicable suggestions for potential forward directions.

**摘要(中文)**:
> 自然语言处理 (NLP) 技术倾向于再现刻板印象，例如将黑人与犯罪行为或女性与护理职业联系起来，这是一个备受关注的领域，因此需要进行大量研究。刻板印象是一种强有力的压迫工具，但其背后的社会和语言机制在 NLP 领域很大程度上被忽视了。因此，我们无法有效地挑战刻板印象及其强化的权力不对称。这篇意见论文对当前解决 NLP 刻板印象的工作的几个常见方面提出了问题，并为潜在的前进方向提供了切实可行的建议。

---

## 169. A Diachronic Analysis of Human and Model Predictions on Audience Gender in How-to Guides

**类别**: `Workshop-GEBNLP`

**作者**: Nicola Fanton, Sidharth Ranjan, Titus Von Der Malsburg, Michael Roth

**ID**: 2025.gebnlp-1.22

**摘要(英文)**:
> We examine audience-specific how-to guides on wikiHow, in English, diachronically by comparing predictions from fine-tuned language models and human judgments. Using both early and revised versions, we quantitatively and qualitatively study how gender-specific features are identified over time. While language model performance remains relatively stable in terms of macro F1-scores, we observe an increased reliance on stereotypical tokens. Notably, both models and human raters tend to overpredict women as an audience, raising questions about bias in the evaluation of educational systems and resources.

**摘要(中文)**:
> 我们通过比较微调语言模型和人类判断的预测，按时间顺序检查 wikiHow 上针对特定受众的操作指南（英语）。使用早期版本和修订版本，我们定量和定性研究如何随着时间的推移识别特定性别的特征。虽然语言模型的性能在宏观 F1 分数方面保持相对稳定，但我们观察到对刻板标记的依赖增加。值得注意的是，模型和人类评估者都倾向于高估女性作为受众，引发有关教育系统和资源评估中的偏见的问题。

---

## 170. ReproHum #0744-02: A Reproduction of the Human Evaluation of Meaning Preservation in “Factorising Meaning and Form for Intent-Preserving Paraphrasing”

**类别**: `Workshop-GEM`

**作者**: Julius Steen, Katja Markert

**ID**: 2025.gem-1.51

**摘要(英文)**:
> Assessing and improving the reproducibility of human evaluation studies is an ongoing concern in the area of natural language processing. As a contribution to this effort and a part of the ReproHum reproducibility project, we describe the reproduction of a human evaluation study (Hosking and Lapata, 2021) that evaluates meaning preservation in question paraphrasing systems.Our results indicate that the original study is highly reproducible given additional material and information provided by the authors. However, we also identify some aspects of the study that may make the annotation task potentially much easier than those in comparable studies. This might limit the representativeness of these results for best-practices in study design.

**摘要(中文)**:
> 评估和提高人类评估研究的可重复性是自然语言处理领域持续关注的问题。作为对这项工作的贡献和 ReproHum 再现性项目的一部分，我们描述了一项人类评估研究的再现（Hosking 和 Lapata，2021），该研究评估问题释义系统中的意义保存。我们的结果表明，考虑到作者提供的额外材料和信息，原始研究具有高度可再现性。然而，我们还确定了该研究的某些方面，这些方面可能使注释任务比同类研究中的注释任务容易得多。这可能会限制这些结果对于研究设计最佳实践的代表性。

---

## 171. ReproHum #0031-01: Reproducing the Human Evaluation of Readability from “It isAI’s Turn to Ask Humans a Question”

**类别**: `Workshop-GEM`

**作者**: Daniel Braun

**ID**: 2025.gem-1.52

**摘要(英文)**:
> The reproducibility of results is the foundation on which scientific credibility is built. In Natural Language Processing (NLP) research, human evaluation is often seen as the gold standard of evaluation. This paper presents the reproduction of a human evaluation of a Natural Language Generation (NLG) system that generates pairs of questions and answers based on children’s stories that was originally conducted by Yao et al. (2022). Specifically, it replicates the evaluation of readability, one of the most commonly evaluated criteria for NLG systems. The results of the reproduction are aligned with the original findings and all major claims of the original paper are confirmed.

**摘要(中文)**:
> 结果的可重复性是建立科学可信度的基础。在自然语言处理（NLP）研究中，人类评估通常被视为评估的黄金标准。本文介绍了对自然语言生成（NLG）系统的人类评估的再现，该系统最初由 Yao 等人进行，该系统根据儿童故事生成成对的问题和答案。 （2022）。具体来说，它复制了可读性评估，这是 NLG 系统最常见的评估标准之一。复制的结果与原始发现一致，并且原始论文的所有主要主张均得到证实。

---

## 172. ReproHum: #0744-02: Investigating the Reproducibility of Semantic Preservation Human Evaluations

**类别**: `Workshop-GEM`

**作者**: Mohammad Arvan, Natalie Parde

**ID**: 2025.gem-1.54

**摘要(英文)**:
> Reproducibility remains a fundamental challenge for human evaluation in Natural Language Processing (NLP), particularly due to the inherent subjectivity and variability of human judgments. This paper presents a reproduction study of the human evaluation protocol introduced by Hosking and Lapata (2021), which assesses semantic preservation in paraphrase generation models. By faithfully reproducing the original experiment with careful adaptation and applying the Quantified Reproducibility Assessment framework (Belz and Thomson, 2024a; Belz, 2022), we demonstrate strong agreement with the original findings, confirming the semantic preservation ranking among four paraphrase models. Our analyses reveal moderate inter-annotator agreement and low variability in key results, underscoring a good degree of reproducibility despite practical deviations in participant recruitment and platform. These findings highlight the feasibility and challenges of reproducing human evaluation studies in NLP. We discuss implications for improving methodological rigor, transparent reporting, and standardized protocols to bolster reproducibility in future human evaluations. The data and analysis scripts are publicly available to support ongoing community efforts toward reproducible evaluation in NLP and beyond.

**摘要(中文)**:
> 可重复性仍然是自然语言处理（NLP）中人类评估的基本挑战，特别是由于人类判断固有的主观性和可变性。本文提出了 Hosking 和 Lapata (2021) 引入的人类评估协议的再现研究，该协议评估释义生成模型中的语义保存。通过仔细调整并应用量化再现性评估框架（Belz 和 Thomson，2024a；Belz，2022）忠实地重现原始实验，我们证明了与原始发现的强烈一致性，证实了四个释义模型之间的语义保留排名。我们的分析显示，注释者之间的一致性中等，关键结果的变异性较低，尽管参与者招募和平台存在实际偏差，但仍强调了良好的可重复性。这些发现凸显了在 NLP 领域重现人类评估研究的可行性和挑战。我们讨论了提高方法严谨性、透明报告和标准化协议的影响，以增强未来人类评估的可重复性。数据和分析脚本是公开的，以支持社区正在进行的 NLP 及其他领域的可重复评估的努力。

---

## 173. SSR: Alignment-Aware Modality Connector for Speech Language Models

**类别**: `Workshop-IWSLT`

**作者**: Weiting Tan, Hirofumi Inaguma, Ning Dong, Paden D. Tomasello, Xutai Ma

**ID**: 2025.iwslt-1.5

**摘要(英文)**:
> Fusing speech into a pre-trained language model (SpeechLM) usually suffers from the inefficient encoding of long-form speech and catastrophic forgetting of pre-trained text modality. We propose SSR (Segmented Speech Representation Connector) for better modality fusion. Leveraging speech-text alignments, our approach segments and compresses speech features to match the granularity of text embeddings. Additionally, we introduce a two-stage training pipeline that includes the distillation and fine-tuning phases to mitigate catastrophic forgetting. SSR outperforms existing mechanisms for speech-text modality fusion, consistently achieving better speech understanding (e.g., +10 accuracy on StoryCloze and +20 on Speech-MMLU) while preserving pre-trained text ability.

**摘要(中文)**:
> 将语音融合到预训练语言模型 (SpeechLM) 通常会遇到长格式语音编码效率低下以及预训练文本模态灾难性遗忘的问题。我们提出 SSR（分段语音表示连接器）以实现更好的模态融合。利用语音文本对齐，我们的方法分段并压缩语音特征以匹配文本嵌入的粒度。此外，我们引入了一个两阶段的训练流程，其中包括蒸馏和微调阶段，以减轻灾难性遗忘。 SSR 优于现有的语音-文本模态融合机制，持续实现更好的语音理解（例如，StoryCloze 的准确率+10，Speech-MMLU 的准确率+20），同时保留预先训练的文本能力。

---

## 174. Factual Knowledge in Language Models: Robustness and Anomalies under Simple Temporal Context Variations

**类别**: `Workshop-L2M2`

**作者**: Hichem Ammar Khodja, Frederic Bechet, Quentin Brabant, Alexis Nasr, Gwénolé Lecorvé

**ID**: 2025.l2m2-1.1

**摘要(英文)**:
> This paper explores the robustness of language models (LMs) to variations in the temporal context within factual knowledge. It examines whether LMs can correctly associate a temporal context with a past fact valid over a defined period, by asking them to differentiate correct from incorrect contexts. The LMs’ ability to distinguish is analyzed along two dimensions: the distance of the incorrect context from the validity period and the granularity of the context. To this end, a dataset called TimeStress is introduced, enabling the evaluation of 18 diverse LMs. Results reveal that the best LM achieves a perfect distinction for only 11% of the studied facts, with errors, certainly rare, but critical that humans would not make. This work highlights the limitations of current LMs in temporal representation.

**摘要(中文)**:
> 本文探讨了语言模型 (LM) 对事实知识中时间上下文变化的鲁棒性。它通过要求 LM 区分正确的上下文和错误的上下文来检查 LM 是否能够正确地将时间上下文与在定义的时间段内有效的过去事实相关联。 LM的区分能力从两个维度进行分析：错误上下文与有效期的距离以及上下文的粒度。为此，引入了一个名为 TimeStress 的数据集，可以对 18 个不同的 LM 进行评估。结果表明，最好的 LM 仅对 11% 的研究事实实现了完美区分，其中存在错误，虽然很少见，但人类不会犯这种错误。这项工作强调了当前语言模型在时间表示方面的局限性。

---

## 175. Memorization in Language Models through the Lens of Intrinsic Dimension

**类别**: `Workshop-L2M2`

**作者**: Stefan Arnold

**ID**: 2025.l2m2-1.2

**摘要(英文)**:
> Language Models (LMs) are prone to memorizing parts of their data during training and unintentionally emitting them at generation time, raising concerns about privacy leakage and disclosure of intellectual property. While previous research has identified properties such as context length, parameter size, and duplication frequency, as key drivers of unintended memorization, little is known about how the latent structure modulates this rate of memorization. We investigate the role of Intrinsic Dimension (ID), a geometric proxy for the structural complexity of a sequence in latent space, in modulating memorization. Our findings suggest that ID acts as a suppressive signal for memorization: compared to low-ID sequences, high-ID sequences are less likely to be memorized, particularly in overparameterized models and under sparse exposure. These findings highlight the interaction between scale, exposure, and complexity in shaping memorization.

**摘要(中文)**:
> 语言模型 (LM) 很容易在训练过程中记住部分数据，并在生成时无意中发出这些数据，从而引发了对隐私泄露和知识产权泄露的担忧。虽然之前的研究已经确定上下文长度、参数大小和重复频率等属性是无意识记忆的关键驱动因素，但人们对潜在结构如何调节这种记忆速度知之甚少。我们研究了内在维度（ID）在调节记忆中的作用，它是潜在空间中序列结构复杂性的几何代理。我们的研究结果表明，ID 作为记忆的抑制信号：与低 ID 序列相比，高 ID 序列不太可能被记住，特别是在过度参数化模型和稀疏暴露下。这些发现强调了规模、接触程度和复杂性在塑造记忆过程中的相互作用。

---

## 176. From Data to Knowledge: Evaluating How Efficiently Language Models Learn Facts

**类别**: `Workshop-L2M2`

**作者**: Daniel Christoph, Max Ploner, Patrick Haller, Alan Akbik

**ID**: 2025.l2m2-1.3

**摘要(英文)**:
> Sample efficiency is a crucial property of language models with practical implications for training efficiency. In real-world text, information follows a long-tailed distribution. Yet, we expect models to learn and recall frequent and infrequent facts. Sample efficient models are better equipped to handle this challenge of learning and retaining rare information without requiring excessive exposure. This study analyzes multiple models of varying architectures and sizes, all trained on the same pre-training data. By annotating relational facts with their frequencies in the training corpus, we examine how model performance varies with fact frequency. Our findings show that most models perform similarly on high-frequency facts but differ notably on low-frequency facts. This analysis provides new insights into the relationship between model architecture, size, and factual learning efficiency.

**摘要(中文)**:
> 样本效率是语言模型的一个重要属性，对训练效率具有实际意义。在现实世界的文本中，信息遵循长尾分布。然而，我们期望模型能够学习和回忆常见和不常见的事实。样本高效模型能够更好地应对学习和保留稀有信息的挑战，而无需过多接触。这项研究分析了不同架构和大小的多个模型，所有模型都使用相同的预训练数据进行训练。通过用训练语料库中的频率注释关系事实，我们研究模型性能如何随事实频率变化。我们的研究结果表明，大多数模型在高频事实上表现相似，但在低频事实上表现明显不同。该分析为模型架构、规模和事实学习效率之间的关系提供了新的见解。

---

## 177. Understanding Disagreement: An Annotation Study of Sentiment and Emotional Language in Environmental Communication

**类别**: `Workshop-LAW`

**作者**: Christina Barz, Melanie Siegel, Daniel Hanss, Michael Wiegand

**ID**: 2025.law-1.1

**摘要(英文)**:
> Emotional language is central to how environmental issues are communicated and received by the public. To better understand how such language is interpreted, we conducted an annotation study on sentiment and emotional language in texts from the environmental activist group Extinction Rebellion. The annotation process revealed substantial disagreement among annotators, highlighting the complexity and subjectivity involved in interpreting emotional language. In this paper, we analyze the sources of these disagreements, offering insights into how individual perspectives shape annotation outcomes. Our work contributes to ongoing discussions on perspectivism in NLP and emphasizes the importance of human-centered approaches and citizen science in analyzing environmental communication.

**摘要(中文)**:
> 情感语言是公众如何沟通和接受环境问题的核心。为了更好地理解如何解释此类语言，我们对环保活动组织“灭绝叛乱”文本中的情绪和情感语言进行了注释研究。注释过程揭示了注释者之间的巨大分歧，凸显了解释情感语言所涉及的复杂性和主观性。在本文中，我们分析了这些分歧的根源，提供了有关个人观点如何影响注释结果的见解。我们的工作有助于持续讨论 NLP 中的视角主义，并强调以人为本的方法和公民科学在分析环境传播中的重要性。

---

## 178. ForbiddenFRUITis the Sweetest: An Annotated Tweets Corpus forFrench Unfrozen Idioms Identification

**类别**: `Workshop-LAW`

**作者**: Julien Bezançon, Gaël Lejeune, Antoine Gautier, Marceau Hernandez, Félix Alié

**ID**: 2025.law-1.6

**摘要(英文)**:
> Multiword expressions (MWEs) are a key area of interest in NLP, studied across various languages and inspiring the creation of dedicated datasets and shared tasks such as PARSEME. Puns in multiword expressions (PMWEs) can be described as MWEs that have been “unfrozen” to acquire a new meaning or create a wordplay. Unlike MWEs, they have received little attention in NLP, mainly due to the lack of resources available for their study. In this context, we introduce the French Unfrozen Idioms in Tweets (FRUIT) corpus, a dataset of tweets spanning three years and comprising 60,617 tweets containing both MWEs and PMWE candidates. We first describe the process of constructing this corpus, followed by an overview of the manual annotation task performed by three experts on 600 tweets, achieving a maximum α score of 0.83. Insights from this manual annotation process were then used to develop a Game With A Purpose (GWAP) to annotate more tweets from the FRUIT corpus. This GWAP aims to enhance players’ understanding of MWEs and PMWEs. Currently, 13 players made 2,206 annotations on 931 tweets, reaching an α score of 0.70. In total, 1,531 tweets from the FRUIT corpus have been annotated.

**摘要(中文)**:
> 多词表达式 (MWE) 是 NLP 感兴趣的一个关键领域，它跨多种语言进行研究，并激发了专用数据集和共享任务（例如 PARSEME）的创建。多词表达 (PMWE) 中的双关语可以被描述为已“解冻”以获取新含义或创建双关语的 MWE。与 MWE 不同，他们在 NLP 领域很少受到关注，主要是因为缺乏可用于他们研究的资源。在这种背景下，我们引入了法语解冻推文习语 (FRUIT) 语料库，这是一个跨越三年的推文数据集，包含 60,617 条包含 MWE 和 PMWE 候选者的推文。我们首先描述了构建这个语料库的过程，然后概述了三位专家对 600 条推文执行的手动注释任务，获得了最大 α 分数 0.83。然后，使用此手动注释过程的见解来开发有目的的游戏 (GWAP)，以注释 FRUIT 语料库中的更多推文。该 GWAP 旨在增强玩家对 MWE 和 PMWE 的理解。目前，有 13 名玩家对 931 条推文进行了 2,206 条注释，α 得分为 0.70。 FRUIT 语料库中总共有 1,531 条推文已被注释。

---

## 179. ClassifyingTEIEncoding forDutchDraCor with Transformer Models

**类别**: `Workshop-LAW`

**作者**: Florian Debaene, Veronique Hoste

**ID**: 2025.law-1.11

**摘要(英文)**:
> Computational Drama Analysis relies on well-structured textual data, yet many dramatic works remain in need of encoding. The Dutch dramatic tradition is one such an example, with currently 180 plays available in the DraCor database, while many more plays await integration still. To facilitate this process, we propose a semi-automated TEI encoding annotation methodology using transformer encoder language models to classify structural elements in Dutch drama. We fine-tune 4 Dutch models on the DutchDraCor dataset to predict the 9 most relevant labels used in the DraCor TEI encoding, experimenting with 2 model input settings. Our results show that incorporating additional context through beginning-of-sequence (BOS) and end-of-sequence (EOS) tokens greatly improves performance, increasing the average macro F1 score across models from 0.717 to 0.923 (+0.206). Using the best-performing model, we generate silver-standard DraCor labels for EmDComF, an unstructured corpus of early modern Dutch comedies and farces, paving the way for its integration into DutchDraCor after validation.

**摘要(中文)**:
> 计算戏剧分析依赖于结构良好的文本数据，但许多戏剧作品仍然需要编码。荷兰戏剧传统就是这样一个例子，目前 DraCor 数据库中有 180 个戏剧，还有更多戏剧等待整合。为了促进这一过程，我们提出了一种半自动 TEI 编码注释方法，使用 Transformer 编码器语言模型对荷兰戏剧中的结构元素进行分类。我们在 DutchDraCor 数据集上微调 4 个 Dutch 模型，以预测 DraCor TEI 编码中使用的 9 个最相关的标签，并尝试 2 种模型输入设置。我们的结果表明，通过序列开始 (BOS) 和序列结束 (EOS) 标记合并额外的上下文可以极大地提高性能，将跨模型的平均宏 F1 分数从 0.717 提高到 0.923 (+0.206)。使用性能最佳的模型，我们为 EmDComF（早期现代荷兰喜剧和闹剧的非结构化语料库）生成银标准 DraCor 标签，为验证后将其集成到 DutchDraCor 中铺平了道路。

---

## 180. Bridging Perceptual Gaps in FoodNLP: A Structured Approach Using Sensory Anchors

**类别**: `Workshop-NLP4PI`

**作者**: Kana Maruyama, Angel Hsing-Chi Hwang, Tarek R. Besold

**ID**: 2025.nlp4pi-1.8

**摘要(英文)**:
> Understanding how humans perceive and describe food is essential for NLP applications such as semantic search, recommendation, and structured food communication. However, textual similarity often fails to reflect perceptual similarity, which is shaped by sensory experience, wine knowledge, and individual context. To address this, we introduce Sensory Anchors—structured reference points that align textual and perceptual representations. Using Red Wine as a case study, we collect free-form descriptions, metaphor-style responses, and perceptual similarity rankings from participants with varying levels of wine knowledge. These rankings reflect holistic perceptual judgments, with wine knowledge emerging as a key factor. Participants with higher wine knowledge produced more consistent rankings and moderately aligned descriptions, while those with lower knowledge showed greater variability. These findings suggest that structured descriptions based on higher wine knowledge may not generalize across users, underscoring the importance of modeling perceptual diversity. We also find that metaphor-style prompts enhance alignment between language and perception, particularly for less knowledgeable participants. Sensory Anchors thus provide a flexible foundation for capturing perceptual variability in food language, supporting the development of more inclusive and interpretable NLP systems.

**摘要(中文)**:
> 了解人类如何感知和描述食物对于语义搜索、推荐和结构化食物交流等 NLP 应用至关重要。然而，文本相似性往往无法反映感知相似性，而感知相似性是由感官经验、葡萄酒知识和个人背景决定的。为了解决这个问题，我们引入了感官锚点——对齐文本和感知表示的结构化参考点。以红酒作为案例研究，我们从具有不同葡萄酒知识水平的参与者那里收集了自由形式的描述、隐喻式的回答和感知相似度排名。这些排名反映了整体的感知判断，其中葡萄酒知识成为一个关键因素。具有较高葡萄酒知识的参与者产生了更一致的排名和适度一致的描述，而知识较低的参与者则表现出更大的变异性。这些发现表明，基于较高葡萄酒知识的结构化描述可能无法在用户之间推广，这强调了建模感知多样性的重要性。我们还发现，隐喻式提示可以增强语言和感知之间的一致性，特别是对于知识较少的参与者而言。因此，感觉锚定为捕获食物语言的感知变化提供了灵活的基础，支持开发更具包容性和可解释性的 NLP 系统。

---

## 181. AfD-CCC: Analyzing the Climate Change Discourse of aGerman Right-wing Political Party

**类别**: `Workshop-NLP4PI`

**作者**: Manfred Stede, Ronja Memminger

**ID**: 2025.nlp4pi-1.14

**摘要(英文)**:
> While the scientific consensus on anthropogenic climate change (CC) is undisputed now for a long time, public discourse is still divided. Considering the case of Europe, in the majority of countries, an influential right-wing party propagates climate scepticism or outright denial. Our work addresses the German party, which represents the second-largest faction in the federal parliament. In order to make the partys discourse on CC accessible to NLP-based analyses, we are compiling the, a collection of parliamentary speeches and other material from various sources. We report on first analyses of this new dataset using sentiment and emotion analysis as well as classification of populist language, which demonstrate clear differences to the language use of the two largest competing parties (social democrats and conservatives). We make the corpus available to enable further studies of the party’s rhetoric on CC topics.

**摘要(中文)**:
> 尽管长期以来关于人为气候变化（CC）的科学共识已无可争议，但公众话语仍然存在分歧。考虑到欧洲的情况，在大多数国家，有影响力的右翼政党宣扬气候怀疑论或彻底否认。我们的工作针对的是代表联邦议会第二大派系的德国党。为了使政党关于 CC 的讨论易于基于 NLP 的分析，我们正在汇编议会演讲和来自不同来源的其他材料的集合。我们报告了使用情绪和情绪分析以及民粹主义语言分类对这个新数据集的首次分析，这表明两个最大的竞争政党（社会民主党和保守派）的语言使用存在明显差异。我们提供该语料库，以便进一步研究该党关于 CC 主题的言论。

---

## 182. Participatory Design for Positive Impact: Behind the Scenes of ThreeNLPProjects

**类别**: `Workshop-NLP4PI`

**作者**: Marianne Wilson, David M. Howcroft, Ioannis Konstas, Dimitra Gkatzia, Gavin Abercrombie

**ID**: 2025.nlp4pi-1.21

**摘要(英文)**:
> Researchers in Natural Language Processing (NLP) are increasingly adopting participatory design (PD) principles to better achieve positive outcomes for stakeholders. This paper evaluates two PD perspectives proposed by Delgado et al. (2023) and Caselli et al. (2021) as interpretive and planning tools for NLP research. We reflect on our experiences adopting PD practices in three NLP projects that aim to create positive impact for different communities, and that span different domains and stages of NLP research. We assess how our projects align with PD goals and use these perspectives to identify the benefits and challenges of PD in NLP research. Our findings suggest that, while Caselli et al. (2021) and Delgado et al. (2023) provide valuable guidance, their application in research can be hindered by existing NLP practices, funding structures, and limited access to stakeholders. We propose that researchers adapt their PD praxis to the circumstances of specific projects and communities, using them as flexible guides rather than rigid prescriptions.

**摘要(中文)**:
> 自然语言处理（NLP）领域的研究人员越来越多地采用参与式设计（PD）原则，以更好地为利益相关者取得积极成果。本文评估了 Delgado 等人提出的两种 PD 观点。 （2023）和卡塞利等人。 （2021）作为 NLP 研究的解释和规划工具。我们反思了在三个 NLP 项目中采用 PD 实践的经验，这些项目旨在为不同社区创造积极影响，并且跨越 NLP 研究的不同领域和阶段。我们评估我们的项目如何与 PD 目标保持一致，并利用这些观点来确定 PD 在 NLP 研究中的好处和挑战。我们的研究结果表明，虽然卡塞利等人。 （2021）和德尔加多等人。 (2023) 提供了有价值的指导，但现有的 NLP 实践、资助结构和利益相关者的访问机会有限可能会阻碍它们在研究中的应用。我们建议研究人员根据具体项目和社区的情况调整他们的PD实践，将其作为灵活的指南而不是僵化的处方。

---

## 183. TheClimateCheck Dataset: Mapping Social Media Claims About Climate Change to Corresponding Scholarly Articles

**类别**: `Workshop-SDP`

**作者**: Raia Abu Ahmad, Aida Usmanova, Georg Rehm

**ID**: 2025.sdp-1.5

**摘要(英文)**:
> The rapid spread of misinformation on and through social media poses a significant challenge to public understanding of climate change and evidence-based policymaking. While natural language processing techniques have been used to analyse online discourse on climate change, no existing resources link social media claims to scientific literature. Thus, we introduce ClimateCheck, a human-annotated dataset that connects 435 unique, climate-related English claims in lay language to scientific abstracts. Each claim is connected to at least one and at most seventeen abstracts, resulting in 3,048 annotated claim-abstract pairs. The dataset aims to facilitate fact-checking and claim verification by leveraging scholarly document processing to improve access to scientific evidence in online discussions about climate change.

**摘要(中文)**:
> 错误信息在社交媒体上和通过社交媒体迅速传播，对公众对气候变化和循证决策的理解构成了重大挑战。虽然自然语言处理技术已被用来分析有关气候变化的在线言论，但现有的资源还没有将社交媒体声明与科学文献联系起来。因此，我们推出了 ClimateCheck，这是一个人工注释的数据集，它将 435 个独特的、与气候相关的非专业英语主张与科学摘要联系起来。每项权利要求至少与一个、最多十七个摘要相关，从而产生 3,048 个带注释的权利要求-摘要对。该数据集旨在通过利用学术文档处理来促进事实核查和主张验证，以改善有关气候变化的在线讨论中对科学证据的获取。

---

## 184. IRNLPatSemEval-2025 Task 10: Multilingual Narrative Characterization and Classification

**类别**: `Workshop-SemEval`

**作者**: Panagiotis Kiousis

**ID**: 2025.semeval-1.9

**摘要(英文)**:
> Our system approach for multilingual narrative classification is basically based on XLM-RoBERTa Large and other bert-based models(e.g DeepPavlov, Neuralmind BERT), fine-tuned on different language datasets. To improve generalization and ensure robust performance across languages, we employed a repeated k-fold cross-validation strategy. This allowed us to maximize the use of available training data while mitigating potential overfitting issues. Our preprocessing pipeline included (1) language-specific tokenization, (2) hierarchical label structuring, and (3) dynamic batch sampling to balance label distributions. We optimized the model using the F1 macro and F1 samples metrics ,ensuring that the system’s predictions were well-calibrated for fine-grained multilingual classification. The results demonstrated that our approach effectively leveraged transformer-based architectures to model complex narrative structures across languages, with strong performance gains due to repeated k-fold evaluation.

**摘要(中文)**:
> 我们的多语言叙事分类系统方法基本上基于 XLM-RoBERTa Large 和其他基于 bert 的模型（例如 DeepPavlov、Neuralmind BERT），并在不同语言数据集上进行微调。为了提高泛化能力并确保跨语言的稳健性能，我们采用了重复的 k 倍交叉验证策略。这使我们能够最大限度地利用可用的训练数据，同时减轻潜在的过度拟合问题。我们的预处理管道包括（1）特定于语言的标记化，（2）分层标签结构，以及（3）动态批量采样以平衡标签分布。我们使用 F1 宏观和 F1 样本指标优化了模型，确保系统的预测针对细粒度多语言分类进行了良好校准。结果表明，我们的方法有效地利用基于 Transformer 的架构来对跨语言的复杂叙事结构进行建模，并且由于重复的 k 次评估而获得了巨大的性能提升。

---

## 185. LTGatSemEval-2025 Task 10: Optimizing Context for Classification of Narrative Roles

**类别**: `Workshop-SemEval`

**作者**: Egil Rønningstad, Gaurav Negi

**ID**: 2025.semeval-1.61

**摘要(英文)**:
> Our contribution to the SemEval shared task 10, subtask 1 on entity framing, tackles the challenge of providing the necessary segments from longer documents as context for classification with a masked language model. We show how simple entity-oriented heuristics for context selection and the XLM-RoBERTa language model is on par with, or outperforms, Supervised Fine-Tuning with larger generative language models.

**摘要(中文)**:
> 我们对 SemEval 共享任务 10（关于实体框架的子任务 1）的贡献解决了从较长文档中提供必要片段作为使用掩码语言模型进行分类的上下文的挑战。我们展示了用于上下文选择的简单的面向实体的启发式方法和 XLM-RoBERTa 语言模型如何与具有更大生成语言模型的监督微调相媲美或优于后者。

---

## 186. Duluth atSemEval-2025 Task 7:TF-IDFwith Optimized Vector Dimensions for Multilingual Fact-Checked Claim Retrieval

**类别**: `Workshop-SemEval`

**作者**: Shujauddin Syed, Ted Pedersen

**ID**: 2025.semeval-1.98

**摘要(英文)**:
> This paper presents our approach to the SemEval-2025 Task 7 on Multilingual and Crosslingual Fact-Checked Claim Retrieval. We implemented a TF-IDF-based retrieval system with experimentation on vector dimensions and tokenization strategies. Our best-performing configuration used word-level tokenization with a vocabulary size of 15,000 features, achieving an average success@10 score of 0.78 on the development set and 0.69 on the test set across ten languages. Our system showed stronger performance on higher resource languages with large performance gaps compared to the top-ranked system, which achieved 0.96 average success@10. Our findings suggest that though advanced neural architectures are increasingly dominant in multilingual retrieval tasks, properly optimized traditional methods like TF-IDF remain competitive baselines, especially in limited resource scenarios.

**摘要(中文)**:
> 本文介绍了我们执行 SemEval-2025 任务 7（多语言和跨语言事实检查声明检索）的方法。我们通过对向量维度和标记化策略进行实验，实现了基于 TF-IDF 的检索系统。我们性能最佳的配置使用了词汇量为 15,000 个特征的单词级标记化，在十种语言的开发集上获得了 0.78 的平均 success@10 分数，在测试集上获得了 0.69 的平均 success@10 分数。我们的系统在更高资源语言上表现出更强的性能，与排名靠前的系统相比，性能差距很大，取得了 0.96 的平均成功率@10。我们的研究结果表明，尽管先进的神经架构在多语言检索任务中越来越占主导地位，但适当优化的传统方法（如 TF-IDF）仍然具有竞争力，尤其是在资源有限的情况下。

---

## 187. UMUTeam atSemEval-2025 Task 7: Multilingual Fact-Checked Claim Retrieval withXLM-RoBERTa and Self-Alignment Pretraining Strategy

**类别**: `Workshop-SemEval`

**作者**: Ronghao Pan, Tomás Bernal - Beltrán, José Antonio García - Díaz, Rafael Valencia - García

**ID**: 2025.semeval-1.103

**摘要(英文)**:
> In today’s digital age, the rapid dissemination of information through social networks poses significant challenges in verifying the veracity of shared content. The proliferation of misinformation can have serious consequences, influencing public opinion, policy decisions, and social dynamics. Fact-checking plays a critical role in countering misinformation; however, the manual verification process is time-consuming, especially when dealing with multilingual content. This paper presents our participation in the Multilingual and Crosslingual Fact-Checked Claim Retrieval task (SemEval 2025), which seeks to identify previously fact-checked claims relevant to social media posts. Our proposed system leverages XLM-RoBERTa, a multilingual Transformer model, combined with metric learning and hard negative mining strategies, to optimize the semantic comparison of posts and fact-checks across multiple languages. By fine-tuning a shared embedding space and employing a multiple similarity loss function, our approach enhances retrieval accuracy while maintaining efficiency. Evaluation results demonstrate competitive performance across multiple languages, reaching 25th place and highlighting the potential of multilingual NLP models in automating the fact-checking process and mitigating misinformation spread.

**摘要(中文)**:
> 在当今的数字时代，信息通过社交网络的快速传播给验证共享内容的真实性带来了重大挑战。错误信息的扩散可能会产生严重后果，影响公众舆论、政策决策和社会动态。事实核查在打击错误信息方面发挥着关键作用；然而，手动验证过程非常耗时，尤其是在处理多语言内容时。本文介绍了我们对多语言和跨语言事实检查声明检索任务 (SemEval 2025) 的参与，该任务旨在识别与社交媒体帖子相关的先前经过事实检查的声明。我们提出的系统利用 XLM-RoBERTa（一种多语言 Transformer 模型），结合度量学习和硬负挖掘策略，来优化跨多种语言的帖子和事实检查的语义比较。通过微调共享嵌入空间并采用多重相似性损失函数，我们的方法在保持效率的同时提高了检索准确性。评估结果显示了跨多种语言的竞争表现，达到第 25 位，突显了多语言 NLP 模型在自动化事实检查过程和减少错误信息传播方面的潜力。

---

## 188. Tewodros atSemEval-2025 Task 11: Multilingual Emotion Intensity Detection using Small Language Models

**类别**: `Workshop-SemEval`

**作者**: Mikiyas Eyasu, Wendmnew Sitot Abebaw, Nida Hafeez, Fatima Uroosa, Tewodros Achamaleh Bizuneh, Grigori Sidorov, Alexander Gelbukh

**ID**: 2025.semeval-1.196

**摘要(英文)**:
> Emotions play a fundamental role in the decision-making process, shaping human actions across diverse disciplines. The extensive usage of emotion intensity detection approaches has generated substantial research interest during the last few years. Efficient multi-label emotion intensity detection remains unsatisfactory even for high-resource languages, with a substantial performance gap among well-resourced and under-resourced languages. Team {textbf{Tewodros}} participated in SemEval-2025 Task 11, Track B, focusing on detecting text-based emotion intensity. Our work involved multi-label emotion intensity detection across three languages: Amharic, English, and Spanish, using the (afro-xlmr-large-76L), (DeBERTa-v3-base), and (BERT-base-Spanish-wwm-uncased) models. The models achieved an average F1 score of 0.6503 for Amharic, 0.5943 for English, and an accuracy score of 0.6228 for Spanish. These results demonstrate the effectiveness of our models in capturing emotion intensity across multiple languages.

**摘要(中文)**:
> 情绪在决策过程中发挥着重要作用，影响着不同学科的人类行为。在过去几年中，情绪强度检测方法的广泛使用引起了人们的广泛研究兴趣。即使对于资源丰富的语言，有效的多标签情绪强度检测仍然不能令人满意，资源丰富的语言和资源不足的语言之间存在巨大的性能差距。 {textbf{Tewodros}} 团队参加了 SemEval-2025 任务 11，轨道 B，重点检测基于文本的情绪强度。我们的工作涉及三种语言的多标签情绪强度检测：阿姆哈拉语、英语和西班牙语，使用 (afro-xlmr-large-76L)、(DeBERTa-v3-base) 和 (BERT-base-Spanish-wwm-uncased) 模型。这些模型的阿姆哈拉语平均 F1 得分为 0.6503，英语为 0.5943，西班牙语准确度为 0.6228。这些结果证明了我们的模型在捕获多种语言的情感强度方面的有效性。

---

## 189. Fossils atSemEval-2025 Task 9: Tasting Loss Functions for Food Hazard Detection in Text Reports

**类别**: `Workshop-SemEval`

**作者**: Aman Sinha, Federica Gamba

**ID**: 2025.semeval-1.199

**摘要(英文)**:
> Food hazard detection is an emerging field where NLP solutions are being explored. Despite the recent accessibility of powerful language models, one of the key challenges that still persists is the high class imbalance within datasets, often referred to in the literature as the {textit{long tail problem}}.In this work, we present a study exploring different loss functions borrowed from the field of visual recognition, to tackle long-tailed class imbalance for food hazard detection in text reports. Our submission to SemEval-2025 Task 9 on the Food Hazard Detection Challenge shows how re-weighting mechanism in loss functions prove beneficial in class imbalance scenarios. In particular, we empirically show that class-balanced and focal loss functions outperform all other loss strategies for Subtask 1 and 2 respectively.

**摘要(中文)**:
> 食品危害检测是一个正在探索 NLP 解决方案的新兴领域。尽管最近可以使用强大的语言模型，但仍然存在的关键挑战之一是数据集中的高类别不平衡，在文献中通常被称为{textit{长尾问题}}。在这项工作中，我们提出了一项研究，探索从视觉识别领域借用的不同损失函数，以解决文本报告中食品危害检测的长尾类别不平衡问题。我们向 SemEval-2025 关于食品危害检测挑战的任务 9 提交的内容展示了损失函数中的重新加权机制如何在类别不平衡场景中证明是有益的。特别是，我们凭经验表明，对于子任务 1 和 2，类平衡损失函数和焦点损失函数分别优于所有其他损失策略。

---

## 190. Oath Breakers atSemEval-2025 Task 06:PromiseEval

**类别**: `Workshop-SemEval`

**作者**: Muhammad Khubaib, Owais Aijaz, Ayesha Enayat

**ID**: 2025.semeval-1.225

**摘要(英文)**:
> SemEval Task 6: Promise Eval, was designed to evaluate a company’s adherence to its ESG commitments. Using Natural Language Processing (NLP) and Deep Learning techniques, the task involves analyzing ESG reports to identify, classify, and verify corporate promises. The verification process follows a structured pipeline with four subtasks: Promise Classification, Evidence Verification, Evidence Classification, and Timeline Verification. These subtasks ensure that identified promises are well-defined, supported by credible evidence, and time-bound.For model implementation, BERT was initially used for most of the classification tasks but was later replaced with DeBERTa, which improved performance due to its superior contextual understanding. To enhance model generalization, contrastive learning was applied alongside standard classification loss, helping the model differentiate between positive and negative examples. Oversampling techniques were used to address class imbalance issues, particularly for the Misleading evidence category. For timeline verification, BART was chosen initially but then shifted to DeBERTa again, as it better captures sequential dependencies in text.The dataset consists of ESG reports containing labeled promise statements, evidence snippets, and timeline information. The data was preprocessed by tokenizing text, handling imbalanced classes through oversampling, and incorporating domain-specific embeddings to improve understanding.By implementing these techniques, the research aims to provide a transparent and accountable framework for assessing corporate promises, ensuring that companies are held accountable for their ESG commitments.

**摘要(中文)**:
> SemEval 任务 6：承诺评估，旨在评估公司对其 ESG 承诺的遵守情况。该任务使用自然语言处理 (NLP) 和深度学习技术，分析 ESG 报告以识别、分类和验证企业承诺。验证过程遵循包含四个子任务的结构化管道：承诺分类、证据验证、证据分类和时间线验证。这些子任务确保所确定的承诺是明确定义的、有可信证据支持且有时限的。在模型实现方面，BERT 最初用于大多数分类任务，但后来被 DeBERTa 取代，DeBERTa 由于其卓越的上下文理解而提高了性能。为了增强模型的泛化能力，将对比学习与标准分类损失一起应用，帮助模型区分正例和负例。过采样技术用于解决类别不平衡问题，特别是对于误导性证据类别。对于时间线验证，最初选择了 BART，但后来再次转向 DeBERTa，因为它可以更好地捕获文本中的顺序依赖性。数据集由 ESG 报告组成，其中包含标记的承诺声明、证据片段和时间线信息。通过对文本进行标记化、通过过采样处理不平衡类别以及结合特定领域的嵌入来提高理解来对数据进行预处理。通过实施这些技术，该研究旨在提供一个透明且负责任的框架来评估企业承诺，确保企业对其 ESG 承诺负责。

---

## 191. StanfordMLab atSemEval-2025 Task 11: TrackB–Emotion Intensity Detection

**类别**: `Workshop-SemEval`

**作者**: Joseph Le, Hannah Cui, James Zhang

**ID**: 2025.semeval-1.244

**摘要(英文)**:
> We outline our SemEval 2025 Track B: Emotion Intensity Prediction submission, for which the objective is to predict the intensity of six primary emotions—anger, disgust, fear, joy, sadness, and surprise—between 0 and 3, with 0 being none and 3 being very strong. We used a regression fine-tuned BERT-based model that makes use of pretrained embeddings in order to sense subtle emotional wordings in text.We include tokenization with a BERT tokenizer, training with AdamW optimization, and an ExponentialLR scheduler used for learning rate modification. Performance is monitored based on validation loss and accuracy through closeness of model outputs to gold labels.Our best-performing model is 68.97% accurate in validation and has a validation loss of 0.373, demonstrating BERT’s capability in fine-grained emotion intensity prediction. Key findings include that fine-tuning transformer models with regression loss improves prediction accuracy and that early stopping and learning rate scheduling avoid overfitting.Future improvements can include larger datasets, ensemble models, or other architectures such as RoBERTa and T5. This paper shows the potential of pretrained transformers for emotion intensity estimation and lays the groundwork for future computational emotion analysis research.

**摘要(中文)**:
> 我们概述了 SemEval 2025 Track B：情绪强度预测提交内容，其目标是预测 0 到 3 之间的六种主要情绪（愤怒、厌恶、恐惧、喜悦、悲伤和惊讶）的强度，其中 0 表示没有情绪，3 表示非常强烈。我们使用了基于 BERT 的回归微调模型，该模型利用预训练的嵌入来感知文本中微妙的情感措辞。我们包括使用 BERT 标记器进行标记化、使用 AdamW 优化进行训练以及用于学习率修改的 ExponentialLR 调度程序。通过模型输出与黄金标签的接近程度，根据验证损失和准确性来监控性能。我们表现最好的模型验证准确率为 68.97%，验证损失为 0.373，这证明了 BERT 细粒度情绪强度预测的能力。主要发现包括使用回归损失微调 Transformer 模型可以提高预测准确性，早期停止和学习率调度可以避免过度拟合。未来的改进可以包括更大的数据集、集成模型或其他架构，例如 RoBERTa 和 T5。本文展示了预训练 Transformer 在情感强度估计方面的潜力，并为未来的计算情感分析研究奠定了基础。

---

## 192. YNU-HPCCatSemEval-2025 Task 10: A Two-Stage Approach to Solving Multi-Label and Multi-Class Role Classification Based onDeBERTa

**类别**: `Workshop-SemEval`

**作者**: Ning Li, You Zhang, Jin Wang, Dan Xu, Xuejie Zhang

**ID**: 2025.semeval-1.258

**摘要(英文)**:
> A two-stage role classification model based on DeBERTa is proposed for the Entity Framework task in SemEval 2025 Task 10. The task is confronted with challenges such as multi-labeling, multi-category, and category imbalance, particularly in the semantic overlap and data sparsity of fine-grained roles. Existing methods primarily rely on rules, traditional machine learning, or deep learning, but the accurate classification of fine-grained roles is difficult to achieve. To address this, the proposed model integrates the deep semantic representation of the DeBERTa pre-trained language model through two sub-models: main role classification and sub-role classification, and utilizes Focal Loss to optimize the category imbalance issue. Experimental results indicate that the model achieves an accuracy of 75.32% in predicting the main role, while the exact matching rate for the sub-role is 8.94%. This is mainly limited by the strict matching standard and semantic overlap of fine-grained roles in the multi-label task. Compared to the baseline’s sub-role exact matching rate of 3.83%, the proposed model significantly improves this metric. The model ultimately ranked 23rd on the leaderboard. The code of this paper is available at:https://github.com/jiyuaner/YNU-HPCC-at-SemEval-2025-Task10.

**摘要(中文)**:
> SemEval 2025 Task 10中针对实体框架任务提出了一种基于DeBERTa的两阶段角色分类模型。该任务面临多标签、多类别和类别不平衡等挑战，特别是细粒度角色的语义重叠和数据稀疏。现有方法主要依靠规则、传统机器学习或深度学习，但很难实现细粒度角色的准确分类。为了解决这个问题，该模型通过主角色分类和子角色分类两个子模型集成了 DeBERTa 预训练语言模型的深层语义表示，并利用 Focal Loss 来优化类别不平衡问题。实验结果表明，该模型对主角色的预测准确率为75.32%，对配角的准确匹配率为8.94%。这主要受到多标签任务中细粒度角色的严格匹配标准和语义重叠的限制。与基线 3.83% 的子角色精确匹配率相比，所提出的模型显着提高了该指标。该模型最终在排行榜上排名第 23 位。本文代码可参见：https://github.com/jiyuaner/YNU-HPCC-at-SemEval-2025-Task10。

---

## 193. JU_NLPatSemEval-2025 Task 7: Leveraging Transformer-Based Models for Multilingual & Crosslingual Fact-Checked Claim Retrieval

**类别**: `Workshop-SemEval`

**作者**: Atanu Nayak, Srijani Debnath, Arpan Majumdar, Pritam Pal, Dipankar Das

**ID**: 2025.semeval-1.271

**摘要(英文)**:
> Fact-checkers are often hampered by the sheer amount of online content that needs to be fact-checked. NLP can help them by retrieving already existing fact-checks relevant to the content being investigated. This paper presents a systematic approach for the retrieval of top-k relevant fact-checks for a given post in a monolingual and cross-lingual setup using transformer-based pre-trained models fine-tuned with a dual encoder architecture. By training and evaluating the shared task test dataset, our proposed best-performing framework achieved an average success@10 score of 0.79 and 0.62 for the retrieval of 10 fact-checks from the fact-check corpus against a post in monolingual and crosslingual track respectively.

**摘要(中文)**:
> 事实核查人员经常受到需要核查的大量在线内容的阻碍。 NLP 可以通过检索与正在调查的内容相关的现有事实核查来帮助他们。本文提出了一种系统方法，使用基于变压器的预训练模型（通过双编码器架构进行微调），在单语言和跨语言设置中检索给定帖子的前 k 个相关事实检查。通过训练和评估共享任务测试数据集，我们提出的性能最佳框架在从事实检查语料库中针对单语和跨语言轨道中的帖子检索 10 项事实检查时，平均 success@10 得分分别为 0.79 和 0.62。

---

## 194. YNU-HPCCatSemEval-2025 Task 5: Contrastive Learning forGNDSubject Tagging with Multilingual Sentence-BERT

**类别**: `Workshop-SemEval`

**作者**: Hong Jiang, Jin Wang, Xuejie Zhang

**ID**: 2025.semeval-1.318

**摘要(英文)**:
> This paper describes YNU-HPCC(Alias JH) team’s participation in the sub-task 2 of the SemEval-2025 Task 5, which requires fine-tuning language models to align subject tags with the TIBKAT collection. The task presents three key challenges: cross-disciplinary document coverage, bilingual (English-German) processing requirements, and extreme classification over 200,000 GND Subjects. To address these challenges, we apply a contrastive learning framework using multilingual Sentence-BERT models, implementing two innovative training strategies: mixed-negative multi-label sampling, and single-label sampling with random negative selection. Our best-performing model achieves significant improvements of 28.6% in average recall, reaching 0.2252 on the core-test set and 0.1677 on the all-test set. Notably, we reveal model architecture-dependent response patterns: MiniLM-series models benefit from multi-label training (+33.5% zero-shot recall), while mpnet variants excel with single-label approaches (+230.3% zero-shot recall). The study further demonstrates the effectiveness of contrastive learning for multilingual semantic alignment in low-resource scenarios, providing insights for extreme classification tasks.

**摘要(中文)**:
> 本文描述了 YNU-HPCC(Alias JH) 团队参与 SemEval-2025 任务 5 的子任务 2，该子任务需要微调语言模型以将主题标签与 TIBKAT 集合对齐。该任务提出了三个关键挑战：跨学科文档覆盖、双语（英语-德语）处理要求以及超过 200,000 个 GND 主题的极端分类。为了应对这些挑战，我们应用了使用多语言 Sentence-BERT 模型的对比学习框架，实施了两种创新的训练策略：混合负多标签采样和随机负选择的单标签采样。我们表现​​最好的模型的平均召回率显着提高了 28.6%，在核心测试集上达到 0.2252，在所有测试集上达到 0.1677。值得注意的是，我们揭示了依赖于模型架构的响应模式：MiniLM 系列模型受益于多标签训练（+33.5% 零样本召回率），而 mpnet 变体则擅长单标签方法（+230.3% 零样本召回率）。该研究进一步证明了对比学习在资源匮乏场景下多语言语义对齐的有效性，为极端分类任务提供了见解。

---

## 195. Analyzing the Linguistic Priors of Language Models with Synthetic Languages

**类别**: `Workshop-SIGTYP`

**作者**: Alessio Tosolini, Terra Blevins

**ID**: 2025.sigtyp-1.2

**摘要(英文)**:
> While modern language model architectures are often assumed to be language-agnostic, there is limited evidence as to whether these models actually process the wide diversity of natural languages equally well. We investigate this question by analyzing how well LMs learn carefully constructed artificial languages containing a variety of verbal complexity, ranging from simple paradigms to covering far more verb classes than occur in natural languages. Rather than learning all languages equally efficiently, models trained on these languages show strict preferences for processing simpler languages. Furthermore, while some observed behaviors mimic human linguistic priors, we find that they indicate the model memorizes its training data rather than generalizes from it.

**摘要(中文)**:
> 虽然现代语言模型架构通常被认为与语言无关，但关于这些模型是否实际上同样能很好地处理自然语言的广泛多样性的证据有限。我们通过分析 LM 学习精心构建的包含各种动词复杂性的人工语言（从简单的范式到涵盖比自然语言中更多的动词类别）的能力来研究这个问题。在这些语言上训练的模型并没有同样有效地学习所有语言，而是对处理更简单的语言表现出严格的偏好。此外，虽然一些观察到的行为模仿了人类的语言先验，但我们发现它们表明模型记住了其训练数据，而不是从中进行概括。

---

## 196. Annotating and Inferring Compositional Structures in Numeral Systems Across Languages

**类别**: `Workshop-SIGTYP`

**作者**: Arne Rubehn, Christoph Rzymski, Luca Ciucci, Katja Bocklage, Alžběta Kučerová, David Snee, Abishek Stephen, Kellen Parker van Dam, Johann-Mattis List

**ID**: 2025.sigtyp-1.4

**摘要(英文)**:
> Numeral systems across the world’s languages vary in fascinating ways, both regarding their synchronic structure and the diachronic processes that determined how they evolved in their current shape. For a proper comparison of numeral systems across different languages, however, it is important to code them in a standardized form that allows for the comparison of basic properties. Here, we present a simple but effective coding scheme for numeral annotation, along with a workflow that helps to code numeral systems in a computer-assisted manner, providing sample data for numerals from 1 to 40 in 25 typologically diverse languages. We perform a thorough analysis of the sample, focusing on the systematic comparison between the underlying and the surface morphological structure. We further experiment with automated models for morpheme segmentation, where we find allomorphy as the major reason for segmentation errors. Finally, we show that subword tokenization algorithms are not viable for discovering morphemes in low-resource scenarios.

**摘要(中文)**:
> 世界上各种语言的数字系统在共时结构和历时过程方面都存在着令人着迷的变化，这些过程决定了它们如何演变为当前的形态。然而，为了正确比较不同语言的数字系统，以允许比较基本属性的标准化形式对它们进行编码非常重要。在这里，我们提出了一种简单但有效的数字注释编码方案，以及有助于以计算机辅助方式编码数字系统的工作流程，提供 25 种类型不同语言的 1 到 40 数字的示例数据。我们对样品进行了彻底的分析，重点是底层和表面形态结构之间的系统比较。我们进一步试验了语素分割的自动化模型，发现同质异形是分割错误的主要原因。最后，我们表明子词标记化算法对于在资源匮乏的情况下发现语素是不可行的。

---

## 197. HODIAT: A Dataset for Detecting Homotransphobic Hate Speech inItalian with Aggressiveness and Target Annotation

**类别**: `Workshop-WOAH`

**作者**: Greta Damo, Alessandra Teresa Cignarella, Tommaso Caselli, Viviana Patti, Debora Nozza

**ID**: 2025.woah-1.11

**摘要(英文)**:
> The escalating spread of homophobic and transphobic rhetoric in both online and offline spaces has become a growing global concern, with Italy standing out as one of the countries where acts of violence against LGBTQIA+ individuals persist and increase year after year. This short paper study analyzes hateful language against LGBTQIA+ individuals in Italian using novel annotation labels for aggressiveness and target. We assess a range of multilingual and Italian language models on this newannotation layers across zero-shot, few-shot, and fine-tuning settings. The results reveal significant performance gaps across models and settings, highlighting the limitations of zero- and few-shot approaches and the importance of fine-tuning on labelled data, when available, to achieve high prediction performance.

**摘要(中文)**:
> 线上和线下空间中恐同和恐变性言论的不断蔓延已成为全球日益关注的问题，意大利是针对 LGBTQIA+ 个人的暴力行为持续存在并逐年增加的国家之一。这篇简短的论文研究使用新颖的注释标签来分析意大利语中针对 LGBTQIA+ 个体的仇恨语言，以表达攻击性和目标。我们在零样本、少样本和微调设置的新注释层上评估了一系列多语言和意大利语模型。结果揭示了模型和设置之间的显着性能差距，突出了零样本和少样本方法的局限性，以及在可用时对标记数据进行微调以实现高预测性能的重要性。

---

## 198. Hate Speech in Times of Crises: a Cross-Disciplinary Analysis of Online Xenophobia inGreece

**类别**: `Workshop-WOAH`

**作者**: Maria Pontiki, Vasiliki Georgiadou, Lamprini Rori, Maria Gavriilidou

**ID**: 2025.woah-1.22

**摘要(英文)**:
> Bridging NLP with political science, this paper examines both the potential and the limitations of a computational hate speech detection method in addressing real-world questions. Using Greece as a case study, we analyze over 4 million tweets from 2015 to 2022—a period marked by economic, refugee, foreign policy, and pandemic crises. The analysis of false positives highlights the challenges of accurately detecting different types of verbal attacks across various targets and timeframes. In addition, the analysis of true positives reveals distinct linguistic patterns that reinforce populist narratives, polarization and hostility. By situating these findings within their socio-political context, we provide insights into how hate speech manifests online in response to real-world crises.

**摘要(中文)**:
> 本文将 NLP 与政治科学联系起来，探讨了计算仇恨语音检测方法在解决现实世界问题方面的潜力和局限性。我们以希腊为案例研究，分析了 2015 年至 2022 年期间超过 400 万条推文，这一时期的特点是经济、难民、外交政策和流行病危机。对误报的分析凸显了准确检测跨不同目标和时间范围的不同类型言语攻击的挑战。此外，对真实积极因素的分析揭示了强化民粹主义叙事、两极分化和敌意的独特语言模式。通过将这些发现置于社会政治背景下，我们深入了解仇恨言论如何在网上表现以应对现实世界的危机。

---

## 199. Between Hetero-Fatalism and Dark Femininity: Discussions of Relationships, Sex, and Men in the Femosphere

**类别**: `Workshop-WOAH`

**作者**: Emilie Francis

**ID**: 2025.woah-1.29

**摘要(英文)**:
> The ‘femosphere’ is a term coined to describe a group of online ideological spaces for women characterised by toxicity, reactionary feminism, and hetero-pessimism. It is often portrayed as a mirror of a similar group of communities for men, called the ‘manosphere’. Although there have been several studies investigating the ideologies and language of the manosphere, the femosphere has been largely overlooked - especially in NLP. This paper presents a study of two communities in the femosphere: Female Dating Strategy and Femcels. It presents an exploration of the language of these communities on topics related to relationships, sex, and men from the perspective of hetero-pessimism using topic modelling and semantic analysis. It reveals dissatisfaction with heterosexual courtship and frustration with the patriarchal society through which members attempt to navigate.

**摘要(中文)**:
> “女性圈”是一个术语，用来描述一组以毒性、反动女权主义和异性悲观主义为特征的女性在线意识形态空间。它经常被描绘成类似男性社区群体（称为“男性圈”）的一面镜子。尽管有几项研究调查了男性圈的意识形态和语言，但女性圈在很大程度上被忽视了——尤其是在 NLP 领域。本文介绍了对女性圈中两个社区的研究：女性约会策略和 Femcel。它使用主题建模和语义分析，从异性悲观主义的角度对这些社区关于关系、性别和男性相关主题的语言进行了探索。它揭示了对异性恋求爱的不满以及对成员试图穿越的父权社会的沮丧。

---

## 200. Seamlessly Integrating Tree-Based Positional Embeddings into Transformer Models for Source Code Representation

**类别**: `Workshop-XLLM`

**作者**: Patryk Bartkowiak, Filip Graliński

**ID**: 2025.xllm-1.10

**摘要(英文)**:
> Transformer-based models have demonstrated significant success in various source code representation tasks. Nonetheless, traditional positional embeddings employed by these models inadequately capture the hierarchical structure intrinsic to source code, typically represented as Abstract Syntax Trees (ASTs). To address this, we propose a novel tree-based positional embedding approach that explicitly encodes hierarchical relationships derived from ASTs, including node depth and sibling indices. These hierarchical embeddings are integrated into the transformer architecture, specifically enhancing the CodeBERTa model. We thoroughly evaluate our proposed model through masked language modeling (MLM) pretraining and clone detection fine-tuning tasks. Experimental results indicate that our Tree-Enhanced CodeBERTa consistently surpasses the baseline model in terms of loss, accuracy, F1 score, precision, and recall, emphasizing the importance of incorporating explicit structural information into transformer-based representations of source code.

**摘要(中文)**:
> 基于 Transformer 的模型在各种源代码表示任务中都取得了巨大的成功。尽管如此，这些模型采用的传统位置嵌入不足以捕获源代码固有的层次结构，通常表示为抽象语法树（AST）。为了解决这个问题，我们提出了一种新颖的基于树的位置嵌入方法，该方法显式编码从 AST 派生的层次关系，包括节点深度和兄弟索引。这些分层嵌入被集成到 Transformer 架构中，特别是增强了 CodeBERTa 模型。我们通过掩码语言建模（MLM）预训练和克隆检测微调任务彻底评估我们提出的模型。实验结果表明，我们的 Tree-Enhanced CodeBERTa 在损失、准确度、F1 分数、精确度和召回率方面始终优于基线模型，强调了将显式结构信息合并到基于 Transformer 的源代码表示中的重要性。

## 语法纠错 (21 篇)

---

## 201. CLEME2.0: Towards Interpretable Evaluation by Disentangling Edits for Grammatical Error Correction

**类别**: `主会-长文`

**作者**: Jingheng Ye, Zishan Xu, Yinghui Li, Linlin Song, Qingyu Zhou, Hai-Tao Zheng, Ying Shen, Wenhao Jiang, Hong-Gee Kim, Ruitong Liu, Xin Su, Zifei Shan

**ID**: 2025.acl-long.10

**摘要(英文)**:
> The paper focuses on the interpretability of Grammatical Error Correction (GEC) evaluation metrics, which received little attention in previous studies. To bridge the gap, we introduce **CLEME2.0**, a reference-based metric describing four fundamental aspects of GEC systems: hit-correction, wrong-correction, under-correction, and over-correction. They collectively contribute to exposing critical qualities and locating drawbacks of GEC systems. Evaluating systems by combining these aspects also leads to superior human consistency over other reference-based and reference-less metrics. Extensive experiments on two human judgment datasets and six reference datasets demonstrate the effectiveness and robustness of our method, achieving a new state-of-the-art result. Our codes are released at https://github.com/THUKElab/CLEME.

**摘要(中文)**:
> 本文重点关注语法错误纠正（GEC）评估指标的可解释性，这在之前的研究中很少受到关注。为了弥补这一差距，我们引入了**CLEME2.0**，这是一种基于参考的度量标准，描述了 GEC 系统的四个基本方面：命中校正、错误校正、校正不足和校正过度。它们共同致力于揭示 GEC 系统的关键品质并找出其缺陷。通过结合这些方面来评估系统还可以实现优于其他基于参考和无参考指标的人类一致性。对两个人类判断数据集和六个参考数据集的广泛实验证明了我们方法的有效性和鲁棒性，取得了新的最先进的结果。我们的代码发布于 https://github.com/THUKElab/CLEME。

---

## 202. MultiSocial: Multilingual Benchmark of Machine-Generated Text Detection of Social-Media Texts

**类别**: `主会-长文`

**作者**: Dominik Macko, Jakub Kopál, Robert Moro, Ivan Srba

**ID**: 2025.acl-long.36

**摘要(英文)**:
> Recent LLMs are able to generate high-quality multilingual texts, indistinguishable for humans from authentic human-written ones. Research in machine-generated text detection is however mostly focused on the English language and longer texts, such as news articles, scientific papers or student essays. Social-media texts are usually much shorter and often feature informal language, grammatical errors, or distinct linguistic items (e.g., emoticons, hashtags). There is a gap in studying the ability of existing methods in detection of such texts, reflected also in the lack of existing multilingual benchmark datasets. To fill this gap we propose the first multilingual (22 languages) and multi-platform (5 social media platforms) dataset for benchmarking machine-generated text detection in the social-media domain, called MultiSocial. It contains 472,097 texts, of which about 58k are human-written and approximately the same amount is generated by each of 7 multilingual LLMs. We use this benchmark to compare existing detection methods in zero-shot as well as fine-tuned form. Our results indicate that the fine-tuned detectors have no problem to be trained on social-media texts and that the platform selection for training matters.

**摘要(中文)**:
> 最近的大语言模型能够生成高质量的多语言文本，人类无法将其与真实的人类编写的文本区分开来。然而，机器生成文本检测的研究主要集中在英语和较长的文本上，例如新闻文章、科学论文或学生论文。社交媒体文本通常要短得多，并且通常包含非正式语言、语法错误或不同的语言项目（例如表情符号、主题标签）。研究现有方法检测此类文本的能力存在差距，这也反映在缺乏现有的多语言基准数据集。为了填补这一空白，我们提出了第一个多语言（22 种语言）和多平台（5 个社交媒体平台）数据集，用于在社交媒体领域对机器生成的文本检测进行基准测试，称为 MultiSocial。它包含 472,097 篇文本，其中约 58,000 篇是人工编写的，7 个多语言大语言模型各自生成的数量大致相同。我们使用这个基准来比较零样本和微调形式的现有检测方法。我们的结果表明，经过微调的检测器在社交媒体文本上进行训练没有问题，并且训练平台的选择很重要。

---

## 203. CxGGEC: Construction-Guided Grammatical Error Correction

**类别**: `主会-长文`

**作者**: Yayu Cao, Tianxiang Wang, Lvxiaowei Xu, Zhenyao Wang, Ming Cai

**ID**: 2025.acl-long.307

**摘要(英文)**:
> The grammatical error correction (GEC) task aims to detect and correct grammatical errors in text to enhance its accuracy and readability. Current GEC methods primarily rely on grammatical labels for syntactic information, often overlooking the inherent usage patterns of language. In this work, we explore the potential of construction grammar (CxG) to improve GEC by leveraging constructions to capture underlying language patterns and guide corrections. We first establish a comprehensive construction inventory from corpora. Next, we introduce a construction prediction model that identifies potential constructions in ungrammatical sentences using a noise-tolerant language model. Finally, we train a CxGGEC model on construction-masked parallel data, which performs GEC by decoding construction tokens into their original forms and correcting erroneous tokens. Extensive experiments on English and Chinese GEC benchmarks demonstrate the effectiveness of our approach.

**摘要(中文)**:
> 语法错误纠正（GEC）任务旨在检测和纠正文本中的语法错误，以提高其准确性和可读性。当前的 GEC 方法主要依赖于语法标签来获取句法信息，常常忽略了语言固有的使用模式。在这项工作中，我们探索了构造语法 (CxG) 通过利用构造捕获底层语言模式并指导纠正来改进 GEC 的潜力。我们首先从语料库中建立一个全面的构建清单。接下来，我们介绍一种结构预测模型，该模型使用耐噪声语言模型来识别不语法句子中的潜在结构。最后，我们在构造屏蔽并行数据上训练 CxGGEC 模型，该模型通过将构造标记解码为其原始形式并纠正错误标记来执行 GEC。对英文和中文 GEC 基准的大量实验证明了我们方法的有效性。

---

## 204. Enhancing Text Editing for Grammatical Error Correction:Arabic as a Case Study

**类别**: `主会-长文`

**作者**: Bashar Alhafni, Nizar Habash

**ID**: 2025.acl-long.875

**摘要(英文)**:
> Text editing frames grammatical error correction (GEC) as a sequence tagging problem, where edit tags are assigned to input tokens, and applying these edits results in the corrected text. This approach has gained attention for its efficiency and interpretability. However, while extensively explored for English, text editing remains largely underexplored for morphologically rich languages like Arabic. In this paper, we introduce a text editing approach that derives edit tags directly from data, eliminating the need for language-specific edits. We demonstrate its effectiveness on Arabic, a diglossic and morphologically rich language, and investigate the impact of different edit representations on model performance. Our approach achieves SOTA results on two Arabic GEC benchmarks and performs on par with SOTA on two others. Additionally, our models are over six times faster than existing Arabic GEC systems, making our approach more practical for real-world applications. Finally, we explore ensemble models, demonstrating how combining different models leads to further performance improvements. We make our code, data, and pretrained models publicly available.

**摘要(中文)**:
> 文本编辑将语法错误纠正 (GEC) 视为序列标记问题，其中编辑标记被分配给输入标记，并在更正的文本中应用这些编辑结果。这种方法因其效率和可解释性而受到关注。然而，虽然对英语进行了广泛的探索，但对阿拉伯语等形态丰富的语言的文本编辑仍然很大程度上没有得到充分的探索。在本文中，我们介绍了一种文本编辑方法，该方法直接从数据派生编辑标签，从而消除了特定于语言的编辑的需要。我们展示了它对阿拉伯语（一种双语且形态丰富的语言）的有效性，并研究了不同编辑表示对模型性能的影响。我们的方法在两个阿拉伯 GEC 基准上取得了 SOTA 结果，并且在另外两个基准上的表现与 SOTA 相当。此外，我们的模型比现有的阿拉伯 GEC 系统快六倍以上，这使得我们的方法对于实际应用更加实用。最后，我们探索集成模型，展示组合不同模型如何进一步提高性能。我们公开我们的代码、数据和预训练模型。

---

## 205. Targeted Syntactic Evaluation for Grammatical Error Correction

**类别**: `主会-长文`

**作者**: Aomi Koyama, Masato Mita, Su-Youn Yoon, Yasufumi Takama, Mamoru Komachi

**ID**: 2025.acl-long.1026

**摘要(英文)**:
> Language learners encounter a wide range of grammar items across the beginner, intermediate, and advanced levels.To develop grammatical error correction (GEC) models effectively, it is crucial to identify which grammar items are easier or more challenging for models to correct. However, conventional benchmarks based on learner-produced texts are insufficient for conducting detailed evaluations of GEC model performance across a wide range of grammar items due to biases in their distribution.To address this issue, we propose a new evaluation paradigm that assesses GEC models using minimal pairs of ungrammatical and grammatical sentences for each grammar item. As the first benchmark within this paradigm, we introduce the CEFR-based Targeted Syntactic Evaluation Dataset for Grammatical Error Correction (CTSEG), which complements existing English benchmarks by enabling fine-grained analyses previously unattainable with conventional datasets. Using CTSEG, we evaluate three mainstream types of English GEC models: sequence-to-sequence models, sequence tagging models, and prompt-based models. The results indicate that while current models perform well on beginner-level grammar items, their performance deteriorates substantially for intermediate and advanced items.

**摘要(中文)**:
> 语言学习者在初级、中级和高级水平上都会遇到各种各样的语法项目。为了有效地开发语法错误纠正 (GEC) 模型，确定哪些语法项目对于模型来说更容易纠正或更具挑战性至关重要。然而，由于分布的偏差，基于学习者生成文本的传统基准不足以对广泛的语法项目的 GEC 模型性能进行详细评估。为了解决这个问题，我们提出了一种新的评估范式，该范式使用每个语法项目的最少的不语法和语法句子对来评估 GEC 模型。作为该范式中的第一个基准，我们引入了基于 CEFR 的语法错误纠正目标句法评估数据集 (CTSEG)，该数据集通过实现传统数据集以前无法实现的细粒度分析来补充现有的英语基准。使用 CTSEG，我们评估了三种主流类型的英语 GEC 模型：序列到序列模型、序列标记模型和基于提示的模型。结果表明，虽然当前模型在初级语法项目上表现良好，但在中级和高级项目上其性能大幅下降。

---

## 206. Rethinking Evaluation Metrics for Grammatical Error Correction: Why Use a Different Evaluation Process than Human?

**类别**: `主会-短文`

**作者**: Takumi Goto, Yusuke Sakai, Taro Watanabe

**ID**: 2025.acl-short.92

**摘要(英文)**:
> One of the goals of automatic evaluation metrics in grammatical error correction (GEC) is to rank GEC systems such that it matches human preferences. However, current automatic evaluations are based on procedures that diverge from human evaluation. Specifically, human evaluation derives rankings by aggregating sentence-level relative evaluation results, e.g., pairwise comparisons, using a rating algorithm, whereas automatic evaluation averages sentence-level absolute scores to obtain corpus-level scores, which are then sorted to determine rankings. In this study, we propose an aggregation method for existing automatic evaluation metrics which aligns with human evaluation methods to bridge this gap. We conducted experiments using various metrics, including edit-based metrics, -gram based metrics, and sentence-level metrics, and show that resolving the gap improves results for the most of metrics on the SEEDA benchmark.We also found that even BERT-based metrics sometimes outperform the metrics of GPT-4.

**摘要(中文)**:
> 语法错误纠正 (GEC) 中自动评估指标的目标之一是对 GEC 系统进行排名，使其符合人类的偏好。然而，当前的自动评估所基于的程序与人类评估不同。具体来说，人类评估通过使用评分算法聚合句子级相对评估结果（例如成对比较）来得出排名，而自动评估则对句子级绝对分数进行平均以获得语料库级分数，然后对语料库级分数进行排序以确定排名。在本研究中，我们提出了一种现有自动评估指标的聚合方法，该方法与人类评估方法相一致，以弥补这一差距。我们使用各种指标进行了实验，包括基于编辑的指标、基于-gram的指标和句子级指标，结果表明，解决差距可以改善 SEEDA 基准上大多数指标的结果。我们还发现，即使是基于 BERT 的指标有时也优于 GPT-4 的指标。

---

## 207. gec-metrics: A Unified Library for Grammatical Error Correction Evaluation

**类别**: `系统演示`

**作者**: Takumi Goto, Yusuke Sakai, Taro Watanabe

**ID**: 2025.acl-demo.50

**摘要(英文)**:
> We introduce gec-metrics, a library for using and developing grammatical error correction (GEC) evaluation metrics through a unified interface. Our library enables fair system comparisons by ensuring that everyone conducts evaluations using a consistent implementation. Moreover, it is designed with a strong focus on API usage, making it highly extensible. It also includes meta-evaluation functionalities and provides analysis and visualization scripts, contributing to developing GEC evaluation metrics. Our code is released under the MIT license1and is also distributed as an installable package2. The video is available at YouTube3.1GitHub: https://github.com/gotutiyan/gec-metrics2PyPi: https://pypi.org/project/gec-metrics/3Video: https://youtu.be/cor6dkN6EfI

**摘要(中文)**:
> 我们引入了 gec-metrics，这是一个通过统一接口使用和开发语法错误纠正 (GEC) 评估指标的库。我们的库通过确保每个人都使用一致的实现进行评估来实现公平的系统比较。此外，它的设计非常注重 API 的使用，使其具有高度的可扩展性。它还包括元评估功能并提供分析和可视化脚本，有助于开发 GEC 评估指标。我们的代码是在 MIT 许可证下发布的，并且还作为可安装包进行分发2。该视频可在YouTube3.1GitHub：https://github.com/gotutiyan/gec-metrics2PyPi：https://pypi.org/project/gec-metrics/3视频：https://youtu.be/cor6dkN6EfI

---

## 208. Improving Explainability of Sentence-level Metrics via Edit-level Attribution for Grammatical Error Correction

**类别**: `学生研讨会`

**作者**: Takumi Goto, Justin Vasselli, Taro Watanabe

**ID**: 2025.acl-srw.77

**摘要(英文)**:
> Various evaluation metrics have been proposed for Grammatical Error Correction (GEC), but many, particularly reference-free metrics, lack explainability. This lack of explainability hinders researchers from analyzing the strengths and weaknesses of GEC models and limits the ability to provide detailed feedback for users. To address this issue, we propose attributing sentence-level scores to individual edits, providing insight into how specific corrections contribute to the overall performance. For the attribution method, we use Shapley values, from cooperative game theory, to compute the contribution of each edit. Experiments with existing sentence-level metrics demonstrate high consistency across different edit granularities and show approximately 70% alignment with human evaluations. In addition, we analyze biases in the metrics based on the attribution results, revealing trends such as the tendency to ignore orthographic edits.

**摘要(中文)**:
> 人们已经为语法错误纠正（GEC）提出了各种评估指标，但许多指标（尤其是无参考指标）缺乏可解释性。这种可解释性的缺乏阻碍了研究人员分析 GEC 模型的优缺点，并限制了为用户提供详细反馈的能力。为了解决这个问题，我们建议将句子级分数归因于单独的编辑，从而深入了解特定的更正如何对整体性能做出贡献。对于归因方法，我们使用合作博弈论中的沙普利值来计算每次编辑的贡献。对现有句子级指标的实验表明，不同编辑粒度之间具有高度一致性，并且与人类评估的一致性约为 70%。此外，我们还根据归因结果分析指标中的偏差，揭示诸如忽略拼写编辑的倾向等趋势。

---

## 209. Grammatical Error Correction via Sequence Tagging forRussian

**类别**: `学生研讨会`

**作者**: Regina Nasyrova, Alexey Sorokin

**ID**: 2025.acl-srw.82

**摘要(英文)**:
> We introduce a modified sequence tagging architecture, proposed in (Omelianchuk et al., 2020), for the Grammatical Error Correction of the Russian language. We propose language-specific operation set and preprocessing algorithm as well as a classification scheme which makes distinct predictions for insertions and other operations. The best versions of our models outperform previous approaches and set new SOTA on the two Russian GEC benchmarks – RU-Lang8 and GERA, while achieve competitive performance on RULEC-GEC.

**摘要(中文)**:
> 我们引入了（Omelianchuk et al., 2020）中提出的一种修改后的序列标记架构，用于俄语的语法错误纠正。我们提出了特定于语言的操作集和预处理算法以及分类方案，该方案对插入和其他操作做出不同的预测。我们模型的最佳版本优于以前的方法，并在两个俄罗斯 GEC 基准（RU-Lang8 和 GERA）上设置了新的 SOTA，同时在 RULEC-GEC 上实现了具有竞争力的性能。

---

## 210. Rethinking the Roles of Large Language Models inChinese Grammatical Error Correction

**类别**: `工业Track`

**作者**: Yinghui Li, Shang Qin, Jingheng Ye, Haojing Huang, Yangning Li, Shu-Yu Guo, Libo Qin, Xuming Hu, Wenhao Jiang, Hai-Tao Zheng, Philip S. Yu

**ID**: 2025.acl-industry.39

**摘要(英文)**:
> Recently, Large Language Models (LLMs) have been widely studied by researchers for their roles in various downstream NLP tasks. As a fundamental task in the NLP field, Chinese Grammatical Error Correction (CGEC) aims to correct all potential grammatical errors in the input sentences. Previous studies have shown that LLMs’ performance as correctors on CGEC remains unsatisfactory due to the challenging nature of the task. To promote the CGEC field to better adapt to the era of LLMs, we rethink the roles of LLMs in the CGEC task so that they can be better utilized and explored in CGEC. Considering the rich grammatical knowledge stored in LLMs and their powerful semantic understanding capabilities, we utilize LLMs as explainers to provide explanation information to the CGEC small models during error correction, aiming to enhance performance. We also use LLMs as evaluators to bring more reasonable CGEC evaluations, thus alleviating the troubles caused by the subjectivity of the CGEC task. In particular, our work is also an active exploration of how LLMs and small models better collaborate in downstream tasks. Extensive experiment and detailed analyses on widely used datasets verify the effectiveness of our intuition and the proposed methods.

**摘要(中文)**:
> 最近，大型语言模型（LLM）因其在各种下游 NLP 任务中的作用而被研究人员广泛研究。作为自然语言处理领域的一项基本任务，中文语法错误纠正（CGEC）旨在纠正输入句子中所有潜在的语法错误。之前的研究表明，由于任务的挑战性，大语言模型作为 CGEC 校正者的表现仍然不能令人满意。为了推动CGEC领域更好地适应LLM时代，我们重新思考LLM在CGEC任务中的角色，以便它们在CGEC中得到更好的利用和探索。考虑到LLM存储的丰富语法知识及其强大的语义理解能力，我们利用LLM作为解释器，在纠错过程中为CGEC小模型提供解释信息，旨在提高性能。我们还利用LLM作为评估者来带来更合理的CGEC评估，从而减轻CGEC任务的主观性带来的麻烦。特别是，我们的工作也是积极探索大语言模型和小型模型如何在下游任务中更好地协作。对广泛使用的数据集进行的广泛实验和详细分析验证了我们的直觉和所提出的方法的有效性。

---

## 211. Failing Forward: Improving Generative Error Correction forASRwith Synthetic Data and Retrieval Augmentation

**类别**: `Findings`

**作者**: Sreyan Ghosh, Mohammad Sadegh Rasooli, Michael Levit, Peidong Wang, Jian Xue, Dinesh Manocha, Jinyu Li

**ID**: 2025.findings-acl.125

**摘要(英文)**:
> Generative Error Correction (GEC) has emerged as a powerful post-processing method to boost the performance of Automatic Speech Recognition (ASR) systems. In this paper, we first show that GEC models struggle to generalize beyond the specific types of errors encountered during training, limiting their ability to correct new, unseen errors at test time, particularly in out-of-domain (OOD) scenarios. This phenomenon amplifies with named entities (NEs), where, in addition to insufficient contextual information or knowledge about the NEs, novel NEs keep emerging. To address these issues, we propose DARAG (Data- and Retrieval-Augmented Generative Error Correction), a novel approach designed to improve GEC for ASR in in-domain (ID) and OOD scenarios. First, we augment the GEC training dataset with synthetic data generated using foundational generative models, thereby simulating additional errors from which the model can learn from. For out-of-domain scenarios, we simulate test-time errors from new domains similarly and in an unsupervised fashion. Additionally, to better handle NEs, we introduce retrieval-augmented correction wherein we augment the model input with entities retrieved from a datastore of NEs. Our approach is simple, scalable, and both domain- and language-agnostic. We experiment on multiple datasets and settings, showing that DARAG outperforms all our baselines, achieving 8%–30% relative WER improvements in ID and 10%–33% improvements in OOD settings.

**摘要(中文)**:
> 生成错误校正 (GEC) 已成为一种强大的后处理方法，可提高自动语音识别 (ASR) 系统的性能。在本文中，我们首先表明 GEC 模型很难泛化到训练期间遇到的特定类型的错误之外，从而限制了它们在测试时纠正新的、未见过的错误的能力，特别是在域外 (OOD) 场景中。这种现象随着命名实体（NE）而放大，除了有关 NE 的上下文信息或知识不足之外，新的 NE 还在不断出现。为了解决这些问题，我们提出了 DARAG（数据和检索增强生成纠错），这是一种旨在改进域内 (ID) 和 OOD 场景中 ASR 的 GEC 的新方法。首先，我们使用基础生成模型生成的合成数据来增强 GEC 训练数据集，从而模拟模型可以从中学习的额外错误。对于域外场景，我们以类似且无监督的方式模拟来自新域的测试时错误。此外，为了更好地处理 NE，我们引入了检索增强校正，其中我们使用从 NE 数据存储中检索的实体来增强模型输入。我们的方法简单、可扩展，并且与领域和语言无关。我们对多个数据集和设置进行实验，结果表明 DARAG 优于我们的所有基线，在 ID 方面实现了 8%–30% 的相对 WER 改进，在 OOD 设置中实现了 10%–33% 的改进。

---

## 212. LeveragingLLMs forBangla Grammar Error Correction: Error Categorization, Synthetic Data, and Model Evaluation

**类别**: `Findings`

**作者**: Pramit Bhattacharyya, Arnab Bhattacharya

**ID**: 2025.findings-acl.431

**摘要(英文)**:
> Large Language Models (LLMs) perform exceedingly well in Natural Language Understanding (NLU) tasks for many languages including English. However, despite being the fifth most-spoken language globally, Grammatical Error Correction (GEC) in Bangla remains underdeveloped. In this work, we investigate how LLMs can be leveraged for improving Bangla GEC. For that, we first do an extensive categorization of 12 error classes in Bangla, and take a survey of native Bangla speakers to collect real-world errors. We next devise a rule-based noise injection method to create grammatically incorrect sentences corresponding to correct ones. The Vaiyākaraṇa dataset, thus created, consists of 5,67,422 sentences of which 2,27,119 are erroneous. This dataset is then used to instruction-tune LLMs for the task of GEC in Bangla. Evaluations show that instruction-tuning with Vaiyākaraṇa improves GEC performance of LLMs by 3-7 percentage points as compared to the zero-shot setting, and makes them achieve human-like performance in grammatical error identification. Humans, though, remain superior in error correction. The data and code are available from https://github.com/Bangla-iitk/Vaiyakarana.

**摘要(中文)**:
> 大型语言模型 (LLM) 在包括英语在内的多种语言的自然语言理解 (NLU) 任务中表现非常出色。然而，尽管孟加拉语是全球第五大使用人数最多的语言，但其语法错误纠正 (GEC) 仍然不发达。在这项工作中，我们研究了如何利用大语言模型来改进 Bangla GEC。为此，我们首先对孟加拉语的 12 个错误类别进行了广泛的分类，并对孟加拉语母语人士进行了调查，以收集现实世界中的错误。接下来，我们设计一种基于规则的噪声注入方法来创建与正确句子相对应的语法错误句子。由此创建的 Vaiyakaraṇa 数据集由 5,67,422 个句子组成，其中 2,27,119 个句子是错误的。然后，该数据集用于对孟加拉语 GEC 任务的大语言模型进行指令调整。评估表明，与零样本设置相比，Vaiyākaraṇa 的指令调优将 LLM 的 GEC 性能提高了 3-7 个百分点，并使它们在语法错误识别方面达到了类似人类的性能。然而，人类在纠错方面仍然具有优势。数据和代码可从 https://github.com/Bangla-iitk/Vaiyakarana 获取。

---

## 213. IMPARA-GED: Grammatical Error Detection is Boosting Reference-free Grammatical Error Quality Estimator

**类别**: `Findings`

**作者**: Yusuke Sakai, Takumi Goto, Taro Watanabe

**ID**: 2025.findings-acl.1315

**摘要(英文)**:
> We propose IMPARA-GED, a novel reference-free automatic grammatical error correction (GEC) evaluation method with grammatical error detection (GED) capabilities. We focus on the quality estimator of IMPARA, an existing automatic GEC evaluation method, and construct that of IMPARA-GED using a pre-trained language model with enhanced GED capabilities. Experimental results on SEEDA, a meta-evaluation dataset for automatic GEC evaluation methods, demonstrate that IMPARA-GED achieves the highest correlation with human sentence-level evaluations.

**摘要(中文)**:
> 我们提出了IMPARA-GED，一种具有语法错误检测（GED）功能的新型无参考自动语法错误纠正（GEC）评估方法。我们关注现有的自动 GEC 评估方法 IMPARA 的质量估计器，并使用具有增强 GED 功能的预训练语言模型构建 IMPARA-GED 的质量估计器。在自动 GEC 评估方法的元评估数据集 SEEDA 上的实验结果表明，IMPARA-GED 与人类句子级评估实现了最高的相关性。

---

## 214. AdaptingLLMs for Minimal-edit Grammatical Error Correction

**类别**: `Workshop-BEA`

**作者**: Ryszard Staruch, Filip Gralinski, Daniel Dzienisiewicz

**ID**: 2025.bea-1.9

**摘要(英文)**:
> Decoder-only large language models have shown superior performance in the fluency-edit English Grammatical Error Correction, but their adaptation for minimal-edit English GEC is still underexplored. To improve their effectiveness in the minimal-edit approach, we explore the error rate adaptation topic and propose a novel training schedule method. Our experiments set a new state-of-the-art result for a single-model system on the BEA-test set. We also detokenize the most common English GEC datasets to match the natural way of writing text. During the process, we find that there are errors in them. Our experiments analyze whether training on detokenized datasets impacts the results and measure the impact of the usage of the datasets with corrected erroneous examples. To facilitate reproducibility, we have released the source code used to train our models.

**摘要(中文)**:
> 仅解码器的大型语言模型在流利编辑英语语法错误纠正中表现出了优越的性能，但它们对最小编辑英语 GEC 的适应仍处于探索之中。为了提高最小编辑方法的有效性，我们探索了错误率适应主题并提出了一种新颖的训练计划方法。我们的实验在 BEA 测试集上为单模型系统设定了新的最先进结果。我们还对最常见的英语 GEC 数据集进行去标记，以匹配文本的自然书写方式。在这个过程中，我们发现其中存在错误。我们的实验分析去标记化数据集的训练是否会影响结果，并通过纠正错误示例来衡量使用数据集的影响。为了促进可重复性，我们发布了用于训练模型的源代码。

---

## 215. Multilingual Grammatical Error Annotation: Combining Language-Agnostic Framework with Language-Specific Flexibility

**类别**: `Workshop-BEA`

**作者**: Mengyang Qiu, Tran Minh Nguyen, Zihao Huang, Zelong Li, Yang Gu, Qingyu Gao, Siliang Liu, Jungyeul Park

**ID**: 2025.bea-1.15

**摘要(英文)**:
> Grammatical Error Correction (GEC) relies on accurate error annotation and evaluation, yet existing frameworks, such as errant, face limitations when extended to typologically diverse languages. In this paper, we introduce a standardized, modular framework for multilingual grammatical error annotation. Our approach combines a language-agnostic foundation with structured language-specific extensions, enabling both consistency and flexibility across languages. We reimplement errant using stanza to support broader multilingual coverage, and demonstrate the framework’s adaptability through applications to English, German, Czech, Korean, and Chinese, ranging from general-purpose annotation to more customized linguistic refinements. This work supports scalable and interpretable GEC annotation across languages and promotes more consistent evaluation in multilingual settings. The complete codebase and annotation tools can be accessed at https://github.com/open-writing-evaluation/jp_errant_bea.

**摘要(中文)**:
> 语法错误纠正 (GEC) 依赖于准确的错误注释和评估，但现有框架（例如 errant）在扩展到类型多样的语言时面临局限性。在本文中，我们介绍了一个用于多语言语法错误注释的标准化、模块化框架。我们的方法将与语言无关的基础与结构化的特定于语言的扩展相结合，从而实现跨语言的一致性和灵活性。我们重新实现了 errant using stanza 以支持更广泛的多语言覆盖，并通过对英语、德语、捷克语、韩语和中文的应用展示了该框架的适应性，范围从通用注释到更定制的语言细化。这项工作支持跨语言的可扩展和可解释的 GEC 注释，并促进多语言环境中更一致的评估。完整的代码库和注释工具可以在 https://github.com/open-writing-evaluation/jp_errant_bea 访问。

---

## 216. Automated Scoring of aGerman Written Elicited Imitation Test

**类别**: `Workshop-BEA`

**作者**: Mihail Chifligarov, Jammila Laâguidi, Max Schellenberg, Alexander Dill, Anna Timukova, Anastasia Drackert, Ronja Laarmann-Quante

**ID**: 2025.bea-1.18

**摘要(英文)**:
> We present an approach to the automated scoring of a German Written Elicited Imitation Test, designed to assess literacy-dependent procedural knowledge in German as a foreign language. In this test, sentences are briefly displayed on a screen and, after a short pause, test-takers are asked to reproduce the sentence in writing as accurately as possible. Responses are rated on a 5-point ordinal scale, with grammatical errors typically penalized more heavily than lexical deviations. We compare a rule-based model that implements the categories of the scoring rubric through hand-crafted rules, and a deep learning model trained on pairs of stimulus sentences and written responses. Both models achieve promising performance with quadratically weighted kappa (QWK) values around .87. However, their strengths differ – the rule-based model performs better on previously unseen stimulus sentences and at the extremes of the rating scale, while the deep learning model shows advantages in scoring mid-range responses, for which explicit rules are harder to define.

**摘要(中文)**:
> 我们提出了一种德语书面引发模仿测试的自动评分方法，旨在评估德语作为外语的依赖于读写能力的程序性知识。在此测试中，句子会在屏幕上短暂显示，短暂停顿后，要求考生尽可能准确地以书面形式重现该句子。回答按 5 分顺序评分，语法错误通常比词汇偏差受到更严重的惩罚。我们比较了一个基于规则的模型，该模型通过手工制定的规则来实现评分细则的类别，以及一个在成对的刺激句子和书面反应上训练的深度学习模型。两种模型都取得了良好的性能，二次加权 kappa (QWK) 值约为 0.87。然而，它们的优势不同——基于规则的模型在以前未见过的刺激句子和评级量表的极端情况下表现更好，而深度学习模型在对中等范围的反应进行评分方面显示出优势，对此明确的规则更难定义。

---

## 217. Towards Automatic Formal Feedback on Scientific Documents

**类别**: `Workshop-BEA`

**作者**: Louise Bloch, Johannes Rückert, Christoph Friedrich

**ID**: 2025.bea-1.26

**摘要(英文)**:
> This paper introduces IPPOLIS Write, an open source, web-based tool designed to provide automated feedback on the formal aspects of scientific documents. Aimed at addressing the variability in writing and language skills among scientists and the challenges faced by supervisors in providing consistent feedback on student theses, IPPOLIS Write integrates several open source tools and custom implementations to analyze documents for a range of formal issues, including grammatical errors, consistent introduction of acronyms, comparison of literature entries with several databases, referential integrity of figures and tables, and consistent link access dates.IPPOLIS Write generates reports with statistical summaries and annotated documents that highlight specific issues and suggest improvements while also providing additional background information where appropriate. To evaluate its effectiveness, a qualitative assessment is conducted using a small but diverse dataset of bachelor’s and master’s theses sourced from arXiv. Our findings demonstrate the tool’s potential to enhance the quality of scientific documents by providing targeted and consistent feedback, thereby aiding both students and professionals in refining their document preparation skills.

**摘要(中文)**:
> 本文介绍了 IPPOLIS Write，这是一种基于网络的开源工具，旨在提供有关科学文档形式方面的自动反馈。 IPPOLIS Write 旨在解决科学家写作和语言技能的差异以及导师在为学生论文提供一致反馈方面所面临的挑战，它集成了多个开源工具和自定义实现来分析文档中的一系列正式问题，包括语法错误、首字母缩略词的一致引入、文献条目与多个数据库的比较、图形和表格的引用完整性以及一致的链接访问日期。IPPOLIS Write 生成包含统计摘要和注释文档的报告，突出显示特定问题并提出改进建议，同时还提供适当时提供额外的背景信息。为了评估其有效性，使用来自 arXiv 的小型但多样化的学士和硕士学位论文数据集进行了定性评估。我们的研究结果表明，该工具有潜力通过提供有针对性和一致的反馈来提高科学文档的质量，从而帮助学生和专业人士提高他们的文档准备技能。

---

## 218. LLMs in alliance with Edit-based models: advancing In-Context Learning for Grammatical Error Correction by Specific Example Selection

**类别**: `Workshop-BEA`

**作者**: Alexey Sorokin, Regina Nasyrova

**ID**: 2025.bea-1.38

**摘要(英文)**:
> We release LORuGEC – the first rule-annotated corpus for Russian Grammatical Error Correction. The corpus is designed for diagnostic purposes and contains 348 validation and 612 test sentences specially selected to represent complex rules of Russian writing. This makes our corpus significantly different from other Russian GEC corpora. We apply several large language models and approaches to our corpus, the best F0.5 score of 83% is achieved by 5-shot learning using YandexGPT-5 Pro model.To move further the boundaries of few-shot learning, we are the first to apply a GECTOR-like encoder model for similar examples retrieval. GECTOR-based example selection significantly boosts few-shot performance. This result is true not only for LORuGEC but for other Russian GEC corpora as well. On LORuGEC, the GECTOR-based retriever might be further improved using contrastive tuning on the task of rule label prediction. All these results hold for a broad class of large language models.

**摘要(中文)**:
> 我们发布了 LORuGEC——第一个用于俄语语法错误纠正的规则注释语料库。该语料库专为诊断目的而设计，包含 348 个验证句子和 612 个测试句子，专门用于代表俄语写作的复杂规则。这使得我们的语料库与其他俄罗斯 GEC 语料库显着不同。我们将多种大型语言模型和方法应用于我们的语料库，使用 YandexGPT-5 Pro 模型通过 5-shot 学习实现了 83% 的最佳 F0.5 分数。为了进一步突破少样本学习的界限，我们第一个应用类似 GECTOR 的编码器模型来进行相似示例检索。基于 GECTOR 的示例选择显着提高了小样本性能。这个结果不仅适用于 LORuGEC，也适用于其他俄罗斯 GEC 语料库。在 LORuGEC 上，基于 GECTOR 的检索器可以通过规则标签预测任务的对比调整来进一步改进。所有这些结果都适用于一大类大型语言模型。

---

## 219. GermDetect: Verb Placement Error Detection Datasets for Learners ofGermanic Languages

**类别**: `Workshop-BEA`

**作者**: Noah-Manuel Michael, Andrea Horbach

**ID**: 2025.bea-1.59

**摘要(英文)**:
> Correct verb placement is difficult to acquire for second-language (L2) learners of Germanic languages. However, word order errors and, consequently, verb placement errors, are heavily underrepresented in benchmark datasets of NLP tasks such as grammatical error detection (GED)/correction (GEC) and linguistic acceptability assessment (LA). If they are present, they are most often naively introduced, or classification occurs at the sentence level, preventing the precise identification of individual errors and the provision of appropriate feedback to learners. To remedy this, we presentGermDetect: Universal Dependencies-based (UD), linguistically informed verb placement errordetection datasets for learners ofGermanic languages, designed as a token classification task. As our datasets are UD-based, we are able to provide them in most major Germanic languages: Afrikaans, German, Dutch, Faroese, Icelandic, Danish, Norwegian (Bokmål and Nynorsk), and Swedish. We train multilingual BERT (mBERT) models on GermDetect and show that linguistically informed, UD-based error induction results in more effective models for verb placement error detection than models trained on naively introduced errors. Finally, we conduct ablation studies on multilingual training and find that lower-resource languages benefit from the inclusion of structurally related languages in training.

**摘要(中文)**:
> 对于日耳曼语言的第二语言（L2）学习者来说，掌握正确的动词位置是很困难的。然而，词序错误以及动词位置错误在语法错误检测 (GED)/纠正 (GEC) 和语言可接受性评估 (LA) 等 NLP 任务的基准数据集中严重不足。如果存在，它们通常是天真地引入的，或者在句子级别进行分类，从而妨碍了对个体错误的精确识别以及向学习者提供适当的反馈。为了解决这个问题，我们提出了 GermDetect：基于通用依赖关系 (UD)、语言学上通知的动词位置错误检测数据集，适用于日耳曼语言学习者，设计为标记分类任务。由于我们的数据集是基于 UD 的，因此我们能够提供大多数主要日耳曼语言的数据：南非荷兰语、德语、荷兰语、法罗语、冰岛语、丹麦语、挪威语（博克马尔语和尼诺斯克语）和瑞典语。我们在 GermDetect 上训练多语言 BERT (mBERT) 模型，并表明，与单纯引入的错误训练的模型相比，基于语言的、基于 UD 的错误归纳可以产生更有效的动词位置错误检测模型。最后，我们对多语言训练进行了消融研究，发现资源较低的语言受益于在训练中包含结构相关的语言。

---

## 220. Paragraph-level Error Correction and Explanation Generation: Case Study forEstonian

**类别**: `Workshop-BEA`

**作者**: Martin Vainikko, Taavi Kamarik, Karina Kert, Krista Liin, Silvia Maine, Kais Allkivi, Annekatrin Kaivapalu, Mark Fishel

**ID**: 2025.bea-1.72

**摘要(英文)**:
> We present a case study on building task-specific models for grammatical error correction and explanation generation tailored to learners of Estonian. Our approach handles whole paragraphs instead of sentences and leverages prompting proprietary large language models for generating synthetic training data, addressing the limited availability of error correction data and the complete absence of correction justification/explanation data in Estonian. We describe the chosen approach and pipeline and provide technical details for the experimental part. The final outcome is a set of open-weight models, which are released with a permissive license along with the generated synthetic error correction and explanation data.

**摘要(中文)**:
> 我们提出了一个案例研究，建立针对爱沙尼亚语学习者的语法错误纠正和解释生成的特定任务模型。我们的方法处理整个段落而不是句子，并利用提示专有的大型语言模型来生成合成训练数据，解决纠错数据的有限可用性以及爱沙尼亚语中完全缺乏纠正理由/解释数据的问题。我们描述了所选择的方法和流程，并提供了实验部分的技术细节。最终结果是一组开放权重模型，这些模型与生成的综合误差校正和解释数据一起以许可的方式发布。

---

## 221. IntroducingOmniGEC: A Silver Multilingual Dataset for Grammatical Error Correction

**类别**: `Workshop-UNLP`

**作者**: Roman Kovalchuk, Mariana Romanyshyn, Petro Ivaniuk

**ID**: 2025.unlp-1.17

**摘要(英文)**:
> In this paper, we introduce OmniGEC, a collection of multilingual silver-standard datasets for the task of Grammatical Error Correction (GEC), covering eleven languages: Czech, English, Estonian, German, Greek, Icelandic, Italian, Latvian, Slovene, Swedish, and Ukrainian. These datasets facilitate the development of multilingual GEC solutions and help bridge the data gap in adapting English GEC solutions to multilingual GEC. The texts in the datasets originate from three sources: Wikipedia edits for the eleven target languages, subreddits from Reddit in the eleven target languages, and the Ukrainian-only UberText 2.0 social media corpus. While Wikipedia edits were derived from human-made corrections, the Reddit and UberText 2.0 data were automatically corrected with the GPT-4o-mini model. The quality of the corrections in the datasets was evaluated both automatically and manually. Finally, we fine-tune two open-source large language models — Aya-Expanse (8B) and Gemma-3 (12B) — on the multilingual OmniGEC corpora and achieve state-of-the-art (SOTA) results for paragraph-level multilingual GEC. The dataset collection and the best-performing models are available on Hugging Face.

**摘要(中文)**:
> 在本文中，我们介绍了 OmniGEC，这是一个用于语法错误纠正（GEC）任务的多语言银标准数据集，涵盖 11 种语言：捷克语、英语、爱沙尼亚语、德语、希腊语、冰岛语、意大利语、拉脱维亚语、斯洛文尼亚语、瑞典语和乌克兰语。这些数据集促进了多语言 GEC 解决方案的开发，并有助于弥合英语 GEC 解决方案适应多语言 GEC 的数据差距。数据集中的文本来自三个来源：维基百科对 11 种目标语言的编辑、Reddit 中 11 种目标语言的 subreddits 以及仅限乌克兰语的 UberText 2.0 社交媒体语料库。虽然维基百科的编辑源自人为更正，但 Reddit 和 UberText 2.0 数据是使用 GPT-4o-mini 模型自动更正的。自动和手动评估数据集中校正的质量。最后，我们在多语言 OmniGEC 语料库上对两个开源大型语言模型——Aya-Expanse (8B) 和 Gemma-3 (12B) 进行了微调，并实现了段落级多语言 GEC 的最先进 (SOTA) 结果。 Hugging Face 上提供了数据集集合和性能最佳的模型。

## 自然语言推理 (34 篇)

---

## 222. Assessment and manipulation of latent constructs in pre-trained language models using psychometric scales

**类别**: `主会-长文`

**作者**: Maor Reuben, Ortal Slobodin, Idan-Chaim Cohen, Aviad Elyashar, Orna Braun-Lewensohn, Odeya Cohen, Rami Puzis

**ID**: 2025.acl-long.121

**摘要(英文)**:
> Human-like personality traits have recently been discovered in large language models, raising the hypothesis that their (known and as yet undiscovered) biases conform with human latent psychological constructs. While large conversational models may be tricked into answering psychometric questionnaires, the latent psychological constructs of thousands of simpler transformers, trained for other tasks, cannot be assessed because appropriate psychometric methods are currently lacking. Here, we show how standard psychological questionnaires can be reformulated into natural language inference prompts, and we provide a code library to support the psychometric assessment of arbitrary models. We demonstrate, using a sample of 88 publicly available models, the existence of human-like mental health-related constructs—including anxiety, depression, and the sense of coherence—which conform with standard theories in human psychology and show similar correlations and mitigation strategies. The ability to interpret and rectify the performance of language models by using psychological tools can boost the development of more explainable, controllable, and trustworthy models.

**摘要(中文)**:
> 最近在大型语言模型中发现了类人的人格特征，提出了这样的假设：它们的（已知且尚未发现的）偏见符合人类潜在的心理构造。虽然大型对话模型可能会被欺骗来回答心理测量问卷，但由于目前缺乏适当的心理测量方法，因此无法评估数千个经过其他任务训练的更简单变压器的潜在心理结构。在这里，我们展示了如何将标准心理问卷重新表述为自然语言推理提示，并且我们提供了一个代码库来支持任意模型的心理测量评估。我们使用 88 个公开可用的模型作为样本，证明了与人类心理健康相关的结构（包括焦虑、抑郁和连贯感）的存在，这些结构符合人类心理学的标准理论，并显示出类似的相关性和缓解策略。使用心理工具解释和纠正语言模型性能的能力可以促进更可解释、更可控和更值得信赖的模型的开发。

---

## 223. Less for More: Enhanced Feedback-aligned MixedLLMs for Molecule Caption Generation and Fine-GrainedNLIEvaluation

**类别**: `主会-长文`

**作者**: Dimitris Gkoumas, Maria Liakata

**ID**: 2025.acl-long.144

**摘要(英文)**:
> Scientific language models drive research innovation but require extensive fine-tuning on large datasets. This work enhances such models by improving their inference and evaluation capabilities with minimal or no additional training. Focusing on molecule caption generation, we explore post-training synergies between alignment fine-tuning and model merging in a cross-modal setup. We reveal intriguing insights into the behaviour and suitability of such methods while significantly surpassing state-of-the-art models. Moreover, we propose a novel atomic-level evaluation method leveraging off-the-shelf Natural Language Inference (NLI) models for use in the unseen chemical domain. Our experiments demonstrate that our evaluation operates at the right level of granularity, effectively handling multiple content units and subsentence reasoning, while widely adopted NLI methods consistently misalign with assessment criteria.

**摘要(中文)**:
> 科学语言模型推动研究创新，但需要对大型数据集进行广泛的微调。这项工作通过在最少或无需额外培训的情况下提高其推理和评估能力来增强此类模型。专注于分子标题生成，我们探索跨模式设置中对齐微调和模型合并之间的训练后协同作用。我们揭示了对此类方法的行为和适用性的有趣见解，同时显着超越了最先进的模型。此外，我们提出了一种新颖的原子级评估方法，利用现成的自然语言推理（NLI）模型，用于看不见的化学领域。我们的实验表明，我们的评估以正确的粒度进行，有效地处理多个内容单元和子句推理，而广泛采用的 NLI 方法始终与评估标准不一致。

---

## 224. Dually Self-Improved Counterfactual Data Augmentation Using Large Language Model

**类别**: `主会-长文`

**作者**: Luhao Zhang, Xinyu Zhang, Linmei Hu, Dandan Song, Liqiang Nie

**ID**: 2025.acl-long.260

**摘要(英文)**:
> Counterfactual data augmentation, which generates minimally edited tokens to alter labels, has become a key approach to improving model robustness in natural language processing (NLP). It is usually implemented by first identifying the causal terms and then modifying these terms to create counterfactual candidates. The emergence of large language models (LLMs) has effectively facilitated the task of counterfactual data augmentation. However, existing LLM-based approaches still face some challenges in 1) accurately extracting the task-specific causal terms, and 2) the quality of LLM-generated counterfacts. To address the issues, we propose a dually self-improved counterfactual data augmentation method using LLM for the Natural Language Inference (NLI) task. On the one hand, we design a self-improved strategy employing the attention distribution of the task model to identify the task-specific causal terms, which is lightweight and task-specific. On the other hand, a second self-improved strategy based on direct preference optimization is utilized to refine LLM-generated counterfacts, achieving high-quality counterfacts. Finally, a balanced loss preventing over-emphasis on augmented data is proposed to retrain the task model on the fusion of existing data and generated counterfacts. Extensive experiments on NLI benchmarks demonstrate the effectiveness of our proposed method in generating high-quality counterfacts for improving task performance.

**摘要(中文)**:
> 反事实数据增强可生成经过最少编辑的标记来更改标签，已成为提高自然语言处理 (NLP) 中模型稳健性的关键方法。它通常是通过首先识别因果项，然后修改这些项以创建反事实候选项来实现的。大型语言模型（LLM）的出现有效地促进了反事实数据增强的任务。然而，现有的基于 LLM 的方法仍然面临一些挑战：1）准确提取特定于任务的因果项，2）LLM 生成的反事实的质量。为了解决这些问题，我们提出了一种使用 LLM 进行自然语言推理（NLI）任务的双重自我改进的反事实数据增强方法。一方面，我们设计了一种自我改进的策略，利用任务模型的注意力分布来识别特定于任务的因果项，该策略是轻量级且特定于任务的。另一方面，基于直接偏好优化的第二个自我改进策略被用来细化LLM生成的反事实，实现高质量的反事实。最后，提出了一种防止过度强调增强数据的平衡损失，以重新训练现有数据和生成的反事实融合的任务模型。对 NLI 基准的大量实验证明了我们提出的方法在生成高质量反事实以提高任务性能方面的有效性。

---

## 225. Conditional Dichotomy Quantification via Geometric Embedding

**类别**: `主会-长文`

**作者**: Shaobo Cui, Wenqing Liu, Yiyang Feng, Jiawei Zhou, Boi Faltings

**ID**: 2025.acl-long.383

**摘要(英文)**:
> Conditional dichotomy, the contrast between two outputs conditioned on the same context, is vital for applications such as debate, defeasible inference, and causal reasoning. Existing methods that rely on semantic similarity often fail to capture the nuanced oppositional dynamics essential for these applications. Motivated by these limitations, we introduce a novel task, Conditional Dichotomy Quantification (ConDQ), which formalizes the direct measurement of conditional dichotomy and provides carefully constructed datasets covering debate, defeasible natural language inference, and causal reasoning scenarios. To address this task, we develop the Dichotomy-oriented Geometric Embedding (DoGE) framework, which leverages complex-valued embeddings and a dichotomous objective to model and quantify these oppositional relationships effectively. Extensive experiments validate the effectiveness and versatility of DoGE, demonstrating its potential in understanding and quantifying conditional dichotomy across diverse NLP applications. Our code and datasets are available at https://github.com/cui-shaobo/conditional-dichotomy-quantification.

**摘要(中文)**:
> 条件二分法，即在相同上下文条件下的两个输出之间的对比，对于辩论、可废止推理和因果推理等应用至关重要。依赖语义相似性的现有方法通常无法捕获这些应用程序所必需的微妙的对立动态。受这些限制的推动，我们引入了一项新颖的任务，即条件二分法量化（ConDQ），它形式化了条件二分法的直接测量，并提供了精心构建的数据集，涵盖辩论、可废止的自然语言推理和因果推理场景。为了解决这项任务，我们开发了面向二分法的几何嵌入（DoGE）框架，该框架利用复值嵌入和二分目标来有效地建模和量化这些对立关系。大量实验验证了 DoGE 的有效性和多功能性，展示了其在理解和量化不同 NLP 应用中的条件二分法方面的潜力。我们的代码和数据集可在 https://github.com/cui-shaobo/conditional-dihotomy-quantification 获取。

---

## 226. Semantic-Eval : A Semantic Comprehension Evaluation Framework for Large Language Models Generation without Training

**类别**: `主会-长文`

**作者**: Shusheng Li, Jiale Li, Yifei Qu, Xinwei Shi, Yanliang Guo, Ziyi He, Yubo Wang, Wenjun Tan

**ID**: 2025.acl-long.477

**摘要(英文)**:
> With the increasing prominence of large language models (LLMs), evaluating their text-generation capabilities has become an essential research challenge. Although LLM-based evaluation methods exhibit robust performance, the inherent stochastic nature of the LLM generation process introduces a degree of uncertainty in alignment with human preferences. To address this limitation, we propose Semantic-Eval, the first training-free framework designed to assess LLM-generated text based on semantic understanding. This framework computes semantic similarity between pairwise texts to evaluate the interdependence of semantic units, integrating a graph-based weighting mechanism to account for the differential contributions of individual sentences. A pre-trained natural language inference (NLI) model is also incorporated to mitigate potential semantic relationship biases. We evaluate Semantic-Eval across eight datasets that encompass four common NLP tasks. The experimental results indicate that Semantic-Eval surpasses traditional N-gram and BERT-based evaluation metrics, aligning more closely with human judgments and demonstrating a higher correlation than smaller LLMs. However, it slightly lags behind GPT-4. Finally, we demonstrate the effectiveness of Semantic-Eval in evaluating the generation quality of 13 large language models. The code is publicly available at https://github.com/LssTry/Semantic-Eval.

**摘要(中文)**:
> 随着大型语言模型（LLM）的日益突出，评估其文本生成能力已成为一项重要的研究挑战。虽然基于大语言模型的评估方法表现出稳健的性能，但大语言模型生成过程固有的随机性引入了一定程度的与人类偏好一致的不确定性。为了解决这个限制，我们提出了 Semantic-Eval，这是第一个免训练框架，旨在评估基于语义理解的 LLM 生成的文本。该框架计算成对文本之间的语义相似性，以评估语义单元的相互依赖性，集成基于图的加权机制来解释各个句子的差异贡献。还结合了预先训练的自然语言推理 (NLI) 模型，以减轻潜在的语义关系偏差。我们评估了包含四个常见 NLP 任务的八个数据集的语义评估。实验结果表明，Semantic-Eval 超越了传统的 N-gram 和基于 BERT 的评估指标，更符合人类的判断，并且比小型大语言模型表现出更高的相关性。然而，它稍微落后于 GPT-4。最后，我们证明了 Semantic-Eval 在评估 13 个大型语言模型的生成质量方面的有效性。该代码可在 https://github.com/LssTry/Semantic-Eval 上公开获取。

---

## 227. Learning Together to Perform Better: Teaching Small-ScaleLLMs to Collaborate via Preferential Rationale Tuning

**类别**: `主会-长文`

**作者**: Sohan Patnaik, Milan Aggarwal, Sumit Bhatia, Balaji Krishnamurthy

**ID**: 2025.acl-long.754

**摘要(英文)**:
> LLMs such as GPT-4 have shown a remarkable ability to solve complex questions by generating step-by-step rationales. Prior works have utilized this capability to improve smaller and cheaper LMs (say, with 7B parameters). However, various practical constraints, such as copyright and legal issues, owing to lack of transparency in the pre-training data of large (often closed) models, prevent their use in commercial settings. Little focus has been given to improving the innate reasoning ability of smaller models without distilling information from larger LLMs. To address this, we propose COLLATE, a trainable framework that tunes a (small) LLM to generate those outputs from a pool of diverse rationales that selectively improves the downstream task. COLLATE enforces multiple instances of the same LLM to exhibit distinct behavior and employs them to generate rationales to obtain diverse outputs. The LLM is then tuned via preference optimization to choose the candidate rationale which maximizes the likelihood of ground-truth answer. COLLATE outperforms several trainable and prompting baselines on 5 datasets across 3 domains - maths problem solving, natural language inference, and commonsense reasoning. We show the efficacy of COLLATE on LLMs from different model families across varying parameter scales (1B to 8B) and demonstrate the benefit of multiple rationale providers guided by the end task through ablations. Code is released here (https://github.com/Sohanpatnaik106/collate).

**摘要(中文)**:
> GPT-4 等大语言模型已展现出通过逐步给出理由来解决复杂问题的卓越能力。之前的工作已经利用这种能力来改进更小、更便宜的 LM（例如，具有 7B 参数）。然而，由于大型（通常是封闭的）模型的预训练数据缺乏透明度，各种实际限制（例如版权和法律问题）阻碍了它们在商业环境中的使用。在不从较大的大语言模型中提取信息的情况下，很少有人关注如何提高较小模型的固有推理能力。为了解决这个问题，我们提出了 COLLATE，这是一个可训练的框架，可以调整（小型）LLM，从一系列不同的理由中生成这些输出，从而有选择地改进下游任务。 COLLATE 强制同一 LLM 的多个实例表现出不同的行为，并利用它们生成获得不同输出的基本原理。然后，大语言模型通过偏好优化进行调整，以选择最大化真实答案可能性的候选理由。 COLLATE 在跨 3 个领域（数学问题解决、自然语言推理和常识推理）的 5 个数据集上优于多个可训练和提示基线。我们展示了 COLLATE 对不同参数范围（1B 到 8B）的不同模型系列的 LLM 的功效，并通过消融展示了由最终任务引导的多个基本原理提供者的好处。代码在这里发布（https://github.com/Sohanpatnaik106/collat​​e）。

---

## 228. Entailed Between the Lines: Incorporating Implication intoNLI

**类别**: `主会-长文`

**作者**: Shreya Havaldar, Hamidreza Alvari, John Palowitch, Mohammad Javad Hosseini, Senaka Buthpitiya, Alex Fabrikant

**ID**: 2025.acl-long.1552

**摘要(英文)**:
> Much of human communication depends on implication, conveying meaning beyond literal words to express a wider range of thoughts, intentions, and feelings. For models to better understand and facilitate human communication, they must be responsive to the text’s implicit meaning. We focus on Natural Language Inference (NLI), a core tool for many language tasks, and find that state-of-the-art NLI models and datasets struggle to recognize a range of cases where entailment is implied, rather than explicit from the text. We formalize implied entailment as an extension of the NLI task and introduce the Implied NLI dataset (INLI) to help today’s LLMs both recognize a broader variety of implied entailments and to distinguish between implicit and explicit entailment. We show how LLMs fine-tuned on INLI understand implied entailment and can generalize this understanding across datasets and domains.

**摘要(中文)**:
> 人类交流很大程度上依赖于暗示，传达超越字面意义的意义，以表达更广泛的思想、意图和感受。为了让模型更好地理解和促进人类交流，它们必须对文本的隐含含义做出响应。我们专注于自然语言推理（NLI），它是许多语言任务的核心工具，并发现最先进的 NLI 模型和数据集很难识别一系列隐含蕴含的情况，而不是文本中明确的情况。我们将隐含蕴涵形式化为 NLI 任务的扩展，并引入隐含 NLI 数据集 (INLI)，以帮助当今的大语言模型识别更广泛的隐含蕴涵，并区分隐含蕴涵和显式蕴涵。我们展示了在 INLI 上进行微调的大语言模型如何理解隐含蕴涵，并可以跨数据集和领域推广这种理解。

---

## 229. CiteEval: Principle-Driven Citation Evaluation for Source Attribution

**类别**: `主会-长文`

**作者**: Yumo Xu, Peng Qi, Jifan Chen, Kunlun Liu, Rujun Han, Lan Liu, Bonan Min, Vittorio Castelli, Arshit Gupta, Zhiguo Wang

**ID**: 2025.acl-long.1574

**摘要(英文)**:
> Citation quality is crucial in information-seeking systems, directly influencing trust and the effectiveness of information access. Current evaluation frameworks, both human and automatic, mainly rely on Natural Language Inference (NLI) to assess binary or ternary supportiveness from cited sources, which we argue is a suboptimal proxy for citation evaluation. In this work we introduce CiteEval, a citation evaluation framework driven by principles focusing on fine-grained citation assessment within a broad context, encompassing not only the cited sources but the full retrieval context, user query, and generated text. Guided by the proposed framework, we construct CiteBench, a multi-domain benchmark with high-quality human annotations on citation quality. To enable efficient evaluation, we further develop CiteEval-Auto, a suite of model-based metrics that exhibit strong correlation with human judgments. Experiments across diverse systems demonstrate CiteEval-Auto’s superior ability to capture the multifaceted nature of citations compared to existing metrics, offering a principled and scalable approach to evaluate and improve model-generated citations.

**摘要(中文)**:
> 引文质量在信息检索系统中至关重要，直接影响信任和信息访问的有效性。当前的人工和自动评估框架主要依靠自然语言推理（NLI）来评估引用来源的二元或三元支持性，我们认为这是引文评估的次优代理。在这项工作中，我们介绍了 CiteEval，这是一个引文评估框架，其原则侧重于广泛上下文中的细粒度引文评估，不仅包含引用的来源，还包含完整的检索上下文、用户查询和生成的文本。在所提出的框架的指导下，我们构建了 CiteBench，这是一个多领域基准，具有高质量的引文质量人工注释。为了实现高效评估，我们进一步开发了 CiteEval-Auto，这是一套基于模型的指标，与人类判断具有很强的相关性。跨不同系统的实验表明，与现有指标相比，CiteEval-Auto 具有捕获引文多方面性质的卓越能力，提供了一种有原则且可扩展的方法来评估和改进模型生成的引文。

---

## 230. Introducing Verification Task of Set Consistency with Set-Consistency Energy Networks

**类别**: `主会-长文`

**作者**: Mooho Song, Hye Ryung Son, Jay-Yoon Lee

**ID**: 2025.acl-long.1599

**摘要(英文)**:
> Examining logical inconsistencies among multiple statements (such as collections of sentences or question-answer pairs) is a crucial challenge in machine learning, particularly for ensuring the safety and reliability of models. Traditional methods that rely on 1:1 pairwise comparisons often fail to capture inconsistencies that only emerge when more than two statements are evaluated collectively. To address this gap, we introduce the task of set-consistency verification, an extension of natural language inference (NLI) that assesses the logical coherence of entire sets rather than isolated pairs. Building on this task, we present the Set-Consistency Energy Network (SC-Energy), a novel model that employs a margin-based loss to learn the compatibility among a collection of statements. Our approach not only efficiently verifies inconsistencies and pinpoints the specific statements responsible for logical contradictions, but also significantly outperforms existing methods, including prompting-based LLM models. Furthermore, we release two new datasets: Set-LConVQA and Set-SNLI for set-consistency verification task.

**摘要(中文)**:
> 检查多个语句（例如句子集合或问答对）之间的逻辑不一致是机器学习中的一个关键挑战，特别是在确保模型的安全性和可靠性方面。依赖 1:1 成对比较的传统方法通常无法捕获只有在共同评估两个以上语句时才会出现的不一致情况。为了解决这一差距，我们引入了集合一致性验证的任务，这是自然语言推理（NLI）的扩展，它评估整个集合而不是孤立对的逻辑一致性。在此任务的基础上，我们提出了集合一致性能量网络（SC-Energy），这是一种新颖的模型，它采用基于边际的损失来学习语句集合之间的兼容性。我们的方法不仅有效地验证不一致并查明造成逻辑矛盾的具体陈述，而且显着优于现有方法，包括基于提示的 LLM 模型。此外，我们还发布了两个新数据集：Set-LConVQA 和 Set-SNLI，用于集合一致性验证任务。

---

## 231. Explainable Hallucination through Natural Language Inference Mapping

**类别**: `Findings`

**作者**: Wei-Fan Chen, Zhixue Zhao, Akbar Karimi, Lucie Flek

**ID**: 2025.findings-acl.96

**摘要(英文)**:
> Large language models (LLMs) often generate hallucinated content, making it crucial to identify and quantify inconsistencies in their outputs. We introduce HaluMap, a post-hoc framework that detects hallucinations by mapping entailment and contradiction relations between source inputs and generated outputs using a natural language inference (NLI) model. To improve reliability, we propose a calibration step leveraging intra-text relations to refine predictions. HaluMap outperforms state-of-the-art NLI-based methods by five percentage points compared to other training-free approaches, while providing clear, interpretable explanations. As a training-free and model-agnostic approach, HaluMap offers a practical solution for verifying LLM outputs across diverse NLP tasks. The resources of this paper are available at https://github.com/caisa-lab/acl25-halumap.

**摘要(中文)**:
> 大型语言模型 (LLM) 通常会生成幻觉内容，因此识别和量化其输出中的不一致之处至关重要。我们引入了 HaluMap，这是一个事后框架，它通过使用自然语言推理（NLI）模型映射源输入和生成输出之间的蕴涵和矛盾关系来检测幻觉。为了提高可靠性，我们提出了利用文本内关系来完善预测的校准步骤。与其他免训练方法相比，HaluMap 的性能比最先进的基于 NLI 的方法高出五个百分点，同时提供清晰、可解释的解释。作为一种免训练且与模型无关的方法，HaluMap 提供了一种实用的解决方案，用于验证跨不同 NLP 任务的 LLM 输出。本文的资源可在 https://github.com/caisa-lab/acl25-halumap 获取。

---

## 232. Drop Dropout on Single Epoch Language Model Pretraining

**类别**: `Findings`

**作者**: Houjun Liu, John Bauer, Christopher D Manning

**ID**: 2025.findings-acl.111

**摘要(英文)**:
> Originally, dropout was seen as a breakthrough regularization technique that reduced overfitting and improved performance in almost all applications of deep learning by reducing overfitting. Yet, single-epoch pretraining tasks common to modern LLMs yield minimal overfitting, leading to dropout not being used for large LLMs. Nevertheless, no thorough empirical investigation has been done on the role of dropout in LM pretraining. Through experiments in single-epoch pretraining of both masked (BERT) and autoregressive (Pythia 160M and 1.4B) LMs with varying levels of dropout, we find that downstream performance in language modeling, morpho-syntax (BLiMP), question answering (SQuAD), and natural-language inference (MNLI) improves when dropout is not applied during pretraining. We additionally find that the recently-introduced “early dropout” also degrades performance over applying no dropout at all. We further investigate the models’ editability, and find that models trained without dropout are more successful in gradient-based model editing (MEND) and equivalent in representation-based model editing (ReFT). Therefore, we advocate to **drop dropout** during single-epoch pretraining.

**摘要(中文)**:
> 最初，dropout 被视为一种突破性的正则化技术，它可以减少过度拟合，并通过减少过度拟合来提高几乎所有深度学习应用中的性能。然而，现代大语言模型常见的单周期预训练任务产生的过度拟合最小化，导致大型大语言模型不使用 dropout。然而，对于 dropout 在 LM 预训练中的作用还没有进行彻底的实证研究。通过对具有不同 dropout 水平的屏蔽 (BERT) 和自回归 (Pythia 160M 和 1.4B) LM 进行单周期预训练实验，我们发现，当预训练期间不应用 dropout 时，语言建模、形态语法 (BLiMP)、问答 (SQuAD) 和自然语言推理 (MNLI) 的下游性能会得到改善。我们还发现，与根本不应用 dropout 相比，最近引入的“early dropout”也会降低性能。我们进一步研究了模型的可编辑性，发现在没有 dropout 的情况下训练的模型在基于梯度的模型编辑（MEND）和基于表示的模型编辑（ReFT）中更成功。因此，我们主张在单周期预训练期间**丢弃 dropout**。

---

## 233. Task Calibration: Calibrating Large Language Models on Inference Tasks

**类别**: `Findings`

**作者**: Yingjie Li, Yun Luo, Xiaotian Xie, Yue Zhang

**ID**: 2025.findings-acl.362

**摘要(英文)**:
> Large language models (LLMs) have exhibited impressive zero-shot performance on inference tasks. However, LLMs may suffer from spurious correlations between input texts and output labels, which limits LLMs’ ability to reason based purely on general language understanding. For example, in the natural language inference (NLI) task, LLMs may make predictions primarily based on premise or hypothesis, rather than both components. To address this problem that may lead to unexpected performance degradation, we propose task calibration (TC), a zero-shot and inference-only calibration method inspired by mutual information which recovers LLM performance through task reformulation. In NLI, TC encourages LLMs to reason based on both premise and hypothesis, while mitigating the models’ over-reliance on individual premise or hypothesis for inference. Experimental results show that TC achieves a substantial improvement on 13 different benchmarks in the zero-shot setup. We further validate the effectiveness of TC in few-shot setups and various natural language understanding tasks. Further analysis indicates that TC is also robust to prompt templates and has the potential to be integrated with other calibration methods. We publicly release our code to facilitate future research.

**摘要(中文)**:
> 大型语言模型（LLM）在推理任务上表现出了令人印象深刻的零样本性能。然而，大语言模型可能会受到输入文本和输出标签之间虚假相关性的影响，这限制了大语言模型纯粹基于一般语言理解进行推理的能力。例如，在自然语言推理（NLI）任务中，大语言模型可能主要基于前提或假设而不是两者来进行预测。为了解决这个可能导致意外性能下降的问题，我们提出了任务校准（TC），这是一种零样本和仅推理的校准方法，其灵感来自互信息，通过任务重新制定来恢复 LLM 性能。在 NLI 中，TC 鼓励大语言模型基于前提和假设进行推理，同时减轻模型对个人前提或假设进行推理的过度依赖。实验结果表明，TC 在零样本设置中的 13 个不同基准上取得了显着的改进。我们进一步验证了 TC 在小样本设置和各种自然语言理解任务中的有效性。进一步分析表明，TC 对提示模板也具有鲁棒性，并且具有与其他校准方法集成的潜力。我们公开发布我们的代码以促进未来的研究。

---

## 234. Supervised and Unsupervised Probing of Shortcut Learning: Case Study on the Emergence and Evolution of Syntactic Heuristics inBERT

**类别**: `Findings`

**作者**: Elke Vandermeerschen, Miryam de Lhoneux

**ID**: 2025.findings-acl.499

**摘要(英文)**:
> Contemporary language models (LMs) such as BERT (Devlin et al., 2019, T5 (Raffel et al., 2023), GPT-4 (OpenAI, 2023), have exhibited remarkable capabilities, effectively addressing long-standing challenges in the field. However, these models rely on shortcut learning, using a decision rule that relies on superficial cues that are spuriously correlated with the labels (Geirhos et al., 2020). In this research, we focus on the reliance on a specific type of shortcuts, namely syntactic heuristics, in BERT when performing Natural Language Inference (NLI), a representative task in Natural Language Understanding (Jeretic et al., 2020). By making use of two probing methods, one supervised, one unsupervised, we investigate where these shortcuts emerge, how they evolve and how they impact the latent knowledge of the LM. Our findings reveal that syntactic heuristics are absent in pretrained models but emerge and evolve as the model is finetuned with datasets of increasing size. The adoption of these shortcuts varies across different hidden layers, with specific layers closer to the output contributing more to this phenomenon. Despite the model’s reliance on shortcuts during inference, it retains information relevant to the task, and our supervised and unsupervised probes process this information differently.

**摘要(中文)**:
> BERT（Devlin 等人，2019）、T5（Raffel 等人，2023）、GPT-4（OpenAI，2023）等当代语言模型（LM）已经展现出非凡的能力，有效解决了该领域长期存在的挑战。然而，这些模型依赖于捷径学习，使用依赖于与标签虚假相关的表面线索的决策规则（Geirhos 等人，2020）。在这项研究中，我们重点关注 BERT 在执行自然语言推理 (NLI) 时对一种特定类型的捷径（即句法启发式）的依赖，这是自然语言理解中的一项代表性任务（Jeretic 等人，2020）。通过使用两种探测方法（一种有监督的、一种无监督的），我们研究了这些捷径的出现位置、它们如何演变以及它们如何影响 LM 的潜在知识。这些捷径在预训练模型中不存在，但随着模型随着数据集大小的增加而不断变化，这些捷径的采用在不同的隐藏层中有所不同，接近输出的特定层对这种现象的贡献更大，尽管模型在推理过程中依赖于捷径，但它保留了与任务相关的信息，并且我们的监督和无监督探针以不同的方式处理这些信息。

---

## 235. Refining Sentence Embedding Model through Ranking Sentences Generation with Large Language Models

**类别**: `Findings`

**作者**: Liyang He, Chenglong Liu, Rui Li, Zhenya Huang, Shulan Ruan, Jun Zhou, Enhong Chen

**ID**: 2025.findings-acl.553

**摘要(英文)**:
> Sentence embedding is essential for many NLP tasks, with contrastive learning methods achieving strong performance using annotated datasets like NLI. Yet, the reliance on manual labels limits scalability. Recent studies leverage large language models (LLMs) to generate sentence pairs, reducing annotation dependency. However, they overlook ranking information crucial for fine-grained semantic distinctions. To tackle this challenge, we propose a method for controlling the generation direction of LLMs in the latent space. Unlike unconstrained generation, the controlled approach ensures meaningful semantic divergence. Then, we refine exist sentence embedding model by integrating ranking information and semantic information. Experiments on multiple benchmarks demonstrate that our method achieves new SOTA performance with a modest cost in ranking sentence synthesis.

**摘要(中文)**:
> 句子嵌入对于许多 NLP 任务至关重要，对比学习方法使用 NLI 等带注释的数据集实现了强大的性能。然而，对手动标签的依赖限制了可扩展性。最近的研究利用大型语言模型（LLM）来生成句子对，减少注释依赖性。然而，他们忽略了对于细粒度语义区分至关重要的排名信息。为了应对这一挑战，我们提出了一种控制潜在空间中 LLM 生成方向的方法。与不受约束的生成不同，受控方法确保有意义的语义分歧。然后，我们通过整合排名信息和语义信息来细化现有的句子嵌入模型。多个基准测试的实验表明，我们的方法在排序句子合成方面以适度的成本实现了新的 SOTA 性能。

---

## 236. A Rose by Any Other Name:LLM-Generated Explanations Are Good Proxies for Human Explanations to Collect Label Distributions onNLI

**类别**: `Findings`

**作者**: Beiduo Chen, Siyao Peng, Anna Korhonen, Barbara Plank

**ID**: 2025.findings-acl.562

**摘要(英文)**:
> Disagreement in human labeling is ubiquitous, and can be captured in human judgment distributions (HJDs). Recent research has shown that explanations provide valuable information for understanding human label variation (HLV) and large language models (LLMs) can approximate HJD from a few human-provided label-explanation pairs. However, collecting explanations for every label is still time-consuming. This paper examines whether LLMs can be used to replace humans in generating explanations for approximating HJD. Specifically, we use LLMs as annotators to generate model explanations for a few given human labels. We test ways to obtain and combine these label-explanations with the goal to approximate human judgment distributions. We further compare the resulting human with model-generated explanations, and test automatic and human explanation selection. Our experiments show that LLM explanations are promising for NLI: to estimate HJDs, generated explanations yield comparable results to human’s when provided with human labels. Importantly, our results generalize from datasets with human explanations to i) datasets where they are not available and ii) challenging out-of-distribution test sets.

**摘要(中文)**:
> 人类标签中的分歧无处不在，并且可以在人类判断分布（HJD）中捕获。最近的研究表明，解释为理解人类标签变异 (HLV) 提供了有价值的信息，而大型语言模型 (LLM) 可以从一些人类提供的标签解释对中近似 HJD。然而，收集每个标签的解释仍然很耗时。本文探讨了大语言模型是否可以用来代替人类生成近似 HJD 的解释。具体来说，我们使用大语言模型作为注释器来为一些给定的人类标签生成模型解释。我们测试获取和组合这些标签解释的方法，以近似人类判断分布。我们进一步将生成的人类解释与模型生成的解释进行比较，并测试自动和人类解释选择。我们的实验表明，LLM 解释对于 NLI 来说是有希望的：为了估计 HJD，当提供人类标签时，生成的解释会产生与人类相当的结果。重要的是，我们的结果从具有人类解释的数据集推广到 i）不可用的数据集和 ii）具有挑战性的分布外测试集。

---

## 237. Tokenization is Sensitive to Language Variation

**类别**: `Findings`

**作者**: Anna Wegmann, Dong Nguyen, David Jurgens

**ID**: 2025.findings-acl.572

**摘要(英文)**:
> Variation in language is ubiquitous and often systematically linked to regional, social, and contextual factors. Tokenizers split texts into smaller units and might behave differently for less common linguistic forms. This might affect downstream LLM performance differently on two types of tasks: Tasks where the model should be robust to language variation (e.g., for semantic tasks like NLI, labels do not depend on whether a text uses British or American spelling) and tasks where the model should be sensitive to language variation (e.g., for form-based tasks like authorship verification, labels depend on whether a text uses British or American spelling). We pre-train BERT base models with the popular Byte-Pair Encoding algorithm to investigate how key tokenization design choices impact the performance of downstream models: the corpus used to train the tokenizer, the pre-tokenizer and the vocabulary size. We find that the best tokenizer varies on the two task types and that the pre-tokenizer has the biggest overall impact on performance. Further, we introduce a new approach to estimate tokenizer impact on downstream LLM performance, showing substantial improvement over metrics like Rényi efficiency. We encourage more work on language variation and its relation to tokenizers and thus LLM performance.

**摘要(中文)**:
> 语言的变异是普遍存在的，并且常常与区域、社会和语境因素系统性地联系在一起。分词器将文本分割成更小的单元，对于不太常见的语言形式可能会有不同的行为。这可能会以不同的方式影响两类任务上的下游 LLM 性能：模型应对语言变化具有鲁棒性的任务（例如，对于 NLI 等语义任务，标签不依赖于文本是否使用英式或美式拼写）和模型应对语言变化敏感的任务（例如，对于基于表单的任务，如作者身份验证，标签取决于文本是否使用英式或美式拼写）。我们使用流行的字节对编码算法预训练 BERT 基础模型，以研究关键标记化设计选择如何影响下游模型的性能：用于训练标记器的语料库、预标记器和词汇量。我们发现最好的分词器因两种任务类型而异，并且预分词器对性能的总体影响最大。此外，我们引入了一种新方法来估计标记器对下游 LLM 性能的影响，显示出相对于 Rényi 效率等指标的显着改进。我们鼓励更多地研究语言变异及其与分词器的关系，从而提高大语言模型的表现。

---

## 238. Neutralizing Bias inLLMReasoning using Entailment Graphs

**类别**: `Findings`

**作者**: Liang Cheng, Tianyi Li, Zhaowei Wang, Tianyang Liu, Mark Steedman

**ID**: 2025.findings-acl.705

**摘要(英文)**:
> LLMs are often claimed to be capable of Natural Language Inference (NLI), which is widely regarded as a cornerstone of more complex forms of reasoning. However, recent works show that LLMs still suffer from hallucinations in NLI due toattestation bias, where LLMs overly rely on propositional memory to build shortcuts. To solve the issue, we design an unsupervised framework to construct counterfactual reasoning data and fine-tune LLMs to reduce attestation bias. To measure bias reduction, we buildbias-adversarialvariants of NLI datasets with randomly replaced predicates in premises while keeping hypotheses unchanged. Extensive evaluations show that our framework can significantly reduce hallucinations from attestation bias. Then, we further evaluate LLMs fine-tuned with our framework on original NLI datasets and their bias-neutralized versions, where original entities are replaced with randomly sampled ones. Extensive results show that our framework consistently improves inferential performance on both original and bias-neutralized NLI datasets.

**摘要(中文)**:
> 大语言模型通常被认为具有自然语言推理（NLI）的能力，这被广泛认为是更复杂的推理形式的基石。然而，最近的研究表明，由于证明偏差，大语言模型仍然在 NLI 中遭受幻觉，大语言模型过度依赖命题记忆来建立捷径。为了解决这个问题，我们设计了一个无监督框架来构建反事实推理数据并微调大语言模型以减少证明偏差。为了衡量偏差的减少，我们在保持假设不变的情况下，在前提中使用随机替换的谓词构建 NLI 数据集的偏差对抗变体。广泛的评估表明，我们的框架可以显着减少证明偏差造成的幻觉。然后，我们进一步评估在原始 NLI 数据集及其偏差中和版本上使用我们的框架进行微调的 LLM，其中原始实体被随机采样的实体替换。大量结果表明，我们的框架持续提高了原始 NLI 数据集和偏差中和 NLI 数据集的推理性能。

---

## 239. Benchmarking Query-Conditioned Natural Language Inference

**类别**: `Findings`

**作者**: Marc E. Canby, Xinchi Chen, Xing Niu, Jifan Chen, Bonan Min, Sergul Aydore, Vittorio Castelli

**ID**: 2025.findings-acl.765

**摘要(英文)**:
> The growing excitement around the ability of large language models (LLMs) to tackle various tasks has been tempered by their propensity for generating unsubstantiated information (hallucination) and by their inability to effectively handle inconsistent inputs. To detect such issues, we propose the novel task of Query-Conditioned Natural Language Inference (QC-NLI), where the goal is to determine the semantic relationship (e.g. entailment or not entailment) between two documents conditioned on a query; we demonstrate that many common tasks regarding inconsistency detection can be formulated as QC-NLI problems. We focus on three applications in particular: fact verification, intrinsic hallucination detection, and document inconsistency detection. We convert existing datasets for these tasks into the QC-NLI format, and manual annotation confirms their high quality. Finally, we employ zero- and few-shot prompting methods to solve the QC-NLI prediction problem for each task, showing the critical importance of conditioning on the query.

**摘要(中文)**:
> 人们对大型语言模型 (LLM) 处理各种任务的能力日益兴奋，但由于它们倾向于生成未经证实的信息（幻觉）以及无法有效处理不一致的输入，因此受到了影响。为了检测此类问题，我们提出了查询条件自然语言推理（QC-NLI）的新任务，其目标是确定以查询为条件的两个文档之间的语义关系（例如蕴涵或非蕴涵）；我们证明了许多关于不一致检测的常见任务可以表述为 QC-NLI 问题。我们特别关注三个应用：事实验证、内在幻觉检测和文档不一致检测。我们将这些任务的现有数据集转换为 QC-NLI 格式，并手动注释确认其高质量。最后，我们采用零样本和少样本提示方法来解决每个任务的 QC-NLI 预测问题，显示了查询条件的至关重要性。

---

## 240. Metaphor and Large Language Models: When Surface Features Matter More than Deep Understanding

**类别**: `Findings`

**作者**: Elisa Sanchez-Bayona, Rodrigo Agerri

**ID**: 2025.findings-acl.898

**摘要(英文)**:
> This paper presents a comprehensive evaluation of the capabilities of Large Language Models (LLMs) in metaphor interpretation across multiple datasets, tasks, and prompt configurations. Although metaphor processing has gained significant attention in Natural Language Processing (NLP), previous research has been limited to single-dataset evaluations and specific task settings, often using artificially constructed data through lexical replacement. We address these limitations by conducting extensive experiments using diverse publicly available datasets with inference and metaphor annotations, focusing on Natural Language Inference (NLI) and Question Answering (QA) tasks. The results indicate that LLMs’ performance is more influenced by features like lexical overlap and sentence length than by metaphorical content, demonstrating that any alleged emergent abilities of LLMs to understand metaphorical language are the result of a combination of surface-level features, in-context learning, and linguistic knowledge. This work provides critical insights into the current capabilities and limitations of LLMs in processing figurative language, highlighting the need for more realistic evaluation frameworks in metaphor interpretation tasks. Data and code publicly available: https://github.com/elisanchez-beep/metaphorLLM

**摘要(中文)**:
> 本文对大型语言模型 (LLM) 在跨多个数据集、任务和提示配置的隐喻解释方面的能力进行了全面评估。尽管隐喻处理在自然语言处理（NLP）中获得了极大的关注，但先前的研究仅限于单个数据集评估和特定任务设置，通常使用通过词汇替换人工构造的数据。我们通过使用具有推理和隐喻注释的各种公开数据集进行广泛的实验来解决这些限制，重点关注自然语言推理（NLI）和问答（QA）任务。结果表明，大语言模型的表现更多地受到词汇重叠和句子长度等特征的影响，而不是隐喻内容，这表明大语言模型理解隐喻语言的任何所谓的新兴能力都是表面特征、上下文学习和语言知识相结合的结果。这项工作对大语言模型当前在处理比喻语言方面的能力和局限性提供了重要的见解，强调了在隐喻解释任务中需要更现实的评估框架。公开的数据和代码：https://github.com/elisanchez-beep/metaphorLLM

---

## 241. AMISMATCHEDBenchmark for Scientific Natural Language Inference

**类别**: `Findings`

**作者**: Firoz Shaik, Mobashir Sadat, Nikita Gautam, Doina Caragea, Cornelia Caragea

**ID**: 2025.findings-acl.1109

**摘要(英文)**:
> Scientific Natural Language Inference (NLI) is the task of predicting the semantic relation between a pair of sentences extracted from research articles. Existing datasets for this task are derived from various computer science (CS) domains, whereas non-CS domains are completely ignored. In this paper, we introduce a novel evaluation benchmark for scientific NLI, called MisMatched. The new MisMatched benchmark covers three non-CS domains–Psychology, Engineering, and Public Health, and contains 2,700 human annotated sentence pairs. We establish strong baselines on MisMatched using both Pre-trained Small Language Models (SLMs) and Large Language Models (LLMs). Our best performing baseline shows a Macro F1 of only 78.17% illustrating the substantial headroom for future improvements. In addition to introducing the MisMatched benchmark, we show that incorporating sentence pairs having an implicit scientific NLI relation between them in model training improves their performance on scientific NLI. We make our dataset and code publicly available on GitHub.

**摘要(中文)**:
> 科学自然语言推理（NLI）是预测从研究文章中提取的一对句子之间的语义关系的任务。此任务的现有数据集来自各种计算机科学 (CS) 领域，而非 CS 领域则完全被忽略。在本文中，我们介绍了一种新颖的科学 NLI 评估基准，称为 MisMatched。新的 MisMatched 基准测试涵盖三个非计算机科学领域——心理学、工程和公共卫生，并包含 2,700 个人工注释的句子对。我们使用预训练的小语言模型 (SLM) 和大型语言模型 (LLM) 建立了关于 MisMatched 的强大基线。我们的最佳表现基准显示，宏观 F1 仅 78.17%，说明未来改进的空间很大。除了引入 MisMatched 基准之外，我们还表明，在模型训练中合并具有隐式科学 NLI 关系的句子对可以提高其在科学 NLI 上的性能。我们在 GitHub 上公开提供我们的数据集和代码。

---

## 242. “You are Beautiful, Body Image Stereotypes are Ugly!”BIStereo: A Benchmark to Measure Body Image Stereotypes in Language Models

**类别**: `Findings`

**作者**: Narjis Asad, Nihar Ranjan Sahoo, Rudra Murthy, Swaprava Nath, Pushpak Bhattacharyya

**ID**: 2025.findings-acl.1257

**摘要(英文)**:
> While a few high-quality bias benchmark datasets exist to address stereotypes in Language Models (LMs), a notable lack of focus remains on body image stereotypes. To bridge this gap, we proposeBIStereo, a suite to uncover LMs’ biases towards people of certain physical appearance characteristics, namely,skin complexion, body shape, height, attire,and amiscellaneous categoryincludinghair texture, eye color, and more. Our dataset comprises 40k sentence pairs designed to assess LMs’ biased preference for certain body types. We further include 60k premise-hypothesis pairs designed to comprehensively assess LMs’ preference for fair skin tone. Additionally, we curate 553 tuples consisting of abody image descriptor, gender, and a stereotypical attribute, validated by a diverse pool of annotators for physical appearance stereotypes.We propose a metric,TriSentBias, that captures the biased preferences of LMs towards a certain body type over others. UsingBIStereo, we assess the presence of body image biases in ten different language models, revealing significant biases in models Muril, XLMR, Llama3, and Gemma. We further evaluate the LMs through downstream NLI and Analogy tasks.Our NLI experiments highlight notable patterns in the LMs that align with the well-documented cognitive bias in humans known asthe Halo Effect.

**摘要(中文)**:
> 虽然存在一些高质量的偏见基准数据集来解决语言模型（LM）中的刻板印象，但对身体图像刻板印象仍然明显缺乏关注。为了弥合这一差距，我们提出了 BIStereo，这是一个套件，用于揭示 LM 对某些身体外观特征的人的偏见，即肤色、体型、身高、服装和其他类别，包括头发质地、眼睛颜色等。我们的数据集包含 40k 个句子对，旨在评估 LM 对某些体型的偏见偏好。我们还包括 60k 个前提-假设对，旨在全面评估 LM 对白皙肤色的偏好。此外，我们还整理了 553 个元组，其中包括身体图像描述符、性别和刻板属性，并由不同的物理外观刻板印象注释器进行验证。我们提出了一个指标 TriSentBias，它可以捕获 LM 对某种体型相对于其他体型的偏见偏好。使用BIStereo，我们评估了十种不同语言模型中是否存在身体图像偏差，揭示了 Muril、XLMR、Llama3 和 Gemma 模型中的显着偏差。我们通过下游 NLI 和类比任务进一步评估 LM。我们的 NLI 实验突出了 LM 中的显着模式，这些模式与人类有据可查的认知偏差（称为光环效应）相一致。

---

## 243. UsingNLIto Identify Potential Collocation Transfer inL2English

**类别**: `Workshop-BEA`

**作者**: Haiyin Yang, Zoey Liu, Stefanie Wulff

**ID**: 2025.bea-1.49

**摘要(英文)**:
> Identifying instances of first language (L1) transfer – the application of the linguistics structures of a speaker’s first language to their second language(s) – can facilitate second language (L2) learning as it can inform learning and teaching resources, especially when instances of negative transfer (that is, interference) can be identified. While studies of transfer between two languages A and B require a priori linguistic structures to be analyzed with three datasets (data from L1 speakers of language A, L1 speakers of language B, and L2 speakers of A or B), native language identification (NLI) – a machine learning task to predict one’s L1 based on one’s L2 production – has the advantage to detect instances of subtle and unpredicted transfer, casting a “wide net” to capture patterns of transfer that were missed before (Jarvis and Crossley, 2018). This study aims to apply NLI tasks to find potential instances of transfer of collocations. Our results, compared to previous transfer studies, indicate that NLI can be used to reveal collocation transfer, also in understudied L2 languages.

**摘要(中文)**:
> 识别第一语言 (L1) 迁移的实例（将说话者第一语言的语言学结构应用于第二语言）可以促进第二语言 (L2) 学习，因为它可以为学习和教学资源提供信息，特别是当可以识别负迁移（即干扰）实例时。虽然两种语言 A 和 B 之间的迁移研究需要使用三个数据集（来自 A 语言的 L1 使用者、B 语言的 L1 使用者和 A 或 B 的 L2 使用者的数据）来分析先验语言结构，但母语识别 (NLI)（一种基于 L2 生成来预测 L1 的机器学习任务）具有检测微妙和不可预测的迁移实例的优势，撒下一张“大网”来捕获之前错过的迁移模式（Jarvis 和 Crossley， 2018）。本研究旨在应用 NLI 任务来寻找搭配迁移的潜在实例。与之前的迁移研究相比，我们的结果表明 NLI 可用于揭示搭配迁移，同样适用于尚未研究的 L2 语言。

---

## 244. Advancing Biomedical Claim Verification by Using Large Language Models with Better Structured Prompting Strategies

**类别**: `Workshop-BioNLP`

**作者**: Siting Liang, Daniel Sonntag

**ID**: 2025.bionlp-1.14

**摘要(英文)**:
> In this work, we propose a structured four-step prompting strategy that explicitly guides large language models (LLMs) through (1) claim comprehension, (2) evidence analysis, (3) intermediate conclusion, and (4) entailment decision-making to improve the accuracy of biomedical claim verification. This strategy leverages compositional and human-like reasoning to enhance logical consistency and factual grounding to reduce reliance on memorizing few-Shot exemplars and help LLMs generalize reasoning patterns across different biomedical claim verification tasks. Through extensive evaluation on biomedical NLI benchmarks, we analyze the individual contributions of each reasoning step. Our findings demonstrate that comprehension, evidence analysis, and intermediate conclusion each play distinct yet complementary roles. Systematic prompting and carefully designed step-wise instructions not only unlock the latent cognitive abilities of LLMs but also enhance interpretability by making it easier to trace errors and understand the model’s reasoning process. Our research aims to improve the reliability of AI-driven biomedical claim verification.

**摘要(中文)**:
> 在这项工作中，我们提出了一种结构化的四步提示策略，通过（1）主张理解、（2）证据分析、（3）中间结论和（4）蕴涵决策明确指导大语言模型（LLM），以提高生物医学主张验证的准确性。该策略利用组合推理和类人推理来增强逻辑一致性和事实基础，以减少对记忆少样本样本的依赖，并帮助大语言模型在不同的生物医学声明验证任务中概括推理模式。通过对生物医学 NLI 基准的广泛评估，我们分析了每个推理步骤的个人贡献。我们的研究结果表明，理解、证据分析和中间结论各自发挥着独特但互补的作用。系统的提示和精心设计的逐步说明不仅可以释放大语言模型的潜在认知能力，还可以通过更轻松地跟踪错误和理解模型的推理过程来增强可解释性。我们的研究旨在提高人工智能驱动的生物医学声明验证的可靠性。

---

## 245. Lost in Variation? EvaluatingNLIPerformance inBasque andSpanish Geographical Variants

**类别**: `Workshop-CoNLL`

**作者**: Jaione Bengoetxea, Itziar Gonzalez-Dios, Rodrigo Agerri

**ID**: 2025.conll-1.30

**摘要(英文)**:
> In this paper, we evaluate the capacity of current language technologies to understand Basque and Spanish language varieties. We use Natural Language Inference (NLI) as a pivot task and introduce a novel, manually-curated parallel dataset in Basque and Spanish, along with their respective variants. Our empirical analysis of crosslingual and in-context learning experiments using encoder-only and decoder-based Large Language Models (LLMs) shows a performance drop when handling linguistic variation, especially in Basque. Error analysis suggests that this decline is not due to lexical overlap, but rather to the linguistic variation itself. Further ablation experiments indicate that encoder-only models particularly struggle with Western Basque, which aligns with linguistic theory that identifies peripheral dialects (e.g., Western) as more distant from the standard. All data and code are publicly available.

**摘要(中文)**:
> 在本文中，我们评估了当前语言技术理解巴斯克语和西班牙语变体的能力。我们使用自然语言推理（NLI）作为关键任务，并引入巴斯克语和西班牙语的新颖的、手动策划的并行数据集及其各自的变体。我们使用仅编码器和基于解码器的大语言模型 (LLM) 对跨语言和上下文学习实验进行的实证分析表明，在处理语言变异时，尤其是巴斯克语，性能会下降。错误分析表明，这种下降不是由于词汇重叠，而是由于语言变异本身。进一步的消融实验表明，仅编码器模型尤其难以处理西方巴斯克语，这与将外围方言（例如西方方言）视为与标准相差更远的语言理论相一致。所有数据和代码都是公开的。

---

## 246. Beyond Accuracy: Revisiting Out-of-Distribution Generalization inNLIModels

**类别**: `Workshop-CoNLL`

**作者**: Zahra Delbari, Mohammad Taher Pilehvar

**ID**: 2025.conll-1.36

**摘要(英文)**:
> This study investigates how well discriminative transformers generalize in Natural Language Inference (NLI) tasks. We specifically focus on a well-studied bias in this task: the tendency of models to rely on superficial features and dataset biases rather than a true understanding of language. We argue that the performance differences observed between training and analysis datasets do not necessarily indicate a lack of knowledge within the model. Instead, the gap often points to a misalignment between the decision boundaries of the classifier head and the representations learned by the encoder for the analysis samples. By investigating the representation space of NLI models across different analysis datasets, we demonstrate that even when the accuracy is nearly random in some settings, still samples from opposing classes remain almost perfectly linearly separable in the encoder’s representation space. This suggests that, although the classifier head may fail on analysis data, the encoder still generalizes and encodes representations that allow for effective discrimination between NLI classes.

**摘要(中文)**:
> 本研究调查了判别式 Transformer 在自然语言推理 (NLI) 任务中的泛化能力。我们特别关注这项任务中经过充分研究的偏差：模型倾向于依赖于表面特征和数据集偏差，而不是对语言的真正理解。我们认为，训练和分析数据集之间观察到的性能差异并不一定表明模型内缺乏知识。相反，这种差距通常表明分类器头的决策边界与编码器为分析样本学习的表示之间存在偏差。通过研究跨不同分析数据集的 NLI 模型的表示空间，我们证明，即使在某些设置中精度几乎是随机的，来自相反类别的样本在编码器的表示空间中仍然几乎完全线性可分。这表明，尽管分类器头可能无法分析数据，但编码器仍然对表示进行概括和编码，从而可以有效区分 NLI 类别。

---

## 247. SemQA: Evaluating Evidence with Question Embeddings and Answer Entailment for Fact Verification

**类别**: `Workshop-FEVER`

**作者**: Kjetil Indrehus, Caroline Vannebo, Roxana Pop

**ID**: 2025.fever-1.14

**摘要(英文)**:
> Automated fact-checking (AFC) of factual claims require efficiency and accuracy. Existing evaluation frameworks like Ev2R achieve strong semantic grounding but incur substantial computational cost, while simpler metrics based on overlap or one-to-one matching often misalign with human judgments. In this paper, we introduce SemQA, a lightweight and accurate evidence-scoring metric that combines transformer-based question scoring with bidirectional NLI entailment on answers. We evaluate SemQA by conducting human evaluations, analyzing correlations with existing metrics, and examining representative examples.

**摘要(中文)**:
> 事实声明的自动事实核查 (AFC) 需要高效和准确。 Ev2R 等现有的评估框架实现了强大的语义基础，但会产生大量的计算成本，而基于重叠或一对一匹配的更简单的指标通常与人类的判断不一致。在本文中，我们介绍了 SemQA，这是一种轻量级且准确的证据评分指标，它将基于 Transformer 的问题评分与答案的双向 NLI 蕴涵相结合。我们通过进行人工评估、分析与现有指标的相关性以及检查代表性示例来评估 SemQA。

---

## 248. Theorem-of-Thought: A Multi-Agent Framework for Abductive, Deductive, and Inductive Reasoning in Language Models

**类别**: `Workshop-KnowLLM`

**作者**: Samir Abdaljalil, Hasan Kurban, Khalid Qaraqe, Erchin Serpedin

**ID**: 2025.knowllm-1.10

**摘要(英文)**:
> Large language models (LLMs) have shown strong performance across natural language reasoning tasks, yet their reasoning processes remain brittle and difficult to interpret. Prompting techniques like Chain-of-Thought (CoT) enhance reliability by eliciting intermediate reasoning steps or aggregating multiple outputs. However, they lack mechanisms for enforcing logical structure and assessing internal coherence. We introduce Theorem-of-Thought (ToTh), a novel framework that models reasoning as collaboration among three parallel agents, each simulating a distinct mode of inference: abductive, deductive, and inductive. Each agent produces a reasoning trace, which is structured into a formal reasoning graph. To evaluate consistency, we apply Bayesian belief propagation guided by natural language inference (NLI), assigning confidence scores to each step. The most coherent graph is selected to derive the final answer. Experiments on symbolic (WebOfLies) and numerical (MultiArith) reasoning benchmarks show that ToTh consistently outperforms CoT, Self-Consistency, and CoT-Decoding across multiple LLMs, while producing interpretable and logically grounded reasoning chains. Our findings suggest a promising direction for building more robust and cognitively inspired LLM reasoning. The implementation is available at https://github.com/KurbanIntelligenceLab/theorem-of-thought.

**摘要(中文)**:
> 大型语言模型（LLM）在自然语言推理任务中表现出了强大的性能，但它们的推理过程仍然脆弱且难以解释。思维链 (CoT) 等提示技术通过引发中间推理步骤或聚合多个输出来增强可靠性。然而，它们缺乏强制逻辑结构和评估内部一致性的机制。我们引入了思维定理 (ToTh)，这是一种新颖的框架，它将推理建模为三个并行代理之间的协作，每个代理模拟一种不同的推理模式：溯因、演绎和归纳。每个智能体都会产生一个推理轨迹，该轨迹被构造成一个正式的推理图。为了评估一致性，我们应用由自然语言推理（NLI）指导的贝叶斯信念传播，为每个步骤分配置信度分数。选择最连贯的图表来得出最终答案。对符号 (WebOfLies) 和数值 (MultiArith) 推理基准的实验表明，ToTh 在多个大语言模型中始终优于 CoT、自洽性和 CoT 解码，同时生成可解释且有逻辑依据的推理链。我们的研究结果为建立更强大和受认知启发的大语言模型推理提供了一个有希望的方向。该实现可在 https://github.com/KurbanIntelligenceLab/theorem-of-thought 获取。

---

## 249. Natural Language Inference Fine-tuning for Scientific Hallucination Detection

**类别**: `Workshop-SDP`

**作者**: Tim Schopf, Juraj Vladika, Michael Färber, Florian Matthes

**ID**: 2025.sdp-1.33

**摘要(英文)**:
> Modern generative Large Language Models (LLMs) are capable of generating text that sounds coherent and convincing, but are also prone to producinghallucinations, facts that contradict the world knowledge. Even in the case of Retrieval-Augmented Generation (RAG) systems, where relevant context is first retrieved and passed in the input, the generated facts can contradict or not be verifiable by the provided references. This has motivated SciHal 2025, a shared task that focuses on the detection of hallucinations for scientific content. The two subtasks focused on: (1) predicting whether a claim from a generated LLM answer is entailed, contradicted, or unverifiable by the used references; (2) predicting a fine-grained category of erroneous claims. Our best performing approach used an ensemble of fine-tuned encoder-only ModernBERT and DeBERTa-v3 models for classification. Out of nine competing teams, our approach achieved the first place in sub-task 1 and the second place in sub-task 2.

**摘要(中文)**:
> 现代生成式大型语言模型（LLM）能够生成听起来连贯且令人信服的文本，但也容易产生幻觉和与世界知识相矛盾的事实。即使在检索增强生成（RAG）系统中，首先检索相关上下文并在输入中传递，生成的事实也可能与所提供的参考相矛盾或无法验证。这激发了 SciHal 2025，这是一项专注于检测科学内容幻觉的共享任务。这两个子任务侧重于：(1) 预测生成的 LLM 答案中的主张是否与所使用的参考文献相符、矛盾或无法验证； (2) 预测错误声明的细粒度类别。我们性能最佳的方法使用一组经过微调的仅编码器的 ModernBERT 和 DeBERTa-v3 模型进行分类。在九个竞争团队中，我们的方法在子任务 1 中获得第一名，在子任务 2 中获得第二名。

---

## 250. FromRAGto Reality: Coarse-Grained Hallucination Detection viaNLIFine-Tuning

**类别**: `Workshop-SDP`

**作者**: Daria Galimzianova, Aleksandr Boriskin, Grigory Arshinov

**ID**: 2025.sdp-1.34

**摘要(英文)**:
> We present our submission to SciHal Subtask 1: coarse-grained hallucination detection for scientific question answering. We frame hallucination detection as an NLI-style three-way classification (entailment, contradiction, unverifiable) and show that simple fine-tuning of NLI-adapted encoder models on task data outperforms more elaborate feature-based pipelines and large language model prompting. In particular, DeBERTa-V3-large, a model pretrained on five diverse NLI corpora, achieves the highest weighted F1 on the public leaderboard. We additionally explore a pipeline combining joint claim–reference embeddings and NLI softmax probabilities fed into a classifier, but find its performance consistently below direct encoder fine-tuning. Our findings demonstrate that, for reference-grounded hallucination detection, targeted encoder fine-tuning remains the most accurate and efficient approach.

**摘要(中文)**:
> 我们向 SciHal 子任务 1 提交了我们的意见：用于科学问答的粗粒度幻觉检测。我们将幻觉检测构建为 NLI 风格的三向分类（蕴涵、矛盾、不可验证），并表明对任务数据进行 NLI 适应的编码器模型的简单微调优于更复杂的基于特征的管道和大型语言模型提示。特别是 DeBERTa-V3-large，一个在五个不同的 NLI 语料库上进行预训练的模型，在公共排行榜上获得了最高权重的 F1。我们还探索了一种将联合声明引用嵌入和输入分类器的 NLI softmax 概率相结合的管道，但发现其性能始终低于直接编码器微调。我们的研究结果表明，对于基于参考的幻觉检测，有针对性的编码器微调仍然是最准确和有效的方法。

---

## 251. Hallucination Detectives atSemEval-2025 Task 3: Span-Level Hallucination Detection forLLM-Generated Answers

**类别**: `Workshop-SemEval`

**作者**: Passant Elchafei, Mervat Abu - Elkheir

**ID**: 2025.semeval-1.84

**摘要(英文)**:
> Detecting spans of hallucination in LLM-generated answers is crucial for improving factual consistency. This paper presents a span-level hallucination detection framework for the SemEval-2025 Shared Task, focusing on English and Arabic texts. our approach integrates Semantic Role Labeling (SRL) to decompose the answer into atomic roles, which are then compared with a retrieved reference context obtained via question-based LLM prompting. Using a DeBERTa-based textual entailment model, we evaluate each role’s semantic alignment with the retrieved context. The entailment scores are further refined through token-level confidence measures derived from output logits, and the combined scores are used to detect hallucinated spans. Experiments on the Mu-SHROOM dataset demonstrate competitive performance. Additionally, hallucinated spans have been verified through fact-checking by prompting GPT-4 and LLaMA. Our findings contribute to improving hallucination detection in LLM-generated responses.

**摘要(中文)**:
> 检测大语言模型生成的答案中的幻觉范围对于提高事实一致性至关重要。本文提出了 SemEval-2025 共享任务的跨级幻觉检测框架，重点关注英语和阿拉伯语文本。我们的方法集成了语义角色标签（SRL），将答案分解为原子角色，然后将其与通过基于问题的 LLM 提示获得的检索到的参考上下文进行比较。使用基于 DeBERTa 的文本蕴涵模型，我们评估每个角色与检索到的上下文的语义一致性。通过从输出 logits 导出的标记级置信度度量进一步细化蕴涵分数，并且组合分数用于检测幻觉跨度。 Mu-SHROOM 数据集上的实验展示了具有竞争力的性能。此外，幻觉跨度已通过提示 GPT-4 和 LLaMA 的事实检查得到验证。我们的研究结果有助于改善大语言模型生成的反应中的幻觉检测。

---

## 252. MALTOatSemEval-2025 Task 3: Detecting Hallucinations inLLMs via Uncertainty Quantification and Larger Model Validation

**类别**: `Workshop-SemEval`

**作者**: Claudio Savelli, Alkis Koudounas, Flavio Giobergia

**ID**: 2025.semeval-1.175

**摘要(英文)**:
> Large language models (LLMs) often produce {textit{hallucinations}} —factually incorrect statements that appear highly persuasive. These errors pose risks in fields like healthcare, law, and journalism. This paper presents our approach to the Mu-SHROOM shared task at SemEval 2025, which challenges researchers to detect hallucination spans in LLM outputs. We introduce a new method that combines probability-based analysis with Natural Language Inference to evaluate hallucinations at the word level. Our technique aims to better align with human judgments while working independently of the underlying model. Our experimental results demonstrate the effectiveness of this method compared to existing baselines.

**摘要(中文)**:
> 大型语言模型 (LLM) 经常会产生 {textit{hallucinations}}——实际上不正确的陈述，但看起来很有说服力。这些错误给医疗保健、法律和新闻等领域带来了风险。本文介绍了我们在 SemEval 2025 上完成 Mu-SHROOM 共享任务的方法，该任务向研究人员提出了检测 LLM 输出中的幻觉跨度的挑战。我们引入了一种新方法，将基于概率的分析与自然语言推理相结合，以评估单词级别的幻觉。我们的技术旨在更好地符合人类判断，同时独立于底层模型工作。我们的实验结果证明了与现有基线相比该方法的有效性。

---

## 253. RaggedyFive atSemEval-2025 Task 3: Hallucination Span Detection Using Unverifiable Answer Detection

**类别**: `Workshop-SemEval`

**作者**: Wessel Heerema, Collin Krooneman, Simon Van Loon, Jelmer Top, Maurice Voors

**ID**: 2025.semeval-1.194

**摘要(英文)**:
> Despite their broad utility, large language models (LLMs) are prone to hallucinations. The deviation from provided source inputs or disparateness with factual accuracy makes users question the reliability of LLMs. Therefore, detection systems for LLMs on hallucination are imperative. The system described in this paper detects hallucinated text spans by combining Retrieval-Augmented Generation (RAG) with Natural Language Interface (NLI). While zero-context handling of the RAG had little measurable effect, incorporating the RAG into a natural-language premise for the NLI yielded a noticeable improvement. Discrepancies can be attributed to labeling methodology and the implementation of the RAG.

**摘要(中文)**:
> 尽管大型语言模型 (LLM) 具有广泛的实用性，但它很容易产生幻觉。与所提供的来源输入的偏差或与事实准确性的差异使用户质疑大语言模型的可靠性。因此，针对幻觉的大语言模型的检测系统势在必行。本文描述的系统通过将检索增强生成（RAG）与自然语言接口（NLI）相结合来检测幻觉文本跨度。虽然 RAG 的零上下文处理几乎没有可测量的效果，但将 RAG 纳入 NLI 的自然语言前提中产生了显着的改进。差异可归因于标签方法和 RAG 的实施。

---

## 254. HausaNLPatSemEval-2025 Task 3: Towards a Fine-Grained Model-Aware Hallucination Detection

**类别**: `Workshop-SemEval`

**作者**: Maryam Bala, Amina Abubakar, Abdulhamid Abubakar, Abdulkadir Bichi, Hafsa Ahmad, Sani Abdullahi Sani, Idris Abdulmumin, Shamsuddeen Hassan Muhammad, Ibrahim Said Ahmad

**ID**: 2025.semeval-1.227

**摘要(英文)**:
> This paper presents our findings of the Multilingual Shared Task on Hallucinations and Related Observable Overgeneration Mistakes, MU-SHROOM, which focuses on identifying hallucinations and related overgeneration errors in large language models (LLMs). The shared task involves detecting specific text spans that constitute hallucinations in the outputs generated by LLMs in 14 languages. To address this task, we aim to provide a nuanced, model-aware understanding of hallucination occurrences and severity in English. We used natural language inference and fine-tuned a ModernBERT model using a synthetic dataset of 400 samples, achieving an Intersection over Union (IoU) score of 0.032 and a correlation score of 0.422. These results indicate a moderately positive correlation between the model’s confidence scores and the actual presence of hallucinations. The IoU score indicates that our modelhas a relatively low overlap between the predicted hallucination span and the truth annotation. The performance is unsurprising, given the intricate nature of hallucination detection. Hallucinations often manifest subtly, relying on context, making pinpointing their exact boundaries formidable.

**摘要(中文)**:
> 本文介绍了我们关于幻觉和相关可观察到的过度生成错误的多语言共享任务 MU-SHROOM 的发现，该任务的重点是识别大语言模型 (LLM) 中的幻觉和相关的过度生成错误。共享任务涉及检测 14 种语言的大语言模型生成的输出中构成幻觉的特定文本跨度。为了完成这项任务，我们的目标是提供对英语中幻觉发生和严重程度的细致入微、模型感知的理解。我们使用自然语言推理，并使用 400 个样本的合成数据集对 ModernBERT 模型进行微调，实现并交交集 (IoU) 分数为 0.032，相关性分数为 0.422。这些结果表明模型的置信度得分与幻觉的实际存在之间存在适度的正相关。 IoU 分数表明我们的模型预测的幻觉跨度和真实注释之间的重叠度相对较低。考虑到幻觉检测的复杂性，这种表现并不令人意外。幻觉常常依赖于背景而微妙地显现出来，这使得精确定位其确切界限变得非常困难。

---

## 255. LLMSR@XLLM25: Integrating Reasoning Prompt Strategies with Structural Prompt Formats for Enhanced Logical Inference

**类别**: `Workshop-XLLM`

**作者**: Le Tai, Thin Van

**ID**: 2025.xllm-1.27

**摘要(英文)**:
> This paper illustrates our NBTailee team sys- tem approach in XLLM-ACL 2025 Task-III: LLM for Structural Reasoning (LLM-SR), aim- ing to solve both Task: Question parsing and CoT parsing. The process of extracting state- ments and evidence is similar to Discourse Pars- ing. Correct extraction of statements or evi- dence from the COT is crucial at the outset. Next, the pairwise relationship between a spe- cific statement and its corresponding evidence is assessed (a statement should be followed by its related evidence from the CoT). Both seman- tic and lexical similarity are used to evaluate the accuracy of statements and evidence predic- tions. Finally, once a statement-evidence pair is correctly extracted, it is evaluated to deter- mine whether the evidence can logically deduce the statement. To tackle Question Parsing and CoT Parsing, we implement and investigate var- ious solutions, including (1) applying different structural prompt formats like JSON, Mark- down, or XML. (2) utilising various prompt techniques: Few-shot, Chain of thought, and Multi-hop prompting. (3) Taking advantage of Natural Language Inference (NLI) model for the Statement Verification step. Our best of- ficial result is a 243.047 mean score for test phases A and B, and finally, we rank 7th on the final leaderboard.

**摘要(中文)**:
> 本文阐述了我们在 XLLM-ACL 2025 任务 III：LLM 结构推理（LLM-SR）中的 NBTalee 团队系统方法，旨在解决任务：问题解析和 CoT 解析。提取陈述和证据的过程类似于话语解析。从一开始就从 COT 中正确提取陈述或证据至关重要。接下来，评估特定陈述与其相应证据之间的成对关系（陈述后面应该跟有来自 CoT 的相关证据）。语义和词汇相似性都用于评估陈述和证据预测的准确性。最后，一旦正确提取了陈述-证据对，就会对其进行评估，以确定证据是否可以逻辑地推导出陈述。为了解决问题解析和 CoT 解析，我们实现并研究了各种解决方案，包括 (1) 应用不同的结构提示格式，如 JSON、Markdown 或 XML。 (2)利用多种提示技术：Few-shot、Chain of Thought、Multi-hop提示。 (3) 利用自然语言推理（NLI）模型进行语句验证步骤。我们最好的官方成绩是测试阶段 A 和 B 的平均得分为 243.047，最后，我们在最终排行榜上排名第七。

## 文本分类 (31 篇)

---

## 256. Direct Prompt Optimization with Continuous Representations

**类别**: `主会-长文`

**作者**: Yangkun Wang, Zihan Wang, Jingbo Shang

**ID**: 2025.acl-long.133

**摘要(英文)**:
> Prompt optimization for language models faces challenges due to the large discrete search space, the reliance on continuous gradient updates, and the need to round continuous representations into discrete prompts, which causes inflexibility and instability. Existing methods attempt to address these by constraining the search space and adopting greedy, incremental improvements, but they often fail to fully leverage historical gradient information. In this paper, we model the prompt optimization problem by the probability distribution of the prompt and present a novel approach that integrates greedy strategies into optimization with continuous representations. This approach can exploit historical gradient information to address the instability caused by rounding in existing methods. Our study indicates that using continuous representations can improve prompt optimization performance on both text classification and attack tasks, as well as models, including GPT-2, OPT, Vicuna, and LLaMA-2, and also be adaptable to models of different sizes.

**摘要(中文)**:
> 由于离散搜索空间大、依赖连续梯度更新以及需要将连续表示舍入为离散提示，导致语言模型的提示优化面临挑战，从而导致不灵活性和不稳定。现有的方法试图通过限制搜索空间和采用贪婪的增量改进来解决这些问题，但它们往往无法充分利用历史梯度信息。在本文中，我们通过提示的概率分布对提示优化问题进行建模，并提出了一种将贪婪策略集成到连续表示优化中的新方法。这种方法可以利用历史梯度信息来解决现有方法中舍入造成的不稳定性。我们的研究表明，使用连续表示可以提高文本分类和攻击任务以及模型（包括 GPT-2、OPT、Vicuna 和 LLaMA-2）的即时优化性能，并且还可以适应不同大小的模型。

---

## 257. Prompt Candidates, then Distill: A Teacher-Student Framework forLLM-driven Data Annotation

**类别**: `主会-长文`

**作者**: Mingxuan Xia, Haobo Wang, Yixuan Li, Zewei Yu, Jindong Wang, Junbo Zhao, Runze Wu

**ID**: 2025.acl-long.139

**摘要(英文)**:
> Recently, Large Language Models (LLMs) have demonstrated significant potential for data annotation, markedly reducing the labor costs associated with downstream applications. However, existing methods mostly adopt an aggressive strategy by prompting LLM to determine a single gold label for each unlabeled sample. Due to the inherent uncertainty within LLMs, they often produce incorrect labels for difficult samples, severely compromising the data quality for downstream applications. Motivated by ambiguity aversion in human behaviors, we propose a novel candidate annotation paradigm wherein large language models are encouraged to output all possible labels when incurring uncertainty. To ensure unique labels are provided for downstream tasks, we develop a teacher-student framework CanDist that distills candidate annotations with a Small Language Model (SLM). We further provide a rigorous justification demonstrating that distilling candidate annotations from the teacher LLM offers superior theoretical guarantees compared to directly using single annotations. Extensive experiments across six text classification tasks validate the effectiveness of our proposed method. The source code is available at https://github.com/MingxuanXia/CanDist.

**摘要(中文)**:
> 最近，大型语言模型（LLM）已经展示了数据注释的巨大潜力，显着降低了与下游应用程序相关的劳动力成本。然而，现有的方法大多采用激进的策略，通过提示 LLM 为每个未标记的样本确定单个黄金标签。由于大语言模型固有的不确定性，他们经常为困难的样本生成不正确的标签，严重影响下游应用的数据质量。受人类行为中歧义厌恶的启发，我们提出了一种新颖的候选注释范例，其中鼓励大型语言模型在出现不确定性时输出所有可能的标签。为了确保为下游任务提供唯一的标签，我们开发了一个师生框架 CanDist，它使用小语言模型 (SLM) 提取候选注释。我们进一步提供了严格的理由，证明与直接使用单个注释相比，从大语言模型老师那里提取候选注释可以提供更好的理论保证。六个文本分类任务的广泛实验验证了我们提出的方法的有效性。源代码可在 https://github.com/MingxuanXia/CanDist 获取。

---

## 258. ProtoLens: Advancing Prototype Learning for Fine-Grained Interpretability in Text Classification

**类别**: `主会-长文`

**作者**: Bowen Wei, Ziwei Zhu

**ID**: 2025.acl-long.226

**摘要(英文)**:
> In this work, we propose ProtoLens, a novel prototype-based model that provides fine-grained, sub-sentence level interpretability for text classification. ProtoLens uses a Prototype-aware Span Extraction module to identify relevant text spans associated with learned prototypes and a Prototype Alignment mechanism to ensure prototypes are semantically meaningful throughout training. By aligning the prototype embeddings with human-understandable examples, ProtoLens provides interpretable predictions while maintaining competitive accuracy. Extensive experiments demonstrate that ProtoLens outperforms both prototype-based and non-interpretable baselines on multiple text classification benchmarks. Code and data are available athttps://github.com/weibowen555/ProtoLens.

**摘要(中文)**:
> 在这项工作中，我们提出了 ProtoLens，这是一种基于原型的新颖模型，可为文本分类提供细粒度、子句级别的可解释性。 ProtoLens 使用原型感知跨度提取模块来识别与学习原型相关的相关文本跨度，并使用原型对齐机制来确保原型在整个训练过程中具有语义意义。通过将原型嵌入与人类可理解的示例对齐，ProtoLens 提供可解释的预测，同时保持有竞争力的准确性。大量实验表明，ProtoLens 在多个文本分类基准上均优于基于原型和不可解释的基线。代码和数据可在 https://github.com/weibowen555/ProtoLens 获取。

---

## 259. Instance-Selection-Inspired Undersampling Strategies for Bias Reduction in Small and Large Language Models for Binary Text Classification

**类别**: `主会-长文`

**作者**: Guilherme Fonseca, Washington Cunha, Gabriel Prenassi, Marcos André Gonçalves, Leonardo Chaves Dutra Da Rocha

**ID**: 2025.acl-long.458

**摘要(英文)**:
> Skewness in imbalanced datasets affects Automatic Text Classification (ATC), leading to classifier bias toward the majority classes. This work examines undersampling methods to mitigate such bias in Small and Large Language Model (SLMs and LLMs) classifiers. Based on the limitations found in existing solutions, we propose two novel undersampling methods inspired by state-of-the-art Instance Selection techniques, relying on calibrated confidences and semantic difficulty estimates. We compare them against 19 baselines across 13 datasets, evaluating: (i) effectiveness, (ii) class imbalance bias, (iii) efficiency, (iv) scalability, and (v) consistency. Results show our methods uniquely reduce classifier bias (up to 56%) across all datasets without effectiveness loss while improving efficiency (1.6x speedup), scalability and reducing carbon emissions (up to 50%).

**摘要(中文)**:
> 不平衡数据集中的偏度会影响自动文本分类 (ATC)，导致分类器偏向大多数类。这项工作研究了欠采样方法，以减轻小型和大型语言模型（SLM 和 LLM）分类器中的此类偏差。基于现有解决方案中发现的局限性，我们提出了两种新颖的欠采样方法，其灵感来自最先进的实例选择技术，依赖于校准的置信度和语义难度估计。我们将它们与 13 个数据集的 19 个基线进行比较，评估：(i) 有效性、(ii) 类别不平衡偏差、(iii) 效率、(iv) 可扩展性和 (v) 一致性。结果表明，我们的方法独特地减少了所有数据集的分类器偏差（高达 56%），而不会损失有效性，同时提高效率（加速 1.6 倍）、可扩展性并减少碳排放（高达 50%）。

---

## 260. Vulnerability ofLLMs to Vertically Aligned Text Manipulations

**类别**: `主会-长文`

**作者**: Zhecheng Li, Yiwei Wang, Bryan Hooi, Yujun Cai, Zhen Xiong, Nanyun Peng, Kai-Wei Chang

**ID**: 2025.acl-long.978

**摘要(英文)**:
> Vertical text input is commonly encountered in various real-world applications, such as mathematical computations and word-based Sudoku puzzles. While current large language models (LLMs) have excelled in natural language tasks, they remain vulnerable to variations in text formatting.Recent research demonstrates that modifying input formats, such as vertically aligning words for encoder-based models, can substantially lower accuracy in text classification tasks. While easily understood by humans, these inputs can significantly mislead models, posing a potential risk of bypassing detection in real-world scenarios involving harmful or sensitive information. With the expanding application of LLMs, a crucial question arises: Do decoder-based LLMs exhibit similar vulnerabilities to vertically formatted text input? In this paper, we investigate the impact of vertical text input on the performance of various LLMs across multiple text classification datasets and analyze the underlying causes. Our findings are as follows: (i) Vertical text input significantly degrades the accuracy of LLMs in text classification tasks. (ii) Chain of Thought (CoT) reasoning does not help LLMs recognize vertical input or mitigate its vulnerability, butfew-shot learningwith careful analysis does. (iii) We explore the underlying cause of the vulnerability by analyzing the inherent issues in tokenization and attention matrices.

**摘要(中文)**:
> 垂直文本输入在各种现实应用中都很常见，例如数学计算和基于单词的数独谜题。虽然当前的大型语言模型 (LLM) 在自然语言任务中表现出色，但它们仍然容易受到文本格式变化的影响。最近的研究表明，修改输入格式（例如为基于编码器的模型垂直对齐单词）可能会大大降低文本分类任务的准确性。虽然这些输入很容易被人类理解，但它们可能会严重误导模型，从而在涉及有害或敏感信息的现实场景中带来绕过检测的潜在风险。随着大语言模型应用的不断扩大，一个关键问题出现了：基于解码器的大语言模型是否与垂直格式的文本输入表现出类似的漏洞？在本文中，我们研究了垂直文本输入对跨多个文本分类数据集的各种大语言模型性能的影响，并分析了根本原因。我们的发现如下：（i）垂直文本输入显着降低了大语言模型在文本分类任务中的准确性。 (ii) 思维链 (CoT) 推理不能帮助大语言模型识别垂直输入或减轻其脆弱性，但经过仔细分析的少量学习可以。 （iii）我们通过分析标记化和注意力矩阵的固有问题来探讨漏洞的根本原因。

---

## 261. Efficient Ensemble for Fine-tuning Language Models on Multiple Datasets

**类别**: `主会-长文`

**作者**: Dongyue Li, Ziniu Zhang, Lu Wang, Hongyang R. Zhang

**ID**: 2025.acl-long.1231

**摘要(英文)**:
> This paper develops an ensemble method for fine-tuning a language model to multiple datasets. Existing methods, such as quantized LoRA (QLoRA), are efficient when adapting to a single dataset. When training on multiple datasets of different tasks, a common setup in practice, it remains unclear how to design an efficient adaptation for fine-tuning language models. We propose to use an ensemble of multiple smaller adapters instead of a single adapter per task. We design an efficient algorithm that partitionsndatasets intomgroups, wheremis typically much smaller thannin practice, and train one adapter for each group before taking a weighted combination to form the ensemble. The algorithm leverages a first-order approximation property of low-rank adaptation to quickly obtain the fine-tuning performances of dataset combinations since methods like LoRA stay close to the base model. Hence, we use the gradients of the base model to estimate its behavior during fine-tuning. Empirically, this approximation holds with less than 1% error on models with up to 34 billion parameters, leading to an estimation of true fine-tuning performances under 5% error while speeding up computation compared to base fine-tuning by 105 times. When applied to fine-tune Llama and GPT models on ten text classification tasks, our approach provides up to 10% higher average test accuracy over QLoRA, with only 9% more FLOPs. On a Llama model with 34 billion parameters, an ensemble of QLoRA increases test accuracy by 3% compared to QLoRA, with only 8% more FLOPs.

**摘要(中文)**:
> 本文开发了一种集成方法，用于针对多个数据集微调语言模型。现有方法，例如量化 LoRA (QLoRA)，在适应单个数据集时非常有效。当对不同任务的多个数据集进行训练时（实践中的常见设置），目前尚不清楚如何设计一种有效的适应方式来微调语言模型。我们建议每个任务使用多个较小适配器的集合，而不是单个适配器。我们设计了一种有效的算法，将数据集划分为组（通常比实践小得多），并在采用加权组合形成整体之前为每个组训练一个适配器。该算法利用低秩适应的一阶近似特性来快速获得数据集组合的微调性能，因为 LoRA 等方法与基本模型保持接近。因此，我们使用基本模型的梯度来估计其在微调期间的行为。根据经验，这种近似在具有多达 340 亿个参数的模型上保持小于 1% 的误差，从而导致估计误差低于 5% 的真实微调性能，同时与基础微调相比，计算速度提高了 105 倍。当应用于对 10 个文本分类任务的 Llama 和 GPT 模型进行微调时，我们的方法提供的平均测试精度比 QLoRA 高出 10%，而 FLOP 只增加了 9%。在具有 340 亿个参数的 Llama 模型上，与 QLoRA 相比，QLoRA 集成将测试精度提高了 3%，而 FLOP 只增加了 8%。

---

## 262. IRIS: Interpretable Retrieval-Augmented Classification for Long Interspersed Document Sequences

**类别**: `主会-长文`

**作者**: Fengnan Li, Elliot D. Hill, Jiang Shu, Jiaxin Gao, Matthew M. Engelhard

**ID**: 2025.acl-long.1461

**摘要(英文)**:
> Transformer-based models have achieved state-of-the-art performance in document classification but struggle with long-text processing due to the quadratic computational complexity in the self-attention module. Existing solutions, such as sparse attention, hierarchical models, and key sentence extraction, partially address the issue but still fall short when the input sequence is exceptionally lengthy. To address this challenge, we propose **IRIS** (**I**nterpretable **R**etrieval-Augmented Classification for long **I**nterspersed Document **S**equences), a novel, lightweight framework that utilizes retrieval to efficiently classify long documents while enhancing interpretability. IRIS segments documents into chunks, stores their embeddings in a vector database, and retrieves those most relevant to a given task using learnable query vectors. A linear attention mechanism then aggregates the retrieved embeddings for classification, allowing the model to process arbitrarily long documents without increasing computational cost and remaining trainable on a single GPU. Our experiments across six datasets show that IRIS achieves comparable performance to baseline models on standard benchmarks, and excels in three clinical note disease risk prediction tasks where documents are extremely long and key information is sparse. Furthermore, IRIS provides global interpretability by revealing a clear summary of key risk factors identified by the model. These findings highlight the potential of IRIS as an efficient and interpretable solution for long-document classification, particularly in healthcare applications where both performance and explainability are crucial.

**摘要(中文)**:
> 基于 Transformer 的模型在文档分类方面取得了最先进的性能，但由于自注意力模块中的二次计算复杂性，在长文本处理方面遇到了困难。现有的解决方案，例如稀疏注意力、层次模型和关键句提取，部分解决了这个问题，但当输入序列特别长时仍然存在不足。为了应对这一挑战，我们提出**IRIS**（**I**nterpretable **R**etrieval-Augmented Classification for long **I**ntpersed Document **S**equences），这是一种新颖的轻量级框架，利用检索对长文档进行有效分类，同时增强可解释性。 IRIS 将文档分割成块，将它们的嵌入存储在向量数据库中，并使用可学习的查询向量检索与给定任务最相关的嵌入。然后，线性注意力机制聚合检索到的嵌入以进行分类，从而允许模型处理任意长的文档，而不会增加计算成本并在单个 GPU 上保持可训练性。我们在六个数据集上进行的实验表明，IRIS 在标准基准上实现了与基线模型相当的性能，并且在文档极长且关键信息稀疏的三个临床记录疾病风险预测任务中表现出色。此外，IRIS 通过揭示模型确定的关键风险因素的清晰摘要来提供全局可解释性。这些发现凸显了 IRIS 作为长文档分类的高效且可解释的解决方案的潜力，特别是在性能和​​可解释性都至关重要的医疗保健应用中。

---

## 263. HyILR: Hyperbolic Instance-Specific Local Relationships for Hierarchical Text Classification

**类别**: `学生研讨会`

**作者**: Ashish Kumar, Durga Toshniwal

**ID**: 2025.acl-srw.63

**摘要(英文)**:
> Recent approaches to Hierarchical Text Classification (HTC) rely on capturing the global label hierarchy, which contains static and often redundant relationships. Instead, the hierarchical relationships within the instance-specific set of positive labels are more important, as they focus on the relevant parts of the hierarchy. These localized relationships can be modeled as a semantic alignment between the text and its positive labels within the embedding space. However, without explicitly encoding the global hierarchy, achieving this alignment directly in Euclidean space is challenging, as its flat geometry does not naturally support hierarchicalrelationships. To address this, we propose Hyperbolic Instance-Specific Local Relationships (HyILR), which models instance-specific relationships using the Lorentz model of hyperbolic space. Text and label features are projected into hyperbolic space, where a contrastive loss aligns text with its labels. This loss is guided by a hierarchy-aware negative sampling strategy, ensuring the selection of structurally and semantically relevant negatives. By leveraging hyperbolic geometry for this alignment, our approach inherently captures hierarchical relationships and eliminates the need for global hierarchy encoding. Experimental results on four benchmark datasets validate the superior performance of HyILR over baseline methods.

**摘要(中文)**:
> 最近的分层文本分类 (HTC) 方法依赖于捕获全局标签层次结构，其中包含静态且通常是冗余的关系。相反，特定于实例的正标签集中的层次关系更为重要，因为它们关注层次结构的相关部分。这些局部关系可以建模为嵌入空间内文本与其正标签之间的语义对齐。然而，如果没有显式地编码全局层次结构，直接在欧几里得空间中实现这种对齐是具有挑战性的，因为其平面几何结构自然不支持层次关系。为了解决这个问题，我们提出了双曲实例特定局部关系（HyILR），它使用双曲空间的洛伦兹模型对实例特定关系进行建模。文本和标签特征被投影到双曲空间中，其中对比损失将文本与其标签对齐。这种损失是由层次结构感知的负采样策略引导的，确保选择结构和语义相关的负样本。通过利用双曲几何进行这种对齐，我们的方法本质上捕获了层次关系并消除了全局层次编码的需要。四个基准数据集的实验结果验证了 HyILR 相对于基线方法的优越性能。

---

## 264. Small Language Models in the Real World: Insights from Industrial Text Classification

**类别**: `工业Track`

**作者**: Lujun Li, Lama Sleem, Niccolo’ Gentile, Geoffrey Nichil, Radu State

**ID**: 2025.acl-industry.68

**摘要(英文)**:
> With the emergence of ChatGPT, Transformer models have significantly advanced text classification and related tasks. Decoder-only models such as Llama exhibit strong performance and flexibility, yet they suffer from inefficiency on inference due to token-by-token generation, and their effectiveness in text classification tasks heavily depends on prompt quality. Moreover, their substantial GPU resource requirements often limit widespread adoption. Thus, the question of whether smaller language models are capable of effectively handling text classification tasks emerges as a topic of significant interest. However, the selection of appropriate models and methodologies remains largely underexplored. In this paper, we conduct a comprehensive evaluation of prompt engineering and supervised fine-tuning methods for transformer-based text classification. Specifically, we focus on practical industrial scenarios, including email classification, legal document categorization, and the classification of extremely long academic texts. We examine the strengths and limitations of smaller models, with particular attention to both their performance and their efficiency in Video Random-Access Memory (VRAM) utilization, thereby providing valuable insights for the local deployment and application of compact models in industrial settings.

**摘要(中文)**:
> 随着 ChatGPT 的出现，Transformer 模型显着推进了文本分类和相关任务。 Llama 等仅解码器模型表现出强大的性能和灵活性，但由于逐个令牌的生成，它们的推理效率低下，并且它们在文本分类任务中的有效性在很大程度上取决于提示质量。此外，它们对 GPU 资源的大量需求往往限制了广泛采用。因此，较小的语言模型是否能够有效地处理文本分类任务的问题成为人们非常感兴趣的话题。然而，适当模型和方法的选择在很大程度上仍未得到充分探索。在本文中，我们对基于 Transformer 的文本分类的提示工程和监督微调方法进行了综合评估。具体来说，我们关注实际的工业场景，包括电子邮件分类、法律文档分类、超长学术文本分类等。我们研究了较小模型的优点和局限性，特别关注它们在视频随机存取存储器（VRAM）利用率方面的性能和效率，从而为工业环境中紧凑模型的本地部署和应用提供了宝贵的见解。

---

## 265. Leveraging Variation Theory in Counterfactual Data Augmentation for Optimized Active Learning

**类别**: `Findings`

**作者**: Simret A Gebreegziabher, Kuangshi Ai, Zheng Zhang, Elena Glassman, Toby Jia-Jun Li

**ID**: 2025.findings-acl.50

**摘要(英文)**:
> Active Learning (AL) allows models to learn interactively from user feedback. However, only annotating existing samples may hardly benefit the model’s generalization. Moreover, AL commonly faces a cold start problem due to insufficient annotated data for effective sample selection. To address this, we introduce a counterfactual data augmentation approach inspired by Variation Theory, a theory of human concept learning that emphasizes the essential features of a concept by focusing on what stays the same and what changes. We use a neuro-symbolic pipeline to pinpoint key conceptual dimensions and use a large language model (LLM) to generate targeted variations along those dimensions. Through a text classification experiment, we show that our approach achieves significantly higher performance when there are fewer annotated data, showing its capability to address the cold start problem in AL. We also find that as the annotated training data gets larger, the impact of the generated data starts to diminish. This work demonstrates the value of incorporating human learning theories into the design and optimization of AL.

**摘要(中文)**:
> 主动学习 (AL) 允许模型从用户反馈中交互学习。然而，仅注释现有样本可能很难有利于模型的泛化。此外，由于注释数据不足以有效选择样本，AL 通常面临冷启动问题。为了解决这个问题，我们引入了一种受变异理论启发的反事实数据增强方法，变异理论是一种人类概念学习理论，通过关注保持不变和变化的内容来强调概念的基本特征。我们使用神经符号管道来查明关键概念维度，并使用大型语言模型 (LLM) 沿着这些维度生成有针对性的变化。通过文本分类实验，我们表明，当注释数据较少时，我们的方法可以实现显着更高的性能，显示出其解决 AL 中冷启动问题的能力。我们还发现，随着带注释的训练数据变大，生成数据的影响开始减弱。这项工作展示了将人类学习理论纳入 AL 设计和优化的价值。

---

## 266. ChuLo: Chunk-Level Key Information Representation for Long Document Understanding

**类别**: `Findings`

**作者**: Yan Li, Caren Han, Yue Dai, Feiqi Cao

**ID**: 2025.findings-acl.762

**摘要(英文)**:
> Transformer-based models have achieved remarkable success in various Natural Language Processing (NLP) tasks, yet their ability to handle long documents is constrained by computational limitations. Traditional approaches, such as truncating inputs, sparse self-attention, and chunking, attempt to mitigate these issues, but they often lead to information loss and hinder the model’s ability to capture long-range dependencies. In this paper, we introduce ChuLo, a novel chunk representation method for long document understanding that addresses these limitations. Our ChuLo groups input tokens using unsupervised keyphrase extraction, emphasizing semantically important keyphrase based chunks to retain core document content while reducing input length. This approach minimizes information loss and improves the efficiency of Transformer-based models. Preserving all tokens in long document understanding, especially token classification tasks, is important to ensure that fine-grained annotations, which depend on the entire sequence context, are not lost. We evaluate our method on multiple long document classification tasks and long document token classification tasks, demonstrating its effectiveness through comprehensive qualitative and quantitative analysis.

**摘要(中文)**:
> 基于 Transformer 的模型在各种自然语言处理 (NLP) 任务中取得了显着的成功，但它们处理长文档的能力受到计算限制的限制。传统方法（例如截断输入、稀疏自注意力和分块）试图缓解这些问题，但它们通常会导致信息丢失并阻碍模型捕获远程依赖关系的能力。在本文中，我们介绍了 ChuLo，一种用于长文档理解的新型块表示方法，可以解决这些限制。我们的 ChuLo 使用无监督的关键短语提取对输入标记进行分组，强调语义上重要的基于关键短语的块，以保留核心文档内容，同时减少输入长度。这种方法可以最大限度地减少信息丢失并提高基于 Transformer 的模型的效率。在长文档理解中保留所有标记，尤其是标记分类任务，对于确保依赖于整个序列上下文的细粒度注释不会丢失非常重要。我们在多个长文档分类任务和长文档标记分类任务上评估我们的方法，通过全面的定性和定量分析证明其有效性。

---

## 267. Weed Out, Then Harvest: Dual Low-Rank Adaptation is an Effective Noisy Label Detector for Noise-Robust Learning

**类别**: `Findings`

**作者**: Bo Yuan, Yulin Chen, Yin Zhang

**ID**: 2025.findings-acl.792

**摘要(英文)**:
> Parameter-efficient fine-tuning (PEFT) large language models (LLMs) have shown impressive performance in various downstream tasks. However, in many real-world scenarios, the collected training data inevitably contains noisy labels. To learn from noisy labels, most solutions select samples with small losses for model training. However, the selected samples, in turn, impact the loss computation in the next iteration. An inaccurate initial selection can create a vicious cycle, leading to suboptimal performance. To break this cycle, we propose Delora, a novel framework that decouples the sample selection from model training. For sample selection, Delora establishes a noisy label detector by introducing clean and noisy LoRA. Benefiting from the memory effect, the clean LoRA is encouraged to memorize clean data, while the noisy LoRA is constrained to memorize mislabeled data, which serves as a learnable threshold for selecting clean and noisy samples. For model training, Delora can use carefully selected samples to fine-tune language models seamlessly. Experimental results on synthetic and real-world noisy datasets demonstrate the effectiveness of Delora in noisy label detection and text classification.

**摘要(中文)**:
> 参数高效微调（PEFT）大语言模型（LLM）在各种下游任务中表现出了令人印象深刻的性能。然而，在许多现实场景中，收集的训练数据不可避免地包含噪声标签。为了从噪声标签中学习，大多数解决方案都会选择损失较小的样本进行模型训练。然而，所选样本反过来会影响下一次迭代中的损失计算。不准确的初始选择可能会造成恶性循环，导致性能不佳。为了打破这个循环，我们提出了 Delora，一种新颖的框架，它将样本选择与模型训练分离。对于样本选择，Delora 通过引入干净和噪声 LoRA 建立了噪声标签检测器。受益于记忆效应，干净的 LoRA 被鼓励记住干净的数据，而噪声的 LoRA 被限制记住错误标记的数据，这作为选择干净和噪声样本的可学习阈值。对于模型训练，Delora 可以使用精心挑选的样本来无缝地微调语言模型。合成和真实世界噪声数据集的实验结果证明了 Delora 在噪声标签检测和文本分类方面的有效性。

---

## 268. Are Dialects Better Prompters? A Case Study onArabic Subjective Text Classification

**类别**: `Findings`

**作者**: Leila Moudjari, Farah Benamara

**ID**: 2025.findings-acl.892

**摘要(英文)**:
> This paper investigates the effect of dialectal prompting, variations in prompting scrip t and model fine-tuning on subjective classification in Arabic dialects. To this end, we evaluate the performances of 12 widely used open LLMs across four tasks and eight benchmark datasets. Our results reveal that specialized fine-tuned models with Arabic and Arabizi scripts dialectal prompts achieve the best results, which constitutes a novel state of the art in the field.

**摘要(中文)**:
> 本文研究了方言提示、提示脚本变化和模型微调对阿拉伯方言主观分类的影响。为此，我们评估了 12 个广泛使用的开放式大语言模型在四个任务和八个基准数据集上的表现。我们的结果表明，带有阿拉伯语和阿拉伯语脚本方言提示的专门微调模型取得了最佳结果，这构成了该领域的新颖技术水平。

---

## 269. BEDAA:Bayesian EnhancedDeBERTa for Uncertainty-Aware Authorship Attribution

**类别**: `Findings`

**作者**: Iqra Zahid, Youcheng Sun, Riza Batista-Navarro

**ID**: 2025.findings-acl.924

**摘要(英文)**:
> Authorship Attribution (AA) seeks to identify the author of a given text, yet existing methods often struggle with trustworthiness and interpretability, particularly across different domains, languages, and stylistic variations. These challenges arise from the absence of uncertainty quantification and the inability of current models to adapt to diverse authorship tasks. To address these limitations, we introduce BEDAA, a Bayesian-Enhanced DeBERTa framework that integrates Bayesian reasoning with transformer-based language models to enable uncertainty-aware and interpretable authorship attribution. BEDAA achieves up to 19.69% improvement in F1-score across multiple authorship attribution tasks, including binary, multiclass, and dynamic authorship detection. By incorporating confidence ranking, uncertainty decomposition, and probabilistic reasoning, BEDAA improves robustness while offering transparent decision-making processes. Furthermore, BEDAA extends beyond traditional AA by demonstrating its effectiveness in human vs. machine-generated text classification, code authorship detection, and cross-lingual attribution. These advances establish BEDAA as a generalised, interpretable, and adaptable framework for modern authorship attribution challenges.

**摘要(中文)**:
> 作者归属 (AA) 旨在识别给定文本的作者，但现有方法经常在可信度和可解释性方面遇到困难，特别是在不同领域、语言和风格变化之间。这些挑战是由于缺乏不确定性量化以及当前模型无法适应不同的作者任务而产生的。为了解决这些限制，我们引入了 BEDAA，这是一种贝叶斯增强型 DeBERTa 框架，它将贝叶斯推理与基于转换器的语言模型集成在一起，以实现不确定性感知和可解释的作者归属。 BEDAA 在多项作者归属任务（包括二元、多类和动态作者身份检测）中，F1 分数提高了 19.69%。通过结合置信度排名、不确定性分解和概率推理，BEDAA 提高了稳健性，同时提供透明的决策流程。此外，BEDAA 通过展示其在人类与机器生成的文本分类、代码作者检测和跨语言归因方面的有效性，超越了传统的 AA。这些进步使 BEDAA 成为应对现代作者归属挑战的通用、可解释和适应性框架。

---

## 270. Let The Jury Decide: Fair Demonstration Selection for In-Context Learning through Incremental Greedy Evaluation

**类别**: `Findings`

**作者**: Sadaf Md Halim, Chen Zhao, Xintao Wu, Latifur Khan, Christan Grant, Fariha Ishrat Rahman, Feng Chen

**ID**: 2025.findings-acl.968

**摘要(英文)**:
> Large Language Models (LLMs) are powerful in-context learners, achieving strong performance with just a few high-quality demonstrations. However, fairness concerns arise in many in-context classification tasks, especially when predictions involve sensitive attributes. To address this, we propose JUDGE—a simple yet effective framework for selecting fair and representative demonstrations that improve group fairness in In-Context Learning. JUDGE constructs the demonstration set iteratively using a greedy approach, guided by a small, carefully selected jury set. Our method remains robust across varying LLM architectures and datasets, ensuring consistent fairness improvements. We evaluate JUDGE on four datasets using four LLMs, comparing it against seven baselines. Results show that JUDGE consistently improves fairness metrics without compromising accuracy.

**摘要(中文)**:
> 大型语言模型 (LLM) 是强大的上下文学习器，只需几次高质量的演示即可实现出色的性能。然而，在许多上下文分类任务中都会出现公平性问题，特别是当预测涉及敏感属性时。为了解决这个问题，我们提出了 JUDGE——一个简单而有效的框架，用于选择公平且有代表性的演示，从而提高情境学习中的群体公平性。 JUDGE 在精心挑选的小型陪审团集的指导下，使用贪婪方法迭代构建演示集。我们的方法在不同的大语言模型架构和数据集上保持稳健，确保一致的公平性改进。我们使用四个大语言模型在四个数据集上评估 JUDGE，并将其与七个基线进行比较。结果表明，JUDGE 在不影响准确性的情况下持续改进公平性指标。

---

## 271. Label-semantics Aware Generative Approach for Domain-Agnostic Multilabel Classification

**类别**: `Findings`

**作者**: Subhendu Khatuya, Shashwat Naidu, Saptarshi Ghosh, Pawan Goyal, Niloy Ganguly

**ID**: 2025.findings-acl.1145

**摘要(英文)**:
> The explosion of textual data has made manual document classification increasingly challenging. To address this, we introduce a robust, efficient domain-agnostic generative model framework for multi-label text classification. Instead of treating labels as mere atomic symbols, our approach utilizes predefined label descriptions and is trained to generate these descriptions based on the input text. During inference, the generated descriptions are matched to the predefined labels using a finetuned sentence transformer. We integrate this with a dual-objective loss function, combining cross-entropy loss and cosine similarity of the generated sentences with the predefined target descriptions, ensuring both semantic alignment and accuracy. Our proposed model LAGAMC stands out for its parameter efficiency and versatility across diverse datasets, making it well-suited for practical applications. We demonstrate the effectiveness of our proposed model by achieving new state-of-the-art performances across all evaluated datasets, surpassing several strong baselines. We achieve improvements of 13.94 % in Micro-F1 and 24.85 % in Macro-F1 compared to the closest baseline across all datasets.

**摘要(中文)**:
> 文本数据的爆炸式增长使得手动文档分类变得越来越具有挑战性。为了解决这个问题，我们引入了一个强大、高效的与领域无关的生成模型框架，用于多标签文本分类。我们的方法不是将标签视为纯粹的原子符号，而是利用预定义的标签描述，并经过训练以根据输入文本生成这些描述。在推理过程中，使用微调的句子转换器将生成的描述与预定义的标签进行匹配。我们将其与双目标损失函数集成，将生成的句子的交叉熵损失和余弦相似度与预定义的目标描述相结合，确保语义对齐和准确性。我们提出的模型 LAGAMC 因其参数效率和跨不同数据集的多功能性而脱颖而出，使其非常适合实际应用。我们通过在所有评估的数据集上实现新的最先进的性能，超越了几个强大的基线，证明了我们提出的模型的有效性。与所有数据集最接近的基线相比，我们在 Micro-F1 中实现了 13.94% 的改进，在 Macro-F1 中实现了 24.85% 的改进。

---

## 272. Swahili News Classification: Performance, Challenges, and Explainability AcrossML,DL, and Transformers

**类别**: `Workshop-AfricaNLP`

**作者**: Manas Pandya, Avinash Kumar Sharma, Arpit Shukla

**ID**: 2025.africanlp-1.30

**摘要(英文)**:
> In this paper, we propose a comprehensive framework for the classification of Swahili news articles using a combination of classical machine learning techniques, deep neural networks, and transformer-based models. By balancing two diverse datasets sourced from Harvard Dataverse and Kaggle, our approach addresses the inherent challenges of imbalanced data in low-resource languages. Our experiments demonstrate the effectiveness of the proposed methodology and set the stage for further advances in Swahili natural language processing.

**摘要(中文)**:
> 在本文中，我们结合经典机器学习技术、深度神经网络和基于变压器的模型，提出了一个对斯瓦希里语新闻文章进行分类的综合框架。通过平衡来自哈佛 Dataverse 和 Kaggle 的两个不同数据集，我们的方法解决了低资源语言中数据不平衡的固有挑战。我们的实验证明了所提出方法的有效性，并为斯瓦希里语自然语言处理的进一步发展奠定了基础。

---

## 273. LIMICSatArchEHR-QA2025: PromptingLLMs Beats Fine-Tuned Embeddings

**类别**: `Workshop-BioNLP`

**作者**: Adam Remaki, Armand Violle, Vikram Natraj, Étienne Guével, Akram Redjdal

**ID**: 2025.bionlp-share.18

**摘要(英文)**:
> In this paper, we investigated two approaches to clinical question-answering based on patient-formulated questions, supported by their narratives and brief medical records. The first approach leverages zero- and few-shot prompt engineering techniques with GPT-based Large Language Models (LLMs), incorporating strategies such as prompt chaining and chain-of-thought reasoning to guide the models in generating answers. The second approach adopts a two-steps structure: first, a text-classification stage uses embedding-based models (e.g., BERT variants) to identify sentences within the medical record that are most relevant to the given question; then, we prompt an LLM to paraphrase them into an answer so that it is generated exclusively from these selected sentences. Our empirical results demonstrate that the first approach outperforms the classification-guided pipeline, achieving the highest score on the development set and the test set using prompt chaining. Code: github.com/armandviolle/BioNLP-2025

**摘要(中文)**:
> 在本文中，我们研究了两种基于患者提出的问题并得到患者叙述和简短医疗记录支持的临床问答方法。第一种方法利用零样本和少样本提示工程技术以及基于 GPT 的大型语言模型 (LLM)，结合提示链和思维链推理等策略来指导模型生成答案。第二种方法采用两步结构：首先，文本分类阶段使用基于嵌入的模型（例如 BERT 变体）来识别医疗记录中与给定问题最相关的句子；然后，我们提示大语言模型将它们解释为答案，以便仅根据这些选定的句子生成答案。我们的实证结果表明，第一种方法优于分类引导管道，使用提示链在开发集和测试集上取得了最高分。代码：github.com/armandviolle/BioNLP-2025

---

## 274. Hierarchical Classification of Propaganda Techniques inSlavic Texts in Hyperbolic Space

**类别**: `Workshop-BSNLP`

**作者**: Christopher Brückner, Pavel Pecina

**ID**: 2025.bsnlp-1.21

**摘要(英文)**:
> Classification problems can often be tackled by modeling label hierarchies with broader categories in a graph and solving the task via node classification. While recent advances have shown that hyperbolic space is more suitable than Euclidean space for learning graph representations, this concept has yet to be applied to text classification, where node features first need to be extracted from text embeddings. A prototype of such an architecture is this contribution to the Slavic NLP 2025 shared task on the multi-label classification of persuasion techniques in parliamentary debates and social media posts. We do not achieve state-of-the-art performance, but outline the benefits of this hierarchical node classification approach and the advantages of hyperbolic graph embeddings

**摘要(中文)**:
> 分类问题通常可以通过在图中使用更广泛的类别对标签层次结构进行建模并通过节点分类解决任务来解决。虽然最近的进展表明双曲空间比欧几里得空间更适合学习图表示，但这一概念尚未应用于文本分类，其中首先需要从文本嵌入中提取节点特征。这种架构的原型是对 Slavic NLP 2025 共享任务的贡献，该任务涉及议会辩论和社交媒体帖子中说服技术的多标签分类。我们没有实现最先进的性能，但概述了这种分层节点分类方法的好处以及双曲图嵌入的优点

---

## 275. Transforming adaptation tracking: benchmarking Transformer-basedNLPapproaches to retrieve adaptation-relevant information from climate policy text

**类别**: `Workshop-ClimateNLP`

**作者**: Jetske Bonenkamp, Robbert Biesbroek, Ioannis N. Athanasiadis

**ID**: 2025.climatenlp-1.19

**摘要(英文)**:
> The voluminous, highly unstructured, and intersectoral nature of climate policy data resulted in increased calls for automated methods to retrieve information relevant to climate change adaptation. Collecting such information is crucial to establish a large-scale evidence base to monitor and evaluate current adaptation practices. Using a novel, hand-labelled dataset, we explored the potential of state-of-the-art Natural Language Processing methods and compared the performance of various Transformer-based solutions to classify text based on adaptation-relevance in both zero-shot and fine-tuned settings. We find that fine-tuned, encoder-only models, particularly those pre-trained on data from a related domain, are best suited to the task, outscoring zero-shot and rule-based approaches. Furthermore, our results show that text granularity played a crucial role in performance, with shorter text splits leading to decreased performance. Finally, we find that excluding records with below-moderate annotator confidence enhances model performance. These findings reveal key methodological considerations for automating and upscaling text classification in the climate change (adaptation) policy domain.

**摘要(中文)**:
> 气候政策数据数量庞大、高度非结构化和跨部门性质，导致人们越来越多地呼吁采用自动化方法来检索与气候变化适应相关的信息。收集此类信息对于建立大规模证据库来监测和评估当前的适应实践至关重要。使用新颖的手工标记数据集，我们探索了最先进的自然语言处理方法的潜力，并比较了各种基于 Transformer 的解决方案的性能，以根据零样本和微调设置中的适应相关性对文本进行分类。我们发现经过微调的仅编码器模型，特别是那些根据相关领域的数据进行预训练的模型，最适合该任务，优于零样本和基于规则的方法。此外，我们的结果表明，文本粒度在性能中起着至关重要的作用，较短的文本分割会导致性能下降。最后，我们发现排除注释器置信度低于中等的记录可以提高模型性能。这些发现揭示了气候变化（适应）政策领域中文本分类自动化和升级的关键方法考虑因素。

---

## 276. Short-circuiting Shortcuts: Mechanistic Investigation of Shortcuts in Text Classification

**类别**: `Workshop-CoNLL`

**作者**: Leon Eshuijs, Shihan Wang, Antske Fokkens

**ID**: 2025.conll-1.8

**摘要(英文)**:
> Reliance on spurious correlations (shortcuts) has been shown to underlie many of the successes of language models. Previous work focused on identifying the input elements that impact prediction. We investigate how shortcuts are actually processed within the model’s decision-making mechanism.We use actor names in movie reviews as controllable shortcuts with known impact on the outcome. We use mechanistic interpretability methods and identify specific attention heads that focus on shortcuts. These heads gear the model towards a label before processing the complete input, effectively making premature decisions that bypass contextual analysis. Based on these findings, we introduce Head-based Token Attribution (HTA), which traces intermediate decisions back to input tokens. We show that HTA is effective in detecting shortcuts in LLMs and enables targeted mitigation by selectively deactivating shortcut-related attention heads.

**摘要(中文)**:
> 事实证明，对虚假相关性（捷径）的依赖是语言模型许多成功的基础。之前的工作重点是识别影响预测的输入元素。我们研究了模型决策机制中捷径的实际处理方式。我们在电影评论中使用演员姓名作为可控捷径，对结果的影响已知。我们使用机械解释方法并识别专注于捷径的特定注意力头。这些头在处理完整的输入之前将模型调整为标签，从而有效地做出绕过上下文分析的过早决策。基于这些发现，我们引入了基于头部的令牌归因（HTA），它将中间决策追溯到输入令牌。我们证明，HTA 可以有效地检测大语言模型中的捷径，并通过选择性地停用与捷径相关的注意力头来实现有针对性的缓解。

---

## 277. Natural Language Counterfactual Explanations in Financial Text Classification: A Comparison of Generators and Evaluation Metrics

**类别**: `Workshop-GEM`

**作者**: Karol Dobiczek, Patrick Altmeyer, Cynthia C. S. Liem

**ID**: 2025.gem-1.75

**摘要(英文)**:
> The use of large language model (LLM) classifiers in finance and other high-stakes domains calls for a high level of trustworthiness and explainability. We focus on counterfactual explanations (CE), a form of explainable AI that explains a model’s output by proposing an alternative to the original input that changes the classification. We use three types of CE generators for LLM classifiers and assess the quality of their explanations on a recent dataset consisting of central bank communications. We compare the generators using a selection of quantitative and qualitative metrics. Our findings suggest that non-expert and expert evaluators prefer CE methods that apply minimal changes; however, the methods we analyze might not handle the domain-specific vocabulary well enough to generate plausible explanations. We discuss shortcomings in the choice of evaluation metrics in the literature on text CE generators and propose refined definitions of the fluency and plausibility qualitative metrics.

**摘要(中文)**:
> 在金融和其他高风险领域使用大型语言模型 (LLM) 分类器需要高水平的可信性和可解释性。我们专注于反事实解释（CE），这是一种可解释的人工智能形式，它通过提出改变分类的原始输入的替代方案来解释模型的输出。我们使用三种类型的 CE 生成器作为 LLM 分类器，并评估它们对由央行通信组成的最新数据集的解释质量。我们使用一系列定量和定性指标来比较生成器。我们的研究结果表明，非专家和专家评估者更喜欢应用最小变化的 CE 方法；然而，我们分析的方法可能无法很好地处理特定领域的词汇，无法生成合理的解释。我们讨论了文本 CE 生成器文献中评估指标选择的缺点，并提出了流畅性和合理性定性指标的精确定义。

---

## 278. NCLTeam atSemEval-2025 Task 10: Enhancing Multilingual, multi-class, and Multi-Label Document Classification via Contrastive Learning Augmented CascadedUNet and Embedding based Approaches

**类别**: `Workshop-SemEval`

**作者**: Shu Li, George Williamson, Huizhi Liang

**ID**: 2025.semeval-1.58

**摘要(英文)**:
> The SemEval 2025 Task 10 Subtask2 presents a multi-task multi-label text classification challenge. The task requires systems to classify documents simultaneously across three distinct topics, the Climate Change(CC), the Ukraine Russia War(URW), and others. Several challenge were identified, including the instinct distinct of topics, the imbalance of categories, the insufficient samples, and the different distribution of develop set and test set. To address these challenges, two deep learning model have been implemented. One of the approach is the Contrastive learning augmented Cascaded UNet model(CCU), which employs a cascaded architecture to jointly process all subtasks. This model incorporates an UNet-style architecture to classify embeddings extracted by the base text encoder. A domain adaption method was implemented to facilitate joint learning across different document topics. We address the data insufficiency through contrastive learning and mitigate data imbalance using asymmetric loss function. We also implemented a shallow machine learning model. In this approach, transformer encoder models were applied to extract text embedding from various aspect, then deploy machine learning method to do the classification and compared with the base line. The UNet-style model achieves the highest f1 sample at 0.365 on the test set of 5th place compared with all approaches on leader board. Our source code developed for this paper are available at

**摘要(中文)**:
> SemEval 2025 任务 10 子任务 2 提出了多任务多标签文本分类挑战。该任务要求系统同时对气候变化（CC）、乌克兰俄罗斯战争（URW）等三个不同主题的文档进行分类。发现了一些挑战，包括主题的本能差异、类别的不平衡、样本不足以及开发集和测试集的不同分布。为了应对这些挑战，实施了两种深度学习模型。其中一种方法是对比学习增强级联 UNet 模型（CCU），它采用级联架构来联合处理所有子任务。该模型采用 UNet 风格的架构来对基本文本编码器提取的嵌入进行分类。实施领域适应方法以促进跨不同文档主题的联合学习。我们通过对比学习解决数据不足的问题，并使用不对称损失函数减轻数据不平衡的问题。我们还实现了浅层机器学习模型。在这种方法中，应用变压器编码器模型从各个方面提取文本嵌入，然后部署机器学习方法进行分类并与基线进行比较。与排行榜上的所有方法相比，UNet 式模型在第五名的测试集上实现了最高的 f1 样本，为 0.365。我们为本文开发的源代码可在

---

## 279. cocoa atSemEval-2025 Task 10: Prompting vs. Fine-Tuning: A Multilevel Approach to Propaganda Classification

**类别**: `Workshop-SemEval`

**作者**: Vineet Saravanan, Steven Wilson

**ID**: 2025.semeval-1.82

**摘要(英文)**:
> The increasing sophistication of natural language processing models has facilitated advancements in hierarchical text classification, particularly in the domain of propaganda detection. This paper presents our submission to SemEval 2025 Task 10, Subtask 1, which focuses on multilevel text classification for identifying and categorizing propaganda narratives in online news. We investigate two primary approaches: (1) prompt-based classification using large language models (LLMs) like GPT, which offers flexibility but struggles with hierarchical categorization, and (2) fine-tuning transformer-based models, where we employ a hierarchical structure—one model classifies the main propaganda category, followed by three separate models specializing in subcategory classification. Our results indicate that while LLMs demonstrate some generalization ability, fine-tuned models significantly outperform them in accuracy and reliability, reinforcing the importance of task-specific supervised learning for propaganda detection. Additionally, we discuss challenges related to data sparsity in subclassification and explore potential enhancements such as multi-task learning and hierarchical loss functions. Our findings contribute to the broader field of automated propaganda detection and emphasize the value of structured classification models in combating misinformation. All code and data used in our experiments will be made publicly available on our GitHub

**摘要(中文)**:
> 自然语言处理模型的日益复杂化促进了分层文本分类的进步，特别是在宣传检测领域。本文介绍了我们向 SemEval 2025 任务 10 子任务 1 提交的内容，该任务侧重于多级文本分类，用于识别和分类在线新闻中的宣传叙述。我们研究了两种主要方法：（1）使用 GPT 等大型语言模型（LLM）进行基于提示的分类，它提供了灵活性，但难以进行分层分类；（2）微调基于 Transformer 的模型，其中我们采用分层结构 - 一个模型对主要宣传类别进行分类，然后是三个专门用于子类别分类的独立模型。我们的结果表明，虽然大语言模型表现出一定的泛化能力，但微调模型在准确性和可靠性方面显着优于它们，这强化了特定任务监督学习对于宣传检测的重要性。此外，我们讨论了与子分类中数据稀疏性相关的挑战，并探索了潜在的增强功能，例如多任务学习和分层损失函数。我们的研究结果有助于更广泛的自动宣传检测领域，并强调结构化分类模型在打击错误信息方面的价值。我们实验中使用的所有代码和数据都将在我们的 GitHub 上公开提供

---

## 280. BlueToad atSemEval-2025 Task 3: Using Question-Answering-Based Language Models to Extract Hallucinations from Machine-Generated Text

**类别**: `Workshop-SemEval`

**作者**: Michiel Pronk, Ekaterina Kamyshanova, Thijmen Adam, Maxim Van Der Maesen De Sombreff

**ID**: 2025.semeval-1.95

**摘要(英文)**:
> Hallucination in machine-generated text poses big risks in various domains, such as finance, medicine, and engineering. Task 3 of SemEval-2025, Mu-SHROOM, challenges participants to detect hallucinated spans in such text. Our approach uses pre-trained language models and fine-tuning strategies to enhance hallucination spam detection, focusing on the English track. Firstly, we applied GPT-4o mini to generate synthetic data by labeling unlabeled data. Then, we employed encoder-only pre-trained language models with a question-answering architecture for hallucination span detection, ultimately choosing XLM-RoBERTa for fine-tuning on multilingual data. This model appeared to be our best and ranked 18th and 22nd on the English track with 0.469 intersection-over-union and 0.441 correlation scores, respectively. It achieved promising results across multiple languages, surpassing baseline methods in 11 out of 13 languages, with Hindi having the highest scores of 0.645 intersection-over-union and 0.684 correlation coefficient. Our findings highlight the potential of a QA approach and using synthetic and multilingual data for hallucination span detection.

**摘要(中文)**:
> 机器生成的文本中的幻觉在金融、医学和工程等各个领域都带来了巨大的风险。 SemEval-2025 的任务 3 Mu-SHROOM 要求参与者检测此类文本中的幻觉跨度。我们的方法使用预先训练的语言模型和微调策略来增强幻觉垃圾邮件检测，重点关注英语轨道。首先，我们应用 GPT-4o mini 通过标记未标记的数据来生成合成数据。然后，我们采用仅编码器预训练的语言模型和问答架构进行幻觉跨度检测，最终选择 XLM-RoBERTa 对多语言数据进行微调。该模型似乎是我们最好的模型，在英语赛道上排名第 18 和第 22，分别具有 0.469 的交集和 0.441 的相关性分数。它在多种语言中取得了可喜的结果，在 13 种语言中的 11 种中超越了基线方法，其中印地语的得分最高，为 0.645 的交集和 0.684 的相关系数。我们的研究结果凸显了 QA 方法以及使用合成和多语言数据进行幻觉跨度检测的潜力。

---

## 281. Anaselka atSemEval-2025 Task 9: LeveragingSVMandMNBfor Detecting Food Hazard

**类别**: `Workshop-SemEval`

**作者**: Anwar Annas, Al Hafiz Siagian

**ID**: 2025.semeval-1.111

**摘要(英文)**:
> Our system for the Sub-task 1 of SemEval-2025 Task 9 has been designed to tackle the complexities of identifying and categorizing food safety incidents from textual data. Through a rigorous experimental setup, we have developed a text classification solution that leveraged state-of-the-art techniques in data preprocessing, feature engineering, and model optimization.

**摘要(中文)**:
> 我们用于 SemEval-2025 任务 9 的子任务 1 的系统旨在解决从文本数据中识别和分类食品安全事件的复杂性。通过严格的实验设置，我们开发了一种文本分类解决方案，该解决方案利用了数据预处理、特征工程和模型优化方面最先进的技术。

---

## 282. TeamINSALyon2 atSemEval-2025 Task 10: A Zero-shot Agentic Approach to Text Classification

**类别**: `Workshop-SemEval`

**作者**: Mohamed - Nour Eljadiri, Diana Nurbakova

**ID**: 2025.semeval-1.129

**摘要(英文)**:
> We present Team INSALyon2’s agentic approach to SemEval-2025 Task 10 Subtask 2, which focuses on the multi-label classification of narratives in news articles across five languages. Our system employs a zero-shot architecture where specialized Large Language Model (LLM) agents handle binary classification tasks for individual narrative/subnarrative labels, with a meta-agent aggregating these decisions into final multi-label predictions. Instead of fine-tuning on the dataset, we leverage AutoGen to orchestrate multiple GPT-based agents, each responsible for detecting specific narrative/subnarrative types in a modular framework. This agent-based approach naturally handles the challenge of multi-label classification by enabling parallel decisions across the two-level taxonomy. Experiments on the English subset demonstrate strong performance with our system achieving F1_macro_coarse = 0.513, F1_sample = 0.406, securing third place in the competition. Our findings show that zero-shot agentic approaches can be competitive in complex classification tasks.

**摘要(中文)**:
> 我们介绍 INSALyon2 团队对 SemEval-2025 任务 10 子任务 2 的代理方法，该方法侧重于五种语言新闻文章中叙述的多标签分类。我们的系统采用零样本架构，其中专门的大语言模型（LLM）代理处理单个叙述/子叙述标签的二元分类任务，并由元代理将这些决策聚合成最终的多标签预测。我们没有对数据集进行微调，而是利用 AutoGen 来编排多个基于 GPT 的代理，每个代理负责检测模块化框架中的特定叙述/子叙述类型。这种基于代理的方法通过在两级分类法中实现并行决策，自然地应对多标签分类的挑战。在英语子集上的实验证明了我们的系统具有强大的性能，达到了 F1_macro_coarse = 0.513，F1_sample = 0.406，在比赛中获得了第三名。我们的研究结果表明，零样本代理方法在复杂的分类任务中具有竞争力。

---

## 283. TeamINSAntive atSemEval-2025 Task 10: Hierarchical Text Classification usingBERT

**类别**: `Workshop-SemEval`

**作者**: Yutong Wang, Diana Nurbakova, Sylvie Calabretto

**ID**: 2025.semeval-1.130

**摘要(英文)**:
> In this paper, we propose a BERT-based hierarchical text classification framework to address the challenges of training multi-level classification tasks. As part of the SemEval-2025 Task 10 challenge (Subtask 2), the framework performs fine-grained text classification by training dedicated sub-category classifiers for each top-level category. Experimental results demonstrate the feasibility of the proposed approach in multi-class text classification tasks.

**摘要(中文)**:
> 在本文中，我们提出了一种基于 BERT 的分层文本分类框架，以解决训练多级分类任务的挑战。作为 SemEval-2025 任务 10 挑战（子任务 2）的一部分，该框架通过为每个顶级类别训练专用子类别分类器来执行细粒度文本分类。实验结果证明了该方法在多类文本分类任务中的可行性。

---

## 284. COGNACatSemEval-2025 Task 10: Multi-level Narrative Classification with Summarization and Hierarchical Prompting

**类别**: `Workshop-SemEval`

**作者**: Azwad Anjum Islam, Mark Finlayson

**ID**: 2025.semeval-1.190

**摘要(英文)**:
> We present our approach to solving the Narrative Classification portion of the Multilingual Characterization and Extraction of Narratives SemEval-2025 challenge (Task 10, Subtask 2). This task is a multi-label, multi-class document classification task, where the classes were defined via natural language titles, descriptions, short examples, and annotator instructions, with only a few (and sometime no) labeled examples for training. Our approach leverages a text-summarization, binary relevance with zero-shot prompts, and hierarchical prompting using Large Language Models (LLM) to identify the narratives and subnarratives in the provided news articles. Notably, we did not use the labeled examples to train the system. Our approach well outperforms the official baseline and achieves an F1 score of 0.55 (narratives) and 0.43 (subnarratives), and placed 2nd in the test-set leaderboard at the system submission deadline. We provide an in-depth analysis of the construction and effectiveness of our approach using both open-source (LLaMA 3.1-8B-Instruct) and proprietary (GPT 4o-mini) Large Language Models under different prompting setups.

**摘要(中文)**:
> 我们提出了解决多语言表征和叙事提取 SemEval-2025 挑战（任务 10，子任务 2）的叙事分类部分的方法。该任务是一个多标签、多类文档分类任务，其中类是通过自然语言标题、描述、简短示例和注释器指令定义的，只有少数（有时没有）带标签的示例进行训练。我们的方法利用文本摘要、零样本提示的二元相关性以及使用大型语言模型 (LLM) 的分层提示来识别所提供的新闻文章中的叙述和子叙述。值得注意的是，我们没有使用标记的示例来训练系统。我们的方法远远优于官方基线，取得了 0.55（叙述）和 0.43（子叙述）的 F1 分数，并在系统提交截止日期时在测试集排行榜上排名第二。我们在不同的提示设置下使用开源 (LLaMA 3.1-8B-Instruct) 和专有 (GPT 4o-mini) 大语言模型，对我们的方法的构造和有效性进行深入分析。

---

## 285. Precision vs. Perturbation: Robustness Analysis of Synonym Attacks inUkrainianNLP

**类别**: `Workshop-UNLP`

**作者**: Volodymyr Mudryi, Oleksii Ignatenko

**ID**: 2025.unlp-1.15

**摘要(英文)**:
> Synonym-based adversarial tests reveal fragile word patterns that accuracy metrics overlook, while virtually no such diagnostics exist for Ukrainian, a morphologically rich and low‐resource language. We present the first systematic robustness evaluation under synonym substitution in Ukrainian. Adapting TextFooler and BERT‐Attack to Ukrainian, we (i) adjust a 15000‐entry synonym dictionary to match proper word forms; (ii) integrate similarity filters; (iii) adapt masked‐LM search so it generates only valid inflected words. Across three text classification datasets (reviews, news headlines, social‐media manipulation) and three transformer models (Ukr‐RoBERTa, XLM‐RoBERTa, SBERT), single‐word swaps reduce accuracy by up to 12.6, while multi‐step attacks degrade performance by as much as 40.27 with around 112 model queries. A few‐shot transfer test shows GPT‐4o, a state‐of‐the‐art multilingual LLM, still suffers 6.9–15.0 drops on the same adversarial samples. Our results underscore the need for sense‐aware, morphology‐constrained synonym resources and provide a reproducible benchmark for future robustness research in Ukrainian NLP.

**摘要(中文)**:
> 基于同义词的对抗性测试揭示了准确性指标忽视的脆弱的单词模式，而乌克兰语这种形态丰富且资源匮乏的语言几乎不存在这样的诊断。我们提出了乌克兰语同义词替换下的第一个系统稳健性评估。将 TextFooler 和 BERT-Attack 调整为乌克兰语，我们 (i) 调整 15000 个条目的同义词词典以匹配正确的单词形式； (ii) 集成相似性过滤器； (iii) 调整 masked-LM 搜索，使其仅生成有效的变形词。在三个文本分类数据集（评论、新闻头条、社交媒体操纵）和三个 Transformer 模型（Ukr-RoBERTa、XLM-RoBERTa、SBERT）中，单字交换将准确率降低了 12.6，而多步攻击在大约 112 个模型查询中使性能降低了 40.27。几次转移测试显示，GPT-4o（一种最先进的多语言大语言模型）在相同的对抗样本上仍然遭受 6.9-15.0 的下降。我们的结果强调了对意义感知、形态受限的同义词资源的需求，并为乌克兰 NLP 未来的稳健性研究提供了可重复的基准。

---

## 286. Are You Trying to Convince Me or Are You Trying to Deceive Me? Using Argumentation Types to Identify Deceptive News

**类别**: `Workshop-WOAH`

**作者**: Ricardo Muñoz Sánchez, Emilie Francis, Anna Lindahl

**ID**: 2025.woah-1.31

**摘要(英文)**:
> The way we relay factual information and the way we present deceptive information as truth differs from the perspective of argumentation. In this paper, we explore whether these differences can be exploited to detect deceptive political news in English. We do this by training a model to detect different kinds of argumentation in online news text. We use sentence embeddings extracted from an argumentation type classification model as features for a deceptive news classifier. This deceptive news classification model leverages the sequence of argumentation types within an article to determine whether it is credible or deceptive. Our approach outperforms other state-of-the-art models while having lower variance. Finally, we use the output of our argumentation model to analyze the differences between credible and deceptive news based on the distribution of argumentation types across the articles. Results of this analysis indicate that credible political news presents statements supported by a variety of argumentation types, while deceptive news relies on anecdotes and testimonial.

**摘要(中文)**:
> 从论证的角度来看，我们传递事实信息的方式和将欺骗性信息呈现为真理的方式是不同的。在本文中，我们探讨是否可以利用这些差异来检测英语中的欺骗性政治新闻。我们通过训练一个模型来检测在线新闻文本中不同类型的论证来做到这一点。我们使用从论证类型分类模型中提取的句子嵌入作为欺骗性新闻分类器的特征。这种欺骗性新闻分类模型利用文章中论证类型的顺序来确定其是否可信或具有欺骗性。我们的方法优于其他最先进的模型，同时具有较低的方差。最后，我们使用论证模型的输出，根据文章中论证类型的分布来分析可信新闻和欺骗性新闻之间的差异。这项分析的结果表明，可信的政治新闻提出了各种论证类型支持的陈述，而欺骗性新闻则依赖于轶事和证言。

## 语义解析 (27 篇)

---

## 287. TARGA: Targeted Synthetic Data Generation for Practical Reasoning over Structured Data

**类别**: `主会-长文`

**作者**: Xiang Huang, Jiayu Shen, Shanshan Huang, Sitao Cheng, Xiaxia Wang, Yuzhong Qu

**ID**: 2025.acl-long.137

**摘要(英文)**:
> Semantic parsing, which converts natural language queries into logic forms, plays a crucial role in reasoning within structured environments. However, existing methods encounter two significant challenges: reliance on extensive manually annotated datasets and limited generalization capability to unseen examples. To tackle these issues, we propose Targeted Synthetic Data Generation (Targa), a practical framework that dynamically generates high-relevance synthetic data without manual annotation. Starting from the pertinent entity and relation of a given question, we probe for the potential relevant queries through layer-wise expansion and cross-layer combination. Then, we generate corresponding natural language questions for these constructed queries to jointly serve as the synthetic demonstration for in-context learning. Experiments on multiple knowledge-based question answering (KBQA) datasets demonstrate that Targa, using only a 7B-parameter model, substantially outperforms existing non-fine-tuned methods that utilize close-sourced model, achieving notable improvements in F1 scores on GrailQA(+7.7) and KBQA-Agent(+12.2). Furthermore, Targa also exhibits superior sample efficiency, robustness, and generalization capabilities under non-I.I.D. settings.

**摘要(中文)**:
> 语义解析将自然语言查询转换为逻辑形式，在结构化环境中的推理中发挥着至关重要的作用。然而，现有方法遇到两个重大挑战：依赖大量手动注释的数据集以及对未见过的示例的泛化能力有限。为了解决这些问题，我们提出了目标合成数据生成（Targa），这是一个实用的框架，可以动态生成高相关性合成数据，无需手动注释。从给定问题的相关实体和关系出发，我们通过逐层扩展和跨层组合来探索潜在的相关查询。然后，我们为这些构造的查询生成相应的自然语言问题，共同作为上下文学习的综合演示。在多个基于知识的问答 (KBQA) 数据集上的实验表明，仅使用 7B 参数模型的 Targa 大大优于利用闭源模型的现有非微调方法，在 GrailQA(+7.7) 和 KBQA-Agent(+12.2) 上的 F1 分数取得显着提高。此外，Targa 还在非 I.I.D 下表现出卓越的样本效率、鲁棒性和泛化能力。设置。

---

## 288. SR-LLM: Rethinking the Structured Representation in Large Language Model

**类别**: `主会-长文`

**作者**: Jiahuan Zhang, Tianheng Wang, Hanqing Wu, Ziyi Huang, Yulong Wu, Dongbai Chen, Linfeng Song, Yue Zhang, Guozheng Rao, Kaicheng Yu

**ID**: 2025.acl-long.172

**摘要(英文)**:
> Structured representations, exemplified by Abstract Meaning Representation (AMR), have long been pivotal in computational linguistics. However, their role remains ambiguous in the Large Language Models (LLMs) era. Initial attempts to integrate structured representation into LLMs via a zero-shot setting yielded inferior performance. We hypothesize that such a decline stems from the structure information being passed into LLMs in a code format unfamiliar to LLMs’ training corpora. Consequently, we propose SR-LLM, an innovative framework with two settings to explore a superior way of integrating structured representation with LLMs from training-free and training-dependent perspectives. The former integrates structural information through natural language descriptions in LLM prompts, whereas its counterpart augments the model’s inference capability through fine-tuning on linguistically described structured representations. Performance improvements were observed in widely downstream datasets, with particularly notable gains of 3.17% and 12.38% in PAWS. To the best of our knowledge, this work represents the pioneering demonstration that leveraging structural representations can substantially enhance LLMs’ inference capability. We hope that our work sheds light and encourages future research to enhance the reasoning and interoperability of LLMs by structure data.

**摘要(中文)**:
> 以抽象意义表示（AMR）为代表的结构化表示长期以来一直是计算语言学的关键。然而，在大型语言模型 (LLM) 时代，它们的作用仍然不明确。最初尝试通过零样本设置将结构化表示集成到大语言模型中，但性能较差。我们假设这种下降源于以大语言模型培训语料库不熟悉的代码格式传递给大语言模型的结构信息。因此，我们提出了 SR-LLM，这是一个具有两种设置的创新框架，从免培训和依赖培训的角度探索将结构化表示与 LLM 相结合的优越方法。前者通过 LLM 提示中的自然语言描述整合结构信息，而其对应物通过对语言描述的结构化表示进行微调来增强模型的推理能力。在广泛的下游数据集中观察到性能改进，其中 PAWS 的性能提升尤其显着，分别为 3.17% 和 12.38%。据我们所知，这项工作开创性地证明了利用结构表示可以显着增强大语言模型的推理能力。我们希望我们的工作能够阐明并鼓励未来的研究，以通过结构数据增强大语言模型的推理和互操作性。

---

## 289. A Systematic Study of Compositional Syntactic Transformer Language Models

**类别**: `主会-长文`

**作者**: Yida Zhao, Hao Xve, Xiang Hu, Kewei Tu

**ID**: 2025.acl-long.350

**摘要(英文)**:
> Syntactic language models (SLMs) enhance Transformers by incorporating syntactic biases through the modeling of linearized syntactic parse trees alongside surface sentences. This paper focuses on compositional SLMs that are based on constituency parse trees and contain explicit bottom-up composition of constituent representations. We identify key aspects of design choices in existing compositional SLMs and propose a unified framework encompassing both existing models and novel variants. We conduct a comprehensive empirical evaluation of all the variants in our framework across language modeling, syntactic generalization, summarization, and inference efficiency. Based on the experimental results, we make multiple recommendations on the design of compositional SLMs. Our code is released at https://github.com/zhaoyd1/compositional_SLMs.

**摘要(中文)**:
> 句法语言模型 (SLM) 通过对线性句法解析树和表面句子进行建模，合并句法偏差，从而增强 Transformer。本文重点关注基于选区解析树并包含显式自下而上的成分表示组合的组合 SLM。我们确定了现有组合 SLM 中设计选择的关键方面，并提出了一个包含现有模型和新颖变体的统一框架。我们对框架中的所有变体在语言建模、句法泛化、摘要和推理效率方面进行了全面的实证评估。根据实验结果，我们对组合 SLM 的设计提出了多项建议。我们的代码发布于 https://github.com/zhaoyd1/compositional_SLMs。

---

## 290. TheUD-NewsCrawl Treebank: Reflections and Challenges from a Large-scaleTagalog Syntactic Annotation Project

**类别**: `主会-长文`

**作者**: Angelina Aspra Aquino, Lester James Validad Miranda, Elsie Marie T. Or

**ID**: 2025.acl-long.357

**摘要(英文)**:
> This paper presents UD-NewsCrawl, the largest Tagalog treebank to date, containing 15.6k trees manually annotated according tothe Universal Dependencies framework. We detail our treebank development process, including data collection, pre-processing, manual annotation, and quality assurance procedures. We provide baseline evaluations using multiple transformer-based models to assess the performance of state-of-the-art dependency parsers on Tagalog. We also highlight challenges in the syntactic analysis of Tagalog given its distinctive grammatical properties, and discuss its implications for the annotation of this treebank. We anticipate that UD-NewsCrawl and our baseline model implementations will serve as valuable resources for advancing computational linguistics research in underrepresented languages like Tagalog.

**摘要(中文)**:
> 本文介绍了 UD-NewsCrawl，这是迄今为止最大的他加禄语树库，包含根据通用依赖框架手动注释的 15.6k 树。我们详细介绍了树库开发流程，包括数据收集、预处理、手动注释和质量保证程序。我们使用多个基于变压器的模型提供基线评估，以评估他加禄语上最先进的依赖解析器的性能。鉴于其独特的语法特性，我们还强调了他加禄语句法分析中的挑战，并讨论了它对该树库注释的影响。我们预计 UD-NewsCrawl 和我们的基线模型实现将成为推进塔加拉族语等代表性不足的语言的计算语言学研究的宝贵资源。

---

## 291. Dynamic Head Selection for Neural Lexicalized Constituency Parsing

**类别**: `主会-长文`

**作者**: Yang Hou, Zhenghua Li

**ID**: 2025.acl-long.786

**摘要(英文)**:
> Lexicalized parsing, which associates constituent nodes with lexical heads, has historically played a crucial role in constituency parsing by bridging constituency and dependency structures. Nevertheless, with the advent of neural networks, lexicalized structures have generally been neglected in favor of unlexicalized, span-based methods. In this paper, we revisit lexicalized parsing and propose a novel latent lexicalization framework that dynamically infers lexical heads during training without relying on predefined head-finding rules. Our method enables the model to learn lexical dependencies directly from data, offering greater adaptability across languages and datasets. Experiments on multiple treebanks demonstrate state-of-the-art or comparable performance. We also analyze the learned dependency structures, headword preferences, and linguistic biases.

**摘要(中文)**:
> 词汇化解析将构成节点与词汇头相关联，历史上通过桥接选区和依存结构在选区解析中发挥着至关重要的作用。然而，随着神经网络的出现，词汇化结构通常被忽视，取而代之的是非词汇化的、基于跨度的方法。在本文中，我们重新审视词汇化解析，并提出了一种新颖的潜在词汇化框架，该框架可以在训练期间动态推断词汇头，而不依赖于预定义的头查找规则。我们的方法使模型能够直接从数据中学习词汇依赖关系，从而提供跨语言和数据集的更大适应性。在多个树库上进行的实验证明了最先进的或可比的性能。我们还分析了学习到的依存结构、词条偏好和语言偏差。

---

## 292. Hierarchical Bracketing Encodings for Dependency Parsing as Tagging

**类别**: `主会-长文`

**作者**: Ana Ezquerro, David Vilares, Anssi Yli-Jyrä, Carlos Gómez-Rodríguez

**ID**: 2025.acl-long.903

**摘要(英文)**:
> We present a family of encodings for sequence labeling dependency parsing, based on the concept of hierarchical bracketing. We show that the existing 4-bit projective encoding belongs to this family, but it is suboptimal in the number of labels used to encode a tree. We derive an optimal hierarchical bracketing, which minimizes the number of symbols used and encodes projective trees using only 12 distinct labels (vs. 16 for the 4-bit encoding). We also extend optimal hierarchical bracketing to support arbitrary non-projectivity in a more compact way than previous encodings. Our new encodings yield competitive accuracy on a diverse set of treebanks.

**摘要(中文)**:
> 我们基于分层括号的概念，提出了一系列用于序列标记依赖性解析的编码。我们证明现有的 4 位投影编码属于这个家族，但它在用于编码树的标签数量方面并不是最优的。我们得出了最佳的分层包围，它最大限度地减少了使用的符号数量，并仅使用 12 个不同的标签（相对于 4 位编码为 16 个）对投影树进行编码。我们还扩展了最佳分层包围，以比以前的编码更紧凑的方式支持任意非投影性。我们的新编码在不同的树库上产生了具有竞争力的准确性。

---

## 293. Text-to-ESBench: A Comprehensive Benchmark for Converting Natural Language toElasticsearch Query

**类别**: `主会-长文`

**作者**: Dongge Xue, Zhili Pu, Zhentao Xia, Hongli Sun, Ruihui Hou, Guangya Yu, Yupian Lin, Yongqi Fan, Jingping Liu, Tong Ruan

**ID**: 2025.acl-long.971

**摘要(英文)**:
> Elasticsearch (ES) is a distributed RESTful search engine optimized for large-scale and long-text search scenarios. Recent research on text-to-Query has explored using large language models (LLMs) to convert user query intent to executable code, making it an increasingly popular research topic. To our knowledge, we are the first to introduce the novel semantic parsing task text-to-ES. To bridge the gap between LLM and ES, in detail, we leverage LLMs and employ domain experts to generate ES query bodies, which are Domain-Specific Language (DSL), along with the corresponding post-processing code to support multi-index ES queries. Consequently, we propose the text-to-ES benchmark that consists of two datasets: Large Elasticsearch Dataset (LED), containing 26,207 text-ES pairs derived from a 224.9GB schema-free database, and ElasticSearch (BirdES)with 10,926 pairs sourced from the Bird dataset on a 33.4GB schema-fixed database. Compared with fourteen advanced LLMs and six code-based LLMs, the model we trained outperformed DeepSeek-R1 by 15.64% on the LED dataset, setting a new state-of-the-art, and achieved 78% of DeepSeek-R1’s performance on the BirdES dataset. Additionally, we provide in-depth experimental analyses and suggest future research directions for this task. Our datasets are available at https://huggingface.co/datasets/Barry1915/Text-to-ES.

**摘要(中文)**:
> Elasticsearch（ES）是一个分布式RESTful搜索引擎，针对大规模、长文本搜索场景进行了优化。最近关于文本到查询的研究探索了使用大型语言模型（LLM）将用户查询意图转换为可执行代码，使其成为越来越受欢迎的研究主题。据我们所知，我们是第一个引入新颖的语义解析任务文本到 ES 的人。为了弥合LLM和ES之间的差距，具体而言，我们利用LLM并聘请领域专家来生成ES查询主体，即领域特定语言（DSL），以及相应的后处理代码以支持多索引ES查询。因此，我们提出了由两个数据集组成的文本到 ES 基准：大型 Elasticsearch 数据集 (LED)，包含源自 224.9GB 无模式数据库的 26,207 个文本-ES 对，以及 ElasticSearch (BirdES)，包含源自 33.4GB 模式固定数据库上的 Bird 数据集的 10,926 对。与14个高级LLM和6个基于代码的LLM相比，我们训练的模型在LED数据集上比DeepSeek-R1高出15.64%，创下了新的state-of-the-art，在BirdES数据集上达到了DeepSeek-R1性能的78%。此外，我们提供了深入的实验分析并建议了这项任务的未来研究方向。我们的数据集可在 https://huggingface.co/datasets/Barry1915/Text-to-ES 上获取。

---

## 294. GRaMPa: Subword Regularisation by Skewing Uniform Segmentation Distributions with an Efficient Path-countingMarkov Model

**类别**: `主会-长文`

**作者**: Thomas Bauwens, David Kaczér, Miryam de Lhoneux

**ID**: 2025.acl-long.1180

**摘要(英文)**:
> Stochastically sampling word segmentations from a subword tokeniser, also called subword regularisation, is a known way to increase robustness of language models to out-of-distribution inputs, such as text containing spelling errors. Recent work has observed that usual augmentations that make popular deterministic subword tokenisers stochastic still cause only a handful of all possible segmentations to be sampled. It has been proposed to uniformly sample across these instead, through rejection sampling of paths in an unweighted segmentation graph. In this paper, we argue that uniformly random segmentation in turn skews the distributions of certain segmentational properties (e.g. token lengths and amount of tokens produced) away from uniformity, which still ends up hiding meaningfully diverse tokenisations. We propose an alternative uniform sampler using the same segmentation graph, but weighted by counting the paths through it. Our sampling algorithm, GRaMPa, provides hyperparameters allowing sampled tokenisations to skew towards fewer, longer tokens. Furthermore, GRaMPa is single-pass, guaranteeing significantly better computational complexity than previous approaches relying on rejection sampling. We show experimentally that language models trained with GRaMPa outperform existing regularising tokenisers in a data-scarce setting on token-level tasks such as dependency parsing, especially with spelling errors present.

**摘要(中文)**:
> 从子词标记器中随机采样词分段（也称为子词正则化）是一种已知的方法，可以提高语言模型对分布外输入（例如包含拼写错误的文本）的鲁棒性。最近的工作观察到，使流行的确定性子词标记器变得随机的常见增强仍然导致仅对所有可能的分段中的少数进行采样。有人建议通过对未加权分割图中的路径进行拒绝采样来对这些进行均匀采样。在本文中，我们认为均匀随机分割反过来会使某些分割属性（例如标记长度和生成的标记数量）的分布偏离均匀性，这最终仍然隐藏了有意义的多样化标记化。我们提出了一种使用相同分割图的替代统一采样器，但通过计算通过它的路径来加权。我们的采样算法 GRaMPa 提供超参数，允许采样的标记化向更少、更长的标记倾斜。此外，GRaMPa 是单通道的，与以前依赖拒绝采样的方法相比，保证了显着更好的计算复杂性。我们通过实验证明，在依赖解析等标记级任务的数据稀缺设置中，使用 GRaMPa 训练的语言模型优于现有的正则化标记器，尤其是在存在拼写错误的情况下。

---

## 295. Contrastive Learning onLLMBack Generation Treebank for Cross-domain Constituency Parsing

**类别**: `主会-长文`

**作者**: Peiming Guo, Meishan Zhang, Jianling Li, Min Zhang, Yue Zhang

**ID**: 2025.acl-long.1331

**摘要(英文)**:
> Cross-domain constituency parsing is still an unsolved challenge in computational linguistics since the available multi-domain constituency treebank is limited. We investigate automatic treebank generation by large language models (LLMs) in this paper. The performance of LLMs on constituency parsing is poor, therefore we propose a novel treebank generation method, LLM back generation, which is similar to the reverse process of constituency parsing. LLM back generation takes the incomplete cross-domain constituency tree with only domain keyword leaf nodes as input and fills the missing words to generate the cross-domain constituency treebank. Besides, we also introduce a span-level contrastive learning pre-training strategy to make full use of the LLM back generation treebank for cross-domain constituency parsing. We verify the effectiveness of our LLM back generation treebank coupled with contrastive learning pre-training on five target domains of MCTB. Experimental results show that our approach achieves state-of-the-art performance on average results compared with various baselines.

**摘要(中文)**:
> 由于可用的多域选区树库有限，跨域选区解析仍然是计算语言学中尚未解决的挑战。我们在本文中研究了大型语言模型（LLM）的自动树库生成。 LLM在选区解析上的性能较差，因此我们提出了一种新的树库生成方法，即LLM反向生成，其类似于选区解析的逆过程。 LLM反向生成以仅具有域关键字叶节点的不完整跨域选区树作为输入，并填充缺失的单词以生成跨域选区树库。此外，我们还引入了跨级对比学习预训练策略，以充分利用LLM反向生成树库进行跨域选区解析。我们验证了 LLM 生成树库以及 MCTB 五个目标领域的对比学习预训练的有效性。实验结果表明，与各种基线相比，我们的方法在平均结果上实现了最先进的性能。

---

## 296. Rethinking Semantic Parsing for Large Language Models: EnhancingLLMPerformance with Semantic Hints

**类别**: `主会-短文`

**作者**: Kaikai An, Shuzheng Si, Helan Hu, Haozhe Zhao, Yuchi Wang, Qingyan Guo, Baobao Chang

**ID**: 2025.acl-short.79

**摘要(英文)**:
> Semantic Parsing aims to capture the meaning of a sentence and convert it into a logical, structured form. Previous studies show that semantic parsing enhances the performance of smaller models (e.g., BERT) on downstream tasks. However, it remains unclear whether the improvements extend similarly to LLMs. In this paper, our empirical findings reveal that, unlike smaller models, directly adding semantic parsing results into LLMs reduces their performance. To overcome this, we propose SENSE, a novel prompting approach that embeds semantic hints within the prompt. Experiments show that SENSE consistently improves LLMs’ performance across various tasks, highlighting the potential of integrating semantic information to improve LLM capabilities.

**摘要(中文)**:
> 语义解析旨在捕获句子的含义并将其转换为逻辑的结构化形式。先前的研究表明，语义解析可以增强较小模型（例如 BERT）在下游任务上的性能。然而，目前尚不清楚这些改进是否也适用于大语言模型。在本文中，我们的实证研究结果表明，与较小的模型不同，直接将语义解析结果添加到 LLM 中会降低其性能。为了克服这个问题，我们提出了 SENSE，一种新颖的提示方法，可以在提示中嵌入语义提示。实验表明，SENSE 持续提高了大语言模型在各种任务中的表现，凸显了整合语义信息以提高大语言模型能力的潜力。

---

## 297. Attention with Dependency Parsing Augmentation for Fine-Grained Attribution

**类别**: `Findings`

**作者**: Qiang Ding, Lvzhou Luo, Yixuan Cao, Ping Luo

**ID**: 2025.findings-acl.21

**摘要(英文)**:
> To assist humans in efficiently validating RAG-generated content, developing a fine-grained attribution mechanism that provides supporting evidence from retrieved documents for every answer span is essential. Existing fine-grained attribution methods rely on model-internal similarity metrics between responses and documents, such as saliency scores and hidden state similarity. However, these approaches suffer from either high computational complexity or coarse-grained representations. Additionally, a common problem shared by the previous works is their reliance on decoder-only Transformers, limiting their ability to incorporate contextual information after the target span. To address the above problems, we propose two techniques applicable to all model-internals-based methods. First, we aggregate token-wise evidence through set union operations, preserving the granularity of representations. Second, we enhance the attributor by integrating dependency parsing to enrich the semantic completeness of target spans. For practical implementation, our approach employs attention weights as the similarity metric. Experimental results demonstrate that the proposed method consistently outperforms all prior works.

**摘要(中文)**:
> 为了帮助人们有效地验证 RAG 生成的内容，开发一种细粒度的归因机制至关重要，该机制可以从检索到的文档中为每个答案范围提供支持证据。现有的细粒度归因方法依赖于响应和文档之间的模型内部相似性度量，例如显着性分数和隐藏状态相似性。然而，这些方法要么计算复杂度高，要么表示粗粒度。此外，以前的作品共有的一个常见问题是它们依赖于仅解码器的 Transformer，限制了它们在目标跨度之后合并上下文信息的能力。为了解决上述问题，我们提出了两种适用于所有基于模型内部的方法的技术。首先，我们通过集合联合操作聚合标记证据，保留表示的粒度。其次，我们通过集成依赖解析来增强归因器，以丰富目标跨度的语义完整性。对于实际实现，我们的方法采用注意力权重作为相似性度量。实验结果表明，所提出的方法始终优于所有先前的工作。

---

## 298. Vision-aided Unsupervised Constituency Parsing with Multi-MLLMDebating

**类别**: `Findings`

**作者**: Dong Zhang, Haiyan Tian, Qingying Sun, Shoushan Li

**ID**: 2025.findings-acl.353

**摘要(英文)**:
> This paper presents a novel framework for vision-aided unsupervised constituency parsing (VUCP), leveraging multimodal large language models (MLLMs) pre-trained on diverse image-text or video-text data. Unlike previous methods requiring explicit cross-modal alignment, our approach eliminates this need by using pre-trained models like Qwen-VL and VideoLLaVA, which seamlessly handle multimodal inputs. We introduce two multi-agent debating mechanisms—consensus-driven (CD) and round-driven (RD)—to enable cooperation between models with complementary strengths. Extensive experiments demonstrate that our approach achieves state-of-the-art performance on both image-text and video-text datasets for VUCP, improving robustness and accuracy.

**摘要(中文)**:
> 本文提出了一种视觉辅助无监督选区解析（VUCP）的新颖框架，利用在不同图像文本或视频文本数据上预训练的多模态大语言模型（MLLM）。与之前需要显式跨模态对齐的方法不同，我们的方法通过使用 Qwen-VL 和 VideoLLaVA 等预训练模型来消除这种需求，这些模型可以无缝处理多模态输入。我们引入了两种多智能体辩论机制——共识驱动（CD）和回合驱动（RD）——以实现优势互补的模型之间的合作。大量实验表明，我们的方法在 VUCP 的图像文本和视频文本数据集上实现了最先进的性能，提高了鲁棒性和准确性。

---

## 299. Analyzing the Effect of Linguistic Similarity on Cross-Lingual Transfer: Tasks and Experimental Setups Matter

**类别**: `Findings`

**作者**: Verena Blaschke, Masha Fedzechkina, Maartje Ter Hoeve

**ID**: 2025.findings-acl.454

**摘要(英文)**:
> Cross-lingual transfer is a popular approach to increase the amount of training data for NLP tasks in a low-resource context. However, the best strategy to decide which cross-lingual data to include is unclear. Prior research often focuses on a small set of languages from a few language families and/or a single task. It is still an open question how these findings extend to a wider variety of languages and tasks. In this work, we analyze cross-lingual transfer for 263 languages from a wide variety of language families. Moreover, we include three popular NLP tasks: POS tagging, dependency parsing, and topic classification. Our findings indicate that the effect of linguistic similarity on transfer performance depends on a range of factors: the NLP task, the (mono- or multilingual) input representations, and the definition of linguistic similarity.

**摘要(中文)**:
> 跨语言迁移是在资源匮乏的情况下增加 NLP 任务训练数据量的流行方法。然而，决定包含哪些跨语言数据的最佳策略尚不清楚。先前的研究通常集中于来自几个语系的一小组语言和/或单个任务。这些发现如何扩展到更广泛的语言和任务仍然是一个悬而未决的问题。在这项工作中，我们分析了来自各种语系的 263 种语言的跨语言迁移。此外，我们还包括三个流行的 NLP 任务：词性标注、依存分析和主题分类。我们的研究结果表明，语言相似性对迁移性能的影响取决于一系列因素：NLP 任务、（单语言或多语言）输入表示以及语言相似性的定义。

---

## 300. HTML: Hierarchical Topology Multi-task Learning for Semantic Parsing in Knowledge Base Question Answering

**类别**: `Findings`

**作者**: Aziguli Wulamu, Lyu Zhengyu, Kaiyuan Gong, Yu Han, Zewen Wang, Zhihong Zhu, Bowen Xing

**ID**: 2025.findings-acl.485

**摘要(英文)**:
> Knowledge base question answering (KBQA) aims to answer natural language questions by reasoning over structured knowledge bases. Existing approaches often struggle with the complexity of mapping questions to precise logical forms, particularly when dealing with diverse entities and relations. In this paper, we propose Hierarchical Topology Multi-task Learning (HTML), a novel framework that leverages a hierarchical multi-task learning paradigm to enhance the performance of logical form generation. Our framework consists of a main task: generating logical forms from questions, and three auxiliary tasks: entity prediction from the input question, relation prediction for the given entities, and logical form generation based on the given entities and relations. Through joint instruction-tuning, HTML allows mutual guidance and knowledge transfer among the hierarchical tasks, capturing the subtle dependencies between entities, relations, and logical forms. Extensive experiments on public benchmarks show that HTML markedly outperforms both supervised fine-tuning methods and training-free ones based on powerful large language models (e.g., GPT-4), demonstrating its superiority in question understanding and structural knowledge reasoning.

**摘要(中文)**:
> 知识库问答（KBQA）旨在通过结构化知识库推理来回答自然语言问题。现有的方法常常难以将问题映射到精确的逻辑形式，特别是在处理不同的实体和关系时。在本文中，我们提出了分层拓扑多任务学习（HTML），这是一种利用分层多任务学习范式来增强逻辑形式生成性能的新颖框架。我们的框架包含一个主要任务：从问题生成逻辑形式，以及三个辅助任务：根据输入问题进行实体预测、给定实体的关系预测以及基于给定实体和关系的逻辑形式生成。通过联合指令调整，HTML 允许分层任务之间的相互指导和知识传递，捕捉实体、关系和逻辑形式之间的微妙依赖关系。对公共基准的大量实验表明，HTML 明显优于有监督微调方法和基于强大的大型语言模型（例如 GPT-4）的免训练方法，展示了其在问题理解和结构知识推理方面的优越性。

---

## 301. Span-based Semantic Role Labeling as Lexicalized Constituency Tree Parsing

**类别**: `Findings`

**作者**: Yang Hou, Zhenghua Li

**ID**: 2025.findings-acl.557

**摘要(英文)**:
> Semantic Role Labeling (SRL) is a critical task that focuses on identifying predicate-argument structures in sentences. Span-based SRL, a prominent paradigm, is often tackled using BIO-based or graph-based methods. However, these approaches often fail to capture the inherent relationship between syntax and semantics. While syntax-aware models have been proposed to address this limitation, they heavily rely on pre-existing syntactic resources, limiting their general applicability. In this work, we propose a lexicalized tree representation for span-based SRL, which integrates constituency and dependency parsing to explicitly model predicate-argument structures. By structurally representing predicates as roots and arguments as subtrees directly linked to the predicate, our approach bridges the gap between syntactic and semantic representations. Experiments on standard English benchmarks (CoNLL05 and CoNLL12) demonstrate that our model achieves competitive performance, with particular improvement in predicate-given settings.

**摘要(中文)**:
> 语义角色标签（SRL）是一项关键任务，重点是识别句子中的谓词-论元结构。基于跨度的 SRL 是一种突出的范例，通常使用基于 BIO 或基于图形的方法来解决。然而，这些方法往往无法捕捉语法和语义之间的内在关系。虽然语法感知模型已经被提出来解决这个限制，但它们严重依赖于预先存在的语法资源，限制了它们的普遍适用性。在这项工作中，我们提出了基于跨度的 SRL 的词汇化树表示，它集成了选区和依存解析来显式地建模谓词参数结构。通过在结构上将谓词表示为根，将参数表示为直接链接到谓词的子树，我们的方法弥合了句法表示和语义表示之间的差距。标准英语基准（CoNLL05 和 CoNLL12）上的实验表明，我们的模型实现了有竞争力的性能，特别是在给定谓词设置方面的改进。

---

## 302. Disambiguate First, Parse Later: Generating Interpretations for Ambiguity Resolution in Semantic Parsing

**类别**: `Findings`

**作者**: Irina Saparina, Mirella Lapata

**ID**: 2025.findings-acl.863

**摘要(英文)**:
> Handling ambiguity and underspecification is an important challenge in natural language interfaces, particularly for tasks like text-to-SQL semantic parsing. We propose a modular approach that resolves ambiguity using natural language interpretations before mapping these to logical forms (e.g., SQL queries). Although LLMs excel at parsing unambiguous utterances, they show strong biases for ambiguous ones, typically predicting only preferred interpretations. We constructively exploit this bias to generate an initial set of preferred disambiguations and then apply a specialized infilling model to identify and generate missing interpretations. To train the infilling model, we introduce an annotation method that uses SQL execution to validate different meanings. Our approach improves interpretation coverage and generalizes across datasets with different annotation styles, database structures, and ambiguity types.

**摘要(中文)**:
> 处理歧义和不规范是自然语言接口中的一个重要挑战，特别是对于文本到 SQL 语义解析等任务。我们提出了一种模块化方法，在将自然语言解释映射到逻辑形式（例如 SQL 查询）之前使用自然语言解释来解决歧义。尽管大语言模型擅长解析明确的话语，但他们对模糊的话语表现出强烈的偏见，通常只预测首选的解释。我们建设性地利用这种偏见来生成一组初始的首选消歧，然后应用专门的填充模型来识别和生成缺失的解释。为了训练填充模型，我们引入了一种注释方法，该方法使用 SQL 执行来验证不同的含义。我们的方法提高了解释覆盖率，并概括了具有不同注释样式、数据库结构和歧义类型的数据集。

---

## 303. AnCast++: Document-Level Evaluation of Graph-based Meaning Representations

**类别**: `Findings`

**作者**: Haibo Sun, Jayeol Chun, Nianwen Xue

**ID**: 2025.findings-acl.1008

**摘要(英文)**:
> Uniform Meaning Representation (UMR) is a cross-lingual document-level graph-based representation that is based on Abstract Meaning Representation (AMR) but extends it to include document-level semantic annotations such as coreference, modal and temporal dependencies.With recent advancements in UMR annotation efforts, a reliable evaluation metric is essential for assessing annotation consistency and tracking progress in automatic parsing. In this paper, we present AnCast++, an aggregated metric that unifies the evaluation of four distinct sub-structures of UMR: (1) sentence-level graphs that represent word senses, named entities, semantic relations between events and their participants, aspectual attributes of events as well as person and number attributes of entities, (2) modal dependencies that represent the level of certainty that a source holds with respect to an event, (3) temporal dependencies between events and their reference times, and (4) coreference relations between entities and between events. In particular, we describe a unified methodTC2for evaluating temporal and coreference relations that captures their shared transitive properties, and present experimental results on English and Chinese UMR parsing based on UMR v1.0 corpus to demonstrate the reliability of our metric. The tool will be made publicly available on Github.

**摘要(中文)**:
> 统一含义表示（UMR）是一种跨语言的文档级基于图形的表示，它基于抽象含义表示（AMR），但将其扩展为包括文档级语义注释，例如共指、模态和时间依赖性。随着 UMR 注释工作的最新进展，可靠的评估指标对于评估注释一致性和跟踪自动解析的进度至关重要。在本文中，我们提出了 AnCast++，一种聚合度量，统一了 UMR 四个不同子结构的评估：（1）句子级图，表示词义、命名实体、事件及其参与者之间的语义关系、事件的方面属性以及实体的人物和数字属性；（2）表示源对事件的确定性水平的模态依赖关系；（3）事件及其参考时间之间的时间依赖关系；（4）实体和事件之间的共指关系。事件之间。特别是，我们描述了一种用于评估时间和共指关系的统一方法 TC2，该方法捕获了它们共享的传递属性，并给出了基于 UMR v1.0 语料库的英语和中文 UMR 解析的实验结果，以证明我们的度量的可靠性。该工具将在 Github 上公开发布。

---

## 304. Syntactic Control of Language Models by Posterior Inference

**类别**: `Findings`

**作者**: Vicky Xefteri, Tim Vieira, Ryan Cotterell, Afra Amini

**ID**: 2025.findings-acl.1300

**摘要(英文)**:
> Controlling the syntactic structure of text generated by language models is valuable for applications requiring clarity, stylistic consistency, or interpretability, yet it remains a challenging task. In this paper, we argue that sampling algorithms based on the posterior inference can effectively enforce a target constituency structure during generation. Our approach combines sequential Monte Carlo, which estimates the posterior distribution by sampling from a proposal distribution, with a syntactic tagger that ensures that each generated token aligns with the desired syntactic structure. Our experiments with GPT2 and Llama3-8B models show that with an appropriate proposal distribution, we can improve syntactic accuracy, increasing the F1 score from 12.31 (GPT2-large) and 35.33 (Llama3-8B) to about 93 in both cases without compromising the language model’s fluency. These results underscore both the complexity of syntactic control and the effectiveness of sampling algorithms, offering a promising approach for applications where precise control over syntax is essential.

**摘要(中文)**:
> 控制语言模型生成的文本的句法结构对于需要清晰度、风格一致性或可解释性的应用程序很有价值，但它仍然是一项具有挑战性的任务。在本文中，我们认为基于后验推理的采样算法可以在生成过程中有效地强化目标选区结构。我们的方法结合了顺序蒙特卡罗（通过从提案分布中采样来估计后验分布）和句法标记器，确保每个生成的标记与所需的句法结构对齐。我们对 GPT2 和 Llama3-8B 模型的实验表明，通过适当的建议分布，我们可以提高句法准确性，将两种情况下的 F1 分数从 12.31（GPT2-large）和 35.33（Llama3-8B）提高到约 93，而不会影响语言模型的流畅性。这些结果强调了语法控制的复杂性和采样算法的有效性，为需要精确控制语法的应用提供了一种有前景的方法。

---

## 305. Can Large Language Models Classify and Generate Antimicrobial Resistance Genes?

**类别**: `Workshop-BioNLP`

**作者**: Hyunwoo Yoo, Haebin Shin, Gail Rosen

**ID**: 2025.bionlp-1.21

**摘要(英文)**:
> This study explores the application of generative Large Language Models (LLMs) in DNA sequence analysis, highlighting their advantages over encoder-based models like DNABERT2 and Nucleotide Transformer. While encoder models excel in classification, they struggle to integrate external textual information. In contrast, generative LLMs can incorporate domain knowledge, such as BLASTn annotations, to improve classification accuracy even without fine-tuning. We evaluate this capability on antimicrobial resistance (AMR) gene classification, comparing generative LLMs with encoder-based baselines. Results show that LLMs significantly enhance classification when supplemented with textual information. Additionally, we demonstrate their potential in DNA sequence generation, further expanding their applicability. Our findings suggest that LLMs offer a novel paradigm for integrating biological sequences with external knowledge, bridging gaps in traditional classification methods.

**摘要(中文)**:
> 本研究探讨了生成式大型语言模型 (LLM) 在 DNA 序列分析中的应用，强调了它们相对于 DNABERT2 和 Nucleotide Transformer 等基于编码器的模型的优势。虽然编码器模型在分类方面表现出色，但它们很难集成外部文本信息。相比之下，生成式 LLM 可以结合领域知识（例如 BLASTn 注释），即使无需微调也可以提高分类准确性。我们评估了抗菌素耐药性 (AMR) 基因分类的能力，将生成大语言模型与基于编码器的基线进行比较。结果表明，大语言模型在补充文本信息时可显着增强分类能力。此外，我们还展示了它们在 DNA 序列生成方面的潜力，进一步扩展了它们的适用性。我们的研究结果表明，大语言模型提供了一种将生物序列与外部知识相结合的新范式，弥补了传统分类方法中的差距。

---

## 306. Evidence of Generative Syntax inLLMs

**类别**: `Workshop-CoNLL`

**作者**: Mary Kennedy

**ID**: 2025.conll-1.25

**摘要(英文)**:
> The syntactic probing literature has been largely limited to shallow structures like dependency trees, which are unable to capture the subtle differences in sub-surface syntactic structures that yield semantic nuances. These structures are captured by theories of syntax like generative syntax, but have not been researched in the LLM literature due to the difficulties in probing these complex structures with many silent, covert nodes. Our work presents a method for overcoming this limitation by deploying Hewitt and Manning’s (2019) dependency-trained probe on sentence constructions whose structural representation is identical in a dependency parse, but differs in theoretical syntax. If a pretrained language model has captured the theoretical syntax structure, then the probe’s predicted distances should vary in syntactically-predicted ways. Using this methodology and a novel dataset, we find evidence that LLMs have captured syntactic structures far richer than previously realized, indicating LLMs are able to capture the nuanced meanings that result from sub-surface differences in structural form.

**摘要(中文)**:
> 句法探测文献很大程度上局限于依赖树等浅层结构，它们无法捕捉产生语义细微差别的次表面句法结构中的细微差异。这些结构被语法理论（如生成语法）所捕获，但由于难以用许多沉默的、隐蔽的节点探测这些复杂的结构，因此尚未在大语言模型文献中进行研究。我们的工作提出了一种克服这一限制的方法，通过在句子结构上部署 Hewitt 和 Manning（2019）的依存训练探针，其结构表示在依存解析中是相同的，但理论语法不同。如果预训练的语言模型已经捕获了理论语法结构，那么探针的预测距离应该以语法预测的方式变化。使用这种方法和一个新颖的数据集，我们发现有证据表明大语言模型捕获的句法结构比以前意识到的要丰富得多，这表明大语言模型能够捕获由于结构形式的表面差异而产生的微妙含义。

---

## 307. UD-KSLTreebank v1.3: A semi-automated framework for aligningXPOS-extracted units withUPOStags

**类别**: `Workshop-LAW`

**作者**: Hakyung Sung, Gyu-Ho Shin, Chanyoung Lee, You Kyung Sung, Boo Kyung Jung

**ID**: 2025.law-1.9

**摘要(英文)**:
> The present study extends recent work on Universal Dependencies annotations for second-language (L2) Korean by introducing a semi-automated framework that identifies morphosyntactic constructions from XPOS sequences and aligns those constructions with corresponding UPOS categories. We also broaden the existing L2-Korean corpus by annotating 2,998 new sentences from argumentative essays. To evaluate the impact of XPOS-UPOS alignments, we fine-tune L2-Korean morphosyntactic analysis models on datasets both with and without these alignments, using two NLP toolkits. Our results indicate that the aligned dataset not only improves consistency across annotation layers but also enhances morphosyntactic tagging and dependency-parsing accuracy, particularly in cases of limited annotated data.

**摘要(中文)**:
> 本研究通过引入半自动化框架扩展了第二语言 (L2) 韩语通用依赖注释的最新工作，该框架可识别 XPOS 序列中的形态句法结构，并将这些结构与相应的 UPOS 类别进行对齐。我们还通过注释议论文中的 2,998 个新句子来扩大现有的 L2 韩语语料库。为了评估 XPOS-UPOS 对齐的影响，我们使用两个 NLP 工具包在有和没有这些对齐的数据集上微调 L2-Korean 形态句法分析模型。我们的结果表明，对齐的数据集不仅提高了注释层之间的一致性，而且还提高了形态句法标记和依存解析的准确性，特别是在注释数据有限的情况下。

---

## 308. OseiBrefo-Liang atSemEval-2025 Task 8 : A Multi-AgentLLMcode generation approach for answering Tabular Questions

**类别**: `Workshop-SemEval`

**作者**: Emmanuel Osei-Brefo, Huizhi Liang

**ID**: 2025.semeval-1.49

**摘要(英文)**:
> This paper presents a novel multi-agent framework for automated code generation and execution in tabular question answering. Developed for the SemEval-2025 Task 8, our system utilises a structured, multi-agent approach where distinct agents handle dataset extraction, schema identification, prompt engineering, code generation, execution, and prediction. Unlike traditional methods such as semantic parsing-based SQL generation and transformer-based table models such as TAPAS, our approach leverages a large language model-driven code synthesis pipeline using the DeepSeek API. Our system follows a zero-shot inference approach, which generates Python functions that operate directly on structured data. Through the dynamic extraction of dataset schema and intergration into structured prompts, the model comprehension of tabular structures is enhanced, which leads to more precise and interpretable results. Experimental results demonstrate that our system outperforms existing tabular questioning and answering models, achieving an accuracy of 84.67% on DataBench and 86.02% on DataBench-lite, which significantly surpassed the performances of TAPAS (2.68%) and stable-code-3b-GGUF (27%). The source code used in this paper is available at t https://github.com/oseibrefo/semEval25task8

**摘要(中文)**:
> 本文提出了一种新颖的多代理框架，用于表格问答中的自动代码生成和执行。我们的系统是为 SemEval-2025 任务 8 开发的，采用结构化的多代理方法，其中不同的代理处理数据集提取、模式识别、提示工程、代码生成、执行和预测。与基于语义解析的 SQL 生成和基于转换器的表模型（例如 TAPAS）等传统方法不同，我们的方法利用 DeepSeek API 来利用大型语言模型驱动的代码合成管道。我们的系统遵循零样本推理方法，该方法生成直接对结构化数据进行操作的 Python 函数。通过动态提取数据集模式并集成到结构化提示中，增强了表格结构的模型理解，从而获得更精确和可解释的结果。实验结果表明，我们的系统优于现有的表格问答模型，在DataBench上达到84.67％的准确率，在DataBench-lite上达到86.02％的准确率，显着超过了TAPAS（2.68％）和stable-code-3b-GGUF（27％）的性能。本文使用的源代码可在 https://github.com/oseibrefo/semEval25task8 获取

---

## 309. EnhancingAMRParsing with Group Relative Policy Optimization

**类别**: `Workshop-XLLM`

**作者**: Botond Barta, Endre Hamerlik, Milán Nyist, Masato Ito, Judit Acs

**ID**: 2025.xllm-1.11

**摘要(英文)**:
> We investigate the capabilities of the openly available Llama 3.2 1B language model for Abstract Meaning Representation (AMR) parsing through supervised fine-tuning, further enhanced by reinforcement learning via Group Relative Policy Optimization (GRPO). Existing supervised methods for AMR parsing face limitations due to static loss functions and challenges in capturing complex semantic phenomena. To address this, our GRPO-based approach explicitly optimizes fine-grained semantic rewards, including Smatch scores, frame-argument correctness, and structural validity of logical operations. Experimental results show that supervised fine-tuning alone establishes Llama as a capable English AMR parser, and subsequent GRPO fine-tuning further improves its performance. Our final model achieves higher Smatch scores, consistently respects critical low-level semantic constraints, and outperforms existing parsers on high-level semantic evaluation metrics across diverse linguistic phenomena.

**摘要(中文)**:
> 我们研究了公开的 Llama 3.2 1B 语言模型通过监督微调进行抽象含义表示 (AMR) 解析的能力，并通过组相对策略优化 (GRPO) 的强化学习进一步增强。由于静态损失函数和捕获复杂语义现象的挑战，现有的 AMR 解析监督方法面临着局限性。为了解决这个问题，我们基于 GRPO 的方法显式优化了细粒度语义奖励，包括 Smatch 分数、框架论证正确性和逻辑运算的结构有效性。实验结果表明，单独的监督微调就使 Llama 成为了一个有能力的英语 AMR 解析器，随后的 GRPO 微调进一步提高了其性能。我们的最终模型获得了更高的 Smatch 分数，始终遵守关键的低级语义约束，并且在跨不同语言现象的高级语义评估指标上优于现有解析器。

---

## 310. Structure Modeling Approach forUDParsing of HistoricalModernJapanese

**类别**: `Workshop-XLLM`

**作者**: Hiroaki Ozaki, Mai Omura, Kanako Komiya, Masayuki Asahara, Toshinobu Ogiso

**ID**: 2025.xllm-1.12

**摘要(英文)**:
> This study shows the effectiveness of structure modeling for transfer ability in diachronic syntactic parsing. The syntactic parsing for historical languages is significant from a humanities and quantitative linguistics perspective to enable annotation support and analysis on unannotated documents.We compared the zero-shot transfer ability between Transformer-based Biaffine UD parsers and our structure modeling approach. The structure modeling approach is a pipeline method consisting with dictionary-based morphological analysis (MeCab), a deep learning-based phrase (bunsetsu) analysis (Monaka), SVM-based phrase dependency parsing (CaboCha) and a rule-based conversion from phrase dependencies to UD.This pipeline closely follows the methodology used in constructing Japanese UD corpora.Experimental results showed that the structure modeling approach outperformed zero-shot transfer from the contemporary to the modern Japanese. Moreover, the structure modeling approach outperformed several existing UD parsers in contemporary Japanese. To this end, the structure modeling approach outperformed in the diachronic transfer of Japanese by a wide margin and was useful to those applications for digital humanities and quantitative linguistics.

**摘要(中文)**:
> 这项研究表明了结构建模对于历时句法分析中迁移能力的有效性。从人文学科和定量语言学的角度来看，历史语言的句法解析对于实现对未注释文档的注释支持和分析具有重要意义。我们比较了基于 Transformer 的 Biaffine UD 解析器和我们的结构建模方法之间的零样本迁移能力。结构建模方法是一种管道方法，由基于字典的形态分析（MeCab）、基于深度学习的短语（bunsetsu）分析（Monaka）、基于支持向量机的短语依存分析（CaboCha）以及从短语依存到UD的基于规则的转换组成。该管道紧密遵循构建日语UD语料库所使用的方法。实验结果表明，结构建模方法优于从当代日语到现代日语的零样本迁移。此外，结构建模方法优于当代日语中的几种现有 UD 解析器。为此，结构建模方法在日语的历时迁移中表现出色，并且对于数字人文和定量语言学的应用非常有用。

---

## 311. CanLLMs Interpret and Leverage Structured Linguistic Representations? A Case Study withAMRs

**类别**: `Workshop-XLLM`

**作者**: Ankush Raut, Xiaofeng Zhu, Maria Leonor Pacheco

**ID**: 2025.xllm-1.16

**摘要(英文)**:
> This paper evaluates the ability of Large Language Models (LLMs) to leverage contextual information in the form of structured linguistic representations. Specifically, we examine the impact of encoding both short and long contexts using Abstract Meaning Representation (AMR) structures across a diverse set of language tasks. We perform our analysis using 8-bit quantized and instruction-tuned versions of Llama 3.1 (8B), Phi-3, and Mistral 7B. Our results indicate that, for tasks involving short contexts, augmenting the prompt with the AMR of the original language context often degrades the performance of the underlying LLM. However, for tasks that involve long contexts, such as dialogue summarization in the SAMSum dataset, this enhancement improves LLM performance, for example, by increasing the zero-shot cosine similarity score of Llama 3.1 from 66% to 76%. This improvement is more evident in the newer and larger LLMs, but does not extend to the older or smaller ones. In addition, we observe that LLMs can effectively reconstruct the original text from a linearized AMR, achieving a cosine similarity of 81% in the best-case scenario.

**摘要(中文)**:
> 本文评估了大型语言模型 (LLM) 以结构化语言表示形式利用上下文信息的能力。具体来说，我们研究了在不同的语言任务中使用抽象含义表示（AMR）结构对短上下文和长上下文进行编码的影响。我们使用 Llama 3.1 (8B)、Phi-3 和 Mistral 7B 的 8 位量化和指令调整版本进行分析。我们的结果表明，对于涉及短上下文的任务，使用原始语言上下文的 AMR 来增强提示通常会降低底层 LLM 的性能。然而，对于涉及长上下文的任务，例如 SAMSum 数据集中的对话摘要，此增强功能提高了 LLM 性能，例如，通过将 Llama 3.1 的零样本余弦相似度得分从 66% 提高到 76%。这种改进在较新和较大的大语言模型中更为明显，但不会扩展到较旧或较小的大语言模型。此外，我们观察到大语言模型可以有效地从线性化 AMR 重建原始文本，在最佳情况下实现 81% 的余弦相似度。

---

## 312. LLMDependency Parsing with In-Context Rules

**类别**: `Workshop-XLLM`

**作者**: Michael Ginn, Alexis Palmer

**ID**: 2025.xllm-1.17

**摘要(英文)**:
> We study whether incorporating rules (in various formats) can aid large language models to perform dependency parsing. We consider a paradigm in which LLMs first produce symbolic rules given fully labeled examples, and the rules are then provided in a subsequent call that performs the actual parsing. In addition, we experiment with providing human-created annotation guidelines in-context to the LLMs. We test on eight low-resource languages from Universal Dependencies, finding that while both methods for rule incorporation improve zero-shot performance, the benefit disappears with a few labeled in-context examples.

**摘要(中文)**:
> 我们研究合并规则（各种格式）是否可以帮助大型语言模型执行依存解析。我们考虑一种范式，其中大语言模型首先在给定完全标记的示例的情况下生成符号规则，然后在执行实际解析的后续调用中提供这些规则。此外，我们还尝试在大语言模型的背景下提供人工创建的注释指南。我们对通用依赖关系中的八种低资源语言进行了测试，发现虽然两种规则合并方法都提高了零样本性能，但在一些带标签的上下文示例中，这种好处消失了。

---

## 313. DiaDP@XLLM25: AdvancingChinese Dialogue Parsing via Unified Pretrained Language Models and Biaffine Dependency Scoring

**类别**: `Workshop-XLLM`

**作者**: Shuoqiu Duan, Xiaoliang Chen, Duoqian Miao, Xu Gu, Xianyong Li, Yajun Du

**ID**: 2025.xllm-1.22

**摘要(英文)**:
> Dialogue-level dependency parsing is crucial for understanding complex linguistic structures in conversational data, yet progress has been hindered by limited annotated resources and inadequate modeling of dialogue dynamics. Existing methods often fail to capture both intra- and inter-utterance dependencies effectively, particularly in languages like Chinese with rich contextual interactions. To address these challenges, we propose InterParser, a novel framework that integrates a pretrained language model (PLM), bidirectional GRU (BiGRU), and biaffine scoring for comprehensive dependency parsing. Our model encodes token sequences using a PLM, refines representations via deep BiGRU layers, and employs separate projections for “head” and “dependent” roles to optimize arc and relation prediction. For cross-utterance dependencies, speaker-specific feature projections are introduced to enhance dialogue-aware scoring. Joint training minimizes cross-entropy losses for both intra- and inter-utterance dependencies, ensuring unified optimization. Experiments on a standard Chinese benchmark demonstrate that InterParser significantly outperforms prior methods, achieving state-of-the-art labeled attachment scores (LAS) for both intra- and inter-utterance parsing.

**摘要(中文)**:
> 对话级依存解析对于理解对话数据中复杂的语言结构至关重要，但有限的注释资源和对话动态建模不足阻碍了进展。现有的方法通常无法有效地捕获话语内和话语间的依赖关系，特别是在像中文这样具有丰富上下文交互的语言中。为了应对这些挑战，我们提出了 InterParser，这是一种新颖的框架，集成了预训练语言模型 (PLM)、双向 GRU (BiGRU) 和双仿射评分以进行全面的依存关系解析。我们的模型使用 PLM 对令牌序列进行编码，通过深层 BiGRU 层细化表示，并对“头部”和“依赖”角色采用单独的投影来优化弧和关系预测。对于交叉话语依赖性，引入特定于说话者的特征投影来增强对话感知评分。联合训练最大限度地减少了话语内和话语间依赖性的交叉熵损失，确保了统一优化。在标准中文基准上进行的实验表明，InterParser 的性能显着优于先前的方法，在语句内和语句间解析方面均实现了最先进的标记附件分数 (LAS)。

## 关键词抽取 (7 篇)

---

## 314. Self-Error-Instruct: Generalizing from Errors forLLMs Mathematical Reasoning

**类别**: `主会-长文`

**作者**: Erxin Yu, Jing Li, Ming Liao, Qi Zhu, Boyang Xue, Minghui Xu, Baojun Wang, Lanqing Hong, Fei Mi, Lifeng Shang

**ID**: 2025.acl-long.417

**摘要(英文)**:
> Although large language models demonstrate strong performance across various domains, they still struggle with numerous bad cases in mathematical reasoning. Previous approaches to learning from errors synthesize training data by solely extrapolating from isolated bad cases, thereby failing to generalize the extensive patterns inherent within these cases. This paper presents Self-Error-Instruct (SEI), a framework that addresses these model weaknesses and synthesizes more generalized targeted training data. Specifically, we explore a target model on two mathematical datasets, GSM8K and MATH, to pinpoint bad cases. Then, we generate error keyphrases for these cases based on the instructor model’s (GPT-4o) analysis and identify error types by clustering these keyphrases. Next, we sample a few bad cases during each generation for each identified error type and input them into the instructor model, which synthesizes additional training data using a self-instruct approach. This new data is refined through a one-shot learning process to ensure that only the most effective examples are kept. Finally, we use these curated data to fine-tune the target model, iteratively repeating the process to enhance performance. We apply our framework to various models and observe improvements in their reasoning abilities across both in-domain and out-of-domain mathematics datasets. These results demonstrate the effectiveness of self-error instruction in improving LLMs’ mathematical reasoning through error generalization.

**摘要(中文)**:
> 尽管大型语言模型在各个领域都表现出了强大的性能，但它们仍然在数学推理中遇到许多糟糕的情况。以前从错误中学习的方法仅通过从孤立的不良案例中推断来合成训练数据，因此无法概括这些案例中固有的广泛模式。本文提出了自错误指令（SEI），这是一个解决这些模型弱点并综合更通用的目标训练数据的框架。具体来说，我们在两个数学数据集 GSM8K 和 MATH 上探索目标模型，以查明不良情况。然后，我们根据讲师模型 (GPT-4o) 的分析生成这些案例的错误关键词，并通过对这些关键词进行聚类来识别错误类型。接下来，我们在每一代中针对每个已识别的错误类型采样一些不良案例，并将它们输入到指导模型中，该模型使用自指导方法综合额外的训练数据。这些新数据通过一次性学习过程进行提炼，以确保只保留最有效的示例。最后，我们使用这些精选数据来微调目标模型，迭代地重复该过程以提高性能。我们将我们的框架应用于各种模型，并观察它们在域内和域外数学数据集中的推理能力的提高。这些结果证明了自错误指令通过错误泛化来提高大语言模型数学推理能力的有效性。

---

## 315. LexKeyPlan: Planning with Keyphrases and Retrieval Augmentation for Legal Text Generation: A Case Study onEuropean Court of Human Rights Cases

**类别**: `主会-短文`

**作者**: Santosh T.y.s.s, Elvin Quero Hernandez

**ID**: 2025.acl-short.32

**摘要(英文)**:
> Large language models excel at legal text generation but often produce hallucinations due to their sole reliance on parametric knowledge. Retrieval-augmented models mitigate this by providing relevant external documents to the model but struggle when retrieval is based only on past context, which may not align with the model’s intended future content. We introduce LexKeyPlan, a novel framework that integrates anticipatory planning into generation. Instead of relying solely on context for retrieval, LexKeyPlan generates keyphrases outlining future content serving as forward-looking plan, guiding retrieval for more accurate text generation. This work incorporates planning into legal text generation, demonstrating how keyphrases—representing legal concepts—enhance factual accuracy. By structuring retrieval around legal concepts, LexKeyPlan better aligns with legal reasoning, making it particularly suited for legal applications. Using the ECHR corpus as case study, we show that LexKeyPlan improves factual accuracy and coherence by retrieving information aligned with the intended content.

**摘要(中文)**:
> 大型语言模型擅长法律文本生成，但由于仅依赖参数知识，因此经常产生幻觉。检索增强模型通过向模型提供相关的外部文档来缓解这一问题，但当检索仅基于过去的上下文时会遇到困难，这可能与模型预期的未来内容不一致。我们介绍 LexKeyPlan，这是一个将预期规划集成到生成中的新颖框架。 LexKeyPlan 不是仅仅依赖上下文进行检索，而是生成概述未来内容的关键短语作为前瞻性计划，指导检索以生成更准确的文本。这项工作将规划纳入法律文本生成中，展示了代表法律概念的关键短语如何提高事实准确性。通过围绕法律概念构建检索，LexKeyPlan 更好地符合法律推理，使其特别适合法律应用。使用 ECHR 语料库作为案例研究，我们表明 LexKeyPlan 通过检索与预期内容一致的信息来提高事实准确性和连贯性。

---

## 316. Resource-Friendly Dynamic Enhancement Chain for Multi-Hop Question Answering

**类别**: `Findings`

**作者**: Binquan Ji, Haibo Luo, Yifei Lu, Lei Hei, Jiaqi Wang, Tingjing Liao, Lingyu Wang, Shichao Wang, Feiliang Ren

**ID**: 2025.findings-acl.846

**摘要(英文)**:
> Knowledge-intensive multi-hop question answering (QA) tasks, which require integrating evidence from multiple sources to address complex queries, often necessitate multiple rounds of retrieval and iterative generation by large language models (LLMs). However, incorporating many documents and extended contexts poses challenges—such as hallucinations and semantic drift—for lightweight LLMs with fewer parameters. This work proposes a novel framework called DEC (Dynamic Enhancement Chain). DEC first decomposes complex questions into logically coherent subquestions to form a hallucination-free reasoning chain. It then iteratively refines these subquestions through context-aware rewriting to generate effective query formulations. For retrieval, we introduce a lightweight discriminative keyword extraction module that leverages extracted keywords to achieve targeted, precise document recall with relatively low computational overhead. Extensive experiments on three multi-hop QA datasets demonstrate that DEC performs on par with or surpasses state-of-the-art benchmarks while significantly reducing token consumption. Notably, our approach attains state-of-the-art results on models with 8B parameters, showcasing its effectiveness in various scenarios, particularly in resource-constrained environments.

**摘要(中文)**:
> 知识密集型多跳问答 (QA) 任务需要集成多个来源的证据来解决复杂的查询，通常需要通过大型语言模型 (LLM) 进行多轮检索和迭代生成。然而，对于参数较少的轻量级大语言模型来说，合并许多文档和扩展上下文会带来挑战，例如幻觉和语义漂移。这项工作提出了一种称为 DEC（动态增强链）的新颖框架。 DEC首先将复杂的问题分解为逻辑上连贯的子问题，形成无幻觉的推理链。然后，它通过上下文感知重写迭代地细化这些子问题，以生成有效的查询公式。对于检索，我们引入了一个轻量级的判别性关键字提取模块，该模块利用提取的关键字以相对较低的计算开销实现有针对性的、精确的文档召回。对三个多跳 QA 数据集的广泛实验表明，DEC 的性能相当于或超过最先进的基准，同时显着减少了令牌消耗。值得注意的是，我们的方法在具有 8B 参数的模型上获得了最先进的结果，展示了其在各种场景中的有效性，特别是在资源受限的环境中。

---

## 317. LLMs are Biased Evaluators But Not Biased for Fact-Centric Retrieval Augmented Generation

**类别**: `Findings`

**作者**: Yen-Shan Chen, Jing Jin, Peng-Ting Kuo, Chao-Wei Huang, Yun-Nung Chen

**ID**: 2025.findings-acl.1369

**摘要(英文)**:
> Recent studies have demonstrated that large language models (LLMs) exhibit significant biases in evaluation tasks, particularly in preferentially rating and favoring self-generated content. However, the extent to which this bias manifests in fact-oriented tasks, especially within retrieval-augmented generation (RAG) frameworks—where keyword extraction and factual accuracy take precedence over stylistic elements—remains unclear. Our study addresses this knowledge gap by simulating two critical phases of the RAG framework. In the first phase, LLMs evaluated human-authored and model-generated passages, emulating the pointwise reranking phase. The second phase involves conducting pairwise reading comprehension tests to simulate the generation phase. Contrary to previous findings indicating a self-preference in rating tasks, our results reveal no significant self-preference effect in RAG frameworks. Instead, we observe that factual accuracy significantly influences LLMs’ output, even in the absence of prior knowledge. These findings are consistent among three common QA datasets (NQ, MARCO, TriviaQA Datasets) and 5 widely adopted language models (GPT-3.5, GPT-4o-mini, Gemini, LLaMA3, and Mistral). Our research contributes to the ongoing discourse on LLM biases and their implications for RAG-based system, offering insights that may inform the development of more robust and unbiased LLM systems.

**摘要(中文)**:
> 最近的研究表明，大型语言模型（LLM）在评估任务中表现出显着的偏差，特别是在优先评级和偏向自我生成的内容方面。然而，这种偏见在以事实为导向的任务中表现出来的程度，特别是在检索增强生成（RAG）框架中（其中关键词提取和事实准确性优先于文体元素）仍不清楚。我们的研究通过模拟 RAG 框架的两个关键阶段来解决这一知识差距。在第一阶段，大语言模型评估了人类创作和模型生成的段落，模拟逐点重新排序阶段。第二阶段涉及进行成对阅读理解测试来模拟生成阶段。与之前表明评级任务中存在自我偏好的研究结果相反，我们的结果表明 RAG 框架中没有显着的自我偏好效应。相反，我们观察到，即使在缺乏先验知识的情况下，事实准确性也会显着影响大语言模型的输出。这些发现在三个常见的 QA 数据集（NQ、MARCO、TriviaQA 数据集）和 5 个广泛采用的语言模型（GPT-3.5、GPT-4o-mini、Gemini、LLaMA3 和 Mistral）之间是一致的。我们的研究有助于持续讨论 LLM 偏见及其对基于 RAG 的系统的影响，提供可能为更强大和公正的 LLM 系统的开发提供信息的见解。

---

## 318. Automatic concept extraction for learning domain modeling: A weakly supervised approach using contextualized word embeddings

**类别**: `Workshop-BEA`

**作者**: Kordula De Kuthy, Leander Girrbach, Detmar Meurers

**ID**: 2025.bea-1.13

**摘要(英文)**:
> Heterogeneity in student populations poses achallenge in formal education, with adaptivetextbooks offering a potential solution by tai-loring content based on individual learner mod-els. However, creating domain models for text-books typically demands significant manual ef-fort. Recent work by Chau et al. (2021) demon-strated automated concept extraction from dig-ital textbooks, but relied on costly domain-specific manual annotations. This paper in-troduces a novel, scalable method that mini-mizes manual effort by combining contextu-alized word embeddings with weakly super-vised machine learning. Our approach clustersword embeddings from textbooks and identi-fies domain-specific concepts using a machinelearner trained on concept seeds automaticallyextracted from Wikipedia. We evaluate thismethod using 28 economics textbooks, com-paring its performance against a tf-idf baseline,a supervised machine learning baseline, theRAKE keyword extraction method, and humandomain experts. Results demonstrate that ourweakly supervised method effectively balancesaccuracy with reduced annotation effort, offer-ing a practical solution for automated conceptextraction in adaptive learning environments.

**摘要(中文)**:
> 学生群体的异质性给正规教育带来了挑战，自适应教科书通过根据个体学习者模型定制内容提供了潜在的解决方案。然而，为教科书创建领域模型通常需要大量的手动工作。 Chau 等人的最新工作。 （2021）展示了从数字教科书中自动提取概念，但依赖于昂贵的特定领域手动注释。本文介绍了一种新颖的、可扩展的方法，通过将上下文化的词嵌入与弱监督机器学习相结合，最大限度地减少人工工作。我们的方法对教科书中的词嵌入进行聚类，并使用经过从维基百科自动提取的概念种子训练的机器学习器来识别特定领域的概念。我们使用 28 本经济学教科书来评估该方法，将其性能与 tf-idf 基线、监督机器学习基线、RAKE 关键词提取方法和人类领域专家进行比较。结果表明，我们的弱监督方法有效地平衡了准确性和减少注释工作，为自适应学习环境中的自动概念提取提供了实用的解决方案。

---

## 319. An Analysis of Datasets, Metrics and Models in Keyphrase Generation

**类别**: `Workshop-GEM`

**作者**: Florian Boudin, Akiko Aizawa

**ID**: 2025.gem-1.76

**摘要(英文)**:
> Keyphrase generation refers to the task of producing a set of words or phrases that summarises the content of a document. Continuous efforts have been dedicated to this task over the past few years, spreading across multiple lines of research, such as model architectures, data resources, and use-case scenarios. Yet, the current state of keyphrase generation remains unknown as there has been no attempt to review and analyse previous work. In this paper, we bridge this gap by presenting an analysis of over 50 research papers on keyphrase generation, offering a comprehensive overview of recent progress, limitations, and open challenges. Our findings highlight several critical issues in current evaluation practices, such as the concerning similarity among commonly-used benchmark datasets and inconsistencies in metric calculations leading to overestimated performances. Additionally, we address the limited availability of pre-trained models by releasing a strong PLM-based model for keyphrase generation as an effort to facilitate future research.

**摘要(中文)**:
> 关键词生成是指生成一组总结文档内容的单词或短语的任务。在过去的几年里，我们一直致力于这项任务，涉及多个研究领域，例如模型架构、数据资源和用例场景。然而，关键短语生成的当前状态仍然未知，因为没有尝试回顾和分析以前的工作。在本文中，我们通过对 50 多篇关于关键词生成的研究论文进行分析，弥合了这一差距，全面概述了最新进展、局限性和开放挑战。我们的研究结果强调了当前评估实践中的几个关键问题，例如常用基准数据集之间令人担忧的相似性以及导致高估性能的指标计算不一致。此外，我们还发布了一个强大的基于 PLM 的关键短语生成模型，以解决预训练模型可用性有限的问题，以促进未来的研究。

---

## 320. OPI-DRO-HELatSemEval-2025 Task 9: Integrating Transformer-Based Classification withLLM-Assisted Few-Shot Learning for Food Hazard Detection

**类别**: `Workshop-SemEval`

**作者**: Martyna Śpiewak, Daniel Karaś

**ID**: 2025.semeval-1.155

**摘要(英文)**:
> In this paper, we propose a hybrid approach for food hazard detection that combines a fine-tuned RoBERTa classifier with few-shot learning using an LLM model (GPT-3.5-turbo). We address challenges related to unstructured text and class imbalance by applying class weighting and keyword extraction (KeyBERT, YAKE, and Sentence-BERT). When RoBERTa’s confidence falls below a given threshold, a structured prompt which comprising the title, extracted keywords, and a few representative examples is used to re-evaluate the prediction with ChatGPT.

**摘要(中文)**:
> 在本文中，我们提出了一种食品危害检测的混合方法，该方法将微调的 RoBERTa 分类器与使用 LLM 模型 (GPT-3.5-turbo) 的小样本学习相结合。我们通过应用类别加权和关键字提取（KeyBERT、YAKE 和 Sentence-BERT）来解决与非结构化文本和类别不平衡相关的挑战。当 RoBERTa 的置信度低于给定阈值时，系统会使用包含标题、提取的关键字和一些代表性示例的结构化提示来重新评估 ChatGPT 的预测。

