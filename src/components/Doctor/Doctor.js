import React from 'react'
import Pharmacist from '../Pharmacist/Pharmacist'
import Patient from '../Patient/Patient'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'



export default function Doctor(){
    return(<div>
        <p>This is doc page</p>
        <Router>
        <Link to="/pharmacist" >Pharmacist</Link>
        <Link to="/patient">Patient</Link>
            <Switch>
            <Route path="/pharmacist" component={Pharmacist}></Route>
            <Route path="/patient" component={Patient}></Route>
            </Switch>
        </Router>
    </div>)
}