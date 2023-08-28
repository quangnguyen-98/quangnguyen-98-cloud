const createCounter = () => {
  let counter = 0;
  const increase = () => {
    return ++counter;
  };
  return increase
};


const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());