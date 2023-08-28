// cache function
const memoFib = (func) => {
  const cache = {};
  return (x) => {
    if (x in cache) {
      console.log("cache:", cache[x]);
      return cache[x];
    }
    return (cache[x] = func(x));
  };
};

const fib = memoFib((n) => {
  if ([0, 1].includes(n)) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
});

const logFibFromX = (x) => {
  for (let i = 0; i <= x; i++) {
    console.log(`position ${i}: ${fib(i)}`);
  }
};

logFibFromX(10);
