---
layout: post
title: 이더리움 문제
tags: [blockchain,ethereum,bmt]
---

## 이더리움 문제

* 낮은 전송 처리량 : 

    10TPS -> 15TPS -> 20TPS -> 25TPS
* 높은 수수료
* 저장 속도 및 LevelDB 성능
* 복잡한 합의구조
* 확장성의 한계
* 블록체인 탈중앙화의 명분 한계
* 실물 경제 사용 불가능한 안전성

## 이더리움 기반 메인넷 설계시 고려사항

* 데이터 분산 및 저장 성능
* 다자 합의 또는 특권합의 
* 가스비(Transaction Fee + EVM GAS FEE)
* 최소 노드 운영 수
* 최소 노드 성능
* 네트워크 트래픽 산정
* 트랜젝션 처리 속도 (TPS) 개선
* 보안 (서비스거부공격,재사용 공격,검열공격,디스크 또는 메모리 누수,시스템 취약점,버그,내부해커)

## 메인넷 핵심

* 합의
* 스마트 컨트렉트
* 블록 읽기/저장
* 월렛 관리
* 노드 관리
* 기타 지원도구

## 성능 이슈

* LevelDB vs CocorochDB Vs RocksDB
* 노드 데이터 쉐어 방식
* 데이터 저장 방식 ([MPT] VS [mLSM])
* 합의 방식 및 알고리즘 (PBFT vs RAFT)


## 고려 사항

* 탈 중앙화의 진정한 의미
* 신원 미노출? KYC? AML? MiCa?
* 특정 지갑의 소유자을 식별 할 수 있다면 원장 공개는 개인정보 침해인가? 아닌가?
* 법적 준거 기준

## 한국 법률
- [특정 금융거래정보의 보고 및 이용 등에 관한 법률](https://elaw.klri.re.kr/kor_service/lawView.do?hseq=60111&lang=ENG)
- [가상자산 이용자 보호 등에 관한 법률](https://elaw.klri.re.kr/kor_service/lawView.do?hseq=63752&lang=ENG)
- [외국환거래법](https://elaw.klri.re.kr/kor_service/lawView.do?hseq=57324&lang=ENG)
- [전자금융거래법](https://elaw.klri.re.kr/kor_service/lawView.do?hseq=55549&lang=ENG)
- [금융실명거래 및 비밀보장에 관한 법률](https://elaw.klri.re.kr/kor_service/lawView.do?hseq=54706&lang=ENG)
- [개인정보 보호법](https://elaw.klri.re.kr/kor_service/lawView.do?hseq=62389&lang=KOR)
- [정보통신망 이용촉진 및 정보보호 등에 관한 법률](https://elaw.klri.re.kr/kor_service/lawView.do?hseq=60899&lang=KOR)
## 참고 사항

- [1][이더리움 스토리지 성능 최적화 이야기](https://medium.com/curg/merklized-lsm-%EC%9D%B4%EB%8D%94%EB%A6%AC%EC%9B%80-%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94-%EC%9D%B4%EC%95%BC%EA%B8%B0-5c77acbbe2b0)
- [2][블록체인 확장성의 한계](https://medium.com/onther-tech/%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8-%ED%99%95%EC%9E%A5%EC%84%B1%EC%9D%98-%ED%95%9C%EA%B3%84-the-limits-to-blockchain-scalability-802b3e036384)
- [3][탈중앙화 - 나무위키](https://namu.wiki/w/%ED%83%88%EC%A4%91%EC%95%99%ED%99%94)
- [4][EIP-150, Vitalik Buterin, 2016–09–24](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-150.md)
- [5][EIP-1884, Martin Holst Swende, 2019–03–28](https://eips.ethereum.org/EIPS/eip-1884)

[MPT]:https://ethereum.org/en/developers/docs/data-structures-and-encoding/patricia-merkle-trie "MERKLE PATRICIA TRIE"
[mLSM]:https://www.usenix.org/conference/hotstorage18/presentation/raju "Log Structured Merge Tree"