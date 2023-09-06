function findSmallest(arr: Array<number>) {
  let smallest = arr[0];
  let smallestIndex = 0;

  arr.forEach((n, i) => {
    if (n < smallest) {
      smallest = n;
      smallestIndex = i;
    }
  });

  return smallestIndex;
}

export function SelectionSort(arr: Array<number>) {
  const newArr: Array<number> = [...arr];
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    let smallest = findSmallest(newArr);
    arr[i] = newArr.splice(smallest, 1)[0];
  }

  return arr;
}
