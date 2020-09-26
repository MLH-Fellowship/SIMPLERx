import React,{useState} from 'react'
import './PharmaLogin.css'
import PharmaDashboard from '../PharmaDashboard/PharmaDashboard'
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import {Link,Route, BrowserRouter as Router} from 'react-router-dom'

export default function Login() {
    //const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    function validateForm() {
      return password.length > 0;
    }
  
    function handleSubmit(event) {
        event.preventDefault();    
    }
  
    return (
      <div className="Login">
        <form onSubmit={handleSubmit}>
          {/* <FormGroup controlId="email" bsSize="large">
            <FormLabel>Email </FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            
          </FormGroup> */}
          <br/>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Pharmacy ID </FormLabel>
            
            <FormControl
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </FormGroup>
          <br/>
          <Link to="/pharmadashboard">
          <Button block bsSize="large" disabled={!validateForm()} type="submit">
            Login
          </Button>
          </Link>
        </form>
         
        <div>
        <Router>
        <Route path='/pharmadashboard' component={PharmaDashboard} />
        </Router>
        </div>
        
      </div>
    );
  }
  