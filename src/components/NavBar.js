import Homepage from "./Homepage";
import AboutMe from "./AboutMe";
import {Routes, Route, Link } from 'react-router-dom';

function NavBar(){
    return(
        <div className="NavBar">
            <nav className="nav">
                <Link to="/" className="nav-item">Homepage</Link>
                <Link to="/about-me" className="nav-item">About Me</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Homepage/> } />
                <Route path="/about-me" element={<AboutMe/> } />
            </Routes>
        </div>
    );
}

export default NavBar;