// // console.log("Part 2: Functions ready!");

// // ////////////////////////////////////
// // // Functions - Declarations and Expressions

// // function logger() {
// //     console.log("My name is Jonas");
// // }

// // logger();

// // function fruitProcessor(apples, oranges) {
// //     console.log(apples, oranges)
// //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// //     return juice;
// // }

// // const juice1 = fruitProcessor(5,3);
// // const juice2 = fruitProcessor(2,4);
// // const juice3 = fruitProcessor(3,2);

// // console.log(fruitProcessor(5,3))

// // ////////////////////////////////////
// // // Function Expressions

// // const calcAge = function (birthYear) {
// //   return 2037 - birthYear;
// // };

// // const age1 = calcAge(2005);
// // console.log(age1);

// // function introduction(firstName, lastName, age) {
// //     const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old`;
// //     return introduction;
// // }

// // console.log(introduction("Jonas", "Schmedtmann", 46));
// // console.log(introduction("Jonas"));

// // function yearsUntilRetirement(birthYear, firstName) {
// //     const age = calcAge(birthYear);
// //     const retirement = 65 - age;

// //     if (retirement > 0) {
// //         return `${firstName} retires in ${retirement} years`;
// //     } else {
// //         return `${firstName} has already retired!`;
// //     }
// // }

// // console.log(yearsUntilRetirement(2000, "Eugene"))
// // console.log(yearsUntilRetirement(1957, "Joselito"))

// // ////////////////////////////////////
// // // Function Scope

// // const globalVar = "I am global"
// // function testScope() {
// //     const localVar = "I am local";
// //     console.log(globalVar);
// //     console.log(localVar);
// // }

// // testScope();
// // console.log(globalVar);

// // ////////////////////////////////////
// // // Coding Challenge #1

// // // Function to calculate average of 3 scores
// // function calcAverage(score1, score2, score3) {
// //     return (score1 + score2 + score3) / 3
// // }

// // // Function to check winner
// // function checkWinner(avgDolphins, avgKoalas) {
// //   if (avgDolphins >= 2 * avgKoalas) {
// //     return `Dolphin wins (${avgDolphins} vs. ${avgKoalas})`;
// //   } else if (avgKoalas >= 2 * avgDolphins) {
// //     return `Koala wins (${avgKoalas} vs. ${avgDolphins})`;
// //   } else {
// //     return `No team wins! Dolphins: ${avgDolphins}, Koalas: ${avgKoalas}`
// //   }
// // }

// // // Test Data 1
// // let scoreDolphins = calcAverage(44, 23, 71);
// // let scoreKoalas = calcAverage(65, 54, 49);
// // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // Test Data 2
// // scoreDolphins = calcAverage(85, 54, 41);
// // scoreKoalas = calcAverage(23, 34, 27);
// // console.log(checkWinner(scoreDolphins, scoreKoalas));


// ////////////////////////////////////
// // Arrays - Creation and Access

// // const grades1 = [85, 92, 78, 96, 88];
// // console.log(grades);

// // const friends = ["Eugene", "Mikko", "Gab"];
// // console.log(friends);

// // const mixed = ["Henel", 40, true, friends];
// // console.log(mixed);

// // const years = new Array(1991, 1984, 2008, 2020);
// // console.log(years);

// // console.log(friends[0]);
// // console.log(friends[1]);
// // console.log(friends[2]);
// // console.log(friends[3]);

// // console.log(friends.length);

// // friends[1] = "Toni";
// // console.log(friends);

// // const calcAge = function (birthYear) {
// //   return 2025 - birthYear;
// // };

// // const ages = [calcAge(1991), calcAge(1967), calcAge(2002)];
// // console.log(ages);

// // const newLength = friends.push("Mikko");
// // console.log(friends);
// // console.log(newLength);

// // friends.unshift("Geinel");
// // console.log(friends);

// // const popped = friends.pop();
// // console.log(popped);
// // console.log(friends);

// // const shifted = friends.shift();
// // console.log(shifted);
// // console.log(friends)

// // console.log(friends.indexOf("Eugene"));
// // console.log(friends.indexOf("Mikko"));

// // console.log(friends.includes("Toni"));
// // console.log(friends.includes("Geinel"));


// ////////////////////////////////////
// // Array Iteration - Loops

// // for (let index = 0; index < friends.length; index++) {
// //     console.log(friends[index])
// // }

// // friends.forEach(function(friend, index) {
// //     console.log(`${(index + 1)}: ${friend}`);
// // })

// // friends.forEach((friend, index) => {
// //     console.log(`${(index + 1)}: ${friend}`);
// // })

// // const grades2 = [85, 92, 78, 96, 88, 74];
// // let total = 0;

// // for (let i = 0; i < grades2.length; i++) {
// //     total += grades2=[i];
// // }

// // const avg = total / grades.length;
// // console.log(`Average grade: ${average.toFixed(2)}`);

// // let passedCount = 0;
// // grades.forEach((grades2) => {
// //     if (grades2 >= 70) passedCount++;
// // });

// // console.log(`${passedCount} out of ${grades2.length} students passed`);

// ////////////////////////////////////
// // Coding Challenge #2 - Student Grade Manager

// const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// // Function to calculate average
// function calculateAverage(grades) {
//     let sum = 0;
//     for (let i = 0; i < grades.length; i++) {
//       sum += grades[i];
//     }
//     return sum / grades.length;
// }

// // Function to find highest grade
// function findHighestGrade(grades) {
//   let highest = grades[0];
//     for (let i = 1; i < grades.length; i++) {
//       if (grades[i] > highest) {
//         highest = grades[i];
//       }
//     }
//     return highest;
// }

// // Function to find lowest grade
// function findLowestGrade(grades) {
//   let lowest = grades[0];
//     for (let i = 1; i < grades.length; i++) {
//       if (grades[i] < lowest) {
//           lowest = grades[i];
//       }
//     }
//     return lowest;
// }

// // Function to count passing students
// function countPassing(grades, passingGrade) {
//   let count = 0;
//   for (let i = 0; i < grades.length; i++) {
//     if (grades[i] >= passingGrade) {
//       count++;
//     }
//   }
//   return count;
// }

// // Generate complete report
// const average = calculateAverage(grades);
// const highest = findHighestGrade(grades);
// const lowest = findLowestGrade(grades);
// const passing = countPassing(grades, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades.length}`);



////////////////////////////////////
// The Array Problem

const gabrielArray = [
  "Gabriel",
  "Eugenio",
  2025 - 2005,
  "student",
  ["Mikko", "Gab", "Toni"],
];

console.log(gabrielArray[0]);
console.log(gabrielArray[1]);
console.log(gabrielArray[2]);

const gabrielObject = {
  firstName: "Gabriel",
  lastName: "Eugenio",
  age: 20,
  job: "student",
  friends: ["Mikko", "Gab", "Toni"],
};

console.log(gabrielObject);

// Property Access Methods
// Dot Notation
console.log(gabrielObject.firstName);
console.log(gabrielObject.lastName);
console.log(gabrielObject.age);

// Bracket Notation
console.log(gabrielObject["firstName"]);
console.log(gabrielObject["lastName"]);
console.log(gabrielObject["age"]);

const nameKey = "Name";
console.log(gabrielObject["first" + nameKey]);
console.log(gabrielObject["last" + nameKey]); 

gabrielObject.job = "programmer";
gabrielObject["age"] = 21;
console.log(gabrielObject);

gabrielObject.location = "Philippines";
gabrielObject["github"] = "@gabrieljoshp";


// Ordered, indexed data - think lists

const listOfYears = [1991, 1984, 2008, 2020];
const shoppingList = ["apples", "bananas", "milk", "bread"];
const testScores = [85, 92, 78, 96];

const person = {
  name: "Jonas",
  age: 46,
  occupation: "teacher",
};

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  color: "blue",
};

const student = {
  name: "Sarah",
  grades: [85, 92, 78],
  address: {
    street: "123 Main St",
    city: "New York",
  },
};

console.log(student.grades[0]);
console.log(student.address.city);

const johnImproved = {
  firstName: "John",
  lastName: "Doe",
  birthYear: 1995,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(johnImproved.calcAge());
console.log(johnImproved.age);
console.log(johnImproved.getSummary())



////////////////////////////////////
// Coding Challenge #3 - User Profile System

////////////////////////////////////
// Coding Challenge #3 - User Profile System

const user = {
  firstName: "Sarah",
  lastName: "Johnson",
  birthYear: 1995,
  location: "New York",
  interests: ["photography", "travel", "coding"],
  friends: [
    { name: "Michael", status: "active" },
    { name: "Emma", status: "inactive" },
    { name: "David", status: "active" },
  ],
  isActive: true,

  // Calculate age method
  calcAge: function () {
    this.age = new Date().getFullYear() - this.birthYear;
    return this.age;
  },

  // Add friend method
  addFriend: function (name, status = "active") {
    this.friends.push({ name, status: status });
    return this.friends.length;
  },

  // Get active friends count
  getActiveFriends: function () {
    const activeFriends = this.friends.filter((friend) => friend.status === "active");
    return activeFriends.length;
  },

  // Toggle active status
  toggleStatus: function () {
    this.isActive = !this.isActive;
    return this.isActive;
  },

  // Generate profile summary
  getSummary: function () {
    const age = this.calcAge();
    const activeFriendsCount = this.getActiveFriends();
    const status = this.isActive ? "active" : "inactive";

    return `${this.firstName} ${this.lastName} is a ${age}-year-old from ${this.location}. They are currently ${status} and have ${activeFriendsCount} active friends. Their interests include: ${this.interests.join(", ")}.`;
  },
};

// Test your user profile system
console.log(user.getSummary());
user.addFriend("Alex", "active");
user.toggleStatus();
console.log(`\nAfter updates:`);
console.log(user.getSummary());