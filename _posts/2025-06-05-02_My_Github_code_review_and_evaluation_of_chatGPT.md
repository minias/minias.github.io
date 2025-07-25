---
layout: post
title: My Github code review and evaluation of chatGPT
tags: [ai,chatgpt]
---

## 개인적 견해

> 테스트코드의 경우 자동화로 테스트 이후 테스트 결과만 docs/폴더에 저장하는 형태를 사용합니다.
> 즉,실제 github에는 없지만, Makefile등에 자동화 코드가 있는것으로 예측을 해야함에도, 그러한 부분이 아쉽습니다.
> 따라서 디테일한 부분은 ChatGPT가 놓치고 있는 것 같습니다.
> 또한, PSudo Code 판별하는 능력이 떨어지는 것 같습니다.
>
> 그럼에도 본인의 Github Repositorys를 평가하여 품질 향상 시키는 능력을 키우기에 도움이 됩니다.

## 🔍 분석 대상 개요

- 총 공개 레포지토리 수: 38개+
- 활동 시작: 약 10년 이상
- 기술 스택: Go, Dart (Flutter), JavaScript, TypeScript, Solidity, Python, HTML/CSS 등
- 대표 프로젝트:
  - ticker_chart – 실시간 티커 금융 앱 (Flutter)
  - p2p-console – P2P 금융 관리 도구
  - cpeso_api – 핀테크 백엔드 (Go + Echo + MariaDB)
  - cpeso_dapp – 블록체인 DApp
  - flutter-binance-p2p – Binance P2P 데이터 분석

## 🧠 코드 품질 평가 항목

| **항목**              | **평가**    | **설명**                                                                                             |
| ------------------- | --------- | -------------------------------------------------------------------------------------------------- |
| **1. 코드 일관성**       | ✅ 우수      | Go, Dart, TypeScript 등 다양한 언어에서 각 언어의 스타일 가이드를 일관되게 준수하고 있음.                                       |
| **2. 폴더/파일 구조**     | ✅ 우수      | 클린 아키텍처 기반으로 `core`, `data`, `infrastructure`, `interfaces` 등 구조적 분리가 잘 되어 있음.                     |
| **3. 커밋 메시지**       | ⚠️ 보통     | 기능 중심의 커밋이 많으나, 간단한 메시지나 `wip`, `update` 등 의미 불명확한 메시지도 일부 존재함.                                    |
| **4. 문서화 수준**       | ⚠️ 보통\~우수 | 대부분 `README.md`가 있으며 일부는 상세하나, 대부분 프로젝트는 최소 수준의 문서만 제공.                                            |
| **5. 테스트 코드 작성**    | ⚠️ 부분적    | Go에서 `*_test.go`는 일부 존재하지만 전체적으로 테스트 커버리지는 낮고 Flutter/TS 프로젝트에는 미작성.                               |
| **6. 타입 안정성**       | ✅ 우수      | TypeScript, Dart에서 명확한 타입 선언과 `enum`, `interface`, `typedef` 사용이 잘 되어 있음. Go도 에러 처리에서 타입 구조가 안정적임. |
| **7. 코드 재사용성**      | ✅ 우수      | `core` 폴더로 공통 유틸, 에러코드, 응답 파서 등을 분리함. 커스텀 훅/유틸 등 재사용성을 고려한 구조 다수.                                  |
| **8. 실용 프로젝트 완성도**  | ✅ 우수      | 실제 상용 환경을 전제로 한 프로젝트 구성과 구현이 뛰어남 (e.g., TRC20 송금 전체 과정 구현, 실시간 티커 차트 등).                           |
| **9. 최신 기술 사용 여부**  | ✅ 적극적     | Echo v4, Flutter Provider, Supabase, REST API, Binance/Upbit/Coinbase 연동 등 최신 기술을 빠르게 적용.          |
| **10. 코드 주석 및 가독성** | ⚠️ 보통     | 함수명과 구조로 의미 전달은 잘 되지만, 전체적으로 주석이 적고 고수준 로직에 대한 설명 부족.                                              |

## 📈 종합 평가

| 항목          | 점수 (5점 만점)    |
| ----------- | ------------- |
| 코드 품질 전체 점수 | **4.4 / 5.0** |

## 🧾 분석 요약

- 강점
  - 실무형 프로젝트에 특화 (금융, 블록체인, API 백엔드)
  - Go와 Flutter 기반의 클린 아키텍처 지향
  - REST API 설계 및 구조적 에러 처리, 타입 안정성에 매우 강함
- 보완점
  - 테스트 코드의 커버리지 향상 필요
  - 커밋 메시지 컨벤션 적용 권장
  - 문서화 강화를 통해 팀 내 공유성/협업력 제고 가능

## ✅ 개선 제안

1. 프로젝트별 README 고도화
     - 예: 실행 방법, 아키텍처 다이어그램, 예시 API 요청 등
1. 테스트 코드 확대
    - 단위 테스트 + 통합 테스트 자동화 (특히 API 레이어)
1. Conventional Commit 활용
    - 예: feat:, fix:, refactor: 등으로 커밋 정돈

## 종합 개발 역량 요약

> 🎯 실전 개발력이 매우 높은 풀스택 개발자 (특히 Go/Flutter/블록체인/금융 도메인에 특화)
> 클린 아키텍처, 명확한 책임 분리, RESTful API 구성 능력은 상급 수준이며, 실무 지향 프로젝트 중심의 개발력이 돋보입니다.
