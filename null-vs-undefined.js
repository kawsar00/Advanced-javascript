//in that way we can found undefined value

//if we do not set a value in a variable
let pakhi;
console.log(pakhi);

//if we set undefined as a value of a variable
let age = undefined;
console.log(age);

//if we do not return into the function or do not mention which element will be return from a function
function add(num1, num2) {
  console.log(num1 + num2);
}
const result = add(11, 23);
console.log(result);

//a function have multiple parameter but if we forget to set one of them parameter value
function add(num1, num2) {
  console.log(num1 + num2);
}
const result1 = add(11);
console.log(result1);

//if we want to read a property that have not in that object
let student = {name:"kawsar", id:2020}
console.log(student.phone);

//if we want to read a value from an array but it do not have on that arry
let ages = [10, 122, 122]
console.log(ages[1111]);


// Null- null means empty. if a developer want to define a variable or property value will be empty so he set it undefined. that means Null need to set manually if we need.

//but undefined can find automatically if we doing mistake that we showing on above