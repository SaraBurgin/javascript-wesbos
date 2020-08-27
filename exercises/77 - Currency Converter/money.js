const fromSelect = document.querySelector('[name="from_currency"]');
const fromInput = document.querySelector('[name="from_amount"]');
const toSelect = document.querySelector('[name="to_currency"]');
const toEl = document.querySelector('.to_amount');
const form = document.querySelector('.app form');
const endpoint = 'https://api.exchangeratesapi.io/latest';
const ratesByBase = {};

const currencies = {
        USD: 'United States Dollar',
        AUD: 'Australian Dollar',
        BGN: 'Bulgarian Lev',
        BRL: 'Brazilian Real',
        CAD: 'Canadian Dollar',
        CHF: 'Swiss Franc',
        CNY: 'Chinese Yuan',
        CZK: 'Czech Republic Koruna',
        DKK: 'Danish Krone',
        GBP: 'British Pound Sterling',
        HKD: 'Hong Kong Dollar',
        HRK: 'Croatian Kuna',
        HUF: 'Hungarian Forint',
        IDR: 'Indonesian Rupiah',
        ILS: 'Israeli New Sheqel',
        INR: 'Indian Rupee',
        JPY: 'Japanese Yen',
        KRW: 'South Korean Won',
        MXN: 'Mexican Peso',
        MYR: 'Malaysian Ringgit',
        NOK: 'Norwegian Krone',
        NZD: 'New Zealand Dollar',
        PHP: 'Philippine Peso',
        PLN: 'Polish Zloty',
        RON: 'Romanian Leu',
        RUB: 'Russian Ruble',
        SEK: 'Swedish Krona',
        SGD: 'Singapore Dollar',
        THB: 'Thai Baht',
        TRY: 'Turkish Lira',
        ZAR: 'South African Rand',
        EUR: 'Euro',
};

// Conversion of currencies into dropdowns

// Looping over objects to turn them in to an array: for of, Object.entries, Object.values or Object.key
function generateOptions(options) {
        return Object.entries(options)
                .map(
                        ([currencyCode, currencyName]) =>
                                `<option value="${currencyCode}"> ${currencyCode} - ${currencyName}</option>`
                )
                .join('');
}

async function fetchRates(base = 'USD') {
        const response = await fetch(`${endpoint}?base=${base}`);
        const rates = await response.json();
        return rates;
}
// convert function that takes in an amount that we want to convert (raw n°), the from currency and the to currency

// cache the rates, means to hold on to them if you already have them

async function convert(amount, from, to) {
        // first check if we even have the rates to convert from that currency. If there is no CAD property then we need to fetch it.
        if (!ratesByBase[from]) {
                console.log(`Ohh no, we don't have ${from} to convert ${to}. So let's go get it!`);
                const rates = await fetchRates(from);
                console.log(rates);
                // store them for next time
                ratesByBase[from] = rates;
        }
        // convert that amount that they passed in
        const rate = ratesByBase[from].rates[to];
        const convertedAmount = rate * amount;
        console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
        return convertedAmount;
}
function formatCurrency(amount, currency) {
        // This is an api that will format the amount to the actual style that is used in currency
        return Intl.NumberFormat('en-US', {
                style: 'currency',
                currency,
        }).format(amount);
}

async function handleInput(e) {
        const rawAmount = await convert(fromInput.value, fromSelect.value, toSelect.value);
        toEl.textContent = formatCurrency(rawAmount, toSelect.value);
}

const optionsHTML = generateOptions(currencies);
// On page load, populate the options elements
// The above variable is storing a function that we will use on various ocassions. This is why it is handy to store in a variable.
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

form.addEventListener('input', handleInput);
