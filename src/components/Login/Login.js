import React,{useState} from 'react'
import './Login.css'
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import {Link} from 'react-router-dom'



export default function Login({sendData}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    
    function validateForm() {
      return password.length > 0 && email.length>0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      
    }
    
    function onClick(){
      sendData(email)
    }
    
    return (
      <div className="Login">
        
        <form onSubmit={handleSubmit}>
       
          <FormGroup controlId="email" bssize="large">
            <FormLabel>Doctor ID </FormLabel>
            <FormControl
              autoFocus
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            
          </FormGroup>
          <br/>
          <FormGroup controlId="password" bssize="large">
            <FormLabel>Password </FormLabel>
            
            <FormControl
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </FormGroup>
          <br/>
          
          {/* <Button block bssize="large" disabled={!validateForm()} type="submit">
          {name === password? <Link to="/docdashboard">
          Login
          </Link>:
          <Link to="/login">Login</Link>}
          </Button> */}
          <Link to ='/docdashboard'>
          <Button block bssize="large" disabled={!validateForm()} type="submit" onClick={onClick}>
          Login
          </Button>
          </Link>
          
          
        </form>
         
        
        
      </div>
    );
  }
  