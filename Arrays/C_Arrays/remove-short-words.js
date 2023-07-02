// Write a function `removeShortWords` that accepts a sentence string as an argument. The function
// should return a new sentence where all of the words shorter than 4 characters are removed.

let removeShortWords = function(sentence){
  let words = sentence.split(' ');
  let choseWords = [];

  for (let i = 0; i < words.length; i++){
    let word = words[i];

    if (word.length >= 4){
      choseWords.push(word);
    }
  }

  return choseWords.join(' ');
}

console.log(removeShortWords("knock on the door will you")); // 'knock door will'
console.log(removeShortWords("a terrible plan")); // 'terrible plan'
console.log(removeShortWords("run faster that way")); // 'faster that'