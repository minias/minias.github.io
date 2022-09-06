---
layout: post
title: 맥미니 환경 설정
tags: [config]
---

# 맥미니 환경 설정

# **맥 설치 환경**

---

# **맥미니 설치 기본은 brew**

# **설치 폴더 /opt/homebrew**

- Back-end : docker-composer OR local install
- Front-end : Vue-Cli 2 , npm 15.6

```
Home-brew 설치 참고 https://docs.brew.sh/Installation
```

# macOS Requirements

```
 xcode-select --install
```

# hombrew install path /opt/homebrew

```
cd /opt
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
echo "export PATH=/usr/local/opt/bin:$PATH" >> ~/.zshrc

```

# PHP@7.4 install

```
brew install php@7.4
```

# composer install

```
php composer-setup.php --install-dir=bin --filename=composer

```

# Laravel 7.2 install

```
composer global require laravel/installer

```

# Mysql 5.7 Install

```
brew install mysql@5.7
echo "export PATH=/usr/local/opt/mysql@5.7/bin:$PATH" >> ~/.mysql_rc
echo "source ~/.mysql_rc" >> ~/.zshrc
source ~/.mysql_rc
brew services start mysql@5.7

```

# Nginx 2.x Install

```
brew install nginx
```

# Redis 6.2 Install

```
brew install redis
# [시작]
brew services start redis
# [중지]
brew services stop redis
# [재시작]
brew services restart redis

vi
#  [포트번호 변경]
port  6379
#  [주석제거하고 패스워드 입력]
requirepass password
# [외부에서 접근 가능하도록 IP 추가 가능]
bind 127.0.0.1 192.168.0.101

```

# Vue-Cli Install

```
npm install -g @vue/cli
# OR
yarn global add @vue/cli
vue --version

```

# Valet Install -

```
brew update
brew install php

composer global require laravel/valet
valet install
```

# **맥 도커 설치**

---

- [Docker Desktop RC 2 Down](https://desktop.docker.com/mac/stable/arm64/62345/Docker.dmg)
- [Docker Desktop 3.3.1-2021-04-15](https://desktop.docker.com/mac/stable/arm64/Docker.dmg)

참고 : [애플 도커 릴리즈 정보](https://docs.docker.com/docker-for-mac/apple-m1/)
