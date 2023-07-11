// Write a function `lalaLanguage` that accepts a sentence string as an argument. The function should
// return a new sentence where words longer that 3 characters are modified. Modified words should have
// each vowel followed by 'l' and the same vowel repeated again. See the examples.

function lalaLanguage(sentence) {
  const words = sentence.split(' ');
  
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    
    if (word.length > 3) {
      const newWord = word.replace(/[aeiou]/g, '$&l$&');
      words[i] = newWord;
    }
  }
  
  return words.join(' ');
}

console.log(lalaLanguage('this is pretty strange')); 
console.log(lalaLanguage('can you speak our language')); 