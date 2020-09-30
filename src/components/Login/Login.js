import React,{useState} from 'react'
import './Login.css'
import {FormGroup, FormControl, FormLabel } from "react-bootstrap";
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));



export default function Login({sendData}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const classes = useStyles();
    
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
       
          <FormGroup controlId="text" bssize="large">
            <FormLabel style={{marginRight:"5px"}}>Doctor ID </FormLabel>
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
          {/* <Link to ='/docdashboard'>
          <Button block bssize="large" disabled={!validateForm()} type="submit" onClick={onClick}>
          Login
          </Button>
          </Link> */}
          <div className={classes.root}>
          <Link to ='/docdashboard'><Button variant="contained" color="primary" disabled={!validateForm()} onClick={onClick}>Login</Button></Link>
          </div>
          
        </form>
         
        
        
      </div>
    );
  }
  