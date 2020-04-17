// write a function that returns a character count of all alpha characters in a string as lowercase case and all numeric characters.

const runBtn = document.getElementById('run');

// This string will be the input
const newString = 'Banana Time123!';

runBtn.addEventListener('mousedown', () => letterCounter3(newString));

function letterCounter(str) {
  // define output
  var result = {};
  // set string to lowercase
  const lowercase = str.toLowerCase();

  for (let i = 0; i <= str.length; i++) {
    const char = str[i];
    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }
  console.log(result);
}

///////// REFACTOR //////////

function letterCounter2(str) {
  // define output
  var result = {};
  // set string to lowercase
  const lowercase = str.toLowerCase();
  for (const char of lowercase) {
    if (/[a-z0-9]/.test(char)) {
      result[char] = ++result[char] || 1;
    }
  }
  console.log(result);
}

///////// REFACTOR FURTHER//////////

function letterCounter3(str) {
  var result = {};
  const lowercase = str.toLowerCase();
  for (const char of lowercase) {
    if (isAlphaNumeric(char)) {
      result[char] = ++result[char] || 1;
    }
  }
  console.log(result);
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  // code for 0 - 9 && lowercase a-z
  if (!(code > 47 && code < 58) && !(code > 96 && code < 123)) {
    return false;
  }
  return true;
}
