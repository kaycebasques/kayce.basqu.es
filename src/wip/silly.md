---
layout: 'base.njk'
title: 'How to program an Arduino Uno in Assembly'
description: 'TODO'
---

# {{title}}

## Choose your adventure

I originally wrote this tutorial with a silly story. As a professional
technical writer I can't bring myself to force everyone to read my silly story.
There are some people who might 

I wrote two versions of this tutorial.

Silly Story Version (Longer)

"Cut the BS I'm in a hurry" version (shorter)

<section class="silly">

<h2>TODO: Witty title for the "call to adventure" phase of the hero's journey here</h2>

<!-- No, that title is not incomplete. -->

<p>
  Today you woke up with the inexplicable urge to program your Arduino Uno in
  Assembly. Who knows why. Perhaps you accidentally stepped on the grave of
  <a href="https://en.wikipedia.org/wiki/Kathleen_Booth">Kathleen Booth</a>
  and she has come back from 
  <a href="https://en.wikipedia.org/wiki/A_Fire_Upon_the_Deep#Setting">the Transcend</a>
  to haunt you.
</p>

<p>
  Proudly you announce to your friends and family: "Loved ones! Today I must
  leave you. I must embark on a journey. I shall return to you with an Arduino
  Uno programmed purely in... <em>Assembly</em>." They smile at you in quiet,
  loving, supportive confusion, thinking to themselves: "Assembly? Arudino? What
  is that? Some sort of Italian Minecraft? One of these days I really should
  figure out what <code>[[YOUR_FIRST_NAME]]</code> does for work..."
</p>

<p>
  Suddenly the lights flicker. The sky turns dark. An AMBER alert goes off on your
  phone. You hear cackling in the distance. It's getting louder and closer. The
  closet door creaks open. A goblin! And not just any old garden-variety goblin. 
  A goblin from the depths of Stack Overflow! He looks at you and shrieks:
  "FOOL! You dare seek the incantions of Assembly programming? In this economy?!
  Don't you know it is inefficient and fraught with bugs? Don't waste your life
  energy, child. Turn your mind to more pragmatic endeavors, like React."
</p>

<p>
  But you are not so easily deterred. You calmly walk up to the goblin, kiss
  him on the forehead, pat his butt, and send him back to the depths. Where
  exactly do goblins live, anyways? Perhaps an unexpectly cozy and well-stocked
  cave cottage? A question for another day. Also, why are Stack Overflow goblins
  always male? The <a href="https://www.youtube.com/watch?v=8lcUHQYhPTE">insect overlords</a>
  work in mysterious ways.
</p>

<p>
  Yes, 'twas a fitting start to the journey. You pack up your belongings into
  an <a href="https://en.wikipedia.org/wiki/Bindle">old-timey bag on a stick</a>
  and head off to the yellow brick road to Mordor. Today is not a
  day for obeying norms. If you're going to program in Assembly you might as
  well mix some metaphors while you're at it!
</p>

</section>

## Overview

[AVR Assembly]: https://ww1.microchip.com/downloads/en/devicedoc/atmel-0856-avr-instruction-set-manual.pdf

By the end of this tutorial you'll have an Arduino Uno R3 running a program
written in [AVR Assembly] that blinks the Uno's built-in LED (pin 13) on and off.

Kudos to [mhitza](https://gist.github.com/mhitza/8a4608f4dfdec20d3879) for
documenting a path that actually works. On that note, the top search results
on this subject are surprisingly bad.

## Assumptions

I got 

* Arduino Uno R3
* Debian-based Linux computer
* USB-A to USB-B cable
* Bash commands like `cd` and `git`

## Setup

### avra

```
cd /tmp
git clone git@github.com:Ro5bert/avra.git
cd avra
make
cp src/avra ~/avra
```

### avrdude

```
sudo apt-get install avrdude
```

## Conclusion

The [insect overlords](https://www.youtube.com/watch?v=8lcUHQYhPTE) are surely
[watching your career with great interest](https://www.youtube.com/watch?v=67h8GyNgEmA) now.
