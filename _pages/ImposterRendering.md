---
title: "Imposter Rendering"
layout: splash
permalink: /ImposterRendering
date: 2016-07-28T15:38:00
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: https://github.com/salmin609/salmin609.github.io/blob/master/images/Gam400_DisplayImg.png?raw=true
  cta_label:
  cta_url:
  caption:

Header:
  - alt: ""
    title: "Imposter Rendering"
    excerpt: "GPU Skinning speeds up simulating skinning technique, but it's still not enough to rendering 10k+ animating objects. \n\n
    Simulation might can be shared same objects, but rendering animating object is totally different story. \n\n
    For example, if we render object which has 5000+ vertices 100 times, our GPU needs to simulate 500000 vertices which is very heavy work"

HowThisWork:
  - title: "How this work?"    
    excerpt: "The **Overall Idea** is capture animating object and use that capture as texture of quad which always facing towards camera. \n\n
    First, we need to capture animating object to **Frame Buffer** in every frames."

CapturingExplain:
  - excerpt: "**Texture Example** \n\n
  **Capturing** could get with these following steps. \n\n
  **1** : Initialize camera which placed in front of animating object, and facing toward object. \n\n
  **2** : Bind frame buffer which we want capturing. \n\n
  **3** : Render object with initialized camera. \n\n
  **4** : Unbound the frame buffer (Set to default frame buffer). \n\n"

QuadExplain:
  - title: "Implement Quad"
    excerpt: "We need to make quad so we can apply our textures. \n\n
    Making quad is very easy, just initialize with vertices like, \n\n
    **(-1, -1, 0)** ,**(-1, 1, 0)** ,**(1, 1, 0)** ,**(1, -1, 0)** \n\n
    And multiply those with object's world matrix"

QuadRotating:
  - excerpt: "Now we have quad, but, it's just a quad, it's not a 3D object, it's just 2D object. \n\n
  People might notice this as they move camera. \n\n
  So, we need to make this quad **Always** facing toward camera. \n\n
  It's very easy, since every object's rotation was setted via multiplication of Camera Matrix and Model Matrix \n\n
  All we need to do is initialize rotation parts as identity matrix."

QuadRotationPart:
  - excerpt: "**Initialize Rotation part as Identity matrix** \n\n
  Almost done! All we need to do is just texturing."


DiscardExplain:
  - excerpt: "Rotating successfully done, but something's wrong \n\n
  When capturing to framebuffer, the background color also captured. \n\n
  We need only character part, we need to discard background color."

DiscardExplain2:
  - excerpt: "So check the texture Color's alpha value, if it's smaller than normal value, discard it"

Final1:
  - excerpt: "**Good!**"

Extra:
  - title: "Extra Work"
    excerpt: "Imposter Rendering is done, but when rendering quad, passing quad vertices & texture coordinates is take costs a lot, cause we have to render 10k+ quads.\n\n
    What we could do is utilize geometry shader, we could pass position data of the billboard, and enlarge that point into quads. \n\n
    Which can done just one draw call **glDrawArrays(GL_POINTS, 0, 1)**"

Geometry:
  - excerpt: "**Geometry Shader, enlarge our point input to quad**"
---

{% include feature_row id="Header" type="center" %}
{% include feature_row id="HowThisWork" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/Imposter/Texture1.png?raw=true" width = "400">
</div>

{% include feature_row id="CapturingExplain" type="center" %}
{% include feature_row id="QuadExplain" type="center" %}
{% include feature_row id="QuadRotating" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/Imposter/AlwaysFacingTowardCamera.png?raw=true" width = "600">
</div>

{% include feature_row id="QuadRotationPart" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/Imposter/BeforeDiscard.png?raw=true" width = "600">
</div>

{% include feature_row id="DiscardExplain" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/Imposter/Discard.png?raw=true" width = "600">
</div>
{% include feature_row id="DiscardExplain2" type="center" %}


<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/Imposter/Animation4.gif?raw=true" width = "600">
</div>
{% include feature_row id="Final1" type="center" %}

{% include feature_row id="Extra" type="center" %}

<div style="text-align: center">
<img src="https://github.com/salmin609/salmin609.github.io/blob/master/images/GAM400/Imposter/geometry.png?raw=true" width = "600">
</div>

{% include feature_row id="Geometry" type="center" %}