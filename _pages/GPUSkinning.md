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
    title: "#1 Skeletal Animation"
    excerpt: "We need to implement **Skeletal Animation** first. \n\n
    First, load .anim file with Assimp. If this done correctly, we can get data structure like this"

SkeletalAnimationExplain2:
  - image_path:
    excerpt: "As we get this data, we need to parse this datas into structure. \n\n
    Each vertex affects by multiple bones with weighted factor, we need to specify those datas."



---

{% include feature_row id="Title" type="Center" %}

{% include feature_row id="SkeletalAnimationExplain1" type="Center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/GPUSkinning/assimpClasses.jpg?raw=true" width = "500">
</div>

{% include feature_row id="SkeletalAnimationExplain2" type="Center" %}
<!-- {% include feature_row id="AssimpDataStructure" type="Center"%} -->

