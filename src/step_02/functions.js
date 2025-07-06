// 함수 선언문
function greet(name) {
  return "Hello, " + name + "!";
}

// 함수 표현식 (익명 함수)
const add = function (a, b) {
  return a + b;
};

// 화살표 함수
const multiply = (a, b) => a * b;

// 매개 변수를 지정하지 않으면 undefined가 들어감
function log(message) {
  console.log(message);
}

// 반환값(return)이 없는 함수도 가능
function printHello() {
  console.log("Hello!");
}

// 사용 예시
console.log(greet("Bob")); // Hello, Bob!
console.log(add(2, 3)); // 5
console.log(multiply(4, 5)); // 20
log("자바스크립트 함수 연습"); // 자바스크립트 함수 연습
printHello(); // Hello!
