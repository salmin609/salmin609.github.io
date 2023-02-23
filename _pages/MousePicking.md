---
title: "Mouse Picking"
layout: splash
permalink: /MousePicking
date: 2016-07-28T15:38:00

Title:
  - title: "Mouse Picking"
    excerpt: "Let's implement RTS-style mouse picking function"

Explain1:
  - excerpt: "First, pass mouse position in screen-coordinate\n\n
    We should register mouse button callback function to our window."

Explain2:
  - excerpt: "Then, convert it to clip coordinate.\n\n
    Divided screen space **x,y** by window **width,height**, we don't need z coordinate yet."

Explain3:
  - excerpt: "Next, Get inverse of projection matrix to send clip coordinate to view coordinate."

Explain4:
  - excerpt: "Finally, get view-coordinate to world-coordinate matrix, by multiplying with this matrix, we can get direction toward clicked position."

---

{% include feature_row id="Title" type="center" %}

{% include feature_row id="Explain1" type="center" %}

