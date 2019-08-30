const range = function (start, end, step) {
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return []
  } else {
    let array = [];
    let num = start;
    while (num <= end) {
      array.push(num);
      num += step;
    }
    return array;
  } 
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
