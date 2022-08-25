// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior.

const range = (start, end, step = 1) => {
  let result = [];
  if (step < 0) {
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  }
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
};

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers.

const sum = (arr) => {
  return arr.reduce((init, value) => init + value);
};

// Your code here.

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
