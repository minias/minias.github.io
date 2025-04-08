---
 layout : post
 title : AWS_mariadb_setting_on_the_EC2
 tags: [linux,config]
---

```bash
sudo apt-get update
sudo apt install mariadb-client-core
mysql -u <user> -h <Hostname> -P <Port> -p <db>
```

> ‼ Using the '%' character in your password will result in an error.

```bash
ERROR 1045 (28000): Access denied for user 'user'@'ip' (using password: YES)
```

## mysql create new user

```bash
CREATE database DB;
CREATE USER 'user'@'%' identified with mysql_native_password by 'pw';
GRANT ALL privileges on DB.* TO 'user'@'%';
FLUSH PRIVILEGES;
```

## remote access

> Publicly accessible `Yes`
