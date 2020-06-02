// Make a div
const div = document.createElement('div');

// add a class of wrapper to it
div.classList.add('wrapper');

// put it into the body
document.body.appendChild(div);

// make an unordered list
const unList = `
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
`;

// add three list items with the words "one, two three" in them

// put that list into the above wrapper
div.innerHTML = unList;

// create an image
const image = document.createElement('img');
// set the source to an image
image.src = 'https://picsum.photos/500';
// set the width to 250
image.width = 250;
// add a class of cute
image.classList.add('cute');
// add an alt of Cute Puppy
image.alt = 'Cute Puppy';
// Append that image to the wrapper
div.appendChild(image);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
<div class="myDiv ">
  <p id="1">Paragraph One</p>
  <p id="2">Paragraph Two</p>
</div>`;

// put this div before the unordered list from above
div.insertAdjacentHTML('afterbegin', myHTML);

// add a class to the second paragraph called warning
const myDiv = div.querySelector('.myDiv');
myDiv.children[1].classList.add('warning');
// remove the first paragraph
myDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:

function generatePlayerCard(name, age, height, id) {
        return `<div class="playerCard">
        <h2>${name} — ${age}</h2>
        <p>Their height is ${height} and ${age} years old. In Dog years this person would be ${age *
                7}. That would be a tall dog!</p>
                <button class="delete" type="button"> Delete card </button>
      </div>`;
}

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');

// Have that function make 4 cards
let cardsHTML = generatePlayerCard('Sara', 27, 180, 1);
cardsHTML += generatePlayerCard('Marta', 30, 160, 2);
cardsHTML += generatePlayerCard('Estefania', 32, 170, 3);
cardsHTML += generatePlayerCard('Guadalupe', 14, 164, 4);

// append those cards to the div
cards.innerHTML = cardsHTML;

// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', cards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');

// make our delete function
function deleteCard(event) {
        const buttonThatGotClicked = event.currentTarget;
        buttonThatGotClicked.closest('.playerCard').remove();
}

// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));
