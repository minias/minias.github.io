---
layout: post
title: Creating PR using github cli
tags: [shell]
---

## TOC

* TOC
{:toc}

## Install github cli in MacOs


```sh
brew install gh
#upgrade
brew upgrade gh
```

## Github Login

```sh
gh auth login
select host : GitHub.com
```

## create pr using github cli

```sh
gh pr create --title "New post 20250325" --body "pushing single file without checkou& pull"
```

## 

```sh
gh pr merge <merge_no> --squash --body "my squash commit" --delete-branch
```

