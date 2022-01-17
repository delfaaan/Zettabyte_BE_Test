/**
 * Direction:
 * Divide students to all of groups & students must sorted by first name.
 * 
 * Expected Result:
 * [
 *   [
 *     { "firstName": "Belle", "lastName": "Norton" },
 *     { "firstName": "Finnley", "lastName": "Rennie" }
 *   ],
 *   [
 *     { "firstName": "Kai", "lastName": "Lyons" },
 *     { "firstName": "Peyton", "lastName": "Gardner" }
 *   ],
 *   [{ "firstName": "Tatiana", "lastName": "Dickerson" }]
 * ]
 */

const students = [
    {firstName: 'Kai', lastName: 'Lyons'},
    {firstName: 'Belle', lastName: 'Norton'},
    {firstName: 'Finnley', lastName: 'Rennie'},
    {firstName: 'Tatiana', lastName: 'Dickerson'},
    {firstName: 'Peyton', lastName: 'Gardner'},
];

//const arrayStudents = Object.keys(students);
//const arrayStudents = Object.values(students);
const arrayStudents = Object.entries(students);

console.log(arrayStudents);

const groups = 3;

function result(students, groups){
    // my code here.
}

console.log(result(students, groups));

const person = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(typeof person);

mustBeArray = Object.entries(person);

console.log(typeof mustBeArray);

const people = [
    ['firstName', 'John'],
    ['lastName', 'Doe']
];

console.log(people);

console.log(typeof people);

let activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];

console.table(activities[0][1]);
