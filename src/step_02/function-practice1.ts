function double1(num: number): number {
  return num * 2;
}

const double2 = function (num: number): number {
  return num * 2;
};

const double3 = (num: number): number => {
  return num * 2;
};

function getFullName1(last: string, first: string): string {
  return `${last} ${first}`;
}

const getFullName2 = function (last: string, first: string): string {
  return `${last} ${first}`;
};

const getFullName3 = (last: string, first: string): string => {
  return `${last} ${first}`;
};

console.log(double1(3));
console.log(double2(6));
console.log(double3(11));

console.log(getFullName1("오", "승하"));
console.log(getFullName2("오", "승하"));
console.log(getFullName3("오", "승하"));
