import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Operators, Branching, Loops</h1>

`;
//Q1. Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.
// let num1, num2, num3, num4, num5;
// num1 = 5;
// num2 = 13;
// num3 = 7;
// num4 = 21;
// num5 = 48;
// let sum = 0;
// sum = num1 + num2 + num3 + num4 + num5;
// console.log(sum);
// Q2.Write a program to take a number input from user and determine whether the number is odd or even.
// let input = Number(prompt("Enter a number"));
// if (input % 2 === 0) {
//   console.log("even");
// } else console.log("odd");
//Q3. Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.
// const num1=129;
// const num2=251
// const maxn=Math.max(num1,num2)
// const minn = Math.min(num1,num2)
// console.log(maxn)
// console.log(minn)
// //or
// const num1=129;
// const num2=251
// let max=0,min=0;
// if(num1>=num2){
//   max=num1
//   min=num2
// }
// else {max=num2
// min=num1}
// console.log(max)
// console.log(min)
//Q4.Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.
// const num1=8;
// const num2=23;
// const num3=17
// const max=Math.max(num1,num2,num3)
// console.log(max)
//Q5.Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46
// const num1=35
// const num2=29
// const num3=46
// const min = Math.min(num1,num2,num3)
// console.log(min)
//Q6.Write program to take a month as an input from the user and find out whether the month has 31 days or not.
// let input = Number(prompt("Enter a month in number"));
// if(input===1||input===3||input===5||input===7||input===8||input===10||input===12){
//   console.log("Month has 31 days")
// }
// else{
//   console.log("Month has not 31 days")
// }

//Intermediate
//Q1.Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

// for (let i = 1; i <= 100; i++) {

//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }

// }
// for (let i = 1; i <= 100; i++) {
//   let out = "";
//   if (i % 3 === 0) out += "Fizz";
//   if (i % 5 === 0) out += "Buzz";
//   console.log(out || i);
// }

//Q2.Print the following star pattern :-

// *
// * *
// * * *
// * * * *
// * * * * *
// for(let i=1;i<=5;i++){
//   let s=""
//   for(let j=1;j<=i;j++){
//     s=s+'*';
//   }
//   console.log(s)
// }
//Q3.Write a program to take a number input from user and print multiplication table 12 times for that number.
// let input = Number(prompt("Enter a number"));

// for (let i = 1; i <= 12; i++) {
//   console.log(`${input} * ${i} = ${input * i}`);
// }
//Q4.Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....
// let input = Number(prompt("Enter a number"));
// let first=0,second=1,third;
// for(let i=1;i<=input;i++){
//   console.log(first)
//   third=first+second
//   first=second
//   second=third
// }
//Q5.Write a program to take an input from a user and find its Factorial.

// let input = Number(prompt("Enter a number"));
// let f=1;
// for(let i=1;i<=input;i++){
//  f=f*i;
// }
//  console.log(f)
//Q6.Write a Program to take a number input from user and find if the number is Prime or not.
// let input = Number(prompt("Enter a number"));
// for (let i = 1; i <= input; i++) {
//   if (input % i !== 0) {
//     console.log("prime");
//     break;
//   }
// }
//Q7.Write a program to take a day as an input and determine whether it is a weekday or weekend.
// let input = prompt("Enter a day");
// if (
//   input === "Monday" ||
//   input === "Tuesday" ||
//   input === "Wednesday" ||
//   input === "Thursday" ||
//   input === "Friday" ||
//   input === "monday" ||
//   input === "tuesday" ||
//   input === "wednesday" ||
//   input === "thursday" ||
//   input === "friday" ||
//   input === "MONDAY" ||
//   input === "TUESDAY" ||
//   input === "WEDNESDAY" ||
//   input === "THURSDAY" ||
//   input === "FRIDAY"
// )
//   console.log(`${input} is Weekday`);
// else console.log(`${input} is Weekend`);
