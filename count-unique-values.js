function countUniqueValues(input) {
  let i = 0;
  let j = 1;
  let counter = 0;
  if (input.length > 0) {
    counter = 1;
  }
  while (j < input.length) {
    if (input[i] === input[j]) {
      j++;
    } else if (input[i] < input[j]) {
      counter++;
      i = j;
      j++;
    }
  }
  return console.log(counter);
}

///////// refactor without counter

function countUniqueValues2(input) {
  let i = 0;
  let j = 1;
  while (j < input.length) {
    // console.log(input[j]);
    if (input[i] === input[j]) {
      j++;
    }
    if (input[i] < input[j]) {
      i++;
      input[i] = i;
      j++;
    }
  }
  return console.log(input[i]);
}

countUniqueValues([]);

// countUniqueValues([-1, 1, 2, 2, 4]);

// countUniqueValues([1, 2, 4, 5, 5, 5, 7, 7, 12, 12, 13]);
