---
layout: post
title: Golang Static check list
tags: [go]
---
## 고언어 정적 오류 체크 리스트

    오류 메시지도 한글로 보여주면 좋겠는데,아쉽다는 생각이다.

### 오류메시지 무시

#### 단일 무시

> //lint:ignore Check1[,Check2,...,CheckN] reason

```go
//예시
value  *big.Int //lint:ignore U1000 unused field is part of test
```

#### 파일 무시
> //lint:file-ignore [Lint Code] [error msg]

```go
//lint:file-ignore U1000 Ignore all unused code, it's generated
package main
```

## 오류메시지 확인

|확인하다|간단한 설명|
|---|---|
|[SA    ](https://staticcheck.io/docs/checks/#SA    )|staticcheck|
|[SA1   ](https://staticcheck.io/docs/checks/#SA1   )|표준 라이브러리의 다양한 오용|
|[SA1000](https://staticcheck.io/docs/checks/#SA1000)|잘못된 정규 표현식|
|[SA1001](https://staticcheck.io/docs/checks/#SA1001)|잘못된 템플릿|
|[SA1002](https://staticcheck.io/docs/checks/#SA1002)|형식이 잘못되었습니다.time.Parse|
|[SA1003](https://staticcheck.io/docs/checks/#SA1003)|의 함수에 대해 지원되지 않는 인수encoding/binary|
|[SA1004](https://staticcheck.io/docs/checks/#SA1004)|의심스럽게 작은 형식화되지 않은 상수time.Sleep|
|[SA1005](https://staticcheck.io/docs/checks/#SA1005)|첫 번째 인수가 잘못되었습니다.exec.Command|
|[SA1006](https://staticcheck.io/docs/checks/#SA1006)|Printf동적 첫 번째 인수가 있고 추가 인수가 없습니다.|
|[SA1007](https://staticcheck.io/docs/checks/#SA1007)|잘못된 URLnet/url.Parse|
|[SA1008](https://staticcheck.io/docs/checks/#SA1008)|http.Header맵 의 비정규 키|
|[SA1010](https://staticcheck.io/docs/checks/#SA1010)|(*regexp.Regexp).FindAll으로 호출하면 n == 0항상 0개의 결과가 반환됩니다.|
|[SA1011](https://staticcheck.io/docs/checks/#SA1011)|패키지 의 다양한 메소드에서 strings유효한 UTF-8이 필요하지만 잘못된 입력이 제공되었습니다.|
|[SA1012](https://staticcheck.io/docs/checks/#SA1012)|nil이 context.Context함수에 전달되고 있습니다. context.TODO대신 사용을 고려해 보세요.|
|[SA1013](https://staticcheck.io/docs/checks/#SA1013)|io.Seeker.Seek첫 번째 인수로 wherece 상수를 사용하여 호출되고 있지만 두 번째 인수여야 합니다.|
|[SA1014](https://staticcheck.io/docs/checks/#SA1014)|Unmarshal또는 에 전달된 포인터가 아닌 값Decode|
|[SA1015](https://staticcheck.io/docs/checks/#SA1015)|time.Tick누출되는 방식으로 사용하십시오 . 사용을 고려하고 테스트, 명령 및 무한 기능 time.NewTicker에만 사용하십시오.time.Tick|
|[SA1016](https://staticcheck.io/docs/checks/#SA1016)|트랩할 수 없는 신호 트랩하기|
|[SA1017](https://staticcheck.io/docs/checks/#SA1017)|와 함께 사용되는 채널은 os/signal.Notify버퍼링되어야 합니다.|
|[SA1018](https://staticcheck.io/docs/checks/#SA1018)|strings.Replacen == 0아무것도 하지 않는 으로 호출됨|
|[SA1019](https://staticcheck.io/docs/checks/#SA1019)|더 이상 사용되지 않는 함수, 변수, 상수 또는 필드 사용|
|[SA1020](https://staticcheck.io/docs/checks/#SA1020)|net.Listen관련 기능 에 잘못된 호스트:포트 쌍 사용|
|[SA1021](https://staticcheck.io/docs/checks/#SA1021)|bytes.Equal두 개를 비교하는 데 사용net.IP|
|[SA1023](https://staticcheck.io/docs/checks/#SA1023)|io.Writer구현 에서 버퍼 수정|
|[SA1024](https://staticcheck.io/docs/checks/#SA1024)|문자열 컷셋에 중복된 문자가 포함되어 있습니다.|
|[SA1025](https://staticcheck.io/docs/checks/#SA1025)|(*time.Timer).Reset의 반환 값을 올바르게 사용할 수 없습니다 .|
|[SA1026](https://staticcheck.io/docs/checks/#SA1026)|채널이나 기능을 마샬링할 수 없습니다.|
|[SA1027](https://staticcheck.io/docs/checks/#SA1027)|64비트 변수에 대한 원자적 액세스는 64비트로 정렬되어야 합니다.|
|[SA1028](https://staticcheck.io/docs/checks/#SA1028)|sort.Slice슬라이스에만 사용할 수 있습니다.|
|[SA1029](https://staticcheck.io/docs/checks/#SA1029)|호출 시 부적절한 키context.WithValue|
|[SA1030](https://staticcheck.io/docs/checks/#SA1030)|strconv함수 호출 시 잘못된 인수|
|[SA2   ](https://staticcheck.io/docs/checks/#SA2   )|동시성 문제|
|[SA2000](https://staticcheck.io/docs/checks/#SA2000)|sync.WaitGroup.Add고루틴 내부에서 호출되어 경쟁 조건이 발생함|
|[SA2001](https://staticcheck.io/docs/checks/#SA2001)|중요 섹션이 비어 있습니다. 잠금 해제를 연기하시겠습니까?|
|[SA2002](https://staticcheck.io/docs/checks/#SA2002)|허용되지 않는 호출 testing.T.FailNow또는 고루틴에서SkipNow|
|[SA2003](https://staticcheck.io/docs/checks/#SA2003)|잠금 Lock직후 연기됨, Unlock대신 연기할 가능성이 높음|
|[SA3   ](https://staticcheck.io/docs/checks/#SA3   )|테스트 문제|
|[SA3000](https://staticcheck.io/docs/checks/#SA3000)|TestMain호출하지 않고 os.Exit테스트 실패를 숨깁니다.|
|[SA3001](https://staticcheck.io/docs/checks/#SA3001)|벤치마크 에 할당하면 b.N결과가 왜곡됩니다.|
|[SA4   ](https://staticcheck.io/docs/checks/#SA4   )|실제로 아무것도 하지 않는 코드|
|[SA4000](https://staticcheck.io/docs/checks/#SA4000)|이진 연산자는 양쪽에 동일한 표현식이 있습니다.|
|[SA4001](https://staticcheck.io/docs/checks/#SA4001)|&*x로 단순화되어 x복사되지 않습니다.x|
|[SA4003](https://staticcheck.io/docs/checks/#SA4003)|부호 없는 값을 음수 값과 비교하는 것은 의미가 없습니다.|
|[SA4004](https://staticcheck.io/docs/checks/#SA4004)|루프는 한 번의 반복 후에 무조건 종료됩니다.|
|[SA4005](https://staticcheck.io/docs/checks/#SA4005)|절대 지켜지지 않는 현장 배정. 포인터 수신기를 사용하려고 하셨나요?|
|[SA4006](https://staticcheck.io/docs/checks/#SA4006)|변수에 할당된 값은 덮어쓰기 전에는 읽혀지지 않습니다. 오류 확인이나 데드 코드를 잊어버리셨나요?|
|[SA4008](https://staticcheck.io/docs/checks/#SA4008)|루프 조건의 변수는 절대 변경되지 않습니다. 잘못된 변수를 증가시키고 있습니까?|
|[SA4009](https://staticcheck.io/docs/checks/#SA4009)|함수 인수를 처음 사용하기 전에 덮어씁니다.|
|[SA4010](https://staticcheck.io/docs/checks/#SA4010)|결과는 append어디에서도 관찰되지 않습니다.|
|[SA4011](https://staticcheck.io/docs/checks/#SA4011)|효과가 없는 Break 문입니다. 외부 루프에서 벗어나려고 했나요?|
|[SA4012](https://staticcheck.io/docs/checks/#SA4012)|NaN과 같은 값이 없더라도 NaN과 값 비교|
|[SA4013](https://staticcheck.io/docs/checks/#SA4013)|부울 값을 두 번 부정하는 것( !!b)은 쓰는 것과 같습니다 b. 이는 중복되거나 오타입니다.|
|[SA4014](https://staticcheck.io/docs/checks/#SA4014)|if/else if 체인에 조건이 반복되고 부작용이 없습니다. 조건이 처음에 일치하지 않으면 두 번째에도 일치하지 않습니다.|
|[SA4015](https://staticcheck.io/docs/checks/#SA4015)|정수에서 변환된 부동 소수점 과 같은 함수를 호출하는 것은 math.Ceil유용한 일을 하지 않습니다.|
|[SA4016](https://staticcheck.io/docs/checks/#SA4016)|와 같은 특정 비트 연산은 x ^ 0유용한 작업을 수행하지 않습니다.|
|[SA4017](https://staticcheck.io/docs/checks/#SA4017)|부작용 없이 함수의 반환 값을 폐기하여 호출을 무의미하게 만듭니다.|
|[SA4018](https://staticcheck.io/docs/checks/#SA4018)|변수의 자체 할당|
|[SA4019](https://staticcheck.io/docs/checks/#SA4019)|동일한 파일에 여러 개의 동일한 빌드 제약 조건이 있음|
|[SA4020](https://staticcheck.io/docs/checks/#SA4020)|유형 스위치의 도달할 수 없는 Case 절|
|[SA4021](https://staticcheck.io/docs/checks/#SA4021)|x = append(y)는 다음과 같습니다x = y|
|[SA4022](https://staticcheck.io/docs/checks/#SA4022)|nil과 변수의 주소 비교|
|[SA4023](https://staticcheck.io/docs/checks/#SA4023)|유형이 지정되지 않은 nil과 인터페이스 값의 비교가 불가능합니다.|
|[SA4024](https://staticcheck.io/docs/checks/#SA4024)|내장 함수에서 불가능한 반환 값 확인|
|[SA4025](https://staticcheck.io/docs/checks/#SA4025)|0이 되는 리터럴의 정수 나누기|
|[SA4026](https://staticcheck.io/docs/checks/#SA4026)|Go 상수는 음의 0을 표현할 수 없습니다.|
|[SA4027](https://staticcheck.io/docs/checks/#SA4027)|(*net/url.URL).Query복사본을 반환하며 이를 수정해도 URL은 변경되지 않습니다.|
|[SA4028](https://staticcheck.io/docs/checks/#SA4028)|x % 1항상 0이다|
|[SA4029](https://staticcheck.io/docs/checks/#SA4029)|슬라이스 정렬에 대한 비효율적인 시도|
|[SA4030](https://staticcheck.io/docs/checks/#SA4030)|난수 생성에 대한 비효율적인 시도|
|[SA4031](https://staticcheck.io/docs/checks/#SA4031)|nil에 대해 절대 nil 값 확인|
|[SA5   ](https://staticcheck.io/docs/checks/#SA5   )|정확성 문제|
|[SA5000](https://staticcheck.io/docs/checks/#SA5000)|nil 맵에 할당|
|[SA5001](https://staticcheck.io/docs/checks/#SA5001)|Close가능한 오류를 확인하기 전에 연기|
|[SA5002](https://staticcheck.io/docs/checks/#SA5002)|빈 for 루프( for {})가 회전하여 스케줄러를 차단할 수 있습니다.|
|[SA5003](https://staticcheck.io/docs/checks/#SA5003)|무한 루프의 지연은 실행되지 않습니다.|
|[SA5004](https://staticcheck.io/docs/checks/#SA5004)|for { select { ...빈 기본 분기가 회전합니다.|
|[SA5005](https://staticcheck.io/docs/checks/#SA5005)|종료자는 종료된 객체를 참조하여 가비지 수집을 방지합니다.|
|[SA5007](https://staticcheck.io/docs/checks/#SA5007)|무한 재귀 호출|
|[SA5008](https://staticcheck.io/docs/checks/#SA5008)|잘못된 구조체 태그|
|[SA5009](https://staticcheck.io/docs/checks/#SA5009)|잘못된 Printf 호출|
|[SA5010](https://staticcheck.io/docs/checks/#SA5010)|불가능한 유형 주장|
|[SA5011](https://staticcheck.io/docs/checks/#SA5011)|가능한 nil 포인터 역참조|
|[SA5012](https://staticcheck.io/docs/checks/#SA5012)|짝수 크기를 기대하는 함수에 홀수 크기 슬라이스 전달|
|[SA6   ](https://staticcheck.io/docs/checks/#SA6   )|성능 문제|
|[SA6000](https://staticcheck.io/docs/checks/#SA6000)|regexp.Match루프에서 사용하거나 관련하려면 사용해야 합니다.regexp.Compile|
|[SA6001](https://staticcheck.io/docs/checks/#SA6001)|바이트 슬라이스로 맵을 인덱싱할 때 최적화 기회가 누락됨|
|[SA6002](https://staticcheck.io/docs/checks/#SA6002)|sync.Pool할당된 메모리 에 포인터가 아닌 값 저장|
|[SA6003](https://staticcheck.io/docs/checks/#SA6003)|문자열을 범위 지정하기 전에 문자열을 룬 조각으로 변환|
|[SA6005](https://staticcheck.io/docs/checks/#SA6005)|strings.ToLoweror를 사용한 비효율적인 문자열 비교strings.ToUpper|
|[SA9   ](https://staticcheck.io/docs/checks/#SA9   )|틀릴 가능성이 높은 모호한 코드 구성|
|[SA9001](https://staticcheck.io/docs/checks/#SA9001)|범위 루프의 지연은 예상할 때 실행되지 않을 수 있습니다.|
|[SA9002](https://staticcheck.io/docs/checks/#SA9002)|os.FileMode8진수로 의도된 것처럼 보이는 8진수가 아닌 문자를 사용합니다 .|
|[SA9003](https://staticcheck.io/docs/checks/#SA9003)|if 또는 else 분기의 빈 본문|
|[SA9004](https://staticcheck.io/docs/checks/#SA9004)|첫 번째 상수에만 명시적인 유형이 있습니다.|
|[SA9005](https://staticcheck.io/docs/checks/#SA9005)|공개 필드나 사용자 정의 마샬링 없이 구조체를 마샬링하려고 합니다.|
|[SA9006](https://staticcheck.io/docs/checks/#SA9006)|고정 크기 정수 값의 모호한 비트 이동|
|[SA9007](https://staticcheck.io/docs/checks/#SA9007)|삭제하면 안 되는 디렉토리 삭제|
|[SA9008](https://staticcheck.io/docs/checks/#SA9008)|else유형 주장의 분기가 올바른 값을 읽지 못하는 것 같습니다.|
|[S     ](https://staticcheck.io/docs/checks/#S     )|Simple|
|[S1    ](https://staticcheck.io/docs/checks/#S1    )|코드 단순화|
|[S1000 ](https://staticcheck.io/docs/checks/#S1000 )|단일 케이스 선택 대신 일반 채널 전송 또는 수신 사용|
|[S1001 ](https://staticcheck.io/docs/checks/#S1001 )|for 루프를 복사 호출로 교체|
|[S1002 ](https://staticcheck.io/docs/checks/#S1002 )|부울 상수와의 비교 생략|
|[S1003 ](https://staticcheck.io/docs/checks/#S1003 )|strings.Index호출을 다음으로 대체strings.Contains|
|[S1004 ](https://staticcheck.io/docs/checks/#S1004 )|bytes.Compare호출을 다음으로 대체bytes.Equal|
|[S1005 ](https://staticcheck.io/docs/checks/#S1005 )|공백 식별자의 불필요한 사용을 삭제하세요.|
|[S1006 ](https://staticcheck.io/docs/checks/#S1006 )|for { ... }무한 루프에 사용|
|[S1007 ](https://staticcheck.io/docs/checks/#S1007 )|원시 문자열 리터럴을 사용하여 정규식 단순화|
|[S1008 ](https://staticcheck.io/docs/checks/#S1008 )|반환 부울 ​​표현식 단순화|
|[S1009 ](https://staticcheck.io/docs/checks/#S1009 )|슬라이스에 대한 중복 nil 검사 생략|
|[S1010 ](https://staticcheck.io/docs/checks/#S1010 )|기본 슬라이스 인덱스 생략|
|[S1011 ](https://staticcheck.io/docs/checks/#S1011 )|단일을 사용하여 append두 개의 슬라이스를 연결합니다.|
|[S1012 ](https://staticcheck.io/docs/checks/#S1012 )|time.Now().Sub(x)다음 으로 교체time.Since(x)|
|[S1016 ](https://staticcheck.io/docs/checks/#S1016 )|구조체 필드를 수동으로 복사하는 대신 유형 변환을 사용하세요.|
|[S1017 ](https://staticcheck.io/docs/checks/#S1017 )|수동 트리밍을 다음으로 대체하십시오.strings.TrimPrefix|
|[S1018 ](https://staticcheck.io/docs/checks/#S1018 )|copy슬라이딩 요소에 사용|
|[S1019 ](https://staticcheck.io/docs/checks/#S1019 )|make중복 인수를 생략하여 호출 단순화|
|[S1020 ](https://staticcheck.io/docs/checks/#S1020 )|유형 어설션에서 중복된 nil 검사를 생략합니다.|
|[S1021 ](https://staticcheck.io/docs/checks/#S1021 )|변수 선언 및 할당 병합|
|[S1023 ](https://staticcheck.io/docs/checks/#S1023 )|중복 제어 흐름 생략|
|[S1024 ](https://staticcheck.io/docs/checks/#S1024 )|x.Sub(time.Now())다음 으로 교체time.Until(x)|
|[S1025 ](https://staticcheck.io/docs/checks/#S1025 )|fmt.Sprintf("%s", x)불필요하게 사용하지 마세요|
|[S1028 ](https://staticcheck.io/docs/checks/#S1028 )|다음을 사용하여 오류 구성을 단순화하세요.fmt.Errorf|
|[S1029 ](https://staticcheck.io/docs/checks/#S1029 )|문자열에 대한 직접 범위|
|[S1030 ](https://staticcheck.io/docs/checks/#S1030 )|사용 bytes.Buffer.String하거나bytes.Buffer.Bytes|
|[S1031 ](https://staticcheck.io/docs/checks/#S1031 )|루프 주변의 중복된 nil 검사를 생략합니다.|
|[S1032 ](https://staticcheck.io/docs/checks/#S1032 )|sort.Ints(x), 및sort.Float64s(x)​sort.Strings(x)|
|[S1033 ](https://staticcheck.io/docs/checks/#S1033 )|통화 주변에 불필요한 가드delete|
|[S1034 ](https://staticcheck.io/docs/checks/#S1034 )|유형 주장의 결과를 사용하여 사례 단순화|
|[S1035 ](https://staticcheck.io/docs/checks/#S1035 )|net/http.CanonicalHeaderKey메소드 호출 에 대한 중복 호출net/http.Header|
|[S1036 ](https://staticcheck.io/docs/checks/#S1036 )|지도 접근에 대한 불필요한 가드|
|[S1037 ](https://staticcheck.io/docs/checks/#S1037 )|정교한 수면 방식|
|[S1038 ](https://staticcheck.io/docs/checks/#S1038 )|형식화된 문자열을 인쇄하는 불필요하게 복잡한 방법|
|[S1039 ](https://staticcheck.io/docs/checks/#S1039 )|불필요한 사용fmt.Sprint|
|[S1040 ](https://staticcheck.io/docs/checks/#S1040 )|현재 유형에 대한 유형 주장|
|[ST    ](https://staticcheck.io/docs/checks/#ST    )|stylecheck|
|[ST1   ](https://staticcheck.io/docs/checks/#ST1   )|문체 문제|
|[ST1000](https://staticcheck.io/docs/checks/#ST1000)|패키지 설명이 잘못되었거나 누락되었습니다.|
|[ST1001](https://staticcheck.io/docs/checks/#ST1001)|도트 가져오기는 권장되지 않습니다.|
|[ST1003](https://staticcheck.io/docs/checks/#ST1003)|잘못 선택된 식별자|
|[ST1005](https://staticcheck.io/docs/checks/#ST1005)|형식이 잘못된 오류 문자열|
|[ST1006](https://staticcheck.io/docs/checks/#ST1006)|잘못 선택한 수신자 이름|
|[ST1008](https://staticcheck.io/docs/checks/#ST1008)|함수의 오류 값은 마지막 반환 값이어야 합니다.|
|[ST1011](https://staticcheck.io/docs/checks/#ST1011)|유형의 변수에 대해 잘못 선택된 이름time.Duration|
|[ST1012](https://staticcheck.io/docs/checks/#ST1012)|오류 변수에 대해 잘못 선택된 이름|
|[ST1013](https://staticcheck.io/docs/checks/#ST1013)|매직 넘버가 아닌 HTTP 오류 코드에 상수를 사용해야 합니다.|
|[ST1015](https://staticcheck.io/docs/checks/#ST1015)|스위치의 기본 케이스는 첫 번째 또는 마지막 케이스여야 합니다.|
|[ST1016](https://staticcheck.io/docs/checks/#ST1016)|일관된 메소드 수신자 이름 사용|
|[ST1017](https://staticcheck.io/docs/checks/#ST1017)|Yoda 조건을 사용하지 마십시오|
|[ST1018](https://staticcheck.io/docs/checks/#ST1018)|문자열 리터럴에서 너비가 0인 문자와 제어 문자를 사용하지 마세요.|
|[ST1019](https://staticcheck.io/docs/checks/#ST1019)|동일한 패키지를 여러 번 가져오기|
|[ST1020](https://staticcheck.io/docs/checks/#ST1020)|내보낸 함수의 문서는 함수 이름으로 시작해야 합니다.|
|[ST1021](https://staticcheck.io/docs/checks/#ST1021)|내보낸 유형의 문서는 유형 이름으로 시작해야 합니다.|
|[ST1022](https://staticcheck.io/docs/checks/#ST1022)|내보낸 변수나 상수의 문서는 변수 이름으로 시작해야 합니다.|
|[ST1023](https://staticcheck.io/docs/checks/#ST1023)|변수 선언의 중복 유형|
|[QF    ](https://staticcheck.io/docs/checks/#QF    )|quickfix|
|[QF1   ](https://staticcheck.io/docs/checks/#QF1   )|빠른 수정|
|[QF1001](https://staticcheck.io/docs/checks/#QF1001)|드 모르간(De Morgan)의 법칙을 적용하세요|
|[QF1002](https://staticcheck.io/docs/checks/#QF1002)|태그가 없는 스위치를 태그가 있는 스위치로 변환|
|[QF1003](https://staticcheck.io/docs/checks/#QF1003)|if/else-if 체인을 태그된 스위치로 변환|
|[QF1004](https://staticcheck.io/docs/checks/#QF1004)|strings.ReplaceAll대신 사용strings.Replace​n == -1|
|[QF1005](https://staticcheck.io/docs/checks/#QF1005)|통화 확장math.Pow|
|[QF1006](https://staticcheck.io/docs/checks/#QF1006)|if+를 break루프 상태로 들어 올리기|
|[QF1007](https://staticcheck.io/docs/checks/#QF1007)|조건부 할당을 변수 선언에 병합|
|[QF1008](https://staticcheck.io/docs/checks/#QF1008)|선택기 표현식에서 포함된 필드 생략|
|[QF1009](https://staticcheck.io/docs/checks/#QF1009)|연산자 time.Time.Equal대신 사용==|
|[QF1010](https://staticcheck.io/docs/checks/#QF1010)|인쇄할 때 바이트 조각을 문자열로 변환합니다.|
|[QF1011](https://staticcheck.io/docs/checks/#QF1011)|변수 선언에서 중복 유형 생략|
|[QF1012](https://staticcheck.io/docs/checks/#QF1012)|fmt.Fprintf(x, ...)대신 사용x.Write(fmt.Sprintf(...))|
