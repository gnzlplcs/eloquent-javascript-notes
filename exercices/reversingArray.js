// For this exercise, write two functions, reverseArray and reverseArrayInPlace.
// The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.

const reverseArray = (arr) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.unshift(arr[i]);
  }
  return newArray;
};

// The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

const reverseArrayInPlace = (arr) => {
  let tempArray = reverseArray(arr);
  for (let index = 0; index < tempArray.length; index++) {
    arr.shift();
    arr.push(tempArray[index]);
  }
  arr = [...tempArray];
  return arr;
};

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
