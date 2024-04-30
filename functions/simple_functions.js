"use strict"
//function to display my name, favorite movie, and favorite band
function favoriteThings() {

console.log ("My name is Lesly");
console.log ("My favorite movie is Mama Mia");
console.log ("My favorite band is The Beetles");

}

function whyImHere () {
    console.log ("I joined the Learn to Code program because I want to learn programming");

}

function favoritePlace (){
    console.log ("My favorite places to visit is New York because I like how the city looks at night")
}





//calling out functions
favoriteThings();

whyImHere ();

favoritePlace();


function displayNameAndAge (name,age) {

    let message = name + " is " + age;
    console.log(message);
}
let someName ="Lesly";
let someAge = "22";

//providing the values
displayNameAndAge (someName,someAge);

displayNameAndAge ("Lesly", 22);
displayNameAndAge ("Liz", 22);

let distance = -123456 
let positiveDistance = Math.abs(distance);

console.log (positiveDistance)



