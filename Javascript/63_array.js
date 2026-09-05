let arr = [1, 2, 4, 5, 7]
//  Index  0, 1, 2, 3, 4

arr[0] = 5666;
// console.log(arr, typeof arr);
// console.log(arr.length)

// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])

console.log(arr.toString())
console.log(arr.join(" and "))


 
// let numbers = [1, 2, 3, 4, 5] 
// numbers.splice(1, 2)    
// numbers.splice(1, 3)  
// numbers.splice(1, 3, 222, 333) 
// (4) [1, 222, 333, 5]

let arr1 = ["Harry", "Rohan", "Rahul"];
console.log(arr1.join(","));

let arr2 = [1,2,3,4];
arr.pop();
console.log(arr2);
arr.push(5);
console.log(arr2);
arr.shift();
console.log(arr2);
arr.unshift(0);
console.log(arr2);
delete arr2[2]
console.log(arr2);

let arr3 = arr1.concat(arr2);
console.log(arr3);

arr.sort(); //! JavaScript's default sort() compares elements as strings, not numerically
console.log(arr);

y = arr.sort((a, b) => a - b);
console.log(y);

let arr4 = [1,2,3,4,5]
arr4.splice(1,2);
console.log(arr4);

//@ add which left by splice
arr.splice(4,5,6,7);
console.log(arr4);

//@ can replace by splice
arr.splice(1,2,3,4,8,9)

//@ slice
let newArr = arr4.slice(1, 4);

console.log(newArr);
