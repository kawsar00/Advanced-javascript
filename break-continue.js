//use break
const num = [1,2,3,4,5,6,7,8,9];

for (let i = 0; i < num.length; i++) {
  const element = num[i];

  if (num[i] > 4) {
    break
  }
  console.log(num[i]);
}

console.log('duita line alada hoye jao')

//use continue //it means it will ignore value as per condition
const num2 = [1,2,-3,4,-5,6,-7,-8,9];

for (let i = 0; i < num2.length; i++) {
  const element = num2[i];

  if (element < 0) {
    continue
  }
  console.log(element);
}