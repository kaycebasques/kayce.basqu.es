<h1 id="title">A Case Study Of Twitter's "Was This Page Helpful?" UI</h1>

<p id="time">
  <time datetime="2019-02-03">2019 February 3</time>
</p>

<p id="category">Technical Writing</p>

This is the first of a series of posts where I catalog the various implementations
of "was this page helpful?" UIs that I encounter across the web.

Today's UI can be found at the bottom of [Twitter's developer docs](https://developer.twitter.com/en/docs.html).

Here's the prompt for feedback:

![The prompt for feedback](/media/twitter-prompt.png)

Thoughts:

* The text is quite large. This is a good thing, in my opinion. This is valuable data,
  so it's justifiable to make the UI prominent.
* I find the use of happy and sad faces to be charming and intuitive.
* The overall UI is styled more as a footer than as part of the main content.
  I wonder if this reduces the response rate. For example, when I approach the
  end of a document, and I see that the background color has changed from
  white (the main content) to purple, I know that the document is finished. I
  might be inclined to ignore all of the text in purple.

Here's the response after clicking the unhappy face:

![The response after clicking the unhappy face](/media/twitter-no.png)

Thoughts:

* The first 3 options provide valuable data. Those 3 types of problem
  need to be triaged and approached differently. If you know that you only
  need to update a doc for accuracy, you can get in and out much faster.
* The last option ("There is a broken link or typo.") is curious.
  Broken links can be detected automatically. Do users really rate an
  entire doc as unhelpful just because of typos? Maybe Twitter provided this
  option to help themselves triage low-priority issues?
* A 5th option with the text "Something else" might help capture any other
  feedback that does not neatly fall into the other 4 buckets.

Here's the response after clicking the happy face:

![The response after clicking the happy face](/media/twitter-yes.png)

Thoughts:

* Just because a user rated a doc as helpful doesn't mean that it's perfect.
  Twitter might gain valuable feedback by prompting the user here for
  more feedback, the same way that they do after a user clicks the unhappy face.
  So, for example, I would update the text to say "Thank you for the feedback.
  We're really glad we could help! If you noticed anything wrong with the page,
  please let us know below." and then provide the 4 (or 5) options below that text.
