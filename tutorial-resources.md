# 计算神经科学：资源与文献索引

本篇阅读索引由 AI 辅助撰写。

本文件用于查询课程、许可证和完整书目。第一次学习请先看同目录的[逐步导读](计算神经科学_开放资源与分层阅读清单.md)，按指定小节和问题进入外部资源。

核查日期：2026-09-08。面向有不同生物学、数学和编程基础的初学者，帮助其完成一个可解释、可复现的小项目。

这里整理 7 项补充资源、3 门主课的明确入口，以及 16 篇分层文献。推荐范围和练习仅供学习参考，不代表课程官方要求。

## 1. 如何使用这份索引

主课只选一门。先补与自身背景不匹配的先修，再完成一个小练习，随后根据项目问题进入文献。单神经元模型、神经数据分析、NeuroAI 和 BCI 的选修资源无需全部学习。

## 2. 主课选择

| 主课 | 适用情况 | 明确入口与使用范围 |
|---|---|---|
| Neuromatch Computational Neuroscience | 默认自学主线；希望同时接触模型与数据分析 | [在线教程](https://compneuro.neuromatch.io/tutorials/intro.html)；先做 Python、线性代数、微积分和概率统计先修，再进入 modeling、模型拟合和方向单元。公开自学材料与正式带助教项目申请分开。 |
| MIT 9.40 Introduction to Neural Computation | 喜欢完整大学课程、讲课视频和习题 | [官方 OCW](https://ocw.mit.edu/courses/9-40-introduction-to-neural-computation-spring-2018/)；有讲义、视频和题集。 |
| Stanford NEPR208 | 希望沿具体问题和较紧凑的课程材料学习 | [课程页](https://druckmann-lab.github.io/nepr208/)与[公开作业](https://druckmann-lab.github.io/nepr208/assignments/)；当前页面为 Spring 2026，作业覆盖感知机、神经编码、学习与记忆。 |

三门课是替代选择。无需以完成所有课程作为进入小项目的条件。

## 3. 补充资源：优先级、入口与交付物

免费阅读、公开源码与开源许可分别标注。在线书可免费阅读，并不自动获得复制或再分发许可；软件许可与其使用的数据许可也分别适用。

### R01 · Neuroscience Online（UTHealth McGovern Medical School）

**定位：**共同核心；计算背景读者优先。**入口：**[官方资源](https://nba.uth.tmc.edu/neuroscience/toc.htm)。

**先修与范围：**高中生物及基本细胞概念；不需要编程。Section 1 的 Introduction、Chapter 1 Resting Potentials & Action Potentials、Chapter 2 Ionic Mechanisms of Action Potentials、Chapter 6 Synaptic Transmission in the Central Nervous System、Chapter 7 Synaptic Plasticity。其余按方向选读。

**建议交付物：**一页概念图：膜电位→动作电位→突触传递→可塑性；逐项说明 LIF 模型保留和省略了什么生理现象。

**投入：**4—6 小时（编者估计，仅上述范围）；阅读；无 GPU 需求。

**开放程度：**免费在线教材；官网称 open-access，未核实可自由再分发的开放许可，不称开源教材。

### R02 · Neuronal Dynamics 在线书＋配套 Python Exercises

**定位：**共同核心；建模入门优先。**入口：**[官方资源](https://neuronaldynamics-exercises.readthedocs.io/en/latest/)。

**先修与范围：**Python/NumPy、微积分、常微分方程基本概念；可从 LIF 的一阶线性方程开始。先读第 1 章 Introduction: Neurons and Mathematics、第 2 章的离子电流基础及第 3 章突触；完成练习 1 的最小输入电流、f–I 曲线与不应期。第 5 章及 AdEx、Brunel 网络留作建模方向进阶。

**建议交付物：**可复现 notebook：膜电位曲线＋f–I 曲线；比较不应期/输入电流变化与模型局限，并报告时间步长。

**投入：**6—10 小时（编者估计，仅 LIF 入门）；所建议的小规模仿真一般可用 CPU；尚未执行环境安装或示例。

**开放程度：**书免费在线阅读但保留版权；练习代码为 GNU GPL 2.0 开源软件。

在线书：[目录](https://neuronaldynamics.epfl.ch/online/index.html)；指定练习：[LIF](https://neuronaldynamics-exercises.readthedocs.io/en/latest/exercises/leaky-integrate-and-fire.html)。配套练习文档较旧，运行前需检查并固定依赖版本。

### R03 · Brian2 官方交互教程

**定位：**建模方向选修；配合 R02，不增加一门完整必修课。**入口：**[官方资源](https://brian2.readthedocs.io/en/stable/resources/tutorials/index.html)。

**先修与范围：**Python、简单微分方程、神经元/突触基本概念。Introduction to Brian part 1: Neurons 和 part 2: Synapses；需要理解运行控制时再学 part 3: Simulations。

**建议交付物：**一个从单神经元到少量相连神经元的 notebook；展示电位和 raster plot，记录模型方程、参数单位、随机种子及连接规则。

**投入：**4—6 小时（编者估计）；小规模示例 CPU 即可；在线 notebook 服务可受可用性限制，官方也提供本地下载。

**开放程度：**开源仿真软件，CeCILL 2.1 许可；免费教程。

### R04 · MNE-Python 官方 MEG/EEG 教程

**定位：**EEG/MEG 或 BCI 方向。**入口：**[官方资源](https://mne.tools/stable/auto_tutorials/intro/10_overview.html)。

**先修与范围：**Python/NumPy、采样和频谱基本概念、EEG/MEG 信号与事件标记基本认识。Overview of MEG/EEG analysis → Raw/Epochs/Evoked → 坏道/伪迹处理与滤波 → ERP 或时频分析，先选一条完整分析路径。源定位和复杂统计留到后续。

**建议交付物：**sample 数据的一个条件对比：预处理说明＋ERP/ERF 或功率谱图；比较一个合理预处理选择对结果的影响，报告排除的 trial 数。

**投入：**4—8 小时（编者估计）；入门传感器分析通常 CPU 即可；示例需下载数据，下载前确认数据体积并限定子集。

**开放程度：**开源软件，BSD 3-Clause；免费教程与可下载示例。

MNE 主要对应 EEG/MEG 数据路线；侵入式脉冲语音 BCI 应按自己的数据类型选择工具。

### R05 · Nilearn 官方 fMRI 入门与 Haxby 解码示例

**定位：**fMRI/NeuroAI/解码方向。**入口：**[官方资源](https://nilearn.github.io/stable/auto_examples/02_decoding/plot_haxby_anova_svm.html)。

**先修与范围：**Python、线性代数、线性模型/交叉验证；理解 BOLD、run、voxel 的含义。先做图像读取与可视化或单被试 GLM，再做 Decoding with ANOVA + SVM: face vs house in the Haxby dataset。

**建议交付物：**一次 face/house 解码：按 run 留出验证、报告每折准确率和简单基线，说明特征选择必须留在训练流程内，讨论分类准确率不能直接证明脑机制。

**投入：**6—10 小时（编者估计）；选定单被试示例通常 CPU 可运行；需要数据下载与一定内存，未实测耗时。

**开放程度：**开源软件，BSD 3-Clause；网站明确代码和文档采用 BSD 许可。

### R06 · AllenSDK Visual Coding Neuropixels Quick Start

**定位：**神经数据分析方向；从单 session 的脉冲记录起步。**入口：**[官方资源](https://allensdk.readthedocs.io/en/latest/_static/examples/nb/ecephys_quickstart.html)。

**先修与范围：**Python/NumPy/pandas、spike train、stimulus 与 trial、PSTH 基本概念。从 quickstart 选一个 session，浏览 session/unit 元数据，再完成 peristimulus time histograms。image classification 留作后续。

**建议交付物：**单 session 的 raster＋PSTH；记录 session ID、unit 质量筛选、bin width、刺激事件和试次数，并说明 PSTH 的误差/变异。

**投入：**6—10 小时（编者估计，受数据获取影响）；CPU；Allen 数据较大，先选定 session 和下载范围，无需下载全库。

**开放程度：**公开源码及免费教程；Allen Institute Software License 含商业再分发限制，不笼统标作标准开源许可；数据许可另查。

### R07 · DANDI：Streaming and interacting with NWB data

**定位：**数据复现方向选修；练习 NWB 数据读取。**入口：**[官方资源](https://docs.dandiarchive.org/example-notebooks/tutorials/bcm_2024/analysis-demo/)。

**先修与范围：**Python、NWB 基本结构、spike train；理解数据集版本与元数据。只完成官方 notebook 的 lazy loading → slicing → single unit data，之后选做空间调谐曲线。

**建议交付物：**读取一个已公开 Dandiset 的有限数据片段，绘制一个 unit 的 spikes 或调谐曲线；记录 Dandiset ID、版本/DOI、资产路径、单位和许可。

**投入：**2—4 小时（编者估计，仅读取子集）；CPU＋网络；流式读取有助于避免全量下载，本轮未实际执行 notebook。

**开放程度：**免费开放数据平台；文档 CC-BY 4.0；Dandiset 数据可选 CC-BY 4.0 或 CC0，应记录所用数据集的具体许可。

这里具体练习 NWB 数据读取；BIDS 是另一项规范，按项目的数据模态另行学习。

## 4. 文献从哪里开始

文献按当前问题选读，经典论文不按年代顺序一律前置。尤其是 Hodgkin–Huxley 原文，应在现代教材和 LIF 练习之后作为历史进阶阅读。下面的箭头表示建议顺序，不表示必须全文精读所有条目。

| 路线 | 建议阅读顺序 | 连接的实践 |
|---|---|---|
| 科学判断与结果验证 | [Kriegeskorte et al. (2009)](https://doi.org/10.1038/nn.2303)；项目结束后讨论 [Jonas & Kording (2017)](https://doi.org/10.1371/journal.pcbi.1005268) | 用无效应的模拟数据检查选择偏差；写出项目结论的证据与替代解释 |
| 神经元模型 | LIF 教材/练习 → [Izhikevich (2003)](https://doi.org/10.1109/TNN.2003.820440) → [Hodgkin & Huxley (1952)](https://doi.org/10.1113/jphysiol.1952.sp004764)（选读） | R02/R03，比较模型保留的现象和忽略的机制 |
| 神经编码与群体数据 | [Schwartz et al. (2006)](https://doi.org/10.1167/6.4.13)（编码）或 [Cunningham & Yu (2014)](https://doi.org/10.1038/nn.3776)（群体分析） | 模拟感受野估计，或 Allen 单 session 的 PSTH/PCA |
| 群体动力学 | [Cunningham & Yu (2014)](https://doi.org/10.1038/nn.3776) → [Vyas et al. (2020)](https://doi.org/10.1146/annurev-neuro-092619-094115) → [Sussillo & Barak (2013)](https://doi.org/10.1162/NECO_a_00409)（进阶） | 二维相图、固定点和局部线性化；再进入小 RNN |
| NeuroAI/表征 | [Richards et al. (2019)](https://doi.org/10.1038/s41593-019-0520-2) → [Kriegeskorte et al. (2008)](https://doi.org/10.3389/neuro.06.004.2008) → [Yang et al. (2019)](https://doi.org/10.1038/s41593-018-0310-2)（进阶） | 模拟数据的 RDM，再分析预训练 RNN 的任务表征 |
| 学习与 BCI | [Schultz et al. (1997)](https://doi.org/10.1126/science.275.5306.1593)（学习概念）→ [Sadtler et al. (2014)](https://doi.org/10.1038/nature13665)；语音方向继续 [Willett et al. (2023)](https://doi.org/10.1038/s41586-023-06377-x) | TD 预测误差演示、流形约束概念演示、语音解码离线评估 |
| 任何解码项目之前 | [Varoquaux et al. (2017)](https://doi.org/10.1016/j.neuroimage.2016.10.038)，结合 [Kriegeskorte et al. (2009)](https://doi.org/10.1038/nn.2303) | 明确试次/session/被试层级；调参与特征选择留在训练流程中 |

Abbott (2008) 可作开篇理论导读。若暂时无法打开其免费全文，可先用原清单中 Marr、Dayan & Abbott 的导读与课程建模单元起步。

## 5. 文献卡片（16 篇）

每条列出规范引用、建议阅读问题、练习及全文状态。练习多数是为教学设计的概念实验，并非论文官方代码或原实验复现；具体有公开配套代码的条目另行标注。所有完整作者已写入同目录 references.bib，可导入 Zotero 等文献管理器。

### P01 · Abbott (2008)

**[Theoretical Neuroscience Rising](https://doi.org/10.1016/j.neuron.2008.10.019)**. *Neuron*, 60(3), 489-495. DOI: `10.1016/j.neuron.2008.10.019`。

**定位：**选读（开篇导读）；入门。

**先修：**基础神经科学术语；无需先掌握全部推导。

**带着这个问题读：**一个理论模型除了拟合数据，还应产生什么可检验的预测？

**读后任务：**选课程中的一个模型，用半页写清研究问题、模型假设、预测及可能证伪它的观察。

**获取：**[免费全文候选入口（本次未直接验证成功）](https://www.cell.com/article/S0896627308008921/pdf)。出版方免费全文被 Europe PMC 与 OpenAlex 收录；本次自动访问返回403，免费访问可用性未完成直接验证；未发现明确开放许可。

### P02 · Kriegeskorte et al. (2009)

**[Circular analysis in systems neuroscience: the dangers of double dipping](https://doi.org/10.1038/nn.2303)**. *Nature Neuroscience*, 12(5), 535-540. DOI: `10.1038/nn.2303`。

**定位：**核心必读；入门至中级（先理解概念，再读技术论证）。

**先修：**假设检验、特征选择、独立样本的概念。

**带着这个问题读：**哪些步骤使用了待检验的效应信息？特征或ROI的选择与最终统计量是否独立？

**读后任务：**用纯噪声数据演示先筛选特征再在同一数据上评估的偏差，并与独立测试集/训练折内筛选比较。

**获取：**[免费全文/作者公开版本](https://pmc.ncbi.nlm.nih.gov/articles/PMC2841687/)。PMC免费作者稿全文；未据此推断开放再利用许可。

### P03 · Izhikevich (2003)

**[Simple model of spiking neurons](https://doi.org/10.1109/TNN.2003.820440)**. *IEEE Transactions on Neural Networks*, 14(6), 1569-1572. DOI: `10.1109/TNN.2003.820440`。

**定位：**核心选读（模型方向必读；在LIF练习之后）；中级。

**先修：**LIF模型、微分方程、基础Python。

**带着这个问题读：**一个模型能再现多种放电模式，是否足以证明它准确描述了离子通道机制？

**读后任务：**用作者示例或课程实现复现两种放电模式；报告参数、单位、时间步长，并讨论与LIF模型的差异。

**获取：**[免费全文/作者公开版本](https://www.izhikevich.org/publications/spikes.pdf)。作者主页合法免费PDF及示例入口；未据此推断代码或论文的开放许可。

**作者示例：**[论文与示例入口](https://www.izhikevich.org/publications/spikes.htm)。

### P04 · Hodgkin & Huxley (1952)

**[A quantitative description of membrane current and its application to conduction and excitation in nerve](https://doi.org/10.1113/jphysiol.1952.sp004764)**. *The Journal of Physiology*, 117(4), 500-544. DOI: `10.1113/jphysiol.1952.sp004764`。

**定位：**选读（历史进阶，放在LIF及现代教材之后）；进阶。

**先修：**膜电位、离子电流、微分方程和数值积分。

**带着这个问题读：**模型变量分别对应什么生理量？模型结构和参数与哪些实验观察相联系？

**读后任务：**先在课程现成notebook中标注变量的单位与生理意义，再比较两个刺激条件下的电位轨迹；无需从零重写整篇模型。

**获取：**[免费全文/作者公开版本](https://pmc.ncbi.nlm.nih.gov/articles/PMC1392413/)。PMC合法免费扫描全文；免费阅读不等于已确认开放再利用许可。

### P05 · Schwartz et al. (2006)

**[Spike-triggered neural characterization](https://doi.org/10.1167/6.4.13)**. *Journal of Vision*, 6(4), 484-507. DOI: `10.1167/6.4.13`。

**定位：**核心选读（编码方向必读）；中级至进阶。

**先修：**线性代数、协方差、概率、脉冲序列。

**带着这个问题读：**STA恢复了什么量？刺激统计特征和神经元非线性会如何限制结果解释？

**读后任务：**在已知感受野的模拟数据上恢复STA，在独立测试数据上评价预测；改变刺激统计后讨论恢复结果。

**获取：**[免费全文/作者公开版本](https://www.cns.nyu.edu/pub/lcv/schwartz05-reprint.pdf)。期刊论文有开放获取记录，作者机构网站可免费获取PDF；此处使用已直接验证的机构全文。

### P06 · Cunningham & Yu (2014)

**[Dimensionality reduction for large-scale neural recordings](https://doi.org/10.1038/nn.3776)**. *Nature Neuroscience*, 17(11), 1500-1509. DOI: `10.1038/nn.3776`。

**定位：**核心必读；中级。

**先修：**线性代数、PCA、基础概率统计。

**带着这个问题读：**PCA中的低维结构是否足以支持神经系统存在某种机制？哪些结构可能来自预处理或任务设计？

**读后任务：**对模拟神经群体数据进行PCA，报告方差解释率、预处理和独立数据上的稳定性；对照已知潜在变量解释投影。

**获取：**[免费全文/作者公开版本](https://pmc.ncbi.nlm.nih.gov/articles/PMC4433019/)。PMC免费作者稿全文；无需订阅阅读，未据此推断开放再利用许可。

### P07 · Varoquaux et al. (2017)

**[Assessing and tuning brain decoders: Cross-validation, caveats, and guidelines](https://doi.org/10.1016/j.neuroimage.2016.10.038)**. *NeuroImage*, 145, 166-179. DOI: `10.1016/j.neuroimage.2016.10.038`。

**定位：**核心必读（任何解码项目之前）；中级至进阶。

**先修：**监督学习、训练/测试划分、交叉验证、基础统计。

**带着这个问题读：**你的测试集代表新trial、新session还是新被试？调参是否看过测试信息？

**读后任务：**在含被试或session分组的模拟/公开数据中，对照随机划分和符合预测目标的分组划分；所有特征选择与调参纳入训练折。

**获取：**[免费全文/作者公开版本](https://arxiv.org/pdf/1606.05201)。arXiv免费作者公开版本；正式引用使用2017年NeuroImage期刊版DOI。

### P08 · Jonas & Kording (2017)

**[Could a Neuroscientist Understand a Microprocessor?](https://doi.org/10.1371/journal.pcbi.1005268)**. *PLOS Computational Biology*, 13(1), e1005268. DOI: `10.1371/journal.pcbi.1005268`。

**定位：**核心选读（结课讨论）；入门至中级。

**先修：**基本数据分析、相关与因果的区别。

**带着这个问题读：**“发现统计结构”“预测行为”和“解释机制”分别需要什么证据？这一思想实验能、又不能支持什么结论？

**读后任务：**检查自己小项目的一项结论，列出已有证据、替代解释及一项进一步检验；或在已知机制的简单模拟系统上验证分析方法。

**获取：**[免费全文/作者公开版本](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005268)。PLOS出版方开放获取全文；PMC亦有开放全文。

### P09 · Vyas et al. (2020)

**[Computation Through Neural Population Dynamics](https://doi.org/10.1146/annurev-neuro-092619-094115)**. *Annual Review of Neuroscience*, 43(1), 249-275. DOI: `10.1146/annurev-neuro-092619-094115`。

**定位：**动力学 第1篇；中等；先读动力系统primer和图示。

**先修：**线性代数、常微分方程基础、PCA。

**带着这个问题读：**群体轨迹、固定点和状态空间如何帮助解释计算？为什么降维图本身还不是动力学机制？

**读后任务：**画一个二维线性系统的相图，改变特征值并预测轨迹；再用PCA观察线性坐标变换后的轨迹。

**解释边界：**相似的低维轨迹可能来自不同动力系统；应分清可视化、模型拟合与机制推断。

**获取：**[免费全文/作者公开版本](https://pmc.ncbi.nlm.nih.gov/articles/PMC7402639/)。Europe PMC记录提供Free/Open access全文及PMCID；免费阅读不等同于可任意再分发。

### P10 · Sussillo & Barak (2013)

**[Opening the Black Box: Low-Dimensional Dynamics in High-Dimensional Recurrent Neural Networks](https://doi.org/10.1162/NECO_a_00409)**. *Neural Computation*, 25(3), 626-649. DOI: `10.1162/NECO_a_00409`。

**定位：**动力学 第2篇，在Vyas综述及二维系统练习后读；高；建议选读/进阶。

**先修：**常微分方程、Jacobian与特征值、RNN训练。

**带着这个问题读：**稳定与不稳定固定点、慢点及其局部线性化，怎样揭示训练后RNN的计算机制？

**读后任务：**先在二维非线性系统中寻找固定点并计算Jacobian特征值，再尝试对一个小RNN解释状态转移。该练习为自拟教学任务。

**解释边界：**低维投影会掩盖稳定性方向；局部线性化的解释只在其适用区域成立。

**获取：**本次未找到已核验的免费全文入口，保留上方 DOI；作为进阶选读，不放入必须免费访问的主线。

### P11 · Richards et al. (2019)

**[A deep learning framework for neuroscience](https://doi.org/10.1038/s41593-019-0520-2)**. *Nature Neuroscience*, 22(11), 1761-1770. DOI: `10.1038/s41593-019-0520-2`。

**定位：**NeuroAI 第1篇；入门综述（需了解神经网络基本概念）。

**先修：**神经网络基础、监督学习与优化的基本概念。

**带着这个问题读：**如何把目标函数、学习规则和网络架构分别变成可检验的神经科学假设？

**读后任务：**选一项熟悉的认知任务，用一页表格分别写出目标函数、学习规则、架构，以及每个假设可用什么神经数据检验。

**解释边界：**功能相近、任务表现相近本身不能证明生物机制相同。

**获取：**[免费全文/作者公开版本](https://pmc.ncbi.nlm.nih.gov/articles/PMC7115933/)。Europe PMC记录提供Free/Open access全文及PMCID；免费阅读不等同于可任意再分发。

### P12 · Kriegeskorte et al. (2008)

**[Representational similarity analysis – connecting the branches of systems neuroscience](https://doi.org/10.3389/neuro.06.004.2008)**. *Frontiers in Systems Neuroscience*, 2, 4. DOI: `10.3389/neuro.06.004.2008`。

**定位：**NeuroAI 第2篇；中等方法论文。

**先修：**相关与距离度量、矩阵操作、重采样基础。

**带着这个问题读：**如何用表征差异矩阵RDM比较脑活动、行为和模型，而不要求神经元与模型单元逐一对应？

**读后任务：**为6种模拟刺激分别构造神经响应和模型响应，计算两个RDM并比较；改变距离度量和噪声水平，记录结论变化。

**解释边界：**表征相似性是对假设的一类约束，并不直接证明相同机制或因果关系。

**获取：**[免费全文/作者公开版本](https://pmc.ncbi.nlm.nih.gov/articles/PMC2605405/)。Europe PMC记录提供Free/Open access全文及PMCID；免费阅读不等同于可任意再分发。

### P13 · Yang et al. (2019)

**[Task representations in neural networks trained to perform many cognitive tasks](https://doi.org/10.1038/s41593-018-0310-2)**. *Nature Neuroscience*, 22(2), 297-306. DOI: `10.1038/s41593-018-0310-2`。

**定位：**NeuroAI 第3篇；动力学路线在掌握简单RNN后读；进阶；代码环境较旧。

**先修：**RNN、梯度训练、PCA与聚类。

**带着这个问题读：**同一RNN完成多个认知任务后，如何度量任务关系、功能簇和任务表征的可组合性？

**读后任务：**优先分析作者预训练模型，选少量任务重画任务方差或任务关系图；记录模型种子与任务选择是否影响结论。

**解释边界：**初学者先读图和分析预训练模型；不把完整多任务重训作为第一份作业。

**获取：**[免费全文/作者公开版本](https://pmc.ncbi.nlm.nih.gov/articles/PMC11549734/)。Europe PMC记录提供Free/Open access全文及PMCID；免费阅读不等同于可任意再分发。

**公开代码：**[作者仓库](https://github.com/gyyang/multitask)。README可访问；提供paper.py分析入口、20个预训练模型及训练示例。未运行训练或复现。

**环境：**README测试环境为TensorFlow 1.8.0、Python 2.7/3.6，MacOS 10.13/Ubuntu 16.04；需要旧环境或自行迁移。

### P14 · Schultz et al. (1997)

**[A Neural Substrate of Prediction and Reward](https://doi.org/10.1126/science.275.5306.1593)**. *Science*, 275(5306), 1593-1599. DOI: `10.1126/science.275.5306.1593`。

**定位：**学习 第1篇；入门概念论文；公式可分第二遍读。

**先修：**条件学习基础、期望值、简单迭代更新。

**带着这个问题读：**奖励预测误差与奖励本身有何区别？学习前后，线索出现与预期奖励缺失分别对应什么信号？

**读后任务：**用简单时序差分学习模拟线索—奖励任务，画出学习前、学习后、奖励遗漏三种条件下的预测误差。

**解释边界：**作为历史性理论入口阅读，不把全部多巴胺活动都等同为单一标量奖励预测误差。

**获取：**[免费全文/作者公开版本](https://www.gatsby.ucl.ac.uk/~dayan/papers/sdm97.pdf)。共同作者Peter Dayan所在UCL/Gatsby学术域名公开PDF；已下载并核对题名、作者和摘要开头。

### P15 · Sadtler et al. (2014)

**[Neural constraints on learning](https://doi.org/10.1038/nature13665)**. *Nature*, 512(7515), 423-426. DOI: `10.1038/nature13665`。

**定位：**学习 第2篇；BCI 第1篇；中等；适合综述后第一篇实证。

**先修：**PCA或因子分析、线性读出、实验对照。

**带着这个问题读：**在流形内与流形外改变神经活动到光标的映射，为何能检验短时学习的约束？

**读后任务：**用低维潜变量合成神经活动，对比流形内/外两种读出变换；画示意图并说明它只是概念演示，不是原实验的复现。

**解释边界：**论文结论涉及特定BCI任务和小时级学习，不宜推广为任何时间尺度上都无法学习流形外活动。

**获取：**[免费全文/作者公开版本](https://pmc.ncbi.nlm.nih.gov/articles/PMC4393644/)。Europe PMC记录提供Free/Open access全文及PMCID；免费阅读不等同于可任意再分发。

### P16 · Willett et al. (2023)

**[A high-performance speech neuroprosthesis](https://doi.org/10.1038/s41586-023-06377-x)**. *Nature*, 620(7976), 1031-1036. DOI: `10.1038/s41586-023-06377-x`。

**定位：**BCI 第2篇；进阶应用；适合结课选题。

**先修：**序列模型、训练/验证/测试划分、错误率评估。

**带着这个问题读：**神经解码器与语言模型各自贡献多少？如何解释词错误率、词表大小、解码速度与单参与者证据？

**读后任务：**从作者公开中间结果/权重和notebook出发做离线评估，先核对划分与WER计算，再比较是否使用语言模型的结果；不要把全文系统重训作为入门必做。

**解释边界：**研究为一名参与者；高性能示范并不等同于跨参与者或日常部署已验证。离线公开代码复现不包含临床实验复现。

**获取：**[免费全文/作者公开版本](https://pmc.ncbi.nlm.nih.gov/articles/PMC10468393/)。Europe PMC记录提供Free/Open access全文及PMCID；免费阅读不等同于可任意再分发。

**公开代码：**[作者仓库](https://github.com/fwillett/speechBCI)。PMC全文的代码声明与GitHub README双向对应论文；README列出数据准备、RNN训练、语言模型推断3个notebook。未执行代码。

## 6. 论文阅读卡

每篇用一页回答以下问题，先精读一张关键图，再决定是否读全部推导。

1. 研究问题是什么？属于 Marr 的哪些层次？论文是综述、方法还是实证研究？
2. 模型假设、变量与实验读出分别是什么？哪些量被测量，哪些量仅由模型推断？
3. 核心结论依赖哪一张图或哪项对照？样本单位、数据划分、基线和不确定性是什么？
4. 特征选择、预处理拟合和调参是否使用了测试信息？时序/被试/session 依赖如何处理？
5. 作者证明了预测、关联，还是对机制提供了约束？还存在什么替代解释？
6. 我能先复现哪个最小结果？是否有数据/代码/权重？环境、许可证和算力是否匹配？
7. 复现偏差可能来自哪里？哪项进一步分析能够区分解释？

项目的最小交付物：可运行 notebook、输入数据和软件版本、带单位的结果图、基线与验证方法、一页解释。模型仿真记录时间步长；数据分析记录筛选标准、数据划分与随机性。

## 7. 核查范围与维护

这是围绕教学缺口筛选的经典与方法阅读包，不是穷尽检索或截至2026年的前沿综述。课程/工具依据官方目录、教程和许可文字核查；文献书目主要依据 Crossref 与 Europe PMC/PubMed 交叉核对，并阅读可得摘要。Hodgkin–Huxley 的数据库无摘要，本次核对元数据和扫描全文入口。少量作者全文、代码声明和 README 做了定点核查，未逐篇全文精读，也未安装或执行全部示例。

免费全文状态：大部分已找到 PMC、出版社或作者机构的公开版本。Abbott (2008) 的免费全文被数据库收录，但本次自动访问返回403；Sussillo & Barak (2013) 本次未核验到免费全文。两者均不作为需要无障碍免费访问的必做材料。

元数据修正：Schwartz (2006) 使用页码484–507，Crossref的13为文章编号；RSA (2008) 用Europe PMC补齐Kriegeskorte、Mur、Bandettini三位作者及2:4；Varoquaux使用正式期刊年份2017，免费预印本始于2016。

同目录的 `references.bib` 包含 16 篇规范引文。
