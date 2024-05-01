"use strict"

function displayMailingLabel(name, address, city, state, zip){

//console.log(name);
//console.log(address);
//string interpretation
console.log(`I live in ${city}, ${state}, ${zip}`);

}




//use the above functions
displayMailingLabel ("Lesly", "River Dr.", "Mesquite", "TX", 75181);
displayMailingLabel ("John", "View Dr.", "Dallas", "TX", 75248);


function displayAddNumbers (num1 , num2){



    let totalNumber = Number(num1) + Number(num2)

    console.log ( num1 + "+" + num2 +  "=" + totalNumber );
    

}



displayAddNumbers (5,10)
displayAddNumbers (20,10)


function displayReceipt (amountDue, amountPaid) {

//console.log (amountDue);
//console.log (amountPaid);

//let amountDue = 20
//let amountPaid = 50

let changeDue = amountPaid - amountDue;
let owe = Math.abs(amountPaid - amountDue);

if (amountPaid > amountDue){

    console.log ("Your change due is $" + changeDue);
}
else {
    console.log ("You owe $" + owe);
}
}

displayReceipt (20,50);
displayReceipt (70,40)
