let input = 100;

function factorial(val) {
  let result = 1;
  for (let i = 1; i <= val; i++) {
    result *= i;
  }
  return result;
}

function trailingZero(val) {
  let fact = factorial(val);
  let count = 0;
  while (fact > 0) {
    if (fact % 10 === 0) {
      count++;
      fact = parseInt(fact / 10);
    } else {
      break;
    }
  }
  return count;
}

function trailingZeroEffi(val) {
  let result = 0;
  for (let i = 5; i <= val; i = i * 5) {
    result = result + parseInt(val / i);
  }
  return result;
}

console.log(trailingZeroEffi(input));
