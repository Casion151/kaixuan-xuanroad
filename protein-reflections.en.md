# From Biology to Protein Design: Personal Reflections

Written by Kaixuan.

<a id="early-learning"></a>

## My Initial Curiosity: From GPT to Diffusion Models

I came to this as an undergraduate with a background entirely in biology. My curriculum included no dedicated courses in machine learning or deep learning, so I took quite a few detours. I picked up my first ideas about these subjects from several different sources. My earliest exposure came around 2022–2023, in the early days of ChatGPT. With GPT's help and the tutorials on the official PyTorch website, a classmate built a convolutional neural network for image recognition as a first-year student, before having systematically studied linear algebra, calculus, or probability theory. Deep learning still seemed rather mysterious at the time. Many students in the years above me deliberately waited until their third or fourth year, once they had a solid grounding in mathematics, before taking courses in it.

At first, this did not make much of an impression on me. I believed I would only feel confident in my code if I wrote every line myself: surely that was the way to build the strongest foundations and gain skills that would serve me best in the future. Still, I began taking an interest in deep learning and neural networks, simply because I was curious about their connection to intelligence. During a community-service teaching program, for instance, I started watching videos about diffusion models on Bilibili. It was the summer of 2023. After preparing lessons for children, a few friends and I had some free time in the evenings. One was taking Andrew Ng's machine learning course on Coursera, another was studying cryptography, and another was learning about computer systems. Diffusion models were new to me then, and the sheer beauty of the images they could generate made me want to understand them—and, ideally, try them out myself. I had no idea how hardware requirements varied with network size. My computer only had an integrated GPU (iGPU), but I kept watching anyway. Even without having studied probability theory, I felt I could follow the ideas of Markov chains and reversible Markov chains. This was also my first introduction to GANs and to the processes of adding and removing noise in diffusion models. I then realized how difficult it would be to get hands-on experience with deep learning on my own computer without a dedicated GPU: running models locally and experimenting with training and debugging were hard. I remember trying to run a model on the CPU and nearly running out of memory. I was not using AI assistance myself at that point, so I had to ask teachers about potential problems in advance or work them out cautiously on my own. Perhaps this was another reason so many students waited until their third or fourth year to study deep learning formally.

<a id="detour"></a>

## Putting Deep Learning Aside for a While

That summer, I turned to neural computation inspired by biological nervous systems. The models I was looking at were essentially systems of differential equations. Unfortunately, with only an integrated GPU, even RNNs ran slowly once I used larger amounts of data. It felt as though my time with deep learning had come to a temporary end. I later learned that Google Colab could give me access to a GPU, but I still did not follow up on it. That semester, I stopped trying to explore so many different things and settled into a quiet routine of classes and meals. In the evenings, I walked in the park on the west side of campus. It had just been built, and I would have the place to myself. I enjoyed the peace of being left undisturbed. Looking back, it was probably my most relaxed semester. I also entered a speech competition at the humanities festival. In the final, my talk ranged from Zhuangzi's philosophy to the idea that intelligence is compression and its connection to training large models. The teachers seemed unsure what to make of it, although developments in AI over the next two years seemed to support some of what I had been thinking.

It was the first semester of my second year. I spent a lot of time talking with different people, and my ideas shifted as they took shape. I wondered how mature computational neuroscience was, what tools it relied on, and how a biology background would fit into it. Would the breakthroughs come from the kind of research we could do, or would they depend on advances in hardware? I became less set on pursuing computational neuroscience and decided to explore protein design first.

<a id="research-directions"></a>

## Why I Want to Study Protein Design and Computational Neuroscience Together

I did not have a fully worked-out rationale for that choice at the time. I wanted to try things and see more of what was out there. With more experience, I now think there is a need to study protein design and computational neuroscience together.

And this is what excites me: the way research in protein design is developing may well foreshadow how research in computational neuroscience and other complex systems will develop. Computational neuroscience still needs more data and more consistent ways to organize and manage it, with shared formats comparable to those used by the Protein Data Bank (PDB). It also needs breakthroughs in data recording and acquisition—whether in methods or hardware—comparable in impact to cryo-electron microscopy. And I hope to see a foundation model as transformative as AlphaFold, one that can establish a common benchmark for a major area of research in the field.

In many cases, what limits the use of large models in computational neuroscience is the amount of available data, rather than a lack of potential for those models. Working on protein design has given me more room to explore. Its diverse and abundant data have opened up my thinking after so much time spent worrying about dataset size. I think we should seek out research questions with fewer practical constraints, giving ourselves more room to think creatively. That experience can also prepare us to design models of intelligence and complex systems as more data become available in the future.

<a id="looking-back"></a>

## Looking Back and Sharing a Learning Path

As I write, it strikes me that if I had kept working on diffusion models in the summer of 2023, I might have caught the wave of research and publications in protein design. I wonder whether I would then have found my way back to computational neuroscience.

In the tutorial that follows, I share a route into machine learning and deep learning for people with a biology background. The aim is to build a solid foundation for writing research papers on algorithms and model architectures, while also learning to apply existing tools to specific scientific questions.
