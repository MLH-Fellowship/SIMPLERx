import React from 'react';
import FinalHistory from './FinalHistory.json'
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
  var j;
  for(j=0;j<pres.length;j++){
    history.push(pres[j])
  }
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    // history: [
    //   { date: pres.name, customerId: pres.dosage, amount: pres.duration },
    //   { date: '2020-01-02', customerId: 'Anonymous', amount: '1' },
    // ],
    history,
    
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
                  {row.history.map((historyRow) => (
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
                  ))}
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

const rows = [];
var i;
for(i =0; i<FinalHistory.length; i++){
  rows.push(createData(FinalHistory[i].Symptoms, FinalHistory[i].Notes, FinalHistory[i].Followupdetails,FinalHistory[i].Furthercheckups,FinalHistory[i].Test,"1", FinalHistory[i].Precription))
}


export default function ViewHistory() {

  function refreshPage(){
    window.location.reload(false);
  }
  const classes = useStyles();
  return (
    <>
    <div className={classes.root} style={{float:"left"}}>
          <Link to ='/writepres'>
            <Button variant="contained" color="primary">Add Entry</Button>&nbsp;&nbsp;
          </Link>
          <Button variant="contained" color="primary" onClick={refreshPage}>Check Another</Button>
      </div>
    <div style={{margin:"8px"}}>

      
      <br/><br/><br/>
    <TableContainer component={Paper}>
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

