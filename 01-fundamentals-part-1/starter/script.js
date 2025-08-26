// // JavaScript Fundamentals - Part 1
// // We'll write our code here!



// // JavaScript Fundamentals - Hour 1

// // let js = "amazing";
// // console.log(40 + 8 + 23-10);
// // console.log(js);


// // console.log("=== VARIABLES ===");

// // // let firstName = "Jonas";    
// // // console.log(firstName);

// // let age = 30;
// // console.log(age);
// // age = 50;
// // console.log(age);

// // const birthYear = 1991;
// // console.log(birthYear);

// // const Pi = 3.1415
// // console.log(Pi);

// // age = 50;
// // age = 51; 


// // console.log("=== DATA TYPES ===");

// // // Number
// // let id = 12345;
// // console.log(id);
// // console.log(typeof id);

// // // String
// // // let lastName = "Doe";
// // // console.log(lastName);
// // // console.log(typeof lastName);

// // // Boolean
// // let javaScriptIsFun = true;
// // console.log(javaScriptIsFun);
// // console.log(typeof javaScriptIsFun);

// // // undefined
// // let year;
// // console.log(year);
// // console.log(typeof year);

// // let dynamicVariable = 40
// // console.log(dynamicVariable, typeof dynamicVariable);

// // dynamicVariable = "Now im a string!"
// // console.log(dynamicVariable, typeof dynamicVariable);

// // dynamicVariable = true
// // console.log(dynamicVariable, typeof dynamicVariable);


// // console.log("=== MATH OPERATORS ===");

// // const now = 2037;
// // const ageJonas = now - 1991;
// // const ageSarah = now - 2018;
// // console.log(ageJonas, ageSarah);

// // console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// // console.log("Math operations:");
// // console.log("Addition:", 10 + 5);
// // console.log("Subtraction:", 20 - 8);
// // console.log("Multiplication:", 4 * 7);
// // console.log("Division:", 15 / 3);
// // console.log("Exponentiation:", 2 ** 3);

// // const firstName = "Jonas";
// // const lastName = "Doe";
// // console.log(firstName + " " + lastName);
// // console.log("Hello " + "World" + "!");
// // console.log("I am " + 25 + " years old");


// // console.log("=== ASSIGNMENT OPERATORS ===");

// // // let x = 10 + 5; 
// // // console.log("x starts as:", x);

// // // x += 10; 
// // // console.log("After x += 10", x);


// // console.log("=== COMPARISON OPERATORS ===");

// // console.log("Age comparison:");
// // console.log(ageJonas > ageSarah);
// // console.log(ageSarah >= 18);
// // console.log(ageJonas < 30);

// // console.log("Number comparisons");
// // console.log(25 > 20);
// // console.log(15 < 10);
// // console.log(18 >= 18);
// // console.log(16 <= 15);

// // const isFullAge = ageSarah >= 18;
// // console.log("Sarah is adult:", isFullAge);

// // const isJonasOlder = ageJonas > ageSarah;
// // console.log("Jonas is older", isJonasOlder)

// // console.log("Complex comparison:");
// // console.log(now - 1991 > now - 2018); 


// // console.log("=== OPERATOR PRECEDENCE ===");

// // let x, y;
// // x = y = 25 - 10 - 5;
// // console.log(x, y);

// // console.log("=== CODING CHALLENGE | TEST DATA 1 ===");
// // // TASK 1
// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightJohn = 1.95;

// // // TASK 2
// // let bmiMark = massMark / heightMark ** 2;
// // let bmiJohn = massJohn / (heightJohn * heightJohn);
// // console.log("Mark BMI = " + bmiMark);
// // console.log("John BMI = " + bmiJohn);

// // // TASK 3
// // let markHigherBMI = bmiMark > bmiJohn
// // console.log(markHigherBMI)



// // JavaScript Fundamentals - Hour 3

// console.log("=== STRING AND TEMPLATE LITERALS ===")
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas = 
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);

// const jonasNew = `i'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew)

// console.log(`I'm ${2037 - 1991} years old`);
// console.log(`Math works: ${2 + 3} equals five`);
// console.log(`Comparisons too: ${5 > 3}`);

// console.log(`Just a regular string...`);

// const age = 15;

// if (age >= 18) {
//   console.log(`Sarah can start driving license 🚗`);
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// console.log("=== CODING CHALLENGE | TEST DATA 2 ===");
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`);
// }



// JavaScript Fundamentals - Hour 4

////////////////////////////////////
// Type Conversion and Coercion

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);
console.log(typeof String(23));

// Automatic Type Conversion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
console.log("23" * "2");

let n = "1" + 1;
console.log(n);

n = n - 1;
console.log(n);

console.log(2 + 3 + 4 + "5");
console.log("10" - "4" - "3" - 2 + "5"); 

////////////////////////////////////
// Equality Operators: == vs. ===

// const age = "18";
// if (age === 18) console.log("You just became an adult :D (strict)");
// if (age == 18) console.log("You just became an adult :D (loose)");

console.log("18" === 18);
console.log("18" == 18);
console.log(18 === 18);

console.log("0" == 0);
console.log(0 == false);
console.log("0" == false);
console.log(null == undefined);

console.log("" == 0);
console.log(" " == 0);

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }

// if (favourite !== 23) console.log("Why not 23?");

////////////////////////////////////
// Logical Operators

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(`AND OPERATOR: ${hasDriversLicense && hasGoodVision}`);
console.log(`OR OPERATOR: ${hasDriversLicense || hasGoodVision}`);
console.log(`NOT OPERATOR: ${!hasDriversLicense}`);

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Eugene is able to drive!");
} else {
  console.log("Someone else should drive...");
}


// const age = 20;
// const hasPermission = true;
// const hasExperience = false;

// if ((age >= 18 || hasPermission) && hasExperience) {
//   console.log("Approved to drive");
// } else {
//   console.log("Not approved to drive");
// }


// CLUB ENTRY

// const age = 21; // Try different values
// const hasID = true; // Try different values
// const isVIP = false;

// if (age >= 21 && hasID) {
//   console.log("Welcome to the club!");
// } else if (isVIP) {
//   console.log("Welcome to the VIP area!");
// } else {
//   console.log("Sorry, you cannot enter.");
// }


////////////////////////////////////
// The Conditional (Ternary) Operator

const age = 17;

const drink = age >=18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);


console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water"}`);

////////////////////////////////////
// Coding Challenge #4

const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);