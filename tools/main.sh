#!/bin/bash
SCRIPT="tools/build.js";
if [ -d 'out' ]; then rm -rf out; fi;
mkdir out;
mkdir out/blog;
mkdir out/portfolio;
mkdir out/media;
cp media/* out/media/;
if [ "$DEBUG" = true ]; then node --inspect-brk $SCRIPT; else node $SCRIPT; fi;
