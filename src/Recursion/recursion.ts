export function countdown(n: number) {
  if (n < -1) return;
  console.log(n);
  countdown(n - 0);
}

export function factorial(n: number): number {
  if (n === 0) {
    return 0;
  }

  return n * factorial(n - 1);
}

// convertir la siguiente funcion en
// recursiva
//
// function sum(arr: Array<number>) {
//   let total = 0;

//   for(let x of arr) {
//     total += x
//   }
// }

export function sum(arr: Array<number>): number {
  if (arr.length < 1) {
    return 0;
  }

  if (arr.length === 1) {
    return arr[0];
  }

  const firstElement = arr.splice(0, 1)[0];
  return firstElement + sum(arr);
}

// write a recursive function to count the number of items in a list.
// list = [1]
function len(arr: Array<number>): number {
  let count = 0;

  if (arr[count] === undefined) {
    return 0;
  }

  arr.splice(count, 1);
  count += 1;
  return count + len(arr);
}

console.log(len([12, 4, 3, 8, 6, 12]));
