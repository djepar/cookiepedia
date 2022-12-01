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
                    <h2>Sign Up</h2>
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




                </fieldset>
            </form>
        </div>
    )
}