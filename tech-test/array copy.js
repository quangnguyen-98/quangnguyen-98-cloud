const arr = [
  {
    name: "quang",
    sex: "female",
    age: 16,
  },
  {
    name: "tu",
    sex: "male",
    age: 18,
  },
  {
    name: "tu",
    sex: "male",
    age: 11,
  },
];

const result = arr.reduce((prev, curr) => {
  // return 1
  if (curr.sex === "male" && curr.age > 15) {
    return [...prev, curr];
  }
  return prev
}, []);

console.log(result);
