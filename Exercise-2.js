function doubleNumbers(arr){

return arr.map((number)=> number*2);
}

console.log(doubleNumbers([2, 5, 100]));

function stringItUp(arr){
return arr.map((strings)=>strings.toString());
}

console.log(stringItUp([2, 5, 100]));

function capitalizeNames(arr){
  return arr.map((caps)=>
 caps.toUpperCase()

);
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

function namesOnly(arr){
return arr.map((names)=>
names.name.toString()
);

}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

function makeStrings(arr){
  return arr.map((status)=>{
if (status.age>17){
console.log(`${status.name} + can go to The Matrix `);
}else{console.log(`${status.name} + is under age!! `);}


});
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

function readyToPutInTheDOM(arr){
 return arr.map((tags)=> `<h1>${tags.name}</h1><h2>${tags.age}</h2>`);
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

function minutesToHours(minutes) {

 return minutes / 60 ;
}
console.log(minutesToHours(230));

export { minutesToHours };