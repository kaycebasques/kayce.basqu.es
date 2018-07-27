# Technical Writing: Results from the Generic/Specific Feedback Prompts Experiment

<time datetime="2018-07-27">2018 July 27</time>

<p id="summary">
  I conducted a scientific experiment to find out if specific, more personal requests for feedback
  generate more responses than generic ones. The results reject the hypothesis. More
  personal requests for feedback do not generate more responses than generic ones.
</p>

## The experiment

I conducted an A/B test in [What's New in DevTools (Chrome 67)][WNDT].

[WNDT]: https://developers.google.com/web/updates/2018/04/devtools

Half of the viewers got a feedback prompt with the following generic text:
"Was this page helpful?"

![The generic feedback prompt](/media/generic-prompt.png)

The other half got a prompt with the following more specific and personal text:
"How are we doing with these release notes? Did you find this post helpful?"

![The more personal and specific feedback prompt](/media/specific-prompt.png)

## Results

The results reject the hypothesis. The more specific text did not
get more responses than the generic text.

![Results of the generic/specific experiment](/media/generic-specific-results.png)

The **Total Events** column represents the number of responses. In order to confirm
my hypothesis, the specific prompt would have had to generate significantly more
responses than the generic prompt.

The **Avg. Value** column represents the average score of each response. Clicking the
No button sends a value of 0, whereas clicking Yes sends a value of 1.

## Conclusions

When I say "significantly more responses" I don't mean statistical significance. I
don't remember much from my college statistics class, but I'm pretty sure that you
need very large sample sizes to achieve statistical signficance. However, I think
it's important to bring the scientific method to technical writing, so I'm not
going to let perfect be the enemy of good.
If you know how to calculate statistical significance, feel free to send the
numbers to me at `kayce@basqu.es`.

How I'm acting on this data: If the specific prompt had generated a few hundred
more responses than the generic prompt, say 900 to 600, I would have started using
specific prompts throughout my docs. But since there doesn't seem to be any
noticeable difference, I'm going to stick with the shorter, more generic text.

## Next steps

I'm going to follow up with another A/B test using a more aggressive version of the
personalized prompt. I'm thinking that I'll include a picture of my face and write
some text along the lines of "Hi! I'm Kayce. I wrote this doc. Please leave feedback.
I really do use it to make better docs for you." My thinking is that if people
understand that I actually look at the data and use it, they'll be more likely
to respond. On the other hand, I could see my readers finding this annoying,
resulting in less responses. It'll be fun to find out, either way!

In other news, I'm running a different experiment where one half of users see red
feedback buttons, and the other half of users see white buttons. The red buttons do seem to
generate significantly more responses. Subscribe to my mailing list to get an email
when I publish the results.
