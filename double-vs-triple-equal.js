const first = 1;
const second = true;
//if we use triple equal it shows false because triple equal check both value and type. Here '1' and 'true' are different types
if (first === second) {
  console.log("condition is true")
}
else{
  console.log("condition is false")
}

//if we use double equal it shows true because double equal check only value not type. Here '1' and 'true' are same value.

if (first == second) {
  console.log("condition is true")
}
else{
  console.log("condition is false")
}

//..................................................................

const first1 = 0;
const second1 = false;
//if we use triple equal it shows false because triple equal check both value and type. Here '0' and 'false' are different types
if (first1 === second1) {
  console.log("condition is true")
}
else{
  console.log("condition is false")
}

//if we use double equal it shows true because double equal check only value not type. Here '0' and 'false' are same value.

if (first1 == second1) {
  console.log("condition is true")
}
else{
  console.log("condition is false")
}


// 0 and false both are negative, so 0=false
// without 0, all the values are positive and true  is also positive, so 1/2/9/... = true