<style>
  .info--full {
    display: block;
  }
  .info--full__hidden {
    display: none;
  }
</style>

<h1 id="title">
  A UI That Lets Readers Decide How Much
  Information They See
</h1>

<p id="time">
  <time datetime="2018-12-06">2018 December 6</time>
</p>

<p id="category">Technical Writing</p>

<p id="summary">
  <a target="_blank" rel="noopener" href="https://parametric.press/">
    Parametric Press
  </a> enables its readers to control how much information they see via a
  slider that has 4 options: "TL;DR", "Essentials", "Highlights", and "Everything".
  The UI is fun and unobtrusive, IMO. Perhaps documentation readers would find
  it helpful to control the level of detail in docs? It's also easy to
  track these user interactions anonymously. 
  We might be able to use this data to learn whether our readers generally prefer more or
  less information. Under certain circumstances we might even be able to make more
  educated decisions around whether it's worth our time to write a lot of content.
</p>

Yesterday, in our team chat, my colleague [Houssein Djirdeh](https://twitter.com/hdjirdeh)
posted a [GIF of a UI that enables readers to control
how much information they see](/media/parametric.mp4).

<video autoplay loop muted playsinline style="max-width:100%">
  <source src="/media/parametric.mp4" type="video/mp4">
</video>

Try it out for yourself at
<a target="_blank" rel="noopener" href="https://parametric.press/">
  Parametric Press
</a>.

Or, try it out on this blog post! Full Mode shows all of my thoughts related
to this feature. Condensed Mode shows just the critical information.

You are now in <b><span class="info--state">Full</span> Mode</b>.

<button class="controls--full">
  Show Full Mode
</button>

<button class="controls--condensed">
  Show Condensed Mode
</button>

<h2 class="info--full">Web development is a useful skill for technical writers</h2>

<p class="info--full">
  Building websites is really fun. It also enables you to experiment with the UX of your
  documentation site, like I did with this post. If you're in an industry that mainly
  publishes its documentation to the web, consider web development as a means towards
  possibly advancing your technical writing career.
</p>

<p class="info--full">
   It was helpful for me to to have a working prototype in my hands as I
   wrote down my thoughts about this feature. To actually experience its opportunities
   and drawbacks from an author's perspective.
   Of course, this is nothing new to technical writers.
   To understand something, you have to use it yourself.
</p>

<p class="info--full">
  By the way, I intentionally put this low-priority paragraph here to demonstrate
  the feature. One potential drawback of this feature is that writers might think
  less about the sequence in which they present sections of information. Or, to put
  it another way, writers would have to check that the sequence of information works
  for both modes, and since we're often working under constrained resources
  we might not have the time or energy to check that both modes flow well.
</p>

<h2>The UI might be tricky to do right</h2>

I don't know about you, but when I went into Condensed Mode on this post, it felt a bit
jarring. I was wondering why Parametric Press opted for 4 modes. Maybe this explains it.
Maybe they wanted to gradually trim down the content in a way that didn't make readers
feel lost.

When a reader is in Condensed Mode, I think you'd have to have an always-visible button
that enables them to return to Full Mode. Because, if you decide that you want to
bail out of Condensed Mode, you shouldn't have to scroll back up. Also, when you switch
between modes, the UI should keep you at the same section that you were reading.

<h2>What's in it for readers</h2>

[IFT]: https://en.wikipedia.org/wiki/Information_foraging

Personally, I think I could find this feature helpful. Often, I need to quickly assess
whether an article will suit my needs. [Information Foraging Theory][IFT] calls
this the *information scent*. When searching for information, we use the built-in
foraging mechanisms that our ancestors used for millions of years to find food. When we
first enter a page, we are foraging for the information we need. If we get a whiff of
tasty information, we commit more energy. Mmm, information. Sweet, sweet, information.
If the page smells like a barren desert to
our brain, we abandon. Condensed Mode might help me forage more efficiently.

For those readers that don't want to use it, it's not really in their way.

Another interesting aspect of this approach is that, through the act of having to explicitly
define whether my content is low-priority or high-priority, I've been questioning
whether the information that I'm providing is really necessary. This kind of constraint
could result in better docs in the long run.

<h2>What's in it for writers</h2>

These types of interactions are easy to track anonymously
with <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/events"
target="_blank" rel="noopener">Google Analytics Event Tracking</a>. I see an opportunity
to learn more about whether our readers prefer more information or less.

Here's a hypothetical scenario in which we could use this data to make a more informed
decision about how much content we should write.

1. Our docs site has 10 overviews.
1. Readers enter Condensed Mode on these overviews *a lot*. 90% of them.
   We measure this by tracking the number of people that entered Condensed Mode, divided
   by the number of pageviews over the same timeframe. We also measure how long they spend
   in Full Mode versus Condensed Mode.
1. Since we have proof that the overwhelming majority of our readers enter Condensed Mode,
   we no longer go into as much depth in our overviews.

The measurement sounds tricky, but it's not. I'm doing it on this page, in fact.

<h2 id="accessibility">Accessibility</h2>

<p>
  If you do implement this feature in your real documentation, for accessibility reasons
  I'm 90% sure that it would be way safer to present the full page by default. The condensed version
  should be the opt-in choice. I could be wrong. I'll check with some folks that are
  knowledgeable about web accessibility and get back to you.
</p>

<h2>Prior work?</h2>

I'm pretty sure that I've read about other technical writers trying out this idea before.
I seem to recall that it didn't go well. Probably from those strange folks who reside in
the land of DITA? Because DITA lends itself well to features like this.
If you're aware of any relevant case studies or research
on this idea, please send me an email at kayce@basqu.es and I'll update this
section. I can't recall much discussion about this
idea within the last couple of years, though, so I figured I'd resurface it. Also, it
was just fun plain old fun to create this proof of concept ;)

Yesterday, while debating with someone about [my controversial post about
"best practices" in technical writing](/blog/best-practices), we came up with an
interesting idea to create an inventory of technical writings "best practices",
along with all of the research in support of each. So, consider my request for help here
as the first step towards creating that inventory.

In this case, we might broaden the project to include "anti-patterns". I.e. if someone
sends me links showing that this approach doesn't work, and we make this inventory
accessible to all technical writers, then it'll make it easier future TWs to decide
that this approach isn't worth their time.

<h2 class="info--full">Automating the process of creating summaries</h2>

<p class="info--full">
  If you put summaries at the bottom of your docs, this feature might open up an
  interesting new workflow for you. Rather than manually writing up your summaries,
  suppose you just marked up your content as high-priority or low-priority and then put an
  "Enter Summary Mode" button where you would usually put the manually-written summary content.
  When the user clicks, you enter Condensed Mode. This would also help you track how many
  users actually care about seeing summaries. If no one's clicking the button, no one cares
  about seeing a summary. Again, you can use Google Analytics Events to track this stuff.
</p>

<h2 class="info--full">Mode overload?</h2>

<p class="info--full">
  Parametric Press provides 4 modes. If I did 4 modes in my docs, I feel like
  I would get analysis paralysis. I think I can handle classifying a block of content
  as high-priority or low-priority, but 4 modes is too much.
</p>

<p class="info--full">
  By the way, this is also why I think star ratings are bogus, and we should only use
  binary options when collecting user feedback on our docs.
  <a href="https://amzn.to/2QCAm70" target="_blank" rel="noopener">Don't Make Me Think!</a>
</p>

<h2 class="info--full">Impact on authoring workflows</h2>

<p class="info--full">
  In XML or HTML, it's just a matter of adding some extra markup to either your low-priority
  or high-priority content:
</p>

<pre class="info--full"><code>
<h2 class="high-priority">High-priority section title</h2>
<p class="high-priority">High-priority paragraph</p>
<h2>Low-priority section title</h2>
<p>Low-priority paragraph</p>
</code></pre>

<p class="info--full">
  In Markdown, in most cases I think you would have to do a little less work
  by "wrapping" your high-priority content (or low) in HTML comments:
</p>

<pre class="info--full"><code>
<!-- HIGH -->

## High-priority section title

High-priority paragraph

<!-- ENDHIGH -->

## Low-priority section title

Low-priority paragraph
</code></pre>

<p class="info--full">
  This is a little less work than the HTML or XML workflow above because, if you have many
  consecutive blocks of high-priority content, you just need to "wrap"
  them between 2 comments. Although, now that I think of it, you could
  use this approach in HTML or XML, too. You'd have to integrate a parser
  into your build process that can detect these special comments, though.
</p>

<p class="info--full">
  One way or another, you're going to have to annotate a lot of content.
  You'd want to analyze whether your docs site contains more high-priority or
  low-priority content, and then mark up the one that is less common, since
  that will be less work.
</p>

<p class="info--full">
  Which leads me to an interesting question... what's the typical distribution of
  high-priority and low-priority content on a doc site?
</p>

<h2 class="info--full">Does the ROI justify the effort?</h2>

<p class="info--full">
  I don't know. It doesn't seem like it to me. But then again, I don't know most things.
  I'm writing this post because maybe you see something I don't.
  I suppose it would depend on how strongly users respond to this feature.
</p>

<h2 class="info--full">If you want this feature, I'll volunteer to implement</h2>

<p class="info--full">
   If you're game to try, I'm game to implement.
   This isn't a sales pitch. I used "volunteer" in the section title because volunteers do
   things for free. I would want to know how the experiment pans out, however, and I would
   want to share this data with the technical writing community. Also, it'll probably be feasible
   only if you build your site with a static site generator, like Hugo or Jekyll. If that all
   sounds good, email me at kayce@basqu.es and let's make it happen!
</p>

<script async src="https://www.googletagmanager.com/gtag/js?id=UA-130636903-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-130636903-1');
  const full = document.querySelector('.controls--full');
  const condensed = document.querySelector('.controls--condensed');
  const state = document.querySelector('.info--state');
  full.disabled = true;
  full.addEventListener('click', () => {
    document.querySelectorAll('.info--full').forEach(el => {
      el.classList.remove('info--full__hidden');
    });
    condensed.disabled = false;
    full.disabled = true;
    state.textContent = 'Full';
    gtag('event', 'click', {
      'event_category': 'Viewing Mode',
      'event_label': 'Full',
      'value': 1
    });
  });
  condensed.addEventListener('click', () => {
    document.querySelectorAll('.info--full').forEach(el => {
      el.classList.add('info--full__hidden');
    });
    condensed.disabled = true;
    full.disabled = false;
    state.textContent = 'Condensed';
    gtag('event', 'click', {
      'event_category': 'Viewing Mode',
      'event_label': 'Condensed',
      'value': 1
    });
  });
</script>
