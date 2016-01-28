#!/bin/bash

git checkout master
git branch -D gh-pages
git checkout -b gh-pages
git push -f origin gh-pages
