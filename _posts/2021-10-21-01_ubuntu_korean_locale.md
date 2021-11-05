---
 layout : post
 title : Ubuntu 한글 설정
---

```bash
sudo apt-get install locales
#ko_KR.UTF-8 #UTF-8 한글설정 
#ko_KR.EUC-KR #EUC-KR 한글설정
sudo locale-gen ko_KR.UTF-8
export LC_ALL=ko_KR.UTF-8
```
