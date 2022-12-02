import GeneratingRecipe from "./GeneratingRecipe/GeneratingRecipe";
import germanpotatoes from "../assets/recipes/germanpotatoes.json"
import './style/recipes.css'
function Recipes(){
    return <div>
        <h1>Recipes name</h1>
            <GeneratingRecipe recipe={germanpotatoes} />
        </div>
}
export default Recipes;