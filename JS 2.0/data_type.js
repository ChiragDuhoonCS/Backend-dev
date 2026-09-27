//> anything we create like a = 10    10 here   it will always be primative or reference
//! PREMATIVE    
//@ pre made   ena copy krna pa real copy melagae    string, number,bollen,null,undefined 

// example
let a= 10;
let b = a; //> if we change anything in a   b will be still 10 b has its on 10
a = a +2;


//*  STRINGS
// ''   ""   ``   these three can use to type value for string

//*  NUMBERS
// 3.4   and 3   both are diff numbers

//* BOOLEANS
// TRUE or false
let e = true;

//* NULL 
// didnt give any value    we will fill later
let f = null;

//* UNDEFINED
// didnt give any value   and its value by by default   javascript gives it own
let g;

//* SYMBOL
// unique immutable (cant change)
// when we use libraries  unma kuch asa fields hota hai jo hmna phala bhe bna rakho ho aur ya hmara wala fields ko change kar deta hai
/*// future mein hum koi libraries use karege ab is case mein un libraries
mein kai baar kuchh fields hoti hai jinse similar hum bhi banaa dete hai
aur galti se humaari banaai hui fields us library ki original fields ko
change kar deta hai
 */

let sheryjs = {
    uid: 12,
    model: "harsh"
}
sheryjs.uid = 1; // it just change from 12 to 1   we dont want that

let symbol

let u1 = Symbol("uid");
let u2 = Symbol("uid"); // both same but unique


// uid will remain same
let obj = {
    uid: 1,
    name: "harsh",
    age: 12,  
    email: "test@test.com",
};

let u5 = Symbol("uid"); 
obj[u5] = 7465;

//* BIGINT  just use n in last to expand limit
// we ahve limit to add stuff 
Number.MAX_SAFE_INTEGER 
let z = 38764576453836354n;




//! reference   bracket means reference   we cant copy value
//@ when copy we only get their reference   array object function  []   {}   ()

//example
let c = [1,2,3,4];
let d = c; //> c change then d change   d just have reference   d doesnt have its own   IF b CHANGE THEN a CHANGE

 
