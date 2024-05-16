---
layout: post
title: Ethereum opcode  
tags: [ethereum,blockchain]
---

## Ethereum VM(EVM) Opcode 및 명령어 참조

> 시간이 지날수록 Opcode Costs가 변경될 가능성이 높습니다. 단지 참고만하세요.

* [evm 최신 Opcode](https://www.evm.codes/)

|연산코드|이름|설명|추가 정보|가스|
|---|---|:--------|---|---|
|0x00       |      STOP      |실행 중지|-|0|
|0x01       |      ADD       |덧셈 연산|-|3|
|0x02       |      MUL       |곱셈 연산|-|5|
|0x03       |      SUB       |빼기 연산|-|3|
|0x04       |      DIV       |정수 나누기 연산|-|5|
|0x05       |      SDIV      |부호 있는 정수 나누기 연산(잘림)|-|5|
|0x06       |      MOD       |모듈로 나머지 연산|-|5|
|0x07       |      SMOD      |부호 있는 모듈로 나머지 연산|-|5|
|0x08       |     ADDMOD     |모듈로 덧셈 연산|-|8|
|0x09       |     MULMOD     |모듈로 곱셈 연산|-|8|
|0x0a       |      EXP       |지수 연산|-|10*|
|0x0b       |   SIGNEXTEND   |2의 보수 부호 있는 정수의 길이 확장|-|5|
|0x0c-0x0f  |     Unused     |미사용|-||
|0x10       |       LT       |미만 비교|-|3|
|0x11       |       GT       |보다 큼 비교|-|3|
|0x12       |      SLT       |부호 있는 미만 비교|-|3|
|0x13       |      SGT       |부호 있는 보다 큼 비교|-|3|
|0x14       |       EQ       |평등 비교|-|3|
|0x15       |     ISZERO     |단순 연산자 아님|-|3|
|0x16       |      AND       |비트 AND 연산|-|3|
|0x17       |       OR       |비트별 OR 연산|-|3|
|0x18       |      XOR       |비트별 XOR 연산|-|3|
|0x19       |      NOT       |비트별 NOT 연산|-|3|
|0x1a       |      BYTE      |단어에서 단일 바이트 검색|-|3|
|0x1b       |      SHL       |왼쪽으로 이동|[EIP 145](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-145.md)|3|
|0x1c       |      SHR       |오른쪽으로 논리 시프트|[EIP 145](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-145.md)|3|
|0x1d       |      SAR        행정구|산술 오른쪽으로 시프트|[EIP 145](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-145.md)|3|
|0x20       |   KECCAK256    |Keccak-256 해시 계산|-|30*|
|0x21-0x2f  |     Unused     |미사용|||
|0x30       |    ADDRESS     |현재 실행 중인 계정의 주소 가져오기|-|2|
|0x31       |    BALANCE     |해당 계좌의 잔액을 가져옵니다.|-|700|
|0x32       |     ORIGIN     |실행 시작 주소 가져오기|-|2|
|0x33       |     CALLER     |발신자 주소 얻기|-|2|
|0x34       |   CALLVALUE    |이 실행을 담당하는 명령/트랜잭션으로 예치된 값을 가져옵니다.|-|2|
|0x35       |  CALLDATALOAD  |현재 환경의 입력 데이터 가져오기|-|3|
|0x36       |  CALLDATASIZE  |현재 환경에서 입력 데이터의 크기를 가져옵니다.|-|2*|
|0x37       |  CALLDATACOPY  |현재 환경의 입력 데이터를 메모리에 복사|-|3|
|0x38       |    CODESIZE    |현재 환경에서 실행 중인 코드 크기 가져오기|-|2|
|0x39       |    CODECOPY    |현재 환경에서 실행 중인 코드를 메모리에 복사|-|3*|
|0x3a       |    GASPRICE    |현재 환경의 가스 가격을 알아보세요|-|2|
|0x3b       |  EXTCODESIZE   |계정 코드의 크기 가져오기|-|700|
|0x3c       |  EXTCODECOPY   |계정 코드를 메모리에 복사|-|700*|
|0x3d       | RETURNDATASIZE |반환 데이터 버퍼의 크기를 스택에 푸시합니다.|[EIP 211](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-211.md)|2|
|0x3e       | RETURNDATACOPY |반환 데이터 버퍼의 데이터를 메모리에 복사합니다.|[EIP 211](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-211.md)|3|
|0x3f       |  EXTCODEHASH   |계약 코드의 keccak256 해시를 반환합니다.|[EIP 1052](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1052.md)|700|
|0x40       |   BLOCKHASH    |가장 최근의 완전한 블록 256개 중 하나의 해시를 가져옵니다.|-|20|
|0x41       |    COINBASE    |블록의 수취인 주소를 알아보세요|-|2|
|0x42       |   TIMESTAMP    |블록의 타임스탬프 가져오기|-|2|
|0x43       |     NUMBER     |블록 번호 얻기|-|2|
|0x44       |   DIFFICULTY   |블록의 난이도를 알아보세요|-|2|
|0x45       |    GASLIMIT    |블록의 가스 한도를 가져옵니다.|-|2|
|0x46       |    CHAINID     |현재 체인의 EIP-155 고유 식별자를 반환합니다.|[EIP 1344](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1344.md)|2|
|0x47-0x4f  |     Unused     |-|||
|0x48       |    BASEFEE     |실행 중인 현재 블록의 기본 수수료 값을 반환합니다.|[EIP 3198](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-3198.md)|2|
|0x50       |      POP       |스택에서 단어 제거|-|2|
|0x51       |     MLOAD      |메모리에서 단어 로드|-|3*|
|0x52       |     MSTORE     |단어를 메모리에 저장|-|3*|
|0x53       |    MSTORE8     |바이트를 메모리에 저장|-|3|
|0x54       |     SLOAD      |저장소에서 단어 로드|-|800|
|0x55       |     SSTORE     |단어를 저장소에 저장|-|20000**|
|0x56       |      JUMP      |프로그램 카운터 변경|-|8|
|0x57       |     JUMPI      |조건부로 프로그램 카운터 변경|-|10|
|0x58       |     GETPC      |증가하기 전에 프로그램 카운터의 값을 가져옵니다.|-|2|
|0x59       |     MSIZE      |활성 메모리 크기를 바이트 단위로 가져옵니다.|-|2|
|0x5a       |      GAS       |이 명령에 따른 비용 절감을 포함하여 사용 가능한 가스의 양을 가져옵니다.|-|2|
|0x5b       |    JUMPDEST    |점프할 수 있는 유효한 목적지를 표시하세요.|-|1|
|0x5c-0x5f  |     Unused     |-|||
|0x60       |     PUSH1      |스택에 1바이트 항목 배치|-|3|
|0x61       |     PUSH2      |스택에 2바이트 항목 배치|-|3|
|0x62       |     PUSH3      |3바이트 항목을 스택에 배치|-|3|
|0x63       |     PUSH4      |4바이트 항목을 스택에 배치|-|3|
|0x64       |     PUSH5      |5바이트 항목을 스택에 배치|-|3|
|0x65       |     PUSH6      |6바이트 항목을 스택에 배치|-|3|
|0x66       |     PUSH7      |7바이트 항목을 스택에 배치|-|3|
|0x67       |     PUSH8      |8바이트 항목을 스택에 배치|-|3|
|0x68       |     PUSH9      |9바이트 항목을 스택에 배치|-|3|
|0x69       |     PUSH10     |10바이트 항목을 스택에 배치|-|3|
|0x6a       |     PUSH11     |11바이트 항목을 스택에 배치|-|3|
|0x6b       |     PUSH12     |12바이트 항목을 스택에 배치|-|3|
|0x6c       |     PUSH13     |13바이트 항목을 스택에 배치|-|3|
|0x6d       |     PUSH14     |14바이트 항목을 스택에 배치|-|3|
|0x6e       |     PUSH15     |15바이트 항목을 스택에 배치|-|3|
|0x6f       |     PUSH16     |16바이트 항목을 스택에 배치|-|3|
|0x70       |     PUSH17     |17바이트 항목을 스택에 배치|-|3|
|0x71       |     PUSH18     |18바이트 항목을 스택에 배치|-|3|
|0x72       |     PUSH19     |19바이트 항목을 스택에 배치|-|3|
|0x73       |     PUSH20     |20바이트 항목을 스택에 배치|-|3|
|0x74       |     PUSH21     |21바이트 항목을 스택에 배치|-|3|
|0x75       |     PUSH22     |22바이트 항목을 스택에 배치|-|3|
|0x76       |     PUSH23     |23바이트 항목을 스택에 배치|-|3|
|0x77       |     PUSH24     |24바이트 항목을 스택에 배치|-|3|
|0x78       |     PUSH25     |25바이트 항목을 스택에 배치|-|3|
|0x79       |     PUSH26     |26바이트 항목을 스택에 배치|-|3|
|0x7a       |     PUSH27     |27바이트 항목을 스택에 배치|-|3|
|0x7b       |     PUSH28     |28바이트 항목을 스택에 배치|-|3|
|0x7c       |     PUSH29     |29바이트 항목을 스택에 배치|-|3|
|0x7d       |     PUSH30     |30바이트 항목을 스택에 배치|-|3|
|0x7e       |     PUSH31     |31바이트 항목을 스택에 배치|-|3|
|0x7f       |     PUSH32     |32바이트(전체 단어) 항목을 스택에 배치|-|3|
|0x80       |      DUP1      |첫 번째 스택 항목이 중복되었습니다.|-|3|
|0x81       |      DUP2      |두 번째 스택 항목이 중복되었습니다.|-|3|
|0x82       |      DUP3      |세 번째 스택 항목이 중복되었습니다.|-|3|
|0x83       |      DUP4      |4번째 스택 항목이 중복되었습니다.|-|3|
|0x84       |      DUP5      |5번째 스택 항목이 중복되었습니다.|-|3|
|0x85       |      DUP6      |6번째 스택 항목이 중복되었습니다.|-|3|
|0x86       |      DUP7      |7번째 스택 항목이 중복되었습니다.|-|3|
|0x87       |      DUP8      |8번째 스택 항목이 중복되었습니다.|-|3|
|0x88       |      DUP9      |9번째 스택 항목이 중복되었습니다.|-|3|
|0x89       |     DUP10      |10번째 스택 항목이 중복되었습니다.|-|3|
|0x8a       |     DUP11      |11번째 스택 항목이 중복되었습니다.|-|3|
|0x8b       |     DUP12      |12번째 스택 항목이 중복되었습니다.|-|3|
|0x8c       |     DUP13      |13번째 스택 항목이 중복되었습니다.|-|3|
|0x8d       |     DUP14      |14번째 스택 항목이 중복되었습니다.|-|3|
|0x8e       |     DUP15      |15번째 스택 항목이 중복되었습니다.|-|3|
|0x8f       |     DUP16      |16번째 스택 항목이 중복되었습니다.|-|3|
|0x90       |     SWAP1      |1차, 2차 스택 아이템 교환|-|3|
|0x91       |     SWAP2      |1차, 3차 스택 아이템 교환|-|3|
|0x92       |     SWAP3      |1, 4스택 아이템 교환|-|3|
|0x93       |     SWAP4      |1번째와 5번째 스택 아이템 교환|-|3|
|0x94       |     SWAP5      |1, 6번째 스택 아이템 교환|-|3|
|0x95       |     SWAP6      |1번째와 7번째 스택 아이템 교환|-|3|
|0x96       |     SWAP7      |1번째와 8번째 스택 아이템 교환|-|3|
|0x97       |     SWAP8      |1번째와 9번째 스택 아이템 교환|-|3|
|0x98       |     SWAP9      |1번째와 10번째 스택 아이템 교환|-|3|
|0x99       |     SWAP10     |1번째와 11번째 스택 아이템 교환|-|3|
|0x9a       |     SWAP11     |1번째와 12번째 스택 아이템 교환|-|3|
|0x9b       |     SWAP12     |1번째와 13번째 스택 아이템 교환|-|3|
|0x9c       |     SWAP13     |1번째와 14번째 스택 아이템 교환|-|3|
|0x9d       |     SWAP14     |1번째와 15번째 스택 아이템 교환|-|3|
|0x9e       |     SWAP15     |1번째와 16번째 스택 아이템 교환|-|3|
|0x9f       |     SWAP16     |1번째와 17번째 스택 아이템 교환|-|3|
|0xa0       |      LOG0      |주제가 없는 로그 기록 추가|-|375|
|0xa1       |      LOG1      |하나의 주제로 로그 기록 추가|-|750|
|0xa2       |      LOG2      |두 가지 주제로 로그 기록 추가|-|1125|
|0xa3       |      LOG3      |세 가지 주제로 로그 기록을 추가|-|1500|
|0xa4       |      LOG4      |4개 주제로 로그 기록 추가|-|1875|
|0xa5-0xaf  |     Unused     |-|||
|0xb0       |     JUMPTO     |임시 libevmasm의 숫자가 다릅니다.|[EIP 615](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-615.md)||
|0xb1       |     JUMPIF     |잠정적인|[EIP 615](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-615.md)||
|0xb2       |    JUMPSUB     |잠정적인|[EIP 615](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-615.md)||
|0xb4       |    JUMPSUBV    |잠정적인|[EIP 615](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-615.md)||
|0xb5       |    BEGINSUB    |잠정적인|[EIP 615](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-615.md)||
|0xb6       |   BEGINDATA    |잠정적인|[EIP 615](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-615.md)||
|0xb8       |   RETURNSUB    |잠정적인|[EIP 615](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-615.md)||
|0xb9       |    PUTLOCAL    |잠정적인|[EIP 615](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-615.md)||
|0xba       |    GETLOCAL    |잠정적인|[EIP 615](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-615.md)||
|0xbb-0xe0  |     Unused     |-|||
|0xe1       |   SLOADBYTES   |pyethereum에서만 참조|-|-|
|0xe2       |  SSTOREBYTES   |pyethereum에서만 참조|-|-|
|0xe3       |     SSIZE      |pyethereum에서만 참조|-|-|
|0xe4-0xef  |     Unused     |-|||
|0xf0       |     CREATE     |관련 코드로 새 계정 만들기|-|32000|
|0xf1       |      CALL      |계정으로 메시지 호출|-|Complex|
|0xf2       |    CALLCODE    |대체 계정의 코드를 사용하여 이 계정으로 메시지 통화|-|Complex|
|0xf3       |     RETURN     |출력 데이터를 반환하는 실행 중지|-|0|
|0xf4       |  DELEGATECALL  |대체 계정의 코드를 사용하여 이 계정에 메시지 호출을 하지만 대체 계정의 코드를 사용하여 이 계정에 계속 유지|-|Complex|
|0xf5       |    CREATE2     |새 계정을 만들고 생성 주소를 다음으로 설정하세요.sha3(sender + sha3(init code)) % 2**160|-||
|0xf6-0xf9  |     Unused     |-|-||
|0xfa       |   STATICCALL   |CALL과 유사하지만 상태를 수정하지 않습니다.|-|40|
|0xfb       |     Unused     |-|-||
|0xfc       |   TXEXECGAS    |노란 종이에 없는 FIXME|-|-|
|0xfd       |     REVERT     |제공된 가스를 모두 소비하고 이유를 제공하지 않고 실행을 중지하고 상태 변경을 되돌립니다.|-|0|
|0xfe       |    INVALID     |지정 무효 명령|-|0|
|0xff       |  SELFDESTRUCT  |실행을 중지하고 추후 삭제를 위해 계정을 등록하세요.|-|5000*|

## opcode gas costs EIP-150

|1|Value|Mnemonic|Gas Used|Subset|Removed from stack|Added to stack|Notes|Formula Notes|
|---|---|---|-------|---|---|---|---|---|
|2|0x00|STOP|0|zero|0|0|Halts execution.||
|3|0x01|ADD|3|verylow|2|1|Addition operation||
|4|0x02|MUL|5|low|2|1|Multiplication operation.||
|5|0x03|SUB|3|verylow|2|1|Subtraction operation.||
|6|0x04|DIV|5|low|2|1|Integer division operation.||
|7|0x05|SDIV|5|low|2|1|Signed integer division operation (truncated).||
|8|0x06|MOD|5|low|2|1|Modulo remainder operation||
|9|0x07|SMOD|5|low|2|1|Signed modulo remainder operation.||
|10|0x08|ADDMOD|8|mid|3|1|Modulo addition operation.||
|11|0x09|MULMOD|8|mid|3|1|Modulo multiplication operation.||
|12|0x0a|EXP|(exp == 0) ? 10 : (10 + 10 * (1 + log256(exp)))||2|1|Exponential operation.|If exponent is 0, gas used is 10. If exponent is greater than 0, gas used is 10 plus 10 times a factor related to how large the log of the exponent is.|
|13|0x0b|SIGNEXTEND|5|low|2|1|Extend length of two’s complement signed integer.||
|14|0x10|LT|3|verylow|2|1|Less-than comparison.||
|15|0x11|GT|3|verylow|2|1|Greater-than comparison.||
|16|0x12|SLT|3|verylow|2|1|Signed less-than comparison.||
|17|0x13|SGT|3|verylow|2|1|Signed greater-than comparison.||
|18|0x14|EQ|3|verylow|2|1|Equality comparison.||
|19|0x15|ISZERO|3|verylow|1|1|Simple not operator.||
|20|0x16|AND|3|verylow|2|1|Bitwise AND operation.||
|21|0x17|OR|3|verylow|2|1|Bitwise OR operation||
|22|0x18|XOR|3|verylow|2|1|Bitwise XOR operation.||
|23|0x19|NOT|3|verylow|1|1|Bitwise NOT operation.||
|24|0x1a|BYTE|3|verylow|2|1|Retrieve single byte from word||
|25|0x20|SHA3|30 + 6 * (size of input in words)||2|1|Compute Keccak-256 hash.|30 is the paid for the operation plus 6 paid for each word (rounded up) for the input data.|
|26|0x30|ADDRESS|2|base|0|1|Get address of currently executing account.||
|27|0x31|BALANCE|400||1|1|Get balance of the given account.||
|28|0x32|ORIGIN|2|base|0|1|Get execution origination address.||
|29|0x33|CALLER|2|base|0|1|Get caller address.||
|30|0x34|CALLVALUE|2|base|0|1|Get deposited value by the instruction/transaction responsible for this execution.||
|31|0x35|CALLDATALOAD|3|verylow|1|1|Get input data of current environment.||
|32|0x36|CALLDATASIZE|2|base|0|1|Get size of input data in current environment.||
|33|0x37|CALLDATACOPY|2 + 3 * (number of words copied, rounded up)||3|0|Copy input data in current environment to memory.|2 is paid for the operation plus 3 for each word copied (rounded up).|
|34|0x38|CODESIZE|2|base|0|1|Get size of code running in current environment.||
|35|0x39|CODECOPY|2 + 3 * (number of words copied, rounded up)||3|0|Copy code running in current environment to memory.|2 is paid for the operation plus 3 for each word copied (rounded up).|
|36|0x3a|GASPRICE|2|base|0|1|Get price of gas in current environment.||
|37|0x3b|EXTCODESIZE|700|extcode|1|1|Get size of an account’s code.||
|38|0x3c|EXTCODECOPY|700 + 3 * (number of words copied, rounded up)||4|0|Copy an account’s code to memory.|700 is paid for the operation plus 3 for each word copied (rounded up).|
|39|0x40|BLOCKHASH|20||1|1|Get the hash of one of the 256 most recent complete blocks.||
|40|0x41|COINBASE|2|base|0|1|Get the block’s beneficiary address.||
|41|0x42|TIMESTAMP|2|base|0|1|Get the block’s timestamp.||
|42|0x43|NUMBER|2|base|0|1|Get the block’s number.||
|43|0x44|DIFFICULTY|2|base|0|1|Get the block’s difficulty.||
|44|0x45|GASLIMIT|2|base|0|1|Get the block’s gas limit.||
|45|0x50|POP|2|base|1|0|Remove item from stack.||
|46|0x51|MLOAD|3|verylow|1|1|Load word from memory.||
|47|0x52|MSTORE|3|verylow|2|0|Save word to memory||
|48|0x53|MSTORE8|3|verylow|2|0|Save byte to memory.||
|49|0x54|SLOAD|200||1|1|Load word from storage||
|50|0x55|SSTORE|((value != 0) && (storage_location == 0)) ? 20000 : 5000||1|1|Save word to storage.|20000 is paid when storage value is set to non-zero from zero. 5000 is paid when the storage value's zeroness remains unchanged or is set to zero.|
|51|0x56|JUMP|8|mid|1|0|Alter the program counter||
|52|0x57|JUMPI|10|high|2|0|Conditionally alter the program counter.||
|53|0x58|PC|2|base|0|1|Get the value of the program counter prior to the increment corresponding to this instruction.||
|54|0x59|MSIZE|2|base|0|1|Get the size of active memory in bytes.||
|55|0x5a|GAS|2|base|0|1|Get the amount of available gas, including the corresponding reduction for the cost of this instruction.||
|56|0x5b|JUMPDEST|1||0|0|Mark a valid destination for jumps||
|57|0x60 -- 0x7f|PUSH*|3|verylow|0|1|Place \* byte item on stack. 0 < \* <= 32||
|58|0x80 -- 0x8f|DUP*|3|verylow|*|* + 1|Duplicate *th stack item. 0 < \* <= 16||
|59|0x90 -- 0x9f|SWAP*|3|verylow|* + 1|* + 1|Exchange 1st and (* + 1)th stack items.||
|60|0xa0|LOG0|375 + 8 * (number of bytes in log data)||2|0|Append log record with no topics.|375 is paid for operation plus 8 for each byte in data to be logged.|
|61|0xa1|LOG1|375 + 8 * (number of bytes in log data) + 375||3|0|Append log record with one topic.|375 is paid for operation plus 8 for each byte in data to be logged plus 375 for the 1 topic to be logged.|
|62|0xa2|LOG2|375 + 8 \* (number of bytes in log data) + 2 * 375||4|0|Append log record with two topics.|375 is paid for operation plus 8 for each byte in data to be logged plus 2 * 375 for the 2 topics to be logged.|
|63|0xa3|LOG3|375 + 8 \* (number of bytes in log data) + 3 * 375||5|0|Append log record with three topics.|375 is paid for operation plus 8 for each byte in data to be logged plus 3 * 375 for the 3 topics to be logged.|
|64|0xa4|LOG4|375 + 8 \* (number of bytes in log data) + 4 * 375||6|0|Append log record with four topics.|375 is paid for operation plus 8 for each byte in data to be logged plus 4 * 375 for the 4 topics to be logged.|
|65|0xf0|CREATE|32000||3|1|Create a new account with associated code.||
|66|0xf1|CALL|Complex -- see yellow paper Appendix H||7|1|Message-call into an account.||
|67|0xf2|CALLCODE|Complex -- see yellow paper Appendix H||7|1|Message-call into this account with an alternative account’s code.||
|68|0xf3|RETURN|0|zero|2|0|Halt execution returning output data.||
|69|0xf4|DELEGATECALL|Complex -- see yellow paper Appendix H||6|1|Message-call into this account with an alternative account’s code, but persisting the current values for sender and value.||
|70|0xfe|INVALID|NA||NA|NA|Designated invalid instruction.||
|71|0xff|SELFDESTRUCT|5000 + ((create_new_account) ? 25000 : 0)||1|0|Halt execution and register account for later deletion|5000 for the operation plus 25000 if a new account is also created. A refund of 24000 gas is also added to the refund counter for self-destructing the account.|

### Reference

[1](https://ethereum.github.io/yellowpaper/paper.pdf) Ethereum Yellow Paper: a formal specification of Ethereum, a programmable blockchain
