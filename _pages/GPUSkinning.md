---
title: "GPUSkinning"
layout: splash
permalink: /GPUSkinning
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
    title: "GPU Skinning"
    excerpt: ""
SkeletalAnimationExplain1:
  - image_path:
    title: "#1 Load Skeletal Animation File"
    excerpt: "We need to implement **Skeletal Animation** first. \n\n
    First, load .anim file with Assimp. If this done correctly, we can get data structure like this"

SkeletalAnimationExplain2:
  - image_path:
    excerpt: "As we get this data, we need to parse this datas into structure. \n\n
    Each vertex affects by multiple bones with weighted factor, we need to specify those datas."

SkeletalAnimationExplain3:
  - image_path:
    excerpt: "This is **Animation Vertex Data** \n\n
    **Position** : 3D Position \n\n
    **Texture Coordinate** : Texture Coordinates \n\n
    **Normal** : Normal Direction \n\n
    **BoneID 0~3** : Indices of Affecting Bones \n\n
    **Weight 0~3** : How much affected \n\n
    With these datas, we can **Interpolate** position of each vertices per time frame. \n\n
    .Anim file included frame data, which means how bones moving in several frames, we need to interpolate vertex position by bone's transformation data"

InterpolationExplain1:
  - title: "#2 Interpolation"
    excerpt: "Each animation frame store every bone's transformation datas by time factor. We should get transformation matrix by putting time value.\n\n
    Using **Linear Interpolation** for translation / scaling factors, **Spherical Linear Interpolation** for rotation factor.\n\n
    Put these transformation datas together into 4x4 matrix, now we have bone transformation."

InterpolationExplain2:
  - excerpt: "We stored which bone affecting which vertex, and how much they affected, using **Bone transformation**, we can calculate vertex's position by time. \n\n
  Using this transformation, we can get animation object!"

GPUSkinning1:
  - title: "#3 GPU Skinning"
    excerpt: "Skeletal Animation implemented, but done in CPU, for drawing massive animating objects, it's too slow. \n\n 
    Because transformation datas stored hierarchically like our body\n\n
    **Head** -> **Neck** -> **Spine** -> **Pelvis** ..."

GPUSkinning2:
  - excerpt: "Like this example, for getting right finger's transformation data, we need to compute & accumulate transformation in this order \n\n
   **Right Finger Transformation** * **Arm Right Transformation** * **Uparm Right Transformation** * **Neck Transformation** * **Head transformation** \n\n
   And this interpolation & multiplication costs us a lot, so I moved this calculations to GPU"

GPUSkinning3:
  - excerpt: "We need to put **all animation datas** like, All NodeTransforms, Hierarchical Orders of Nodes, translation keys, scaling keys, rotation keys, offset matrices in order to get proper transformation. \n\n
  **First**, we need to get node transform, if it is animated node, it needs interpolation else, use default node's transformation"

GetNodeTransformTitle:
  - excerpt: "**Get Node Transform**"
InterpolationTitle:
  - excerpt: "**Interpolation** \n\n
  Every frame have timestamp, we can get interpolated time value between 2 frames timestamp. 
  And use this interpolated timestamp, we can interpolate between **translation, rotation, scaling** factors"

GetParentMatrix:
  - excerpt: "**Get Parent Matrix** \n\n
  Then, we need to get parent matrix of this node, we pass hierarchical order to GPU. \n\n
  Read parent transformation in that order, and accumulate to current node transformation"

SetFinalMatrix:
  - excerpt: "**Out Final Matrix** \n\n
  Almost done! Just check if this node needs offset calculation and store to out buffer. \n\n
  And apply this bone transformations data to each verex"

Final1:
  - excerpt: "**Looks Good!** \n\n
  But purpose of this technique is to simulate many animations! Let's draw several kinds of animations!"

Final2:
  - excerpt: "**Good!**"

Term:
  - title: ""
---

{% include feature_row id="Title" type="center" %}

{% include feature_row id="SkeletalAnimationExplain1" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/GPUSkinning/assimpClasses.jpg?raw=true" width = "500">
</div>

{% include feature_row id="SkeletalAnimationExplain2" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/GPUSkinning/vertex.jpg?raw=true" width = "200">
</div>

{% include feature_row id="SkeletalAnimationExplain3" type="center" %}

{% include feature_row id="InterpolationExplain1" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/GPUSkinning/interpolationExample1.png?raw=true" width = "800">
</div>

{% include feature_row id="InterpolationExplain2" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/Skinning.gif?raw=true" width = "400">
</div>

{% include feature_row id="GPUSkinning1" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/GPUSkinning/gpuSkinningExplain.png?raw=true" width = "400">
</div>

{% include feature_row id="GPUSkinning2" type="center" %}

{% include feature_row id="GPUSkinning3" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/GPUSkinning/InterpolationGPU.png?raw=true" width = "600">
</div>

{% include feature_row id="GetNodeTransformTitle" type="center" %}


<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/GPUSkinning/GPUInterpolation2.png?raw=true" width = "800">
</div>
{% include feature_row id="InterpolationTitle" type="center" %}


<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/GPUSkinning/gpuInterpolation3.png?raw=true" width = "800">
</div>
{% include feature_row id="GetParentMatrix" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/GPUSkinning/gpuSkinning4.png?raw=true" width = "800">
</div>
{% include feature_row id="SetFinalMatrix" type="center" %}


<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/GPUSkinning/Animation3.gif?raw=true" width = "800">
</div>
{% include feature_row id="Final1" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/GPUSkinning/Animation4.gif?raw=true" width = "800">
</div>
{% include feature_row id="Final2" type="center" %}