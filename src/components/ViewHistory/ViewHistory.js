import React from 'react'
import {Link} from 'react-router-dom'
import History from './History.json'
//import History2 from './History2.json'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  
  
  export default function ShowPrescription() {
     
    const classes = useStyles();
  
    return (
        <div>
        {History.length===0? <div>
        <h1>
        NO RECORDS FOUND
        </h1>
        <Link to ='/writenewpres'>
         <button>Prescribe(N)</button>
      </Link>
        </div>:
        <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Symptoms</TableCell>
              <TableCell align="right">Notes</TableCell>
              <TableCell align="right">Tests</TableCell>
              <TableCell align="right">Further Check-ups</TableCell>
              <TableCell align="right">Follow-up</TableCell>
              <TableCell align="right">Prescription</TableCell>
              
              
            </TableRow>
          </TableHead>
          <TableBody>
            {History.map((row) => (
              <TableRow key={row.Symptoms}>
                <TableCell component="th" scope="row">
                  {row.Symptoms}
                </TableCell>
                  <TableCell align="right">{row.Notes}</TableCell>
                  <TableCell align="right">{row.Test}</TableCell>
                  <TableCell align="right">{row.Furthercheckups}</TableCell>
                  <TableCell align="right">{row.Followupdetails}</TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
        <Link to ='/writepres'>
            <button>Prescribe</button>
        </Link>
        </div>
      }
        
      </div>

         
      
    );
            
  }

