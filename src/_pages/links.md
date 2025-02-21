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
  <span style="flex: 1; text-align: center; padding: 0.5rem;">Monolith</span>
</div>
<div class="button button--primary" style="width: 100%; display: flex; align-items: center; padding: 0; height: 4.5rem; position: relative;" onclick="window.open('https://maya.cloud/paralysis', '_blank')">
  <span style="flex: 1; text-align: center; padding: 0.5rem;">Paralysis</span>
</div>
<br />

<div class="button button--primary" style="width: 100%; display: flex; justify-content: center; text-align: center;" onclick="window.open('/', '_blank')">View Portfolio</div>

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
    <tr>
      <td>
        🍆 Gstudy 1
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

<div class="button button--primary" style="width: 100%; display: flex; justify-content: center; text-align: center;" onclick="window.open('/roadmap', '_blank')">View Roadmap</div>

<!-- <div class="button button--primary" style="width: 100%; display: flex; justify-content: center; text-align: center;" onclick="window.open('https://dev.to/mayanayza', '_blank')">Dev.to</div>
<div class="button button--primary" style="width: 100%; display: flex; justify-content: center; text-align: center;" onclick="window.open('https://cara.app/mayanayza/', '_blank')">Cara</div>
<div class="button button--primary" style="width: 100%; display: flex; justify-content: center; text-align: center;" onclick="window.open('https://hackaday.io/mayanayza', '_blank')">Hackaday.io</div>
<div class="button button--primary" style="width: 100%; display: flex; justify-content: center; text-align: center;" onclick="window.open('https://www.hackster.io/mayanayza', '_blank')">Hackster.io</div>
</div> -->