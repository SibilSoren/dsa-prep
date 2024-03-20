let input = 5;

function factorial(val) {
  let result = 1;
  for (let i = 1; i <= val; i++) {
    result *= i;
  }
  return result;
}

function factorialRecursion(val) {
  if (val === 0 || val === 1) return 1;
  return val * factorialRecursion(val - 1);
}

// console.log(factorial(input));
console.log(factorialRecursion(input));
