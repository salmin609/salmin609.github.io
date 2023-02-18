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
    

Indexing2:
  - excerpt: "**HerdCount** : Total counts of herds\n\n
  **Index** : current index of billboard object, which can be obtained with current invocation ID and work group size of compute shader.\n\n
  **gl_GlobalInvocationID.x + gl_GlobalInvocationID.y * gl_NumWorkGroups.x * gl_WorkGroupSize.x;**\n\n
  **HerdOffset** : offset indexes of herds in 1D array which passed by uniform values. Accumulation was done by count of each herd.\n\n
  If current invocation index is greater than herd offset, means object is in that herd."

EnemyCollision1:
  - excerpt: "Now we know which object is in which herd, we can get whether collided or not with other object."
    


term:
  - excerpt: ""
---

{% include feature_row id="Title" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/BattleSimulation/1.png?raw=true" width = "400">
</div>
{% include feature_row id="Buffering" type="center" %}
{% include feature_row id="Indexing1" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/BattleSimulation/2.png?raw=true" width = "600">
</div>
{% include feature_row id="Indexing2" type="center" %}
{% include feature_row id="EnemyCollision1" type="center" %}

