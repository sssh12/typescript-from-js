const computer: { brand: string; ramGb: number; hasSSD: boolean } = {
  brand: "삼성",
  ramGb: 16,
  hasSSD: true,
};

console.log(computer.brand);
console.log(computer.ramGb);
console.log(computer.hasSSD);

// computer.hasSSD = "16GB"; // number 타입에 string 할당 불가
