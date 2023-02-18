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
    
EnemyCollision2:
  - excerpt: "We can get current object's poisition with **objsPoses[index]**, and check current object's side with using herdIndex, iterate every objects in other side, and check whether collided or not."

AttackDone:
  - excerpt: "**Attack Done!**"

CollisionEx:
  - excerpt: "**Collision check function.**"

EnemyCollision3:
  - excerpt: "If object collided with enemy object, change to attack state."

AllyCollision1:
  - excerpt: "If not, we should check if object is collided with ally side objects."
AllyCollision2:
  - excerpt: "Same as enemy collision check, but side should be same to check whether ally or not."
AllyCollision3:
  - excerpt: "If collided with ally, check ally animation status, if it isn't running, change current object's state to idle."
Move:
  - excerpt: "If both collision checks failed, change to run animation and move object's position."
MoveEx:
  - excerpt: "Move Toward function."

MoveDone:
  - excerpt: "**Move Done!**"

Setting1:
  - excerpt: "Now we setted our billboard object's animation states in buffer, we need to read them and apply to our object.\n\n
  Use my buffer.hpp functions, \n\n
  **GetBuffer(int storageIndex)** : Return buffer object which corresponding with storage index.\n\n
  **GetData(void* data)** : Mapping buffer's data to *data pointer\n\n"

Setting2:
  - excerpt: "Now we have **animation state index, angle index** \n\n
  So, we can set our billboard object's animation."

SetAnimation:
  - excerpt: "Set Animation Function, change **fbs (Animation)** if given state is different with previous state."

SetFrameBufferAngle:
  - excerpt: "Set current using frame buffer with given **animation state index**, **frame buffer angle index**"

BOrender:
  - excerpt: "Using current frame buffer's texture, drawing billboard object."

Final:
  - excerpt: "Looks Good!"

term:
  - excerpt: ""

Youtube:
  - btn_label: "Youtube"
    url: "https://youtu.be/7YjG8OUKh24"
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

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/BattleSimulation/3.png?raw=true" width = "600">
</div>
{% include feature_row id="EnemyCollision2" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/BattleSimulation/4.png?raw=true" width = "600">
</div>
{% include feature_row id="CollisionEx" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/BattleSimulation/5.png?raw=true" width = "600">
</div>
{% include feature_row id="EnemyCollision3" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/AnimationState/Attack.gif?raw=true" width = "600">
</div>
{% include feature_row id="AttackDone" type="center" %}
{% include feature_row id="term" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/BattleSimulation/6.png?raw=true" width = "1000">
</div>
{% include feature_row id="AllyCollision1" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/BattleSimulation/7.png?raw=true" width = "1000">
</div>
{% include feature_row id="AllyCollision2" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/BattleSimulation/9.png?raw=true" width = "600">
</div>
{% include feature_row id="AllyCollision3" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/BattleSimulation/10.png?raw=true" width = "600">
</div>
{% include feature_row id="Move" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/BattleSimulation/11.png?raw=true" width = "600">
</div>
{% include feature_row id="MoveEx" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/AnimationState/Moving.gif?raw=true" width = "600">
</div>
{% include feature_row id="MoveDone" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/BattleSimulation/12.png?raw=true" width = "1000">
</div>
{% include feature_row id="Setting1" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/BattleSimulation/13.png?raw=true" width = "1000">
</div>
{% include feature_row id="Setting2" type="center" %}


<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/BattleSimulation/14.png?raw=true" width = "1000">
</div>
{% include feature_row id="SetAnimation" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/BattleSimulation/15.png?raw=true" width = "600">
</div>
{% include feature_row id="SetFrameBufferAngle" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/BattleSimulation/16.png?raw=true" width = "1000">
</div>
{% include feature_row id="BOrender" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/result4.gif?raw=true" width = "1000">
</div>
{% include feature_row id="Final" type="center" %}

{% include feature_row id="Youtube" type="center" %}