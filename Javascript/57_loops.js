console.log("I am a tutorial on Loops")

let a = 1;
// console.log(a)
// console.log(a+1)
// console.log(a+2)

// for (let i = 0; i < 100; i++) { 
//     console.log(a + i); 
// }

// let obj = {
//     name: "Harry",
//     role: "Programmer",
//     company: "CodeWithHarry AI"
// }
 
// for (const key in obj) {  
//         console.log(key)
// }

// for (const c of "Harry") {
//     console.log(c)
// }

// let i = 0;
// while (i<60000) {
//     console.log(i)
//     i++;
// }

let i = 10;
do {
    console.log(i)
    i++;
} while (i<6);

for (let i = 1; i < 5; i++) {
    console.log(i)
} 

console.log("============")

let b = 0;
while (b<10) {
    console.log(b)
    b++;
}

console.log("============")

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}

console.log("============")

let numbers = [10, 20, 30, 40];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

