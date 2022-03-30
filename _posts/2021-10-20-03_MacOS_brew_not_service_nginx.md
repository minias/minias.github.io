---
layout: post
title: nginx는 왜 일반계정으로 동작하지 못하는가?
tags: [tech]
---

## MacOS brew service 관련

## nginx는 왜 일반계정으로 동작하지 못하는가?

> 왜냐하면 알려진 80포트를 사용하려고 하기때문에 루트 권한을 요구한다.

- [S.O.F 답변](https://stackoverflow.com/a/41467381)

## brew services 상태 unknown 상황해결?

> MacOs 권한 정책상 루트권한의 LaunchAgents의 PLIST 위치가 제한된다.

```zsh
launchctl unload ~/Library/LaunchAgents/homebrew.mxcl.nginx.plist
sudo mv ~/Library/LaunchAgents/homebrew.mxcl.nginx.plist /Library/LaunchDaemons/
sudo launchctl load -w /Library/LaunchDaemons/homebrew.mxcl.nginx.plist

sudo brew services [list]
```

### 맥미니의 경우

```sh
$brew services

Name               Status  User   Plist
dnsmasq            unknown root   /Library/LaunchDaemons/homebrew.mxcl.dnsmasq.plist
elasticsearch-full started minias /Users/minias/Library/LaunchAgents/homebrew.mxcl.elasticsearch-full.plist
emacs              stopped
mysql@5.7          started minias /Users/minias/Library/LaunchAgents/homebrew.mxcl.mysql@5.7.plist
nginx              unknown root   /Library/LaunchDaemons/homebrew.mxcl.nginx.plist
php@7.4            started minias /Users/minias/Library/LaunchAgents/homebrew.mxcl.php@7.4.plist
redis              started minias /Users/minias/Library/LaunchAgents/homebrew.mxcl.redis.plist
unbound            stopped

$ sudo brew services

Name               Status  User   Plist
dnsmasq            started root   /Library/LaunchDaemons/homebrew.mxcl.dnsmasq.plist
elasticsearch-full unknown minias /Users/minias/Library/LaunchAgents/homebrew.mxcl.elasticsearch-full.plist
emacs              stopped
mysql@5.7          unknown minias /Users/minias/Library/LaunchAgents/homebrew.mxcl.mysql@5.7.plist
nginx              started root   /Library/LaunchDaemons/homebrew.mxcl.nginx.plist
php@7.4            unknown minias /Users/minias/Library/LaunchAgents/homebrew.mxcl.php@7.4.plist
redis              unknown minias /Users/minias/Library/LaunchAgents/homebrew.mxcl.redis.plist
unbound            stopped
```
