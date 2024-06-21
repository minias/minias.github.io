---
layout: post
title: Installing the Redis on the AWS EC2[Ubuntu 24.04]
tags: [shell,config]
---

## Installing the Redis on the Ubuntu 24.04

```sh
sudo apt-get update
sudo apt-get -y install redis-server
```

### Change Redis settings

```sh
sudo vim /etc/redis/redis.conf

# 전역 접근 허용
bind 0.0.0.0
# maxmemory-policy를 allkeys-lru로 설정하여 오래된 키부터 삭제되도록 한다.
maxmemory-policy allkeys-lru
# 접근 패스워드 필요
requirepass `{PASSWORD}`
# 시스템 메모리 최대 클라수 정의(예시)
# 300byte*1000 = 300Kb 
# 최대 3만을 넘기지 말아야한다.
maxclients 1000
```

### Memory overcommit setting

```sh
# 메모리 사용량이 허용량을 초과할 경우, overcommit을 처리하는 방식 결정하는 값을 "항상"으로 변경
sudo sysctl vm.overcommit_memory=1
sudo echo "vm.overcommit_memory=1" >> /etc/sysctl.conf 
# 페이지 크기를 10MB로 변경
sudo sysctl -w vm.nr_hugepages=10240
sudo echo "vm.nr_hugepages = 10240"  >> /etc/sysctl.conf 

#check 
sudo sysctl -a | grep vm

# 서버 소켓에 Accept를 대기하는 소켓 개수 파라미터를 변경
sudo sysctl -w net.core.somaxconn=1024
sudo echo "net.core.somaxconn=1024" >> /etc/sysctl.conf 
#check 
sudo sysctl -a | grep somaxconn

```

### ubuntu22.04LTS permission issue

```sh
sudo chown -R redis:redis /var/log/redis
sudo chmod -R u+rwX,g+rwX,u+rx /var/log/redis
sudo chmod +r /etc/redis/redis.conf
```

## Redis server start

```sh
sudo systemctl start redis-server.service
```

## Redis Remote Access

```sh
redis-cli -h 1.1.1.1 -p 6379 -a 'password'
```
