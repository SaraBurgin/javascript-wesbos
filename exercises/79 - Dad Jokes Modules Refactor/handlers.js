import { fetchJoke } from './lib.js';
import { jokeHolder, jokeButtonSpan } from './elements.js';
import randomItemFromArray from './utils.js';
import buttonText from './buttonText.js';

export async function handleClick() {
        const { joke } = await fetchJoke();
        jokeHolder.textContent = joke;
        jokeButtonSpan.textContent = randomItemFromArray(buttonText, jokeButtonSpan.textContent);
}
