console.log('It works ');

const cardButtons = document.querySelectorAll('button');

const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

// Loop over all of the buttons and listen for a click on them
function handleClick(event) {
        const cardButton = event.currentTarget;
        const card = cardButton.closest('.card');
        // Grab the image source
        const imgSrc = card.querySelector('img').src;
        const { description } = card.dataset; // const description = card.dataset.description;
        const name = card.querySelector('h2').textContent;
        // Populate the modal with the new info
        modalInner.innerHTML = `
        <img width="600" height="600 " src="${imgSrc.replace('200', '600')}" alt="${name}"/>
        <p>${description}</p>
        `;
        // Show the modal
        modalOuter.classList.add('open');
}

// We need to find the card that is associated with the button;
cardButtons.forEach(function(cardButton) {
        cardButton.addEventListener('click', handleClick);
});

function closeModal() {
        modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function(event) {
        const isOutside = !event.target.closest('.modal-inner');
        if (isOutside) {
                closeModal();
        }
});

window.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
                closeModal();
        }
});
