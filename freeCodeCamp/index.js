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


const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes >= par + 3) {
        return names[6];
    }

    return "Change Me";
    // Only change code above this line
}

golfScore(5, 4);


function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    // Only change code above this line
    return answer;
}

caseInSwitch(1);

function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 'a':
            answer = "apple";
            break;
        case 'b':
            answer = "bird";
            break;
        case 'c':
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }


    // Only change code above this line
    return answer;
}

switchOfStuff(1);




function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }

    // Only change code above this line
    return answer;
}

sequentialSizes(1);


let count = 0;

function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 7:
        case 8:
        case 9:
            count = count;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }
    if (count <= 0) {
        return count + " Hold";
    } else {
        return count + " Bet"
    }
    // Only change code above this line
}

cc(2);
cc(3);
cc(7);
cc('K');
cc('A');


const myDog = {

    'name': "Richi",
    'legs': 4,
    'tails': 1,
    'friends': ['bear, monky, dogs']

};



const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
const hatValue = testObj.hat; // Change this line
const shirtValue = testObj.shirt; // Change this line


const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

const entreeValue = testObj["an entree"]; // Change this line
const drinkValue = testObj["the drink"];


const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

// Only change code below this line
delete myDog.tails


function phoneticLookup(val) {
    let result = "";

    // Only change code below this line
    let lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }
    result = lookup[val]
        // Only change code above this line
    return result;
}

phoneticLookup("charlie");