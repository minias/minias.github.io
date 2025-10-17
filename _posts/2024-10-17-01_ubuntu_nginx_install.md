---
 layout : post
 title : Ubuntu24.04 Nginx install + ssl
 tags: [linux,config]
---

## apt install

```bash
sudo apt list --upgradable
sudo apt update
sudo apt upgrade -y
sudo apt install nginx -y
sudo apt install certbot python3-certbot-nginx -y
```

## nginx custom config

```bash
sudo cat > /etc/nginx/sites-available/host.com

server {
    listen 80;
    server_name host.com;

    # HTTPS로 리디렉션
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name host.com;

    ssl_certificate     /etc/letsencrypt/live/host.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/host.com/privkey.pem;
    ssl_protocols       TLSv1.2 TLSv1.3;
    ssl_ciphers         HIGH:!aNULL:!MD5;

    # 프록시 설정
    location / {
        proxy_pass         http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header   X-Real-IP $remote_addr;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection 'upgrade';
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
    }
    # 로그
    access_log /var/log/nginx/host_access.log;
    error_log  /var/log/nginx/host_error.log;
}
```

## nginx systemd setting

```bash
    sudo nginx -t
    sudo systemctl restart nginx
    sudo certbot --nginx
    sudo certbot renew --dry-run
```
