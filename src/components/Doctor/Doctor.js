import React from 'react'
import './Doctor.css'
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


export default function Doctor(){
    const classes = useStyles();
    return(<div>
        
       <h3 className="upper">Hello Doctor! <br/> Welcome to SimpleRx <br/><br/>
       Actions:<br/> <br/>1. Check medical history of the patient<br/>2. Prescribe medication to old/new patient<br/><br/>(For new patient history will be tracked from this appointment onwards)
       <br/><br/>To get started please click on "login" below and enter your Unique ID</h3>




        {/*This is the linking part*/}
        {/* <Link to="/login">
            <Button style={{ backgroundColor:"rgb(37,37,37)" ,color:"white", fontSize:20}}>
                login
            </Button>
        </Link> */}
        <div className={classes.root}>
        <Link to="/login"><Button variant="contained">Login</Button></Link>
        </div>
    </div>)
}