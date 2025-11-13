let array = [5, 4, 6, 3, 2];
const n = array.length;

for (let i = 1; i < n; i++) {
  let key = array[i];
  let j = i - 1;

  while (j >= 0 && array[j] > key) {
    array[j + 1] = array[j];
    j = j - 1;
  }
  array[j + 1] = key;
}

for (let i = 0; i < n; i++) {
  console.log(array[i]);
}
