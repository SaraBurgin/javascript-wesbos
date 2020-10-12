import { handleResult } from './handlers.js';
import { colorsByLength, isDark } from './colors.js';

const colorsEl = document.querySelector('.colors');

function displayColors(colors) {
        return colors
                .map(
                        color =>
                                `<span class="color ${color} ${
                                        isDark(color) ? 'dark' : ''
                                }" style="background: ${color};">${color}</span>`
                )
                .join('');
}

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function start() {
        // see if their browser supports this
        if (!('SpeechRecognition' in window)) {
                console.log('Sorry your browser does not support speech reco.');
                return;
        }
        // otherwise it does work
        console.log('Starting...');
        // make a new speech reco
        const recognition = new SpeechRecognition();
        // we need a couple of settings for this
        recognition.continous = true; // wether or not it should continously look for speech recognition or stop ifself after it has recognized. In this case we run it "for ever".
        recognition.interimResults = true; // will give you results as you are speaking instead of whilst you are speaking.
        recognition.onresult = handleResult;
        recognition.start();
}

start();
colorsEl.innerHTML = displayColors(colorsByLength);

// webkit is refered to as vendor prefixed meaning that the API is not totally done so they will just vendor prefix it by putting their prefix in front of it. Chromes engine used to be called webkit, it's now called blink but there still is a lot of stuff that is called webkit in there.
