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
// `section` seems to be a section of memory. `text` seems to
// be a keyword for program code. I think we're just setting aside space
// for the program code.
// https://stackoverflow.com/a/60403929
// https://stackoverflow.com/a/9809711
// https://sourceware.org/binutils/docs/as/Section.html
// https://sourceware.org/binutils/docs/as/Text.html
.section .text._start

// Presumably `L_parking_loop` is also part of `_start` which is why it
// loops indefinitely.
_start:
	// Infinitely wait for events (aka "park the core").
.L_parking_loop:
        // wait for event is an Arm assembly opcode
        // https://developer.arm.com/documentation/ddi0602/2022-12/Base-Instructions/WFE--Wait-For-Event-
	wfe
        // branch is also an Arm opcode
        // https://developer.arm.com/documentation/ddi0602/2022-12/Base-Instructions/B--Branch-
	b	.L_parking_loop

// Couldn't find this one on Arm site...
.size	_start, . - _start
// Mark `_start` as a function rather than an object
// https://developer.arm.com/documentation/101754/0619/armclang-Reference/armclang-Integrated-Assembler/Type-directive
.type	_start, function
// Mark `_start` as a global symbol
// https://developer.arm.com/documentation/101754/0619/armclang-Reference/armclang-Integrated-Assembler/Symbol-binding-directives
// https://developer.arm.com/documentation/107829/0100/Calling-an-assembly-function-from-C-code
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
