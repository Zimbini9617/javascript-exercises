// Write a function `reverseArray` that accepts an array as an argument. The function should return a
// array containing the elements of the original array in reverse order.

let reverseArray = function(arr){
  let newArr = [];
  for(let i = arr.length - 1; i >= 0; i--) {
    let element = arr[i]
    newArr.push(element);
  }
  return newArr;
}

console.log(reverseArray(["zero", "one", "two", "three"]));
console.log(reverseArray([7, 1, 8])); 