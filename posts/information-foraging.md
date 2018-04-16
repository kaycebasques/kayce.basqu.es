# Applying Information Foraging Theory To Technical Documentation

<time datetime="2018-04-14">2018 April 14</time>

<p id="summary">
  Users rely on various cues (code samples, descriptive headings, etc.) to quickly gauge how
  much relevant information they'll get from that page. They proceed down a certain path so
  long as they're continually rewarded with more and more information that is relevant to
  their search. They go to a different path when the chance of finding relevant information on
  that other path seems stronger. They abandon the hunt when they've exhausted more energy than
  the value of the new information seems worth.
</p>

[Optimal Foraging Theory][OFT] (OFT) explains how animals hunt for food. Hunting habits evolved
around maximizing energy intake. Given different options, a predator will choose to hunt the
prey that offers the most energy for the least expended effort.

[OFT]: https://en.wikipedia.org/wiki/Optimal_foraging_theory

[Information Foraging][IF] uses OFT metaphors to explain how we, humans, search the web. In this
post I'm going to apply the Information Foraging framework to technical documentation in
particular.

We begrudgingly resort to consulting technical documentation when we need to accomplish a task but
couldn't figure out how to do it on our own. Thus begins the hunt. We've got a general
idea<sup id="sup1"><a href="note1">1</a></sup> of the information we need to accomplish the task.


When we set out to find information, we embark on a hunt. We have a general
idea of the information that we seek. We proceed down the path (a certain web page)
that seems most related to the target information. Upon visiting the page, we scan the information
landscape to get a general impression of whether or not it seems like promising hunting grounds.
We spot a promising morsel of information (a good code sample, a descriptive heading related to
my task) and we dedicate time and energy (mental focus) to it. The information helps us accomplish
our task, and we rejoice in the carnage of a successful hunt (sorry, this metaphor is getting
weird), or we skulk away to another hunting patch, famished and desperate for nutrition.

[IF]: https://en.wikipedia.org/wiki/Information_foraging

In [Information Foraging: Why Google Makes People Leave Your Site Faster][Nielsen], Nielsen
argues that the rise of Google Search has made it very easy for users to find quality content
on many sites, so they have very little incentive to stick around in your hunting patch (your site)
if they don't quickly find juicy prey (relevant info). Just like any other site, we've got to
model our docs sites around user behavior. Nielsen suggests 3 strategies (the quotes are from
Nielsen, the rest are my attempts at applying these strategies to docs sites):

* "Support short visits; be a snack".
* "Encourage users to return".
* "Emphasize search-engine visibility and other ways of increasing frequent visits by addressing
  users' immediate needs".


As you conduct your own searches, pay attention to your inner "energy expenditure" barometer.
Nielsen describes search behavior as a cost-benefit analysis that we're constantly re-calibrating
through the course of our hunt>

* "What gain can I expect from a specific information nugget (such as a web page)?"
* "What is the likely cost to discover and consume that information? (Cost is typically measured in time and effort, though it could include a monetary component in a micropayment system.)"


technical documentation users behave a bit different (but not much)... 

[Nielsen]: https://www.nngroup.com/articles/information-scent/



To make this concrete, here's an example of my own thought process around using the fetch API.
(Or I could use srcset)




<p id="note1">
  <sup><a href="#sup1">1</a></sup> I get into the most trouble when my mental model of the
  information I need to accomplish a task is off the mark. For example...


  structure a search query so that it captures the specifics of the issue, without assuming that
  the issue is caused by any certain component of the system. For example, when I was beginning
  to learn `npm`
  command line might search "
  started learning programming, 
</p>

