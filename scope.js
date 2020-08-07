var bonus =20; //it is a global variable, we can access it anywhere either inside the function and outside the function

function sum(first, second) {
  let result = first + second + bonus; //accessing bonus variable inside function
  console.log(result);
  return result;
}
// console.log(result);      //it will show an error because result's scope is only behind the function area, we cannot access outside the function.
const output = sum(10, 15);
console.log(output);
console.log(bonus); //accessing bonus variable outside function


                          //BLOCK SCOPE                
//if we use const/let to declare a value it cannot be hoisted, it will be block scope, because it's scope will remain the limited area where it has.
function sum1(first, second) {
  let result = first + second; 
  if (result > 9) {
    // const mood = "happy"
     let mood = "happy"
    // console.log(mood);
  }
  // console.log(mood);    //we use let/const to declare mood value that's why it is showing error, it can not be hoisted, because its scope its limited to inside the if condition area.
  return result;
}
const output1 = sum1(10, 15);


                          //  HOISTING
//if we use var to declare a value it's declaration part will go to its parent scope(function). it's called hoist.
function sum1(first, second) {
  let result = first + second; 
  if (result > 9) {
     var mood = "happy";
     mood = "funny"
     mood = "cranky"
  }
  console.log(mood);    //it is showing result because mood value is declared by var keyword and we know if we use var then it will hoist. It means the declaration part(var mood) will go to its parent scope(function). thats why console.log is working inside the function, outside the if condition scope area
  return result;
}