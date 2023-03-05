---
layout: base.njk
title: How to program an Arduino Uno in assembly
description: >
  This tutorial shows you how to program an Arduino Uno R3 in AVR Assembly.
  The assembly program that you flash onto the Uno just blinks the built-in
  LED (pin 13) on and off.
tags:
  - blog
date: 2023-02-20
---

# {{title}}

{{date.toLocaleDateString('en-US',
    {year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'})}}

{{description}}

Kudos to [mhitza](https://gist.github.com/mhitza/8a4608f4dfdec20d3879) for
documenting a workflow that actually works.

## Assumptions

If you don't have the following equipment or experience, you may have
a tough time completing this tutorial.

### Equipment

* Arduino Uno R3
* Debian-based Linux laptop
* USB-A to USB-B cable

### Experience

* Proficiency in Linux CLI stuff like `cd`, `git` and `~`
* Proficiency in programming a high-level language like Python
* Familiarity with builing binaries from source

## Setup

### Create the repository directory

```
mkdir ~/uno
touch ~/uno/blink.asm
touch ~/uno/Makefile
```

### Install `avra`

```
sudo apt install avra
```

[assembler]: https://en.wikipedia.org/wiki/Assembly_language#Assembler

`avra` (**AVR** **A**ssembler) will be your [assembler].

### Install `avrdude`

```
sudo apt install avrdude
```

[`avrdude`]: https://github.com/avrdudes/avrdude/

[`avrdude`] (**AVR** **D**ownloader **U**plo**de**r) will be your tool for
flashing your assembled program onto your Uno.

## Create the assembly program

Copy-paste the following code into each respective file.

### `~/uno/blink.asm`

```
# Modified from https://gist.github.com/mhitza/8a4608f4dfdec20d3879
# which is copyrighted by Marius Ghita and licensed under Apache-2.0.

.device ATmega328P
.equ PORTB = 0x05
.equ DDRB  = 0x04

.org 0x0000
    jmp setup

setup:
    sbi DDRB, 5
    clr r16
    jmp main

main:
    tst r16
    brne off
    rjmp on

on:
    sbi PORTB, 5
    ldi r16, 1
    rjmp delay

off:
    cbi PORTB, 5
    clr r16
    rjmp delay

delay:
    ldi  r18, 41
    ldi  r19, 150
    ldi  r20, 128
loop:
    dec  r20
    brne loop
    dec  r19
    brne loop
    dec  r18
    brne loop
    rjmp main
```

I'm an assembly n00b. I can only verify that this program is correct in the
sense that I can see the LED on my Uno blinking on and off. Also when I left
the Uno running overnight nothing blew up.

See [Resources](#resources) to figure out how this code works.

### `~/uno/Makefile`

```
# Modified from https://gist.github.com/mhitza/8a4608f4dfdec20d3879
# which is copyrighted by Marius Ghita and licensed under Apache-2.0.

%.hex: %.asm
	~/uno/avra -fI $<
	if [ -f "*.eep.hex" ]; then rm *.eep.hex; fi
	if [ -f "*.obj" ]; then rm *.obj; fi
	if [ -f "*.cof" ]; then rm *.cof; fi

all: $(patsubst %.asm,%.hex,$(wildcard *.asm))

upload: ${program}.hex
	sudo avrdude -c arduino -p m328p -P /dev/ttyACM0 -b 115200 -U flash:w:$<

.PHONY: all upload
```

## Assemble and flash the program

```
cd ~/uno
# Assumes that the Uno is connected to your Linux computer via the USB-A
# to USB-B cable and is available at /dev/ttyACM0.
make program=blink upload
```

You should see the built-in LED labeled **L** blink on for about 1 second
and then off for about 1 second.

## Conclusion

The [insect overlords](https://www.youtube.com/watch?v=8lcUHQYhPTE) are surely
[watching your (assembly) career with great interest](https://www.youtube.com/watch?v=67h8GyNgEmA)
now.

<h2 id="resources">Resources</h2>

Resources for figuring out how the `blink.asm` code works:

[Programming Arduino Uno (ATmega328P) in assembly]: https://gist.github.com/mhitza/8a4608f4dfdec20d3879
[AVR Instruction Set Manual]: https://ww1.microchip.com/downloads/en/devicedoc/atmel-0856-avr-instruction-set-manual.pdf
[AVR Assembler Reference]: https://ww1.microchip.com/downloads/en/DeviceDoc/40001917A.pdf
[`m328Pdef.inc`]: https://raw.githubusercontent.com/DarkSector/AVR/master/asm/include/m328Pdef.inc
[ATmega328P datasheet]: https://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-7810-Automotive-Microcontrollers-ATmega328P_Datasheet.pdf
[ATmega328P]: https://en.wikipedia.org/wiki/ATmega328
[AVR Delay Loop Calculator]: http://darcy.rsgc.on.ca/ACES/TEI4M/AVRdelay.html
[AVR-Assembly-Tutorial]: http://www.avr-asm-tutorial.net/index.html

* [Programming Arduino Uno (ATmega328P) in assembly]
* [AVR Instruction Set Manual] explains the instructions (e.g. `jmp`, `sbi`,
  `clr`, and so on)
* [AVR Assembler Reference] explains AVR Assembly syntax and keywords (e.g.
  `.device`, `.equ`, `.org`, and so on)
* [`m328Pdef.inc`] is the source of the hardware definitions (e.g. `PORTB` and
  `DDRB`)
* [ATmega328P Datasheet] provides details on how exactly the instructions need
  to be constructed in order to work with the Uno's MCU (the [ATmega328P])
* [AVR Delay Loop Calculator] was the source of the delay and loop code
* [AVR-Assembly-Tutorial] seems like a comprehensive, approachable,
  and delightfully old-school-internet walkthrough of AVR Assembly programming
