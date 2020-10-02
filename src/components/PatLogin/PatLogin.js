import React,{useState} from 'react'
import './PatLogin.css'
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios'

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
    const [checkNum, setNum] = React.useState(1)
    const [finans, setAns] = React.useState([]);


    function validateForm() {
      return email.length > 0 && password.length>0;
    }
  
    function handleSubmit(event) {
        event.preventDefault();    
    }
  
    function onClick(){
      //sendData(email)

      const finalData = 
    {
      "_id":email,
      "PatientName":"",
      "Aadhar":"",
      "Email":"",

      
       "History":[{   
          "Symptoms":"",
          "Notes": "",
          "Test":"",
          "Furthercheckups":"",
          "Followupdetails":"",
          "Prescription":""}]
      }
      axios.post(`http://localhost:8000/fetch_history`, finalData)
        .then(res=>{
          res.data === null? alert("Please enter valid Patient ID"):setNum(checkNum+1);
          //console.log(res.data.History)
          sendData(email)
        })
      
    }

    return (
      <div className="Login">
        <form onSubmit={handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <FormLabel style={{marginRight:"4px"}}>Patient ID: </FormLabel>
            <FormControl
              autoFocus
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            
          </FormGroup>
          <br/>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password: </FormLabel>
            
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
        <Link to ='/viewpathistory'><Button variant="contained" color="primary" disabled={!validateForm()} onClick={onClick}>Login</Button></Link>
          </div>


        </form>
         
        
        
      </div>
    );
  }
  