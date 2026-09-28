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



//@ we calling values
fnc();
nigga();
nigga();// can call function more time to print out more
yoo();