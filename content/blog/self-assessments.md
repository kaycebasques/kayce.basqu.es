---
layout: base.njk
title: |
  Self-assessments have launched on web.dev and they have exciting implications for
  technical writing
tags: 
  - post
  - docs
date: 2020-01-08
summary: |
  Self-assessments are an interactive feature that challenge you to apply the knowledge that you
  just learned from a documentation page in order to solve a problem you've never seen before. They're
  one step closer towards turning our documentation websites into two-way exchanges of information,
  between the content creators and the content consumers, rather than one-way flows, from the creators
  to the consumers. They also provide objective proof that we, the creators, are successfully
  transferring knowledge.
---

<h1 id="title">{{title}}</h1>

<p id="time">
  <time datetime="2020-01-08">2020 January 8</time>
</p>

<p id="category">Technical Writing</p>

<p id="summary">
  {{summary}}
</p>

Our instructional designer <a href="https://www.linkedin.com/in/mfriesenhahn/">Michael
Friesenhahn</a> just launched self-assessments on <a href="https://web.dev">web.dev</a> with support
from our engineers <a href="https://www.linkedin.com/in/mrdodson/">Rob Dodson</a> and
<a href="https://www.linkedin.com/in/egasperowicz/">Ewa Gasperowicz</a>.

What are self-assessments, you say? They look like this initially:

![The initial presentation of a self-assessment](/media/closed.png)

You can expand the section at the bottom to verify whether your understanding was correct:

![The presentation of a self-assessment UI after you interact with it](/media/open.png)

The self-assessment asks you a question that challenges your knowledge of the concepts that are
explained in the guide. You won't find the answer verbatim anywhere else in the content. You have
to use your mind to apply the concepts in order to find the answer.

You can see self-assessments in action in the following guides:

<ul>
  <li><a href="https://web.dev/control-focus-with-tabindex">Control focus with tabindex</a></li>
  <li><a href="https://web.dev/labels-and-text-alternatives">Labels and text alternatives</a></li>
  <li><a href="https://web.dev/use-semantic-html">Use semantic HTML for easy keyboard wins</a></li>
  <li><a href="https://web.dev/same-origin-policy">Same-origin policy</a></li>
</ul>

This is a big deal for me because it's a tangible step towards what I think is a huge area of 
potential innovation within technical writing: *making our documentation websites more of a two-way
exchange of information*. The status quo in technical writing is a one-way flow of information. 
We, the technical writers, publish content to our documentation websites, and then have very little
visibility into whether our audience is successfully receiving the knowledge that we're attempting
to transfer.

This initial implementation of self-assessments is a step closer to my dream of a two-way exchange
of information, but we're not there yet. Web DevRel (our team) values scrappiness, so for this initial
implementation Michael had the good idea to just launch a minimum viable product (MVP). In the case of
self-assessments, the MVP is just a validation of whether people are engaging with the feature.
If no one is expanding the little section at the bottom, there's no reason to invest more in the
feature. If we see good engagement, however, then we'll proceed with the next step, which is to
provide multiple choice options at the bottom and let users mark which answer they think is correct.

If users are answering all of the questions correctly, we have objective proof that our guidance
is working. If they're answering incorrectly, we have more focused data on which documents need to
be updated.

Self-assessments also set us up to do targeted scientific experiments on our documentation pages.
Suppose everyone is getting the self-assessments wrong on a particular page. You review the page and notice
a key paragraph that is worded in an unnecessarily complicated way. You simplify the paragraph,
check back in a month, and see that the scores have improved. Assuming that
you made no other changes to the page, you now have very concrete proof that using simpler sentences
leads to improved knowledge transfer.

Obviously we didn't invent this idea of self-assessments. I'm sure you've seen them elsewhere on the
web. They're simply a promising practice that seem to generate useful data, and I think we should
explore them rigorously in our documentation websites.