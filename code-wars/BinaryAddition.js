function addBinary(a, b) {
  function helperBinary(n) {
    if (n === 1) return 1;

    return helperBinary(Math.floor(n / 2)) + String(n % 2);
  }

  return helperBinary(a + b);
}
// console.log(addBinary(25, 50))
// console.log(helperBinary(75));

function addBinaryShort(a, b) {
  return (a + b).toString(2);
}
