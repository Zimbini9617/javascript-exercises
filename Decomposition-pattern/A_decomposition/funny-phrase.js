// Write a function `funnyPhrase` that accepts a sentence string as an argument. The function should
// return the sentence where every other word has its vowels repeated twice consecutively.
// Vowels are the letters a, e, i, o, u.

function funnyPhrase(sentence) {
  const words = sentence.split(' ');
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < words.length; i += 2) {
    const word = words[i];
    let modifiedWord = '';

    for (let j = 0; j < word.length; j++) {
      const char = word[j];
      modifiedWord += char;

      if (vowels.includes(char.toLowerCase())) {
        modifiedWord += char;
      }
    }

    words[i] = modifiedWord;
  }

  return words.join(' ');
}

console.log(funnyPhrase("she dreamed of being a runner"));
console.log(funnyPhrase("park near the stoplight"));
console.log(funnyPhrase("we need many gardeners")); 