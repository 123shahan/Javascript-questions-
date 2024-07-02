//1
// {
// let a = 1;
// let b = 2;

// console.log(a)
// console.log(b)
// }


// console.log(a)
// console.log(b)

//2
// concept of hoisting this process only in javascript..
// console.log(a)
// var a = 5

// var a;
// console.log(a);
// var a =5;


// 3
// const arr  = [1,2,3]
// arr[4] = 5;
// console.log(arr.length)


//4
// find the index in the array 
// {
//     const arr = [1,2,3]
//     arr[4] = 5
//     console.log(arr.indexOf(3))
// }


// {
//     let arr = [1,2,3]
//     arr[4] = 5
//     console.log(arr.indexOf(3))
// }


// 5
// if index is not found in the array then output is shown -1 

// {
//     let arr = [1,2,3]
//     arr[4] = 5
//     console.log(arr.indexOf(30))
// }


// 6
// var x = 20;
// function foo(){
//     console.log(x)
//     var x = 10;
// }
// foo()
//this gives undefined because due to the concept of hoisting declare variable in function// 

// 7
// console.log('start')
// setTimeout(()=>{
//     console.log('timeout')
// },4)
// console.log('equal')
// 8

// for(var i = 1; i<=3; i++){
//     setTimeout(() =>{
//         console.log(i)
//     },1000)
// }

// this output gives 3 times 4 because of var instead of using var we use let because let prints for each iteration of the loop

// to fix the code 
// for(let i = 1; i<=3; i++){
//     setTimeout(()=>{
// console.log(i)
//     },1000)
// }

// 9

// const user1 = {
// name:'john',
// age: '25',
// address: {
//     city: 'mumbai',
//     state: 'maharastra',
// },
// }

// const user2 = user1
// user2.name = 'ramesh'
// user2.address.city = 'pune'

// console.log(user1)
// console.log(user2)

// 10
// let arr = [1, 2, 3, 4];
// let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum);
// Spread Operator Misuse:

// arr = (...arr) is not valid JavaScript syntax. The spread operator is used to expand elements of an iterable (like an array) into individual elements, but it cannot be assigned in this manner.
// Using reduce Method:

// The reduce method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value (in this case, the sum).
// Code Breakdown:

// arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0):
// accumulator: The accumulated value previously returned in the last invocation of the callback.
// currentValue: The current element being processed in the array.
// 0: The initial value for the accumulator.


