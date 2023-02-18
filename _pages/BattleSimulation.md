---
title: "Battle Simulation"
layout: splash
permalink: /BattleSimulation
date: 2016-07-28T15:38:00

Title:
  - title: "Battle Simulation"
    excerpt: "I will utilize compute shader to run this battle simulation."

Buffering:
  - excerpt: "First, we need to pass our billboard object's datas to GPU.\n\n
  These three buffer is key factors of this process.\n\n
  **AnimationIndex[]** : Animation state index which represent **Idle, Run, Attack, Death, Pain**.\n\n
  **ObjsPoses[]** : All positions of billboard objects.\n\n
  **ObjsDirections[]** : All directions of billboard objects.\n\n
  We can pass these values by binding GL_SHADER_STORAGE_BUFFER."

Indexing1:
  - excerpt: "Since we pass all of our billboard objects data at once and I manage those datas per **Herd**, we need to indexing these values to identify which object is in which herd.\n\n"
    

  


term:
  - excerpt: ""
---

{% include feature_row id="Title" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/BattleSimulation/1.png?raw=true" width = "400">
</div>
{% include feature_row id="Buffering" type="center" %}
{% include feature_row id="Indexing1" type="center" %}