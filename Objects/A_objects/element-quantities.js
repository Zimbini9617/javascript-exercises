// Create a function `elementQuantities` that accepts an object as an argument. The object contains
// elements as keys and quantities as values. The function should return an array containing the elements
// appearing with the correct quantities. See the examples.

let elementQuantities = function(obj) {
  let arr = [];
  for(let key in obj) {
      let value = obj[key];
      for(let i = 0; i <value; i++) {
          arr.push(key);
      }
  }

  return arr;
}

let quantities1 = { cat: 3, bird: 1, dog: 2 };
console.log(elementQuantities(quantities1)); 

let quantities2 = { blue: 3, brown: 1 };
console.log(elementQuantities(quantities2)); 