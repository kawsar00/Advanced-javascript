const students = [
  {id:43, name:"bidda sagor"},
  {id:20, name:"robindronath"},
  {id:63, name:"kazi nazrul islam"},
  {id:76, name:"fazlul haque"},
];

//general rules
const names = []
for (let i = 0; i < students.length; i++) {
  const element = students[i];
  names.push(element.name);
}
console.log(names)

//using map,filter,find
const names2 = students.map(s => s.name);
const ids = students.map(d => d.id);
const bigger = students.filter(x => x.id > 40); 
const biggerOne = students.find(y => y.id > 40); 

console.log(names2);
console.log(ids);
console.log(bigger); //will show all matching value in an array
console.log(biggerOne); //only show first matching value
