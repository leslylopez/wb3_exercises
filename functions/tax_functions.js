function getSocSecTax(payRate,hoursWorked ) {

    let grossPay = payRate * hoursWorked;
    let taxrate = grossPay * (6.2/100);

return taxrate;

}

console.log( " Your Social Security tax amount is $" + getSocSecTax(10,40).toFixed(2));




function getMedicareTax (payRate, hoursWorked){

    let grossPay = payRate * hoursWorked;
    let medicareTax = grossPay * (1.45/100);
return medicareTax;
}

console.log (" Your Medicare tax is $" + getMedicareTax(15,40).toFixed(2));



function getFederalTax (grossPay, withholdingCode){

let taxRate = 0;
    
    if (withholdingCode === 0) {

        
        taxRate = 23/100;

    } 

    else if (withholdingCode === 1 ) {

        taxRate = 21/100;
    }
    else if (withholdingCode  === 2 ){
        
        taxRate = 19.5/100;


    }
    else if (withholdingCode === 3 ){

        taxRate = 18.5/100;

    }
    else {

        taxRate = .18-(withholdingCode * .005)

    }
     
    let federalTax = grossPay * taxRate;
    return federalTax;


}

// let grossPay = 

console.log ("Your federal tax is $" + getFederalTax(750,0));