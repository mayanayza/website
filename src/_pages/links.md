---
in_progress:
- name: aidnet
  display_name: ⿻ AidNet
  title: ' AidNet'
  date_created: '2025-02-09'
  status: in_progress
  priority: 0
  tagline: Creating decentralized trust networks for mutual aid
  description: Creating decentralized trust networks for mutual aid
  feature_post: false
  featured_content:
    type: image
    source: ''
    language: ''
    start_line: 0
    end_line: 0
  tags: []
  embeds: []
- name: plant-autowater
  display_name: 🌱 Plant Autowater
  title: Plant Autowater
  date_created: '2025-01-22'
  status: in_progress
  priority: 0
  tagline: Just another high maintenance thing I do to be low maintenance...
  description: null
  feature_post: false
  featured_content:
    type: image
    source: ''
    language: ''
    start_line: 0
    end_line: 10
  tags:
  - Automation
  - Home
  embeds: []
- name: gstudy-1
  display_name: 🍆 Gstudy 1
  title: Gstudy 1
  date_created: '2025-01-22'
  status: in_progress
  priority: 0
  description: Genital dysphoria, disgust
  feature_post: false
  featured_content:
    type: image
    source: ''
    language: ''
    start_line: 0
    end_line: 0
  tags: []
  embeds: []
featured_projects:
- name: monolith
  display_name: 🗿 Monolith
  title: Monolith
  date_created: '2025-01-22'
  status: complete
  priority: 0
  tagline: Exploring mulitiplicity and parts
  description: This sculpture explores the concepts of mulitiplicity and parts through
    the lens of Disassociative Identity Disorder
  feature_post: true
  featured_content:
    type: image
    source: images/1.JPG
    language: ''
    start_line: 0
    end_line: 10
  tags:
  - Art
  - Sculpture
  embeds: []
  website: https://maya.cloud/monolith
  featured_image: /media/monolith/images/1.JPG
- name: paralysis
  display_name: 🌫️ Paralysis
  title: Paralysis
  date_created: '2024-07-30'
  status: complete
  priority: 0
  tagline: Self-discovery and self-love
  description: This sculpture was originally created to capture the beauty of a laser
    in smoke. It evolved to represent self-discovery and self-love.
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
  featured_image: /media/paralysis/images/paralysis_2.jpg
title: Maya's Links
permalink: /links/
hide_header: true
layout: links
website: https://maya.cloud
---
## Featured

{% include featured-links.html projects=page.featured_projects %}
{% include button.html link=page.website title="View Portfolio" %}

## In the Works

{% include roadmap-entries.html entries=page.in_progress empty_message="Nothing currently in progress" %}
{% capture roadmap_url %}{{ page.website }}/roadmap{% endcapture %}
{% include button.html link=roadmap_url title="View Roadmap" %}