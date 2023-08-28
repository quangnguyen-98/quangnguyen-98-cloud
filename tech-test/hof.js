const grades = [
  { name: "John", grade: 8, sex: "M" },
  { name: "Sarah", grade: 12, sex: "F" },
  { name: "Bob", grade: 16, sex: "M" },
  { name: "Johnny", grade: 2, sex: "M" },
  { name: "Ethan", grade: 4, sex: "M" },
  { name: "Paula", grade: 18, sex: "F" },
  { name: "Donald", grade: 5, sex: "M" },
  { name: "Jennifer", grade: 13, sex: "F" },
  { name: "Courtney", grade: 15, sex: "F" },
  { name: "Jane", grade: 9, sex: "F" },
];

const isBoy = (student) => student.sex === "M";
const isGirl = (student) => student.sex !== "M";

const getBoys = (arr) => arr.filter(isBoy);
const getGirl = (arr) => arr.filter(isGirl);

const average = (arr) =>
  arr.reduce((cur, next) => cur + next.grade, 0) / arr.length;

const maxGrade = (arr) => Math.max(...arr.map((item) => item.grade));

const minGrade = (arr) => Math.min(...arr.map((item) => item.grade));

// Tìm thứ hạng trung bình của cả lớp
console.log("Hạng trung bình của cả lớp: ", average(grades));

// Tìm thứ hạng trung bình của nam trong lớp
console.log("Hạng trung bình của nam trong lớp: ", average(getBoys(grades)));

// Tìm thứ hạng trung bình của Nữ trong lớp
console.log("Hạng trung bình của Nữ trong lớp: ", average(getGirl(grades)));

// Tìm thứ hạng cao nhất của Nam trong lớp
console.log("Hạng cao nhất của Nam trong lớp: ", maxGrade(getBoys(grades)));

// Tìm thứ hạng cao nhất của Nữ trong lớp
console.log("Hạng cao nhất của Nữ trong lớp: ", maxGrade(getGirl(grades)));

// Tìm thứ hạng thấp nhất của Nam trong lớp
console.log("Hạng thấp nhất của Nam trong lớp: ", minGrade(getBoys(grades)));

// Tìm thứ hạng thấp nhất của Nữ trong lớp
console.log("Hạng thấp nhất của Nữ trong lớp: ", minGrade(getGirl(grades)));

// Tìm thứ hạng cao nhất của cả lớp
console.log("Tìm thứ hạng cao nhất của cả lớp: ", maxGrade(grades));

// Tìm thứ hạng thấp nhất của cả lớp
console.log("Tìm thứ hạng thấp nhất của cả lớp: ", minGrade(grades));
