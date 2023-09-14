console.groupCollapsed('Exercise 5-8');

const todos = [
    {user: "Brick", completed: false, task: "Go to the store"},
    {user: "Oscar", completed: true, task: "Finish homework"},
];

//Taking the object we passed in, said copy all the properties to the new object, and then set false
function addToDo(newToDo){
    return [...todos, {...newToDo, completed: false}]
}

console.log(addToDo({}));

console.groupEnd();

/////////////////////////////
// console.groupCollapsed('Exercise 5-7');

// const lion = {hasTail: true, legs: 4};
// const eagle = {canFly: true};

// const hybrid = {name: "Gryphon", ...lion, ...eagle};

// console.log(hybrid);

// console.groupEnd();

// /////////////////////////////
// console.groupCollapsed('Exercise 5-6');

// //Copying an array

// // Important! Spread only goes ONE level deep. Does not do deep level structures
// const originals = ["Mona Lisa", "American Gothic", "The School of Athens"];

// const copies = [...originals];

// copies

// copies.push("The Persistence of Memory");

// console.log(copies);

// console.groupEnd();

// /////////////////////////////
// console.groupCollapsed('Exercise 5-5');

// const parents = ["Lorie", "Nick"];
// const kids = ["Ian"];
// const dogs = ["Bella", "Charlie"];

// [...parents, ...kids, "MEOW!",...dogs, "Unnamed Pet Turtle"];

// console.log([...parents, ...kids, "MEOW!",...dogs, "Unnamed Pet Turtle"]);

// console.groupEnd();

// /////////////////////////////
// console.groupCollapsed('Exercise 5-4');
// //taking from two arrays, combining into one rather than call and seperate the two

// //ORDER does matter!
// const parents = ["Lorie", "Nick"];
// const kids = ["Ian"];

// const fullFamily = [parents, kids];

// console.log(fullFamily);

// const fullFamily2 = [...parents, ...kids];

// console.log(fullFamily2);

// console.groupEnd();

// /////////////////////////////
// console.groupCollapsed('Exercise 5-3');

// console.log("this s#@* is bananas: ", "BANANAS");
// console.log("this s#@* is bananas: ", ..."BANANAS");

// console.groupEnd();

// /////////////////////////////
// console.groupCollapsed('Exercise 5-2');

// console.log("Hello", "there", "!") 

// //Instead of listing the array, it passes each object as an argument
// const tvShows = ["antiques roadshow", "chopped", "property brothers", "house hunters"];
// console.log(...tvShows);

// console.groupEnd();

// /////////////////////////////
// console.groupCollapsed('Exercise 5-1');

// const temperatures = [69, 82, 73, 64];

// Math.min.apply(null, temperatures);

// console.log(Math.min(...temperatures));

// console.groupEnd();