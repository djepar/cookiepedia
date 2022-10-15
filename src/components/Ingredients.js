
function Ingredients(){
    const products = [
        {ingredient : "Flour", id: 1},
        {ingredient : "Eggs", id: 2},
        {ingredient : "Salt", id: 3},
    ]
    const IngredientItems = products.map(product =>
        <li key={product.id}>
            {product.ingredient}
        </li>)
    return (
        <div>
            <h2>Ingredients for X recipes</h2>
            <ul>{IngredientItems}</ul>
        </div>


    )
}

export default Ingredients;