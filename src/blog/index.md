---
layout: homepage.njk
title: Blog
summary: Kayce Basques's blog.
---
<section class="homepage--section">
  <h2>Summary</h2>
  <p>
    This section of my website lists all of my blog posts.
    Check out the <a href="/technical-writing/">Technical writing</a>,
    <a href="/bets/">Bets</a>, and <a href="/sabbatical/">Sabbatical</a>
    index pages if you only want to see my content related to those topics.
    I also have an <a href="/feed.xml">RSS feed</a>.
  </p>
</section>
{% for post in collections.blog | reverse %}
  <section class="homepage--section">
    <h2><a href="{{post.url}}">{{post.data.title}}</a></h2>
    <p>{{post.data.summary}}</p>
    <p>{{post.date.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'})}}</p>
    <p>Category: {{post.data.category}}</p>
  </section>
{% endfor %}
