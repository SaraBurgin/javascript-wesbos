console.log('it works!');

// Creating elements (HTML) in JS

// const myParagraph = document.createElement('p');
// myParagraph.textContent = 'I am a P';
// myParagraph.classList.add('special');

// const myImage = document.createElement('img');
// myImage.src = 'https://picsum.photos/500';
// myImage.alt = 'Nice photo';

// const myDiv = document.createElement('div');
// myDiv.classList.add('wrapper');

// myDiv.appendChild(myParagraph);
// myDiv.appendChild(myImage);

// document.body.appendChild(myDiv);

// const heading = document.createElement('h2');
// heading.textContent = 'Hello, this is your heading';

// myDiv.insertAdjacentElement('beforebegin', heading);

// Create an unordered list with 5 items inside

const myUl = document.createElement('ul');
myUl.textContent = 'My unordered list';

const liOne = document.createElement('li');
liOne.textContent = 'One';
myUl.appendChild(liOne);

const liTwo = document.createElement('li');
liTwo.textContent = 'Two';
myUl.appendChild(liTwo);

const liThree = document.createElement('li');
liThree.textContent = 'Three';
myUl.appendChild(liThree);

const liFour = document.createElement('li');
liFour.textContent = 'Four';
myUl.appendChild(liFour);

const liFive = document.createElement('li');
liFive.textContent = 'Five';
myUl.insertAdjacentElement('beforeend', liFive);

document.body.appendChild(myUl);

console.log(myUl);
