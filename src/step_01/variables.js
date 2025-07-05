// 변수 선언과 할당 예시
let name = "Alice"; // 문자열(string)
let age = 25; // 숫자(number)
const PI = 3.14; // 상수(constant), 값 변경 불가

// 자바스크립트는 타입을 따로 쓰지 않아도 값에 따라 자동으로 타입이 정해짐
// (이걸 "동적 타입"이라고 한다.)

age = "스물 다섯"; // 숫자였다가 문자열로 변경해도 에러가 나지 않음

// 블록 스코프 예시
if (true) {
  let message = "Hello!";
  console.log(message); // 정상 출력
}

// console.log(message); // 에러 - message는 if문 블록 안에서만 사용 가능

// var의 함수 스코프, 호이스팅 예시
function testVar() {
  console.log(num); // undefined (에러 아님, 호이스팅 때문)
  var num = 5;
  console.log(num); // 5
}
testVar();

// let, const는 호이스팅이 있지만, 선언 전에 사용하면 에러가 발생
function testLet() {
  // console.log(count); // ReferenceError: Cannot access 'count' before initialization
  let count = 10;
  console.log(count); // 10
}
testLet();
