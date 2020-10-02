import React from 'react';
import FinalHistory2 from '../ViewHistory/FinalHistory2.json'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Button from '@material-ui/core/Button';
import axios from 'axios'


const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
      
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function createData(name, calories, fat, carbs, protein, price, pres) {
  var history = [];
  
  // for(j=0;j<pres.length;j++){
  //   history.push(pres[j])
  // }
  // pres.map((pp=>(
  //   history.push(pp)
  // )))
  price.map((ok=>(ok.Prescription.map(pp=>(history.push(pp))))))
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history
    
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.fat}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.name}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Medication
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow >
                    <TableCell>Name</TableCell>
                    <TableCell>Dosage</TableCell>
                    <TableCell>Duration</TableCell>
                    {/* <TableCell align="right">Total price ($)</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow=> (
                    <TableRow key={historyRow.name}>
                      <TableCell component="th" scope="row">
                        {historyRow.name}
                      </TableCell>
                      <TableCell>{historyRow.dosage}</TableCell>
                      <TableCell >{historyRow.duration}</TableCell>
                      {/* <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell> */}
                    </TableRow>
                  )))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.string.isRequired,
    carbs: PropTypes.string.isRequired,
    fat: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.string.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    protein: PropTypes.string.isRequired,
  }).isRequired,
};

// const rows = [
//   createData('Frozen yoghurt', '159', '6.0', '24', '4.0', '3.99'),
//   createData('Ice cream sandwich', '237', '9.0', '37', '4.3', '4.99'),
//   createData('Eclair', '262', '16.0', '24', '6.0', '3.79'),
//   createData('Cupcake', '305', '3.7', '67', '4.3', '2.5')
// ];

// const rows = [];
// var i;
// for(i =0; i<FinalHistory2.length; i++){
//   rows.push(createData(FinalHistory2[i].Symptoms, FinalHistory2[i].Notes, FinalHistory2[i].Followupdetails,FinalHistory2[i].Furthercheckups,FinalHistory2[i].Test,"1", FinalHistory2[i].Precription))
// }


export default function ViewHistory({patId}) {
  const [hist, setHist] = React.useState([]);
  
  // const [prescription, setPres] = React.useState([])
  const isFirstRun = React.useRef(true);


  const rows = [];
  var i;
//   for(i =0; i<FinalHistory2.length; i++){
//   rows.push(createData(FinalHistory2[i].Symptoms, FinalHistory2[i].Notes, FinalHistory2[i].Followupdetails,FinalHistory2[i].Furthercheckups,FinalHistory2[i].Test,"1", FinalHistory2[i].Precription))
// }

  hist.map((hi=>(
    rows.push(createData(hi.Symptoms,hi.Notes, hi.Followupdetails,hi.Furthercheckups,hi.Test,hist, hi.Precription))
  )))

  console.log(rows)




  React.useEffect(()=>{

    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
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
    axios.post(`http://localhost:8000/fetch_history`, finalData)
      .then(res=>{
        setHist([...res.data.History])
        console.log(hist)
      })


      // axios.post(`http://localhost:8000/current_prescription`, finalData)
      // .then(res=>{
      //   setPres([...res.data.History.Prescription])
      //   console.log(prescription)
      // })
    
  })
  
  const classes = useStyles();
  return (
    <>
    
    
    <div className={classes.root} style={{float:"left"}}>
          <Link to ='/'>
            <Button variant="contained" color="default" style={{marginRight:"20px", marginTop:"20px"}}>Home</Button>&nbsp;&nbsp;
          </Link>
          {/* <Button variant="contained" color="primary" onClick={refreshPage}>Check Another</Button> */}
      </div>
    <div style={{margin:"8px"}}>

      
      <br/><br/><br/>
    <TableContainer component={Paper} style={{marginRight: "30px"}}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Date</TableCell>
            <TableCell align="right">Notes</TableCell>
            <TableCell align="right">Symptom</TableCell>
            <TableCell align="right">Follow up</TableCell>
            <TableCell align="right">Tests</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <br/>
         
      
    </div>
    </>
  );
}




















// import React from 'react'
// import {Link} from 'react-router-dom'
// import History from './History.json'
// //import History2 from './History2.json'
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';


// const useStyles = makeStyles({
//     table: {
//       minWidth: 650,
//     },
//   });
  
  
  
//   export default function ShowPrescription() {
     
//     const classes = useStyles();
  
//     return (
//         <div>
//         {History.length===0? <div>
//         <h1>
//         NO RECORDS FOUND
//         </h1>
//         <Link to ='/writenewpres'>
//          <button>Prescribe(N)</button>
//       </Link>
//         </div>:
//         <div>
//         <h2>History of Patient ID: XYZ</h2>
//       <TableContainer component={Paper}>
//         <Table className={classes.table} aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Symptoms</TableCell>
//               <TableCell align="right">Notes</TableCell>
//               <TableCell align="right">Tests</TableCell>
//               <TableCell align="right">Further Check-ups</TableCell>
//               <TableCell align="right">Date</TableCell>
//               <TableCell align="right">Prescription</TableCell>
              
              
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {History.map((row) => (
//               <TableRow key={row.Symptoms}>
//                 <TableCell component="th" scope="row">
//                   {row.Symptoms}
//                 </TableCell>
//                   <TableCell align="right">{row.Notes}</TableCell>
//                   <TableCell align="right">{row.Test}</TableCell>
//                   <TableCell align="right">{row.Furthercheckups}</TableCell>
//                   <TableCell align="right">{row.Followupdetails}</TableCell>
//                   <TableCell align="right">{row.name}</TableCell>
                
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//         <br/>
//         <Link to ='/writepres'>
//             <button>Prescribe</button>
//         </Link>
//         </div>
//       }
        
//       </div>

         
      
//     );
            
//   }

