function recursiveRange(input) {
  let sum = 0;
  function helper(helperInput) {
    if (helperInput === 0) {
      return;
    }
    sum += helperInput;
    helper(helperInput - 1);
  }

  helper(input);
  return sum;
}
// Refactor /////////////////////////////
function recursiveRange2(num) {
  if (num === 1) {
    return 1;
  }
  return num + recursiveRange2(num - 1);
}

// console.log(recursiveRange2(10));

// fib is 1, 1, 2, 3, 5, 8, 13, 21, 34

function fib(n) {
  let counter = 1;
  let sum = 1;

  function helper(n1, n2) {
    if (counter === n) {
      return;
    }
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
    ++counter;
    helper(n1, n2);
  }
  helper(0, 1);
  return sum;
}
// console.log(fib(7));

function linearSearch(arry, n) {
  // loop through each item in an array
  for (let item in arry) {
    // if we find a match for input n in arry return the index
    if (arry[item] === n) return item;
  }
  return -1;
}

//console.log(linearSearch([10, 15, 20, 25, 30], 33));

function binarySearch2(arry, n) {
  start = 0;
  end = arry.length - 1;
  middle = Math.floor(start + end / 2);
  while (arry[middle] !== n && middle < end && middle > start) {
    if (n > arry[middle]) start = middle + 1;
    else end = middle - 1;

    middle = Math.floor((start + end) / 2);
  }
  return arry[middle] === n ? middle : -1;
}

function binarySearch2(arry, n) {
  start = 0;
  end = arry.length - 1;
  middle = Math.floor(start + end / 2);
  while (arry[middle] !== n && middle < end && middle > start) {
    if (n > arry[middle]) start = middle + 1;
    else end = middle - 1;

    middle = Math.floor((start + end) / 2);
  }
  return arry[middle] === n ? middle : -1;
}

//   console.log(binarySearch2([0, 1, 2, 3, 4, 5, 9], 0));

//   console.log(binarySearch2([10, 15, 20, 25, 30, 33, 45, 77, 88, 99, 100, 101]

function naiveSearchString(long, short) {
  let counter = 0;
  // loop over long string
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < i - 1; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) ++counter;
    }
  }
  return counter;
}

//console.log(naiveSearchString('lorie loled', 'l'));

// swapping methods
let a;
let b;
[a, b] = [1, 2, 3];

[a, b] = [b, a];

// swapping function with temp variable

// Start looping from with avarible called i from end of arry to fring
// start inner loop with a variable j from the begging until i -1
// if arr[j] is greater than arr[j+1] SWAP!

function bubbleSort(arr) {
  let breaker;
  for (let i = arr.length; i > 0; i--) {
    breaker = 1;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        breaker = 0;
      }
    }
    if (breaker === 1) break;
  }

  return arr;
}

// console.log(bubbleSort([37, 45, 29, -2, 8, 66]));

//console.log(bubbleSort([1, 10, 9, 20, 22, 2, 45, 68, 72]));

function selectionSort(arr) {
  let sv;
  for (let i = 0; i < arr.length; i++) {
    sv = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[sv]) {
        sv = j;
      }
    }
    if (sv !== i) {
      [arr[i], arr[sv]] = [arr[sv], arr[i]];
    }
  }
  return arr;
}

// console.log(selectionSort([37, 45, 29, -2, 8, 66]));

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      for (let j = i; j > -1; j--) {
        if (arr[j] < arr[j - 1]) {
          [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
          console.log(arr);
        } else {
          break;
        }
      }
    }
  }
  return arr;
}

const insertionSort2 = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];

      arr[j] = current;
      console.log('two:' + arr);
    }
  }
  return arr;
};

//console.log(insertionSort([-4, 99, 37, 45, 29, -2, 8, 66]));
// console.log(insertionSort([5, 4, 3, 2, 1]));

// console.log(insertionSort2([5, 4, 3, 2, 1]));

function merge(arr1, arr2) {
  let p1 = 0;
  let p2 = 0;
  let newArr = [];

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] > arr2[p2]) {
      newArr.push(arr2[p2]);
      p2++;
    } else {
      newArr.push(arr1[p1]);
      p1++;
    }
  }
  while (p1 < arr1.length) {
    newArr.push(arr1[p1]);
    p1++;
  }
  while (p2 < arr2.length) {
    newArr.push(arr2[p2]);
    p2++;
  }
  return newArr;
}

//console.log(merge([1, 10, 50, 92, 84, 23, 76], [2, 14, 99, 100]));

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  return merge(left, right);
}

//console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));
function songDecoder(dub) {
  const wub = 'WUB';
  let wubs = false;
  let stringTemp1 = '';
  let stringTemp2 = '';

  for (let i = 0; i < dub.length; i++) {
    for (let j = 0; j < wub.length; j++) {
      if (wub[j] !== dub[i + j]) {
        wubs = false;
        break;
      }
      if (j === wub.length - 1) {
        stringTemp1 = dub.slice(0, i);
        stringTemp2 = dub.slice(i + 3);
        dub = dub[i - 1] === ' ' ? stringTemp1 + stringTemp2 : stringTemp1 + ' ' + stringTemp2;
        j = -1;
      }
    }
  }
  return dub.trim();
}

// console.log(songDecoder('AWUBBWUBC'));
// console.log(songDecoder('AWUBWUBWUBBWUBWUBWUBC'));
// console.log(songDecoder('WUBAWUBBWUBCWUB'));
// console.log(songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB'));

function songDecoder2(song) {
  song = song.replace(/(WUB)+/g, ' ').trim();

  return song;
}

// console.log(songDecoder2('AWUBBWUBC'));
// console.log(songDecoder2('AWUBWUBWUBBWUBWUBWUBC'));
// console.log(songDecoder2('WUBAWUBBWUBCWUB'));
// console.log(songDecoder2('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB'));

function getMiddle(s) {
  const mid = Math.floor(s.length / 2);
  return s.length % 2 === 1 ? s[mid] : s[mid - 1] + s[mid];
}

//console.log(getMiddle('shirts'));

function binaryArrayToNumber(arr) {
  let value = 0;
  let power = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (i === arr.length - 1 && arr[i] === 0) {
      power++;
    } else {
      value += (2 * arr[i]) ** power;
      power++;
    }
  }
  return value;
}

function binaryArrayToNumber2(arr) {
  return parseInt(arr.join(''), 2);
}

//console.log(binaryArrayToNumber([1, 1, 1, 1]));
//console.log(binaryArrayToNumber2([0, 1, 1, 0]));

function divisors1(integer) {
  let divisors = [];
  let divisor = 2;
  function helper(divisor) {
    if (divisor === integer) return;
    if (integer % divisor === 0) {
      divisors.push(divisor);
    }
    return helper(divisor + 1);
  }

  helper(divisor);
  if (divisors.length === 0) return `${integer} is prime`;
  return divisors;
}

function divisors(integer) {
  let divisors = [];
  let divisor = 2;
  while (divisor < integer) {
    if (integer % divisor === 0) {
      divisors.push(divisor);
    }
    divisor++;
  }

  if (divisors.length === 0) return `${integer} is prime`;
  return divisors;
}

function divisors2(integer) {
  var res = [];
  for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime';
}

//console.log(divisors(20));

function addBinary(a, b) {
  function helperBinary(n) {
    if (n === 1) return 1;

    return helperBinary(Math.floor(n / 2)) + String(n % 2);
  }

  return helperBinary(a + b);
}
// console.log(addBinary(25, 50))
// console.log(helperBinary(75));
