---
layout: base.njk
title: Use Red Buttons To Get More Feedback On Your Docs
tags: 
  - post
  - docs
date: 2018-09-21
summary: |
  Asking users whether or not they found a doc helpful is an easy way to measure the quality
  of a doc. However, very few users take the time to leave feedback. If you've only got 2 or 3 responses
  on a doc, you can't trust that the data represents the opinion of your audience at large. I've been
  conducting various experiments to find out how to maximize the response rate. In this experiment, I learned
  that red buttons appear to generate significantly more responses than blue ones.
---

<h1 id="title">{{title}}</h1>

<p id="time">
  <time datetime="2018-09-21">2018 September 21</time>
</p>

<p id="category">Technical Writing</p>

<p id="summary">
{{summary}}
</p>

Thanks to my teammate [Jason Miller](https://twitter.com/_developit) for suggesting this experiment.

## Question

When asking users to leave feedback on whether a doc was helpful, will red buttons generate more responses than
blue ones?

<figure>
  <img src="/media/red.png"/>
  <figcaption>Figure 1. Red buttons</figcaption>
</figure>

<figure>
  <img src="/media/blue.png"/>
  <figcaption>Figure 2. Blue buttons</figcaption>
</figure>

## Prediction

[green]: https://blog.hubspot.com/blog/tabid/6307/bid/20566/the-button-color-a-b-test-red-beats-green.aspx

Red buttons will lead to more responses than blue ones.

## Experiment

50% of readers saw a [red version of the feedback widget][red]. The other 50% saw a [blue version][blue].
The color of the buttons was the only difference between the 2 versions of the doc.

[red]: https://developers.google.com/web/updates/2018/05/devtools?experiment=25#feedback
[blue]: https://developers.google.com/web/updates/2018/05/devtools?experiment=75#feedback

## Result

* The **Total Events** column represents the number of responses.
* The **Avg. Value** column represents what option the users chose. Clicking "No"
  sent a value of 0, clicking "Yes" sent a value of 1. In other words, the value of
  0.58 for red meant that 58 out of 100 users who saw red buttons found the doc helpful. Which,
  by the way, was surprisingly low. More on that in [Next steps](#next).

<figure>
  <img src="/media/redblue.png"/>
  <figcaption>Figure 3. The results</figcaption>
</figure>


If red buttons did not have an effect on users, then we would expect the red buttons to generate the
same amount of responses as the blue buttons. The red buttons generated ~26% more responses than the blue buttons.
6709 / 5315 ≈ 1.26 ≈ 26%.

## Interpretation

* This experiment only proves that red buttons get more responses than blue buttons. It does not
  prove that red buttons get more responses than any other color.
* One of my fellow technical writers at Google suggested that the color of the buttons might
  influence how users respond. For example, perhaps users find blue to be a more aesthetically-pleasing
  color, and are therefore more likely to be subconsciously nudged into responding that the doc was
  helpful than they would if the button was some other color. The data from this experiment seems to
  disprove this hypothesis.

<h2 id="next">Next steps</h2>

* Regarding the surprisingly low values, I was surprised because I've seen nothing but overwhelmingly positive
  remarks about this series on our community channels. However, I don't have a baseline for this type of content.
  Maybe 60% is normal for release notes in general. One of my goals is to get more teams generating this sort of data,
  so that we can begin to generate industry-wide baselines on different types of content.
* I'm thinking that I'll next try an A/B test where 50% of users see the text "Was this page **helpful**?" whereas
  the other 50% will see the text "Was this page **useful**?". It would be very interesting and important to me
  if this phrasing substantially changes how users respond.
* I'm writing a high-level post on my overall framework for metrics, which will explain how I plan to make this
  particular data actionable. Subscribe to my mailing list to stay tuned.

Email me at kayce@basqu.es or kayce@google.com to discuss.
