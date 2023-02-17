---
title: "DynamicImposter"
layout: splash
permalink: /DynamicImposter
date: 2016-07-28T15:38:00

Title:
  - title: "Dynamic Imposter"
    excerpt: "We implemented Imposter Rendering, it makes us to render 10K+ animating objects with quads.\n\n
    But as you might noticed, there's one problem in this method.\n\n
    Since we only have one camera view angle,\n\n
    We can only render front face of the object."


Explain1:
  - excerpt: "So, we need to implement additional camera view angles.\n\n
    I will put 7 more cameras, and place these to facing toward to the animating object.\n\n
    **Front Camera, Left-Front Camera, Left Camera, Left-Back Camera, Back Camera, Right-Back Camera, Right Camera, Right-Front Camera**\n\n
    We can capture animating object in various angles with using these cameras.\n\n
    Also, need to include additional framebuffers for capturing."

example2:
  - excerpt: "Previous camera status"

example3:
  - excerpt: "New cameras status"

Explain2:
  - excerpt: "Now we have captures of object in various angles.\n\n
    We need to calculate angles between billboard objects and camera position.\n\n
    "

Explain3:
  - excerpt: "I utilized compute shader to calculate those, and return which camera index that the object should use.\n\n
  For the angle compute, we can get with dot product, since result of dot product contains cosine angle value, we can get angle by using arc cosine function.\n\n
  "
term:
  - excerpt: ""
---

{% include feature_row id="Title" type="center" %}
<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/DynamicImposter/probfromprevious.gif?raw=true" width = "800">
</div>
{% include feature_row id="term" type="center" %}

{% include feature_row id="Explain1" type="center" %}


<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/DynamicImposter/ex1.jpg?raw=true" width = "600">
</div>
{% include feature_row id="example2" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/DynamicImposter/ex2.jpg?raw=true" width = "600">
</div>
{% include feature_row id="example3" type="center" %}

{% include feature_row id="Explain2" type="center" %}