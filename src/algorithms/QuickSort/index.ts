export function quicksort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
}

// const unsortedArray = [5, 3, 7, 2, 8, 4, 1, 6, 8];
// const sortedArray = quicksort(unsortedArray);
// console.log(sortedArray);
