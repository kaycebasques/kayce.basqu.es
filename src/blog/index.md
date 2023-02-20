---
layout: base.njk
title: Blog
description: Blog posts about various topics.
---

# {{title}}

{% for post in collections.blog %}
<p><a href="{{post.url}}">{{post.data.title}}</a></li></p>
<p>{{ post.data.description }}</p>
{% endfor %}
