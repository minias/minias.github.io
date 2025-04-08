---
 layout : post
 title : Ubuntu 24.04 LTS ssh Restart
 tags: [linux]
---

```bash
sudo systemctl daemon-reload 
sudo systemctl restart ssh.socket
```
