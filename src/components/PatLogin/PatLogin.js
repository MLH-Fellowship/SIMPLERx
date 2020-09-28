import React,{useState} from 'react'
import './PatLogin.css'
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import {Link} from 'react-router-dom'

export default function Login({sendData}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    function validateForm() {
      return password.length > 0;
    }
  
    function handleSubmit(event) {
        event.preventDefault();    
    }
  
    function handleClick(){
      sendData(email)
    }

    return (
      <div className="Login">
        <form onSubmit={handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <FormLabel>Patient ID: </FormLabel>
            <FormControl
              autoFocus
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            
          </FormGroup>
          <br/>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Patient ID </FormLabel>
            
            <FormControl
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </FormGroup>
          <br/>
          <Link to="/patdashboard">
          <Button block bsSize="large" disabled={!validateForm()} type="submit" onClick={handleClick}>
            Login
          </Button>
          </Link>
        </form>
         
        
        
      </div>
    );
  }
  