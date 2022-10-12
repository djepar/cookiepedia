function ShoppingItem({name, inCart}){
    return (
        <li className="itemToBuy">
            {name}{inCart&& " ✔"}
        </li>
    );
}
export default function ShoppingList(){
    return (
        <section>
            <h2>The shopping list</h2>
            <ul>
                <ShoppingItem
                    inCart={true}
                    name="Apple"
                />
                <ShoppingItem
                    inCart={false}
                    name="Carrots"
                />
                 <ShoppingItem
                    inCart={true}
                    name="Flour"
                />    
            </ul>
        </section>
    )
}