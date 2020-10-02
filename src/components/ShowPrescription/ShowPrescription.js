import React from 'react'
import {Link} from 'react-router-dom'
import Prescription from './Prescription'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



export default function ShowPrescription({data}) {
    const classes = useStyles();

  return (
      <div style={{marginRight:"100px",marginLeft:"100px", marginTop: "40px"}}>
      
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Patient ID: PA1234</TableCell>
            <TableCell align="right">Medicines</TableCell>
            <TableCell align="right">Dosage</TableCell>
            <TableCell align="right">Duration</TableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
       
          {Prescription.map((row) => (
            
            <TableRow key={row.name}>
            <TableCell >
                <p></p>
              </TableCell>
              <TableCell align="right" component="th" scope="row">
                {row.name}
              </TableCell>
               
                <TableCell align="right">{row.dosage}</TableCell>
                <TableCell align="right">{row.duration}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <br/>
        <Link to = '/'>
            <Button color='default' variant='contained'>Home</Button>
         </Link>
    </div>
    
  );
}


















// export default function ShowPrescription(){
//     const classes = useStyles();



//     return (<div>
//         <h1>
//             THIS IS SHOW PRES PAGE
//         </h1>
//         <div>
//         <tr>
//             <th>Medicines</th>
//             <th>Dosages</th>
//             <th>Duration</th>
//         </tr>
//             {Prescription.map((med)=>{
//                 return (
//                     <div>
//                     <Table striped bordered hover size="sm">
  
//   <tbody>
    
//     <tr>
      
//       <td>{med.name}</td>
//       <td>{med.dosage}</td>
//       <td>{med.duration}</td>
//     </tr>
    
//   </tbody>
// </Table>
                       
//                     </div>
//                 )
//             })}
//         </div>        
//         <Link to = '/'>
//             <button>Home</button>
//         </Link>
//     </div>)
// }