<h1 id="title">
  Measure The Load Performance, Accessibility, And SEO Of Your Documentation Pages
</h1>

<p id="time">
  <time datetime="2019-04-25">2019 April 25</time>
</p>

<p id="category">Technical Writing</p>

<p id="summary">
  The experience of using a documentation site may be as important as the quality of the content
  on that site. This post shows you how to use Chrome DevTools to quantitatively measure
  whether your documentation site is an asset or a liability.
</p>

I write the documentation for Chrome DevTools. DevTools is Google Chrome's built-in set of
tools for web developers. When you're developing a website and it's not working correctly, you use
DevTools to figure out what's wrong.

The Audits panel of DevTools is an automated diagnostics tool that helps web developers measure
and find ways to improve the quality of a page. You can use the Audits panel to get an idea of
the quality of your documentation site. You don't need to know anything about web development to
use the Audits panel. Some suggestions are addressable within your content files. Others
can only be addressed by web developers. At the very least, if you know that your documentation
site is crappy, but can't convince managers to prioritize fixing it, you can now show them
concrete proof of problems.

<h2 id="loadperf">Load performance?</h2>

[perf]: https://medium.com/@vikigreen/impact-of-slow-page-load-time-on-website-performance-40d5c9ce568a

The importance of accessibility and SEO probably needs no explaining. Load performance might
be less obvious. Load performance refers to how fast your documentation pages load. I define the
mission of technical writers as helping users get tasks done as quickly and efficiently
as possible. The faster a documentation page loads, the faster a user can get a task done.

Maybe you're thinking that no one really cares or notices if a page loads in 5 seconds or 10.
There's actually lots of [evidence][perf] that web users have low tolerance for slow-loading pages.
If your readers are in a rush or panicked, I suspect that they may have even lower tolerance than
usual.

<h2 id="getstarted">Get started</h2>

[chrome]: https://www.google.com/chrome/

1. Open [Google Chrome][chrome].
1. Visit the URL that you want to audit. I'm going to audit the DevTools homepage as an
   example.

     <figure>
       <img src="/media/lighthouse1.png"
            alt="The DevTools homepage."/>
       <figcaption>
         <b>Figure 1</b>. The DevTools homepage.
       </figcaption>
     </figure>

[viewport]: https://developer.mozilla.org/en-US/docs/Glossary/Viewport

1. Right-click anywhere on the page and select **Inspect**. If you've never used DevTools before,
   it opens to the right of your [viewport][viewport] by default.

     <figure>
       <img src="/media/lighthouse2.png"
            alt="The viewport on the left, and DevTools on the right."/>
       <figcaption>
         <b>Figure 2</b>. The viewport on the left, and DevTools on the right.
       </figcaption>
     </figure>

1. Open the **Audits** panel.

     <figure>
       <img src="/media/lighthouse3.png"
            alt="The Audits panel."/>
       <figcaption>
         <b>Figure 3</b>. The Audits panel.
       </figcaption>
     </figure>

1. Keep the configuration options at their default values. Technically, these options set up
   the Audits panel to simulate the experience of viewing this page on a mobile device. See
   <a href="#config">Appendix: Configuration options</a> if most of your readers visit your
   site on desktops.

   It's very important to keep the options the same across audits. Every page loads slower
   when you simulate mobile. So if you simulate mobile on your first audit, and then
   use a desktop configuration on your second audit, the page will seem to load much faster
   when in reality it's only because of the inconsistent configuration options.

1. Click **Run Audits**. After 10 or 20 seconds the Audits panel provides a report describing
   ways to improve the page.

     <figure>
       <img src="/media/lighthouse4.png"
            alt="The viewport on the left, and a report for that page on the right."/>
       <figcaption>
         <b>Figure 4</b>. The viewport on the left, and a report for that page on the right.
       </figcaption>
     </figure>

     In **Figure 4** you can see that the DevTools documentation itself doesn't have very
     good scores. I'm not happy about this, but it's largely out of my control. To show that
     I'm not a complete "do as I say, not as I do" hypocrite I'll mention that the scores
     here on `kayce.basqu.es`, which I built myself, are much more solid.

     <figure>
       <img src="/media/lighthouse8.png"
            alt="A report on my homepage."/>
       <figcaption>
         <b>Figure 5</b>. A report on my homepage.
       </figcaption>
     </figure>

1. Hover over a metric to learn more about what it's measuring. There are many metrics related to
   load performance because web developers conceptualize the loading experience as a series of key
   events, such as when content is first painted to the screen and when the page appears
   fully loaded.

     <figure>
       <img src="/media/lighthouse5.png"
            alt="Hovering over the First Contenful Paint metric."/>
       <figcaption>
         <b>Figure 6</b>. Hovering over the First Contenful Paint metric.
       </figcaption>
     </figure>

1. Expand an audit to learn more about it.

     <figure>
       <img src="/media/lighthouse6.png"
            alt="Learning more about the Preload Key Requests audit."/>
       <figcaption>
         <b>Figure 7</b>. Learning more about the Preload Key Requests audit.
       </figcaption>
     </figure>

1. Click **Learn More** for more information on why the audit is important and how to fix
   the page so that it passes the audit.

     <figure>
       <img src="/media/lighthouse7.png"
            alt="Documentation for the Preload Key Requests audit."/>
       <figcaption>
         <b>Figure 8</b>. Documentation for the Preload Key Requests audit.
       </figcaption>
     </figure>

<h2 id="caveats">Caveats</h2>

<h3 id="a11y">Accessibility</h3>

The accessibility audits are not comprehensive. A site can get a perfect score of 100 on
accessibility and still be miserably inaccessible. Here's why. A page is accessible when:

1. A user can navigate it with a keyboard or screen reader.
1. The page's elements are properly annotated for screen readers. In other words, as a
   screen reader user navigates the page, the screen reader properly announces and interacts
   with the element in focus.

The Audits panel measures #2. #1 is omitted only because it's hard to automate, not because
it's an optional consideration. #1 is just as important as #2. The best way to test for #1 is
to manually navigate your documentation site with a keyboard or screen reader.

<h3 id="seo">SEO</h3>

Likewise, the SEO audits are not comprehensive. They're pretty basic, in fact. But it's a start.

<h2 id="next">Next steps</h2>

1. Audit one of your documentation pages.
1. Read your report and explore the suggestions. Look for changes that you can make within
   your content files. Examples include missing `alt` attributes on images, oversized images,
   and unoptimized images.
1. Make the changes, and then run another audit to make sure your changes fixed the problem.

<h2 id="config">Appendix: Configuration options</h2>

In <a href="#getstarted">Get started</a> I told you to keep the configuration options at
their default values. If most of your documentation readers visit your site on desktops,
you might want to set the **Device** option to **Desktop** and the **Throttling** option to
**No Throttling** to more closely reflect the desktop experience.
