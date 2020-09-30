import React,{Component} from 'react'
import PharmaLogin from '../PharmaLogin/PharmaLogin'
import './Pharmacist.css'
import {BrowserRouter as Router,Route, Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

class Pharmacist extends Component{
    render(){
        return (<div>
            <h3 className="upper">Hello There! <br/> Welcome to SimpleRx!<br/><br/>
            Keep a track of prescriptions cuz customers can't read it anyway<br/>
            <br/>To get started please click on "login" below and enter your Unique ID</h3>


            <Link to='/pharmalogin'>
                <Button style={{ backgroundColor:"rgb(37,37,37)" ,color:"white", fontSize:20}}>
                    login
                </Button>
            </Link>

            <Router>
                <div>
                    <Route path='/pharmalogin' component={PharmaLogin} />
                </div>
            </Router>
        </div>)
    }
}

export default Pharmacist