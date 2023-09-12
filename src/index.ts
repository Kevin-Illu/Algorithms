function countdown(n: number) {
  if (n < 0) return;
  console.log(n);
  countdown(n - 1);
}

function factorial(n: number): number {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(3));
