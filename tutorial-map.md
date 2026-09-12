# Intro to computational neuroscience

Three levels of inquiry suggested by David Marr:

**Computational:** What problem does the brain solve, and why?

**Algorithmic:** What representations and procedures could solve it?

**Implementation:** What neural mechanisms could carry out these computations?

Keep these questions in mind when moving between models, data, and behavior. A model may predict neural activity without identifying the mechanism that produced it; an analysis may reveal a pattern without explaining its function.

This guide brings together all 18 categories from the original resource list, with additional courses, practical examples, and selected papers. Treat it as a map: choose one core course and one direction, then return for resources that answer your next question. The notes explain what each resource is useful for and where to begin; the main practice examples also suggest a small task. There is no need to complete every course or open every link.

If you are starting from scratch, read the [six-step tutorial](#tutorial-how-to-use-this-resource-list-to-learn-without-getting-lost) first. Sections 1–3 help you get started; Sections 4–11 support particular methods and research directions; Sections 12–18 are useful for projects, keeping up with research, and exploring the wider field.

**Find a section**

- [1. Field map](#1-big-picture-motivation-and-field-maps) · [2. Intro courses](#2-intro-computational-neuroscience-courses) · [3. Foundations](#3-math--python-foundations-for-neuroscience)
- [4. Neural data analysis](#4-neural-data-science-signal-processing-and-analysis-workflows) · [5. Theory and modeling](#5-core-theorymodeling-reference) · [6. Statistics and ML](#6-statisticsml-for-neural--behavioral-data-advanced)
- [7. Deep learning](#7-deep-learning-tool--implementation-resources) · [8. NeuroAI](#8-neuroai-bridging-models-representations-and-brains) · [9. BCI and decoding](#9-bci--neural-decoding-competitions--reproducible-codebases)
- [10. Neuroimaging](#10-neuroimaging-brain-anatomy) · [11. Open data and standards](#11-open-sciencedata-portalstracking-funding--initiatives) · [12. Competitions](#12-competitions-hackathons)
- [13. Paper updates](#13-paper-update) · [14. Communities and meetings](#14-community-meetings-and-conferences) · [15. Blogs](#15-blogs--explainers-for-intuition--research-craft)
- [16. Resource collections](#16-meta-lists) · [17. Personal interests](#17-personal-interests) · [18. Philosophy of modeling](#18-mathematical-biologyphilosophy-of-modeling-for-scientific-taste)

## 1) Big-picture, motivation, and field maps

**Books/framing**

- **In the Land of Invented Languages, Arika Okrent** (2010 edition listed in the original guide). Why is it so hard to invent a language, and what does that tell us about human thought? An enjoyable way to think about representation, communication, and the people who build formal systems. Keep it as motivation rather than a prerequisite for the technical material.
- **Vision, David Marr (1982).** Only really need to read the first chapter to start. Use the three levels to distinguish the problem a system solves, the representations and procedures it uses, and its physical implementation. Return to this distinction when reading papers about models and brains.
- **Abbott (2008), [Theoretical Neuroscience Rising](https://doi.org/10.1016/j.neuron.2008.10.019):** a short introduction to how theory can shape questions and experiments. Try identifying one example where a model does more than fit observations. The reading index records a publisher-hosted free version, although direct access was not confirmed during the earlier check; this is optional opening reading.

**Academic & career map**

- **[NeuroTree](https://neurotree.org/neurotree/):** academic genealogy and research connections. Useful for following how a topic spreads across laboratories; read the groups' recent work before inferring current research fit from an academic connection.
- **[Brain PhD application handbook](https://brainphd-cn.github.io/handbook/short-intro/):** a Chinese guide to the field and application planning. Start with the overview and then the stage relevant to you—exploring directions, finding groups, or preparing an application.
- **[Neuroscience Undergraduate and Graduate Programs](https://neurosciencenews.com/neuroscience-programs/):** a starting list for discovering programs. Follow through to each university's current program and admissions pages for requirements and deadlines.

## 2) Intro computational neuroscience courses

**Pick one main course**

- **[Coursera Computational Neuroscience](https://www.coursera.org/learn/computational-neuroscience/), Rajesh Rao & Adrienne Fairhall:** a broad introduction to how mathematical models describe neural activity, coding, and learning. Follow the course sequence if you prefer a structured introduction; use Section 3 to fill specific gaps in mathematics or programming along the way. Check the platform's current access options when choosing the course.
- **Stanford NEPR208:** a compact, question-driven introduction with [lectures](https://druckmann-lab.github.io/nepr208/lectures/) and [public assignments](https://druckmann-lab.github.io/nepr208/assignments/) on perceptrons, neural coding, and learning and memory. A perceptron is a simple weighted-input classifier; neural coding asks how activity relates to stimuli or other variables. Match an assignment to its lecture and write down the question the model is meant to answer. The original list referred to Spring 2025; the rolling course page showed Spring 2026 when checked.
- **APSC 450, Computational Neuroscience, Spring 2025:** a seminar-style course using Marr's framework to discuss the hindbrain, hippocampus, thalamus, basal ganglia, and visual cortex. Useful for thinking about how theory complements systems-neuroscience experiments. Choose a brain system you already know a little about, then use its readings and discussion questions: [syllabus](https://apsc450computationalneuroscience.com/syllabus/) and [resources](https://apsc450computationalneuroscience.com/resources/).
- **[Neuromatch Academy — Computational Neuroscience](https://compneuro.neuromatch.io/tutorials/intro.html):** a useful default for learning with both theoretical models and data analysis. Start with the selected Python material in Section 3, then the course's introduction to modeling and the units relevant to your direction. Its [course-content repository](https://github.com/NeuromatchAcademy/course-content?tab=readme-ov-file) is also retained from the original list. Public self-study materials and the live, supported program are separate; consult the [current application information](https://neuromatch.io/computational-neuroscience/) rather than assuming fixed annual dates.
- **[MIT 9.40, Introduction to Neural Computation](https://ocw.mit.edu/courses/9-40-introduction-to-neural-computation-spring-2018/):** a lecture-based alternative with videos, notes, and problem sets on neurons, sensory responses, and simple networks. Follow lectures together with their exercises if this format suits you. The original third-party solutions repository is retained, clearly labeled, in Section 5.

## 3) Math + Python foundations for neuroscience

**Neuroscience foundations, if needed**

- **[Neuroscience for machine learners](https://neuro4ml.github.io/):** a bridge for readers who already know machine learning and want to understand the biological questions behind neural models. Use it to identify gaps in your knowledge of neurons, circuits, and experiments before moving into NeuroAI.
- **[Neuroscience Online](https://nba.uth.tmc.edu/neuroscience/s1/chapter01.html):** useful for readers coming from mathematics or computer science. Membrane potential is a voltage difference; a spike is a brief electrical event; a spike train records the event times. Start with Chapter 1, Sections 1.1–1.3, and Figures 1.2–1.3. Leave the later sections for another pass. Try distinguishing voltage, spike times, and firing rate: five spikes in 0.1 seconds correspond to an average rate of 50 Hz. The longer companion guide explains these quantities before the reading.

**Math + Python**

- **[Basic Introduction to Maths & Python for Neuroscience](https://github.com/john-s-butler-dit/Basic-Introduction-to-Python):** a foundation resource from the original list. Start with code that creates arrays and plots a signal; identify each variable's meaning and units before moving to more advanced numerical work.
- **Harvard Neurobio 212 Math Tools:** [repository](https://github.com/ebatty/MathToolsforNeuroscience) and [course site](https://ebatty.github.io/MathToolsforNeuroscience/). Choose mathematical topics around the next analysis or model. Vectors and covariance support population analysis; probability supports estimation from noisy measurements; differential equations support dynamical models.
- **[NYU Math Tools for Neural & Cognitive Science](https://www.cns.nyu.edu/~eero/math-tools/):** recordings for a more sustained treatment of the mathematics. Useful when a short notebook leaves a conceptual gap. Match a lecture topic to the calculation you want to understand rather than starting several full courses together.
- **[Bates College computational neuroscience textbook](https://mrgreene09.github.io/computational-neuroscience-textbook/index.html):** an alternative text-based route. Use the contents to match a topic from your main course, and compare how the same idea is explained in words, equations, and code.
- **[Neuromatch Python Workshop 1](https://compneuro.neuromatch.io/tutorials/W0D1_PythonWorkshop1/student/W0D1_Tutorial1.html):** introduces Python through a simple neuron model. First use Sections 1.2, 1.3, 2.1, and 3 for comments, arithmetic, loops, and plotting, with Exercises 1, 2, and 5. Then read the beginning of Section 6 on arrays and Exercise 13's initialization, stopping before its simulation loop. An array can hold values at successive times; another dimension can represent different neurons. Explain the dimensions and units of one plotted signal before attempting the full simulation.

**Neuromatch tracks**

- **Computational Neuroscience:** the main course above combines modeling, statistics, and data analysis. Choose this route first if the goal is broad computational-neuroscience preparation.
- **[NeuroAI](https://neuroai.neuromatch.io/tutorials/intro.html):** model–brain comparisons, representations, circuits, and learning. A later choice once neural-network basics and the biological questions are familiar; Section 8 gives a reading route.
- **[Deep Learning](https://deeplearning.neuromatch.io/tutorials/intro.html):** a separate route into neural-network methods. Use the units needed for your model or decoding project; the larger collection in Section 7 is supplementary.

## 4) Neural data science, signal processing, and analysis workflows

Choose a signal type and one analysis question. EEG/MEG, spike recordings, and fMRI require different interpretations even when they share mathematical tools.

- **[Case Studies in Neural Data Analysis](https://mark-kramer.github.io/Case-Studies-Python/intro.html), Python companion:** useful for connecting an analysis method to a concrete recording. Pick one case involving the signal you want to understand, such as a spectrum or spike–field relationship. Before reading the code, identify the measured quantities, the axes of the main figure, and the claim the analysis is meant to support.
- **[Dalhousie NESC 3505 — Neural Data Science](https://neuraldatascience.io/):** a Python-based introduction and an alternative data-analysis route. The original link points specifically to [ERP grand averages and visualization](https://neuraldatascience.io/eeg/erp-group-viz/). Use that page after understanding how trials are aligned and averaged; start from the textbook contents if those steps are unfamiliar.
- **[EEG artifact learning](https://www.learningeeg.com/artifacts):** examples for recognizing contamination in recordings. Try describing what makes a pattern suspicious and what additional information would distinguish it from neural activity. Artifact recognition should inform preprocessing choices rather than become a list of numbers copied between datasets.
- **[MNE-Python analysis overview](https://mne.tools/stable/auto_tutorials/intro/10_overview.html):** a concrete EEG/MEG workflow. Raw stores continuous sensor data; Epochs contains short segments aligned to repeated events; Evoked is their average within a condition. Read Loading data → Detecting experimental events → Epoching continuous data → Estimating evoked responses. On the first pass, skip ICA, time-frequency analysis, and source localization, and stop at the EEG joint plot. Explain what averaging reveals and which trial differences it hides. The example is already filtered and downsampled; its fixed ICA exclusions are not a rule for other data.

For a first spike-recording project, see the AllenSDK example in Section 11. For fMRI, use the Nilearn example in Section 10. The companion guide gives precise reading boundaries and small checks; the first pass can be reading the webpage before installing software or downloading data.

## 5) Core theory/modeling reference

**Books + first models**

- **[Theoretical Neuroscience, Dayan & Abbott](https://www.gatsby.ucl.ac.uk/~dayan/book/index.html):** a reference for neural coding, neuron and network models, and learning. Use it alongside a course, choosing chapters around the current problem.
- **Neuronal Dynamics, Gerstner et al.:** a good place to connect a neuron model with code. A leaky integrate-and-fire neuron accumulates input, relaxes toward rest, and records a spike when voltage reaches a threshold. A useful first question is why constant input sometimes produces no spikes. Start with [1.3.1, Integration of Inputs](https://neuronaldynamics.epfl.ch/online/Ch1.S3.html#SS1), and [1.3.3, The Threshold for Spike Firing](https://neuronaldynamics.epfl.ch/online/Ch1.S3.html#SS3), then try [Exercise 1.1, minimal current](https://neuronaldynamics-exercises.readthedocs.io/en/latest/exercises/leaky-integrate-and-fire.html#exercise-minimal-current). Predict the result before running it. The f–I curve—firing rate versus input current—is a useful next exercise; the starred textbook sections can wait.
- **[Brian2 Part 1: Neurons](https://brian2.readthedocs.io/en/stable/resources/tutorials/1-intro-to-brian-neurons.html):** follow Units system → A simple model → Adding spikes → Refractoriness, stopping before Multiple neurons. Look for the difference between recording voltage and recording events. The example's voltage variable is dimensionless, so its values cannot be read directly as millivolts. Once this single-neuron behavior is clear, move to a few connected neurons in Part 2.
- **[The Virtual Brain](https://www.thevirtualbrain.org/tvb/zwei/home):** a whole-brain modeling and simulation platform, also retained under project communities in Section 14. Approach it after studying dynamical systems: first identify the model's regional variables, how regions are connected, and which measurement the simulation is intended to explain. It is an advanced modeling direction rather than the first single-neuron exercise.

**Courses + advanced topics**

- **[COSYNE past tutorials](https://www.cosyne.org/past-tutorials):** advanced topics at the interface of theory and experiments. Choose one tutorial connected to a question you already have; its references can guide a focused reading session.
- **[Recurrent neural networks for cognitive neuroscience](https://cbmm.mit.edu/video/tutorial-recurrent-neural-networks-cognitive-neuroscience), CBMM tutorial:** useful once a recurrent network's evolving state is familiar. Ask what task the network performs and which analysis might explain its behavior; compare with the papers below.
- **[MIT 9.49/9.490, Neural Circuits for Cognition, Fall 2019](https://stuff.mit.edu/afs/athena/course/9/9.49/www/):** a course entry for relating circuit models to cognitive functions. Use it around a specific circuit or task rather than treating it as another introductory course to complete immediately.
- **[MIT 9.19, Computational Psycholinguistics, Fall 2023](https://rlevy.github.io/9.19-syllabus/about.html):** a direction-specific course for language and cognition. A useful bridge from formal models to behavioral questions about language processing.
- **MIT 9.40 materials:** use the official course in Section 2 as the main entry. The original [Neural Computation Solutions repository](https://github.com/shauryagoyall/MIT-OCW-9.40-Neural-Computation-Solutions) is retained as a third-party companion, not official answers.
- **[MIT 6.5240, Sublinear Time Algorithms, Fall 2024](https://people.csail.mit.edu/ronitt/COURSE/F24/):** an optional theoretical-computer-science resource. Relevant when a project raises a question about large-scale algorithms; it is not a prerequisite for neuron modeling.
- **MIT 6.804/9.66/9.660, Computational Cognitive Science:** the original collection includes a [Fall 2019 course page](https://stellar.mit.edu/S/course/9/fa19/9.66/), [Cocosci resources](https://cocosci.mit.edu/resources), [project ideas](https://cbmm.mit.edu/sites/default/files/courses/project_ideas.pdf), and a [CBMM course entry](https://cbmm.mit.edu/lh-computational-cognitive-science). Start with a specific cognitive problem, then choose the matching material. The original [Athena directory](https://stuff.mit.edu/afs/athena/) is also retained as a legacy directory link; it does not identify a particular lesson.
- **UCB VS265, Neural Computation:** also belongs here as a theory resource. See the main course entry in Section 6.

**Selected papers, according to the model**

- **Izhikevich (2003), [Simple model of spiking neurons](https://doi.org/10.1109/TNN.2003.820440):** read after LIF to compare the variety of firing patterns a small model can reproduce. The [author's paper and examples](https://www.izhikevich.org/publications/spikes.htm) provide a starting point. Reproducing a firing pattern does not by itself identify the underlying ion channels.
- **Hodgkin & Huxley (1952), [A quantitative description of membrane current and its application to conduction and excitation in nerve](https://doi.org/10.1113/jphysiol.1952.sp004764):** a historical follow-up using [free scanned full text](https://pmc.ncbi.nlm.nih.gov/articles/PMC1392413/). First relate the variables to physiological quantities with a modern textbook; the complete derivation can be a later reading.
- **Schwartz et al. (2006), [Spike-triggered neural characterization](https://doi.org/10.1167/6.4.13):** links sensory receptive fields to estimates made from stimuli and spike times. Start by asking what a spike-triggered average measures, then try recovering a known receptive field from simulated data. An [author-institution version](https://www.cns.nyu.edu/pub/lcv/schwartz05-reprint.pdf) is available.
- **Vyas et al. (2020), [Computation Through Neural Population Dynamics](https://doi.org/10.1146/annurev-neuro-092619-094115):** a review connecting trajectories and dynamical systems to neural computation. Begin with its mathematical primer and illustrations; [free full text](https://pmc.ncbi.nlm.nih.gov/articles/PMC7402639/). A low-dimensional picture is a starting point for asking how a system evolves, not an explanation on its own.
- **Sussillo & Barak (2013), [Opening the Black Box](https://doi.org/10.1162/NECO_a_00409):** a more advanced follow-up on fixed and slow points in trained RNNs. Study a two-dimensional system and local linearization first. A free full-text route was not confirmed in the earlier check, so this remains optional advanced reading.
- **Schultz, Dayan & Montague (1997), [A Neural Substrate of Prediction and Reward](https://doi.org/10.1126/science.275.5306.1593):** an entry into prediction-error learning; an [author-hosted version](https://www.gatsby.ucl.ac.uk/~dayan/papers/sdm97.pdf) is available. Sketch expected signals before learning, after learning, and when an expected reward is omitted. Distinguish reward from a change in predicted reward; later work is needed for the full range of dopamine signals.

## 6) Statistics/ML for neural & behavioral data (advanced)

**Courses**

- **[UCB VS265, Neural Computation](https://redwood.berkeley.edu/courses/vs265/):** retained as the main entry for the course that appeared in both Sections 5 and 6 of the original. Use the syllabus to connect theoretical questions to statistical or computational methods after an introductory course.
- **[Stanford STATS320, Machine Learning Methods for Neural Data Analysis](https://slinderman.github.io/stats320/):** a later course for modeling neural data. Start with a concrete modeling question and identify what is observed, what is inferred, and how the model will be evaluated.
- **[Stanford CS375, Large-Scale Neural Network Models for Neuroscience](https://cs375.stanford.edu/index.html):** for readers moving toward large neural-network models and neuroscience. The original [2025 homework training script](https://github.com/neuroailab/cs375/blob/master/2025/hw1/train.py) is retained as a specific example; read its assignment context and required inputs before running the script alone.
- **Stanford Psych 254a, Advanced Statistical Modeling for Behavioral and Neural Sciences:** [course page](https://web.stanford.edu/class/psych254a//index.html) and [repository](https://github.com/neuroailab/psych254a/tree/main). Useful for statistical modeling around behavioral or neural questions; choose a method that addresses the structure of your data, including repeated observations and group differences where relevant.

**Population analysis + reliable evaluation**

- **Cunningham & Yu (2014), [Dimensionality reduction for large-scale neural recordings](https://doi.org/10.1038/nn.3776):** useful when looking at many neurons at once becomes unmanageable. In the [free full text](https://pmc.ncbi.nlm.nih.gov/articles/PMC4433019/), start with Figure 1, then Intuition behind dimensionality reduction and Figure 2. Each point describes three neurons at one moment; time connects the points into a trajectory. Only read the opening of Basic covariance methods and Figure 4a for now. Explain what projection preserves and loses. A direction with large variance does not automatically represent memory or decision-making.
- **Kriegeskorte et al. (2009), [Circular analysis in systems neuroscience](https://doi.org/10.1038/nn.2303):** useful before comparing conditions or training a decoder. Choosing promising measurements using the same information later used to test them can make noise look convincing. Read the abstract, Figure 1b, and Figure 2b with Example 1 in the [free full text](https://pmc.ncbi.nlm.nih.gov/articles/PMC2841687/). Training and test runs are separated, but test information was already used during voxel selection. Redraw the workflow to remove that dependence, then read A policy for noncircular analysis and Figure 4.
- **Varoquaux et al. (2017), [Assessing and tuning brain decoders: Cross-validation, caveats, and guidelines](https://doi.org/10.1016/j.neuroimage.2016.10.038):** read before a decoding project; a [free author version](https://arxiv.org/abs/1606.05201) is available. Ask whether the test set represents another trial, run, session, or participant. Keep feature selection and tuning inside the training process, and report uncertainty as well as average performance. The publication year is 2017; the preprint first appeared in 2016.

These papers connect to the examples in Sections 4, 9, and 10. The companion guide gives figure-level reading suggestions and small checks; the full bibliography is available separately.

## 7) Deep learning tool + implementation resources

Use this section when your next neuroscience question needs a trainable neural network. First be able to follow a batch of inputs through a model, understand the loss, and explain how the weights change. One course and one small implementation are enough to start; the larger collections are references to return to when a particular model becomes useful.

**Core courses**

- **Stanford CS231n:** a useful route into neural networks through image recognition. Start with the [course](https://cs231n.stanford.edu/) and its [notes](https://cs231n.github.io/), concentrating on classification, loss functions, gradients, and backpropagation before convolutional networks. A loss assigns a score to prediction errors; backpropagation computes how changing each weight affects that score. Try tracing the dimensions of one input batch and explaining one training step. For NeuroAI, keep asking which parts of an image model could be compared with visual responses. Detailed architectures can follow after the basic training loop makes sense.
- **CMU Deep Learning, Spring 2025:** another substantial [core course](https://deeplearning.cs.cmu.edu/S25/index.html). Choose it as an alternative structured route, and follow its prerequisites and assignments in order; the archived S25 materials need not be studied alongside a second full deep learning course.
- **Deep Learning Systems:** the [lectures](https://dlsyscourse.org/lectures/) are useful when you want to understand how a framework carries out differentiation and computation. Return here after writing a small training loop; the duplicate entry in the original hands-on list is consolidated here.
- **Stanford CS224n:** use the [course schedule](https://web.stanford.edu/class/cs224n/index.html#schedule) for language models, word representations, and sequence modeling. For a speech or language project, first connect a sequence of inputs to its prediction target, then choose the relevant model lectures.

**Hands-on repos & references**

- **Straightforward neural networks using PyTorch:** [yunjey's tutorial](https://github.com/yunjey/pytorch-tutorial?tab=readme-ov-file) is a small-code starting point. Begin with a basic model and identify data loading, forward prediction, loss, and weight updates before moving to another architecture.
- **Google Deep Learning Tuning Playbook:** [original](https://github.com/google-research/tuning_playbook) and [Chinese translation](https://blog.csdn.net/qq_20144897/article/details/128808095). Useful once a baseline runs: choose one training problem, make one controlled change, and record both the setting and result.
- **深入浅出 PyTorch:** a [Chinese-language guide](https://datawhalechina.github.io/thorough-pytorch/) for tensors, automatic differentiation, and model implementation. Use the relevant chapter to explain a line of code that is still unclear in your small example.
- **Annotated Research Paper Implementations:** [labml](https://nn.labml.ai/) connects model descriptions with annotated code, including Transformers, StyleGAN, diffusion models, normalization, and sampling. Choose one mechanism already encountered in a paper; reading the entire collection is unnecessary.
- **PyTorch implementations of multiple models:** [lucidrains](https://github.com/lucidrains) is useful for finding a concrete implementation of a named model. Read that repository's assumptions, example, and dependencies before treating it as a paper reproduction.
- **Project-based learning, from LLMs and fine-tuning to RNNs:** [Awesome AI Data Guided Projects](https://github.com/youssefHosni/Awesome-AI-Data-Guided-Projects) collects project ideas. Pick one with a clear input, output, and evaluation that can fit your current question.
- **Machine-Learning-Collection:** [repository](https://github.com/aladdinpersson/Machine-Learning-Collection?tab=readme-ov-file) and [the original PDF's linked PyTorch section](https://github.com/aladdinpersson/Machine-Learning-Collection?tab=readme-ov-file#pytorch-tutorials). The original note suggested this for TensorFlow, but its embedded link opens PyTorch tutorials; select examples by their actual framework.
- **Classic papers in deep learning:** the original [shared reading folder](https://arc.net/folder/D0472A20-9C20-4D3F-B145-D2865C0A9FEE) is retained as a browsing resource. Select a paper connected to the model you are using, then find its original publication and code.
- **Collection of multiple models:** [Awesome PyTorch List](https://github.com/bharathgs/Awesome-pytorch-list) is useful for looking up libraries and implementations after choosing a task.
- **A broad map of PyTorch resources:** [The Incredible PyTorch](https://github.com/ritchieng/the-incredible-pytorch) covers many application areas. Use it to locate a missing tool or topic, with the current tutorial providing the learning order.
- **From scratch:** [Justin Johnson's PyTorch examples](https://github.com/jcjohnson/pytorch-examples) are useful for comparing explicit computations with framework abstractions. Follow how gradients and parameter updates are represented in a small network.
- **CNN and RNN visual references:** [Stanford CS230 notes](https://stanford.edu/~shervine/teaching/cs-230/) can help connect convolutional and recurrent network terminology to diagrams. Keep them beside an implementation and match the symbols to array dimensions.

## 8) NeuroAI: bridging models, representations, and brains

Start with one question: what observation would make a trained network a useful model of a brain computation? A model's task performance, its internal representations, and its learning mechanism provide different kinds of evidence. The readings below move from this distinction to a small representation analysis.

- **Richards et al. (2019), A deep learning framework for neuroscience:** [full text](https://pmc.ncbi.nlm.nih.gov/articles/PMC7115933/) and the original [Danijar project page](https://danijar.com/project/deepneuro/#short-biography). The framework distinguishes the objective function, which scores learning outcomes; the learning rule, which changes connections; and the architecture, which defines network structure. Read the abstract, Figure 1, and the opening of “The three core components of a deep learning framework for the brain.” Then use Figure 4 to see how a model could predict changes in neural activity, and finish with one issue in “Caveats and concerns.” Try specifying the three components for one task and an observation that could test them. The algorithm details can wait.
- **Toward an Integration of Deep Learning and Neuroscience:** a complementary [review](https://pmc.ncbi.nlm.nih.gov/articles/PMC5021692/) for understanding the exchange of ideas between the two fields. After the abstract and introduction, choose one connection to your current model and explain what evidence would support it.
- **Kriegeskorte, Mur & Bandettini (2008), Representational similarity analysis:** [full text](https://pmc.ncbi.nlm.nih.gov/articles/PMC2605405/). Useful when model units and recorded neurons cannot be matched one by one. A representational dissimilarity matrix (RDM) records how different the responses to each pair of stimuli are. First understand why the rows and columns refer to stimuli, then make two small RDMs for the same six simulated stimuli and compare them. Record the distance measure and what happens when noise increases. Similar matrices constrain an explanation of representation; they do not establish that the brain and model use the same mechanism.
- **Contextual Feature Extraction Hierarchies Converge in Large Language Models and the Brain:** [paper](https://www.nature.com/articles/s42256-024-00925-4#rightslink) and [Code Ocean code and data](https://codeocean.com/capsule/8162573/tree/v1). An advanced language-model comparison example. First identify the neural measurement, model features, and evaluation split; then trace one reported comparison through the code. A packaged environment can help reproduction, but the scientific interpretation still depends on what was compared and how predictions were tested.
- **Yang et al. (2019), Task representations in neural networks trained to perform many cognitive tasks:** [full text](https://pmc.ncbi.nlm.nih.gov/articles/PMC11549734/) and [author code](https://github.com/gyyang/multitask). One recurrent network learns several cognitive tasks, allowing task relationships to be studied within the same system. Start with one task and one task-relationship analysis, then inspect a pretrained model through the repository's `paper.py` entry point. Try explaining what changes across tasks while the network is shared. The original tested environment uses TensorFlow 1.8 and Python 2.7/3.6, so a runnable reproduction needs an older environment or a documented port. Full retraining is a later project.
- **NeuroGym + task-model overview:** [NeuroGym](https://github.com/neurogym/neurogym?tab=readme-ov-file) provides a route toward working with task environments; the original [nn-brain overview](https://deepwiki.com/gyyang/nn-brain/1-overview) is another orientation aid. Choose one task and identify observations, actions, and trial structure before combining tasks. These are related resources, rather than drop-in replacements for Yang et al.'s original environment.

The Neuromatch NeuroAI course in Section 3 can provide a structured route through this material. Choose the review and one analysis first; representation comparison and multi-task training do not both need to become a first project.

## 9) BCI + neural decoding (competitions + reproducible codebases)

A decoder maps measured neural activity to an output such as cursor movement or text. Before choosing a large model, identify the recorded signal, the prediction target, the evaluation metric, and what the held-out data represent. For speech, distinguish neural decoding from the language model that turns its output into words.

**Benchmarks/competitions**

- **Brain-to-Text Benchmark '24:** start with the [competition overview](https://eval.ai/web/challenges/challenge-page/2099/overview) and [dataset README](https://datadryad.org/dataset/doi:10.5061/dryad.x69p8czpq#readme). Then use Willett et al. (2023), [A high-performance speech neuroprosthesis](https://www.nature.com/articles/s41586-023-06377-x), its [free full text](https://pmc.ncbi.nlm.nih.gov/articles/PMC10468393/), and [author code](https://github.com/fwillett/speechBCI) to trace data preparation → recurrent decoder → language-model inference. Word error rate counts substitutions, deletions, and insertions relative to the reference words. A manageable first task is to explain that calculation and inspect an offline result. Keep the participant and data split visible when interpreting performance; the paper reports a single-participant study.
- **Brain-to-Text '24 winner's strategy:** read the [strategy manuscript](https://openreview.net/forum?id=pEh1SXCgOc) after understanding the baseline pipeline. Identify one change, its comparison, and the metric used to claim an improvement before considering the complete winning system.
- **Deep Triphone Embedding Strategy:** the original [paper link](https://arxiv.org/abs/1710.07868) and [Chinese explanation](https://www.cnblogs.com/AIBigTruth/p/14305118.html) provide related speech-model background. A triphone describes a speech sound together with its neighboring sounds; first clarify how such context enters the prediction target or representation.
- **Brain-to-Text '25:** [Kaggle competition data](https://www.kaggle.com/competitions/brain-to-text-25/data). Treat this as a separate benchmark version: read its data description and evaluation rules before carrying over a '24 pipeline. The archived competition materials can still support an offline project; participation depends on the competition's own status and access requirements.

**More decoding papers/code**

- **Neural constraints on learning, Sadtler et al. (2014):** [full text](https://pmc.ncbi.nlm.nih.gov/articles/PMC4393644/). A useful first BCI paper if you are more interested in learning than speech engineering. Neural activity often occupies a restricted set of population patterns, described here as an intrinsic manifold. Read the abstract and distinguish the two decoder perturbations: one can be solved using patterns within this manifold; the other asks for patterns outside it. Then follow the comparison of learning. Try sketching both mappings and their behavioral consequences. The result concerns the studied BCI task and learning timescale, rather than an absolute limit on what a brain can ever learn.
- **Decoding review:** the original [Briefings in Bioinformatics review](https://academic.oup.com/bib/article/22/2/1577/6054827) is useful for mapping methods to signals and tasks. Choose the part matching your data and compare its inputs, output, and validation with your proposed decoder.
- **Neural speech decoding framework:** [Flinkerlab code](https://github.com/flinkerlab/neural_speech_decoding) and [Nature Machine Intelligence paper](https://www.nature.com/articles/s42256-024-00824-8). A further speech-decoding example; begin by checking the neural recording and intended speech output, then trace one analysis through the repository.
- **Finger decoding + quadcopter control:** the original [Nature Medicine article and data-availability section](https://www.nature.com/articles/s41591-024-03341-8#data-availability). Useful for comparing a motor-control interface with speech decoding: identify the controlled variables, feedback, and evaluation before choosing code or data.

Before a decoding project, return to the validation readings in Section 6, especially Varoquaux et al. (2017) and Kriegeskorte et al. (2009). A baseline with a justified split and an explained result is already a useful first project; the competition pipeline can grow from there.

## 10) Neuroimaging, brain anatomy

- **Human brain image explorer:** [The Human Brain](https://www.thehumanbrain.info/index.php) is useful for linking anatomical names to images. Start by locating the region and section orientation used in a paper, then describe its position relative to nearby structures.
- **Neurosynth:** [fMRI meta-analysis and decoding tools](https://neurosynth.org/) connect terms in the literature with reported brain locations. Pick one term and inspect what the map summarizes; an association between a location and a term does not make that location a unique marker of the mental process.
- **Nilearn, fMRI decoding:** use the [Haxby face/house example](https://nilearn.github.io/stable/auto_examples/02_decoding/plot_haxby_anova_svm.html) after understanding classification and cross-validation. A voxel is a small volume element in an image; a run is a continuous scanning segment. First identify images, labels, and run IDs. Read the ANOVA explanation, then “Obtain prediction scores via cross validation.” ANOVA selects informative voxels within training; each outer fold holds out a complete run. Draw this split before running it. The result tests another run from the same participant, so it does not establish prediction for a new person. Weight maps can wait until the evaluation makes sense.

The first pass through a tutorial can be reading code and figures. Running a later section still requires the preceding imports, data loading, and variable definitions; the Chinese companion guide explains the boundary for the selected Nilearn example.

## 11) Open science/data portals/tracking funding & initiatives

Start by naming the measurement you need and the question it should answer. Then look for one documented dataset with a manageable subset. A portal helps you find data; the accompanying metadata, access conditions, and dataset version tell you what you can actually analyze and reproduce.

- **Open Neuroscience projects index:** [project directory](https://open-neuroscience.com/en/). Useful for discovering tools and initiatives around a chosen topic; follow an individual project's documentation once you know what it contributes.
- **NIF, Neuroscience Information Framework:** [organization and framework](https://neuinfo.org/about/organization). Use it to orient yourself among neuroscience information resources and follow their primary project pages for current details.

**Optional but strongly recommended: standards + datasets**

- **OpenNeuro:** [open BIDS datasets](https://openneuro.org/). Choose a dataset matching the recording modality and research question, then read its dataset description, participants, task, and available files before choosing a subset.
- **BIDS specification:** [data organization standard](https://bids-specification.readthedocs.io/). Read the parts needed to interpret that dataset's files and metadata; learning the entire specification is unnecessary for a first analysis.
- **DANDI + NWB:** [DANDI Archive](https://dandiarchive.org/) shares neurophysiology datasets, while the [NWB standard](https://nwb.org/) organizes data and metadata within a common format. For a concrete first task, use [Streaming and interacting with NWB data](https://docs.dandiarchive.org/example-notebooks/tutorials/bcm_2024/analysis-demo/) through “Lazy loading,” “Slicing datasets,” and “Access single unit data.” Lazy loading postpones reading data until a selected part is needed. Read a limited interval, identify the time and signal units, and explain what one unit represents. Keep the Dandiset ID, version, and asset path with your analysis. Spatial tuning can be a later exercise.
- **Allen Brain Atlas / Observatory:** the original [Allen portal](https://brain-map.org/) can lead to a small spike-analysis exercise through the [AllenSDK electrophysiology Quick Start](https://allensdk.readthedocs.io/en/latest/_static/examples/nb/ecephys_quickstart.html). A raster shows spike times across trials; a peristimulus time histogram (PSTH) summarizes activity relative to a stimulus. Choose one session, inspect session and unit metadata, then work toward the PSTH for one stimulus condition. Record the session, unit selection, bin width, and trial count, and explain what averaging hides. Define the subset before downloading. The image-classification example can wait until the signal and trial structure are clear.

These practice notes extend the original portals into specific starting points. Software, documentation, and datasets may have different licenses; the companion resource index records the distinctions checked for the supplementary entries. A listed initiative or directory is also a lead for further investigation, rather than evidence that funding or applications are currently open.

## 12) Competitions, hackathons

- **Brainhack:** [community and events](https://brainhack.org/index.html). A useful way to learn through a shared project. Choose an event and a bounded contribution, such as reproducing one example, improving documentation, or checking one analysis; its own event page gives the format and participation details.
- **Brain-to-Text '24 / '25:** the [2024 benchmark](https://eval.ai/web/challenges/challenge-page/2099/overview) and [2025 materials](https://www.kaggle.com/competitions/brain-to-text-25/data) are described with all associated papers, data, and code in Section 9. Use that sequence to understand the baseline before comparing competition strategies.

Competitions are optional. A small reproduction with a clear question, traceable input, baseline, and evaluation is an equally concrete way to finish this tutorial.

## 13) Paper update

Follow one or two feeds once you have a question to follow. Pick one paper for a closer reading each week; collecting titles is much easier than understanding a result.

- **Interesting (Computational) Neuroscience Papers:** a [curated paper feed](https://compneuropapers.tumblr.com/) covering computational neuroscience, cognition, neural plasticity, and machine learning. Useful for spotting topics beyond your immediate project. Start with a title and abstract that connect to something from your course, then look for the actual paper.
- **Neuroscience at Google DeepMind:** a [collection of neuroscience papers involving DeepMind researchers](https://kevinjmiller.org/neuroscience-at-google-deepmind/). Useful if you are interested in the connection between learning algorithms and brain research. Choose a paper around one familiar task or model; the collection is not a reading sequence.
- **Neuroscience News:** a broad neuroscience news site, with a separate [free neuroscience MOOCs list](https://neurosciencenews.com/free-neuroscience-moocs/). The course list can help with further exploration, while the news articles provide leads to research. Read the linked paper before using a news summary as evidence.
- **Follow the lab you are interested in!** Its publications page is often the most direct way to see how several papers build on one question. Try reading a recent overview together with one earlier experimental or modeling paper from the same group.

## 14) Community, meetings, and conferences

**Communities/seminars**

- **BCI Society + BCI Thursdays:** the [BCI Meeting](https://bcisociety.org/bci-meeting/) connects researchers working on brain–computer interfaces; [BCI Thursdays](https://bcisociety.org/bci-thursdays-online-events/) is the online-event entry point. A talk close to your decoding project is a useful first choice. Read its abstract beforehand and write down one question about the data or evaluation.
- **van Vreeswijk Theoretical Neuroscience Seminar:** an [online seminar series](https://www.wwtns.online/) for exploring theoretical neuroscience. Pick a talk whose main model or phenomenon you already recognize. It is fine if the first useful takeaway is the scientific question and one figure.
- **BrainMind:** the original link points specifically to [Asilomar 2026](https://brainmind.org/asilomar-2026). Use it to explore that event's themes and participants; check the organizer's current information when looking for a future meeting.
- **The Virtual Brain:** the [project website](https://www.thevirtualbrain.org/tvb/zwei/home) is useful for finding its training, events, and user community once you are interested in whole-brain simulation. The platform itself belongs with the modeling tools in Section 5. Start there to understand what the model represents before following a specialized workshop.

**Conference finders**

- [Conference Index: neuroscience in the United States](https://conferenceindex.org/conferences/neuroscience/united-states) and [International Conference Alerts](https://internationalconferencealerts.com/) can help discover event names. These are broad listings, so check the organizer, scientific program, relevant research groups, and dates on the meeting's own website before choosing one.

**Research groups**

- **Chinese-language research-group overview:** the [Zhihu collection](https://zhuanlan.zhihu.com/p/271783087) is a starting map. Choose a few groups by research question, then read their current lab pages and recent papers; a collected list may lag behind changes in people and projects.
- **Awesome Computational Neuroscience:** the [repository](https://github.com/eselkin/awesome-computational-neuroscience?tab=readme-ov-file) provides another route into groups and field resources. Search within it for the topic you have chosen rather than opening every entry.
- **The BCI Guys:** the [universities list](https://www.bciguys.com/universities) is useful for finding places to investigate for BCI research. Follow through to the relevant lab to see whether its work concerns invasive recordings, noninvasive signals, decoding methods, or applications that interest you.

## 15) Blogs + explainers (for intuition & research craft)

- **“Pursuing computational neuroscience” (Fairhall Lab):** a [short perspective on entering the field](https://fairhalllab.com/2013/06/14/pursuing-computational-neuroscience/). Good early reading when deciding how your background connects to computational neuroscience. It is a 2013 post, so use the broader advice alongside current course and application information.
- **xcorr:** a [blog on neuroscience, NeuroAI, and research practice](https://xcorr.net/). Useful when a project raises a concrete question about analysis, code, or how to do research. Pick a post related to the problem in front of you.
- **Illustrated wav2vec:** an [illustrated explanation](https://jonathanbgn.com/2021/06/29/illustrated-wav2vec.html) for readers moving toward speech representations or neural speech decoding. Begin with how the audio waveform becomes a sequence of learned features and what the training objective asks the network to predict. The detailed architecture can follow once that picture makes sense.
- **Basic notions in computational linguistics/NLP:** the notes on [Computational Linguistics](https://wiki.ruda.city/Computational-Linguistics) and [Natural Language Processing](https://wiki.ruda.city/Natural-Language-Processing) are useful for looking up vocabulary while reading language-related papers. Choose terms from one paper and connect each to its task or data; there is no need to read both sites in full.

## 16) Meta-lists

These are places to return to when the current guide does not cover your next question. A specific search—spike-train analysis, recurrent-network training, or a particular simulator—will be more useful than browsing the whole collection.

- **NeuroAI Trainee Resources:** a [collection for NeuroAI trainees](https://github.com/8erberg/NeuroAI_Trainee_Resources). Useful after the introductory material in Section 8, when you can name the topic you want to study more deeply.
- **Open Computational Neuroscience Resources:** a [broad list oriented toward understanding biological nervous systems](https://github.com/asoplata/open-computational-neuroscience-resources?tab=readme-ov-file). A useful place to look for a model, simulator, or topic-specific resource once you know the scale of the biological question.
- **COMPUTATIONAL NEUROSCIENCE on the Web:** an [annotated index](https://compneuroweb.com/) with an emphasis on compartmental models and biological neural simulations, including morphology, phase-plane and spike-train analysis, neuroinformatics, laboratories, meetings, education, and funding links. Use the relevant subsection as a pointer, then check the destination's current documentation.
- **General computational neuroscience, Neural Reckoning:** [textbooks, courses, reference material, specialized topics, and other collections](https://neural-reckoning.org/comp-neuro-resources.html). Useful for finding an alternative explanation when the first resource does not click.

## 17) Personal Interests

Optional directions for exploring what you might want to work on. Pick one that connects to a question you find interesting; these do not all need to fit into the same learning plan.

- **Next frontiers in consciousness research:** a [review](https://www.sciencedirect.com/science/article/pii/S0896627323007559?via%3Dihub) for mapping questions and approaches in consciousness research. On a first reading, choose one proposed research direction and ask what observation could distinguish its competing explanations.
- **Bio2art:** [code for constructing recurrent networks from biological network topology](https://github.com/AlGoulas/bio2art). Interesting if you want to study how connectivity constrains computation. Start with which properties of the empirical network are preserved and which properties the artificial model supplies; matching topology alone does not reproduce all the biology.
- **Praat language processing:** a [Chinese walkthrough of a speech-processing workflow and code](https://ssdd.site/language/2024/04/08/Praat%E8%AF%AD%E9%9F%B3%E5%A4%84%E7%90%86%E7%9A%84%E6%B5%81%E7%A8%8B%E5%92%8C%E4%BB%A3%E7%A0%81.html). Useful before relating acoustic measurements to brain recordings. Start with a short audio sample and identify what each extracted quantity measures.
- **Perception: multisensory integration:** an [introductory topic collection](https://fiveable.me/perception/unit-11). A possible entry point into how information from different senses is combined. Begin with one everyday example, then ask what an experiment would need to vary to test the explanation.
- **Uri Alon's collection of complex networks:** a [network collection](https://www.weizmann.ac.il/mcb/alon/download/collection-complex-networks) for exploring the brain as a complex system alongside other biological networks. Before calculating a network statistic, identify what its nodes and edges mean and how the network was measured.
- **Differential Geometry Tutorial:** start with [smooth manifolds](https://jiha-kim.github.io/crash-courses/differential-geometry/1-smooth-manifolds/) if a paper on neural manifolds makes you want the mathematical background. Keep it as a deeper follow-up to population analysis; introductory PCA and neural trajectories can be studied first.
- **Causality lists:** the [datasets collection](https://github.com/rguo12/awesome-causality-data) and [algorithms collection](https://github.com/rguo12/awesome-causality-algorithms) are references for a later causal-inference project. First decide whether the question concerns an intervention's effect or the structure of relationships, and what assumptions make it answerable from the available data.

## 18) Mathematical biology/philosophy of modeling (for scientific taste)

Good readings to revisit after building a small model. Bring one of your own results: what did the model help you understand, which assumptions mattered, and what would count as a failure?

- **Models in biology: ‘accurate descriptions of our pathetic thinking’:** [Jeremy Gunawardena's essay](https://link.springer.com/article/10.1186/1741-7007-12-29). Useful for thinking about what a mathematical model contributes to a biological argument. Read with one model from the course in mind and identify its assumptions, conclusions, and contact with experiment.
- **Theory in Biology: Figure 1 or Figure 7?:** an [essay on theory's role in biological research](https://www.cell.com/trends/cell-biology/fulltext/S0962-8924(15)00194-4). Think about when the theoretical idea enters a study: does it motivate the experiment, help interpret it, or generate the next prediction?
- **Mathematics Is Biology's Next Microscope, Only Better; Biology Is Mathematics' Next Physics, Only Better:** [Joel E. Cohen's perspective](https://journals.plos.org/plosbiology/article/info%3Adoi%2F10.1371%2Fjournal.pbio.0020439). A broader view of how biology and mathematics can shape each other. Choose one example and ask what becomes visible through the mathematical description.
- **Can a biologist fix a radio? — Or, what I learned while studying apoptosis:** [Yuri Lazebnik's essay](https://www.researchgate.net/publication/11149043_Can_a_biologist_fix_a_radio_-_Or_what_I_learned_while_studying_apoptosis). The radio analogy is a useful prompt for discussing what it means to understand a system. Ask which kinds of measurements would reveal how a device works and which would only describe its parts.
- **Jonas & Kording (2017), Could a neuroscientist understand a microprocessor?:** a [companion reading](https://doi.org/10.1371/journal.pcbi.1005268) for the radio essay. The authors apply familiar neuroscience analyses to a system whose implementation is known. Start with the question and one analysis example, then ask what the result recovers about the computation. Use it to examine the limits of a particular inference rather than treating it as a verdict on all neural-data analysis.

## Tutorial: how to use this resource list to learn without getting lost

**Step 1: Choose a track (keep Marr's three levels)**

- Neural data science/systems neuro → Section 3 → Section 4 → Section 6. Use Section 11 when you need a dataset, or Section 10 for an fMRI example.
- Modeling/dynamical systems → Section 3 → Section 5. Begin with one neuron and a prediction you can check before moving to a network.
- NeuroAI/representations → Section 3 → Section 7 → Section 8. Understand a small network before comparing its representations with neural measurements.
- BCI/decoding → Section 3 → Section 4 → Section 6 → Section 9. Add the relevant deep learning material from Section 7 when the decoder needs it.

Choose a question small enough to explain in one sentence. For example: when does constant input make a model neuron fire; what changes in the EEG average after a stimulus; or how well does a decoder predict data from a held-out run? The other tracks can wait until they help answer that question.

**Step 2: Build baseline data-processing literacy**

Start with Python, arrays, and plotting in Section 3. For one signal, be able to name the measurement, its units, and the meaning of each array dimension. Then fill the mathematics needed for the next task: probability and basic statistics for noisy observations, linear algebra for population activity, or differential equations for a dynamical model.

Run and understand one appropriate notebook. For EEG, follow an ERP or spectrum example in Section 4; for spikes, use the AllenSDK example in Section 11; for modeling, use the single-neuron exercise in Section 5. Reading the selected code and figures can be the first pass. To run it, also follow the resource's setup, data-loading steps, and preceding variable definitions. Only move on once you can explain what the main plot shows.

**Step 3: Take one structured course (can be in parallel with Step 2)**

Pick one core course in Section 2 and follow its sequence. Stanford NEPR208 is useful for lectures paired with concrete assignments; Neuromatch combines modeling and data-analysis tutorials. Coursera or MIT 9.40 can provide another structured route if you prefer their format. Keep one as the main course and use the other resources to resolve specific gaps.

For each topic, try a small exercise before opening another course: change one input, predict what should happen, then compare the result with that prediction. Public Neuromatch materials are available for self-study; live participation has a separate application process.

**Step 4: Write a weekly summary according to the course**

Keep it short: the question you studied, one idea in your own words, one figure or small result, and one thing you still do not understand. Include the resource section or notebook that helped. Use the unresolved question to choose the next reading rather than adding more material to an unstructured list.

**Step 5: Start reading papers**

Choose one paper related to the current course topic or small project. The annotated readings in Sections 5, 6, 8, 9, and 18 give starting points; the feeds in Section 13 can help you find later work.

For each paper:

1. What computation or behavior is being studied? Which of Marr's levels does the explanation address?
2. What model class is used, what does it assume, and what was actually measured?
3. What kind of data was collected, and which preprocessing steps matter for the result?
4. What does one central figure show? Which comparison supports the claim, and what alternative explanation remains?

Begin with the abstract and the suggested figure or section. Explain that result before working through every method. When prediction is involved, identify the train/test split and what new data the test represents. The [reading index](资源与文献索引.md) gives 16 selected references, access information, and further questions; [references.bib](references.bib) contains their citations.

**Step 6: Finish a small project; competition is optional**

Use one question, one documented data subset or model, and one baseline. A first project could reproduce a neuron's input–firing relationship, an ERP average, or a simple decoding result. Keep the code, environment information, data version, and an explanation of the result together. A small reproduction becomes useful when another reader can see what was tested and what the result supports.

Brain-to-Text '24/'25 in Section 9 can extend this into a data-loading → model → evaluation pipeline. Understand the baseline and evaluation before adding a winning strategy; competitions and Brainhack events in Section 12 are optional ways to continue.

**Companion material**

The [Chinese guided tutorial](计算神经科学_开放资源与分层阅读清单.md) provides longer concept explanations, bounded readings, small exercises, and worked checks for selected starting points. The [resource and literature index](资源与文献索引.md) records the supplementary sources and reading details. Use these alongside the relevant entries here; the complete original 18-category resource catalog is included in this main guide.

*Edition note: full original-resource merge completed on 11 September 2026. Selected supplementary pages and literature were checked on 8 September 2026; the merge does not represent a new availability check of every legacy link. The external notebooks were not executed as part of this edit.*
