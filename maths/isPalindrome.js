let input = 121;

function isPalindrome(val) {
  let str = input + "";
  let reversedVal = str.split("").reverse().join("");
  return reversedVal == input;
}

console.log(isPalindrome(input));
