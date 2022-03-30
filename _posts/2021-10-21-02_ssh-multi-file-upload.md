---
 layout : post
 title : ssh-auto-login 이용한 ssh 멀티파일 업로드/다운로드
 tags: [shell]
---

```bash
#/bin/bash
if [ -z “$1”]
then
  echo “자동배포 파일이 선택 안됨.”;exit -1;
fi

if [ -z “$2″]
then
  WebLocalIP=ServerIP #선언 안되면 기본적으로 쓴다.
else
  WebLocalIP=$1 #선언되어있다면 가져다 쓴다.
fi

while read line
do
  IP=$line
  while read line
  do
    echo $IP.”:”.$line
  done < $2
done < $1
```
