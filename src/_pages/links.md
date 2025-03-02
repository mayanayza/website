---
title: Maya's Links
permalink: /links/
hide_header: true
layout: links
---

## Featured
{% include featured-links.html %}
## Explore My Work
{% capture portfolio_url %}{{ site.url }}/tags/?tag=art{% endcapture %}
{% include button.html link=portfolio_url title="Art Portfolio" %}
{% capture tools_url %}{{ site.url }}/tags/?tag=tools{% endcapture %}
{% include button.html link=tools_url title="Systems" %}
{% include button.html link=site.url title="Browse All Work" %}
{% capture roadmap_url %}{{ site.url }}/roadmap/{% endcapture %}
{% include button.html link=roadmap_url title="View Roadmap" %}
## In the Works
{% include post-grid.html grid_type="roadmap" status="in_progress" empty_message="Nothing currently in the works" %}