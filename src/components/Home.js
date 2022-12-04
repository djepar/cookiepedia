import SignIn from "./SignIn";
import AddingRecipesYT from "./AddingRecipeYT"
function Home(){
    return (
        <div>
            
        <h1>Cookiepedia</h1>
        <h2>The wiki that is yummy</h2>
        <SignIn/>
        <AddingRecipesYT />
        </div>
    )
}
export default Home;