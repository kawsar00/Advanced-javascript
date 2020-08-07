function stopWatch() {
  let count = 0;
  return function () {
    count ++;
    return count;
  }
}

const clock1 = stopWatch();
console.log(clock1()); //1
console.log(clock1()); //2
console.log(clock1()); //3
console.log(clock1()); //4

const clock2 = stopWatch();
console.log(clock2()); //  1
console.log(clock2()); //  2
console.log(clock2()); //  3
console.log(clock1()); //5
console.log(clock1()); //6
console.log(clock2()); //  4
console.log(clock2()); //  5
