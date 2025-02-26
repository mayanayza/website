---
layout: post
date: '2024-07-30'
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
name: paralysis
display_name: 🌫️ Paralysis
title: Paralysis
date_created: '2024-07-30'
status: complete
priority: 0
tagline: Self-discovery and self-love
description: null
feature_post: true
featured_content:
  type: image
  source: images/paralysis_2.jpg
  language: ''
  start_line: 0
  end_line: 10
tags:
- Art
- Sculpture
embeds: []
website: https://maya.cloud/paralysis
github: https://github.com/mayanayza/paralysis
written_content: Paralysis is a kinetic sculpture that represents the artist's journey
  of self-discovery and self-love. The core visual concept of capturing the beauty
  of a laser made visible as it passes through water vapor was conceived of in 2014;
  however, years of repression made this piece impossible to create until the artist's
  identity crisis led to a creative breakthrough in 2024. The piece shines a laser
  against a servo-mounted mirror; as the mirror moves, the laser is reflected further
  off of mirrors surrounding the interior of the piece, and water vapor produced from
  a reservoir makes the laser and its reflected geometric patterns visible to the
  viewer. As the viewer is drawn in by the delicacy and organic motion of this mechanism,
  an LED display scrolls messages representing the artist's mental state over the
  decade of repression, communicating the depths of the journey that led to the piece's
  ultimate creation.
readme: ''
featured_image: /media/paralysis/images/paralysis_2.jpg
---
{% if page.github %}
  [View on GitHub]({{ page.github }}){:target="_blank"}
{% endif %}
{{ page.written_content }}
{% include iframe-embed.html iframe_embeds=page.iframe_embeds %}
{% include gallery.html images=page.images %}
{% include video.html videos=page.videos %}
{% include model-viewer.html models=page.models %}
{% include monster-food.html id=page.name %}