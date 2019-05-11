<h1 id="title">
  A Concrete Strategy For Cultivating Empathy In Documentation
</h1>

<p id="time">
  <time datetime="2019-05-11">2019 May 11</time>
</p>

<p id="category">Technical Writing</p>

<p id="summary">
  Technical writers talk a lot about being empathetic with readers. I agree that it's a 
  crucial skill for technical writers but frankly I think that the discussion is starting to
  degenerate into lip service. We need more concrete guidance on how to cultivate empathy
  in our documentation. In this post I propose that it's our duty as technical writers to start
  recording our real-world first experiences with documentation.
</p>

<h2 id="mindsets">Work mindset versus task mindset</h2>

As a technical writer I review documents all the time. It usually goes like this. A colleague
writes a guide and asks me to walk through it and verify that it's usable and complete. I've got
3 deadlines haunting me, so I do the minimum of what's asked of me: I review it for usability and
completeness, and nothing more. I have no intention of actually using this product in my life.
I'll call this the *work mindset*.

My mindset and behavior when I'm reading documentation because I actually need to get a task done
is very different than the work mindset. I feel an obsessive craving to get the task done, sometimes quickly.
I'm often uncertain about whether the document is actually relevant to my task. Even my eye 
scanning patterns are different. I'll call this second mindset the *task mindset*.

Getting feedback on my documentation from someone in the task mindset is much more valuable
than getting feedback from someone in the work mindset. The task mindset person has skin in the game.
They really needed my documentation to get something done.

<h2 id="problem">Therein lies the rub</h2>

But here's the dilemma. People in the task mindset are focused on completing the task.
Leaving feedback on my documentation is the last thing on their mind.
If you have the opportunity to watch people use your documentation while they're in the task
mindset, then that's as good as it gets. I don't have access to these people. I suspect most
technical writers don't.

<h2 id="solution">Solution</h2>

There is one person that I **always** have access to, though... myself!

I know when I'm in the task mindset. In other words, I know when I'm reading a document because
I'm truly relying on that document to help me get a task done. And I know how hugely valuable this
information is to the author. So I now view it as my *duty* as a technical writer to record my 
experiences with that documentation while I'm in the task mindset. If all technical writers start
doing this, I wager that we will generate a wealth of surprising insights around how to better serve
people while they are in the task mindset.

How exactly do you record your thoughts and behaviors while in the task mindset? At first I tried
writing down my thoughts and behaviors, but it was too tedious and interruptive. And then I had an
aha moment... I can just record myself! In the video below that's exactly what I started doing. The
solution to the "problem" that I encountered in the video is hilariously cliché. If you're a frequent
user of VS Code --- I'm not --- the solution is going to be maddeningly obvious.

<div class="youtube--container">
  <iframe class="youtube--video"
          src="https://www.youtube.com/embed/8u1UyN_Yhfw?ecver=1"
          frameborder="0" allow="autoplay; encrypted-media" 
          allowfullscreen></iframe>
</div>

By watching that video even I learned some interesting stuff about myself when I'm in the task mindset:

* My first debugging strategy was to try restarting the server. The old "take the cartridge out and
  blow on it" approach.
* Next I scanned the guide. I immediately went to Google Search once I hit the end of the document.
* The top 3 Search results didn't seem relevant so I didn't even bother scrolling beyond that. I didn't try
  a different query, either.
* Next I scanned the code samples looking for any obvious locations where I had forgotten to add some code.
* Through lots of debugging experience I had a pretty good intuition that my code was correct.
* Finally, my long-term memory seemed to kick in, do a scan of past debugging experiences,
  and realize that my unfamiliarity with VS Code was another relevant variable here. In other words,
  my mind realized that the problem might be related to the code editor, not the code.

For software products, screencasts of you thinking out loud are probably good enough. For physical
products, you could just set up a camera on a tri-pod and point it at yourself, again thinking out loud
while you work through the task. You might not even need to think out loud. I was able to write that list
above after the fact because the video helped me remember what I was thinking every step of the way.

At first I tried writing my first impressions down, but quickly realized that the note-taking was too disruptive and
tedious. Videos provide more information, anyways. Something that seems irrelevant to me might be 
extremely valuable to the author.

To make this evidence useful to the author, we need to describe how experienced of a user we are with regards
to that product, which is exactly what I do in the video description:

<blockquote>
  Background context: I consider myself an intermediate web developer. I build toy applications a lot but 
  have never worked on a massive-scale production project. Because I work on Google Web DevRel I have a pretty 
  good mental model of the web at large. A few months back I had completed the Tour Of Heroes tutorial [1] 
  from the official docs so I wasn't completely new to Angular, although I had forgotten most of the specifics. 
  I also hadn't used VS Code in probably over a year. I usually use Vim.
</blockquote>

I guess one could argue that technical writers are too aware of the documentation experience and
therefore do not represent real users. My rebuttal to that is to remember that I'm talking about 
recording your experiences while you're in the task mindset. In the task mindset technical writers
are as much "real" users as anyone else. If anything, their awareness of the documentation experience might 
generate even more valuable feedback because they are more sensitive to how the document is helping
or failing them.

If you start doing this I would LOVE to see your recordings. Please email them to kayce@basqu.es.