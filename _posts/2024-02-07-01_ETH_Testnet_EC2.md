---
layout: post
title: AWS EC2 머신에서 이더리움 테스트넷+퍼셋 구축 
tags: [blockchain,ethereum,testnet]
---
{:toc}

    2024.02 현재 기준 
    테스트넷 : sepolia test net
    고언어 : go version go1.18.1 linux/amd64
    클라이언트(pow) : geth version 1.13.11-stable
    합의 클라이언트(pos) : Prysm/v4.2.1
    openssl : OpenSSL 3.0.2 15 Mar 2022 (Library: OpenSSL 3.0.2 15 Mar 2022)

## 최소 요구사항

* 2코어 이상의 CPU
* 적어도 80GB의 여유 스토리지 공간
* 최소 4GB RAM SSD (HDD의 경우 8GB 이상)
* 다운로드 속도가 초당 8MBit인 인터넷 서비스

## 추천 사양

* 4코어 이상의 빠른 CPU
* 16GB 이상의 RAM
* 메모리 여유 공간이 적어도 500GB인 빠른 SSD
* 다운로드 속도가 초당 25MBit 이상인 인터넷 서비스

## 사용된 EC2 사양 

> 전부 무료를 사용한다. [1년 이내]

* t2.micro
* 싱가포르 리전
* 키페어 
* 보안그룹 
* S3 스토로지 
* mariadb
* dynamoDB

## 소프트웨어 요구사항

* GIT
* Golang
* openssl
* libssl-dev
* libudev-dev
* cmake

```sh

# ubuntu
sudo apt-get update
sudo git golang apt-get install openssl libssl-dev libudev-dev cmake
#geth install
sudo apt-get install ethereum
sudo apt-get upgrade geth

```

```sh
#prysm install
curl https://raw.githubusercontent.com/prysmaticlabs/prysm/master/prysm.sh --output prysm.sh && chmod +x prysm.sh
```
## Geth 실행

```sh
nohup geth --sepolia --http --http.api eth,net,engine,admin --datadir data -allow-insecure-unlock --http.addr 0.0.0.0 --http --http.port 8545 --http.corsdomain "*" 2> data/geth.log
```
## becon Node 실행

```sh
./prysm.sh beacon-chain --execution-endpoint=./data/geth.ipc --sepolia --checkpoint-sync-url=https://sepolia.beaconstate.info --genesis-beacon-api-url=https://sepolia.beaconstate.info
```
## 프리티어 사용불가

> 3.7G 노드 데이터 싱크중 과부하로 씽크 불가.
> Sepolia Testnet TOTAL SIZE 15~20G 

### 이더리움 메인넷 풀노드 사이즈 [하드포크이후]

> 940Gb 블록사이즈 / 23억 트랜잭션

> 200Gb 블록사이즈 / 1억트랜잭션 

![ETH_MAINNET_BLOCK_SIZE](/img/2024-02-07-01_ETH_size_count.png)

## 참고사항

 1. [prylabs](https://docs.prylabs.network/docs/install/install-with-script) 
 2. [geth](https://geth.ethereum.org/docs/getting-started/installing-geth)
 3. [golang](https://go.dev/doc/install)
 4. [openssl](https://www.openssl.org/docs/)
 5. [이더리움 블록체인 크기 차트
](https://blockchair.com/ko/ethereum/charts/blockchain-size)
