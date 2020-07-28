const filterInputs = Array.from(document.querySelectorAll('input[name="filter"]')); // It is a nodelist so we are turning it to an array
const textArea = document.querySelector('textarea[name="text"]');
const result = document.querySelector('.result');

/* eslint-disable */
const funkyLetters = {
  '-': '₋', '!': 'ᵎ', '?': 'ˀ', '(': '⁽', ')': '₎', '+': '⁺', '=': '₌', '0': '⁰', '1': '₁', '2': '²', '4': '₄', '5': '₅', '6': '₆', '7': '⁷', '8': '⁸', '9': '⁹', a: 'ᵃ', A: 'ᴬ', B: 'ᴮ', b: 'ᵦ', C: '𝒸', d: 'ᵈ', D: 'ᴰ', e: 'ₑ', E: 'ᴱ', f: '𝒻', F: 'ᶠ', g: 'ᵍ', G: 'ᴳ', h: 'ʰ', H: 'ₕ', I: 'ᵢ', i: 'ᵢ', j: 'ʲ', J: 'ᴶ', K: 'ₖ', k: 'ₖ', l: 'ˡ', L: 'ᴸ', m: 'ᵐ', M: 'ₘ', n: 'ₙ', N: 'ᴺ', o: 'ᵒ', O: 'ᴼ', p: 'ᵖ', P: 'ᴾ', Q: 'ᵠ', q: 'ᑫ', r: 'ʳ', R: 'ᵣ', S: 'ˢ', s: 'ˢ', t: 'ᵗ', T: 'ₜ', u: 'ᵘ', U: 'ᵤ', v: 'ᵛ', V: 'ᵥ', w: '𝓌', W: 'ʷ', x: 'ˣ', X: 'ˣ', y: 'y', Y: 'Y', z: '𝓏', Z: 'ᶻ' };
/* eslint-enable */

// Adding listener on textArea for the input event, and when that happens we will grab the event and pass the text of it to our transformText function
const filters = {
        sarcastic(letter, index) {
                // if it is odd, it will return 1, and it is truthy, so this if statement will trip
                if (index % 2) {
                        return letter.toUpperCase();
                }
                // if it is even, it will return zero and we will lowercase it
                return letter.toLowerCase();
        },
        funky(letter) {
                // first check if there is a funky letter for this case
                let funkyLetter = funkyLetters[letter];
                if (funkyLetter) return funkyLetter;
                // if there is not, check if there is a lower case version
                funkyLetter = funkyLetters[letter.toLowerCase()];
                if (funkyLetter) return funkyLetter;
                // if there is nothing return the regular letter
                return letter;
        },
        unable(letter) {
                const random = Math.floor(Math.random() * 3);
                if (letter === ' ' && random === 2) {
                        return '...';
                }
                return letter;
        },
};

function transformText(text) {
        const filter = filterInputs.find(input => input.checked).value;
        // take the text, and loop over each letter. We use the variable filter and use it as a property lookup instead of hardcoding it. Because it is a variable and not a property we need to use []
        const mod = Array.from(text).map(filters[filter]);
        result.textContent = mod.join('');
}

function handleInput(e) {
        transformText(e.target.value);
}

textArea.addEventListener('input', handleInput);

function handleFilter() {
        transformText(textArea.value);
}

filterInputs.forEach(input => input.addEventListener('input', handleFilter));
