function wait(ms = 0) {
        return new Promise(resolve => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
        popup.classList.remove('open');
        await wait(1000);
        // Remove the popup entirely
        popup.remove();
        popup = null;
}

function ask(options) {
        return new Promise(async function(resolve) {
                // WE BUILD OUR HTML HERE
                // First we need to create a pop-up with all the fields in it
                const popup = document.createElement('form');
                // Add a class of popup to it
                popup.classList.add('popup');
                // Put some html inside of the pop
                popup.insertAdjacentHTML(
                        'afterbegin',
                        `
                <fieldset>
                  <label>${options.title}</label>
                  <input type="text" name="input" />
                  <button type="submit">Submit</button>
                </fieldset>
                `
                );

                console.log(popup);
                // CHECK IF THERE NEEDS TO BE A CANCEL BUTTON OR NOT
                // Check if they want a cancel button
                if (options.cancel) {
                        const skipButton = document.createElement('button');
                        skipButton.type = 'button';
                        skipButton.textContent = 'Cancel';
                        popup.firstElementChild.appendChild(skipButton);
                        // TODO: Listen for a click on that cancel button
                        skipButton.addEventListener(
                                'click',
                                function() {
                                        resolve(null);
                                        destroyPopup(popup);
                                },
                                { once: true }
                        );
                }
                // Listen for the submit event on the inputs
                // There is a third argument for addEventListener - an options object and we can pass it once: true, and this will only listen for the submit event once and then remove the event listener.
                popup.addEventListener(
                        'submit',
                        function(e) {
                                e.preventDefault();
                                resolve(e.target.input.value);
                                // remove it from the DOM entirely
                                destroyPopup(popup);
                        },
                        { once: true }
                );
                // When someone does submit it we want to resolve the data that is in the input box
                // Insert that popup into the DOM
                document.body.appendChild(popup);
                // Put a very small timeout before we add the open class so it will stick the code that it is beyond it at the end of the event loop and that is enough to just trip it in to have enough time between a and b (a being adding the classlist of popup and b adding classlist of open).
                await wait(50);
                popup.classList.add('open');
        });
}

// Select all buttons that have a question
async function askQuestion(e) {
        const button = e.currentTarget;
        const cancel = 'cancel' in button.dataset;

        const answer = await ask({ title: button.dataset.question, cancel });
        console.log(answer);
}

const button = document.querySelectorAll('[data-question]');
button.forEach(button => button.addEventListener('click', askQuestion));

// We want to ask the following questions to our user. How do we do it?
const questions = [
        { title: 'What is your name' },
        { title: 'What is your age', cancel: true },
        { title: 'What is your dogs name' },
];

// Concurrently
Promise.all([ask(questions[0]), ask(questions[1]), ask(questions[2])]).then(answers => console.log(answers));

// Will loop over each of the questions, pipe it into an ask function which returns a promise that will return to us an array wraps it in a promise.all and then allows us to listen with a then.
Promise.all(questions.map(ask)).then(data => {
        console.log(data);
});

// We want to do it sequentially. Loop over each one and then you have an async function that waits for the question to be resolved and then you log it
questions.forEach(async function(question) {
        console.log('Asking a question');
        const answer = await ask(question);
        console.log(answer);
});

// For of (unlike map and forEach) allows you to pause a loop by awaiting something inside of it.
async function askMany() {
        for (question of questions) {
                const answer = await ask(question);
                console.log(answer);
        }
}

askMany();

// Async map - utility function. Does exactly the same as the top but returns an array.

async function asyncMap(array, callback) {
        // make an array to store our results
        const results = [];
        // loop over our array
        for (const item of array) {
                const result = await callback(item);
                results.push(result);
        }
        // When we are done with the loop, return it!
        return results;
}

async function go() {
        const answers = await asyncMap(questions, ask);
        console.log(answers);
}

go();
