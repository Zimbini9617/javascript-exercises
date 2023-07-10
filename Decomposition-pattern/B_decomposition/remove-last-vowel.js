// Write a function `removeLastVowel` that accepts a string as argument. The function should return
// the string with its last vowel removed. Vowels are the letters a, e, i, o, u

function removeLastVowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  // Find the last vowel in the string
  let lastVowelIndex = -1;
  for (let i = str.length - 1; i >= 0; i--) {
    if (vowels.includes(str[i])) {
      lastVowelIndex = i;
      break;
    }
  }

  // If a vowel is found, remove it from the string
  if (lastVowelIndex !== -1) {
    str = str.substring(0, lastVowelIndex) + str.substring(lastVowelIndex + 1);
  }

  return str;
}


console.log(removeLastVowel("speaker")); 
console.log(removeLastVowel("trading")); 
console.log(removeLastVowel("thunder")); 
console.log(removeLastVowel("myth")); 