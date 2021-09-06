var x = 1;

while (x < 21) {
    let str = '';
    let isDiv = false;

    // check divisibility
    if(0 === (x % 3)) {
      str = 'Julia';
      isDiv = true;
    }
    if(0 === (x % 5)) {
      str += 'James';
      isDiv = true;
    }
    if(!isDiv) {
      str = x.toString();
    }

    // print Julia, James, or JuliaJames
    console.log(str);

    // increment x
    x++;
}
