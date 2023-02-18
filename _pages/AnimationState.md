---
title: "AnimationState"
layout: splash
permalink: /AnimationState
date: 2016-07-28T15:38:00

Title:
  - title: "Animation State"
    excerpt: "Managing animation states is important in battle simulations.\n\n"

MovingEx:
  - excerpt: "Like, idle to running status when start moving."
AttackingEx:
  - excerpt: "Or, changing from moving animation to attack animation if collided with enemy object."

Explain1:
  - excerpt: "So, we need to manage those animations properly.\n\n
    First, we need to load and store various animations first.\n\n
    Since I using 5 kinds of animations, so I created 5 vectors per animation model."

Explain2:
  - excerpt: "The vectors for Idle animations, Attack animations, Pain animations, Death animations, Running animations.\n\n
    These vectors will contain all datas for simulate animations.\n\n
    Like, bone transformations data, interpolation shader...\n\n
    Now, we need to give random animation indices to billboard objects in order to set different animations to each object.\n\n"

StateEx:
  - excerpt: "**Animation State enum.**"

SettingEx:
  - excerpt: "**Random animation index setting.**"

Youtube:
  - btn_label: "Youtube"
    url: "https://youtu.be/vAKZAVt7lh0"


term:
  - excerpt: ""
---

{% include feature_row id="Title" type="center" %}
<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/AnimationState/Moving.gif?raw=true" width = "800">
</div>
{% include feature_row id="MovingEx" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/AnimationState/Attack.gif?raw=true" width = "800">
</div>
{% include feature_row id="AttackingEx" type="center" %}

{% include feature_row id="Explain1" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/AnimationState/animState.png?raw=true" width = "800">
</div>
{% include feature_row id="Explain2" type="center" %}


<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/AnimationState/state.png?raw=true" width = "400">
</div>
{% include feature_row id="StateEx" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/AnimationState/setting.png?raw=true" width = "1000">
</div>
{% include feature_row id="SettingEx" type="center" %}

