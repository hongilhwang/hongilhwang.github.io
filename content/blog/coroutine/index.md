---
title: 코루틴
date: "2023-07-09T23:08:00.000Z"
description: 코루틴의 개념을 이해 한다.
---

# 코루틴
React & Kotlin을 주로 사용하다 보니, 코루틴과 제너레이터 개념을 정리 할 필요가 있었다. 그래서 이번주에는 이 내용을 검색 해보며, 정리 해보았다.

# 코루틴이란
 일반 적인 함수를 호출 되고, 바로 해당 작업을 진행 하고, 반환하고 종료 하게 된다. 하지만 코루틴은 서브 루틴을 일시 정지하고 재개할 수 있는 구성이 포함 되어 있다. 호출자가 코루틴 함수를 일시 정지하고 재개 할수 있다는 말이다.

 이로 인해 어떤 작업으로 인해 작업을 대기 해야 할때, 일지 정지후 필요에 따라서 다시 시작 함으로써 I/O처리를 극대화 함으로써 CPU의 유효 시간(Idle time)을 최소화 할 수 있다.

## 코루틴은 멀티쓰레드의 대체가 아니다.
 루틴이라는 용어 때문일까? 멀티쓰레드의 대체로 많이들 생각 하지만, 그렇지는 않고, 코루틴은 일시정지와 재개가 가능한 함수이기 때문에 기본적으로 하나의 스레드를 가진다. 단지 그 뿐이다.

# 제너레이터
 Javascript 에서 saga를 사용하다 보면 yield라는 키워드를 확인 할수 있다. 해당 키워드를 포함한 함수를 Generator라고 부른다.( C#, Python에도 있다고 한다.)

```javascript
function* foo(index) {
  while (index < 2) {
    yield index;
    index++;
  }
}

const iterator = foo(0);

console.log(iterator.next().value);
// Expected output: 0

console.log(iterator.next().value);
// Expected output: 1
```

  Generator 는 즉시 값을 처리 하지 않고 호출자의 필요에 따라서 함수를 재개하여 값을 리턴 한다. Generator는 코루틴하다고 할수 있다.
 또 그것을 바탕으로 JavaScript는 Async / Await이 만들었다. 

# Go의 고루틴
 Golang에서는 언어 차원에서의 스레드와 코루틴을 혼합하여 고루틴을 만들었으며, 고루틴을 이용하여 운영체제가 제공하는 스레드보다 작고 빠른 경량화된 스레드 개념을 제공한다.

# Kotlin의 코루틴

## Generator

```kotlin
fun main() {
    println(sequence.take(7).toList()) // [0, 1, 3, 5, 8, 24, 72]
}
val sequence = sequence {
	val start = 0
    // yielding a single value
    yield(start)
    // yielding an iterable
    yieldAll(1..5 step 2)
    // yielding an infinite sequence
    yieldAll(generateSequence(8) { it * 3 })
    
}
```
 코틀린은 Generator는 sequence와 yield 함수를 이용하여 구현 할 수 있다.

## suspend
 코틀린에서 `suspend` 가 붙는 함수는 코루틴을 의미 하고, 그 코루틴을 suspend 하는 지점이다. 모든 suspend 함수 호출을 따라가면 맨 아래에는 `suspendCoroutine` 이라는 low-level API 호출이 있으며, 이 함수를 호출하여 현재 코루틴의 실행을 멈춘다. 실행을 재개하는 것은 `suspendCoroutine`함수의 인자로 전달하는 콜백으로 시스템이 던져주는 `Continuation` 객체를 통해 이뤄진다. `suspendCoroutine`과 `Continuation`을 통해 suspend / resume이 가능하다.

