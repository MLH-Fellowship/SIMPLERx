import React,{useState} from 'react'
import './PharmaLogin.css'
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import {Link} from 'react-router-dom'
//import { propTypes } from 'react-bootstrap/esm/Image';

export default function Login({sendData}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    function validateForm() {
      return password.length > 0 && email.length>0;
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
        <FormGroup controlId="text" bssize="large">
            <FormLabel>Pharmacy ID </FormLabel>
            <FormControl
              autoFocus
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            
          </FormGroup>
          <br/>
          <FormGroup controlId="password" bssize="large">
            <FormLabel style={{marginRight:"19px"}}>Password </FormLabel>
            
            <FormControl
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </FormGroup>
          <br/>
          <Link to="/showprespharma">
          <Button block bssize="large" disabled={!validateForm()} type="submit" onClick={handleClick}>
            Login
          </Button>
          </Link>
        </form>
        
         
        
        
      </div>
    );
  }
  