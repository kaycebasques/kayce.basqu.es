---
layout: 'base.njk'
title: 'How to program an Arduino Uno in Assembly'
description: 'TODO'
---

# {{title}}

[Kathleen Booth]: https://en.wikipedia.org/wiki/Kathleen_Booth
[the Transcend]: https://en.wikipedia.org/wiki/A_Fire_Upon_the_Deep#Setting

Today you woke up with the inexplicable urge to program your Arduino Uno in
Assembly. Who knows why. Perhaps you accidentally stepped on the grave of
[Kathleen Booth] and she has come back from [the Transcend] to haunt you.

Proudly you announce to your friends and family: "Loved ones! Today I must leave
you. I must embark on a journey. I shall return to you with an Arduino Uno programmed
purely in... *Assembly*." They mostly just smile at you in quiet, loving, supportive
confusion, thinking to themselves: "Arduino? Assembly? It must be one of those
computer things. Maybe some sort of Italian Minecraft? I never could figure out
what `[[YOUR_NAME]]` does for work..."

Suddenly the lights flicker. The sky turns dark. An AMBER alert goes off on your
phone. You hear cackling in the distance. It's getting louder and closer. The
closet door creaks open. A goblin! And not just any old garden-variety goblin. 
A goblin from the depths of Stack Overflow! He looks at you and yells: "You
FOOL! You dare learn Assembly? In this economy?! It is inefficient and fraught
with bugs. Don't waste your life energy, child. Turn your mind to more pragmatic
endeavors, like Rust." 

But you are not so easily deterred. You calmly walk up to the goblin, kiss
him on the forehead, turn him around, pat his butt, and send him back to the
depths. Where exactly do goblins live, anyways? Perhaps an unexpectly cozy and
well-stocked cave cottage? A question for another day.

Yes, 'twas a fitting start to the journey. You pack up your belongings into
an [old-timey bag on a stick](https://en.wikipedia.org/wiki/Bindle) and go
whistling along on the yellow brick road to Mordor. Today is not a day for
obeying norms. If you're going to program in Assembly you might as well mix
some metaphors while you're at it!

## Overview

[AVR Assembly]: https://ww1.microchip.com/downloads/en/devicedoc/atmel-0856-avr-instruction-set-manual.pdf

OK, that intro was fun to write, but let's talk plainly now. By the end of this
tutorial you'll have an Arduino Uno R3 running a program written in [AVR Assembly]
that blinks the Uno's built-in LED (pin 13) on and off.

Kudos to [mhitza](https://gist.github.com/mhitza/8a4608f4dfdec20d3879) for
trailblazing a path that actually works. On that note, the top search results
on this subject are surprisingly bad.

## Assumptions

* Arduino Uno R3
* Debian-based Linux computer
* USB-A to USB-B cable

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
