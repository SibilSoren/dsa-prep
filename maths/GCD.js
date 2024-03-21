let a = 9;
let b = 10;

function getGCD(num1, num2) {
  let min = Math.min(num1, num2);
  let result = 1;
  for (let i = 2; i <= min; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
    }
  }
  return result;
}

// console.log(getGCD(a, b));

//Euclidean algo
function gcd(num1, num2) {
  while (num1 != num2) {
    if (num1 > num2) {
      num1 = num1 - num2;
    } else {
      num2 = num2 - num1;
    }
  }
  return num1;
}

// console.log(gcd(12, 15));

function gcdOptimized(num1, num2) {
  if (num2 == 0) {
    return num1;
  } else {
    return gcdOptimized(num2, parseInt(num1 % num2));
  }
}

console.log(gcdOptimized(12, 15));
