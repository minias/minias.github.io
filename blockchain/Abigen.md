---
layout: post
title: HD wallets
tags: [blockchain,ethereum]
---

## What is abigen<sup>[1]</sup>?

> Abigen is a binding-generator for easily interacting with the Electroneum Smart Chain using Go. Abigen creates easy-to-use, type-safe Go packages from Electroneum smart contract definitions known as ABIs. This abstracts away a lot of the complexity of handling smart contract deployment and interaction in Go native applications such as encoding and decoding smart contracts into EVM bytecode. Abigen comes bundled with Etn-sc. A full Etn-sc installation includes the abigen binary. Abigen can also be built independently by navigating to electroneum-sc/cmd/abigen and running go build, or equivalently:

## What is an ABI?

> Electroneum smart contracts have a schema that defines its functions and return types in the form of a JSON file. This JSON file is known as an Application Binary Interface, or ABI. The ABI acts as a specification for precisely how to encode data sent to a contract and how to decode the data the contract sends back. The ABI is the only essential piece of information required to generate Go bindings. Go developers can then use the bindings to interact with the contract from their Go application without having to deal directly with data encoding and decoding. An ABI is generated when a contract is compiled.

## Installing Abigen in Macos

## Generating the bindings

> What if brew is not installed?

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

> Install geth development version<sup>[2]</sup>

```sh
brew tap ethereum/ethereum
brew install ethereum --devel
```

```solidity
// SPDX-License-Identifier: GPL-3.0

pragma solidity >0.7.0 < 0.9.0;
/**
* @title Storage
* @dev store or retrieve variable value
*/

contract Storage {

	uint256 value;

	function store(uint256 number) public{
		value = number;
	}

	function retrieve() public view returns (uint256){
		return value;
	}
}
```

```sh
solc --abi Storage.sol -o build
```

```json
[
  {
    "inputs": [],
    "name": "retrieve",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "number", "type": "uint256" }],
    "name": "store",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
```

```sh
abigen --abi Storage.abi --pkg main --type Storage --out Storage.go
```

```go
// Code generated - DO NOT EDIT.
// This file is a generated binding and any manual changes will be lost.

package main

import (
	"errors"
	"math/big"
	"strings"

	"github.com/ethereum/go-ethereum"
	"github.com/ethereum/go-ethereum/accounts/abi"
	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/ethereum/go-ethereum/event"
)

// Reference imports to suppress errors if they are not otherwise used.
var (
	_ = errors.New
	_ = big.NewInt
	_ = strings.NewReader
	_ = ethereum.NotFound
	_ = bind.Bind
	_ = common.Big1
	_ = types.BloomLookup
	_ = event.NewSubscription
)

// StorageMetaData contains all meta data concerning the Storage contract.
var StorageMetaData = &bind.MetaData{
	ABI: "[{\"inputs\":[],\"name\":\"retrieve\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"number\",\"type\":\"uint256\"}],\"name\":\"store\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]",
}

// StorageABI is the input ABI used to generate the binding from.
// Deprecated: Use StorageMetaData.ABI instead.
var StorageABI = StorageMetaData.ABI

// Storage is an auto generated Go binding around an Ethereum contract.
type Storage struct {
	StorageCaller     // Read-only binding to the contract
	StorageTransactor // Write-only binding to the contract
	StorageFilterer   // Log filterer for contract events
}

```

[1]:https://developer.electroneum.com/etn-sc-client/tools/abigen "abigen"
[2]:https://geth.ethereum.org/docs/getting-started/installing-geth#macos-via-homebrew "installing abigen for macos via homebrew"
