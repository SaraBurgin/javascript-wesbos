// const button = document.querySelector('.butts');
// const coolButton = document.querySelector('.cool');

// function handleClick() {
//         alert('You clicked the button');
// }

// // It is not necessary to call the function because the browser will do it for us
// button.addEventListener('click', handleClick);

// // Arrow function
// const hooray = () => console.log('HOORAY!');

// coolButton.addEventListener('click', hooray);

// Listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function handleClick(event) {
        // console.log('You clicked a button');
        // const button = event.target;
        // console.log(event.target);
        // console.log(event.currentTarget);
        // console.log(event.target === event.currentTarget);
        // console.log(button.textContent);
        // console.log(parseInt(event.target.dataset.price));
        // Stop this event from bubbling up
        // event.stopPropagation();
}

buyButtons.forEach(function(buyButton) {
        buyButton.addEventListener('click', handleClick);
});

window.addEventListener(
        'click',
        function(event) {
                console.log('YOU CLICKED THE WINDOW!');
                console.log(event.target);
                console.log(event.type);
                console.log(event.bubbles);
                // event.stopPropagation();
        },
        { capture: true }
);

const photo = document.querySelector('.photo');
photo.addEventListener('mouseenter', function(e) {
        console.log(e.currentTarget);
        console.log(this);
});
