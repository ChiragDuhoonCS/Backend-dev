// hof wo function hota hai jo ki return kare function ya
// fir accept kare ek fnc apne parameter mein

function abcd(val){ //@ this is higher of function

}

abcd(function(){

})


//! PURE AND IMPURE FNX
// pure vs impure functions

// aisa fnc jo ki baahar ki value ko naa badle wo hai pure 
// fnc

// aisa fnc jo baahar ki value ko badal de wo hai impure 
// functions

let a = 12;

function abcd() {
    console.log("hehehe");
}

function hui(){
    a++;
}



// closures -> ek fnc jo return kare ek aur function aur
// return hone waala function humesha youse karega parent fnc
// ka koi variable

function abcd(){
    let a = 12;
    return function(){
        console.log(a);
    }
}