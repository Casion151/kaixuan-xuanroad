# Computational Neuroscience: Resources and Reading Index

This reading index was written with AI assistance.

Use this file to look up courses, licenses, and complete bibliographic details. If you are studying the subject for the first time, start with the [step-by-step guide](tutorial-guide.en.md) in the same directory, then follow its specified sections and questions into the external resources.

Verification date: 2026-09-08. This index is intended for beginners with different backgrounds in biology, mathematics, and programming, to help them complete a small project that is interpretable and reproducible.

It brings together 7 supplementary resources, explicit starting points for 3 main courses, and 16 papers organized by level. The recommended scope and exercises are learning suggestions, not official course requirements.

## 1. How to Use This Index

Choose only one main course. First fill the prerequisite gaps relevant to your background, then complete a small exercise, and turn to the literature according to your project's questions. You do not need to study every elective resource on single-neuron models, neural data analysis, NeuroAI, and BCI.

## 2. Choosing a Main Course

| Main course | When to choose it | Starting point and scope |
|---|---|---|
| Neuromatch Computational Neuroscience | The default path for independent study; suitable if you want exposure to both modeling and data analysis | [Online tutorials](https://compneuro.neuromatch.io/tutorials/intro.html); first complete the prerequisites in Python, linear algebra, calculus, and probability and statistics, then move into modeling, model fitting, and units relevant to your chosen direction. Public self-study materials are separate from applications to the formal teaching-assistant-supported program. |
| MIT 9.40 Introduction to Neural Computation | If you prefer a complete university course with lecture videos and problem sets | [Official OCW](https://ocw.mit.edu/courses/9-40-introduction-to-neural-computation-spring-2018/); includes lecture notes, videos, and problem sets. |
| Stanford NEPR208 | If you prefer learning through specific questions and a more compact set of course materials | [Course page](https://druckmann-lab.github.io/nepr208/) and [public assignments](https://druckmann-lab.github.io/nepr208/assignments/); the current page is for Spring 2026, and the assignments cover perceptrons, neural coding, learning, and memory. |

These three courses are alternatives. Completing all of them is not a prerequisite for starting a small project.

## 3. Supplementary Resources: Priorities, Starting Points, and Deliverables

Free reading access, publicly available source code, and open-source licensing are identified separately. Free access to an online book does not automatically grant permission to copy or redistribute it; software licenses and licenses for the data used with that software also apply separately.

### R01 · Neuroscience Online (UTHealth McGovern Medical School)

**Role:** Shared core; a priority for readers with a computational background. **Starting point:** [Official resource](https://nba.uth.tmc.edu/neuroscience/toc.htm).

**Prerequisites and scope:** High-school biology and basic concepts about cells; no programming required. In Section 1, read the Introduction, Chapter 1 Resting Potentials & Action Potentials, Chapter 2 Ionic Mechanisms of Action Potentials, Chapter 6 Synaptic Transmission in the Central Nervous System, and Chapter 7 Synaptic Plasticity. Select other chapters according to your direction.

**Suggested deliverable:** A one-page concept map: membrane potential → action potential → synaptic transmission → plasticity; explain, for each item, which physiological phenomena the LIF model retains and which it omits.

**Time and computing:** 4–6 hours (editor's estimate, for the scope above only); reading; no GPU required.

**Openness:** A free online textbook; the official site describes it as open-access, but a license permitting free redistribution has not been verified, so it is not described here as an open-source textbook.

### R02 · Neuronal Dynamics Online Book + Accompanying Python Exercises

**Role:** Shared core; a priority for an introduction to modeling. **Starting point:** [Official resource](https://neuronaldynamics-exercises.readthedocs.io/en/latest/).

**Prerequisites and scope:** Python/NumPy, calculus, and basic concepts of ordinary differential equations; you can begin with the first-order linear equation for the LIF model. First read Chapter 1 Introduction: Neurons and Mathematics, the basics of ionic currents in Chapter 2, and Chapter 3 on synapses; complete the parts of Exercise 1 on minimum input current, the f–I curve, and the refractory period. Leave Chapter 5, AdEx, and the Brunel network for more advanced study in the modeling direction.

**Suggested deliverable:** A reproducible notebook with membrane-potential traces and an f–I curve; compare changes in the refractory period or input current, discuss the model's limitations, and report the time step.

**Time and computing:** 6–10 hours (editor's estimate, for the LIF introduction only); the suggested small simulations can generally run on a CPU; the environment has not been installed and the examples have not been executed for this review.

**Openness:** The book is free to read online but remains under copyright; the exercise code is open-source software under GNU GPL 2.0.

Online book: [Contents](https://neuronaldynamics.epfl.ch/online/index.html); assigned exercise: [LIF](https://neuronaldynamics-exercises.readthedocs.io/en/latest/exercises/leaky-integrate-and-fire.html). The accompanying exercise documentation is relatively old; check and pin dependency versions before running it.

### R03 · Brian2 Official Interactive Tutorials

**Role:** An elective for the modeling direction; use alongside R02, without adding another full required course. **Starting point:** [Official resource](https://brian2.readthedocs.io/en/stable/resources/tutorials/index.html).

**Prerequisites and scope:** Python, simple differential equations, and basic concepts of neurons and synapses. Complete Introduction to Brian part 1: Neurons and part 2: Synapses; study part 3: Simulations when you need to understand how to control simulation runs.

**Suggested deliverable:** A notebook that progresses from a single neuron to a small number of connected neurons; show membrane potentials and a raster plot, and record the model equations, parameter units, random seed, and connectivity rules.

**Time and computing:** 4–6 hours (editor's estimate); a CPU is sufficient for small examples; online notebook services may be subject to availability limits, and the official site also provides local downloads.

**Openness:** Open-source simulation software under the CeCILL 2.1 license; free tutorials.

### R04 · MNE-Python Official MEG/EEG Tutorials

**Role:** For the EEG/MEG or BCI direction. **Starting point:** [Official resource](https://mne.tools/stable/auto_tutorials/intro/10_overview.html).

**Prerequisites and scope:** Python/NumPy, basic concepts of sampling and spectra, and basic familiarity with EEG/MEG signals and event markers. Follow Overview of MEG/EEG analysis → Raw/Epochs/Evoked → bad-channel/artifact handling and filtering → ERP or time–frequency analysis, choosing one complete analysis path first. Leave source localization and complex statistics for later.

**Suggested deliverable:** A contrast between conditions using the sample dataset: a description of preprocessing plus an ERP/ERF or power-spectrum plot; compare how one reasonable preprocessing choice affects the results, and report the number of excluded trials.

**Time and computing:** 4–8 hours (editor's estimate); introductory sensor-level analysis usually needs only a CPU; the example requires a data download, so check the data size and limit the subset before downloading.

**Openness:** Open-source software under BSD 3-Clause; free tutorials and downloadable examples.

MNE is primarily suited to the EEG/MEG data path; for an invasive speech BCI based on spikes, choose tools that match your own data type.

### R05 · Nilearn Official fMRI Introduction and Haxby Decoding Example

**Role:** For the fMRI/NeuroAI/decoding direction. **Starting point:** [Official resource](https://nilearn.github.io/stable/auto_examples/02_decoding/plot_haxby_anova_svm.html).

**Prerequisites and scope:** Python, linear algebra, and linear models/cross-validation; understand what BOLD, run, and voxel mean. First work through image loading and visualization or a single-subject GLM, then complete Decoding with ANOVA + SVM: face vs house in the Haxby dataset.

**Suggested deliverable:** A face/house decoding analysis: validate by holding out runs, report accuracy for each fold and a simple baseline, explain why feature selection must remain within the training pipeline, and discuss why classification accuracy cannot directly establish a brain mechanism.

**Time and computing:** 6–10 hours (editor's estimate); the selected single-subject example can usually run on a CPU; it requires a data download and some memory, and its runtime has not been measured.

**Openness:** Open-source software under BSD 3-Clause; the website explicitly places both code and documentation under the BSD license.

### R06 · AllenSDK Visual Coding Neuropixels Quick Start

**Role:** For the neural data analysis direction; start with spike recordings from a single session. **Starting point:** [Official resource](https://allensdk.readthedocs.io/en/latest/_static/examples/nb/ecephys_quickstart.html).

**Prerequisites and scope:** Python/NumPy/pandas and basic concepts of spike trains, stimuli and trials, and PSTHs. Choose one session from the quickstart, inspect the session/unit metadata, then complete the peristimulus time histograms. Leave image classification for later.

**Suggested deliverable:** A raster plot and PSTH for one session; record the session ID, unit-quality screening, bin width, stimulus events, and number of trials, and explain the error or variability in the PSTH.

**Time and computing:** 6–10 hours (editor's estimate, affected by data access); CPU; Allen datasets are large, so select the session and download scope first rather than downloading the entire collection.

**Openness:** Public source code and free tutorials; the Allen Institute Software License contains restrictions on commercial redistribution, so it is not broadly labeled here as a standard open-source license; check data licenses separately.

### R07 · DANDI: Streaming and Interacting with NWB Data

**Role:** An elective for the data-reproduction direction; practice reading NWB data. **Starting point:** [Official resource](https://docs.dandiarchive.org/example-notebooks/tutorials/bcm_2024/analysis-demo/).

**Prerequisites and scope:** Python, the basic structure of NWB, and spike trains; understand dataset versions and metadata. Complete only lazy loading → slicing → single unit data in the official notebook, then optionally work on spatial tuning curves.

**Suggested deliverable:** Read a limited segment of data from a public Dandiset and plot the spikes or tuning curve of one unit; record the Dandiset ID, version/DOI, asset path, units, and license.

**Time and computing:** 2–4 hours (editor's estimate, for reading a subset only); CPU and network access; streaming helps avoid downloading the full dataset, and the notebook was not actually executed during this review.

**Openness:** A free, open data platform; documentation is under CC-BY 4.0; Dandiset data may use CC-BY 4.0 or CC0, so record the specific license of the dataset you use.

This resource specifically practices reading NWB data; BIDS is a separate standard to study according to your project's data modality.

## 4. Where to Start in the Literature

Select papers according to the question you are working on; classic papers do not all need to come first in chronological order. In particular, read the original Hodgkin–Huxley paper as advanced historical material after a modern textbook and the LIF exercises. The arrows below indicate suggested sequences, not a requirement to read every item closely from beginning to end.

| Path | Suggested reading sequence | Related practice |
|---|---|---|
| Scientific judgment and result validation | [Kriegeskorte et al. (2009)](https://doi.org/10.1038/nn.2303); discuss [Jonas & Kording (2017)](https://doi.org/10.1371/journal.pcbi.1005268) after completing the project | Use simulated data with no effect to check for selection bias; state the evidence for your project's conclusions and alternative explanations |
| Neuron models | LIF textbook/exercises → [Izhikevich (2003)](https://doi.org/10.1109/TNN.2003.820440) → [Hodgkin & Huxley (1952)](https://doi.org/10.1113/jphysiol.1952.sp004764) (optional) | R02/R03; compare the phenomena retained by the models and the mechanisms they omit |
| Neural coding and population data | [Schwartz et al. (2006)](https://doi.org/10.1167/6.4.13) (coding) or [Cunningham & Yu (2014)](https://doi.org/10.1038/nn.3776) (population analysis) | Simulated receptive-field estimation, or PSTH/PCA for a single Allen session |
| Population dynamics | [Cunningham & Yu (2014)](https://doi.org/10.1038/nn.3776) → [Vyas et al. (2020)](https://doi.org/10.1146/annurev-neuro-092619-094115) → [Sussillo & Barak (2013)](https://doi.org/10.1162/NECO_a_00409) (advanced) | Two-dimensional phase portraits, fixed points, and local linearization; then move on to a small RNN |
| NeuroAI/representation | [Richards et al. (2019)](https://doi.org/10.1038/s41593-019-0520-2) → [Kriegeskorte et al. (2008)](https://doi.org/10.3389/neuro.06.004.2008) → [Yang et al. (2019)](https://doi.org/10.1038/s41593-018-0310-2) (advanced) | An RDM from simulated data, followed by analysis of task representations in a pretrained RNN |
| Learning and BCI | [Schultz et al. (1997)](https://doi.org/10.1126/science.275.5306.1593) (learning concepts) → [Sadtler et al. (2014)](https://doi.org/10.1038/nature13665); for speech, continue with [Willett et al. (2023)](https://doi.org/10.1038/s41586-023-06377-x) | A TD prediction-error demonstration, a conceptual demonstration of manifold constraints, and offline evaluation of speech decoding |
| Before any decoding project | [Varoquaux et al. (2017)](https://doi.org/10.1016/j.neuroimage.2016.10.038), together with [Kriegeskorte et al. (2009)](https://doi.org/10.1038/nn.2303) | Identify the trial/session/subject levels clearly; keep hyperparameter tuning and feature selection within the training pipeline |

Abbott (2008) can serve as an opening guide to theory. If you cannot currently access its free full text, start with the introductions to Marr and Dayan & Abbott in the original list, together with the course's modeling units.

## 5. Paper Cards (16 Papers)

Each entry gives a standard citation, a suggested reading question, an exercise, and full-text availability. Most exercises are conceptual experiments designed for teaching, not official paper code or reproductions of the original experiments; entries with public accompanying code are identified separately. Full author lists for all papers are included in references.bib in the same directory, which can be imported into reference managers such as Zotero.

### P01 · Abbott (2008)

**[Theoretical Neuroscience Rising](https://doi.org/10.1016/j.neuron.2008.10.019)**. *Neuron*, 60(3), 489-495. DOI: `10.1016/j.neuron.2008.10.019`.

**Role:** Optional reading (opening guide); introductory.

**Prerequisites:** Basic neuroscience terminology; there is no need to master every derivation first.

**Read with this question in mind:** Beyond fitting data, what testable predictions should a theoretical model produce?

**After-reading task:** Choose a model from the course and write half a page explaining the research question, model assumptions, predictions, and observations that could falsify it.

**Access:** [Candidate free full-text source (direct verification was unsuccessful in this check)](https://www.cell.com/article/S0896627308008921/pdf). The publisher's free full text is indexed by Europe PMC and OpenAlex; automated access returned 403 during this check, so free access has not been directly verified. No explicit open license was found.

### P02 · Kriegeskorte et al. (2009)

**[Circular analysis in systems neuroscience: the dangers of double dipping](https://doi.org/10.1038/nn.2303)**. *Nature Neuroscience*, 12(5), 535-540. DOI: `10.1038/nn.2303`.

**Role:** Core required reading; introductory to intermediate (understand the concept first, then read the technical argument).

**Prerequisites:** Hypothesis testing, feature selection, and the concept of independent samples.

**Read with this question in mind:** Which steps use information about the effect being tested? Is feature or ROI selection independent of the final statistic?

**After-reading task:** Use pure noise data to demonstrate the bias caused by selecting features and then evaluating them on the same data; compare this with an independent test set and selection performed within training folds.

**Access:** [Free full text/author's public version](https://pmc.ncbi.nlm.nih.gov/articles/PMC2841687/). A free, full-text author manuscript is available in PMC; this does not establish an open reuse license.

### P03 · Izhikevich (2003)

**[Simple model of spiking neurons](https://doi.org/10.1109/TNN.2003.820440)**. *IEEE Transactions on Neural Networks*, 14(6), 1569-1572. DOI: `10.1109/TNN.2003.820440`.

**Role:** Core elective reading (required for the modeling direction, after the LIF exercises); intermediate.

**Prerequisites:** The LIF model, differential equations, and basic Python.

**Read with this question in mind:** Is a model's ability to reproduce multiple firing patterns enough to demonstrate that it accurately describes ion-channel mechanisms?

**After-reading task:** Reproduce two firing patterns using the author's examples or a course implementation; report the parameters, units, and time step, and discuss differences from the LIF model.

**Access:** [Free full text/author's public version](https://www.izhikevich.org/publications/spikes.pdf). The author's website provides a legally available free PDF and links to examples; this does not establish an open license for the code or paper.

**Author's examples:** [Paper and example starting point](https://www.izhikevich.org/publications/spikes.htm).

### P04 · Hodgkin & Huxley (1952)

**[A quantitative description of membrane current and its application to conduction and excitation in nerve](https://doi.org/10.1113/jphysiol.1952.sp004764)**. *The Journal of Physiology*, 117(4), 500-544. DOI: `10.1113/jphysiol.1952.sp004764`.

**Role:** Optional reading (advanced historical material, after LIF and a modern textbook); advanced.

**Prerequisites:** Membrane potential, ionic currents, differential equations, and numerical integration.

**Read with this question in mind:** Which physiological quantities do the model variables represent? Which experimental observations are linked to the model structure and parameters?

**After-reading task:** First annotate the units and physiological meaning of the variables in an existing course notebook, then compare voltage trajectories under two stimulation conditions; there is no need to rewrite the entire model from scratch.

**Access:** [Free full text/author's public version](https://pmc.ncbi.nlm.nih.gov/articles/PMC1392413/). PMC provides a legally available free scanned full text; free reading does not mean that an open reuse license has been confirmed.

### P05 · Schwartz et al. (2006)

**[Spike-triggered neural characterization](https://doi.org/10.1167/6.4.13)**. *Journal of Vision*, 6(4), 484-507. DOI: `10.1167/6.4.13`.

**Role:** Core elective reading (required for the coding direction); intermediate to advanced.

**Prerequisites:** Linear algebra, covariance, probability, and spike trains.

**Read with this question in mind:** What quantity does STA recover? How do stimulus statistics and neuronal nonlinearities limit the interpretation of the results?

**After-reading task:** Recover the STA from simulated data with a known receptive field, and evaluate predictions on independent test data; change the stimulus statistics and discuss the recovery results.

**Access:** [Free full text/author's public version](https://www.cns.nyu.edu/pub/lcv/schwartz05-reprint.pdf). The journal paper has an open-access record, and a free PDF is available on the author's institutional website; this link uses the institutional full text that was directly verified.

### P06 · Cunningham & Yu (2014)

**[Dimensionality reduction for large-scale neural recordings](https://doi.org/10.1038/nn.3776)**. *Nature Neuroscience*, 17(11), 1500-1509. DOI: `10.1038/nn.3776`.

**Role:** Core required reading; intermediate.

**Prerequisites:** Linear algebra, PCA, and basic probability and statistics.

**Read with this question in mind:** Is low-dimensional structure in PCA sufficient to support a particular neural mechanism? Which structures might arise from preprocessing or task design?

**After-reading task:** Apply PCA to simulated neural population data and report explained variance, preprocessing, and stability on independent data; interpret the projections against the known latent variables.

**Access:** [Free full text/author's public version](https://pmc.ncbi.nlm.nih.gov/articles/PMC4433019/). A free, full-text author manuscript is available in PMC; no subscription is needed to read it, but this does not establish an open reuse license.

### P07 · Varoquaux et al. (2017)

**[Assessing and tuning brain decoders: Cross-validation, caveats, and guidelines](https://doi.org/10.1016/j.neuroimage.2016.10.038)**. *NeuroImage*, 145, 166-179. DOI: `10.1016/j.neuroimage.2016.10.038`.

**Role:** Core required reading (before any decoding project); intermediate to advanced.

**Prerequisites:** Supervised learning, train/test splits, cross-validation, and basic statistics.

**Read with this question in mind:** Does your test set represent new trials, new sessions, or new participants? Has hyperparameter tuning seen any test information?

**After-reading task:** Using simulated or public data grouped by participant or session, compare a random split with a grouped split that matches the prediction target; keep all feature selection and hyperparameter tuning within the training folds.

**Access:** [Free full text/author's public version](https://arxiv.org/pdf/1606.05201). A free public author version is available on arXiv; use the DOI of the 2017 NeuroImage journal version for the formal citation.

### P08 · Jonas & Kording (2017)

**[Could a Neuroscientist Understand a Microprocessor?](https://doi.org/10.1371/journal.pcbi.1005268)**. *PLOS Computational Biology*, 13(1), e1005268. DOI: `10.1371/journal.pcbi.1005268`.

**Role:** Core elective reading (end-of-course discussion); introductory to intermediate.

**Prerequisites:** Basic data analysis and the distinction between correlation and causation.

**Read with this question in mind:** What evidence is needed to discover statistical structure, predict behavior, and explain a mechanism? What conclusions can this thought experiment support, and what can it not support?

**After-reading task:** Examine one conclusion from your small project and list the available evidence, alternative explanations, and one further test; alternatively, validate an analysis method on a simple simulated system with a known mechanism.

**Access:** [Free full text/author's public version](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005268). The publisher PLOS provides the open-access full text; an open full text is also available in PMC.

### P09 · Vyas et al. (2020)

**[Computation Through Neural Population Dynamics](https://doi.org/10.1146/annurev-neuro-092619-094115)**. *Annual Review of Neuroscience*, 43(1), 249-275. DOI: `10.1146/annurev-neuro-092619-094115`.

**Role:** Dynamics, paper 1; intermediate; start with the dynamical-systems primer and figures.

**Prerequisites:** Linear algebra, basic ordinary differential equations, and PCA.

**Read with this question in mind:** How do population trajectories, fixed points, and state space help explain computation? Why is a dimensionality-reduction plot alone insufficient to establish a dynamical mechanism?

**After-reading task:** Draw a phase portrait for a two-dimensional linear system, change the eigenvalues, and predict the trajectories; then use PCA to view the trajectories after a linear coordinate transformation.

**Limits of interpretation:** Similar low-dimensional trajectories can arise from different dynamical systems; distinguish visualization, model fitting, and mechanistic inference.

**Access:** [Free full text/author's public version](https://pmc.ncbi.nlm.nih.gov/articles/PMC7402639/). The Europe PMC record provides free/open-access full text and a PMCID; free reading does not imply unrestricted redistribution.

### P10 · Sussillo & Barak (2013)

**[Opening the Black Box: Low-Dimensional Dynamics in High-Dimensional Recurrent Neural Networks](https://doi.org/10.1162/NECO_a_00409)**. *Neural Computation*, 25(3), 626-649. DOI: `10.1162/NECO_a_00409`.

**Role:** Dynamics, paper 2, after the Vyas review and two-dimensional system exercises; difficult; recommended as optional/advanced reading.

**Prerequisites:** Ordinary differential equations, Jacobians and eigenvalues, and RNN training.

**Read with this question in mind:** How can stable and unstable fixed points, slow points, and their local linearization reveal the computational mechanisms of a trained RNN?

**After-reading task:** First find fixed points in a two-dimensional nonlinear system and calculate the Jacobian eigenvalues, then try to explain state transitions in a small RNN. This is an exercise designed for teaching.

**Limits of interpretation:** Low-dimensional projections can hide stability directions; interpretations based on local linearization hold only within the region where the approximation applies.

**Access:** No verified free full-text source was found during this check; the DOI above is retained. This is advanced optional reading, outside the main pathway that requires free access.

### P11 · Richards et al. (2019)

**[A deep learning framework for neuroscience](https://doi.org/10.1038/s41593-019-0520-2)**. *Nature Neuroscience*, 22(11), 1761-1770. DOI: `10.1038/s41593-019-0520-2`.

**Role:** NeuroAI, paper 1; introductory review (requires familiarity with basic neural-network concepts).

**Prerequisites:** Neural-network fundamentals and basic concepts in supervised learning and optimization.

**Read with this question in mind:** How can objective functions, learning rules, and network architectures each be turned into testable neuroscience hypotheses?

**After-reading task:** Choose a familiar cognitive task and make a one-page table specifying the objective function, learning rule, architecture, and neural data that could test each hypothesis.

**Limits of interpretation:** Similar function or task performance alone does not demonstrate identical biological mechanisms.

**Access:** [Free full text/author's public version](https://pmc.ncbi.nlm.nih.gov/articles/PMC7115933/). The Europe PMC record provides free/open-access full text and a PMCID; free reading does not imply unrestricted redistribution.

### P12 · Kriegeskorte et al. (2008)

**[Representational similarity analysis – connecting the branches of systems neuroscience](https://doi.org/10.3389/neuro.06.004.2008)**. *Frontiers in Systems Neuroscience*, 2, 4. DOI: `10.3389/neuro.06.004.2008`.

**Role:** NeuroAI, paper 2; intermediate methods paper.

**Prerequisites:** Correlation and distance measures, matrix operations, and basic resampling.

**Read with this question in mind:** How can representational dissimilarity matrices (RDMs) compare brain activity, behavior, and models without requiring a one-to-one correspondence between neurons and model units?

**After-reading task:** Construct neural and model responses to six simulated stimuli, calculate two RDMs, and compare them; change the distance measure and noise level, and record how the conclusions change.

**Limits of interpretation:** Representational similarity provides one kind of constraint on hypotheses; it does not directly demonstrate identical mechanisms or causal relationships.

**Access:** [Free full text/author's public version](https://pmc.ncbi.nlm.nih.gov/articles/PMC2605405/). The Europe PMC record provides free/open-access full text and a PMCID; free reading does not imply unrestricted redistribution.

### P13 · Yang et al. (2019)

**[Task representations in neural networks trained to perform many cognitive tasks](https://doi.org/10.1038/s41593-018-0310-2)**. *Nature Neuroscience*, 22(2), 297-306. DOI: `10.1038/s41593-018-0310-2`.

**Role:** NeuroAI, paper 3; on the dynamics pathway, read after mastering a simple RNN; advanced; the code environment is dated.

**Prerequisites:** RNNs, gradient-based training, PCA, and clustering.

**Read with this question in mind:** After a single RNN learns to perform multiple cognitive tasks, how can task relationships, functional clusters, and the compositionality of task representations be measured?

**After-reading task:** Prioritize analysis of the authors' pretrained models, select a small number of tasks, and recreate plots of task variance or task relationships; record whether model seeds and task selection affect the conclusions.

**Limits of interpretation:** Beginners should start with the figures and analysis of pretrained models; full multitask retraining should not be the first assignment.

**Access:** [Free full text/author's public version](https://pmc.ncbi.nlm.nih.gov/articles/PMC11549734/). The Europe PMC record provides free/open-access full text and a PMCID; free reading does not imply unrestricted redistribution.

**Public code:** [Authors' repository](https://github.com/gyyang/multitask). The README is accessible; it provides the paper.py analysis entry point, 20 pretrained models, and training examples. No training or reproduction was run.

**Environment:** The README reports testing with TensorFlow 1.8.0 and Python 2.7/3.6 on MacOS 10.13/Ubuntu 16.04; an older environment or your own migration is required.

### P14 · Schultz et al. (1997)

**[A Neural Substrate of Prediction and Reward](https://doi.org/10.1126/science.275.5306.1593)**. *Science*, 275(5306), 1593-1599. DOI: `10.1126/science.275.5306.1593`.

**Role:** Learning, paper 1; introductory conceptual paper; the equations can be left for a second pass.

**Prerequisites:** Basic conditioning, expected values, and simple iterative updates.

**Read with this question in mind:** How does reward prediction error differ from reward itself? Before and after learning, what signals accompany cue onset and the omission of an expected reward?

**After-reading task:** Simulate a cue–reward task with simple temporal-difference learning, and plot prediction errors in three conditions: before learning, after learning, and reward omission.

**Limits of interpretation:** Read this as a historical introduction to the theory; do not equate all dopamine activity with a single scalar reward prediction error.

**Access:** [Free full text/author's public version](https://www.gatsby.ucl.ac.uk/~dayan/papers/sdm97.pdf). The PDF is publicly available on the UCL/Gatsby academic domain of coauthor Peter Dayan; it was downloaded, and its title, authors, and opening abstract text were checked.

### P15 · Sadtler et al. (2014)

**[Neural constraints on learning](https://doi.org/10.1038/nature13665)**. *Nature*, 512(7515), 423-426. DOI: `10.1038/nature13665`.

**Role:** Learning, paper 2; BCI, paper 1; intermediate; suitable as the first empirical paper after a review.

**Prerequisites:** PCA or factor analysis, linear readouts, and experimental controls.

**Read with this question in mind:** Why can changing the mapping from neural activity to cursor movement within and outside the manifold test constraints on short-term learning?

**After-reading task:** Generate neural activity from low-dimensional latent variables and compare within-manifold and outside-manifold readout transformations; draw a schematic and explain that it is a conceptual demonstration, not a reproduction of the original experiment.

**Limits of interpretation:** The paper's conclusions concern a specific BCI task and learning over hours; they should not be generalized to mean that outside-manifold activity cannot be learned on any timescale.

**Access:** [Free full text/author's public version](https://pmc.ncbi.nlm.nih.gov/articles/PMC4393644/). The Europe PMC record provides free/open-access full text and a PMCID; free reading does not imply unrestricted redistribution.

### P16 · Willett et al. (2023)

**[A high-performance speech neuroprosthesis](https://doi.org/10.1038/s41586-023-06377-x)**. *Nature*, 620(7976), 1031-1036. DOI: `10.1038/s41586-023-06377-x`.

**Role:** BCI, paper 2; advanced application; suitable for an end-of-course project topic.

**Prerequisites:** Sequence models, train/validation/test splits, and error-rate evaluation.

**Read with this question in mind:** How much do the neural decoder and language model each contribute? How should word error rate, vocabulary size, decoding speed, and evidence from a single participant be interpreted?

**After-reading task:** Start with the authors' publicly available intermediate results/weights and notebooks for offline evaluation; check the data splits and WER calculation first, then compare results with and without the language model. Retraining the entire published system should not be a required introductory task.

**Limits of interpretation:** The study involved one participant; a high-performance demonstration does not establish validation across participants or in everyday deployment. Reproducing the offline public code does not include reproducing the clinical experiment.

**Access:** [Free full text/author's public version](https://pmc.ncbi.nlm.nih.gov/articles/PMC10468393/). The Europe PMC record provides free/open-access full text and a PMCID; free reading does not imply unrestricted redistribution.

**Public code:** [Authors' repository](https://github.com/fwillett/speechBCI). The code statement in the PMC full text and the GitHub README mutually connect the paper and repository; the README lists three notebooks for data preparation, RNN training, and language-model inference. The code was not executed.

## 6. Paper Reading Card

Answer the following questions on one page for each paper. Study one key figure closely before deciding whether to read all the derivations.

1. What is the research question? Which of Marr's levels does it address? Is the paper a review, a methods paper, or an empirical study?
2. What are the model assumptions, variables, and experimental readouts? Which quantities are measured, and which are inferred only by the model?
3. Which figure or control supports the central conclusion? What are the sampling unit, data splits, baselines, and uncertainty?
4. Did feature selection, preprocessing fitting, or hyperparameter tuning use test information? How are temporal, participant, and session dependencies handled?
5. Do the authors demonstrate prediction, association, or constraints on a mechanism? What alternative explanations remain?
6. What is the smallest result I can reproduce first? Are data, code, or weights available? Are the environment, license, and computing requirements compatible with my resources?
7. What might explain discrepancies in reproduction? Which additional analysis could distinguish between explanations?

Minimum project deliverables: an executable notebook, input data and software versions, result figures with units, baselines and validation methods, and a one-page interpretation. For model simulations, record the time step; for data analysis, record selection criteria, data splits, and sources of randomness.

## 7. Verification Scope and Maintenance

This is a package of classic and methodological readings selected to address teaching gaps, not an exhaustive search or a review of the frontier through 2026. Courses and tools were checked against official catalogs, tutorials, and license text; bibliographic records were mainly cross-checked with Crossref and Europe PMC/PubMed, and available abstracts were read. The database record for Hodgkin–Huxley has no abstract; this check covered its metadata and the scanned full-text source. Selected author full texts, code statements, and READMEs received targeted checks; not every paper was read in full, and not all examples were installed or executed.

Free full-text status: Public versions in PMC or on publisher or author-institution websites were found for most papers. The free full text of Abbott (2008) is indexed in databases, but automated access returned 403 during this check; no free full text was verified for Sussillo & Barak (2013). Neither is required material where unrestricted free access is necessary.

Metadata corrections: Schwartz (2006) uses pages 484–507; Crossref's 13 is the article number. For RSA (2008), Europe PMC supplied all three authors—Kriegeskorte, Mur, and Bandettini—and 2:4. Varoquaux uses the formal journal year 2017; the free preprint first appeared in 2016.

The `references.bib` file in the same directory contains 16 standardized citations.
