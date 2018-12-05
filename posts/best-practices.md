<h1 id="title">
  Maybe Our Documentation "Best Practices" Aren't Really
  Best Practices
</h1>

<p id="time">
  <time datetime="2018-12-03">2018 December 3</time>
</p>

<p id="category">Technical Writing</p>

<p id="summary">
  Recently I discovered that a supposed documentation "best practice" may not
  actually stand up to scrutiny when measured in the wild. I'm now on a mission to get a
  "was this page helpful?" feedback widget on every
  documentation page on the web. It's not the end-all be-all solution, but it's a start
  towards a more rigorous understanding of what actually makes our docs more helpful.
</p>

<h2 id="audience">Intended audience for this post</h2>

Anyone who writes technical documentation and publishes it to a website.

<h2 id="intro">Introduction</h2>

Technical writing is full of "best practices" that supposedly improve content
quality:

* Use the active voice.
* Shorter docs are better.
* Avoid fancy words.
* Conceptual information shouldn't be in a tutorial. Put the conceptual information
  in an overview, and link to it from the tutorial.
* Use examples to clarify concepts.
* Grammar matters.
* Do not inject opinion.
* Task-based information architectures are best.

And so on. These are random examples I pulled from memory. Replace them with whatever
"best practices" you actually adhere to.
I'm wrapping all of these "best practices" in quotes to suggest that *we don't really know if
they're actually best practices*.

Sure, for some of them, we can point to that one
user study that John Carroll did 15 years ago for [Minimalism Beyond the
Nurnberg Funnel](https://amzn.to/2EdU8jo), but how do we know that the principle holds up
today, across the global community of documentation readers on the web?

Or take [Strunk and White](https://amzn.to/2SuFtTL). 
You may have noticed that I slipped some of their "best practices" verbatim into the list above.
I'd wager that most of our "best practices" come from that little grey book. 
But those guys didn't write that book for technical writers.
And I'm pretty sure they did no research whatsoever. Some of their recommendations, like
"do not explain too much", might be downright counterproductive when applied to technical
writing. Yet when an aspiring technical writer asks what books they should read to learn our
field, that's one of the first that we point them to.

Or maybe we're relying on research from other disciplines, such as design or human-computer
interaction. Which is a great start. But considering that the web affords a lot of opportunities
to measure the sentiment of our readers, why not at least *check* that these best practices
from other disciplines carry over well into ours?

This question of whether thse "best practices" actually result in more helpful documentation
recently became more important to me because I encountered some data that calls
the "best practice" of "shorters docs are better" into question.

I'm coming to suspect that the data might not actually support this belief. For example,
I recently put a "was this page helpful?" feedback widget on hundreds of docs at
[developers.google.com/web](https://developers.google.com/web).
Here's an [example](https://developers.google.com/web/tools/chrome-devtools/css/#feedback).
We've been collecting the data for several months, with hundreds of 
responses for each doc. Here are our top-performing pages, after filtering out pages that
had less than 500 responses:

[mariko]: https://developers.google.com/web/updates/2018/09/inside-browser-part1
[jake]: https://developers.google.com/web/fundamentals/primers/promises

1. [Inside look at modern web browser (part 1)][mariko]
2. [Get Started With Viewing And Changing CSS](https://developers.google.com/web/tools/chrome-devtools/css/)
3. [JavaScript Promises: an Introduction][jake]
4. [Pause Your Code With Breakpoints](https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints)
5. [Address Bar Matches Brand Colors](https://developers.google.com/web/tools/lighthouse/audits/address-bar)

Our top performing page, [Inside look at modern web browser (part 1)][mariko], is somewhat long.
Top performer #3, [JavaScript Promises: an Introduction][jake], is quite long.
Both posts also defy other "best practices". The Promises doc is full of humor and blends
content types, for example. By "content types" I mean the guidelines that technical writers
use in order to decide how a tutorial, guide, reference, and so on should be structured,
how much information it should have, and so on.

So maybe this data is a clue that our "best practice" of "shorter is better" is not really true.
Maybe the true best practice is *use as many words as you need to in order to completely explain your topic
and just make sure to keep your readers entertained and engaged along the way*.
Or maybe "shorter is better" holds true for most docs, and this is just a quirk of my team's audience, web developers.
We simply don't know yet. That's my whole point!

Does any of this matter? Well, let me answer this question with some questions. Does your company
screen out applicants whose writings sample doesn't look like a page from Strunk and White?
Is "conciseness and brevity" one of the factors of promotion? Do you structure your writing
teams around these notions of quality? I.e. do you spend time editing docs to be shorter?
How would you feel about those practices if we found out that there's no meaningful connection
between conciseness and how helpful *our actual users* perceive a doc to be?

In other words, what if we've been optimizing the wrong things?

<h2 id="measuring">Measuring best practices</h2>

A true best practice improves the quality of a page in a measurable way. If it doesn't measurably
improve a page and we still want to do it, that's fine. But we shouldn't call it a best
practice. We should call it a convention. And we should prioritize accordingly.

I should also note that I'm focusing on best practices in the context of *page quality
as measured by our users*. Maybe "shorter is better" is still a best practice in the context
of team productivity. I.e. a shorter doc is faster to edit.

I'm proposing that we start measuring quality by adding a "was this page helpful?"
feedback widget to pretty much every technical documentation page on the web.

From an implementation perspective, I have a few reasons for focusing on "was this page helpful?"
widgets:

* They're generally easy to implement for your typical web developer.
* They're a direct, unambiguous way to find out whether our *true audience* is finding value
  in our docs *when they're actually using them*.
* There's an easy and free way to store and access the time series data in Google Analytics
  called [Event Tracking](https://developers.google.com/analytics/devguides/collection/analyticsjs/events).
* We can keep the experiments (more on this in a bit) relatively standardized.

In terms of *what's in it for you as a technical writer* consider these provocative bullet points:

* This data can help you triage your docs. I.e. focus on the docs that have
  low ratings and high pageviews.
* This data can help you discover insights about your audience. E.g. your teammate
  puts out a doc, you expect it to get bad ratings, but it actually does really well.
  This is an opportunity to figure out what your teammate knows about your audience
  that you don't.

<h2 id="validation">Actively validating best practices</h2>

Once you've got a "was this page helpful?" widget on every page, how do you use this
data to actively validate a "best practice"?
The key is to treat your content updates like scientific experiments.

For example, suppose that one of your teammates just left the company, and this person
was notorious for using needlessly complex words. You inherited this person's docs.
You subscribe to the "best practice" that simpler words are better than complex words.
This is your opportunity to find out if simpler words create any meaningful change in
the perceived helpfulness of your docs:

1. First, let the original docs collect data for a while. You need a benchmark to compare
   your changes against.
1. Make your changes, and then let the updated docs collect data for the same general amount
   of time as the original docs. The key is to keep the changes isolated. If you introduce a
   bunch of changes all at once, you won't be able to definitively say what kind of impact
   each change had.
1. Compare the benchmark data to the new data.
1. Share your findings with the rest of the technical writer community.

Step #4 is why I'm writing this post. If we cultivate a culture of active experimentation
in our docs, I think we can collect enough aggregate data to begin to understand what
kinds of changes meaningfully improve perceived helpfulness. Maybe you're already doing this.
To my knowledge, most teams aren't. We could collectively really benefit from more technical
writers sharing their research.

A single docs site probably
won't be able to generate enough data in order to draw conclusions. But if we run the same
general experiment on hundreds of sites, I think we can. It may not stand up to the scrutiny
of true scientific experimentation, but I think it will give us a more informed stance than
the status quo. Our approach will get more sophisticated and rigorous over time.

[optimize]: https://developers.google.com/web/tools/lighthouse/audits/optimize-images

As another example, yesterday I added a lot of content to our [Optimize Images][optimize] guide:

<style>
  .comparison--image {
    display: inline;
    max-width: 45%;
    vertical-align: top;
  }
</style>

<div>
  <img class="comparison--image" src="/media/optimize-images-before.png"/>
  <img class="comparison--image" src="/media/optimize-images-after.png"/>
</div>

The implicit "best practice" here is "more detail is good". I've set a reminder to check back
on the doc in 2 months to see if more detail did in fact improve the helpfulness rating of
the page.

<h2 id="patterns">Noticing patterns</h2>

In some cases we may not need to actively experiment with our docs in order to
draw conclusions. Take the "shorter is better" example I mentioned in the introduction.
I didn't have to do anything, other than collect the data.
As long as enough docs sites are collecting "was this page helpful?" data, we may
already have enough data to be able to draw a general conclusion that the shortness
of a doc is not correlated with any meaningful change in perceived helpfulness. This will
require a lot of sharing of data, and I'm not quite sure how that would work yet, but it's
definitely on my radar.

I think that the methodology for figuring out whether the length of a doc correlates to perceived
helpfulness looks something like this:

* Collect the top 10 or 100 pages across many docs sites. And the bottom 10 or 100.
* Count the number of words in each article.
* Do some fancy statistics to find out if there's a correlation between doc length and helpfulness.

As a first step, I'm working on getting these widgets across all of Google's documentation.
Perhaps in the future I'll be able to write about any general insights that we've discovered.

<h2 id="todos">Your TODOs, should you choose to accept them</h2>

* If you already have one of these widgets on your pages, please send me an email at
  kayce@basqu.es or kayce@google.com. I want to find out what's working for you,
  and what's not. If your docs site is open source, it may be helpful for others
  to be able to see how you implemented the widget.
* If you think you can implement a widget yourself but just need a reference implementation,
  here's a [basic example](https://glitch.com/edit/#!/wasthispagehelpful), written
  in vanilla JavaScript and HTML, that sends the data to Google Analytics.
  Click **Show Live** to see the live demo.
  If you run your site on top of [Hugo](https://gohugo.io), here's a
  [pull request](https://github.com/kubernetes/website/pull/11037) showing how I helped the Kubernetes
  folks add widgets to their docs pages.
* If you don't have one, but want one, still send me an email. I may be able to help.
* Come up with ideas on how to test out "best practices" and run the tests yourself,
  or send the ideas to me so that I can work on them.
* Subscribe to my mailing list to stay on top of this project.
* Check out [Use Red Buttons To Get More Feedback](/blog/red-buttons)
  to learn about an A/B test that I ran in order to figure out how to maximize
  the response rate of these widgets. Using red buttons rather than blue ones significantly
  improved the response rate. I'm currently running an experiment to find out if
  the prompts "was this page helpful?" and "was this page useful?" generate the same qualitative
  responses from users.

I'm excited to see what we learn!
