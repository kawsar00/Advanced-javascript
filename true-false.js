//falsy
// 0
// ""
//false
//undefined
//null
//NaN

//truthy
// " "
//"0"
//"false"
// []
// {}

const name = 0;
if (name) {
  console.log('condition is true');
}
else{
  console.log('condition is false')
}

if ('false') {
  console.log('I am not false');
}
else{
  console.log('I am false');
}
