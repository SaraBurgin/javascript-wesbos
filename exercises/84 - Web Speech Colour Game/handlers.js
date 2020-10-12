import { isValidColor } from './colors.js';

function logWords(results) {
        console.log(results[results.length - 1][0].transcript);
}

export function handleResult({ results }) {
        logWords(results);
        const words = results[results.length - 1][0].transcript;
        console.log(words);
        // lowercase everything
        let color = words.toLowerCase();
        // strip any spaces out. Regex matches all spaces globally and replace them with nothing.
        color = color.replace(/\s/g, '');
        // check if it is a valid color
        if (!isValidColor(color)) return;
        // if it is, then show the ui for it
        const colorSpan = document.querySelector(`.${color}`);
        colorSpan.classList.add('got');
        console.log(colorSpan);
        console.log('This is a valid color!');
        console.log(color);
        document.body.style.backgroundColor = color;
}
