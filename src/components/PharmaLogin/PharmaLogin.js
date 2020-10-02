import React,{useState} from 'react'
import './PharmaLogin.css'
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
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

export default function PharmaLogin({sendData}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const classes = useStyles();
    
    function validateForm() {
      return email.length > 0 && password.length>0;
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
          <FormGroup controlId="email" bsSize="large">
            <FormLabel>Pharmacy ID: </FormLabel>
            <FormControl
              autoFocus
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            
          </FormGroup>
          <br/>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel style={{marginRight:"15px"}}>Password: &nbsp;</FormLabel>
            
            <FormControl
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </FormGroup>
          <br/>
          {/* <Link to="/patdashboard">
          <Button block bsSize="large" disabled={!validateForm()} type="submit" onClick={handleClick}>
            Login
          </Button>
          </Link> */}
          <br/>
          <div className={classes.root}>
          <Link to ='/pharmadashboard'><Button variant="contained" color="primary" disabled={!validateForm()} onClick={onClick}>Login</Button></Link>
          </div>


        </form>
         
        
        
      </div>
    );
  }
  