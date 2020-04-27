function reverse(input) {
  let output = '';

  //   output = input.slice(0, -1);
  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    output = output.concat(helperInput.slice(-1));

    return helper(helperInput.slice(0, -1));
  }
  helper(input);
  return output;
}
console.log(reverse('awesome'));
console.log(reverse('rithmschool'));
