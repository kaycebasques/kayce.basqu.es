---
layout: base.mustache
title: How We Tripled Chrome DevTools Documentation Pageviews In 2 Years
tags: post
date: 2019-05-16
summary: |
  To help users discover new features and major changes, the Chrome DevTools team embedded
  release notes into the DevTools UI. The success of this approach has fundamentally changed how I
  approach documentation discovery in general. I now look for ways to contextually link to the 
  documentation from the product.
---

<h1 id="title">
  {{title}}
</h1>

<p id="time">
  <time datetime="2019-05-16">2019 May 16</time>
</p>

<p id="category">Technical Writing</p>

<p id="summary">
{{summary}}
</p>

<figure>
  <img src="/media/wndtstats.png"
       alt="A chart showing DevTools pageviews from 2016 to 2018."/>
  <figcaption>
    Figure 1. DevTools pageviews from 2016 to 2018. Y-axis values have been redacted but
    the scale is accurate.
  </figcaption>
</figure>

I've been a technical writer for 8 years. For the first 7 years, if you told me that users
were having trouble discovering our docs and asked me how to improve the situation, I'd propose
2 strategies:

* Reorganizing the docs.
* Working on SEO.

Last year I realized there's a 3rd strategy. A strategy that's possibly way more effective
than the first 2.

<h2 id="background">Background</h2>

DevTools is a suite of tools for web developers that's built into Google Chrome. When you're 
building a website and it's not looking or behaving as expected in Chrome, you use DevTools to
figure out what's wrong. I've been writing and maintaining the DevTools docs for 3 years.

<figure>
  <img src="/media/devtools.png"
       alt="Inspecting Google Maps with DevTools."/>
  <figcaption>
    Figure 2. Inspecting Google Maps with DevTools.
  </figcaption>
</figure>

Back in 2016 the DevTools team asked users:

<blockquote>
  What would you most like to see the Chrome DevTools team improve?
</blockquote>

One of the top responses was:

<blockquote>
  Better ways to discover new features.
</blockquote>

<h2 id="solution">Solution</h2>

Our UX Designer at the time, [Chris Howse](http://howsehold.org/), brainstormed various
solutions for this feature discovery problem. We ended up focusing on a sort of
[release notes](https://en.wikipedia.org/wiki/Release_notes) embedded in the DevTools UI.
One of the DevTools engineers at the time, Will Chen, implemented the UI in a week or 2.

<figure>
  <img src="/media/WNDT.png"
       alt="The release notes UI."/>
  <figcaption>
    Figure 3. The release notes UI.
  </figcaption>
</figure>

Every 6 weeks, when DevTools updates, the release notes UI pops up with an updated list of new
features and major changes for that release.

If you click one of the items mentioned in the release notes UI, such as **Highlight all nodes 
affected by CSS property**, DevTools opens up the release notes doc and jumps you to the 
section explaining that item.

<figure>
  <img src="/media/highlightnodes.png"
       alt="The documentation for the new feature."/>
  <figcaption>
    Figure 4. The documentation for the <b>Highlight all nodes affected by CSS property</b>
    new feature.
  </figcaption>
</figure>

<h3 id="metrics">Metrics</h3>

The release notes docs account for pretty much all of the increase in pageviews that
we've experienced since June 2017. Here's the chart again:

<figure>
  <img src="/media/wndtstats.png"
       alt="A chart showing DevTools pageviews from 2016 to 2018."/>
  <figcaption>
    Figure 5. DevTools pageviews from 2016 to 2018.
  </figcaption>
</figure>

As mentioned before, we release a new version of DevTools every 6 weeks. That's 8 release notes
a year. When I was doing the research for this post we had done 15 release notes in
total. In other words, **just 15 documents accounted for the tripling in pageviews from mid-2017
onwards**.

See [Appendix: Are pageviews a vanity metric?](#vanitymetrics) for a brief discussion on
why I think pageviews are a meaningful metric in this context.

More metrics:

* Users spend 7 to 8 minutes on each page. This was a bit of a surprise to me. I was expecting
  users to skim the release notes, and therefore I was expecting less time spent on each page.
  To me, 7 to 8 minutes implies that people might be reading the release notes in full.
* Bounce rate is between 15% to 18% for each doc, which is below our site average.
* The *Was this page helpful?* score for each release notes is around 60%, i.e. 60% of users
  respond that the page was helpful and 40% respond that the page was unhelpful. This is within the
  normal site range.

<h2 id="suggestions">Suggestions</h2>

<h3 id="contextlinks">Use contextual links to drive traffic to documentation</h3>

I had a hunch that the release notes project would be a success because we already had a few
links to the documentation buried deep in the UI, and those buried links were generating a significant
amount of pageviews. "If buried links could generate that many pageviews," I thought to myself, "then
imagine what kind of traffic prominent links might create." The What's New project has confirmed
this hunch. Over the past few months I've been systematically looking for ways to link to the
docs from the DevTools UI. For example, if you're a new user just exploring the DevTools
UI, Figure 6 is what you'll see upon first opening the Sources panel. 

<figure>
  <img src="/media/sourcespanel.png"
       alt="The Sources panel."/>
  <figcaption>
    Figure 6. The Sources panel.
  </figcaption>
</figure>

[sources]: https://devtools.chrome.com/sources

By providing that **Learn more** link we are giving users the opportunity to discover how the
Sources panel might help them. Clicking **Learn more** takes you to the 
[Sources Panel Overview][sources] shown in Figure 7.

<figure>
  <img src="/media/sourcesoverview.png"
       alt="An overview of the Sources panel."/>
  <figcaption>
    Figure 7. An overview of the Sources panel.
  </figcaption>
</figure>

Of course your product probably looks nothing like DevTools. You'll have to get creative
and do some research to figure out where your entry points are. You may not even have a GUI, as
is the case if you work on an API. The idea to contextually link to your docs from your product
is still relevant. For example, linking to documentation from your API error codes is the same
general idea.

<h2 id="releasenotes">Invest in release notes</h2>

[WNDT74]: https://youtu.be/I14fXc7sXdU

I suspect many technical writers view release notes as a sort of necessary evil. At least,
that's how I viewed them before the What's New project. Now I view them as one of our greatest
assets. Web developers seem to love release notes. Check out the comments from
[Chrome 74 - What's New In DevTools][WNDT74] to see what I mean. I think the DevTools engineers
also enjoy seeing their work celebrated on a regular schedule.

[JS]: https://developers.google.com/web/tools/chrome-devtools/javascript/

Strategically speaking, release notes are also an effective channel for driving traffic to the
rest of the DevTools docs. For example, when a new feature related to debugging JavaScript comes
out, I put in a plug for our JavaScript debugging doc set.

I think the main problem that technical writers have with release notes is scope.
When you hear "release notes" you probably think of a detailed list of everything that changed
in the product between version 1.0 and version 1.1. If livelihoods depend on intimate knowledge
of your products, then yes, you probably have to be comprehensive. For example, if you're writing
the release notes for [MongoDB](https://www.mongodb.com/), the audience of your release notes are
software engineers and database administrators who rely on your database to store their company's
data. They must know exactly how the database has changed from 1.0 to 1.1 to make sure that their
company's data doesn't get hosed when they upgrade.

For many products I don't think it's the case that the release notes have to be comprehensive.
I have yet to see a request for more coverage of bug fixes and small changes in the DevTools
release notes. Here's my litmus test for deciding what makes it into the DevTools release notes:

* Does this change noticeably improve user experience? The keyword here is **noticeably**.
  Most users probably won't care about a spelling fix, but they will care about a new button
  that helps them debug their site faster.
* If I omit this change, is someone going to send me an angry message about how they spent
  minutes or hours looking for something or figuring out why their site is behaving differently,
  only to eventually realize that it was just a change in DevTools behavior?  

What's funny about release notes is that they tend to encourage a kind of dogmatic adherence
to old conventions. Yet if you apply the same audience analysis principles that you'd apply before
writing a tutorial, you might realize that **by being comprehensive, you might actually be creating
a less useful doc** because you're lowering your signal-to-noise ratio... introducing noise, in other
words.

<h2 id="cadence">Be careful about cadence</h2>

If you end up adopting a popup release notes UI, be mindful of how frequently the UI pops up.
The DevTools UI pops up only once every 6 weeks. I think this is a sweet spot --- not too frequent,
not too infrequent. We also have a setting that enables users to suppress the popups permanently.

When writing your release notes also keep in mind that you're intruding on your users. In our
release notes I cut out all the self-congratulatory BS that you frequently see in release notes
and just explain the change and why the user might find it helpful. I err on the side of explaining
too little. Users seem to appreciate this approach.

<h2 id="trees">Don't miss the forest for the trees</h2>

I'm not in the business of getting pageviews for the sake of pageviews. I'm only advocating
for this approach because I believe it legitimately improves the lives of our users. I think it's
our duty as technical writers to design ourselves out of existence whenever possible. For example,
when users report a problem that can be fixed by either improving the product or writing
documentation, we should advocate for improving the product every time.

<h2 id="vanitymetrics">Appendix: Are pageviews a vanity metric?</h2>

[TLS]: https://en.wikipedia.org/wiki/Lean_startup

[The Lean Startup][TLS] created the [meme](https://en.wikipedia.org/wiki/Meme) that pageviews
are a vanity metric. A vanity metric is a measurement that doesn't reflect the true success
of a business. Apparently, startups used to mention pageviews when trying to raise equity
from VCs. They'd say that their pageviews were growing 50% month-over-month, or something 
like that. But when you looked at a metric that corresponded more closely to the startup's
potential to make money, such as how many new, paying subscribers they were getting each
month, the picture was much less rosy. The Lean Startup's main message is to focus on the metrics
that actually correlate strongly to revenue or profitability.

In the case of DevTools, our users had explicitly told us that they wanted help discovering
features. So, when your task is to help users discover new features, and you see that pageviews
have increased dramatically on documents dedicated to explaining new features, I think it's safe
to say that we're making progress on the problem. Of course, the real question is whether or not
people are using these new features and find them useful. Pageviews do not tell us much about
that.
