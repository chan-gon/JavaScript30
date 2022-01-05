const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 1983 },
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good!', id: 823423 },
    { text: 'Rock will never die!', id: 239842 },
    { text: 'Say hello to my little friend!', id: 123523 },
    { text: 'Stay Hungry Stay Foolish!', id: 542328 },
];

// Array.prototype.some()
const isAdult = people.some(person =>
     ((new Date()).getFullYear()) - person.year >= 19 );

console.log({isAdult});

// Array.prototy.every()
const allAdults = people.every(person =>
    ((new Date()).getFullYear()) - person.year >= 19 );

console.log({allAdults});

// Array.prototy.find()
const comment = comments.findIndex(comment => comment.id === 523423);
console.log(comment); // true(0), false(-1)

// Array.prototy.findIndex()
const index = comments.findIndex(comment => comment.id === 239842);
console.log(index);

// comments.splice(index, 1);

const newComments = [
    // using Spread Opertor
    ...comments.slice(0, index), 
    ...comments.slice(index + 1)
];