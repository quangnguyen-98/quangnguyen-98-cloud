function* generator() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
  // let i = 0;
  // while (true) {
  //   ++i;
  //   yield i;
  // }
}

const g1 = generator();

console.log(g1.next());
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());
