import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Prescription from '../ShowPrescription/Prescription.json'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import axios from 'axios'



const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});




export default function ShowPrescriptionPharma({patId,patient}) {
    const classes = useStyles();
    const [presData, setPres] = React.useState([{name:"", dosage:"", duration:""}])
    
    // useEffect(()=>{
    //   const finalData = 
    //   {
    //     "_id":patId,
    //     "PatientName":"",
    //     "Aadhar":"",
    //     "Email":"",
  
        
    //      "History":[{   
    //         "Symptoms":"",
    //         "Notes": "",
    //         "Test":"",
    //         "Furthercheckups":"",
    //         "Followupdetails":"",
    //         "Prescription":""}]
    //     }
      
    //     axios.post(`http://localhost:8000/current_prescription`, finalData)
    //       .then(res=>{
    //         setPres(res.data.History[0].Prescription)
    //         console.log(presData)
    //       })
          
    // })

    const finalData = 
      {
        "_id":patId,
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
        
        // axios.post(`http://localhost:8000/current_prescription`, finalData)
        //   .then(res=>{
        //     console.log(res.data.History[0].Prescription)
            
        //   })
          


  // var oo = '{"name":"rohan}'
  // var pp = JSON.parse(oo)
  //console.log(pp)
     
  //console.log(patId[0])  
  //chroconsole.log(Prescription[0])
  //var obj = JSON.parse(patId)
  console.log(patId)
  return (
      <div>
    {/* <h2>{patId.map((pat=>(pat.dosage)))}</h2>   */}
    {/* <h2>{patId[0].name}</h2> */}
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Patient ID : {patient}</TableCell>
            <TableCell align="right">Medicine</TableCell>
            <TableCell align="right">Dosage</TableCell>
            <TableCell align="right">Duration</TableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {Prescription.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <p></p>
              </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.dosage}</TableCell>
                <TableCell align="right">{row.duration} days</TableCell>
              
            </TableRow>
          ))} */}
          {patId.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <p></p>
              </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.dosage}</TableCell>
                <TableCell align="right">{row.duration}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <br/>
        <Link to = '/'>
            <Button color='primary' variant='contained'>Home</Button>
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