// 명시적 타입 지정
let userName: string = "Alice"; // 문자열만 가능
let age: number = 25; // 숫자만 가능
const PI: number = 3.14; // 상수

// 타입 추론 (타입을 쓰지 않아도, 값으로 타입을 결정)
let city = "Seoul"; // string으로 추론
let score = 100; // number로 추론

// 타입 에러 예시: 잘못된 타입 할당 시 컴파일 에러 발생
// age = "스물 다섯"; // 에러: 'string' 형식을 'number' 형식에 할당할 수 없습니다.

// const의 특징: 변수 자체는 재할당 불가, 하지만 객체/배열의 "속성"은 변경 가능
const user = { id: 1, name: "Alice" };
// user = { id: 2, name: "Bob" }; // 에러: const 변수 재할당 불가
user.name = "Bob"; // 속성은 변경 가능
