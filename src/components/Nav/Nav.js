import React from "react"
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Doctor from '../Doctor/Doctor'


function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light static-top header-a">
            <div className="container nav-container">
                <a className="navbar-brand brand" href="/">SimpleRx</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse alink" id="navbarSupportedContent">
                    <ul style={{color:'red'}} className="navbar-nav ml-auto">
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Courses
        </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li> */}
                        {/* <Router>                         */}
                            
                        
                        {/* <li className="nav-item active">
                            <a className="nav-link" href="/doctor">Doctor <span className="sr-only">(current)</span></a>
                        </li> */}
                        <Router>
                            <Link to="/doctor">Doctor</Link>
                        </Router>
                        {/* <Link to="/doctor">
                            <li className="nav-item active">
                                Doctor <span className="sr-only">(current)</span>
                            </li>
                        </Link>
                        <Route path="/doctor" component={Doctor}></Route>
                        </Router> */}
                        
                        
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Patient <span className="sr-only">(current)</span></a>
                        </li>

                        <li className="nav-item active">
                            <a className="nav-link" href="#">Pharmacist <span className="sr-only">(current)</span></a>
                        </li>

                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">Support</a>
                        </li> */}

                        {/* <a className="btn btn-outline-dark start" href="#">Get Started</a> */}

                    </ul>


                </div>


            </div>
        </nav>
    );
}

export default Nav;