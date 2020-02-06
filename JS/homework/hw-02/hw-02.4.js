let array = [-13, 12, -4, 23, -5, 3, -6, 1, -2, 10, -45, 32, -98, 67, -55, 18, -28, 6, -9, 15];
console.log(array);


array.sort((a, b) => {
    return a - b;
});
console.log(array);

array.sort((a, b) => {
    return b - a;
});
console.log(array);

let onlyPositive = array.filter((number) => {
    return number >= 0;
});
console.log(onlyPositive);

let onlyNegative = array.filter((number) => {
    return number >= 0;
});
console.log(onlyNegative);