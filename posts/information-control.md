<style>
  .info--everything {
    display: block;
  }
  .info--everything__hidden {
    display: none;
  }
</style>

<h1 id="title">
  A UI That Lets Readers Control How Much
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
  This post explores whether this feature would be useful in documentation.
  My initial impression is that the ROI does not justify the effort.
</p>

Last week, in our team chat, my colleague [Houssein Djirdeh](https://twitter.com/hdjirdeh)
posted a [GIF of a UI that enables readers to control
how much information they see](/media/parametric.mp4).

<video autoplay loop muted playsinline style="max-width:100%">
  <source src="/media/parametric.mp4" type="video/mp4">
</video>

Try it out for yourself at
<a target="_blank" rel="noopener" href="https://parametric.press/">
  Parametric Press
</a>.

Or, try it out on this blog post! Everything Mode shows all of my thoughts related
to this feature. Essentials Mode shows just the most important information. Note
that I put the non-essential <a href="#webdev">Web development is a useful skill
for technical writers</a> section next in order to show how sections disappear when you enter
Essentials Mode.

<noscript>
  Note: It looks like JavaScript is disabled in your browser, so this feature won't
  work for you.
</noscript>

You are now in <b><span class="info--state">Everything</span> Mode</b>.

<button class="button controls--everything">
  Show Everything Mode
</button>

<button class="button controls--essentials">
  Show Essentials Mode
</button>

<h2 class="info--everything">Web development is a useful skill for technical writers</h2>

<p class="info--everything">
  If you're looking for skills to complement your technical writing, consider web development.
  Especially if you work in an industry that mostly publishes its documentation to the web.
</p>

<p class="info--everything">
  Knowing how to build websites enables me to experiment with the UX of my docs sites,
  like I have done with this post. Having a working prototype of this feature enabled me
  to think much more deeply about how this feature might affect the authoring side of
  documentation.
</p>

<p class="info--everything">
  I also think that we can bring meaningful innovation to technical writing by
  measuring how users interact with our docs sites in order to learn what they truly want,
  and experimenting with new ways to present information.
</p>

<h2 id="accessibility">Accessibility</h2>

<p>
  If you do implement this feature in your real documentation, for accessibility reasons
  it will be way safer to present the full page by default. Essentials Mode
  should be the opt-in choice. Your typical web developer is probably going to use the
  <code>display:none</code> CSS declaration to hide non-essential content.
  <code>display:none</code> makes content completely inaccessible to screen readers.
</p>

<h2>A strategy for catering to multiple audiences?</h2>

This might be a useful feature if your audience is split between beginners and
experts. For example, suppose you got feedback from beginners that your tutorial
didn't include enough context. So you add context. But then the complaints from
the experts roll in. "Why are you making me sift through the basics? Just tell me
what to do."

With <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/events"
target="_blank" rel="noopener">Google Analytics Event Tracking</a> it's possible
to track how much aggregate time is spent in Everything Mode or Essentials Mode.

I'm doing it on this page, in fact. Click **Get Stats** to get the real analytics for
this blog post, from the day that I published up until yesterday. Note that I'm
effectively using Google Apps Script as my REST API server, so if the data doesn't load, I
probably hit my quota.

<noscript>
  Note: It looks like JavaScript is disabled in your browser, so this feature won't
  work for you.
</noscript>

<style>
  .stats {
    display: none;
  }
  .stats__visible {
    display: block;
  }
</style>

<button class="button stats--button">Get Stats</button>

<ul class="stats">
  <li>Pageviews: <span class="stats--value stats--pageviews"></span></li>
  <li>Essentials Mode Entrances: <span class="stats--value stats--essentials-entrances"></span></li>
  <li>Everything Mode Entrances: <span class="stats--value stats--everything-entrances"></span></li>
  <li>Time spent in Essentials Mode (seconds): <span class="stats--value stats--essentials-time"></span></li>
  <li>Time spent in Everything Mode (seconds): <span class="stats--value stats--everything-time"></span></li>
</ul>

<script>
  const statsButton = document.querySelector('.stats--button');
  const statsContainer = document.querySelector('.stats');
  let loaderHandle = undefined;
  statsButton.addEventListener('click', () => {
    statsButton.disabled = true;
    statsContainer.classList.add('stats__visible');
    loaderHandle = setInterval(() => {
      document.querySelectorAll('.stats--value').forEach(value => {
        if (value.textContent === '...') {
          value.textContent = '.';
        } else {
          value.textContent += '.';
        }
      });
    }, 500);
    const url = 'https://script.google.com/macros/s/AKfycbyCSMyrzqXnx8UxtAgCRfXV8oCw4kNGijuwSh_LNqutJO86wRI/exec';
    fetch(url).then(response => response.json()).then(json => {
      clearInterval(loaderHandle);
      document.querySelector('.stats--essentials-entrances').textContent = json.events.entrances.Essentials;
      document.querySelector('.stats--essentials-time').textContent = json.events.time.Essentials;
      document.querySelector('.stats--everything-entrances').textContent = json.events.entrances.Everything;
      document.querySelector('.stats--everything-time').textContent = json.events.time.Everything;
      document.querySelector('.stats--pageviews').textContent = json.pageviews;
    });
  });
</script>

Considering that Everything Mode is the default view, if the majority of readers
on this post were viewing it in Essentials Mode, I'd take that as a pretty
strong indicator that I've provided a lot of content that no one actually cares about.

<h2 class="info--everything">Impact on authoring workflows</h2>

<p class="info--everything">
  From my experience so far, adding this feature seems like it'll create a noticeable
  amount of extra work for writers. One way or another, you're going to have to mark up a
  lot of content. You'll also have to make sure that each mode of a given document
  flows well. For me, that meant reading the Everything Mode of this blog post, and
  then going back and re-reading the Essentials Mode.
</p>

<p class="info--everything">
  Parametric Press provides 4 modes. If I did 4 modes in my docs, I'd get
  analysis paralysis. I can mostly handle classifying content
  as high-priority or low-priority, but 4 modes would be a mental burden.
  But even in this toy example, I found myself asking "is this section
  high-priority, or low?"
</p>

<h2>Prior work?</h2>

<p>
  I'm pretty sure that other technical writers have tried this feature before. Perhaps
  DITA practitioners? Because DITA lends itself well to features like this.
</p>

<p>
  If you're aware of any relevant case studies or research
  on this idea, please send me an email at kayce@basqu.es and I'll update this
  section.
</p>

<h3>Updates</h3>

[krilnon]: https://www.reddit.com/r/technicalwriting/comments/a4oav1/a_ui_that_lets_readers_control_how_much/ebh3oh1/
[krilnon2]: https://www.reddit.com/r/technicalwriting/comments/a4oav1/a_ui_that_lets_readers_control_how_much/ebi81qm/
[LexRank]: https://jair.org/index.php/jair/article/view/10396
[npm]: https://www.npmjs.com/package/lexrank

* u/krilnon on r/technicalwriting pointed me to Chen-Hsiang Yu's HCI thesis. See [krilnon's comment][krilnon]
  and [my response][krilnon2]. Yu created a browser extension that would bold
  the most important sentences using [LexRank][LexRank] ([npm][npm]), and make less important sentences opaque.
* [Joe Coleman's personal site](http://getcoleman.com/). See also
  [HN discussion](https://news.ycombinator.com/item?id=14013996).
* [On Variable Level-Of-Detail Documents](http://symbolflux.com/lodessay/) by Weston Beecroft.
* [StretchText](https://en.wikipedia.org/wiki/StretchText) by Ted Nelson.
* [Expounder](https://skorokithakis.github.io/expounder/) by Stavros Korokithakis.

<h2>Does the ROI justify the effort?</h2>

<p>
  It depends on how strongly users respond to the feature, because it'll create a
  noticeable amount of work for writers.
</p>

<h2 class="info--everything">Discussions</h2>

<ul class="info--everything">
  <li><a href="https://news.ycombinator.com/item?id=18643166">Hacker News</a></li>
  <li><a href="https://www.reddit.com/r/technicalwriting/comments/a4oav1/a_ui_that_lets_readers_control_how_much/">r/technicalwriting</a></li>
</ul>

<script async src="https://www.googletagmanager.com/gtag/js?id=UA-130636903-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'UA-130636903-1');
  const everything = document.querySelector('.controls--everything');
  const essentials = document.querySelector('.controls--essentials');
  const state = document.querySelector('.info--state');
  const labels = {
    ESSENTIALS: 'Essentials',
    EVERYTHING: 'Everything'
  }
  const trackMode = (mode) => {
    gtag('event', 'click', {
      'event_category': 'Viewing Mode Entered',
      'event_label': mode,
      'value': 1
    });
  }
  const trackTimeSpent = (mode, handle) => {
    if (handle) {
      clearInterval(handle);
    }
    const INTERVAL = 1000 * 60;
    return setInterval(() => {
      gtag('event', 'click', {
        'event_category': 'Time Spent In Mode (Seconds)',
        'event_label': mode,
        'value': INTERVAL / 1000
      });
    }, INTERVAL);
  }
  everything.disabled = true;
  everything.addEventListener('click', () => {
    document.querySelectorAll('.info--everything').forEach(el => {
      el.classList.remove('info--everything__hidden');
    });
    essentials.disabled = false;
    everything.disabled = true;
    state.textContent = labels.EVERYTHING;
    trackMode(labels.EVERYTHING);
    handle = trackTimeSpent(labels.EVERYTHING, handle);
  });
  essentials.addEventListener('click', () => {
    document.querySelectorAll('.info--everything').forEach(el => {
      el.classList.add('info--everything__hidden');
    });
    essentials.disabled = true;
    everything.disabled = false;
    state.textContent = labels.ESSENTIALS;
    trackMode(labels.ESSENTIALS);
    handle = trackTimeSpent(labels.ESSENTIALS, handle);
  });
  let handle = trackTimeSpent(labels.EVERYTHING);
  trackMode(labels.EVERYTHING);
</script>
