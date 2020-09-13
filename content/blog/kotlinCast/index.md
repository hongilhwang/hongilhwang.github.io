---
title: 코틀린의 캐스트
date: "2020-09-13T21:41:00.000Z"
description: 코틀린의 캐스트 하는 방법을 알아 본다.
---
# 스마트 캐스트
스마트 캐스트는 is로 변수에 든 값의 타입을 검사한 다음에 그 값이 바뀔 수 없는 경우에만 작동한다.
```kotlin
interface Expr

class Num(val value: Int) : Expr

class Sum(val left: Expr, val right: Expr) : Expr

fun eval(e: Expr) : Int{
    if(e is Num){
        val n = e as Num <1>
        return n.value
    }

    if( e is Sum){
        return eval(e.right) + eval(e.left) <2>
    }

    throw IllegalArgumentException("Unknown expression")
}

fun main(){
    println(eval(Sum(Sum(Num(1), Num(2)), Num(4))))
}
```
<1>은 입력 하지 않아도 에러가 발생 되지 않는다. <2> 와같이 형변환 없이도 사용이 가능하다.
그것은 if 조건문에서 `is`를 통해 스마트 캐스트가 되어 블럭 안에서 이미 캐스트가 된 상태이다.

# 일반적 명시 캐스트 
명시적으로 타입 캐스팅 하려면 `as` 키워드를 사용한다.
```kotlin
val n = e as Num
```
해당값이 어떤 형태인지 확실 하다면 `as`를 사용하면 되지만, 불명확 하다면 메소드를 호출 하여야 한다.
예를 들어 다음과 같다.
```kotlin
val str: String = "72"
val number: Int = str.toInt()
```

공부한 책
---
* 코틀린 인 액션

