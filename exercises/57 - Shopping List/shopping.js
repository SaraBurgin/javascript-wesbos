console.log('It works!');
// We need to listen for someone typing in to the input and hits the submit button
// Keep track of the shopping list items and wether or not they are complete
// Render out these items

// Select items
const shoppingForm = document.querySelector('.shopping');

const list = document.querySelector('.list');

const input = document.querySelector('input[type="submit"]');

const button = document.querySelector('button[type="submit"]');

// We need an array to hold all our state. When you have state, state is a bunch of data that reflects the state of your application. Recreating the visual side of your aplication in some sort of object of array of data.

let items = [];

function handleSubmit(e) {
        e.preventDefault();
        console.log('Submitted!!');
        const name = e.currentTarget.item.value;
        // If it's empty, then don´t submit it
        if (!name) return;
        const item = {
                name,
                id: Date.now(),
                complete: false,
        };
        // Push the items in to our state
        items.push(item);
        console.log(`There are now ${items.length} in your state`);
        // Clear the form option 1
        // e.currentTarget.item.value = '';
        e.target.reset();
        // Fire off a custom event that will tell anyone else who cares that the items have been updated! To do custom events in the browser you need to dispatch(fire) them from an item in our html.
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

// Displaying the items
function displayItems() {
        const html = items
                .map(
                        item => `
        <li class="shopping-item">
        <input value="${item.id}" type="checkbox" ${item.complete ? 'checked' : ''}>
        <span class="itemName">${item.name}</span>
        <button value="${item.id}" aria-label="Remove${item.name}">&times;</button>
        <li>
        `
                )
                .join('');
        list.innerHTML = html;
}

function mirrorToLocalStorage() {
        console.info('Saving items to localstorage');
        localStorage.setItem('items', JSON.stringify(items));
}

// When page is loaded we want to restore from localstorage
function restoreFromLocalStorage() {
        console.log('Restoring from LS');
        // pull items from LS
        const lsItems = JSON.parse(localStorage.getItem('items'));
        if (lsItems.length) {
                /* Option 1 for showing the items: items = lsItems; */
                /* Spreading into a function, you take each item of an array and spread it in to the method (push) as an argument */
                items.push(...lsItems);
                list.dispatchEvent(new CustomEvent('itemsUpdated'));
        }
}

// Handle the deleting of the items from the list

function deleteItem(id) {
        console.log('DELETING ITEM', id);
        // Update our items array without this one
        items = items.filter(item => item.id !== id);
        // the line below will listen for both the event listeners with itemsUpdated in it and carry them out again
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

// Handle clicking of check-boxes, mirroring it with state
function markAsComplete(id) {
        console.log('Marking as complete', id);
        const checkedItem = items.find(item => item.id === id);
        checkedItem.complete = !checkedItem.complete;
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);

// Event delegation: we listen for the click on the list <ul> but then delegate the click over to the button if that is what was clicked
list.addEventListener('click', function(e) {
        const id = parseInt(e.target.value);
        if (e.target.matches('button')) {
                deleteItem(id);
        }
        if (e.target.matches('input[type="checkbox"]')) {
                markAsComplete(id);
        }
});
restoreFromLocalStorage();
