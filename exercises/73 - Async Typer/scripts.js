function wait(ms = 0) {
        return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
        return Math.floor(randomNumber * (max - min) + min);
}

// Async & for of loop. As it is asynchronus all phrases will run at the same time.
// async function draw(el) {
//         const text = el.textContent;
//         let soFar = '';
//         // Loop over every letter of the text. For of has the ability of looping over one letter at a time.
//         // for each letter we are going to just tack it on to the end.
//         for (const letter of text) {
//                 soFar += letter; // soFar = soFar + letter.
//                 el.textContent = soFar;
//                 // wait for some amount of time
//                 const { typeMin, typeMax } = el.dataset;
//                 const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
//                 await wait(amountOfTimeToWait);
//         }
// }

// Again but with recursion. Function calling itself until there is some sort of exit condition when it should stop.

function draw(el) {
        let index = 1;
        const text = el.textContent;
        const { typeMin, typeMax } = el.dataset;
        // Taking advantage of closures. We can run a function multiple times by still accessing the values we have.
        async function drawLetter() {
                el.textContent = text.slice(0, index);
                index += 1;
                const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
                // wait for some time
                await wait(amountOfTimeToWait);
                // exit condition
                if (index <= text.length) {
                        drawLetter();
                }
        }
        // When this function draw() runs, kick off drawLetter
        drawLetter();
}

const els = document.querySelectorAll('[data-type]');

// Option 1
els.forEach(el => draw(el));

// Option 2
els.forEach(draw);
