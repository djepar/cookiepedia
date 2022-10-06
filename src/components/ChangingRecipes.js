import {useState} from 'react';

export default function Form(){
    const [recipe, setRecipe] = useState({
        recipeName : "Pizza",
        origin : "Kitchen",
        ingredients : {
            dought : "100gr",
            TomatoPaste : "40gr",
            cheese : "alot"
        },
        steps : {
            ovenBool : true,
            ovenTemperature : 350
        }
    });

    function handleName(e){
        setRecipe(
            {
                ...recipe,
                recipeName : e.target.value
            }
        )
    }
    function handleOrigin(e){
        setRecipe({
            ...recipe,
            origin : e.target.value

        });
    }
    function handleOven(e){
        setRecipe({
            ...recipe,
            steps: {
                ...recipe.steps,
                ovenTemperature : e.target.value
            }

        });
    }
    return (
        <>
        <label>
            Recipe name:
            <input 
                value={recipe.recipeName}
                onChange={handleName}
        />
        </label>
        <label>
            Origin of the recipe:
            <input 
                value={recipe.origin}
                onChange={handleOrigin}
            />
        </label>
        <label>
            Oven: 
            <input 
                value={recipe.steps.ovenTemperature}
                onChange={handleOven}
            />
        </label>
        </>
    )

}