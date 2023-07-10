// Write a function `pickPrefix(strings, prefix)` that accepts an array of strings and a prefix string 
// as an argument. The function should return the an array of words that begin with the prefix.

function pickPrefix(strings, prefix) {
  const result = [];

  for (let i = 0; i < strings.length; i++) {
    if (strings[i].startsWith(prefix)) {
      result.push(strings[i]);
    }
  }

  return result;
}

console.log(pickPrefix(['connect', 'company', 'concert', 'cram'], 'con'));


console.log(pickPrefix(['miner', 'mistake', 'misspeak', 'moose', 'mission'], 'mis'));
