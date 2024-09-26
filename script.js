let recipes = [];

function displayRecipes() {
    const recipeList = document.getElementById('recipeList');
    recipeList.innerHTML = ''; // Clear previous list

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <h3>${recipe.title}</h3>
            <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
            <button onclick="deleteRecipe(${recipe.id})">Delete</button>
        `;
        recipeList.appendChild(recipeCard);
    });
}

function addRecipe(event) {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const ingredients = form.ingredients.value;
    const instructions = form.instructions.value;

    if (title && ingredients && instructions) {
        const newRecipe = {
            id: recipes.length + 1,
            title: title,
            ingredients: ingredients,
            instructions: instructions
        };

        recipes.push(newRecipe);
        displayRecipes();
        form.reset();
    } else {
        alert('Please fill in all fields.');
    }
}

function deleteRecipe(id) {
    recipes = recipes.filter(recipe => recipe.id !== id);
    displayRecipes();
}

document.addEventListener('DOMContentLoaded', () => {
    displayRecipes();
    const form = document.getElementById('recipeForm');
    form.addEventListener('submit', addRecipe);
});
