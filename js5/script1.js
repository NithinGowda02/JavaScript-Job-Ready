let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Keep only even numbers
let new_arr = arr.filter((ele) => ele % 2 === 0);
let sum = new_arr.reduce((acc, ele) => acc + ele, 0);

console.log(new_arr);
console.log(sum);
