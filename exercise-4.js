//Accessing Objects the Old Way
let person = {
    firstName: 'Oskar',
    lastName: 'Wilde',
};

let personFirstName = person.firstName;
let personLastName = person.lastName;

personFirstName
personLastName

//Accessing Objects the New Way
let { firstName, lastName } = person;

firstName
lastName

// We can also RENAME the variables with the New way
let { firstName: fName, lastName: lName } = person;

fName
lName