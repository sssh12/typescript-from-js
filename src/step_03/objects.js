// 사용자(user) 객체 생성
const user = {
  userName: "오승하", // 문자열 속성
  age: 26, // 숫자 속성
  isStudent: true, // 불리언 속성
  // 메서드(함수 속성): 자기 소개 출력
  introduce: function () {
    // this는 이 객체 자신을 가리킴
    console.log(
      `안녕하세요. 저는 ${this.userName}고 나이는 ${this.age}살 입니다.`
    );
  },
};

// 속성 값 접근 (점 표기법)
console.log(user.userName); // 오승하
console.log(user.age); // 26

// 값 변경
user.age = 23;
console.log(user.age); // 23

// 메서드 실행
user.introduce(); // 안녕하세요. 저는 오승하고 나이는 23살 입니다.

// 새로운 속성 추가
user.hobby = "독서";
console.log(user.hobby); // 독서

// 없는 속성에 접근하면 undefined
console.log(user.email); // undefined
