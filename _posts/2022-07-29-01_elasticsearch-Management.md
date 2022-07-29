---
layout: post
title: 엘라스틱서치 클러스터 재기동
tags: [elasticsearch]
---

## [Full-cluster restart and rolling restart](https://www.elastic.co/guide/en/elasticsearch/reference/current/restart-cluster.html)

```json

PUT _cluster/settings
{
  "persistent": {
    "cluster.routing.allocation.enable": "primaries"
  }
}

POST /_flush
POST _ml/set_upgrade_mode?enabled=true

```

```sh
sudo systemctl stop elasticsearch.service
sudo -i service elasticsearch stop
kill $(cat pid) #If you are running Elasticsearch as a daemon:
```

```json
GET _cat/health

GET _cat/nodes
```

> Re-enable allocation.

```json
PUT _cluster/settings
{
  "persistent": {
    "cluster.routing.allocation.enable": null
  }
}
GET _cat/health

GET _cat/recovery
POST _ml/set_upgrade_mode?enabled=false

```
