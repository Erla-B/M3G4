// Array containing people-objects
let people = [
    {
        name : 'Hatty Orriss',
        dateOfBirth : new Date('5/15/1993'),
        children : 0,
        country : 'Portugal',
        knowsHowToProgram : true,
    },
    {
        name : 'Lib Ivankovic',
        dateOfBirth : '4/12/1983',
        children : 1,
        country : 'Poland',
        knowsHowToProgram : false,
    },
    {
        name : 'Hector Grinyov',
        dateOfBirth : '12/24/1989',
        children : 0,
        country : 'China',
        knowsHowToProgram : false,
    },
    {
        name : 'Leroy Cast',
        dateOfBirth : '5/15/1990',
        children : 4,
        country : 'Russia',
        knowsHowToProgram : false,
    },
    {
        name : 'Rock McClary',
        dateOfBirth : new Date('12/11/1982'),
        children : 1,
        country : 'China',
        knowsHowToProgram : true,
    },
]

// Checking if 1st person is older than 5th person
if (people[0].dateOfBirth <= people[4].dateOfBirth) {
    console.log('Is older');
}
    else {
        console.log('Is younger');
    };
// Output is 'Is younger'


// Checking if 2nd and 3rd person have same amount of children
if (people[1].children == people[2].children) {
    console.log(true);
}
    else {
        console.log(false);
    };
// Output is false

// Checking if the 1st and 4th people know how to program
if (people[0].knowsHowToProgram && people[3].knowsHowToProgram) {
    console.log('Yay!');
}
    else {
        console.log('LMGTFY');
    };
// Output is LMGTFY

// Checking 2nd person's nationality
switch (people[0].country) {
    case 'Iceland':
        console.log('Hæ');
        break;
    case 'Spain':
        console.log('Hola');
        break;
   case 'Korea':
    console.log('여보세요');
        break;
    default:
        console.log('Hello');
};
// Output is 'Hello'


// Checking if 2nd persons name is longer than 5 characters
let result =
    (people[1].name.length >= 5) ? true : false;
console.log(result);
// Output is true