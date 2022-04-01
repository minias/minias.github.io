---
layout: post
title: Github Action CI/CD
tags: [config]
---

## Github Action을 이용하여 원격서버에 자동 배포

> setting 탭의 settings -> secrets 메뉴에 Key=Value 형태로 설정할수 있다.
> 또는, ssh publish_key를 등록하여 자동화 시킬수 있다. 

### 사용된 패키지 

- [https://github.com/appleboy/ssh-action](appleboy/ssh-action)
- [https://github.com/appleboy/scp-action](appleboy/scp-action)

```yml
# .github/workflow/main.yml
name: build # Workflow 이름
on: # devolop Branch에서 push 이벤트가 일어났을 때만 실행
  push:
    branches: [develop]

jobs:
  build:
    runs-on: ubuntu-18.04 # Job 가상환경 인스턴스
    steps: # Steps
      - name: Checkout source code. # 레포지토리 체크아웃
        uses: actions/checkout@develop

      - name: Cache node modules # node modules 캐싱
        uses: actions/cache@v1
        with:
          path: node_modules
          key: $ \{\{ runner.OS }}-build-$\{\{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            $\{\{ runner.OS }}-build-
            $\{\{ runner.OS }}-

      - name: Install Dependencies # 의존 파일 설치
        run: npm install

      - name: Build # React Build
        run: npm run build

      # appleboy/ssh-action를 이용하여 서버에서 기존의 dist 폴더를 삭제한다.
      - name: executing remote ssh commands using password
        uses: appleboy/ssh-action@develop
        with:
          host: $\{\{ secrets.HOST }}
          username: $\{\{ secrets.USERNAME }}
          password: $\{\{ secrets.PASSWORD }}
          port: $\{\{ secrets.PORT }}
          script: |
            rm -rf ~/bvap-console-dev/dist

      # appleboy/scp-action를 이용하여 github에서 dist 폴더를 서버로 복사한다.
      - name: copy file via ssh password
        uses: appleboy/scp-action@develop
        with:
          host: $\{\{ secrets.HOST }}
          username: $\{\{ secrets.USERNAME }}
          password: $\{\{ secrets.PASSWORD }}
          port: $\{\{ secrets.PORT }}
          source: 'dist'
          target: '~/bvap-console-dev/dist'
```
