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
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) ++counter;
    }
  }
  return counter;
}

console.log(naiveSearchString('lorie loled', 'l'));

// swapping methods
let a;
let b;
[a, b] = [1, 2, 3];

[a, b] = [b, a];
console.log(a);
console.log(b);

// swapping function with temp variable

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[ix1] = ar[idx2];
  arr[idx2] = temp;
}
