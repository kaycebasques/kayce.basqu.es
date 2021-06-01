---
layout: homepage.njk
title: Blog
summary: Kayce Basques's blog.
---

{%- for post in collections.post | reverse -%}


<section class="homepage--section">
  <h2><a href="{{post.url}}">{{post.data.title}}</a></h2>
  <p>
    {{post.data.summary}}
  </p>
  <p>
    Category: {{post.data.category}}
  </p>
  <p>
    Date:
    {{post.date.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}}
  </p>
</section>
{%- endfor -%}
