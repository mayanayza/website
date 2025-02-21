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
backlog:
- name: sledding
  display_name: 🪨 Sledding
  title: ' Sledding'
  date_created: '2025-02-20'
  status: backlog
  priority: 0
  tagline: ''
  description: ''
  feature_post: false
  featured_content:
    type: image
    source: ''
    language: ''
    start_line: 0
    end_line: 0
  tags: []
  embeds:
  - name: null
    type: null
complete_art:
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
- name: monster
  display_name: 👹 Monster
  title: Monster
  date_created: '2025-01-23'
  status: complete
  priority: 0
  tagline: Feed the monster...
  description: ''
  feature_post: false
  featured_content:
    type: image
    source: embeds/monster-background.png
    language: ''
    start_line: 0
    end_line: 10
  tags:
  - Art
  - Digital
  embeds:
  - source: src/monster.html
    type: iframe
  - source: src/monster-food.html
    type: no-embed
  website: https://maya.cloud/monster
complete_other:
- name: luna
  display_name: 🦋 Luna
  title: Luna
  date_created: 2025-01-22
  status: complete
  priority: 0
  tagline: A content syndication tool for artists and creative technologists
  description: ''
  feature_post: false
  featured_content:
    type: code
    source: src/script/channels/website.py
    language: python
    start_line: 25
    end_line: 50
  tags:
  - Automation
  - Tools
  embeds: []
  website: https://maya.cloud/luna
  github: https://github.com/mayanayza/luna
- name: website
  display_name: 🌐 Website
  title: Website
  date_created: '2025-01-28'
  status: complete
  priority: 0
  tagline: My website!
  description: null
  feature_post: false
  featured_content:
    type: code
    source: src/_site/sitemap.xml
    language: xml
    start_line: 0
    end_line: 25
  tags:
  - Digital
  embeds: []
  website: https://maya.cloud/website
  github: https://github.com/mayanayza/website
- name: transit-time-script
  display_name: 🚲 Transit Time Script
  title: Transit Time Script
  date_created: 2024-09-25
  status: complete
  priority: 0
  tagline: Automatic calendar blocking while you're going to be in-transit
  description: null
  feature_post: false
  featured_content:
    type: code
    source: src/Code.gs
    language: javascript
    start_line: 50
    end_line: 75
  tags:
  - Automation
  - Tools
  embeds: []
  website: https://maya.cloud/transit-time-script
  github: https://github.com/mayanayza/transit-time-script
title: Roadmap
permalink: /roadmap/
hide_header: false
layout: page
website: https://maya.cloud
---
## In the Works

{% include roadmap-entries.html entries=page.in_progress empty_message="Nothing currently in progress" %}

## Starting Soon

{% include roadmap-entries.html entries=page.backlog empty_message="Nothing currently in backlog" %}

## Done

### Art

{% include roadmap-entries.html entries=page.complete_art empty_message="Nothing completed" %}

### Other Work

{% include roadmap-entries.html entries=page.complete_other empty_message="Nothing completed" %}
