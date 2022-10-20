import GenerationRecipe from "./GeneratingRecipe/GeneratingRecipe";
import germanpotatoes from "../assets/recipes/germanpotatoes.json";
import test2  from "../assets/recipes/test2.json";
import test3  from "../assets/recipes/test3.json";
import './style/recipes.css'
function Recipes(){
    return <div>
        <h1>Recipes list</h1>
        <button onClick={<GenerationRecipe recipe={germanpotatoes} />}>German Potatoes</button>
        </div>
}
export default Recipes;