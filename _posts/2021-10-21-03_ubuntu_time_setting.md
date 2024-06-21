---
 layout : post
 title : Ubuntu22.04 time setting
 tags: [linux,config]
---

```bash
timedatectl list-timezones | grep Asia/M
sudo timedatectl set-timezone 'Asia/Manila'
date
```
