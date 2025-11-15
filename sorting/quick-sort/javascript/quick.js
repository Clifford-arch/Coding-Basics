function partition(array, low, high) {
  pivot = array[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (array[j] <= pivot) {
      i += 1;
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  let temp1 = array[i + 1];
  array[i + 1] = array[high];
  array[high] = temp1;
  return i + 1;
}

function quickSort(array, low = 0, high = null) {
  if (high == null) {
    high = array.length - 1;
  }
  if (low < high) {
    pivot = partition(array, low, high);
    quickSort(array, low, pivot - 1);
    quickSort(array, pivot + 1, high);
  }
}

let array = [2, 8, 5, 4, 6];
quickSort(array);
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
