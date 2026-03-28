let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

num.forEach((element, idx) => {
    num[idx] = element * element;
});

console.log(num)