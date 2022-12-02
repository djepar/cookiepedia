import GeneratingRecipe from "./GeneratingRecipe/GeneratingRecipe";
import germanpotatoes from "../assets/recipes/germanpotatoes.json";
import test2  from "../assets/recipes/test2.json";
import useState from "react"
import './style/recipes.css'
function Recipes(){
    const [showRecipe, setRecipe] = useState("")

    return (
        <div>
        {setRecipe !== "" ? <GeneratingRecipe recipe={showRecipe} /> : ""}
        <h1>Recipes list</h1>
        <button onClick={() => setRecipe("germanpotatoes")}>German Potatoes</button>
        </div>

    )
}
export default Recipes;