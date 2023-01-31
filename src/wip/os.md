---
layout: 'base.njk'
title: 'TODO'
description: 'TODO'
---

# {{title}}

## Summary

TODO

## Logistics

[`ac3ea0e616ccf1da6ac83206490e50034ee35072`]: https://github.com/rust-embedded/rust-raspberrypi-OS-tutorials/tree/ac3ea0e616ccf1da6ac83206490e50034ee35072

Working off commit [`ac3ea0e616ccf1da6ac83206490e50034ee35072`]

All links likewise point to their archived version

```
cd ~/rust-raspberrypi-OS-tutorials
git checkout ac3ea0e616ccf1da6ac83206490e50034ee35072
rm -rf .git
```

## Chapter 1

`//01_wait_forever/src/_arch/aarch64/cpu/boot.s`

[assembly language]: https://web.archive.org/web/20230130145752/https://en.wikipedia.org/wiki/Assembly_language

The `.s` file extension indicates [assembly language] source code.

```
// SPDX-License-Identifier: MIT OR Apache-2.0
//
// Copyright (c) 2021-2022 Andre Richter <andre.o.richter@gmail.com>

//--------------------------------------------------------------------------------------------------
// Public Code
//--------------------------------------------------------------------------------------------------
.section .text._start

//------------------------------------------------------------------------------
// fn _start()
//------------------------------------------------------------------------------
_start:
	// Infinitely wait for events (aka "park the core").
.L_parking_loop:
	wfe
	b	.L_parking_loop

.size	_start, . - _start
.type	_start, function
.global	_start
```

https://web.archive.org/web/20230112183400/https://cs.lmu.edu/~ray/notes/gasexamples/

```
# ----------------------------------------------------------------------------------------
# gcc -c hello.s && ld hello.o && ./a.out
# https://cs.lmu.edu/~ray/notes/gasexamples/
# ----------------------------------------------------------------------------------------

        .global _start

        .text
_start:
        # write(1, message, 13)
        mov     $1, %rax                # system call 1 is write
        mov     $1, %rdi                # file handle 1 is stdout
        mov     $message, %rsi          # address of string to output
        mov     $13, %rdx               # number of bytes
        syscall                         # invoke operating system to do the write

        # exit(0)
        mov     $60, %rax               # system call 60 is exit
        xor     %rdi, %rdi              # we want return code 0
        syscall                         # invoke operating system to exit
message:
        .ascii  "Hello, world\n"
```
