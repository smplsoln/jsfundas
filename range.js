function range(start, end, step) {
  let arr = [];
  if (start === undefined || end === undefined || step === undefined
    || 0 > step || start >= end) {
    return arr;
  }
  arr.push(start);
  for (let i = 1; i <= end - start; i++) {
    if (i % step === 0) {
      arr.push(i + start);
    }
  }
  return arr;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));