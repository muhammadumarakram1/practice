// const markMass = 50;
// const markHieght = 1.69;
// const johnHieght = 1.95;
// const johnMass = 92;
// const markBMI = markMass / markHieght ** 2;
// const johnBMI = johnMass / johnHieght ** 2;

// if (markBMI > johnBMI) {
//     console.log(`
//     Mark BMI is ${markBMI} Kg/m*m.
//     John BMI is ${johnBMI} Kg/m*m.
//     Mark BMI is higher than John by ${markBMI - johnBMI} Kg/m*m.`);
// } else {
//     console.log(`
//     John BMI is ${johnBMI} Kg/m*m.
//     Mark BMI is ${markBMI} Kg/m*m.
//     John BMI is higher than Mark by ${johnBMI - markBMI} Kg/m*m`);
// }

// const dolphinsFirstMatch = 10;
// const dolphinsSecondMatch = 10;
// const dolphinsThirdMatch = 10;
// const koalasFirstMatch = 10;
// const koalasSecondMatch = 10;
// const koalasThirdMatch = 10;
// const dolphinsAverage = (dolphinsFirstMatch + dolphinsSecondMatch + dolphinsThirdMatch) / 3;
// const koalasAverage = (koalasFirstMatch + koalasSecondMatch + koalasThirdMatch) / 3;
// if ((dolphinsAverage > koalasAverage) && (dolphinsAverage >= 100)) {
//     console.log("Congrats Dolphins");
// } else if ((dolphinsAverage < koalasAverage) && (koalasAverage >= 100)) {
//     console.log("Congrats Koalas");
// } else if ((dolphinsAverage === koalasAverage) && (dolphinsAverage >= 100) && (koalasAverage >= 100)) {
//     console.log("Match is Draw");
// } else {
//     console.log("Both Lose");
// }

// function totalBill(bill, tip) {
//     return bill + tip;
// }
// function calcTip(bill) {
//     return (bill >= 50 && bill <= 300) ? ((bill / 100) * 15) : ((bill / 100) * 20);
// }
// const bills = [125, 555, 44, 56, 656, 76, 67, 76, 87];
// const tips = [];
// const totals = [];
// for (let i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]));
//     totals.push(totalBill(bills[i], calcTip(bills[i])));
// }
// function calcAverage(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }
// console.log(tips);
// console.log(bills);
// console.log(totals);
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));
// console.log(calcAverage(bills));

// const calcAverage = (one, two, three) => {
//     return (one + two + three) / 3;
// };
// const avgDolphins = calcAverage(200, 200, 200);
// const avgKoalas = calcAverage(100, 100, 100);
// const winner = checkWinners(avgDolphins, avgKoalas);
// console.log(`Average score of Dolphins is ${avgDolphins} and Koalas is ${avgKoalas}.
// So, ${winner}`);
// function checkWinners(avgDolphins, avgKoalas) {
//     if (avgDolphins >= (2 * avgKoalas)) {
//         return `Dolphins Wins by ${avgDolphins - avgKoalas} average score against Koalas.`;
//     } else if (avgKoalas >= (2 * avgDolphins)) {
//         return `Koalas Wins by ${avgKoalas - avgDolphins} average score against Dolphins`;
//     } else {
//         return `No one is winner according to the rule.`;
//     }
// }

// const mark = {
//     fullName: 'Mark Miller',
//     height: 1.69,
//     mass: 78,
//     calcBMI: function () {
//         BMI = this.mass / (this.height ** 2);
//         return BMI;
//     }
// };
// const john = {
//     fullName: 'John Smith',
//     height: 1.95,
//     mass: 92,
//     calcBMI: function () {
//         return this.mass / (this.height ** 2);
//     }
// };
// const higherBMI = mark.calcBMI() > john.calcBMI() ?
//     (mark.fullName + ' BMI (' + mark.calcBMI() + ') is higher than ' + john.fullName + '(' + john.calcBMI() + ')!') :
//     (john.fullName + ' BMI (' + john.calcBMI() + ') is higher than ' + mark.fullName + '(' + mark.calcBMI() + ')!');
// console.log(higherBMI);    

// function findNeedle(haystack) {
//     let found;
//     for (let i = 0; i < haystack.length; i++) {
//         if (haystack[i] == 'needle') {
//             found = `found the needle at position ${i}`;
//         }
//     }
//     return found;
// }

// const haystack = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
// console.log(findNeedle(haystack));

// function solution(str){
//     let newString = '';
//     for(let i= str.length - 1; i>=0; i--)
//       {
//         newString += str[i];
//       }
//     return newString;
//   }

// console.log(solution());

// function areYouPlayingBanjo(name) {
//     const isPlaying = (name[0] === 'r') || (name[0] === 'R') ? 'plays banjo' : 'does not play banjo';
//     name = `${name}  ${isPlaying}`;
//     return name;
// }

// console.log(areYouPlayingBanjo('rabi'));

// function sumArray(array) {
//     if ((!array) || (array.length < 2)) {
//         return 0;
//     } else {
//         let high = array[0], low = array[0], sum = 0;
//         for (let i = 0; i < array.length; i++) {

//             if (high < array[i]) {
//                 high = array[i];
//             } else if (low > array[i]) {
//                 low = array[i];
//             }
//             sum += array[i];
//         }
//         return sum - high - low;
//     }
// }
// const arr = [3, 2, 5];
// console.log(sumArray(arr));


// function printForecast(temps) {
//     const print = [];
//     const deg = "°";
//     for (let i = 0; i < temps.length; i++) {
//         print.push(`${temps[i] + deg} in ${i + 1} days`);
//     }
//     return print;
// }
// console.log(printForecast([3, 4, 5, 6]));