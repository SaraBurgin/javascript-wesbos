const wes = document.querySelector('.wes');

function handleClick(event) {
        const shouldChangePage = confirm('This page is malicious, do you still want to go ahead?');
        if (shouldChangePage !== true) {
                event.preventDefault();
                alert('Ok, we will not go ahead!');
        }
}

wes.addEventListener('click', handleClick);

const signupForm = document.querySelector('[name="signup"]');

function handleClick2(event) {
        const name = event.currentTarget.name.value;
        if (name.includes('chad')) {
                alert('Sorry bro! We cannot submit your form because you are a chad.');
                event.preventDefault();
        }
}
signupForm.addEventListener('submit', handleClick2);

function logEvent(event) {
        console.log(event.type);
        console.log(event.currentTarget.value);
}
signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
