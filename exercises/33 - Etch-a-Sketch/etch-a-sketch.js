console.log('It works!');

// Select the elements on the page - canvas, shake button

const canvas = document.querySelector('#etch-a-sketch');

const ctx = canvas.getContext('2d');

const shakeButton = document.querySelector('.shake');

// Setup our canvas for drawing

// This is object destructuring. Make a variable called height and width from the same properties on our canvas.
const { width } = canvas;
const { height } = canvas;

// Create random x and y starting points on the canvas
const x = Math.floor(Math.random() * width);

const y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // Start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a draw function

// Write a handler for the keys
function handleKey(event) {
        if (event.key.includes('Arrow')) {
                event.preventDefault();
                console.log(event.key);
                console.log('HANDLING KEY');
        }
}

// Clear shake function

// Listen for arrow keys
window.addEventListener('keydown', handleKey);
