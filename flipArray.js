var array = [
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ];
  for (let i = 0; i < array.length; i++) {
    array[i].reverse();
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 0) {
        array[i][j] = 1;
      } else {
        array[i][j] = 0;
      }
    }
  }
  console.log(array);