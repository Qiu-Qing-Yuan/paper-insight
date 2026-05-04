# 检索与RAG

> 本分类共 269 篇论文

## 信息检索 (48 篇)

---

## 1. ReSCORE: Label-free Iterative Retriever Training for Multi-hop Question Answering with Relevance-Consistency Supervision

**类别**: `主会-长文`

**作者**: Dosung Lee, Wonjun Oh, Boyoung Kim, Minyoung Kim, Joonsuk Park, Paul Hongsuck Seo

**ID**: 2025.acl-long.16

**摘要(英文)**:
> Multi-hop question answering (MHQA) involves reasoning across multiple documents to answer complex questions. Dense retrievers typically outperform sparse methods like BM25 by leveraging semantic embeddings in many tasks; however, they require labeled query-document pairs for fine-tuning, which poses a significant challenge in MHQA due to the complexity of the reasoning steps. To overcome this limitation, we introduce Retriever Supervision with Consistency and Relevance (ReSCORE), a novel method for training dense retrievers for MHQA without the need for labeled documents. ReSCORE leverages large language models to measure document-question relevance with answer consistency and utilizes this information to train a retriever within an iterative question-answering framework. Evaluated on three MHQA benchmarks, our extensive experiments demonstrate the effectiveness of ReSCORE, with significant improvements in retrieval performance that consequently lead to state-of-the-art Exact Match and F1 scores for MHQA.

**摘要(中文)**:
> 多跳问答 (MHQA) 涉及跨多个文档进行推理以回答复杂的问题。通过在许多任务中利用语义嵌入，密集检索器通常优于 BM25 等稀疏方法；然而，它们需要标记的查询文档对进行微调，由于推理步骤的复杂性，这对 MHQA 提出了重大挑战。为了克服这一限制，我们引入了具有一致性和相关性的检索器监督（ReSCORE），这是一种无需标记文档即可训练 MHQA 密集检索器的新方法。 ReSCORE 利用大型语言模型来衡量文档与问题的相关性和答案的一致性，并利用这些信息在迭代问答框架内训练检索器。通过对三个 MHQA 基准进行评估，我们的大量实验证明了 ReSCORE 的有效性，显着提高了检索性能，从而为 MHQA 带来了最先进的精确匹配和 F1 分数。

---

## 2. HotelMatch-LLM: Joint Multi-Task Training of Small and Large Language Models for Efficient Multimodal Hotel Retrieval

**类别**: `主会-长文`

**作者**: Arian Askari, Emmanouil Stergiadis, Ilya Gusev, Moran Beladev

**ID**: 2025.acl-long.30

**摘要(英文)**:
> We present HotelMatch-LLM, a multimodal dense retrieval model for the travel domain that enables natural language property search, addressing the limitations of traditional travel search engines which require users to start with a destination and editing search parameters. HotelMatch-LLM features three key innovations: (1) Domain-specific multi-task optimization with three novel retrieval, visual, and language modeling objectives; (2) Asymmetrical dense retrieval architecture combining a small language model (SLM) for efficient online query processing and a large language model (LLM) for embedding hotel data; and (3) Extensive image processing to handle all property image galleries. Experiments on four diverse test sets show HotelMatch-LLM significantly outperforms state-of-the-art models, including VISTA and MARVEL. Specifically, on the test set—main query type—we achieve 0.681 for HotelMatch-LLM compared to 0.603 for the most effective baseline, MARVEL. Our analysis highlights the impact of our multi-task optimization, the generalizability of HotelMatch-LLM across LLM architectures, and its scalability for processing large image galleries.

**摘要(中文)**:
> 我们提出了 HotelMatch-LLM，这是一种针对旅行领域的多模态密集检索模型，可实现自然语言属性搜索，解决了传统旅行搜索引擎要求用户从目的地开始并编辑搜索参数的局限性。 HotelMatch-LLM 具有三个关键创新：（1）特定领域的多任务优化，具有三个新颖的检索、视觉和语言建模目标； （2）非对称密集检索架构，结合了用于高效在线查询处理的小语言模型（SLM）和用于嵌入酒店数据的大语言模型（LLM）； (3) 广泛的图像处理以处理所有财产图像库。对四个不同测试集的实验表明，HotelMatch-LLM 的性能显着优于最先进的模型，包括 VISTA 和 MARVEL。具体来说，在测试集（主要查询类型）上，我们为 HotelMatch-LLM 实现了 0.681，而最有效的基线 MARVEL 为 0.603。我们的分析强调了多任务优化的影响、HotelMatch-LLM 跨 LLM 架构的通用性及其处理大型图像库的可扩展性。

---

## 3. Towards Text-Image Interleaved Retrieval

**类别**: `主会-长文`

**作者**: Xin Zhang, Ziqi Dai, Yongqi Li, Yanzhao Zhang, Dingkun Long, Pengjun Xie, Meishan Zhang, Jun Yu, Wenjie Li, Min Zhang

**ID**: 2025.acl-long.214

**摘要(英文)**:
> Current multimodal information retrieval studies mainly focus on single-image inputs, which limits real-world applications involving multiple images and text-image interleaved content. In this work, we introduce the text-image interleaved retrieval (TIIR) task, where the query and document are interleaved text-image sequences, and the model is required to understand the semantics from the interleaved context for effective retrieval. We construct a TIIR benchmark based on naturally interleaved wikiHow tutorials, where a specific pipeline is designed to generate interleaved queries. To explore the task, we adapt several off-the-shelf retrievers and build a dense baseline by interleaved multimodal large language model (MLLM). We then propose a novel Matryoshka Multimodal Embedder (MME), which compresses the number of visual tokens at different granularity, to address the challenge of excessive visual tokens in MLLM-based TIIR models. Experiments demonstrate that simple adaption of existing models does not consistently yield effective results. Our MME achieves significant improvements over the baseline by substantially fewer visual tokens. We provide extensive analysis and will release the dataset and code to facilitate future research.

**摘要(中文)**:
> 当前的多模态信息检索研究主要集中在单图像输入，这限制了涉及多图像和文本图像交错内容的实际应用。在这项工作中，我们引入了文本图像交错检索（TIIR）任务，其中查询和文档是交错的文本图像序列，模型需要从交错的上下文中理解语义才能进行有效的检索。我们基于自然交错的 wikiHow 教程构建了 TIIR 基准测试，其中设计了特定的管道来生成交错查询。为了探索这项任务，我们采用了几个现成的检索器，并通过交错多模态大语言模型（MLLM）构建了密集基线。然后，我们提出了一种新颖的 Matryoshka 多模态嵌入器（MME），它以不同的粒度压缩视觉标记的数量，以解决基于 MLLM 的 TIIR 模型中视觉标记过多的挑战。实验表明，对现有模型的简单调整并不能始终产生有效的结果。我们的 MME 通过大幅减少视觉标记，在基准基础上实现了显着改进。我们提供广泛的分析，并将发布数据集和代码以促进未来的研究。

---

## 4. UniConv: Unifying Retrieval and Response Generation for Large Language Models in Conversations

**类别**: `主会-长文`

**作者**: Fengran Mo, Yifan Gao, Chuan Meng, Xin Liu, Zhuofeng Wu, Kelong Mao, Zhengyang Wang, Pei Chen, Zheng Li, Xian Li, Bing Yin, Meng Jiang

**ID**: 2025.acl-long.344

**摘要(英文)**:
> The rapid advancement of conversational search systems revolutionizes how information is accessed by enabling the multi-turn interaction between the user and the system. Existing conversational search systems are usually built with two different models. This separation restricts the system from leveraging the intrinsic knowledge of the models simultaneously, which cannot ensure the effectiveness of retrieval benefiting the generation. The existing studies for developing unified models cannot fully address the aspects of understanding conversational context, managing retrieval independently, and generating responses. In this paper, we explore how to unify dense retrieval and response generation for large language models in conversation. We conduct joint fine-tuning with different objectives and design two mechanisms to reduce the inconsistency risks while mitigating data discrepancy. The evaluations on five conversational search datasets demonstrate that our unified model can mutually improve both tasks and outperform the existing baselines.

**摘要(中文)**:
> 会话式搜索系统的快速发展通过实现用户和系统之间的多轮交互彻底改变了信息的访问方式。现有的会话式搜索系统通常是用两种不同的模型构建的。这种分离限制了系统同时利用模型的内在知识，这不能确保检索的有效性有利于一代人。现有的开发统一模型的研究无法完全解决理解会话上下文、独立管理检索和生成响应等方面的问题。在本文中，我们探讨了如何在对话中统一大型语言模型的密集检索和响应生成。我们针对不同的目标进行联合微调，设计了两种机制来降低不一致风险，同时减少数据差异。对五个会话搜索数据集的评估表明，我们的统一模型可以相互改进这两项任务并超越现有的基线。

---

## 5. A Text is Worth Several Tokens: Text Embedding fromLLMs Secretly Aligns Well with The Key Tokens

**类别**: `主会-长文`

**作者**: Zhijie Nie, Richong Zhang, Zhanyu Wu

**ID**: 2025.acl-long.379

**摘要(英文)**:
> Text embeddings from large language models (LLMs) have achieved excellent results in tasks such as information retrieval, semantic textual similarity, etc. In this work, we show an interesting finding: when feeding a text into the LLM-based embedder, the obtained text embedding will be able to be aligned with the key tokens in the input text. We first fully analyze this phenomenon on eight LLM-based embedders and show that this phenomenon is universal and is not affected by model architecture, training strategy, and embedding method. With a deeper analysis, we find that the main change in embedding space between these embedders and their LLM backbones is in the first principal component. By adjusting the first principal component, we can align text embedding with the key tokens. Finally, we give several examples to demonstrate the vast application potential of this finding: (1) we propose a simple and practical sparse retrieval method based on the aligned tokens, which can achieve 80% of the dense retrieval effect of the same model while reducing the computation significantly; (2) we show that our findings provide a novel perspective to help understand novel technologies (e.g., instruction-following embedding) and fuzzy concepts (e.g., semantic relatedness vs. similarity) in this field.

**摘要(中文)**:
> 来自大型语言模型（LLM）的文本嵌入在信息检索、语义文本相似性等任务中取得了优异的结果。在这项工作中，我们展示了一个有趣的发现：当将文本输入到基于 LLM 的嵌入器时，获得的文本嵌入将能够与输入文本中的关键标记对齐。我们首先在八个基于 LLM 的嵌入器上全面分析了这种现象，并表明这种现象是普遍存在的，并且不受模型架构、训练策略和嵌入方法的影响。通过更深入的分析，我们发现这些嵌入器与其 LLM 主干之间的嵌入空间的主要变化在于第一主成分。通过调整第一个主成分，我们可以将文本嵌入与关键标记对齐。最后，我们举几个例子来证明这一发现的巨大应用潜力：（1）我们提出了一种简单实用的基于对齐标记的稀疏检索方法，可以达到同一模型80%的密集检索效果，同时显着减少计算量； （2）我们表明，我们的发现提供了一个新颖的视角，有助于理解该领域的新技术（例如，指令跟踪嵌入）和模糊概念（例如，语义相关性与相似性）。

---

## 6. Multi-level Relevance Document Identifier Learning for Generative Retrieval

**类别**: `主会-长文`

**作者**: Fuwei Zhang, Xiaoyu Liu, Xinyu Jia, Yingfei Zhang, Shuai Zhang, Xiang Li, Fuzhen Zhuang, Wei Lin, Zhao Zhang

**ID**: 2025.acl-long.497

**摘要(英文)**:
> Generative Retrieval (GR) introduces a new information retrieval paradigm that directly generates unique document identifiers (DocIDs). The key challenge of GR lies in creating effective yet discrete DocIDs that preserve semantic relevance for similar documents while differentiating dissimilar ones. However, existing methods generate DocIDs solely based on the textual content of documents, which may result in DocIDs with weak semantic connections for similar documents due to variations in expression. Therefore, we propose using queries as a bridge to connect documents with varying relevance levels for learning improved DocIDs. In this paper, we propose **M**ulti-l**E**vel **R**elevance document identifier learning for **G**enerative r**E**trieval (MERGE), a novel approach that utilizes multi-level document relevance to learn high-quality DocIDs. MERGE incorporates three modules: a multi-relevance query-document alignment module to effectively align document representations with related queries, an outer-level contrastive learning module to capture binary-level relevance, and an inner-level multi-level relevance learning module to distinguish documents with different relevance levels. Our approach encodes rich hierarchical semantic information and maintains uniqueness across documents. Experimental results on real-world multilingual e-commerce search datasets demonstrate that MERGE significantly outperforms existing methods, underscoring its effectiveness. The source code is available at <https://github.com/zhangfw123/MERGE>.

**摘要(中文)**:
> 生成检索（GR）引入了一种新的信息检索范式，可以直接生成唯一的文档标识符（DocID）。 GR 的关键挑战在于创建有效但离散的 DocID，以保留相似文档的语义相关性，同时区分不同的文档。然而，现有方法仅根据文档的文本内容生成DocID，这可能会由于表达的变化而导致相似文档的DocID的语义连接较弱。因此，我们建议使用查询作为桥梁来连接具有不同相关级别的文档，以学习改进的 DocID。在本文中，我们提出了 **M**ulti-l**E**vel **R**elevance 文档标识符学习用于 **G**生成 r**E**trieval (MERGE)，这是一种利用多级文档相关性来学习高质量 DocID 的新颖方法。 MERGE 包含三个模块：一个多相关性查询文档对齐模块，用于有效地将文档表示与相关查询对齐；一个外层对比学习模块，用于捕获二进制相关性；以及一个内层多级相关性学习模块，用于区分具有不同相关性级别的文档。我们的方法对丰富的分层语义信息进行编码并保持文档之间的唯一性。在现实世界多语言电子商务搜索数据集上的实验结果表明，MERGE 显着优于现有方法，凸显了其有效性。源代码可在 <https://github.com/zhangfw123/MERGE> 获取。

---

## 7. PQR: Improving Dense Retrieval via Potential Query Modeling

**类别**: `主会-长文`

**作者**: Junfeng Kang, Rui Li, Qi Liu, Yanjiang Chen, Zheng Zhang, Junzhe Jiang, Heng Yu, Yu Su

**ID**: 2025.acl-long.660

**摘要(英文)**:
> Dense retrieval has now become the mainstream paradigm in information retrieval. The core idea of dense retrieval is to align document embeddings with their corresponding query embeddings by maximizing their dot product. The current training data is quite sparse, with each document typically associated with only one or a few labeled queries. However, a single document can be retrieved by multiple different queries. Aligning a document with just one or a limited number of labeled queries results in a loss of its semantic information. In this paper, we propose a training-free Potential Query Retrieval (PQR) framework to address this issue. Specifically, we use a Gaussian mixture distribution to model all potential queries for a document, aiming to capture its comprehensive semantic information. To obtain this distribution, we introduce three sampling strategies to sample a large number of potential queries for each document and encode them into a semantic space. Using these sampled queries, we employ the Expectation-Maximization algorithm to estimate parameters of the distribution. Finally, we also propose a method to calculate similarity scores between user queries and documents under the PQR framework. Extensive experiments demonstrate the effectiveness of the proposed method.

**摘要(中文)**:
> 密集检索现已成为信息检索的主流范式。密集检索的核心思想是通过最大化文档嵌入与其相应的查询嵌入的点积来对齐。当前的训练数据非常稀疏，每个文档通常仅与一个或几个带标签的查询相关联。然而，单个文档可以通过多个不同的查询来检索。仅将文档与一个或有限数量的标记查询对齐会导致其语义信息的丢失。在本文中，我们提出了一种免训练的潜在查询检索（PQR）框架来解决这个问题。具体来说，我们使用高斯混合分布对文档的所有潜在查询进行建模，旨在捕获其全面的语义信息。为了获得这种分布，我们引入了三种采样策略来对每个文档的大量潜在查询进行采样，并将它们编码到语义空间中。使用这些采样查询，我们采用期望最大化算法来估计分布的参数。最后，我们还提出了一种在 PQR 框架下计算用户查询和文档之间相似度得分的方法。大量的实验证明了所提出方法的有效性。

---

## 8. Efficient Long Context Language Model Retrieval with Compression

**类别**: `主会-长文`

**作者**: Minju Seo, Jinheon Baek, Seongyun Lee, Sung Ju Hwang

**ID**: 2025.acl-long.740

**摘要(英文)**:
> Long Context Language Models (LCLMs) have emerged as a new paradigm to perform Information Retrieval (IR), which enables the direct ingestion and retrieval of information by processing an entire corpus in their single context, showcasing the potential to surpass traditional sparse and dense retrieval methods. However, processing a large number of passages within in-context for retrieval is computationally expensive, and handling their representations during inference further exacerbates the processing time; thus, we aim to make LCLM retrieval more efficient and potentially more effective with passage compression. Specifically, we propose a new compression approach tailored for LCLM retrieval, which is trained to maximize the retrieval performance while minimizing the length of the compressed passages. To accomplish this, we generate the synthetic data, where compressed passages are automatically created and labeled as chosen or rejected according to their retrieval success for a given query, and we train the proposed Compression model for Long context Retrieval (CoLoR) with this data via preference optimization while adding the length regularization loss on top of it to enforce brevity. Through extensive experiments on 9 datasets, we show that CoLoR improves the retrieval performance by 6% while compressing the in-context size by a factor of 1.91. Our code is available at: https://github.com/going-doer/CoLoR.

**摘要(中文)**:
> 长上下文语言模型 (LCLM) 已成为执行信息检索 (IR) 的新范式，它可以通过在单一上下文中处理整个语料库来直接摄取和检索信息，展示了超越传统稀疏和密集检索方法的潜力。然而，处理上下文中的大量段落以进行检索在计算上是昂贵的，并且在推理期间处理它们的表示进一步加剧了处理时间；因此，我们的目标是使 LCLM 检索更加高效，并且通过段落压缩可能更加有效。具体来说，我们提出了一种专为 LCLM 检索量身定制的新压缩方法，该方法经过训练可最大限度地提高检索性能，同时最大限度地减少压缩段落的长度。为了实现这一目标，我们生成合成数据，其中压缩的段落会根据给定查询的检索成功情况自动创建并标记为选择或拒绝，并且我们通过偏好优化使用该数据训练提议的长上下文检索压缩模型（CoLoR），同时在其之上添加长度正则化损失以强制简洁。通过对 9 个数据集的大量实验，我们表明 CoLoR 将检索性能提高了 6%，同时将上下文大小压缩了 1.91 倍。我们的代码位于：https://github.com/going-doer/CoLoR。

---

## 9. Any Information Is Just Worth One Single Screenshot: Unifying Search With Visualized Information Retrieval

**类别**: `主会-长文`

**作者**: Zheng Liu, Ze Liu, Zhengyang Liang, Junjie Zhou, Shitao Xiao, Chao Gao, Chen Jason Zhang, Defu Lian

**ID**: 2025.acl-long.943

**摘要(英文)**:
> With the popularity of multimodal techniques, it receives growing interests to acquire useful information in visual forms. In this work, we formally define an emerging IR paradigm called Visualized Information Retrieval, or Vis-IR, where multimodal information, such as texts, images, tables and charts, is jointly represented by a unified visual format called Screenshots, for various retrieval applications. We further make three key contributions for Vis-IR. First, we create VIRA (Vis-IR Aggregation), a large-scale dataset comprising a vast collection of screenshots from diverse sources, carefully curated into captioned and question-answer formats. Second, we develop UniSE (Universal Screenshot Embeddings), a family of retrieval models that enable screenshots to query or be queried across arbitrary data modalities. Finally, we construct MVRB (Massive Visualized IR Benchmark), a comprehensive benchmark covering a variety of task forms and application scenarios. Through extensive evaluations on MVRB, we highlight the deficiency from existing multimodal retrievers and the substantial improvements made by UniSE. Our data, model and benchmark have been made publicly available, which lays a solid foundation for this emerging field.

**摘要(中文)**:
> 随着多模态技术的普及，人们对以视觉形式获取有用信息越来越感兴趣。在这项工作中，我们正式定义了一种新兴的 IR 范式，称为可视化信息检索（Vis-IR），其中文本、图像、表格和图表等多模态信息由称为屏幕截图的统一视觉格式联合表示，用于各种检索应用。我们进一步为 Vis-IR 做出了三项关键贡献。首先，我们创建 VIRA（可见红外聚合），这是一个大型数据集，包含来自不同来源的大量屏幕截图，并精心整理成标题和问答格式。其次，我们开发了 UniSE（通用屏幕截图嵌入），这是一系列检索模型，使屏幕截图能够跨任意数据模式进行查询或被查询。最后，我们构建了MVRB（大规模可视化IR基准），这是一个涵盖多种任务形式和应用场景的综合基准。通过对 MVRB 的广泛评估，我们强调了现有多模式检索器的不足以及 UniSE 所做的实质性改进。我们的数据、模型和基准已经公开，为这个新兴领域奠定了坚实的基础。

---

## 10. AIR-Bench: Automated Heterogeneous Information Retrieval Benchmark

**类别**: `主会-长文`

**作者**: Jianlyu Chen, Nan Wang, Chaofan Li, Bo Wang, Shitao Xiao, Han Xiao, Hao Liao, Defu Lian, Zheng Liu

**ID**: 2025.acl-long.982

**摘要(英文)**:
> Evaluation plays a crucial role in the advancement of information retrieval (IR) models. However, current benchmarks, which are based on predefined domains and human-labeled data, face limitations in addressing evaluation needs for emerging domains both cost-effectively and efficiently. To address this challenge, we propose the Automated Heterogeneous Information Retrieval Benchmark (AIR-Bench). AIR-Bench is distinguished by three key features: 1) Automated. The testing data in AIR-Bench is automatically generated by large language models (LLMs) without human intervention. 2) Heterogeneous. The testing data in AIR-Bench is generated with respect to diverse tasks, domains and languages. 3) Dynamic. The domains and languages covered by AIR-Bench are constantly augmented to provide an increasingly comprehensive evaluation benchmark for community developers. We develop a reliable and robust data generation pipeline to automatically create diverse and high-quality evaluation datasets based on real-world corpora. Our findings demonstrate that the generated testing data in AIR-Bench aligns well with human-labeled testing data, making AIR-Bench a dependable benchmark for evaluating IR models. The resources in AIR-Bench are publicly available at https://github.com/AIR-Bench/AIR-Bench.

**摘要(中文)**:
> 评估在信息检索（IR）模型的进步中起着至关重要的作用。然而，当前基于预定义领域和人工标记数据的基准在经济高效地满足新兴领域的评估需求方面面临局限性。为了应对这一挑战，我们提出了自动异构信息检索基准（AIR-Bench）。 AIR-Bench 具有三个主要特点： 1) 自动化。 AIR-Bench 中的测试数据由大型语言模型 (LLM) 自动生成，无需人工干预。 2）异构。 AIR-Bench 中的测试数据是根据不同的任务、领域和语言生成的。 3）动态。 AIR-Bench 覆盖的领域和语言不断丰富，为社区开发者提供日益全面的评估基准。我们开发了可靠且强大的数据生成管道，以根据现实世界的语料库自动创建多样化且高质量的评估数据集。我们的研究结果表明，AIR-Bench 中生成的测试数据与人工标记的测试数据非常吻合，使 AIR-Bench 成为评估 IR 模型的可靠基准。 AIR-Bench 中的资源可在 https://github.com/AIR-Bench/AIR-Bench 上公开获取。

---

## 11. Modeling Complex Semantics Relation with Contrastively Fine-Tuned Relational Encoders

**类别**: `主会-长文`

**作者**: Naïm Es-sebbani, Esteban Marquer, Zied Bouraoui

**ID**: 2025.acl-long.991

**摘要(英文)**:
> Modeling relationships between concepts and entities is essential for many applications. While Large Language Models (LLMs) capture relational and commonsense knowledge effectively, they are computationally expensive and often underperform in tasks requiring efficient relational encoding, such as relation induction, extraction, and information retrieval. Despite advancements in learning relational embeddings, existing methods often fail to capture nuanced representations and the rich semantics needed for high-quality embeddings. In this work, we propose different relational encoders designed to capture diverse relational aspects and semantic properties of entity pairs. Although several datasets exist for training such encoders, they often rely on structured knowledge bases or predefined schemas, which primarily encode simple and static relations. To overcome this limitation, we also introduce a novel dataset generation method leveraging LLMs to create a diverse spectrum of relationships. Our experiments demonstrate the effectiveness of our proposed encoders and the benefits of our generated dataset.

**摘要(中文)**:
> 对概念和实体之间的关系进行建模对于许多应用程序至关重要。虽然大型语言模型 (LLM) 可以有效地捕获关系和常识知识，但它们的计算成本很高，并且在需要高效关系编码的任务（例如关系归纳、提取和信息检索）中通常表现不佳。尽管学习关系嵌入方面取得了进步，但现有方法通常无法捕获高质量嵌入所需的细致入微的表示和丰富的语义。在这项工作中，我们提出了不同的关系编码器，旨在捕获实体对的不同关系方面和语义属性。尽管存在用于训练此类编码器的多个数据集，但它们通常依赖于结构化知识库或预定义模式，这些数据集主要对简单和静态关系进行编码。为了克服这一限制，我们还引入了一种新颖的数据集生成方法，利用大语言模型来创建各种关系。我们的实验证明了我们提出的编码器的有效性以及我们生成的数据集的好处。

---

## 12. ReinforcedIR: A Self-Boosting Framework For Domain-Adapted Information Retrieval

**类别**: `主会-长文`

**作者**: Chaofan Li, Jianlyu Chen, Yingxia Shao, Chaozhuo Li, Quanqing Xu, Defu Lian, Zheng Liu

**ID**: 2025.acl-long.1071

**摘要(英文)**:
> While retrieval techniques are widely used in practice, they still face significant challenges in cross-domain scenarios. Recently, generation-augmented methods have emerged as a promising solution to this problem. These methods enhance raw queries by incorporating additional information from an LLM-based generator, facilitating more direct retrieval of relevant documents. However, existing methods struggle with highly specialized situations that require extensive domain expertise. To address this problem, we presentReinforced-IR, a novel approach that jointly adapts a pre-trained retriever and generator for precise cross-domain retrieval. A key innovation of Reinforced-IR is itsSelf-Boostingframework, which enables retriever and generator to learn from each other’s feedback. Specifically, the generator is reinforced to generate query augmentations that enhance the retriever’s performance, while the retriever is trained to better discriminate the relevant documents identified by the generator. This iterative process allows the end-to-end retrieval performance to be progressively optimized using an unlabeled corpus from the target domain. In our experiment, Reinforced-IR outperforms existing domain adaptation methods by a large margin, leading to substantial improvements in retrieval quality across a wide range of application scenarios.We have publicly released our code at this repo.

**摘要(中文)**:
> 虽然检索技术在实践中得到广泛应用，但在跨领域场景中仍然面临重大挑战。最近，一代增强方法的出现成为解决这一问题的有希望的解决方案。这些方法通过合并来自基于 LLM 的生成器的附加信息来增强原始查询，从而促进更直接地检索相关文档。然而，现有方法难以应对需要广泛领域专业知识的高度专业化情况。为了解决这个问题，我们提出了 Reinforced-IR，这是一种新颖的方法，它联合采用预先训练的检索器和生成器来实现精确的跨域检索。 Reinforced-IR 的一个关键创新是其自我提升框架，它使检索器和生成器能够从彼此的反馈中学习。具体来说，生成器被增强以生成查询增强，从而增强检索器的性能，同时检索器被训练以更好地区分生成器识别的相关文档。这个迭代过程允许使用来自目标域的未标记语料库逐步优化端到端检索性能。在我们的实验中，Reinforced-IR 大大优于现有的领域适应方法，从而在广泛的应用场景中显着提高了检索质量。我们已在此存储库中公开发布了我们的代码。

---

## 13. CoIR: A Comprehensive Benchmark for Code Information Retrieval Models

**类别**: `主会-长文`

**作者**: Xiangyang Li, Kuicai Dong, Yi Quan Lee, Wei Xia, Hao Zhang, Xinyi Dai, Yasheng Wang, Ruiming Tang

**ID**: 2025.acl-long.1072

**摘要(英文)**:
> Despite the substantial success of Information Retrieval (IR) in various NLP tasks, most IR systems predominantly handle queries and corpora in natural language, neglecting the domain of code retrieval. Code retrieval is critically important yet remains under-explored, with existing methods and benchmarks inadequately representing the diversity of code in various domains and tasks. Moreover, many models have begun to overfit existing leaderboards, limiting their generalizability and real-world applicability. Addressing this gap, we present CoIR (**Co**de **I**nformation **R**etrieval Benchmark), a robust and comprehensive benchmark specifically designed to assess code retrieval capabilities. CoIR comprises ten meticulously curated code datasets, spanning eight distinctive retrieval tasks across seven diverse domains. We first discuss the construction of CoIR and its diverse dataset composition. Further, we evaluate ten widely used retrieval models using CoIR, uncovering significant difficulties in performing code retrieval tasks even with state-of-the-art systems. CoIR also introduces a simple yet effective python framework, which additionally defines various advanced modes to facilitate researchers in evaluating their models. It shares the same data schema as other popular benchmarks like MTEB and BEIR, enabling seamless cross-benchmark evaluations. Through CoIR, we aim to invigorate research in the code retrieval domain, providing a versatile benchmarking tool that encourages further development and exploration of code retrieval systems.

**摘要(中文)**:
> 尽管信息检索 (IR) 在各种 NLP 任务中取得了巨大成功，但大多数 IR 系统主要处理自然语言的查询和语料库，而忽略了代码检索领域。代码检索至关重要，但仍未得到充分探索，现有方法和基准不足以代表各个领域和任务中代码的多样性。此外，许多模型已经开始过度拟合现有的排行榜，限制了它们的普遍性和现实世界的适用性。为了解决这一差距，我们提出了 CoIR（**Co**de **I**information **R**etrieval Benchmark），这是一个强大而全面的基准，专门用于评估代码检索能力。 CoIR 包含十个精心策划的代码数据集，涵盖七个不同领域的八个独特的检索任务。我们首先讨论 CoIR 的构建及其多样化的数据集组成。此外，我们使用 CoIR 评估了十种广泛使用的检索模型，发现即使使用最先进的系统执行代码检索任务也存在显着困难。 CoIR还引入了一个简单而有效的Python框架，它还定义了各种高级模式，以方便研究人员评估他们的模型。它与 MTEB 和 BEIR 等其他流行基准测试共享相同的数据架构，从而实现无缝的跨基准评估。通过 CoIR，我们的目标是激发代码检索领域的研究，提供通用的基准测试工具，鼓励代码检索系统的进一步开发和探索。

---

## 14. FCMR: Robust Evaluation of Financial Cross-Modal Multi-Hop Reasoning

**类别**: `主会-长文`

**作者**: Seunghee Kim, Changhyeon Kim, Taeuk Kim

**ID**: 2025.acl-long.1138

**摘要(英文)**:
> Real-world decision-making often requires integrating and reasoning over information from multiple modalities. While recent multimodal large language models (MLLMs) have shown promise in such tasks, their ability to perform multi-hop reasoning across diverse sources remains insufficiently evaluated. Existing benchmarks, such as MMQA, face challenges due to (1) data contamination and (2) a lack of complex queries that necessitate operations across more than two modalities, hindering accurate performance assessment. To address this, we present Financial Cross-Modal Multi-Hop Reasoning (FCMR), a benchmark created to analyze the reasoning capabilities of MLLMs by urging them to combine information from textual reports, tables, and charts within the financial domain. FCMR is categorized into three difficulty levels—Easy, Medium, and Hard—facilitating a step-by-step evaluation. In particular, problems at the Hard level require precise cross-modal three-hop reasoning and are designed to prevent the disregard of any modality. Experiments on this new benchmark reveal that even state-of-the-art MLLMs struggle, with the best-performing model (Claude 3.5 Sonnet) achieving only 30.4% accuracy on the most challenging tier. We also conduct analysis to provide insights into the inner workings of the models, including the discovery of a critical bottleneck in the information retrieval phase.

**摘要(中文)**:
> 现实世界的决策通常需要对多种模式的信息进行整合和推理。虽然最近的多模态大语言模型（MLLM）在此类任务中表现出了希望，但它们跨不同来源执行多跳推理的能力仍未得到充分评估。现有基准（例如 MMQA）面临挑战，原因是（1）数据污染和（2）缺乏复杂查询，需要跨两种以上模式进行操作，从而阻碍了准确的性能评估。为了解决这个问题，我们提出了金融跨模式多跳推理 (FCMR)，这是一个基准，旨在通过敦促 MLLM 结合来自金融领域内的文本报告、表格和图表的信息来分析 MLLM 的推理能力。 FCMR 分为三个难度级别：简单、中等和困难，以便于逐步评估。特别是，硬级别的问题需要精确的跨模态三跳推理，并且旨在防止忽视任何模态。针对这一新基准的实验表明，即使是最先进的 MLLM 也会陷入困境，性能最佳的模型 (Claude 3.5 Sonnet) 在最具挑战性的层上仅实现 30.4% 的准确率。我们还进行分析以深入了解模型的内部运作，包括发现信息检索阶段的关键瓶颈。

---

## 15. InstructPart: Task-Oriented Part Segmentation with Instruction Reasoning

**类别**: `主会-长文`

**作者**: Zifu Wan, Yaqi Xie, Ce Zhang, Zhiqiu Lin, Zihan Wang, Simon Stepputtis, Deva Ramanan, Katia P. Sycara

**ID**: 2025.acl-long.1179

**摘要(英文)**:
> Large multimodal foundation models, particularly in the domains of language and vision, have significantly advanced various tasks, including robotics, autonomous driving, information retrieval, and grounding. However, many of these models perceive objects as indivisible, overlooking the components that constitute them. Understanding these components and their associated affordances provides valuable insights into an object’s functionality, which is fundamental for performing a wide range of tasks. In this work, we introduce a novel real-world benchmark, InstructPart, comprising hand-labeled part segmentation annotations and task-oriented instructions to evaluate the performance of current models in understanding and executing part-level tasks within everyday contexts. Through our experiments, we demonstrate that task-oriented part segmentation remains a challenging problem, even for state-of-the-art Vision-Language Models (VLMs). In addition to our benchmark, we introduce a simple baseline that achieves a twofold performance improvement through fine-tuning with our dataset. With our dataset and benchmark, we aim to facilitate research on task-oriented part segmentation and enhance the applicability of VLMs across various domains, including robotics, virtual reality, information retrieval, and other related fields. Project website: https://zifuwan.github.io/InstructPart/.

**摘要(中文)**:
> 大型多模态基础模型，特别是在语言和视觉领域，显着推进了各种任务，包括机器人、自动驾驶、信息检索和基础。然而，许多这些模型将对象视为不可分割的，而忽略了构成它们的组件。了解这些组件及其相关的可供性可以提供对对象功能的宝贵见解，这对于执行各种任务至关重要。在这项工作中，我们引入了一种新颖的现实世界基准 InstructPart，包括手工标记的零件分割注释和面向任务的指令，以评估当前模型在日常环境中理解和执行零件级任务的性能。通过我们的实验，我们证明面向任务的零件分割仍然是一个具有挑战性的问题，即使对于最先进的视觉语言模型（VLM）也是如此。除了我们的基准之外，我们还引入了一个简单的基准，通过对我们的数据集进行微调，可以实现双倍的性能改进。通过我们的数据集和基准，我们的目标是促进面向任务的零件分割的研究，并增强 VLM 在各个领域的适用性，包括机器人、虚拟现实、信息检索和其他相关领域。项目网站：https://zifuwan.github.io/InstructPart/。

---

## 16. CSTree-SRI: Introspection-Driven Cognitive Semantic Tree for Multi-Turn Question Answering over Extra-Long Contexts

**类别**: `主会-长文`

**作者**: Zhaowen Wang, Xiang Wei, Kangshao Du, Yiting Zhang, Libo Qin, Yingjie Xia, Li Kuang

**ID**: 2025.acl-long.1286

**摘要(英文)**:
> Large Language Models (LLMs) have achieved remarkable success in natural language processing (NLP), particularly in single-turn question answering (QA) on short-text. However, their performance significantly declines when applied to multi-turn QA over extra-long context (ELC), as they struggle to capture the logical correlations across multiple chunks of ELC and maintain the coherence of multi-turn Questions. To address the challenges, we propose the CSTree-SRI framework (Cognitive Semantic Tree through Summarization, Retrieval, and Introspection). CSTree-SRI dynamically constructs the CSTree to preserve logical coherence within ELC through hierarchical synthesis and introspective validation. Then a logic-driven traversal strategy on CSTree is designed to provide efficient information retrieval for question answering. Additionally, we construct a suite of multi-turn QA datasets and an evaluation benchmark tailored for ELC tasks, and comprehensive experiments demonstrate the framework’s superiority in addressing the challenges of multi-turn QA over ELC.

**摘要(中文)**:
> 大型语言模型（LLM）在自然语言处理（NLP）方面取得了显着的成功，特别是在短文本的单轮问答（QA）方面。然而，当应用于超长上下文 (ELC) 上的多轮 QA 时，它们的性能会显着下降，因为它们很难捕获多个 ELC 块之间的逻辑相关性并保持多轮问题的连贯性。为了应对这些挑战，我们提出了 CSTree-SRI 框架（通过总结、检索和内省的认知语义树）。 CSTree-SRI 动态构建 CSTree，通过分层综合和内省验证来保持 ELC 内的逻辑一致性。然后设计了CSTree上逻辑驱动的遍历策略，为问答提供高效的信息检索。此外，我们构建了一套针对 ELC 任务的多轮 QA 数据集和评估基准，全面的实验证明了该框架在解决多轮 QA 挑战方面相对于 ELC 的优势。

---

## 17. DRAMA: Diverse Augmentation from Large Language Models to Smaller Dense Retrievers

**类别**: `主会-长文`

**作者**: Xueguang Ma, Xi Victoria Lin, Barlas Oguz, Jimmy Lin, Wen-tau Yih, Xilun Chen

**ID**: 2025.acl-long.1457

**摘要(英文)**:
> Large language models (LLMs) have demonstrated strong effectiveness and robustness when fine-tuned as dense retrievers.However, their large parameter size presents significant computational challenges at inference time.While smaller retrievers offer better efficiency, they often fail to generalize effectively with limited supervised fine-tuning data.In this work, we introduce DRAMA, a training framework that leverages LLMs to train smaller generalizable dense retrievers.In particular, we adopt pruned LLMs as the backbone and train on diverse LLM-augmented data in a single-stage contrastive learning setup.Experiments show that DRAMA offers better multilingual and long-context capabilities than traditional encoder-based retrievers, and achieves strong performance across multiple tasks and languages.

**摘要(中文)**:
> 大型语言模型（LLM）在作为密集检索器进行微调时表现出强大的有效性和鲁棒性。然而，它们的大参数大小在推理时带来了巨大的计算挑战。虽然较小的检索器提供了更好的效率，但它们通常无法在有限的监督微调数据下有效泛化。在这项工作中，我们引入了 DRAMA，这是一种利用 LLM 来训练较小的可泛化密集检索器的训练框架。特别是，我们采用修剪后的 LLM 作为骨干，并在不同的数据集上进行训练。单阶段对比学习设置中的 LLM 增强数据。实验表明，DRAMA 比传统的基于编码器的检索器提供更好的多语言和长上下文功能，并且在多个任务和语言上实现了强大的性能。

---

## 18. TACLR: A Scalable and Efficient Retrieval-based Method for Industrial Product Attribute Value Identification

**类别**: `主会-长文`

**作者**: Yindu Su, Huike Zou, Lin Sun, Ting Zhang, Haiyang Yang, Chen Li Yu, David Lo, Qingheng Zhang, Shuguang Han, Jufeng Chen

**ID**: 2025.acl-long.1521

**摘要(英文)**:
> Product Attribute Value Identification (PAVI) involves identifying attribute values from product profiles, a key task for improving product search, recommendation, and business analytics on e-commerce platforms.However, existing PAVI methods face critical challenges, such as inferring implicit values, handling out-of-distribution (OOD) values, and producing normalized outputs.To address these limitations, we introduce Taxonomy-Aware Contrastive Learning Retrieval (TACLR), the first retrieval-based method for PAVI.TACLR formulates PAVI as an information retrieval task by encoding product profiles and candidate values into embeddings and retrieving values based on their similarity. It leverages contrastive training with taxonomy-aware hard negative sampling and employs adaptive inference with dynamic thresholds.TACLR offers three key advantages: (1) it effectively handles implicit and OOD values while producing normalized outputs; (2) it scales to thousands of categories, tens of thousands of attributes, and millions of values; and (3) it supports efficient inference for high-load industrial deployment.Extensive experiments on proprietary and public datasets validate the effectiveness and efficiency of TACLR. Further, it has been successfully deployed on the real-world e-commerce platform Xianyu, processing millions of product listings daily with frequently updated, large-scale attribute taxonomies. We release the code to facilitate reproducibility and future research at https://github.com/SuYindu/TACLR.

**摘要(中文)**:
> 产品属性值识别 (PAVI) 涉及从产品配置文件中识别属性值，这是改进电子商务平台上的产品搜索、推荐和业务分析的关键任务。然而，现有的 PAVI 方法面临着严峻的挑战，例如推断隐式值、处理分布外 (OOD) 值以及生成标准化输出。为了解决这些限制，我们引入了分类感知对比学习检索 (TACLR)，这是第一个基于检索的 PAVI 方法。TACLR通过将产品配置文件和候选值编码到嵌入中并根据它们的相似性检索值，将 PAVI 制定为信息检索任务。它利用对比训练与分类感知硬负采样，并采用动态阈值的自适应推理。TACLR 具有三个关键优势：(1) 它有效处理隐式值和 OOD 值，同时生成标准化输出； （2）它可以扩展到数千个类别、数万个属性和数百万个值； （3）支持高负载工业部署的高效推理。在专有和公共数据集上进行的大量实验验证了 TACLR 的有效性和效率。此外，它已成功部署在现实世界的电子商务平台闲鱼上，每天处理数百万个产品列表，并具有频繁更新的大规模属性分类法。我们在 https://github.com/SuYindu/TACLR 发布了代码以促进可重复性和未来的研究。

---

## 19. CoRet: Improved Retriever for Code Editing

**类别**: `主会-短文`

**作者**: Fabio James Fehr, Prabhu Teja S, Luca Franceschi, Giovanni Zappella

**ID**: 2025.acl-short.62

**摘要(英文)**:
> In this paper, we introduce CoRet, a dense retrieval model designed for code-editing tasks that integrates code semantics, repository structure, and call-graph dependencies. The model focuses on retrieving relevant portions of a code repository based on natural language queries such as requests to implement new features or fix bugs. These retrieved code chunks can then be presented to an user or to a second code-editing model or agent. To train CoRet, we propose a loss function explicitly designed for repository-level retrieval. On SWE-bench and Long Code Arena’s bug localisation datasets, we show that our model substantially improves retrieval recall by at least 15 percentage points over existing models, and ablate the design choices to show their importance in achieving these results.

**摘要(中文)**:
> 在本文中，我们介绍了 CoRet，这是一种专为代码编辑任务而设计的密集检索模型，它集成了代码语义、存储库结构和调用图依赖关系。该模型侧重于根据自然语言查询检索代码存储库的相关部分，例如实现新功能或修复错误的请求。然后可以将这些检索到的代码块呈现给用户或第二代码编辑模型或代理。为了训练 CoRet，我们提出了一个专门为存储库级检索设计的损失函数。在 SWE-bench 和 Long Code Arena 的错误定位数据集上，我们表明我们的模型比现有模型显着提高了检索召回率至少 15 个百分点，并消除了设计选择以显示它们在实现这些结果中的重要性。

---

## 20. HierGR: Hierarchical Semantic Representation Enhancement for Generative Retrieval in Food Delivery Search

**类别**: `工业Track`

**作者**: Fuwei Zhang, Xiaoyu Liu, Xinyu Jia, Yingfei Zhang, Zenghua Xia, Fei Jiang, Fuzhen Zhuang, Wei Lin, Zhao Zhang

**ID**: 2025.acl-industry.31

**摘要(英文)**:
> Food delivery search aims to quickly retrieve deliverable items that meet users’ needs, typically requiring faster and more accurate query understanding compared to traditional e-commerce search. Generative retrieval (GR), an emerging search paradigm, harnesses the advanced query understanding capabilities of large language models (LLMs) to enhance the retrieval of results for complex and long-tail queries in food delivery search scenarios. However, there are still challenges in deploying GR to online scenarios: 1) **the large scale of items**; 2) **latency constraints unmet by LLM inference in online retrieval**; and 3) **strong location-based service restrictions on generated items**. To explore the application of GR in food delivery search, we optimize both offline training and online deployment, proposing **Hier**archical semantic representation enhancement for **G**enerative **R**etrieval (HierGR). Specifically, for the generation of semantic IDs, we propose an optimization method that refines the residual quantization process to generate hierarchically semantic IDs for items. Additionally, to successfully deploy on a well-known food delivery platform, we utilize the query cache mechanism and integrate the GR model with the online dense retrieval model to fulfill real-world search requirements. Online A/B testing results show that our proposed method increases **the number of online orders by 0.68%** for complex search intents. The source code is available at https://github.com/zhangfw123/HierGR.

**摘要(中文)**:
> 食品配送搜索旨在快速检索满足用户需求的可配送商品，与传统电子商务搜索相比，通常需要更快、更准确的查询理解。生成检索（GR）是一种新兴的搜索范式，利用大语言模型（LLM）的高级查询理解能力来增强食品配送搜索场景中复杂长尾查询结果的检索。然而，将GR部署到线上场景仍然面临挑战：1）**物品规模庞大**； 2) **在线检索中 LLM 推理未满足延迟限制**； 3) **对生成的项目进行基于位置的强大服务限制**。为了探索 GR 在食品配送搜索中的应用，我们优化了离线训练和在线部署，提出了 **G**生成 **R**etrieval (HierGR) 的 **Hier**archical 语义表示增强。具体来说，对于语义 ID 的生成，我们提出了一种优化方法，该方法可以细化残差量化过程，以生成项目的分层语义 ID。此外，为了成功部署在知名的食品配送平台上，我们利用查询缓存机制，并将GR模型与在线密集检索模型相结合，以满足现实世界的搜索需求。在线 A/B 测试结果表明，我们提出的方法将复杂搜索意图的在线订单数量增加了 0.68%**。源代码可在 https://github.com/zhangfw123/HierGR 获取。

---

## 21. QUPID: Quantified Understanding for Enhanced Performance, Insights, and Decisions inKorean Search Engines

**类别**: `工业Track`

**作者**: Ohjoon Kwon, Changsu Lee, Jihye Back, Lim Sun Suk, Inho Kang, Donghyeon Jeon

**ID**: 2025.acl-industry.38

**摘要(英文)**:
> Large language models (LLMs) have been widely used for relevance assessment in information retrieval. However, our study demonstrates that combining two distinct small language models (SLMs) with different architectures can outperform LLMs in this task. Our approach—QUPID—integrates a generative SLM with an embedding-based SLM, achieving higher relevance judgment accuracy while reducing computational costs compared to state-of-the-art LLM solutions. This computational efficiency makes QUPID highly scalable for real-world search systems processing millions of queries daily. In experiments across diverse document types, our method demonstrated consistent performance improvements (Cohen’s Kappa of 0.646 versus 0.387 for leading LLMs) while offering 60x faster inference times. Furthermore, when integrated into production search pipelines, QUPID improved nDCG@5 scores by 1.9%. These findings underscore how architectural diversity in model combinations can significantly enhance both search relevance and operational efficiency in information retrieval systems.

**摘要(中文)**:
> 大语言模型（LLM）已广泛用于信息检索中的相关性评估。然而，我们的研究表明，将两种不同的小语言模型 (SLM) 与不同的架构相结合可以在此任务中优于 LLM。我们的方法 QUPID 将生成式 SLM 与基于嵌入的 SLM 相集成，与最先进的 LLM 解决方案相比，实现了更高的相关性判断精度，同时降低了计算成本。这种计算效率使得 QUPID 具有高度可扩展性，适用于每天处理数百万个查询的现实世界搜索系统。在针对不同文档类型的实验中，我们的方法展示了一致的性能改进（Cohen 的 Kappa 为 0.646，领先的大语言模型为 0.387），同时推理时间加快了 60 倍。此外，当集成到生产搜索管道中时，QUPID 将 nDCG@5 分数提高了 1.9%。这些发现强调了模型组合中的架构多样性如何显着提高信息检索系统的搜索相关性和操作效率。

---

## 22. Operational Advice for Dense and Sparse Retrievers:HNSW, Flat, or Inverted Indexes?

**类别**: `工业Track`

**作者**: Jimmy Lin

**ID**: 2025.acl-industry.61

**摘要(英文)**:
> Practitioners working on dense retrieval today face a bewildering number of choices. Beyond selecting the embedding model, another consequential choice is the actual implementation of nearest-neighbor vector search. While best practices recommend HNSW indexes, flat vector indexes with brute-force search represent another viable option, particularly for smaller corpora and for rapid prototyping. In this paper, we provide experimental results on the BEIR dataset using the open-source Lucene search library that explicate the tradeoffs between HNSW and flat indexes (including quantized variants) from the perspectives of indexing time, query evaluation performance, and retrieval quality. With additional comparisons between dense and sparse retrievers, our results provide guidance for today’s search practitioner in understanding the design space of dense and sparse retrievers. To our knowledge, we are the first to provide operational advice supported by empirical experiments in this regard.

**摘要(中文)**:
> 如今从事密集检索的从业者面临着令人眼花缭乱的选择。除了选择嵌入模型之外，另一个相应的选择是最近邻向量搜索的实际实现。虽然最佳实践建议使用 HNSW 索引，但带有强力搜索的平面向量索引代表了另一种可行的选择，特别是对于较小的语料库和快速原型设计。在本文中，我们使用开源 Lucene 搜索库在 BEIR 数据集上提供了实验结果，从索引时间、查询评估性能和检索质量的角度阐述了 HNSW 和平面索引（包括量化变体）之间的权衡。通过密集检索器和稀疏检索器之间的额外比较，我们的结果为当今的搜索从业者理解密集检索器和稀疏检索器的设计空间提供了指导。据我们所知，我们是第一个在这方面提供由实证实验支持的操作建议的人。

---

## 23. ASK: Aspects and Retrieval based Hybrid Clarification in Task Oriented Dialogue Systems

**类别**: `工业Track`

**作者**: Rishav Sahay, Lavanya Sita Tekumalla, Purav Aggarwal, Arihant Jain, Anoop Saladi

**ID**: 2025.acl-industry.63

**摘要(英文)**:
> Ambiguous user queries pose a significant challenge in task-oriented dialogue systems relying on information retrieval. While Large Language Models (LLMs) have shown promise in generating clarification questions to tackle query ambiguity, they rely solely on the top-k retrieved documents for clarification which fails when ambiguity is too high to retrieve relevant documents in the first place. Traditional approaches lack principled mechanisms to determine when to use broad domain knowledge vs specific retrieved document context for clarification. We propose AsK, a novel hybrid approach that dynamically chooses between document-based or aspect-based clarification based on query ambiguity. Our approach requires no labeled clarification data and introduces: (1) Weakly-supervised Longformer-based ambiguity analysis, (2) Automated domain-specific aspect generation using clustering and LLMs and (3) LLM-powered clarification generation. AsK demonstrates significant improvements over baselines in both single-turn and multi-turn settings (recall@5 gain of ~20%) when evaluated on product troubleshooting and product search datasets.

**摘要(中文)**:
> 模糊的用户查询对依赖信息检索的面向任务的对话系统提出了重大挑战。虽然大型语言模型 (LLM) 在生成澄清问题来解决查询歧义方面表现出了希望，但它们仅依赖检索到的前 k 个文档进行澄清，当歧义太高而无法首先检索相关文档时，这种澄清就会失败。传统方法缺乏原则性的机制来确定何时使用广泛的领域知识与特定的检索到的文档上下文来进行澄清。我们提出了 AsK，一种新颖的混合方法，可以根据查询歧义在基于文档或基于方面的澄清之间进行动态选择。我们的方法不需要标记的澄清数据，并引入了：（1）基于 Longformer 的弱监督歧义分析，（2）使用聚类和 LLM 自动生成特定领域方面，以及（3）LLM 支持的澄清生成。在产品故障排除和产品搜索数据集上进行评估时，AsK 在单轮和多轮设置（recall@5 增益约为 20%）方面均表现出较基线显着改进。

---

## 24. Exp4Fuse: A Rank Fusion Framework for Enhanced Sparse Retrieval using Large Language Model-based Query Expansion

**类别**: `Findings`

**作者**: Lingyuan Liu, Mengxiang Zhang

**ID**: 2025.findings-acl.9

**摘要(英文)**:
> Large Language Models (LLMs) have shown potential in generating hypothetical documents for query expansion, thereby enhancing information retrieval performance. However, the efficacy of this method is highly dependent on the quality of the generated documents, which often requires complex prompt strategies and the integration of advanced dense retrieval techniques. This can be both costly and computationally intensive. To mitigate these limitations, we explore the use of zero-shot LLM-based query expansion to improve sparse retrieval, particularly for learned sparse retrievers. We introduce a novel fusion ranking framework, Exp4Fuse, which enhances the performance of sparse retrievers through an indirect application of zero-shot LLM-based query expansion. Exp4Fuse operates by simultaneously considering two retrieval routes—one based on the original query and the other on the LLM-augmented query. It then generates two ranked lists using a sparse retriever and fuses them using a modified reciprocal rank fusion method. We conduct extensive evaluations of Exp4Fuse against leading LLM-based query expansion methods and advanced retrieval techniques on three MS MARCO-related datasets and seven low-resource datasets. Experimental results reveal that Exp4Fuse not only surpasses existing LLM-based query expansion methods in enhancing sparse retrievers but also, when combined with advanced sparse retrievers, achieves SOTA results on several benchmarks. This highlights the superior performance and effectiveness of Exp4Fuse in improving query expansion for sparse retrieval.

**摘要(中文)**:
> 大型语言模型 (LLM) 在生成用于查询扩展的假设文档方面显示出了潜力，从而提高了信息检索性能。然而，这种方法的功效高度依赖于生成文档的质量，这通常需要复杂的提示策略和先进的密集检索技术的集成。这可能既昂贵又需要大量计算。为了减轻这些限制，我们探索使用基于零样本 LLM 的查询扩展来改进稀疏检索，特别是对于学习的稀疏检索器。我们引入了一种新颖的融合排名框架 Exp4Fuse，它通过间接应用基于零样本 LLM 的查询扩展来增强稀疏检索器的性能。 Exp4Fuse 通过同时考虑两个检索路线进行操作 - 一个基于原始查询，另一个基于 LLM 增强查询。然后，它使用稀疏检索器生成两个排名列表，并使用修改后的倒数排名融合方法融合它们。我们针对领先的基于 LLM 的查询扩展方法和高级检索技术对三个 MS MARCO 相关数据集和七个低资源数据集对 Exp4Fuse 进行了广泛的评估。实验结果表明，Exp4Fuse 不仅在增强稀疏检索器方面超越了现有的基于 LLM 的查询扩展方法，而且在与高级稀疏检索器结合时，在多个基准测试中实现了 SOTA 结果。这凸显了 Exp4Fuse 在改进稀疏检索的查询扩展方面的卓越性能和有效性。

---

## 25. Logical Consistency is Vital: Neural-Symbolic Information Retrieval for Negative-Constraint Queries

**类别**: `Findings`

**作者**: Ganlin Xu, Zhoujia Zhang, Wangyi Mei, Jiaqing Liang, Weijia Lu, Xiaodong Zhang, Zhifei Yang, Xiaofeng Ma, Yanghua Xiao, Deqing Yang

**ID**: 2025.findings-acl.92

**摘要(英文)**:
> Information retrieval plays a crucial role in resource localization. Current dense retrievers retrieve the relevant documents within a corpus via embedding similarities, which compute similarities between dense vectors mainly depending on word co-occurrence between queries and documents, but overlook the real query intents. Thus, they often retrieve numerous irrelevant documents. Particularly in the scenarios of complex queries such as negative-constraint queries, their retrieval performance could be catastrophic. To address the issue, we propose a neuro-symbolic information retrieval method, namely NS-IR, that leverages first-order logic (FOL) to optimize the embeddings of naive natural language by considering the logical consistency between queries and documents. Specifically, we introduce two novel techniques, logic alignment and connective constraint, to re-rank candidate documents, thereby enhancing retrieval relevance. Furthermore, we construct a new datasetNegConstraintincluding negative-constraint queries to evaluate our NS-IR’s performance on such complex IR scenarios. Our extensive experiments demonstrate that NS-IR not only achieves superior zero-shot retrieval performance on web search and low-resource retrieval tasks, but also performs better on negative-constraint queries. Our scource code and dataset are available at https://github.com/xgl-git/NS-IR-main.

**摘要(中文)**:
> 信息检索在资源定位中起着至关重要的作用。当前的密集检索器通过嵌入相似性来检索语料库中的相关文档，其主要取决于查询和文档之间的单词共现来计算密集向量之间的相似性，但忽略了真正的查询意图。因此，他们经常检索大量不相关的文档。特别是在负约束查询等复杂查询的场景下，它们的检索性能可能是灾难性的。为了解决这个问题，我们提出了一种神经符号信息检索方法，即 NS-IR，它利用一阶逻辑（FOL）通过考虑查询和文档之间的逻辑一致性来优化朴素自然语言的嵌入。具体来说，我们引入了两种新颖的技术，逻辑对齐和连接约束，对候选文档进行重新排序，从而增强检索相关性。此外，我们构建了一个新的数据集NegConstraint，包括负约束查询来评估我们的 NS-IR 在此类复杂的 IR 场景中的性能。我们大量的实验表明，NS-IR 不仅在网络搜索和低资源检索任务上实现了卓越的零样本检索性能，而且在负约束查询上也表现得更好。我们的源代码和数据集可在 https://github.com/xgl-git/NS-IR-main 获取。

---

## 26. Improve Rule Retrieval and Reasoning with Self-Induction and RelevanceReEstimate

**类别**: `Findings`

**作者**: Ziyang Huang, Wangtao Sun, Jun Zhao, Kang Liu

**ID**: 2025.findings-acl.286

**摘要(英文)**:
> This paper systematically addresses the challenge of rule retrieval, a crucial yet underexplored area. Vanilla retrieval methods using sparse or dense retrievers to directly search for relevant rules to support downstream reasoning, often suffer from low accuracy. This is primarily due to a significant semantic gap between the instantiated facts in the queries and the abstract representations of the rules. Such misalignment results in suboptimal retrieval quality, which in turn negatively impacts reasoning performance. To overcome these challenges, we propose Self-Induction Augmented Retrieval (SIAR), a novel approach that utilizes Large Language Models (LLMs) to induce potential inferential rules that might offer benefits for reasoning by abstracting the underlying knowledge and logical structure in queries. These induced rules are then used for query augmentation to improve retrieval effectiveness. Additionally, we introduce Rule Relevance ReEstimate (R3), a method that re-estimates the relevance of retrieved rules by assessing whether the abstract knowledge they contain can be instantiated to align with the facts in the queries and the helpfulness for reasoning. Extensive experiments across various settings demonstrate the effectiveness and versatility of our proposed methods.

**摘要(中文)**:
> 本文系统地解决了规则检索的挑战，这是一个至关重要但尚未充分探索的领域。使用稀疏或密集检索器直接搜索相关规则以支持下游推理的普通检索方法通常精度较低。这主要是由于查询中的实例化事实与规则的抽象表示之间存在显着的语义差距。这种不一致会导致检索质量不佳，进而对推理性能产生负面影响。为了克服这些挑战，我们提出了自归纳增强检索（SIAR），这是一种利用大型语言模型（LLM）来归纳潜在推理规则的新颖方法，这些规则可能通过抽象查询中的底层知识和逻辑结构来为推理带来好处。然后将这些归纳规则用于查询增强，以提高检索效率。此外，我们还引入了规则相关性重新估计（R3），这是一种通过评估检索到的规则包含的抽象知识是否可以实例化以与查询中的事实保持一致以及推理的有用性来重新估计检索到的规则的相关性的方法。跨各种设置的广泛实验证明了我们提出的方法的有效性和多功能性。

---

## 27. CA-GAR: Context-Aware Alignment ofLLMGeneration for Document Retrieval

**类别**: `Findings`

**作者**: Heng Yu, Junfeng Kang, Rui Li, Qi Liu, Liyang He, Zhenya Huang, Shuanghong Shen, Junyu Lu

**ID**: 2025.findings-acl.303

**摘要(英文)**:
> Information retrieval has evolved from traditional sparse and dense retrieval methods to approaches driven by large language models (LLMs). Recent techniques, such as Generation-Augmented Retrieval (GAR) and Generative Document Retrieval (GDR), leverage LLMs to enhance retrieval but face key challenges: GAR’s generated content may not always align with the target document corpus, while GDR limits the generative capacity of LLMs by constraining outputs to predefined document identifiers. To address these issues, we propose Context-Aware Generation-Augmented Retrieval (CA-GAR), which enhances LLMs by integrating corpus information into their generation process. CA-GAR optimizes token selection by incorporating relevant document information and leverages a Distribution Alignment Strategy to extract corpus information using a lexicon-based approach. Experimental evaluations on seven tasks from the BEIR benchmark and four non-English languages from Mr.TyDi demonstrate that CA-GAR outperforms existing methods.

**摘要(中文)**:
> 信息检索已经从传统的稀疏和密集检索方法发展到由大型语言模型（LLM）驱动的方法。最近的技术，例如生成增强检索 (GAR) 和生成文档检索 (GDR)，利用 LLM 来增强检索，但面临着关键挑战：GAR 生成的内容可能并不总是与目标文档语料库一致，而 GDR 通过将输出限制为预定义的文档标识符来限制 LLM 的生成能力。为了解决这些问题，我们提出了上下文感知生成增强检索（CA-GAR），它通过将语料库信息集成到其生成过程中来增强大语言模型。 CA-GAR 通过合并相关文档信息来优化标记选择，并利用分布对齐策略使用基于词典的方法提取语料库信息。对 BEIR 基准测试的七项任务和 Mr.TyDi 的四种非英语语言进行的实验评估表明，CA-GAR 的性能优于现有方法。

---

## 28. Optimized Text Embedding Models and Benchmarks forAmharic Passage Retrieval

**类别**: `Findings`

**作者**: Kidist Amde Mekonnen, Yosef Worku Alemneh, Maarten de Rijke

**ID**: 2025.findings-acl.543

**摘要(英文)**:
> Neural retrieval methods using transformer-based pre-trained language models have advanced multilingual and cross-lingual retrieval. However, their effectiveness for low-resource, morphologically rich languages such as Amharic remains underexplored due to data scarcity and suboptimal tokenization. We address this gap by introducing Amharic-specific dense retrieval models based on pre-trained Amharic BERT and RoBERTa backbones. Our proposed RoBERTa-Base-Amharic-Embed model (110M parameters) achieves a 17.6% relative improvement in MRR@10 and a 9.86% gain in Recall@10 over the strongest multilingual baseline, Arctic Embed 2.0 (568M parameters). More compact variants, such as RoBERTa-Medium-Amharic-Embed (42M), remain competitive while being over 13×smaller. Additionally, we train a ColBERT-based late interaction retrieval model that achieves the highest MRR@10 score (0.843) among all evaluated models. We benchmark our proposed models against both sparse and dense retrieval baselines to systematically assess retrieval effectiveness in Amharic. Our analysis highlights key challenges in low-resource settings and underscores the importance of language-specific adaptation. To foster future research in low-resource IR, we publicly release our dataset, codebase, and trained models at https://github.com/kidist-amde/amharic-ir-benchmarks.

**摘要(中文)**:
> 使用基于 Transformer 的预训练语言模型的神经检索方法具有先进的多语言和跨语言检索功能。然而，由于数据稀缺和次优标记化，它们对资源匮乏、形态丰富的语言（如阿姆哈拉语）的有效性仍未得到充分探索。我们通过引入基于预先训练的阿姆哈拉语 BERT 和 RoBERTa 主干的阿姆哈拉语特定密集检索模型来解决这一差距。我们提出的 RoBERTa-Base-Amharic-Embed 模型（110M 参数）与最强的多语言基线 Arctic Embed 2.0（568M 参数）相比，MRR@10 相对提高了 17.6%，Recall@10 提高了 9.86%。更紧凑的变体，例如 RoBERTa-Medium-Amharic-Embed (42M)，在尺寸缩小超过 13 倍的同时仍然保持竞争力。此外，我们训练了一个基于 ColBERT 的后期交互检索模型，该模型在所有评估的模型中获得了最高的 MRR@10 分数 (0.843)。我们根据稀疏和密集检索基线对我们提出的模型进行基准测试，以系统地评估阿姆哈拉语的检索有效性。我们的分析强调了资源匮乏环境中的主要挑战，并强调了特定语言适应的重要性。为了促进低资源 IR 的未来研究，我们在 https://github.com/kidist-amde/amharic-ir-benchmarks 公开发布我们的数据集、代码库和训练模型。

---

## 29. GRAF: Graph Retrieval Augmented by Facts forRomanian Legal Multi-Choice Question Answering

**类别**: `Findings`

**作者**: Cristian-George Craciun, Răzvan-Alexandru Smădu, Dumitru-Clementin Cercel, Mihaela-Claudia Cercel

**ID**: 2025.findings-acl.659

**摘要(英文)**:
> Pre-trained language models have shown remarkable performance in recent years, setting a new paradigm for natural language processing (NLP) research. The legal domain has received some attention from the NLP community, in part due to its textual nature. Question answering (QA) systems represent some of the tasks in this domain. This work explores the legal multiple-choice QA (MCQA) for Romanian. The contribution of this work is multi-fold. We introduce JuRO, the first openly available Romanian legal MCQA dataset, comprising 10,836 questions from three examinations. Along with this dataset, we introduce CROL, an organized corpus of laws comprising a total of 93 distinct documents with their modifications over 763 time spans, which we used for information retrieval techniques in this work. Additionally, we construct Law-RoG, the first graph of legal knowledge for the Romanian language, derived from the aforementioned corpus. Lastly, we propose a novel approach for MCQA, namely Graph Retrieval Augmented by Facts (GRAF), which achieves competitive results with generally accepted state-of-the-art methods and even exceeds them in most settings.

**摘要(中文)**:
> 近年来，预训练语言模型表现出了卓越的性能，为自然语言处理（NLP）研究树立了新的范式。法律领域受到了 NLP 界的一些关注，部分原因是其文本性质。问答 (QA) 系统代表了该领域的一些任务。这项工作探讨了罗马尼亚语的合法多项选择问答 (MCQA)。这项工作的贡献是多方面的。我们引入了 JuRO，这是第一个公开的罗马尼亚法律 MCQA 数据集，包含来自三项考试的 10,836 个问题。除了这个数据集之外，我们还引入了 CROL，这是一个有组织的法律语料库，包含总共 93 个不同的文档，其修改超过 763 个时间跨度，我们在这项工作中将其用于信息检索技术。此外，我们还构建了 Law-RoG，这是源自上述语料库的第一个罗马尼亚语法律知识图。最后，我们提出了一种新的 MCQA 方法，即事实增强图检索（GRAF），它与普遍接受的最先进方法取得了有竞争力的结果，甚至在大多数情况下超过了它们。

---

## 30. Bridging Intuitive Associations and Deliberate Recall: EmpoweringLLMPersonal Assistant with Graph-Structured Long-term Memory

**类别**: `Findings`

**作者**: Yujie Zhang, Weikang Yuan, Zhuoren Jiang

**ID**: 2025.findings-acl.901

**摘要(英文)**:
> Large language models (LLMs)-based personal assistants may struggle to effectively utilize long-term conversational histories.Despite advances in long-term memory systems and dense retrieval methods, these assistants still fail to capture entity relationships and handle multiple intents effectively. To tackle above limitations, we propose **Associa**, a graph-structured memory framework that mimics human cognitive processes. Associa comprises an event-centric memory graph and two collaborative components: **Intuitive Association**, which extracts evidence-rich subgraphs through Prize-Collecting Steiner Tree optimization, and **Deliberating Recall**, which iteratively refines queries for comprehensive evidence collection. Experiments show that Associa significantly outperforms existing methods in retrieval and QA (question and answering) tasks across long-term dialogue benchmarks, advancing the development of more human-like AI memory systems.

**摘要(中文)**:
> 基于大语言模型（LLM）的个人助理可能很难有效地利用长期对话历史。尽管长期记忆系统和密集检索方法取得了进步，但这些助理仍然无法捕获实体关系并有效处理多个意图。为了解决上述限制，我们提出**Associa**，一种模仿人类认知过程的图结构记忆框架。 Associa 包含一个以事件为中心的记忆图和两个协作组件：**直观关联**，它通过奖品收集斯坦纳树优化提取证据丰富的子图，以及**故意回忆**，它迭代地细化全面证据收集的查询。实验表明，Associa 在长期对话基准的检索和 QA（问答）任务中显着优于现有方法，从而推动了更类似于人类的 AI 记忆系统的开发。

---

## 31. DReSD: Dense Retrieval for Speculative Decoding

**类别**: `Findings`

**作者**: Milan Gritta, Huiyin Xue, Gerasimos Lampouras

**ID**: 2025.findings-acl.1017

**摘要(英文)**:
> Speculative decoding (SD) accelerates Large Language Model (LLM) generation by using an efficient draft model to propose the next few tokens, which are verified by the LLM in a single forward call, reducing latency while preserving its outputs. We focus on retrieval-based SD where the draft model retrieves the next tokens from a non-parametric datastore. Sparse retrieval (He et al., 2023, REST), which operates on the surface form of strings, is currently the dominant paradigm due to its simplicity and scalability. However, its effectiveness is limited due to the usage of short contexts and exact string matching. Instead, we introduceDenseRetrieval forSpeculativeDecoding (DReSD), a novel framework that uses approximate nearest neighbour search with contextualised token embeddings to retrieve the most semantically relevant token sequences for SD. Extensive experiments show that DReSD achieves (on average) 87% higher acceptance rates, 65% longer accepted tokens and 19% faster generation speeds compared to sparse retrieval (REST).

**摘要(中文)**:
> 推测性解码 (SD) 通过使用高效的草稿模型提出接下来的几个标记，加速大型语言模型 (LLM) 的生成，这些标记由 LLM 在单次前向调用中进行验证，从而减少延迟，同时保留其输出。我们专注于基于检索的 SD，其中草稿模型从非参数数据存储中检索下一个标记。稀疏检索（He et al., 2023, REST）在字符串的表面形式上运行，由于其简单性和可扩展性，目前是主导范例。然而，由于使用短上下文和精确的字符串匹配，其有效性受到限制。相反，我们引入了 DenseRetrieval for SpeculativeDecoding (DReSD)，这是一种新颖的框架，它使用近似最近邻搜索和上下文标记嵌入来检索 SD 中语义最相关的标记序列。大量实验表明，与稀疏检索 (REST) 相比，DReSD 的接受率（平均）高出 87%，接受的令牌长了 65%，生成速度快了 19%。

---

## 32. Dense Retrieval with Quantity Comparison Intent

**类别**: `Findings`

**作者**: Prayas Agrawal, Nandeesh Kumar K M, Muthusamy Chelliah, Surender Kumar, Soumen Chakrabarti

**ID**: 2025.findings-acl.1220

**摘要(英文)**:
> Pre-trained language models (PLMs) fragment numerals and units that express quantities in arbitrary ways, depending on their subword vocabulary. Consequently, they are unable to contextualize the fragment embeddings well enough to be proficient with dense retrieval in domains like e-commerce and finance. Arithmetic inequality constraints (“laptop under 2 lb”) offer additional challenges. In response, we propose DeepQuant, a dense retrieval system built around a dense multi-vector index, but carefully engineered to elicit and exploit quantities and associated comparison intents. A novel component of our relevance score compares two quantities with compatible units, conditioned on a proposed comparison operator. The uncertain extractions of numerals, units and comparators are marginalized in a suitable manner. On two public and one proprietary e-commerce benchmark, DeepQuant is both faster and more accurate than popular PLMs. It also beats several competitive sparse and dense retrieval systems that do not take special cognizance of quantities.

**摘要(中文)**:
> 预训练语言模型 (PLM) 将数字和单位分段，根据子词词汇以任意方式表达数量。因此，他们无法很好地将片段嵌入置于上下文中，从而无法精通电子商务和金融等领域的密集检索。算术不等式约束（“2 磅以下的笔记本电脑”）带来了额外的挑战。作为回应，我们提出了 DeepQuant，这是一个围绕密集多向量索引构建的密集检索系统，但经过精心设计，可以引出和利用数量以及相关的比较意图。我们的相关性得分的一个新颖组成部分将两个数量与兼容单位进行比较，以建议的比较运算符为条件。数字、单位和比较器的不确定提取以适当的方式被边缘化。在两项公共和一项专有电子商务基准测试中，DeepQuant 比流行的 PLM 更快、更准确。它还击败了一些不特别关注数量的竞争性稀疏和密集检索系统。

---

## 33. Retrieval Models Aren’t Tool-Savvy: Benchmarking Tool Retrieval for Large Language Models

**类别**: `Findings`

**作者**: Zhengliang Shi, Yuhan Wang, Lingyong Yan, Pengjie Ren, Shuaiqiang Wang, Dawei Yin, Zhaochun Ren

**ID**: 2025.findings-acl.1258

**摘要(英文)**:
> Tool learning aims to augment large language models (LLMs) with diverse tools, enabling them to act as agents for solving practical tasks. Due to the limited context length of tool-using LLMs, adopting information retrieval (IR) models to select useful tools from large toolsets is a critical initial step. However, the performance of IR models in tool retrieval tasks remains underexplored and unclear. Most tool-use benchmarks simplify this step by manually pre-annotating a small set of relevant tools for each task, which is far from the real-world scenarios. In this paper, we propose ToolRet, a heterogeneous tool retrieval benchmark comprising 7.6k diverse retrieval tasks, and a corpus of 43k tools, collected from existing datasets. We benchmark six types of models on ToolRet. Surprisingly, even the models with strong performance in conventional IR benchmarks, exhibit poor performance on ToolRet. This low retrieval quality degrades the task pass rate of tool-use LLMs. As a further step, we contribute a large-scale training dataset with over 200k instances, which substantially optimizes the tool retrieval ability of IR models.

**摘要(中文)**:
> 工具学习旨在通过多种工具增强大型语言模型（LLM），使它们能够充当解决实际任务的代理。由于使用工具的大语言模型的上下文长度有限，采用信息检索（IR）模型从大型工具集中选择有用的工具是关键的初始步骤。然而，IR 模型在工具检索任务中的性能仍未得到充分探索和不清楚。大多数工具使用基准测试通过手动为每个任务预先注释一小组相关工具来简化此步骤，这与现实场景相去甚远。在本文中，我们提出了 ToolRet，这是一个异构工具检索基准，包含从现有数据集中收集的 7.6k 个不同检索任务和 43k 个工具的语料库。我们在 ToolRet 上对六种类型的模型进行了基准测试。令人惊讶的是，即使是在传统 IR 基准测试中表现出色的模型，在 ToolRet 上的表现也很差。这种低检索质量降低了工具使用大语言模型的任务通过率。更进一步，我们提供了包含超过 20 万个实例的大规模训练数据集，这大大优化了 IR 模型的工具检索能力。

---

## 34. When Should Dense Retrievers Be Updated in Evolving Corpora? Detecting Out-of-Distribution Corpora UsingGradNormIR

**类别**: `Findings`

**作者**: Dayoon Ko, Jinyoung Kim, Sohyeon Kim, Jinhyuk Kim, Jaehoon Lee, Seonghak Song, Minyoung Lee, Gunhee Kim

**ID**: 2025.findings-acl.1334

**摘要(英文)**:
> Dense retrievers encode texts into embeddings to efficiently retrieve relevant documents from large databases in response to user queries. However, real-world corpora continually evolve, leading to a shift from the original training distribution of the retriever. Without timely updates or retraining, indexing newly emerging documents can degrade retrieval performance for future queries. Thus, identifying when a dense retriever requires an update is critical for maintaining robust retrieval systems. In this paper, we propose a novel task of predicting whether a corpus is out-of-distribution (OOD) relative to a dense retriever before indexing. Addressing this task allows us to proactively manage retriever updates, preventing potential retrieval failures. We introduce GradNormIR, an unsupervised approach that leverages gradient norms to detect OOD corpora effectively. Experiments on the BEIR benchmark demonstrate that GradNormIR enables timely updates of dense retrievers in evolving document collections, significantly enhancing retrieval robustness and efficiency.

**摘要(中文)**:
> 密集检索器将文本编码到嵌入中，以响应用户查询有效地从大型数据库中检索相关文档。然而，现实世界的语料库不断发展，导致检索器的原始训练分布发生变化。如果不及时更新或重新训练，对新出现的文档建立索引可能会降低未来查询的检索性能。因此，识别密集检索器何时需要更新对于维护稳健的检索系统至关重要。在本文中，我们提出了一项新任务，即在索引之前预测语料库相对于密集检索器是否分布不均（OOD）。解决此任务使我们能够主动管理检索器更新，防止潜在的检索失败。我们引入 GradNormIR，这是一种无监督方法，它利用梯度范数来有效地检测 OOD 语料库。 BEIR 基准测试表明，GradNormIR 能够在不断发展的文档集合中及时更新密集检索器，从而显着增强检索的稳健性和效率。

---

## 35. The Million Authors Corpus: A Cross-Lingual and Cross-DomainWikipedia Dataset for Authorship Verification

**类别**: `Findings`

**作者**: Abraham Israeli, Shuai Liu, Jonathan May, David Jurgens

**ID**: 2025.findings-acl.1335

**摘要(英文)**:
> Authorship verification (AV) is a crucial task for applications like identity verification, plagiarism detection, and AI-generated text identification. However, datasets for training and evaluating AV models are primarily in English and primarily in a single domain. This precludes analysis of AV techniques for generalizability and can cause seemingly valid AV solutions to, in fact, rely on topic-based features rather than actual authorship features. To address this limitation, we introduce the Million Authors Corpus (), a novel dataset encompassing contributions from dozens of languages on Wikipedia. It includes only long and contiguous textual chunks taken from Wikipedia edits and links those texts to their authors. includes 60.08M textual chunks, contributed by 1.29M Wikipedia authors. It enables broad-scale cross-lingual and cross-domain AV evaluation to ensure accurate analysis of model capabilities that are not overly optimistic. We provide baseline evaluations using state-of-the-art AV models as well as information retrieval models that are not AV-specific in order to demonstrate ‘s unique cross-lingual and cross-domain ablation capabilities.

**摘要(中文)**:
> 作者身份验证 (AV) 对于身份验证、抄袭检测和人工智能生成的文本识别等应用来说是一项至关重要的任务。然而，用于训练和评估 AV 模型的数据集主要是英文的，并且主要位于单一领域。这妨碍了对 AV 技术的普遍性分析，并可能导致看似有效的 AV 解决方案实际上依赖于基于主题的特征，而不是实际的作者特征。为了解决这个限制，我们引入了百万作者语料库 (Million Authors Corpus)，这是一个新颖的数据集，包含维基百科上数十种语言的贡献。它仅包含从维基百科编辑中获取的长且连续的文本块，并将这些文本链接到其作者。包括 6008 万个文本块，由 129 万个维基百科作者贡献。它能够实现大规模的跨语言、跨领域的AV评估，以确保准确分析不太乐观的模型能力。我们使用最先进的 AV 模型以及非 AV 特定的信息检索模型提供基线评估，以展示独特的跨语言和跨域消融能力。

---

## 36. Rubic2: Ensemble Model forRussian Lemmatization

**类别**: `Workshop-BSNLP`

**作者**: Ilia Afanasev, Anna Glazkova, Olga Lyashevskaya, Dmitry Morozov, Ivan Smal, Natalia Vlasova

**ID**: 2025.bsnlp-1.18

**摘要(英文)**:
> Pre-trained language models have significantly advanced natural language processing (NLP), particularly in analyzing languages with complex morphological structures. This study addresses lemmatization for the Russian language, the errors in which can critically affect the performance of information retrieval, question answering, and other tasks. We present the results of experiments on generative lemmatization using pre-trained language models. Our findings demonstrate that combining generative models with the existing solutions allows achieving performance that surpasses current results for the lemmatization of Russian. This paper also introduces Rubic2, a new ensemble approach that combines the generative BART-base model, fine-tuned on a manually annotated data set of 2.1 million tokens, with the neural model called Rubic which is currently used for morphological annotation and lemmatization in the Russian National Corpus. Extensive experiments show that Rubic2 outperforms current solutions for the lemmatization of Russian, offering superior results across various text domains and contributing to advancements in NLP applications.

**摘要(中文)**:
> 预训练的语言模型具有显着先进的自然语言处理（NLP），特别是在分析具有复杂形态结构的语言方面。这项研究解决了俄语的词形还原问题，其中的错误可能严重影响信息检索、问答和其他任务的表现。我们展示了使用预训练语言模型进行生成词形还原的实验结果。我们的研究结果表明，将生成模型与现有解决方案相结合可以实现超越当前俄语词形还原结果的性能。本文还介绍了 Rubic2，这是一种新的集成方法，它结合了基于 BART 的生成模型（在 210 万个标记的手动注释数据集上进行了微调）和名为 Rubic 的神经模型，该模型目前在俄罗斯国家语料库中用于形态注释和词形还原。大量实验表明，Rubic2 的性能优于当前俄语词形还原的解决方案，在各种文本领域提供了卓越的结果，并为 NLP 应用的进步做出了贡献。

---

## 37. Portuguese Automated Fact-checking: Information Retrieval with Claim extraction

**类别**: `Workshop-FEVER`

**作者**: Juliana Gomes, Eduardo Garcia, Arlindo Rodrigues Galvão Filho

**ID**: 2025.fever-1.3

**摘要(英文)**:
> Current Portuguese Automated Fact-Checking (AFC) research often relies on datasets lacking integrated external evidence crucial for comprehensive verification. This study addresses this gap by systematically enriching Portuguese misinformation datasets. We retrieve web evidence by simulating user information-seeking behavior, guided by core claims extracted using Large Language Models (LLMs). Additionally, we apply a semi-automated validation framework to enhance dataset reliability.Our analysis reveals that inherent dataset characteristics impact data properties, evidence retrieval, and AFC model performance. While enrichment generally improves detection, its efficacy varies, influenced by challenges such as self-reinforcing online misinformation and API limitations. This work contributes enriched datasets, associating original texts with retrieved evidence and LLM-extracted claims, to foster future evidence-based fact-checking research.The code and enriched data for this study is available at https://github.com/ju-resplande/pt_afc.

**摘要(中文)**:
> 目前的葡萄牙自动事实核查（AFC）研究通常依赖于缺乏对于全面验证至关重要的综合外部证据的数据集。这项研究通过系统地丰富葡萄牙错误信息数据集来解决这一差距。我们通过模拟用户信息搜索行为来检索网络证据，并以使用大型语言模型（LLM）提取的核心声明为指导。此外，我们应用半自动验证框架来增强数据集可靠性。我们的分析表明，固有的数据集特征会影响数据属性、证据检索和 AFC 模型性能。虽然丰富通常可以改善检测，但其功效各不相同，受到自我强化的在线错误信息和 API 限制等挑战的影响。这项工作提供了丰富的数据集，将原始文本与检索到的证据和大语言模型提取的主张相关联，以促进未来基于证据的事实核查研究。本研究的代码和丰富数据可在 https://github.com/ju-resplande/pt_afc 上获取。

---

## 38. Exploring Semantic Filtering Heuristics For Efficient Claim Verification

**类别**: `Workshop-FEVER`

**作者**: Max Upravitelev, Premtim Sahitaj, Arthur Hilbert, Veronika Solopova, Jing Yang, Nils Feldhus, Tatiana Anikina, Simon Ostermann, Vera Schmitt

**ID**: 2025.fever-1.17

**摘要(英文)**:
> Given the limited computational and financial resources of news agencies, real-life usage of fact-checking systems requires fast response times. For this reason, our submission to the FEVER-8 claim verification shared task focuses on optimizing the efficiency of such pipelines built around subtasks such as evidence retrieval and veracity prediction. We propose the Semantic Filtering for Efficient Fact Checking (SFEFC) strategy, which is inspired by the FEVER-8 baseline and designed with the goal of reducing the number of LLM calls and other computationally expensive subroutines. Furthermore, we explore the reuse of cosine similarities initially calculated within a dense retrieval step to retrieve the top 10 most relevant evidence sentence sets. We use these sets for semantic filtering methods based on similarity scores and create filters for particularly hard classification labels “Not Enough Information” and “Conflicting Evidence/Cherrypicking” by identifying thresholds for potentially relevant information and the semantic variance within these sets. Compared to the parallelized FEVER-8 baseline, which takes 33.88 seconds on average to process a claim according to the FEVER-8 shared task leaderboard, our non-parallelized system remains competitive in regard to AVeriTeC retrieval scores while reducing the runtime to 7.01 seconds, achieving the fastest average runtime per claim.

**摘要(中文)**:
> 鉴于新闻机构的计算和财务资源有限，事实核查系统的实际使用需要快速的响应时间。因此，我们提交给 FEVER-8 声明验证共享任务的重点是优化围绕证据检索和准确性预测等子任务构建的此类管道的效率。我们提出了高效事实检查的语义过滤 (SFEFC) 策略，该策略受到 FEVER-8 基线的启发，其设计目标是减少 LLM 调用和其他计算成本较高的子例程的数量。此外，我们探索了在密集检索步骤中最初计算的余弦相似度的重用，以检索前 10 个最相关的证据句子集。我们将这些集合用于基于相似性分数的语义过滤方法，并通过识别这些集合中潜在相关信息的阈值和语义方差，为特别硬的分类标签“信息不足”和“冲突证据/择优挑选”创建过滤器。与并行化的 FEVER-8 基线（根据 FEVER-8 共享任务排行榜平均需要 33.88 秒来处理索赔）相比，我们的非并行化系统在 AVeriTeC 检索分数方面仍然具有竞争力，同时将运行时间减少到 7.01 秒，实现了每个索赔的最快平均运行时间。

---

## 39. Temporal Information Retrieval via Time-Specifier Model Merging

**类别**: `Workshop-KnowLLM`

**作者**: SeungYoon Han, Taeho Hwang, Sukmin Cho, Soyeong Jeong, Hoyun Song, Huije Lee, Jong C. Park

**ID**: 2025.knowllm-1.1

**摘要(英文)**:
> The rapid expansion of digital information and knowledge across structured and unstructured sources has heightened the importance of Information Retrieval (IR). While dense retrieval methods have substantially improved semantic matching for general queries, they consistently underperform on queries with explicit temporal constraints–often those containing numerical expressions and time specifiers such as “in 2015.” Existing approaches to Temporal Information Retrieval (TIR) improve temporal reasoning but often suffer from catastrophic forgetting, leading to reduced performance on non-temporal queries. To address this, we propose Time-Specifier Model Merging (TSM), a novel method that enhances temporal retrieval while preserving accuracy on non-temporal queries. TSM trains specialized retrievers for individual time specifiers and merges them into a unified model, enabling precise handling of temporal constraints without compromising non-temporal retrieval. Extensive experiments on both temporal and non-temporal datasets demonstrate that TSM significantly improves performance on temporally constrained queries while maintaining strong results on non-temporal queries, consistently outperforming other training methods. Our code is available at https://github.com/seungyoonee/TSM.

**摘要(中文)**:
> 结构化和非结构化来源的数字信息和知识的快速扩展提高了信息检索 (IR) 的重要性。虽然密集检索方法显着改善了一般查询的语义匹配，但它们在具有显式时间约束的查询上始终表现不佳——通常是那些包含数字表达式和时间说明符的查询，例如“2015 年”。现有的时态信息检索（TIR）方法改进了时态推理，但经常遭受灾难性遗忘，导致非时态查询的性能下降。为了解决这个问题，我们提出了时间说明符模型合并（TSM），这是一种增强时间检索的新方法，同时保持非时间查询的准确性。 TSM 为各个时间说明符训练专门的检索器，并将它们合并到一个统一的模型中，从而能够精确处理时间约束，而不会影响非时间检索。对时态和非时态数据集的大量实验表明，TSM 显着提高了时态约束查询的性能，同时保持非时态查询的强劲结果，始终优于其他训练方法。我们的代码可在 https://github.com/seungyoonee/TSM 获取。

---

## 40. FORTIFY: Generative Model Fine-tuning withORPOforReTrieval Expansion ofInFormalNoisYText

**类别**: `Workshop-MAGMAR`

**作者**: Dan DeGenaro, Eugene Yang, David Etter, Cameron Carpenter, Kate Sanders, Alexander Martin, Kenton Murray, Reno Kriz

**ID**: 2025.magmar-1.13

**摘要(英文)**:
> Despite recent advancements in neural retrieval, representing text fragments or phrases with proper contextualized embeddings is still challenging. Particularly in video retrieval, where documents are text extracted through OCR from the frames or ASR from audio tracks, the textual content is rarely complete sentences but only a bag of phrases. In this work, we propose FORTIFY, a generative model fine-tuning approach for noisy document rewriting and summarization, to improve the downstream retrieval effectiveness. By experimenting on MultiVENT 2.0, an informational video retrieval benchmark, we show Llama fine-tuned with FORTIFY provides an effective document expansion, leading to a 30% improvement over prompting an out-of-box Llama model on nDCG@10. Zero-shot transferring the model tailored for MultiVENT 2.0 to two out-of-distribution datasets still demonstrates competitive retrieval effectiveness to other document preprocessing alternatives.

**摘要(中文)**:
> 尽管神经检索最近取得了进展，但用适当的上下文嵌入来表示文本片段或短语仍然具有挑战性。特别是在视频检索中，文档是通过 OCR 从帧中提取的文本或通过 ASR 从音轨中提取的文本，文本内容很少是完整的句子，而只是一组短语。在这项工作中，我们提出了 FORTIFY，一种用于噪声文档重写和摘要的生成模型微调方法，以提高下游检索效率。通过在信息视频检索基准 MultiVENT 2.0 上进行实验，我们发现使用 FORTIFY 进行微调的 Llama 提供了有效的文档扩展，与在 nDCG@10 上提示开箱即用的 Llama 模型相比，性能提高了 30%。将针对 MultiVENT 2.0 定制的模型零样本转移到两个分布外的数据集仍然表现出与其他文档预处理替代方案相比具有竞争性的检索效果。

---

## 41. TheClimateCheck Shared Task: Scientific Fact-Checking of Social Media Claims about Climate Change

**类别**: `Workshop-SDP`

**作者**: Raia Abu Ahmad, Aida Usmanova, Georg Rehm

**ID**: 2025.sdp-1.24

**摘要(英文)**:
> Misinformation in public discourse on global and significant issues like climate change is often facilitated through social media. However, current systems do not address fact-checking climate-related claims against trustworthy, evidence-based sources, such as scientific publications. We organised the ClimateCheck shared task at the 5th Scholarly Document Processing (SDP) Workshop, co-located with ACL 2025 in Vienna, Austria. The task featured two subtasks: 1. Abstracts retrieval given a claim, and 2. Claim verification based on the retrieved abstract. ClimateCheck had 27 registered users with active participation from 13 teams, ten of which submitted results for the first subtask and three for the second. The winning team achieved a Recall@10 score of 0.66 and a Binary Preference score of 0.49 for subtask I, and an F1 score of 0.73 for subtask II. Their method combined sparse retrieval using BM25, an ensemble of fine-tuned cross-encoder models using BGE-rerankers, and large language models for classification.

**摘要(中文)**:
> 关于气候变化等全球重大问题的公共讨论中的错误信息往往是通过社交媒体传播的。然而，当前的系统无法针对可靠的、基于证据的来源（例如科学出版物）对与气候相关的主张进行事实核查。我们在第五届学术文献处理 (SDP) 研讨会上组织了 ClimateCheck 共享任务，该研讨会与 ACL 2025 同期在奥地利维也纳举行。该任务有两个子任务：1. 给定声明的摘要检索，2. 基于检索到的摘要的声明验证。 ClimateCheck 拥有 27 个注册用户，来自 13 个团队的积极参与，其中 10 个团队提交了第一个子任务的结果，另外 3 个团队提交了第二个子任务的结果。获胜团队的子任务 I 的 Recall@10 得分为 0.66，二元偏好得分为 0.49，子任务 II 的 F1 得分为 0.73。他们的方法结合了使用 BM25 的稀疏检索、使用 BGE 重新排序器的微调交叉编码器模型的集合以及用于分类的大型语言模型。

---

## 42. WinningClimateCheck: A Multi-Stage System withBM25,BGE-Reranker Ensembles, andLLM-based Analysis for Scientific Abstract Retrieval

**类别**: `Workshop-SDP`

**作者**: Junjun Wang, Kunlong Chen, Zhaoqun Chen, Peng He, Wenlu Zheng

**ID**: 2025.sdp-1.25

**摘要(英文)**:
> The ClimateCheck shared task addresses the critical challenge of grounding social media claims about climate change in scientific literature. This paper details our winning approach. For abstract retrieval, we propose a multi-stage pipeline: (1) initial candidate generation from a corpus of ~400,000 abstracts using BM25; (2) fine-grained reranking of these candidates using an ensemble of BGE-Reranker cross-encoder models, fine-tuned with a specialized training set incorporating both random and hard negative samples; and (3) final list selection based on an RRF-ensembled score. For the verification aspect, we leverage Gemini 2.5 Pro to classify the relationship (Supports, Refutes, Not Enough Information) between claims and the retrieved abstracts, guided by carefully engineered prompts. Our system achieved first place in both subtasks, demonstrating the efficacy of combining robust sparse retrieval, powerful neural rerankers, strategic negative sampling, and LLM-based semantic analysis for connecting social media discourse to scientific evidence. Part of the example code:https://anonymous.4open.science/r/climatecheck_solution-1120

**摘要(中文)**:
> ClimateCheck 共享任务解决了将社交媒体有关气候变化的主张纳入科学文献的关键挑战。本文详细介绍了我们的获胜方法。对于摘要检索，我们提出了一个多阶段管道：（1）使用 BM25 从约 400,000 个摘要的语料库中生成初始候选者； (2) 使用 BGE-Reranker 交叉编码器模型集合对这些候选者进行细粒度重新排序，并使用包含随机样本和硬负样本的专门训练集进行微调； (3) 基于 RRF 综合评分的最终列表选择。对于验证方面，我们利用 Gemini 2.5 Pro 在精心设计的提示的指导下对主张和检索到的摘要之间的关系（支持、反驳、信息不足）进行分类。我们的系统在这两个子任务中都取得了第一名，展示了将稳健的稀疏检索、强大的神经重新排序、策略负采样和基于大语言模型的语义分析相结合，将社交媒体话语与科学证据联系起来的功效。部分示例代码：https://anonymous.4open.science/r/climatecheck_solution-1120

---

## 43. AlexUNLP-FMTatClimateCheck Shared Task: Hybrid Retrieval with Adaptive Similarity Graph-based Reranking for Climate-related Social Media Claims Fact Checking

**类别**: `Workshop-SDP`

**作者**: Mahmoud Fathallah, Nagwa El-Makky, Marwan Torki

**ID**: 2025.sdp-1.27

**摘要(英文)**:
> In this paper, we describe our work done in the ClimateCheck shared task at the Scholarly document processing (SDP) workshop, ACL 2025. We focused on subtask 1: Abstracts Retrieval. The task involved retrieving relevant paper abstracts from a large corpus to verify claims made on social media about climate change. We explored various retrieval and ranking techniques, including fine-tuning transformer-based dense retrievers, sparse retrieval methods, and reranking using cross-encoder models. Our final and best-performing system utilizes a hybrid retrieval approach combining BM25 sparse retrieval and a fine-tuned Stella model for dense retrieval, followed by an MSMARCO trained minilm cross-encoder model for ranking. We adapt an iterative graph-based re-ranking approach leveraging a document similarity graph built for the document corpus to dynamically update candidate pool for reranking. This system achieved a score of 0.415 on the final test set for subtask 1, securing 3rd place in the final leader board.

**摘要(中文)**:
> 在本文中，我们描述了我们在学术文档处理 (SDP) 研讨会 ACL 2025 的 ClimateCheck 共享任务中完成的工作。我们重点关注子任务 1：摘要检索。该任务涉及从大型语料库中检索相关论文摘要，以验证社交媒体上有关气候变化的主张。我们探索了各种检索和排序技术，包括微调基于 Transformer 的密集检索器、稀疏检索方法以及使用交叉编码器模型进行重新排序。我们最终且性能最佳的系统采用混合检索方法，结合了 BM25 稀疏检索和用于密集检索的微调 Stella 模型，然后是 MSMARCO 训练的微型交叉编码器模型用于排名。我们采用基于迭代图的重新排名方法，利用为文档语料库构建的文档相似性图来动态更新用于重新排名的候选池。该系统在子任务 1 的最终测试集上取得了 0.415 的分数，在最终排行榜上获得了第三名。

---

## 44. ClimateCheck2025: Multi-Stage Retrieval MeetsLLMs for Automated Scientfic Fact-Checking

**类别**: `Workshop-SDP`

**作者**: Anna Kiepura, Jessica Lam

**ID**: 2025.sdp-1.28

**摘要(英文)**:
> Misinformation on social media poses significant risks, particularly when it concerns critical scientific issues such as climate change. One promising direction for mitigation is the development of automated fact-checking systems that verify claims against authoritative scientific sources. In this work, we present our solution to the ClimateCheck2025 shared task, which involves retrieving and classifying scientific abstracts as evidence for or against given claims. Our system is built around a multi-stage hybrid retrieval pipeline that integrates lexical, sparse neural, and dense neural retrievers, followed by cross-encoder and large language model (LLM)-based reranking stages. For stance classification, we employ prompting strategies with LLMs to determine whether a retrieved abstract supports, refutes, or provides no evidence for a given claim. Our approach achieves the second-highest overall score across both subtasks of the benchmark and significantly surpasses the official baseline by 53.79% on average across Recall@2, Recall@5, Recall@10, and B-Pref. Notably, we achieve state-of-the-art performance in Recall@2. These results highlight the effectiveness of combining structured retrieval architectures with the emergent reasoning capabilities of LLMs for scientific fact verification, especially in domains where reliable human annotation is scarce and timely intervention is essential.

**摘要(中文)**:
> 社交媒体上的错误信息会带来重大风险，特别是当它涉及气候变化等关键科学问题时。缓解问题的一个有希望的方向是开发自动事实检查系统，以验证针对权威科学来源的主张。在这项工作中，我们提出了 ClimateCheck2025 共享任务的解决方案，其中涉及对科学摘要进行检索和分类，作为支持或反对给定主张的证据。我们的系统是围绕多阶段混合检索管道构建的，该管道集成了词汇检索器、稀疏神经检索器和密集神经检索器，然后是跨编码器和基于大语言模型（LLM）的重新排序阶段。对于立场分类，我们采用大语言模型的提示策略来确定检索到的摘要是否支持、反驳或没有为给定的主张提供证据。我们的方法在基准测试的两个子任务中均取得了第二高的总分，并且在 Recall@2、Recall@5、Recall@10 和 B-Pref 中平均显着超出官方基线 53.79%。值得注意的是，我们在 Recall@2 中实现了最先进的性能。这些结果凸显了将结构化检索架构与大语言模型的新兴推理能力相结合以进行科学事实验证的有效性，特别是在可靠的人工注释稀缺且及时干预至关重要的领域。

---

## 45. GIL-IIMASUNAMatSemEval-2025 Task 3:MeSSI: A Multilmodule System to detect hallucinated Segments in trivia-like Inquiries.

**类别**: `Workshop-SemEval`

**作者**: Francisco López-Ponce, Karla Salas-Jimenez, Adrián Juárez-Pérez, Diego Hernández-Bustamante, Gemma Bel-Enguix, Helena Gómez-Adorno

**ID**: 2025.semeval-1.208

**摘要(英文)**:
> We present MeSSI, a multi-module system applied to SemEval 2025’s task 3: Mu-SHROOM. Our system tags questions in order to obtain semantic relevant terms that are used as information retrieval characteristics. Said characteristics serve as extraction terms for Wikipedia pages that are in turn processed to generate gold standard texts used in a hallucination evaluation system. A PoST-based entity comparison was implemented to contrast the test dataset sentences with the corresponding generated gold standards, wich in turn was the main criteria to tag hallucinations, partitioned in soft labels and hard labels. This method was tested in Spanish and English, finishing 18th and 19th respectively on the IoU based ranking.

**摘要(中文)**:
> 我们展示了 MeSSI，这是一个应用于 SemEval 2025 任务 3：Mu-SHROOM 的多模块系统。我们的系统标记问题以获得用作信息检索特征的语义相关术语。所述特征用作维基百科页面的提取术语，这些术语反过来被处理以生成用于幻觉评估系统的黄金标准文本。实施基于 PoST 的实体比较，将测试数据集句子与相应生成的黄金标准进行对比，这反过来又是标记幻觉的主要标准，分为软标签和硬标签。该方法用西班牙语和英语进行了测试，在基于 IoU 的排名中分别排名第 18 和第 19。

---

## 46. CAIDASatSemEval-2025 Task 7: Enriching Sparse Datasets withLLM-Generated Content for Improved Information Retrieval

**类别**: `Workshop-SemEval`

**作者**: Dominik Benchert, Severin Meßlinger, Sven Goller, Jonas Kaiser, Jan Pfister, Andreas Hotho

**ID**: 2025.semeval-1.214

**摘要(英文)**:
> The focus of SemEval-2024 Task 7 is the retrieval of relevant fact-checks for social media posts across multiple languages. We approach this task with an enhanced bi-encoder retrieval setup, which is designed to match social media posts with relevant fact-checks using synthetic data from LLMs. We explored and analyzed two main approaches for generating synthetic posts. Either based on existing fact-checks or on existing posts. Our approach achieved an S@10 score of 89.53% for the monolingual task and 74.48% for the crosslingual task, ranking 16th out of 28 and 13th out of 29, respectively. Without data augmentation, scores would have been 88.69 (17th) and 72.93 (15th).

**摘要(中文)**:
> SemEval-2024 任务 7 的重点是检索跨多种语言的社交媒体帖子的相关事实检查。我们通过增强的双编码器检索设置来完成此任务，该设置旨在使用大语言模型的合成数据将社交媒体帖子与相关事实检查相匹配。我们探索并分析了生成合成帖子的两种主要方法。基于现有的事实核查或现有的帖子。我们的方法在单语言任务中获得了 89.53% 的 S@10 分数，在跨语言任务中获得了 74.48% 的 S@10 分数，分别在 28 个任务中排名第 16 位，在 29 个任务中排名第 13 位。如果没有数据增强，分数将为 88.69（第 17 位）和 72.93（第 15 位）。

---

## 47. ScottyPoseidon atSemEval-2025 Task 8:LLM-Driven Code Generation for Zero-Shot Question Answering on Tabular Data

**类别**: `Workshop-SemEval`

**作者**: Raghav R, Adarsh Prakash Vemali, Darpan Aswal, Rahul Ramesh, Ayush Bhupal

**ID**: 2025.semeval-1.285

**摘要(英文)**:
> Tabular Question Answering (QA) is crucial for enabling automated reasoning over structured data, facilitating efficient information retrieval and decision-making across domains like finance, healthcare, and scientific research. This paper describes our system for the SemEval 2025 Task 8 on Question Answering over Tabular Data, specifically focusing on the DataBench QA and DataBench Lite QA subtasks. Our approach involves generating Python code using Large Language Models (LLMs) to extract answers from tabular data in a zero-shot setting. We investigate both multi-step Chain-of-Thought (CoT) and unified LLM approaches, where the latter demonstrates superior performance by minimizing error propagation and enhancing system stability. Our system prioritizes computational efficiency and scalability by minimizing the input data provided to the LLM, optimizing its ability to contextualize information effectively. We achieve this by sampling a minimal set of rows from the dataset and utilizing external execution with Python and Pandas to maintain efficiency. Our system achieved the highest accuracy amongst all small open-source models, ranking 1st in both subtasks.

**摘要(中文)**:
> 表格问答 (QA) 对于实现结构化数据的自动推理、促进金融、医疗保健和科学研究等领域的高效信息检索和决策至关重要。本文介绍了我们针对表格数据问答的 SemEval 2025 任务 8 的系统，特别关注 DataBench QA 和 DataBench Lite QA 子任务。我们的方法涉及使用大型语言模型 (LLM) 生成 Python 代码，以零样本设置从表格数据中提取答案。我们研究了多步骤思维链（CoT）和统一的大语言模型方法，后者通过最小化错误传播和增强系统稳定性展示了卓越的性能。我们的系统通过最大限度地减少提供给大语言模型的输入数据，优化其有效地将信息情境化的能力，优先考虑计算效率和可扩展性。我们通过从数据集中采样最少的行集并利用 Python 和 Pandas 的外部执行来保持效率来实现这一目标。我们的系统在所有小型开源模型中实现了最高的准确度，在两个子任务中均排名第一。

---

## 48. TartuNLPatSemEval-2025 Task 5: Subject Tagging as Two-Stage Information Retrieval

**类别**: `Workshop-SemEval`

**作者**: Aleksei Dorkin, Kairit Sirts

**ID**: 2025.semeval-1.319

**摘要(英文)**:
> We present our submission to the Task 5 of SemEval-2025. We frame the task as an information retrieval problem, where the document content is used to retrieve subject tags from a large subject taxonomy. We leverage two types of encoder models to build a two-stage information retrieval system—a bi-encoder for coarse-grained candidate extraction at the first stage, and a cross-encoder for fine-grained re-ranking at the second stage.

**摘要(中文)**:
> 我们向 SemEval-2025 的任务 5 提交了我们的意见。我们将该任务构建为信息检索问题，其中文档内容用于从大型主题分类中检索主题标签。我们利用两种类型的编码器模型来构建一个两阶段的信息检索系统——一个用于第一阶段粗粒度候选提取的双编码器，以及一个用于第二阶段细粒度重新排序的交叉编码器。

## 检索增强生成 (211 篇)

---

## 49. HybGRAG: Hybrid Retrieval-Augmented Generation on Textual and Relational Knowledge Bases

**类别**: `主会-长文`

**作者**: Meng-Chieh Lee, Qi Zhu, Costas Mavromatis, Zhen Han, Soji Adeshina, Vassilis N. Ioannidis, Huzefa Rangwala, Christos Faloutsos

**ID**: 2025.acl-long.43

**摘要(英文)**:
> Given a semi-structured knowledge base (SKB), where text documents are interconnected by relations, how can we effectively retrieve relevant information to answer user questions?Retrieval-Augmented Generation (RAG) retrieves documents to assist large language models (LLMs) in question answering; while Graph RAG (GRAG) uses structured knowledge bases as its knowledge source.However, many questions require both textual and relational information from SKB — referred to as “hybrid” questions — which complicates the retrieval process and underscores the need for a hybrid retrieval method that leverages both information.In this paper, through our empirical analysis, we identify key insights that show why existing methods may struggle with hybrid question answering (HQA) over SKB. Based on these insights, we propose HybGRAG for HQA, consisting of a retriever bank and a critic module, with the following advantages:1. Agentic, it automatically refines the output by incorporating feedback from the critic module, 2. Adaptive, it solves hybrid questions requiring both textual and relational information with the retriever bank,3. Interpretable, it justifies decision making with intuitive refinement path, and4. Effective, it surpasses all baselines on HQA benchmarks.In experiments on the STaRK benchmark, HybGRAG achieves significant performance gains, with an average relative improvement in Hit@1 of 51%.

**摘要(中文)**:
> 给定半结构化知识库（SKB），其中文本文档通过关系相互连接，我们如何有效地检索相关信息来回答用户问题？检索增强生成（RAG）检索文档以辅助大型语言模型（LLM）进行问答；而图 RAG (GRAG) 使用结构化知识库作为其知识源。然而，许多问题需要来自 SKB 的文本和关系信息（称为“混合”问题），这使检索过程变得复杂，并强调了对利用这两种信息的混合检索方法的需要。在本文中，通过我们的实证分析，我们确定了一些关键见解，这些见解说明了为什么现有方法可能难以与 SKB 上的混合问答 (HQA) 相媲美。基于这些见解，我们提出了用于 HQA 的 HybGRAG，由检索器库和批评者模块组成，具有以下优点：1。代理，它通过合并评论家模块的反馈来自动细化输出，2。自适应，它解决需要检索器库的文本和关系信息的混合问题，3。可解释，它通过直观的细化路径证明决策的合理性，以及4。有效，它超越了 HQA 基准的所有基线。在 STaRK 基准的实验中，HybGRAG 实现了显着的性能提升，Hit@1 的平均相对改进为 51%。

---

## 50. EvoWiki: EvaluatingLLMs on Evolving Knowledge

**类别**: `主会-长文`

**作者**: Wei Tang, Yixin Cao, Yang Deng, Jiahao Ying, Bo Wang, Yizhe Yang, Yuyue Zhao, Qi Zhang, Xuanjing Huang, Yu-Gang Jiang, Yong Liao

**ID**: 2025.acl-long.47

**摘要(英文)**:
> Knowledge utilization is a critical aspect of LLMs, and understanding how they adapt to evolving knowledge is essential for their effective deployment. However, existing benchmarks are predominantly static, failing to capture the evolving nature of LLMs and knowledge, leading to inaccuracies and vulnerabilities such as contamination. In this paper, we introduce EvoWiki, an evolving dataset designed to reflect knowledge evolution by categorizing information into stable, evolved, and uncharted states. EvoWiki is fully auto-updatable, enabling precise evaluation of continuously changing knowledge and newly released LLMs. Through experiments with Retrieval-Augmented Generation (RAG) and Continual Learning (CL), we evaluate how effectively LLMs adapt to evolving knowledge. Our results indicate that current models often struggle with evolved knowledge, frequently providing outdated or incorrect responses. Moreover, the dataset highlights a synergistic effect between RAG and CL, demonstrating their potential to better adapt to evolving knowledge. EvoWiki provides a robust benchmark for advancing future research on the knowledge evolution capabilities of large language models.

**摘要(中文)**:
> 知识利用是大语言模型的一个重要方面，了解它们如何适应不断发展的知识对于其有效部署至关重要。然而，现有的基准主要是静态的，无法捕捉大语言模型和知识不断变化的性质，导致不准确和漏洞，例如污染。在本文中，我们介绍了 EvoWiki，这是一个不断发展的数据集，旨在通过将信息分类为稳定、进化和未知状态来反映知识的演变。 EvoWiki 完全可自动更新，能够精确评估不断变化的知识和新发布的大语言模型。通过检索增强生成（RAG）和持续学习（CL）的实验，我们评估了大语言模型如何有效地适应不断发展的知识。我们的结果表明，当前的模型经常与进化的知识作斗争，经常提供过时或不正确的响应。此外，该数据集强调了 RAG 和 CL 之间的协同效应，展示了它们更好地适应不断发展的知识的潜力。 EvoWiki 为推进大型语言模型知识演化能力的未来研究提供了一个强大的基准。

---

## 51. Re-identification of De-identified Documents with Autoregressive Infilling

**类别**: `主会-长文`

**作者**: Lucas Georges Gabriel Charpentier, Pierre Lison

**ID**: 2025.acl-long.60

**摘要(英文)**:
> Documents revealing sensitive information about individuals must typically be de-identified. This de-identification is often done by masking all mentions of personally identifiable information (PII), thereby making it more difficult to uncover the identity of the person(s) in question. To investigate the robustness of de-identification methods, we present a novel, RAG-inspired approach that attempts the reverse process of re-identification based on a database of documents representing background knowledge. Given a text in which personal identifiers have been masked, the re-identification proceeds in two steps. A retriever first selects from the background knowledge passages deemed relevant for the re-identification. Those passages are then provided to an infilling model which seeks to infer the original content of each text span. This process is repeated until all masked spans are replaced. We evaluate the re-identification on three datasets (Wikipedia biographies, court rulings and clinical notes). Results show that (1) as many as 80% of de-identified text spans can be successfully recovered and (2) the re-identification accuracy increases along with the level of background knowledge.

**摘要(中文)**:
> 泄露个人敏感信息的文件通常必须进行去识别化处理。这种去识别化通常是通过掩盖所有提及的个人身份信息 (PII) 来完成的，从而使揭露相关人员的身份变得更加困难。为了研究去识别方法的稳健性，我们提出了一种受 RAG 启发的新颖方法，该方法尝试基于代表背景知识的文档数据库进行重新识别的逆过程。给定一个个人标识符被屏蔽的文本，重新识别分两个步骤进行。检索器首先从背景知识中选择被认为与重新识别相关的段落。然后将这些段落提供给填充模型，该模型旨在推断每个文本范围的原始内容。重复此过程，直到替换所有屏蔽跨度。我们评估三个数据集（维基百科传记、法院裁决和临床记录）的重新识别。结果表明：(1) 多达 80% 的去识别文本跨度可以成功恢复；(2) 重新识别的准确性随着背景知识水平的提高而提高。

---

## 52. Real-time Factuality Assessment from Adversarial Feedback

**类别**: `主会-长文`

**作者**: Sanxing Chen, Yukun Huang, Bhuwan Dhingra

**ID**: 2025.acl-long.81

**摘要(英文)**:
> We show that existing evaluations for assessing the factuality of news from conventional sources, such as claims on fact-checking websites, result in high accuracies over time for LLM-based detectors—even after their knowledge cutoffs. This suggests that recent popular false information from such sources can be easily identified due to its likely presence in pre-training/retrieval corpora or the emergence of salient, yet shallow, patterns in these datasets. Instead, we argue that a proper factuality evaluation dataset should test a model’s ability to reason about current events by retrieving and reading related evidence. To this end, we develop a novel pipeline that leverages natural language feedback from a RAG-based detector to iteratively modify real-time news into deceptive variants that challenge LLMs. Our iterative rewrite decreases the binary classification ROC-AUC by an absolute 17.5 percent for a strong RAG-based GPT-4o detector. Our experiments reveal the important role of RAG in both evaluating and generating challenging news examples, as retrieval-free LLM detectors are vulnerable to unseen events and adversarial attacks, while feedback from RAG-based evaluation helps discover more deceitful patterns.

**摘要(中文)**:
> 我们表明，现有的用于评估传统来源新闻真实性的评估，例如事实核查网站上的声明，随着时间的推移，基于大语言模型的检测器会产生很高的准确度——即使在知识被切断之后也是如此。这表明，来自此类来源的最近流行的虚假信息可以很容易地被识别，因为它可能存在于预训练/检索语料库中，或者在这些数据集中出现了显着但浅薄的模式。相反，我们认为适当的事实性评估数据集应该测试模型通过检索和阅读相关证据来推理当前事件的能力。为此，我们开发了一种新颖的管道，利用基于 RAG 的检测器的自然语言反馈，将实时新闻迭代修改为挑战大语言模型的欺骗性变体。对于基于 RAG 的强大 GPT-4o 检测器，我们的迭代重写将二元分类 ROC-AUC 降低了 17.5%。我们的实验揭示了 RAG 在评估和生成具有挑战性的新闻示例方面的重要作用，因为免检索的 LLM 检测器很容易受到看不见的事件和对抗性攻击的影响，而基于 RAG 的评估的反馈有助于发现更多的欺骗模式。

---

## 53. MAIN-RAG: Multi-Agent Filtering Retrieval-Augmented Generation

**类别**: `主会-长文`

**作者**: Chia-Yuan Chang, Zhimeng Jiang, Vineeth Rakesh, Menghai Pan, Chin-Chia Michael Yeh, Guanchu Wang, Mingzhi Hu, Zhichao Xu, Yan Zheng, Mahashweta Das, Na Zou

**ID**: 2025.acl-long.131

**摘要(英文)**:
> Large Language Models (LLMs) are becoming essential tools for various natural language processing tasks but often suffer from generating outdated or incorrect information. Retrieval-Augmented Generation (RAG) addresses this issue by incorporating external, real-time information retrieval to ground LLM responses. However, the existing RAG systems frequently struggle with the quality of retrieval documents, as irrelevant or noisy documents degrade performance, increase computational overhead, and undermine response reliability. To tackle this problem, we propose Multi-Agent Filtering Retrieval-Augmented Generation (MAIN-RAG), a training-free RAG framework that leverages multiple LLM agents to collaboratively filter and score retrieved documents. Specifically, MAIN-RAG introduces an adaptive filtering mechanism that dynamically adjusts the relevance filtering threshold based on score distributions, effectively minimizing noise while maintaining high recall of relevant documents. The proposed approach leverages inter-agent consensus to ensure robust document selection without requiring additional training data or fine-tuning. Experimental results across four QA benchmarks demonstrate that MAIN-RAG consistently outperforms traditional RAG approaches, achieving a 2–11% improvement in answer accuracy while reducing the number of irrelevant retrieved documents. Quantitative analysis further reveals that our approach achieves superior response consistency and answer accuracy over baseline methods, offering a competitive and practical alternative to training-based solutions.

**摘要(中文)**:
> 大型语言模型 (LLM) 正在成为各种自然语言处理任务的重要工具，但经常会产生过时或不正确的信息。检索增强生成（RAG）通过将外部实时信息检索与基础大语言模型响应结合起来解决了这个问题。然而，现有的 RAG 系统经常面临检索文档质量的问题，因为不相关或有噪声的文档会降低性能、增加计算开销并破坏响应可靠性。为了解决这个问题，我们提出了多代理过滤检索增强生成（MAIN-RAG），这是一种免训练的 RAG 框架，利用多个 LLM 代理来协作过滤和评分检索到的文档。具体来说，MAIN-RAG引入了自适应过滤机制，可以根据分数分布动态调整相关性过滤阈值，有效地最小化噪声，同时保持相关文档的高召回率。所提出的方法利用代理间共识来确保稳健的文档选择，而不需要额外的训练数据或微调。四个 QA 基准的实验结果表明，MAIN-RAG 始终优于传统的 RAG 方法，答案准确性提高了 2-11%，同时减少了不相关的检索文档数量。定量分析进一步表明，与基线方法相比，我们的方法实现了卓越的响应一致性和答案准确性，为基于培训的解决方案提供了具有竞争力和实用性的替代方案。

---

## 54. DioR: Adaptive Cognitive Detection and Contextual Retrieval Optimization for Dynamic Retrieval-Augmented Generation

**类别**: `主会-长文`

**作者**: Hanghui Guo, Jia Zhu, Shimin Di, Weijie Shi, Zhangze Chen, Jiajie Xu

**ID**: 2025.acl-long.148

**摘要(英文)**:
> Dynamic Retrieval-augmented Generation (RAG) has shown great success in mitigating hallucinations in large language models (LLMs) during generation. However, existing dynamic RAG methods face significant limitations in two key aspects: 1) Lack of an effective mechanism to control retrieval triggers, and 2) Lack of effective scrutiny of retrieval content. To address these limitations, we propose an innovative dynamic RAG method, DioR (Adaptive Cognitive Detection and Contextual Retrieval Optimization), which consists of two main components: adaptive cognitive detection and contextual retrieval optimization, specifically designed to determine when retrieval is needed and what to retrieve for LLMs is useful. Experimental results demonstrate that DioR achieves superior performance on all tasks, demonstrating the effectiveness of our work.

**摘要(中文)**:
> 动态检索增强生成（RAG）在减轻大语言模型（LLM）生成过程中的幻觉方面取得了巨大成功。然而，现有的动态RAG方法在两个关键方面面临着显着的局限性：1）缺乏控制检索触发的有效机制；2）缺乏对检索内容的有效审查。为了解决这些限制，我们提出了一种创新的动态 RAG 方法，DioR（自适应认知检测和上下文检索优化），它由两个主要部分组成：自适应认知检测和上下文检索优化，专门用于确定何时需要检索以及检索哪些内容对大语言模型有用。实验结果表明 DioR 在所有任务上都取得了优异的性能，证明了我们工作的有效性。

---

## 55. Hierarchical Document Refinement for Long-context Retrieval-augmented Generation

**类别**: `主会-长文`

**作者**: Jiajie Jin, Xiaoxi Li, Guanting Dong, Yuyao Zhang, Yutao Zhu, Yongkang Wu, Zhonghua Li, Ye Qi, Zhicheng Dou

**ID**: 2025.acl-long.176

**摘要(英文)**:
> Real-world RAG applications often encounter long-context input scenarios, where redundant information and noise results in higher inference costs and reduced performance. To address these challenges, we propose LongRefiner, an efficient plug-and-play refiner that leverages the inherent structural characteristics of long documents. LongRefiner employs dual-level query analysis, hierarchical document structuring, and adaptive refinement through multi-task learning on a single foundation model. Experiments on seven QA datasets demonstrate that LongRefiner achieves competitive performance in various scenarios while using 10x fewer computational costs and latency compared to the best baseline. Further analysis validates that LongRefiner is scalable, efficient, and effective, providing practical insights for real-world long-text RAG applications. Our code is available at https://github.com/ignorejjj/LongRefiner.

**摘要(中文)**:
> 现实世界的 RAG 应用程序经常遇到长上下文输入场景，其中冗余信息和噪声会导致更高的推理成本和性能下降。为了应对这些挑战，我们提出了 LongRefiner，这是一种高效的即插即用精炼器，利用长文档的固有结构特征。 LongRefiner 通过在单一基础模型上进行多任务学习，采用双层查询分析、分层文档结构和自适应细化。对七个 QA 数据集的实验表明，LongRefiner 在各种场景中都实现了具有竞争力的性能，同时与最佳基线相比，计算成本和延迟降低了 10 倍。进一步的分析验证了 LongRefiner 具有可扩展性、高效性和有效性，为现实世界的长文本 RAG 应用提供了实用的见解。我们的代码可在 https://github.com/ignorejjj/LongRefiner 获取。

---

## 56. RAG-Critic: Leveraging Automated Critic-Guided Agentic Workflow for Retrieval Augmented Generation

**类别**: `主会-长文`

**作者**: Guanting Dong, Jiajie Jin, Xiaoxi Li, Yutao Zhu, Zhicheng Dou, Ji-Rong Wen

**ID**: 2025.acl-long.179

**摘要(英文)**:
> Retrieval-augmented generation (RAG) has emerged as a pivotal technology in natural language processing, owing to its efficacy in generating factual content. However, its informative inputs and complex paradigms often lead to a greater variety of errors. Consequently, achieving automated on-policy assessment and error-oriented correction remain unresolved issues. In this paper, we propose RAG-Critic, a novel framework that leverages a critic-guided agentic workflow to improve RAG capabilities autonomously. Specifically, we initially design a data-driven error mining pipeline to establish a hierarchical RAG error system. Based on this system, we progressively align an error-critic model using a coarse-to-fine training objective, which automatically provides fine-grained error feedback. Finally, we design a critic-guided agentic RAG workflow that customizes executor-based solution flows based on the error-critic model’s feedback, facilitating an error-driven self-correction process. Experimental results across seven RAG-related datasets confirm the effectiveness of RAG-Critic, while qualitative analysis offers practical insights for achieving reliable RAG systems. Our dataset and code are available at https://github.com/RUC-NLPIR/RAG-Critic.

**摘要(中文)**:
> 检索增强生成（RAG）因其在生成事实内容方面的功效而成为自然语言处理的关键技术。然而，其信息输入和复杂范例往往会导致更多种类的错误。因此，实现自动化的政策评估和面向错误的纠正仍然是未解决的问题。在本文中，我们提出了 RAG-Critic，这是一种利用评论家引导的代理工作流程来自主提高 RAG 功能的新颖框架。具体来说，我们最初设计了一个数据驱动的错误挖掘管道来建立分层的 RAG 错误系统。基于该系统，我们使用从粗到细的训练目标逐步调整错误批评模型，该模型自动提供细粒度的错误反馈。最后，我们设计了一个批评家引导的代理 RAG 工作流程，该工作流程根据错误批评家模型的反馈定制基于执行器的解决方案流程，从而促进错误驱动的自我纠正过程。七个 RAG 相关数据集的实验结果证实了 RAG-Critic 的有效性，而定性分析为实现可靠的 RAG 系统提供了实用的见解。我们的数据集和代码可在 https://github.com/RUC-NLPIR/RAG-Critic 获取。

---

## 57. QAEncoder: Towards Aligned Representation Learning in Question Answering Systems

**类别**: `主会-长文`

**作者**: Zhengren Wang, Qinhan Yu, Shida Wei, Zhiyu Li, Feiyu Xiong, Xiaoxing Wang, Simin Niu, Hao Liang, Wentao Zhang

**ID**: 2025.acl-long.217

**摘要(英文)**:
> Modern QA systems entail retrieval-augmented generation (RAG) for accurate and trustworthy responses. However, the inherent gap between user queries and relevant documents hinders precise matching. We introduce QAEncoder, a training-free approach to bridge this gap. Specifically, QAEncoder estimates the expectation of potential queries in the embedding space as a robust surrogate for the document embedding, and attaches document fingerprints to effectively distinguish these embeddings. Extensive experiments across diverse datasets, languages, and embedding models confirmed QAEncoder’s alignment capability, which offers a simple-yet-effective solution with zero additional index storage, retrieval latency, training costs, or catastrophic forgetting and hallucination issues. The repository is publicly available at https://github.com/IAAR-Shanghai/QAEncoder.

**摘要(中文)**:
> 现代 QA 系统需要检索增强生成 (RAG) 来提供准确且值得信赖的响应。然而，用户查询和相关文档之间固有的差距阻碍了精确匹配。我们引入了 QAEncoder，这是一种无需训练的方法来弥补这一差距。具体来说，QAEncoder 估计嵌入空间中潜在查询的期望，作为文档嵌入的稳健代理，并附加文档指纹以有效地区分这些嵌入。跨不同数据集、语言和嵌入模型的大量实验证实了 QAEncoder 的对齐功能，它提供了一种简单而有效的解决方案，零额外索引存储、检索延迟、训练成本或灾难性遗忘和幻觉问题。该存储库可在 https://github.com/IAAR-Shanghai/QAEncoder 上公开获取。

---

## 58. DeepSolution: Boosting Complex Engineering Solution Design via Tree-based Exploration and Bi-point Thinking

**类别**: `主会-长文`

**作者**: Zhuoqun Li, Haiyang Yu, Xuanang Chen, Hongyu Lin, Yaojie Lu, Fei Huang, Xianpei Han, Yongbin Li, Le Sun

**ID**: 2025.acl-long.220

**摘要(英文)**:
> Designing solutions for complex engineering challenges is crucial in human production activities. However, previous research in the retrieval-augmented generation (RAG) field has not sufficiently addressed tasks related to the design of complex engineering solutions. To fill this gap, we introduce a new benchmark, SolutionBench, to evaluate a system’s ability to generate complete and feasible solutions for engineering problems with multiple complex constraints. To further advance the design of complex engineering solutions, we propose a novel system, SolutionRAG, that leverages the tree-based exploration and bi-point thinking mechanism to generate reliable solutions. Extensive experimental results demonstrate that SolutionRAG achieves state-of-the-art (SOTA) performance on the SolutionBench, highlighting its potential to enhance the automation and reliability of complex engineering solution design in real-world applications.

**摘要(中文)**:
> 为复杂的工程挑战设计解决方案对于人类生产活动至关重要。然而，检索增强生成（RAG）领域的先前研究尚未充分解决与复杂工程解决方案设计相关的任务。为了填补这一空白，我们引入了一个新的基准——SolutionBench，来评估系统为具有多个复杂约束的工程问题生成完整且可行的解决方案的能力。为了进一步推进复杂工程解决方案的设计，我们提出了一种新颖的系统 SolutionRAG，它利用基于树的探索和双点思维机制来生成可靠的解决方案。大量实验结果表明，SolutionRAG 在 SolutionBench 上实现了最先进的 (SOTA) 性能，突显了其在增强实际应用中复杂工程解决方案设计的自动化和可靠性方面的潜力。

---

## 59. Sparse Latents Steer Retrieval-Augmented Generation

**类别**: `主会-长文`

**作者**: Chunlei Xin, Shuheng Zhou, Huijia Zhu, Weiqiang Wang, Xuanang Chen, Xinyan Guan, Yaojie Lu, Hongyu Lin, Xianpei Han, Le Sun

**ID**: 2025.acl-long.228

**摘要(英文)**:
> Understanding the mechanisms underlying Large Language Model (LLM) behavior in Retrieval-Augmented Generation (RAG) systems is critical for enhancing reliability. In this paper, we leverage Sparse Autoencoders (SAEs) within the LLaMA Scope to uncover sparse, interpretable latents that govern RAG behaviors. Through systematic analysis of SAE activations, we identify specific latents associated with two fundamental RAG decisions: (1) context versus memory prioritization, and (2) response generation versus query rejection. Intervention experiments demonstrate that these latents enable precise control over model behavior and maintain generalizability across various experimental settings. Mechanistic analysis reveals that manipulating these latents influences model behavior by reconfiguring attention patterns of retrieval heads. Our findings establish SAEs as a principled tool for understanding and controlling RAG behaviors, demonstrating capabilities in precise behavior steering without architectural modifications.

**摘要(中文)**:
> 了解检索增强生成 (RAG) 系统中大语言模型 (LLM) 行为的基础机制对于增强可靠性至关重要。在本文中，我们利用 LLaMA 范围内的稀疏自动编码器 (SAE) 来揭示控制 RAG 行为的稀疏、可解释的潜在因素。通过对 SAE 激活的系统分析，我们确定了与两个基本 RAG 决策相关的特定潜在因素：(1) 上下文与记忆优先级，以及 (2) 响应生成与查询拒绝。干预实验表明，这些潜在因素可以精确控制模型行为，并在各种实验设置中保持普遍性。机制分析表明，通过重新配置检索头的注意力模式来操纵这些潜在因素会影响模型行为。我们的研究结果将 SAE 确立为理解和控制 RAG 行为的原则性工具，展示了无需修改架构即可进行精确行为控制的能力。

---

## 60. SafeRAG: Benchmarking Security in Retrieval-Augmented Generation of Large Language Model

**类别**: `主会-长文`

**作者**: Xun Liang, Simin Niu, Zhiyu Li, Sensen Zhang, Hanyu Wang, Feiyu Xiong, Zhaoxin Fan, Bo Tang, Jihao Zhao, Jiawei Yang, Shichao Song, Mengwei Wang

**ID**: 2025.acl-long.230

**摘要(英文)**:
> The indexing-retrieval-generation paradigm of retrieval-augmented generation (RAG) has been highly successful in solving knowledge-intensive tasks by integrating external knowledge into large language models (LLMs). However, the incorporation of external and unverified knowledge increases the vulnerability of LLMs because attackers can perform attack tasks by manipulating knowledge. In this paper, we introduce a benchmark named SafeRAG designed to evaluate the RAG security. First, we classify attack tasks into silver noise, inter-context conflict, soft ad, and white Denial-of-Service. Next, we construct RAG security evaluation dataset (i.e., SafeRAG dataset) primarily manually for each task. We then utilize the SafeRAG dataset to simulate various attack scenarios that RAG may encounter. Experiments conducted on 14 representative RAG components demonstrate that RAG exhibits significant vulnerability to all attack tasks and even the most apparent attack task can easily bypass existing retrievers, filters, or advanced LLMs, resulting in the degradation of RAG service quality. Code is available at: https://github.com/IAAR-Shanghai/SafeRAG.

**摘要(中文)**:
> 检索增强生成（RAG）的索引检索生成范例通过将外部知识集成到大型语言模型（LLM）中，在解决知识密集型任务方面取得了巨大成功。然而，外部和未经验证的知识的结合增加了大语言模型的脆弱性，因为攻击者可以通过操纵知识来执行攻击任务。在本文中，我们介绍了一个名为 SafeRAG 的基准测试，旨在评估 RAG 的安全性。首先，我们将攻击任务分为银噪声、上下文冲突、软广告和白色拒绝服务。接下来，我们主要为每个任务手动构建 RAG 安全评估数据集（即 SafeRAG 数据集）。然后，我们利用 SafeRAG 数据集来模拟 RAG 可能遇到的各种攻击场景。对 14 个代表性 RAG 组件进行的实验表明，RAG 对所有攻击任务都表现出严重的漏洞，即使是最明显的攻击任务也可以轻松绕过现有的检索器、过滤器或高级 LLM，从而导致 RAG 服务质量下降。代码可在以下网址获取：https://github.com/IAAR-Shanghai/SafeRAG。

---

## 61. A Silver Bullet or a Compromise for Full Attention? A Comprehensive Study of Gist Token-based Context Compression

**类别**: `主会-长文`

**作者**: Chenlong Deng, Zhisong Zhang, Kelong Mao, Shuaiyi Li, Xinting Huang, Dong Yu, Zhicheng Dou

**ID**: 2025.acl-long.241

**摘要(英文)**:
> In this work, we provide an empirical investigation of gist-based context compression methods to improve context processing in large language models. We focus on two key questions: (1) How well can these methods replace full attention models? and (2) What potential failure patterns arise due to compression? Through extensive experiments, we show that while gist-based compression can achieve only slight performance loss on tasks like retrieval-augmented generation and long-document QA, it faces challenges in tasks like synthetic recall. Furthermore, we identify three key failure patterns: lost by the boundary, lost if surprise, and lost along the way. To mitigate these issues, we propose two effective strategies: fine-grained autoencoding, which enhances the reconstruction of original token information, and segment-wise token importance estimation, which adjusts optimization based on token dependencies. Our work provides valuable insights into the understanding of gist token-based context compression and offers practical strategies for improving compression capabilities.

**摘要(中文)**:
> 在这项工作中，我们对基于要点的上下文压缩方法进行了实证研究，以改进大型语言模型中的上下文处理。我们关注两个关键问题：（1）这些方法能在多大程度上取代完全注意力模型？ (2) 压缩会产生哪些潜在的故障模式？通过大量的实验，我们表明，虽然基于要点的压缩在检索增强生成和长文档 QA 等任务中只能实现轻微的性能损失，但它在合成召回等任务中面临挑战。此外，我们还确定了三种关键的故障模式：边界丢失、意外丢失和沿途丢失。为了缓解这些问题，我们提出了两种有效的策略：细粒度自动编码，它增强了原始令牌信息的重建；分段令牌重要性估计，它根据令牌依赖性调整优化。我们的工作为理解基于要点标记的上下文压缩提供了宝贵的见解，并提供了提高压缩能力的实用策略。

---

## 62. Pandora’s Box or Aladdin’s Lamp: A Comprehensive Analysis Revealing the Role ofRAGNoise in Large Language Models

**类别**: `主会-长文`

**作者**: Jinyang Wu, Shuai Zhang, Feihu Che, Mingkuan Feng, Pengpeng Shao, Jianhua Tao

**ID**: 2025.acl-long.250

**摘要(英文)**:
> Retrieval-Augmented Generation (RAG) has emerged as a crucial method for addressing hallucinations in large language models (LLMs). While recent research has extended RAG models to complex noisy scenarios, these explorations often confine themselves to limited noise types and presuppose that noise is inherently detrimental to LLMs, potentially deviating from real-world retrieval environments and restricting practical applicability. In this paper, we define seven distinct noise types from a linguistic perspective and establish a Noise RAG Benchmark (NoiserBench), a comprehensive evaluation framework encompassing multiple datasets and reasoning tasks. Through empirical evaluation of eight representative LLMs with diverse architectures and scales, we reveal that these noises can be further categorized into two practical groups: noise that is beneficial to LLMs (aka beneficial noise) and noise that is harmful to LLMs (aka harmful noise). While harmful noise generally impairs performance, beneficial noise may enhance several aspects of model capabilities and overall performance. Our analysis offers insights for developing robust RAG solutions and mitigating hallucinations across diverse retrieval scenarios. Code is available at https://github.com/jinyangwu/NoiserBench.

**摘要(中文)**:
> 检索增强生成（RAG）已成为解决大型语言模型（LLM）中的幻觉的重要方法。虽然最近的研究已将 RAG 模型扩展到复杂的噪声场景，但这些探索通常仅限于有限的噪声类型，并假设噪声本质上对大语言模型有害，可能偏离现实世界的检索环境并限制实际适用性。在本文中，我们从语言角度定义了七种不同的噪声类型，并建立了噪声 RAG 基准（NoiserBench），这是一个包含多个数据集和推理任务的综合评估框架。通过对八个具有不同架构和规模的代表性大语言模型的实证评估，我们发现这些噪音可以进一步分为两类：对大语言模型有利的噪音（又名有益噪音）和对大语言模型有害的噪音（又名有害噪音）。虽然有害噪声通常会损害性能，但有益噪声可能会增强模型功能和整体性能的多个方面。我们的分析为开发强大的 RAG 解决方案和减轻不同检索场景中的幻觉提供了见解。代码可在 https://github.com/jinyangwu/NoiserBench 获取。

---

## 63. MoC: Mixtures of Text Chunking Learners for Retrieval-Augmented Generation System

**类别**: `主会-长文`

**作者**: Jihao Zhao, Zhiyuan Ji, Zhaoxin Fan, Hanyu Wang, Simin Niu, Bo Tang, Feiyu Xiong, Zhiyu Li

**ID**: 2025.acl-long.258

**摘要(英文)**:
> Retrieval-Augmented Generation (RAG), while serving as a viable complement to large language models (LLMs), often overlooks the crucial aspect of text chunking within its pipeline. This paper initially introduces a dual-metric evaluation method, comprising Boundary Clarity and Chunk Stickiness, to enable the direct quantification of chunking quality. Leveraging this assessment method, we highlight the inherent limitations of traditional and semantic chunking in handling complex contextual nuances, thereby substantiating the necessity of integrating LLMs into chunking process. To address the inherent trade-off between computational efficiency and chunking precision in LLM-based approaches, we devise the granularity-aware Mixture-of-Chunkers (MoC) framework, which consists of a three-stage processing mechanism. Notably, our objective is to guide the chunker towards generating a structured list of chunking regular expressions, which are subsequently employed to extract chunks from the original text. Extensive experiments demonstrate that both our proposed metrics and the MoC framework effectively settle challenges of the chunking task, revealing the chunking kernel while enhancing the performance of the RAG system.

**摘要(中文)**:
> 检索增强生成 (RAG) 虽然作为大型语言模型 (LLM) 的可行补充，但常常忽视其管道中文本分块的关键方面。本文首先引入了一种双度量评估方法，包括边界清晰度和块粘性，以实现分块质量的直接量化。利用这种评估方法，我们强调了传统和语义分块在处理复杂的上下文细微差别时的固有局限性，从而证实了将大语言模型整合到分块过程中的必要性。为了解决基于 LLM 的方法中计算效率和分块精度之间固有的权衡问题，我们设计了粒度感知的分块混合 (MoC) 框架，该框架由三阶段处理机制组成。值得注意的是，我们的目标是引导分块器生成分块正则表达式的结构化列表，随后使用该列表从原始文本中提取块。大量实验表明，我们提出的指标和 MoC 框架都有效地解决了分块任务的挑战，揭示了分块内核，同时增强了 RAG 系统的性能。

---

## 64. RPO: Retrieval Preference Optimization for Robust Retrieval-Augmented Generation

**类别**: `主会-长文`

**作者**: Shi-Qi Yan, Quan Liu, Zhen-Hua Ling

**ID**: 2025.acl-long.261

**摘要(英文)**:
> While Retrieval-Augmented Generation (RAG) has exhibited promise in utilizing external knowledge, its generation process heavily depends on the quality and accuracy of the retrieved context. Large language models (LLMs) struggle to evaluate the correctness of non-parametric knowledge retrieved externally when it differs from internal memorization, leading to knowledge conflicts during response generation. To this end, we introduce the **R**etrieval **P**reference **O**ptimization (RPO), a lightweight and effective alignment method to adaptively leverage multi-source knowledge based on retrieval relevance. An implicit representation of retrieval relevance is derived and incorporated into the reward model to integrate retrieval evaluation and response generation into a single model, solving the problem that previous methods necessitate the additional procedure to assess the retrieval quality. Notably, RPO is a RAG-dedicated alignment approach that quantifies the awareness of retrieval relevance in training, first overcoming mathematical obstacles. Experiments on four datasets demonstrate that RPO outperforms RAG by 4-10% in accuracy without any extra component, exhibiting its robust generalization.

**摘要(中文)**:
> 虽然检索增强生成（RAG）在利用外部知识方面表现出了希望，但其生成过程在很大程度上取决于检索到的上下文的质量和准确性。当外部检索的非参数知识与内部记忆不同时，大型语言模型（LLM）很难评估其正确性，从而导致响应生成过程中的知识冲突。为此，我们引入了**R**etrieval **P**reference **O**ptimization（RPO），这是一种轻量级且有效的对齐方法，可以基于检索相关性自适应地利用多源知识。导出检索相关性的隐式表示并将其合并到奖励模型中，将检索评估和响应生成集成到单个模型中，解决了先前方法需要额外程序来评估检索质量的问题。值得注意的是，RPO 是一种 RAG 专用的对齐方法，它可以量化训练中检索相关性的意识，首先克服数学障碍。在四个数据集上的实验表明，在没有任何额外组件的情况下，RPO 的准确率比 RAG 高出 4-10%，展现了其强大的泛化能力。

---

## 65. HoH: A Dynamic Benchmark for Evaluating the Impact of Outdated Information on Retrieval-Augmented Generation

**类别**: `主会-长文`

**作者**: Jie Ouyang, Tingyue Pan, Mingyue Cheng, Ruiran Yan, Yucong Luo, Jiaying Lin, Qi Liu

**ID**: 2025.acl-long.301

**摘要(英文)**:
> While Retrieval-Augmented Generation (RAG) has emerged as an effective approach for addressing the knowledge outdating problem in Large Language Models (LLMs), it still faces a critical challenge: the prevalence of outdated information in knowledge bases. Current research primarily focuses on incorporating up-to-date information, yet the impact of outdated information coexisting in retrieval sources remains inadequately addressed. To bridge this gap, we introduce HoH, the first benchmark specifically designed to evaluate the impact of outdated information on RAG. Our benchmark leverages token-level diff algorithms combined with LLM pipelines to efficiently create a large-scale QA dataset that accurately captures the evolution of temporal knowledge in real-world facts.Through comprehensive experiments, we reveal that outdated information significantly degrades RAG performance in two critical ways: (1) it substantially reduces response accuracy by distracting models from correct information, and (2) it can mislead models into generating potentially harmful outputs, even when current information is available. Current RAG approaches struggle with both retrieval and generation aspects when handling outdated information. These findings highlight the urgent need for innovative solutions to address the temporal challenges in RAG.

**摘要(中文)**:
> 虽然检索增强生成（RAG）已成为解决大型语言模型（LLM）中知识过时问题的有效方法，但它仍然面临着一个严峻的挑战：知识库中过时信息的普遍存在。当前的研究主要集中在整合最新信息，但检索源中共存的过时信息的影响仍未得到充分解决。为了弥补这一差距，我们引入了 HoH，这是第一个专门为评估过时信息对 RAG 的影响而设计的基准。我们的基准测试利用令牌级差异算法与 LLM 管道相结合，有效地创建大规模 QA 数据集，准确捕获现实世界事实中时间知识的演变。通过全面的实验，我们发现过时的信息会通过两个关键方式显着降低 RAG 性能：(1) 它会分散模型对正确信息的注意力，从而大大降低响应准确性；(2) 即使当前信息可用，它也会误导模型生成潜在有害的输出。当前的 RAG 方法在处理过时的信息时，在检索和生成方面都遇到了困难。这些发现凸显了迫切需要创新解决方案来解决 RAG 面临的暂时挑战。

---

## 66. NeuSym-RAG: Hybrid Neural Symbolic Retrieval with Multiview Structuring forPDFQuestion Answering

**类别**: `主会-长文`

**作者**: Ruisheng Cao, Hanchong Zhang, Tiancheng Huang, Zhangyi Kang, Yuxin Zhang, Liangtai Sun, Hanqi Li, Yuxun Miao, Shuai Fan, Lu Chen, Kai Yu

**ID**: 2025.acl-long.311

**摘要(英文)**:
> The increasing number of academic papers poses significant challenges for researchers to efficiently acquire key details. While retrieval augmented generation (RAG) shows great promise in large language model (LLM) based automated question answering, previous works often isolate neural and symbolic retrieval despite their complementary strengths. Moreover, conventional single-view chunking neglects the rich structure and layout of PDFs, e.g., sections and tables. In this work, we propose NeuSym-RAG, a hybrid neural symbolic retrieval framework which combines both paradigms in an interactive process. By leveraging multi-view chunking and schema-based parsing, NeuSym-RAG organizes semi-structured PDF content into both the relational database and vectorstore, enabling LLM agents to iteratively gather context until sufficient to generate answers. Experiments on three full PDF-based QA datasets, including a self-annotated one AirQA-Real, show that NeuSym-RAG stably defeats both the vector-based RAG and various structured baselines, highlighting its capacity to unify both retrieval schemes and utilize multiple views.

**摘要(中文)**:
> 学术论文数量的不断增加给研究人员有效获取关键细节带来了巨大挑战。虽然检索增强生成（RAG）在基于大语言模型（LLM）的自动问答中显示出巨大的前景，但以前的工作经常将神经检索和符号检索分开，尽管它们具有互补的优势。此外，传统的单视图分块忽略了 PDF 的丰富结构和布局，例如节和表格。在这项工作中，我们提出了 NeuSym-RAG，一种混合​​神经符号检索框架，它将两种范式结合在交互过程中。通过利用多视图分块和基于模式的解析，NeuSym-RAG 将半结构化 PDF 内容组织到关系数据库和向量存储中，使 LLM 代理能够迭代收集上下文，直到足以生成答案。对三个完整的基于 PDF 的 QA 数据集（包括一个自注释的 AirQA-Real）进行的实验表明，NeuSym-RAG 稳定地击败了基于矢量的 RAG 和各种结构化基线，突出了其统一两种检索方案和利用多个视图的能力。

---

## 67. Adaptive Retrieval Without Self-Knowledge? Bringing Uncertainty Back Home

**类别**: `主会-长文`

**作者**: Viktor Moskvoretskii, Maria Marina, Mikhail Salnikov, Nikolay Ivanov, Sergey Pletenev, Daria Galimzianova, Nikita Krayko, Vasily Konovalov, Irina Nikishina, Alexander Panchenko

**ID**: 2025.acl-long.319

**摘要(英文)**:
> Retrieval Augmented Generation (RAG) improves correctness of Question Answering (QA) and addresses hallucinations in Large Language Models (LLMs), yet greatly increase computational costs. Besides, RAG is not always needed as may introduce irrelevant information. Recent adaptive retrieval methods integrate LLMs’ intrinsic knowledge with external information appealing to LLM self-knowledge, but they often neglect efficiency evaluations and comparisons with uncertainty estimation techniques. We bridge this gap by conducting a comprehensive analysis of 35 adaptive retrieval methods, including 8 recent approaches and 27 uncertainty estimation techniques, across 6 datasets using 10 metrics for QA performance, self-knowledge, and efficiency. Our findings show that uncertainty estimation techniques often outperform complex pipelines in terms of efficiency and self-knowledge, while maintaining comparable QA performance.

**摘要(中文)**:
> 检索增强生成 (RAG) 提高了问答 (QA) 的正确性并解决了大型语言模型 (LLM) 中的幻觉，但大大增加了计算成本。此外，RAG 并不总是需要的，因为可能会引入不相关的信息。最近的自适应检索方法将大语言模型的内在知识与吸引大语言模型自我知识的外部信息相结合，但它们经常忽略效率评估以及与不确定性估计技术的比较。我们通过使用 10 个 QA 性能、自我知识和效率指标对 6 个数据集的 35 种自适应检索方法（包括 8 种最新方法和 27 种不确定性估计技术）进行全面分析来弥补这一差距。我们的研究结果表明，不确定性估计技术在效率和自我知识方面通常优于复杂的流程，同时保持可比的 QA 性能。

---

## 68. Beyond Facts: Evaluating Intent Hallucination in Large Language Models

**类别**: `主会-长文`

**作者**: Yijie Hao, Haofei Yu, Jiaxuan You

**ID**: 2025.acl-long.349

**摘要(英文)**:
> When exposed to complex queries containing multiple conditions, today’s large language models (LLMs) tend to produce responses that only partially satisfy the query while neglecting certain conditions. We, therefore, introduce the concept of Intent Hallucination, a phenomenon where LLMs either omit (failing to address certain parts) or misinterpret (responding to invented query parts) elements of the given query, leading to responses misaligned with the original query. To systematically evaluate intent hallucination, we introduce FAITHQA, a novel benchmark for intent hallucination that contains 20,068 problems, covering both query-only and retrieval-augmented generation (RAG) setups with varying topics and difficulty. FAITHQA is the first hallucination benchmark that goes beyond factual verification, tailored to identify the fundamental cause of intent hallucination. By evaluating various LLMs on FAITHQA, we find that (1) intent hallucination is a common issue even for state-of-the-art models, and (2) such a phenomenon stems from omission or misinterpretation of LLMs. To facilitate future research, we introduce an automatic LLM generation evaluation metric, named INTENT CONSTRAINT, for detecting intent hallucination. Human evaluation results demonstrate that INTENT CONSTRAINT is closer to human performance for intent hallucination compared to baselines.

**摘要(中文)**:
> 当遇到包含多个条件的复杂查询时，当今的大型语言模型 (LLM) 往往会生成仅部分满足查询的响应，而忽略某些条件。因此，我们引入了意图幻觉的概念，这是一种现象，大语言模型要么忽略（未能解决某些部分）要么误解（响应发明的查询部分）给定查询的元素，导致响应与原始查询不一致。为了系统地评估意图幻觉，我们引入了 FAITHQA，这是一种新颖的意图幻觉基准，包含 20,068 个问题，涵盖具有不同主题和难度的仅查询和检索增强生成 (RAG) 设置。 FAITHQA 是第一个超越事实验证的幻觉基准，专为识别意向幻觉的根本原因而量身定制。通过在 FAITHQA 上评估各种大语言模型，我们发现（1）即使对于最先进的模型，意图幻觉也是一个常见问题，（2）这种现象源于对大语言模型的遗漏或误解。为了促进未来的研究，我们引入了一种自动 LLM 生成评估指标，名为 INTENT CONSTRAINT，用于检测意图幻觉。人类评估结果表明，与基线相比，意图约束更接近人类意图幻觉的表现。

---

## 69. Personalized Text Generation with Contrastive Activation Steering

**类别**: `主会-长文`

**作者**: Jinghao Zhang, Yuting Liu, Wenjie Wang, Qiang Liu, Shu Wu, Liang Wang, Tat-Seng Chua

**ID**: 2025.acl-long.353

**摘要(英文)**:
> Personalized text generation aims to infer users’ writing style preferences from their historical texts and generate outputs that faithfully reflect these stylistic characteristics. Existing solutions primarily adopt two paradigms: retrieval-augmented generation (RAG) and parameter-efficient fine-tuning (PEFT). While these approaches have advanced the field, they suffer from two critical limitations: (1) the entanglement of content semantics and stylistic patterns in historical texts impedes accurate modeling of user-specific writing preferences; and (2) scalability challenges arising from both RAG’s inference latency by retrieval operations and PEFT’s parameter storage requirements for per user model. To overcome these limitations, we propose StyleVector, a training-free framework that disentangles and represents personalized writing style as a vector in LLM’s activation space, enabling style-steered generation during inference without requiring costly retrieval or parameter storage. Comprehensive experiments demonstrate that our framework achieves a significant 8% relative improvement in personalized generation while reducing storage requirements by 1700×over PEFT method.

**摘要(中文)**:
> 个性化文本生成旨在从用户的历史文本中推断用户的写作风格偏好，并生成忠实反映这些风格特征的输出。现有的解决方案主要采用两种范式：检索增强生成（RAG）和参数高效微调（PEFT）。虽然这些方法推动了该领域的发展，但它们存在两个关键局限性：（1）历史文本中内容语义和文体模式的纠缠阻碍了对用户特定写作偏好的准确建模； (2) RAG 检索操作的推理延迟和 PEFT 对每个用户模型的参数存储要求带来的可扩展性挑战。为了克服这些限制，我们提出了 StyleVector，这是一个免训练的框架，它将个性化的写作风格分解并表示为 LLM 激活空间中的向量，从而在推理过程中实现风格引导的生成，而不需要昂贵的检索或参数存储。综合实验表明，我们的框架在个性化生成方面实现了 8% 的显着相对改进，同时比 PEFT 方法减少了 1700 倍的存储需求。

---

## 70. Gumbel Reranking: Differentiable End-to-End Reranker Optimization

**类别**: `主会-长文`

**作者**: Siyuan Huang, Zhiyuan Ma, Jintao Du, Changhua Meng, Weiqiang Wang, Jingwen Leng, Minyi Guo, Zhouhan Lin

**ID**: 2025.acl-long.354

**摘要(英文)**:
> RAG systems rely on rerankers to identify relevant documents. However, fine-tuning these models remains challenging due to the scarcity of annotated query-document pairs. Existing distillation-based approaches suffer from training-inference misalignment and fail to capture interdependencies among candidate documents. To overcome these limitations, we reframe the reranking process as an attention-mask problem and propose Gumbel Reranking, an end-to-end training framework for rerankers aimed at minimizing the training-inference gap. In our approach, reranker optimization is reformulated as learning a stochastic, document-wise Top-kattention mask using the Gumbel Trick and Relaxed Top-kSampling. This formulation enables end-to-end optimization by minimizing the overall language loss. Experiments across various settings consistently demonstrate performance gains, including a 10.4% improvement in recall on HotpotQA for distinguishing indirectly relevant documents.

**摘要(中文)**:
> RAG 系统依靠重新排序器来识别相关文档。然而，由于带注释的查询文档对的稀缺，微调这些模型仍然具有挑战性。现有的基于蒸馏的方法存在训练推理不一致的问题，并且无法捕获候选文档之间的相互依赖性。为了克服这些限制，我们将重排序过程重新定义为注意力掩模问题，并提出了 Gumbel Reranking，这是一种用于重排序的端到端训练框架，旨在最大限度地减少训练与推理之间的差距。在我们的方法中，重新排序优化被重新表述为使用 Gumbel Trick 和 Relaxed Top-kSampling 学习随机的、文档级的 Top-kattention mask。该公式通过最小化整体语言损失来实现端到端优化。各种设置下的实验一致证明了性能提升，包括 HotpotQA 区分间接相关文档的召回率提高了 10.4%。

---

## 71. Large Language Models are Good Relational Learners

**类别**: `主会-长文`

**作者**: Fang Wu, Vijay Prakash Dwivedi, Jure Leskovec

**ID**: 2025.acl-long.386

**摘要(英文)**:
> Large language models (LLMs) have demonstrated remarkable capabilities across various domains, yet their application to relational deep learning (RDL) remains underexplored. Existing approaches adapt LLMs by traversing relational links between entities in a database and converting the structured data into flat text documents, but this text-based serialization disregards critical relational structures, introduces redundancy, and often exceeds standard LLM context lengths. We introduce Rel-LLM, a novel architecture that employs a graph neural network (GNN) based encoder to create structured relational prompts for LLMs within a retrieval-augmented generation (RAG) framework. Unlike traditional text-based serialization approaches, our method preserves the inherent relational structure of databases while enabling LLMs to effectively process and reason over complex entity relationships. Specifically, the GNN encoder extracts a local subgraph around an entity to build feature representations that contain relevant entity relationships and temporal dependencies. These representations are transformed into structured prompts using a denormalization process, effectively allowing the LLM to reason over relational structures. Through extensive experiments, we demonstrate that Rel-LLM outperforms existing methods on key RDL tasks, offering a scalable and efficient approach to integrating LLMs with structured data sources. Code is available athttps://github.com/smiles724/Rel-LLM.

**摘要(中文)**:
> 大型语言模型 (LLM) 在各个领域都表现出了卓越的能力，但它们在关系深度学习 (RDL) 中的应用仍未得到充分探索。现有的方法通过遍历数据库中实体之间的关系链接并将结构化数据转换为平面文本文档来适应LLM，但这种基于文本的序列化忽略了关键的关系结构，引入了冗余，并且通常超出了标准LLM上下文长度。我们引入了 Rel-LLM，这是一种新颖的架构，它采用基于图神经网络 (GNN) 的编码器，在检索增强生成 (RAG) 框架内为 LLM 创建结构化关系提示。与传统的基于文本的序列化方法不同，我们的方法保留了数据库固有的关系结构，同时使大语言模型能够有效地处理和推理复杂的实体关系。具体来说，GNN 编码器提取实体周围的局部子图，以构建包含相关实体关系和时间依赖性的特征表示。这些表示使用非规范化过程转换为结构化提示，有效地允许大语言模型对关系结构进行推理。通过大量实验，我们证明 Rel-LLM 在关键 RDL 任务上优于现有方法，提供了一种可扩展且高效的方法来将 LLM 与结构化数据源集成。代码可在 https://github.com/smiles724/Rel-LLM 获取。

---

## 72. Exploiting the Shadows: Unveiling Privacy Leaks through Lower-Ranked Tokens in Large Language Models

**类别**: `主会-长文`

**作者**: Yuan Zhou, Zhuo Zhang, Xiangyu Zhang

**ID**: 2025.acl-long.410

**摘要(英文)**:
> Large language models (LLMs) play a crucial role in modern applications but face vulnerabilities related to the extraction of sensitive information. This includes unauthorized accesses to internal prompts and retrieval of personally identifiable information (PII) (e.g., in Retrieval-Augmented Generation based agentic applications). We examine these vulnerabilities in a question-answering (QA) setting where LLMs use retrieved documents or training knowledge as few-shot prompts. Although these documents remain confidential under normal use, adversaries can manipulate input queries to extract private content. In this paper, we propose a novel attack method by exploiting the model’s lower-ranked output tokens to leak sensitive information. We systematically evaluate our method, demonstrating its effectiveness in both the agentic application privacy extraction setting and the direct training data extraction. These findings reveal critical privacy risks in LLMs and emphasize the urgent need for enhanced safeguards against information leakage.

**摘要(中文)**:
> 大型语言模型 (LLM) 在现代应用程序中发挥着至关重要的作用，但面临着与敏感信息提取相关的漏洞。这包括未经授权访问内部提示和检索个人身份信息 (PII)（例如，在基于检索增强生成的代理应用程序中）。我们在问答 (QA) 设置中检查这些漏洞，其中大语言模型使用检索到的文档或培训知识作为少量提示。尽管这些文档在正常使用下仍然保密，但攻击者可以操纵输入查询来提取私人内容。在本文中，我们提出了一种新颖的攻击方法，通过利用模型的较低排名的输出令牌来泄露敏感信息。我们系统地评估了我们的方法，证明了其在代理应用程序隐私提取设置和直接训练数据提取方面的有效性。这些发现揭示了大语言模型的严重隐私风险，并强调迫切需要加强防止信息泄露的保护措施。

---

## 73. Unanswerability Evaluation for Retrieval Augmented Generation

**类别**: `主会-长文`

**作者**: Xiangyu Peng, Prafulla Kumar Choubey, Caiming Xiong, Chien-Sheng Wu

**ID**: 2025.acl-long.415

**摘要(英文)**:
> Existing evaluation frameworks for retrieval-augmented generation (RAG) systems focus on answerable queries, but they overlook the importance of appropriately rejecting unanswerable requests. In this paper, we introduce UAEval4RAG, a comprehensive evaluation framework designed to evaluate whether RAG systems effectively handle unanswerable queries specific to a given knowledge base. We first define a taxonomy with six unanswerable categories, and UAEval4RAG automatically synthesizes diverse and challenging queries for any given knowledge base and evaluate the RAG systems with unanswered ratio and acceptable ratio metrics. We also conduct experiments with various RAG components and prompting strategies across four datasets, which reveals that due to varying knowledge distribution across datasets, no single configuration consistently delivers optimal performance on both answerable and unanswerable requests across different knowledge bases. Our findings highlight the critical role of component selection and prompt design in optimizing RAG systems to balance the accuracy of answerable queries with high rejection rates of unanswerable ones. UAEval4RAG provides valuable insights and tools for developing more robust and reliable RAG systems.

**摘要(中文)**:
> 检索增强生成（RAG）系统的现有评估框架侧重于可回答的查询，但忽视了适当拒绝无法回答的请求的重要性。在本文中，我们介绍了 UAEval4RAG，这是一个综合评估框架，旨在评估 RAG 系统是否有效处理特定于给定知识库的无法回答的查询。我们首先定义一个具有六个无法回答的类别的分类法，UAEval4RAG 会自动合成任何给定知识库的多样化且具有挑战性的查询，并使用未回答的比率和可接受的比率指标来评估 RAG 系统。我们还对四个数据集的各种 RAG 组件和提示策略进行了实验，结果表明，由于数据集之间的知识分布不同，没有一种配置能够在不同知识库的可应答和不可应答请求上始终提供最佳性能。我们的研究结果强调了组件选择和提示设计在优化 RAG 系统中的关键作用，以平衡可回答查询的准确性与不可回答查询的高拒绝率。 UAEval4RAG 为开发更强大、更可靠的 RAG 系统提供了宝贵的见解和工具。

---

## 74. RAGEval: Scenario SpecificRAGEvaluation Dataset Generation Framework

**类别**: `主会-长文`

**作者**: Kunlun Zhu, Yifan Luo, Dingling Xu, Yukun Yan, Zhenghao Liu, Shi Yu, Ruobing Wang, Shuo Wang, Yishan Li, Nan Zhang, Xu Han, Zhiyuan Liu, Maosong Sun

**ID**: 2025.acl-long.418

**摘要(英文)**:
> Retrieval-Augmented Generation (RAG) is a powerful approach that enables large language models (LLMs) to incorporate external knowledge. However, evaluating the effectiveness of RAG systems in specialized scenarios remains challenging due to the high costs of data construction and the lack of suitable evaluation metrics. This paper introduces RAGEval, a framework designed to assess RAG systems across diverse scenarios by generating high-quality documents, questions, answers, and references through a schema-based pipeline. With a focus on factual accuracy, we propose three novel metrics—Completeness, Hallucination, and Irrelevance—to evaluate LLM-generated responses rigorously. Experimental results show that RAGEval outperforms zero-shot and one-shot methods in terms of clarity, safety, conformity, and richness of generated samples. Furthermore, the use of LLMs for scoring the proposed metrics demonstrates a high level of consistency with human evaluations. RAGEval establishes a new paradigm for evaluating RAG systems in real-world applications. The code and dataset are released at https://github.com/OpenBMB/RAGEval.

**摘要(中文)**:
> 检索增强生成 (RAG) 是一种强大的方法，使大型语言模型 (LLM) 能够整合外部知识。然而，由于数据构建成本高昂且缺乏合适的评估指标，评估RAG系统在特定场景下的有效性仍然具有挑战性。本文介绍了 RAGEval，这是一个框架，旨在通过基于模式的管道生成高质量文档、问题、答案和参考文献，跨不同场景评估 RAG 系统。着眼于事实准确性，我们提出了三个新颖的指标——完整性、幻觉和无关性——来严格评估大语言模型生成的答案。实验结果表明，RAGEval 在生成样本的清晰度、安全性、一致性和丰富度方面优于零样本和单样本方法。此外，使用大语言模型对所提出的指标进行评分表明了与人类评估的高度一致性。 RAGEval 建立了在实际应用中评估 RAG 系统的新范例。代码和数据集发布于 https://github.com/OpenBMB/RAGEval。

---

## 75. SciVer: Evaluating Foundation Models for Multimodal Scientific Claim Verification

**类别**: `主会-长文`

**作者**: Chengye Wang, Yifei Shen, Zexi Kuang, Arman Cohan, Yilun Zhao

**ID**: 2025.acl-long.420

**摘要(英文)**:
> We introduce SciVer, the first benchmark specifically designed to evaluate the ability of foundation models to verify claims within a multimodal scientific context.SciVer consists of 3,000 expert-annotated examples over 1,113 scientific papers, covering four subsets, each representing a common reasoning type in multimodal scientific claim verification. To enable fine-grained evaluation, each example includes expert-annotated supporting evidence.We assess the performance of 21 state-of-the-art multimodal foundation models, including o4-mini, Gemini-2.5-Flash, Llama-3.2-Vision, and Qwen2.5-VL. Our experiment reveals a substantial performance gap between these models and human experts on SciVer.Through an in-depth analysis of retrieval-augmented generation (RAG), and human-conducted error evaluations, we identify critical limitations in current open-source models, offering key insights to advance models’ comprehension and reasoning in multimodal scientific literature tasks.

**摘要(中文)**:
> 我们推出 SciVer，这是第一个专门设计用于评估基础模型在多模态科学背景下验证主张的能力的基准。SciVer 由超过 1,113 篇科学论文的 3,000 个专家注释示例组成，涵盖四个子集，每个子​​集代表多模态科学声明验证中的常见推理类型。为了进行细粒度的评估，每个示例都包含专家注释的支持证据。我们评估了 21 个最先进的多模态基础模型的性能，包括 o4-mini、Gemini-2.5-Flash、Llama-3.2-Vision 和 Qwen2.5-VL。我们的实验揭示了这些模型与 SciVer 上的人类专家之间存在巨大的性能差距。通过对检索增强生成 (RAG) 和人类进行的错误评估的深入分析，我们确定了当前开源模型的关键局限性，为推进模型在多模态科学文献任务中的理解和推理提供了关键见解。

---

## 76. AreLLMs effective psychological assessors? Leveraging adaptiveRAGfor interpretable mental health screening through psychometric practice

**类别**: `主会-长文`

**作者**: Federico Ravenda, Seyed Ali Bahrainian, Andrea Raballo, Antonietta Mira, Noriko Kando

**ID**: 2025.acl-long.440

**摘要(英文)**:
> In psychological practice, standardized questionnaires serve as essential tools for assessing mental health through structured, clinically-validated questions (i.e., items). While social media platforms offer rich data for mental health screening, computational approaches often bypass these established clinical assessment tools in favor of black-box classification. We propose a novel questionnaire-guided screening framework that bridges psychological practice and computational methods through adaptive Retrieval-Augmented Generation (aRAG). Our approach links unstructured social media content and standardized clinical assessments by retrieving relevant posts for each questionnaire item and using Large Language Models (LLMs) to complete validated psychological instruments. Our findings demonstrate two key advantages of questionnaire-guided screening: First, when completing the Beck Depression Inventory-II (BDI-II), our approach matches or outperforms state-of-the-art performance on Reddit-based benchmarks without requiring training data. Second, we show that guiding LLMs through standardized questionnaires yields superior results compared to directly prompting them for depression screening. Additionally, we show as a proof-of-concept how our questionnaire-based methodology successfully extends to self-harm screening.

**摘要(中文)**:
> 在心理学实践中，标准化问卷是通过结构化的、经过临床验证的问题（即项目）评估心理健康的重要工具。虽然社交媒体平台为心理健康筛查提供了丰富的数据，但计算方法通常会绕过这些已建立的临床评估工具，转而采用黑盒分类。我们提出了一种新颖的问卷引导筛选框架，通过自适应检索增强生成（aRAG）将心理实践和计算方法联系起来。我们的方法通过检索每个问卷项目的相关帖子并使用大型语言模型（LLM）来完成经过验证的心理工具，将非结构化社交媒体内容和标准化临床评估联系起来。我们的研究结果证明了问卷引导筛查的两个关键优势：首先，在完成贝克抑郁量表 II (BDI-II) 时，我们的方法在基于 Reddit 的基准上达到或优于最先进的性能，而无需训练数据。其次，我们表明，与直接提示大语言模型进行抑郁症筛查相比，通过标准化问卷指导大语言模型可以获得更好的结果。此外，作为概念验证，我们展示了基于问卷的方法如何成功扩展到自残筛查。

---

## 77. Does Context Matter?ContextualJudgeBench for EvaluatingLLM-based Judges in Contextual Settings

**类别**: `主会-长文`

**作者**: Austin Xu, Srijan Bansal, Yifei Ming, Semih Yavuz, Shafiq Joty

**ID**: 2025.acl-long.470

**摘要(英文)**:
> The large language model (LLM)-as-judge paradigm has been used to meet the demand for a cheap, reliable, and fast evaluation of model outputs during AI system development and post-deployment monitoring. While judge models—LLMs finetuned to specialize in assessing and critiquing model outputs—have been touted as general purpose evaluators, they are typically evaluated only on non-contextual scenarios, such as instruction following. The omission of contextual settings—those where external information is used as context to generate an output—is surprising given the increasing prevalence of retrieval-augmented generation (RAG) and summarization use cases. Contextual assessment is uniquely challenging, as evaluation often depends on practitioner priorities, leading to conditional evaluation criteria (e.g., comparing responses based on factuality and then considering completeness if they are equally factual). To address the gap, we propose ContextualJudgeBench, a judge benchmark with 2,000 challenging response pairs across eight splits inspired by real-world contextual evaluation scenarios. We build our benchmark with a multi-pronged data construction pipeline that leverages both existing human annotations and model-based perturbations. Our comprehensive study across 11 judge models and 7 general purpose models, reveals that the contextual information and assessment criteria present a significant challenge to even state-of-the-art models. For example, o1, the best-performing model, barely reaches 55% consistent accuracy.

**摘要(中文)**:
> 大语言模型（LLM）作为判断范式已被用来满足人工智能系统开发和部署后监控期间对模型输出进行廉价、可靠和快速评估的需求。虽然法官模型（经过微调以专门评估和批评模型输出的大语言模型）被吹捧为通用评估器，但它们通常仅在非上下文场景（例如遵循指令）下进行评估。鉴于检索增强生成 (RAG) 和摘要用例的日益普及，上下文设置（将外部信息用作上下文来生成输出的设置）的省略令人惊讶。情境评估具有独特的挑战性，因为评估通常取决于从业者的优先事项，从而导致有条件的评估标准（例如，根据事实比较响应，然后如果它们同样真实则考虑完整性）。为了解决这一差距，我们提出了 ContextualJudgeBench，这是一个法官基准，受现实世界情境评估场景的启发，在八个分组中包含 2,000 个具有挑战性的响应对。我们通过多管齐下的数据构建管道构建基准，该管道利用现有的人工注释和基于模型的扰动。我们对 11 个法官模型和 7 个通用模型的综合研究表明，上下文信息和评估标准对即使是最先进的模型也提出了重大挑战。例如，表现最好的模型 o1 勉强达到 55% 的一致准确率。

---

## 78. Towards Context-RobustLLMs: A Gated Representation Fine-tuning Approach

**类别**: `主会-长文`

**作者**: Shenglai Zeng, Pengfei He, Kai Guo, Tianqi Zheng, Hanqing Lu, Yue Xing, Hui Liu

**ID**: 2025.acl-long.506

**摘要(英文)**:
> Large Language Models (LLMs) enhanced with external contexts, such as through retrieval-augmented generation (RAG), often face challenges in handling imperfect evidence. They tend to over-rely on external knowledge, making them vulnerable to misleading and unhelpful contexts. To address this, we propose the concept of context-robust LLMs, which can effectively balance internal knowledge with external context, similar to human cognitive processes. Specifically, context-robust LLMs should rely on external context only when lacking internal knowledge, identify contradictions between internal and external knowledge, and disregard unhelpful contexts. To achieve this goal, we introduce Grft, a lightweight and plug-and-play gated representation fine-tuning approach. Grft consists of two key components: a gating mechanism to detect and filter problematic inputs, and low-rank representation adapters to adjust hidden representations. By training a lightweight intervention function with only 0.0004% of model size on fewer than 200 examples, Grft can effectively adapt LLMs towards context-robust behaviors.

**摘要(中文)**:
> 通过外部上下文增强的大型语言模型（LLM），例如通过检索增强生成（RAG），通常在处理不完美的证据时面临挑战。他们往往过度依赖外部知识，使他们容易受到误导和无益的环境的影响。为了解决这个问题，我们提出了上下文稳健的大语言模型的概念，它可以有效地平衡内部知识与外部上下文，类似于人类的认知过程。具体来说，背景稳健的大语言模型应该仅在缺乏内部知识时才依赖外部背景，识别内部知识和外部知识之间的矛盾，并忽略无用的背景。为了实现这一目标，我们引入了 Grft，一种轻量级、即插即用的门控表示微调方法。 Grft 由两个关键组件组成：用于检测和过滤有问题的输入的门控机制，以及用于调整隐藏表示的低秩表示适配器。通过在不到 200 个示例上训练仅模型大小 0.0004% 的轻量级干预函数，Grft 可以有效地使大语言模型适应上下文稳健的行为。

---

## 79. WebWalker: BenchmarkingLLMs in Web Traversal

**类别**: `主会-长文`

**作者**: Jialong Wu, Wenbiao Yin, Yong Jiang, Zhenglin Wang, Zekun Xi, Runnan Fang, Linhai Zhang, Yulan He, Deyu Zhou, Pengjun Xie, Fei Huang

**ID**: 2025.acl-long.508

**摘要(英文)**:
> Retrieval-augmented generation (RAG) demonstrates remarkable performance across tasks in open-domain question-answering. However, traditional search engines may retrieve shallow content, limiting the ability of LLMs to handle complex, multi-layered information. To address this, we introduce WebWalkerQA, a benchmark designed to assess the ability of LLMs to perform web traversal. It evaluates the capacity of LLMs to traverse a website’s subpages to extract high-quality data systematically. We propose WebWalker, which is a multi-agent framework that mimics human-like web navigation through an explore-critic paradigm. Extensive experimental results show that WebWalkerQA is challenging and demonstrates the effectiveness of RAG combined with WebWalker, through this horizontal and vertical integration in real-world scenarios.

**摘要(中文)**:
> 检索增强生成（RAG）在开放域问答任务中表现出了卓越的性能。然而，传统的搜索引擎可能检索浅层内容，限制了大语言模型处理复杂、多层信息的能力。为了解决这个问题，我们引入了 WebWalkerQA，这是一个旨在评估大语言模型执行网络遍历能力的基准。它评估大语言模型遍历网站子页面以系统地提取高质量数据的能力。我们提出了 WebWalker，它是一个多代理框架，通过探索-批评范式模仿类人的网络导航。大量的实验结果表明，WebWalkerQA 具有挑战性，并通过现实场景中的这种横向和纵向集成展示了 RAG 与 WebWalker 相结合的有效性。

---

## 80. S-RAG: A Novel Audit Framework for Detecting Unauthorized Use of Personal Data inRAGSystems

**类别**: `主会-长文`

**作者**: Zhirui Zeng, Jiamou Liu, Meng-Fen Chiang, Jialing He, Zijian Zhang

**ID**: 2025.acl-long.512

**摘要(英文)**:
> Retrieval-Augmented Generation (RAG) systems combine external data retrieval with text generation and have become essential in applications requiring accurate and context-specific responses. However, their reliance on external data raises critical concerns about unauthorized collection and usage of personal information. To ensure compliance with data protection regulations like GDPR and detect improper use of data, we propose the Shadow RAG Auditing Data Provenance (S-RAG) framework. S-RAG enables users to determine whether their textual data has been utilized in RAG systems, even in black-box settings with no prior system knowledge. It is effective across open-source and closed-source RAG systems and resilient to defense strategies. Experiments demonstrate that S-RAG achieves an improvement in Accuracy by 19.9% (compared to the best baseline), while maintaining strong performance under adversarial defenses. Furthermore, we analyze how the auditor’s knowledge of the target system affects performance, offering practical insights for privacy-preserving AI systems. Our code is open-sourced online.

**摘要(中文)**:
> 检索增强生成 (RAG) 系统将外部数据检索与文本生成相结合，在需要准确且针对特定上下文的响应的应用中已变得至关重要。然而，他们对外部数据的依赖引发了对未经授权收集和使用个人信息的严重担忧。为了确保遵守 GDPR 等数据保护法规并检测数据的不当使用，我们提出了 Shadow RAG 审计数据来源 (S-RAG) 框架。 S-RAG 使用户能够确定其文本数据是否已在 RAG 系统中使用，即使在没有事先系统知识的黑盒设置中也是如此。它在开源和闭源 RAG 系统中都很有效，并且能够适应防御策略。实验表明，S-RAG 的准确率提高了 19.9%（与最佳基线相比），同时在对抗性防御下保持了强劲的性能。此外，我们还分析了审计员对目标系统的了解如何影响性能，为保护隐私的人工智能系统提供了实用的见解。我们的代码是在线开源的。

---

## 81. GainRAG: Preference Alignment in Retrieval-Augmented Generation through Gain Signal Synthesis

**类别**: `主会-长文`

**作者**: Yi Jiang, Sendong Zhao, Jianbo Li, Haochun Wang, Bing Qin

**ID**: 2025.acl-long.527

**摘要(英文)**:
> The Retrieval-Augmented Generation (RAG) framework introduces a retrieval module to dynamicaslly inject retrieved information into the input context of large language models (LLMs), and has demonstrated significant success in various NLP tasks. However, the current study points out that there is a preference gap between retrievers and LLMs in the RAG framework, which limit the further improvement of system performance. Some highly relevant passages may interfere with LLM reasoning because they contain complex or contradictory information; while some indirectly related or even inaccurate content may help LLM generate more accurate answers by providing suggestive information or logical clues. To solve this, we propose **GainRAG**, a novel approach that aligns the retriever’s and LLM’s preferences by defining a new metric, “gain’’, which measure how well an input passage contributes to correct outputs.We then propose a method to estimate these gain signals and train a middleware that aligns the preferences of the retriever and the LLM using only limited data.In addition, we introduce a pseudo-passage strategy to mitigate degradation.The experimental results on 6 datasets verify the effectiveness of GainRAG.

**摘要(中文)**:
> 检索增强生成 (RAG) 框架引入了检索模块，可将检索到的信息动态注入到大型语言模型 (LLM) 的输入上下文中，并在各种 NLP 任务中取得了显着的成功。然而，目前的研究指出，RAG框架中的检索者和LLM之间存在偏好差距，这限制了系统性能的进一步提升。一些高度相关的段落可能会干扰大语言模型的推理，因为它们包含复杂或矛盾的信息；而一些间接相关甚至不准确的内容可能会通过提供暗示性信息或逻辑线索来帮助LLM生成更准确的答案。为了解决这个问题，我们提出了**GainRAG**，这是一种新的方法，通过定义一个新的指标“增益”来调整检索器和大语言模型的偏好，“增益”衡量输入通道对正确输出的贡献程度。然后，我们提出了一种方法来估计这些增益信号并训练中间件，仅使用有限的数据来调整检索器和大语言模型的偏好。此外，我们引入了一种伪通道策略来减轻退化。6个数据集的实验结果验证了增益RAG。

---

## 82. DTCRS: Dynamic Tree Construction for Recursive Summarization

**类别**: `主会-长文`

**作者**: Guanran Luo, Zhongquan Jian, Wentao Qiu, Meihong Wang, Qingqiang Wu

**ID**: 2025.acl-long.536

**摘要(英文)**:
> Retrieval-Augmented Generation (RAG) mitigates the hallucination problem of Large Language Models (LLMs) by incorporating external knowledge. Recursive summarization constructs a hierarchical summary tree by clustering text chunks, integrating information from multiple parts of a document to provide evidence for abstractive questions involving multi-step reasoning. However, summary trees often contain a large number of redundant summary nodes, which not only increase construction time but may also negatively impact question answering. Moreover, recursive summarization is not suitable for all types of questions. We introduce DTCRS, a method that dynamically generates summary trees based on document structure and query semantics. DTCRS determines whether a summary tree is necessary by analyzing the question type. It then decomposes the question and uses the embeddings of sub-questions as initial cluster centers, reducing redundant summaries while improving the relevance between summaries and the question. Our approach significantly reduces summary tree construction time and achieves substantial improvements across three QA tasks. Additionally, we investigate the applicability of recursive summarization to different question types, providing valuable insights for future research.

**摘要(中文)**:
> 检索增强生成（RAG）通过整合外部知识来缓解大型语言模型（LLM）的幻觉问题。递归摘要通过对文本块进行聚类、集成来自文档多个部分的信息来构建层次摘要树，为涉及多步骤推理的抽象问题提供证据。然而，摘要树通常包含大量冗余摘要节点，这不仅增加了构建时间，还可能对问答产生负面影响。而且，递归总结并不适合所有类型的问题。我们引入了 DTCRS，一种基于文档结构和查询语义动态生成摘要树的方法。 DTCRS 通过分析问题类型来确定是否需要摘要树。然后分解问题并使用子问题的嵌入作为初始聚类中心，减少冗余摘要，同时提高摘要与问题之间的相关性。我们的方法显着减少了摘要树的构建时间，并在三个 QA 任务中实现了实质性改进。此外，我们研究了递归摘要对不同问题类型的适用性，为未来的研究提供了有价值的见解。

---

## 83. TC–RAG:Turing–CompleteRAG’s Case study on MedicalLLMSystems

**类别**: `主会-长文`

**作者**: Xinke Jiang, Yue Fang, Rihong Qiu, Haoyu Zhang, Yongxin Xu, Hao Chen, Wentao Zhang, Ruizhe Zhang, Yuchen Fang, Xinyu Ma, Xu Chu, Junfeng Zhao, Yasha Wang

**ID**: 2025.acl-long.558

**摘要(英文)**:
> In the pursuit of enhancing domain-specific Large Language Models (LLMs), Retrieval-Augmented Generation (RAG) emerges as a promising solution to mitigate issues such as hallucinations, outdated knowledge, and limited expertise in highly specialized queries. However, existing approaches to RAG fall short by neglecting system state variables, which are crucial for ensuring adaptive control, retrieval halting, and system convergence. In this paper, we introduce the Turing-Complete-RAG (TC-RAG) through rigorous proof, a novel framework that addresses these challenges by incorporating a Turing Complete System to manage state variables, thereby enabling more efficient and accurate knowledge retrieval. By leveraging a memory stack system with adaptive retrieval, reasoning, and planning capabilities, TC-RAG not only ensures the controlled halting of retrieval processes but also mitigates the accumulation of erroneous knowledge via Push and Pop actions. In the case study of the medical and general domain, our extensive experiments on seven real-world healthcare and general-domain datasets demonstrate the superiority of TC-RAG over existing methods in accuracy by over 7.20%. Our code, datasets and RAG resources have been available at https://github.com/Artessay/TC-RAG.

**摘要(中文)**:
> 为了增强特定领域的大语言模型 (LLM)，检索增强生成 (RAG) 作为一种有前途的解决方案出现，可以缓解幻觉、过时的知识和高度专业化查询中的专业知识有限等问题。然而，现有的 RAG 方法由于忽略了系统状态变量而存在不足，而系统状态变量对于确保自适应控制、检索停止和系统收敛至关重要。在本文中，我们通过严格的证明引入了图灵完备的RAG（TC-RAG），这是一种新颖的框架，通过结合图灵完备的系统来管理状态变量来解决这些挑战，从而实现更高效、更准确的知识检索。通过利用具有自适应检索、推理和规划功能的内存堆栈系统，TC-RAG 不仅可以确保检索过程的受控停止，还可以通过 Push 和 Pop 操作减少错误知识的积累。在医疗和一般领域的案例研究中，我们对七个现实世界的医疗保健和一般领域数据集进行了广泛的实验，证明 TC-RAG 的准确性比现有方法高出 7.20% 以上。我们的代码、数据集和 RAG 资源已在 https://github.com/Artessay/TC-RAG 上提供。

---

## 84. Divide-Then-Align: Honest Alignment based on the Knowledge Boundary ofRAG

**类别**: `主会-长文`

**作者**: Xin Sun, Jianan Xie, Zhongqi Chen, Qiang Liu, Shu Wu, Yuehe Chen, Bowen Song, Zilei Wang, Weiqiang Wang, Liang Wang

**ID**: 2025.acl-long.561

**摘要(英文)**:
> Large language models (LLMs) augmented with retrieval systems have significantly advanced natural language processing tasks by integrating external knowledge sources, enabling more accurate and contextually rich responses. To improve the robustness of such systems against noisy retrievals, Retrieval-Augmented Fine-Tuning (RAFT) has emerged as a widely adopted method. However, RAFT conditions models to generate answers even in the absence of reliable knowledge. This behavior undermines their reliability in high-stakes domains, where acknowledging uncertainty is critical. To address this issue, we propose Divide-Then-Align (DTA), a post-training approach designed to endow RAG systems with the ability to respond with “I don’t know” when the query is out of the knowledge boundary of both the retrieved passages and the model’s internal knowledge. DTA divides data samples into four knowledge quadrants and constructs tailored preference data for each quadrant, resulting in a curated dataset for Direct Preference Optimization (DPO). Experimental results on three benchmark datasets demonstrate that effectively balances accuracy with appropriate abstention, enhancing the reliability and trustworthiness of retrieval-augmented systems.

**摘要(中文)**:
> 通过检索系统增强的大型语言模型 (LLM) 通过集成外部知识源，显着推进了自然语言处理任务，从而实现更准确和上下文丰富的响应。为了提高此类系统对抗噪声检索的鲁棒性，检索增强微调（RAFT）已成为一种广泛采用的方法。然而，RAFT 使模型即使在缺乏可靠知识的情况下也能生成答案。这种行为破坏了它们在高风险领域的可靠性，在这些领域承认不确定性至关重要。为了解决这个问题，我们提出了 Divide-Then-Align (DTA)，这是一种训练后方法，旨在使 RAG 系统能够在查询超出检索到的段落和模型内部知识的知识边界时以“我不知道”做出响应。 DTA 将数据样本分为四个知识象限，并为每个象限构建量身定制的偏好数据，从而生成用于直接偏好优化 (DPO) 的精选数据集。三个基准数据集的实验结果表明，该方法有效地平衡了准确性和适当的弃权，从而提高了检索增强系统的可靠性和可信度。

---

## 85. Parenting: Optimizing Knowledge Selection of Retrieval-Augmented Language Models with Parameter Decoupling and Tailored Tuning

**类别**: `主会-长文`

**作者**: Yongxin Xu, Ruizhe Zhang, Xinke Jiang, Yujie Feng, Yuzhen Xiao, Xinyu Ma, Runchuan Zhu, Xu Chu, Junfeng Zhao, Yasha Wang

**ID**: 2025.acl-long.571

**摘要(英文)**:
> Retrieval-Augmented Generation (RAG) offers an effective solution to the issues faced by Large Language Models (LLMs) in hallucination generation and knowledge obsolescence by incorporating externally retrieved knowledge. However, existing methods lack effective control mechanisms for integrating internal and external knowledge. Inspired by human cognitive processes, we propose Parenting, a novel framework that decouples, identifies, and purposefully optimizes parameter subspaces related to adherence and robustness. Specifically, Parenting utilizes a key parameter mining method that combines forward and backward propagation signals to localize subspaces representing different capabilities. Then, Parenting employs a type-tailored tuning strategy, applying specific and appropriate optimizations to different subspaces, aiming to achieve a balanced enhancement of both adherence and robustness. Extensive experiments on various datasets and models validate the effectiveness and generalizability of our method. Our code is available at https://github.com/Nostradamus4869/Parenting.

**摘要(中文)**:
> 检索增强生成（RAG）通过结合外部检索的知识，为大型语言模型（LLM）在幻觉生成和知识过时中面临的问题提供了有效的解决方案。然而，现有方法缺乏整合内部和外部知识的有效控制机制。受人类认知过程的启发，我们提出了 Parenting，这是一种新颖的框架，可以解耦、识别和有目的地优化与依从性和鲁棒性相关的参数子空间。具体来说，Parenting 利用关键参数挖掘方法，结合前向和后向传播信号来定位代表不同能力的子空间。然后，Parenting采用针对类型的调整策略，对不同的子空间应用特定且适当的优化，旨在实现依从性和鲁棒性的平衡增强。对各种数据集和模型的广泛实验验证了我们方法的有效性和通用性。我们的代码可在 https://github.com/Nostradamus4869/Parenting 获取。

---

## 86. EpMAN: Episodic MemoryAttentioNfor Generalizing to Longer Contexts

**类别**: `主会-长文`

**作者**: Subhajit Chaudhury, Payel Das, Sarathkrishna Swaminathan, Georgios Kollias, Elliot Nelson, Khushbu Pahwa, Tejaswini Pedapati, Igor Melnyk, Matthew Riemer

**ID**: 2025.acl-long.574

**摘要(英文)**:
> Recent advances in Large Language Models (LLMs) have yielded impressive successes on many language tasks. However, efficient processing of long contexts using LLMs remains a significant challenge. We introduce **EpMAN** – a method for processing long contexts in an episodic memory module while holistically attending to semantically-relevant context chunks. Output from episodic attention is then used to reweigh the decoder’s self-attention to the stored KV cache of the context during training and generation. When an LLM decoder is trained using **EpMAN**, its performance on multiple challenging single-hop long-context recall and question-answering benchmarks is found to be stronger and more robust across the range from 16k to 256k tokens than baseline decoders trained with self-attention, and popular retrieval-augmented generation frameworks.

**摘要(中文)**:
> 大型语言模型 (LLM) 的最新进展在许多语言任务上取得了令人瞩目的成功。然而，使用大语言模型有效处理长上下文仍然是一个重大挑战。我们引入 **EpMAN** – 一种在情景记忆模块中处理长上下文的方法，同时全面关注语义相关的上下文块。然后，情景注意力的输出用于在训练和生成期间重新权衡解码器对存储的上下文 KV 缓存的自我注意力。当使用 **EpMAN** 训练 LLM 解码器时，发现其在多个具有挑战性的单跳长上下文回忆和问答基准上的性能在 16k 到 256k 标记的范围内比使用自注意力训练的基线解码器和流行的检索增强生成框架更强大和鲁棒。

---

## 87. UniLR: Unleashing the Power ofLLMs on Multiple Legal Tasks with a Unified Legal Retriever

**类别**: `主会-长文`

**作者**: Ang Li, Yiquan Wu, Yifei Liu, Ming Cai, Lizhi Qing, Shihang Wang, Yangyang Kang, Chengyuan Liu, Fei Wu, Kun Kuang

**ID**: 2025.acl-long.584

**摘要(英文)**:
> Despite the impressive capabilities of LLMs, they often generate content with factual inaccuracies in LegalAI, which may lead to serious legal consequences. Retrieval-Augmented Generation (RAG), a promising approach, can conveniently integrate specialized knowledge into LLMs. In practice, there are diverse legal knowledge retrieval demands (e.g. law articles and similar cases). However, existing retrieval methods are either designed for general domains, struggling with legal knowledge, or tailored for specific legal tasks, unable to handle diverse legal knowledge types. Therefore, we propose a novel **Uni**fied **L**egal **R**etriever (UniLR) capable of performing multiple legal retrieval tasks for LLMs. Specifically, we introduce attention supervision to guide the retriever in focusing on key elements during knowledge encoding. Next, we design a graph-based method to integrate meta information through a heterogeneous graph, further enriching the knowledge representation. These two components work together to enable UniLR to capture the essence of knowledge hidden beneath formats. Extensive experiments on multiple datasets of common legal tasks demonstrate that UniLR achieves the best retrieval performance and can significantly enhance the performance of LLM.

**摘要(中文)**:
> 尽管大语言模型拥有令人印象深刻的能力，但他们经常在 LegalAI 中生成与事实不准确的内容，这可能会导致严重的法律后果。检索增强生成（RAG）是一种很有前景的方法，可以方便地将专业知识整合到大语言模型中。实践中，法律知识检索需求多种多样（如法律文章、类案）。然而，现有的检索方法要么是为一般领域设计的，与法律知识作斗争，要么是为特定的法律任务量身定制的，无法处理多样化的法律知识类型。因此，我们提出了一种新颖的**Uni**fied **L**egal **R**etriever (UniLR)，能够为大语言模型执行多种法律检索任务。具体来说，我们引入注意力监督来引导检索器在知识编码过程中关注关键元素。接下来，我们设计了一种基于图的方法，通过异构图集成元信息，进一步丰富知识表示。这两个组件协同工作，使 UniLR 能够捕获隐藏在格式之下的知识的本质。在常见法律任务的多个数据集上进行的大量实验表明，UniLR 实现了最佳的检索性能，并且可以显着提高 LLM 的性能。

---

## 88. GraphInsight: Unlocking Insights in Large Language Models for Graph Structure Understanding

**类别**: `主会-长文`

**作者**: Yukun Cao, Shuo Han, Zengyi Gao, Zezhong Ding, Xike Xie, S Kevin Zhou

**ID**: 2025.acl-long.591

**摘要(英文)**:
> Although Large Language Models (LLMs) have demonstrated potential in processing graphs, they struggle with comprehending graphical structure information through prompts of graph description sequences, especially as the graph size increases. We attribute this challenge to the uneven memory performance of LLMs across different positions in graph description sequences, known as ”Positional bias”. To address this, we propose GraphInsight, a novel framework aimed at improving LLMs’ comprehension of both macro- and micro-level graphical information. GraphInsight is grounded in two key strategies: 1) placing critical graphical information in positions where LLMs exhibit stronger memory performance, and 2) investigating a lightweight external knowledge base for regions with weaker memory performance, inspired by retrieval-augmented generation (RAG). Moreover, GraphInsight explores integrating these two strategies into LLM agent processes for composite graph tasks that require multi-step reasoning. Extensive empirical studies on benchmarks with a wide range of evaluation tasks show that GraphInsight significantly outperforms all other graph description methods (e.g., prompting techniques and reordering strategies) in understanding graph structures of varying sizes.

**摘要(中文)**:
> 尽管大型语言模型（LLM）在处理图形方面表现出了潜力，但它们很难通过图形描述序列的提示来理解图形结构信息，尤其是当图形尺寸增加时。我们将这一挑战归因于大语言模型在图描述序列中不同位置上的记忆性能不均匀，称为“位置偏差”。为了解决这个问题，我们提出了 GraphInsight，这是一个旨在提高大语言模型对宏观和微观图形信息的理解的新颖框架。 GraphInsight 基于两个关键策略：1）将关键图形信息放置在大语言模型表现出更强记忆性能的位置，2）受检索增强生成（RAG）的启发，针对记忆性能较弱的区域研究轻量级外部知识库。此外，GraphInsight 探索将这两种策略集成到 LLM 代理流程中，以执行需要多步骤推理的复合图任务。对具有广泛评估任务的基准的广泛实证研究表明，GraphInsight 在理解不同大小的图结构方面显着优于所有其他图描述方法（例如提示技术和重新排序策略）。

---

## 89. HomeBench: EvaluatingLLMs in Smart Homes with Valid and Invalid Instructions Across Single and Multiple Devices

**类别**: `主会-长文`

**作者**: Silin Li, Yuhang Guo, Jiashu Yao, Zeming Liu, Haifeng Wang

**ID**: 2025.acl-long.597

**摘要(英文)**:
> Large language models (LLMs) have the potential to revolutionize smart home assistants by enhancing their ability to accurately understand user needs and respond appropriately, which is extremely beneficial for building a smarter home environment. While recent studies have explored integrating LLMs into smart home systems, they primarily focus on handling straightforward, valid single-device operation instructions. However, real-world scenarios are far more complex and often involve users issuing invalid instructions or controlling multiple devices simultaneously. These have two main challenges: LLMs must accurately identify and rectify errors in user instructions and execute multiple user instructions perfectly. To address these challenges and advance the development of LLM-based smart home assistants, we introduce HomeBench, the first smart home dataset with valid and invalid instructions across single and multiple devices in this paper. We have experimental results on 13 distinct LLMs; e.g., GPT-4o achieves only a 0.0% success rate in the scenario of invalid multi-device instructions, revealing that the existing state-of-the-art LLMs still cannot perform well in this situation even with the help of in-context learning, retrieval-augmented generation, and fine-tuning. Our code and dataset are publicly available at https://github.com/BITHLP/HomeBench.

**摘要(中文)**:
> 大语言模型（LLM）有潜力通过增强智能家居助手准确理解用户需求并做出适当响应的能力来彻底改变智能家居助手，这对于构建更智能的家居环境极为有利。虽然最近的研究探索了将大语言模型集成到智能家居系统中，但它们主要侧重于处理简单、有效的单设备操作指令。然而，现实世界的场景要复杂得多，通常涉及用户发出无效指令或同时控制多个设备。这些面临两个主要挑战：大语言模型必须准确识别和纠正用户指令中的错误，并完美执行多个用户指令。为了应对这些挑战并推进基于 LLM 的智能家居助手的开发，我们在本文中引入了 HomeBench，这是第一个具有跨单个和多个设备的有效和无效指令的智能家居数据集。我们对 13 个不同的大语言模型有实验结果；例如，GPT-4o 在无效多设备指令的情况下仅实现了 0.0% 的成功率，这表明即使借助上下文学习、检索增强生成和微调，现有最先进的 LLM 在这种情况下仍然无法表现良好。我们的代码和数据集可在 https://github.com/BITHLP/HomeBench 上公开获取。

---

## 90. WavRAG: Audio-Integrated Retrieval Augmented Generation for Spoken Dialogue Models

**类别**: `主会-长文`

**作者**: Yifu Chen, Shengpeng Ji, Haoxiao Wang, Ziqing Wang, Siyu Chen, Jinzheng He, Jin Xu, Zhou Zhao

**ID**: 2025.acl-long.613

**摘要(英文)**:
> Retrieval Augmented Generation (RAG) has gained widespread adoption owing to its capacity to empower large language models (LLMs) to integrate external knowledge. However, existing RAG frameworks are primarily designed for text-based LLMs and rely on Automatic Speech Recognition to process speech input, which discards crucial audio information, risks transcription errors, and increases computational overhead. Therefore, we introduce WavRAG, the first retrieval augmented generation framework with native, end-to-end audio support. WavRAG offers two key features: 1) Bypassing ASR, WavRAG directly processes raw audio for both embedding and retrieval. 2) WavRAG integrates audio and text into a unified knowledge representation. Specifically, we propose the WavRetriever to facilitate the retrieval from a text-audio hybrid knowledge base, and further enhance the in-context capabilities of spoken dialogue models through the integration of chain-of-thought reasoning. In comparison to state-of-the-art ASR-Text RAG pipelines, WavRAG achieves comparable retrieval performance while delivering a 10x acceleration. Furthermore, WavRAG’s unique text-audio hybrid retrieval capability extends the boundaries of RAG to the audio modality.

**摘要(中文)**:
> 检索增强生成 (RAG) 因其能够使大型语言模型 (LLM) 集成外部知识而获得广泛采用。然而，现有的 RAG 框架主要是为基于文本的大语言模型而设计的，并依赖自动语音识别来处理语音输入，这会丢弃关键的音频信息、存在转录错误的风险并增加计算开销。因此，我们引入了 WavRAG，这是第一个具有本机端到端音频支持的检索增强生成框架。 WavRAG 提供两个关键功能：1) 绕过 ASR，WavRAG 直接处理原始音频以进行嵌入和检索。 2）WavRAG将音频和文本集成为统一的知识表示。具体来说，我们提出了 WavRetriever 来促进文本-音频混合知识库的检索，并通过集成思维链推理进一步增强口语对话模型的上下文能力。与最先进的 ASR-Text RAG 管道相比，WavRAG 实现了相当的检索性能，同时提供 10 倍的加速。此外，WavRAG 独特的文本音频混合检索功能将 RAG 的边界扩展到了音频模式。

---

## 91. RankCoT: Refining Knowledge for Retrieval-Augmented Generation through Ranking Chain-of-Thoughts

**类别**: `主会-长文`

**作者**: Mingyan Wu, Zhenghao Liu, Yukun Yan, Xinze Li, Shi Yu, Zheni Zeng, Yu Gu, Ge Yu

**ID**: 2025.acl-long.629

**摘要(英文)**:
> Retrieval-Augmented Generation (RAG) enhances the performance of Large Language Models (LLMs) by incorporating external knowledge. However, LLMs still encounter challenges in effectively utilizing the knowledge from retrieved documents, often being misled by irrelevant or noisy information. To address this issue, we introduce RankCoT, a knowledge refinement method that incorporates reranking signals in generating CoT-based summarization for knowledge refinement based on given query and all retrieval documents. During training, RankCoT prompts the LLM to generate Chain-of-Thought (CoT) candidates based on the query and individual documents. It then fine-tunes the LLM to directly reproduce the best CoT from these candidate outputs based on all retrieved documents, which requires LLM to filter out irrelevant documents during generating CoT-style summarization. Additionally, RankCoT incorporates a self-reflection mechanism that further refines the CoT outputs, resulting in higher-quality training data. Our experiments demonstrate the effectiveness of RankCoT, showing its superior performance over other knowledge refinement models. Further analysis reveals that RankCoT can provide shorter but effective refinement results, enabling the generator to produce more accurate answers. All code and data are available at https://github.com/NEUIR/RankCoT.

**摘要(中文)**:
> 检索增强生成 (RAG) 通过整合外部知识来增强大型语言模型 (LLM) 的性能。然而，大语言模型在有效利用检索到的文档中的知识方面仍然面临挑战，经常被不相关或嘈杂的信息误导。为了解决这个问题，我们引入了 RankCoT，这是一种知识细化方法，它结合了重新排序信号来生成基于 CoT 的摘要，以根据给定查询和所有检索文档进行知识细化。在训练期间，RankCoT 提示大语言模型根据查询和单个文档生成思维链 (CoT) 候选者。然后，它对 LLM 进行微调，以根据所有检索到的文档直接从这些候选输出中重现最佳 CoT，这要求 LLM 在生成 CoT 式摘要期间过滤掉不相关的文档。此外，RankCoT 还采用了自我反思机制，可进一步细化 CoT 输出，从而产生更高质量的训练数据。我们的实验证明了 RankCoT 的有效性，显示了其优于其他知识细化模型的性能。进一步的分析表明，RankCoT 可以提供更短但有效的细化结果，使生成器能够产生更准确的答案。所有代码和数据均可在 https://github.com/NEUIR/RankCoT 上获取。

---

## 92. EfficientOpAmp Adaptation for Zoom Attention to Golden Contexts

**类别**: `主会-长文`

**作者**: Haoyuan Wu, Rui Ming, Haisheng Zheng, Zhuolun He, Bei Yu

**ID**: 2025.acl-long.653

**摘要(英文)**:
> Large language models (LLMs) have shown significant promise in question-answering (QA) tasks, particularly in retrieval-augmented generation (RAG) scenarios and long-context applications. However, their performance is hindered by noisy reference documents, which often distract from essential information. Despite fine-tuning efforts, Transformer-based architectures struggle to prioritize relevant content. This is evidenced by their tendency to allocate disproportionate attention to irrelevant or later-positioned documents. Recent work proposes the differential attention mechanism to address this issue, but this mechanism is limited by an unsuitable common-mode rejection ratio (CMRR) and high computational costs. Inspired by the operational amplifier (OpAmp), we propose the OpAmp adaptation to address these challenges, which is implemented with adapters efficiently. By integrating the adapter into pre-trained Transformer blocks, our approach enhances focus on the golden context without costly training from scratch. Empirical evaluations on noisy-context benchmarks reveal that our Qwen2.5-OpAmp-72B model, trained with our OpAmp adaptation, surpasses the performance of state-of-the-art LLMs, including DeepSeek-V3 and GPT-4o.Our code is available at https://github.com/wuhy68/OpampAdapter.

**摘要(中文)**:
> 大型语言模型 (LLM) 在问答 (QA) 任务中显示出巨大的前景，特别是在检索增强生成 (RAG) 场景和长上下文应用中。然而，它们的性能受到嘈杂的参考文档的阻碍，这些参考文档常常分散对重要信息的注意力。尽管做出了微调的努力，基于 Transformer 的架构仍难以确定相关内容的优先级。他们倾向于将过多的注意力分配给不相关或较晚放置的文档，这一点就证明了这一点。最近的工作提出了差分注意机制来解决这个问题，但该机制受到不合适的共模抑制比（CMRR）和高计算成本的限制。受运算放大器 (OpAmp) 的启发，我们提出了 OpAmp 适配方案来应对这些挑战，并通过适配器有效实现。通过将适配器集成到预先训练的 Transformer 块中，我们的方法增强了对黄金上下文的关注，而无需从头开始进行昂贵的培训。对噪声环境基准的实证评估表明，我们的 Qwen2.5-OpAmp-72B 模型经过我们的 OpAmp 适配训练，超越了最先进的 LLM 的性能，包括 DeepSeek-V3 和 GPT-4o。我们的代码可在 https://github.com/wuhy68/OpampAdapter 上获取。

---

## 93. UniRAG: Unified Query Understanding Method for Retrieval Augmented Generation

**类别**: `主会-长文`

**作者**: Rui Li, Liyang He, Qi Liu, Zheng Zhang, Heng Yu, Yuyang Ye, Linbo Zhu, Yu Su

**ID**: 2025.acl-long.693

**摘要(英文)**:
> Retrieval-Augmented Generation (RAG) technology effectively addresses the issues of knowledge update lag and hallucinations in large language models (LLMs) by integrating internal and external knowledge. Existing query augmentation methods improve RAG’s performance in handling complex queries but face two key challenges: (1) the separation of query augmentation and encoding tasks, which hinders information sharing and introduces cumulative errors, and (2) the difficulty of selecting the optimal augmentation strategy for different scenarios. In this work, we propose UniRAG, a unified framework for query understanding in RAG. UniRAG employs a decoder-only LLM to jointly perform query augmentation and encoding, eliminating task separation. To facilitate adaptive query augmentation, we categorize existing techniques into query paraphrasing, query expansion, and query abstraction. Our model learns to select the optimal augmentation strategy based on user queries, leveraging retrieval and generation outputs as feedback. Experimental results show that UniRAG significantly outperforms traditional query augmentation methods in five knowledge-intensive benchmark tasks in both closed and open domain question answering.

**摘要(中文)**:
> 检索增强生成（RAG）技术通过整合内部和外部知识，有效解决了大语言模型（LLM）知识更新滞后和幻觉的问题。现有的查询增强方法提高了 RAG 处理复杂查询的性能，但面临两个关键挑战：（1）查询增强和编码任务分离，这阻碍了信息共享并引入累积错误；（2）难以针对不同场景选择最佳增强策略。在这项工作中，我们提出了 UniRAG，这是 RAG 中查询理解的统一框架。 UniRAG 采用仅解码器的 LLM 联合执行查询增强和编码，从而消除任务分离。为了促进自适应查询增强，我们将现有技术分为查询释义、查询扩展和查询抽象。我们的模型学习根据用户查询选择最佳增强策略，利用检索和生成输出作为反馈。实验结果表明，UniRAG 在封闭域和开放域问答的五个知识密集型基准任务中显着优于传统查询增强方法。

---

## 94. ChineseSafetyQA: A Safety Short-form Factuality Benchmark for Large Language Models

**类别**: `主会-长文`

**作者**: Yingshui Tan, Boren Zheng, Baihui Zheng, Kerui Cao, Huiyun Jing, Jincheng Wei, Jiaheng Liu, Yancheng He, Wenbo Su, Xiaoyong Zhu, Bo Zheng, Kaifu Zhang

**ID**: 2025.acl-long.732

**摘要(英文)**:
> With the rapid advancement of Large Language Models (LLMs), significant safety concerns have emerged. Fundamentally, the safety of large language models is closely linked to the accuracy, comprehensiveness, and clarity of their understanding of safety knowledge, particularly in domains such as law, policy and ethics. This factuality ability is crucial in determining whether these models can be deployed and applied safely and compliantly within specific regions. To address these challenges and better evaluate the factuality ability of LLMs to answer short question, we introduce the Chinese SafetyQA benchmark. Chinese SafetyQA has several properties (i.e., Chinese, Diverse, High-quality, Static, Easy-to-evaluate, safety-related, harmless). Based on Chinese SafetyQA, we perform a comprehensive evaluation on the factuality abilities of existing LLMs and analyze how these capabilities relate to LLM abilities, e.g., RAG ability and robustness against attacks.

**摘要(中文)**:
> 随着大型语言模型（LLM）的快速发展，出现了重大的安全问题。从根本上来说，大型语言模型的安全性与其对安全知识理解的准确性、全面性和清晰度密切相关，特别是在法律、政策和伦理等领域。这种真实性能力对于确定这些模型能否在特定区域内安全、合规地部署和应用至关重要。为了应对这些挑战并更好地评估大语言模型回答简短问题的事实能力，我们引入了中国 SafetyQA 基准。中文安全QA具有多种特性（即中文、多样化、高质量、静态、易于评估、安全相关、无害）。基于中国的SafetyQA，我们对现有LLM的事实能力进行了全面的评估，并分析了这些能力与LLM能力的关系，例如RAG能力和抗攻击的鲁棒性。

---

## 95. Towards Omni-RAG: Comprehensive Retrieval-Augmented Generation for Large Language Models in Medical Applications

**类别**: `主会-长文`

**作者**: Zhe Chen, Yusheng Liao, Shuyang Jiang, Pingjie Wang, YiQiu Guo, Yanfeng Wang, Yu Wang

**ID**: 2025.acl-long.742

**摘要(英文)**:
> Large language models hold promise for addressing medical challenges, such as medical diagnosis reasoning, research knowledge acquisition, clinical decision-making, and consumer health inquiry support. However, they often generate hallucinations due to limited medical knowledge. Incorporating external knowledge is therefore critical, which necessitates multi-source knowledge acquisition. We address this challenge by framing it as a source planning problem, which is to formulate context-appropriate queries tailored to the attributes of diverse sources. Existing approaches either overlook source planning or fail to achieve it effectively due to misalignment between the model’s expectation of the sources and their actual content. To bridge this gap, we present MedOmniKB, a repository comprising multigenre and multi-structured medical knowledge sources. Leveraging these sources, we propose the Source Planning Optimisation method, which enhances multi-source utilisation. Our approach involves enabling an expert model to explore and evaluate potential plans while training a smaller model to learn source alignment. Experimental results demonstrate that our method substantially improves multi-source planning performance, enabling the optimised small model to achieve state-of-the-art results in leveraging diverse medical knowledge sources.

**摘要(中文)**:
> 大型语言模型有望解决医学挑战，例如医学诊断推理、研究知识获取、临床决策和消费者健康查询支持。然而，由于医学知识有限，他们常常产生幻觉。因此，整合外部知识至关重要，这就需要获取多源知识。我们通过将其视为源规划问题来应对这一挑战，即根据不同源的属性制定适合上下文的查询。现有的方法要么忽视了源规划，要么由于模型对源的期望与其实际内容之间的不一致而无法有效实现源规划。为了弥补这一差距，我们推出了 MedOmniKB，这是一个包含多流派和多结构医学知识源的存储库。利用这些资源，我们提出了资源规划优化方法，该方法增强了多源利用率。我们的方法包括使专家模型能够探索和评估潜在的计划，同时训练较小的模型来学习源对齐。实验结果表明，我们的方法大大提高了多源规划性能，使优化的小模型能够在利用不同的医学知识源方面取得最先进的结果。

---

## 96. MolRAG: Unlocking the Power of Large Language Models for Molecular Property Prediction

**类别**: `主会-长文`

**作者**: Ziting Xian, Jiawei Gu, Lingbo Li, Shangsong Liang

**ID**: 2025.acl-long.755

**摘要(英文)**:
> Recent LLMs exhibit limited effectiveness on molecular property prediction task due to the semantic gap between molecular representations and natural language, as well as the lack of domain-specific knowledge. To address these challenges, we propose MolRAG, a Retrieval-Augmented Generation framework integrating Chain-of-Thought reasoning for molecular property prediction. MolRAG operates by retrieving structurally analogous molecules as contextual references to guide stepwise knowledge reasoning through chemical structure-property relationships. This dual mechanism synergizes molecular similarity analysis with structured inference, while generating human-interpretable rationales grounded in domain knowledge. Experimental results show MolRAG outperforms pre-trained LLMs on four datasets, and even matches supervised methods, achieving performance gains of 1.1%–45.7% over direct prediction approaches, demonstrating versatile effectiveness. Our code is available at https://github.com/AcaciaSin/MolRAG.

**摘要(中文)**:
> 由于分子表示和自然语言之间的语义差距以及缺乏特定领域的知识，最近的大语言模型在分子特性预测任务上表现出有限的有效性。为了应对这些挑战，我们提出了 MolRAG，一种集成了用于分子属性预测的思维链推理的检索增强生成框架。 MolRAG 的工作原理是检索结构相似的分子作为上下文参考，通过化学结构-性质关系指导逐步知识推理。这种双重机制将分子相似性分析与结构化推理相结合，同时生成基于领域知识的人类可解释的基本原理。实验结果表明，MolRAG 在四个数据集上的表现优于预训练的 LLM，甚至与监督方法相匹配，比直接预测方法实现了 1.1%–45.7% 的性能提升，展示了多种有效性。我们的代码可在 https://github.com/AcaciaSin/MolRAG 获取。

---

## 97. Removal of Hallucination on Hallucination: Debate-AugmentedRAG

**类别**: `主会-长文`

**作者**: Wentao Hu, Wengyu Zhang, Yiyang Jiang, Chen Jason Zhang, Xiaoyong Wei, Li Qing

**ID**: 2025.acl-long.770

**摘要(英文)**:
> Retrieval-Augmented Generation (RAG) enhances factual accuracy by integrating external knowledge, yet it introduces a critical issue: erroneous or biased retrieval can mislead generation, compounding hallucinations, a phenomenon we term Hallucination on Hallucination. To address this, we propose Debate-Augmented RAG (DRAG), a training-free framework that integrates Multi-Agent Debate (MAD) mechanisms into both retrieval and generation stages. In retrieval, DRAG employs structured debates among proponents, opponents, and judges to refine retrieval quality and ensure factual reliability. In generation, DRAG introduces asymmetric information roles and adversarial debates, enhancing reasoning robustness and mitigating factual inconsistencies. Evaluations across multiple tasks demonstrate that DRAG improves retrieval reliability, reduces RAG-induced hallucinations, and significantly enhances overall factual accuracy. Our code is available at https://github.com/Huenao/Debate-Augmented-RAG.

**摘要(中文)**:
> 检索增强生成（RAG）通过整合外部知识来提高事实准确性，但它引入了一个关键问题：错误或有偏见的检索可能会误导生成，加剧幻觉，我们将这种现象称为“幻觉上的幻觉”。为了解决这个问题，我们提出了辩论增强 RAG (DRAG)，这是一种无需训练的框架，它将多智能体辩论 (MAD) 机制集成到检索和生成阶段。在检索中，DRAG 采用支持者、反对者和评判者之间的结构化辩论来提高检索质量并确保事实可靠性。在生成过程中，DRAG 引入了不对称信息角色和对抗性辩论，增强了推理的稳健性并减少了事实的不一致。跨多个任务的评估表明，DRAG 提高了检索可靠性，减少了 RAG 引起的幻觉，并显着提高了整体事实准确性。我们的代码可在 https://github.com/Huenao/Debate-Augmented-RAG 获取。

---

## 98. RAEmoLLM: Retrieval AugmentedLLMs for Cross-Domain Misinformation Detection Using In-Context Learning Based on Emotional Information

**类别**: `主会-长文`

**作者**: Zhiwei Liu, Kailai Yang, Qianqian Xie, Christine de Kock, Sophia Ananiadou, Eduard Hovy

**ID**: 2025.acl-long.806

**摘要(英文)**:
> Misinformation is prevalent in various fields such as education, politics, health, etc., causing significant harm to society. However, current methods for cross-domain misinformation detection rely on effort- and resource-intensive fine-tuning and complex model structures. With the outstanding performance of LLMs, many studies have employed them for misinformation detection. Unfortunately, they focus on in-domain tasks and do not incorporate significant sentiment and emotion features (which we jointly callaffect). In this paper, we propose RAEmoLLM, the first retrieval augmented (RAG) LLMs framework to address cross-domain misinformation detection using in-context learning based on affective information. RAEmoLLM includes three modules. (1) In the index construction module, we apply an emotional LLM to obtain affective embeddings from all domains to construct a retrieval database. (2) The retrieval module uses the database to recommend top K examples (text-label pairs) from source domain data for target domain contents. (3) These examples are adopted as few-shot demonstrations for the inference module to process the target domain content. The RAEmoLLM can effectively enhance the general performance of LLMs in cross-domain misinformation detection tasks through affect-based retrieval, without fine-tuning. We evaluate our framework on three misinformation benchmarks. Results show that RAEmoLLM achieves significant improvements compared to the other few-shot methods on three datasets, with the highest increases of 15.64%, 31.18%, and 15.73% respectively. This project is available at https://github.com/lzw108/RAEmoLLM.

**摘要(中文)**:
> 错误信息普遍存在于教育、政治、卫生等各个领域，给社会造成重大危害。然而，当前的跨域错误信息检测方法依赖于工作量和资源密集型的微调以及复杂的模型结构。由于大语言模型的出色表现，许多研究已将其用于错误信息检测。不幸的是，它们专注于领域内的任务，并且没有包含重要的情感和情感特征（我们统称为影响）。在本文中，我们提出了 RAEmoLLM，这是第一个检索增强 (RAG) LLM 框架，用于使用基于情感信息的上下文学习来解决跨域错误信息检测。 RAEmoLLM 包括三个模块。 （1）在索引构建模块中，我们应用情感LLM从所有领域获取情感嵌入来构建检索数据库。 (2) 检索模块使用数据库从源域数据中推荐前 K 个示例（文本标签对）以获取目标域内容。 (3) 这些例子被用作推理模块处理目标领域内容的小样本演示。 RAEmoLLM 通过基于情感的检索，无需微调，可以有效增强 LLM 在跨域错误信息检测任务中的总体性能。我们根据三个错误信息基准评估我们的框架。结果表明，在三个数据集上，RAEmoLLM 与其他少样本方法相比取得了显着的改进，最高提升分别为 15.64%、31.18% 和 15.73%。该项目位于 https://github.com/lzw108/RAEmoLLM。

---

## 99. RetroLLM: Empowering Large Language Models to Retrieve Fine-grained Evidence within Generation

**类别**: `主会-长文`

**作者**: Xiaoxi Li, Jiajie Jin, Yujia Zhou, Yongkang Wu, Zhonghua Li, Ye Qi, Zhicheng Dou

**ID**: 2025.acl-long.819

**摘要(英文)**:
> Large language models (LLMs) exhibit remarkable generative capabilities but often suffer from hallucinations. Retrieval-augmented generation (RAG) offers an effective solution by incorporating external knowledge, but existing methods still face several limitations: additional deployment costs of separate retrievers, redundant input tokens from retrieved text chunks, and the lack of joint optimization of retrieval and generation. To address these issues, we proposeRetroLLM, a unified framework that integrates retrieval and generation into a single, auto-regressive process, enabling LLMs to directly generate fine-grained evidence from the corpus with constrained decoding. Moreover, to mitigate false pruning in the process of constrained evidence generation, we introduce (1) hierarchical FM-Index constraints, which generate corpus-constrained clues to identify a subset of relevant documents before evidence generation, reducing irrelevant decoding space; and (2) a forward-looking constrained decoding strategy, which considers the relevance of future sequences to improve evidence accuracy. Extensive experiments on five open-domain QA datasets demonstrate RetroLLM’s superior performance across both in-domain and out-of-domain tasks. The code is available at https://anonymous.4open.science/r/RetroLLM-D95A.

**摘要(中文)**:
> 大型语言模型（LLM）表现出卓越的生成能力，但经常出现幻觉。检索增强生成（RAG）通过结合外部知识提供了有效的解决方案，但现有方法仍然面临一些限制：单独检索器的额外部署成本、检索文本块的冗余输入标记以及缺乏检索和生成的联合优化。为了解决这些问题，我们提出了RetroLLM，这是一个统一的框架，它将检索和生成集成到单个自回归过程中，使大语言模型能够通过受约束的解码直接从语料库生成细粒度的证据。此外，为了减少约束证据生成过程中的错误剪枝，我们引入了（1）分层FM-Index约束，它生成语料库约束线索以在证据生成之前识别相关文档的子集，减少不相关的解码空间； （2）前瞻性约束解码策略，考虑未来序列的相关性以提高证据准确性。对五个开放域 QA 数据集的广泛实验证明了 RetroLLM 在域内和域外任务中的卓越性能。该代码可在 https://anonymous.4open.science/r/RetroLLM-D95A 获取。

---

## 100. Shifting from Ranking to Set Selection for Retrieval Augmented Generation

**类别**: `主会-长文`

**作者**: Dahyun Lee, Yongrae Jo, Haeju Park, Moontae Lee

**ID**: 2025.acl-long.861

**摘要(英文)**:
> Retrieval in Retrieval-Augmented Generation (RAG) must ensure that retrieved passages are not only individually relevant but also collectively form a comprehensive set.Existing approaches primarily rerank top-kpassages based on their individual relevance, often failing to meet the information needs of complex queries in multi-hop question answering.In this work, we propose a set-wise passage selection approach and introduce SetR, which explicitly identifies the information requirements of a query through Chain-of-Thought reasoning and selects an optimal set of passages that collectively satisfy those requirements.Experiments on multi-hop RAG benchmarks show that SetR outperforms both proprietary LLM-based rerankers and open-source baselines in terms of answer correctness and retrieval quality, providing an effective and efficient alternative to traditional rerankers in RAG systems.The code is available at https://github.com/LGAI-Research/SetR

**摘要(中文)**:
> 检索增强生成（RAG）中的检索必须确保检索到的段落不仅单独相关，而且集体形成一个全面的集合。现有方法主要是根据个体相关性对 top-k 段落进行重新排序，往往无法满足多跳问答中复杂查询的信息需求。在这项工作中，我们提出了一种基于集合的段落选择方法并引入 SetR，它通过思维链推理明确识别查询的信息需求并选择最佳的多跳 RAG 基准测试表明，SetR 在答案正确性和检索质量方面优于基于 LLM 的专有重排序器和开源基线，为 RAG 系统中的传统重排序器提供了有效且高效的替代方案。代码可在 https://github.com/LGAI-Research/SetR 上获取。

---

## 101. Optimizing Question Semantic Space for Dynamic Retrieval-Augmented Multi-hop Question Answering

**类别**: `主会-长文`

**作者**: Linhao Ye, Lang Yu, Zhikai Lei, Qin Chen, Jie Zhou, Liang He

**ID**: 2025.acl-long.871

**摘要(英文)**:
> Retrieval-augmented generation (RAG) is usually integrated into large language models (LLMs) to mitigate hallucinations and knowledge obsolescence. Whereas, conventional one-step retrieve-and-read methods are insufficient for multi-hop question answering, facing challenges of retrieval semantic mismatching and the high cost in handling interdependent subquestions. In this paper, we propose Optimizing Question Semantic Space for Dynamic Retrieval-Augmented Multi-hop Question Answering (Q-DREAM). Q-DREAM consists of three key modules: (1) the Question Decomposition Module (QDM), which decomposes multi-hop questions into fine-grained subquestions; (2) the Subquestion Dependency Optimizer Module (SDOM), which models the interdependent relations of subquestions for better understanding; and (3) the Dynamic Passage Retrieval Module (DPRM), which aligns subquestions with relevant passages by optimizing the semantic embeddings.Experimental results across various benchmarks demonstrate that Q-DREAM significantly outperforms existing RAG methods, achieving state-of-the-art performance in both in-domain and out-of-domain settings. Notably, Q-DREAM also improves retrieval efficiency while maintaining high accuracy compared with recent baselines.

**摘要(中文)**:
> 检索增强生成（RAG）通常集成到大型语言模型（LLM）中，以减轻幻觉和知识过时。然而，传统的一步检索和读取方法不足以进行多跳问答，面临着检索语义不匹配和处理相互依赖的子问题的高成本的挑战。在本文中，我们提出了动态检索增强多跳问答（Q-DREAM）的优化问题语义空间。 Q-DREAM由三个关键模块组成：（1）问题分解模块（QDM），将多跳问题分解为细粒度的子问题； （2）子问题依赖优化器模块（SDOM），它对子问题的相互依赖关系进行建模，以便更好地理解； （3）动态段落检索模块（DPRM），通过优化语义嵌入将子问题与相关段落对齐。各种基准测试的实验结果表明，Q-DREAM 显着优于现有的 RAG 方法，在域内和域外设置中实现了最先进的性能。值得注意的是，与最近的基线相比，Q-DREAM 还提高了检索效率，同时保持了较高的准确性。

---

## 102. The Distracting Effect: Understanding Irrelevant Passages inRAG

**类别**: `主会-长文`

**作者**: Chen Amiraz, Florin Cuconasu, Simone Filice, Zohar Karnin

**ID**: 2025.acl-long.892

**摘要(英文)**:
> A well-known issue with Retrieval Augmented Generation (RAG) is that retrieved passages that are irrelevant to the query sometimes distract the answer-generating LLM, causing it to provide an incorrect response. In this paper, we shed light on this core issue and formulate the distracting effect of a passage w.r.t. a query (and an LLM). We provide a quantifiable measure of the distracting effect of a passage and demonstrate its robustness across LLMs. Our research introduces novel methods for identifying and using hard distracting passages to improve RAG systems. By fine-tuning LLMs with these carefully selected distracting passages, we achieve up to a 7.5% increase in answering accuracy compared to counterparts fine-tuned on conventional RAG datasets. Our contribution is two-fold: first, we move beyond the simple binary classification of irrelevant passages as either completely unrelated vs. distracting, and second, we develop and analyze multiple methods for finding hard distracting passages. To our knowledge, no other research has provided such a comprehensive framework for identifying and utilizing hard distracting passages.

**摘要(中文)**:
> 检索增强生成 (RAG) 的一个众所周知的问题是，检索到的与查询无关的段落有时会分散生成答案的 LLM 的注意力，导致其提供错误的响应。在本文中，我们阐明了这个核心问题，并阐述了一段文字的分散注意力的效果。一个查询（和一个大语言模型）。我们提供了对段落分散注意力的影响的量化衡量方法，并证明了其在大语言模型中的稳健性。我们的研究引入了识别和使用难以分散注意力的段落来改进 RAG 系统的新方法。通过使用这些精心挑选的分散注意力的段落对 LLM 进行微调，与在传统 RAG 数据集上进行微调的同行相比，我们的回答准确性提高了 7.5%。我们的贡献有两个：首先，我们超越了将不相关的段落简单地二元分类为完全不相关和分散注意力的段落；其次，我们开发和分析了多种方法来查找难以分散注意力的段落。据我们所知，没有其他研究提供如此全面的框架来识别和利用难以分散注意力的段落。

---

## 103. RARE: Retrieval-Augmented Reasoning Enhancement for Large Language Models

**类别**: `主会-长文`

**作者**: Hieu Tran, Zonghai Yao, Zhichao Yang, Junda Wang, Yifan Zhang, Shuo Han, Feiyun Ouyang, Hong Yu

**ID**: 2025.acl-long.896

**摘要(英文)**:
> This work introduces RARE (Retrieval-Augmented Reasoning Enhancement), a versatile extension to the mutual reasoning framework (rStar), aimed at enhancing reasoning accuracy and factual integrity across large language models (LLMs) for complex, knowledge-intensive tasks such as medical and commonsense reasoning. RARE incorporates two innovative actions within the Monte Carlo Tree Search (MCTS) framework: (A6), which generates search queries based on the initial problem statement, performs information retrieval using those queries, and augments reasoning with the retrieved data to formulate the final answer; and (A7), which leverages information retrieval specifically for generated sub-questions and re-answers these sub-questions with the relevant contextual information. Additionally, a Retrieval-Augmented Factuality Scorer is proposed to replace the original discriminator, prioritizing reasoning paths that meet high standards of factuality. Experimental results with LLaMA 3.1 show that RARE enables open-source LLMs to achieve competitive performance with top closed-source models like GPT-4 and GPT-4o. This research establishes RARE as a scalable solution for improving LLMs in domains where logical coherence and factual integrity are critical.

**摘要(中文)**:
> 这项工作引入了 RARE（检索增强推理增强），这是相互推理框架 (rStar) 的多功能扩展，旨在提高大型语言模型 (LLM) 的推理准确性和事实完整性，以完成复杂的知识密集型任务，例如医学和常识推理。 RARE 在蒙特卡罗树搜索 (MCTS) 框架中融入了两项创新操作： (A6)，它根据初始问题陈述生成搜索查询，使用这些查询执行信息检索，并使用检索到的数据增强推理以制定最终答案； (A7)，它利用专门针对生成的子问题的信息检索，并使用相关的上下文信息重新回答这些子问题。此外，还提出了检索增强事实性评分器来取代原始判别器，优先考虑满足高事实性标准的推理路径。 LLaMA 3.1 的实验结果表明，RARE 使开源 LLM 能够获得与 GPT-4 和 GPT-4o 等顶级闭源模型竞争的性能。这项研究将 RARE 确立为一种可扩展的解决方案，用于提高逻辑连贯性和事实完整性至关重要的领域的大语言模型。

---

## 104. Micro-Act: Mitigate Knowledge Conflict in Question Answering via Actionable Self-Reasoning

**类别**: `主会-长文`

**作者**: Nan Huo, Jinyang Li, Bowen Qin, Ge Qu, Xiaolong Li, Xiaodong Li, Chenhao Ma, Reynold Cheng

**ID**: 2025.acl-long.909

**摘要(英文)**:
> Retrieval-Augmented Generation (RAG) systems commonly suffer from **Knowledge Conflicts**, where retrieved external knowledge contradicts the inherent, parametric knowledge of large language models (LLMs). It adversely affects performance on downstream tasks such as question answering (QA). Existing approaches often attempt to mitigate conflicts by directly comparing two knowledge sources in a side-by-side manner, but this can overwhelm LLMs with extraneous or lengthy contexts, ultimately hindering their ability to identify and mitigate inconsistencies. To address this issue, we propose **Micro-Act** a framework with a hierarchical action space that automatically perceives context complexity and adaptively decomposes each knowledge source into a sequence of fine-grained comparisons. These comparisons are represented as actionable steps, enabling reasoning beyond the superficial context. Through extensive experiments on five benchmark datasets, Micro-Act consistently achieves significant increase in QA accuracy over state-of-the-art baselines across all 5 datasets and 3 conflict types, especially in temporal and semantic types where all baselines fail significantly. More importantly, Micro-Act exhibits robust performance on non-conflict questions simultaneously, highlighting its practical value in real-world RAG applications.

**摘要(中文)**:
> 检索增强生成 (RAG) 系统通常会遇到**知识冲突**，即检索到的外部知识与大型语言模型 (LLM) 固有的参数化知识相矛盾。它会对下游任务（例如问答 (QA)）的性能产生不利影响。现有的方法通常试图通过并排方式直接比较两个知识源来缓解冲突，但这可能会让大语言模型因无关或冗长的上下文而不知所措，最终阻碍他们识别和缓解不一致的能力。为了解决这个问题，我们提出了 **Micro-Act** 一个具有分层动作空间的框架，该框架可以自动感知上下文复杂性并自适应地将每个知识源分解为一系列细粒度的比较。这些比较被表示为可操作的步骤，使推理能够超越肤浅的背景。通过对 5 个基准数据集进行大量实验，Micro-Act 在所有 5 个数据集和 3 种冲突类型中始终实现了 QA 准确性相对于最先进基线的显着提高，特别是在所有基线均显着失败的时间和语义类型中。更重要的是，Micro-Act 在非冲突问题上同时表现出强大的性能，凸显了其在现实世界 RAG 应用中的实用价值。

---

## 105. A Reality Check on Context Utilisation for Retrieval-Augmented Generation

**类别**: `主会-长文`

**作者**: Lovisa Hagström, Sara Vera Marjanovic, Haeun Yu, Arnav Arora, Christina Lioma, Maria Maistro, Pepa Atanasova, Isabelle Augenstein

**ID**: 2025.acl-long.968

**摘要(英文)**:
> Retrieval-augmented generation (RAG) helps address the limitations of parametric knowledge embedded within a language model (LM). In real world settings, retrieved information can vary in complexity, yet most investigations of LM utilisation of context has been limited to synthetic text. We introduce DRUID (Dataset of Retrieved Unreliable, Insufficient and Difficult-to-understand contexts) with real-world queries and contexts manually annotated for stance. The dataset is based on the prototypical task of automated claim verification, for which automated retrieval of real-world evidence is crucial. We compare DRUID to synthetic datasets (CounterFact, ConflictQA) and find that artificial datasets often fail to represent the complexity and diversity of realistically retrieved context. We show that synthetic datasets exaggerate context characteristics rare in real retrieved data, which leads to inflated context utilisation results, as measured by our novel ACU score. Moreover, while previous work has mainly focused on singleton context characteristics to explain context utilisation, correlations between singleton context properties and ACU on DRUID are surprisingly small compared to other properties related to context source. Overall, our work underscores the need for real-world aligned context utilisation studies to represent and improve performance in real-world RAG settings.

**摘要(中文)**:
> 检索增强生成 (RAG) 有助于解决语言模型 (LM) 中嵌入的参数知识的局限性。在现实世界中，检索到的信息的复杂性可能有所不同，但大多数对 LM 对上下文的利用的研究仅限于合成文本。我们引入了 DRUID（检索到的不可靠、不足和难以理解的上下文数据集），其中包含手动注释立场的真实查询和上下文。该数据集基于自动索赔验证的原型任务，其中自动检索现实世界证据至关重要。我们将 DRUID 与合成数据集（CounterFact、ConflictQA）进行比较，发现人工数据集通常无法代表实际检索上下文的复杂性和多样性。我们表明，合成数据集夸大了真实检索数据中罕见的上下文特征，这导致上下文利用结果夸大，正如我们新颖的 ACU 分数所衡量的那样。此外，虽然之前的工作主要集中在单例上下文特征来解释上下文利用，但与上下文源相关的其他属性相比，单例上下文属性和 DRUID 上的 ACU 之间的相关性出人意料地小。总的来说，我们的工作强调了现实世界中对齐上下文利用研究的必要性，以代表和提高现实世界 RAG 设置中的性能。

---

## 106. FaithfulRAG: Fact-Level Conflict Modeling for Context-Faithful Retrieval-Augmented Generation

**类别**: `主会-长文`

**作者**: Qinggang Zhang, Zhishang Xiang, Yilin Xiao, Le Wang, Junhui Li, Xinrun Wang, Jinsong Su

**ID**: 2025.acl-long.1062

**摘要(英文)**:
> Large language models (LLMs) augmented with retrieval systems have demonstrated significant potential in handling knowledge-intensive tasks. However, these models often struggle with unfaithfulness issues, generating outputs that either ignore the retrieved context or inconsistently blend it with the LLM’s parametric knowledge. This issue is particularly severe in cases of knowledge conflict, where the retrieved context conflicts with the model’s parametric knowledge. While existing faithful RAG approaches enforce strict context adherence through well-designed prompts or modified decoding strategies, our analysis reveals a critical limitation: they achieve faithfulness by forcibly suppressing the model’s parametric knowledge, which undermines the model’s internal knowledge structure and increases the risk of misinterpreting the context. To this end, this paper proposes FaithfulRAG, a novel framework that resolves knowledge conflicts by explicitly modeling discrepancies between the model’s parametric knowledge and retrieved context. Specifically, FaithfulRAG identifies conflicting knowledge at the fact level and designs a self-thinking process, allowing LLMs to reason about and integrate conflicting facts before generating responses. Extensive experiments demonstrate that our method outperforms state-of-the-art methods. The code is available at https://github.com/DeepLearnXMU/Faithful-RAG.

**摘要(中文)**:
> 通过检索系统增强的大型语言模型（LLM）在处理知识密集型任务方面表现出了巨大的潜力。然而，这些模型经常与不忠实问题作斗争，生成的输出要么忽略检索到的上下文，要么不一致地将其与大语言模型的参数知识融合。在知识冲突的情况下，这个问题尤其严重，即检索到的上下文与模型的参数知识发生冲突。虽然现有的忠实 RAG 方法通过精心设计的提示或修改的解码策略强制严格遵守上下文，但我们的分析揭示了一个关键的局限性：它们通过强行抑制模型的参数知识来实现​​忠实，这破坏了模型的内部知识结构并增加了误解上下文的风险。为此，本文提出了 FaithfulRAG，这是一种新颖的框架，通过对模型的参数知识和检索到的上下文之间的差异进行显式建模来解决知识冲突。具体来说，FaithfulRAG 识别事实层面上的冲突知识，并设计一个自我思考过程，允许大语言模型在生成响应之前推理和整合冲突事实。大量的实验表明我们的方法优于最先进的方法。代码可在 https://github.com/DeepLearnXMU/Faithful-RAG 获取。

---

## 107. Mitigating Lost-in-Retrieval Problems in Retrieval Augmented Multi-Hop Question Answering

**类别**: `主会-长文`

**作者**: Rongzhi Zhu, Xiangyu Liu, Zequn Sun, Yiwei Wang, Wei Hu

**ID**: 2025.acl-long.1089

**摘要(英文)**:
> In this paper, we identify a critical problem, “lost-in-retrieval”, in retrieval-augmented multi-hop question answering (QA): the key entities are missed in LLMs’ sub-question decomposition. “Lost-in-retrieval” significantly degrades the retrieval performance, which disrupts the reasoning chain and leads to the incorrect answers. To resolve this problem, we propose a progressive retrieval and rewriting method, namely ChainRAG, which sequentially handles each sub-question by completing missing key entities and retrieving relevant sentences from a sentence graph for answer generation. Each step in our retrieval and rewriting process builds upon the previous one, creating a seamless chain that leads to accurate retrieval and answers. Finally, all retrieved sentences and sub-question answers are integrated to generate a comprehensive answer to the original question. We evaluate ChainRAG on three multi-hop QA datasets—MuSiQue, 2Wiki, and HotpotQA—using three large language models: GPT4o-mini, Qwen2.5-72B, and GLM-4-Plus. Empirical results demonstrate that ChainRAG consistently outperforms baselines in both effectiveness and efficiency.

**摘要(中文)**:
> 在本文中，我们确定了检索增强多跳问答（QA）中的一个关键问题“检索丢失”：大语言模型的子问题分解中丢失了关键实体。 “检索丢失”会显着降低检索性能，从而扰乱推理链并导致错误答案。为了解决这个问题，我们提出了一种渐进式检索和重写方法，即ChainRAG，它通过完成缺失的关键实体并从句子图中检索相关句子来顺序处理每个子问题以生成答案。我们的检索和重写过程中的每一步都建立在前一步的基础上，创建一个无缝的链条，从而实现准确的检索和答案。最后，整合所有检索到的句子和子问题答案，生成原始问题的综合答案。我们使用三种大型语言模型：GPT4o-mini、Qwen2.5-72B 和 GLM-4-Plus，在三个多跳 QA 数据集（MuSiQue、2Wiki 和 HotpotQA）上评估 ChainRAG。实证结果表明，ChainRAG 在有效性和效率方面始终优于基线。

---

## 108. Retrieval-Augmented Fine-Tuning With Preference Optimization For Visual Program Generation

**类别**: `主会-长文`

**作者**: Deokhyung Kang, Jeonghun Cho, Yejin Jeon, Sunbin Jang, Minsub Lee, Jawoon Cho, Gary Lee

**ID**: 2025.acl-long.1106

**摘要(英文)**:
> Visual programming languages (VPLs) allow users to create programs through graphical interfaces, which results in easier accessibility and their widespread usage in various domains. To further enhance this accessibility, recent research has focused on generating VPL code from user instructions using large language models (LLMs). Specifically, by employing prompting-based methods, these studies have shown promising results. Nevertheless, such approaches can be less effective for industrial VPLs such as Ladder Diagram (LD). LD is a pivotal language used in industrial automation processes and involves extensive domain-specific configurations, which are difficult to capture in a single prompt. In this work, we demonstrate that training-based methods outperform prompting-based methods for LD generation accuracy, even with smaller backbone models. Building on these findings, we propose a two-stage training strategy to further enhance VPL generation. First, we employ retrieval-augmented fine-tuning to leverage the repetitive use of subroutines commonly seen in industrial VPLs. Second, we apply direct preference optimization (DPO) to further guide the model toward accurate outputs, using systematically generated preference pairs through graph editing operations. Extensive experiments on real-world LD data demonstrate that our approach improves program-level accuracy by over 10% compared to supervised fine-tuning, which highlights its potential to advance industrial automation.

**摘要(中文)**:
> 可视化编程语言 (VPL) 允许用户通过图形界面创建程序，从而更容易访问并在各个领域广泛使用。为了进一步增强这种可访问性，最近的研究重点是使用大语言模型 (LLM) 从用户指令生成 VPL 代码。具体来说，通过采用基于提示的方法，这些研究显示出了有希望的结果。然而，此类方法对于梯形图 (LD) 等工业 VPL 来说效果可能较差。 LD 是工业自动化过程中使用的关键语言，涉及广泛的特定于领域的配置，这些配置很难在单个提示中捕获。在这项工作中，我们证明了基于训练的方法在 LD 生成准确性方面优于基于提示的方法，即使使用较小的骨干模型也是如此。基于这些发现，我们提出了一个两阶段训练策略来进一步增强 VPL 的生成。首先，我们采用检索增强微调来利用工业 VPL 中常见的子例程的重复使用。其次，我们应用直接偏好优化（DPO），通过图形编辑操作使用系统生成的偏好对，进一步引导模型获得准确的输出。对真实世界 LD 数据的大量实验表明，与监督微调相比，我们的方法将程序级精度提高了 10% 以上，这凸显了其推进工业自动化的潜力。

---

## 109. DRAE: Dynamic Retrieval-Augmented Expert Networks for Lifelong Learning and Task Adaptation in Robotics

**类别**: `主会-长文`

**作者**: Yayu Long, Kewei Chen, Long Jin, Mingsheng Shang

**ID**: 2025.acl-long.1127

**摘要(英文)**:
> We introduceDynamic Retrieval-Augmented Expert Networks (DRAE), a groundbreaking architecture that addresses the challenges of lifelong learning, catastrophic forgetting, and task adaptation by combining the dynamic routing capabilities of Mixture-of-Experts (MoE); leveraging the knowledge-enhancement power of Retrieval-Augmented Generation (RAG); incorporating a novel hierarchical reinforcement learning (RL) framework; and coordinating through ReflexNet-SchemaPlanner-HyperOptima (RSHO).DRAE dynamically routes expert models via a sparse MoE gating mechanism, enabling efficient resource allocation while leveraging external knowledge through parametric retrieval (P-RAG) to augment the learning process. We propose a new RL framework with ReflexNet for low-level task execution, SchemaPlanner for symbolic reasoning, and HyperOptima for long-term context modeling, ensuring continuous adaptation and memory retention. Experimental results show that DRAE significantly outperforms baseline approaches in long-term task retention and knowledge reuse, achieving an average task success rate of 82.5% across a set of dynamic robotic manipulation tasks, compared to 74.2% for traditional MoE models. Furthermore, DRAE maintains an extremely low forgetting rate, outperforming state-of-the-art methods in catastrophic forgetting mitigation. These results demonstrate the effectiveness of our approach in enabling flexible, scalable, and efficient lifelong learning for robotics.

**摘要(中文)**:
> 我们引入了动态检索增强专家网络（DRAE），这是一种突破性的架构，通过结合专家混合（MoE）的动态路由功能来解决终身学习、灾难性遗忘和任务适应的挑战；利用检索增强生成 (RAG) 的知识增强能力；纳入新颖的分层强化学习（RL）框架；并通过 ReflexNet-SchemaPlanner-HyperOptima (RSHO) 进行协调。DRAE 通过稀疏 MoE 门控机制动态路由专家模型，从而实现高效的资源分配，同时通过参数检索 (P-RAG) 利用外部知识来增强学习过程。我们提出了一个新的 RL 框架，其中 ReflexNet 用于低级任务执行，SchemaPlanner 用于符号推理，HyperOptima 用于长期上下文建模，确保持续适应和记忆保留。实验结果表明，DRAE 在长期任务保留和知识重用方面显着优于基线方法，在一组动态机器人操作任务中实现了 82.5% 的平均任务成功率，而传统 MoE 模型的平均任务成功率为 74.2%。此外，DRAE 保持极低的遗忘率，在灾难性遗忘缓解方面优于最先进的方法。这些结果证明了我们的方法在实现机器人技术灵活、可扩展和高效的终身学习方面的有效性。

---

## 110. MT-RAIG: Novel Benchmark and Evaluation Framework for Retrieval-Augmented Insight Generation over Multiple Tables

**类别**: `主会-长文`

**作者**: Kwangwook Seo, Donguk Kwon, Dongha Lee

**ID**: 2025.acl-long.1128

**摘要(英文)**:
> Recent advancements in table-based reasoning have expanded beyond factoid-level QA to address insight-level tasks, where systems should synthesize implicit knowledge in the table to provide explainable analyses. Although effective, existing studies remain confined to scenarios where a single gold table is given alongside the user query, failing to address cases where users seek comprehensive insights from multiple unknown tables. To bridge these gaps, we propose MT-RAIG Bench, design to evaluate systems on Retrieval-Augmented Insight Generation over Mulitple-Tables. Additionally, to tackle the suboptimality of existing automatic evaluation methods in the table domain, we further introduce a fine-grained evaluation framework MT-RAIG Eval, which achieves better alignment with human quality judgments on the generated insights. We conduct extensive experiments and reveal that even frontier LLMs still struggle with complex multi-table reasoning, establishing our MT-RAIG Bench as a challenging testbed for future research.

**摘要(中文)**:
> 基于表格的推理的最新进展已经超出事实级别的质量保证，以解决洞察级别的任务，其中系统应综合表格中的隐含知识以提供可解释的分析。虽然有效，但现有的研究仍然局限于与用户查询一起给出单个黄金表的场景，未能解决用户从多个未知表中寻求全面洞察的情况。为了弥补这些差距，我们提出了 MT-RAIG Bench，旨在评估多表检索增强洞察生成系统。此外，为了解决表领域现有自动评估方法的次优问题，我们进一步引入了细粒度评估框架 MT-RAIG Eval，它可以更好地与人类对生成的见解的质量判断保持一致。我们进行了广泛的实验，结果表明，即使是前沿的大语言模型仍然难以应对复杂的多表推理，从而将我们的 MT-RAIG 基准建立为未来研究的具有挑战性的测试平台。

---

## 111. Beyond the Answer: Advancing Multi-HopQAwith Fine-Grained Graph Reasoning and Evaluation

**类别**: `主会-长文`

**作者**: Qichuan Liu, Chentao Zhang, Chenfeng Zheng, Guosheng Hu, Xiaodong Li, Zhihong Zhang

**ID**: 2025.acl-long.1142

**摘要(英文)**:
> Recent advancements in large language models (LLMs) have significantly improved the performance of multi-hop question answering (MHQA) systems. Despite the success of MHQA systems, the evaluation of MHQA is not deeply investigated. Existing evaluations mainly focus on comparing the final answers of the reasoning method and given ground-truths. We argue that the reasoning process should also be evaluated because wrong reasoning process can also lead to the correct final answers. Motivated by this, we propose a “Planner-Executor-Reasoner” (PER) architecture, which forms the core of the Plan-anchored Data Preprocessing (PER-DP) and the Plan-guided Multi-Hop QA (PER-QA).The former provides the ground-truth of intermediate reasoning steps and final answers, and the latter offers them of a reasoning method. Moreover, we design a fine-grained evaluation metric called Plan-aligned Stepwise Evaluation (PSE), which evaluates the intermediate reasoning steps from two aspects: planning and solving. Extensive experiments on ten types of questions demonstrate competitive reasoning performance, improved explainability of the MHQA system, and uncover issues such as “fortuitous reasoning continuance” and “latent reasoning suspension” in RAG-based MHQA systems. Besides, we also demonstrate the potential of our approach in data contamination scenarios.

**摘要(中文)**:
> 大型语言模型 (LLM) 的最新进展显着提高了多跳问答 (MHQA) 系统的性能。尽管 MHQA 系统取得了成功，但 MHQA 的评估尚未得到深入研究。现有的评估主要集中于比较推理方法的最终答案和给定的基本事实。我们认为推理过程也应该被评估，因为错误的推理过程也可能导致正确的最终答案。受此启发，我们提出了“规划器-执行器-推理器”（PER）架构，它构成了计划锚定数据预处理（PER-DP）和计划引导多跳质量保证（PER-QA）的核心。前者提供中间推理步骤和最终答案的基本事实，后者提供推理方法。此外，我们设计了一种细粒度的评估指标，称为计划对齐逐步评估（PSE），它从规划和求解两个方面评估中间推理步骤。对十类问题的广泛实验证明了竞争性推理性能，提高了 MHQA 系统的可解释性，并揭示了基于 RAG 的 MHQA 系统中的“偶然推理连续性”和“潜在推理暂停”等问题。此外，我们还展示了我们的方法在数据污染场景中的潜力。

---

## 112. Enhancing Retrieval-Augmented Generation via Evidence Tree Search

**类别**: `主会-长文`

**作者**: Hao Sun, Hengyi Cai, Yuchen Li, Xuanbo Fan, Xiaochi Wei, Shuaiqiang Wang, Yan Zhang, Dawei Yin

**ID**: 2025.acl-long.1175

**摘要(英文)**:
> Retrieval-Augmented Generation (RAG) is widely used to enhance Large Language Models (LLMs) by grounding responses in external knowledge. However, in real-world applications, retrievers often return lengthy documents with redundant or irrelevant content, confusing downstream readers. While evidence retrieval aims to address this by extracting key information, it faces critical challenges: (1) inability to model synergistic inter-dependencies among evidence sentences, (2) lack of supervision for evaluating multi-sentence evidence quality, and (3) computational inefficiency in navigating exponentially growing search spaces of candidate evidence sets. To tackle these challenges, we propose ETS (Evidence Tree Search), a novel framework that reformulates evidence retrieval as a dynamic tree expansion process. Our approach first constructs an evidence tree where each path represents a candidate evidence set, explicitly modeling inter-sentence dependencies through context-aware node selection. We then leverage Monte Carlo Tree Search (MCTS) to efficiently assess evidence quality and introduce an Early-Terminating Beam Search strategy to efficiently accelerate the model inference. Extensive experiments on five datasets demonstrate that ETS significantly outperforms existing methods across different readers. Our code and datasets will be released to facilitate future research.

**摘要(中文)**:
> 检索增强生成 (RAG) 被广泛用于通过将响应基于外部知识来增强大型语言模型 (LLM)。然而，在现实应用中，检索器经常返回包含冗余或不相关内容的冗长文档，使下游读者感到困惑。虽然证据检索旨在通过提取关键信息来解决这个问题，但它面临着严峻的挑战：（1）无法对证据句子之间的协同相互依赖性进行建模，（2）缺乏评估多句证据质量的监督，以及（3）在导航呈指数增长的候选证据集搜索空间时计算效率低下。为了应对这些挑战，我们提出了 ETS（证据树搜索），这是一种新颖的框架，它将证据检索重新表述为动态树扩展过程。我们的方法首先构建一个证据树，其中每个路径代表一个候选证据集，通过上下文感知节点选择显式地建模句子间依赖关系。然后，我们利用蒙特卡罗树搜索（MCTS）来有效评估证据质量，并引入早期终止束搜索策略来有效加速模型推理。对五个数据集的广泛实验表明，ETS 在不同读者中显着优于现有方法。我们的代码和数据集将被发布以促进未来的研究。

---

## 113. Dialogue-RAG: Enhancing Retrieval forLLMs via Node-Linking Utterance Rewriting

**类别**: `主会-长文`

**作者**: Qiwei Li, Teng Xiao, Zuchao Li, Ping Wang, Mengjia Shen, Hai Zhao

**ID**: 2025.acl-long.1191

**摘要(英文)**:
> Large Language Models (LLMs) and Retrieval Augmented Generation (RAG) methods have demonstrated significant potential on tasks across multiple domains. However, ellipses and coreferences, as common phenomena in dialogue scenes, pose challenges to LLMs’ understanding and RAG’s retrieval accuracy. The previous works ignore the negative impact of this fuzzy data on RAG system.We explore the capabilities of LLMs and RAG systems in dialogue scenarios and use Incomplete Utterance Rewriting (IUR) to complete the key information in dialogue to enhance retrieval.Besides, we propose a lightweight IUR model for query rewriting. It is an end-to-end framework for node linking and iterative inference, incorporating two newly proposed probing semantic features derived from generative pre-training. This framework treats IUR as a series of link decisions on the input sequence and the incrementally constructed rewriting outputs.To test the performance of RAG system in the model multi-round dialogue scenario, we construct an RAG dialogue dataset on English and Chinese, Dialogue-RAG-MULTI-v1.0.Experiment results show that utterance rewriting can effectively improve the retrieval and generation ability of RAG system in dialogue scenes. Experiments on IUR tasks demonstrate the excellent performance of our lightweight IUR method.

**摘要(中文)**:
> 大型语言模型 (LLM) 和检索增强生成 (RAG) 方法已在跨多个领域的任务中展现出巨大的潜力。然而，省略和共指作为对话场景中的常见现象，对LLM的理解和RAG的检索准确性提出了挑战。之前的工作忽略了这种模糊数据对RAG系统的负面影响。我们探索了LLM和RAG系统在对话场景中的能力，并使用不完整话语重写（IUR）来完成对话中的关键信息以增强检索。此外，我们提出了一种用于查询重写的轻量级IUR模型。它是一个用于节点链接和迭代推理的端到端框架，结合了两个新提出的从生成预训练中得出的探测语义特征。该框架将IUR视为一系列关于输入序列和增量构建的重写输出的链接决策。为了测试RAG系统在模型多轮对话场景中的性能，我们构建了英语和中文的RAG对话数据集Dialogue-RAG-MULTI-v1.0。实验结果表明，话语重写可以有效提高RAG系统在对话场景中的检索和生成能力。 IUR 任务的实验证明了我们的轻量级 IUR 方法的优异性能。

---

## 114. OMGM: Orchestrate Multiple Granularities and Modalities for Efficient Multimodal Retrieval

**类别**: `主会-长文`

**作者**: Wei Yang, Jingjing Fu, Rui Wang, Jinyu Wang, Lei Song, Jiang Bian

**ID**: 2025.acl-long.1198

**摘要(英文)**:
> Vision-language retrieval-augmented generation (RAG) has become an effective approach for tackling Knowledge-Based Visual Question Answering (KB-VQA), which requires external knowledge beyond the visual content presented in images. The effectiveness of Vision-language RAG systems hinges on multimodal retrieval, which is inherently challenging due to the diverse modalities and knowledge granularities in both queries and knowledge bases. Existing methods have not fully tapped into the potential interplay between these elements. We propose a multimodal RAG system featuring a coarse-to-fine, multi-step retrieval that harmonizes multiple granularities and modalities to enhance efficacy. Our system begins with a broad initial search aligning knowledge granularity for cross-modal retrieval, followed by a multimodal fusion reranking to capture the nuanced multimodal information for top entity selection. A text reranker then filters out the most relevant fine-grained section for augmented generation. Extensive experiments on the InfoSeek and Encyclopedic-VQA benchmarks show our method achieves state-of-the-art retrieval performance and highly competitive answering results, underscoring its effectiveness in advancing KB-VQA systems. Our code can be found at https://github.com/ChaoLinAViy/OMGM.

**摘要(中文)**:
> 视觉语言检索增强生成（RAG）已成为解决基于知识的视觉问答（KB-VQA）的有效方法，它需要图像中呈现的视觉内容之外的外部知识。视觉语言 RAG 系统的有效性取决于多模态检索，由于查询和知识库中的模态和知识粒度不同，这本身就具有挑战性。现有方法尚未充分利用这些元素之间的潜在相互作用。我们提出了一种多模态 RAG 系统，具有从粗到细的多步骤检索，可协调多个粒度和模式以提高效率。我们的系统首先进行广泛的初始搜索，调整跨模态检索的知识粒度，然后进行多模态融合重新排序，以捕获用于顶级实体选择的细致入微的多模态信息。然后，文本重新排序器会过滤出最相关的细粒度部分以进行增强生成。对 InfoSeek 和 Encyclopedic-VQA 基准的大量实验表明，我们的方法实现了最先进的检索性能和极具竞争力的回答结果，强调了其在推进 KB-VQA 系统方面的有效性。我们的代码可以在 https://github.com/ChaoLinAViy/OMGM 找到。

---

## 115. Can Language Models Replace Programmers for Coding?REPOCODSays ‘Not Yet’

**类别**: `主会-长文`

**作者**: Shanchao Liang, Nan Jiang, Yiran Hu, Lin Tan

**ID**: 2025.acl-long.1204

**摘要(英文)**:
> Recently, a number of repository-level code generation benchmarks–such as CoderEval, DevEval, RepoEval, RepoBench, and LongCode-Arena–have emerged to evaluate the capabilities of large language models (LLMs) beyond standalone benchmarks like HumanEval and MBPP. Thus, a natural question is, would LLMs have similar performance in real world coding tasks as their performance in these benchmarks? Unfortunately, one cannot answer this question, since these benchmarks consist of short completions, synthetic examples, or focus on limited scale repositories, failing to represent real-world coding tasks.To address these challenges, we create RepoCod, a Python code-generation benchmark containing complex tasks with realistic dependencies in real-world large projects and appropriate metrics for evaluating source code. It includes 980 whole-function generation tasks from 11 popular projects, 50.8% of which require repository-level context. RepoCod includes 314 developer-written test cases per instance for better evaluation. We evaluate ten LLMs on RepoCod and find that none achieves more than 30% pass@1 on RepoCod, indicating the necessity of building stronger LLMs that can help developers in real-world software development. In addition, we found that retrieval-augmented generation achieves better results than using target function dependencies as context.

**摘要(中文)**:
> 最近，出现了许多存储库级代码生成基准测试（例如 CoderEval、DevEval、RepoEval、RepoBench 和 LongCode-Arena），用于评估大型语言模型 (LLM) 超越 HumanEval 和 MBPP 等独立基准测试的功能。因此，一个自然的问题是，大语言模型在现实世界编码任务中的表现是否与在这些基准测试中的表现相似？不幸的是，人们无法回答这个问题，因为这些基准测试由简短的完成、综合示例组成，或者专注于有限规模的存储库，无法代表现实世界的编码任务。为了解决这些挑战，我们创建了 RepoCod，这是一种 Python 代码生成基准测试，其中包含与现实世界大型项目中具有实际依赖关系的复杂任务以及用于评估源代码的适当指标。它包括来自 11 个热门项目的 980 个全功能生成任务，其中 50.8% 需要存储库级上下文。 RepoCod 每个实例包含 314 个开发人员编写的测试用例，以便更好地进行评估。我们对 RepoCod 上的 10 个大语言模型进行了评估，发现没有一个在 RepoCod 上达到了 30% 以上的 pass@1，这表明有必要建立更强大的大语言模型来帮助开发人员进行实际软件开发。此外，我们发现检索增强生成比使用目标函数依赖项作为上下文取得了更好的结果。

---

## 116. Can We Further Elicit Reasoning inLLMs? Critic-Guided Planning with Retrieval-Augmentation for Solving Challenging Tasks

**类别**: `主会-长文`

**作者**: Xingxuan Li, Weiwen Xu, Ruochen Zhao, Fangkai Jiao, Shafiq Joty, Lidong Bing

**ID**: 2025.acl-long.1244

**摘要(英文)**:
> Large language models excel at problem-solving but often struggle with complex reasoning and factual accuracy. While chain-of-thought and retrieval-augmented generation help break down problems and retrieve knowledge, they still falter on challenging tasks like competitive programming due to frequent reasoning errors and irrelevant retrieval. To address this, we introduce Critic-guided planning with Retrieval-augmentation, CR-Planner, a novel framework that leverages fine-tuned critic models to guide both reasoning and retrieval processes through planning. CR-Planner iteratively selects and executes sub-goals, guided by critic models. A sub-goal critic identifies promising sub-goals from reasoning, query generation, and retrieval, while an execution critic evaluates outputs of sub-goal executions. We employ Monte Carlo Tree Search to collect data for critic training, allowing systematic exploration of action sequences and effective navigation toward the final answer. We evaluate CR-Planner on challenging domain-knowledge-intensive and reasoning-heavy tasks, including competitive programming, theorem-driven math reasoning, and complex domain retrieval problems. It significantly outperforms baselines, demonstrating effectiveness in both reasoning and retrieval.

**摘要(中文)**:
> 大型语言模型擅长解决问题，但常常难以处理复杂的推理和事实准确性。虽然思维链和检索增强生成有助于分解问题和检索知识，但由于频繁的推理错误和不相关的检索，它们在竞争性编程等具有挑战性的任务上仍然步履蹒跚。为了解决这个问题，我们引入了带有检索增强的评论家引导规划（CR-Planner），这是一种新颖的框架，利用微调的评论家模型通过规划来指导推理和检索过程。 CR-Planner 在批评模型的指导下迭代地选择和执行子目标。子目标批评家从推理、查询生成和检索中识别有希望的子目标，而执行批评家则评估子目标执行的输出。我们采用蒙特卡罗树搜索来收集批评者训练的数据，从而可以系统地探索动作序列并有效导航到最终答案。我们在具有挑战性的领域知识密集型和推理繁重的任务上评估 CR-Planner，包括竞争性编程、定理驱动的数学推理和复杂的领域检索问题。它显着优于基线，证明了推理和检索的有效性。

---

## 117. The Efficiency vs. Accuracy Trade-off: OptimizingRAG-EnhancedLLMRecommender Systems Using Multi-Head Early Exit

**类别**: `主会-长文`

**作者**: Huixue Zhou, Hengrui Gu, Zaifu Zhan, Xi Liu, Kaixiong Zhou, Yongkang Xiao, Mingfu Liang, Srinivas Prasad Govindan, Piyush Chawla, Jiyan Yang, Xiangfei Meng, Huayu Li, Buyun Zhang, Liang Luo, Wen-Yen Chen, Yiping Han, Bo Long, Rui Zhang, Tianlong Chen

**ID**: 2025.acl-long.1283

**摘要(英文)**:
> The deployment of Large Language Models (LLMs) in recommender systems for Click-Through Rate (CTR) prediction requires a careful balance between computational efficiency and predictive accuracy. This paper introduces OptiRAG-Rec, a comprehensive framework that integrates Retrieval-Augmented Generation (RAG) with a novel multi-head early exit architecture to address both challenges. By leveraging Graph Convolutional Networks (GCNs) as efficient retrieval mechanisms, the framework significantly reduces data retrieval times while maintaining high model performance. Additionally, the multi-head early exit strategy dynamically terminates inference based on real-time predictive confidence assessments, enhancing responsiveness without sacrificing accuracy. Experimental results demonstrate that OptiRAG-Rec reduces computation time while preserving the precision required for reliable recommendations, establishing a new benchmark for efficient and accurate LLM deployment in recommendation.

**摘要(中文)**:
> 在推荐系统中部署大型语言模型 (LLM) 以进行点击率 (CTR) 预测需要在计算效率和预测准确性之间取得仔细的平衡。本文介绍了 OptiRAG-Rec，这是一个综合框架，它将检索增强生成 (RAG) 与新颖的多头早期退出架构相集成，以应对这两个挑战。通过利用图卷积网络（GCN）作为高效的检索机制，该框架显着减少了数据检索时间，同时保持了较高的模型性能。此外，多头提前退出策略基于实时预测置信度评估动态终止推理，从而在不牺牲准确性的情况下增强响应能力。实验结果表明，OptiRAG-Rec 减少了计算时间，同时保留了可靠推荐所需的精度，为推荐中高效、准确的 LLM 部署建立了新的基准。

---

## 118. SeaKR: Self-aware Knowledge Retrieval for Adaptive Retrieval Augmented Generation

**类别**: `主会-长文`

**作者**: Zijun Yao, Weijian Qi, Liangming Pan, Shulin Cao, Linmei Hu, Liu Weichuan, Lei Hou, Juanzi Li

**ID**: 2025.acl-long.1312

**摘要(英文)**:
> Adaptive Retrieval-Augmented Generation (RAG) is an effective strategy to alleviate hallucination of large language models (LLMs). It dynamically determines whether LLMs need external knowledge for generation and invokes retrieval accordingly. This paper introduces Self-aware Knowledge Retrieval (SeaKR), a novel adaptive RAG model that extracts self-aware uncertainty of LLMs from their internal states. SeaKR activates retrieval when the LLMs present high self-aware uncertainty for generation. To effectively integrate retrieved knowledge snippets, SeaKR re-ranks them based on LLM’s self-aware uncertainty to preserve the snippet that reduces their uncertainty to the utmost. To facilitate solving complex tasks that require multiple retrievals, SeaKR utilizes their self-aware uncertainty to choose among different reasoning strategies. Our experiments on both complex and simple Question Answering datasets show that SeaKR outperforms existing adaptive RAG methods.

**摘要(中文)**:
> 自适应检索增强生成（RAG）是减轻大语言模型（LLM）幻觉的有效策略。它动态地确定大语言模型是否需要外部知识来生成并相应地调用检索。本文介绍了自我意识知识检索（SeaKR），这是一种新颖的自适应 RAG 模型，可以从 LLM 的内部状态中提取自我意识的不确定性。当大语言模型对生成具有高度的自我意识不确定性时，SeaKR 会激活检索。为了有效整合检索到的知识片段，SeaKR根据LLM自我感知的不确定性对其进行重新排序，以保留最大程度降低其不确定性的片段。为了帮助解决需要多次检索的复杂任务，SeaKR 利用其自我意识的不确定性来选择不同的推理策略。我们对复杂和简单问答数据集的实验表明 SeaKR 优于现有的自适应 RAG 方法。

---

## 119. InspireDebate: Multi-Dimensional Subjective-Objective Evaluation-Guided Reasoning and Optimization for Debating

**类别**: `主会-长文`

**作者**: Fuyu Wang, Jiangtong Li, Kun Zhu, Changjun Jiang

**ID**: 2025.acl-long.1335

**摘要(英文)**:
> With the rapid advancements in large language models (LLMs), debating tasks, such as argument quality assessment and debate process simulation, have made significant progress. However, existing LLM-based debating systems focus on responding to specific arguments while neglecting objective assessments such as authenticity and logical validity. Furthermore, these systems lack a structured approach to optimize across various dimensions—including evaluation metrics, chain-of-thought (CoT) reasoning, and multi-turn debate refinement—thereby limiting their effectiveness. To address these interconnected challenges, we propose a dual-component framework: (1) InspireScore, a novel evaluation system that establishes a multi-dimensional assessment architecture incorporating four subjective criteria (emotional appeal, argument clarity, argument arrangement, and topic relevance) alongside two objective metrics (fact authenticity and logical validity); and (2) InspireDebate, an optimized debating framework employing a phased optimization approach through CoT reasoning enhancement, multi-dimensional Direct Preference Optimization (DPO), and real-time knowledge grounding via web-based Retrieval Augmented Generation (Web-RAG). Empirical evaluations demonstrate that InspireScore achieves 44% higher correlation with expert judgments compared to existing methods, while InspireDebate shows significant improvements, outperforming baseline models by 57%. Source code is available at https://github.com/fywang12/InspireDebate.

**摘要(中文)**:
> 随着大语言模型（LLM）的快速进步，诸如论证质量评估和辩论过程模拟等辩论任务取得了显着进展。然而，现有的基于LLM的辩论系统侧重于对具体论点的回应，而忽视了真实性和逻辑有效性等客观评估。此外，这些系统缺乏跨各个维度进行优化的结构化方法，包括评估指标、思维链 (CoT) 推理和多轮辩论细化，从而限制了它们的有效性。为了应对这些相互关联的挑战，我们提出了一个双组件框架：（1）InspireScore，一种新颖的评估系统，建立了一个多维度的评估架构，结合了四个主观标准（情感诉求、论点清晰度、论点安排和主题相关性）和两个客观指标（事实真实性和逻辑有效性）； (2) InspireDebate，一个优化的辩论框架，采用阶段性优化方法，通过 CoT 推理增强、多维直接偏好优化 (DPO) 以及基于网络的检索增强生成 (Web-RAG) 的实时知识基础。实证评估表明，与现有方法相比，InspireScore 与专家判断的相关性提高了 44%，而 InspireDebate 则显示出显着的改进，比基线模型高出 57%。源代码可在 https://github.com/fywang12/InspireDebate 获取。

---

## 120. Lexical Diversity-aware Relevance Assessment for Retrieval-Augmented Generation

**类别**: `主会-长文`

**作者**: Zhange Zhang, Yuqing Ma, Yulong Wang, Shan He, Tianbo Wang, Siqi He, Jiakai Wang, Xianglong Liu

**ID**: 2025.acl-long.1346

**摘要(英文)**:
> Retrieval-Augmented Generation (RAG) has proven effective in enhancing the factuality of LLMs’ generation, making them a focal point of research. However, previous RAG approaches overlook the lexical diversity of queries, hindering their ability to achieve a granular relevance assessment between queries and retrieved documents, resulting in suboptimal performance. In this paper, we introduce a Lexical Diversity-aware RAG (DRAG) method to address the biases in relevant information retrieval and utilization induced by lexical diversity. Specifically, a Diversity-sensitive Relevance Analyzer is proposed to decouple and assess the relevance of different query components (words, phrases) based on their levels of lexical diversity, ensuring precise and comprehensive document retrieval. Moreover, a Risk-guided Sparse Calibration strategy is further introduced to calibrate the generated tokens that is heavily affected by irrelevant content. Through these modules, DRAG is capable of effectively retrieving relevant documents and leverages their pertinent knowledge to refine the original results and generate meaningful outcomes. Extensive experiments on widely used benchmarks demonstrate the efficacy of our approach, yielding a 10.6% accuracy improvement on HotpotQA.

**摘要(中文)**:
> 事实证明，检索增强生成（RAG）可以有效提高大语言模型生成的真实性，使他们成为研究的焦点。然而，以前的 RAG 方法忽视了查询的词汇多样性，阻碍了它们在查询和检索到的文档之间实现粒度相关性评估的能力，从而导致性能不佳。在本文中，我们引入了词汇多样性感知 RAG（DRAG）方法来解决词汇多样性引起的相关信息检索和利用中的偏差。具体来说，提出了一种多样性敏感的相关性分析器，根据不同查询组件（单词、短语）的词汇多样性水平来解耦和评估不同查询组件（单词、短语）的相关性，确保精确和全面的文档检索。此外，进一步引入了风险引导的稀疏校准策略来校准受不相关内容严重影响的生成令牌。通过这些模块，DRAG 能够有效地检索相关文档，并利用相关知识来完善原始结果并生成有意义的结果。对广泛使用的基准进行的大量实验证明了我们方法的有效性，使 HotpotQA 的准确性提高了 10.6%。

---

## 121. GRAT: Guiding Retrieval-Augmented Reasoning through Process Rewards Tree Search

**类别**: `主会-长文`

**作者**: Xianshu Peng, Wei Wei

**ID**: 2025.acl-long.1352

**摘要(英文)**:
> Enhancing large models for complex multi-hop question-answering has become a research focus in the Retrieval-augmented generation (RAG) area. Many existing approaches aim to mimic human thought processes by enabling large models to perform retrieval-augmented generation step by step. However, these methods can only perform single chain reasoning, which lacks the ability for multi-path exploration, strategic look-ahead, stepwise evaluation, and global selection. In addition, to effectively decompose complex problems, these methods can only rely on labor-intensive intermediate annotations for supervised fine-tuning. To address these issues, we propose GRAT, an algorithm guided by Monte Carlo Tree Search (MCTS) and process rewards. GRAT not only enables self-evaluation and self-correction but also assigns fine-grained rewards to each intermediate step in the search path. These fine-grained annotations can be used for model self-training, which enables GRAT to continuously self-update its problem analysis and reasoning capabilities. We conducted experiments on four multihop QA datasets: HotPotQA, 2WikiMultiHopQA, MuSiQue, and Bamboogle, demonstrating that GRAT outperforms various RAG-based methods. Additionally, incorporating self-training significantly enhances GRAT’s reasoning performance.

**摘要(中文)**:
> 增强复杂多跳问答的大型模型已成为检索增强生成（RAG）领域的研究热点。许多现有方法旨在通过使大型模型逐步执行检索增强生成来模仿人类思维过程。然而，这些方法只能进行单链推理，缺乏多路径探索、战略前瞻、逐步评估和全局选择的能力。此外，为了有效分解复杂问题，这些方法只能依靠劳动密集型的中间标注来进行有监督的微调。为了解决这些问题，我们提出了 GRAT，这是一种以蒙特卡罗树搜索 (MCTS) 和过程奖励为指导的算法。 GRAT 不仅可以进行自我评估和自我纠正，还可以为搜索路径中的每个中间步骤分配细粒度的奖励。这些细粒度的标注可用于模型自训练，使得GRAT能够不断自我更新其问题分析和推理能力。我们在四个多跳 QA 数据集上进行了实验：HotPotQA、2WikiMultiHopQA、MuSiQue 和 Bamboogle，证明 GRAT 优于各种基于 RAG 的方法。此外，结合自我训练可以显着提高 GRAT 的推理性能。

---

## 122. Query-driven Document-level Scientific Evidence Extraction from Biomedical Studies

**类别**: `主会-长文`

**作者**: Massimiliano Pronesti, Joao H Bettencourt-Silva, Paul Flanagan, Alessandra Pascale, Oisín Redmond, Anya Belz, Yufang Hou

**ID**: 2025.acl-long.1359

**摘要(英文)**:
> Extracting scientific evidence from biomedical studies for clinical research questions (e.g., Does stem cell transplantation improve quality of life in patients with medically refractory Crohn’s disease compared to placebo?) is a crucial step in synthesising biomedical evidence. In this paper, we focus on the task of document-level scientific evidence extraction for clinical questions with conflicting evidence. To support this task, we create a dataset called CochraneForest leveraging forest plots from Cochrane systematic reviews. It comprises 202 annotated forest plots, associated clinical research questions, full texts of studies, and study-specific conclusions. Building on CochraneForest, we propose URCA (Uniform Retrieval Clustered Augmentation), a retrieval-augmented generation framework designed to tackle the unique challenges of evidence extraction. Our experiments show that URCA outperforms the best existing methods by up to 10.3% in F1 score on this task. However, the results also underscore the complexity of CochraneForest, establishing it as a challenging testbed for advancing automated evidence synthesis systems.

**摘要(中文)**:
> 从生物医学研究中提取科学证据来解决临床研究问题（例如，与安慰剂相比，干细胞移植是否能改善难治性克罗恩病患者的生活质量？）是综合生物医学证据的关键步骤。在本文中，我们重点研究具有冲突证据的临床问题的文档级科学证据提取的任务。为了支持这项任务，我们利用 Cochrane 系统评价中的森林图创建了一个名为 CochraneForest 的数据集。它包含 202 个带注释的森林图、相关的临床研究问题、研究全文和特定于研究的结论。在 CochraneForest 的基础上，我们提出了 URCA（统一检索集群增强），这是一种检索增强生成框架，旨在解决证据提取的独特挑战。我们的实验表明，URCA 在此任务的 F1 分数上比现有最好的方法高出 10.3%。然而，结果也强调了 CochraneForest 的复杂性，将其确立为推进自动化证据合成系统的具有挑战性的测试平台。

---

## 123. SGIC: A Self-Guided Iterative Calibration Framework forRAG

**类别**: `主会-长文`

**作者**: Guanhua Chen, Yutong Yao, Lidia S. Chao, Xuebo Liu, Derek F. Wong

**ID**: 2025.acl-long.1376

**摘要(英文)**:
> Recent research in retrieval-augmented generation (RAG) has concentrated on retrieving useful information from candidate documents. However, numerous methodologies frequently neglect the calibration capabilities of large language models (LLMs), which capitalize on their robust in-context reasoning prowess. This work illustrates that providing LLMs with specific cues substantially improves their calibration efficacy, especially in multi-round calibrations. We present a new SGIC: Self-Guided Iterative Calibration Framework that employs uncertainty scores as a tool. Initially, this framework calculates uncertainty scores to determine both the relevance of each document to the query and the confidence level in the responses produced by the LLMs. Subsequently, it reevaluates these scores iteratively, amalgamating them with prior responses to refine calibration. Furthermore, we introduce an innovative approach for constructing an iterative self-calibration training set, which optimizes LLMs to efficiently harness uncertainty scores for capturing critical information and enhancing response accuracy. Our proposed framework significantly improves performance on both closed-source and open-source LLMs.

**摘要(中文)**:
> 最近关于检索增强生成（RAG）的研究主要集中在从候选文档中检索有用信息。然而，许多方法论经常忽视大型语言模型（LLM）的校准能力，而大型语言模型利用了其强大的上下文推理能力。这项工作表明，为大语言模型提供特定的线索可以大大提高他们的校准效率，特别是在多轮校准中。我们提出了一种新的 SGIC：自引导迭代校准框架，采用不确定性分数作为工具。最初，该框架计算不确定性分数，以确定每个文档与查询的相关性以及大语言模型生成的响应的置信度。随后，它迭代地重新评估这些分数，将它们与先前的响应合并以完善校准。此外，我们引入了一种构建迭代自校准训练集的创新方法，该方法优化了大语言模型，以有效地利用不确定性分数来捕获关键信息并提高响应准确性。我们提出的框架显着提高了闭源和开源大语言模型的性能。

---

## 124. Pretraining Context Compressor for Large Language Models with Embedding-Based Memory

**类别**: `主会-长文`

**作者**: Yuhong Dai, Jianxun Lian, Yitian Huang, Wei Zhang, Mingyang Zhou, Mingqi Wu, Xing Xie, Hao Liao

**ID**: 2025.acl-long.1394

**摘要(英文)**:
> Efficient processing of long contexts in large language models (LLMs) is essential for real-world applications like retrieval-augmented generation and in-context learning, especially in resource-constrained environments such as edge computing. This paper explores the embedding-based context compression to reduce inference costs while preserving the downstream LLM configurations. We propose a decoupled compressor-LLM framework, pretrained on text reconstruction and completion tasks, designed to effectively preserve essential contextual information within condensed embedding representations. Our extensive experiments investigate pretraining, model configurations, compression rates, efficiency across tasks, and adaptability to various LLMs. Results demonstrate that our approach outperforms competitive baselines in three domains and across eight datasets while being adaptable to different downstream LLMs. We find that thorough pretraining and carefully selected compression rates, such as 4x and 16x, enable a lightweight compressor to achieve a good balance between accuracy and speed. These findings underscore the potential of embedding-based compression to enhance LLM efficiency and motivate further research in this area.

**摘要(中文)**:
> 大型语言模型 (LLM) 中长上下文的高效处理对于检索增强生成和上下文学习等现实应用至关重要，尤其是在边缘计算等资源受限的环境中。本文探讨了基于嵌入的上下文压缩，以降低推理成本，同时保留下游 LLM 配置。我们提出了一个解耦的压缩器-LLM 框架，对文本重建和完成任务进行了预训练，旨在有效地保留压缩嵌入表示中的基本上下文信息。我们广泛的实验研究了预训练、模型配置、压缩率、跨任务的效率以及对各种大语言模型的适应性。结果表明，我们的方法在三个领域和八个数据集上优于竞争基线，同时适用于不同的下游大语言模型。我们发现，彻底的预训练和精心选择的压缩率（例如 4 倍和 16 倍）可以使轻量级压缩器在精度和速度之间实现良好的平衡。这些发现强调了基于嵌入的压缩在提高 LLM 效率并激发该领域进一步研究的潜力。

---

## 125. LLMs Trust Humans More, That’s a Problem! Unveiling and Mitigating the Authority Bias in Retrieval-Augmented Generation

**类别**: `主会-长文`

**作者**: Yuxuan Li, Xinwei Guo, Jiashi Gao, Guanhua Chen, Xiangyu Zhao, Jiaxin Zhang, Quanying Liu, Haiyan Wu, Xin Yao, Xuetao Wei

**ID**: 2025.acl-long.1400

**摘要(英文)**:
> Retrieval-Augmented Generation (RAG) has been proven to be an effective approach to address the hallucination problem in large language models (LLMs). In current RAG systems, LLMs typically need to synthesize knowledge provided by two main external sources (user prompts and an external database) to generate a final answer. When the knowledge provided by the user conflicts with that retrieved from the database, a critical question arises: Does the LLM favor one knowledge source over the other when generating the answer? In this paper, we are the first to unveil a new phenomenon, Authority Bias, where the LLMs tend to favor the knowledge provided by the user even when it deviates from the facts; this new phenomenon is rigorously evidenced via our novel and comprehensive characterization of Authority Bias in six widely used LLMs and across diverse task scenarios. We propose a novel dataset specifically designed for detecting Authority Bias, called the Authority Bias Detection Dataset (ABDD), and introduce new, detailed metrics to measure Authority Bias. To mitigate Authority bias, we finally propose the Conflict Detection Enhanced Query (CDEQ) framework. We identify the sentences and atomic information that generate conflicts, perform a credibility assessment on the conflicting paragraphs, and ultimately enhance the query to detect perturbed text, thereby reducing Authority bias. Comparative experiments with widely used mitigation methods demonstrate that CDEQ exhibits both effectiveness and advancement, significantly enhancing the robustness of RAG systems.

**摘要(中文)**:
> 检索增强生成（RAG）已被证明是解决大语言模型（LLM）中的幻觉问题的有效方法。在当前的 RAG 系统中，大语言模型通常需要综合两个主要外部来源（用户提示和外部数据库）提供的知识来生成最终答案。当用户提供的知识与从数据库中检索的知识发生冲突时，就会出现一个关键问题：大语言模型在生成答案时是否更倾向于一种知识源而不是另一种知识源？在本文中，我们第一个揭示了一种新现象，即权威偏见，即大语言模型倾向于偏爱用户提供的知识，即使它偏离事实；这种新现象通过我们在六个广泛使用的大语言模型和不同任务场景中对权威偏见的新颖而全面的描述得到了严格的证明。我们提出了一个专门为检测权威偏差而设计的新颖数据集，称为权威偏差检测数据集（ABDD），并引入新的详细指标来衡量权威偏差。为了减轻权威偏见，我们最终提出了冲突检测增强查询（CDEQ）框架。我们识别产生冲突的句子和原子信息，对冲突的段落进行可信度评估，并最终增强查询以检测扰动的文本，从而减少权威偏差。与广泛使用的缓解方法的对比实验表明，CDEQ 表现出有效性和先进性，显着增强了 RAG 系统的鲁棒性。

---

## 126. Beyond True or False: Retrieval-Augmented Hierarchical Analysis of Nuanced Claims

**类别**: `主会-长文`

**作者**: Priyanka Kargupta, Runchu Tian, Jiawei Han

**ID**: 2025.acl-long.1434

**摘要(英文)**:
> Claims made by individuals or entities are oftentimes nuanced and cannot be clearly labeled as entirely “true” or “false”—as is frequently the case with scientific and political claims. However, a claim (e.g., “vaccine A is better than vaccine B”) can be dissected into its integral aspects and sub-aspects (e.g., efficacy, safety, distribution), which are individually easier to validate. This enables a more comprehensive, structured response that provides a well-rounded perspective on a given problem while also allowing the reader to prioritize specific angles of interest within the claim (e.g., safety towards children). Thus, we propose ClaimSpect, a retrieval-augmented generation-based framework for automatically constructing a hierarchy of aspects typically considered when addressing a claim and enriching them with corpus-specific perspectives. This structure hierarchically partitions an input corpus to retrieve relevant segments, which assist in discovering new sub-aspects. Moreover, these segments enable the discovery of varying perspectives towards an aspect of the claim (e.g., support, neutral, or oppose) and their respective prevalence (e.g., “how many biomedical papers believe vaccine A is more transportable than B?”). We apply ClaimSpect to a wide variety of real-world scientific and political claims featured in our constructed dataset, showcasing its robustness and accuracy in deconstructing a nuanced claim and representing perspectives within a corpus. Through real-world case studies and human evaluation, we validate its effectiveness over multiple baselines.

**摘要(中文)**:
> 个人或实体提出的主张通常是微妙的，无法明确标记为完全“正确”或“错误”——科学和政治主张经常出现这种情况。然而，一个主张（例如，“疫苗 A 比疫苗 B 更好”）可以分解为其整体方面和子方面（例如，功效、安全性、分布），这些方面单独更容易验证。这使得能够提供更全面、结构化的响应，为给定问题提供全面的视角，同时还允许读者优先考虑声明中感兴趣的特定角度（例如，对儿童的安全）。因此，我们提出了 ClaimSpect，这是一种基于检索增强的生成框架，用于自动构建在处理声明时通常考虑的方面层次结构，并用特定于语料库的视角丰富它们。该结构对输入语料库进行分层划分以检索相关片段，这有助于发现新的子方面。此外，这些部分能够发现对主张的某个方面的不同观点（例如，支持、中立或反对）及其各自的流行程度（例如，“有多少生物医学论文认为疫苗 A 比 B 更容易运输？”）。我们将 ClaimSpect 应用于我们构建的数据集中的各种现实世界的科学和政治主张，展示了其在解构细致入微的主张和代表语料库中的观点方面的稳健性和准确性。通过现实世界的案例研究和人类评估，我们在多个基线上验证了其有效性。

---

## 127. VISA: Retrieval Augmented Generation with Visual Source Attribution

**类别**: `主会-长文`

**作者**: Xueguang Ma, Shengyao Zhuang, Bevan Koopman, Guido Zuccon, Wenhu Chen, Jimmy Lin

**ID**: 2025.acl-long.1456

**摘要(英文)**:
> Generation with source attribution is important for enhancing the verifiability of retrieval-augmented generation (RAG) systems. However, existing approaches in RAG primarily link generated content to document-level references, making it challenging for users to locate evidence among multiple content-rich retrieved documents. To address this challenge, we propose Retrieval-Augmented Generation with Visual Source Attribution (VISA), a novel approach that combines answer generation with visual source attribution. Leveraging large vision-language models (VLMs), VISA identifies the evidence and highlights the exact regions that support the generated answers with bounding boxes in the retrieved document screenshots. To evaluate its effectiveness, we curated two datasets: Wiki-VISA, based on crawled Wikipedia webpage screenshots, and Paper-VISA, derived from PubLayNet and tailored to the medical domain. Experimental results demonstrate the effectiveness of VISA for visual source attribution on documents’ original look, as well as highlighting the challenges for improvement.

**摘要(中文)**:
> 具有来源归属的生成对于增强检索增强生成（RAG）系统的可验证性非常重要。然而，RAG 中的现有方法主要将生成的内容链接到文档级引用，这使得用户很难在多个内容丰富的检索文档中查找证据。为了应对这一挑战，我们提出了带有视觉源归因的检索增强生成（VISA），这是一种将答案生成与视觉源归因相结合的新颖方法。 VISA 利用大型视觉语言模型 (VLM) 识别证据，并在检索到的文档屏幕截图中使用边界框突出显示支持生成答案的确切区域。为了评估其有效性，我们策划了两个数据集：基于抓取的维基百科网页屏幕截图的 Wiki-VISA，以及源自 PubLayNet 并针对医疗领域量身定制的 Paper-VISA。实验结果证明了 VISA 对文档原始外观的视觉来源归因的有效性，并强调了改进的挑战。

---

## 128. Can we Retrieve Everything All at Once?ARM: An Alignment-OrientedLLM-based Retrieval Method

**类别**: `主会-长文`

**作者**: Peter Baile Chen, Yi Zhang, Mike Cafarella, Dan Roth

**ID**: 2025.acl-long.1463

**摘要(英文)**:
> Real-world open-domain questions can be complex, especially when answering them requires integrating information from multiple sources. Effectively identifying the necessary information involves *aligning* it with the available data and its organization. However, existing RAG solutions address the alignment problem in a limited manner. Using off-the-shelf LLMs for question decomposition lacks awareness of the available data and its structure, often resulting in suboptimal retrieval performance. Alternatively, iteratively generating follow-up queries and interacting with the data collection, as explored in agentic RAG approaches, shows potential but is often *inefficient* since each successive query depends on previous results rather than being guided by the overall organization of the available data. To address the *alignment* problem, we introduce an LLM-based retrieval method — ARM, designed to better align questions with the organization of the data collection. Instead of solely matching query utterance, ARM explores *relationships among data objects*, enabling a retrieve-all-at-once solution for complex queries. Experimental results demonstrate that ARM significantly outperforms existing RAG methods on various complex open-domain QA tasks across multiple modalities, achieving superior retrieval performance and downstream accuracy while significantly lowering monetary costs.

**摘要(中文)**:
> 现实世界的开放域问题可能很复杂，特别是当回答这些问题需要集成多个来源的信息时。有效识别必要的信息涉及将其与可用数据及其组织“对齐”。然而，现有的RAG解决方案以有限的方式解决对齐问题。使用现成的大语言模型进行问题分解缺乏对可用数据及其结构的了解，通常会导致检索性能不佳。或者，如在代理 RAG 方法中探索的那样，迭代地生成后续查询并与数据收集进行交互，显示出潜力，但通常“效率低下”，因为每个连续查询都依赖于先前的结果，而不是受可用数据的整体组织的指导。为了解决“对齐”问题，我们引入了一种基于 LLM 的检索方法 - ARM，旨在更好地将问题与数据收集的组织对齐。 ARM 不是仅仅匹配查询语句，而是探索“数据对象之间的关系”，从而为复杂查询提供一次检索全部解决方案。实验结果表明，ARM 在跨多种模式的各种复杂的开放域 QA 任务上显着优于现有的 RAG 方法，实现了卓越的检索性能和下游准确性，同时显着降低了货币成本。

---

## 129. AstuteRAG: Overcoming Imperfect Retrieval Augmentation and Knowledge Conflicts for Large Language Models

**类别**: `主会-长文`

**作者**: Fei Wang, Xingchen Wan, Ruoxi Sun, Jiefeng Chen, Sercan O Arik

**ID**: 2025.acl-long.1476

**摘要(英文)**:
> Retrieval augmented generation (RAG), while effectively integrating external knowledge to address the inherent limitations of large language models (LLMs), can be hindered by imperfect retrieval that contain irrelevant, misleading, or even malicious information. Previous studies have rarely connected the behavior of RAG through joint analysis, particularly regarding error propagation coming from imperfect retrieval and potential conflicts between LLMs’ internal knowledge and external sources. Through comprehensive and controlled analyses under realistic conditions, we find that imperfect retrieval augmentation is inevitable, common, and harmful. We identify the knowledge conflicts between LLM-internal and external knowledge from retrieval as a bottleneck to overcome imperfect retrieval in the post-retrieval stage of RAG. To address this, we propose Astute RAG, a novel RAG approach designed to be resilient to imperfect retrieval augmentation. It adaptively elicits essential information from LLMs’ internal knowledge, iteratively consolidates internal and external knowledge with source-awareness, and finalizes the answer according to information reliability. Our experiments with Gemini and Claude demonstrate the superior performance of Astute RAG compared to previous robustness-enhanced RAG approaches. Specifically, Astute RAG is the only RAG method that achieves performance comparable to or even surpassing conventional use of LLMs under the worst-case scenario. Further analysis reveals the effectiveness of Astute RAG in resolving knowledge conflicts, thereby improving the trustworthiness of RAG.

**摘要(中文)**:
> 检索增强生成（RAG）虽然有效地整合外部知识来解决大型语言模型（LLM）的固有局限性，但可能会受到包含不相关、误导甚至恶意信息的不完善检索的阻碍。以前的研究很少通过联合分析将 RAG 的行为联系起来，特别是关于不完美检索带来的错误传播以及大语言模型内部知识与外部来源之间的潜在冲突。通过在现实条件下进行全面和受控的分析，我们发现不完美的检索增强是不可避免的、普遍的和有害的。我们将LLM内部和外部检索知识之间的知识冲突视为克服RAG检索后阶段不完美检索的瓶颈。为了解决这个问题，我们提出了 Astute RAG，这是一种新颖的 RAG 方法，旨在适应不完美的检索增强。它自适应地从大语言模型的内部知识中提取必要信息，通过源意识迭代整合内部和外部知识，并根据信息可靠性最终确定答案。我们与 Gemini 和 Claude 进行的实验证明，与之前的鲁棒性增强 RAG 方法相比，Astute RAG 具有卓越的性能。具体来说，Astute RAG 是唯一一种在最坏情况下其性能可与 LLM 的传统使用相媲美甚至超越的 RAG 方法。进一步分析揭示了Astute RAG在解决知识冲突方面的有效性，从而提高了RAG的可信度。

---

## 130. Meta-Tool: Unleash Open-World Function Calling Capabilities of General-Purpose Large Language Models

**类别**: `主会-长文`

**作者**: Shengqian Qin, Yakun Zhu, Linjie Mu, Shaoting Zhang, Xiaofan Zhang

**ID**: 2025.acl-long.1481

**摘要(英文)**:
> Large language models (LLMs) have showcased remarkable capabilities as autonomous agents when augmented with external tools. Equipped with fixed tool sets, LLMs struggle with addressing diverse user inquiries in open-world tasks. To evaluate and boost the performance of LLMs in dealing with complex demands in the real-world, we propose open-world function calling, where LLMs need to retrieve suitable tools from a pre-defined external tool library and use retrieved tools to resolve the user’s problem. We introduce Meta-Tool, a versatile and plug-and-play tool retrieval system as the access of LLMs to external tool library. Drawing inspiration from the myriad of enhanced approaches associated with Retrieval-Augmented Generation (RAG), Meta-Tool employs ahypothesize-retrieve-invokeframework. We further propose Meta-Bench, a comprehensive benchmark for evaluating LLMs in open-world function calling and associated tasks. Meta-Bench encompasses 2,800 dialogues and 7,361 tools, spanning ten distinct scenarios to provide robust and diverse test categories. In conjunction, we present MT-LLaMA, a finetuned version of LLaMA-3.1, which exhibits remarkable performance improvements. Our empirical experiments reveal that Meta-Tool significantly enhances the ability of advanced LLMs to retrieve and leverage the most suitable tools compared to previous tool retrieval methods. Moreover, our fine-tuning enables even smaller-sized LLMs to achieve comparable even exceeding results to GPT-4o. Both the benchmark and the model are made publicly available at https://github.com/qinshengqian/Meta-Tool to foster further research and development in the field.

**摘要(中文)**:
> 在使用外部工具增强时，大型语言模型（LLM）展示了作为自主代理的卓越能力。大语言模型配备了固定的工具集，很难在开放世界的任务中解决不同的用户查询。为了评估和提高大语言模型在处理现实世界中的复杂需求时的性能，我们提出了开放世界函数调用，其中大语言模型需要从预定义的外部工具库中检索合适的工具，并使用检索到的工具来解决用户的问题。我们引入Meta-Tool，一个多功能、即插即用的工具检索系统，作为大语言模型访问外部工具库的途径。 Meta-Tool 从与检索增强生成 (RAG) 相关的无数增强方法中汲取灵感，采用假设-检索-调用框架。我们进一步提出了 Meta-Bench，这是一个用于评估开放世界函数调用和相关任务中的大语言模型的综合基准。 Meta-Bench 包含 2,800 个对话和 7,361 个工具，跨越十个不同的场景，提供强大且多样化的测试类别。同时，我们推出了 MT-LLaMA，这是 LLaMA-3.1 的微调版本，它表现出了显着的性能改进。我们的实证实验表明，与以前的工具检索方法相比，元工具显着增强了高级大语言模型检索和利用最合适工具的能力。此外，我们的微调使规模较小的大语言模型能够达到与 GPT-4o 相当甚至超过的结果。基准测试和模型均在 https://github.com/qinshengqian/Meta-Tool 上公开发布，以促进该领域的进一步研究和开发。

---

## 131. REAL-MM-RAG: A Real-World Multi-Modal Retrieval Benchmark

**类别**: `主会-长文`

**作者**: Navve Wasserman, Roi Pony, Oshri Naparstek, Adi Raz Goldfarb, Eli Schwartz, Udi Barzelay, Leonid Karlinsky

**ID**: 2025.acl-long.1528

**摘要(英文)**:
> Accurate multi-modal document retrieval is crucial for Retrieval-Augmented Generation (RAG), yet existing benchmarks do not fully capture real-world challenges with their current design. We introduce REAL-MM-RAG, an automatically generated benchmark designed to address four key properties essential for real-world retrieval: (i) multi-modal documents, (ii) enhanced difficulty, (iii) Realistic-RAG queries and (iv) accurate labeling. Additionally, we propose a multi-difficulty-level scheme based on query rephrasing to evaluate models’ semantic understanding beyond keyword matching. Our benchmark reveals significant model weaknesses, particularly in handling table-heavy documents and robustness to query rephrasing. To mitigate these shortcomings, we curate a rephrased training set and introduce a new finance-focused, table-heavy dataset. Fine-tuning on these datasets enables models to achieve state-of-the-art retrieval performance on REAL-MM-RAG benchmark. Our work offers a better way to evaluate and improve retrieval in multi-modal RAG systems while also providing training data and models that address current limitations.

**摘要(中文)**:
> 准确的多模式文档检索对于检索增强生成 (RAG) 至关重要，但现有基准测试当前的设计并未完全捕捉现实世界的挑战。我们引入了 REAL-MM-RAG，这是一种自动生成的基准，旨在解决现实世界检索所必需的四个关键属性：（i）多模态文档，（ii）增强难度，（iii）Realistic-RAG 查询和（iv）准确标记。此外，我们提出了一种基于查询重写的多难度级别方案，以评估模型在关键词匹配之外的语义理解。我们的基准测试揭示了模型的重大弱点，特别是在处理大量表格文档和查询重写的鲁棒性方面。为了减轻这些缺点，我们策划了一个重新措辞的训练集，并引入了一个新的以金融为中心的、表格较多的数据集。对这些数据集的微调使模型能够在 REAL-MM-RAG 基准上实现最先进的检索性能。我们的工作提供了一种更好的方法来评估和改进多模式 RAG 系统中的检索，同时还提供了解决当前限制的训练数据和模型。

---

## 132. CoRe-MMRAG: Cross-Source Knowledge Reconciliation for MultimodalRAG

**类别**: `主会-长文`

**作者**: Yang Tian, Fan Liu, Jingyuan Zhang, Victoria W., Yupeng Hu, Liqiang Nie

**ID**: 2025.acl-long.1583

**摘要(英文)**:
> Multimodal Retrieval-Augmented Generation (MMRAG) has been introduced to enhance Multimodal Large Language Models by incorporating externally retrieved multimodal knowledge, but it introduces two challenges: Parametric-Retrieved Knowledge Inconsistency (PRKI), where discrepancies between parametric and retrieved knowledge create uncertainty in determining reliability, and Visual-Textual Knowledge Inconsistency (VTKI), where misalignment between visual and textual sources disrupts entity representation. To address these challenges, we proposeCross-source knowledgeReconciliation forMultiModalRAG(CoRe-MMRAG), a novel end-to-end framework that effectively reconciles inconsistencies across knowledge sources. CoRe-MMRAG follows a four-stage pipeline: it first generates an internal response from parametric knowledge, then selects the most relevant multimodal evidence via joint similarity assessment, generates an external response, and finally integrates both to produce a reliable answer. Additionally, a specialized training paradigm enhances knowledge source discrimination, multimodal integration, and unified answer generation. Experiments on KB-VQA benchmarks show that CoRe-MMRAG achieves substantial improvements over baseline methods, achieving 5.6% and 9.3% performance gains on InfoSeek and Encyclopedic-VQA, respectively. We release code and data at https://github.com/TyangJN/CoRe-MMRAG.

**摘要(中文)**:
> 多模态检索增强生成（MMRAG）已被引入，通过合并外部检索的多模态知识来增强多模态大语言模型，但它引入了两个挑战：参数检索知识不一致（PRKI），其中参数和检索知识之间的差异在确定可靠性时产生不确定性；以及视觉文本知识不一致（VTKI），其中视觉和文本源之间的不一致会破坏实体表示。为了应对这些挑战，我们提出了跨源知识协调多模式RAG（CoRe-MMRAG），这是一种新颖的端到端框架，可以有效地协调跨知识源的不一致性。 CoRe-MMRAG 遵循四阶段流程：首先根据参数知识生成内部响应，然后通过联合相似性评估选择最相关的多模态证据，生成外部响应，最后将两者整合以产生可靠的答案。此外，专门的培训范式增强了知识源辨别、多模式集成和统一答案生成。 KB-VQA 基准测试的实验表明，CoRe-MMRAG 比基线方法取得了实质性改进，在 InfoSeek 和 Encyclopedic-VQA 上分别实现了 5.6% 和 9.3% 的性能提升。我们在 https://github.com/TyangJN/CoRe-MMRAG 发布代码和数据。

---

## 133. Doc-React: Multi-page Heterogeneous Document Question-answering

**类别**: `主会-短文`

**作者**: Junda Wu, Yu Xia, Tong Yu, Xiang Chen, Sai Sree Harsha, Akash V Maharaj, Ruiyi Zhang, Victor Bursztyn, Sungchul Kim, Ryan A. Rossi, Julian McAuley, Yunyao Li, Ritwik Sinha

**ID**: 2025.acl-short.6

**摘要(英文)**:
> Answering questions over multi-page, multimodal documents, including text and figures, is a critical challenge for applications that require answers to integrate information across multiple modalities and contextual dependencies. Existing methods, such as single-turn retrieval-augmented generation (RAG), struggle to retrieve fine-grained and contextually relevant information from large, heterogeneous documents, leading to suboptimal performance. Inspired by iterative frameworks like ReAct, which refine retrieval through feedback, we propose Doc-React, an adaptive iterative framework that balances information gain and uncertainty reduction at each step. Doc-React leverages InfoNCE-guided retrieval to approximate mutual information, enabling dynamic sub-query generation and refinement. A large language model (LLM) serves as both a judge and generator, providing structured feedback to iteratively improve retrieval. By combining mutual information optimization with entropy-aware selection, Doc-React systematically captures relevant multimodal content, achieving strong performance on complex QA tasks

**摘要(中文)**:
> 对于需要答案来跨多种模式和上下文依赖性集成信息的应用程序来说，回答有关多页、多模式文档（包括文本和图形）的问题是一项严峻的挑战。现有的方法，例如单轮检索增强生成（RAG），很难从大型异构文档中检索细粒度和上下文相关的信息，从而导致性能不佳。受到像 ReAct 这样通过反馈改进检索的迭代框架的启发，我们提出了 Doc-React，这是一种自适应迭代框架，可以平衡每一步的信息增益和不确定性减少。 Doc-React 利用 InfoNCE 引导的检索来近似互信息，从而实现动态子查询生成和细化。大型语言模型 (LLM) 既充当法官又充当生成器，提供结构化反馈以迭代改进检索。通过将互信息优化与熵感知选择相结合，Doc-React 系统地捕获相关的多模态内容，在复杂的 QA 任务上取得出色的性能

---

## 134. KnowShiftQA: How Robust areRAGSystems when Textbook Knowledge Shifts in K-12 Education?

**类别**: `主会-短文`

**作者**: Tianshi Zheng, Weihan Li, Jiaxin Bai, Weiqi Wang, Yangqiu Song

**ID**: 2025.acl-short.16

**摘要(英文)**:
> Retrieval-Augmented Generation (RAG) systems show remarkable potential as question answering tools in the K-12 Education domain, where knowledge is typically queried within the restricted scope of authoritative textbooks. However, discrepancies between these textbooks and the parametric knowledge inherent in Large Language Models (LLMs) can undermine the effectiveness of RAG systems. To systematically investigate RAG system robustness against such knowledge discrepancies, we introduce KnowShiftQA. This novel question answering dataset simulates these discrepancies by applying deliberate hypothetical knowledge updates to both answers and source documents, reflecting how textbook knowledge can shift. KnowShiftQA comprises 3,005 questions across five subjects, designed with a comprehensive question typology focusing on context utilization and knowledge integration. Our extensive experiments on retrieval and question answering performance reveal that most RAG systems suffer a substantial performance drop when faced with these knowledge discrepancies. Furthermore, questions requiring the integration of contextual (textbook) knowledge with parametric (LLM) knowledge pose a significant challenge to current LLMs.

**摘要(中文)**:
> 检索增强生成（RAG）系统作为 K-12 教育领域的问答工具显示出巨大的潜力，在该领域，知识通常在权威教科书的有限范围内进行查询。然而，这些教科书与大型语言模型 (LLM) 固有的参数知识之间的差异可能会破坏 RAG 系统的有效性。为了系统地研究 RAG 系统针对此类知识差异的稳健性，我们引入了 KnowShiftQA。这个新颖的问答数据集通过对答案和源文档进行有意的假设知识更新来模拟这些差异，反映教科书知识如何变化。 KnowShiftQA 包含 5 个主题的 3,005 个问题，采用全面的问题类型设计，重点关注上下文利用和知识整合。我们对检索和问答性能进行的广泛实验表明，大多数 RAG 系统在面临这些知识差异时，性能都会大幅下降。此外，需要将情境（教科书）知识与参数（大语言模型）知识相结合的问题对当前的大语言模型提出了重大挑战。

---

## 135. Towards Geo-Culturally GroundedLLMGenerations

**类别**: `主会-短文`

**作者**: Piyawat Lertvittayakumjorn, David Kinney, Vinodkumar Prabhakaran, Donald Martin Jr., Sunipa Dev

**ID**: 2025.acl-short.26

**摘要(英文)**:
> Generative large language models (LLMs) have demonstrated gaps in diverse cultural awareness across the globe. We investigate the effect of retrieval augmented generation and search-grounding techniques on LLMs’ ability to display familiarity with various national cultures. Specifically, we compare the performance of standard LLMs, LLMs augmented with retrievals from a bespoke knowledge base (i.e., KB grounding), and LLMs augmented with retrievals from a web search (i.e., search grounding) on multiple cultural awareness benchmarks. We find that search grounding significantly improves the LLM performance on multiple-choice benchmarks that test propositional knowledge (e.g., cultural norms, artifacts, and institutions), while KB grounding’s effectiveness is limited by inadequate knowledge base coverage and a suboptimal retriever. However, search grounding also increases the risk of stereotypical judgments by language models and fails to improve evaluators’ judgments of cultural familiarity in a human evaluation with adequate statistical power. These results highlight the distinction between propositional cultural knowledge and open-ended cultural fluency when it comes to evaluating LLMs’ cultural awareness.

**摘要(中文)**:
> 生成式大语言模型（LLM）已经证明了全球不同文化意识之间的差距。我们研究了检索增强生成和搜索基础技术对大语言模型表现出对不同国家文化的熟悉程度的影响。具体来说，我们在多个文化意识基准上比较了标准大语言模型、通过定制知识库检索（即知识库基础）增强的大语言模型以及通过网络搜索检索（即搜索基础）增强的大语言模型的表现。我们发现，搜索基础显着提高了大语言模型在测试命题知识（例如文化规范、文物和机构）的多项选择基准上的表现，而知识库基础的有效性受到知识库覆盖不足和次优检索器的限制。然而，搜索扎根也增加了语言模型做出刻板判断的风险，并且无法在具有足够统计能力的人类评估中提高评估者对文化熟悉度的判断。这些结果凸显了在评估大语言模型的文化意识时命题性文化知识和开放式文化流畅性之间的区别。

---

## 136. Decoder-OnlyLLMs can be Masked Auto-Encoders

**类别**: `主会-短文`

**作者**: Dan Qiao, Yuan Gao, Zheming Yang, Di Yang, Ziheng Wu, Pengcheng Lu, Minghui Qiu, Juntao Li, Min Zhang

**ID**: 2025.acl-short.57

**摘要(英文)**:
> Modern NLP workflows (e.g., RAG systems) require different models for generation and embedding tasks, where bidirectional pre-trained encoders and decoder-only Large Language Models (LLMs) dominate respective tasks. Structural differences between models result in extra development costs and limit knowledge sharing between tasks. In this work, we present UniMAE, a novel unsupervised training method that transforms an Decoder-Only LLM into aUni-DirectionalMaskedAuto-Encoder. UniMAE compresses high-quality semantic information into the [EOS] embedding while preserving the generation capabilities of LLMs. Comprehensive evaluations across 56 MTEB datasets demonstrate that UniMAE can achieve state-of-the-art results under unsupervised settings with merely 100 training steps, establishing the first effective approach to unifying generation and representation learning in decoder-only architectures.

**摘要(中文)**:
> 现代 NLP 工作流程（例如 RAG 系统）需要不同的模型来生成和嵌入任务，其中双向预训练编码器和仅解码器的大语言模型 (LLM) 主导各自的任务。模型之间的结构差异会导致额外的开发成本并限制任务之间的知识共享。在这项工作中，我们提出了 UniMAE，这是一种新颖的无监督训练方法，可将仅解码器 LLM 转换为单向屏蔽自动编码器。 UniMAE 将高质量语义信息压缩到 [EOS] 嵌入中，同时保留 LLM 的生成能力。对 56 个 MTEB 数据集的综合评估表明，UniMAE 只需 100 个训练步骤即可在无监督设置下实现最先进的结果，建立了第一个在仅解码器架构中统一生成和表示学习的有效方法。

---

## 137. Live Football Commentary System Providing Background Information

**类别**: `系统演示`

**作者**: Yuichiro Mori, Chikara Tanaka, Aru Maekawa, Satoshi Kosugi, Tatsuya Ishigaki, Kotaro Funakoshi, Hiroya Takamura, Manabu Okumura

**ID**: 2025.acl-demo.38

**摘要(英文)**:
> Previous research on sports commentary generation has primarily focused on describing major events in the match.However, real-world commentary often includes comments beyond what is visible in the video content, e.g., “Florentina has acquired him for 7 million euros.”For enhancing the viewing experience with such background information,we developed an audio commentary system for football matches that generates utterances with background information, as well as play-by-play commentary.Our system first extracts visual information, and determines whether it is an appropriate timing to produce an utterance.Then it decides which type of utterance to generate: play-by-play or background information. In the latter case, the system leverages external knowledge through retrieval-augmented generation.

**摘要(中文)**:
> 以往对体育解说生成的研究主要集中在描述比赛中的重大事件。然而，现实世界的解说往往包括视频内容中可见之外的评论，例如“弗洛伦蒂娜以700万欧元收购了他。”为了增强此类背景信息的观看体验，我们开发了一种足球比赛的音频解说系统，可以生成带有背景信息的话语以及逐场解说。我们的系统首先提取视觉信息，并确定是否是生成的合适时机。然后它决定生成哪种类型的话语：逐个播放或背景信息。在后一种情况下，系统通过检索增强生成来利用外部知识。

---

## 138. Ai2 ScholarQA: Organized Literature Synthesis with Attribution

**类别**: `系统演示`

**作者**: Amanpreet Singh, Joseph Chee Chang, Dany Haddad, Aakanksha Naik, Jena D. Hwang, Rodney Kinney, Daniel S Weld, Doug Downey, Sergey Feldman

**ID**: 2025.acl-demo.49

**摘要(英文)**:
> Retrieval-augmented generation is increasingly effective in answering scientific questions from literature, but many state-of-the-art systems are expensive and closed-source. We introduce Ai2 Scholar QA, a free online scientific question answering application. To facilitate research, we make our entire pipeline public: as a customizable open-source Python package and interactive web app, along with paper indexes accessible through public APIs and downloadable datasets. We describe our system in detail and present experiments analyzing its key design decisions. In an evaluation on a recent scientific QA benchmark, we find that Ai2 Scholar QA outperforms competing systems.

**摘要(中文)**:
> 检索增强生成在回答文献中的科学问题方面越来越有效，但许多最先进的系统价格昂贵且闭源。我们推出 Ai2 Scholar QA，这是一款免费的在线科学问答应用程序。为了促进研究，我们将整个管道公开：作为可定制的开源 Python 包和交互式 Web 应用程序，以及可通过公共 API 和可下载数据集访问的论文索引。我们详细描述了我们的系统，并通过实验分析了其关键设计决策。在对最近的科学 QA 基准的评估中，我们发现 Ai2 Scholar QA 的性能优于竞争系统。

---

## 139. ROGRAG: A Robustly OptimizedGraphRAGFramework

**类别**: `系统演示`

**作者**: Zhefan Wang, Huanjun Kong, Jie Ying, Wanli Ouyang, Nanqing Dong

**ID**: 2025.acl-demo.58

**摘要(英文)**:
> Large language models (LLMs) commonly struggle with specialized or emerging topics which are rarely seen in the training corpus. Graph-based retrieval-augmented generation (GraphRAG) addresses this by structuring domain knowledge as a graph for dynamic retrieval. However, existing pipelines involve complex engineering workflows, making it difficult to isolate the impact of individual components. It is also challenging to evaluate the retrieval effectiveness due to the overlap between the pretraining and evaluation datasets. In this work, we introduce ROGRAG, a Robustly Optimized GraphRAG framework. Specifically, we propose a multi-stage retrieval mechanism that integrates dual-level with logic form retrieval methods to improve retrieval robustness without increasing computational cost. To further refine the system, we incorporate various result verification methods and adopt an incremental database construction approach. Through extensive ablation experiments, we rigorously assess the effectiveness of each component. Our implementation includes comparative experiments on SeedBench, where Qwen2.5-7B-Instruct initially underperformed. ROGRAG significantly improves the score from 60.0% to 75.0% and outperforms mainstream methods. Experiments on domain-specific datasets reveal that dual-level retrieval enhances fuzzy matching, while logic form retrieval improves structured reasoning, highlighting the importance of multi-stage retrieval. ROGRAG is released as an open-source resource https://github.com/tpoisonooo/ROGRAG and supports installation with pip.

**摘要(中文)**:
> 大型语言模型（LLM）通常难以解决训练语料库中很少见的专业或新兴主题。基于图的检索增强生成（GraphRAG）通过将领域知识结构化为动态检索图来解决这个问题。然而，现有管道涉及复杂的工程工作流程，因此很难隔离各个组件的影响。由于预训练和评估数据集之间的重叠，评估检索有效性也具有挑战性。在这项工作中，我们介绍了 ROGRAG，一个鲁棒优化的 GraphRAG 框架。具体来说，我们提出了一种多级检索机制，将双层与逻辑形式检索方法相结合，以在不增加计算成本的情况下提高检索的鲁棒性。为了进一步完善系统，我们结合了各种结果验证方法并采用增量数据库构建方法。通过广泛的消融实验，我们严格评估每个组件的有效性。我们的实施包括在 SeedBench 上进行比较实验，其中 Qwen2.5-7B-Instruct 最初表现不佳。 ROGRAG 将分数从 60.0% 显着提高到 75.0%，并且优于主流方法。在特定领域数据集上的实验表明，双层检索增强了模糊匹配，而逻辑形式检索则改进了结构化推理，凸显了多级检索的重要性。 ROGRAG 作为开源资源发布 https://github.com/tpoisonooo/ROGRAG 并支持使用 pip 安装。

---

## 140. FlexRAG: A Flexible and Comprehensive Framework for Retrieval-Augmented Generation

**类别**: `系统演示`

**作者**: Zhang Zhuocheng, Yang Feng, Min Zhang

**ID**: 2025.acl-demo.60

**摘要(英文)**:
> Retrieval-Augmented Generation (RAG) plays a pivotal role in modern large language model applications, with numerous existing frameworks offering a wide range of functionalities to facilitate the development of RAG systems.However, we have identified several persistent challenges in these frameworks, including lack of new techniques, difficulties in algorithm reproduction and sharing, and high system overhead.To address these limitations, we introduce **FlexRAG**, an open-source framework specifically designed for research and prototyping.FlexRAG supports text-based, multimodal, and network-based RAG, providing comprehensive lifecycle support alongside efficient asynchronous processing and persistent caching capabilities.By offering a robust and flexible solution, FlexRAG enables researchers to rapidly develop, deploy, and share advanced RAG systems.Our toolkit and resources are available at https://github.com/ictnlp/FlexRAG.

**摘要(中文)**:
> 检索增强生成（RAG）在现代大型语言模型应用中发挥着关键作用，众多现有框架提供了广泛的功能来促进RAG系统的开发。然而，我们发现这些框架中存在一些持续存在的挑战，包括缺乏新技术、算法复制和共享困难以及系统开销高。为了解决这些限制，我们引入了**FlexRAG**，这是一个专门为研究和原型设计而设计的开源框架。FlexRAG支持基于文本、多模式和基于网络的 RAG，提供全面的生命周期支持以及高效的异步处理和持久缓存功能。通过提供强大而灵活的解决方案，FlexRAG 使研究人员能够快速开发、部署和共享先进的 RAG 系统。我们的工具包和资源可在 https://github.com/ictnlp/FlexRAG 上获取。

---

## 141. From Ambiguity to Accuracy: The Transformative Effect of Coreference Resolution on Retrieval-Augmented Generation systems

**类别**: `学生研讨会`

**作者**: Youngjoon Jang, Seongtae Hong, Junyoung Son, Sungjin Park, Chanjun Park, Heuiseok Lim

**ID**: 2025.acl-srw.27

**摘要(英文)**:
> Retrieval-Augmented Generation (RAG) has emerged as a crucial framework in natural language processing (NLP), improving factual consistency and reducing hallucinations by integrating external document retrieval with large language models (LLMs). However, the effectiveness of RAG is often hindered by coreferential complexity in retrieved documents, which can introduce ambiguity and interfere with in-context learning. In this study, we systematically investigate how entity coreference affects both document retrieval and generative performance in RAG-based systems, focusing on retrieval relevance, contextual understanding, and overall response quality. We demonstrate that coreference resolution enhances retrieval effectiveness and improves question-answering (QA) performance. Through comparative analysis of different pooling strategies in retrieval tasks, we find that mean pooling demonstrates superior context capturing ability after applying coreference resolution. In QA tasks, we discover that smaller models show greater improvement from the disambiguation process, likely due to their limited inherent capacity for handling referential ambiguity. With these findings, this study aims to provide a deeper understanding of the challenges posed by coreferential complexity in RAG, offering guidance for improving retrieval and generation in knowledge-intensive AI applications.

**摘要(中文)**:
> 检索增强生成 (RAG) 已成为自然语言处理 (NLP) 中的重要框架，通过将外部文档检索与大型语言模型 (LLM) 集成来提高事实一致性并减少幻觉。然而，RAG 的有效性常常受到检索文档中的共指复杂性的阻碍，这可能会引入歧义并干扰上下文学习。在本研究中，我们系统地研究实体共指如何影响基于 RAG 的系统中的文档检索和生成性能，重点关注检索相关性、上下文理解和整体响应质量。我们证明共指消解可以提高检索效率并提高问答（QA）性能。通过对检索任务中不同池化策略的比较分析，我们发现均值池化在应用共指消解后表现出优越的上下文捕获能力。在 QA 任务中，我们发现较小的模型在消歧过程中表现出更大的改进，这可能是由于它们处理指称歧义的固有能力有限。通过这些发现，本研究旨在更深入地了解 RAG 中的共指复杂性所带来的挑战，为改进知识密集型人工智能应用中的检索和生成提供指导。

---

## 142. Enhancing Software Requirements Engineering with Language Models and Prompting Techniques: Insights from the Current Research and Future Directions

**类别**: `学生研讨会`

**作者**: Moemen Ebrahim, Shawkat Guirguis, Christine Basta

**ID**: 2025.acl-srw.31

**摘要(英文)**:
> Large Language Models (LLMs) offer transformative potential for Software Requirements Engineering (SRE), yet critical challenges, including domain ignorance, hallucinations, and high computational costs, hinder their adoption. This paper proposes a conceptual framework that integrates Small Language Models (SLMs) and Knowledge-Augmented LMs (KALMs) with LangChain to address these limitations systematically. Our approach combines: (1) SLMs for efficient, locally deployable requirements processing, (2) KALMs enhanced with Retrieval-Augmented Generation (RAG) to mitigate domain-specific gaps, and (3) LangChain for structured, secure workflow orchestration. We identify and categorize six technical challenges and two research gaps through a systematic review of LLM applications in SRE. To guide practitioners, we distill evidence-based prompt engineering guidelines (Context, Language, Examples, Keywords) and propose prompting strategies (e.g., Chain-of-Verification) to improve output reliability. The paper establishes a theoretical foundation for scalable, trustworthy AI-assisted SRE and outlines future directions, including domain-specific prompt templates and hybrid validation pipelines.

**摘要(中文)**:
> 大型语言模型 (LLM) 为软件需求工程 (SRE) 提供了变革潜力，但关键挑战（包括领域无知、幻觉和高计算成本）阻碍了其采用。本文提出了一个将小语言模型（SLM）和知识增强型语言模型（KALM）与LangChain集成的概念框架，以系统地解决这些局限性。我们的方法结合了：(1) 用于高效、可本地部署的需求处理的 SLM，(2) 通过检索增强生成 (RAG) 增强的 KALM，以缩小特定领域的差距，以及 (3) 用于结构化、安全的工作流程编排的 LangChain。通过对 SRE 中的 LLM 申请的系统审查，我们确定并分类了六项技术挑战和两项研究差距。为了指导从业者，我们提炼了基于证据的提示工程指南（上下文、语言、示例、关键词）并提出提示策略（例如验证链）以提高输出可靠性。该论文为可扩展、值得信赖的人工智能辅助 SRE 奠定了理论基础，并概述了未来的方向，包括特定领域的提示模板和混合验证管道。

---

## 143. Question Decomposition for Retrieval-Augmented Generation

**类别**: `学生研讨会`

**作者**: Paul J. L. Ammann, Jonas Golde, Alan Akbik

**ID**: 2025.acl-srw.32

**摘要(英文)**:
> Grounding large language models (LLMs) in verifiable external sources is a well-established strategy for generating reliable answers. Retrieval-augmented generation (RAG) is one such approach, particularly effective for tasks like question answering: it retrieves passages that are semantically related to the question and then conditions the model on this evidence. However, multi-hop questions, such as“Which company among NVIDIA, Apple, and Google made the biggest profit in 2023?,”challenge RAG because relevant facts are often distributed across multiple documents rather than co-occurring in one source, making it difficult for standard RAG to retrieve sufficient information. To address this, we propose a RAG pipeline that incorporates question decomposition: (i) an LLM decomposes the original query into sub-questions, (ii) passages are retrieved for each sub-question, and (iii) the merged candidate pool is reranked to improve the coverage and precision of the retrieved evidence. We show that question decomposition effectively assembles complementary documents, while reranking reduces noise and promotes the most relevant passages before answer generation. We evaluate our approach on the MultiHop-RAG and HotpotQA, showing gains in retrieval (MRR@10: +36.7%) and answer accuracy (F1: +11.6%) over standard RAG baselines. The pipeline is a practical, drop-in enhancement requiring no task-specific training or specialized indexing.

**摘要(中文)**:
> 将大型语言模型 (LLM) 建立在可验证的外部资源中是生成可靠答案的行之有效的策略。检索增强生成（RAG）就是一种这样的方法，对于问答等任务特别有效：它检索与问题语义相关的段落，然后根据该证据来调整模型。然而，诸如“NVIDIA、苹果和谷歌中哪家公司在 2023 年利润最大？”之类的多跳问题对 RAG 提出了挑战，因为相关事实通常分布在多个文档中，而不是同时出现在一个来源中，这使得标准 RAG 很难检索到足够的信息。为了解决这个问题，我们提出了一个包含问题分解的 RAG 管道：（i）LLM 将原始查询分解为子问题，（ii）为每个子问题检索段落，（iii）对合并的候选池进行重新排序，以提高检索证据的覆盖范围和精度。我们表明，问题分解有效地组装了补充文档，而重新排序可以减少噪音并在答案生成之前提升最相关的段落。我们在 MultiHop-RAG 和 HotpotQA 上评估了我们的方法，显示出与标准 RAG 基线相比，检索（MRR@10：+36.7%）和答案准确性（F1：+11.6%）方面的提升。该管道是一种实用的插入式增强功能，不需要特定于任务的培训或专门的索引。

---

## 144. ACL2025 Industry Track: Overview

**类别**: `工业Track`

**作者**: Georg Rehm, Yunyao Li

**ID**: 2025.acl-industry.1

**摘要(英文)**:
> For the 63rd Annual Meeting of the Association for Computational Linguistics (ACL 2025), it was decided once again to organise a dedicated Industry Track. Similar to the main research track of the conference, the industry track attracted an unprecedented number of 421 paper submissions. In total, 453 reviewers and 21 area chairs participated in the evaluation of these papers. After a thorough, double-blind peer-review evaluation with three reviews for each submission followed by reviewer discussions and additional deliberations, 108 papers were selected for presentation at the ACL 2025 Industry Track. Large language models were front and center of almost all submissions with trustworthiness, domain-adaptation, retrieval-augmented generation, and agentic architectures – across domains such as medical, legal, and finance – being popular topics.

**摘要(中文)**:
> 第 63 届计算语言学协会年会（ACL 2025）再次决定组织专门的行业分会场。与会议的主要研究赛道类似，行业赛道吸引了前所未有的421篇论文投稿。总共有 453 名审稿人和 21 名领域主席参与了这些论文的评估​​。经过彻底的双盲同行评审评估（对每份提交的论文进行三轮评审，然后进行审稿人讨论和额外审议），最终选出 108 篇论文在 ACL 2025 Industry Track 上展示。大型语言模型是几乎所有提交内容的前沿和中心，其中可信度、领域适应、检索增强生成和代理架构（跨医学、法律和金融等领域）是热门话题。

---

## 145. Scaling Context, Not Parameters: Training a Compact 7BLanguage Model for Efficient Long-Context Processing

**类别**: `工业Track`

**作者**: Chen Wu, Yin Song

**ID**: 2025.acl-industry.6

**摘要(英文)**:
> We present MegaBeam-Mistral-7B, a language model that supports 512K-token context length. Our work addresses practical limitations in long-context training, supporting real-world tasks such as compliance monitoring and verification. Evaluated on three long-context benchmarks, our 7B-parameter model demonstrates superior in-context learning performance on HELMET and robust retrieval and tracing capability on RULER. It is currently the only open model to achieve competitive long-range reasoning on BABILong at 512K context length without RAG or targeted fine-tuning. Released as fully open source under the Apache 2.0 license, the model has been downloaded over 100,000 times on Hugging Face.

**摘要(中文)**:
> 我们提出了 MegaBeam-Mistral-7B，一种支持 512K 令牌上下文长度的语言模型。我们的工作解决了长上下文培训的实际限制，支持合规性监控和验证等实际任务。在三个长上下文基准上进行评估后，我们的 7B 参数模型在 HELMET 上展示了卓越的上下文学习性能，在 RULER 上展现了强大的检索和跟踪能力。它是目前唯一一个在 BABILong 上以 512K 上下文长度实现竞争性远程推理的开放模型，无需 RAG 或有针对性的微调。该模型在 Apache 2.0 许可证下完全开源发布，在 Hugging Face 上的下载量已超过 100,000 次。

---

## 146. CiteFix: EnhancingRAGAccuracy Through Post-Processing Citation Correction

**类别**: `工业Track`

**作者**: Harsh Maheshwari, Srikanth Tenneti, Alwarappan Nakkiran

**ID**: 2025.acl-industry.23

**摘要(英文)**:
> Retrieval Augmented Generation (RAG) has emerged as a powerful application of Large Language Models (LLMs), revolutionizing information search and consumption. RAG systems combine traditional search capabilities with LLMs to generate comprehensive answers to user queries, ideally with accurate citations. However, in our experience of developing a RAG product, LLMs often struggle with source attribution, aligning with other industry studies reporting citation accuracy rates of only about 74% for popular generative search engines. To address this, we present efficient post-processing algorithms to improve citation accuracy in LLM-generated responses, with minimal impact on latency and cost. Our approaches cross-check generated citations against retrieved articles using methods including keyword + semantic matching, fine tuned model with BERTScore, and a lightweight LLM-based technique. Our experimental results demonstrate a relative improvement of 15.46% in the overall accuracy metrics of our RAG system. This significant enhancement potentially enables a shift from our current larger language model to a relatively smaller model that is approximately 12x more cost-effective and 3x faster in inference time, while maintaining comparable performance. This research contributes to enhancing the reliability and trustworthiness of AI-generated content in information retrieval and summarization tasks which is critical to gain customer trust especially in commercial products.

**摘要(中文)**:
> 检索增强生成 (RAG) 已成为大型语言模型 (LLM) 的强大应用，彻底改变了信息搜索和消费。 RAG 系统将传统搜索功能与大语言模型相结合，为用户查询生成全面的答案，最好能提供准确的引用。然而，根据我们开发 RAG 产品的经验，大语言模型经常在来源归因方面遇到困难，与其他行业研究报告的流行生成搜索引擎的引文准确率仅为 74% 左右相一致。为了解决这个问题，我们提出了高效的后处理算法，以提高大语言模型生成的回复的引用准确性，同时对延迟和成本的影响最小。我们的方法使用关键字+语义匹配、BERTScore 微调模型以及基于 LLM 的轻量级技术等方法，对检索到的文章生成的引文进行交叉检查。我们的实验结果表明，我们的 RAG 系统的整体精度指标相对提高了 15.46%。这一显着增强可能使我们能够从当前较大的语言模型转变为相对较小的模型，该模型的成本效益提高约 12 倍，推理时间加快 3 倍，同时保持可比较的性能。这项研究有助于提高人工智能生成的内容在信息检索和摘要任务中的可靠性和可信度，这对于赢得客户的信任至关重要，尤其是在商业产品中。

---

## 147. GeneratingQ&ABenchmarks forRAGEvaluation in Enterprise Settings

**类别**: `工业Track`

**作者**: Simone Filice, Guy Horowitz, David Carmel, Zohar Karnin, Liane Lewin-Eytan, Yoelle Maarek

**ID**: 2025.acl-industry.33

**摘要(英文)**:
> We introduce DataMorgana, a tool for generating synthetic Q&A benchmarks tailored to RAG applications in enterprise settings. DataMorgana enables customization of the generated benchmark according to the expected diverse traffic of the RAG application. It allows for specifying question types and their associated distribution via a lightweight configuration mechanism. We demonstrate via a series of quantitative and qualitative experiments that DataMorgana surpasses existing tools in terms of lexical, syntactic, and semantic diversity of the generated benchmark while maintaining high quality. We run our experiments over domain-specific and general-knowledge public datasets, as well as two private datasets from governmental RAG applications: one for citizens and the other for government employees. The private datasets have been shared with us by AI71, an AI company, which has integrated DataMorgana into its offerings. In addition, DataMorgana has been offered to about 150 researchers worldwide as part of the SIGIR’2025 LiveRAG Challenge held in Spring 2025.

**摘要(中文)**:
> 我们推出 DataMorgana，这是一种用于生成针对企业环境中的 RAG 应用程序定制的综合问答基准的工具。 DataMorgana 能够根据 RAG 应用程序的预期不同流量定制生成的基准。它允许通过轻量级配置机制指定问题类型及其相关分布。我们通过一系列定量和定性实验证明，DataMorgana 在生成的基准的词汇、句法和语义多样性方面超越了现有工具，同时保持了高质量。我们在特定领域和一般知识公共数据集以及来自政府 RAG 应用程序的两个私有数据集上运行实验：一个用于公民，另一个用于政府雇员。人工智能公司 AI71 已与我们共享私人数据集，该公司已将 DataMorgana 集成到其产品中。此外，作为 2025 年春季举行的 SIGIR’2025 LiveRAG 挑战赛的一部分，DataMorgana 已向全球约 150 名研究人员提供。

---

## 148. ComRAG: Retrieval-Augmented Generation with Dynamic Vector Stores for Real-time Community Question Answering in Industry

**类别**: `工业Track`

**作者**: Qinwen Chen, Wenbiao Tao, Zhiwei Zhu, Mingfan Xi, Liangzhong Guo, Yuan Wang, Wei Wang, Yunshi Lan

**ID**: 2025.acl-industry.53

**摘要(英文)**:
> Community Question Answering (CQA) platforms can be deemed as important knowledge bases in community, but effectively leveraging historical interactions and domain knowledge in real-time remains a challenge. Existing methods often underutilize external knowledge, fail to incorporate dynamic historical QA context, or lack memory mechanisms suited for industrial deployment. We propose ComRAG, a retrieval-augmented generation framework for real-time industrial CQA that integrates static knowledge with dynamic historical QA pairs via a centroid-based memory mechanism designed for retrieval, generation, and efficient storage. Evaluated on three industrial CQA datasets, ComRAG consistently outperforms all baselines—achieving up to 25.9% improvement in vector similarity, reducing latency by 8.7%–23.3%, and lowering chunk growth from 20.23% to 2.06% over iterations.

**摘要(中文)**:
> 社区问答（CQA）平台可以被视为社区中的重要知识库，但有效利用历史交互和实时领域知识仍然是一个挑战。现有方法通常未充分利用外部知识，无法纳入动态历史 QA 上下文，或缺乏适合工业部署的记忆机制。我们提出了 ComRAG，一种用于实时工业 CQA 的检索增强生成框架，它通过专为检索、生成和高效存储而设计的基于质心的内存机制将静态知识与动态历史 QA 对集成。在三个工业 CQA 数据集上进行评估后，ComRAG 始终优于所有基线，在迭代过程中向量相似性提高了 25.9%，延迟减少了 8.7%–23.3%，并将块增长从 20.23% 降低到 2.06%。

---

## 149. Hard Negative Mining for Domain-Specific Retrieval in Enterprise Systems

**类别**: `工业Track`

**作者**: Hansa Meghwani, Amit Agarwal, Priyaranjan Pattnayak, Hitesh Laxmichand Patel, Srikant Panda

**ID**: 2025.acl-industry.72

**摘要(英文)**:
> Enterprise search systems often struggle to retrieve accurate, domain-specific information due to semantic mismatches and overlapping terminologies. These issues can degrade the performance of downstream applications such as knowledge management, customer support, and retrieval-augmented generation agents. To address this challenge, we propose a scalable hard-negative mining framework tailored specifically for domain-specific enterprise data. Our approach dynamically selects semantically challenging but contextually irrelevant documents to enhance deployed re-ranking models.Our method integrates diverse embedding models, performs dimensionality reduction, and uniquely selects hard negatives, ensuring computational efficiency and semantic precision. Evaluation on our proprietary enterprise corpus (cloud services domain) demonstrates substantial improvements of 15% in MRR@3 and 19% in MRR@10 compared to state-of-the-art baselines and other negative sampling techniques. Further validation on public domain-specific datasets (FiQA, Climate Fever, TechQA) confirms our method’s generalizability and readiness for real-world applications.

**摘要(中文)**:
> 由于语义不匹配和术语重叠，企业搜索系统通常很难检索准确的、特定领域的信息。这些问题可能会降低下游应用程序的性能，例如知识管理、客户支持和检索增强生成代理。为了应对这一挑战，我们提出了一个专门为特定领域的企业数据量身定制的可扩展的硬负挖掘框架。我们的方法动态选择语义上具有挑战性但上下文不相关的文档来增强部署的重排序模型。我们的方法集成了不同的嵌入模型，执行降维，并独特地选择硬负例，确保计算效率和语义精度。对我们专有企业语料库（云服务领域）的评估表明，与最先进的基线和其他负采样技术相比，MRR@3 显着提高了 15%，MRR@10 显着提高了 19%。对公共领域特定数据集（FiQA、Climate Fever、TechQA）的进一步验证证实了我们的方法的普遍性和对现实世界应用的准备。

---

## 150. MedPlan: A Two-StageRAG-Based System for Personalized Medical Plan Generation

**类别**: `工业Track`

**作者**: Hsin-Ling Hsu, Cong-Tinh Dao, Luning Wang, Zitao Shuai, Thao Nguyen Minh Phan, Jun-En Ding, Chun-Chieh Liao, Pengfei Hu, Xiaoxue Han, Chih-Ho Hsu, Dongsheng Luo, Wen-Chih Peng, Feng Liu, Fang-Ming Hung, Chenwei Wu

**ID**: 2025.acl-industry.76

**摘要(英文)**:
> Despite recent success in applying large language models (LLMs) to electronic health records (EHR), most systems focus primarily on assessment rather than treatment planning. We identify three critical limitations in current approaches: they generate treatment plans in a single pass rather than following the sequential reasoning process used by clinicians; they rarely incorporate patient-specific historical context; and they fail to effectively distinguish between subjective and objective clinical information. Motivated by the SOAP methodology (Subjective, Objective, Assessment, Plan), we introduce MedPlan, a novel framework that structures LLM reasoning to align with real-life clinician workflows. Our approach employs a two-stage architecture that first generates a clinical assessment based on patient symptoms and objective data, then formulates a structured treatment plan informed by this assessment and enriched with patient-specific information through retrieval-augmented generation. Comprehensive evaluation demonstrates that our method significantly outperforms baseline approaches in both assessment accuracy and treatment plan quality. Our demo system and code are available at https://github.com/JustinHsu1019/MedPlan.

**摘要(中文)**:
> 尽管最近在将大型语言模型（LLM）应用于电子健康记录（EHR）方面取得了成功，但大多数系统主要关注评估而不是治疗计划。我们确定了当前方法的三个关键局限性：它们一次性生成治疗计划，而不是遵循临床医生使用的顺序推理过程；它们很少结合患者特定的历史背景；他们无法有效地区分主观和客观临床信息。在 SOAP 方法（主观、客观、评估、计划）的推动下，我们推出了 MedPlan，这是一个新颖的框架，可构建 LLM 推理以与现实生活中的临床医生工作流程保持一致。我们的方法采用两阶段架构，首先根据患者症状和客观数据生成临床评估，然后根据该评估制定结构化治疗计划，并通过检索增强生成丰富患者特定信息。综合评估表明，我们的方法在评估准确性和治疗计划质量方面均显着优于基线方法。我们的演示系统和代码可在 https://github.com/JustinHsu1019/MedPlan 获取。

---

## 151. EXPLAIN: Enhancing Retrieval-Augmented Generation with Entity Summary

**类别**: `工业Track`

**作者**: Yaozhen Liang, Xiao Liu, Jiajun Yu, Zhouhua Fang, Qunsheng Zou, Linghan Zheng, Yong Li, Zhiwei Liu, Haishuai Wang

**ID**: 2025.acl-industry.108

**摘要(英文)**:
> Document question answering plays a crucial role in enhancing employee productivity by providing quick and accurate access to information. Two primary approaches have been developed: retrieval-augmented generation (RAG), which reduces input tokens and inference costs, and long-context question answering (LC), which processes entire documents for higher accuracy. We introduce EXPLAIN (EXtracting,Pre-summarizing,Linking and enhAcINg RAG), a novel retrieval-augmented generation method that automatically extracts useful entities and generates summaries from documents. EXPLAIN improves accuracy by retrieving more informative entity summaries, achieving precision comparable to LC while maintaining low token consumption. Experimental results on internal dataset (ROUGE-L from 30.14% to 30.31%) and three public datasets (HotpotQA, 2WikiMQA, and Quality, average score from 62% to 64%) demonstrate the efficacy of EXPLAIN. Human evaluation in ant group production deployment indicates EXPLAIN surpasses baseline RAG in comprehensiveness.

**摘要(中文)**:
> 文档问答通过提供快速、准确的信息访问，在提高员工生产力方面发挥着至关重要的作用。已经开发了两种主要方法：检索增强生成（RAG），可减少输入标记和推理成本；长上下文问答（LC），可处理整个文档以获得更高的准确性。我们引入了 EXPLAIN（提取、预总结、链接和增强 RAG），这是一种新颖的检索增强生成方法，可以自动提取有用的实体并从文档中生成摘要。 EXPLAIN 通过检索信息更丰富的实体摘要来提高准确性，实现与 LC 相当的精度，同时保持较低的令牌消耗。在内部数据集（ROUGE-L从30.14％到30.31％）和三个公共数据集（HotpotQA、2WikiMQA和Quality，平均得分从62％到64％）上的实验结果证明了EXPLAIN的功效。蚂蚁集团生产部署中的人工评估表明 EXPLAIN 在全面性上超越了基线 RAG。

---

## 152. EcoDoc: A Cost-Efficient Multimodal Document Processing System for Enterprises UsingLLMs

**类别**: `工业Track`

**作者**: Ravi K. Rajendran, Biplob Debnath, Murugan Sankaradass, Srimat Chakradhar

**ID**: 2025.acl-industry.109

**摘要(英文)**:
> Enterprises are increasingly adopting Generative AI applications to extract insights from large volumes of multimodal documents in domains such as finance, law, healthcare, and industry. These documents contain structured and unstructured data (images, charts, handwritten texts, etc.) requiring robust AI systems for effective retrieval and comprehension. Recent advancements in Retrieval-Augmented Generation (RAG) frameworks and Vision-Language Models (VLMs) have improved retrieval performance on multimodal documents by processing pages as images. However, large-scale deployment remains challenging due to the high cost of LLM API usage and the slower inference speed of image-based processing of pages compared to text-based processing. To address these challenges, we propose EcoDoc, a cost-effective multimodal document processing system that dynamically selects the processing modalities for each page as an image or text based on page characteristics and query intent. Our experimental evaluation on TAT-DQA and DocVQA benchmarks shows that EcoDoc reduces average query processing latency by up to 2.29×and cost by up to 10×, without compromising accuracy.

**摘要(中文)**:
> 企业越来越多地采用生成式人工智能应用程序，从金融、法律、医疗保健和工业等领域的大量多模式文档中提取见解。这些文档包含结构化和非结构化数据（图像、图表、手写文本等），需要强大的人工智能系统来有效检索和理解。检索增强生成 (RAG) 框架和视觉语言模型 (VLM) 的最新进展通过将页面处理为图像来提高多模式文档的检索性能。然而，由于LLM API使用成本较高，并且与基于文本的处理相比，基于图像的页面处理的推理速度较慢，大规模部署仍然具有挑战性。为了应对这些挑战，我们提出了 EcoDoc，这是一种经济高效的多模式文档处理系统，可根据页面特征和查询意图动态选择每个页面的处理模式作为图像或文本。我们对 TAT-DQA 和 DocVQA 基准的实验评估表明，EcoDoc 在不影响准确性的情况下，将平均查询处​​理延迟降低了 2.29 倍，成本降低了 10 倍。

---

## 153. GOLFer: SmallerLMs-Generated Documents Hallucination Filter & Combiner for Query Expansion in Information Retrieval

**类别**: `Findings`

**作者**: Lingyuan Liu, Mengxiang Zhang

**ID**: 2025.findings-acl.8

**摘要(英文)**:
> Large language models (LLMs)-based query expansion for information retrieval augments queries with generated hypothetical documents with LLMs. However, its performance relies heavily on the scale of the language models (LMs), necessitating larger, more advanced LLMs. This approach is costly, computationally intensive, and often has limited accessibility. To address these limitations, we introduce GOLFer - Smaller LMs-Generated Documents Hallucination Filter & Combiner - a novel method leveraging smaller open-source LMs for query expansion. GOLFer comprises two modules: a hallucination filter and a documents combiner. The former detects and removes non-factual and inconsistent sentences in generated documents, a common issue with smaller LMs, while the latter combines the filtered content with the query using a weight vector to balance their influence. We evaluate GOLFer alongside dominant LLMs-based query expansion methods on three web search and ten low-resource datasets. Experimental results demonstrate that GOLFer consistently outperforms other methods using smaller LMs, and maintains competitive performance against methods using large-size LLMs, demonstrating its effectiveness.

**摘要(中文)**:
> 用于信息检索的基于大语言模型 (LLM) 的查询扩展通过使用 LLM 生成的假设文档来增强查询。然而，其性能在很大程度上依赖于语言模型 (LM) 的规模，因此需要更大、更先进的 LLM。这种方法成本高昂、计算量大，而且通常可访问性有限。为了解决这些限制，我们引入了 GOLFer - 较小的 LM 生成的文档幻觉过滤器和组合器 - 一种利用较小的开源 LM 进行查询扩展的新颖方法。 GOLFe 包含两个模块：幻觉过滤器和文档组合器。前者检测并删除生成文档中非事实和不一致的句子，这是小型语言模型的常见问题，而后者使用权重向量将过滤后的内容与查询结合起来以平衡它们的影响。我们在三个网络搜索和十个低资源数据集上评估 GOLFe 以及基于 LLM 的主流查询扩展方法。实验结果表明，GOLFer 始终优于使用较小 LM 的其他方法，并且与使用大型 LLM 的方法相比保持了竞争性能，证明了其有效性。

---

## 154. TreeRAG: Unleashing the Power of Hierarchical Storage for Enhanced Knowledge Retrieval in Long Documents

**类别**: `Findings`

**作者**: Wenyu Tao, Xiaofen Xing, Yirong Chen, Linyi Huang, Xiangmin Xu

**ID**: 2025.findings-acl.20

**摘要(英文)**:
> When confronting long document information retrieval for Query-Focused Summarization(QFS), Traditional Retrieval-Augmented Generation(RAG) frameworks struggle to retrieve all relevant knowledge points, and the chunking and retrieve strategies of existing frameworks may disrupt the connections between knowledge points and the integrity of the information. To address these issues, we proposeTreeRAG, which employsTree-Chunkingfor chunking and embedding in a tree-like structure , coupled with "root-to-leaves" and "leaf-to-root" retrieve strategy namedBidirectional Traversal Retrieval. This approach effectively preserves the hierarchical structure among knowledge points and significantly enhances the ability to retrieve while minimizing noise inference. Our experimental results on theFinance, Law, and Medical subsets of the Dragonball datasetdemonstrate thatTreeRAGachieves significant enhancements in both recall quality and precision compared to traditional and popular existing methods and achieves better performance to corresponding question-answering tasks, marking a new breakthrough in long document knowledge retrieval.

**摘要(中文)**:
> 当面对以查询为中心的摘要（QFS）的长文档信息检索时，传统检索增强生成（RAG）框架难以检索所有相关知识点，并且现有框架的分块和检索策略可能会破坏知识点之间的联系和信息的完整性。为了解决这些问题，我们提出了TreeRAG，它采用Tree-Chunking进行分块并嵌入树状结构中，再加上“根到叶”和“叶到根”检索策略，称为双向遍历检索。这种方法有效地保留了知识点之间的层次结构，并显着增强了检索能力，同时最大限度地减少了噪声推断。我们在龙珠数据集的金融、法律和医学子集上的实验结果表明，与传统和流行的现有方法相比，TreeRA在召回质量和精确率方面均取得了显着增强，并且在相应的问答任务中取得了更好的性能，标志着长文档知识检索的新突破。

---

## 155. FlashBack: Efficient Retrieval-Augmented Language Modeling for Fast Inference

**类别**: `Findings`

**作者**: Runheng Liu, Xingchen Xiao, Heyan Huang, Zewen Chi, Zhijing Wu

**ID**: 2025.findings-acl.33

**摘要(英文)**:
> Retrieval-Augmented Language Modeling (RALM) by integrating large language models (LLM) with relevant documents from an external corpus is a proven methodology for enabling the LLM to generate information beyond the scope of its pre-training corpus. Previous work by retrieving a set of tokens iteratively with retrieved content prepending to the input poses a high runtime issue, which degrades the inference efficiency of the LLMs because they fail to use the Key-Value (KV) cache efficiently. We propose FlashBack, a modular RALM designed to improve the inference efficiency of RALM with appending context pattern while maintaining decent performance after fine-tuning by Low-Rank Adaption. FlashBack appends retrieved documents at the end of the context for efficiently utilizing the KV cache. We also introduce the Marking Token as two special prompt tokens for marking the appending context during fine-tuning. Our experiments show that FlashBack can improve language modeling performance in perplexity metric. We proved the Marking Token is a usable add-on when fine-tuning models on specific context patterns. By bypassing unnecessary re-computation, FlashBack achieves fast inference speed speed with long context input. The inference speed is up to4×faster than the prepending counterpart on a 7B LLM (Llama 2) in the runtime test.

**摘要(中文)**:
> 通过将大型语言模型 (LLM) 与外部语料库的相关文档集成来进行检索增强语言建模 (RALM)，这是一种经过验证的方法，使 LLM 能够生成超出其预训练语料库范围的信息。以前的工作是通过迭代地检索一组令牌并将检索到的内容前置到输入中，这会带来很高的运行时问题，这会降低 LLM 的推理效率，因为它们无法有效地使用键值 (KV) 缓存。我们提出了 FlashBack，这是一种模块化 RALM，旨在通过附加上下文模式来提高 RALM 的推理效率，同时在通过低秩自适应进行微调后保持良好的性能。 FlashBack 将检索到的文档附加在上下文的末尾，以有效利用 KV 缓存。我们还引入了标记令牌作为两个特殊的提示令牌，用于在微调期间标记附加上下文。我们的实验表明，FlashBack 可以提高困惑度度量中的语言建模性能。我们证明，在根据特定上下文模式微调模型时，标记令牌是一个可用的附加组件。通过绕过不必要的重新计算，FlashBack 通过长上下文输入实现了快速的推理速度。在运行时测试中，推理速度比 7B LLM (Llama 2) 上的推理速度快 4 倍。

---

## 156. PersonaBench: EvaluatingAIModels on Understanding Personal Information through Accessing (Synthetic) Private User Data

**类别**: `Findings`

**作者**: Juntao Tan, Liangwei Yang, Zuxin Liu, Zhiwei Liu, Rithesh R N, Tulika Manoj Awalgaonkar, Jianguo Zhang, Weiran Yao, Ming Zhu, Shirley Kokane, Silvio Savarese, Huan Wang, Caiming Xiong, Shelby Heinecke

**ID**: 2025.findings-acl.49

**摘要(英文)**:
> Personalization is essential for AI assistants, especially in private AI settings where models are expected to interpret users’ personal data (e.g., conversations, app usage) to understand their background, preferences, and social context. However, due to privacy concerns, existing academic research lacks direct access to such data, making benchmarking difficult. To fill this gap, we propose a synthetic data pipeline that generates realistic user profiles and private documents, enabling the creation of PersonaBench—a benchmark for evaluating models’ ability to understand personal information. Using this benchmark, we assess Retrieval-Augmented Generation (RAG) pipelines on personalized questions and find that current models struggle to accurately extract and answer questions even when provided with the full set of user documents, highlighting the need for improved personalization methods.

**摘要(中文)**:
> 个性化对于人工智能助理至关重要，尤其是在私人人工智能环境中，模型需要解释用户的个人数据（例如对话、应用程序使用情况）以了解他们的背景、偏好和社交背景。然而，出于隐私方面的考虑，现有的学术研究无法直接访问这些数据，这使得基准测试变得困难。为了填补这一空白，我们提出了一个合成数据管道，可以生成真实的用户配置文件和私人文档，从而创建 PersonaBench——评估模型理解个人信息能力的基准。使用此基准，我们评估个性化问题的检索增强生成（RAG）管道，发现当前模型即使提供全套用户文档也难以准确提取和回答问题，这凸显了改进个性化方法的必要性。

---

## 157. Exploring Knowledge Filtering for Retrieval-Augmented Discriminative Tasks

**类别**: `Findings`

**作者**: Minjie Qiang, Zhongqing Wang, Xiaoyi Bao, HaoYuan Ma, Shoushan Li, Guodong Zhou

**ID**: 2025.findings-acl.86

**摘要(英文)**:
> Retrieval-augmented methods have achieved remarkable advancements in alleviating the hallucination of large language models.Nevertheless, the introduction of external knowledge does not always lead to the expected improvement in model performance, as irrelevant or harmful information present in the retrieved knowledge can compromise the prediction process.To address these challenges, we propose a novel framework aimed at improving model performance by incorporating knowledge filtering and prediction fusion mechanisms.In particular, our approach first employs a perplexity-based annotation method to collect training data.Then, we design four distinct strategies to filter out harmful retrieved knowledge.Finally, we integrate the filtered knowledge to generate the final result via batch-wise predictions.We conduct extensive experiments across multiple discriminative task datasets to evaluate the proposed framework.The results demonstrate that our framework can significantly enhance the performance of models on discriminative tasks.

**摘要(中文)**:
> 检索增强方法在减轻大型语言模型的幻觉方面取得了显着的进步。然而，外部知识的引入并不总是能带来模型性能的预期改进，因为检索到的知识中存在的不相关或有害信息可能会影响预测过程。为了解决这些挑战，我们提出了一种新颖的框架，旨在通过结合知识过滤和预测融合机制来提高模型性能。特别是，我们的方法首先采用基于困惑的注释方法来收集训练数据。然后，我们设计了四种不同的策略来过滤掉有害的检索知识。最后，我们整合过滤后的知识，通过批量预测生成最终结果。我们在多个判别任务数据集上进行了广泛的实验，以评估所提出的框架。结果表明，我们的框架可以显着提高模型在判别任务上的性能。

---

## 158. LTRAG: Enhancing Autoformalization and Self-refinement for Logical Reasoning with Thought-GuidedRAG

**类别**: `Findings`

**作者**: Ruikang Hu, Shaoyu Lin, Yeliang Xiu, Yongmei Liu

**ID**: 2025.findings-acl.126

**摘要(英文)**:
> Logical reasoning is fundamental to intelligent systems. Large language models (LLMs) have demonstrated promise in natural language (NL) reasoning, especially with techniques like chain-of-thought (CoT) prompting. Neuro-symbolic methods like Logic-LM and LINC further enhance performance on challenging datasets FOLIO and AR-LSAT by integrating formalization with LLMs and symbolic solvers, and possibly refinement with LLMs. However, these methods still struggle with the accurate formalization of complex NL problems.In this paper, we introduce LTRAG, a framework to enhance autoformalization and self-refinement for logical reasoning with Retrieval-Augmented Generation (RAG), by building knowledge bases of thought-guided examples (https://github.com/sysulic/LTRAG ).Experimental results on FOLIO and AR-LSAT show that LTRAG consistently outperforms Logic-LM and LINC across different models. On GPT-4 and AR-LSAT, it achieves an accuracy gain of 13% over Logic-LM.

**摘要(中文)**:
> 逻辑推理是智能系统的基础。大型语言模型 (LLM) 在自然语言 (NL) 推理中展现出了良好的前景，尤其是在思维链 (CoT) 提示等技术方面。 Logic-LM 和 LINC 等神经符号方法通过将形式化与 LLM 和符号求解器集成，并可能与 LLM 进行细化，进一步提高了在具有挑战性的数据集 FOLIO 和 AR-LSAT 上的性能。然而，这些方法仍然难以准确地形式化复杂的自然语言处理问题。在本文中，我们介绍了 LTRAG，一种通过构建思想引导示例的知识库来增强检索增强生成（RAG）逻辑推理的自动形式化和自我细化的框架（https://github.com/sysulic/LTRAG）。FOLIO 和 AR-LSAT 上的实验结果表明，LTRAG 始终优于 Logic-LM和 LINC 跨不同型号。在 GPT-4 和 AR-LSAT 上，它比 Logic-LM 的精度提高了 13%。

---

## 159. Eliciting In-context Retrieval and Reasoning for Long-context Large Language Models

**类别**: `Findings`

**作者**: Yifu Qiu, Varun R. Embar, Yizhe Zhang, Navdeep Jaitly, Shay B Cohen, Benjamin Han

**ID**: 2025.findings-acl.165

**摘要(英文)**:
> Recent advancements in long-context language models (LCLMs) promise to transform Retrieval-Augmented Generation (RAG) by simplifying pipelines. With their expanded context windows, LCLMs can process entire knowledge bases and perform retrieval and reasoning directly – a capability we define as In-Context Retrieval and Reasoning (ICR^2). However, existing benchmarks like LOFT often overestimate LCLM performance by providing overly simplified contexts. To address this, we introduce ICR^2, a benchmark that evaluates LCLMs in more realistic scenarios by including confounding passages retrieved with strong retrievers. We then propose three methods to enhance LCLM performance: (1) retrieve-then-generate fine-tuning, (2) retrieval-attention-probing, which uses attention heads to filter and de-noise long contexts during decoding, and (3) joint retrieval head training alongside the generation head. Our evaluation of five well-known LCLMs on LOFT and ICR^2 demonstrates significant gains with our best approach applied to Mistral-7B: +17 and +15 points by Exact Match on LOFT, and +13 and +2 points on ICR^2, compared to vanilla RAG and supervised fine-tuning, respectively. It even outperforms GPT-4-Turbo on most tasks despite being a much smaller model.

**摘要(中文)**:
> 长上下文语言模型 (LCLM) 的最新进展有望通过简化管道来改变检索增强生成 (RAG)。凭借扩展的上下文窗口，LCLM 可以处理整个知识库并直接执行检索和推理 - 我们将这种功能定义为上下文检索和推理 (ICR^2)。然而，像 LOFT 这样的现有基准通常会通过提供过于简化的上下文来高估 LCLM 的性能。为了解决这个问题，我们引入了 ICR^2，这是一个基准，通过包含使用强检索器检索到的混杂段落，在更现实的场景中评估 LCLM。然后，我们提出了三种增强 LCLM 性能的方法：（1）检索然后生成微调，（2）检索注意探测，在解码过程中使用注意头对长上下文进行过滤和去噪，以及（3）与生成头一起进行联合检索头训练。我们对 LOFT 和 ICR^2 上五个著名的 LCLM 的评估表明，我们将最佳方法应用于 Mistral-7B 后获得了显着收益：与普通 RAG 和监督微调相比，LOFT 上的精确匹配分别+17 和 +15 分，ICR^2 上 +13 和 +2 分。尽管模型要小得多，但它在大多数任务上的表现甚至优于 GPT-4-Turbo。

---

## 160. RemoteRAG: A Privacy-PreservingLLMCloudRAGService

**类别**: `Findings`

**作者**: Yihang Cheng, Lan Zhang, Junyang Wang, Mu Yuan, Yunhao Yao

**ID**: 2025.findings-acl.197

**摘要(英文)**:
> Retrieval-augmented generation (RAG) improves the service quality of large language models by retrieving relevant documents from credible literature and integrating them into the context of the user query.Recently, the rise of the cloud RAG service has made it possible for users to query relevant documents conveniently.However, directly sending queries to the cloud brings potential privacy leakage.In this paper, we are the first to formally define the privacy-preserving cloud RAG service to protect the user query and propose RemoteRAG as a solution regarding privacy, efficiency, and accuracy.For privacy, we introduce(n,𝜖)-DistanceDP to characterize privacy leakage of the user query and the leakage inferred from relevant documents.For efficiency, we limit the search range from the total documents to a small number of selected documents related to a perturbed embedding generated from(n,𝜖)-DistanceDP, so that computation and communication costs required for privacy protection significantly decrease.For accuracy, we ensure that the small range includes target documents related to the user query with detailed theoretical analysis.Experimental results also demonstrate that RemoteRAG can resist existing embedding inversion attack methods while achieving no loss in retrieval under various settings.Moreover, RemoteRAG is efficient, incurring only 0.67 seconds and 46.66KB of data transmission (2.72 hours and 1.43 GB with the non-optimized privacy-preserving scheme) when retrieving from a total of105documents.

**摘要(中文)**:
> 检索增强生成（RAG）通过从可信文献中检索相关文档并将其集成到用户查询的上下文中来提高大语言模型的服务质量。最近云RAG服务的兴起使得用户可以方便地查询相关文档。但是，直接将查询发送到云端会带来潜在的隐私泄露。在本文中，我们首次正式定义了保护隐私的云RAG服务来保护用户查询，并提出RemoteRAG作为解决方案隐私、效率和准确性。对于隐私，我们引入(n,𝜖)-DistanceDP来表征用户查询的隐私泄漏和从相关文档推断的泄漏。为了效率，我们将搜索范围从整个文档限制为与(n,𝜖)-DistanceDP生成的扰动嵌入相关的少量选定文档，从而显着降低隐私保护所需的计算和通信成本。为了准确性，我们确保小范围包括与用户查询相关的目标文档详细的理论分析。实验结果还表明，RemoteRAG可以抵抗现有的嵌入反转攻击方法，同时实现各种设置下的检索无损失。此外，RemoteRAG非常高效，在总共105份文档中检索时仅花费0.67秒和46.66KB的数据传输（使用非优化隐私保护方案时为2.72小时和1.43GB）。

---

## 161. Multilingual Retrieval Augmented Generation for Culturally-Sensitive Tasks: A Benchmark for Cross-lingual Robustness

**类别**: `Findings`

**作者**: Bryan Li, Fiona Luo, Samar Haider, Adwait Agashe, Siyu Li, Runqi Liu, Miranda Muqing Miao, Shriya Ramakrishnan, Yuan Yuan, Chris Callison-Burch

**ID**: 2025.findings-acl.219

**摘要(英文)**:
> The paradigm of retrieval-augmented generated (RAG) helps mitigate hallucinations of large language models (LLMs). However, RAG also introduces biases contained within the retrieved documents. These biases can be amplified in scenarios which are multilingual and culturally-sensitive, such as territorial disputes. We thus introduce BordIRLines, a dataset of territorial disputes paired with retrieved Wikipedia documents, across 49 languages. We evaluate the cross-lingual robustness of this RAG setting by formalizing several modes for multilingual retrieval. Our experiments on several LLMs show that incorporating perspectives from diverse languages can in fact improve robustness; retrieving multilingual documents best improves response consistency and decreases geopolitical bias over RAG with purely in-language documents. We also consider how RAG responses utilize presented documents, finding a much wider variance in the linguistic distribution of response citations, when querying in low-resource languages. Our further analyses investigate the various aspects of a cross-lingual RAG pipeline, from retrieval to document contents. We release our benchmark to support continued research towards equitable information access across languages, at https://huggingface.co/datasets/borderlines/bordirlines.

**摘要(中文)**:
> 检索增强生成（RAG）范式有助于减轻大语言模型（LLM）的幻觉。然而，RAG 也会引入包含在检索到的文档中的偏差。在多语言和文化敏感的情况下，例如领土争端，这些偏见可能会被放大。因此，我们引入了 BordIRLines，这是一个与检索到的 49 种语言的维基百科文档配对的领土争端数据集。我们通过形式化多种多语言检索模式来评估这种 RAG 设置的跨语言鲁棒性。我们对几个大语言模型的实验表明，融合不同语言的观点实际上可以提高稳健性；检索多语言文档可以最大程度地提高响应一致性，并减少对纯语言文档的 RAG 的地缘政治偏见。我们还考虑了 RAG 响应如何利用所提供的文档，在以低资源语言进行查询时，发现响应引用的语言分布存在更大的差异。我们的进一步分析调查了跨语言 RAG 管道的各个方面，从检索到文档内容。我们发布了基准，以支持跨语言公平信息访问的持续研究，网址为：https://huggingface.co/datasets/borderlines/bordirlines。

---

## 162. Bridging Relevance and Reasoning: Rationale Distillation in Retrieval-Augmented Generation

**类别**: `Findings`

**作者**: Pengyue Jia, Derong Xu, Xiaopeng Li, Zhaocheng Du, Xiangyang Li, Yichao Wang, Yuhao Wang, Qidong Liu, Maolin Wang, Huifeng Guo, Ruiming Tang, Xiangyu Zhao

**ID**: 2025.findings-acl.220

**摘要(英文)**:
> The reranker and generator are two critical components in the Retrieval-Augmented Generation (i.e., RAG) pipeline, responsible for ranking relevant documents and generating responses. However, due to differences in pre-training data and objectives, there is an inevitable gap between the documents ranked as relevant by the reranker and those required by the generator to support answering the query. To address this gap, we propose RADIO, a novel and practical preference alignment framework with RAtionale DIstillatiOn. Specifically, We first propose a rationale extraction method that leverages the reasoning capabilities of large language models (LLMs) to extract the rationales necessary for answering the query. Subsequently, a rationale-based alignment process is designed to rerank the documents based on the extracted rationales, and fine-tune the reranker to align the preferences. We conduct extensive experiments on two tasks across three datasets to demonstrate the effectiveness of our approach compared to baseline methods. Our code is released online to ease reproduction.

**摘要(中文)**:
> 重新排序器和生成器是检索增强生成（即 RAG）管道中的两个关键组件，负责对相关文档进行排序并生成响应。然而，由于预训练数据和目标的差异，重新排序器排名为相关的文档与生成器支持回答查询所需的文档之间存在不可避免的差距。为了解决这一差距，我们提出了 RADIO，这是一种新颖实用的偏好调整框架，具有 Rationale DIstillation 功能。具体来说，我们首先提出了一种基本原理提取方法，该方法利用大型语言模型（LLM）的推理能力来提取回答查询所需的基本原理。随后，设计基于理由的对齐过程，以根据提取的理由对文档进行重新排序，并微调重新排序器以对齐偏好。我们对三个数据集的两项任务进行了广泛的实验，以证明我们的方法与基线方法相比的有效性。我们的代码在线发布以方便复制。

---

## 163. Corpus Poisoning via Approximate Greedy Gradient Descent

**类别**: `Findings`

**作者**: Jinyan Su, Preslav Nakov, Claire Cardie

**ID**: 2025.findings-acl.222

**摘要(英文)**:
> Dense retrievers are widely used in information retrieval and have also been successfully extended to other knowledge intensive areas such as language models, e.g., Retrieval-Augmented Generation (RAG) systems. Unfortunately, they have recently been shown to be vulnerable to corpus poisoning attacks in which a malicious user injects a small fraction of adversarial passages into the retrieval corpus to trick the system into returning these passages among the top-ranked results for a broad set of user queries. Further study is needed to understand the extent to which these attacks could limit the deployment of dense retrievers in real-world applications. In this work, we propose Approximate Greedy Gradient Descent (AGGD), a new attack on dense retrieval systems based on the widely used HotFlip method for efficiently generating adversarial passages. We demonstrate that AGGD can select a higher quality set of token-level perturbations than HotFlip by replacing its random token sampling with a more structured search. Experimentally, we show that our method achieves a high attack success rate on several datasets and using several retrievers, and can generalize to unseen queries and new domains. Notably, our method is extremely effective in attacking the ANCE retrieval model, achieving attack success rates that are 15.24% and 17.44% higher on the NQ and MS MARCO datasets, respectively, compared to HotFlip. Additionally, we demonstrate AGGD’s potential to replace HotFlip in other adversarial attacks, such as knowledge poisoning of RAG systems.

**摘要(中文)**:
> 密集检索器广泛应用于信息检索，并且已成功扩展到其他知识密集型领域，例如语言模型，例如检索增强生成（RAG）系统。不幸的是，它们最近被证明容易受到语料库中毒攻击，其中恶意用户将一小部分对抗性段落注入检索语料库中，以欺骗系统在广泛的用户查询中将这些段落返回到排名最高的结果中。需要进一步研究以了解这些攻击在多大程度上限制了密集检索器在实际应用中的部署。在这项工作中，我们提出了近似贪婪梯度下降（AGGD），这是一种基于广泛使用的 HotFlip 方法的密集检索系统的新攻击，可有效生成对抗性段落。我们证明，通过用更结构化的搜索替换其随机标记采样，AGGD 可以选择比 HotFlip 更高质量的标记级扰动集。通过实验，我们表明我们的方法在多个数据集上并使用多个检索器实现了很高的攻击成功率，并且可以推广到未见过的查询和新领域。值得注意的是，我们的方法在攻击 ANCE 检索模型方面非常有效，与 HotFlip 相比，在 NQ 和 MS MARCO 数据集上的攻击成功率分别高出 15.24% 和 17.44%。此外，我们还证明了 AGGD 在其他对抗性攻击中取代 HotFlip 的潜力，例如 RAG 系统的知识中毒。

---

## 164. R3Mem: Bridging Memory Retention and Retrieval via Reversible Compression

**类别**: `Findings`

**作者**: Xiaoqiang Wang, Suyuchen Wang, Yun Zhu, Bang Liu

**ID**: 2025.findings-acl.235

**摘要(英文)**:
> Memory plays a key role in enhancing LLMs’ performance when deployed to real-world applications. Existing solutions face trade-offs: explicit memory designs based on external storage require complex management and incur storage overhead, while implicit memory designs that store information via parameters struggle with reliable retrieval. In this paper, we propose R3Mem, a memory network that optimizes both information Retention and Retrieval through Reversible context compression. Specifically, R3Mem employs virtual memory tokens to compress and encode infinitely long histories, further enhanced by a hierarchical compression strategy that refines information from document- to entity-level for improved assimilation across granularities. For retrieval, R3Mem employs a reversible architecture, reconstructing raw data by invoking the model backward with compressed information. Implemented via parameter-efficient fine-tuning, it can integrate seamlessly with any Transformer-based model. Experiments demonstrate that our memory design achieves state-of-the-art performance in long-context language modeling and retrieval-augmented generation tasks. It also significantly outperforms conventional memory modules in long-horizon interaction tasks like conversational agents, showcasing its potential for next-generation retrieval systems.

**摘要(中文)**:
> 当部署到实际应用程序中时，内存在提高大语言模型的性能方面发挥着关键作用。现有的解决方案面临着权衡：基于外部存储的显式内存设计需要复杂的管理并产生存储开销，而通过参数存储信息的隐式内存设计则难以实现可靠的检索。在本文中，我们提出了 R3Mem，一种通过可逆上下文压缩优化信息保留和检索的内存网络。具体来说，R3Mem 使用虚拟内存令牌来压缩和编码无限长的历史记录，并通过分层压缩策略进一步增强，该策略将信息从文档级细化到实体级，以改善跨粒度的同化。对于检索，R3Mem 采用可逆架构，通过使用压缩信息向后调用模型来重建原始数据。它通过参数高效的微调来实现，可以与任何基于 Transformer 的模型无缝集成。实验表明，我们的内存设计在长上下文语言建模和检索增强生成任务中实现了最先进的性能。它在对话代理等长视野交互任务中也显着优于传统记忆模块，展示了其在下一代检索系统中的潜力。

---

## 165. Investigating Context Faithfulness in Large Language Models: The Roles of Memory Strength and Evidence Style

**类别**: `Findings`

**作者**: Yuepei Li, Kang Zhou, Qiao Qiao, Bach Nguyen, Qing Wang, Qi Li

**ID**: 2025.findings-acl.247

**摘要(英文)**:
> Retrieval-augmented generation (RAG) improves Large Language Models (LLMs) by incorporating external information into the response generation process. However, how context-faithful LLMs are and what factors influence LLMs’ context faithfulness remain largely unexplored. In this study, we investigate the impact of memory strength and evidence presentation on LLMs’ receptiveness to external evidence. We quantify the memory strength of LLMs by measuring the divergence in LLMs’ responses to different paraphrases of the same question, which is not considered by previous works. We also generate evidence in various styles to examine LLMs’ behavior. Our results show that for questions with high memory strength, LLMs are more likely to rely on internal memory. Furthermore, presenting paraphrased evidence significantly increases LLMs’ receptiveness compared to simple repetition or adding details. These findings provide key insights for improving retrieval-augmented generation and context-aware LLMs. Our code is available at https://github.com/liyp0095/ContextFaithful.

**摘要(中文)**:
> 检索增强生成 (RAG) 通过将外部信息纳入响应生成过程来改进大型语言模型 (LLM)。然而，大语言模型的背景忠实度如何以及哪些因素影响大语言模型的背景忠实度在很大程度上仍未得到探索。在这项研究中，我们调查了记忆强度和证据呈现对大语言模型对外部证据接受度的影响。我们通过测量大语言模型对同一问题的不同释义的回答的差异来量化大语言模型的记忆强度，这是以前的工作没有考虑到的。我们还生成各种风格的证据来检查大语言模型的行为。我们的结果表明，对于记忆强度高的问题，大语言模型更有可能依赖内部记忆。此外，与简单的重复或添加细节相比，提供转述的证据显着提高了大语言模型的接受度。这些发现为改进检索增强生成和情境感知大语言模型提供了重要见解。我们的代码可在 https://github.com/liyp0095/ContextFaithful 获取。

---

## 166. EXIT: Context-Aware Extractive Compression for Enhancing Retrieval-Augmented Generation

**类别**: `Findings`

**作者**: Taeho Hwang, Sukmin Cho, Soyeong Jeong, Hoyun Song, SeungYoon Han, Jong C. Park

**ID**: 2025.findings-acl.253

**摘要(英文)**:
> We introduce EXIT, an extractive context compression framework that enhances both the effectiveness and efficiency of retrieval-augmented generation (RAG) in question answering (QA). Current RAG systems often struggle when retrieval models fail to rank the most relevant documents, leading to the inclusion of more context at the expense of latency and accuracy. While abstractive compression methods can drastically reduce token counts, their token-by-token generation process significantly increases end-to-end latency. Conversely, existing extractive methods reduce the latency but rely on independent, non-adaptive sentence selection, failing to fully utilize contextual information. EXIT addresses these limitations by classifying sentences from retrieved documents—while preserving their contextual dependencies—enabling parallelizable, context-aware extraction that adapts to query complexity and retrieval quality. Our evaluations on both single-hop and multi-hop QA tasks show that EXIT consistently surpasses existing compression methods and even uncompressed baselines in QA accuracy, while also delivering substantial reductions in inference time and token count. By improving both effectiveness and efficiency, EXIT provides a promising direction for developing scalable, high-quality QA solutions in RAG pipelines. Our code is available at https://github.com/ThisIsHwang/EXIT.

**摘要(中文)**:
> 我们引入了 EXIT，一种提取上下文压缩框架，可提高问答 (QA) 中检索增强生成 (RAG) 的有效性和效率。当检索模型无法对最相关的文档进行排名时，当前的 RAG 系统通常会陷入困境，从而导致包含更多上下文，但代价是延迟和准确性。虽然抽象压缩方法可以大大减少令牌数量，但其逐个令牌的生成过程会显着增加端到端延迟。相反，现有的提取方法减少了延迟，但依赖于独立的、非自适应的句子选择，未能充分利用上下文信息。 EXIT 通过对检索到的文档中的句子进行分类（同时保留其上下文依赖性）来解决这些限制，从而实现可并行、上下文感知的提取，以适应查询复杂性和检索质量。我们对单跳和多跳 QA 任务的评估表明，EXIT 在 QA 准确性方面始终超越现有的压缩方法甚至未压缩的基线，同时还大幅减少了推理时间和令牌计数。通过提高有效性和效率，EXIT 为在 RAG 管道中开发可扩展的高质量 QA 解决方案提供了一个有前景的方向。我们的代码可在 https://github.com/ThisIsHwang/EXIT 获取。

---

## 167. Judge as A Judge: Improving the Evaluation of Retrieval-Augmented Generation through the Judge-Consistency of Large Language Models

**类别**: `Findings`

**作者**: Shuliang Liu, Xinze Li, Zhenghao Liu, Yukun Yan, Cheng Yang, Zheni Zeng, Zhiyuan Liu, Maosong Sun, Ge Yu

**ID**: 2025.findings-acl.301

**摘要(英文)**:
> Retrieval-Augmented Generation (RAG) has proven its effectiveness in alleviating hallucinations for Large Language Models (LLMs). However, existing automated evaluation metrics cannot fairly evaluate the outputs generated by RAG models during training and evaluation. LLM-based judgment models provide the potential to produce high-quality judgments, but they are highly sensitive to evaluation prompts, leading to inconsistencies when judging the output of RAG models. This paper introduces the Judge-Consistency (ConsJudge) method, which aims to enhance LLMs to generate more accurate evaluations for RAG models. Specifically, ConsJudge prompts LLMs to generate different judgments based on various combinations of judgment dimensions, utilizes the judge-consistency to evaluate these judgments, and selects the chosen and rejected judgments for DPO training. Our experiments show that ConsJudge can effectively provide more accurate judgments for optimizing RAG models across various RAG models and datasets. Further analysis reveals that judgments generated by ConsJudge have a high agreement with the superior LLM. All codes are available at https://github.com/OpenBMB/ConsJudge.

**摘要(中文)**:
> 检索增强生成（RAG）已证明其在减轻大型语言模型（LLM）幻觉方面的有效性。然而，现有的自动化评估指标无法公平地评估 RAG 模型在训练和评估过程中生成的输出。基于LLM的判断模型提供了产生高质量判断的潜力，但它们对评估提示高度敏感，导致在判断RAG模型的输出时出现不一致。本文介绍了 Judge-Consistency (ConsJudge) 方法，该方法旨在增强 LLM 以便为 RAG 模型生成更准确的评估。具体来说，ConsJudge提示LLM根据判断维度的各种组合生成不同的判断，利用判断一致性来评估这些判断，并选择选择和拒绝的判断进行DPO训练。我们的实验表明，ConsJudge 可以有效地为跨各种 RAG 模型和数据集优化 RAG 模型提供更准确的判断。进一步分析表明，ConsJudge 做出的判断与上级 LLM 的一致性很高。所有代码均可在 https://github.com/OpenBMB/ConsJudge 获取。

---

## 168. RASD: Retrieval-Augmented Speculative Decoding

**类别**: `Findings`

**作者**: Guofeng Quan, Wenfeng Feng, Chuzhan Hao, Guochao Jiang, Yuewei Zhang, Hao Henry Wang

**ID**: 2025.findings-acl.320

**摘要(英文)**:
> Speculative decoding accelerates inference in large language models (LLMs) by generating draft tokens for target model verification. Current approaches for obtaining draft tokens rely on lightweight draft models or additional model structures to generate draft tokens and retrieve context from databases. Due to the draft model’s small size and limited training data, model-based speculative decoding frequently becomes less effective in out-of-domain scenarios. Additionally, the time cost of the drafting phase results in a low upper limit on acceptance length during the verification step, limiting overall efficiency. This paper proposes RASD (Retrieval-Augmented Speculative Decoding), which adopts retrieval methods to enhance model-based speculative decoding. We introduce tree pruning and tree fusion to achieve this. Specifically, we develop a pruning method based on the draft model’s probability distribution to construct the optimal retrieval tree. Second, we employ the longest prefix matching algorithm to merge the tree generated by the draft model with the retrieval tree, resulting in a unified tree for verification. Experimental results demonstrate that RASD achieves state-of-the-art inference acceleration across tasks such as DocQA, Summary, Code, and In-Domain QA. Moreover, RASD exhibits strong scalability, seamlessly integrating with various speculative decoding approaches, including both generation-based and retrieval-based methods.

**摘要(中文)**:
> 推测性解码通过生成用于目标模型验证的草稿标记来加速大型语言模型 (LLM) 中的推理。当前获取草稿令牌的方法依赖于轻量级草稿模型或附加模型结构来生成草稿令牌并从数据库检索上下文。由于草稿模型尺寸小且训练数据有限，基于模型的推测解码在域外场景中常常变得不太有效。此外，起草阶段的时间成本导致验证步骤期间接受长度的上限较低，从而限制了整体效率。本文提出RASD（检索增强推测解码），它采用检索方法来增强基于模型的推测解码。我们引入树修剪和树融合来实现这一点。具体来说，我们开发了一种基于草稿模型概率分布的剪枝方法来构建最佳检索树。其次，我们采用最长前缀匹配算法将草稿模型生成的树与检索树合并，得到统一的验证树。实验结果表明，RASD 在 DocQA、摘要、代码和域内 QA 等任务中实现了最先进的推理加速。此外，RASD 表现出强大的可扩展性，与各种推测解码方法无缝集成，包括基于生成和基于检索的方法。

---

## 169. Streamlining the Collaborative Chain of Models into A Single Forward Pass in Generation-Based Tasks

**类别**: `Findings`

**作者**: Yuanjie Lyu, Chao Zhang, Yuhao Chen, Yong Chen, Tong Xu

**ID**: 2025.findings-acl.330

**摘要(英文)**:
> In Retrieval-Augmented Generation (RAG) and agent-based frameworks, the “Chain of Models” approach is widely used, where multiple specialized models work sequentially on distinct sub-tasks. This approach is effective but increases resource demands as each model must be deployed separately. Recent advancements attempt to address this by applying prompt tuning, which allows a shared base model to adapt to multiple tasks with minimal parameter changes. However, a key challenge remains: intermediate outputs, passed between models as plain text, require recomputation of hidden states (i.e., Key and Value (KV) states in Transformers) during inference. In this paper, we introduce FTHSS, a novel prompt-tuning method that enables models to share KV hidden states, eliminating redundant forward passes and reducing KV cache storage. By modifying input and attention masks during training, FTHSS allows models to effectively utilize KV hidden states from prior models in both single- and multi-round scenarios. Empirical results on four tasks show that FTHSS matches the performance of traditional model chains while improving inference efficiency.

**摘要(中文)**:
> 在检索增强生成（RAG）和基于代理的框架中，广泛使用“模型链”方法，其中多个专用模型按顺序处理不同的子任务。这种方法很有效，但会增加资源需求，因为每个模型必须单独部署。最近的进展尝试通过应用即时调整来解决这个问题，这允许共享基础模型以最小的参数更改来适应多个任务。然而，一个关键的挑战仍然存在：在模型之间以纯文本形式传递的中间输出需要在推理过程中重新计算隐藏状态（即 Transformer 中的键和值 (KV) 状态）。在本文中，我们介绍了 FTHSS，这是一种新颖的即时调整方法，使模型能够共享 KV 隐藏状态，消除冗余前向传递并减少 KV 缓存存储。通过在训练期间修改输入和注意力掩码，FTHSS 允许模型在单轮和多轮场景中有效利用先前模型的 KV 隐藏状态。四项任务的实证结果表明，FTHSS 与传统模型链的性能相当，同时提高了推理效率。

---

## 170. Inter-Passage Verification for Multi-evidence Multi-answerQA

**类别**: `Findings`

**作者**: Bingsen Chen, Shenji Wan, Xi Ye, Chen Zhao

**ID**: 2025.findings-acl.354

**摘要(英文)**:
> Multi-answer question answering (QA), where questions can have many valid answers, presents a significant challenge for existing retrieval-augmented generation-based QA systems, as these systems struggle to retrieve and then synthesize a large number of evidence passages. To tackle these challenges, we propose a new multi-answer QA framework – Retrieval-augmented Independent Reading with Inter-passage Verification (RI²VER). Our framework retrieves a large set of passages and processes each passage individually to generate an initial high-recall but noisy answer set. Then we propose a new inter-passage verification pipeline that validates every candidate answer through (1) Verification Question Generation, (2) Gathering Additional Evidence, and (3) Verification with inter-passage synthesis. Evaluations on the QAMPARI and RoMQA datasets demonstrate that our framework significantly outperforms existing baselines across various model sizes, achieving an average F1 score improvement of 11.17%. Further analysis validates that our inter-passage verification pipeline enables our framework to be particularly beneficial for questions requiring multi-evidence synthesis.

**摘要(中文)**:
> 多答案问答 (QA) 中的问题可以有许多有效答案，这对现有的基于检索增强生成的 QA 系统提出了重大挑战，因为这些系统很难检索并合成大量证据段落。为了应对这些挑战，我们提出了一个新的多答案质量保证框架——检索增强独立阅读与段落间验证（RI²VER）。我们的框架检索大量段落并单独处理每个段落以生成初始高召回率但嘈杂的答案集。然后，我们提出了一个新的通道间验证管道，通过（1）验证问题生成、（2）收集额外证据和（3）通道间综合验证来验证每个候选答案。对 QAMPARI 和 RoMQA 数据集的评估表明，我们的框架在各种模型大小上都显着优于现有基线，平均 F1 分数提高了 11.17%。进一步的分析证实，我们的通道间验证管道使我们的框架特别有利于需要多证据综合的问题。

---

## 171. Adapting General-Purpose Embedding Models to Private Datasets Using Keyword-based Retrieval

**类别**: `Findings`

**作者**: Yubai Wei, Jiale Han, Yi Yang

**ID**: 2025.findings-acl.357

**摘要(英文)**:
> Text embedding models play a cornerstone role in AI applications, such as retrieval-augmented generation (RAG). While general-purpose text embedding models demonstrate strong performance on generic retrieval benchmarks, their effectiveness diminishes when applied to private datasets (e.g., company-specific proprietary data), which often contain specialized terminology and lingo. In this work, we introduce BMEmbed, a novel method for adapting general-purpose text embedding models to private datasets. By leveraging the well-established keyword-based retrieval technique (BM25), we construct supervisory signals from the ranking of keyword-based retrieval results to facilitate model adaptation. We evaluate BMEmbed across a range of domains, datasets, and models, showing consistent improvements in retrieval performance. Moreover, we provide empirical insights into how BM25-based signals contribute to improving embeddings by fostering alignment and uniformity, highlighting the value of this approach in adapting models to domain-specific data. We release the source code for the research community.

**摘要(中文)**:
> 文本嵌入模型在人工智能应用中发挥着基石作用，例如检索增强生成（RAG）。虽然通用文本嵌入模型在通用检索基准上表现出强大的性能，但当应用于私有数据集（例如，公司特定的专有数据）时，其有效性会降低，这些数据集通常包含专门的术语和行话。在这项工作中，我们介绍了 BMEmbed，这是一种将通用文本嵌入模型适应私有数据集的新颖方法。通过利用成熟的基于关键词的检索技术（BM25），我们从基于关键词的检索结果的排名构建监督信号，以促进模型适应。我们跨一系列领域、数据集和模型评估 BMEmbed，显示检索性能的持续改进。此外，我们提供了基于 BM25 的信号如何通过促进对齐和均匀性来改善嵌入的实证见解，强调了这种方法在使模型适应特定领域数据方面的价值。我们为研究社区发布了源代码。

---

## 172. Reinforcing Compositional Retrieval: Retrieving Step-by-Step for Composing Informative Contexts

**类别**: `Findings`

**作者**: Quanyu Long, Jianda Chen, Zhengyuan Liu, Nancy F. Chen, Wenya Wang, Sinno Jialin Pan

**ID**: 2025.findings-acl.396

**摘要(英文)**:
> Large Language Models (LLMs) have demonstrated remarkable capabilities across numerous tasks, yet they often rely on external context to handle complex tasks. While retrieval-augmented frameworks traditionally focus on selecting top-ranked documents in a single pass, many real-world scenarios demand compositional retrieval, where multiple sources must be combined in a coordinated manner. In this work, we propose a tri-encoder sequential retriever that models this process as a Markov Decision Process (MDP), decomposing the probability of retrieving a set of elements into a sequence of conditional probabilities and allowing each retrieval step to be conditioned on previously selected examples. We train the retriever in two stages: first, we efficiently construct supervised sequential data for initial policy training; we then refine the policy to align with the LLM’s preferences using a reward grounded in the structural correspondence of generated programs. Experimental results show that our method consistently and significantly outperforms baselines, underscoring the importance of explicitly modeling inter-example dependencies. These findings highlight the potential of compositional retrieval for tasks requiring multiple pieces of evidence or examples.

**摘要(中文)**:
> 大型语言模型 (LLM) 在众多任务中表现出了卓越的能力，但它们通常依赖外部上下文来处理复杂的任务。虽然检索增强框架传统上侧重于在一次传递中选择排名靠前的文档，但许多现实场景需要组合检索，其中必须以协调的方式组合多个源。在这项工作中，我们提出了一个三编码器顺序检索器，将该过程建模为马尔可夫决策过程（MDP），将检索一组元素的概率分解为一系列条件概率，并允许每个检索步骤以先前选择的示例为条件。我们分两个阶段训练检索器：首先，我们有效地构建有监督的序列数据以进行初始策略训练；然后，我们使用基于生成程序的结构对应性的奖励来完善政策，以符合大语言模型的偏好。实验结果表明，我们的方法始终显着优于基线，强调了显式建模示例间依赖关系的重要性。这些发现凸显了组合检索对于需要多个证据或示例的任务的潜力。

---

## 173. Towards Adaptive Memory-Based Optimization for Enhanced Retrieval-Augmented Generation

**类别**: `Findings`

**作者**: Qitao Qin, Yucong Luo, Yihang Lu, Zhibo Chu, Xiaoman Liu, Xianwei Meng

**ID**: 2025.findings-acl.418

**摘要(英文)**:
> Retrieval-Augmented Generation (RAG), by integrating non-parametric knowledge from external knowledge bases into models, has emerged as a promising approach to enhancing response accuracy while mitigating factual errors and hallucinations. This method has been widely applied in tasks such as Question Answering (QA). However, existing RAG methods struggle with open-domain QA tasks because they perform independent retrieval operations and directly incorporate the retrieved information into generation without maintaining a summarizing memory or using adaptive retrieval strategies, leading to noise from redundant information and insufficient information integration.To address these challenges, we propose Adaptive memory-based optimization for enhanced RAG (Amber) for open-domain QA tasks, which comprises an Agent-based Memory Updater, an Adaptive Information Collector, and a Multi-granular Content Filter, working together within an iterative memory updating paradigm. Specifically, Amber integrates and optimizes the language model’s memory through a multi-agent collaborative approach, ensuring comprehensive knowledge integration from previous retrieval steps. It dynamically adjusts retrieval queries and decides when to stop retrieval based on the accumulated knowledge, enhancing retrieval efficiency and effectiveness. Additionally, it reduces noise by filtering irrelevant content at multiple levels, retaining essential information to improve overall model performance. We conduct extensive experiments on several open-domain QA datasets, and the results demonstrate the superiority and effectiveness of our method and its components. The source code is available .

**摘要(中文)**:
> 检索增强生成（RAG）通过将外部知识库中的非参数知识集成到模型中，已成为一种有前景的方法，可以提高响应准确性，同时减少事实错误和幻觉。该方法已广泛应用于问答（QA）等任务中。然而，现有的 RAG 方法难以应对开放域 QA 任务，因为它们执行独立的检索操作，直接将检索到的信息合并到生成中，而不维护总结内存或使用自适应检索策略，从而导致冗余信息和信息集成不足的噪声。为了解决这些挑战，我们提出了针对开放域 QA 任务的增强型 RAG（Amber）的基于自适应内存的优化，其中包括基于代理的内存更新器、自适应信息收集器和多粒度内容过滤器，在迭代内存更新中协同工作范式。具体来说，Amber 通过多智能体协作方法整合和优化语言模型的记忆，确保之前检索步骤的知识全面整合。它根据积累的知识动态调整检索查询并决定何时停止检索，提高检索效率和效果。此外，它还通过在多个级别过滤不相关内容来减少噪音，保留必要信息以提高整体模型性能。我们对几个开放域 QA 数据集进行了广泛的实验，结果证明了我们的方法及其组件的优越性和有效性。源代码可用。

---

## 174. Word2Passage: Word-level Importance Re-weighting for Query Expansion

**类别**: `Findings`

**作者**: Jeonghwan Choi, Minjeong Ban, Minseok Kim, Hwanjun Song

**ID**: 2025.findings-acl.434

**摘要(英文)**:
> Retrieval-augmented generation (RAG) enhances the quality of LLM generation by providing relevant chunks, but retrieving accurately from external knowledge remains challenging due to missing contextually important words in query. We present Word2Passage, a novel approach that improves retrieval accuracy by optimizing word importance in query expansion. Our method generates references at word, sentence, and passage levels for query expansion, then determines word importance by considering both their reference level origin and characteristics derived from query types and corpus analysis. Specifically, our method assigns distinct importance scores to words based on whether they originate from word, sentence, or passage-level references. Extensive experiments demonstrate that Word2Passage outperforms existing methods across various datasets and LLM configurations, effectively enhancing both retrieval accuracy and generation quality. The code is publicly available at https://github.com/DISL-Lab/Word2Passage

**摘要(中文)**:
> 检索增强生成（RAG）通过提供相关块来提高 LLM 生成的质量，但由于查询中缺少上下文重要的单词，从外部知识中准确检索仍然具有挑战性。我们提出了 Word2Passage，这是一种通过优化查询扩展中单词重要性来提高检索准确性的新颖方法。我们的方法在单词、句子和段落级别生成参考以进行查询扩展，然后通过考虑参考级别的来源以及从查询类型和语料库分析得出的特征来确定单词的重要性。具体来说，我们的方法根据单词是否源自单词、句子或段落级别的参考文献，为单词分配不同的重要性分数。大量实验表明，Word2Passage 在各种数据集和 LLM 配置上均优于现有方法，有效提高了检索准确性和生成质量。该代码可在 https://github.com/DISL-Lab/Word2Passage 上公开获取

---

## 175. Does Your Voice Assistant Remember? Analyzing Conversational Context Recall and Utilization in Voice Interaction Models

**类别**: `Findings`

**作者**: Heeseung Kim, Che Hyun Lee, Sangkwon Park, Jiheum Yeom, Nohil Park, Sangwon Yu, Sungroh Yoon

**ID**: 2025.findings-acl.470

**摘要(英文)**:
> Recent advancements in multi-turn voice interaction models have improved user-model communication. However, while closed-source models effectively retain and recall past utterances, whether open-source models share this ability remains unexplored. To fill this gap, we systematically evaluate how well open-source interaction models utilize past utterances using ContextDialog, a benchmark we proposed for this purpose. Our findings show that speech-based models have more difficulty than text-based ones, especially when recalling information conveyed in speech, and even with retrieval-augmented generation, models still struggle with questions about past utterances. These insights highlight key limitations in open-source models and suggest ways to improve memory retention and retrieval robustness.

**摘要(中文)**:
> 多轮语音交互模型的最新进展改善了用户模型通信。然而，虽然闭源模型有效地保留和回忆过去的话语，但开源模型是否具有这种能力仍有待探索。为了填补这一空白，我们使用 ContextDialog（我们为此提出的基准）系统地评估开源交互模型如何利用过去的话语。我们的研究结果表明，基于语音的模型比基于文本的模型具有更大的难度，特别是在回忆语音中传达的信息时，即使使用检索增强生成，模型仍然难以解决有关过去话语的问题。这些见解强调了开源模型的主要局限性，并提出了提高记忆保留和检索鲁棒性的方法。

---

## 176. EC-RAFT: Automated Generation of Clinical Trial Eligibility Criteria through Retrieval-Augmented Fine-Tuning

**类别**: `Findings`

**作者**: Nopporn Lekuthai, Nattawit Pewngam, Supitcha Sokrai, Titipat Achakulvisut

**ID**: 2025.findings-acl.491

**摘要(英文)**:
> Eligibility criteria (EC) are critical components of clinical trial design, defining the parameters for participant inclusion and exclusion. However, designing EC remains a complex, expertise-intensive process. Traditional approaches to EC generation may fail to produce comprehensive, contextually appropriate criteria. To address these challenges, we introduce EC-RAFT, a method that utilizes Retrieval-Augmented Fine-Tuning (RAFT) to generate structured and cohesive EC directly from clinical trial titles and descriptions. EC-RAFT integrates contextual retrieval, synthesized intermediate reasoning, and fine-tuned language models to produce comprehensive EC sets. To enhance clinical alignment evaluation with referenced criteria, we also propose an LLM-guided evaluation pipeline. Our results demonstrate that our solution, which uses Llama-3.1-8B-Instruct as a base model, achieves a BERTScore of 86.23 and an EC-matched LLM-as-a-Judge score of 1.66 out of 3, outperforming zero-shot Llama-3.1 and Gemini-1.5 by 0.41 and 0.11 points, respectively. On top of that, EC-RAFT also outperforms other fine-tuned versions of Llama-3.1. EC-RAFT was trained in a low-cost setup and, therefore, can be used as a practical solution for EC generation while ensuring quality and relevance in clinical trial design. We release our code on GitHub at https://github.com/biodatlab/ec-raft/

**摘要(中文)**:
> 资格标准 (EC) 是临床试验设计的关键组成部分，定义了参与者纳入和排除的参数。然而，设计 EC 仍然是一个复杂的、专业知识密集的过程。传统的 EC 生成方法可能无法产生全面的、适合具体情况的标准。为了应对这些挑战，我们引入了 EC-RAFT，这是一种利用检索增强微调 (RAFT) 直接从临床试验标题和描述生成结构化且有凝聚力的 EC 的方法。 EC-RAFT 集成了上下文检索、综合中间推理和微调语言模型，以生成全面的 EC 集。为了根据参考标准加强临床一致性评估，我们还提出了大语言模型指导的评估流程。我们的结果表明，我们的解决方案使用 Llama-3.1-8B-Instruct 作为基础模型，其 BERTScore 为 86.23，EC 匹配的 LLM-as-a-Judge 得分为 1.66（满分 3 分），分别比零样本 Llama-3.1 和 Gemini-1.5 好 0.41 分和 0.11 分。最重要的是，EC-RAFT 的性能也优于 Llama-3.1 的其他微调版本。 EC-RAFT 在低成本设置中进行了培训，因此可以用作 EC 生成的实用解决方案，同时确保临床试验设计的质量和相关性。我们在 GitHub 上发布了代码：https://github.com/biodatlab/ec-raft/

---

## 177. Explainable Depression Detection in Clinical Interviews with Personalized Retrieval-Augmented Generation

**类别**: `Findings`

**作者**: Linhai Zhang, Ziyang Gao, Deyu Zhou, Yulan He

**ID**: 2025.findings-acl.517

**摘要(英文)**:
> Depression is a widespread mental health disorder, and clinical interviews are the gold standard for assessment. However, their reliance on scarce professionals highlights the need for automated detection. Current systems mainly employ black-box neural networks, which lack interpretability, which is crucial in mental health contexts. Some attempts to improve interpretability use post-hoc LLM generation but suffer from hallucination. To address these limitations, we propose RED, a Retrieval-augmented generation framework for Explainable depression Detection. RED retrieves evidence from clinical interview transcripts, providing explanations for predictions. Traditional query-based retrieval systems use a one-size-fits-all approach, which may not be optimal for depression detection, as user backgrounds and situations vary. We introduce a personalized query generation module that combines standard queries with user-specific background inferred by LLMs, tailoring retrieval to individual contexts. Additionally, to enhance LLM performance in social intelligence, we augment LLMs by retrieving relevant knowledge from a social intelligence datastore using an event-centric retriever. Experimental results on the real-world benchmark demonstrate RED’s effectiveness compared to neural networks and LLM-based baselines.

**摘要(中文)**:
> 抑郁症是一种普遍存在的心理健康障碍，临床访谈是评估的金标准。然而，他们对稀缺专业人员的依赖凸显了自动检测的必要性。当前的系统主要采用黑盒神经网络，缺乏可解释性，而这在心理健康环境中至关重要。一些尝试使用事后大语言模型生成来提高可解释性，但遭到了幻觉的困扰。为了解决这些限制，我们提出了 RED，一种用于可解释抑郁症检测的检索增强生成框架。 RED 从临床访谈记录中检索证据，为预测提供解释。传统的基于查询的检索系统使用一刀切的方法，由于用户背景和情况各不相同，这可能不是抑郁症检测的最佳方法。我们引入了个性化查询生成模块，该模块将标准查询与大语言模型推断的用户特定背景相结合，根据个人上下文定制检索。此外，为了提高大语言模型在社交智能方面的表现，我们通过使用以事件为中心的检索器从社交智能数据存储中检索相关知识来增强大语言模型。现实世界基准的实验结果证明了 RED 与神经网络和基于 LLM 的基准相比的有效性。

---

## 178. SpeechT-RAG: Reliable Depression Detection inLLMs with Retrieval-Augmented Generation Using Speech Timing Information

**类别**: `Findings`

**作者**: Xiangyu Zhang, Hexin Liu, Qiquan Zhang, Beena Ahmed, Julien Epps

**ID**: 2025.findings-acl.521

**摘要(英文)**:
> Large Language Models (LLMs) have been increasingly adopted for health-related tasks, yet their performance in depression detection remains limited when relying solely on text input. While Retrieval-Augmented Generation (RAG) typically enhances LLM capabilities, our experiments indicate that traditional text-based RAG systems struggle to significantly improve depression detection accuracy. This challenge stems partly from the rich depression-relevant information encoded in acoustic speech patterns — information that current text-only approaches fail to capture effectively. To address this limitation, we conduct a systematic analysis of temporal speech patterns, comparing healthy individuals with those experiencing depression. Based on our findings, we introduce Speech Timing-based Retrieval-Augmented Generation, SpeechT-RAG, a novel system that leverages speech timing features for both accurate depression detection and reliable confidence estimation. This integrated approach not only outperforms traditional text-based RAG systems in detection accuracy but also enhances uncertainty quantification through a confidence scoring mechanism that naturally extends from the same temporal features. Our unified framework achieves comparable results to fine-tuned LLMs without additional training while simultaneously addressing the fundamental requirements for both accuracy and trustworthiness in mental health assessment

**摘要(中文)**:
> 大型语言模型 (LLM) 已越来越多地应用于健康相关任务，但仅依靠文本输入时，它们在抑郁症检测方面的性能仍然有限。虽然检索增强生成 (RAG) 通常会增强 LLM 能力，但我们的实验表明，传统的基于文本的 RAG 系统很难显着提高抑郁症检测的准确性。这一挑战部分源于声学语音模式中编码的丰富的抑郁症相关信息，而当前的纯文本方法无法有效捕获这些信息。为了解决这一局限性，我们对时间言语模式进行了系统分析，将健康个体与患有抑郁症的个体进行比较。根据我们的研究结果，我们引入了基于语音计时的检索增强生成（SpeechT-RAG），这是一种利用语音计时功能进行准确的抑郁症检测和可靠的置信度估计的新颖系统。这种集成方法不仅在检测精度方面优于传统的基于文本的 RAG 系统，而且还通过自然延伸自相同时间特征的置信度评分机制增强了不确定性量化。我们的统一框架无需额外培训即可达到与微调大语言模型相当的结果，同时满足心理健康评估准确性和可信度的基本要求

---

## 179. Context-DPO: Aligning Language Models for Context-Faithfulness

**类别**: `Findings`

**作者**: Baolong Bi, Shaohan Huang, Yiwei Wang, Tianchi Yang, Zihan Zhang, Haizhen Huang, Lingrui Mei, Junfeng Fang, Zehao Li, Furu Wei, Weiwei Deng, Feng Sun, Qi Zhang, Shenghua Liu

**ID**: 2025.findings-acl.536

**摘要(英文)**:
> Reliable responses from large language models (LLMs) require adherence to user instructions and retrieved information. While alignment techniques help LLMs align with human intentions and values, improving context-faithfulness through alignment remains underexplored. To address this, we propose Context-DPO, the first alignment method specifically designed to enhance LLMs’ context-faithfulness. We introduce ConFiQA, a benchmark that simulates Retrieval-Augmented Generation (RAG) scenarios with knowledge conflicts to evaluate context-faithfulness. By leveraging faithful and stubborn responses to questions with provided context from ConFiQA, our Context-DPO aligns LLMs through direct preference optimization. Extensive experiments demonstrate that our Context-DPO significantly improves context-faithfulness, achieving 35% to 280% improvements on popular open-source models. Further analysis demonstrates that Context-DPO preserves LLMs’ generative capabilities while providing interpretable insights into context utilization.

**摘要(中文)**:
> 大型语言模型 (LLM) 的可靠响应需要遵守用户指令和检索到的信息。虽然对齐技术可以帮助大语言模型与人类的意图和价值观保持一致，但通过对齐来提高上下文忠实度仍然没有得到充分探索。为了解决这个问题，我们提出了 Context-DPO，这是第一个专门为增强大语言模型的上下文忠实度而设计的对齐方法。我们引入了 ConFiQA，这是一个模拟具有知识冲突的检索增强生成 (RAG) 场景的基准，以评估上下文忠实度。通过利用 ConFiQA 提供的背景对问题进行忠实而顽固的回答，我们的 Context-DPO 通过直接偏好优化来调整大语言模型。大量实验表明，我们的 Context-DPO 显着提高了上下文忠实度，比流行的开源模型实现了 35% 到 280% 的改进。进一步的分析表明，Context-DPO 保留了大语言模型的生成能力，同时提供对上下文利用的可解释的见解。

---

## 180. RASPberry: Retrieval-AugmentedMonteCarlo Tree Self-Play with Reasoning Consistency for Multi-Hop Question Answering

**类别**: `Findings`

**作者**: Baixuan Li, Yunlong Fan, Tianyi Ma, Miao Gao, Chuanqi Shi, Zhiqiang Gao

**ID**: 2025.findings-acl.587

**摘要(英文)**:
> Complex multi-hop question answering requires large language models (LLMs) not only to retrieve external knowledge but also to reason over the retrieved information in order to arrive at the final solution. This involves two key challenges: (i) how to effectively explore the solution space and generate more potentially correct solution candidates, and (ii) how to select the optimal solution from multiple solution candidates, both of which require a training-free approach without introducing a more powerful teacher model. To address these challenges, we propose Retrieval-Augmented Monte Carlo Tree Self-Play with Reasoning Consistency (RASPberry), which introduces a more flexible action-level sampling granularity compared to existing methods, leverages Monte Carlo Tree Search for efficient solution space exploration, and utilizes an enhanced version of reasoning consistency to guide the selection of the optimal solution. Experimental results demonstrate that our proposed RASPberry effectively tackles the two challenges outlined above, achieving more efficient RAG inference-time scaling. Our code is available at https://github.com/BaixuanLi/RASPberry.

**摘要(中文)**:
> 复杂的多跳问答需要大型语言模型（LLM），不仅可以检索外部知识，还可以对检索到的信息进行推理，以得出最终解决方案。这涉及两个关键挑战：（i）如何有效地探索解决方案空间并生成更多潜在正确的候选解决方案，以及（ii）如何从多个候选解决方案中选择最佳解决方案，这两者都需要免训练的方法，而不需要引入更强大的教师模型。为了应对这些挑战，我们提出了具有推理一致性的检索增强蒙特卡罗树自对弈（RASPberry），与现有方法相比，它引入了更灵活的动作级采样粒度，利用蒙特卡罗树搜索进行高效的解决方案空间探索，并利用推理一致性的增强版本来指导最佳解决方案的选择。实验结果表明，我们提出的 RASPberry 有效解决了上述两个挑战，实现了更高效的 RAG 推理时间扩展。我们的代码可在 https://github.com/BaixuanLi/RASPberry 获取。

---

## 181. All That Glitters is Not Gold: Improving Robust Retrieval-Augmented Language Models with Fact-Centric Preference Alignment

**类别**: `Findings`

**作者**: Jia Hao, Chunhong Zhang, Jiarun Liu, Haiyu Zhao, Zhiqiang Zhan, Zheng Hu

**ID**: 2025.findings-acl.588

**摘要(英文)**:
> Retrieval-augmented language model (RALM) relies on retrieved external knowledge to generate responses, resulting in vulnerability in the face of retrieval results with noisy documents. Previous works integrate additional filters or finetune Large Language Models (LLMs) to learn adaptive retrieval to reduce the performance damage of noisy documents. However, prior noise filtering may lead to the loss of crucial information, and these methods do not focus on distracting documents with high semantic relevance, which is the most challenging problem. In this study, we propose a training method for fact-centric preference alignment (FPA) to improve the ability of LLMs to directly extract useful information from noisy retrieval results without prior filtering. Our method performs positive document mining based on factual consistency and uses LLMs self-generated synthetic data as training data without manual annotation. We evaluate our FPA on four question answering benchmarks, and the experimental results demonstrate that our method achieves significant improvement with a small scale of training data.

**摘要(中文)**:
> 检索增强语言模型（RALM）依赖检索的外部知识来生成响应，导致在面对包含噪声文档的检索结果时存在漏洞。之前的工作集成了额外的过滤器或微调大型语言模型（LLM）来学习自适应检索，以减少噪声文档的性能损害。然而，先前的噪声过滤可能会导致关键信息的丢失，并且这些方法并没有专注于具有高语义相关性的分散注意力的文档，这是最具挑战性的问题。在本研究中，我们提出了一种以事实为中心的偏好对齐（FPA）的训练方法，以提高大语言模型直接从噪声检索结果中提取有用信息而无需事先过滤的能力。我们的方法基于事实一致性进行积极的文档挖掘，并使用大语言模型自行生成的合成数据作为训练数据，无需手动注释。我们在四个问答基准上评估了我们的 FPA，实验结果表明我们的方法在小规模的训练数据下取得了显着的改进。

---

## 182. Physics: Benchmarking Foundation Models on University-Level Physics Problem Solving

**类别**: `Findings`

**作者**: Kaiyue Feng, Yilun Zhao, Yixin Liu, Tianyu Yang, Chen Zhao, John Sous, Arman Cohan

**ID**: 2025.findings-acl.610

**摘要(英文)**:
> We introduce Physics, a comprehensive benchmark for university-level physics problem solving. It contains 1,297 expert-annotated problems covering six core areas: classical mechanics, quantum mechanics, thermodynamics and statistical mechanics, electromagnetism, atomic physics, and optics.Each problem requires advanced physics knowledge and mathematical reasoning.We develop a robust automated evaluation system for precise and reliable validation. Our evaluation of leading foundation models reveals substantial limitations. Even the most advanced model, o3-mini, achieves only 59.9% accuracy, highlighting significant challenges in solving high-level scientific problems.Through comprehensive error analysis, exploration of diverse prompting strategies, and Retrieval-Augmented Generation (RAG)-based knowledge augmentation, we identify key areas for improvement, laying the foundation for future advancements.

**摘要(中文)**:
> 我们推出物理，这是解决大学级物理问题的综合基准。它包含 1,297 个专家注释的问题，涵盖六个核心领域：经典力学、量子力学、热力学和统计力学、电磁学、原子物理和光学。每个问题都需要先进的物理知识和数学推理。我们开发了强大的自动化评估系统，用于精确可靠的验证。我们对领先基础模型的评估揭示了很大的局限性。即使是最先进的模型o3-mini，准确率也只有59.9%，凸显了解决高水平科学问题的重大挑战。通过全面的错误分析、探索多样化的提示策略以及基于检索增强生成（RAG）的知识增强，我们确定了需要改进的关键领域，为未来的进步奠定了基础。

---

## 183. NeoQA: Evidence-based Question Answering with Generated News Events

**类别**: `Findings`

**作者**: Max Glockner, Xiang Jiang, Leonardo F. R. Ribeiro, Iryna Gurevych, Markus Dreyer

**ID**: 2025.findings-acl.616

**摘要(英文)**:
> Evaluating Retrieval-Augmented Generation (RAG) in large language models (LLMs) is challenging because benchmarks can quickly become stale. Questions initially requiring retrieval may become answerable from pretraining knowledge as newer models incorporate more recent information during pretraining, making it difficult to distinguish evidence-based reasoning from recall. We introduce NeoQA (News Events for Out-of-training Question Answering), a benchmark designed to address this issue. To construct NeoQA, we generated timelines and knowledge bases of fictional news events and entities along with news articles and Q&A pairs to prevent LLMs from leveraging pretraining knowledge, ensuring that no prior evidence exists in their training data. We propose our dataset as a new platform for evaluating evidence-based question answering, as it requires LLMs to generate responses exclusively from retrieved evidence and only when sufficient evidence is available. NeoQA enables controlled evaluation across various evidence scenarios, including cases with missing or misleading details. Our findings indicate that LLMs struggle to distinguish subtle mismatches between questions and evidence, and suffer from short-cut reasoning when key information required to answer a question is missing from the evidence, underscoring key limitations in evidence-based reasoning.

**摘要(中文)**:
> 在大型语言模型 (LLM) 中评估检索增强生成 (RAG) 具有挑战性，因为基准可能很快就会过时。最初需要检索的问题可能会通过预训练知识来回答，因为较新的模型在预训练期间包含了更多最新信息，从而很难区分基于证据的推理和回忆。我们引入 NeoQA（训练外问答新闻事件），这是一个旨在解决此问题的基准。为了构建 NeoQA，我们生成了虚构新闻事件和实体的时间线和知识库以及新闻文章和问答对，以防止大语言模型利用预训练知识，确保其训练数据中不存在任何先前证据。我们建议我们的数据集作为评估基于证据的问答的新平台，因为它要求大语言模型仅在有足够证据可用时才从检索到的证据中生成答案。 NeoQA 可以对各种证据场景进行受控评估，包括丢失或误导性细节的案例。我们的研究结果表明，大语言模型很难区分问题和证据之间的细微不匹配，并且当证据中缺少回答问题所需的关键信息时，他们会遭受捷径推理的困扰，这凸显了基于证据的推理的关键局限性。

---

## 184. GeAR: Graph-enhanced Agent for Retrieval-augmented Generation

**类别**: `Findings`

**作者**: Zhili Shen, Chenxin Diao, Pavlos Vougiouklis, Pascual Merita, Shriram Piramanayagam, Enting Chen, Damien Graux, Andre Melo, Ruofei Lai, Zeren Jiang, Zhongyang Li, Ye Qi, Yang Ren, Dandan Tu, Jeff Z. Pan

**ID**: 2025.findings-acl.624

**摘要(英文)**:
> Retrieval-augmented Generation (RAG) relies on effective retrieval capabilities, yet traditional sparse and dense retrievers inherently struggle with multi-hop retrieval scenarios. In this paper, we introduce GeAR, a system that advances RAG performance through two key innovations: (i) an efficient graph expansion mechanism that augments any conventional base retriever, such as BM25, and (ii) an agent framework that incorporates the resulting graph-based retrieval into a multi-step retrieval framework. Our evaluation demonstrates GeAR’s superior retrieval capabilities across three multi-hop question answering datasets. Notably, our system achieves state-of-the-art results with improvements exceeding 10% on the challenging MuSiQue dataset, while consuming fewer tokens and requiring fewer iterations than existing multi-step retrieval systems. The project page is available athttps://gear-rag.github.io.

**摘要(中文)**:
> 检索增强生成（RAG）依赖于有效的检索能力，但传统的稀疏和密集检索器本质上难以应对多跳检索场景。在本文中，我们介绍了 GeAR，这是一个通过两项关键创新来提高 RAG 性能的系统：(i) 一种有效的图扩展机制，可以增强任何传统的基本检索器，例如 BM25，以及 (ii) 一个代理框架，它将基于图的检索合并到多步骤检索框架中。我们的评估证明了 GeAR 在三个多跳问答数据集上的卓越检索能力。值得注意的是，我们的系统在具有挑战性的 MuSiQue 数据集上实现了最先进的结果，改进超过 10%，同时比现有的多步骤检索系统消耗更少的标记并需要更少的迭代。该项目页面位于 https://gear-rag.github.io。

---

## 185. CtrlA: Adaptive Retrieval-Augmented Generation via Inherent Control

**类别**: `Findings`

**作者**: Liu Huanshuo, Hao Zhang, Zhijiang Guo, Jing Wang, Kuicai Dong, Xiangyang Li, Yi Quan Lee, Cong Zhang, Yong Liu

**ID**: 2025.findings-acl.652

**摘要(英文)**:
> Retrieval-augmented generation (RAG) has emerged as a promising solution for mitigating hallucinations of large language models (LLMs) with retrieved external knowledge. Adaptive RAG enhances this approach by enabling dynamic retrieval during generation, activating retrieval only when the query exceeds LLM’s internal knowledge. Existing methods primarily focus on detecting LLM’s confidence via statistical uncertainty. Instead, we present the first attempts to solve adaptive RAG from a representation perspective and develop an inherent control-based framework, termed CtrlA. Specifically, we extract the features that represent the honesty and confidence directions of LLM and adopt them to control LLM behavior and guide retrieval timing decisions. We also design a simple yet effective query formulation strategy to support adaptive retrieval. Experiments show that CtrlA is superior to existing adaptive RAG methods on a diverse set of tasks. Honesty steering can effectively make LLMs more honest and confidence monitoring is a promising indicator of retrieval trigger.

**摘要(中文)**:
> 检索增强生成（RAG）已成为一种有前景的解决方案，可通过检索外部知识来减轻大语言模型（LLM）的幻觉。自适应 RAG 通过在生成过程中启用动态检索来增强这种方法，仅当查询超出 LLM 的内部知识时才激活检索。现有方法主要侧重于通过统计不确定性来检测大语言模型的置信度。相反，我们提出了从表示角度解决自适应 RAG 的首次尝试，并开发了一个固有的基于控制的框架，称为 CtrlA。具体来说，我们提取代表LLM诚实和置信方向的特征，并采用它们来控制LLM行为并指导检索时间决策。我们还设计了一个简单而有效的查询制定策略来支持自适应检索。实验表明，CtrlA 在多种任务上均优于现有的自适应 RAG 方法。诚实指导可以有效地使大语言模型更加诚实，而信心监控是检索触发的一个有前途的指标。

---

## 186. Exploiting Instruction-Following Retrievers for Malicious Information Retrieval

**类别**: `Findings`

**作者**: Parishad BehnamGhader, Nicholas Meade, Siva Reddy

**ID**: 2025.findings-acl.673

**摘要(英文)**:
> Instruction-following retrievers have been widely adopted alongside LLMs in real-world applications, but little work has investigated the safety risks surrounding their increasing search capabilities. We empirically study the ability of retrievers to satisfy malicious queries, both when used directly and when used in a retrieval augmented generation-based setup. Concretely, we investigate six leading retrievers, including NV-Embed and LLM2Vec, and find that given malicious requests, most retrievers can (for >50% of queries) select relevant harmful passages. For example, LLM2Vec correctly selects passages for 61.35% of our malicious queries. We further uncover an emerging risk with instruction-following retrievers, where highly relevant harmful information can be surfaced by exploiting their instruction-following capabilities. Finally, we show that even safety-aligned LLMs, such as Llama3, can satisfy malicious requests when provided with harmful retrieved passages in-context. In summary, our findings underscore the malicious misuse risks associated with increasing retriever capability.

**摘要(中文)**:
> 在现实应用中，指令跟踪检索器与大语言模型一起被广泛采用，但很少有工作调查围绕其不断增强的搜索能力的安全风险。我们凭经验研究检索器满足恶意查询的能力，无论是直接使用还是在基于检索增强生成的设置中使用。具体来说，我们调查了六种领先的检索器，包括 NV-Embed 和 LLM2Vec，发现在给定恶意请求的情况下，大多数检索器可以（对于 > 50% 的查询）选择相关的有害段落。例如，LLM2Vec 正确选择了 61.35% 的恶意查询的段落。我们进一步发现了遵循指令的检索器的新风险，其中高度相关的有害信息可以通过利用它们的指令遵循功能而浮出水面。最后，我们表明，即使是注重安全的 Llama3，当在上下文中提供有害的检索段落时，也可以满足恶意请求。总之，我们的研究结果强调了与增强检索器能力相关的恶意滥用风险。

---

## 187. RoseRAG: Robust Retrieval-augmented Generation with Small-scaleLLMs via Margin-aware Preference Optimization

**类别**: `Findings`

**作者**: Tianci Liu, Haoxiang Jiang, Tianze Wang, Ran Xu, Yue Yu, Linjun Zhang, Tuo Zhao, Haoyu Wang

**ID**: 2025.findings-acl.676

**摘要(英文)**:
> Large language models (LLMs) have achieved impressive performance but face high computational costs and latency, limiting their deployment in resource-constrained settings. In contrast, small-scale LLMs (SLMs) are more efficient yet struggle to capture evolving real-world knowledge. Retrieval-augmented generation (RAG) helps by integrating external knowledge, but imperfect retrieval can introduce distracting noise that misleads SLMs. We propose RoseRAG, a robust RAG framework for SLMs via Margin-aware Preference Optimization. RoseRAG employs multi-turn prompting for detailed reasoning, rejection sampling for high-quality explanations, and contrastive preference selection to refine responses by maximizing the likelihood gap between preferred and non-preferred outputs. By integrating these components into a margin-aware optimization process, RoseRAG robustly enhances the accuracy and reliability of SLMs for RAG applications. Extensive experiments on three open-domain question answering benchmarks indicate that our innovative RoseRAG surpasses state-of-the-art baselines significantly.

**摘要(中文)**:
> 大型语言模型（LLM）已经取得了令人印象深刻的性能，但面临着高昂的计算成本和延迟，限制了它们在资源有限的环境中的部署。相比之下，小规模的大语言模型（SLM）效率更高，但难以捕捉不断发展的现实世界知识。检索增强生成 (RAG) 通过整合外部知识来提供帮助，但不完善的检索可能会引入分散注意力的噪声，从而误导 SLM。我们提出 RoseRAG，这是一个通过保证金感知偏好优化用于 SLM 的强大 RAG 框架。 RoseRAG 采用多轮提示进行详细推理，采用拒绝抽样进行高质量解释，并采用对比偏好选择来通过最大化首选和非首选输出之间的似然差距来完善响应。通过将这些组件集成到裕量感知优化流程中，RoseRAG 显着提高了 RAG 应用的 SLM 的准确性和可靠性。对三个开放域问答基准的广泛实验表明，我们创新的 RoseRAG 显着超越了最先进的基准。

---

## 188. PECAN:LLM-Guided Dynamic Progress Control with Attention-Guided Hierarchical Weighted Graph for Long-DocumentQA

**类别**: `Findings`

**作者**: Xinyu Wang, Yanzheng Xiang, Lin Gui, Yulan He

**ID**: 2025.findings-acl.689

**摘要(英文)**:
> Long-document QA presents challenges with large-scale text and long-distance dependencies. Recent advances in Large Language Models (LLMs) enable entire documents to be processed in a single pass. However, their computational cost is significantly high. Retrieval-Augmented Generation (RAG) methods split text into smaller chunks, but they often yield inferior results and may lose global context. Recent approaches that integrate LLMs into RAG via iterative summarization either underutilize LLM capabilities or still incur high computational costs. In this paper, we combine the high accuracy of LLMs with the efficiency of RAG and propose LLM-Guided Dynamic Progress Control with Attention-Based Hierarchical Weighted Graph (PECAN). Our method introduces two key improvements: (1) LLM-Guided Dynamic Progress Control: We leverage LLMs to dynamically control the retrieval process, adjusting the amount of retrieved information based on different queries to achieve a better balance of effectiveness and efficiency. (2) Attention-Guided Retrieval: We propose a novel retrieval method that constructs a hierarchical graph where edges are derived by LLM attention weights. Experimental results demonstrate that PECAN achieves LLM-level performance while maintaining computational complexity comparable to that of RAG methods on two single-document and two multi-document QA datasets.

**摘要(中文)**:
> 长文档 QA 带来了大规模文本和长距离依赖性的挑战。大型语言模型 (LLM) 的最新进展使整个文档能够一次性处理。然而，它们的计算成本非常高。检索增强生成（RAG）方法将文本分割成更小的块，但它们通常会产生较差的结果，并且可能会丢失全局上下文。最近通过迭代总结将 LLM 集成到 RAG 中的方法要么未充分利用 LLM 功能，要么仍然会产生高昂的计算成本。在本文中，我们将LLM的高精度与RAG的效率相结合，提出了基于注意力的分层加权图（PECAN）的LLM引导动态进度控制。我们的方法引入了两个关键改进：（1）LLM引导的动态进度控制：我们利用LLM动态控制检索过程，根据不同的查询调整检索的信息量，以实现效果和效率的更好平衡。 (2)注意力引导检索：我们提出了一种新颖的检索方法，该方法构建了一个层次图，其中边缘由 LLM 注意力权重导出。实验结果表明，PECAN 在两个单文档和两个多文档 QA 数据集上实现了 LLM 级别的性能，同时保持了与 RAG 方法相当的计算复杂性。

---

## 189. The Silent Saboteur: Imperceptible Adversarial Attacks against Black-Box Retrieval-Augmented Generation Systems

**类别**: `Findings`

**作者**: Hongru Song, Yu-An Liu, Ruqing Zhang, Jiafeng Guo, Jianming Lv, Maarten de Rijke, Xueqi Cheng

**ID**: 2025.findings-acl.717

**摘要(英文)**:
> We explore adversarial attacks against retrieval-augmented generation (RAG) systems to identify their vulnerabilities. We focus on generating human-imperceptible adversarial examples and introduce a novel imperceptible retrieve-to-generate attack against RAG. This task aims to find imperceptible perturbations that retrieve a target document, originally excluded from the initial top-k candidate set, in order to influence the final answer generation. To address this task, we propose ReGENT, a reinforcement learning-based framework that tracks interactions between the attacker and the target RAG and continuously refines attack strategies based on relevance-generation-naturalness rewards. Experiments on newly constructed factual and non-factual question-answering benchmarks demonstrate that ReGENT significantly outperforms existing attack methods in misleading RAG systems with small imperceptible text perturbations.

**摘要(中文)**:
> 我们探索针对检索增强生成（RAG）系统的对抗性攻击，以识别其漏洞。我们专注于生成人类不可察觉的对抗性示例，并引入一种针对 RAG 的新型不可察觉的检索生成攻击。此任务旨在找到检索目标文档（最初从初始 top-k 候选集中排除）的难以察觉的扰动，以影响最终答案的生成。为了解决这个任务，我们提出了 ReGENT，一个基于强化学习的框架，它跟踪攻击者和目标 RAG 之间的交互，并根据相关性生成自然性奖励不断完善攻击策略。对新构建的事实和非事实问答基准的实验表明，在误导性 RAG 系统和难以察觉的小文本扰动方面，ReGENT 显着优于现有的攻击方法。

---

## 190. RISE: Reasoning Enhancement via Iterative Self-Exploration in Multi-hop Question Answering

**类别**: `Findings`

**作者**: Bolei He, Xinran He, Mengke Chen, Xianwei Xue, Ying Zhu, Zhen-Hua Ling

**ID**: 2025.findings-acl.772

**摘要(英文)**:
> Large Language Models (LLMs) excel in many areas but continue to face challenges with complex reasoning tasks, such as Multi-Hop Question Answering (MHQA). MHQA requires integrating evidence from diverse sources while managing intricate logical dependencies, often leads to errors in reasoning. Retrieval-Augmented Generation (RAG), widely employed in MHQA tasks, faces challenges in effectively filtering noisy data and retrieving all necessary evidence, thereby limiting its effectiveness in addressing MHQA challenges. To address these challenges, we propose RISE:Reasoning Enhancement via Iterative Self-Exploration, a novel framework designed to enhance models’ reasoning capability through iterative self-exploration. Specifically, RISE involves three key steps in addressing MHQA tasks: question decomposition, retrieve-then-read, and self-critique. By leveraging continuous self-exploration, RISE identifies accurate reasoning paths, iteratively self-improving the model’s capability to integrate evidence, maintain logical consistency, and enhance performance in MHQA tasks. Extensive experiments on multiple MHQA benchmarks demonstrate that RISE significantly improves reasoning accuracy and task performance.

**摘要(中文)**:
> 大型语言模型 (LLM) 在许多领域都表现出色，但仍然面临复杂推理任务的挑战，例如多跳问答 (MHQA)。 MHQA 需要整合来自不同来源的证据，同时管理复杂的逻辑依赖性，这通常会导致推理错误。检索增强生成（RAG）广泛应用于 MHQA 任务，在有效过滤噪声数据和检索所有必要证据方面面临挑战，从而限制了其解决 MHQA 挑战的有效性。为了应对这些挑战，我们提出了 RISE：通过迭代自我探索增强推理能力，这是一个新颖的框架，旨在通过迭代自我探索增强模型的推理能力。具体来说，RISE 涉及解决 MHQA 任务的三个关键步骤：问题分解、检索然后阅读和自我批评。通过持续的自我探索，RISE 识别准确的推理路径，迭代地自我改进模型整合证据、保持逻辑一致性并增强 MHQA 任务性能的能力。对多个 MHQA 基准的大量实验表明，RISE 显着提高了推理准确性和任务性能。

---

## 191. PISCO: Pretty Simple Compression for Retrieval-Augmented Generation

**类别**: `Findings`

**作者**: Maxime Louis, Hervé Déjean, Stéphane Clinchant

**ID**: 2025.findings-acl.800

**摘要(英文)**:
> Retrieval-Augmented Generation (RAG) pipelines enhance Large Language Models (LLMs) by retrieving relevant documents, but they face scalability issues due to high inference costs and limited context size. Document compression is a practical solution, but current soft compression methods often suffer from accuracy losses and require extensive pretraining. In this paper, we introduce PISCO, a novel method that achieves a 16x compression rate with minimal accuracy loss (0-3%) across diverse RAG-based question-answering (QA) tasks. Unlike existing approaches, PISCO requires no pretraining or annotated data, relying solely on sequence-level knowledge distillation from document-based questions. With the ability to fine-tune a 7-10B LLM in 24 hours on a single A100 GPU, PISCO offers a highly efficient and scalable solution. We present comprehensive experiments showing that PISCO outperforms existing compression models by 8% in accuracy.

**摘要(中文)**:
> 检索增强生成（RAG）管道通过检索相关文档来增强大型语言模型（LLM），但由于推理成本高和上下文大小有限，它们面临可扩展性问题。文档压缩是一种实用的解决方案，但当前的软压缩方法经常遭受精度损失，并且需要大量的预训练。在本文中，我们介绍了 PISCO，这是一种新颖的方法，可在各种基于 RAG 的问答 (QA) 任务中实现 16 倍的压缩率，同时精度损失最小 (0-3%)。与现有方法不同，PISCO 不需要预训练或注释数据，仅依赖于基于文档的问题的序列级知识蒸馏。 PISCO 能够在 24 小时内在单个 A100 GPU 上微调 7-10B LLM，提供高效且可扩展的解决方案。我们进行的综合实验表明，PISCO 的准确度比现有压缩模型高出 8%。

---

## 192. Optimizing Multi-Hop Document Retrieval Through Intermediate Representations

**类别**: `Findings`

**作者**: Jiaen Lin, Jingyu Liu, Yingbo Liu

**ID**: 2025.findings-acl.816

**摘要(英文)**:
> Retrieval-augmented generation (RAG) encounters challenges when addressing complex queries, particularly multi-hop questions. While several methods tackle multi-hop queries by iteratively generating internal queries and retrieving external documents, these approaches are computationally expensive. In this paper, we identify a three-stage information processing pattern in LLMs during layer-by-layer reasoning, consisting of extraction, processing, and subsequent extraction steps. This observation suggests that the representations in intermediate layers contain richer information compared to those in other layers. Building on this insight, we propose Layer-wise RAG (L-RAG). Unlike prior methods that focus on generating new internal queries, L-RAG leverages intermediate representations from the middle layers, which capture next-hop information, to retrieve external knowledge. L-RAG achieves performance comparable to multi-step approaches while maintaining inference overhead similar to that of standard RAG. Experimental results show that L-RAG outperforms existing RAG methods on open-domain multi-hop question-answering datasets, including MuSiQue, HotpotQA, and 2WikiMultiHopQA. The code is available in https://anonymous.4open.science/r/L-RAG-ADD5/.

**摘要(中文)**:
> 检索增强生成（RAG）在解决复杂查询（尤其是多跳问题）时遇到挑战。虽然有几种方法通过迭代生成内部查询和检索外部文档来处理多跳查询，但这些方法的计算成本很高。在本文中，我们确定了大语言模型在逐层推理过程中的三阶段信息处理模式，包括提取、处理和后续提取步骤。这一观察表明，与其他层中的表示相比，中间层中的表示包含更丰富的信息。基于这一见解，我们提出了逐层 RAG (L-RAG)。与之前专注于生成新内部查询的方法不同，L-RAG 利用中间层的中间表示来捕获下一跳信息，以检索外部知识。 L-RAG 实现了与多步方法相当的性能，同时保持与标准 RAG 类似的推理开销。实验结果表明，L-RAG 在开放域多跳问答数据集上的性能优于现有的 RAG 方法，包括 MuSiQue、HotpotQA 和 2WikiMultiHopQA。该代码可在 https://anonymous.4open.science/r/L-RAG-ADD5/ 中找到。

---

## 193. Why Uncertainty Estimation Methods Fall Short inRAG: An Axiomatic Analysis

**类别**: `Findings`

**作者**: Heydar Soudani, Evangelos Kanoulas, Faegheh Hasibi

**ID**: 2025.findings-acl.852

**摘要(英文)**:
> Large Language Models (LLMs) are valued for their strong performance across various tasks, but they also produce inaccurate or misleading outputs. Uncertainty Estimation (UE) quantifies the model’s confidence and helps users assess response reliability. However, existing UE methods have not been thoroughly examined in scenarios like Retrieval-Augmented Generation (RAG), where the input prompt includes non-parametric knowledge. This paper shows that current UE methods cannot reliably estimate the correctness of LLM responses in the RAG setting. We propose an axiomatic framework to identify deficiencies in existing UE methods. Our framework introduces five constraints that an effective UE method should meet after incorporating retrieved documents into the LLM’s prompt. Experimental results reveal that no existing UE method fully satisfies all the axioms, explaining their suboptimal performance in RAG. We further introduce a simple yet effective calibration function based on our framework, which not only satisfies more axioms than baseline methods but also improves the correlation between uncertainty estimates and correctness.

**摘要(中文)**:
> 大型语言模型 (LLM) 因其在各种任务中的出色表现而受到重视，但它们也会产生不准确或误导性的输出。不确定性估计 (UE) 量化模型的置信度并帮助用户评估响应可靠性。然而，现有的UE方法尚未在检索增强生成（RAG）等输入提示包含非参数知识的场景中得到彻底检验。本文表明，当前的 UE 方法无法可靠地估计 RAG 设置中 LLM 响应的正确性。我们提出了一个公理框架来识别现有 UE 方法的缺陷。我们的框架引入了五个约束，有效的 UE 方法在将检索到的文档合并到 LLM 的提示中后应满足这些约束。实验结果表明，现有的 UE 方法没有完全满足所有公理，这解释了它们在 RAG 中的次优性能。我们进一步基于我们的框架引入了一个简单而有效的校准函数，它不仅比基线方法满足更多的公理，而且还提高了不确定性估计和正确性之间的相关性。

---

## 194. Hierarchical Retrieval with Evidence Curation for Open-Domain Financial Question Answering on Standardized Documents

**类别**: `Findings`

**作者**: Jaeyoung Choe, Jihoon Kim, Woohwan Jung

**ID**: 2025.findings-acl.855

**摘要(英文)**:
> Retrieval-augmented generation (RAG) based large language models (LLMs) are widely used in finance for their excellent performance on knowledge-intensive tasks. However, standardized documents (e.g., SEC filing) share similar formats such as repetitive boilerplate texts,and similar table structures. This similarity forces traditional RAG methods to misidentify near-duplicate text, leading to duplicate retrieval that undermines accuracy and completeness. To address these issues, we propose the Hierarchical Retrieval with Evidence Curation (HiREC) framework. Our approach first performs hierarchical retrieval to reduce confusion among similar texts. It first retrieve related documents and then selects the most relevant passages from the documents. The evidence curation process removes irrelevant passages. When necessary, it automatically generates complementary queries to collect missing information. To evaluate our approach, we construct and release a Large-scale Open-domain Financial (LOFin) question answering benchmark that includes 145,897 SEC documents and 1,595 question-answer pairs. Our code and data are available at https://github.com/deep-over/LOFin-bench-HiREC.

**摘要(中文)**:
> 基于检索增强生成（RAG）的大型语言模型（LLM）因其在知识密集型任务上的出色表现而广泛应用于金融领域。然而，标准化文件（例如 SEC 备案）共享相似的格式，例如重复的样板文本和相似的表格结构。这种相似性迫使传统的 RAG 方法错误识别接近重复的文本，从而导致重复检索，从而破坏准确性和完整性。为了解决这些问题，我们提出了带有证据管理的分层检索（HiREC）框架。我们的方法首先执行分层检索以减少相似文本之间的混淆。它首先检索相关文档，然后从文档中选择最相关的段落。证据整理过程删除了不相关的段落。必要时，它会自动生成补充查询来收集缺失的信息。为了评估我们的方法，我们构建并发布了大规模开放域金融 (LOFin) 问答基准，其中包括 145,897 份 SEC 文档和 1,595 个问答对。我们的代码和数据可在 https://github.com/deep-over/LOFin-bench-HiREC 获取。

---

## 195. ASTRID- An Automated and ScalableTRIaDfor the Evaluation ofRAG-based Clinical Question Answering Systems

**类别**: `Findings`

**作者**: Yajie Vera He, Mohita Chowdhury, Jared Joselowitz, Aisling Higham, Ernest Lim

**ID**: 2025.findings-acl.857

**摘要(英文)**:
> Large Language Models (LLMs) have shown impressive potential in clinical question answering (QA), with Retrieval Augmented Generation (RAG) emerging as a leading approach for ensuring the factual accuracy of model responses. However, current automated RAG metrics perform poorly in clinical and conversational use cases. Using clinical human evaluations of responses is expensive, unscalable, and not conducive to the continuous iterative development of RAG systems. To address these challenges, we introduce ASTRID - an Automated and Scalable TRIaD for evaluating clinical QA systems leveraging RAG - consisting of three metrics: Context Relevance (CR), Refusal Accuracy (RA), and Conversational Faithfulness (CF). Our novel evaluation metric, CF, is designed to better capture the faithfulness of a model’s response to the knowledge base without penalising conversational elements. Additionally, our metric RA captures the refusal to address questions outside of the system’s scope of practice. To validate our triad, we curate a dataset of over 200 real-world patient questions posed to an LLM-based QA agent during surgical follow-up for cataract surgery - the highest volume operation in the world - augmented with clinician-selected questions for emergency, and clinical and non-clinical out-of-domain scenarios. We demonstrate that CF predicts human ratings of faithfulness more accurately than existing definitions in conversational settings. Furthermore, using eight different LLMs, we demonstrate that the three metrics can closely agree with human evaluations, highlighting the potential of these metrics for use in LLM-driven automated evaluation pipelines. Finally, we show that evaluation using our triad of CF, RA, and CR exhibits alignment with clinician assessment for inappropriate, harmful, or unhelpful responses. We also publish the prompts and datasets for these experiments, providing valuable resources for further research and development.

**摘要(中文)**:
> 大型语言模型 (LLM) 在临床问答 (QA) 方面显示出令人印象深刻的潜力，检索增强生成 (RAG) 已成为确保模型响应的事实准确性的领先方法。然而，当前的自动化 RAG 指标在临床和对话用例中表现不佳。使用临床人类反应评估成本高昂、不可扩展，并且不利于 RAG 系统的持续迭代开发。为了应对这些挑战，我们引入了 ASTRID——一种自动化且可扩展的 TRIaD，用于利用 RAG 评估临床 QA 系统——由三个指标组成：上下文相关性 (CR)、拒绝准确性 (RA) 和对话忠实度 (CF)。我们新颖的评估指标 CF 旨在更好地捕捉模型对知识库响应的忠实度，而不影响对话元素。此外，我们的度量 RA 捕获了拒绝解决系统实践范围之外的问题的情况。为了验证我们的三元组，我们整理了一个数据集，其中包含 200 多个真实世界的患者问题，这些问题是在白内障手术（世界上手术量最大的手术）的手术随访期间向基于大语言模型的 QA 代理提出的，并增加了临床医生选择的针对紧急情况、临床和非临床域外场景的问题。我们证明，CF 比对话环境中的现有定义更准确地预测人类的忠诚度评级。此外，使用八个不同的大语言模型，我们证明这三个指标与人类评估非常一致，突出了这些指标在大语言模型驱动的自动化评估流程中使用的潜力。最后，我们表明，使用 CF、RA 和 CR 三元组进行的评估与临床医生对不适当、有害或无益反应的评估保持一致。我们还发布了这些实验的提示和数据集，为进一步的研究和开发提供了宝贵的资源。

---

## 196. Ask in Any Modality: A Comprehensive Survey on Multimodal Retrieval-Augmented Generation

**类别**: `Findings`

**作者**: Mohammad Mahdi Abootorabi, Amirhosein Zobeiri, Mahdi Dehghani, Mohammadali Mohammadkhani, Bardia Mohammadi, Omid Ghahroodi, Mahdieh Soleymani Baghshah, Ehsaneddin Asgari

**ID**: 2025.findings-acl.861

**摘要(英文)**:
> Large Language Models (LLMs) suffer from hallucinations and outdated knowledge due to their reliance on static training data. Retrieval-Augmented Generation (RAG) mitigates these issues by integrating external dynamic information for improved factual grounding. With advances in multimodal learning, Multimodal RAG extends this approach by incorporating multiple modalities such as text, images, audio, and video to enhance the generated outputs. However, cross-modal alignment and reasoning introduce unique challenges beyond those in unimodal RAG. This survey offers a structured and comprehensive analysis of Multimodal RAG systems, covering datasets, benchmarks, metrics, evaluation, methodologies, and innovations in retrieval, fusion, augmentation, and generation. We review training strategies, robustness enhancements, loss functions, and agent-based approaches, while also exploring the diverse Multimodal RAG scenarios. In addition, we outline open challenges and future directions to guide research in this evolving field. This survey lays the foundation for developing more capable and reliable AI systems that effectively leverage multimodal dynamic external knowledge bases. All resources are publicly available at https://github.com/llm-lab-org/Multimodal-RAG-Survey.

**摘要(中文)**:
> 大型语言模型（LLM）由于依赖静态训练数据而遭受幻觉和过时的知识的困扰。检索增强生成 (RAG) 通过集成外部动态信息来改善事实基础，从而缓解这些问题。随着多模态学习的进步，Multimodal RAG 通过合并文本、图像、音频和视频等多种模态来扩展这种方法，以增强生成的输出。然而，跨模态对齐和推理带来了单模态 RAG 之外的独特挑战。这项调查对多模式 RAG 系统进行了结构化和全面的分析，涵盖数据集、基准、指标、评估、方法以及检索、融合、增强和生成方面的创新。我们回顾了训练策略、鲁棒性增强、损失函数和基于代理的方法，同时还探索了不同的多模态 RAG 场景。此外，我们概述了开放的挑战和未来的方向，以指导这一不断发展的领域的研究。这项调查为开发更强大、更可靠的人工智能系统奠定了基础，这些系统可以有效利用多模式动态外部知识库。所有资源均可在 https://github.com/llm-lab-org/Multimodal-RAG-Survey 上公开获取。

---

## 197. RAG-RewardBench: Benchmarking Reward Models in Retrieval Augmented Generation for Preference Alignment

**类别**: `Findings`

**作者**: Zhuoran Jin, Hongbang Yuan, Tianyi Men, Pengfei Cao, Yubo Chen, Jiexin Xu, Huaijun Li, Xiaojian Jiang, Kang Liu, Jun Zhao

**ID**: 2025.findings-acl.877

**摘要(英文)**:
> Despite the significant progress made by existing retrieval augmented language models (RALMs) in providing trustworthy responses and grounding in reliable sources, they often overlook effective alignment with human preferences. In the alignment process, reward models (RMs) act as a crucial proxy for human values to guide optimization. However, it remains unclear how to evaluate and select a reliable RM for preference alignment in RALMs. To this end, we propose RAG-RewardBench, the first benchmark for evaluating RMs in RAG settings. First, we design four crucial and challenging RAG-specific scenarios to assess RMs, including multi-hop reasoning, fine-grained citation, appropriate abstain, and conflict robustness. Then, we incorporate 18 RAG subsets, six retrievers, and 24 RALMs to increase the diversity of data sources. Finally, we adopt an LLM-as-a-judge approach to improve preference annotation efficiency and effectiveness, exhibiting a strong correlation with human annotations. Based on the RAG-RewardBench, we conduct a comprehensive evaluation of 45 RMs and uncover their limitations in RAG scenarios. Additionally, we also reveal that existing trained RALMs show almost no improvement in preference alignment, highlighting the need for a shift towards preference-aligned training.

**摘要(中文)**:
> 尽管现有的检索增强语言模型（RALM）在提供可信响应和基于可靠来源方面取得了重大进展，但它们经常忽视与人类偏好的有效一致性。在调整过程中，奖励模型（RM）充当人类价值观的重要代理，以指导优化。然而，目前尚不清楚如何评估和选择可靠的 RM 来进行 RALM 中的偏好调整。为此，我们提出了 RAG-RewardBench，这是在 RAG 设置中评估 RM 的第一个基准。首先，我们设计了四个关键且具有挑战性的 RAG 特定场景来评估 RM，包括多跳推理、细粒度引用、适当弃权和冲突鲁棒性。然后，我们合并了 18 个 RAG 子集、6 个检索器和 24 个 RALM，以增加数据源的多样性。最后，我们采用大语言模型作为法官的方法来提高偏好注释的效率和有效性，表现出与人类注释的强相关性。基于RAG-RewardBench，我们对45个RM进行了综合评估，揭示了它们在RAG场景中的局限性。此外，我们还发现，现有训练有素的 RALM 在偏好对齐方面几乎没有任何改进，这凸显了转向偏好对齐训练的必要性。

---

## 198. Filling the Temporal Void: Recovering Missing Publication Years in theProjectGutenberg Corpus UsingLLMs

**类别**: `Findings`

**作者**: Omar Momen, Manuel Schaaf, Alexander Mehler

**ID**: 2025.findings-acl.890

**摘要(英文)**:
> Analysing texts spanning long periods of time is critical for researchers in historical linguistics and related disciplines. However, publicly available corpora suitable for such analyses are scarce. The Project Gutenberg (PG) corpus presents a significant yet underutilized opportunity in this context, due to the absence of accurate temporal metadata. We take advantage of language models and information retrieval to explore four sources of information – Open Web, Wikipedia, Open Library API, and PG books texts – to add missing temporal metadata to the PG corpus. Through 20 experiments employing state-of-the-art Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) methods, we estimate the production years of all PG books. We curate an enriched metadata repository for the PG corpus and propose a refined version for it, which includes 53,774 books with a total of 3.8 billion tokens in 11 languages, produced between 1600 and 2000. This work provides a new resource for computational linguistics and humanities studies focusing on diachronic analyses. The final dataset and all experiments data are publicly available (https://github.com/OmarMomen14/pg-dates).

**摘要(中文)**:
> 分析跨长时间段的文本对于历史语言学和相关学科的研究人员至关重要。然而，适合此类分析的公开语料库很少。由于缺乏准确的时间元数据，古腾堡计划 (PG) 语料库在此背景下提供了一个重要但未充分利用的机会。我们利用语言模型和信息检索来探索四种信息源——开放网络、维基百科、开放图书馆 API 和 PG 图书文本——将缺失的时态元数据添加到 PG 语料库中。通过采用最先进的大型语言模型 (LLM) 和检索增强生成 (RAG) 方法的 20 项实验，我们估算了所有 PG 书籍的制作年份。我们为 PG 语料库策划了一个丰富的元数据存储库，并为其提出了一个完善的版本，其中包括 1600 年至 2000 年间制作的 11 种语言的 53,774 本书，总共 38 亿个标记。这项工作为专注于历时分析的计算语言学和人文研究提供了新的资源。最终数据集和所有实验数据都是公开的（https://github.com/OmarMomen14/pg-dates）。

---

## 199. Transparentize the Internal and External Knowledge Utilization inLLMs with Trustworthy Citation

**类别**: `Findings`

**作者**: Jiajun Shen, Tong Zhou, Yubo Chen, Delai Qiu, Shengping Liu, Kang Liu, Jun Zhao

**ID**: 2025.findings-acl.919

**摘要(英文)**:
> While hallucinations of large language models could be alleviated through retrieval-augmented generation and citation generation, how the model utilizes internal knowledge is still opaque, and the trustworthiness of its generated answers remains questionable. In this work, we introduce Context-Prior Augmented Citation Generation task, requiring models to generate citations considering both external and internal knowledge while providing trustworthy references, with 5 evaluation metrics focusing on 3 aspects: answer helpfulness, citation faithfulness, and trustworthiness. We introduce RAEL, the paradigm for our task, and also design INTRALIGN, an integrated method containing customary data generation and an alignment algorithm. Our experimental results show that our method achieves a better cross-scenario performance with regard to other baselines. Our extended experiments further reveal that retrieval quality, question types, and model knowledge have considerable influence on the trustworthiness in citation generation.

**摘要(中文)**:
> 虽然大型语言模型的幻觉可以通过检索增强生成和引文生成来缓解，但该模型如何利用内部知识仍然不透明，并且其生成答案的可信度仍然值得怀疑。在这项工作中，我们引入了上下文优先增强引文生成任务，要求模型在考虑外部和内部知识的情况下生成引文，同时提供可信的参考文献，5个评估指标侧重于3个方面：答案有用性、引文忠实度和可信度。我们引入了 RAEL（我们任务的范例），并设计了 INTRALIGN，一种包含常规数据生成和对齐算法的集成方法。我们的实验结果表明，我们的方法相对于其他基线实现了更好的跨场景性能。我们的扩展实验进一步表明，检索质量、问题类型和模型知识对引文生成的可信度有相当大的影响。

---

## 200. Mitigating Bias inRAG: Controlling the Embedder

**类别**: `Findings`

**作者**: Taeyoun Kim, Jacob Mitchell Springer, Aditi Raghunathan, Maarten Sap

**ID**: 2025.findings-acl.974

**摘要(英文)**:
> In retrieval augmented generation (RAG) systems, each individual component—the LLM, embedder, and corpus—could introduce biases in the form of skews towards certain genders or political leanings. In this work, we study the conflict between biases of each component and their relationship to the overall bias of the RAG system, which we callbias conflict. Examining both gender and political biases as case studies, we show that bias conflict can be characterized through a linear relationship among components despite its complexity. Through fine-tuning, we demonstrate how to control the bias of the embedder while maintaining utility and reveal the importance ofreverse-biasingthe embedder to mitigate bias in the overall system, Additionally, we find that LLMs and tasks exhibit varyingsensitivitiesto bias, a crucial factor to consider for debiasing. Our results underscore that a fair RAG system can be better achieved by carefully controlling the bias of the embedder rather than increasing its fairness.

**摘要(中文)**:
> 在检索增强生成（RAG）系统中，每个单独的组件（大语言模型、嵌入器和语料库）都可能以偏向某些性别或政治倾向的形式引入偏见。在这项工作中，我们研究了每个组件的偏差之间的冲突以及它们与 RAG 系统整体偏差的关系，我们将其称为偏差冲突。通过将性别和政治偏见作为案例研究，我们发现偏见冲突可以通过各组成部分之间的线性关系来表征，尽管其复杂性。通过微调，我们演示了如何在保持实用性的同时控制嵌入器的偏差，并揭示了反向偏置嵌入器以减轻整个系统中偏差的重要性。此外，我们发现 LLM 和任务对偏差表现出不同的敏感性，这是去偏差时需要考虑的关键因素。我们的结果强调，通过仔细控制嵌入器的偏差而不是增加其公平性，可以更好地实现公平的 RAG 系统。

---

## 201. EgoNormia: Benchmarking Physical-Social Norm Understanding

**类别**: `Findings`

**作者**: MohammadHossein Rezaei, Yicheng Fu, Phil Cuvin, Caleb Ziems, Yanzhe Zhang, Hao Zhu, Diyi Yang

**ID**: 2025.findings-acl.985

**摘要(英文)**:
> Human activity is moderated by norms; however, supervision for normative reasoning is sparse, particularly where norms are physically- or socially-grounded. We thus present EgoNormia| 𝜖 |, comprising 1,853 (200 for EgoNormia-verified) multiple choice questions (MCQs) grounded within ego-centric videos of human interactions, enabling the evaluation and improvement of normative reasoning in vision-language models (VLMs). spans seven norm categories: safety, privacy, proxemics, politeness, cooperation, coordination/proactivity, and communication/legibility. To compile this dataset at scale, we propose a novel pipeline to generate grounded MCQs from raw egocentric video. Our work demonstrates that current state-of-the-art VLMs lack robust grounded norm understanding, scoring a maximum of 54% on EgoNormia and 58% on EgoNormia-verified, with performance across norm categories indicating significant risks of safety and privacy when VLMs are used in real-world agents. We additionally explore methods for improving normative understanding, demonstrating a naive retrieval-based generation (RAG) method using can enhance normative reasoning in VLMs.

**摘要(中文)**:
> 人类活动受到规范的调节；然而，对规范推理的监督很少，特别是在规范有物理或社会基础的情况下。因此，我们提出了自我规范| 𝜖 |，包含 1,853 个（经 EgoNormia 验证为 200 个）多项选择题 (MCQ)，这些问题基于以自我为中心的人类互动视频，能够评估和改进视觉语言模型 (VLM) 中的规范推理。涵盖七个规范类别：安全、隐私、关系学、礼貌、合作、协调/主动性和沟通/易读性。为了大规模编译这个数据集，我们提出了一种新颖的管道，用于从原始的以自我为中心的视频生成接地的 MCQ。我们的工作表明，当前最先进的 VLM 缺乏稳健的基础规范理解，在 EgoNormia 上得分最高为 54%，在 EgoNormia 验证上得分为 58%，跨规范类别的性能表明，当 VLM 用于现实世界的代理时，存在重大的安全和隐私风险。我们还探索了提高规范性理解的方法，证明了基于朴素检索的生成（RAG）方法可以增强 VLM 中的规范性推理。

---

## 202. TechniqueRAG: Retrieval Augmented Generation for Adversarial Technique Annotation in Cyber Threat Intelligence Text

**类别**: `Findings`

**作者**: Ahmed Lekssays, Utsav Shukla, Husrev Taha Sencar, Md Rizwan Parvez

**ID**: 2025.findings-acl.1076

**摘要(英文)**:
> Accurately identifying adversarial techniques in security texts is critical for effective cyber defense. However, existing methods face a fundamental trade-off: they either rely on generic models with limited domain precision or require resource-intensive pipelines that depend on large labeled datasets and task-specific optimizations—such as custom hard-negative mining and denoising—resources rarely available in specialized domains.We propose TechniqueRAG, a domain-specific retrieval-augmented generation (RAG) framework that bridges this gap by integrating off-the-shelf retrievers, instruction-tuned LLMs, and minimal text–technique pairs. Our approach addresses data scarcity by fine-tuning only the generation component on limited in-domain examples, circumventing the need for resource-intensive retrieval training. While conventional RAG mitigates hallucination by coupling retrieval and generation, its reliance on generic retrievers often introduces noisy candidates, limiting domain-specific precision. To address this, we enhance retrieval quality and domain specificity through zero-shot LLM re-ranking, which explicitly aligns retrieved candidates with adversarial techniques.Experiments on multiple security benchmarks demonstrate that TechniqueRAG achieves state-of-the-art performance without extensive task-specific optimizations or labeled data, while comprehensive analysis provides further insights.

**摘要(中文)**:
> 准确识别安全文本中的对抗技术对于有效的网络防御至关重要。然而，现有方法面临着一个基本的权衡：它们要么依赖于领域精度有限的通用模型，要么需要资源密集型管道，这些管道依赖于大型标记数据集和特定于任务的优化（例如自定义硬负挖掘和去噪），而这些资源在专门领域中很少可用。我们提出了 TechniqueRAG，一种特定于域的检索增强生成（RAG）框架，它通过集成现成的检索器、指令调整的 LLM 和最小化来弥合这一差距。文本-技术对。我们的方法通过仅微调有限域内示例的生成组件来解决数据稀缺问题，从而避免了资源密集型检索训练的需要。虽然传统的 RAG 通过耦合检索和生成来减轻幻觉，但它对通用检索器的依赖常常会引入嘈杂的候选者，从而限制了特定领域的精度。为了解决这个问题，我们通过零样本 LLM 重新排名来提高检索质量和领域特异性，从而明确地将检索到的候选者与对抗性技术对齐。多个安全基准的实验表明，TechniqueRAG 无需大量特定于任务的优化或标记数据即可实现最先进的性能，同时综合分析提供了进一步的见解。

---

## 203. Evaluation of Attribution Bias in Generator-Aware Retrieval-Augmented Large Language Models

**类别**: `Findings`

**作者**: Amin Abolghasemi, Leif Azzopardi, Seyyed Hadi Hashemi, Maarten de Rijke, Suzan Verberne

**ID**: 2025.findings-acl.1087

**摘要(英文)**:
> Attributing answers to source documents is an approach used to enhance the verifiability of a model’s output in retrieval-augmented generation (RAG). Prior work has mainly focused on improving and evaluating the attribution quality of large language models (LLMs) in RAG, but this may come at the expense of inducing biases in the attribution of answers. We define and examine two aspects in the evaluation of LLMs in RAG pipelines, namely attribution sensitivity and bias with respect to authorship information. We explicitly inform an LLM about the authors of source documents, instruct it to attribute its answers, and analyze (i) how sensitive the LLM’s output is to the author of source documents, and (ii) whether the LLM exhibits a bias towards human-written or AI-generated source documents. We design an experimental setup in which we use counterfactual evaluation to study three LLMs in terms of their attribution sensitivity and bias in RAG pipelines. Our results show that adding authorship information to source documents can significantly change the attribution quality of LLMs by 3 to 18%. We show that LLMs can have an attribution bias towards explicit human authorship, which can serve as a competing hypothesis for findings of prior work that shows that LLM-generated content may be preferred over human-written contents. Our findings indicate that metadata of source documents can influence LLMs’ trust, and how they attribute their answers. Furthermore, our research highlights attribution bias and sensitivity as a novel aspect of the vulnerability of LLMs.

**摘要(中文)**:
> 将答案归因于源文档是一种用于增强检索增强生成（RAG）中模型输出的可验证性的方法。之前的工作主要集中在改进和评估 RAG 中大型语言模型 (LLM) 的归因质量，但这可能是以在答案归因中引入偏差为代价的。我们定义并检查了 RAG 管道中大语言模型评估的两个方面，即归因敏感性和作者信息的偏差。我们明确告知大语言模型有关源文档的作者，指示其给出答案，并分析（i）大语言模型的输出对源文档作者的敏感程度，以及（ii）大语言模型是否对人类撰写或人工智能生成的源文档表现出偏见。我们设计了一个实验设置，使用反事实评估来研究三个大语言模型在 RAG 管道中的归因敏感性和偏差。我们的结果表明，在源文档中添加作者信息可以使大语言模型的归因质量显着改变 3% 到 18%。我们表明，大语言模型可能对明确的人类作者身份存在归因偏差，这可以作为先前工作结果的竞争假设，表明大语言模型生成的内容可能比人类编写的内容更受青睐。我们的研究结果表明，源文档的元数据可以影响大语言模型的信任以及他们如何归因他们的答案。此外，我们的研究强调归因偏差和敏感性是大语言模型脆弱性的一个新方面。

---

## 204. VideoRAG: Retrieval-Augmented Generation over Video Corpus

**类别**: `Findings`

**作者**: Soyeong Jeong, Kangsan Kim, Jinheon Baek, Sung Ju Hwang

**ID**: 2025.findings-acl.1096

**摘要(英文)**:
> Retrieval-Augmented Generation (RAG) is a powerful strategy for improving the factual accuracy of models by retrieving external knowledge relevant to queries and incorporating it into the generation process. However, existing approaches primarily focus on text, with some recent advancements considering images, and they largely overlook videos, a rich source of multimodal knowledge capable of representing contextual details more effectively than any other modality. Also, while very recent studies explore the use of videos in response generation, they either predefine query-associated videos without retrieval or convert videos into textual descriptions, losing multimodal richness. To tackle these, we introduce VideoRAG, a novel framework that not only dynamically retrieves videos based on their relevance with queries but also utilizes both visual and textual information. The operation of VideoRAG is powered by recent Large Video Language Models (LVLMs), which enable the direct processing of video content to represent it for retrieval and the seamless integration of retrieved videos jointly with queries for response generation. Also, inspired by that the context size of LVLMs may not be sufficient to process all frames in extremely long videos and not all frames are equally important, we introduce a video frame selection mechanism to extract the most informative subset of frames, along with a strategy to extract textual information from videos (as it can aid the understanding of video content) when their subtitles are not available. We experimentally validate the effectiveness of VideoRAG, showcasing that it is superior to relevant baselines. Our code is available at https://github.com/starsuzi/VideoRAG.

**摘要(中文)**:
> 检索增强生成（RAG）是一种强大的策略，通过检索与查询相关的外部知识并将其合并到生成过程中来提高模型的事实准确性。然而，现有的方法主要关注文本，最近的一些进展考虑了图像，并且它们在很大程度上忽略了视频，视频是多模态知识的丰富来源，能够比任何其他模态更有效地表示上下文细节。此外，虽然最近的研究探索了视频在响应生成中的使用，但它们要么预先定义与查询相关的视频而不进行检索，要么将视频转换为文本描述，从而失去了多模式的丰富性。为了解决这些问题，我们引入了 VideoRAG，这是一种新颖的框架，不仅可以根据视频与查询的相关性动态检索视频，还可以利用视觉和文本信息。 VideoRAG 的运行由最新的大型视频语言模型 (LVLM) 提供支持，该模型能够直接处理视频内容以表示它以进行检索，并将检索到的视频与查询无缝集成以生成响应。此外，受 LVLM 的上下文大小可能不足以处理极长视频中的所有帧且并非所有帧都同等重要的启发，我们引入了一种视频帧选择机制来提取信息最丰富的帧子集，以及一种在字幕不可用时从视频中提取文本信息的策略（因为它可以帮助理解视频内容）。我们通过实验验证了 VideoRAG 的有效性，证明它优于相关基线。我们的代码可在 https://github.com/starsuzi/VideoRAG 获取。

---

## 205. A Comprehensive Graph Framework for Question Answering with Mode-Seeking Preference Alignment

**类别**: `Findings`

**作者**: Quanwei Tang, Sophia Yat Mei Lee, Junshuang Wu, Dong Zhang, Shoushan Li, Erik Cambria, Guodong Zhou

**ID**: 2025.findings-acl.1108

**摘要(英文)**:
> Recent advancements in retrieval-augmented generation (RAG) have enhanced large language models in question answering by integrating external knowledge. However, challenges persist in achieving global understanding and aligning responses with human ethical and quality preferences. To address these issues, we propose GraphMPA, a comprehensive graph-based framework with mode-seeking preference alignment. Our approach constructs a hierarchical document graph using a general similarity measurement, mimicking human cognitive processes for information understanding and synthesis. Additionally, we introduce mode-seeking preference optimization to better align model outputs with human preferences through probability-matching constraints. Extensive experiments on six datasets demonstrate the effectiveness of our GraphMPA.

**摘要(中文)**:
> 检索增强生成（RAG）的最新进展通过集成外部知识增强了问答中的大型语言模型。然而，在实现全球理解并使应对措施符合人类道德和质量偏好方面仍然存在挑战。为了解决这些问题，我们提出了 GraphMPA，这是一个基于图的综合框架，具有模式搜索偏好对齐功能。我们的方法使用一般相似性测量来构建分层文档图，模仿人类认知过程以进行信息理解和合成。此外，我们引入了模式寻求偏好优化，以通过概率匹配约束更好地使模型输出与人类偏好保持一致。对六个数据集的大量实验证明了我们的 GraphMPA 的有效性。

---

## 206. KITAB-Bench: A Comprehensive Multi-Domain Benchmark forArabicOCRand Document Understanding

**类别**: `Findings`

**作者**: Ahmed Heakl, Muhammad Abdullah Sohail, Mukul Ranjan, Rania Elbadry, Ghazi Shazan Ahmad, Mohamed El-Geish, Omar Maher, Zhiqiang Shen, Fahad Shahbaz Khan, Salman Khan

**ID**: 2025.findings-acl.1135

**摘要(英文)**:
> With the growing adoption of Retrieval-Augmented Generation (RAG) in document processing, robust text recognition has become increasingly critical for knowledge extraction. While OCR (Optical Character Recognition) for English and other languages benefits from large datasets and well-established benchmarks, Arabic OCR faces unique challenges due to its cursive script, right-to-left text flow, and complex typographic and calligraphic features. We present KITAB-Bench, a comprehensive Arabic OCR benchmark that fills the gaps in current evaluation systems. Our benchmark comprises 8,809 samples across 9 major domains and 36 subdomains, encompassing diverse document types including handwritten text, structured tables, and specialized coverage of 21 chart types for business intelligence. Our findings show that modern vision language models (such as GPT-4o, Gemini, and Qwen) outperform traditional OCR approaches (such as EasyOCR, PaddleOCR, and Surya) by an average of 60% in the character error rate (CER). Furthermore, we highlight significant limitations of current Arabic OCR models, particularly in PDF-to-Markdown conversion, where the best model Gemini-2.0-Flash achieves only 65% accuracy. This underscores the challenges of accurately recognizing Arabic text, including issues with complex fonts, numeral recognition errors, word elongation, and table structure detection. This work establishes a rigorous evaluation framework that can drive improvements in Arabic document analysis methods and bridge the performance gap with English OCR technologies.

**摘要(中文)**:
> 随着文档处理中越来越多地采用检索增强生成（RAG），强大的文本识别对于知识提取变得越来越重要。虽然英语和其他语言的 OCR（光学字符识别）受益于大型数据集和完善的基准，但阿拉伯语 OCR 由于其草书文字、从右到左的文本流以及复杂的印刷和书法特征而面临独特的挑战。我们推出 KITAB-Bench，这是一个全面的阿拉伯语 OCR 基准，填补了当前评估系统的空白。我们的基准测试包含 9 个主要领域和 36 个子领域的 8,809 个样本，涵盖多种文档类型，包括手写文本、结构化表格以及 21 种商业智能图表类型的专门覆盖范围。我们的研究结果表明，现代视觉语言模型（例如 GPT-4o、Gemini 和 Qwen）在字符错误率 (CER) 方面比传统 OCR 方法（例如 EasyOCR、PaddleOCR 和 Surya）平均高出 60%。此外，我们强调当前阿拉伯语 OCR 模型的显着局限性，特别是在 PDF 到 Markdown 转换方面，其中最好的模型 Gemini-2.0-Flash 仅实现 65% 的准确率。这凸显了准确识别阿拉伯文本的挑战，包括复杂字体、数字识别错误、单词延伸和表格结构检测等问题。这项工作建立了一个严格的评估框架，可以推动阿拉伯语文档分析方法的改进，并缩小与英语 OCR 技术的性能差距。

---

## 207. Beyond instruction-conditioning,MoTE: Mixture of Task Experts for Multi-task Embedding Models

**类别**: `Findings`

**作者**: Miguel Romero Calvo, Shuoyang Ding, Corey D Barrett, Georgiana Dinu, George Karypis

**ID**: 2025.findings-acl.1168

**摘要(英文)**:
> Dense embeddings are fundamental to modern machine learning systems, powering Retrieval-Augmented Generation (RAG), information retrieval, and representation learning. While instruction-conditioning has become the dominant approach for embedding specialization, its direct application to low-capacity models imposes fundamental representational constraints that limit the performance gains derived from specialization. In this paper, we analyze these limitations and introduce the Mixture of Task Experts (MoTE) transformer block, which leverages task-specialized parameters trained with Task-Aware Contrastive Learning () to enhance the model’s ability to generate specialized embeddings. Empirical results show that MoTE achieves 64% higher performance gains in retrieval datasets (+3.27→ +5.21) and 43% higher performance gains across all datasets (+1.81→ 2.60). Critically, these gains are achieved without altering instructions, training data, inference time, or number of active parameters.

**摘要(中文)**:
> 密集嵌入是现代机器学习系统的基础，为检索增强生成（RAG）、信息检索和表示学习提供动力。虽然指令调节已成为嵌入专业化的主要方法，但其对低容量模型的直接应用施加了基本的表示约束，限制了专业化带来的性能增益。在本文中，我们分析了这些限制，并介绍了任务专家混合（MoTE）转换器块，该块利用通过任务感知对比学习（）训练的任务专用参数来增强模型生成专门嵌入的能力。实证结果表明，MoTE 在检索数据集上实现了 64% 的性能提升 (+3.27→ +5.21)，在所有数据集上实现了 43% 的性能提升 (+1.81→ 2.60)。至关重要的是，这些增益是在不改变指令、训练数据、推理时间或活动参数数量的情况下实现的。

---

## 208. Verify with Caution: The Pitfalls of Relying on Imperfect Factuality Metrics

**类别**: `Findings`

**作者**: Ameya Godbole, Robin Jia

**ID**: 2025.findings-acl.1175

**摘要(英文)**:
> Improvements in large language models have led to increasing optimism that they can serve as reliable evaluators of natural language generation outputs. In this paper, we challenge this optimism in regards to factuality evaluation.We re-evaluate five state-of-the-art factuality metrics on a collection of 11 datasets for summarization, retrieval-augmented generation, and question answering.We find that these evaluators are inconsistent with each other and often misestimate the factual accuracy of NLG systems, both of which can lead to a variety of pitfalls.We further show that these metrics exhibit biases against highly paraphrased outputs and outputs that draw upon faraway parts of the source documents.We urge users of factuality metrics to proceed with caution and manually validate the reliability of these metrics in their domain of interest.

**摘要(中文)**:
> 大型语言模型的改进使人们越来越乐观地认为它们可以作为自然语言生成输出的可靠评估器。在本文中，我们对事实性评估方面的乐观主义提出了挑战。我们在 11 个数据集上重新评估了 5 个最先进的事实性指标，用于摘要、检索增强生成和问答。我们发现这些评估者彼此不一致，并且经常错误估计 NLG 系统的事实准确性，这两者都可能导致各种陷阱。我们进一步表明，这些指标对高度的事实表现出偏差。释义的输出和利用源文档的遥远部分的输出。我们敦促事实性指标的用户谨慎行事，并在其感兴趣的领域手动验证这些指标的可靠性。

---

## 209. LLMs Can Also Do Well! Breaking Barriers in Semantic Role Labeling via Large Language Models

**类别**: `Findings`

**作者**: Xinxin Li, Huiyao Chen, Chengjun Liu, Jing Li, Meishan Zhang, Jun Yu, Min Zhang

**ID**: 2025.findings-acl.1189

**摘要(英文)**:
> Semantic role labeling (SRL) is a crucial task of natural language processing (NLP). Although generative decoder-based large language models (LLMs) have achieved remarkable success across various NLP tasks, they still lag behind state-of-the-art encoder-decoder (BERT-like) models in SRL. In this work, we seek to bridge this gap by equipping LLMs for SRL with two mechanisms: (a) retrieval-augmented generation and (b) self-correction. The first mechanism enables LLMs to leverage external linguistic knowledge such as predicate and argument structure descriptions, while the second allows LLMs to identify and correct inconsistent SRL outputs. We conduct extensive experiments on three widely-used benchmarks of SRL (CPB1.0, CoNLL-2009, and CoNLL-2012). Results demonstrate that our method achieves state-of-the-art performance in both Chinese and English, marking the first successful application of LLMs to surpass encoder-decoder approaches in SRL.

**摘要(中文)**:
> 语义角色标记（SRL）是自然语言处理（NLP）的一项重要任务。尽管基于生成解码器的大语言模型 (LLM) 在各种 NLP 任务中取得了显着的成功，但它们仍然落后于 SRL 中最先进的编码器-解码器（类似 BERT）模型。在这项工作中，我们试图通过为 SRL 的大语言模型配备两种机制来弥补这一差距：(a) 检索增强生成和 (b) 自我纠正。第一种机制使大语言模型能够利用外部语言知识，例如谓词和参数结构描述，而第二种机制允许大语言模型识别和纠正不一致的 SRL 输出。我们对三个广泛使用的 SRL 基准（CPB1.0、CoNLL-2009 和 CoNLL-2012）进行了广泛的实验。结果表明，我们的方法在中文和英文方面均达到了最先进的性能，这标志着 LLM 首次成功应用于 SRL 中超越编码器-解码器方法。

---

## 210. HG-InsightLog: Context Prioritization and Reduction for Question Answering with Non-Natural Language Construct Log Data

**类别**: `Findings`

**作者**: Supriya Bajpai, Athira Gopal, Chandrakant Harjpal, Niraj Kumar

**ID**: 2025.findings-acl.1214

**摘要(英文)**:
> Modern IT systems generate vast amounts of log data, which pose challenges for Large Language Models (LLMs) due to their large size, irrelevant entries, and non-Natural Language (non-NL) construct (e.g., domain-specific jargon, error codes, file paths, and abbreviations). Traditional methods like Retrieval-Augmented Generation (RAG) and GraphRAG fail to preserve temporal sequences, handle non-NL for context and entities extraction, and dynamically prioritize query-relevant context. To address these limitations, we propose HG-InsightLog, a novel framework that constructs a multi-entity temporal hypergraph representing log attribute-value pair as nodes and connecting them with hyperedges, capturing critical connections in the data. HG-InsightLog introduces a multi-step query personalization mechanism enhancing the Personalized PageRank algorithm to rank hyperedges based on query relevance and contextual centrality to priortize critical connections. Top ranked hyperedges are extracted and converted back into log formats preserving temporal order and reducing context. Experimental results across multiple datasets demonstrate its superiority over existing methods, enhancing factual, causal, and analytical reasoning. Our approach enables smaller LLMs like LLaMA-8B to perform effective log-based QA. Being model-agnostic and training-free, it scales with evolving open-source LLMs without relying on proprietary systems.

**摘要(中文)**:
> 现代 IT 系统会生成大量日志数据，由于数据量大、不相关的条目和非自然语言 (non-NL) 构造（例如，特定领域的术语、错误代码、文件路径和缩写），这给大型语言模型 (LLM) 带来了挑战。检索增强生成 (RAG) 和 GraphRAG 等传统方法无法保留时间序列、处理上下文和实体提取的非 NL 以及动态优先处理与查询相关的上下文。为了解决这些限制，我们提出了 HG-InsightLog，这是一种新颖的框架，它构建了一个多实体时间超图，将日志属性值对表示为节点，并将它们与超边连接起来，捕获数据中的关键连接。 HG-InsightLog 引入了多步查询个性化机制，增强了个性化 PageRank 算法，以根据查询相关性和上下文中心性对超边进行排名，从而对关键连接进行优先级排序。排名最高的超边被提取并转换回日志格式，保留时间顺序并减少上下文。多个数据集的实验结果证明了其优于现有方法，增强了事实、因果和分析推理。我们的方法使 LLaMA-8B 等小型大语言模型能够执行有效的基于日志的 QA。由于与模型无关且无需培训，它可以随着不断发展的开源大语言模型进行扩展，而无需依赖专有系统。

---

## 211. Toward Structured Knowledge Reasoning: Contrastive Retrieval-Augmented Generation on Experience

**类别**: `Findings`

**作者**: Jiawei Gu, Ziting Xian, Yuanzhen Xie, Ye Liu, Enjie Liu, Ruichao Zhong, Mochi Gao, Yunzhi Tan, Bo Hu, Zang Li

**ID**: 2025.findings-acl.1224

**摘要(英文)**:
> Large language models (LLMs) achieve strong performance on plain text tasks but underperform on structured data like tables and databases. Potential challenges arise from their underexposure during pre-training and rigid text-to-structure transfer mechanisms. Unlike humans who seamlessly apply learned patterns across data modalities, LLMs struggle to infer implicit relationships embedded in tabular formats, especially in the absence of explicit structural guidance. To bridge this cognitive gap, we introduce Contrastive Retrieval-Augmented Generation on Experience (CoRE), a framework that builds experience memory representations and enhances generalization through contrastive In-Context Learning (ICL) to simulate human-like knowledge transfer. Experiments on Text-to-SQL and TableQA show CoRE significantly improves performance, achieving average gains of 3.44% and 4.24%, with up to 17.2% on challenging tasks. Our Monte Carlo Tree Search (MCTS)-generated Experience Memory expands training data 8-9×, enhancing diversity and domain coverage. This training-free and continual method propels LLMs toward structured knowledge expertise.

**摘要(中文)**:
> 大型语言模型 (LLM) 在纯文本任务上表现出色，但在表和数据库等结构化数据上表现不佳。潜在的挑战来自于它们在预训练期间的暴露不足和严格的文本到结构的转换机制。与人类无缝地应用跨数据模态的学习模式不同，大语言模型很难推断嵌入表格格式中的隐含关系，尤其是在缺乏明确的结构指导的情况下。为了弥合这种认知差距，我们引入了对比检索增强经验生成（CoRE），这是一个构建经验记忆表示并通过对比上下文学习（ICL）增强泛化的框架，以模拟类人的知识转移。在 Text-to-SQL 和 TableQA 上的实验表明，CoRE 显着提高了性能，平均提升了 3.44% 和 4.24%，在挑战性任务上提升高达 17.2%。我们的蒙特卡罗树搜索 (MCTS) 生成的经验记忆将训练数据扩展了 8-9 倍，增强了多样性和领域覆盖范围。这种免培训且持续的方法推动大语言模型走向结构化知识专业知识。

---

## 212. SafeguardingRAGPipelines withGMTP: A Gradient-based Masked Token Probability Method for Poisoned Document Detection

**类别**: `Findings`

**作者**: San Kim, Jonghwi Kim, Yejin Jeon, Gary Lee

**ID**: 2025.findings-acl.1263

**摘要(英文)**:
> Retrieval-Augmented Generation (RAG) enhances Large Language Models (LLMs) by providing external knowledge for accurate and up-to-date responses. However, this reliance on external sources exposes a security risk; attackers can inject poisoned documents into the knowledge base to steer the generation process toward harmful or misleading outputs. In this paper, we propose Gradient-based Masked Token Probability (GMTP), a novel defense method to detect and filter out adversarially crafted documents. Specifically, GMTP identifies high-impact tokens by examining gradients of the retriever’s similarity function. These key tokens are then masked, and their probabilities are checked via a Masked Language Model (MLM). Since injected tokens typically exhibit markedly low masked-token probabilities, this enables GMTP to easily detect malicious documents and achieve high-precision filtering. Experiments demonstrate that GMTP is able to eliminate over 90% of poisoned content while retaining relevant documents, thus maintaining robust retrieval and generation performance across diverse datasets and adversarial settings.

**摘要(中文)**:
> 检索增强生成 (RAG) 通过提供外部知识来实现​​准确和最新的响应，从而增强大型语言模型 (LLM)。然而，这种对外部资源的依赖暴露了安全风险；攻击者可以将中毒文档注入知识库，以引导生成过程产生有害或误导性的输出。在本文中，我们提出了基于梯度的掩码令牌概率（GMTP），这是一种新颖的防御方法，用于检测和过滤敌对制作的文档。具体来说，GMTP 通过检查检索器相似性函数的梯度来识别高影响力的标记。然后对这些关键标记进行屏蔽，并通过屏蔽语言模型 (MLM) 检查它们的概率。由于注入的令牌通常表现出明显较低的屏蔽令牌概率，这使得 GMTP 能够轻松检测恶意文档并实现高精度过滤。实验表明，GMTP 能够消除 90% 以上的中毒内容，同时保留相关文档，从而在不同的数据集和对抗性设置中保持强大的检索和生成性能。

---

## 213. ECoRAG: Evidentiality-guided Compression for Long ContextRAG

**类别**: `Findings`

**作者**: Yeonseok Jeong, Jinsu Kim, Dohyeon Lee, Seung-won Hwang

**ID**: 2025.findings-acl.1365

**摘要(英文)**:
> Large Language Models (LLMs) have shown remarkable performance in Open-Domain Question Answering (ODQA) by leveraging external documents through Retrieval-Augmented Generation (RAG). To reduce RAG overhead, from longer context, context compression is necessary. However, prior compression methods do not focus on filtering out non-evidential information, which limit the performance in LLM-based RAG. We thus propose Evidentiality-guided RAG, orECoRAGframework. ECoRAG improves LLM performance by compressing retrieved documents based on evidentiality, ensuring whether answer generation is supported by the correct evidence. As an additional step, ECoRAG reflects whether the compressed content provides sufficient evidence, and if not, retrieves more until sufficient. Experiments show that ECoRAG improves LLM performance on ODQA tasks, outperforming existing compression methods. Furthermore, ECoRAG is highly cost-efficient, as it not only reduces latency but also minimizes token usage by retaining only the necessary information to generate the correct answer. Code is available at https://github.com/ldilab/ECoRAG.

**摘要(中文)**:
> 大型语言模型 (LLM) 通过检索增强生成 (RAG) 利用外部文档，在开放域问答 (ODQA) 方面表现出了卓越的性能。为了减少 RAG 开销，从较长的上下文来看，上下文压缩是必要的。然而，现有的压缩方法并不注重过滤掉非证据信息，这限制了基于 LLM 的 RAG 的性能。因此，我们提出了证据引导的 RAG，或 ECoRAG 框架。 ECoRAG 通过基于证据压缩检索到的文档来提高 LLM 性能，确保答案生成是否得到正确证据的支持。作为附加步骤，ECoRAG 反映压缩内容是否提供了足够的证据，如果没有，则检索更多证据直到足够。实验表明，ECoRAG 提高了 ODQA 任务上的 LLM 性能，优于现有的压缩方法。此外，ECoRAG 具有很高的成本效益，因为它不仅减少了延迟，而且还通过仅保留生成正确答案所需的信息来最大限度地减少令牌的使用。代码可在 https://github.com/ldilab/ECoRAG 获取。

---

## 214. HASH-RAG: Bridging Deep Hashing with Retriever for Efficient, Fine Retrieval and Augmented Generation

**类别**: `Findings`

**作者**: Jinyu Guo, Xunlei Chen, Qiyang Xia, Zhaokun Wang, Jie Ou, Libo Qin, Shunyu Yao, Wenhong Tian

**ID**: 2025.findings-acl.1376

**摘要(英文)**:
> Retrieval-Augmented Generation (RAG) encounters efficiency challenges when scaling to massive knowledge bases while preserving contextual relevance. We propose Hash-RAG, a framework that integrates deep hashing techniques with systematic optimizations to address these limitations. Our queries directly learn binary hash codes from knowledgebase code, eliminating intermediate feature extraction steps, and significantly reducing storage and computational overhead. Building upon this hash-based efficient retrieval framework, we establish the foundation for fine-grained chunking. Consequently, we design a Prompt-Guided Chunk-to-Context (PGCC) module that leverages retrieved hash-indexed propositions and their original document segments through prompt engineering to enhance the LLM’s contextual awareness. Experimental evaluations on NQ, TriviaQA, and HotpotQA datasets demonstrate that our approach achieves a 90% reduction in retrieval time compared to conventional methods while maintaining considerate recall performance. Additionally, The proposed system outperforms retrieval/non-retrieval baselines by 1.4-4.3% in EM scores.

**摘要(中文)**:
> 检索增强生成 (RAG) 在扩展到海量知识库同时保留上下文相关性时遇到效率挑战。我们提出了 Hash-RAG，这是一个将深度哈希技术与系统优化相结合的框架，以解决这些限制。我们的查询直接从知识库代码中学习二进制哈希代码，消除了中间特征提取步骤，并显着减少了存储和计算开销。基于这种基于哈希的高效检索框架，我们为细粒度分块奠定了基础。因此，我们设计了一个提示引导块上下文（PGCC）模块，通过提示工程利用检索到的哈希索引命题及其原始文档片段来增强大语言模型的上下文意识。对 NQ、TriviaQA 和 HotpotQA 数据集的实验评估表明，与传统方法相比，我们的方法在保持良好的召回性能的同时，检索时间减少了 90%。此外，所提出的系统在 EM 分数方面优于检索/非检索基线 1.4-4.3%。

---

## 215. Accelerating Adaptive Retrieval Augmented Generation via Instruction-Driven Representation Reduction of Retrieval Overlaps

**类别**: `Findings`

**作者**: Jie Ou, Jinyu Guo, Shuaihong Jiang, Zhaokun Wang, Libo Qin, Shunyu Yao, Wenhong Tian

**ID**: 2025.findings-acl.1384

**摘要(英文)**:
> Retrieval-augmented generation (RAG) has emerged as a pivotal method for expanding the knowledge of large language models. To handle complex queries more effectively, researchers developed Adaptive-RAG (A-RAG) to enhance the generated quality through multiple interactions with external knowledge bases. Despite its effectiveness, A-RAG exacerbates the pre-existing efficiency challenges inherent in RAG, which are attributable to its reliance on multiple iterations of generation. Existing A-RAG approaches process all retrieved contents from scratch. However, they ignore the situation where there is a significant overlap in the content of the retrieval results across rounds. The overlapping content is redundantly represented, which leads to a large proportion of repeated computations, thus affecting the overall efficiency. To address this issue, this paper introduces a model-agnostic approach that can be generally applied to A-RAG methods, which is dedicated to reducing the redundant representation process caused by the overlapping of retrieval results. Specifically, we use cache access and parallel generation to speed up the prefilling and decoding stages respectively. Additionally, we also propose an instruction-driven module to further guide the model to more effectively attend to each part of the content in a more suitable way for LLMs. Experiments show that our approach achieves 2.79 and 2.33 times significant acceleration on average for prefilling and decoding respectively while maintaining equal generation quality.

**摘要(中文)**:
> 检索增强生成（RAG）已成为扩展大型语言模型知识的关键方法。为了更有效地处理复杂查询，研究人员开发了 Adaptive-RAG (A-RAG)，通过与外部知识库的多次交互来提高生成的质量。尽管 A-RAG 很有效，但它加剧了 RAG 固有的现有效率挑战，这归因于它对生成的多次迭代的依赖。现有的 A-RAG 方法从头开始处理所有检索到的内容。然而，他们忽略了跨轮检索结果内容存在显着重叠的情况。重叠的内容被冗余表示，导致很大比例的重复计算，从而影响整体效率。为了解决这个问题，本文引入了一种可普遍应用于A-RAG方法的模型无关方法，致力于减少由于检索结果重叠而导致的冗余表示过程。具体来说，我们使用缓存访问和并行生成来分别加速预填充和解码阶段。此外，我们还提出了一个指令驱动模块，以进一步指导模型以更适合大语言模型的方式更有效地关注内容的每个部分。实验表明，我们的方法在保持相同的生成质量的同时，预填充和解码平均分别实现了 2.79 和 2.33 倍的显着加速。

---

## 216. EnhancingAI-Driven Farming Advisory inKenya with EfficientRAGAgents via Quantized Fine-Tuned Language Models

**类别**: `Workshop-AfricaNLP`

**作者**: Theophilus Lincoln Owiti, Andrew Kiprop Kipkebut

**ID**: 2025.africanlp-1.5

**摘要(英文)**:
> The integration of Artificial Intelligence (Al) in agriculture has significantly impacted decision making processes for farmers, particularly in regions such as Kenya, where access to accurate and timely advisory services is crucial. This paper explores the deployment of Retrieval Augmented Generation (RAG) agents powered by fine-tuned quantized language models to enhance Al-driven agricultural advisory services. By optimizing model efficiency through quantization and fine-tuning, our aim is to deliver a specialized language model in agriculture and to ensure real-time, cost-effective and contextually relevant recommendations for smallholder farmers. Our approach takes advantage of localized agricultural datasets and natural language processing techniques to improve the accessibility and accuracy of advisory responses in local Kenyan languages. We show that the proposed model has the potential to improve information delivery and automation of complex and monotonous tasks, making it a viable solution to sustainable agricultural intelligence in Kenya and beyond.

**摘要(中文)**:
> 人工智能 (Al) 与农业的融合极大地影响了农民的决策过程，特别是在肯尼亚等地区，获得准确、及时的咨询服务至关重要。本文探讨了由微调量化语言模型支持的检索增强生成（RAG）代理的部署，以增强人工智能驱动的农业咨询服务。通过量化和微调来优化模型效率，我们的目标是提供专门的农业语言模型，并确保为小农户提供实时、经济高效且与情境相关的建议。我们的方法利用本地化农业数据集和自然语言处理技术来提高肯尼亚当地语言咨询响应的可访问性和准确性。我们表明，所提出的模型有潜力改善复杂和单调任务的信息传递和自动化，使其成为肯尼亚及其他地区可持续农业智能的可行解决方案。

---

## 217. CommandR7BArabic: a small, enterprise-focused, multilingual, and culturally awareArabicLLM

**类别**: `Workshop-AfricaNLP`

**作者**: Yazeed Alnumay, Alexandre Barbet, Anna Bialas, William Darling, Shaan Desai, Joan Devassy, Kyle Duffy, Stephanie Howe, Olivia Lasche, Justin Lee, Anirudh Shrinivason, Jennifer Tracey

**ID**: 2025.africanlp-1.17

**摘要(英文)**:
> Building high-quality large language models (LLMs) for enterprise Arabic applications remains challenging due to the limited availability of digitized Arabic data. In this work, we present a data synthesis and refinement strategy to help address this problem, namely, by leveraging synthetic data generation and human-in-the-loop annotation to expand our Arabic training corpus. We further present our iterative post training recipe that is essential to achieving state-of-the-art performance in aligning the model with human preferences, a critical aspect to enterprise use cases. The culmination of this effort is the release of a small, 7B, open-weight model that outperforms similarly sized peers in head-to-head comparisons and on Arabic-focused benchmarks covering cultural knowledge, instruction following, RAG, and contextual faithfulness.

**摘要(中文)**:
> 由于数字化阿拉伯语数据的可用性有限，为企业阿拉伯语应用程序构建高质量的大语言模型 (LLM) 仍然具有挑战性。在这项工作中，我们提出了一种数据合成和细化策略来帮助解决这个问题，即通过利用合成数据生成和人机交互注释来扩展我们的阿拉伯语训练语料库。我们进一步介绍了我们的迭代后培训配方，这对于实现最先进的性能至关重要，使模型与人类偏好保持一致，这是企业用例的一个关键方面。这项工作的最终成果是发布了一个小型 7B 开放权重模型，该模型在头对头比较以及以阿拉伯语为中心的基准（涵盖文化知识、指令遵循、RAG 和上下文忠实度）方面优于同等规模的同行。

---

## 218. COGNACatCQs-Gen 2025: Generating Critical Questions withLLM-Assisted Prompting and MultipleRAGVariants

**类别**: `Workshop-ArgMining`

**作者**: Azwad Anjum Islam, Tisa Islam Erana, Mark A. Finlayson

**ID**: 2025.argmining-1.33

**摘要(英文)**:
> We describe three approaches to solving the Critical Questions Generation Shared Task at ArgMining 2025. The task objective is to automatically generate critical questions that challenge the strength, validity, and credibility of a given argumentative text. The task dataset comprises debate statements (“interventions”) annotated with a list of named argumentation schemes and associated with a set of critical questions (CQs). Our three Retrieval-Augmented Generation (RAG)-based approaches used in-context example selection based on (1) embedding the intervention, (2) embedding the intervention plus manually curated argumentation scheme descriptions as supplementary context, and (3) embedding the intervention plus a selection of associated CQs and argumentation scheme descriptions. We developed the prompt templates through GPT-4o-assisted analysis of patterns in validation data and the task-specific evaluation guideline. All three of our submitted systems outperformed the official baselines (0.44 and 0.53) with automatically computed accuracies of 0.62, 0.58, and 0.61, respectively, on the test data, with our first method securing the 2nd place in the competition (0.63 manual evaluation). Our results highlight the efficacy of LLM-assisted prompt development and RAG-enhanced generation in crafting contextually relevant critical questions for argument analysis.

**摘要(中文)**:
> 我们描述了解决 ArgMining 2025 关键问题生成共享任务的三种方法。任务目标是自动生成挑战给定论证文本的强度、有效性和可信度的关键问题。任务数据集包括辩论陈述（“干预”），用一系列命名的论证方案进行注释，并与一组关键问题（CQ）相关联。我们的三种基于检索增强生成（RAG）的方法使用上下文示例选择，基于（1）嵌入干预，（2）嵌入干预加上手动策划的论证方案描述作为补充上下文，以及（3）嵌入干预加上选择的相关 CQ 和论证方案描述。我们通过 GPT-4o 辅助分析验证数据模式和特定任务评估指南开发了提示模板。我们提交的所有三个系统均优于官方基线（0.44 和 0.53），在测试数据上自动计算的准确度分别为 0.62、0.58 和 0.61，我们的第一个方法在比赛中获得了第二名（手动评估为 0.63）。我们的结果强调了大语言模型辅助的快速发展和 RAG 增强生成在为论证分析制定上下文相关的关键问题方面的有效性。

---

## 219. ImprovingAIassistants embedded in short e-learning courses with limited textual content

**类别**: `Workshop-BEA`

**作者**: Jacek Marciniak, Marek Kubis, Michał Gulczyński, Adam Szpilkowski, Adam Wieczarek, Marcin Szczepański

**ID**: 2025.bea-1.57

**摘要(英文)**:
> This paper presents a strategy for improving AI assistants embedded in short e-learning courses. The proposed method is implemented within a Retrieval-Augmented Generation (RAG) architecture and evaluated using several retrieval variants. The results show that query quality improves when the knowledge base is enriched with definitions of key concepts discussed in the course. Our main contribution is a lightweight enhancement approach that increases response quality without overloading the course with additional instructional content.

**摘要(中文)**:
> 本文提出了一种改进嵌入短期电子学习课程中的人工智能助手的策略。所提出的方法在检索增强生成（RAG）架构中实现，并使用多种检索变体进行评估。结果表明，当课程中讨论的关键概念的定义丰富了知识库时，查询质量就会提高。我们的主要贡献是一种轻量级的增强方法，可以提高响应质量，而不会因为额外的教学内容而使课程超载。

---

## 220. Understanding the Impact of Confidence in Retrieval Augmented Generation: A Case Study in the Medical Domain

**类别**: `Workshop-BioNLP`

**作者**: Shintaro Ozaki, Yuta Kato, Siyuan Feng, Masayo Tomita, Kazuki Hayashi, Wataru Hashimoto, Ryoma Obara, Masafumi Oyamada, Katsuhiko Hayashi, Hidetaka Kamigaito, Taro Watanabe

**ID**: 2025.bionlp-1.1

**摘要(英文)**:
> Retrieval Augmented Generation (RAG) complements the knowledge of Large Language Models (LLMs) by leveraging external information to enhance response accuracy for queries. This approach is widely applied in several fields by taking its advantage of injecting the most up-to-date information, and researchers are focusing on understanding and improving this aspect to unlock the full potential of RAG in such high-stakes applications.However, despite the potential of RAG to address these needs, the mechanisms behind the confidence levels of its outputs remain underexplored.Our study focuses on the impact of RAG, specifically examining whether RAG increases the confidence of LLM outputs in the medical domain.We conduct this analysis across various configurations and models.We evaluate confidence by treating the model’s predicted probability as its output and calculating several evaluation metrics which include calibration error method, entropy, best probability, and accuracy.Experimental results across multiple datasets confirmed that certain models possess the capability to judge for themselves whether an inserted document relates to the correct answer. These results suggest that evaluating models based on their output probabilities determine whether they function as generators in the RAG framework.Our approach allows to evaluate whether the models handle retrieved documents.

**摘要(中文)**:
> 检索增强生成 (RAG) 通过利用外部信息来补充大型语言模型 (LLM) 的知识，以提高查询响应的准确性。这种方法利用其注入最新信息的优势，在多个领域得到广泛应用，研究人员正在致力于理解和改进这方面，以释放 RAG 在此类高风险应用中的全部潜力。然而，尽管 RAG 具有满足这些需求的潜力，但其输出置信水平背后的机制仍未得到充分探索。我们的研究重点是 RAG 的影响，特别检查 RAG 是否增加了医学领域 LLM 输出的置信度。我们在各种配置和条件下进行了此分析。我们通过将模型的预测概率作为其输出并计算几个评估指标来评估置信度，其中包括校准误差法、熵、最佳概率和准确性。跨多个数据集的实验结果证实，某些模型具有自行判断插入文档是否与正确答案相关的能力。这些结果表明，根据输出概率评估模型决定了它们是否在 RAG 框架中充当生成器。我们的方法允许评估模型是否处理检索到的文档。

---

## 221. heiDSatArchEHR-QA2025: From Fixed-k to Query-dependent-k for Retrieval Augmented Generation

**类别**: `Workshop-BioNLP`

**作者**: Ashish Chouhan, Michael Gertz

**ID**: 2025.bionlp-share.6

**摘要(英文)**:
> This paper presents the approach of our team called heiDS for the ArchEHR-QA 2025 shared task. A pipeline using a retrieval augmented generation (RAG) framework is designed to generate answers that are attributed to clinical evidence from the electronic health records (EHRs) of patients in response to patient-specific questions. We explored various components of a RAG framework, focusing on ranked list truncation (RLT) retrieval strategies and attribution approaches. Instead of using a fixed top-k RLT retrieval strategy, we employ a query-dependent-k retrieval strategy, including the existing surprise and autocut methods and two new methods proposed in this work, autocut* and elbow. The experimental results show the benefits of our strategy in producing factual and relevant answers when compared to a fixed-k.

**摘要(中文)**:
> 本文介绍了我们名为 heiDS 的团队针对 ArchEHR-QA 2025 共享任务的方法。使用检索增强生成 (RAG) 框架的管道旨在生成来自患者电子健康记录 (EHR) 的临床证据的答案，以响应患者特定的问题。我们探索了 RAG 框架的各个组件，重点关注排名列表截断 (RLT) 检索策略和归因方法。我们没有使用固定的top-k RLT检索策略，而是采用了查询相关的k检索策略，包括现有的surprise和autocut方法以及本工作中提出的两种新方法autocut*和elbow。实验结果表明，与固定 k 相比，我们的策略在生成事实和相关答案方面具有优势。

---

## 222. DKITNLPatArchEHR-QA2025: A Retrieval AugmentedLLMPipeline for Evidence-Based Patient Question Answering

**类别**: `Workshop-BioNLP`

**作者**: Provia Kadusabe, Abhishek Kaushik, Fiona Lawless

**ID**: 2025.bionlp-share.20

**摘要(英文)**:
> This paper describes our submission for the BioNLP ACL 2025 Shared task on grounded Question Answering (QA) from Electronic Health Records (EHRs). The task aims to automatically generate answers to patients’ health related questions that are grounded in the evidence from their clinical notes. We propose a two stage retrieval pipeline to identify relevant sentences to guide response generation by a Large Language Model (LLM). Specifically, our approach uses a BioBERT based bi-encoder for initial retrieval, followed by a re-ranking step using a fine-tuned cross-encoder to enhance retrieval precision. The final set of selected sentences serve as an input to Mistral 7B model which generates answers through few-shot prompting. Our approach achieves an overall score of 31.6 on the test set, outperforming a substantially larger baseline model LLaMA 3.3 70B (30.7), which demonstrates the effectiveness of retrieval-augmented generation for grounded QA.

**摘要(中文)**:
> 本文介绍了我们提交的 BioNLP ACL 2025 共享任务，该任务基于电子健康记录 (EHR) 的接地问答 (QA)。该任务旨在自动生成患者健康相关问题的答案，这些问题基于患者临床记录的证据。我们提出了一个两阶段检索管道来识别相关句子，以指导大型语言模型（LLM）生成响应。具体来说，我们的方法使用基于 BioBERT 的双编码器进行初始检索，然后使用微调的交叉编码器进行重新排序步骤以提高检索精度。最终选定的句子集作为 Mistral 7B 模型的输入，该模型通过几次提示生成答案。我们的方法在测试集上获得了 31.6 的总分，优于更大的基线模型 LLaMA 3.3 70B (30.7)，这证明了检索增强生成对于扎根 QA 的有效性。

---

## 223. Enhancing Retrieval forESGLLMviaESG-CID: A Disclosure Content Index Finetuning Dataset for MappingGRIandESRS

**类别**: `Workshop-ClimateNLP`

**作者**: Shafiuddin Rehan Ahmed, Ankit Shah, Quan Hung Tran, Vivek Khetan, Sukryool Kang, Ankit Mehta, Yujia Bao, Wei Wei

**ID**: 2025.climatenlp-1.1

**摘要(英文)**:
> Climate change has intensified the need for transparency and accountability in organizational practices, making Environmental, Social, and Governance (ESG) reporting increasingly crucial. Frameworks like the Global Reporting Initiative (GRI) and the new European Sustainability Reporting Standards (ESRS) aim to standardize ESG reporting, yet generating comprehensive reports remains challenging due to the considerable length of ESG documents and variability in company reporting styles. To facilitate ESG report automation, Retrieval-Augmented Generation (RAG) systems can be employed, but their development is hindered by a lack of labeled data suitable for training retrieval models. In this paper, we leverage an underutilized source of weak supervision—the disclosure content index found in past ESG reports—to create a comprehensive dataset, ESG-CID, for both GRI and ESRS standards. By extracting mappings between specific disclosure requirements and corresponding report sections, and refining them using a Large Language Model as a judge, we generate a robust training and evaluation set. We benchmark popular embedding models on this dataset and show that fine-tuning BERT-based models can outperform commercial embeddings and leading public models, even under temporal data splits for cross-report style transfer from GRI to ESRS.

**摘要(中文)**:
> 气候变化加剧了组织实践中对透明度和问责制的需求，使得环境、社会和治理 (ESG) 报告变得越来越重要。全球报告倡议 (GRI) 和新的欧洲可持续发展报告标准 (ESRS) 等框架旨在标准化 ESG 报告，但由于 ESG 文件相当长且公司报告风格各异，生成全面的报告仍然具有挑战性。为了促进 ESG 报告自动化，可以采用检索增强生成 (RAG) 系统，但由于缺乏适合训练检索模型的标记数据，该系统的发展受到阻碍。在本文中，我们利用未充分利用的弱监管来源（过去 ESG 报告中的披露内容索引）为 GRI 和 ESRS 标准创建综合数据集 ESG-CID。通过提取特定披露要求与相应报告部分之间的映射，并使用大型语言模型作为判断进行细化，我们生成了强大的训练和评估集。我们在此数据集上对流行的嵌入模型进行了基准测试，结果表明，即使在从 GRI 到 ESRS 的跨报告样式传输的时间数据分割下，基于 BERT 的微调模型也可以优于商业嵌入和领先的公共模型。

---

## 224. Evaluating Retrieval Augmented Generation to CommunicateUKClimate Change Information

**类别**: `Workshop-ClimateNLP`

**作者**: Arjun Biswas, Hatim Chahout, Tristan Pigram, Hang Dong, Hywel T.P. Williams, Fai Fung, Hailun Xie

**ID**: 2025.climatenlp-1.9

**摘要(英文)**:
> There is a huge demand for information about climate change across all sectors as societies seek to mitigate and adapt to its impacts. However, the volume and complexity of climate information, which takes many formats including numerical, text, and tabular data, can make good information hard to access. Here we use Large Language Models (LLMs) and Retrieval Augmented Generation (RAG) to create an AI agent that provides accurate and complete information from the United Kingdom Climate Projections 2018 (UKCP18) data archive. To overcome the problematic hallucinations associated with LLMs, four phases of experiments were performed to optimize different components of our RAG framework, combining various recent retrieval strategies. Performance was evaluated using three statistical metrics (faithfulness, relevance, coverage) as well as human evaluation by subject matter experts. Results show that the best model significantly outperforms a generic LLM (GPT-3.5) and has high-quality outputs with positive ratings by human experts. The UKCP Chatbot developed here will enable access at scale to the UKCP18 climate archives, offering an important case study of using RAG-based LLM systems to communicate climate information.

**摘要(中文)**:
> 随着社会寻求减轻和适应气候变化的影响，各部门对有关气候变化的信息有着巨大的需求。然而，气候信息的数量和复杂性采用多种格式，包括数字、文本和表格数据，使得好的信息难以获取。在这里，我们使用大型语言模型 (LLM) 和检索增强生成 (RAG) 创建一个 AI 代理，该代理提供来自 2018 年英国气候预测 (UKCP18) 数据档案的准确完整的信息。为了克服与大语言模型相关的有问题的幻觉，进行了四个阶段的实验来优化我们的 RAG 框架的不同组成部分，结合各种最新的检索策略。使用三个统计指标（可信度、相关性、覆盖率）以及主题专家的人工评估来评估绩效。结果表明，最佳模型的性能显着优于通用 LLM (GPT-3.5)，并且具有高质量的输出，并获得人类专家的积极评价。这里开发的 UKCP 聊天机器人将能够大规模访问 UKCP18 气候档案，提供使用基于 RAG 的大语言模型系统传达气候信息的重要案例研究。

---

## 225. CPIQA: Climate Paper Image Question Answering Dataset for Retrieval-Augmented Generation with Context-based Query Expansion

**类别**: `Workshop-ClimateNLP`

**作者**: Rudra Mutalik, Abiram Panchalingam, Loitongbam Gyanendro Singh, Timothy J. Osborn, Ed Hawkins, Stuart E. Middleton

**ID**: 2025.climatenlp-1.15

**摘要(英文)**:
> Misinformation about climate science is a serious challenge for our society. This paper introduces CPIQA (Climate Paper Image Question-Answering), a new question-answer dataset featuring 4,551 full-text open-source academic papers in the area of climate science with 54,612 GPT-4o generated question-answer pairs. CPIQA contains four question types (numeric, figure-based, non-figure-based, reasoning), each generated using three user roles (expert, non-expert, climate sceptic). CPIQA is multimodal, incorporating information from figures and graphs with GPT-4o descriptive annotations. We describe Context-RAG, a novel method for RAG prompt decomposition and augmentation involving extracting distinct contexts for the question. Evaluation results for Context-RAG on the benchmark SPIQA dataset outperforms the previous best state of the art model in two out of three test cases. For our CPIQA dataset, Context-RAG outperforms our standard RAG baseline on all five base LLMs we tested, showing our novel contextual decomposition method can generalize to any LLM architecture. Expert evaluation of our best performing model (GPT-4o with Context-RAG) by climate science experts highlights strengths in precision and provenance tracking, particularly for figure-based and reasoning questions.

**摘要(中文)**:
> 有关气候科学的错误信息是我们社会面临的严峻挑战。本文介绍了 CPIQA（气候论文图像问答），这是一个新的问答数据集，包含气候科学领域的 4,551 篇全文开源学术论文，以及 54,612 个 GPT-4o 生成的问答对。 CPIQA 包含四种问题类型（数字、基于数字、非基于数字、推理），每种问题类型使用三种用户角色（专家、非专家、气候怀疑论者）生成。 CPIQA 是多模式的，将来自图形和图表的信息与 GPT-4o 描述性注释相结合。我们描述了 Context-RAG，这是一种用于 RAG 提示分解和增强的新方法，涉及提取问题的不同上下文。 Context-RAG 在基准 SPIQA 数据集上的评估结果在三分之二的测试用例中优于之前最先进的模型。对于我们的 CPIQA 数据集，Context-RAG 在我们测试的所有五个基础 LLM 上都优于我们的标准 RAG 基线，这表明我们新颖的上下文分解方法可以推广到任何 LLM 架构。气候科学专家对我们表现最佳的模型（带有 Context-RAG 的 GPT-4o）进行了专家评估，突显了其在精度和来源跟踪方面的优势，特别是对于基于数字和推理的问题。

---

## 226. Listen to the Context: Towards Faithful Large Language Models for Retrieval Augmented Generation on Climate Questions

**类别**: `Workshop-ClimateNLP`

**作者**: David Thulke, Jakob Kemmler, Christian Dugast, Hermann Ney

**ID**: 2025.climatenlp-1.17

**摘要(英文)**:
> Large language models that use retrieval augmented generation have the potential to unlock valuable knowledge for researchers, policymakers, and the public by making long and technical climate-related documents more accessible. While this approach can help alleviate factual hallucinations by relying on retrieved passages as additional context, its effectiveness depends on whether the model’s output remains faithful to these passages. To address this, we explore the automatic assessment of faithfulness of different models in this setting. We then focus on ClimateGPT, a large language model specialised in climate science, to examine which factors in its instruction fine-tuning impact the model’s faithfulness. By excluding unfaithful subsets of the model’s training data, we develop ClimateGPT Faithful+, which achieves an improvement in faithfulness from 30% to 57% in supported atomic claims according to our automatic metric.

**摘要(中文)**:
> 使用检索增强生成的大型语言模型有可能通过使长篇技术性气候相关文档更易于访问来为研究人员、政策制定者和公众释放宝贵的知识。虽然这种方法可以通过依赖检索到的段落作为附加上下文来帮助减轻事实幻觉，但其有效性取决于模型的输出是否仍然忠实于这些段落。为了解决这个问题，我们探索了在这种情况下自动评估不同模型的可信度。然后，我们重点关注 ClimateGPT（一种专门研究气候科学的大型语言模型），以检查其指令微调中的哪些因素会影响模型的可信度。通过排除模型训练数据的不忠实子集，我们开发了 ClimateGPT Faithful+，根据我们的自动指标，它将支持的原子声明的忠实度从 30% 提高到 57%。

---

## 227. Interpersonal Memory Matters: A New Task for Proactive Dialogue Utilizing Conversational History

**类别**: `Workshop-CoNLL`

**作者**: Bowen Wu, Wenqing Wang, Haoran Li, Yunhan Deng, Ying Li, Jingsong Yu, Baoxun Wang

**ID**: 2025.conll-1.4

**摘要(英文)**:
> Proactive dialogue systems aim to empower chatbots with the capability of leading conversations towards specific targets, thereby enhancing user engagement and service autonomy. Existing systems typically target pre-defined keywords or entities, neglecting user attributes and preferences implicit in dialogue history, hindering the development of long-term user intimacy. To address these challenges, we take a radical step towards building a more human-like conversational agent by integrating proactive dialogue systems with long-term memory into a unified framework. Specifically, we define a novel task named Memory-aware Proactive Dialogue (MapDia). By decomposing the task, we then propose an automatic data construction method and create the first Chinese Memory-aware Proactive Dataset (ChMapData). Furthermore, we introduce a joint framework based on Retrieval Augmented Generation (RAG), featuring three modules: Topic Summarization, Topic Retrieval, and Proactive Topic-shifting Detection and Generation, designed to steer dialogues towards relevant historical topics at the right time. The effectiveness of our dataset and models is validated through both automatic and human evaluations. We release the open-source framework and dataset at https://github.com/FrontierLabs/MapDia.

**摘要(中文)**:
> 主动对话系统旨在使聊天机器人能够引导对话达到特定目标，从而提高用户参与度和服务自主权。现有系统通常针对预定义的关键字或实体，忽略对话历史中隐含的用户属性和偏好，阻碍了长期用户亲密感的发展。为了应对这些挑战，我们采取了根本性的一步，通过将主动对话系统与长期记忆集成到一个统一的框架中，构建一个更加人性化的对话代理。具体来说，我们定义了一个名为“记忆感知主动对话”（MapDia）的新任务。通过分解任务，我们提出了一种自动数据构造方法，并创建了第一个中文记忆感知主动数据集（ChMapData）。此外，我们引入了基于检索增强生成（RAG）的联合框架，具有三个模块：主题摘要、主题检索以及主动主题转移检测和生成，旨在在正确的时间引导对话转向相关的历史主题。我们的数据集和模型的有效性通过自动和人工评估得到验证。我们在 https://github.com/FrontierLabs/MapDia 发布了开源框架和数据集。

---

## 228. Language Model Re-rankers are Fooled by Lexical Similarities

**类别**: `Workshop-FEVER`

**作者**: Lovisa Hagström, Ercong Nie, Ruben Halifa, Helmut Schmid, Richard Johansson, Alexander Junge

**ID**: 2025.fever-1.2

**摘要(英文)**:
> Language model (LM) re-rankers are used to refine retrieval results for retrieval-augmented generation (RAG). They are more expensive than lexical matching methods like BM25 but assumed to better process semantic information and the relations between the query and the retrieved answers. To understand whether LM re-rankers always live up to this assumption, we evaluate 6 different LM re-rankers on the NQ, LitQA2 and DRUID datasets. Our results show that LM re-rankers struggle to outperform a simple BM25 baseline on DRUID. Leveraging a novel separation metric based on BM25 scores, we explain and identify re-ranker errors stemming from lexical dissimilarities. We also investigate different methods to improve LM re-ranker performance and find these methods mainly useful for NQ. Taken together, our work identifies and explains weaknesses of LM re-rankers and points to the need for more adversarial and realistic datasets for their evaluation.

**摘要(中文)**:
> 语言模型 (LM) 重新排序器用于细化检索增强生成 (RAG) 的检索结果。它们比 BM25 等词汇匹配方法更昂贵，但假设可以更好地处理语义信息以及查询与检索到的答案之间的关系。为了了解 LM 重排序器是否始终符合这一假设，我们在 NQ、LitQA2 和 DRUID 数据集上评估了 6 个不同的 LM 重排序器。我们的结果表明，LM 重排序器很难在 DRUID 上超越简单的 BM25 基线。利用基于 BM25 分数的新颖分离指标，我们解释并识别了由于词汇差异引起的重新排序错误。我们还研究了提高 LM 重排序器性能的不同方法，并发现这些方法主要用于 NQ。总而言之，我们的工作确定并解释了 LM 重新排序器的弱点，并指出需要更具对抗性和现实的数据集来进行评估。

---

## 229. RAGbased Question Answering ofKorean Laws and Precedents

**类别**: `Workshop-FEVER`

**作者**: Kiho Seo, Takehito Utsuro

**ID**: 2025.fever-1.7

**摘要(英文)**:
> We propose a method of improving the performance of question answering based on the interpretation of criminal law regulations in the Korean language by using large language models. In this study, we develop a system that accumulates legislative texts and case precedents related to criminal procedures published on the Internet.The system searches for relevant legal provisions and precedents related to the queryunder the RAG (Retrieval-Augmented Generation) framework.It generates accurate responses to questions by conducting reasoning through large language modelsbased on these relevant laws and precedents. As an application example of this system, it can be utilized to support decision makingin investigations and legal interpretation scenarios within the field of Korean criminal law.

**摘要(中文)**:
> 我们提出了一种通过使用大语言模型来提高基于韩语刑法法规解释的问答性能的方法。在本研究中，我们开发了一个系统，积累互联网上发布的与刑事诉讼相关的立法文本和判例。该系统在RAG（检索-增强生成）框架下搜索与查询相关的相关法律条款和判例。通过基于这些相关法律和判例的大语言模型进行推理，生成准确的问题答案。作为该系统的一个应用示例，它可以用于支持韩国刑法领域内的调查和法律解释场景中的决策。

---

## 230. SANCTUARY: An Efficient Evidence-based Automated Fact Checking System

**类别**: `Workshop-FEVER`

**作者**: Arbaaz Dharmavaram, Saqib Hakak

**ID**: 2025.fever-1.19

**摘要(英文)**:
> With the growing volume of misinformation online, automated fact-checking systems are becoming increasingly important. This paper presents SANCTUARY, an efficient pipeline for evidence-based verification of real-world claims. Our approach consists of three stages: Hypothetical Question & Passage Generation, a two-step Retrieval-Augmented Generation (RAG) hybrid evidence retrieval, and structured reasoning and prediction, which leverages two lightweight Large Language Models (LLMs). On the challenging AVeriTeC benchmark, our system achieves 25.27 points on the new AVeriTeC score (Ev2R recall), outperforming the previous state-of-the-art baseline by 5 absolute points (1.25× relative improvement). Sanctuary demonstrates that careful retrieval, reasoning strategies and well-integrated language models can substantially advance automated fact-checking performance.

**摘要(中文)**:
> 随着网上错误信息数量的不断增加，自动事实核查系统变得越来越重要。本文介绍了 SANCTUARY，这是一种对现实世界的主张进行基于证据的验证的有效管道。我们的方法由三个阶段组成：假设问题和段落生成、两步检索增强生成 (RAG) 混合证据检索，以及利用两个轻量级大型语言模型 (LLM) 的结构化推理和预测。在具有挑战性的 AVeriTeC 基准测试中，我们的系统在新的 AVeriTeC 分数（Ev2R 召回率）上获得了 25.27 分，比之前最先进的基线高出 5 个绝对点（1.25 倍相对改进）。 Sanctuary 证明，仔细的检索、推理策略和良好集成的语言模型可以极大地提高自动事实检查的性能。

---

## 231. AICCTU@FEVER8: On-premise fact checking through long contextRAG

**类别**: `Workshop-FEVER`

**作者**: Herbert Ullrich, Jan Drchal

**ID**: 2025.fever-1.22

**摘要(英文)**:
> In this paper, we present our fact-checking pipeline which has scored first in FEVER 8 shared task. Our fact-checking system is a simple two-step RAG pipeline based on our last year’s submission. We show how the pipeline can be redeployed on-premise, achieving state-of-the-art fact-checking performance (in sense of Ev2R test-score), even under the constraint of a single Nvidia A10 GPU, 23GB of graphical memory and 60s running time per claim.

**摘要(中文)**:
> 在本文中，我们展示了我们的事实检查流程，该流程在 FEVER 8 共享任务中得分第一。我们的事实核查系统是一个简单的两步 RAG 管道，基于我们去年提交的内容。我们展示了如何在本地重新部署管道，实现最先进的事实检查性能（就 Ev2R 测试分数而言），即使在单个 Nvidia A10 GPU、23GB 图形内存和每个声明 60 秒运行时间的限制下也是如此。

---

## 232. Investigating the Robustness of Retrieval-Augmented Generation at the Query Level

**类别**: `Workshop-GEM`

**作者**: Sezen Perçin, Xin Su, Qutub Sha Syed, Phillip Howard, Aleksei Kuvshinov, Leo Schwinn, Kay-Ulrich Scholl

**ID**: 2025.gem-1.38

**摘要(英文)**:
> Large language models (LLMs) are very costly and inefficient to update with new information. To address this limitation, retrieval-augmented generation (RAG) has been proposed as a solution that dynamically incorporates external knowledge during inference, improving factual consistency and reducing hallucinations. Despite its promise, RAG systems face practical challenges-most notably, a strong dependence on the quality of the input query for accurate retrieval. In this paper, we investigate the sensitivity of different components in the RAG pipeline to various types of query perturbations. Our analysis reveals that the performance of commonly used retrievers can degrade significantly even under minor query variations. We study each module in isolation as well as their combined effect in an end-to-end question answering setting, using both general-domain and domain-specific datasets. Additionally, we propose an evaluation framework to systematically assess the query-level robustness of RAG pipelines and offer actionable recommendations for practitioners based on the results of more than 1092 experiments we performed.

**摘要(中文)**:
> 使用新信息更新大型语言模型 (LLM) 的成本非常高且效率低下。为了解决这一限制，人们提出了检索增强生成（RAG）作为一种解决方案，在推理过程中动态结合外部知识，提高事实一致性并减少幻觉。尽管有这样的前景，RAG 系统仍然面临着实际的挑战，最值得注意的是，准确检索对输入查询的质量有很大的依赖性。在本文中，我们研究了 RAG 管道中不同组件对各种类型查询扰动的敏感性。我们的分析表明，即使在较小的查询变化下，常用检索器的性能也会显着下降。我们使用通用领域和特定领域的数据集单独研究每个模块以及它们在端到端问答设置中的综合效果。此外，我们提出了一个评估框架来系统地评估 RAG 管道的查询级稳健性，并根据我们进行的超过 1092 次实验的结果为从业者提供可行的建议。

---

## 233. Winning Big with Small Models: Knowledge Distillation vs. Self-Training for Reducing Hallucination inQAAgents

**类别**: `Workshop-GEM`

**作者**: Ashley Lewis, Michael White, Jing Liu, Toshiaki Koike-Akino, Kieran Parsons, Ye Wang

**ID**: 2025.gem-1.62

**摘要(英文)**:
> The deployment of Large Language Models (LLMs) in customer support is constrained by hallucination—generating false information—and the high cost of proprietary models. To address these challenges, we propose a retrieval-augmented question-answering (QA) pipeline and explore how to balance human input and automation. Using a dataset of questions about a Samsung Smart TV user manual, we demonstrate that synthetic data generated by LLMs outperforms crowdsourced data in reducing hallucination in finetuned models. We also compare self-training (fine-tuning models on their own outputs) and knowledge distillation (fine-tuning on stronger models’ outputs, e.g., GPT-4o), and find that self-training achieves comparable hallucination reduction. We conjecture that this surprising finding can be attributed to increased exposure bias issues in the knowledge distillation case and support this conjecture with post hoc analysis. We also improve robustness to unanswerable questions and retrieval failures with contextualized “I don’t know” responses. These findings show that scalable, cost-efficient QA systems can be built using synthetic data and self-training with open-source models, reducing reliance on proprietary tools or costly human annotations.

**摘要(中文)**:
> 大型语言模型 (LLM) 在客户支持中的部署受到幻觉（生成虚假信息）和专有模型的高成本的限制。为了应对这些挑战，我们提出了检索增强问答（QA）管道，并探索如何平衡人工输入和自动化。使用有关三星智能电视用户手册的问题数据集，我们证明了大语言模型生成的合成数据在减少微调模型中的幻觉方面优于众包数据。我们还比较了自我训练（对模型自身的输出进行微调）和知识蒸馏（对更强模型的输出进行微调，例如 GPT-4o），并发现自我训练可以实现类似的幻觉减少。我们推测这一令人惊讶的发现可归因于知识蒸馏案例中暴露偏差问题的增加，并通过事后分析支持了这一猜想。我们还通过情境化的“我不知道”回答来提高对无法回答的问题和检索失败的鲁棒性。这些发现表明，可以使用合成数据和开源模型的自我训练来构建可扩展、经济高效的 QA 系统，从而减少对专有工具或昂贵的人工注释的依赖。

---

## 234. EdTec-ItemGen: Enhancing Retrieval-Augmented Item Generation Through Key Point Extraction

**类别**: `Workshop-KnowLLM`

**作者**: Alonso Palomino, David Buschhüter, Roland Roller, Niels Pinkwart, Benjamin Paassen

**ID**: 2025.knowllm-1.2

**摘要(英文)**:
> A major bottleneck in exam construction involves designing test items (i.e., questions) that accurately reflect key content from domain-aligned curricular materials. For instance, during formative assessments in vocational education and training (VET), exam designers must generate updated test items that assess student learning progress while covering the full breadth of topics in the curriculum. Large language models (LLMs) can partially support this process, but effective use requires careful prompting and task-specific understanding. We propose a new key point extraction method for retrieval-augmented item generation that enhances the process of generating test items with LLMs. We exhaustively evaluated our method using a TREC-RAG approach, finding that prompting LLMs with key content rather than directly using full curricular text passages significantly improves item quality regarding key information coverage by 8%. To demonstrate these findings, we release EdTec-ItemGen, a retrieval-augmented item generation demo tool to support item generation in education.

**摘要(中文)**:
> 考试构建的一个主要瓶颈涉及设计准确反映领域相关课程材料中关键内容的测试项目（即问题）。例如，在职业教育和培训 (VET) 的形成性评估中，考试设计者必须生成更新的测试项目，以评估学生的学习进度，同时涵盖课程中的全部主题。大型语言模型 (LLM) 可以部分支持此过程，但有效使用需要仔细提示和特定于任务的理解。我们提出了一种用于检索增强项目生成的新关键点提取方法，该方法增强了使用大语言模型生成测试项目的过程。我们使用 TREC-RAG 方法详尽地评估了我们的方法，发现提示大语言模型提供关键内容而不是直接使用完整的课程文本段落，可以将关键信息覆盖率的项目质量显着提高 8%。为了证明这些发现，我们发布了 EdTec-ItemGen，这是一种检索增强项目生成演示工具，用于支持教育中的项目生成。

---

## 235. ToolReAGt: Tool Retrieval forLLM-based Complex Task Solution via Retrieval Augmented Generation

**类别**: `Workshop-KnowLLM`

**作者**: Norbert Braunschweiler, Rama Doddipatla, Tudor-catalin Zorila

**ID**: 2025.knowllm-1.7

**摘要(英文)**:
> Artificial intelligence agents when deployed to solve complex problems, need to first decompose the task into smaller manageable sub-tasks, and further associate tools if one is required to solve the sub-task. If the size of the set of tools to chose from is large, a retrieval system is usually employed to narrow down the tool choices before the LLM can proceed with associating tools to the sub-tasks. This paper focuses on the retrieval problem to identify the set of relevant tools to solve a complex task given a large pool of tools to chose from using retrieval augmented generation (RAG) and we refer to it as ToolReAGT. The proposed approach employs ReAct prompting to perform the retrieval in an iterative fashion to first identify if a tool is required and then associate one or more tools for each sub-task. This deviates from conventional RAG where an n-best list of tools are identified given the complex task directly. Experiments are presented on the UltraTool benchmark corpus with 1000 complex tasks and over 2000 tools to select from. A conventional RAG-system is established as baseline and compared to the ToolReAGt approach, resulting in an 8.9% improved retrieval accuracy score recall@5.

**摘要(中文)**:
> 人工智能代理在部署解决复杂问题时，需要首先将任务分解为更小的可管理的子任务，如果需要解决子任务，则进一步关联工具。如果可供选择的工具集规模很大，通常会使用检索系统来缩小工具选择范围，然后大语言模型才能继续将工具与子任务相关联。本文重点关注检索问题，以确定一组相关工具来解决复杂任务，给定大量工具可供使用检索增强生成（RAG）进行选择，我们将其称为 ToolReAGT。所提出的方法采用 ReAct 提示以迭代方式执行检索，首先确定是否需要工具，然后为每个子任务关联一个或多个工具。这与传统的 RAG 不同，在传统的 RAG 中，直接在给定复杂任务的情况下确定 n 个最佳工具列表。实验在 UltraTool 基准语料库上进行，包含 1000 个复杂任务和 2000 多个工具可供选择。建立传统的 RAG 系统作为基线，并与 ToolReAGt 方法进行比较，结果检索准确度分数recall@5提高了 8.9%。

---

## 236. Meetalk: Retrieval-Augmented and Adaptively Personalized Meeting Summarization with Knowledge Learning from User Corrections

**类别**: `Workshop-KnowLLM`

**作者**: Zheng Chen, Jiang Futian, Yue Deng, Changyang He, Bo Li

**ID**: 2025.knowllm-1.9

**摘要(英文)**:
> We present Meetalk, a retrieval-augmented and knowledge-adaptive system for generating personalized meeting minutes. Although large language models (LLMs) excel at summarizing, their output often lacks faithfulness and does not reflect user-specific structure and style. Meetalk addresses these issues by integrating ASR-based transcription with LLM generation guided by user-derived knowledge. Specifically, Meetalk maintains and updates three structured databases, Table of Contents, Chapter Allocation, and Writing Style, based on user-uploaded samples and editing feedback. These serve as a dynamic memory that is retrieved during generation to ground the model’s outputs. To further enhance reliability, Meetalk introduces hallucination-aware uncertainty markers that highlight low-confidence segments for user review. In a user study in five real-world meeting scenarios, Meetalk significantly outperforms a strong baseline (iFLYTEK ASR + ChatGPT-4o) in completeness, contextual relevance, and user trust. Our findings underscore the importance of knowledge foundation and feedback-driven adaptation in building trustworthy, personalized LLM systems for high-stakes summarization tasks.

**摘要(中文)**:
> 我们推出了 Meetalk，这是一个检索增强和知识自适应的系统，用于生成个性化会议纪要。尽管大型语言模型（LLM）擅长总结，但它们的输出往往缺乏忠实度，并且不能反映用户特定的结构和风格。 Meetalk 通过将基于 ASR 的转录与由用户衍生知识引导的 LLM 生成相结合来解决这些问题。具体来说，Meetalk 根据用户上传的样本和编辑反馈来维护和更新三个结构化数据库：目录、章节分配和写作风格。它们充当动态存储器，在生成过程中检索以奠定模型输出的基础。为了进一步提高可靠性，Meetalk 引入了幻觉感知的不确定性标记，突出显示低置信度部分以供用户查看。在五个真实会议场景的用户研究中，Meetalk 在完整性、上下文相关性和用户信任度方面显着优于强大的基线（科大讯飞 ASR + ChatGPT-4o）。我们的研究结果强调了知识基础和反馈驱动的适应对于为高风险总结任务构建值得信赖的个性化大语言模型系统的重要性。

---

## 237. On the Way toLLMPersonalization: Learning to Remember User Conversations

**类别**: `Workshop-L2M2`

**作者**: Lucie Charlotte Magister, Katherine Metcalf, Yizhe Zhang, Maartje Ter Hoeve

**ID**: 2025.l2m2-1.5

**摘要(英文)**:
> Large Language Models (LLMs) have quickly become an invaluable assistant for a variety of tasks. However, their effectiveness is constrained by their ability to tailor responses to human preferences and behaviors via personalization. Prior work in LLM personalization has largely focused on style transfer or incorporating small factoids about the user, as knowledge injection remains an open challenge. In this paper, we explore injecting knowledge of prior conversations into LLMs to enable future work on less redundant, personalized conversations. We identify two real-world constraints: (1) conversations are sequential in time and must be treated as such during training, and (2) per-user personalization is only viable in parameter-efficient settings. To this aim, we propose PLUM, a pipeline performing data augmentation for up-sampling conversations as question-answer pairs, that are then used to finetune a low-rank adaptation adapter with a weighted cross entropy loss. Even in this first exploration of the problem, we perform competitively with baselines such as RAG, attaining an accuracy of 81.5% across 100 conversations.

**摘要(中文)**:
> 大型语言模型 (LLM) 已迅速成为各种任务的宝贵助手。然而，它们的有效性受到它们通过个性化根据人类偏好和行为定制响应的能力的限制。之前 LLM 个性化的工作主要集中在风格转移或纳入有关用户的小事实，因为知识注入仍然是一个开放的挑战。在本文中，我们探索将先前对话的知识注入大语言模型，以使未来的工作能够减少冗余、个性化对话。我们确定了两个现实世界的限制：（1）对话在时间上是连续的，并且在训练期间必须如此对待，（2）每用户个性化仅在参数有效的设置中可行。为此，我们提出了 PLUM，这是一种对作为问答对的上采样对话执行数据增强的管道，然后用于通过加权交叉熵损失来微调低秩自适应适配器。即使在第一次探索这个问题时，我们的表现也与 RAG 等基线相当，在 100 个对话中达到了 81.5% 的准确率。

---

## 238. MultiReflect: Multimodal Self-ReflectiveRAG-based Automated Fact-Checking

**类别**: `Workshop-MAGMAR`

**作者**: Uku Kangur, Krish Agrawal, Yashashvi Singh, Ahmed Sabir, Rajesh Sharma

**ID**: 2025.magmar-1.1

**摘要(英文)**:
> In this work, we introduce MultiReflect, a novel multimodal self-reflective Retrieval Augmented Generation (RAG)-based automated fact-checking pipeline. MultiReflect is designed to address the challenges of rapidly outdated information, limitations in human query capabilities, and expert knowledge barriers in fact-checking. Our proposed pipeline leverages the latest advancements in Large Language Models (LLMs) and Retrieval Augmented Generation (RAG) to enhance fact verification across text and images. Specifically, by integrating multimodal data processing with RAG-based evidence reflection, our system improves the accuracy of fact-checking by utilizing internet-sourced verification. We evaluate our results on the VERITE benchmarks and using several multimodal LLMs, outperforming baselines in binary classification.

**摘要(中文)**:
> 在这项工作中，我们介绍了 MultiReflect，这是一种基于多模式自反射检索增强生成 (RAG) 的自动事实检查管道。 MultiReflect 旨在解决快速过时的信息、人类查询能力的限制以及事实检查中的专家知识障碍等挑战。我们提出的管道利用大型语言模型 (LLM) 和检索增强生成 (RAG) 的最新进展来增强跨文本和图像的事实验证。具体来说，通过将多模态数据处理与基于 RAG 的证据反映相结合，我们的系统利用互联网来源的验证提高了事实核查的准确性。我们在 VERITE 基准上评估我们的结果，并使用多个多模态大语言模型，在二元分类中优于基线。

---

## 239. CollEX– A Multimodal AgenticRAGSystem Enabling Interactive Exploration of Scientific Collections

**类别**: `Workshop-MAGMAR`

**作者**: Florian Schneider, Narges Baba Ahmadi, Niloufar Baba Ahmadi, Iris Vogel, Martin Semmann, Chris Biemann

**ID**: 2025.magmar-1.2

**摘要(英文)**:
> In this paper, we introduce CollEx, an innovative multimodal agentic Retrieval-Augmented Generation (RAG) system designed to enhance interactive exploration of extensive scientific collections. Given the overwhelming volume and inherent complexity of scientific collections, conventional search systems often lack necessary intuitiveness and interactivity, presenting substantial barriers for learners, educators, and researchers. CollEx addresses these limitations by employing state-of-the-art Large Vision-Language Models (LVLMs) as multimodal agents accessible through an intuitive chat interface. By abstracting complex interactions via specialized agents equipped with advanced tools, CollEx facilitates curiosity-driven exploration, significantly simplifying access to diverse scientific collections and records therein. Our system integrates textual and visual modalities, supporting educational scenarios that are helpful for teachers, pupils, students, and researchers by fostering independent exploration as well as scientific excitement and curiosity. Furthermore, CollEx serves the research community by discovering interdisciplinary connections and complementing visual data. We illustrate the effectiveness of our system through a proof-of-concept application containing over 64,000 unique records across 32 collections from a local scientific collection from a public university.

**摘要(中文)**:
> 在本文中，我们介绍了 CollEx，这是一种创新的多模式代理检索增强生成 (RAG) 系统，旨在增强对广泛科学馆藏的交互式探索。鉴于科学馆藏的巨大数量和固有的复杂性，传统的检索系统往往缺乏必要的直观性和交互性，给学习者、教育工作者和研究人员带来了巨大的障碍。 CollEx 通过采用最先进的大型视觉语言模型 (LVLM) 作为可通过直观的聊天界面访问的多模式代理来解决这些限制。通过配备先进工具的专门代理抽象出复杂的交互，CollEx 促进了好奇心驱动的探索，显着简化了对其中不同科学馆藏和记录的访问。我们的系统集成了文本和视觉模式，通过培养独立探索以及科学兴奋和好奇心，支持对教师、学生和研究人员有帮助的教育场景。此外，CollEx 通过发现跨学科联系和补充视觉数据来为研究界提供服务。我们通过概念验证应用程序展示了我们系统的有效性，该应用程序包含来自公立大学当地科学馆藏的 32 个馆藏中的 64,000 多个独特记录。

---

## 240. VoxRAG: A Step Toward Transcription-FreeRAGSystems in Spoken Question Answering

**类别**: `Workshop-MAGMAR`

**作者**: Zackary Rackauckas, Julia Hirschberg

**ID**: 2025.magmar-1.3

**摘要(英文)**:
> We introduce VoxRAG, a modular speech-to-speech retrieval-augmented generation system that bypasses transcription to retrieve semantically relevant audio segments directly from spoken queries. VoxRAG employs silence-aware segmentation, speaker diarization, CLAP audio embeddings, and FAISS retrieval using L2-normalized cosine similarity. We construct a 50-query test set recorded as spoken input by a native English speaker. Retrieval quality was evaluated using LLM-as-a-judge annotations. For very relevant segments, cosine similarity achieved a Recall@10 of 0.34. For somewhat relevant segments, Recall@10 rose to 0.60 and nDCG@10 to 0.27, highlighting strong topical alignment. Answer quality was judged on a 0–2 scale across relevance, accuracy, completeness, and precision, with mean scores of 0.84, 0.58, 0.56, and 0.46 respectively. While precision and retrieval quality remain key limitations, VoxRAG shows that transcription-free speech-to-speech retrieval is feasible in RAG systems.

**摘要(中文)**:
> 我们推出了 VoxRAG，这是一种模块化语音到语音检索增强生成系统，它绕过转录，直接从口头查询中检索语义相关的音频片段。 VoxRAG 采用静音感知分割、说话者二值化、CLAP 音频嵌入和使用 L2 归一化余弦相似度的 FAISS 检索。我们构建了一个包含 50 个查询的测试集，记录为英语母语人士的口头输入。使用大语言模型作为法官注释来评估检索质量。对于非常相关的片段，余弦相似度的 Recall@10 达到 0.34。对于有些相关的细分市场，Recall@10 升至 0.60，nDCG@10 升至 0.27，凸显了强烈的主题一致性。答案质量按照相关性、准确性、完整性和精确性的 0-2 等级进行评判，平均分分别为 0.84、0.58、0.56 和 0.46。虽然精度和检索质量仍然是关键限制，但 VoxRAG 表明无转录语音到语音检索在 RAG 系统中是可行的。

---

## 241. Cross-modal Clustering-based Retrieval for Scalable and Robust Image Captioning

**类别**: `Workshop-MAGMAR`

**作者**: Jingyi You, Hiroshi Sasaki, Kazuma Kadowaki

**ID**: 2025.magmar-1.4

**摘要(英文)**:
> Recent advances in retrieval-augmented generative image captioning (RAG-IC) have significantly improved caption quality by incorporating external knowledge and similar examples into language model-driven caption generators. However, these methods still encounter challenges when applied to real-world scenarios. First, many existing approaches rely on bimodal retrieval datastores that require large amounts of labeled data and substantial manual effort to construct, making them costly and time-consuming. Moreover, they simply retrieve the nearest samples to the input query from datastores, which leads to high redundancy in the retrieved content and subsequently degrades the quality of the generated captions. In this paper, we introduce a novel RAG-IC approach namedCross-modalDiversity-promotingRetrieval technique(CoDiRet), which integrates a text-only unimodal retrieval module with our unique cluster-based retrieval mechanism. This proposal simultaneously enhances the scalability of the datastore, promotes diversity in retrieved content, and improves robustness against out-of-domain inputs, which eventually facilitates real-world applications. Experimental results demonstrate that our method, despite being exclusively trained on the COCO benchmark dataset, achieves competitive performance on the in-domain benchmark and generalizes robustly across different domains without additional training.

**摘要(中文)**:
> 检索增强生成图像字幕 (RAG-IC) 的最新进展通过将外部知识和类似示例合并到语言模型驱动的字幕生成器中，显着提高了字幕质量。然而，这些方法在应用于现实场景时仍然遇到挑战。首先，许多现有方法依赖于双模态检索数据存储，这需要大量标记数据和大量手动工作来构建，这使得它们成本高昂且耗时。此外，它们只是从数据存储中检索与输入查询最接近的样本，这导致检索到的内容存在高度冗余，从而降低了生成的字幕的质量。在本文中，我们介绍了一种新颖的 RAG-IC 方法，名为跨模态多样性促进检索技术（CoDiRet），它将纯文本单模态检索模块与我们独特的基于集群的检索机制集成在一起。该提案同时增强了数据存储的可扩展性，促进了检索内容的多样性，并提高了针对域外输入的鲁棒性，最终促进了现实世界的应用程序。实验结果表明，我们的方法尽管专门在 COCO 基准数据集上进行了训练，但在域内基准上实现了有竞争力的性能，并且无需额外训练即可在不同领域中稳健地泛化。

---

## 242. Multimodal Retrieval-Augmented Generation: Unified Information Processing Across Text, Image, Table, and Video Modalities

**类别**: `Workshop-MAGMAR`

**作者**: Nazarii Drushchak, Nataliya Polyakovska, Maryna Bautina, Taras Semenchenko, Jakub Koscielecki, Wojciech Sykala, Michal Wegrzynowski

**ID**: 2025.magmar-1.5

**摘要(英文)**:
> Retrieval-augmented generation (RAG) is a powerful paradigm for leveraging external data to enhance the capabilities of large language models (LLMs). However, most existing RAG solutions are tailored for single-modality or limited multimodal scenarios, restricting their applicability in real-world contexts where diverse data sources—including text, tables, images, and videos—must be integrated seamlessly. In this work proposes a unifiedMultimodal Retrieval-augmented generation (mRAG)system designed to unify information processing across all four modalities. Our pipeline ingests and indexes data from PDFs and videos using tools like Amazon Textract, Transcribe, Langfuse, and multimodal LLMs (e.g., Claude 3.5 Sonnet) for structured extraction and semantic enrichment. The dataset includes text queries, table lookups, image-based questions, and videos. Evaluation with the Deepeval framework shows improved retrieval accuracy and response quality, especially for structured text and tables. While performance on image and video queries is lower, the multimodal integration framework remains robust, underscoring the value of unified pipelines for diverse data.

**摘要(中文)**:
> 检索增强生成 (RAG) 是利用外部数据增强大型语言模型 (LLM) 功能的强大范例。然而，大多数现有的 RAG 解决方案都是针对单模态或有限的多模态场景量身定制的，限制了它们在必须无缝集成不同数据源（包括文本、表格、图像和视频）的现实环境中的适用性。在这项工作中，提出了一个统一的多模态检索增强生成（mRAG）系统，旨在统一所有四种模态的信息处理。我们的管道使用 Amazon Textract、Transcribe、Langfuse 和多模式 LLM（例如 Claude 3.5 Sonnet）等工具从 PDF 和视频中提取数据并建立索引，以进行结构化提取和语义丰富。该数据集包括文本查询、表查找、基于图像的问题和视频。使用 Deepeval 框架进行的评估显示检索准确性和响应质量有所提高，特别是对于结构化文本和表格。虽然图像和视频查询的性能较低，但多模式集成框架仍然强大，强调了不同数据的统一管道的价值。

---

## 243. Cross-Modal Augmentation for Low-Resource Language Understanding and Generation

**类别**: `Workshop-MAGMAR`

**作者**: Zichao Li, Zong Ke

**ID**: 2025.magmar-1.9

**摘要(英文)**:
> This paper introduces a multimodal retrieval-augmented generation (RAG) system designed to enhance language understanding and generation for low-resource languages. By integrating textual, visual, and geospatial data, the system leverages cross-lingual adaptation and multimodal augmentation to bridge the gap between high-resource and low-resource languages. Evaluated on the MM-COVID and LORELEI datasets, the system demonstrates superior performance in retrieval (precision: 85%, recall: 82%) and generation (BLEU: 28.4) tasks compared to baselines. Case studies in public health communication and disaster response highlight its practical utility. The results underscore the potential of multimodal AI to democratize access to technology and address global challenges in low-resource settings.

**摘要(中文)**:
> 本文介绍了一种多模态检索增强生成（RAG）系统，旨在增强低资源语言的语言理解和生成。通过集成文本、视觉和地理空间数据，该系统利用跨语言适应和多模式增强来弥合高资源语言和低资源语言之间的差距。在 MM-COVID 和 LORELEI 数据集上进行评估，与基线相比，该系统在检索（精确度：85%，召回率：82%）和生成（BLEU：28.4）任务方面表现出卓越的性能。公共卫生传播和灾难应对方面的案例研究凸显了其实用性。结果强调了多模式人工智能在实现技术获取民主化和应对资源匮乏环境中的全球挑战方面的潜力。

---

## 244. The Power of Simplicity inLLM-Based Event Forecasting

**类别**: `Workshop-ReALM`

**作者**: Meiru Zhang, Auss Abbood, Zaiqiao Meng, Nigel Collier

**ID**: 2025.realm-1.32

**摘要(英文)**:
> Event forecasting is a challenging task that requires temporal reasoning over historical data. Although iterative reasoning agents following the ReAct paradigm bring improvements to event forecasting tasks, they also increase the cost of each prediction and bring challenges in tracing the information that contributes to the prediction. In this study, we simplify the ReAct framework into a retrieval-augmented generation (RAG) pipeline. Surprisingly, the RAG outperforms ReAct with only 10% of the token costs. Furthermore, our experiments reveal that structured statistical contexts significantly enhance forecasting accuracy, whereas introducing unstructured semantic information (e.g., news article titles) negatively impacts performance. In-depth analyses further highlight that the iterative reasoning traces impair forecasting accuracy in smaller-scale models but benefit larger models (e.g., 70B) in the event forecasting task. These insights underscore existing limitations in large language models’ temporal and semantic reasoning abilities, providing critical guidance for developing more cost-effective and reliable forecasting systems.

**摘要(中文)**:
> 事件预测是一项具有挑战性的任务，需要对历史数据进行时间推理。尽管遵循 ReAct 范式的迭代推理代理为事件预测任务带来了改进，但它们也增加了每次预测的成本，并给跟踪有助于预测的信息带来了挑战。在本研究中，我们将 ReAct 框架简化为检索增强生成（RAG）管道。令人惊讶的是，RAG 的性能优于 ReAct，而代币成本仅为 ReAct 的 10%。此外，我们的实验表明，结构化统计上下文显着提高了预测准确性，而引入非结构化语义信息（例如新闻文章标题）会对性能产生负面影响。深入分析进一步强调，迭代推理轨迹会损害较小规模模型的预测准确性，但有利于事件预测任务中的较大模型（例如 70B）。这些见解强调了大型语言模型的时间和语义推理能力的现有局限性，为开发更具成本效益和可靠的预测系统提供了关键指导。

---

## 245. Literature-Grounded Novelty Assessment of Scientific Ideas

**类别**: `Workshop-SDP`

**作者**: Simra Shahid, Marissa Radensky, Raymond Fok, Pao Siangliulue, Daniel S Weld, Tom Hope

**ID**: 2025.sdp-1.9

**摘要(英文)**:
> Automated scientific idea generation systems have made remarkable progress, yet the automatic evaluation of idea novelty remains a critical and underexplored challenge. Manual evaluation of novelty through literature review is labor-intensive, prone to error due to subjectivity, and impractical at scale. To address these issues, we propose the **Idea Novelty Checker**, an LLM-based retrieval-augmented generation (RAG) framework that leverages a two-stage retrieve-then-rerank approach. The Idea Novelty Checker first collects a broad set of relevant papers using keyword and snippet-based retrieval, then refines this collection through embedding-based filtering followed by facet-based LLM re-ranking. It incorporates expert-labeled examples to guide the system in comparing papers for novelty evaluation and in generating literature-grounded reasoning. Our extensive experiments demonstrate that our novelty checker achieves approximately 13% higher agreement than existing approaches. Ablation studies further showcases the importance of the facet-based re-ranker in identifying the most relevant literature for novelty evaluation.

**摘要(中文)**:
> 自动科学创意生成系统已经取得了显着的进步，但创意新颖性的自动评估仍然是一个关键且尚未充分探索的挑战。通过文献综述对新颖性进行手动评估是劳动密集型的，由于主观性容易出错，而且大规模时不切实际。为了解决这些问题，我们提出了 **Idea Novelty Checker**，这是一种基于 LLM 的检索增强生成 (RAG) 框架，利用两阶段检索然后重新排序方法。 Idea Novelty Checker 首先使用基于关键字和片段的检索来收集大量相关论文，然后通过基于嵌入的过滤和基于方面的 LLM 重新排名来完善该集合。它结合了专家标记的示例来指导系统比较论文以进行新颖性评估并生成基于文献的推理。我们广泛的实验表明，我们的新颖性检查器的一致性比现有方法高出约 13%。消融研究进一步展示了基于方面的重新排序在识别新颖性评估最相关的文献方面的重要性。

---

## 246. Predicting The Scholarly Impact of Research Papers Using Retrieval-AugmentedLLMs

**类别**: `Workshop-SDP`

**作者**: Tamjid Azad, Ibrahim Al Azher, Sagnik Ray Choudhury, Hamed Alhoori

**ID**: 2025.sdp-1.11

**摘要(英文)**:
> Assessing a research paper’s scholarly impact is an important phase in the scientific research process; however, metrics typically take some time after publication to accurately capture the impact. Our study examines how Large Language Models (LLMs) can predict scholarly impact accurately. We utilize Retrieval-Augmented Generation (RAG) to examine the degree to which the LLM performance improves compared to zero-shot prompting. Results show that LLama3-8b with RAG achieved the best overall performance, while Gemma-7b benefited the most from RAG, exhibiting the most significant reduction in Mean Absolute Error (MAE). Our findings suggest that retrieval-augmented LLMs offer a promising approach for early research evaluation. Our code and dataset for this project are publicly available.

**摘要(中文)**:
> 评估研究论文的学术影响是科学研究过程中的一个重要阶段；然而，指标通常在发布后需要一段时间才能准确捕捉影响。我们的研究探讨了大型语言模型 (LLM) 如何准确预测学术影响。我们利用检索增强生成（RAG）来检查与零样本提示相比，LLM 性能提高的程度。结果表明，采用 RAG 的 LLama3-8b 实现了最佳的整体性能，而 Gemma-7b 从 RAG 中获益最多，平均绝对误差 (MAE) 降低幅度最显着。我们的研究结果表明，检索增强的大语言模型为早期研究评估提供了一种有前途的方法。我们该项目的代码和数据集是公开的。

---

## 247. ExpertNeurons atSciVQA-2025: Retrieval AugmentedVQAwith Vision Language Model (RAVQA-VLM)

**类别**: `Workshop-SDP`

**作者**: Nagaraj N Bhat, Joydeb Mondal, Srijon Sarkar

**ID**: 2025.sdp-1.20

**摘要(英文)**:
> We introduce RAVQA-VLM, a novel Retrieval-Augmented Generation (RAG) architecture with Vision Language Model for the SciVQA challenge, which targets closed-ended visual and nonvisual questions over scientific figures drawn from ACL Anthology and arXiv papers (Borisova and Rehm, 2025). Our system first encodes each input figure and its accompanying metadata (caption, figure ID, type) into dense embed- dings, then retrieves context passages from the full PDF of the source paper via a Dense Passage Retriever (Karpukhin et al., 2020). The extracted contexts are concatenated with the question and passed to a vision-capable generative backbone (e.g., Phi-3.5, Pixtral-12B, Mixtral-24B-small, InterVL-3-14B) fine-tuned on the 15.1K SciVQA training examples (Yang et al., 2023; Pramanick et al., 2024). We jointly optimize retrieval and generation end-to-end to minimize answer loss and mitigate hallucinations (Lewis et al., 2020; Rujun Han and Castelli, 2024). On the SciVQA test set, RAVQA-VLM achieves significant improvements over parametric only baselines, with relative gains of +5% ROUGE1 and +5% ROUGE-L, demonstrating the efficacy of RAG for multimodal scientific QA.

**摘要(中文)**:
> 我们引入了 RAVQA-VLM，这是一种新颖的检索增强生成 (RAG) 架构，具有用于 SciVQA 挑战的视觉语言模型，其目标是针对来自 ACL Anthology 和 arXiv 论文（Borisova 和 Rehm，2025）的科学图形的封闭式视觉和非视觉问题。我们的系统首先将每个输入图形及其附带的元数据（标题、图形 ID、类型）编码为密集嵌入，然后通过密集通道检索器从源论文的完整 PDF 中检索上下文段落（Karpukhin 等人，2020）。提取的上下文与问题连接，并传递到具有视觉能力的生成主干（例如，Phi-3.5、Pixtral-12B、Mixtral-24B-small、InterVL-3-14B），并在 15.1K SciVQA 训练示例上进行微调（Yang 等人，2023 年；Pramanick 等人，2024 年）。我们联合优化端到端的检索和生成，以最大程度地减少答案丢失并减轻幻觉（Lewis 等人，2020；Rujun Han 和 Castelli，2024）。在 SciVQA 测试集上，RAVQA-VLM 比仅参数基线取得了显着改进，相对增益为 +5% ROUGE1 和 +5% ROUGE-L，证明了 RAG 对于多模式科学 QA 的功效。

---

## 248. YNU-HPCCatSemEval-2025 Task3: Leveraging Zero-Shot Learning for Halluciantion Detection

**类别**: `Workshop-SemEval`

**作者**: Shen Chen, Jin Wang, Xuejie Zhang

**ID**: 2025.semeval-1.5

**摘要(英文)**:
> This study reports the YNU-HPCC team’s participation in SemEval-2025 shared task 3, which focuses on detecting hallucination spans in multilingual instruction-tuned LLM outputs. This task differs from typical hallucination detection tasks in that it does not require identifying the entire response or pinpointing which sentences contain hallucinations generated by the LLM. Instead, the task focuses on detecting hallucinations at the character level. In addition, this task differs from typical hallucination detection based on binary classification. It requires not only identifying hallucinations but also assigning a likelihood score to indicate how likely each part of the model output is hallucinatory. Our approach combines Retrieval-Augmented Generation (RAG) and zero-shot methods, guiding LLMs to detect and extract hallucination spans using external knowledge. The proposed system achieved first place in Chinese and fifteenth place in English for track3.

**摘要(中文)**:
> 本研究报告了 YNU-HPCC 团队参与 SemEval-2025 共享任务 3 的情况，该任务的重点是检测多语言指令调整的 LLM 输出中的幻觉跨度。该任务与典型的幻觉检测任务的不同之处在于，它不需要识别整个响应或查明哪些句子包含大语言模型生成的幻觉。相反，该任务的重点是检测角色级别的幻觉。此外，该任务与基于二元分类的典型幻觉检测不同。它不仅需要识别幻觉，还需要分配一个可能性分数来指示模型输出的每个部分是幻觉的可能性。我们的方法结合了检索增强生成（RAG）和零样本方法，指导大语言模型使用外部知识检测和提取幻觉跨度。所提出的系统在 track3 中获得了中文第一名和英文第十五名。

---

## 249. CYUTatSemEval-2025 Task 6: Prompting with Precision –ESGAnalysis via Structured Prompts

**类别**: `Workshop-SemEval`

**作者**: Shih - Hung Wu, Z h i - H o n g Lin, Ping - Hsuan Lee

**ID**: 2025.semeval-1.69

**摘要(英文)**:
> In response to the increasing need for efficientESG verification, we propose an innovativeNLP framework that automates the evaluationof corporate sustainability claims. Ourmethod integrates Retrieval-Augmented Generation,Chain-of-Thought reasoning, and structuredprompt engineering to effectively processand classify diverse, multilingual ESG disclosures.Evaluated under the SemEval-2025PromiseEval competition, our system achievedtop-tier performance—securing first place onthe public English leaderboard, excelling in theFrench track, and delivering marked improvementsover conventional machine learning approaches.These results highlight the framework’spotential to offer a scalable, transparent,and robust solution for corporate ESG assessment.

**摘要(中文)**:
> 为了满足对高效 ESG 验证日益增长的需求，我们提出了一种创新的 NLP 框架，可以自动评估企业可持续发展声明。我们的方法集成了检索增强生成、思维链推理和结构化提示工程，以有效地处理和分类多样化的多语言 ESG 披露。在 SemEval-2025PromiseEval 竞赛中进行评估，我们的系统取得了顶级性能——在公共英语排行榜上名列第一，在法语赛道上表现出色，并与传统机器学习方法相比有了显着改进。这些结果凸显了该框架提供的潜力用于企业 ESG 评估的可扩展、透明且强大的解决方案。

---

## 250. MyMy atSemEval-2025 Task 9: A Robust Knowledge-Augmented Data Approach for Reliable Food Hazard Detection

**类别**: `Workshop-SemEval`

**作者**: Ben Phan, Jung-Hsien Chiang

**ID**: 2025.semeval-1.112

**摘要(英文)**:
> The Food Hazard Detection (SemEval-2025 Task 9) advances explainable classification of food-incident reports collected from web sources, including social media and regulatory agency websites, to support timely risk mitigation for public health and the economy. This task is complicated by a highly imbalanced, long-tail label distribution and the need for transparent, reliable AI. We present a robust Knowledge-Augmented Data approach that integrates Retrieval-Augmented Generation (RAG) with domain-specific knowledge from the PubMed API to enrich and balance the training data. Our method leverages domain-specific knowledge to expand datasets and curate high-quality data that enhances overall data integrity. We hypothesize that Knowledge-Augmented Data improves Macro-F1 scores, the primary evaluation metric. Our approach achieved a top-2 ranking across both subtasks, demonstrating its effectiveness in advancing NLP applications for food safety and contributing to more reliable food hazard detection.

**摘要(中文)**:
> 食品危害检测（SemEval-2025 任务 9）对从社交媒体和监管机构网站等网络来源收集的食品事件报告进行了可解释的分类，以支持及时缓解公共卫生和经济风险。由于高度不平衡的长尾标签分布以及对透明、可靠的人工智能的需求，这项任务变得复杂。我们提出了一种强大的知识增强数据方法，它将检索增强生成 (RAG) 与 PubMed API 中的特定领域知识相集成，以丰富和平衡训练数据。我们的方法利用特定领域的知识来扩展数据集并管理高质量的数据，从而增强整体数据的完整性。我们假设知识增强数据可以提高主要评估指标 Macro-F1 分数。我们的方法在这两个子任务中均获得了前二名，证明了其在推进食品安全 NLP 应用和促进更可靠的食品危害检测方面的有效性。

---

## 251. TabaQAatSemEval-2025 Task 8: Column Augmented Generation for Question Answering over Tabular Data

**类别**: `Workshop-SemEval`

**作者**: Ekaterina Antropova, Egor Kratkov, Roman Derunets, Margarita Trofimova, Ivan Bondarenko, Alexander Panchenko, Vasily Konovalov, Maksim Savkin

**ID**: 2025.semeval-1.126

**摘要(英文)**:
> The DataBench shared task in the SemEval-2025 competition aims to tackle the problem of QA from data in tables. Given the diversity of the structure of tables, there are different approaches to retrieving the answer. Although Retrieval-Augmented Generation (RAG) is a viable solution, extracting relevant information from tables remains challenging. In addition, the table can be prohibitively large for direct integration into the LLM context. In this paper, we address QA over tabular data first by identifying relevant columns that might contain the answers, then the LLM generates answers by providing the context of the relevant columns, and finally, the LLM refines its answers. This approach secured us 7th place in the DataBench lite category.

**摘要(中文)**:
> SemEval-2025 竞赛中的 DataBench 共享任务旨在解决表中数据的 QA 问题。鉴于表结构的多样性，有不同的方法来检索答案。尽管检索增强生成（RAG）是一种可行的解决方案，但从表中提取相关信息仍然具有挑战性。此外，该表可能太大，无法直接集成到 LLM 环境中。在本文中，我们首先通过识别可能包含答案的相关列来解决表格数据的质量保证问题，然后大语言模型通过提供相关列的上下文来生成答案，最后，大语言模型完善其答案。这种方法使我们在 DataBench lite 类别中获得第七名。

---

## 252. FENJIatSemEval-2025 Task 3: Retrieval-Augmented Generation and Hallucination Span Detection

**类别**: `Workshop-SemEval`

**作者**: Flor Alberts, Ivo Bruinier, Nathalie Palm, Justin Paetzelt, Erik Varecha

**ID**: 2025.semeval-1.151

**摘要(英文)**:
> Large Language Models (LLMs) have significantly advanced Natural Language Processing, however, ensuring the factual reliability of these models remains a challenge, as they are prone to hallucination - generating text that appears coherent but contains innacurate or unsupported information. SemEval-2025 Mu-SHROOM focused on character-level hallucination detection in 14 languages. In this task, participants were required to pinpoint hallucinated spans in text generated by multiple instruction-tuned LLMs. Our team created a system that leveraged a Retrieval-Augmented Generation (RAG) approach and prompting a FLAN-T5 model to identify hallucination spans. Despite contradicting prior literature, our approach yielded disappointing results, underperforming all the “mark-all” baselines and failing to achieve competitive scores. Notably, removing RAG improved performance. The findings highlight that while RAG holds potential for hallucination detection, its effectiveness is heavily influenced by the retrieval component’s context-awareness. Enhancing the RAG’s ability to capture more comprehensive contextual information could improve performance across languages, making it a more reliable tool for identifying hallucination spans.

**摘要(中文)**:
> 大型语言模型 (LLM) 显着先进了自然语言处理，然而，确保这些模型的事实可靠性仍然是一个挑战，因为它们很容易产生幻觉 - 生成看起来连贯但包含不准确或不受支持的信息的文本。 SemEval-2025 Mu-SHROOM 专注于 14 种语言的字符级幻觉检测。在这项任务中，参与者被要求找出由多个指令调整的大语言模型生成的文本中的幻觉跨度。我们的团队创建了一个系统，该系统利用检索增强生成 (RAG) 方法并提示 FLAN-T5 模型来识别幻觉跨度。尽管与先前的文献相矛盾，但我们的方法产生了令人失望的结果，低于所有“全部标记”基线，并且未能获得有竞争力的分数。值得注意的是，删除 RAG 提高了性能。研究结果强调，虽然 RAG 具有幻觉检测的潜力，但其有效性在很大程度上受到检索组件的上下文感知的影响。增强 RAG 捕获更全面的上下文信息的能力可以提高跨语言的性能，使其成为识别幻觉跨度的更可靠的工具。

---

## 253. NLP_CIMATatSemEval-2025 Task 3: Just AskGPTor look Inside. A prompt and Neural Networks Approach to Hallucination Detection

**类别**: `Workshop-SemEval`

**作者**: Jaime Stack - Sánchez, Miguel Alvarez - Carmona, Adrian Pastor Lopez Monroy

**ID**: 2025.semeval-1.221

**摘要(英文)**:
> This paper presents NLP_CIMAT’s participation in SemEval-2025 Task 3, which focuses on hallucination detection in large language models (LLMs) at character level across multiple languages. Hallucinations—outputs that are coherent and well-formed but contain inaccurate or fabricated information—pose significant challenges in real-world NLP applications. We explore two primary approaches: (1) a prompt-based method that leverages LLMs’ own reasoning capabilities and knowledge, with and without external knowledge through a Retrieval-Augmented Generation (RAG)-like framework, and (2) a neural network approach that utilizes the hidden states of a LLM to predict hallucinated tokens. We analyze various factors in the neural approach, such as multilingual training, informing about the language, and hidden state selection. Our findings highlight that incorporating external information, like wikipedia articles, improves hallucination detection, particularly for smaller LLMs. Moreover, our best prompt-based technique secured second place in the Spanish category, demonstrating the effectiveness of in-context learning for this task.

**摘要(中文)**:
> 本文介绍了 NLP_CIMAT 对 SemEval-2025 任务 3 的参与，该任务重点关注跨多种语言的字符级大型语言模型 (LLM) 中的幻觉检测。幻觉（连贯且格式良好但包含不准确或捏造信息的输出）在现实世界的 NLP 应用中提出了重大挑战。我们探索了两种主要方法：（1）基于提示的方法，通过类似检索增强生成（RAG）的框架，利用大语言模型自身的推理能力和知识，有或没有外部知识，以及（2）利用大语言模型的隐藏状态来预测幻觉令牌的神经网络方法。我们分析了神经方法中的各种因素，例如多语言训练、告知语言和隐藏状态选择。我们的研究结果强调，结合外部信息（如维基百科文章）可以改善幻觉检测，特别是对于规模较小的大语言模型。此外，我们最好的基于提示的技术在西班牙语类别中获得了第二名，证明了情境学习对于这项任务的有效性。

---

## 254. Team Anotheroption atSemEval-2025 Task 8: Bridging the Gap Between Open-Source and ProprietaryLLMs in TableQA

**类别**: `Workshop-SemEval`

**作者**: Nikolas Evkarpidi, Elena Tutubalina

**ID**: 2025.semeval-1.245

**摘要(英文)**:
> This paper presents a system developed for SemEval 2025 Task 8: Question Answering (QA) over tabular data. Our approach integrates several key components: text-to-SQL and text-to-Code generation modules, a self-correction mechanism, and a retrieval-augmented generation (RAG). Additionally, it includes an end-to-end (E2E) module, all orchestrated by a large language model (LLM). Through ablation studies, we analyzed the effects of different parts of our pipeline and identified the challenges that are still present in this field. During the evaluation phase of the competition, our solution achieved an accuracy of 80%, resulting in a top-13 ranking among the 38 participating teams. Our pipeline demonstrates a significant improvement in accuracy for open-source models and achieves a performance comparable to proprietary LLMs in QA tasks over tables.

**摘要(中文)**:
> 本文介绍了为 SemEval 2025 任务 8：表格数据问答 (QA) 开发的系统。我们的方法集成了几个关键组件：文本到 SQL 和文本到代码生成模块、自我纠正机制和检索增强生成 (RAG)。此外，它还包括一个端到端（E2E）模块，所有模块均由大型语言模型（LLM）编排。通过消融研究，我们分析了管道不同部分的影响，并确定了该领域仍然存在的挑战。在比赛评估阶段，我们的解决方案达到了80%的准确率，在38支参赛队伍中名列前13名。我们的管道展示了开源模型准确性的显着提高，并且在表格 QA 任务中实现了与专有 LLM 相当的性能。

---

## 255. Last Minute atSemEval-2025 Task 5:RAGSystem for Subject Tagging

**类别**: `Workshop-SemEval`

**作者**: Zahra Sarlak, Ebrahim Ansari

**ID**: 2025.semeval-1.316

**摘要(英文)**:
> Last Minute at SemEval-2025 Task 5: RAG System for Subject TaggingZahra Sarlak, Ebrahim AnsariIn this study, we explore the LLMs4Subjects shared task, which focuses on leveraging retrieval-augmented generation (RAG) to enhance subject classification in technical records from the Leibniz University’s Technical Library (TIBKAT). The challenge requires participants to recommend appropriate subject headings from the GND taxonomy while processing bibliographic data in both German and English.

**摘要(中文)**:
> SemEval-2025 任务 5 的最后一刻：用于主题标记的 RAG 系统Zahra Sarlak、Ebrahim Ansari 在这项研究中，我们探索了 LLMs4Subjects 共享任务，该任务的重点是利用检索增强生成 (RAG) 来增强莱布尼茨大学技术图书馆 (TIBKAT) 技术记录中的主题分类。该挑战要求参与者在处理德语和英语的书目数据的同时，从 GND 分类中推荐适当的主题词。

---

## 256. TableKV:KVCache Compression for In-Context Table Processing

**类别**: `Workshop-TRL`

**作者**: Giulio Corallo, Elia Faure-Rolland, Miriam Lamari, Paolo Papotti

**ID**: 2025.trl-1.13

**摘要(英文)**:
> Processing large tables provided in-context to LLMs is challenging due to token limits and information overload. While Retrieval-Augmented Generation can select relevant subsets externally, this work explores Key-Value (KV) cache compression as an alternative, applied directly to the linearized table during inference. We show that the LLM’s internal attention scores over the table context guides the retention of essential KV pairs, effectively compressing the processing context while preserving crucial relational information needed for complex queries. Experiments on Spider, WikitableQA, and QTSumm datasets validate the compression approach for in-context table processing, offering a promising path for improved table representation learning in LLMs.

**摘要(中文)**:
> 由于令牌限制和信息过载，处理在大语言模型上下文中提供的大型表具有挑战性。虽然检索增强生成可以从外部选择相关子集，但这项工作探索了键值 (KV) 缓存压缩作为替代方案，在推理过程中直接应用于线性化表。我们证明了大语言模型对表上下文的内部注意力分数指导了基本 KV 对的保留，有效地压缩了处理上下文，同时保留了复杂查询所需的关键关系信息。 Spider、WikitableQA 和 QTSumm 数据集上的实验验证了上下文表处理的压缩方法，为改进大语言模型中的表表示学习提供了一条有希望的途径。

---

## 257. Comparing Methods for Multi-Label Classification of Manipulation Techniques inUkrainian Telegram Content

**类别**: `Workshop-UNLP`

**作者**: Oleh Melnychuk

**ID**: 2025.unlp-1.5

**摘要(英文)**:
> Detecting manipulation techniques in online text is vital for combating misinformation, a task complicated by generative AI. This paper compares machine learning approaches for multi-label classification of 10 techniques in Ukrainian Telegram content (UNLP 2025 Shared Task 1). Our evaluation included TF-IDF, fine-tuned XLM-RoBERTa-Large, PEFT-LLM (Gemma, Mistral) and a RAG approach (E5 + Mistral Nemo). The fine-tuned XLM-RoBERTa-Large model, which incorporates weighted loss to address class imbalance, yielded the highest Macro F1 score (0.4346). This result surpassed the performance of TF-IDF (Macro F1 0.32-0.36), the PEFT-LLM (0.28-0.33) and RAG (0.309). Synthetic data slightly helped TF-IDF but reduced transformer model performance. The results demonstrate the strong performance of standard transformers like XLM-R when appropriately configured for this classification task.

**摘要(中文)**:
> 检测在线文本中的操纵技术对于打击错误信息至关重要，而生成人工智能使这项任务变得更加复杂。本文比较了乌克兰 Telegram 内容中 10 种技术的多标签分类机器学习方法（UNLP 2025 共享任务 1）。我们的评估包括 TF-IDF、微调 XLM-RoBERTa-Large、PEFT-LLM（Gemma、Mistral）和 RAG 方法（E5 + Mistral Nemo）。经过微调的 XLM-RoBERTa-Large 模型采用加权损失来解决类别不平衡问题，产生了最高的 Macro F1 分数 (0.4346)。这一结果超过了 TF-IDF (Macro F1 0.32-0.36)、PEFT-LLM (0.28-0.33) 和 RAG (0.309) 的表现。合成数据对 TF-IDF 略有帮助，但降低了变压器模型的性能。结果表明，当针对此分类任务进行适当配置时，XLM-R 等标准变压器具有强大的性能。

---

## 258. Wikivecs: A Fully Reproducible Vectorization of MultilingualWikipedia

**类别**: `Workshop-WikiNLP`

**作者**: Brandon Duderstadt

**ID**: 2025.wikinlp-1.1

**摘要(英文)**:
> Dense vector representations have become foundational to modern natural language processing (NLP), powering diverse workflows from semantic search and retrieval augmented generation to content comparison across languages. Although Wikipedia is one of the most comprehensive and widely used datasets in modern NLP research, it lacks a fully reproducible and permissively licensed dense vectorization.In this paper, we present Wikivecs, a fully reproducible, permissively licensed dataset containing dense vector embeddings for every article in Multilingual Wikipedia. Our pipeline leverages a fully reproducible and permissively licensed multilingual text encoder to embed Wikipedia articles into a unified vector space, making it easy to compare and analyze content across languages.Alongside these vectors, we release a two-dimensional data map derived from the vectors, enabling visualization and exploration of Multilingual Wikipedia’s content landscape.We demonstrate the utility of our dataset by identifying several content gaps between English and Russian Wikipedia.

**摘要(中文)**:
> 密集向量表示已成为现代自然语言处理 (NLP) 的基础，为从语义搜索和检索增强生成到跨语言内容比较的各种工作流程提供支持。尽管维基百科是现代 NLP 研究中最全面、使用最广泛的数据集之一，但它缺乏完全可复制且经过许可许可的密集向量化。在本文中，我们提出了 Wikivecs，这是一个完全可再现、经过许可许可的数据集，其中包含多语言维基百科中每篇文章的密集向量嵌入。我们的管道利用完全可复制且经过许可的多语言文本编码器将维基百科文章嵌入到统一的向量空间中，从而可以轻松比较和分析跨语言的内容。除了这些向量之外，我们还发布了从向量派生的二维数据图，从而实现了多语言维基百科内容景观的可视化和探索。我们通过识别英语和俄语维基百科之间的几个内容差距来展示我们的数据集的实用性。

---

## 259. RAGand Recall: Multilingual Hate Speech Detection with Semantic Memory

**类别**: `Workshop-WOAH`

**作者**: Khouloud Mnassri, Reza Farahbakhsh, Noel Crespi

**ID**: 2025.woah-1.20

**摘要(英文)**:
> Multilingual hate speech detection presents a challenging task, particularly in limited-resource contexts when performance is affected by cultural nuances and data scarcity. Fine-tuned models are often unable to generalize beyond their training, which limits their efficiency, especially for low-resource languages. In this paper, we introduce HS-RAG, a retrieval-augmented generation (RAG) system that directly leverages knowledge, in English, French, and Arabic, from Hate Speech Superset (publicly available dataset) and Wikipedia to Large Language Models (LLMs). To further enhance robustness, we introduce HS-MemRAG, a memory-augmented extension that integrates a semantic cache. This model reduces redundant retrieval while improving contextual relevance and hate speech detection among the three languages.

**摘要(中文)**:
> 多语言仇恨语音检测是一项具有挑战性的任务，特别是在资源有限的情况下，当性能受到文化差异和数据稀缺的影响时。经过微调的模型通常无法泛化到其训练之外，这限制了它们的效率，特别是对于资源匮乏的语言。在本文中，我们介绍了 HS-RAG，这是一种检索增强生成 (RAG) 系统，它直接利用英语、法语和阿拉伯语的知识，从仇恨言论超集（公开数据集）和维基百科到大型语言模型 (LLM)。为了进一步增强鲁棒性，我们引入了 HS-MemRAG，这是一种集成语义缓存的内存增强扩展。该模型减少了冗余检索，同时提高了三种语言之间的上下文相关性和仇恨言论检测。

## 知识检索 (10 篇)

---

## 260. Disentangling Memory and Reasoning Ability in Large Language Models

**类别**: `主会-长文`

**作者**: Mingyu Jin, Weidi Luo, Sitao Cheng, Xinyi Wang, Wenyue Hua, Ruixiang Tang, William Yang Wang, Yongfeng Zhang

**ID**: 2025.acl-long.84

**摘要(英文)**:
> Large Language Models (LLMs) have demonstrated strong performance in handling complex tasks that require both extensive knowledge and reasoning abilities. However, the existing LLM inference pipeline operates as an opaque process without explicit separation between knowledge retrieval and reasoning steps, making the model’s decision-making process unclear and disorganized. Recent research has shown that this ambiguity will lead to issues such as knowledge forgetting, which significantly impact the reliability of LLMs. In this paper, we propose a novel language model inference paradigm that decomposes the complex inference process into two distinct and clear actions:(1) memory recall: which retrieves relevant knowledge in LLM, and(2) reasoning: which performs reasoning steps based on the recalled knowledge. To facilitate this decomposition, we introduce two special tokens memory and reason, guiding the model to distinguish between steps that require knowledge retrieval and those that involve reasoning. Our experiment results show that this decomposition not only improves LLMs’ performance among utility benchmarks but also enhances interpretability during the inference process, enabling users to identify sources of error and refine model responses effectively. The code is available at: https://github.com/MingyuJ666/Disentangling-Memory-and-Reasoning.

**摘要(中文)**:
> 大型语言模型 (LLM) 在处理需要广泛知识和推理能力的复杂任务方面表现出了强大的性能。然而，现有的LLM推理流程是一个不透明的过程，知识检索和推理步骤之间没有明确的分离，使得模型的决策过程不清晰且无组织。最近的研究表明，这种模糊性会导致知识遗忘等问题，从而严重影响大语言模型的可靠性。在本文中，我们提出了一种新颖的语言模型推理范式，将复杂的推理过程分解为两个不同且清晰的动作：（1）记忆回忆：检索大语言模型中的相关知识；（2）推理：根据回忆的知识执行推理步骤。为了促进这种分解，我们引入了两个特殊的标记：记忆和推理，指导模型区分需要知识检索的步骤和涉及推理的步骤。我们的实验结果表明，这种分解不仅提高了大语言模型在效用基准中的性能，而且还增强了推理过程中的可解释性，使用户能够有效地识别错误来源并细化模型响应。代码位于：https://github.com/MingyuJ666/Disentangling-Memory-and-Reasoning。

---

## 261. MEDDxAgent: A Unified Modular Agent Framework for Explainable Automatic Differential Diagnosis

**类别**: `主会-长文`

**作者**: Daniel Philip Rose, Chia-Chien Hung, Marco Lepri, Israa Alqassem, Kiril Gashteovski, Carolin Lawrence

**ID**: 2025.acl-long.677

**摘要(英文)**:
> Differential Diagnosis (DDx) is a fundamental yet complex aspect of clinical decision-making, in which physicians iteratively refine a ranked list of possible diseases based on symptoms, antecedents, and medical knowledge. While recent advances in large language models (LLMs) have shown promise in supporting DDx, existing approaches face key limitations, including single-dataset evaluations, isolated optimization of components, unrealistic assumptions about complete patient profiles, and single-attempt diagnosis. We introduce a Modular Explainable DDx Agent (MEDDxAgent) framework designed for interactive DDx, where diagnostic reasoning evolves through iterative learning, rather than assuming a complete patient profile is accessible. MEDDxAgent integrates three modular components: (1) an orchestrator (DDxDriver), (2) a history taking simulator, and (3) two specialized agents for knowledge retrieval and diagnosis strategy. To ensure robust evaluation, we introduce a comprehensive DDx benchmark covering respiratory, skin, and rare diseases. We analyze single-turn diagnostic approaches and demonstrate the importance of iterative refinement when patient profiles are not available at the outset. Our broad evaluation demonstrates that MEDDxAgent achieves over 10% accuracy improvements in interactive DDx across both large and small LLMs, while offering critical explainability into its diagnostic reasoning process.

**摘要(中文)**:
> 鉴别诊断 (DDx) 是临床决策的一个基本但复杂的方面，医生根据症状、前因和医学知识反复完善可能疾病的排名列表。虽然大型语言模型 (LLM) 的最新进展在支持 DDx 方面显示出希望，但现有方法面临关键局限性，包括单一数据集评估、组件的孤立优化、对完整患者资料的不切实际的假设以及单次尝试诊断。我们引入了专为交互式 DDx 设计的模块化可解释 DDx 代理 (MEDDxAgent) 框架，其中诊断推理通过迭代学习不断发展，而不是假设可以访问完整的患者资料。 MEDDxAgent 集成了三个模块化组件：(1) 协调器 (DDxDriver)、(2) 历史记录模拟器、(3) 两个用于知识检索和诊断策略的专用代理。为了确保稳健的评估，我们引入了涵盖呼吸系统疾病、皮肤疾病和罕见疾病的全面 DDx 基准。我们分析单轮诊断方法，并证明当患者资料一开始不可用时迭代细化的重要性。我们的广泛评估表明，MEDDxAgent 在大型和小型大语言模型的交互式 DDx 中实现了超过 10% 的准确性改进，同时为其诊断推理过程提供了关键的可解释性。

---

## 262. RADAR: Enhancing Radiology Report Generation with Supplementary Knowledge Injection

**类别**: `主会-长文`

**作者**: Wenjun Hou, Yi Cheng, Kaishuai Xu, Heng Li, Yan Hu, Wenjie Li, Jiang Liu

**ID**: 2025.acl-long.1279

**摘要(英文)**:
> Large language models (LLMs) have demonstrated remarkable capabilities in various domains, including radiology report generation. Previous approaches have attempted to utilize multimodal LLMs for this task, enhancing their performance through the integration of domain-specific knowledge retrieval. However, these approaches often overlook the knowledge already embedded within the LLMs, leading to redundant information integration. To address this limitation, we propose Radar, a framework for enhancing radiology report generation with supplementary knowledge injection. Radar improves report generation by systematically leveraging both the internal knowledge of an LLM and externally retrieved information. Specifically, it first extracts the model’s acquired knowledge that aligns with expert image-based classification outputs. It then retrieves relevant supplementary knowledge to further enrich this information. Finally, by aggregating both sources, Radar generates more accurate and informative radiology reports. Extensive experiments on MIMIC-CXR, CheXpert-Plus, and IU X-ray demonstrate that our model outperforms state-of-the-art LLMs in both language quality and clinical accuracy

**摘要(中文)**:
> 大型语言模型 (LLM) 在各个领域（包括放射学报告生成）展现了卓越的功能。以前的方法尝试利用多模式大语言模型来完成这项任务，通过集成特定领域的知识检索来提高其性能。然而，这些方法往往忽视了大语言模型中已经嵌入的知识，导致冗余的信息集成。为了解决这一限制，我们提出了 Radar，这是一个通过补充知识注入来增强放射学报告生成的框架。 Radar 通过系统地利用大语言模型的内部知识和外部检索的信息来改进报告生成。具体来说，它首先提取模型获得的与专家基于图像的分类输出相一致的知识。然后它检索相关的补充知识以进一步丰富该信息。最后，通过汇总两个来源，雷达生成更准确、信息更丰富的放射学报告。 MIMIC-CXR、CheXpert-Plus 和 IU X-ray 的大量实验表明，我们的模型在语言质量和临床准确性方面均优于最先进的大语言模型

---

## 263. User Behavior Prediction as a Generic, Robust, Scalable, and Low-Cost Evaluation Strategy for Estimating Generalization inLLMs

**类别**: `Findings`

**作者**: Sougata Saha, Monojit Choudhury

**ID**: 2025.findings-acl.576

**摘要(英文)**:
> Measuring the generalization ability of Large Language Models (LLMs) is challenging due to data contamination. As models grow and computation becomes cheaper, ensuring tasks and test cases are unseen during training phases will become nearly impossible. We argue that knowledge-retrieval and reasoning tasks are not ideal for measuring generalization, as LLMs are not trained for specific tasks. Instead, we propose user behavior prediction, also a key aspect of personalization, as a theoretically sound, scalable, and robust alternative. We introduce a novel framework for this approach and test it on movie and music recommendation datasets for GPT-4o, GPT-4o-mini, and Llama-3.1-8B-Instruct. Results align with our framework’s predictions, showing GPT-4o outperforms GPT-4o-mini and Llama, though all models have much room for improvement, especially Llama.

**摘要(中文)**:
> 由于数据污染，衡量大型语言模型 (LLM) 的泛化能力具有挑战性。随着模型的增长和计算变得越来越便宜，确保任务和测试用例在训练阶段不可见将变得几乎不可能。我们认为，知识检索和推理任务对于衡量泛化能力并不理想，因为大语言模型没有接受过针对特定任务的培训。相反，我们提出用户行为预测，这也是个性化的一个关键方面，作为理论上合理、可扩展且稳健的替代方案。我们为这种方法引入了一个新颖的框架，并在 GPT-4o、GPT-4o-mini 和 Llama-3.1-8B-Instruct 的电影和音乐推荐数据集上对其进行了测试。结果与我们框架的预测一致，显示 GPT-4o 优于 GPT-4o-mini 和 Llama，尽管所有模型都有很大的改进空间，尤其是 Llama。

---

## 264. LLM-Enhanced Query Generation and Retrieval Preservation for Task-Oriented Dialogue

**类别**: `Findings`

**作者**: Jiale Chen, Xuelian Dong, Wenxiu Xie, Ru Peng, Kun Zeng, Tianyong Hao

**ID**: 2025.findings-acl.737

**摘要(英文)**:
> Knowledge retrieval and response generation are fundamental to task-oriented dialogue systems. However, dialogue context frequently contains noisy or irrelevant information, leading to sub-optimal result in knowledge retrieval. One possible approach to retrieving knowledge is to manually annotate standard queries for each dialogue. Yet, this approach is hindered by the challenge of data scarcity, as human annotation is costly. To solve the challenge, we propose an LLM-enhanced model of query-guided knowledge retrieval for task-oriented dialogue. It generates high-quality queries for knowledge retrieval in task-oriented dialogue solely using low-resource annotated queries. To strengthen the performance correlation between response generation and knowledge retrieval, we propose a retrieval preservation mechanism by further selecting the most relevant knowledge from retrieved top-Krecords and explicitly incorporating these as prompts to guide a generator in response generation. Experiments on three standard benchmarks demonstrate that our model and mechanism outperform previous state-of-the-art by 3.26% on average with two widely used evaluation metrics.

**摘要(中文)**:
> 知识检索和响应生成是面向任务的对话系统的基础。然而，对话上下文经常包含噪声或不相关的信息，导致知识检索的结果不理想。检索知识的一种可能方法是手动注释每个对话的标准查询。然而，这种方法受到数据稀缺挑战的阻碍，因为人工注释成本高昂。为了解决这一挑战，我们提出了一种用于面向任务的对话的查询引导知识检索的大语言模型增强模型。它仅使用低资源带注释的查询来生成高质量的查询，以在面向任务的对话中进行知识检索。为了加强响应生成和知识检索之间的性能相关性，我们提出了一种检索保存机制，通过进一步从检索到的顶级 K 记录中选择最相关的知识，并明确地将这些知识作为提示来指导生成器生成响应。对三个标准基准的实验表明，我们的模型和机制在两个广泛使用的评估指标上平均比之前最先进的技术高出 3.26%。

---

## 265. Change Entity-guided Heterogeneous Representation Disentangling for Change Captioning

**类别**: `Findings`

**作者**: Yi Li, Yunbin Tu, Liang Li, Li Su, Qingming Huang

**ID**: 2025.findings-acl.876

**摘要(英文)**:
> Change captioning aims to describe differences between a pair of images using natural language. However, learning effective difference representations is highly challenging due to distractors such as illumination and viewpoint changes. To address this, we propose a change-entity-guided disentanglement network that explicitly learns difference representations while mitigating the impact of distractors. Specifically, we first design a change entity retrieval module to identify key objects involved in the change from a textual perspective. Then, we introduce a difference representation enhancement module that strengthens the learned features, disentangling genuine differences from background variations. To further refine the generation process, we incorporate a gated Transformer decoder, which dynamically integrates both visual difference and textual change-entity information. Extensive experiments on CLEVR-Change, CLEVR-DC and Spot-the-Diff datasets demonstrate that our method outperforms existing approaches, achieving state-of-the-art performance. The code is available at https://github.com/yili-19/CHEER

**摘要(中文)**:
> 更改字幕旨在使用自然语言描述一对图像之间的差异。然而，由于光照和视点变化等干扰因素，学习有效的差异表示非常具有挑战性。为了解决这个问题，我们提出了一种变化实体引导的解缠网络，它可以明确地学习差异表示，同时减轻干扰因素的影响。具体来说，我们首先设计一个变更实体检索模块，从文本角度识别变更涉及的关键对象。然后，我们引入了一个差异表示增强模块，该模块可以增强学习到的特征，从而将真正的差异与背景变化分开。为了进一步完善生成过程，我们采用了门控 Transformer 解码器，它动态集成视觉差异和文本变化实体信息。对 CLEVR-Change、CLEVR-DC 和 Spot-the-Diff 数据集的大量实验表明，我们的方法优于现有方法，实现了最先进的性能。代码可在 https://github.com/yili-19/CHEER 获取

---

## 266. Entriever: Energy-based Retriever for Knowledge-Grounded Dialog Systems

**类别**: `Findings`

**作者**: Yucheng Cai, Ke Li, Yi Huang, Junlan Feng, Zhijian Ou

**ID**: 2025.findings-acl.1105

**摘要(英文)**:
> The retriever, which retrieves relevant knowledge pieces from a knowledge base given a context, is an important component in many natural language processing (NLP) tasks. Retrievers have been introduced in knowledge-grounded dialog systems to improve knowledge acquisition. In knowledge-grounded dialog systems, when conditioning on a given context, there may be multiple relevant and correlated knowledge pieces. However, knowledge pieces are usually assumed to be conditionally independent in current retriever models. To address this issue, we propose Entriever, an energy-based retriever. The Entriever directly models the candidate retrieval results as a whole instead of modeling the knowledge pieces separately, with the relevance score defined by an energy function. We explore various architectures of energy functions and different training methods for Entriever, and show that Entriever substantially outperforms the strong cross-encoder baseline in knowledge retrieval tasks. Furthermore, we show that in semi-supervised training of knowledge-grounded dialog systems, Entriever enables the effective scoring of retrieved knowledge pieces and leads to a significant improvement in the end-to-end performance of the dialog system.

**摘要(中文)**:
> 检索器从给定上下文的知识库中检索相关知识片段，是许多自然语言处理（NLP）任务中的重要组成部分。检索器已被引入基于知识的对话系统中以改善知识获取。在基于知识的对话系统中，当以给定上下文为条件时，可能存在多个相关且相关的知识片段。然而，在当前的检索器模型中，知识片段通常被认为是条件独立的。为了解决这个问题，我们提出了 Entriever，一种基于能量的检索器。 Entriever 直接对候选检索结果进行整体建模，而不是单独对知识片段进行建模，相关性得分由能量函数定义。我们探索了 Entriever 的各种能量函数架构和不同的训练方法，并表明 Entriever 在知识检索任务中大大优于强大的跨编码器基线。此外，我们还表明，在基于知识的对话系统的半监督训练中，Entriever 能够对检索到的知识片段进行有效评分，并显着提高对话系统的端到端性能。

---

## 267. Dynamic Knowledge Integration for Evidence-Driven Counter-Argument Generation with Large Language Models

**类别**: `Findings`

**作者**: Anar Yeginbergen, Maite Oronoz, Rodrigo Agerri

**ID**: 2025.findings-acl.1161

**摘要(英文)**:
> This paper investigates the role of dynamic external knowledge integration in improving counter-argument generation using Large Language Models (LLMs). While LLMs have shown promise in argumentative tasks, their tendency to generate lengthy, potentially non-factual responses highlights the need for more controlled and evidence-based approaches. We introduce a reconstructed and manually curated dataset of argument and counter-argument pairs specifically designed to balance argumentative complexity with evaluative feasibility. We also propose a new LLM-as-a-Judge evaluation methodology that shows a stronger correlation with human judgments compared to traditional reference-based metrics. Our experimental results demonstrate that integrating dynamic external knowledge from the web significantly improves the quality of generated counter-arguments, particularly in terms of relatedness, persuasiveness, and factuality. The findings suggest that combining LLMs with real-time external knowledge retrieval offers a promising direction for developing more effective and reliable counter-argumentation systems. Data and code are publicly available: https://github.com/anaryegen/ counter-argument-generation

**摘要(中文)**:
> 本文研究了动态外部知识整合在使用大型语言模型 (LLM) 改进反驳生成中的作用。虽然大语言模型在辩论任务中表现出了希望，但他们倾向于产生冗长的、可能不符合事实的答案，这凸显了对更加受控和基于证据的方法的需要。我们引入了一个重建和手动管理的论点和反论点对数据集，专门设计用于平衡论证复杂性与评估可行性。我们还提出了一种新的大语言模型作为法官评估方法，与传统的基于参考的指标相比，该方法与人类判断具有更强的相关性。我们的实验结果表明，整合来自网络的动态外部知识可以显着提高生成的反论点的质量，特别是在相关性、说服力和事实性方面。研究结果表明，将大语言模型与实时外部知识检索相结合，为开发更有效、更可靠的反论证系统提供了一个有希望的方向。数据和代码公开：https://github.com/anaryegen/counter-argument- Generation

---

## 268. Components of Creativity: Language Model-based Predictors for Clustering and Switching in Verbal Fluency

**类别**: `Workshop-CoNLL`

**作者**: Sina Zarrieß, Simeon Junker, Judith Sieker, Özge Alacam

**ID**: 2025.conll-1.15

**摘要(英文)**:
> Verbal fluency is an experimental paradigm used to examine human knowledge retrieval, cognitive performance and creative abilities. This work investigates the psychometric capacities of LMs in this task. We focus on switching and clustering patterns and seek evidence to substantiate them as two distinct and separable components of lexical retrieval processes in LMs.We prompt different transformer-based LMs with verbal fluency items and ask whether metrics derived from the language models’ prediction probabilities or internal attention distributions offer reliable predictors of switching/clustering behaviors in verbal fluency. We find that token probabilities, but especially attention-based metrics have strong statistical power when separating between cases of switching and clustering, in line with prior research on human cognition.

**摘要(中文)**:
> 语言流畅性是一种用于检验人类知识检索、认知表现和创造力的实验范式。这项工作调查了 LM 在此任务中的心理测量能力。我们专注于切换和聚类模式，并寻求证据来证实它们是 LM 中词汇检索过程的两个不同且可分离的组成部分。我们用言语流畅性项目提示不同的基于 Transformer 的 LM，并询问从语言模型的预测概率或内部注意力分布得出的指标是否可以提供言语流畅性中切换/聚类行为的可靠预测因子。我们发现，在区分切换和聚类的情况时，令牌概率，尤其是基于注意力的度量具有强大的统计能力，这与之前对人类认知的研究一致。

---

## 269. VerbaNexAIatSemEval-2025 Task 3: Fact Retrieval withGoogle Snippets forLLMContext Filtering to identify Hallucinations

**类别**: `Workshop-SemEval`

**作者**: Anderson Morillo, Edwin Puertas, Juan Carlos Martinez Santos

**ID**: 2025.semeval-1.202

**摘要(英文)**:
> Thefirst approach leverages advanced LLMs, employing a chain-of-thought prompting strategywith one-shot learning and Google snippets forcontext retrieval, demonstrating superior performance. The second approach utilizes traditional NLP analysis techniques, including semantic ranking, token-level extraction, and rigorous data cleaning, to identify hallucinations

**摘要(中文)**:
> 第一种方法利用先进的大语言模型，采用思维链提示策略，通过一次性学习和谷歌片段进行上下文检索，展示出卓越的性能。第二种方法利用传统的 NLP 分析技术，包括语义排序、标记级提取和严格的数据清理来识别幻觉

