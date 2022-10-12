import Home from "./Home"
import Recipes from "./Recipes";
import {Routes, Route, Link } from 'react-router-dom';

function NavBar(){
    return(
        <div className="NavBar">
            <nav className="nav">
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/recipes" className="nav-item">Recipes</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home/> } />
                <Route path="/recipes" element={<Recipes/> } />
            </Routes>
        </div>
    );
}

export default NavBar;