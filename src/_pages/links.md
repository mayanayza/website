---
layout: page
title: Links
permalink: /links/
hide_header: true
---


{% if site.data.settings.social %}
<div class="social">
  <ul class="social__list list-reset">
    {% for social in site.data.settings.social %}
    <li class="social__item">
      <a class="social__link" href="{{ social.link }}" target="_blank" rel="noopener" aria-label="{{ social.name }} link"><i class="{{ social.icon }}"></i></a>
    </li>
    {% endfor %}
  </ul>
</div>
{% endif %}

<div class="links-container" style="display: flex; flex-direction: column; align-items: center; gap: 1rem; width: 100%;">
<h2>Featured Work</h2>
<div class="button button--primary" style="width: 100%; display: flex; align-items: center;" onclick="window.open('', '_blank')">
  <div class="button-image" style="height: 100%; display: flex; align-items: center;">
    <img src="/media/monolith/images/IMG_7333.JPG" alt="monolith" style="height: 100%; width: auto; object-fit: contain;">
  </div>
  <span style="flex: 1; text-align: center;">Monolith</span>
</div>
<div class="button button--primary" style="width: 100%; display: flex; align-items: center;" onclick="window.open('', '_blank')">
  <div class="button-image" style="height: 100%; display: flex; align-items: center;">
    <img src="/media/paralysis/images/paralysis_2.JPG" alt="paralysis" style="height: 100%; width: auto; object-fit: contain;">
  </div>
  <span style="flex: 1; text-align: center;">Paralysis</span>
</div>
<br />


<h2>Upcoming Work</h2>
| Project | Description |
|---------|-------------|
| ⿻ AidNet | Creating decentralized trust networks for mutual aid |
| 🌱 Plant Autowater | Just another high maintenance thing I do to be low maintenance... |

<div class="button button--primary" style="width: 100%; display: flex; justify-content: center; text-align: center;" onclick="window.open('/roadmap', '_blank')">Roadmap</div>

<h2>Links</h2>
<div class="button button--primary" style="width: 100%; display: flex; justify-content: center; text-align: center;" onclick="window.open('/', '_blank')">Portfolio</div>
<div class="button button--primary" style="width: 100%; display: flex; justify-content: center; text-align: center;" onclick="window.open('', '_blank')">Github</div>

<!-- <div class="button button--primary" style="width: 100%; display: flex; justify-content: center; text-align: center;" onclick="window.open('https://dev.to/mayanayza', '_blank')">Dev.to</div>
<div class="button button--primary" style="width: 100%; display: flex; justify-content: center; text-align: center;" onclick="window.open('https://cara.app/mayanayza/', '_blank')">Cara</div>
<div class="button button--primary" style="width: 100%; display: flex; justify-content: center; text-align: center;" onclick="window.open('https://hackaday.io/mayanayza', '_blank')">Hackaday.io</div>
<div class="button button--primary" style="width: 100%; display: flex; justify-content: center; text-align: center;" onclick="window.open('https://www.hackster.io/mayanayza', '_blank')">Hackster.io</div>
</div> -->