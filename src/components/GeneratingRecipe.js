import Ingredients from "./Ingredients";
import Steps from "./Steps";
function GenerationRecipe(){
    return (
        <div>
            <h2>Name of the recipe</h2>
            <Ingredients />
            <Steps />
        </div>
    )
}

export default GenerationRecipe;