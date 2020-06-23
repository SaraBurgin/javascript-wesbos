const terms = document.querySelector('.terms-and-conditions');
const button = document.querySelector('.accept');

// create the callback function for the observe variable
function obCallback(payload) {
        if (payload[0].intersectionRatio === 1) {
                button.disabled = false;
                ob.unobserve(terms.lastElementChild);
        }
}

// create the observe variable and the options object
const options = {
        root: terms,
        threshold: 1,
};

const ob = new IntersectionObserver(obCallback, options);

// watch the observe variable

ob.observe(terms.lastElementChild);
