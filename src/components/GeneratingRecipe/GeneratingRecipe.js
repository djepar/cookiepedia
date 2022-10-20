import Ingredients from "./Ingredients";
import Steps from "./Steps";
import Source from "./Source"

function GeneratingRecipe({recipe}){
    return (
        <div>
            <h2>{recipe.title}</h2>
            <Source source={recipe.source} /> 
            <Ingredients ingredients={recipe.ingredients} />
            <Steps steps={recipe.steps} />
        </div>
    )
}

export default GeneratingRecipe;