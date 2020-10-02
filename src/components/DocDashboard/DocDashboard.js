import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import './DocDashboard.css'
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import ViewHistory from '../ViewHistory/ViewHistory'
import WriteNewPres from '../WriteNewPres/WriteNewPres'
import Button from '@material-ui/core/Button';
import axios from 'axios'
import TextField from '@material-ui/core/TextField';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));


const useStylesform = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));




export default function DocDashboard({sendData}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const classesform = useStylesform();
  const [patId, setPatId] = React.useState("");
  const [checkNum, setNum] = React.useState(0);
  const [histData, setHistData] = React.useState([])
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  
  function handleClick(){
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
        console.log(res.data)
        res.data === null?alert("Enter Correct Patient ID"):setNum(checkNum+1)
        setHistData([...res.data.History])
      })


    // setNum(checkNum+1)
    //sendData(patId)
  }
  
  return (
    <div className={classes.root} style={{opacity:"0.95", backgroundColor: "rgb(255,255,255)"}}>

      
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Existing Patient" {...a11yProps(0)} />
          <Tab label="New Patient" {...a11yProps(1)} />
          
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <form className={classesform.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Patient ID" variant="outlined" style={{float:"left"}} onChange={e=>setPatId(e.target.value)} />
        <Button color="primary" variant="contained" size="large" style={{float:"left"}} onClick={handleClick}>Submit</Button>
        </form><br/><br/><br/><br/><br/>
        {checkNum>0?<ViewHistory patId={patId} histo={histData}/>:null}
        
      </TabPanel>
      <TabPanel value={value} index={1}>
        <WriteNewPres/>
      </TabPanel>
      
    </div>
  );
}



// const useStyles = makeStyles({
//     root: {
//       maxWidth: 345,
//     },
//   });

  
// function DocDashboard({data}){
//   const [open, setOpen] = React.useState(false);
//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };


//     const classes = useStyles();

//   return (<div className="doc-container">
//     <Card className={classes.root}>
//       <CardActionArea>
//         {/* <CardMedia
//           component="img"
//           alt="Contemplative Reptile"
//           height="140"
//           image="/static/images/cards/contemplative-reptile.jpg"
//           title="Contemplative Reptile"
//         /> */}
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Welcome Dr. {data}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Click on "History" to check existing patient's history or click on "New Patient" to add a new patient.
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>

//       <div>
//       <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//         History
//       </Button>
//       <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
//         <DialogTitle id="form-dialog-title">History</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Please enter the Patient ID:
//           </DialogContentText>
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="PatientID"
//             type="text"
//             fullWidth
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Cancel
//           </Button>
//           <Link to="/viewhistory"><Button onClick={handleClose} color="primary">
//             Submit
//           </Button></Link>
//         </DialogActions>
//       </Dialog>
//     </div>
//     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

//         <Link to='/writenewpres' >
//         <Button  variant="outlined" color="primary">
//           New Patient
//         </Button>
//         </Link>
//     </CardActions>
//     </Card>
//     </div>
//   );
    
// }
// export default DocDashboard


// return(<div>
    //     <h1>Hello Dr.{data}</h1>
    //     <h1>This is your dashboard</h1>
    //     <Link to ='/patienthistory'>
    //         <button>Check Patient History</button>
    //     </Link>
    //     <Link to ='/writenewpres'>
    //         <button>New Patient</button>
    //     </Link>
        
        
    // </div>)