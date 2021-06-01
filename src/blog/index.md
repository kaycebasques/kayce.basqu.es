---
layout: homepage.njk
title: Blog
summary: Kayce Basques's blog.
---

{% for post in collections.blog %}
  <li>{{ post.data.title }}</li>
{% endfor %}
