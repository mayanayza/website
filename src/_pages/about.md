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


Nothing currently in progress

<div class="button button--primary" style="width: 100%; display: flex; justify-content: center; text-align: center;" onclick="window.open('/roadmap', '_blank')">View Full Roadmap</div>

<!-- <div class="button button--primary" style="width: 100%; display: flex; justify-content: center; text-align: center;" onclick="window.open('https://dev.to/mayanayza', '_blank')">Dev.to</div>
<div class="button button--primary" style="width: 100%; display: flex; justify-content: center; text-align: center;" onclick="window.open('https://cara.app/mayanayza/', '_blank')">Cara</div>
<div class="button button--primary" style="width: 100%; display: flex; justify-content: center; text-align: center;" onclick="window.open('https://hackaday.io/mayanayza', '_blank')">Hackaday.io</div>
<div class="button button--primary" style="width: 100%; display: flex; justify-content: center; text-align: center;" onclick="window.open('https://www.hackster.io/mayanayza', '_blank')">Hackster.io</div>
</div> -->