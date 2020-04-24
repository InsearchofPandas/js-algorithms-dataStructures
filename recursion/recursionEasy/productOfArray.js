function productOfArray(arry) {
  let sum = 0;

  function helper(arryH) {
    if (arryH.length === 0) {
      return;
    }
    sum += arryH.pop();
    return helper(arryH);
  }
  helper(arry);
  return sum;
}
console.log(productOfArray([0, 1, -1]));
