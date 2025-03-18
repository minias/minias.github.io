---
layout: post
title: BlockChain BMT
tags: [blockchain,dlt,dag,bmt]
---

## 필요사항

* 다중 코인 지원 가능 (Cpeso, CBAT, ETC)
  * 토큰 지원 가능 (수수료,리워드 등)
* 중앙 제어가능 메인넷
* DLT 방식의 private net
* 다중 게이트 방식 ( 메인넷의 외부 API) 엔트리포인트
* 수수료 제어 기능
* 네트워크 병목 방어 기능
* 외부 공격 대비 기능
* 사용량에 따른 노드 데이터 증가 대비
* 전송/교환/게이트/유저/정산/입금/지급/보증 등의 정책 필요

|이름|계열|언어|합의|백서|기타|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 비트코인    | BTC    | [C++](https://github.com/bitcoin/bitcoin) | PoW |[백서](https://bitcoin.org/bitcoin.pdf) | |
| 라이트닝    | BEP-L2 | [Go](https://github.com/lightningnetwork/lnd) | PoW | [백서](https://lightning.network/lightning-network-paper.pdf) | 비트코인 다중레이어 |
| 이더리움    | ETH    | [Go](https://github.com/ethereum/go-ethereum) | PoS | [백서](https://ethereum.org/ko/whitepaper) | |
| 코스모스    | ETH-L2 | [Go](https://github.com/cosmos/mainnet) | mPoS | [백서](https://v1.cosmos.network/resources/whitepaper) | 테터민트 베이스 |
| 폴리곤      | ETH-L2 | [Go](https://github.com/maticnetwork/bor) | PoS | [백서](https://polygon.technology/papers/pol-whitepaper) | |
| 옵티미즘    | ETH-L2 | [Go](https://github.com/ethereum-optimism/optimism) | PoS | [백서](https://docs.optimism.io/) | |
| 아비트럼    | ETH-L2 | [Go](https://github.com/OffchainLabs/nitro) | PoS | [백서](https://docs.prylabs.network/docs/getting-started) | Nitro |
| 메타디움    | ETH-L2 | [Go](https://github.com/METADIUM/go-metadium) | PoS | [백서](https://metadium.com/Whitepaper) | |
| 위믹스      | ETH-L2 | [Go](https://github.com/wemixarchive/go-wemix) | [SPoA][2] | [백서]() | |
| 클레이튼    | ETH-L2 | [Go](https://github.com/klaytn/klaytn) | PoS | [백서]() | |
| 아이오타    | ETH-L2 | [Go](https://github.com/iotaledger/iota-core) | PoS | [백서]() | |
| 트론        | ETH-L2 | [Java](https://github.com/tronprotocol/java-tron) | PoS | [백서]() | |
| 리플        | XRP    | [C++](https://github.com/ripple/ripple-libpp) | [RPCA][1] | [백서]() | Ripple corp |
| 하이퍼렛저  | DLT    | [Go](https://github.com/hyperledger/fabric) | | [백서]() | IBM 리눅스재단 |
| 테터민트    | DLT    | [Go](https://github.com/tendermint/tendermint) | DAP | [백서]() | 리눅스재단 |
| 하이퍼큐브  | DLT    | [Rust](https://github.com/hypercube-lab/hypercube) | | [백서]() |  |
| 셀레스티아  | DLT    | [Go](https://github.com/celestiaorg/celestia-core) | | [백서]() | 테터민트 베이스 |
| corda       | DLT    | [Kotlin](https://github.com/corda/corda) | | [백서]() | R3 LLC |
| BITT DCMS   | DLT    | Numa core | | [백서]() | Bitt Inc |
| TAC    | DLT | [Go](https://github.com/TraceabilityChain/TAC) | PoS | [백서]() | |

[1]:https://xrpl.org/consensus.html "Ripple Protocol Consensus Algorithm"
[2]:https://docs.wemix.com/v/ko/design/consensus "Stake base Proof of Authority"
[3]:  "다중 자산 지분증명(multi-asset proof-of-stake)"

### 분산원장기술 - DLT[Distributed Ledger Technology]

### 방향성 비순환 그래프- [DAG](https://en.wikipedia.org/wiki/Directed_acyclic_graph) [Directed Acyclic Graph ]

DAG는 일련의 활동에 대한 개념적 표현, 즉 데이터 파이프라인의 수학적 추상화인 방향성 비순환 그래프입니다. 서로 다른 분야에서 사용되지만 DAG와 데이터 파이프라인이라는 두 용어는 거의 동일한 메커니즘을 나타냅니다.
간단히 말해서 DAG(또는 파이프라인)는 비반복 알고리즘에서 일련의 실행 단계를 정의합니다.

DAG는 원과 선으로 구성된 그래프입니다. 각 원 또는 "노드"는 특정 활동을 나타내며 "에지"라고 알려진 방향성 선으로 연결됩니다.
이러한 활동은 후속 순서로 완료되어야 하며 자체 참조할 수 없으므로 지시된 활동으로 간주됩니다. 즉, 가장자리가 이전 지점으로 다시 돌아가지 않아 그래프가 비순환적으로 렌더링된다는 의미입니다.

DAG 약어는 다음을 의미합니다.

지시됨 – 일반적으로 여러 작업이 존재하는 경우 각 작업에는 정의된 업스트림(이전) 또는 다운스트림(후속) 작업이 하나 이상 있거나 둘 다 하나 이상이 있어야 합니다.
(그러나 여러 병렬 작업이 있는 DAG도 있다는 점에 유의하는 것이 중요합니다. 이는 종속성이 없음을 의미합니다.)
비순환 – 어떤 작업도 자신을 참조하는 데이터를 생성할 수 없습니다. 이로 인해 무한 루프가 발생하여 한두 가지 문제가 발생할 수 있습니다. DAG에는 주기가 없습니다.
그래프 - 수학에서 그래프는 노드를 연결하는 정점이 있는 유한한 노드 집합입니다. 데이터 엔지니어링의 맥락에서 그래프의 각 노드는 작업을 나타냅니다.
모든 작업은 설정된 지점에서 개별 프로세스가 발생하고 다른 작업과 투명한 관계가 있는 명확한 구조로 배치됩니다.

## 메인넷 필수 사항

* 공통
  * 합의 알고리즘
    * 비잔틴 장애 허용(BFT)
    * 프랙티컬 비잔틴 장애 허용(pBFT)
      * 2라운드 투표 메커니즘
      * 리더기반 - 전체 노드가 아닌 특정 노드에서 결정
      * 통신기반 - 비결정적 계산 퍼즐이 아닌 결정론적 다수에 의존하여 합의
      * 네트워크 지연에 관계없이 안전성 - 즉각적인 최종 속성
    * 이스탄불 비잔틴 장애 허용 ([Istanbul BFT](https://blog.amis.com/istanbul-bft-ibft-c2758b7fe6ff))
    * 지분 증명 (PoS)
      * 이더리움 캐스퍼 FFG - Casper FFG
        * pBFT에서 파생
      * 이더리움 캐스퍼 CBC - Casper CBC
      * 스테이크 기반 자격증명 (SPoA) - Stake base Proof of Authority
    * 작업 증명 (PoW)
    * 활동 증명 (PoA)
    * 자격 증명 (PoA)
    * 위치 증명 (PoL)
    * 개념 증명(PoC)
    * 중요도 증명 (Pol)
    * 소각 증명 (PoB)
    * 용량 증명(PoC)
    * 공간 증명(PoS)
    * 지분 증명 시간 (PoST)
    * 경과 시간 증명 (PoET)
    * 위임 지분 증명 (DPoS)
    * 뇌증명 (PoB)
    * 실제 주소 증명 (PoPA)
    * 은행 계좌 증명 (PoBA)
    * 데이터 가용성 증명 (DAP) - Data Availability Proofs

  * 노드 구조
    * 머클트리
  * 블록 구조체
* 네트워크
  * 폐쇠형
  * 속도
  * 확장성
  * 수수료 최소화
  * 노드 싱크 방법
* 스마트 컨트렉트
  * 구조
  * 파서
  * 엔진
* 월렛
  * 구조
  * 확장

## 참고 할만한 코인 및 DLT

* 이더리움
* 비트코인
* 리플
* 폴리곤
* 옵티미즘
* 아비트럼
* 트론
* 위믹스
* 클레이튼
* 하이퍼렛저
* 라이트닝
* 셀레스티아
* 하이퍼큐브
* 아이오타

## 양자내성암호

> 양자내성암호(Post-Quantum Cryptography)는 양자컴퓨팅 환경에서 안전하게 암호기술을 이용할 수 있도록 하는 새로운 공개키암호입니다.
> 1994년 피터 쇼어(Peter Shor)에 의해 양자 컴퓨팅을 이용한 연산으로 인수분해, 이산로그 등 기존 공개키암호의 기반문제를 이론적으로 해독할 수 있는 알고리즘이 개발된 이후,
> 이러한 양자컴퓨팅 환경에서 해독 위협에 대응하는 새로운 공개키암호를 양자내성암호라고 합니다.

### Cryptographic Module Validation Program ([CMVP](https://csrc.nist.gov/projects/cryptographic-module-validation-program))

### [양자내성암호 전환준비 로드맵](https://www.dhs.gov/sites/default/files/publications/post-quantum_cryptography_infographic_october_2021_508.pdf)

1. Engagement with Standards Organizations

> Organizations should direct their Chief Information Officers to increase their engagement with standards developing organizations for latest developments relating to necessary algorithm and dependent protocol changes.

1. Inventory of Critical Data

> This information will inform future analysis by identifying what data may be at risk now and decrypted once a cryptographically relevant quantum computer is available.

1. Inventory of Cryptographic Technologies

> Organizations should conduct an inventory of all the systems using cryptographic technologies for any function to facilitate a smooth transition in the future.

1. Identification of Internal Standards

> Cybersecurity officials within organizations should identify acquisition, cybersecurity, and data security standards that will require updating to reflect post-quantum requirements.

1. Identification of Public Key Cryptography

> From the inventory, organizations should identify where and for what purpose public key cryptography is being used and mark those systems as quantum vulnerable.

1. Prioritization of Systems for Replacement

> Prioritizing one system over another for cryptographic transition is highly dependent on organization functions, goals, and needs. To supplement prioritization efforts, organizations should consider the following factors when evaluating a quantum vulnerable system:

    1. Is the system a high value asset based on organizational requirements?
    2. What is the system protecting
      (e.g. key stores, passwords, root keys, singing keys, personally identifiable information, sensitive personally identifiable information)?
    3. What other systems does the system communicate with?
    4. To what extent does the system share information with federal entities?
    5. To what extent does the system share information with other entities outside of your organization?
    6. Does the system support a critical infrastructure sector?
    7. How long does the data need to be protected?

1. Plan for Transition

> Using the inventory and prioritization information, organizations should develop a plan for systems transitions upon publication of the new post-quantum cryptographic standard. Transition plans should consider creating cryptographic agility to facilitate future adjustments and enable flexibility in case of unexpected changes. Cybersecurity officials should provide guidance for creating transition plans.
