function isIsogram(str) {
  if (str === '') {
    return true;
  }
  let obj = {};
  const newStr = str.toLowerCase();
  for (let char of newStr) {
    obj[char] = (obj[char] || 0) + 1;
  }

  for (let key in obj) {
    console.log(key);
    if (obj[key] > 1) {
      return false;
    }
  }
  return true;
}

// console.log(isIsogram('Dermatoglyphics'));
// console.log(isIsogram('Aba'));
// console.log(isIsogram('moOse'));
