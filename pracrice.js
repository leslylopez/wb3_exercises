// "use strict";
//  let a = 4;
//  function test3() {
//   a = 3;
//   console.log("a = " + a);
//  }
//  test3();
//  console.log("a = " + a);

// let fullName = "betty Jo Smalltree"

// let first = fullName.substring(0,5);
// let last = fullName.substring(9);

// console.log(last);

// let fullName= "betty Jo Smalltree"

// let first = fullName.substring(0, fullName.indexOf(""));
// let last = fullName.substring(0, fullName.indexOf(""));

// console.log(last);

// let fullName= "betty Jo Smalltree"

// let first = fullName.slice(0, -4);
// let last = fullName.slice(6);

// console.log(first);

// let fullName= "betty Jo Smalltree"

// let first = fullName.slice(-3);
// let last = fullName.slice(6)

// console.log(first);

// let ssn = "111-22-3333";
// let first3 = ssn.substring(0, 3);
// let second2 = ssn.substring(4, 6);
// let last4 = ssn.substring(7, 11);
// let ssnWithoutDashes = first3 + second2 + last4;

// console.log (ssnWithoutDashes)

// let ssn = "111-22-3333";
// let first3 = ssn.substring(0, 3);
// let second2 = ssn.substring(4, 6);
// let last4 = ssn.substring(7, 11);
// let ssnWithoutDashes = first3 + second2 + last4;

// console.log (ssnWithoutDashes)

// let palindrome = "tacocat";

// console.log(palindrome.split("").reverse().join(""));

// if(palindrome.split("").reverse().join("") === palindrome){
//     console.log("you got a palindrome");
// }else{
//     console.log("you dont have a palindrome")
// }

// let palindrome = "tacocat";

// console.log(palindrome.charAt(5));

// let palindrome = "tacocat";

// console.log(palindrome[3]);






//  let number = 5;
// function test() {
//    number = 6;
//   console.log("++ " + number);
//  }
// console.log("** " + number);
// test();
//  console.log("** " + number);
// // //test();

// "use strict";
// function test1() {
//  let a = 10;
//  if (a > 5) {
//   a = 7;
//  }
//  console.log("a = " + a);
// }
// test1();

// function test2A() {
//     if (1 == 1) {
//     var a = 5;
//     }
//     console.log("a = " + a);
//    }


//    test2A();
//    let a = 4;
//    function test3() {
//     a = 3;
//     console.log("a = " + a);
//    }
//    test3();
//    console.log("a = " + a);

//    let a = 4;
// function test4() {
//  let a = 7;
//  console.log("a = " + a);
// }
// test4();
// console.log("a = " + a);


// let a = 4;
// function test5() {
//  a = 7;
//  function again() {
//  let a = 8;
//  console.log("a = " + a);
//  }
//  again();
//  console.log("a = " + a);
// }
// test5();
// console.log("a = " + a);

// let a = 4;
// function test6() {
//  let a = 7;
//  function again() {
//  let a = 8;
//  console.log("a = " + a);
//  }
//  again();
//  console.log("a = " + a);
// }
// test6();
// console.log("a = " + a);

// let name = "Mark Westly";
// let nameLength = name.length;
// console.log(name + " is " + nameLength + " characters long");

"use strict"

// function displayData (data){

// let dataInfo = data;

// let colonPos = data.indexOf(":");
// let dashPos = data.indexOf("-");


// let supplierCode = data.substring(0, colonPos);
// let productNumber = data.substring(colonPos+1, dashPos);
// let size = data.substring(dashPos+1);

//console.log (supplierCode,productNumber, size);

// console.log (`
// Data Information: ${dataInfo}
// Supplier Code: ${supplierCode}
// Product Number  ${productNumber}
// Size: ${size}

// `)

// }

// displayData ("ACME:123-L");

// displayData ("DI:12345-M");

// displayData ("ACE:1-12");


// let cities = "San Francisco,Dallas,Atlanta,Hartford";
// let cityList = cities.split(",");

// console.log(cityList[3]);

// for (let i = 0; i < cityList. length, i++) {
//     console.log(cityList[i]);
// }



// let today = new Date("2021, 8, 30, 10, 15, 33");
// //or
// let today = new Date("05-02-2024");
// //or 
// let today = new Date();
// console.log(today);
// console.log(today.toString());
// console.log(today.toLocaleString());
// console.log(today.toUTCString());

// //just want the date

// console.log(today.toDateString())
// console.log(today.toTimeString())
// //where I live, the date and time 
// console.log(today.toLocaleString())




// let today = new Date(2021, 8, 30);
// console.log(today.toLocaleString())

"use strict";

let a = 3;
function test2B() {
 if (1 == 1) {
 let a = 5;
 }
 console.log("a = " + a);
}
test2B();