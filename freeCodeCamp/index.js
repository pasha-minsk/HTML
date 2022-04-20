const product = 2.0 * 2.5;
let remainder = 0;
remainder = 11 % 3;

let a = 3;
let b = 17;
let c = 12;
// Only change code below this line
a += 12;
b += 9;
c += 7;

a *= 5;
b *= 3;
c *= 10;

a /= 12;
b /= 4;
c /= 11;

const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"';

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; //\n newline,\t tab,\n newline

const myName = "Pasha";
const myStr = "My name is " + myName + "and I am well!";

let firstLetterOfLastName = "";
const lastName = "Lovelace";
// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

// Setup
const lastName = "Lovelace";
// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

const myArray = ['Haloy World', 777];

const myArray = [
    ["John", 23],
    ["cat", 2]
];
myArray.push(["dog", 3])

const myArray = [
    ["John", 23],
    ["cat", 2]
];
let removedFromMyArray = myArray.pop();

const myArray = [
    ["John", 23],
    ["dog", 3]
];
let removedFromMyArray = myArray.shift()

const myArray = [
    ["John", 23],
    ["dog", 3]
];
myArray.shift();
myArray.unshift(["Paul", 35])

function functionWithArgs(arg1, arg2) {
    console.log(arg1 + arg2);
}
functionWithArgs(3, 4)

function timesFive(num) {
    return num * 5;
}

const outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line
    let outerWear = 'sweater';
    // Only change code above this line
    return outerWear;
}

myOutfit();

let processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7)