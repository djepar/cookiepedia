import SignIn from "./SignIn";
import AddingRecipes from "./AddingRecipes"
function Home(){
    return (
        <div>
            
        <h1>Cookiepedia</h1>
        <h2>The wiki that is yummy</h2>
        <SignIn/>
        <AddingRecipes />
        </div>
    )
}
export default Home;