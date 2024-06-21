---
layout: post
title: Linux ssh daemon settings
tags: [shell,config]
---

## Check the status of the enabled port

> Network package installation required when installing Ubuntu for the first time.

```sh
sudo apt install net-tools
```

### Create Port check aliasing Shortening

```sh
echo "alias nt='netstat -antp|grep LISTEN'" >> ~/.bash_aliases
source  ~/.bash_aliases
```

## SSH daemon settings

> changing ssh port

```sh
sudo vi /etc/ssh/sshd_config.d/10-security-sshd-settings.conf
Port 2222
Protocol 2 
Allowusers ubuntu
ListenAddress 0.0.0.0
LoginGraceTime 600
PermitRootLogin no
:wq!

sudo vi /lib/systemd/system/ssh.socket 
[Unit]
Description=OpenBSD Secure Shell server socket
Before=sockets.target ssh.service
ConditionPathExists=!/etc/ssh/sshd_not_to_be_run

[Socket]
ListenStream=2222
Accept=no
FreeBind=yes

[Install]
WantedBy=sockets.target
RequiredBy=ssh.service
:wq

sudo systemctl daemon-reload
sudo systemctl restart ssh
sudo systemctl status ssh
nt
#sudo systemctl restart ssh.service
```
