// Write a function `removeFirstVowel` that accepts a string as an argument. The function should return
// the string with it's first vowel removed.

let removeFirstVowel = function (str) {
  let vowels = 'aeiou';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (vowels.includes(char)) {
      return str.slice(0, i) + str.slice(i + 1);
    }
  }

  return str;
};

console.log(removeFirstVowel("volcano")); 
console.log(removeFirstVowel("celery")); 
console.log(removeFirstVowel("juice")); 
console.log(removeFirstVowel("bridge")); 
console.log(removeFirstVowel("try")); 