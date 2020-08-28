import currencies from './currencies.js';
import { generateOptions } from './utils.js';
import { handleInput } from './handlers.js';
import { fromSelect, toSelect } from './elements.js';

// When the page loads, this code runs!
// It's fine but sometimes you want to delay the running of what happens on page load, in that case, you take all of it and create a file just for that function, creating a function called init(), bootstrap(), start()... importing the elements you are missing fromSelect and toSelect, currencies, etc... . And then you just run the start function init() on your money.js.

const form = document.querySelector('.app form');

const optionsHTML = generateOptions(currencies);
// populate (bring the information in) the options elements
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

form.addEventListener('input', handleInput);
