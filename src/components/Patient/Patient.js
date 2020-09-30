import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './Patient.css'
import PatLogin from '../PatLogin/PatLogin'
import {Button} from 'react-bootstrap'

export default function Patient(){
    return (<div>
        <h3 className="upper">Hello there! <br/>Welcome to SimpleRx!<br/><br/>
        Experience the ease of going paperless into your next appointment!<br/>
       <br/>To get started please click on "login" below and enter your Unique ID</h3>



        <Link to="/patlogin">
            <Button style={{ backgroundColor:"rgb(37,37,37)" ,color:"white", fontSize:20}}>
                login
            </Button>
        </Link>
        
            <Router>
                <div>
                    <Route path='/patlogin' component={PatLogin}></Route>
                </div>
            </Router>
        
    </div>)
}