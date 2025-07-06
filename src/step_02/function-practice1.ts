function double1(num: number): number {
  return num * 2;
}

const double2 = function (num: number): number {
  return num * 2;
};

const double3 = (num: number): number => {
  return num * 2;
};

function getFullName1(first: string, last: string): string {
  return `${first} ${last}`;
}

const getFullName2 = function (first: string, last: string): string {
  return `${first} ${last}`;
};

const getFullName3 = (first: string, last: string): string => {
  return `${first} ${last}`;
};

console.log(double1(3));
console.log(double2(6));
console.log(double3(11));

console.log(getFullName1("오", "승하"));
console.log(getFullName2("오", "승하"));
console.log(getFullName3("오", "승하"));
