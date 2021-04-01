import React from 'react';
import './nav.css';
import { Link } from "react-router-dom";
// function  nav() {
//     const navStyle={
//         color:'white'
//     }
// };
function Navbar()
{
    return <div>
        <nav>
            <div classname="logo">Mobstore</div>
            <ul className="nav-links">
                <Link to='/home'>
                <li>
                    <a href="/">Home</a>
                </li>
                </Link>
                <Link to='/cart'>
                <li>
                    <a href="/">Cart</a>
                </li>
                </Link>
                <Link to='/myorder'>
                <li>
                    <a href="/">MyOrder</a>
                </li>
                </Link>
            </ul>
            <div className="logout">
                    <ul className="nav-links">
                    <Link to="/logout">
                    <li>
                        <a href="/">logout</a>
                    </li>
                    </Link>
                    </ul>
            </div>
        </nav>
    </div>
}

export default Navbar;