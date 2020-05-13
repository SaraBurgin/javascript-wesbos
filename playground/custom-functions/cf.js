function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
        console.log('Running Calculate Bill');
        const total = billAmount * (1 + taxRate + tipRate);
        return total;
}
console.log(calculateBill(100, undefined, 0.2));

// Creating variables with wes#s ammounts
const wesTotal = 500;
const wesTaxRate = 0.13;

// Function call
// const myTotal = calculateBill(wesTotal, wesTaxRate);
// console.log(myTotal);

// Function definition
function sayHiTo(firstName) {
        return `Hello ${firstName}`;
}
// const greeting = sayHiTo('Sara');
// console.log(greeting);

function doctorize(name) {
        return `Dr. ${name}`;
}

function yell(name = 'Silly Goose') {
        return `HEY ${name.toUpperCase()}`;
}
// Brackets go first, so first it runs the function doctorize with its argument and that value will be passed into yell as its argument
// yell(doctorize('wes'));
