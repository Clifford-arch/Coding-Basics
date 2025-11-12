let array = [5, 2, 3, 9, 1];
n = array.length;
for (let i = 0; i < n; i++) {
  let min_index = i;
  for (let j = i + 1; j < n; j++) {
    if (array[j] < array[min_index]) {
      min_index = j;
    }
  }
  let temp = array[min_index];
  array[min_index] = array[i];
  array[i] = temp;
}
for (let i = 0; i < n; i++) {
  console.log(array[i]);
}
