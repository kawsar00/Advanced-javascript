const numbers = [3, 4, 5, 6, 7, 8]

//general rules
const outputValue = [];

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  const result = element * element;
  outputValue.push(result);
}
console.log("general rules", outputValue);

//...................................................................
// if we create function outside the map
function square(element) {
  return element * element;
} //way 1
const square1 = element => element * element; //shortcut rule //way 2
const square2 = x => x * x; //more shortcut rule //way 3

const output = numbers.map(square);
const output1 = numbers.map(square1);
const output2 = numbers.map(square2);

console.log("if we create function outside the map ", output, output1, output2);
//...................................................................

//if we create function inside the map
//if we pass function inside the map then this function can give us three parameter like- element, index and array. as for example-
numbers.map(function(element, index, array) {
  console.log("3 elements", element, index, array);
})

//element multiply by map using function inside
const result = numbers.map(function(element) {
  return element * element;
})
console.log("map with function long rules", result);

//shortcut rules
const result1 = numbers.map(x => x * x);  
console.log("map with function short rules", "and we will follow this rule", result1);
//this is the actual rule that we need to follow

//use of filter
//filter will show result with an array
const bigger = numbers.filter(x => x > 5);
console.log("filter:", bigger);

//use of find
//find will show result only element
const isThere = numbers.find(x => x > 5);
console.log("find:", isThere);

