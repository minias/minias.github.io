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
? Where do you use GitHub? GitHub.com
? What is your preferred protocol for Git operations on this host? SSH
? Upload your SSH public key to your GitHub account? /Users/minias/.ssh/id_ed25519.pub
? Title for your SSH key: id_ed25519
? How would you like to authenticate GitHub CLI? Login with a web browser

! First copy your one-time code: 3CF4-9423
Press Enter to open https://github.com/login/device in your browser...
✓ Authentication complete.
- gh config set -h github.com git_protocol ssh
✓ Configured git protocol

✓ SSH key already existed on your GitHub account: /Users/minias/.ssh/id_ed25519.pub
✓ Logged in as minias
! You were already logged in to this account
```

## create pr using github cli

```sh
gh pr create --title "New post 20250325" --body "pushing single file without checkou& pull"
```

## 

```sh
gh pr merge <merge_no> --squash --body "my squash commit" --delete-branch
```

