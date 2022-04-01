---
layout: post
title: geojson 파일
tags: [tech]
---

## Github Action CD/CD

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
          key: ${{ runner.OS }}-build-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.OS }}-build-
            ${{ runner.OS }}-

      - name: Install Dependencies # 의존 파일 설치
        run: npm install

      - name: Build # React Build
        run: npm run build

      # 서버에서 기존의 dist 폴더를 삭제한다.
      - name: executing remote ssh commands using password
        uses: appleboy/ssh-action@develop
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          password: ${{ secrets.PASSWORD }}
          port: ${{ secrets.PORT }}
          script: |
            rm -rf ~/bvap-console-dev/dist

      # github에서 dist	폴더를 서버로 복사한다.
      - name: copy file via ssh password
        uses: appleboy/scp-action@develop
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          password: ${{ secrets.PASSWORD }}
          port: ${{ secrets.PORT }}
          source: 'dist'
          target: '~/bvap-console-dev/dist'
```
