# Starting from Biology: Reflections on the Path to Protein Design

Written by Kaixuan.

<a id="early-learning"></a>

## My First Curiosity: From GPT to Diffusion Models

As an undergraduate, I was a student with a purely biological background. My curriculum had no dedicated courses in machine learning or deep learning, and I took many detours as a result. My initial understanding of machine-learning and deep-learning concepts did not come from a single source. The earliest encounter was in 2022–2023, when GPT had just come out: with GPT's help, a classmate wrote a convolutional neural network for image recognition by following the tutorials on the official PyTorch website, while still a first-year student who had not systematically studied linear algebra, calculus, or probability. Deep learning still felt somewhat mysterious then, and many older students deliberately waited until their third or fourth year, when their mathematics was solid, before taking a course in it.

At the time, I did not feel anything particularly special about this. I believed I could only feel confident if I wrote every line of code myself, and that this alone would give me the strongest foundations and be the most useful in the future. Still, I did start paying attention to deep learning and neural networks, purely out of curiosity about their connection to intelligence. For example, during a community-service program, I began watching videos about diffusion models on Bilibili. It was the summer of 2023. A few friends and I had some free time in the evenings after preparing lessons for children: one was watching Andrew Ng's machine-learning course on Coursera, another was studying cryptography, and another was looking into computer systems. I wanted to learn about diffusion models because they had just appeared and seemed able to generate so many images of pure beauty; ideally, I wanted to try them myself. At the time, I knew nothing about the hardware requirements of networks at different scales, and my computer still had integrated graphics, but I kept watching. Not having studied probability did not seem to prevent me from understanding Markov and reverse Markov chains. I also learned about GANs and the noise-adding and denoising processes of diffusion for the first time. Then I realized that without a graphics card, I did not seem able to study deep learning in a real sense, because it was difficult to deploy models myself and work through the details of training and debugging. I think I tried deploying on the CPU at one point and almost exhausted the video memory. There was no AI to help me then, so for many risks I had to ask teachers in advance or take extra care myself. Perhaps that was also why so many older students only formally began studying deep learning in their third or fourth year.

<a id="detour"></a>

## A Pause in Deep Learning and a New Direction

That summer, I therefore looked into brain-inspired computation in biological nervous systems, which was really just differential equations. Unfortunately, I was using integrated graphics, and even RNNs ran slowly once the data reached a certain size. It felt as though my connection with deep learning had come to a temporary end. Later, I learned that I could run models on GPUs allocated by Google Colab, but I still did not act on it. That semester, I did not think about trying this and that; I spent my days quietly attending classes and eating meals. In the evenings, I walked in the park on the west side of campus. The park had just been built, and there was nobody there except me, so I enjoyed the undisturbed leisure. It felt like the most comfortable semester I had had. I also entered a speech contest at the humanities festival. In the final round, I talked all the way from Zhuangzi's ideas to the idea of training large models on the premise that intelligence is compression. The teachers did not quite know how to comment, but developments in AI over the following two years did seem to bear out some of my thoughts.

During that semester, the first half of my second year, I mainly talked a great deal with many people. Many ideas also changed as they took shape: was computational neuroscience itself mature, what were its main research tools, how did it relate to a biology background, and would breakthroughs in the field be connected to our research, or would they depend on hardware? So I stopped being so fixed on computational neuroscience and decided to take a look at protein design first.

<a id="research-directions"></a>

## Why I Want to Study Protein Design and Computational Neuroscience Together

At the time, I did not have a fully developed understanding of those choices; I wanted to try things first and see more. With more experience now, I think there is actually a need to study protein design and computational neuroscience together.

Why do I say that? Because! The way protein design is researched and developed may well be what the future of research into computational neuroscience and other complex systems looks like. Computational neuroscience is still waiting for more data and standardized, unified ways to manage it, hoping for a uniform format like PDB data for proteins. It is waiting for breakthroughs in methods or hardware for recording and collecting data, like cryo-electron microscopy. It is waiting for a revolutionary foundation model like AlphaFold to appear and establish a common benchmark for a major direction of research in the field.

Often, the reason computational neuroscience does not use large models is not that large models are unsuitable for the field, but that it is constrained by the amount of data. Researching protein design has been like freeing my hands. Its diverse and abundant data have completely opened up my research thinking, which previously had to wrestle with dataset size. We should do more research with fewer constraints, so that our thinking can open up and become more creative. And this also prepares us to design models of intelligence and complex systems once the volume of data grows in the future!

<a id="looking-back"></a>

## Looking Back, Then Beginning a Learning Path

As I write this, I suddenly realize that if I had continued studying diffusion models in the summer of 2023, I might have arrived just in time for the surge of papers in protein design. I wonder whether I would still have come back to computational neuroscience.

Next, I will present a tutorial on how someone with a biology background can build a reasonably solid introduction to machine learning and deep learning, making it easier to later work on papers about algorithms and model architectures, while also learning to apply tools built by others to concrete scientific questions in practice.
