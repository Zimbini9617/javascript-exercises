// Write a function `mostLetterWord` that accepts a sentence string and a character as arguments.
// The function should return the word of the sentence that contains the character the most number
// of times. You can assume that the sentence contains at least one word. If there is a tie, return
// the word that appears earlier in the sentence.

function mostLetterWord(sentence, char) {
  let maxCount = -1;
  let result = '';
  
  const words = sentence.split(' ');
  
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let count = 0;
    
    for (let j = 0; j < word.length; j++) {
      if (word[j] === char) {
        count++;
      }
    }
    
    if (count > maxCount) {
      maxCount = count;
      result = word;
    }
  }
  
  return result;
}

console.log(mostLetterWord('she received an award for excellence in science', 'e'));
console.log(mostLetterWord('she received an award for excellence in science', 'a')); 
console.log(mostLetterWord('I hope sophomore year comes soon', 'o'));
console.log(mostLetterWord('I hope sophomore year comes soon', 's')); 