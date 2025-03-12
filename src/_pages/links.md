---
title: Maya's Links
permalink: /links/
hide_header: true
layout: links
---

## ~

{% assign projects = site.posts | where: "feature_post", true %}

{% for project in projects %}
{% include button.html title=project.title link=project.website image=project.featured_image %}
{% endfor %}

## ~

{% capture portfolio_url %}{{ site.url }}/tags/?tag=art{% endcapture %}
{% include button.html link=portfolio_url title="Art Portfolio" %}
{% include button.html link=site.url title="Browse All Work" %}
{% capture roadmap_url %}{{ site.url }}/roadmap/{% endcapture %}
{% include button.html link=roadmap_url title="View Roadmap" %}