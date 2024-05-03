"use strict"

function parseAndDisplayName (someName ){
//create a variable
let fullName = someName;
//find the position of the first space
let spacePosition = fullName.indexOf(" ");

//create variables for the first and last name
let firstName =  fullName.substring (0, spacePosition);

//gives us characters from the space until the end
//since we don't want the space we add 1 to starting position
let lastName = fullName.substring(spacePosition+1);

console.log(firstName, lastName);

console.log(`
    Name: ${fullName}
    First Name : ${firstName}
    Last Name : ${lastName}

`)
}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");