console.log('it works!');

const width = 500;
const src = `https://picsum.photos/200`;
const desc = `Cute Pup`;
const myHTML = `
  <div class="wrapper">
    <h2>${desc}</h2>
    <img src="${src}" alt="${desc}" width="${width}"/>
    <h1>Hey how are ya?</h1>
  </div>
`;

// turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);

console.log(myFragment);
