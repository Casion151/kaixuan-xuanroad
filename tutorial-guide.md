# 计算神经科学：从点开资源到完成第一个任务

本篇导读由 AI 辅助撰写。

这是一份给初学者的逐步导读。每个单元先解释问题，再让你进入外部资源的一小段；先完成当前任务，再决定是否继续。课程全集、工具文档和16篇完整书目放在[资源与文献索引](资源与文献索引.md)，需要查询时再打开。

**第一次来：今天只做单元1。** 用30–45分钟理解“电压曲线”和“放电时刻”有什么不同，回答三个问题，到此结束。如果这些已经熟悉，直接做单元2的自测；不会的地方再回补。时间是本导读的估计，不是完成要求。

默认顺序是：[1 看懂神经信号](#unit1) → [2 看懂代码中的时间与数组](#unit2) → [3 用一个简单模型作预测](#unit3)。之后只选一个方向：[建模](#model-branch)、[EEG/MEG](#data-branch)、[fMRI解码](#fmri-branch)，或[NeuroAI文献](#paper-branch)。还不知道方向时，先完成单元3即可。

阅读网页时，先看本导读给出的解释和检查题。只打开当前指定链接；第一次可以读代码与示例图，不必安装软件。运行练习是第二遍的任务，先确认所需变量、环境和数据，再选择相应代码段。

<a id="unit1"></a>

## 单元1：神经元“活动了”，我们到底看到了什么？

### 点开之前先理解

假设一束光照进眼睛，研究者从相关神经细胞记录到一串短促信号。这里至少有两个值得区分的量：**膜电位**是细胞内外的电压差，随时间连续变化；**动作电位**是一次短暂的电信号事件，也常被叫作spike。把每次事件发生的时刻记下来，就得到spike train。**放电率**则是选定时间窗内的放电次数除以时间窗长度。

这一区分会影响以后怎么写代码。一个数组可能装的是每毫秒采样的电压，也可能装的是几次放电发生的时间；两种数组里的数含义不同，不能看到一条曲线就把它当成同一种数据。头皮EEG和fMRI的测量又是另外的层级，后面的分支会单独介绍。

### 这次只打开一章

进入[Neuroscience Online：Resting Potentials and Action Potentials](https://nba.uth.tmc.edu/neuroscience/s1/chapter01.html)。这是医学背景的在线教材，整个网站还包括感觉、运动和高级脑功能；本次只借用其中最前面三个小节。

1. 找到 **1.1 Introduction to the Action Potential**。快速略过历史叙述，重点看Figure 1.1中光刺激和重复spike的联系；动画无法播放时读相邻文字即可。
2. 读 **1.2 Features of Action Potentials**，只回答：在这里的教学例子中，刺激增强主要改变的是单次spike大小，还是出现频率？
3. 读 **1.3 Intracellular Recordings from Neurons**，对照Figures 1.2、1.3识别静息电位、去极化和阈值。**到1.4 Components of the Action Potentials开始时停止。**

去极化就是膜电位变得较不负，例如从−70 mV变到−60 mV；它不一定已经触发动作电位。阈值是这个教学模型中启动放电的边界。第一遍先建立这些关系，下一章的离子通道和更细的动作电位过程留到解释模型机制时再读。

### 三个检查题，答完就结束

- `[-70,-65,-60] mV`与`[12,37,58] ms`分别可能表示什么？前者可以是三个采样时刻的膜电位；后者可以是三次放电的时刻。仅有数字还不够，需要单位和数据定义。
- 在0.1秒内记录到5次spike，这段时间的平均放电率是多少？**50 Hz**；Hz在这里表示每秒多少次。它不是膜电位大小，也不证明放电均匀发生。
- 从−70 mV升到−60 mV是否一定放电？**不能判断**，还要知道阈值及所讨论的模型/细胞条件。

能把连续测量值、事件时刻和时间窗内的计数分开，就可以进入单元2。刺激越强、频率越高是当前例子的直觉；后续看到适应、抑制或复杂刺激时，需要重新检查这种关系，不能把它当作所有神经元的通则。

<a id="unit2"></a>

## 单元2：第一次只学会读懂一段神经信号代码

首次目标是把“时间、测量值、数组、图”联系起来，预计用时是本导读的估计，不是官方课时。神经数据通常是在许多时刻记录的电压或放电：一维数组装一条时间序列，二维数组可以装多个细胞的序列；绘图用来观察信号何时变化，也能发现时间单位或数据排列错误。

直接打开 [W0D1：LIF Neuron Part I][entry]，这次只使用同一页面中的选定片段。LIF 是描述输入电流怎样改变神经元膜电位的简化模型。先读 [Section 1.1][lif] 的变量解释，认出 `t` 是时间、`I` 是输入电流、`V` 是膜电位即可；微分方程推导留到建模单元。

**没有 Python 基础：约 120–150 分钟。**先用 35–45 分钟读 [1.2 Comments in code][comments]、[1.3 Math operations][math]、[2.1 For Loops][loops]，只做 Exercise 1 的取消注释，以及 Exercise 2 的十个时间点。用 25–30 分钟进入 [Section 3][plot]，看绘图说明和 [Exercise 5][ex5] 的输入电流图；然后用 30–40 分钟读 [Section 6][numpy] 开头的数组说明，并看 [Exercise 13][ex13] 开头的二维数组说明及初始化代码。最后留 20–30 分钟做下面的自测。

**已会变量、循环和简单绘图：约 45–75 分钟。**先做自测；只回补没有通过的片段。读二维数组示例时，首轮只需说明 `(n, step_end)` 中每个维度的意义，不必完成后面的网络仿真。

具体停在哪里：数组部分读到 Exercise 11 开始就停，再跳到 Exercise 13，看到主循环之前的初始化代码即可。这里只学习数据怎样存放；循环里的膜电位更新公式暂时可以作为给定计算。视频也按当前疑问选看，完成自测就不必补看同主题的长视频与短回顾。若一个概念反复卡住，把问题记为“哪一行、哪个变量、预期是什么”，用下面的回补链接定位。

可以先在网页读代码、查看示例输出与 “Click for solution”，无需先安装。网页已提供 Colab 启动链接；实际运行请从官方页面按钮打开，并先执行 Setup 和所需变量定义。学生代码中的 `...` 是待填空，`NotImplementedError` 是练习提示；不要直接运行整本 notebook 期待全部成功。

下面三个自测由本导读编写，可先口算和看图，再用代码核对：

1. **读懂时间序列。**`dt=0.001`，`for step in range(25)`，`t=step*dt`：有几个时间点，最后一项是多少？应答 **25 个，0.024 秒**；`step` 是序号，`t` 才是带单位的时间。不会时回补 [1.3][math] 和 [2.1][loops]。
2. **读懂图。**给 [Exercise 5][ex5] 的示例图写出横纵轴含义：应为 **时间（s）与输入电流（A）**，不是膜电位；横轴 0–0.024 秒对应离散取样点。能把公式的 `t`、`I(t)` 对到图上即通过。不会时回补 [Section 3][plot]。
3. **读懂数组。**把 `[[1,2,3],[3,6,9]]` 视为“2 个细胞 × 3 个时刻”的示意数据：shape 应是 **(2,3)**；每个时刻跨细胞平均得到 **[2,4,6]**，即 `mean(axis=0)`；每个细胞跨时间平均得到 **[2,6]**，即 `mean(axis=1)`。不会时回补 [Section 6][numpy] 和 [Exercise 13][ex13] 开头，先画出行列再计算。

本次提交三个自测答案和一张带轴名、单位的电流图（先读者可注释官方示例图）。到此结束首轮；随机输入、完整 LIF 仿真、W0D2 的类与函数，以及线代、微积分、概率整日课程留待后续任务按需选读。

[entry]: https://compneuro.neuromatch.io/tutorials/W0D1_PythonWorkshop1/student/W0D1_Tutorial1.html
[lif]: https://compneuro.neuromatch.io/tutorials/W0D1_PythonWorkshop1/student/W0D1_Tutorial1.html#section-1-1-the-lif-model
[comments]: https://compneuro.neuromatch.io/tutorials/W0D1_PythonWorkshop1/student/W0D1_Tutorial1.html#section-1-2-comments-in-code
[math]: https://compneuro.neuromatch.io/tutorials/W0D1_PythonWorkshop1/student/W0D1_Tutorial1.html#section-1-3-math-operations
[loops]: https://compneuro.neuromatch.io/tutorials/W0D1_PythonWorkshop1/student/W0D1_Tutorial1.html#section-2-1-for-loops
[plot]: https://compneuro.neuromatch.io/tutorials/W0D1_PythonWorkshop1/student/W0D1_Tutorial1.html#section-3-plotting
[ex5]: https://compneuro.neuromatch.io/tutorials/W0D1_PythonWorkshop1/student/W0D1_Tutorial1.html#coding-exercise-5-plotting-current
[numpy]: https://compneuro.neuromatch.io/tutorials/W0D1_PythonWorkshop1/student/W0D1_Tutorial1.html#section-6-using-numpy
[ex13]: https://compneuro.neuromatch.io/tutorials/W0D1_PythonWorkshop1/student/W0D1_Tutorial1.html#coding-exercise-13-using-2d-arrays

<a id="unit3"></a>

## 单元3：持续输入多大，神经元才会开始放电？

### 先把问题想清楚，再看方程

上一单元用数组记录随时间变化的量。现在要多做一步：根据输入，预测下一个时刻的膜电位。

最简单的直觉是一个有漏水口的容器：输入不断加入，已有的积累也会逐渐流失。LIF的“积分”表示过去输入会积累影响膜电位，“漏”表示没有输入时膜电位会向静息值回落。“放电”则是一条额外规则：达到阈值，记录一次事件，再把电位重置。这个模型主要预测放电时刻，不生成真实动作电位的尖峰形状。

Neuronal Dynamics是一整本从单细胞讲到网络和认知的教材；配套Exercises是另一套Python练习。本次只从书中取两个小节，再做Exercises中的一道题。先修只需要看懂电压、电流、乘除法，以及“一个量会随时间变化”；微分方程推导可以第二遍再读。

### 今天的阅读范围：60–90分钟

先打开[1.3.1 Integration of Inputs](https://neuronaldynamics.epfl.ch/online/Ch1.S3.html#SS1)，看Figure 1.6和方程中电位、输入、电阻及时间常数的关系。随后跳到[1.3.3 The Threshold for Spike Firing](https://neuronaldynamics.epfl.ch/online/Ch1.S3.html#SS3)，只理解阈值与重置规则。第一遍可以跳过脉冲输入的推导；**1.3.4及后面的星号小节暂不读**。

书中常用u表示电位，以下用V表示同一个量。把静息值明确写出来，阈值以下的模型是：

\[
\tau_m\frac{dV}{dt}=-(V-V_{rest})+RI(t).
\]

右边第一项把电位拉回静息值；第二项表示输入电流的作用；时间常数\(\tau_m\)控制变化有多快。暂时不会解方程也能先做预测：对一个持续不变的电流，若不触发重置，电位最终趋向 **静息电位＋电阻×电流**。

### 在这里先预测，带着答案进入练习

下面使用配套练习页公开的默认值：静息电位−70 mV、阈值−50 mV、电阻10 MΩ。假设从静息值出发、无噪声、输入持续足够长。

| 输入电流 | 不考虑放电重置时趋向的电位 | 预测 |
|---|---|---|
| 1 nA | −60 mV | 达不到阈值，不放电 |
| 2 nA | −50 mV | 刚好是临界值；连续时间的理想模型只逐渐趋近阈值，有限时间内不跨过 |
| 3 nA | −40 mV | 会先到达阈值并放电、重置；所以实际轨迹不会一直升到−40 mV |

这里用到的单位关系是 **1 MΩ × 1 nA = 1 mV**。临界电流因此是20 mV ÷ 10 MΩ = **2 nA**。这组数属于当前练习的模型，不是所有真实神经元的通用参数。

现在只进入[Exercise 1.1：minimal current](https://neuronaldynamics-exercises.readthedocs.io/en/latest/exercises/leaky-integrate-and-fire.html#exercise-minimal-current)，读1.1.1的计算问题和1.1.2的模拟说明。**到1.2 Exercise: f-I Curve开始时停止。** 临界电流恰好等于2 nA时“不放电”也是原练习明确要求解释的结果；计算机的有限精度、阈值比较和观察窗口会影响边界表现，不能只靠屏幕上一点点差异推翻解析预测。

第一遍提交上面三个条件的预测，并用自己的话解释为什么持续输入不意味着无限积累。第二遍在配套环境可用时，再分别代入1、2、3 nA运行1.1.2的代码，比较膜电位和spike计数；此前要执行页面开头的导入，并定义占位变量`I_min`。运行时间有限，较弱的超阈值输入也可能尚未等到第一次放电，观察窗口要一并记录。

### 过关标准与下一步

能解释“漏、积累、阈值、重置”四件事，并正确预测上述三种输入，就完成这一单元。还不需要复现整章图，也不需要安装多个仿真框架。

如果卡在“−60比−70大”及去极化，回单元1的1.3；如果卡在电阻和电流如何合成电位变化，只回看书的Figure 1.6与1.3.1。代码环境卡住时，把纸笔预测保留下来，先不要跳到更大的网络练习。

下一次才做[Exercise 1.2：f-I Curve](https://neuronaldynamics-exercises.readthedocs.io/en/latest/exercises/leaky-integrate-and-fire.html#exercise-f-i-curve)：横轴为输入电流I，纵轴为放电率f。先画预期形状，再模拟。原题设3 ms不应期，即每次放电后至少等待3 ms；因此无限大输入下的速率上限趋向约333 Hz，而有限输入还要花时间积累到阈值。这个问题是在原有模型上只增加一层理解。

<a id="model-branch"></a>

## 建模分支：把刚才的四条规则写进Brian2

只有想继续实现模型时才进入这一段。Brian2是一套让你用方程、单位和事件规则描述神经元的仿真工具。这里先学习如何把LIF的概念对应到代码，暂不建立网络。

进入[Brian2 Part 1: Neurons](https://brian2.readthedocs.io/en/stable/resources/tutorials/1-intro-to-brian-neurons.html)。依次读 **Units system → A simple model → Adding spikes → Refractoriness**；在 **Multiple neurons** 前停止，约45–60分钟的初读。找出四种角色：`NeuronGroup`保存模型与状态，`StateMonitor`记录状态随时间的变化，`threshold/reset`决定放电与重置，`SpikeMonitor`记录放电时刻。

这个例子中的`v`使用归一化、无量纲的写法，不能直接把数值0.8当成0.8 mV，也不要把它的数值与单元3的默认参数混在一起。第一次只在纸上标出“哪里定义方程、哪里触发事件、哪里保存结果”，再预测去掉不应期会改变什么。能分清记录电位和记录事件的对象，就可以停下。第二遍在已有Brian2环境中运行这四段；网络连接和随机神经元留到有明确问题时再学。

<a id="data-branch"></a>

## EEG/MEG分支：一段连续脑电怎样变成“刺激后的平均反应”？

先想象一个实验：给被试重复播放声音，同时连续记录 EEG/MEG。我们想知道声音出现后，测量信号有没有较稳定的变化。困难在于，连续记录还混着眨眼、背景活动和别的刺激，所以不能把任意一段波形都叫作“听觉反应”。

MNE 的三个词对应三个整理步骤。**Raw** 是各传感器从头到尾的连续记录；**Epochs** 是按事件时刻切出并对齐的一组短片段，例如每次声音前 0.2 秒到之后 0.5 秒；**Evoked** 是同一条件下这些片段的平均。平均有助于显现与事件稳定对齐的变化，但不能自动清除伪迹。网页使用的是已滤波和降采样的示例文件；Raw是连续数据对象的名称，不保证它完全未经处理。

第一遍给自己约 45–60 分钟，只按下面的路线读：从 [Loading data](https://mne.tools/stable/auto_tutorials/intro/10_overview.html#loading-data) 认识 Raw；接着跳到 [Detecting experimental events](https://mne.tools/stable/auto_tutorials/intro/10_overview.html#detecting-experimental-events)，读到 [Epoching continuous data](https://mne.tools/stable/auto_tutorials/intro/10_overview.html#epoching-continuous-data) 末尾；再跳到 [Estimating evoked responses](https://mne.tools/stable/auto_tutorials/intro/10_overview.html#estimating-evoked-responses)，读至 `aud_evoked.plot_joint(picks="eeg")` 对应图就停。

第一遍跳过 **Preprocessing** 整节、**Time-frequency analysis** 整节，以及 **Inverse modeling** 至页末。概要中的 ICA 直接指定删除第 1、2 个成分，却省略了判断过程，不能把这些编号照搬到其他数据。这里也暂不学习源定位和 3D 脑图。

完成三个小动作：

1. 在事件表中找到 1、2 的含义，解释为什么 `epochs["auditory"]` 能同时选中左右耳声音。无需理解所有 Python 语法。
2. 看 `aud_epochs.plot_image` 的 EEG 021 图：指出每一行、横轴零点、颜色各代表什么，再找图下的平均曲线。写一句“平均之前保留了什么，平均之后丢掉了什么”。
3. 第二遍才进入运行：在已经配置并具备 Sample 数据的环境中，只选运行读取、事件、分段、平均相关代码；跳过 ICA 的结果须标为“未经过该 ICA 步骤的教学演示”，不要求波形及保留试次数与网页相同。`sample.data_path()` 在缺数据时会自动下载数据集，因此它不属于第一遍练习，也不要直接选择整页运行。

检查答案应包含：图的每一行是一次试次，零点是该次刺激开始；条件内平均消除了单次试次这一维，但掩盖了试次差异。`plot_compare_evokeds` 默认可能汇总多个传感器，不是某一个 EEG 电极的波形；读 EEG 单通道先看上一项图像练习。能解释这些就可结束，不以“图像看起来更干净”为掌握标准。

若卡在数组维度，只回看 **Epoching continuous data** 末尾的 Note：Raw 是“通道×时间”，Epochs 是“试次×通道×时间”。若卡在对齐，回看 **Detecting experimental events** 的三列表格说明，不必重学整份 MNE 文档。

<a id="fmri-branch"></a>

## fMRI分支：能否从 fMRI 判断被试看的是人脸还是房屋？

这个练习问的是：给模型一幅没参加训练的脑活动图，它能否判断当时看到的是人脸还是房屋？先只做这个二分类问题，不要求掌握整套 fMRI 分析。这里的信号是与血氧变化有关的 **BOLD** 测量，并不是直接记录神经元放电。

把一幅脑图想成许多立体小格子，**voxel（体素）**就是这些格子。模型把每幅图中选定体素的数值排成一行作为输入，把 face/house 作为答案。**run** 是一次连续扫描段；同一 run 中的图像共享漂移和时间相关性，不能想当然地把每幅图视为完全独立样本。交叉验证就是轮流拿出部分数据作考题；这里每轮留出一个完整 run，其余 run 用来学习。

第一遍约 45–60 分钟：从 [Retrieve the files of the Haxby dataset](https://nilearn.github.io/stable/auto_examples/02_decoding/plot_haxby_anova_svm.html#retrieve-the-files-of-the-haxby-dataset) 读到 [ANOVA pipeline with Decoder object](https://nilearn.github.io/stable/auto_examples/02_decoding/plot_haxby_anova_svm.html#anova-pipeline-with-decoder-object)，认识输入与标签；随后直接跳到 [Obtain prediction scores via cross validation](https://nilearn.github.io/stable/auto_examples/02_decoding/plot_haxby_anova_svm.html#obtain-prediction-scores-via-cross-validation)，读到 `decoder.cv_scores_["face"]` 及输出为止。ANOVA 在这里先筛出对分类有帮助的体素，线性 SVM 再组合它们作判断；第一遍不推导公式。

跳过 **Fit the decoder and predict** 的运行，它把模型再用于刚才拟合的数据，不能把这种预测当成新数据成绩。**Visualize the results** 整节暂不做：权重脑图看起来直观，但系数并不能直接说明哪些脑区造成了识别人脸。

完成三个小动作：

1. 只读 **Load the behavioral data**：指出 `labels` 是类别，`chunks` 是 run；解释为什么筛选 face/house 时，图像、类别和 run 标记必须一起筛选。
2. 画三个框代表三个 run，用箭头表示轮流“两个训练、一个验证”。在每个训练框内写“选体素→拟合模型”，避免先用全部数据挑体素再分训练与验证。
3. 第二遍具备课程环境后，再运行数据与标签准备，以及交叉验证一节；沿用上文定义的 mask 和筛选参数，略过前一次 Decoder 拟合及全部可视化。记录每折成绩，并核对每个训练集与验证集的 run 没有交集。默认数据入口为第 2 位被试，不增加全体被试任务；本轮学习不触发下载。

检查答案是：每折分数回答“同一被试的另一个扫描 run 能否分对”，不能回答“换一个人也能否分对”。网页当前列出 12 个分数，可先指出最高、最低值；它们是官网输出，不是本教程实测或必须达到的目标。平衡二分类的随机猜测约为 50%，但正式评价还要报告类别比例和合理基线。

如果不知道数据和标签如何一一对应，只补读 **Load the behavioral data**；如果不知道为什么留出 run，只重读 **Obtain prediction scores via cross validation** 的开头及 `groups=run_label`，暂不展开整套机器学习课程。

<a id="paper-branch"></a>

## 论文也只读一小段：选择一个分支

这三篇按研究兴趣选用，不是第一周的共同必读。每次只选一篇，先完成这里的小任务，再决定是否继续读全文。时间是初读估计，不含查词。

### NeuroAI 分支：Richards et al.（2019）

**文章：** [A deep learning framework for neuroscience](https://pmc.ncbi.nlm.nih.gov/articles/PMC7115933/)；**何时读：** 已知道人工神经网络由相互连接的计算单元组成，想理解它为什么能用于研究大脑时。首读约 40–50 分钟。

**先理解问题。** 一个网络会识别图像，还不足以说明它解释了大脑。本文提出一种研究框架：追问什么条件使网络学出了某种行为与神经活动。“目标函数”是给学习结果打分的数学规则，例如答错越多，分数越差；它不等于“识别图片”这个任务名称。“学习规则”规定如何调整单元之间的连接强度；“架构”规定有哪些单元、怎样连接，以及信息怎样流动。三者一起约束网络能学出什么。

**按这个顺序读。** 先读摘要和 Figure 1 图注，给三个组件各写一句自己的解释。再到 “The three core components of a deep learning framework for the brain”，只读开头定义三者的第一段。随后直接看 Figure 4 及图注：动物学习分辨条纹方向时，模型预测不同层级的神经活动会怎样改变？注意这是示范怎样提出可检验预测，不能把图中的预测写成已经证实的脑机制。最后浏览 “Caveats and concerns”，找出作者承认的一项局限。

**第一遍到此停止。** 暂不读 Figure 2、3、5 的学习算法细节，也不追引文。此轮目标是理解框架，尚不要求掌握反向传播。

**读后任务。** 用纸笔设计一个“分辨条纹方向”的假想模型，写下输入、输出、三个组件，再写一个可用动物学习前后记录检验的预测。不需要代码。**检查点：** 能区分任务名称和评分规则；预测涉及可观察的神经活动变化；能解释“行为答对”为什么不能单独确定大脑使用了哪种学习规则。

### 数据分析分支：Kriegeskorte et al.（2009）

**文章：** [Circular analysis in systems neuroscience – the dangers of double dipping](https://pmc.ncbi.nlm.nih.gov/articles/PMC2841687/)；**何时读：** 准备比较实验条件或训练第一个解码模型之前。首读约 35–45 分钟。

**先理解问题。** 假如先挑选两组差异最大的测量位置，再用同一批数据报告这些位置的组间差异，随机波动也会帮助你“发现”差异。这叫“循环分析”：本来用于检验结论的数据，提前参与了决定怎样检验。“体素”是脑成像中的一个小体积测量单元；“感兴趣区（ROI）”是被选出来集中分析的一组位置。选择它们的依据，可能悄悄影响后面的结果。

**按这个顺序读。** 先读摘要和 Figure 1b 图注，认识选择、加权、排序都可能引入问题。然后看 Figure 2b 的上下两排及图注，再读 “Example 1: Pattern-information analysis” 中从 “We first analyzed all experimental runs together to define an ROI” 开始的实例。带着一个问题：作者已经把奇数、偶数实验轮次分成训练集和测试集，为什么仍出错？答案要追到分组之前：选体素时已经用了测试数据。最后读 “A policy for noncircular analysis” 正文及 Figure 4 图注。

**第一遍到此停止。** 暂不进入 Figure 3 的区域激活模拟和补充材料统计推导。先掌握数据流向，后续做相关分析再回读细节。

**读后任务。** 画出“全部数据→选位置→分组→训练→测试”的流程，并改成测试数据不参与选择或训练的流程。**检查点：** 修正版先保留测试集，只用训练数据决定选哪些位置，再把同一规则用于测试集；若反复调选择规则，应在训练部分内部验证；测试标签始终不能反馈给前面步骤。还要能说明：仅仅写了“交叉验证”，不代表整个分析流程就没有泄漏。

### 神经群体与动力学分支：Cunningham & Yu（2014）

**文章：** [Dimensionality reduction for large-scale neural recordings](https://pmc.ncbi.nlm.nih.gov/articles/PMC4433019/)；**何时读：** 已知道放电率表示单位时间内的放电次数，开始面对多个神经元共同活动的数据时。首读约 40–50 分钟。

**先理解问题。** 同时记录很多神经元，会得到很多条活动曲线；它们可能共享少数变化模式。本文讨论怎样把这些共同变化提取出来。“维度”在这里首先指描述一次群体状态需要多少个数：记录三个神经元，就先用三个放电率描述。“潜变量”是从记录中推断出的少数变化量，并非额外测到了几个神经元。“主成分分析（PCA）”寻找数据变化幅度最大的方向，用少数方向近似保留原数据的变化。

**按这个顺序读。** 先看 Figure 1 及图注，理解很多神经元、条件和重复实验为什么难以逐条看清。然后读 “Intuition behind dimensionality reduction” 并对照 Figure 2：图中一个点是某一时刻三个神经元的共同活动，连续时刻连成轨迹；时间不是坐标轴。最后只读 “Basic covariance methods” 的第一段和 Figure 4a 图注，弄清把点投影到一条轴上意味着什么。不要因为一条轴变化最大，就给它贴上“记忆”或“决策”的标签。

**第一遍到此停止。** 暂不查 Table 1 的全部方法，也不要求推导矩阵公式或理解 Figure 4b、4c。读完应能解释降维解决什么问题，以及它会丢掉什么。

**读后任务。** 纸笔检查四个群体状态：(1,0,1)、(0,1,1)、(1,1,2)、(2,1,3)。找出第三个数与前两个数的关系，说明为何两个数足以描述这些点。**检查点：** 第三个数等于前两个数之和，因此这些点位于二维平面；这只是教学构造的关系，不能据此证明真实大脑只有两个状态变量，也不能保证 PCA 保留的是与行为最相关的变化。

## 暂时没有放到首轮的资源，什么时候再打开？

| 资源 | 进入它之前应已能做什么 | 届时只带一个问题进去 |
|---|---|---|
| AllenSDK | 理解spike时刻、刺激对齐、trial及平均；能读二维数组 | 选定一个session、一个刺激条件后，怎样得到raster与PSTH？先确定session和下载范围，再使用索引中的Quick Start。 |
| DANDI/NWB | 已有一个明确的数据分析问题，知道需要哪些信号与时间段 | 怎样读取该数据集的有限片段，并记录Dandiset版本和单位？ |
| MIT 9.40、NEPR208 | 已通过一个入门单元，知道自己当前缺哪类解释 | 若更喜欢大学讲课与题集，可替换主课形式；先在课表中找神经编码或单神经元模型等当前主题。 |
| 其余方向文献 | 已完成一篇分支导读的检查题 | 从索引选择下一篇解决当前问题的论文，先指定一张关键图和一项读后任务。 |

这些入口保留在[资源与文献索引](资源与文献索引.md)。进入具体数据项目时，再补环境、数据体积和运行检查；不要把数据门户的整个目录当作第一份作业。

