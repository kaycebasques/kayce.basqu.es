---
layout: blog.njk
title: Ode to Raspberry Pi (and Arduino)
date: 2021-09-10
category: Tinkering
summary: |
  I've been tinkering on a Raspberry Pi and Arduino for the past week,
  and it's great. Join me!
tags:
  - blog
  - Tinkering
---

Hello, WWW! I am writing to you from my newfangled Raspberry Pi 4 Model B.
There truly is something magical about it. It probably just boils down to
cost. Because I'm not afraid to brick this thing I feel true freedom to
tinker and experiment. If you're looking for a way to rediscover your
love of computers, I recommend it. It also doesn't hurt to take a
[sabbatical](/sabbatical/prologue) so that you have ample time to tinker and explore ;D

<aside>Sorry if you're the poetic type and I got your hopes up... this post is not a true ode.</aside>

I was pleasantly surprised to discover that Raspberry Pi and Arduino
have a mutualistic relationship<sup>++</sup>. I never really understood the
difference between the 2 projects. It seems pretty simple: Raspberry Pi is better
suited to be the "brains" of your
operation and Arduino is better suited to be the "senses" (realtime input/output).
I hadn't realized it consciously before, but cost considerations had also
made me a bit hesitant to tinker with my Arduino. The Arduino is reasonably
priced, for sure, but to program that thing you've got to hook it up to your
laptop/desktop. I don't know if this fear is unfounded, but part of me always
worried that my circuit was wrong and I was going to fry my laptop (connected
to my Arduino via USB). Regardless, that fear is gone now. The Raspberry Pi
now serves the role that my laptop used to play. If I somehow manage
to destroy my Raspberry Pi and Arduino in one fell swoop (ideally in a very
comical way that chars my eyebrows and covers my face in black soot), big deal.
I'm out $120, max.

<aside>
  <sup>++</sup> Interesting enough, when people talk about a "symbiotic"
  relationship (i.e. a healthy relationship), the word they're really looking
  for appears to be "<a href="https://en.wikipedia.org/wiki/Mutualism_(biology)">mutualistic</a>",
  as in mutual benefit. A symbiotic relationship is any relationship between 2
  species, healthy or unhealthy. Parasitism is a type of symbiosis. So is commensalism
  (one species gains while the other is unaffected) and amensalism
  (one is harmed while the other is unaffected).
</aside>

Here's what I've created so far:

* For my first project, I set up a [cron job to turn on an LED every minute for a
  few seconds](https://twitter.com/kaycebasques/status/1435492992643518466). Cron jobs
  were one of those things where I conceptually knew how they worked, but never
  had a need to actually use before.
* For my second project, I got my Arduino to [sample temperature
  data every minute and send it to my Raspberry Pi, which stored
  the data in a CSV file](https://twitter.com/kaycebasques/status/1435717619110219776).
  I later plotted the data into a graph. The time was off by a few hours and the temperature
  readings were wildly erratic (probably because it's a cheap sensor) but who cares?
* For my third project, I got my Arduino to [play a song on a piezo buzzer after
  I push a button (and light up an LED for the duration of
  the song)](https://twitter.com/kaycebasques/status/1436077337188061186).

If you want to give Raspberry Pi + Arduino a shot, I recommend getting
an Arduino kit. I have a [SparkFun Inventor's Kit](https://www.sparkfun.com/products/15267)
from around 2013 and it's great. Besides the Arduino and electronics stuff (wires, sensors, etc.)
you also get get a book of projects and ready-to-go source code for each project. For the Raspberry Pi
I got the [Raspberry Pi 4 Desktop Kit](https://www.raspberrypi.org/products/raspberry-pi-4-desktop-kit/).
You still need to provide your own monitor but everything else is covered.

The last thing I'll note is that the Raspberry Pi is also sparking my curiosity into
exploring Linux system stuff. That was another thing that I never really messed with
(even though I've used Ubuntu for years) for fear of bricking my laptop. Of course I
could probably find a way to factory reset, but it just seemed like more hassle than it was worth.
With the Pi, it's pretty easy to get back to a clean slate: you just use their imager
program to reformat the SD card that stores the Raspberry Pi OS.
