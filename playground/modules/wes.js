const person = {
        name: 'Wes',
        last: 'Bos',
};

// This is a default export. There will only be 1 per file. The difference shows in the import because it is not necessary to use the actual name of the variable or function and there is no need for curly brackets.

// If that module does one thing and it is the base thing that that module does, use a DEFAULT EXPORT from it. If your module does various things (ex: utility library) then use multiple named exports.

// You can also rename named modules, ex: import {returnHi as sayHi } from './utils.js'

// You can only export default variables in this way. Doing it separate from the actual declaration.
export default person;

export const dog = 'Snickers';
export const food = 'pizza';
export function eat() {
        console.log('chomp chomp');
}

// Check MDN import and export
