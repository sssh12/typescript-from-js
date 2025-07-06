// 객체 타입 지정(명시적 타입)
const book: { title: string; pageCount: number; isRead: boolean } = {
  title: "타입스크립트",
  pageCount: 350,
  isRead: false,
};

// 속성 타입이 다르면 에러 발생
// book.pageCount = "많다." // number 타입에 string 할당 불가

// 인터페이스: 여러 객체에 재사용 가능한 구조 약속
interface Movie {
  title: string;
  director: string;
  year: number;
  // awards 속성은 선택적
  awards?: string[];
}

// 인터페이스를 사용한 객체 생성
const movie1: Movie = {
  title: "인셉션",
  director: "크리스토퍼 놀란",
  year: 2010,
};

const movie2: Movie = {
  title: "기생충",
  director: "봉준호",
  year: 2019,
  awards: ["아카데미 작품상", "칸 영화제 황금종려상"],
};

// 인터페이스가 지정한 속성이 없거나, 타입이 다르면 에러
// const badMovie: Movie = { title: "오류", director: "감독" }; // year 누락 -> 에러
// movie1.year = "이천십년"; // number 타입에 string 할당 불가

// 선택적 속성 사용 예시
function printAwards(movie: Movie) {
  // awards가 있으면 출력, 없으면 "수상 내역 없음"
  if (movie.awards) {
    console.log(`${movie.title} 수상 내역: ${movie.awards.join(", ")}`);
  } else {
    console.log(`${movie.title} 수상 내역: 없음`);
  }
}

printAwards(movie1); // 인셉션 수상 내역: 없음
printAwards(movie2); // 기생충 수상 내역: 아카데미 작품상, 칸 영화제 황금종려상

// interface Movie { ... }는 Movie라는 객체 구조를 미리 약속하는 선언
// awards?: string[]에서 ?는 선택적(optional) 속성. 없어도 에러가 안 남
// 타입스크립트는 속성의 타입도 엄격하게 검사
