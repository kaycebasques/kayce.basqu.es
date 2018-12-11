#!/bin/bash
SCRIPT="tools/build.js";
if [ -d 'build' ]; then rm -rf build; fi;
mkdir build;
mkdir build/blog;
mkdir build/portfolio;
mkdir build/media;
mkdir build/fonts;
cp src/static/media/* build/media/;
cp -r src/static/fonts/* build/fonts/;
if [ "$DEBUG" = true ]; then node --inspect-brk $SCRIPT; else node $SCRIPT; fi;
