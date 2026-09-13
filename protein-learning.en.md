# A Protein Design Learning Path for Students with a Biology Background

Written by Kaixuan.

In recent years, deep learning has been rapidly changing fields such as protein structure prediction, protein design, antibody design, and drug discovery and development.

But when biology students actually begin learning, they often encounter two problems:

First, they do not know how to deploy and use existing protein design models.

Second, even after taking some machine-learning courses, they still find it difficult to understand why these models can be applied to protein problems, let alone how to go on to read papers, reproduce models, or even design their own.

I therefore recommend dividing the process of learning AI protein design into two main tracks:

The first is using tools: learning to deploy and use existing deep-learning models to complete specific protein design tasks.

The second is systematically studying the foundations of machine learning and deep learning, gradually developing the ability to understand, reproduce, and design models.

<a id="tools"></a>

## 1. First Learn to Use Existing Protein Design Models

Start by understanding what problems current protein design models can each solve, and how to combine them into a complete design workflow.

The best and most comprehensive course is [Rosetta Commons ML Protein Design Bootcamp 2025](https://rosettamlbootcamp2025.github.io/).

This course starts with model deployment and explains in detail the models used at different stages of protein design, including how to choose appropriate tools for a specific problem.

At the end of the course, learners are also asked to use these models together to complete a relatively full protein design project.

If time allows, I recommend working through the entire course. Afterwards, you will not only know the current mainstream protein design models, but also have a fairly systematic understanding of the overall computational protein design workflow.

<a id="foundations"></a>

## 2. Build an Overall Understanding of Machine Learning and Deep Learning

The second part is mainly a basic introduction to machine learning and deep learning.

The goal at this stage is to help you truly understand models and prepare to build, train, and improve them yourself later.

Many courses now teach machine learning and deep learning together, moving between them. Strictly speaking, deep learning is part of machine learning. Many important concepts in model training, such as the effect of dataset size on model performance, overfitting, underfitting, and generalization, also come from the basic framework of machine learning.

First, you can take a look at Prof. Richard Xu's new interactive tutorial.

Course website: [Richard Xu's Interactive Machine Learning Tutorial](https://ai.richardxu.com/ml/#/m/).

The reason is that its learning curve is gentle and it is easy to get started. His Part 0 Getting Started offers a convenient way to understand the overall framework of machine learning (ML) and deep learning (DL).

The second is ML for Biologists.

Course website: [Machine Learning for Biologists](https://carpentries-incubator.github.io/ml4bio-workshop/).

Most current machine-learning and deep-learning courses lack descriptions of specific biological contexts for their use. As a result, even after taking these courses, biology students find it difficult to develop an intuition for using these tools to solve concrete biological problems. Machine Learning for Biologists is a relatively short workshop that can help us understand some basic applications of machine learning to biological problems and gradually develop an intuition for when machine learning can be used.

<a id="deep-learning"></a>

## 3. Quickly Understand the Overall Framework of Deep Learning

After establishing a basic understanding, you can use MIT 6.S191 to quickly learn about the main models and applications of deep learning.

Course website: [MIT 6.S191](https://introtodeeplearning.com/?trk=public_post-text).

Compared with MIT's earlier AI courses, its coding labs now use the mainstream PyTorch framework, and it provides both videos and corresponding slides. You can start by working through Lectures 1 and 2, Lab 1, Lectures 3 and 4, and Lecture 8.

You do not necessarily need to master every formula and every piece of code on your first pass. Initially, focus on understanding what problems the different models solve and how the models relate to one another.

As you learn, you can also actively think about how these models could be applied to protein design. For example:

| MIT 6.S191 | Application in protein design |
|---|---|
| Sequence modeling | Protein language models and protein sequence modeling |
| Generative modeling | Sequence or structure generation |
| Diffusion model | RFdiffusion |
| AI for Science | Drug and protein design |

<a id="computational-biology"></a>

## 4. Learn More About Machine-Learning Applications in Protein Design

Then, if we want to learn more about protein design, we can turn to MIT Machine Learning for Computational Biology. Lectures 8–11 are specifically about protein design.

Fall 2024 course videos: [Watch the videos](https://lnkd.in/efSvp7hY).

Fall 2024 course notes: [Read the notes](https://lnkd.in/eWBAxQHk).

Course website: [Machine Learning for Computational Biology](https://lnkd.in/eemavz6J).

MIT Canvas course page: [Course modules](https://canvas.mit.edu/courses/33939/modules).

The Canvas page contains the corresponding slides, transcripts, and schedule, which makes it convenient to consult.

Some course notes are mainly compiled from recordings, so their content can be somewhat disorganized. I therefore recommend using the course slides and videos as the main materials, with transcripts as a supplement.

Once you have watched and understood all of these, you should basically be able to read papers yourself with AI's help and learn about model design and implementation. I will also gradually write up this material and the process of doing it in future posts.

<a id="further-study"></a>

## 5. If You Want to Strengthen Your Foundations Further

The path above is suited to building an overall understanding and starting to learn through projects. I think it is particularly suitable for biology undergraduates who want to begin projects and join a laboratory.

If you want to invest substantial time in a deeper, systematic understanding of machine learning, deep learning, and the details of model training, you can continue with the courses below. Most of their websites provide videos, lecture notes, and coding exercises.

### 1. Foundations of Statistical Machine Learning: Andrew Ng's Machine Learning Specialization

Course website: [Machine Learning Specialization](https://www.deeplearning.ai/specializations/machine-learning).

Andrew Ng's machine-learning course explains things in considerable detail and moves at a relatively gentle pace, making it suitable for a systematic introduction.

The first part of the course mainly introduces traditional machine learning, while the second and third parts gradually move into neural networks and deep learning.

If you are not yet familiar with concepts such as supervised learning, loss functions, optimization methods, model evaluation, overfitting, and regularization, you can start with this course series. You only need to watch the first part; the version on Coursera is sufficient.

### 2. Model Training Skills: Stanford CS231n

Course website: [Stanford CS231n](https://cs231n.stanford.edu/).

Although CS231n focuses on computer vision, it is a very solidly designed course.

It introduces models such as convolutional neural networks, but more importantly, it systematically discusses model training, optimization, initialization, regularization, and hyperparameter tuning.

This makes the course particularly suitable for developing model training skills. Even if you do not work in computer vision later, much of the training experience can be transferred to protein models.

### 3. Systematic Training in Deep Learning: CMU 11-785

Course website: [CMU 11-785](https://deeplearning.cs.cmu.edu/S26/index.html).

CMU 11-785 is a fairly comprehensive introductory course in deep learning.

It covers a wide range of topics and includes coding assignments, recitation sessions, and explanatory videos. Its downside is a heavy assignment load, which requires a substantial time commitment.

If you want to master different deep-learning models through extensive practice, this course is a good fit.

### 4. Supplementary Concepts: Dive into Deep Learning

Online tutorial: [Dive into Deep Learning](https://d2l.ai/).

Dive into Deep Learning, or D2L, is a classic online deep-learning tutorial.

If you encounter concepts you do not understand while taking other courses, you can use D2L together with GPT for supplementary learning. It is useful for looking up model architectures and mathematical principles.

<a id="alphafold"></a>

## 6. Try to Understand AlphaFold and AlphaFold 3

After mastering the basics, you can also try reading explanations of the AlphaFold and AlphaFold 3 models and their code implementations.

The following resources are fairly suitable for getting started.

### 1. AlphaFold Decoded

Project repository: [AlphaFold Decoded](https://github.com/kilianmandon/alphafold-decoded).

This project is useful for taking apart and understanding AlphaFold's model architecture.

### 2. The Illustrated AlphaFold

Article: [The Illustrated AlphaFold](https://elanapearl.github.io/blog/2024/the-illustrated-alphafold/).

Although its title is The Illustrated AlphaFold, it mainly introduces AlphaFold 3. The article uses intuitive diagrams, making it useful as an aid to understanding the model architecture.

### 3. An AlphaFold 3 PyTorch Implementation

Project repository: [AlphaFold 3 PyTorch Implementation](https://github.com/lucidrains/alphafold3-pytorch).

This project provides a PyTorch implementation of AlphaFold 3.

When reading third-party implementations like these, focus on which modules make up the model, how tensors pass between modules, and how the mathematical descriptions in the paper become concrete code.

<a id="projects"></a>

## 7. The Learning Method I Recommend Most: Learn Through Projects

The method I recommend most, now that we have Codex and GPT, is to ask them to develop a learning approach for you, recommend papers or relevant projects and competitions in protein design, and help you reproduce models from papers or examine their details to see whether they can be optimized. Use datasets for training and learn while implementing projects. Even at the earliest stages of learning, for example when taking MIT 6.S191, you can ask AI how a model is used in protein design, why it can be applied there, and which of its characteristics make that possible.

For example, you can ask AI to help with the following:

- Develop a staged learning path based on your background;
- Recommend important papers in protein design;
- Find projects, competitions, and public datasets suitable for beginners;
- Explain model architectures and mathematical formulas in papers;
- Read and organize your understanding of open-source project code;
- Reproduce models from papers;
- Analyze why training fails or performance is poor;
- Try to optimize models, and use public datasets for training and validation.

You do not need to wait until you have learned all the foundations before starting this way of learning.

Even when first studying MIT 6.S191, as soon as you encounter a model, you can ask AI directly:

- How could this model be applied to protein design?
- Why is it suitable for solving this kind of problem?
- Which of its architectural features play a key role?
- If it were adapted to protein sequence or structure generation, which parts would need to change?

Learning around concrete questions is usually more effective than simply watching courses in order. Many concepts only become truly understandable through reading code, processing data, training models, and analyzing results.

<a id="summary"></a>

## Summary

An overview of how to explore and appreciate ML for protein design, and get started:

1. Rosetta Commons ML Protein Design Bootcamp 2025.
2. Part 0 of Prof. Richard Xu's interactive tutorial.
3. Machine Learning for Biologists.
4. Selected lectures from MIT 6.S191.
5. Lectures 8–11 of MIT Machine Learning for Computational Biology.
6. Learn with a concrete purpose through relevant competitions and projects. Choose a paper with an open-source code project related to a competition or a small research topic, and try to reproduce it or make a minimal algorithmic improvement. You can first ask AI to suggest improvements, then repeatedly question it about the details and reasons.
