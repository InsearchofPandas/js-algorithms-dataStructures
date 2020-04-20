const runBtn = document.getElementById('run');

// This string will be the input
const newString = 'Banana Time123!';

// runBtn.addEventListener('mousedown', () => );

function isAnagram(wordInput1, wordInput2) {
  let word1 = wordInput1.toString().toLowerCase();
  let word2 = wordInput2.toString().toLowerCase();

  // check if same word
  if (word1 === word2) {
    return false;
  }

  // check length before proceeding
  if (word1.length !== word2.length) {
    return false;
  }

  // create objects
  let letterFreq1 = {};
  let letterFreq2 = {};

  for (let val in word1) {
    letterFreq1[word1[val]] = (letterFreq1[word1[val]] || 0) + 1;
  }

  for (let val in word2) {
    letterFreq2[word2[val]] = (letterFreq2[word2[val]] || 0) + 1;
  }

  console.log(letterFreq1);
  console.log(letterFreq2);

  for (let key in letterFreq1) {
    if (!(key in letterFreq2)) return false;
    if (letterFreq2[key] !== letterFreq1[key]) return false;
  }

  return true;
}

console.log(isAnagram('Caba', 'aabc'));
