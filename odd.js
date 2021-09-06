const isOdd  = function (num) {
  return num % 2 === 1;
}

const tenIsOdd = isOdd(3);
const elevenIsOdd = isOdd(8);

console.log(tenIsOdd);
console.log(elevenIsOdd);

console.log(isOdd(3));
console.log(isOdd(8));