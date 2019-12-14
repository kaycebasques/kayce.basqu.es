---
layout: base.njk
title: Blog
summary: The personal blog of Kayce Basques.
---
<h1>{{title}}</h1>
<ul class="blog--list">
  {%- for post in collections.post | reverse -%}
    <li class="blog--post">
      <h2 class="blog--title"><a href="{{post.url}}">{{post.data.title}}</a></h2>
      <time class="blog--time">{{post.date.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}}</time>
      <p class="blog--summary">{{post.data.summary}}</p>
    </li>
  {%- endfor -%}
</ul>