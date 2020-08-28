// utils.js contains a number of utility functions to help you update your web pages with javascript data (such as might be returned from the server).

export function generateOptions(options) {
        return Object.entries(options)
                .map(
                        ([currencyCode, currencyName]) =>
                                `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
                )
                .join('');
}

export function formatCurrency(amount, currency) {
        return Intl.NumberFormat('en-US', {
                style: 'currency',
                currency,
        }).format(amount);
}
