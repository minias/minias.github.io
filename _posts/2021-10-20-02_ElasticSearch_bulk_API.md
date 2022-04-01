---
layout: post
title: ElasticSearch_bulk_API
tags: [elasticsearch]
---

```json
{"index":{"_index":"test","_id":"1"}}
{"field":"value one"}
{"index":{"_index":"test","_id":"2"}}
{"field":"value two"}
{"delete":{"_index":"test","_id":"2"}}
{"create":{"_index":"test","_id":"3"}}
{"field":"value three"}
{"update":{"_index":"test","_id":"1"}}
{"doc":{"field":"value two"}}
```
> 일반적인 파일을 읽어서 벌크 인서트

```bash
$ curl -XPOST "http://localhost:9200/_bulk" -H 'Content-Type: application/json' --data-binary @bulk.json
```

> 유저/암호 기반 사용 (특문때문에 싱글쿼터를 사용)

```bash
$ curl -u 'user/Password!' -XPOST "http://localhost:9200/_bulk" -H 'Content-Type: application/json' --data-binary @bulk.json
 ```

