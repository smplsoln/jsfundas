var num = 99;

while (2 < num) {

  // print lyrics using num
  console.log(num + ' bottles of juice on the wall! '
    + num + ' bottles of juice! Take one down, pass it around... '
    + (num - 1) + ' bottles of juice on the wall!');

  // decrement num
  num--;

}
// handle num = 2 and 1 out of while loop
// to just run these checks only once
// after the while num = 2
console.log(num + " bottles of juice on the wall! "
  + num + " bottles of juice! Take one down, pass it around... "
  + (num - 1) + " bottle of juice on the wall!");

num--;

// num = 1
console.log(num + ' bottle of juice on the wall! '
  + num + ' bottle of juice! Take one down, pass it around... '
  + (num - 1) + ' bottles of juice on the wall!');
