---
layout: post
date: '2025-02-28'
featured: false
images: []
videos: []
models: []
name: broken-robot
display_name: 🤖 Broken Robot
title: Broken Robot
date_created: '2025-02-28'
status: backlog
priority: 0
tagline: ''
feature_post: false
featured_content:
  type: image
  source: ''
  language: ''
  start_line: 0
  end_line: 0
tags: []
embeds:
- source: null
  type: null
written_content: ''
readme: ''
featured_image: /media/broken-robot/
---
# Post
{% if page.github %}
  [View on GitHub]({{ page.github }}){:target="_blank"}
{% endif %}
{{ page.written_content }}
{% include iframe-embed.html iframe_embeds=page.iframe_embeds %}
{% include gallery.html images=page.images %}
{% include video.html videos=page.videos %}
{% include model-viewer.html models=page.models %}
{% include monster-food.html id=page.name %}