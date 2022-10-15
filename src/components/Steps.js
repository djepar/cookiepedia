
function Steps(){
    const products = [
        {steps : "Wisk", id: 1},
        {steps : "mix", id: 2},
        {steps : "bake at 300celsius for 3h", id: 3},
    ]
    const stepsItems = products.map(product =>
        <li key={product.id}>
            {product.steps}
        </li>)
    return (
        <div>
            <h2>Step for x recipes</h2>
            <ul>{stepsItems}</ul>
        </div>

    )
}

export default Steps;