import Home from "./Home"
import Recipes from "./Recipes";
import {Routes, Route, Link } from 'react-router-dom';
import cookie from '../assets/images/cookie-logo.png';
import './style/navbar.css'
function NavBar(){
    return(
        <div className="NavBar">
            <nav className="nav">
                
                <img src={cookie} alt="cookie icon"/>
                <button><Link to="/" className="nav-item">Home</Link></button>
                <button><Link to="/recipes" className="nav-item">Recipes</Link></button>
                <div className="search">

                </div>
                </nav>
            <Routes>
                <Route path="/" element={<Home/> } />
                <Route path="/recipes" element={<Recipes/> } />
            </Routes>
        </div>
    );
}

export default NavBar;