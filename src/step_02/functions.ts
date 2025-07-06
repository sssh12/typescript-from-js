// 매개 변수와 반환값에 타입 명시
function greet(name: string): string {
  return "Hello, " + name + "!";
}

// 함수 표현식 (익명 함수)
const add = function (a: number, b: number): number {
  return a + b;
};

// 화살표 함수
const multiply = (a: number, b: number): number => a * b;

// 반환값이 없는 함수 (void)
function log(message: string): void {
  console.log(message);
}

// 선택적 매개 변수 (?:)
function introduce(name: string, age?: number): string {
  if (age !== undefined) {
    return `${name}은(는) ${age}살 입니다.`;
  }
  return `${name}의 나이는 비밀!`;
}

// 기본값 매개 변수 (=)
function pow(x: number, y: number = 2): number {
  return x ** y;
}

// 사용 예시
console.log(greet("Bob")); // Hello, Bob!
console.log(add(2, 3)); // 5
console.log(multiply(4, 5)); // 20
log("타입스크립트 함수 연습"); // 타입스크립트 함수 연습
console.log(introduce("Alice")); // Alice의 나이는 비밀!
console.log(introduce("Tom", 18)); // Tom은(는) 18살입니다.
console.log(pow(3)); // 9 (3의 제곱)
console.log(pow(2, 8)); // 256 (2의 8제곱)

// 에러 예시
// greet(123);           // string 타입 자리인데 number가 들어가서 에러
// add("a", "b");        // number 타입 자리인데 string이 들어가면 에러
