const button = document.querySelector('.num-btn');

function handleClick(e) {
        const number = e.currentTarget.innerHTML;
        e.currentTarget.innerHTML = parseInt(number) + 1;
}

button.addEventListener('click', handleClick);
