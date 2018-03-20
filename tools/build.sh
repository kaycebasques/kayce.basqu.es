#!/bin/bash
SCRIPT="tools/build.js";
if [ -d 'build' ]; then rm -rf build; fi;
mkdir build;
mkdir build/blog;
if [ "$DEBUG" = true ]; then
  node --inspect-brk $SCRIPT;
else
  node $SCRIPT;
fi
