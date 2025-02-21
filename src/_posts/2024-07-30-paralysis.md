---
layout: post
title: Paralysis
name: paralysis
tagline: Self-discovery and self-love
date: '2024-07-30'
tags:
- Art
- Sculpture
featured: true
images:
- /media/paralysis/images/paralysis_1.jpg
- /media/paralysis/images/paralysis_2.jpg
- /media/paralysis/images/paralysis_4.jpg
- /media/paralysis/images/paralysis_5.jpg
videos:
- /media/paralysis/videos/paralysis.mp4
models:
- /media/paralysis/models/paralysis.glb
featured_image: /media/paralysis/images/paralysis_2.jpg
---
{% if project.github %}
  [View on GitHub]({{ project.github }}){:target="_blank"}
{% endif %}
{{ content }}
{% include iframe-embed.html iframe_embed=page.iframe_embeds %}
{% include gallery.html images=page.images %}
{% include video.html videos=page.videos %}
{% include model-viewer.html models=page.models %}
{% include monster-food.html id=page.name %}