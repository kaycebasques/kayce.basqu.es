---
layout: homepage.njk
title: Blog
summary: Kayce Basques's blog.
---

{% for post in collections.blog | reverse %}
  <section class="homepage--section">
    <h2><a href="{{post.url}}">{{post.data.title}}</a></h2>
    <p>{{post.data.summary}}</p>
    <p>{{post.date.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'})}}</p>
    <p>Category: {{post.data.category}}</p>
  </section>
{% endfor %}
