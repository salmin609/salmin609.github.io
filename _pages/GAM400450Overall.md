---
title: "Gam400/450 Overall"
layout: splash
permalink: /GAM450Overall
date: 2016-07-28T15:38:00
header:
  overlay_color: "#000"
  overlay_filter: "0.1"
  overlay_image: https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/Skinning.gif?raw=true
  cta_label:
  cta_url:
  caption:
Title:
  - image_path: 
    width : "1000"
    height : "200"
    alt: ""
    title: "Overall"
    excerpt: ""
SkeletalAnimationExplain1:
  - image_path:
    title: "#1 Load Model"
    excerpt: "Load Model, I used Assimp library."

SkeletalAnimationExplain2:
  - image_path:
    title: "#2 Apply Animation"
    excerpt: "Then, apply skeletal animation to this object."

CameraCapturingExplain1:
  - image_path:
    title: "#3 Initialize Camera"
    excerpt: "Now, we need to initialize cameras in 8 different angles."

CameraCapturingExplain2:
  - image_path:
    title: "#4 Capture"
    excerpt: "Capture object in different angles, store in framebuffer."

BillboardExplain1:
  - image_path:
    title: "#5 Generate Billboard Object"
    excerpt: "Generate Billboard object, simple quad object that always facing towards camera."

BillboardExplain2:
  - image_path:
    title: "#6 Apply Texture"
    excerpt: "Apply captures on the billboard object."

BillboardDone:
  - image_path:
    title: "Imposter Rendering Done!"
    excerpt: ""

SimulationStepExplain1:
  - image_path:
    title: "#7 Simulation Steps"
    excerpt: ""    

AngleComputation:
  - title: "Angle Computation"
    excerpt: "Calculate which camera's capture should be used by calculating angle between camera & object."

CollisionCheck:
  - title: "Collision Check"
    excerpt: "Determine whether object was collided with enemy or ally objects.\n\n
              Following is primary buffers for computation."

Move:
  - title: "Move"
    excerpt: "If object was not collided, move it."

Attack:
  - title: "Attack"
    excerpt: "If object was collided with enemy object, attack."

AnimationStateChange:
  - title: "Animation State Change"
    excerpt: "Determine object's animation state by it's current collision state."

---

{% include feature_row id="Title" type="center" %}

{% include feature_row id="SkeletalAnimationExplain1" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/Overall/SkeletalBef.png?raw=true" width = "500">
</div>

{% include feature_row id="SkeletalAnimationExplain2" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/Overall/SkeletalAft.gif?raw=true" width = "500">
</div>

{% include feature_row id="CameraCapturingExplain1" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/Overall/InitCamera.jpg?raw=true" width = "800">
</div>

{% include feature_row id="CameraCapturingExplain2" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/Overall/CamCapturing.jpg?raw=true" width = "800">
</div>

{% include feature_row id="BillboardExplain1" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/Overall/BillboardQuad.png?raw=true" width = "800">
</div>

{% include feature_row id="BillboardExplain2" type="center" %}
<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/Overall/BillboardTexturing.gif?raw=true" width = "800">
</div>

{% include feature_row id="BillboardDone" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/Overall/Billboards.gif?raw=true" width = "800">
</div>

{% include feature_row id="SimulationStepExplain1" type="center" %}
<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/Overall/SimulationSteps.jpg?raw=true" width = "800">
</div>

{% include feature_row id="AngleComputation" type="center" %}
<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/Overall/AngleCompute.jpg?raw=true" width = "800">
</div>

{% include feature_row id="CollisionCheck" type="center" %}
<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/Overall/PrimaryBuffers.jpg?raw=true" width = "800">
</div>
