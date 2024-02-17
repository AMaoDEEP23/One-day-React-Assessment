import React from "react";
import './navbar.css'

function Navbar (){
    return(
    <ul className="navbar">
        <li className="list"><a href={'/Home'}>Home</a></li>
        <li className="list"><a href={'/Owner'}>Owner</a></li>
        
    
    </ul>
    )
}



export default Navbar;