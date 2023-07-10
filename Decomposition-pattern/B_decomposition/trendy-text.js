// Write a function `trendyText` that accepts a sentence string as an argument. The function should
// return the sentence where the last vowel of every word is removed.

function trendyText(sentence) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const words = sentence.split(' ');

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let lastVowelIndex = -1;

    for (let j = word.length - 1; j >= 0; j--) {
      if (vowels.includes(word[j])) {
        lastVowelIndex = j;
        break;
      }
    }

    if (lastVowelIndex !== -1) {
      words[i] = word.substring(0, lastVowelIndex) + word.substring(lastVowelIndex + 1);
    }
  }

  return words.join(' ');
}

console.log(trendyText("the concert will be epic")); 
console.log(trendyText("breakfast food is wonderful")); 
console.log(trendyText("the weather will improve hopefully")); 