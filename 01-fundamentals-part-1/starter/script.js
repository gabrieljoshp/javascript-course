// JavaScript Fundamentals - Part 1
// We'll write our code here!



// JavaScript Fundamentals - Hour 1

// let js = "amazing";
// console.log(40 + 8 + 23-10);
// console.log(js);


// console.log("=== VARIABLES ===");

// // let firstName = "Jonas";    
// // console.log(firstName);

// let age = 30;
// console.log(age);
// age = 50;
// console.log(age);

// const birthYear = 1991;
// console.log(birthYear);

// const Pi = 3.1415
// console.log(Pi);

// age = 50;
// age = 51; 


// console.log("=== DATA TYPES ===");

// // Number
// let id = 12345;
// console.log(id);
// console.log(typeof id);

// // String
// // let lastName = "Doe";
// // console.log(lastName);
// // console.log(typeof lastName);

// // Boolean
// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);
// console.log(typeof javaScriptIsFun);

// // undefined
// let year;
// console.log(year);
// console.log(typeof year);

// let dynamicVariable = 40
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = "Now im a string!"
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = true
// console.log(dynamicVariable, typeof dynamicVariable);


// console.log("=== MATH OPERATORS ===");

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// console.log("Math operations:");
// console.log("Addition:", 10 + 5);
// console.log("Subtraction:", 20 - 8);
// console.log("Multiplication:", 4 * 7);
// console.log("Division:", 15 / 3);
// console.log("Exponentiation:", 2 ** 3);

// const firstName = "Jonas";
// const lastName = "Doe";
// console.log(firstName + " " + lastName);
// console.log("Hello " + "World" + "!");
// console.log("I am " + 25 + " years old");


// console.log("=== ASSIGNMENT OPERATORS ===");

// // let x = 10 + 5; 
// // console.log("x starts as:", x);

// // x += 10; 
// // console.log("After x += 10", x);


// console.log("=== COMPARISON OPERATORS ===");

// console.log("Age comparison:");
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);
// console.log(ageJonas < 30);

// console.log("Number comparisons");
// console.log(25 > 20);
// console.log(15 < 10);
// console.log(18 >= 18);
// console.log(16 <= 15);

// const isFullAge = ageSarah >= 18;
// console.log("Sarah is adult:", isFullAge);

// const isJonasOlder = ageJonas > ageSarah;
// console.log("Jonas is older", isJonasOlder)

// console.log("Complex comparison:");
// console.log(now - 1991 > now - 2018); 


// console.log("=== OPERATOR PRECEDENCE ===");

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// console.log("=== CODING CHALLENGE | TEST DATA 1 ===");
// // TASK 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// // TASK 2
// let bmiMark = massMark / heightMark ** 2;
// let bmiJohn = massJohn / (heightJohn * heightJohn);
// console.log("Mark BMI = " + bmiMark);
// console.log("John BMI = " + bmiJohn);

// // TASK 3
// let markHigherBMI = bmiMark > bmiJohn
// console.log(markHigherBMI)



// JavaScript Fundamentals - Hour 3

console.log("=== STRING AND TEMPLATE LITERALS ===")
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = 
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `i'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew)

console.log(`I'm ${2037 - 1991} years old`);
console.log(`Math works: ${2 + 3} equals five`);
console.log(`Comparisons too: ${5 > 3}`);

console.log(`Just a regular string...`);

const age = 15;

if (age >= 18) {
  console.log(`Sarah can start driving license 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

console.log("=== CODING CHALLENGE | TEST DATA 2 ===");
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`);
}

