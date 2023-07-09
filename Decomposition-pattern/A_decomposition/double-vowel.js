// Write a function `doubleVowel` that accepts a string as an argument. The function should return
// the string where every occurrence of a vowel in the original string is repeated twice consecutively.
// Vowels are the letters a, e, i, o, u.

function doubleVowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    result += char;

    if (vowels.includes(char.toLowerCase())) {
      result += char;
    }
  }

  return result;
}

console.log(doubleVowel("runner")); 
console.log(doubleVowel("stoplight")); 
console.log(doubleVowel("gardener")); 