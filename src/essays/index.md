---
layout: 'base.njk'
title: 'Essays'
description: 'Essays about various topics'
---

# {{title}}

These are my essays on various topics. I'm calling them "essays"
rather than "blog posts" to remind myself that I should only
post content that will be relevant for a long time.

<ul>
{% for essay in collections.essays %}
  <li><a href="{{ essay.url }}">{{ essay.data.title }}</a></li>
{% endfor %}
<ul>
