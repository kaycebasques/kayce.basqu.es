<script async src="https://www.googletagmanager.com/gtag/js?id=UA-130586347-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-130586347-1');
</script>

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

For the sake of brevity, I'll just refer to 2 hypothetical versions of a document
throughout this post: *condensed mode* and *full mode*. Condensed mode showing the
critical information only, full mode showing everything.

<h2>The most important reason to try it</h2>

Some readers might find it helpful. For those that don't, it's not really getting
in their way. Win-win?

<h2>The more interesting reason to try it</h2>

These types of interactions are very easy to track anonymously
with <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/events"
target="_blank" rel="noopener">Google Analytics Event Tracking</a>.

<h2 id="accessibility">Accessibility</h2>

<p>
  If you do this in your real documentation, for accessibility reasons
  I'm 90% sure that you must present the full page by default, and make the condensed version
  the opt-in choice. I could be wrong. I'll check with my colleague,
  <a href="https://twitter.com/rob_dodson" target="_blank" rel="noopener">Rob
  Dodson</a>, who knows a lot about web accessibility, and get back to you.
</p>

<h2>Prior work?</h2>

<p>
  I'm pretty sure that I've read about other technical writers trying out this idea before
  and it not going well. If you're aware of any relevant case studies or research
  on this idea, please send me an email at kayce@basqu.es and I'll update this
  section. I can't recall much discussion about this
  idea within the last couple of years, though, so I figured I'd resurface it. Also, it
  was just fun plain old fun to create this proof of concept ;)
</p>

<h2>Conclusion... or is it?</h2>

But wait, there's more! This post is itself a demo of this idea!

<button class="controls--everything">
  Show Full Mode
</button>

<button class="controls--essentials">
  Show Condensed Mode
</button>

<p class="info--everything">
  Aww yeaaah, look at you, being all curious and adventurous. I see you. I dig it.
</p>

<h2 class="info--everything">Do as I say, not as I do</h2>

<p class="info--everything">
  I'm showing the condensed version of this blog post by default.
  I did it for dramatic effect. As I said in <a href="#accessibility">Accessibility</a>,
  I'm 90% sure that if you add this feature to real docs, you must show the full page by default.
</p>

<h2 class="info--everything">Automating the process of creating summaries</h2>

<p class="info--everything">
  If you put summaries at the bottom of your docs, this feature might open up an
  interesting new workflow for you. Rather than manually writing up your summaries,
  suppose you just marked up your content as high-priority or low-priority and then put an
  "Enter Summary Mode" button where you would usually put the manually-written summary content.
  When the user clicks, you enter condensed mode. This would also help you track how many
  users actually care about seeing summaries. Again, you can use Google Analytics Event Tracking
  to do that.
</p>

<h2 class="info--everything">Mode overload?</h2>

<p class="info--everything">
  Parametric Press provides 4 modes. That seems excessive to me. It also seems like
  it would cause analysis paralysis for the poor writer who had to classify each block
  of content. This is just my first impression. I'll try to contact the Parametric Press
  people and see what they say about the usefulness of 4 modes.
</p>

<h2 class="info--everything">Implementation</h2>

<style>
  .info--everything {
    display: none;
  }
  .info--everything__visible {
    display: block;
  }
</style>

<script>
  const everything = document.querySelector('.controls--everything');
  const essentials = document.querySelector('.controls--essentials');
  essentials.disabled = true;
  everything.addEventListener('click', () => {
    document.querySelectorAll('.info--everything').forEach(el => {
      el.classList.add('info--everything__visible');
    });
    essentials.disabled = false;
    everything.disabled = true;
    gtag('event', 'click', {
      'event_category': 'Viewing Mode',
      'event_label': 'Full',
      'value': 1
    });
  });
  essentials.addEventListener('click', () => {
    document.querySelectorAll('.info--everything').forEach(el => {
      el.classList.remove('info--everything__visible');
    });
    essentials.disabled = true;
    everything.disabled = false;
    gtag('event', 'click', {
      'event_category': 'Viewing Mode',
      'event_label': 'Condensed',
      'value': 1
    });
  });
</script>

<h2 class="info--everything">If you want this feature, I can help you implement</h2>

<p class="info--everything">
   I don't think I'll be able to do this in any Google documentation without a significant
   amount of work. But if you're game to try it, I'm game to implement it for you.
   Email me at kayce@basques. It'll probably only be feasible if you build your site with
   a static site generator, like Hugo or Jekyll.
</p>

<h2 class="info--everything">Web development is a useful skill for technical writers</h2>

<p class="info--everything">
  Building websites is really fun. It also enables you to experiment with your
  documentation site, like I did with this post. If you're in an industry that mainly
  publishes its documentation to the web, consider web development as a means towards
  possibly advancing your technical writing career.
</p>

<p class="info--everything">
   Also, it gives you the freedom to <a href="TODO">do silly stuff like this</a>.
</p>
