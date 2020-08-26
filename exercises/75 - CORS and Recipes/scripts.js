const baseEndpoint = 'http://www.recipepuppy.com/api';
const proxy = 'https://cors-anywhere.herokuapp.com/';
const form = document.querySelector('form.search');
const recipesGrid = document.querySelector('.recipes');

async function fetchRecipes(query) {
        const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
        const data = await res.json();
        return data;
}

async function fetchAndDisplay(query) {
        // turn the form off
        form.submit.disabled = true;
        // submit the search
        const recipes = await fetchRecipes(query);
        console.log(recipes);
        // turn the form on
        form.submit.disabled = false;
        displayRecipes(recipes.results);
}

async function handleSubmit(e) {
        e.preventDefault();
        const el = e.currentTarget;
        console.log(el.query.value);
        fetchAndDisplay(el.query.value);
}

function displayRecipes(recipes) {
        console.log('Creating HTML ');
        const html = recipes.map(
                recipe => `<div class="recipe">
          <h2> ${recipe.title}</h2>
          <p>${recipe.ingredients}</p>
          ${recipe.thumbnail && `<img src="${recipe.thumbnail}" alt="${recipe.title}"/>`}
          <a href="${recipe.href}">View Recipe-></a>
          </div>`
        );
        recipesGrid.innerHTML = html.join('');
}

form.addEventListener('submit', handleSubmit);
// on page load run it with pizza
fetchAndDisplay('pizza');

// CORS - cross origin resource sharing. Domain names are origins, ex: github.com. By default, you are not allowed to share data between origins (you are allowed to share data inside your website but not between domains).

// CORS Policy - must happen on the server. This is a policy that states that another origin (domain) can access the data and return it on their website. First of all, and most important, when you have problems with CORS, you have to get a server up and running.

// Babel takes your JS and all the new terminology that isn't supported by some browsers it transpiles our code from modern JS to runable code in older browsers. Babel tries to compile async await when it is actually not necessary. ** RegeneratorRuntime is not defined. **

// PROXY - used as intermediary between my localhost and the recipe puppy website, will use server side to make the request. CORS PROXY. CORS Anywhere pasted in front of my URLS and this will proxy my data for me.
// You are sending your data through a random web server that is controlled by who knows so don't ever use it if there is sensible data.
