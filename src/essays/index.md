---
layout: base.njk
title: Essays
description: Essays about various topics.
---

# {{title}}

These are my essays on various topics. I'm calling them "essays"
rather than "blog posts" to remind myself that I should only
post content that will be relevant for a long time.

{% for essay in collections.essays %}
<p><a href="{{ essay.url }}">{{ essay.data.title }}</a></li></p>
<p>{{ essay.data.description }}</p>
{% endfor %}
