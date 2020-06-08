const button = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
        alert('You clicked the button');
}

// It is not necessary to call the function because the browser will do it for us
button.addEventListener('click', handleClick);

// Arrow function
const hooray = () => console.log('HOORAY!');

coolButton.addEventListener('click', hooray);

// Listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function buyItem() {
        console.log('Buying item...');
}

buyButtons.forEach(function(buyButton) {
        console.log('Binding the buy button...');
        buyButton.addEventListener('click', buyItem);
});
