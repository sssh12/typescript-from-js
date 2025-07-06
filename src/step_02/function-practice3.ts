function multiplyWithDefault(x: number, y: number = 5): number {
  return x * y;
}

console.log(multiplyWithDefault(3));
console.log(multiplyWithDefault(4, 6));
