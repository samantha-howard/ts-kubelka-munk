#! /usr/bin/env sh

# abort on error
set -e

cd real-color-mixing
npm run build
# cd into the build directory
cd www

# create a new git repo
git init
git add -A
git commit -m "deploy"

# push the content to the github pages branch the new repo
git push -f https://github.com/samantha-howard/ts-kubelka-munk.git main:gh-pages

cd - 
