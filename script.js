
//Task1: Declare variables properly using let and const where appropriate.

const maxAttempts = 3;
const companyName1 = "ABCltd"
let certified = true;
let marketCap = 433;
let locations = 15;
let locationperCap;
locationperCap = marketCap / locations;

//-------------------------------------------------------------------------------------
//Task2: Use operators to perform calculations on variables and literals
// Declare variables
let x = 523;
let y = 481;
const eachLocation = x / y * 2;
//Task 3 Use operators to perform calculations on variables and literals.

// Perform calculations
let sum = x + y;
let difference = x - y;
let product = x * y;
let quotient = x / y;
let remainder = x % y;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);
console.log(`the addition of ${x} and ${y} is ${sum}`);


//Task 4: Use strings, numbers, and Boolean values cached within variables.

// Strings
const studentName = "Suresh Patil";
const department = "Business Management";

// Numbers
let studentAge = 34;
let collegefee = 1000000;

// Boolean values
let isgraduated = true;
let isPlaced = false;

// Output
console.log("Student Name:", studentName);
console.log("Department:", department);
console.log("Student Age:", studentAge);
console.log("College Fee:", collegefee);
console.log("Is Graduated:", isgraduated);
console.log("Is placed at work:", isPlaced);


//Task 5: Use at least two if/else statements to control program flow. Optionally, use at least one switch statement.

//if statememt
let vage = 17;

if (vage > 18) {
    console.log("you can vote");
}

if (vage < 18) {
    console.log("you can not vote");
}

//if else statement

let mode = "dark";
let color;
if (mode === "dark") {
    color = "black";
} else {
    color = "white";
}
console.log(color);

//else if statement

let age = 'hdghsg';
let ageType;
if (age < 18) {
    ageType = "teenager"
} else if (age >= 18 && age < 60) {
    ageType = "Adult"
} else if (age >= 60) {
    ageType = "Senior Citize"
} else {
    ageType = "Note a valid entry"
}
console.log(ageType);

//SWitch Case

let day = 'Sunday';

switch (day) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
        console.log('7am');
        break;
    case 'Thursday':
        console.log('8am');
        break;
    case 'Friday':
        console.log('8:30am');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('9am');
        break;
    default:
        console.log('Its holiday not scheduled anything');
};


//Task 6: Use try/catch statements to manage potential errors in the code, such as incorrectly formatted or typed data being fed into your program.

try {
    let x = 11;
    if (x === 10) throw "Not valid"
    console.log(x)
} catch (err) {
    console.log('catch called:', err)
}
finally {
    console.log('m called')
}

//Task 7: Utilize at least two different types of loops.

// Using a for loop
console.log("Using a for loop:");
for (let i = 0; i < 5; i++) {
    console.log("Iteration", i);
}

// Using a while loop
console.log("Using a while loop:");
let j = 0;
while (j < 5) {
    console.log("Iteration", j);
    j++;
}



//Task 8: Utilize at least one loop control keyword such as break or continue

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Encountered 5, breaking loop.");
        break; // Exit the loop when i equals 5
    }
    console.log("Iteration", i);
}

//Task 9: Create and/or manipulate arrays and objects.

let fruits = ['apple', 'banana', 'orange'];

// Adding a new fruit to the array
fruits.push('grape');

// Removing the second fruit from the array
fruits.splice(1, 1);

// Creating an object to store information about a person
let employee = {
    name: 'John',
    age: 30,
    occupation: 'Engineer'
};

// Adding a new property to the employee object
employee.location = 'New York';

// Displaying the modified array and object
console.log('Modified array:', fruits);
console.log('Modified object:', employee);


//Task 10: Demonstrate the retrieval, manipulation, and removal of items in an array or properties in an object.
// Array manipulation
let colors = ['red', 'green', 'blue', 'yellow'];

// Retrieval: accessing items in the array
console.log('First color:', colors[0]);
console.log('Last color:', colors[colors.length - 1]);

// Manipulation: changing an item in the array
colors[1] = 'orange';
console.log('Modified colors array:', colors);

// Removal: removing an item from the array
let removedColor = colors.pop();
console.log('Removed color:', removedColor);
console.log('Remaining colors:', colors);

// Object manipulation
let person = {
    name: 'Smith',
    age: 25,
    city: 'Boston'
};

// Retrieval: accessing properties of the object
console.log('Person:', person);
console.log('Name:', person.name);
console.log('Age:', person['age']);

// Manipulation: changing properties of the object
person.age = 30;
person['city'] = 'Los Angeles';
console.log('Modified person object:', person);

// Removal: removing a property from the object
delete person.city;
console.log('Removed city property:', person);


//Task 11: Use functions to handle repeated tasks.

// Function to retrieve the first and last items from an array
function getFirstAndLast(array) {
    return [array[0], array[array.length - 1]];
}

// Function to manipulate an array by changing an item and removing the last item
function manipulateArray(array) {
    array[1] = 'orange';
    let removedItem = array.pop();
    return removedItem;
}

// Function to retrieve and manipulate properties of an object
function manipulateObject(obj) {
    obj.age = 30;
    obj.city = 'Los Angeles';
    delete obj.city;
}

// Array manipulation
let colors = ['red', 'green', 'blue', 'yellow'];
console.log('First and last colors:', getFirstAndLast(colors));

let removedColor = manipulateArray(colors);
console.log('Removed color:', removedColor);
console.log('Remaining colors:', colors);

// Object manipulation
let person = {
    name: 'Alice',
    age: 25,
    city: 'New York'
};
console.log('Original person:', person);

manipulateObject(person);
console.log('Modified person:', person);


//Task 12: Program outputs processed data as described above. Partial credit will be earned depending on the level of adherence to the described behavior.

//Task 13: Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).

//Task 14: Commit frequently to the git repository.
//-- Explenation: I am not able to find the path in git hub once I did the first commit so, I decided to finish writing the codes and I wil commit everything remaining with obersavation from someone whol will walk me through the process.

// Include a README file that contains a description of your application. - Its already there in the github



//https://github.com/Suresh2234/SBAjavaScriptFundamental.git

