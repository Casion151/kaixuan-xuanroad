# 面向生物背景的蛋白质设计学习路线

近几年，深度学习正在快速改变蛋白质结构预测、蛋白质设计、抗体设计和药物研发等领域。

但对于生物专业的学生来说，真正开始学习时，往往会遇到两个问题：

第一，不知道现有的蛋白质设计模型应该如何部署和使用。

第二，即使学习过一些机器学习课程，仍然很难理解这些模型为什么能够应用于蛋白质问题，更不知道怎样进一步阅读论文、复现模型，甚至设计自己的模型。

因此，我更推荐把 AI 蛋白质设计的学习过程分成两条主线：

第一条是工具应用，目标是学会部署和使用现有的深度学习模型，完成具体的蛋白质设计任务。

第二条主线，系统学习机器学习与深度学习基础，逐渐具备理解、复现和设计模型的能力。

<a id="tools"></a>

## 一、先学会使用现有的蛋白质设计模型

先了解当前的蛋白质设计模型分别能够解决什么问题，以及怎样把它们组合成一条完整的设计流程。

做得最好最全的是 [Rosetta Commons ML Protein Design Bootcamp 2025](https://rosettamlbootcamp2025.github.io/)。

这套课程从模型部署开始，详细介绍了蛋白质设计不同环节所使用的模型，包括如何根据具体问题选择合适的工具。

课程最后还会要求学习者综合运用这些模型，完成一个相对完整的蛋白质设计项目。

如果时间允许，我建议完整学习一遍。学完以后，不仅能了解目前主流的蛋白质设计模型，还能对整个计算蛋白质设计流程形成较为系统的认识。

<a id="foundations"></a>

## 二、建立机器学习与深度学习的整体认识

第二部分主要是机器学习与深度学习的基础入门。

这一阶段的目标，是帮助大家真正理解模型，为以后自己搭建、训练和改进模型做准备。

现在很多课程会把机器学习和深度学习放在一起交叉讲解。严格来说，深度学习属于机器学习的一部分。模型训练中的很多重要概念，例如数据集大小对模型效果的影响、过拟合、欠拟合以及泛化能力等，也都来自机器学习的基本框架。

首先是可以看一下 Prof Richard Xu 新出的交互式教程。

课程网站：[Richard Xu 交互式机器学习教程](https://ai.richardxu.com/ml/#/m/)。

原因是学习曲线平缓，上手难度低。他的 Part 0 Getting Started 能比较方便地帮助我们了解 machine learning（ML）与 deep learning（DL）的整体框架。

第二是 ML for Biologists。

课程网站：[Machine Learning for Biologists](https://carpentries-incubator.github.io/ml4bio-workshop/)。

现在大部分机器学习与深度学习的课程都缺少对它在生物方面具体情境的描述，这样就会导致生物专业的学生，在上了这些课后，很难建立它们在解决具体生物问题上面的工具直觉。Machine Learning for Biologists 是一个相对简短的 Workshop，可以帮助我们理解机器学习在生物学问题中的一些基础应用，并逐渐建立“什么时候可以使用机器学习”的工具直觉。

<a id="deep-learning"></a>

## 三、快速理解深度学习的整体框架

建立基本认识之后，可以通过 MIT 6.S191 快速了解深度学习的主要模型和应用。

课程网站：[MIT 6.S191](https://introtodeeplearning.com/?trk=public_post-text)。

相比于之前 MIT 的 AI 课程，它现在的代码 Lab 练习采用了主流的 PyTorch 框架，同时有视频和对应的 Slides 资料。可以先跟着 Lecture 1、2，Lab 1，Lecture 3、4，Lecture 8 过一遍。

不一定要在第一次学习时掌握所有公式和代码。第一遍可以先理解不同模型在解决什么问题，以及这些模型之间有什么联系。

在学习过程中，还可以主动思考这些模型如何应用到蛋白质设计中。例如：

| MIT 6.S191 | 蛋白质设计中的运用 |
|---|---|
| Sequence modeling | 蛋白质语言模型和蛋白质序列建模 |
| Generative modeling | 序列或结构生成 |
| Diffusion model | RFdiffusion |
| AI for Science | 药物与蛋白质设计 |

<a id="computational-biology"></a>

## 四、进一步学习机器学习在蛋白质设计中的应用

然后，我们如果想要进一步了解蛋白质设计方向，可以去看 MIT Machine Learning for Computational Biology，Lecture 8—11 是专门讲蛋白质设计的讲座。

Fall 2024 课程视频：[观看视频](https://lnkd.in/efSvp7hY)。

Fall 2024 课程笔记：[查看笔记](https://lnkd.in/eWBAxQHk)。

课程网站：[Machine Learning for Computational Biology](https://lnkd.in/eemavz6J)。

MIT Canvas 课程页面：[课程模块](https://canvas.mit.edu/courses/33939/modules)。

Canvas 页面中包含对应的 PPT、录音稿和课表，查阅起来比较方便。

需要注意的是，部分课程笔记主要由录音整理而来，内容可能比较杂乱。因此，建议以课程 PPT 和视频为主，录音稿作为补充材料。

这些都看完并理解的话，基本上可以在 AI 的帮助下，自己看论文学习模型设计与搭建了，这部分的内容和怎么做的过程，我后续也会陆续总结出来。

<a id="further-study"></a>

## 五、如果想进一步夯实基础

前面的路线适合建立整体认识，上手项目学习，我觉得更适合生物方面的本科生入手项目并进入实验室。

如果希望深入花大量时间系统理解机器学习、深度学习和模型训练细节，可以继续学习下面这些课程。大部分课程网站都提供视频、讲义和代码练习。

### 1. 统计机器学习基础：吴恩达机器学习专项课程

课程网站：[Machine Learning Specialization](https://www.deeplearning.ai/specializations/machine-learning)。

吴恩达的机器学习课程讲解得比较细致，整体节奏也相对较慢，适合系统入门。

课程第一部分主要介绍传统机器学习，第二、第三部分会逐渐涉及神经网络和深度学习。

如果对监督学习、损失函数、优化方法、模型评估、过拟合和正则化等概念还不熟悉，可以从这套课程开始。只用看第一部分就可以，看 Coursera 上面的即可。

### 2. 模型训练能力：Stanford CS231n

课程网站：[Stanford CS231n](https://cs231n.stanford.edu/)。

虽然 CS231n 的主题是计算机视觉，但课程设计得非常扎实。

它不仅介绍卷积神经网络等模型，更重要的是会系统讨论模型训练、优化、初始化、正则化和调参等问题。

因此，这门课非常适合用来锻炼模型训练能力。即使以后不从事计算机视觉，其中很多训练经验也可以迁移到蛋白质模型中。

### 3. 系统的深度学习训练：CMU 11-785

课程网站：[CMU 11-785](https://deeplearning.cs.cmu.edu/S26/index.html)。

CMU 11-785 是一门内容比较全面的深度学习入门课程。

它的知识点覆盖范围很广，同时配有代码作业、习题课和讲解视频。缺点是作业量比较大，需要投入较多时间。

如果希望通过大量实践掌握深度学习的各种模型，这门课会比较合适。

### 4. 概念补充：Dive into Deep Learning

在线教程：[Dive into Deep Learning](https://d2l.ai/)。

Dive into Deep Learning，简称 D2L，是一套非常经典的在线深度学习教程。

如果在学习其他课程时遇到不理解的概念，可以结合 D2L 和 GPT 进行补充学习。它适合用来查找模型结构、数学原理。

<a id="alphafold"></a>

## 六、尝试理解 AlphaFold 与 AlphaFold 3

掌握基础知识之后，还可以尝试阅读 AlphaFold 和 AlphaFold 3 的模型解析与代码实现。

下面是一些比较适合入门的资料。

### 1. AlphaFold Decoded

项目仓库：[AlphaFold Decoded](https://github.com/kilianmandon/alphafold-decoded)。

这个项目适合用来拆解和理解 AlphaFold 的模型结构。

### 2. The Illustrated AlphaFold

文章：[The Illustrated AlphaFold](https://elanapearl.github.io/blog/2024/the-illustrated-alphafold/)。

虽然标题是 The Illustrated AlphaFold，但主要介绍的是 AlphaFold 3。文章采用了比较直观的图解方式，适合辅助理解模型架构。

### 3. AlphaFold 3 PyTorch 实现

项目仓库：[AlphaFold 3 PyTorch 实现](https://github.com/lucidrains/alphafold3-pytorch)。

这个项目提供了 AlphaFold 3 的 PyTorch 实现。

阅读这类第三方实现时，可以重点观察模型由哪些模块组成、张量如何在模块之间传递，以及论文中的数学描述如何转化成具体代码。

<a id="projects"></a>

## 七、最推荐的学习方式：在项目中学习

最推荐的方法，现在有了 Codex 和 GPT，可以让它们给你制定学习方法，推荐蛋白质设计领域相关论文或者相关的项目比赛，以及帮助复现论文中的模型或者是查看论文中的模型细节，看看能不能进行优化，利用数据集训练，在项目实现的过程中学习。包括在最早的学习的时候，比如 MIT 6.S191，看到一些模型，也可以问问 AI，这个模型是怎么运用到蛋白质设计领域的，为什么可以运用到里面去，和模型的什么特点有关。

例如，可以让 AI 帮助完成以下工作：

- 根据自己的基础制定阶段性学习路线；
- 推荐蛋白质设计领域的重要论文；
- 寻找适合入门的项目、比赛和公开数据集；
- 解释论文中的模型结构和数学公式；
- 阅读并梳理开源项目代码；
- 复现论文中的模型；
- 分析训练失败或效果不佳的原因；
- 尝试优化模型，并使用公开数据集进行训练和验证。

这种学习方式并不需要等到基础知识全部学完以后再开始。

即使是在最早学习 MIT 6.S191 时，看到一个模型，也可以直接向 AI 提问：

- 这个模型可以怎样应用到蛋白质设计领域？
- 它为什么适合解决这类问题？
- 它的哪些结构特点发挥了关键作用？
- 如果将它迁移到蛋白质序列或结构生成任务中，需要修改哪些部分？

围绕具体问题学习，通常比单纯按照课程顺序观看更有效。很多概念只有在阅读代码、处理数据、训练模型和分析结果的过程中，才能真正理解。

<a id="summary"></a>

## 总结

如何欣赏领略 ML for 蛋白质设计与上手概要：

1. Rosetta Commons ML Protein Design Bootcamp 2025。
2. Richard Xu 教授的交互式教程的 Part 0。
3. Machine Learning for Biologists。
4. MIT 6.S191 中某些讲座。
5. MIT Machine Learning for Computational Biology 的 Lecture 8—11。
6. 在相关的比赛项目中有驱动地学习，选择和比赛或者研究小课题相关的一篇论文（开源代码项目）进行复现或者是最小化的算法改进尝试。可以先让 AI 提出改进思路，然后反复盘问 AI 细节和原因。
