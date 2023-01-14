---
layout: 'base.njk'
title: 'Essays'
---

# {{title}}

{% for essay in collections.essays %}
<p><a href="{{ essay.url }}">{{ essay.data.title }}</a></p>
{% endfor %}
