var umbrella = {
  color: "pink",
  isOpen: true,
  open: function () {
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
  },
  // your code goes here
  close: function () {
    if (umbrella.isOpen === false) {
      return "The umbrella is already closed!";
    } else {
      umbrella.isOpen = false;
      return "Julia closes the umbrella!";
    }
  },
};

console.log('Umbrella = ' + umbrella);
console.log(umbrella.open());
console.log('Umbrella isOpen = ' + umbrella.isOpen + '. setting it to false ...');
umbrella.isOpen = false;
console.log('Umbrella isOpen = ' + umbrella.isOpen);
console.log(umbrella.open());
console.log('Umbrella isOpen = ' + umbrella.isOpen);
console.log(umbrella.open());
console.log('Umbrella isOpen = ' + umbrella.isOpen);
console.log(umbrella.close());
console.log('Umbrella isOpen = ' + umbrella.isOpen + '. setting it to true');
umbrella.isOpen = true;
console.log('Umbrella isOpen = ' + umbrella.isOpen);
console.log(umbrella.close());
console.log('Umbrella isOpen = ' + umbrella.isOpen);