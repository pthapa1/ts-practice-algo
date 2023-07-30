function partition(arr: number[], low: number, high: number) {
  const pivotValue = arr[high];
  let pointer = low - 1;

  for (let i = low; i < high; ++i) {
    if (arr[i] <= pivotValue) {
      pointer++;
      //swap index with pointer
      [arr[i], arr[pointer]] = [arr[pointer], arr[i]];
    }
  }
  // swap poiner with pivot regardless of if 👆 executes.
  pointer++;
  [arr[pointer], arr[high]] = [arr[high], arr[pointer]];
  return pointer;
}
function quickSort(arr: number[], low: number, high: number) {
  if (low < high) {
    // 👆 means if there is only one element left. OR, it is not the same element in the array
    const indexPointer = partition(arr, low, high);
    quickSort(arr, 0, indexPointer - 1);
    quickSort(arr, indexPointer + 1, high);
  }
}

let numArray = [8, 7, 0, 2, 13, 78];
quickSort(numArray, 0, numArray.length - 1);
console.log(numArray);
