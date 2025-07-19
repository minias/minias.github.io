---
 layout : post
 title : TCP Initial Window 14KB
 tags: [tech,tcp]
---

## 14KB의 비밀??

누군가 링크드인에 14KB의 비밀이라고 글을 올렸는데,
1패킷 사이즈는 페이로드 중 데이터 사이즈만 1460B 인것은 이해 하겠다.

그런데, 왜 하필 10패킷일까?
표준은 아니지만 **[RFC 6928 - datatracker](https://datatracker.ietf.org/doc/rfc6928/)** 근거로 나온 이야기였다.

특이한것은 구글 개발자 주도로 문서가 제안되어있다.

**챗지피티에게 물어봐도 처음에는 동일하게 맞는것 처럼 이야기 했지만, 깊이 질문하면 아래 내용이 나온다.**

## 결론

> [RFC 6928 - datatracker](https://datatracker.ietf.org/doc/rfc6928/) 문서를 근거

## 📦 TCP 초기 Congestion Window(CWND) 정리

### ✅ 개요

TCP 연결 시작 시, 네트워크 혼잡을 피하기 위해 처음부터 모든 데이터를 보내지 않고,
**Congestion Window (CWND)** 라는 개념을 통해 전송량을 조절합니다.
초기 CWND 값은 TCP 표준에서 정의되어 있으며, 이 값은 **최초 전송량을 결정하는 중요한 성능 요소**입니다.

---

### 🧾 공식 표준에서의 초기 CWND

#### 📘 RFC 3390 – Increasing TCP’s Initial Window (2002)

- **초기 CWND 값:** `min (4*MSS, max(2*MSS, 4380 bytes))`
- 일반적으로 **3 MSS ≈ 4380 bytes** 수준
- **기존 1 MSS에서 최대 4 MSS로 상향**한 표준
- RFC 링크: [RFC 3390](https://datatracker.ietf.org/doc/html/rfc3390)

#### 📘 RFC 5681 – TCP Congestion Control (2009)

- **Congestion Control의 핵심 표준**
- **RFC 3390의 초기 CWND 정의를 그대로 따름**
- RFC 링크: [RFC 5681](https://datatracker.ietf.org/doc/html/rfc5681)

#### 🔢 MSS 기준 예시 (MTU 1500 기준)

| 항목 | 값 |
|------|-----|
| MTU | 1500 bytes |
| TCP/IP 헤더 | 40 bytes |
| MSS (MTU - 헤더) | 1460 bytes |
| 3 MSS | `3 × 1460 = 4380 bytes` ← **공식 표준 초기 전송량** |

---

### 📄 RFC 6928: Increasing TCP's Initial Window

🔗 [RFC 6928: Increasing TCP's Initial Window](https://datatracker.ietf.org/doc/html/rfc6928)

이 문서는 **표준(Standards Track)** 이 아닌, 현재 **Experimental (실험적)** 상태의 RFC입니다.

---

### 📌 RFC 6928의 상태 요약

| 항목 | 설명 |
|------|------|
| **문서 상태** | Experimental |
| **카테고리** | **Experimental RFC** |
| **발행일** | 2013년 4월 |
| **Author** | Google 소속 개발자들이 주도 (특히 TCP 튜닝과 관련해 많은 기여) |
| **RFC 카테고리 링크** | [RFC 6928 - datatracker](https://datatracker.ietf.org/doc/rfc6928/) |

> Experimental은 “실험적으로 적용해보자”는 제안이며, **Internet Standard (표준)**로 간주되지 않습니다. 하지만 **많은 실제 시스템(Linux, Windows, Chrome, nginx 등)** 에서 이미 이 방식을 **사실상의 표준(de facto standard)**처럼 채택하고 있습니다.

---

### 🚀 실제 적용 사례

| 시스템 | 초기 CWND |
|--------|-----------|
| **Linux (3.2 이상)** | 10 |
| **Chrome 브라우저** | 10 |
| **Google Frontend 서버** | 10 |
| **nginx (default)** | 10 |
| **Cloudflare / AWS 등 CDN** | 10 이상으로 튜닝 |

---

### 🔍 왜 아직 "표준"이 아닌가?

- 일부 네트워크 환경 (예: 저속 위성망, 오래된 IoT 장비 등)에선 10개의 패킷이 **초기 혼잡을 유발**할 수 있다는 우려가 있음.
- 따라서 보편 강제 적용은 부담이 있어 "실험적"으로 분류 중.
- 하지만 **대다수의 현대 네트워크에서는 문제 없다고 판단되어 널리 채택**되고 있음.
- **RFC 6928는 Experimental이지만, 사실상 대세 구현 표준**
- **IETF 공식 Internet Standard는 아님**
- 하지만 **대부분의 운영체제, 브라우저, 클라우드에서 이미 적용 중**

따라서 실무에서는 이 문서를 기준으로 **14KB 룰을 적용해도 충분히 의미 있고, 실제 성능 최적화에 직결됩니다.**

### 🧪 실무에서의 초기 CWND – RFC 6928 (Experimental)

- **초기 CWND 값을 10 MSS로 상향 제안**
- 전송량: `10 × 1460 = 14600 bytes ≈ 14KB`
- **문서 상태:** `Experimental RFC` (공식 표준 아님)

### 📌 적용 사례

| 시스템/브라우저 | 초기 CWND 값 |
|----------------|--------------|
| Linux (3.2+) | 10 |
| Chrome | 10 |
| Google Frontend | 10 |
| nginx | 10 |
| Cloudflare | 10 (또는 더 높음으로 튜닝 가능) |

---

### 🧠 정리

| 항목 | 값 | 설명 |
|------|-----|--------|
| **공식 표준 (RFC 3390/5681)** | 3 MSS | 약 4380 bytes |
| **실무 구현 (RFC 6928)** | 10 MSS | 약 14,600 bytes, Experimental 상태 |
| **현실 적용** | 대부분 10 MSS | 성능 향상 목적, 널리 채택됨 |

---

### 🔗 참고 링크

- [RFC 3390 - Increasing TCP’s Initial Window](https://datatracker.ietf.org/doc/html/rfc3390)
- [RFC 5681 - TCP Congestion Control](https://datatracker.ietf.org/doc/html/rfc5681)
- [RFC 6928 - Increasing TCP's Initial Window](https://datatracker.ietf.org/doc/html/rfc6928)
