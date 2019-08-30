const merge = function (arrayOne, arrayTwo) {

    let arrayThree = []
    for (let x = 0; x < arrayOne.length;) {
      for (let y = 0; y < arrayTwo.length;) {
        if (arrayTwo[y] <= arrayOne[x]) {
          arrayThree.push(arrayTwo[y])
          arrayTwo.shift()
        } else {
          arrayThree.push(arrayOne[x])
          arrayOne.shift()
          break;
        }
      }
      if (arrayTwo.length === 0){
        arrayThree = arrayThree.concat(arrayOne);
        break;
      }
    }
    for (let i = 0; i < arrayTwo.length; i++) {
      arrayThree.push(arrayTwo[i]);
    }
    return arrayThree;unles
  
}

console.log(merge([ 1, 2, 2, 2 ], [1, 2, 2]), "=?", [ 1, 1, 2, 2, 2, 2, 2 ]);
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
console.log(merge([ -1, 7, 8, 9 ], [-4, -3, 1, 2, 3]), "=?", [ -4, -3, -1, 1, 2, 3, 7, 8, 9 ]);