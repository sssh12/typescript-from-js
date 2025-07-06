# truthy와 falsy란? – 자바스크립트의 참/거짓 판별

---

## 개념

자바스크립트에서 조건문(`if`, `while` 등)에 값이 들어갈 때,  
그 값이 **자동으로 boolean(true/false)로 변환**되어 사용됩니다.

이때

- **true로 변환되는 값**을 truthy(트루시)
- **false로 변환되는 값**을 falsy(펄시)  
  라고 부릅니다.

### 예시

```js
if ("hello") {
  console.log("실행됨");
} // 실행됨 (문자열은 truthy)
if (0) {
  console.log("실행 안 됨");
} // 실행 안 됨 (0은 falsy)
if ([]) {
  console.log("실행됨");
} // 실행됨 (빈 배열도 truthy)
if ("") {
  console.log("실행 안 됨");
} // 실행 안 됨 (빈 문자열은 falsy)
```

---

## falsy 값 종류

자바스크립트에서 **딱 6가지 값**만 falsy입니다.  
이외의 값은 모두 truthy입니다.

| 값          | 설명                      |
| ----------- | ------------------------- |
| `false`     | 불리언 false              |
| `0`         | 숫자 0                    |
| `NaN`       | 숫자가 아님(Not a Number) |
| `""`        | 빈 문자열                 |
| `null`      | 값이 없음                 |
| `undefined` | 정의되지 않음             |

※ 이 외에는 **전부 truthy** (빈 배열 `[]`, 빈 객체 `{}` 등도 truthy!)

---

## 왜 중요한가?

- 조건문에서 예상과 다르게 동작하는 버그를 막을 수 있음
- 값의 존재 여부를 체크할 때 (`if (value) { ... }`)  
  → value가 falsy면 실행 안 됨
- 타입 변환/자동 변환에 익숙해질 수 있음

---

## 핵심 요약

- **truthy**: 조건문에서 true로 간주되는 값 (대부분의 값)
- **falsy**: 조건문에서 false로 간주되는 값 (false, 0, NaN, "", null, undefined)
- 조건문, 함수, 객체 속성 체크 등에서 매우 자주 사용됨

---
