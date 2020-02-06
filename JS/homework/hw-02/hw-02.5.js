let array = [-13, 12, -4, 23, -5, 3, -6, 1, -2, 10, -45, 32, -98, 67, -55, 18, -28, 6, -9, 15];

filterRange = (array, a, b) => {
  if (b < a) {
    throw new Error('"a" parameter cannot be smaller than "b"');
  }

  return array.filter(number => {
    return a <= number && number <= b;
  });
};

console.log(array);
console.log(filterRange(array, -10, 10));
