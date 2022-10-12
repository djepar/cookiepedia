const recipes = [{
    id: 0,
    name:'Chicken Tendorie',
    diet : 'not-vegan',
},
{
    id: 1,
    name: 'Fried Rice',
    diet : 'vegan',
},
{
    id: 2,
    name: 'Avocado Poke-bowl ',
    diet : 'vegan',
},

{
    id: 3,
    name: 'Banh Mi',
    diet : 'not-vegan',
},   
{
    id: 5,
    name: 'Pretzel',
    diet : 'vegan',
}    ];

const veganRecipes = recipes.filter(recipe => 
    recipe.diet === 'vegan'
    );
console.log(veganRecipes)
export default function ListRecipes(){

    const listItems = veganRecipes.map(recipe => 
        <li key={recipe.id}>{recipe.name}</li>);
    return(
        <div>
            <h2>Recipes List</h2>
            <ul>{listItems}</ul>
        </div>
    ) 
}


