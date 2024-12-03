const input = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];
 const sortFilter = input.sort((a,b)=> b.age - a.age);
const peoplesAge= input.map((ages)=> {
     return ages.age ;
})
console.log(peoplesAge);
console.log(sortFilter);
[Math.min(...peoplesAge), Math.max(...peoplesAge), Math.max(...peoplesAge)-Math.min(...peoplesAge)]