function power(base, power) {
  return base ** power;
}

power(2, 0); // 1
power(2, 2); // 4
power(2, 4); // 16

console.log(power(2, 0));
function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse('awesome'));
