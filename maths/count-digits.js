let input = 23;

function countDigits(val) {
  let count = 0;
  while (val > 0) {
    val = parseInt(val / 10);
    count++;
  }
  return count;
}

console.log(countDigits(input));
