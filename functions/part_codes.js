"use strict"

function displayData(data) {

    //create variable
    let dataInfo = data;


    //find position of colon and dash
    let colonPos = dataInfo.indexOf(":");
    let dashPos = dataInfo.indexOf("-");

    //tell what part of the data we want to display
    let supplierCode = dataInfo.substring(0, colonPos);
    let productNumber = dataInfo.substring(colonPos + 1, dashPos);
    let size = dataInfo.substring(dashPos + 1);

    //console.log (supplier code,product number, size);

    console.log(`
Data Information: ${dataInfo}
Supplier Code: ${supplierCode}
Product Number  ${productNumber}
Size: ${size}
The product number ${productNumber}, size ${size} is supplied by ${supplierCode}.
`)

}

displayData("ACME:123-L");

displayData("DI:12345-M");

displayData("ACE:1-12");

