---
layout: homepage.njk
title: Sabbatical 2021
summary: TODO
---

<section class="homepage--section">
  <h2>Summary</h2>
  <p>
    I'm currently on a 1-year sabbatical (June 2021 to June 2022).
    Check out my <a href="/sabbatical/prologue">sabbatical prologue</a>
    blog post to read about my motivations, plans, hopes, and fears.
  </p>
</section>
<section class="homepage--section">
  <h2>Subscribe</h2>
  <p>
    Fill out this
    <a href="https://forms.gle/sAi4sLYcsuXTeZAU7">form</a>
    to receive email updates about my sabbatical.
  </p>
</section>
{% for post in collections.blog | reverse %}
  {% if post.data.category == "Sabbatical" %}
  <section class="homepage--section">
    <h2><a href="{{post.url}}">{{post.data.title}}</a></h2>
    <p>{{post.data.summary}}</p>
    <p>{{post.date.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'})}}</p>
  </section>
  {% endif %}
{% endfor %}
