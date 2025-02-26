---
title: Maya's Links
permalink: /links/
hide_header: true
layout: links
---
## Featured

{% include featured-links.html %}
{% capture portfolio_url %}{{ site.url }}/tags/?tag=art{% endcapture %}
{% include button.html link=portfolio_url title="View Art Portfolio" %}
{% include button.html link=site.url title="View All Work" %}

## In the Works

{% include post-grid.html status="in_progress" empty_message="Nothing currently in the works" %}
{% include button.html link=roadmap_url title="View Roadmap" %}