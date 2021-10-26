---
layout: homepage.njk
title: Bets
summary: >
  An index of my content related to decision-making and
  thinking in bets.
---

<section class="homepage--section">
  <h2>Summary</h2>
  <p>
    <a href="https://www.annieduke.com/books/">Thinking in Bets</a>
    has inspired me to be more systematic with my decision-making.
    This section of my website contains all of my blog posts related
    to bets and decision-making.
  </p>
</section>
{% for post in collections.blog | reverse %}
  {% if post.data.category == "Bets" %}
  <section class="homepage--section">
    <h2><a href="{{post.url}}">{{post.data.title}}</a></h2>
    <p>{{post.data.summary}}</p>
    <p>{{post.date.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'})}}</p>
  </section>
  {% endif %}
{% endfor %}
