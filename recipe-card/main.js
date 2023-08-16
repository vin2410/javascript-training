let recipe = {
    'title': 'Mole',
    'servings':'2',
    'ingredients': ['cinamon', 'cumin', 'cocoa']
}

console.log(recipe.title);
console.log('Serving: ', recipe.servings);
console.log('Ingredient');
for (let i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
}