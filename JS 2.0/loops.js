//! LOOPS


for (let i = 0; i < 20; i++) {
    console.log(i);
}

//! While
//start
//while(end){
//    //code
//    change
//}

let i = 1;
while (i < 32) {
    //code
    console.log(i);
    i++;
}


// ✔ Q8. Ask the user for a number and print whether each number from 1 to that number is even or odd.

// (e.g., "1 is odd", "2 is even", ...)

let val = prompt("give a number"); //! to get input

for (let i = 1; i <= val; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}
