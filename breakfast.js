let breakfast = {
  name: 'The Lumberjack',
  price: 9.95,
  priceCurrency: '$',
  ingredients: ['eggs', 'sausage', 'toast', 'hashbrowns', 'pancakes'],
  toString: function () {
    return '{ ' + breakfast.name + ', ' + breakfast.priceCurrency + breakfast.price + ', [' + breakfast.ingredients + '] }';
  }
};

console.log(breakfast);
console.log(breakfast.toString());