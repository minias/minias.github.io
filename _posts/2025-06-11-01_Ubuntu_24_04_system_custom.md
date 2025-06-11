---
 layout : post
 title : Ubuntu 24.04 system custom
 tags: [linux,config]
---

## disable ModemManager

```bash
sudo systemctl stop ModemManager.service
sudo systemctl disable ModemManager.service
```

## disable packagekitd

```bash
sudo systemctl sotp packagekit.service
sudo systemctl disable packagekit.service
```

## disable multipathd

```bash
sudo systemctl stop multipathd
sudo systemctl disable multipathd
```

## disable Snapd

```bash
sudo snap list
sudo apt remove --purge snapd
sudo apt autoremove --purge snapd
sudo systemctl disable snapd.socket
sudo systemctl disable snapd.service
sudo systemctl disable snapd.seeded.service
sudo rm -rf /var/cache/snapd/
sudo rm -rf ~/snap
```
