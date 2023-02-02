---
title: "Frustum Culling"
layout: splash
permalink: /FrustumCulling
date: 2016-07-28T15:38:00
header:
  overlay_color: "#000"
  overlay_filter: "0.1"
  overlay_image: https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/FrustumCulling/VisualCameraFrustum.png?raw=true
  cta_label:
  cta_url:
  caption:
Title:
  - title: "Frustum Culling"
    excerpt: "We tried to render 10k+ objects, it's quiet heavy process and it doesn't make sense if we also update object that we can't see.\n\n
    So, we need to verify whether if this object is inside of camera view frustum, if not, we don't have to update that object"

Explain1:
  - excerpt: "We need to build frustum first."

FaceBuild:
  - excerpt: "We need to build 6 faces based on camera position"

Explain2:
  - excerpt: "We will use sphereical bounding volume for object, which have it's own radius and center values. \n\n
  We can check if spv position is left side of leftFace or is right side of rightFace... \n\n
  If spv's position qualify all of conditions, it means that inside of frustum. \n\n
  If it's inside, render it, if not, discard it."
---

{% include feature_row id="Title" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/FrustumCulling/VisualCameraFrustum.png?raw=true" width = "400">
</div>
{% include feature_row id="Explain1" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/FrustumCulling/BuildFrustum.png?raw=true" width = "600">
</div>
{% include feature_row id="FaceBuild" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/FrustumCulling/faceCheck.png?raw=true" width = "600">
</div>

{% include feature_row id="Explain2" type="center" %}