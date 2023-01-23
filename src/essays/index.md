---
layout: base.njk
title: Essays
description: Essays about various topics.
---

# {{title}}

These are my thoughts on various topics.

{% for essay in collections.essays %}
<p><a href="{{ essay.url }}">{{ essay.data.title }}</a></li></p>
<p>{{ essay.data.description }}</p>
{% endfor %}
