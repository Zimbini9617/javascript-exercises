// Write a function `characterCount` that accepts a string as an argument. The function should return
// an object containing the count of characters in the string.

function characterCount(str) {
  let obj = {}
  for(let i =0; i<str.length; i++){
  let char = str[i]
  if(obj.hasOwnProperty(char)){
  obj[char] += 1
  }else {
  obj[char] = 1
  }
  }
  return obj
  }
  console.log(characterCount("evening")); 
  console.log(characterCount("mississippi")); 
  console.log(characterCount("chili")); 