/* for a given array with marks of student -> [85,97,44,37,76,60] find the average marks of the entire class.*/

const marks = [85, 97, 44, 37, 76, 60]
let sum = 0

for (let i = 0; i < marks.length; i++) {
  sum += marks[i]
}

const average = sum / marks.length
console.log(`Average of the class : ${average}`)
