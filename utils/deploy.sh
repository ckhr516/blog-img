#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e

git config --global user.name "chen"
git config --global user.email "1130443726@qq.com"

git init
git add utils/filesName/filesName.json
git commit -m "HighLight video"
git push -f https://ckhr516:$GITHUB_TOKEN@github.com/ckhr516/ckhr516.github.io.git main:test # 推送到github