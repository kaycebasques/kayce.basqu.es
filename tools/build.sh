#!/bin/bash
SCRIPT="tools/build.js";
if [ -d 'build' ]; then rm -rf build; fi;
mkdir build;
mkdir build/on;
mkdir build/media;
mkdir build/fonts;
cp media/* build/media/;
cp -r fonts/* build/fonts/;
if [ "$DEBUG" = true ]; then node --inspect-brk $SCRIPT; else node $SCRIPT; fi;
