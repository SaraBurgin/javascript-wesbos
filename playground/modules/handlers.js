import currencies from './currencies.js';

export async function handleButtonClick(e) {
        const { localCurrency, default: currency } = await import('./currencies.js');
        console.log(localCurrency, currency);
}
