//! LET 
//@ let is changable
let name = "chirag"; 
//@ can use only in one block of code
//@ let respect block
//@ tdz exist



//! VARIABLE (AVOID USING THIS)
//@ we can use var anywhere its universal
//@ var is fixed and global 
//@ when need again just use name2   redeclaration  possible 
//@ no tdz

//$ problems with variable
//@ ya window mai add hota hai
//@ fnx scoped hota hai
//@ we can declare it another time with same name

//@ Var can be only limit by fnx not by block {} curly is block   fnx me limit kar sakta hai
var name2 = "jdnchbgc";
console.log(name2)

var name2 = "jdnchbgcल्पि्ुा्हक्सलि";
console.log(name)
console.log(name2)



//! CONST (WE DONT WANT TO CHANGE VALUE)
//@ we cant reinitialsed value but we can change property like person.name thats possible but name =  not possible   object.freeze if you dont want to change in any way


//? TDZ  javascript know variable/let exist but cant tell its value

//? HOISTING in js var/let break into two parts declartion and intionalisation
// var b = 5;  becomes
// var b = undefined;  it goes on top
// var b = 5;

//* let/char hoist but no undefined but only var underfined