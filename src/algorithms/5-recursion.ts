// program to count down numbers to 1
function countDown(num: number) {
  // display the number
  console.log(num);
  // decrease the number value
  const newNumber = num - 1;
  // base case
  if (newNumber > 0) {
    countDown(newNumber);
  }
}

countDown(4);
