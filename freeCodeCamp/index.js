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

function nextInLine(arr, item) {

    arr.push(item);
    let shows = arr.shift();
    return shows;

}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function trueOrFalse(wasThatTrue) {

    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";

}

function testNotEqual(val) {
    if (val != 99) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testNotEqual(10);


function testLogicalAnd(val) {

    if (val <= 50 && val >= 25) {
        return "Yes";

    }

    return "No";
}
testLogicalAnd(10);

function testLogicalOr(val) {

    if (val < 10 || val > 20) {
        return "Outside";
    }

    return "Inside";
}

testLogicalOr(15);


function orderMyLogic(val) {
    if (val < 10 && val >= 5) {
        return "Less than 10";
    } else if (val < 5) {
        return "Less than 5";
    } else {
        return "Greater than or equal to 10";
    }
}

orderMyLogic(7);

function testSize(num) {
    // Only change code below this line
    if (num < 5) {
        return "Tiny"
    } else if (num < 10) {
        return "Small"
    } else if (num < 15) {
        return "Medium"
    } else if (num < 20) {
        return "Large"
    } else if (num >= 20) {
        return "Huge"
    }

    return "Change Me";
    // Only change code above this line
}