---
 layout : post
 title : Ubuntu 24.04 redis-server custom setting
 tags: [linux,config]
---

```bash
sudo vi /etc/redis/redis.conf
daemonize no
port 19379
bind 0.0.0.0
requirepass <비밀번호>
```

```bash
sudo systemctl stop redis-server
sudo systemctl disable redis-server
sudo systemctl stop redis
sudo systemctl disable redis
```

```shell
sudo vi /etc/systemd/system/redis-custom.service

#/etc/systemd/system/redis-custom.service
[Unit]
Description=Custom Redis Server
After=network.target

[Service]
ExecStart=/usr/bin/redis-server /etc/redis/redis.conf
ExecStop=/usr/bin/redis-cli -p 19379 shutdown
Restart=always
User=redis
Group=redis

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable redis-custom
sudo systemctl start redis-custom
sudo systemctl status redis-custom
```
