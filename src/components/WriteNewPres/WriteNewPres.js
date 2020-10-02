import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios'
//import Icon from '@material-ui/core/Icon';
import {Link} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  }
}))

function WriteNewPres({data}) {


  var val = "PA"+Math.floor(1000 + Math.random() * 9000);
  const classes = useStyles()
  const [inputFields, setInputFields] = useState([
    { name: '',dosage:'', duration: '' },
  ]);
  const[hist,setHist] = React.useState([])
  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    const finalData = 
    {
      "_id":val,
      "PatientName":name,
      "Aadhar":aadhar,
      "Email":email,

      
       "History":[{   
          "Symptoms":symptoms,
          "Notes": notes,
          "Test":tests,
          "Furthercheckups":further,
          "Followupdetails":followup,
          "Prescription":inputFields}]
      }
      axios.post(`http://localhost:8000/signup`, finalData)
      .then(res=>{
        
        console.log(res.data)
      })
    // axios.post(`http://localhost:8000/login`, 
    // { 
    //         "_id":"PA2222",
    //         "PatientName":"Patient",
    //         "Aadhar":"123456789012",
    //         "Email":"patient@gmail.com",
    //         "History":[{   
    //           "Symptoms":symptoms,
    //           "Notes": notes,
    //           "Test":tests,
    //           "Furthercheckups":further,
    //           "Followupdetails":followup,
    //           "Precription":inputFields
    //         }]
    //  })
    // .then(res => {
    //   console.log(res);
    //   console.log(res.data);
    // })
    // .catch(error => console.log(error));


    
    
  };

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  }

  const handleAddFields = () => {
    setInputFields([...inputFields, { name: '',dosage:'', duration: '' }])
  }

  const handleRemoveFields = (index) => {
    const values  = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  }

  // eslint-disable-next-line
  const [name, setName] = React.useState("");
  // eslint-disable-next-line
  const [aadhar, setAadhar] = React.useState("");
  // eslint-disable-next-line
  const [email, setEmail] = React.useState("");
  // eslint-disable-next-line
  const [pid, setPid] = React.useState("");
  const [symptoms, setSymp] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const [tests, setTests] = React.useState("");
  const [further, setFurther] = React.useState("");
  const [followup, setFollow] = React.useState("");
  
  
  
  return (
    <Container style={{backgroundColor:"white", opacity:"0.9"}}>
    <h1 style={{fontFamily:"sans-serif", fontSize:"25px"}}>ADD NEW PATIENT</h1>
      
      <form className={classes.root} onSubmit={handleSubmit}>

            <TextField 
              name="name"
              label= "Name"
              variant="filled"
              onChange={event => setName(event.target.value)}
            />
            
            <TextField 
              name="aadhar"
              label= "Aadhar"
              variant="filled"
              onChange={event => setAadhar(event.target.value)}
            />
            <TextField 
              name="email"
              label= "Email"
              variant="filled"
              onChange={event => setEmail(event.target.value)}
            />
            <TextField 
              name="pId"
              label= {val}
              variant="filled"
              onChange={event => setPid(event.target.value)}
              disabled inputProps={{ 'aria-label': 'description' }}
            />

            <TextField 
              name="symptoms"
              label="Symptoms"
              variant="filled"
              onChange={event => setSymp(event.target.value)}
              
            />

            <TextField 
              name="notes"
              label="Notes"
              variant="filled"
              onChange={event => setNotes(event.target.value)}
              
            />

            <TextField 
              name="tests"
              label="Tests"
              variant="filled"
              onChange={event => setTests(event.target.value)}
              
            />

            <TextField 
              name="further"
              label="Further check-up"
              variant="filled"
              onChange={event => setFurther(event.target.value)}
              
            />

            <TextField 
              name="followup"
              label="Date"
              variant="filled"
              onChange={event => setFollow(event.target.value)}
              
            />
        
        { inputFields.map((inputField, index) => (
          <div key={index}>
            <TextField 
              name="name"
              label="Name"
              variant="filled"
              value={inputField.firstName}
              onChange={event => handleChangeInput(index, event)}
            />
            <TextField 
              name="dosage"
              label="Dosage"
              variant="filled"
              value={inputField.middlename}
              onChange={event => handleChangeInput(index, event)}
            />
            <TextField 
              name="duration"
              label="Duration"
              variant="filled"
              value={inputField.lastName}
              onChange={event => handleChangeInput(index, event)}
            />
            <IconButton
              onClick={() => handleRemoveFields(index)}
            >
              <RemoveIcon />
            </IconButton>
            <IconButton
              onClick={() => handleAddFields()}
            >
              <AddIcon />
            </IconButton>
          </div>
        )) }
        <Button
          className={classes.button}
          variant="contained" 
          color="primary" 
          type="submit" 
          onClick={handleSubmit}
        ><Link to='/'>Done</Link></Button>
      </form>
    </Container>
  );
}

export default WriteNewPres;









































// class WritePrescription extends React.Component{
   
//     state = {
//         med : [{name:"",dosage:"",duration:""}],
//         UID:"",
//         Symptoms:"",
//         Notes:"",
//         Tests:"",
//         followup:""
        
//     }
    
//     handleChange=(e)=>{
//         if(["name", "dosage", "duration"].includes(e.target.className)){
//             let med = [...this.state.med]

//             med[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
//             //this.setState({med},()=>console.log(this.state.med))
//         }
//         else{
//             this.setState({[e.target.name]:e.target.value})
//         }
//     }


//     addMed = (e) => {
//         this.setState((prevState)=>({
//             med : [...prevState.med, {name:"", dosage:"", duration:""}],
//         }));
//     }
//     handleSubmit = (e)=>{
//         e.preventDefault()
//         console.log("submit")
//     }

//     handleClick=()=>{
//        var id = this.state.UID
       
//        this.props.sendData(id)
//     }

    
//     render(){
        
//         let {med} = this.state
//         return (<div>
//             <h1>THIS IS PAGE FOR EXISTING PATIENT'S PRESCRIPTION</h1>
        
//         <form className="form" onSubmit={this.handleSubmit} onChange={this.handleChange}>
           
//             <label htmlFor="UID" style={{marginRight:"33px"}}>Patient UID </label>
            
//             <input type="text" name="UID" style={{marginRight:"60px"}}></input>
            
//             <label htmlFor="Symptoms" style={{marginRight:"10px"}}>Symptoms </label>
            
//             <input type="text" name="Symptoms"></input>
//             <br/><br/>
//             <label htmlFor="Notes" style={{marginRight:"10px"}}>Medical Notes </label>
            
//             <input type="text" name="Notes" style={{marginRight:"60px"}}></input>
            
//             <label htmlFor="Tests" style={{marginRight:"47px"}}>Tests </label>
            
//             <input type="text" name="Tests"></input>
//             <br/><br/>
//             <label htmlFor="Followup" style={{marginRight:"42px"}}>Follow Up </label>
            
//             <input type="text" name="followup"></input>
//             <br/><br/>
//             <label htmlFor="Prescription">Prescription : </label>
//             <br/><br/>
//             <button onClick={this.addMed}>Add Medicine</button>
//             <br/>
//             {
//                 med.map((val, idx)=>{
//                     let medId = `name-${idx}`, dosageId = `dosage-${idx}`, durationId= `duration-${idx}`
//                     return(<div key={idx}>
//                         <br/>
//                         <label htmlFor={medId}>{`Med #${idx+1}`}</label><br/>
//                         <input type="text" name={medId} data-id = {idx} id={medId} className="name"></input><br/>
//                         <label htmlFor={dosageId}>Dosage</label><br/>
//                         <input type="text" name={dosageId} data-id={idx} id={dosageId} className="dosage"></input><br/>
//                         <label htmlFor={durationId}>Duration</label><br/>
//                         <input type="text" name={durationId} data-id={idx} id={durationId} className="duration"></input>
//                     </div>)
//                 })
//             }
//             <br/>
//             <Link to='/showpres'>
//             {/* <input type="submit" value='Submit'></input> */}
//             <button type="submit" onClick={this.handleClick}>Submit</button>
//             </Link>
            

//         </form>



//         <br/>
        
//         </div>
//         )
//     }
    
// }


// export default WritePrescription