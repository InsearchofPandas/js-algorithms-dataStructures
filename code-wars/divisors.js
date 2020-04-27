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
