import React from 'react'
import Login from '../Login/Login'
import './Doctor.css'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'



export default function Doctor(){
    return(<div>
        
       <h3 className="upper">Hello Doctor! <br/> You can perform many tasks over here<br/>
       You can do<br/>1. X<br/>2. Y<br/>3. Z
       <br/>To get started please click on "login" below and enter your Unique ID</h3>




        {/*This is the linking part*/}
        <Link to="/login">
            <Button style={{ backgroundColor:"rgb(37,37,37)" ,color:"white", fontSize:20}}>
                login
            </Button>
        </Link>
        <Router>
        <div>
            <Switch>
                <Route path='/login' component={Login}/>
            </Switch>
        </div>
        </Router>
    </div>)
}