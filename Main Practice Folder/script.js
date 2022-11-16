'use strict';
// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//         [
//             'Neuer',
//             'Pavard',
//             'Martinez',
//             'Alaba',
//             'Davies',
//             'Kimmich',
//             'Goretzka',
//             'Coman',
//             'Muller',
//             'Gnarby',
//             'Lewandowski',
//         ],
//         [
//             'Burki',
//             'Schulz',
//             'Hummels',
//             'Akanji',
//             'Hakimi',
//             'Weigl',
//             'Witsel',
//             'Hazard',
//             'Brandt',
//             'Sancho',
//             'Gotze',
//         ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//         'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// };

// // 1
// for (const [i, player] of game.scored.entries()) {
//     console.log(`Goal ${i + 1}: ${player}`);
// }

// // 2.
// let sum = 0;
// for (const odd of Object.values(game.odds)) {
//     sum += odd;
// }
// console.log(sum);
// const average = sum / Object.values(game.odds).length;
// console.log(average);

// // 3.
// for (const [team, odd] of Object.entries(game.odds)) {
//     const teamStr = team === 'x' ? 'Draw' : `victory ${game[team]}`;
//     console.log(` Odd of ${teamStr}: ${odd} `);
// }

// 4.


// Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names 😉
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
// }


// Coding Challenge #3
// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// ⚽
// [FIRST HALF] 17:
// GOAL
// GOOD LUCK 😀

// const gameEvents = new Map([
//     [17, '⚽ GOAL'],
//     [36, '🔁 Substitution'],
//     [47, '⚽ GOAL'],
//     [61, '🔁 Substitution'],
//     [64, '🔶 Yellow card'],
//     [69, '🔴 Red card'],
//     [70, '🔁 Substitution'],
//     [72, '🔁 Substitution'],
//     [76, '⚽ GOAL'],
//     [80, '⚽ GOAL'],
//     [92, '🔶 Yellow card'],
// ]);

// // 1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2.
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3.
// console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

// // 4.
// for (const [key, value] of gameEvents) {
//     const time = (key <= 45 ? '[ First Half]' : '[Second Half]');
//     console.log(`${time} ${key}: ${value}`);
// }

//////////////////////////////////////////////////////////////////////////////

// Coding Challenge #4
// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// 
// underscoreCase    ✅
// firstName         ✅✅
// someVariable      ✅✅✅
// calculateAge      ✅✅✅✅
// delayedDeparture  ✅✅✅✅✅
// Hints:
// § Remember which character defines a new line in the textarea 😉
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working 😉
// §
// This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data!
// GOOD LUCK 😀

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// document.querySelector('button').addEventListener('click', function () {
//     const text = document.querySelector('textarea').value;
//     const rows = text.split('\n');
//     for (const [i, row] of rows.entries()) {
//         const [first, second] = row.toLowerCase().trim().split('_');
//         const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
//         console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//     }
// });
/////////////////////////////////////////////////////////////////////////////////////
/*
                            A Closer Look at Functions

                            Coding Challenge #1

Let's build a simple poll app!
    A poll has a question, an array of options from which people can choose, and an
    array with the number of replies for each option. This data is stored in the starter
    'poll' object below.
Your tasks:
    1. Create a method called 'registerNewAnswer' on the 'poll' object. The
    method does 2 things:
    1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
            0: JavaScript
            1: Python
            2: Rust
            3: C++
    (Write option number)
    1.2. Based on the input number, update the 'answers' array property. For example, if the option is 3, increase the value at position 3 of the array by 
    1. Make sure to check if the input is a number and if the number makes sense (e.g. chanswer 52 wouldn't make sense, right?)
    2. Call this method whenever the user clicks the "Answer poll" button.
    3. Create a method 'displayResults' which displays the poll results. The
    method takes a string as an input (called 'type'), which can be either 'string'
    or 'array'. If type is 'array', simply display the results array as it is, using
    console.log(). This should be the default option. If type is 'string', display a
    string like "Poll results are 13, 2, 4, 1".
    4. Run the 'displayResults' method at the end of each
    'registerNewAnswer' method call.
    5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
    data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
    object! So what should the this keyword look like in this situation?
    Test data for bonus:
    §Data 1: [5, 2, 3]
    §Data 2: [1, 5, 3, 9, 6, 1]
    Hints: Use many of the tools you learned about in this and the last section 😉
    GOOD LUCK 😀
*/

// const poll = {
//     question: "What is your favourite programming language?",
//     options: ["1: JavaScript", "2: Python", "3: Rust", "4: C++"],
//     // This generates [0, 0, 0, 0]. More in the next section!
//     answers: new Array(4).fill(0),
//     registerNewAns() {
//         const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}
//         \n(Write option number)`)) - 1;
//         typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
//         this.displayResults();
//         this.displayResults('string');
//     },
//     displayResults(type = 'array'){
//         if (type === 'array') {
//             console.log(this.answers)
//         } else if (type === 'string') {
//             console.log(`Poll results are ${this.answers.join(', ')}`);
//         }
//     },
// };
// document.querySelector('.poll').addEventListener('click', poll.registerNewAns.bind(poll));

/*
                                Coding Challenge #2
This is more of a thinking challenge than a coding challenge 🤓
Your tasks:
1. Take the IIFE below and at the end of the function, attach an event listener that
changes the color of the selected h1 element ('header') to blue, each time
the body element is clicked. Do not select the h1 element again!
2. And now explain to yourself (or someone around you) why this worked! Take all
the time you need. Think about when exactly the callback function is executed,
and what that means for the variables involved in this example.
 */
// (function () {
//     const header = document.querySelector('h1');
//     document.querySelector("body").addEventListener('click', function () {
//         header.style.color = "#" + String(Math.floor(Math.random() * 16777215).toString(16));
//     })
// })();

//     (function () {
//         const header = document.querySelector('h1');
//         header.style.color = 'red';
//     })();

/*
                                            Working With Arrays
                                            Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog
🐶 number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
")
4. Run the function for both test datasets
Test data:
§Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far 😉
GOOD LUCK 😀
*/
// const juliaData = [3, 5, 2, 12, 7];
// const kateData = [4, 1, 15, 8, 3];
// const checkDogs = function (dogsJulia, dogsKate) {
//     const correctDataJulia = dogsJulia.slice(1, -2);
//     function check(name, arr) {
//         arr.forEach(function (element, i) {
//             console.log(element >= 3 ? `[${name} Data] Dog 🐶 number ${i + 1} is an adult, and is ${element} years old` : `[${name} Data] Dog number ${i + 1} is still a puppy`);
//         });
//     }
//     check('Julia', correctDataJulia);
//     check('Kate', dogsKate);
// }
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

/*
                                Coding Challenge #2
Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
Test data:
§Data 1: [5, 2, 4, 1, 15, 8, 3]
§Data 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/
// function calcAverageHumanAge(ages) {
//     const humanAge = ages.map(age => (age <= 2 && age > 0 ? 2 * age : 16 + age * 4));
//     const adultDog = humanAge.filter(age => (age >= 18));
//     const aveAge = (adultDog.reduce((acc, age) => ((acc + age)), 0)) / adultDog.length;
//     console.log(humanAge);
//     console.log(adultDog);
//     console.log(aveAge);
// };
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

/*
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
Test data:
§Data 1: [5, 2, 4, 1, 15, 8, 3]
§Data 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

// function calcAverageHumanAge(ages) {
//     const humanAge = ages.map(age => (age <= 2 && age > 0 ? 2 * age : 16 + age * 4))
//         .filter(age => (age >= 18))
//         .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//     console.log(humanAge);
// };
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

/*
                                Coding Challenge #4
Julia and Kate are still studying dogs, and this time they are studying if dogs are
eating too much or too little.
Eating too much means the dog's current food portion is larger than the
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10%
above and 10% below the recommended portion (see hint).
Your tasks:
    1. Loop over the 'dogs' array containing dog objects, and for each dog,         calculate the recommended food portion and add it to the object as a new property. Do not create a new array, simply loop over the array. Forumla:      recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
    2. Find Sarah's dog and log to the console whether it's eating too much or too
    little. Hint: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
    3. Create an array containing all owners of dogs who eat too much   ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
    ('ownersEatTooLittle').
    4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
    5. Log to the console whether there is any dog eating exactly the amount of food
    that is recommended (just true or false)
    6. Log to the console whether there is any dog eating an okay amount of food
    (just true or false)   
    7. Create an array containing the dogs that are eating an okay amount of food (try to reuse the condition used in 6.)
    8. Create a shallow copy of the 'dogs' array and sort it by recommended food
    portion in an ascending order (keep in mind that the portions are inside the
    array's objects 😉)
                                Hints:
Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
Being within a range 10% above and below the recommended portion means:
current > (recommended * 0.90) && current < (recommended *1.10). Basically, the current portion should be between 90% and 110% of the
recommended portion.
Test data:
*/
// const ownersEatTooMuch = [];
// const ownersEatTooLittle = [];
// const dogs = [
//     { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//     { weight: 8, curFood: 200, owners: ['Matilda'] },
//     { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//     { weight: 32, curFood: 340, owners: ['Michael'] },
// ];
// recommendedFood(dogs);
// function recommendedFood(dogs) {
//     dogs.forEach(dog => dog.recommendedFood = dog.weight ** 0.75 * 28);
// };
// console.log(dogs);
// function dogsEat(dogs) {
//     dogs.forEach(dog => {
//         dog.owners.forEach(owner =>{
//             console.log(owner);
//             if (dog.curFood > (recommendedFood * 0.90) && dog.curFood < (recommendedFood * 1.10)) {
//                 console.log(`${owner} dog eating normal`);
//             }
//             else if (dog.curFood > recommendedFood) {
//                 console.log('//////');
//                 ownersEatTooMuch.push(owner);
//                 console.log(`${dog.owner} dog eating too much`);
//             } else if (dog.curFood < recommendedFood) {
//                 console.log('//////');
//                 ownersEatTooLittle.push(owner);
//                 console.log(`${owner} dog eating too much`);
//             }
//         });
//     });
// };
// dogsEat(dogs);
// console.log(ownersEatTooMuch);
// console.log(ownersEatTooLittle);





// -------------------OOP-------------------------------//

/*
                Coding Challenge #1
Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
'speed' property. The 'speed' property is the current speed of the car in
km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10,
and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log
the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and
'brake' multiple times on each of them
Test data:
§
§
Data car 1: 'BMW' going at 120 km/h
Data car 2: 'Mercedes' going at 95 km/h
GOOD LUCK 😀
*/
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function () {
    this.speed += 10;
};
Car.prototype.brake = function () {
    return this.speed -= 5;
};
const bmw = new Car('bmw', 100);
console.log(bmw);
bmw.accelerate();
console.log(bmw);
bmw.brake(bmw);
console.log(bmw);