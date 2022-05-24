---
layout: homepage.njk
title: Technical writing
summary: >
  An index of my content related to technical writing.
---

<section class="homepage--section">
  <h2>Summary</h2>
  <p>
    I have 9 years of experience as a professional
    technical writer. The last 6 of those were at Google. I
    was promoted 3 times, from Technical Writer II (L3)
    to Staff Technical Writer (L6). For my first 4 years at Google
    or so I worked on Chrome DevTools
    and Lighthouse, and for the last 2-ish years I led Chrome
    DevRel's overall documentation program (content strategy
    & people management). My first 3 years of professional technical writing
    were at Arrayent, an Internet of Things (IoT) startup. I was
    the only technical writer and I worked on their web service
    and embedded system APIs.
  </p>
</section>
<!--
<section class="homepage--section">
  <h2>Availability</h2>
  <p>
    I'm currently on <a href="/sabbatical/">sabbatical</a>
    (June 2021 to June 2022). 
  </p>
</section>
<section class="homepage--section">
  <h2>Blog posts</h2>
  <p>
    TODO
  </p>
</section>
-->
<section class="homepage--section">
  <h2>Portfolio</h2>
  <p>
    Check out my <a href="/technical-writing/portfolio">portfolio</a>
    page to see a comprehensive list of my technical-writing-related
    creations.
  </p>
</section>
{% for post in collections.blog | reverse %}
  {% if post.data.category == "Technical Writing" %}
  <section class="homepage--section">
    <h2><a href="{{post.url}}">{{post.data.title}}</a></h2>
    <p>{{post.data.summary}}</p>
    <p>{{post.date.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'})}}</p>
  </section>
  {% endif %}
{% endfor %}
