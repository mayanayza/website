---
layout: page
title: Maya's Links
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
<br />
<div class="links-container" style="display: flex; flex-direction: column; align-items: center; gap: 1rem; width: 100%;">

<h2>Featured</h2>

<div class="button button--primary" style="width: 100%; display: flex; align-items: center; padding: 0; height: 4.5rem; position: relative;" onclick="window.open('https://maya.cloud/monolith', '_blank')">
  <div class="button-image" style="height: 100%; margin: 0; padding: 0; position: absolute; left: 0;">
    <img src="/media/monolith/images/IMG_7333.JPG" alt="monolith" style="height: 4.5rem; width: auto; margin: 0; padding: 0; display: block;">
  </div>
  <span style="flex: 1; text-align: center; padding: 0.5rem;">Monolith</span>
</div>
<div class="button button--primary" style="width: 100%; display: flex; align-items: center; padding: 0; height: 4.5rem; position: relative;" onclick="window.open('https://maya.cloud/paralysis', '_blank')">
  <div class="button-image" style="height: 100%; margin: 0; padding: 0; position: absolute; left: 0;">
    <img src="/media/paralysis/images/paralysis_2.JPG" alt="paralysis" style="height: 4.5rem; width: auto; margin: 0; padding: 0; display: block;">
  </div>
  <span style="flex: 1; text-align: center; padding: 0.5rem;">Paralysis</span>
</div>
<br />

<h2>In the Works</h2>

<table>
  <tbody>
    <tr>
      <td>
        ⿻ AidNet
      </td>
      <td>Creating decentralized trust networks for mutual aid</td>
    </tr>
    <tr>
      <td>
        🌱 Plant Autowater
      </td>
      <td>Just another high maintenance thing I do to be low maintenance...</td>
    </tr>
  </tbody>
</table>

<h2>Links</h2>

<div class="button button--primary" style="width: 100%; display: flex; justify-content: center; text-align: center;" onclick="window.open('/', '_blank')">Portfolio</div>

<div class="button button--primary" style="width: 100%; display: flex; justify-content: center; text-align: center;" onclick="window.open('/roadmap', '_blank')">Roadmap</div>

<!-- <div class="button button--primary" style="width: 100%; display: flex; justify-content: center; text-align: center;" onclick="window.open('https://dev.to/mayanayza', '_blank')">Dev.to</div>
<div class="button button--primary" style="width: 100%; display: flex; justify-content: center; text-align: center;" onclick="window.open('https://cara.app/mayanayza/', '_blank')">Cara</div>
<div class="button button--primary" style="width: 100%; display: flex; justify-content: center; text-align: center;" onclick="window.open('https://hackaday.io/mayanayza', '_blank')">Hackaday.io</div>
<div class="button button--primary" style="width: 100%; display: flex; justify-content: center; text-align: center;" onclick="window.open('https://www.hackster.io/mayanayza', '_blank')">Hackster.io</div>
</div> -->