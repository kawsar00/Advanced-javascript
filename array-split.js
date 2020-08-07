const num = [2,3,4,5,6,7,8,9];
const name = ['rahim', 'karim', 'solaiman', 'salman', 'shakib']

//use of slice
//start from index No:2 and end before index No:6
const part = num.slice(2, 6); 
console.log(part);
//start from index No:1 and end before index No:4
const part2 = name.slice(1, 4);
console.log(part2);

//use of splice
const removed = num.splice(2, 3, 7777); 
console.log(num);
// 1=start index, 2= 2 pics item delete, ('rokib', 'sorif') = add on the empty space
const removed2 = name.splice(1, 2, 'rokib', 'sorif');
console.log(name);

//use of join
const together = num.join("")
console.log('no gap:', together); //way 1

const together1 = num.join(",")
console.log('have gap:', together1); //way 2

const together2 = num.join("ami")
console.log('added ami:', together2); //way 3

