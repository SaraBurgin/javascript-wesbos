console.log('it works!');

// Declared with the function keyword
// function doctorize(firstName) {
//         return `Dr. ${firstName}`;
// }

// Anonymous function
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// Function expression
// const doctorize = function(firstName) {
//         return `Dr. ${firstName}`;
// };

// Arrow functions
/* eslint-disable */
const inchesToCm = (inches) => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

// const add = (a, b = 3) => a + b;

// Returning an object
// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0
//   }
//   return baby;
// }

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// Methods!!!
// A method is a function that lives inside of an object

const wes = {
  name: 'Wes Bos',
  // Method
  sayHi: function() {
    return 'Hey Wes';
  },
  // MOST COMMON WAY - Short hand way to write method inside of an object
  yellHi() {
    console.log('HEY WESSSSS');
  },
  // Arrow function
  whisperHi: () => console.log('hii wesss im a mouse'),
}

// Callback functions
// Click callback

const button = document.querySelector('.clickMe');

function handleClick() {
  console.log('Great clickng!!!');
}

button.addEventListener('click', function() {console.log('Nice job!!!')});

 // Timer callback
 setTimeout(wes.yellHi, 1000);
 setTimeout(function() {
   console.log('done, time to eat')}, 1000);
