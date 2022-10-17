
function Ingredients({ingredients}){

    const IngredientItems = ingredients.map(ingredient =>
        <li>
            {ingredient}
        </li>)
    return (
        <div>
            <h2>Ingredients for X recipes</h2>
            <ul>{IngredientItems}</ul>
        </div>


    )
}

export default Ingredients;