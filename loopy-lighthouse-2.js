const loopyLighthouse = function (range, multiples, words) {
  for (var x = range[0]; x <= range[1];) {
    console.log((x % multiples[0] ? '' : words[0]) + (x % multiples[1] ? '' : words[1]) || x );
    x++
  }
}
