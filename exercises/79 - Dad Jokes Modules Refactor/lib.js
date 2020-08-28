import { loader } from './elements.js';

export async function fetchJoke() {
        // Turn loader on
        loader.classList.remove('hidden');
        const response = await fetch('https://icanhazdadjoke.com', {
                headers: {
                        Accept: 'application/json',
                },
        });
        const data = await response.json();
        // turn loader off
        loader.classList.add('hidden');
        return data;
}
