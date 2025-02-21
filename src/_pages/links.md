---
layout: page
title: Maya's Links
permalink: /links/
hide_header: true
---


{% include social-links.html %}
<br />
<div class="links-container" style="display: flex; flex-direction: column; align-items: center; gap: 1rem; width: 100%;">

<h2>Featured</h2>

<div class="button button--primary" style="width: 100%; display: flex; align-items: center; padding: 0; height: 4.5rem; position: relative;" onclick="window.open('https://maya.cloud/monolith', '_blank')">
  <div class="button-image" style="height: 100%; margin: 0; padding: 0; position: absolute; left: 0;">
    <img src="/media/monolith/images/1.JPG" alt="monolith" style="height: 4.5rem; width: auto; margin: 0; padding: 0; display: block;">
  </div>
  <span style="flex: 1; text-align: center; padding: 0.5rem;">Monolith</span>
</div>
<div class="button button--primary" style="width: 100%; display: flex; align-items: center; padding: 0; height: 4.5rem; position: relative;" onclick="window.open('https://maya.cloud/paralysis', '_blank')">
  <div class="button-image" style="height: 100%; margin: 0; padding: 0; position: absolute; left: 0;">
    <img src="/media/paralysis/images/paralysis_2.jpg" alt="paralysis" style="height: 4.5rem; width: auto; margin: 0; padding: 0; display: block;">
  </div>
  <span style="flex: 1; text-align: center; padding: 0.5rem;">Paralysis</span>
</div>
<br />

<div class="button button--primary" style="width: 100%; display: flex; justify-content: center; text-align: center;" onclick="window.open('/', '_blank')">View Portfolio</div>

<br />


<h2>In the Works</h2>

<p>in_progress</p>


{% include roadmap-entries.html entries=in_progress empty_message="Nothing currently in progress" %}

<div class="button button--primary" style="width: 100%; display: flex; justify-content: center; text-align: center;" onclick="window.open('/roadmap', '_blank')">View Roadmap</div>