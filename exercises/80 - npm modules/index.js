import wait from 'waait';
import { name } from 'faker'; /* ECMA scrypt modules */
import { formatDistance } from 'date-fns'; /* This is like moment.js but it is just a little bit more chunked up. You don't have to import the entire library in order to use one piece. It will allow you to pull a single piece from that library. */
import axios from 'axios';
import { intersection, isEqual } from 'lodash';
import to from 'await-to-js';

// Old node.js syntax - common js. Node.js is currently not phasing out (gradually eliminating) but they have just implemented ES6 or ECMA script modules in node, so we won't see the below very much unless it is on a node.js project.
// var faker = require('faker');

const fakeNames = Array.from({ length: 10 }, name.firstName);

const fakeNames1 = Array.from({ length: 10 }, () => `${name.firstName()} ${name.lastName()}`);

async function go() {
        console.log('Going');
        await wait(200);
        console.log('Ending');
}

const diff = formatDistance(new Date(), new Date(1986, 3, 4, 10, 32, 0), { addSuffix: true }); // => 'in about 1 hour'

console.log(diff);

async function getJoke() {
        const res = await axios.get('https://icanhazdadjoke.com', {
                headers: {
                        Accept: 'application/json',
                },
        });
        console.log(res);
}
getJoke();

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = [5, 3, 8, 3, 7, 453, 34];

const sameValues = intersection(a, b);
console.log(sameValues);

const person1 = { name: 'wes' };
const person2 = { name: 'wes' };

console.log(isEqual(person1, person2));

function checkIfNameIsCool(firstName) {
        return new Promise(function(resolve, reject) {
                if (firstName === 'Wes') {
                        return resolve('Cool name');
                }
                return reject(new Error('Bad name'));
        });
}

async function checkName() {
        const [err, successValue] = await to(checkIfNameIsCool('snickers'));
        if (err) {
                console.log(err);
        } else {
                console.log(successValue);
        }
        console.log(response);
}

checkName();
