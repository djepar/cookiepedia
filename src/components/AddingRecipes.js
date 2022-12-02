import {useState} from 'react'
import {validateEmail} from "./utils"

function AddingRecipes() {
    const [recipeTitle, setRecipeTitle] = useState("");
    const [recipeSource, setRecipeSource] = useState({
        author : "",
        location : {
            url : "",
            retrieveDate: ""
        }
    });
    const [recipeIngredients, setRecipeIngredients] = useState([]);
    const [recipeSteps, setRecipeSteps] = useState([]);

    const getIsFormValid = () => {
        return (
            recipeTitle && 
            recipeSource.author &&
            recipeSource.location.url &&
            recipeIngredients &&
            recipeSteps
        );
    };
    const handleListIngredients = (e) => {
        setRecipeIngredients([...recipeIngredients, e.target.value])
    }
    const clearForm = () => {
        setRecipeSource("");
        setRecipeSource({
            author : "",
            location : {
                url : "",
                retrieveDate: ""
        }});
        setRecipeIngredients([]);
        setRecipeSteps([]);
            
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Account created!");
        clearForm();
    }

    return (
        <div className='App'>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Adding a recipe</h2>
                    <div className='Field'>
                        <label>
                            Recipe name : <sup>*</sup>
                        </label>
                        <input
                        type='text'
                        value={recipeTitle}
                        onChange={ (e) => {
                            setRecipeTitle(e.target.value);
                        }}
                        placeholder='Recipe name' />
                    </div>
                    <div className='Field'>
                        <label>
                            Recipe author : <sup>*</sup>
                        </label>
                        <input
                        type='text'
                        value={recipeSource.author}
                        onChange={ (e) => {
                            setRecipeSource(e.target.value);
                        }}
                        placeholder='Recipe name' />
                    </div>

                    <div className='Field'>
                        <h3>List of ingredients</h3>
                        <label>
                            Recipe Ingredients : <sup>*</sup>
                        </label>
                        <input
                        type='text'
                        value={recipeTitle}
                        placeholder='Recipe name' /> <br />
                        <button type='submit'>Adding ingredients</button>
                        <ul>
                           { recipeIngredients.map(ingredient => (
                                <li>ingredient</li>
                            ))}
                        </ul>
                    </div>

{/* 
                There is a problem with adding ingredients to the  */}
                <button type='submit' onSubmit={handleListIngredients}>Adding a recipe</button>
                </fieldset>
            </form>
        </div>
    )
}

export default AddingRecipes