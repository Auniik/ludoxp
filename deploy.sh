#!/usr/bin/env sh
# abort on errors
set -e
# build
yarn run build
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m '🧑🏻‍🎤 Deploy 101'
git push -f https://github.com/Auniik/ludoxp.git master:gh-pages
cd -
