"use strict"

function convertFtoC(someTemp){

    //setup variables for fahrenheit to celsius

    let fahrenheit = someTemp;
    let celsius = (fahrenheit -32) * 5 / 9; 
//return the value of the calc as outfrom the function
return celsius;
}

console.log ("converting 212 from F to C : " + convertFtoC (212) );
console.log ("converting 90 from F to C : " + convertFtoC (90) );
console.log (convertFtoC (72) );
console.log (convertFtoC (0) );
console.log (convertFtoC (-40) );
