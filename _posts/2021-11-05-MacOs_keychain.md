---
layout: post
title: MacOs .dmg 배포시 키체인등록
tags: [macos]
---

## mac에 키체인 등록

```bash
xcrun altool --store-password-in-keychain-item [키체인 이름] -u [apple개발자계정] -p [apple 앱 암호]
ex) xcrun altool --store-password-in-keychain-item com.tistory.ms-dev -u ms-dev@tistory.com -p aaaa-bbbb-cccc-dddd

```

## app 디지털 서명

```bash
#> codesign --verbose --timestamp -s "[apple개발자계정]" --options=runtime [app 경로와 파일명]
ex) codesign --verbose --timestamp -s "ms-dev@tistory.com" --options=runtime ~/test.pkg

```

## app 공증받기

```bash
#> xcrun altool --notarize-app --username [apple개발자계정] --password @keychain:[위에서 등록한 키체인 이름] --primary-bundle-id [apple에서 발급받은 bundle id] --file [파일 경로와 파일명]
ex) xcrun altool --notarize-app --username nm-dev@tistory.com --password @keychain:com.tistory.ms-dev --primary-bundle-id com.tistory.ms-dev --file ~/test.pkg
```

## bundle id 발급

- <https://developer.apple.com/account/resources/identifiers/list> 접속
- 개발자 계정으로 로그인
- identifiers 추가
- 생성된 com.xxxx.xxxx 형식의 bundle id 사용하면됨
