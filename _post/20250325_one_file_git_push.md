---
layout: post
title: 단일 파일 GIT 푸시 테스트
tags: [talk]
---

## TOC

* TOC
{:toc}

## Push the single file without GIT checkout & pull

```sh
git init
git checkout -b temp_branch
git remote set url git@github.com:minias/minias.github.io.git
touch thisfile.md
git add .
git commit -m "onefile push test"
git push -u origin main
```
