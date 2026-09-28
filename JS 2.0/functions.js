function nigga() {
    console.log("Nigga");
    console.log("Nigga");
    console.log("Nigga");
    console.log("Nigga");
}


let yoo = function () { //! we have to write function to defeined function
    console.log("yayyy variable assigned as a function");
}


//! fat arrow fnx     we can write like that
let fnc = () => {
    console.log("fat arrow fnx");
};


//! filling values

function dance(v1) {
    console.log(`${v1} naach raha hai`); //! seee hereeeeeee   ' this matter
}

dance("ghoda");
dance("hirad");
dance("cheel");
dance("lakadbaggha");


function add(v1, v2) {
    console.log(v1 + v2);
}

add(1, 2);
add(11, 22);
add(111, 222);

//! ARRAY
function abcd(...val) {
    console.log(val);
}

abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


//! important var
// jab arguments kai saare ho to humein utne hi parameter banaane padege, issey bachne ke liye, hum rest ka use karte hai ... agar ... function ke parameter space mein lage to wo rest operator hai

function abcd(...val) {
    console.log(val);
}

abcd(1, 2, 3, 4, 5, 6);


//! retrun
// return matlab jaha se aaye ho wahi daal denge
function abcd(v) {
    return 12 + v;
}

let val = abcd(23);
console.log(val);



//@ we calling values
fnc();
nigga();
nigga();// can call function more time to print out more
yoo();