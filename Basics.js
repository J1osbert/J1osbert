//defining the variable
let myVariable;

//assigning a value to the variable
let myVariable="Bob";

//when you call the function defined above, the value is displayed
myVariable;

//A variable can be reasigned a value by
let myVariable="Bob";
myVariable="Steve";

//when the above is done, the editor over-rides the first assigned value
// its good to not that all the above are STRINGS

//Number
let myVariable =10;

//Boolean
let myVariable=true;

//Array
let myVariable = [1,'Bob','steve',4,5];

//Object
let myVariable = document.querySelector('h1');

/*Operators
+ adds two numbers or combines two strings
-,*,/ works same as basic maths symbols
= this assigns values to varaibles
=== this performs a test to see if two values are equal and of the came data typeof, and it returns a boolean value
!,!== this implies not or not equal to
*/

//the code below checks if a condition is true or false

let iceCream="chocolate";
if (iceCream==="chocolate") {
    alert("Yay, I love chocolate ice cream!");
}else{
    alert("Awww, but chocolate is my favourite");
}

//Functions
let myVariable = document.querySelector("h1");

alert("hello");

//the above functions are built into the browser.

//You can also define your own functions as shown below
function multiply(num1, num2){
    let result = num1*num2;
    return result;
}

//this code structure listens for activity in the browser, and run code in response

document.querySelector("html").addEventListener("click", function(){
    alert("ouch! stop poking me");
});

//we can write the above also as
document.querySelector("html").addEventListener("click", ()=>{
    alert("ouch! stop poking me");
});
 
//Adding an image changer

const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png"){
        myImage.setAttribute("src", "images/firefox2.png");
    }else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
};