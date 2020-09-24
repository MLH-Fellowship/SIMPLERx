import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

function NavBar(){
    return (<div className="topnav">
        <nav>
            <ul>
                <Link to="/" style={{float:"left", fontSize:24, fontFamily:"monospace"}}>SimpleRx</Link>
                <Link to="/patient">Patient</Link>
                <Link to="/pharmacist">Pharmacist</Link>
                <Link to="/doctor">Doctor</Link>
                
            </ul>
        </nav>
    </div>)
}

export default NavBar