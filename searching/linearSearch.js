function linearSearch(arry, n) {
  // loop through each item in an array
  for (let item in arry) {
    // if we find a match for input n in arry return the index
    if (arry[item] === n) {
      return item;
    }
  }
  return -1;
}
