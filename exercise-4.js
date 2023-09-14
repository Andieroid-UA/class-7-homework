console.groupCollapsed('Exercise 4-14');
// Destructuring Function Arguments
// Suppose we have the following example:

let displayFullName = ({firstName, lastName}) => `${firstName} ${lastName}`;
//let displayFullName = (person) => `${person.firstName} ${person.lastName}`;

let person = {
    firstName: 'Oskar',
    lastName: 'Wilde',
};

displayFullName(person);//Oskar Wilde
console.log(displayFullName(person));

// Its possible to desctructure the object argument passed into the function

console.groupEnd();

//===========================
// console.groupCollapsed('Exercise 4-13');
// // It's possible to destructure nested properties as well as the parent property:

// let member = {
//     id: 111,
//     name: {
//         firstName: 'Oskar',
//         lastName: 'Wilde',
//     }
// };

// let { id, name: { firstName, lastName }, name } = member;

// // let {
// //     name: {
// //         firstName,
// //         lastName,
// //     },
// //     name
// // } = member;

// console.log(firstName);//Oskar
// console.log(lastName);//Wilde
// console.log(name);//{ firstName: 'Oskar', lastName: 'Wilde'}

// console.groupEnd();

// //===========================
// console.groupCollapsed('Exercise 4-12');
// // Nested Object Destructuring

// // Assuming that you have a member in the PAPAFAM where the object has a name object as the property:

// let member = {
//     id: 111,
//     name: {
//         firstName: 'Oskar',
//         lastName: 'Wilde',
//     }
// };

// // Heres how to destructure it...
// let { id, name: { firstName, lastName } } = member;

// console.log(id);//111
// console.log(name);//Get a blank object
// console.log(firstName);//Oskar
// console.log(lastName);//Wilde

// console.groupEnd();

//===========================
// console.groupCollapsed('Exercise 4-11');
// // A function may return an object or null in some situations. For example:

// function getPerson() {
//     return null;
// }

// let { firstName, lastName } = getPerson || {} ();// use the OR operator, try this but if it's falsie, or null or undefined fall back to using an empty object

// console.log(firstName, lastName);

// // This will throw an error

// console.groupEnd();

//===========================
// console.groupCollapsed('Exercise 4-10');
// // In this example, two variables are swapped using the destructuring assignment syntax:

// let name1 = 'Sonny';
// let name2 = 'Cher';

// // swapping variables
// [name1, name2] = [name2, name1];

// console.log(name1);//Cher
// console.log(name2);//Sonny

// console.groupEnd();

//===========================
// console.groupCollapsed('Exercise 4-9');
// // ! Note: The variable with the spread syntax cannot have a trailing comma,. You should use this rest element (variable with spread syntax) as the last variable. For example:

// const names = ['John', 'Peter', 'James', 'Mary'];

// //throws an error (rest element must be last element)
// //const [...x, y] = names;

// //works just fine
// const [y, ...x] = names;

// console.log(x);//John


// console.groupEnd();

//===========================
// console.groupCollapsed('Exercise 4-8');
// // This trick works in object destructuring too!

//     const person = {
//         name: 'Naveed Leigh',
//         age: 20,
//         gender: 'Female'
//     };

// // destructuring assignment
// // assigning remaining properties to rest
// let { name, ...rest } = person;

// console.log(name);//Naveed Leigh
// console.log(rest);//{age: 20, gender: "Female"}


// console.groupEnd();

//===========================
// console.groupCollapsed('Exercise 4-7');
// /*
// Assign Remaining Elements to a Single Variable

// You can assign the remaining elements of an array to a variable using the spread syntax '...'
// */

// const names = ['John', 'Peter', 'James', 'Mary'];

// // destructuring assignment in arrays
// // assigning remianing elements to y
// const [x, a,...y] = names;

// console.log(x);//John
// console.log(y);//["Peter", "James", "Mary"]

// console.groupEnd();

//===========================
// console.groupCollapsed('Exercise 4-6');

// //Skipping items when array destructuring

// const arrValue = ['one', 'two', 'three'];

// // destructuring assignment in arrays
// const [x, ,z] = arrValue;// we are skipping y. If you skip again "z" will be undefined

// console.log(x);//one
// console.log(z);//three

// console.groupEnd();

//===========================
// console.groupCollapsed('Exercise 4-5');
// /** 
// Let's see the syntax based on this example.
// The left-hand side of the assignment is an array of variables, and the right-hand side is an array of values. The array elements are assigned in order, with the first elements of the array going to the first variable, and so on.

// For example, if you have an array of multiple values, you can assign them to multiple variables like this:
// */

// let [a, b, c, d] = [1, 2, 3, 4];

// console.groupEnd();

//===========================
// console.groupCollapsed('Exercise 4-4');

// const arr = [1, 2, 3];

// // But NOW ES6 introduced the array destructuring syntax that provides an alternative way to assign elements of an array to variables:

// let [x, y, z] = arr;

// x
// y
// z


// const arr = [1, 2, 3];

// // Prior to ES6, when you want to assign the elements of the araray to variables, you would do this:

// let x = arr[0];
// let y = arr[1];
// let z = arr[2];

// x
// y
// z

// console.groupEnd();

//===========================
// console.groupCollapsed('Exercise 4-3');

// let person = {
//     firstName: 'Oskar',
//     lastName: 'Wilde',
//     //currentAge: 30,
//     middleName: 'Fingal',
// };

// // What happens if you destruct a property that does not exist?
// let { firstName, lastName, middleName = '', currentAge: age = 20 } = person;
// console.log(middleName);//''
// console.log(age);//20

// console.groupEnd();

//===========================
// console.groupCollapsed('Exercise 4-2');

// let person = {
//     firstName: 'Oskar',
//     lastName: 'Wilde',
// };

// // What happens if you destruct a property that does not exist?
// let { firstName, lastName, middleName } = person;
// console.log(middleName);//undefined

// console.groupEnd();

//===========================
// console.groupCollapsed('Exercise 4-1');
//     //Accessing Objects the Old Way
//     let person = {
//         firstName: 'Oskar',
//         lastName: 'Wilde',
//     };

//     let personFirstName = person.firstName;
//     let personLastName = person.lastName;

//     personFirstName
//     personLastName

//     //Accessing Objects the New Way
//     let { firstName, lastName } = person;

//     firstName
//     lastName

//     // We can also RENAME the variables with the New way
//     let { firstName: fName, lastName: lName } = person;

//     fName
//     lName

// console.groupEnd();