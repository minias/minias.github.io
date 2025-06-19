---
 layout : post
 title : Ubuntu 24.04 time setting
 tags: [linux,config]
---

```bash
timedatectl list-timezones | grep Asia/M
# Manila +8:00
sudo timedatectl set-timezone 'Asia/Manila'
# Seoul +9:00
sudo timedatectl set-timezone 'Asia/Seoul'
date
```
