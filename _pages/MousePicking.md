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
  - excerpt: "Finally, get view-coordinate to world-coordinate matrix, by multiplying with this matrix, we can get **direction** toward **clicked position**."

Explain5:
  - excerpt: "Then, check if the selected position is in herd's area.\n\n
    I used **point vs AABB** check."

Explain6:
  - excerpt: "If herd is selected, calculate mid point of herd and set direction toward position."

---

{% include feature_row id="Title" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/MousePicking/1.png?raw=true" width = "600">
</div>

{% include feature_row id="Explain1" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/MousePicking/2.png?raw=true" width = "600">
</div>

{% include feature_row id="Explain2" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/MousePicking/3.png?raw=true" width = "600">
</div>

{% include feature_row id="Explain3" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/MousePicking/4.png?raw=true" width = "600">
</div>

{% include feature_row id="Explain4" type="center" %}


<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/MousePicking/5.png?raw=true" width = "600">
</div>

{% include feature_row id="Explain5" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/MousePicking/6.png?raw=true" width = "600">
</div>

{% include feature_row id="Explain6" type="center" %}

