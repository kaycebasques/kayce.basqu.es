<h1 id="title">Regression Tests For Docs</h1>

<p id="time">
  <time datetime="2018-05-17">2018 May 17</time>
</p>

<p id="category">Technical Writing</p>

<p id="summary">
  A proposal for an automated way to identify big changes in docs.
</p>

Last night, the San Francisco chapter of STC
had a Meetup on [Quantiative Metrics and Qualitative
Assessments](https://www.meetup.com/stc-sf/events/250161416), led by
Andrew Etter, author of [Modern Technical Writing][MTW]. I appreciate that
Andrew paused after each slide and opened up the space for questions and
discussion.

[MTW]: https://www.amazon.com/gp/product/B01A2QL9SS/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01A2QL9SS&linkCode=as2&tag=kayce0d-20&linkId=9349a535973cb16c11829b9a9286c63e

During one of our discussions, I had the idea to create a form of
regression tests for docs.

First, a little background. This idea builds off of a Google Sheets Add-On that
I'm working on that makes it pretty easy to generate per-page analytics.
You just enter the paths of the pages that you want to analyze, along with
the [Google Analytics Metrics][GAM] that you want to track, and the Add-On
takes care of the rest.

[GAM]: https://developers.google.com/analytics/devguides/reporting/core/dimsmets

<figure>
  <img alt="Populating a spreadsheet."
       src="/media/gab.gif"/>
  <figcaption>
    <b>Figure 1</b>. Populating a spreadsheet
  </figcaption>
</figure>

Here's how I'm imagining the regression tests would work:

* This Add-On would run once a week. Every time it runs, it creates a new
  sheet, containing that week's data. For example, in the screenshot below,
  the `20180501-20180506` contains the data for May 1st to 6th, 2018.

    <figure>
      <img alt="The proposed regression detector."
           src="/media/canary.png"/>
      <figcaption>
        <b>Figure 2</b>. The proposed regression detector
      </figcaption>
    </figure>

* The Add-On then compares this week's data to last week's, or last month's,
  or whatever. If there's any big changes, the Add-On sends you an email,
  notifying you of the big changes.
* I could also potentially chart each of the pages over time, and send
  those as graphs, to make it easier to visualize long-term trends.

I can imagine 2 main uses for this tool:

* Regression tests. Specifically, detecting out-of-date docs. For example,
  suppose that the tool detects a significant drop in the average-time-on-page
  for a certain tutorial. I'd infer that something in the product changed,
  and users are now getting stuck at a certain step in the tutorial.
* Identifying opportunities. For example, if the entrance rate for a certain
  page suddenly increases dramatically, I'd infer that the page is going
  viral somewhere, or I've stumbled on a more efficient distribution channel.
  It may be worthwhile to find out what's causing the increase, and focus
  more efforts on that channel in the future.

If you've got any ideas on how to make this useful, or if you think it's
flawed and I shouldn't pursue it, please email me at kayce@basqu.es.

If I do pursue it, I'm planning on publishing it as a free Add-On. If you use
Google Analytics, then it'll work for you. I'll post updates on this blog if
I do decide to pursue it.
