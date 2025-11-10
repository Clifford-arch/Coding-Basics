let array = [2, 9, 4, 6, 0];
const n = array.length;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (array[j] > array[j + 1]) {
      var temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}

for (let i = 0; i < n; i++) {
  console.log(array[i]);
}
