# Computational Neuroscience: From Opening a Resource to Completing Your First Task

This guided tutorial was written with AI assistance.

This is a step-by-step guide for beginners. Each unit first explains the problem, then directs you to a short section of an external resource. Finish the current task before deciding whether to continue. Full courses, tool documentation, and the complete bibliography of 16 papers are in the [resource and literature index](tutorial-resources.en.md); open it when you need to look something up.

**First visit: do only Unit 1 today.** Spend 30–45 minutes understanding how a voltage trace differs from spike times, answer three questions, and stop there. If these ideas are already familiar, go straight to the self-checks in Unit 2 and revisit only what you find difficult. The times are this guide's estimates, not required completion times.

The default sequence is: [1 Understand neural signals](#unit1) → [2 Understand time and arrays in code](#unit2) → [3 Make predictions with a simple model](#unit3). After that, choose just one direction: [modeling](#model-branch), [EEG/MEG](#data-branch), [fMRI decoding](#fmri-branch), or [NeuroAI papers](#paper-branch). If you have not chosen a direction, completing Unit 3 is enough for now.

When reading a webpage, start with this guide's explanations and check questions. Open only the links specified for the current task. On your first pass, you can read code and example figures without installing software. Running the exercises is a second-pass task: first check the required variables, environment, and data, then select the relevant code sections.

<a id="unit1"></a>

## Unit 1: When a Neuron Is “Active,” What Do We Actually Observe?

### Understand this before opening the resource

Imagine light entering the eye while researchers record a series of brief signals from the neurons involved. There are at least two quantities to distinguish here: the **membrane potential** is the voltage difference between the inside and outside of a cell, varying continuously over time; an **action potential** is a brief electrical event, also commonly called a spike. Recording the time of each event gives a spike train. The **firing rate** is the number of spikes in a chosen time window divided by the window's duration.

This distinction will matter when you write code. An array might hold voltages sampled every millisecond, or it might hold the times of a few spikes. The numbers in these two arrays mean different things; seeing a curve does not make them the same kind of data. Scalp EEG and fMRI measure activity at other levels, which the later branches introduce separately.

### Open only one chapter this time

Go to [Neuroscience Online: Resting Potentials and Action Potentials](https://nba.uth.tmc.edu/neuroscience/s1/chapter01.html). This is an online textbook with a medical focus. The full site also covers sensory, motor, and higher brain functions; for now, use only the first three sections of this chapter.

1. Find **1.1 Introduction to the Action Potential**. Skim the historical account and focus on the relationship between light stimulation and repeated spikes in Figure 1.1. If the animation does not play, read the adjacent text.
2. Read **1.2 Features of Action Potentials** and answer just this question: in the teaching example here, does increasing stimulus strength mainly change the size of each spike or how often spikes occur?
3. Read **1.3 Intracellular Recordings from Neurons** and use Figures 1.2 and 1.3 to identify resting potential, depolarization, and threshold. **Stop at the start of 1.4 Components of the Action Potentials.**

Depolarization means that the membrane potential becomes less negative, for example, changing from −70 mV to −60 mV. It does not necessarily trigger an action potential. The threshold is the membrane-potential level at which firing is triggered in this teaching model. Establish these relationships on your first pass. Leave the next chapter's ion channels and more detailed action-potential processes until you need to explain model mechanisms.

### Three check questions, then stop

- `[-70,-65,-60] mV` and `[12,37,58] ms`: what might each represent? The first could be membrane potentials at three sampling times; the second could be the times of three spikes. Numbers alone are not enough: you need units and a definition of the data.
- If 5 spikes are recorded in 0.1 seconds, what is the average firing rate during that interval? **50 Hz**; here, Hz means events per second. It is not the size of the membrane potential, and it does not show that the spikes occurred at evenly spaced times.
- Does a rise from −70 mV to −60 mV necessarily produce a spike? **You cannot tell** without knowing the threshold and the model or cell conditions being considered.

Once you can distinguish continuous measurements, event times, and counts within a time window, you can move on to Unit 2. A stronger stimulus producing a higher firing frequency is the intuition from this example. When you later encounter adaptation, inhibition, or complex stimuli, check that relationship again rather than treating it as a rule for all neurons.

<a id="unit2"></a>

## Unit 2: On Your First Pass, Learn to Read One Piece of Neural-Signal Code

The first goal is to connect time, measured values, arrays, and plots. The suggested times are this guide's estimates, not official course durations. Neural data commonly consist of voltages or spikes recorded at many times: a one-dimensional array holds one time series, while a two-dimensional array can hold time series from several cells. Plotting helps you see when a signal changes and can reveal mistakes in time units or data arrangement.

Open [W0D1: LIF Neuron Part I][entry] directly and use only the selected portions of that page this time. LIF is a simplified model of how input current changes a neuron's membrane potential. Start with the variable explanations in [Section 1.1][lif]: recognize that `t` is time, `I` is input current, and `V` is membrane potential. Leave the differential-equation derivation for the modeling unit.

**No Python background: about 120–150 minutes.** First spend 35–45 minutes reading [1.2 Comments in code][comments], [1.3 Math operations][math], and [2.1 For Loops][loops]. Do only the uncommenting task in Exercise 1 and the ten time points in Exercise 2. Spend 25–30 minutes on [Section 3][plot], reading the plotting explanation and the input-current plot in [Exercise 5][ex5]. Then spend 30–40 minutes on the array explanation at the start of [Section 6][numpy] and the two-dimensional array explanation and initialization code at the start of [Exercise 13][ex13]. Finally, allow 20–30 minutes for the self-checks below.

**Already comfortable with variables, loops, and simple plots: about 45–75 minutes.** Try the self-checks first, then review only the material covered by the checks you did not pass. When reading the two-dimensional array example, your first pass only requires explaining what each dimension in `(n, step_end)` means; you do not need to complete the network simulation that follows.

Exactly where to stop: in the array section, stop when Exercise 11 begins, then jump to Exercise 13 and read through the initialization code before its main loop. You are only learning how data are stored here; for now, treat the membrane-potential update formula inside the loop as a given computation. Choose videos according to your current questions too. Once you pass the self-checks, you do not need to go back and watch the long video or the short recap on the same topic. If a concept repeatedly trips you up, write down “which line, which variable, and what I expected,” then use the review links below to locate the relevant explanation.

You can first read the code, example output, and “Click for solution” on the webpage without installing anything. The page provides a Colab launch link. To run the code, use the button on the official page and execute Setup and the required variable definitions first. In the student code, `...` marks a blank to fill in, and `NotImplementedError` is an exercise prompt. Do not run the entire notebook expecting every cell to succeed.

The following three self-checks were written for this guide. Try mental calculation and reading the figures first, then check with code:

1. **Read a time series.**`dt=0.001`, `for step in range(25)`, `t=step*dt`: how many time points are there, and what is the last one? The answer is **25 points, ending at 0.024 seconds**; `step` is an index, while `t` is time with units. If you get stuck, revisit [1.3][math] and [2.1][loops].
2. **Read a plot.** Label the axes in the example figure from [Exercise 5][ex5]: they should be **time (s) and input current (A)**, not membrane potential. The horizontal range of 0–0.024 seconds corresponds to discrete sampling points. You pass if you can match `t` and `I(t)` in the formula to the plot. If you get stuck, revisit [Section 3][plot].
3. **Read an array.** Treat `[[1,2,3],[3,6,9]]` as illustrative data for “2 cells × 3 time points.” Its shape should be **(2,3)**. Averaging across cells at each time point gives **[2,4,6]**, using `mean(axis=0)`; averaging across time for each cell gives **[2,6]**, using `mean(axis=1)`. If you get stuck, revisit [Section 6][numpy] and the start of [Exercise 13][ex13]. Draw the rows and columns before calculating.

For this task, produce the three self-check answers and a current plot with axis labels and units. If you are reading the material before running the code, you can annotate the official example figure. End your first pass here. Leave random input, the full LIF simulation, W0D2's classes and functions, and the full-day linear algebra, calculus, and probability courses for later tasks as needed.

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

## Unit 3: How Much Sustained Input Does a Neuron Need to Start Firing?

### Clarify the question before looking at the equation

The previous unit used arrays to record quantities that change over time. Now take one further step: use the input to predict the membrane potential at the next moment.

The simplest intuition is a container with a leak: input keeps entering while some of what has accumulated gradually drains away. In LIF, “integrate” means that past input accumulates to affect the membrane potential, while “leaky” means that the potential falls back toward its resting value without input. “Fire” is an additional rule: on reaching threshold, record an event and reset the potential. This model mainly predicts spike times; it does not generate the sharp waveform of a real action potential.

Neuronal Dynamics is a full textbook covering single cells through networks and cognition; its companion Exercises are a separate set of Python exercises. For now, read only two sections of the book and do one question from the Exercises. You only need to understand voltage, current, multiplication and division, and the idea that a quantity changes over time. You can read the differential-equation derivation on your second pass.

### Reading for today: 60–90 minutes

First open [1.3.1 Integration of Inputs](https://neuronaldynamics.epfl.ch/online/Ch1.S3.html#SS1) and use Figure 1.6 and the equation to see the relationship between potential, input, resistance, and the time constant. Then jump to [1.3.3 The Threshold for Spike Firing](https://neuronaldynamics.epfl.ch/online/Ch1.S3.html#SS3) and focus only on the threshold and reset rules. You can skip the derivation for impulse input on your first pass; **leave 1.3.4 and the following starred sections for later**.

The book often uses u for potential; below, V represents the same quantity. With the resting value written explicitly, the subthreshold model is:

\[
\tau_m\frac{dV}{dt}=-(V-V_{rest})+RI(t).
\]

The first term on the right pulls the potential back toward its resting value; the second represents the effect of input current. The time constant \(\tau_m\) controls how quickly it changes. Even if you cannot solve the equation yet, you can make a prediction: for a constant sustained current, if no reset is triggered, the potential eventually approaches **resting potential + resistance × current**.

### Make predictions here, then take your answers to the exercise

The values below are the defaults published on the companion exercise page: resting potential −70 mV, threshold −50 mV, and resistance 10 MΩ. Assume the neuron starts at rest, there is no noise, and the input lasts long enough.

| Input current | Potential approached if spike resets are ignored | Prediction |
|---|---|---|
| 1 nA | −60 mV | It cannot reach threshold and does not fire |
| 2 nA | −50 mV | Exactly the critical value; the ideal continuous-time model only approaches threshold gradually and does not cross it in finite time |
| 3 nA | −40 mV | It reaches threshold first, fires, and resets; the actual trajectory therefore does not keep rising to −40 mV |

The unit relationship used here is **1 MΩ × 1 nA = 1 mV**. The critical current is therefore 20 mV ÷ 10 MΩ = **2 nA**. These numbers belong to the model in this exercise; they are not universal parameters for all real neurons.

Now open only [Exercise 1.1: minimal current](https://neuronaldynamics-exercises.readthedocs.io/en/latest/exercises/leaky-integrate-and-fire.html#exercise-minimal-current) and read the calculation question in 1.1.1 and the simulation instructions in 1.1.2. **Stop at the start of 1.2 Exercise: f-I Curve.** The original exercise explicitly asks you to explain why the neuron does not fire when the current is exactly the critical value of 2 nA. Finite numerical precision, the threshold comparison, and the observation window can affect behavior at this boundary. A tiny difference on the screen is not enough to overturn the analytical prediction.

On your first pass, give predictions for the three conditions above and explain in your own words why sustained input does not mean unlimited accumulation. On your second pass, once the exercise environment is ready, run the code in 1.1.2 with 1, 2, and 3 nA and compare the membrane potential and spike count. First execute the imports at the top of the page and define the placeholder variable `I_min`. With a finite simulation duration, a weak suprathreshold input may not yet have produced its first spike, so record the observation window too.

### Completion criteria and the next step

You have completed this unit once you can explain leak, accumulation, threshold, and reset, and correctly predict the responses to the three inputs above. You do not yet need to reproduce every figure in the chapter or install several simulation frameworks.

If “−60 is greater than −70” and depolarization are confusing, return to the Section 1.3 reading introduced in Unit 1. If you are unsure how resistance and current combine to change potential, revisit only Figure 1.6 and Section 1.3.1 in the book. If the code environment is the obstacle, keep your paper-and-pencil predictions and do not move on to larger network exercises yet.

Leave [Exercise 1.2: f-I Curve](https://neuronaldynamics-exercises.readthedocs.io/en/latest/exercises/leaky-integrate-and-fire.html#exercise-f-i-curve) for next time: input current I is on the horizontal axis and firing rate f on the vertical axis. Sketch the expected shape before simulating it. The original exercise specifies a 3 ms refractory period, meaning a wait of at least 3 ms after each spike. The firing rate therefore approaches an upper limit of about 333 Hz as the input grows without bound; with finite input, the membrane potential also needs time to reach threshold. This question adds just one layer of understanding to the existing model.

<a id="model-branch"></a>

## Modeling Branch: Put the Four Rules into Brian2

Enter this section only if you want to continue implementing models. Brian2 is a simulation tool that lets you describe neurons through equations, units, and event rules. First learn how LIF concepts correspond to code; do not build a network yet.

Go to [Brian2 Part 1: Neurons](https://brian2.readthedocs.io/en/stable/resources/tutorials/1-intro-to-brian-neurons.html). Read **Units system → A simple model → Adding spikes → Refractoriness** in order and stop before **Multiple neurons**. Allow about 45–60 minutes for this first reading. Identify four roles: `NeuronGroup` holds the model and state, `StateMonitor` records changes in state over time, `threshold/reset` determines firing and resetting, and `SpikeMonitor` records spike times.

In this example, `v` is normalized and dimensionless. You cannot simply treat 0.8 as 0.8 mV or mix its numerical values with the default parameters in Unit 3. On your first pass, mark on paper where the equations are defined, where events are triggered, and where results are stored, then predict what removing the refractory period would change. You can stop once you can distinguish the objects that record potential from those that record events. On your second pass, run these four sections in an existing Brian2 environment. Leave network connections and stochastic neurons until you have a specific question.

<a id="data-branch"></a>

## EEG/MEG Branch: How Does a Continuous Recording Become an Average Response after a Stimulus?

Imagine an experiment in which sounds are played repeatedly to a participant while EEG/MEG is recorded continuously. We want to know whether the measured signal changes consistently after a sound occurs. The difficulty is that the continuous recording also contains signals from blinks, background activity, and other stimuli, so an arbitrary stretch of waveform cannot simply be called an auditory response.

Three MNE terms correspond to three steps in organizing the data. **Raw** is the continuous recording from each sensor, from beginning to end. **Epochs** is a collection of short segments cut out and aligned to event times, for example, from 0.2 seconds before each sound to 0.5 seconds afterward. **Evoked** is the average of those segments within the same condition. Averaging helps reveal changes consistently aligned to an event, but it does not automatically remove artifacts. The webpage uses an example file that has already been filtered and downsampled. Raw is the name of the continuous-data object; it does not guarantee that the data are entirely unprocessed.

Allow about 45–60 minutes for the first pass and follow only this route: start with [Loading data](https://mne.tools/stable/auto_tutorials/intro/10_overview.html#loading-data) to learn about Raw. Then jump to [Detecting experimental events](https://mne.tools/stable/auto_tutorials/intro/10_overview.html#detecting-experimental-events) and read through the end of [Epoching continuous data](https://mne.tools/stable/auto_tutorials/intro/10_overview.html#epoching-continuous-data). Next jump to [Estimating evoked responses](https://mne.tools/stable/auto_tutorials/intro/10_overview.html#estimating-evoked-responses) and stop at the figure corresponding to `aud_evoked.plot_joint(picks="eeg")`.

On the first pass, skip all of **Preprocessing**, all of **Time-frequency analysis**, and **Inverse modeling** through the end of the page. The overview directly specifies removing components 1 and 2 with ICA but omits the assessment used to choose those components. Do not copy those component numbers to other data. Leave source localization and 3D brain plots for later too.

Complete these three short tasks:

1. Find what 1 and 2 mean in the event table and explain why `epochs["auditory"]` selects both left-ear and right-ear sound trials. You do not need to understand every detail of Python syntax.
2. Look at the EEG 021 figure from `aud_epochs.plot_image`: identify what each row, zero on the horizontal axis, and the colors represent, then find the average trace below the image. Write one sentence explaining what was retained before averaging and what was lost afterward.
3. Run code only on your second pass. In an already configured environment containing the Sample data, select only the code for loading, events, epoching, and averaging. Label any result that skips ICA as a “teaching demonstration without this ICA step.” Its waveform and retained trial count do not have to match the webpage. `sample.data_path()` automatically downloads the dataset if it is missing, so it is not part of the first-pass exercise; do not run the entire page at once either.

Your answers should include the following: each row of the image is one trial, and zero marks the onset of that trial's stimulus. Averaging within a condition removes the trial dimension but hides differences between trials. By default, `plot_compare_evokeds` may summarize several sensors rather than show the waveform from one EEG electrode. For a single EEG channel, start with the image exercise above. You can finish once you can explain these points; “the plot looks cleaner” is not a criterion for understanding.

If array dimensions are confusing, revisit only the Note at the end of **Epoching continuous data**: Raw is “channels × time,” while Epochs is “trials × channels × time.” If alignment is confusing, return to the explanation of the three-column table in **Detecting experimental events**. You do not need to relearn all of the MNE documentation.

<a id="fmri-branch"></a>

## fMRI Branch: Can fMRI Tell Whether a Participant Is Looking at a Face or a House?

This exercise asks whether a model can take a brain-activity image that was not used for training and identify whether the participant was viewing a face or a house. Begin with just this binary classification problem; you do not need to master a complete fMRI analysis workflow. The signal here is a **BOLD** measurement related to changes in blood oxygenation, rather than a direct recording of neuronal spikes.

Think of a brain image as many small three-dimensional grid elements called **voxels**. The model arranges the values of selected voxels in each image into one row as input and uses face/house as the answer label. A **run** is one continuous scanning segment. Images within the same run share drift and temporal correlations, so you cannot assume that every image is a fully independent sample. Cross-validation repeatedly holds out part of the data for testing. In each round here, one complete run is held out, and the model learns from the remaining runs.

First pass, about 45–60 minutes: read from [Retrieve the files of the Haxby dataset](https://nilearn.github.io/stable/auto_examples/02_decoding/plot_haxby_anova_svm.html#retrieve-the-files-of-the-haxby-dataset) through [ANOVA pipeline with Decoder object](https://nilearn.github.io/stable/auto_examples/02_decoding/plot_haxby_anova_svm.html#anova-pipeline-with-decoder-object) to identify the inputs and labels. Then jump directly to [Obtain prediction scores via cross validation](https://nilearn.github.io/stable/auto_examples/02_decoding/plot_haxby_anova_svm.html#obtain-prediction-scores-via-cross-validation) and stop after `decoder.cv_scores_["face"]` and its output. Here, ANOVA first selects voxels that help with classification, and a linear SVM combines them to make a decision. Do not derive the formulas on your first pass.

Skip running **Fit the decoder and predict**: it applies the model to the same data it was just fitted on, so those predictions are not performance on new data. Leave the entire **Visualize the results** section for later. Brain maps of weights look intuitive, but the coefficients do not directly establish which brain areas are causally responsible for recognizing faces.

Complete these three short tasks:

1. Read only **Load the behavioral data**: identify `labels` as the categories and `chunks` as the runs. Explain why the images, category labels, and run labels must be filtered together when selecting face/house.
2. Draw three boxes representing three runs, with arrows showing how “two for training, one for validation” rotates. Inside each training box, write “select voxels → fit model” to avoid selecting voxels with all the data before splitting training and validation sets.
3. On your second pass, once the course environment is available, run the data and label preparation and the cross-validation section. Reuse the mask and filtering parameters defined above, skipping the earlier Decoder fit and all visualization. Record each fold's score and check that the runs in each training set do not overlap with those in its validation set. By default, the example uses participant 2; do not add a task involving every participant. Do not start any downloads during this round of study.

The answer is that each fold's score tells you whether the model can correctly classify images from another scanning run from the same participant. It does not tell you whether the model can correctly classify face-versus-house viewing data from a different participant. The webpage currently lists 12 scores; start by identifying the highest and lowest. They are outputs from the official webpage, not results obtained for this guide or scores you must achieve. Random guessing in balanced binary classification gives about 50% accuracy, but a formal evaluation must also report class proportions and a reasonable baseline.

If you do not understand how data and labels correspond, revisit only **Load the behavioral data**. If you do not understand why a run is held out, reread just the start of **Obtain prediction scores via cross validation** and `groups=run_label`. Leave the full machine-learning curriculum for later.

<a id="paper-branch"></a>

## Read Only a Small Part of a Paper Too: Choose One Branch

Choose among these three papers according to your research interests; they are not required reading for everyone in the first week. Pick one at a time, finish the small task here, and then decide whether to continue with the full paper. The time estimates are for a first reading and do not include looking up unfamiliar terms.

### NeuroAI Branch: Richards et al. (2019)

**Paper:** [A deep learning framework for neuroscience](https://pmc.ncbi.nlm.nih.gov/articles/PMC7115933/); **when to read it:** once you know that artificial neural networks consist of connected computational units and want to understand why they can be used to study the brain. Allow about 40–50 minutes for a first reading.

**Understand the question first.** A network's ability to recognize images is not enough to show that it explains the brain. This paper proposes a research framework: ask what conditions allowed a network to learn a particular pattern of behavior and neural activity. An “objective function” is a mathematical rule for scoring learning outcomes, for example, assigning a worse score when more answers are wrong. It is not the same as a task name such as “image recognition.” A “learning rule” specifies how connection strengths between units are adjusted; an “architecture” specifies which units the network contains, how they connect, and how information flows. Together, the three constrain what a network can learn.

**Read in this order.** Start with the abstract and the Figure 1 caption, and write one sentence in your own words explaining each of the three components. Then go to “The three core components of a deep learning framework for the brain” and read only the first paragraph defining them. Next, jump to Figure 4 and its caption: when an animal learns to discriminate stripe orientations, how does the model predict neural activity at different levels will change? This illustrates how to make testable predictions; do not present the predictions in the figure as established brain mechanisms. Finally, skim “Caveats and concerns” and identify one limitation acknowledged by the authors.

**Stop here on the first pass.** Leave the learning-algorithm details in Figures 2, 3, and 5 and the cited references for later. This round is about understanding the framework; you do not yet need to master backpropagation.

**After-reading task.** On paper, design a hypothetical model that discriminates stripe orientations. Write down its inputs, outputs, and three components, then give one prediction that could be tested using recordings before and after an animal learns. No code is needed. **Check:** you can distinguish a task name from a scoring rule; your prediction concerns observable changes in neural activity; and you can explain why correct behavioral responses alone cannot determine which learning rule the brain uses.

### Data Analysis Branch: Kriegeskorte et al. (2009)

**Paper:** [Circular analysis in systems neuroscience – the dangers of double dipping](https://pmc.ncbi.nlm.nih.gov/articles/PMC2841687/); **when to read it:** before comparing experimental conditions or training your first decoding model. Allow about 35–45 minutes for a first reading.

**Understand the question first.** Suppose you first select the measurement locations with the largest differences between two groups, then use the same data to report group differences at those locations. Random fluctuations will also help you “discover” a difference. This is “circular analysis”: data intended to test a conclusion have already helped decide how to test it. A “voxel” is a small volume element in a brain image; a “region of interest (ROI)” is a set of locations selected for focused analysis. The basis for selecting them can quietly affect the later results.

**Read in this order.** Start with the abstract and the Figure 1b caption to see how selection, weighting, and ranking can all introduce problems. Then look at the upper and lower rows of Figure 2b and its caption. Next, read the example in “Example 1: Pattern-information analysis,” beginning with “We first analyzed all experimental runs together to define an ROI.” Keep one question in mind: the authors already split odd and even experimental runs into training and test sets, so why was the analysis still wrong? Trace the answer back to before the split: test data had already been used to select voxels. Finally, read the text of “A policy for noncircular analysis” and the Figure 4 caption.

**Stop here on the first pass.** Leave the simulations of regional activation in Figure 3 and the statistical derivations in the supplementary material for later. Understand the data flow first, then return to the details when you perform a relevant analysis.

**After-reading task.** Draw the workflow “all data → select locations → split → train → test,” then revise it so that test data do not participate in selection or training. **Check:** the revised version holds out the test set first, uses only training data to decide which locations to select, and then applies the same rule to the test set. If the selection rule is repeatedly adjusted, validate it within the training portion. Test labels must never feed back into earlier steps. You should also be able to explain why merely stating that you used “cross-validation” does not mean that the entire analysis is free of leakage.

### Neural Populations and Dynamics Branch: Cunningham & Yu (2014)

**Paper:** [Dimensionality reduction for large-scale neural recordings](https://pmc.ncbi.nlm.nih.gov/articles/PMC4433019/); **when to read it:** once you know that firing rate is the number of spikes per unit time and begin working with data describing the joint activity of multiple neurons. Allow about 40–50 minutes for a first reading.

**Understand the question first.** Recording many neurons simultaneously produces many activity traces, which may share a small number of patterns of change. This paper discusses how to extract those shared changes. Here, “dimensionality” initially means how many numbers are needed to describe a population state: when recording three neurons, start by describing the state with three firing rates. “Latent variables” are a small set of changing quantities inferred from the recordings, not additional neurons that were measured. “Principal component analysis (PCA)” finds the directions in which the data vary most and uses a few of them to approximately retain the variation in the original data.

**Read in this order.** Start with Figure 1 and its caption to understand why activity traces across many neurons, conditions, and repeated trials are difficult to inspect one by one. Then read “Intuition behind dimensionality reduction” alongside Figure 2: one point represents the joint activity of three neurons at one moment, and successive moments form a trajectory. Time is not a coordinate axis. Finally, read only the first paragraph of “Basic covariance methods” and the Figure 4a caption to understand what projecting points onto one axis means. Do not label an axis “memory” or “decision-making” simply because it captures the most variation.

**Stop here on the first pass.** Do not look up every method in Table 1 yet; you are not expected to derive the matrix formulas or understand Figures 4b and 4c. After reading, you should be able to explain what problem dimensionality reduction solves and what it can discard.

**After-reading task.** Check four population states on paper: (1,0,1), (0,1,1), (1,1,2), and (2,1,3). Find the relationship between the third number and the first two, and explain why two numbers are enough to describe these points. **Check:** the third number equals the sum of the first two, so the points lie on a two-dimensional plane. This is a relationship constructed for teaching; it does not show that a real brain has only two state variables or guarantee that PCA retains the variation most relevant to behavior.

## When Should You Return to Resources Left Out of the First Pass?

| Resource | What you should be able to do before starting | Take just one question with you |
|---|---|---|
| AllenSDK | Understand spike times, stimulus alignment, trials, and averaging; read a two-dimensional array | After selecting one session and one stimulus condition, how do you obtain a spike raster plot and a PSTH? Define the session and download scope first, then use the Quick Start in the index. |
| DANDI/NWB | Have a specific data-analysis question and know which signals and time intervals you need | How can you read a limited part of this dataset and record the Dandiset version and units? |
| MIT 9.40, NEPR208 | Have completed an introductory unit and know what kind of explanation you currently need | If you prefer university lectures and problem sets, you can change the format of your core course. First find your current topic in the syllabus, such as neural coding or single-neuron models. |
| Papers in other directions | Have completed the check questions in one paper-reading branch | Choose the next paper from the index to address your current question, specifying one key figure and one after-reading task first. |

These starting points are available in the [resource and literature index](tutorial-resources.en.md). When you begin a specific data project, address environment setup, data volume, and checks for running the code. Do not treat an entire data-portal catalog as your first assignment.
