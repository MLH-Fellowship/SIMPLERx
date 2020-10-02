import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Doctor from './components/Doctor/Doctor'
import Patient from './components/Patient/Patient'
import SimpleCard from './components/Card/SimpleCard'
import Pharmacist from './components/Pharmacist/Pharmacist'
import Login from './components/Login/Login'
import DocDashboard from './components/DocDashboard/DocDashboard'
import PatLogin from './components/PatLogin/PatLogin'
import PharmaLogin from './components/PharmaLogin/PharmaLogin'
import PatDashboard from './components/PatDashboard/PatDashboard'
import PharmaDashboard from './components/PharmaDashboard/PharmaDashboard'
import PatientHistory from './components/PatientHistory/PatientHistory'
import WritePrescription from './components/WritePrescription/WritePrescription'
import ShowPrescription from './components/ShowPrescription/ShowPrescription'
import ViewHistory from './components/ViewHistory/ViewHistory'
import WriteNewPres from './components/WriteNewPres/WriteNewPres'
import ShowPrescriptionPharma from './components/ShowPrescriptionPharma/ShowPrescriptionPharma'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ViewPatHistory from './components/ViewPatHistory/ViewPatHistory'
//import ParticleComponent from './PrticleComponent'


class App extends React.Component {

  constructor(){
    super ();
    this.state = {
      isCorrect: "DOCTOR",
      pharmaId:"",
      pharmaPassword:"",
      docId:"",
      docPassword:"",
      patId:"",
      patPassword:"",
      presId:""
    }

    this.getPharmaLogin = this.getPharmaLogin.bind(this)
    this.getPatientLogin = this.getPatientLogin.bind(this)
    this.getDoctorLogin = this.getDoctorLogin.bind(this)
    //this.getPrescriptionId = this.getPrescriptionId.bind(this)
  }
  getPharmaLogin(pharmaId,pharmaPassword){
      this.setState({
        pharmaId:pharmaId
      })
  }

  getDoctorLogin(docId,docPassword){
    this.setState({
      docId:docId
    })
  }
  
  getPatientLogin(patId){
    this.setState({
      patId:patId
    })
  }

  // getPrescriptionId(presId){
  //   this.setState({
  //     presId:presId
  //   })
    
  // }
  
    
  
  
  
  render(){
    
  return (
    
        <Router>
        {/* <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      >
      <ParticleComponent/>
      <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        > */}
          <div className="App" >
            
            <NavBar />
            
           
            <div>
            
              <Switch>
                <Route exact path="/" component={SimpleCard}/>
                <Route path="/doctor" component={Doctor} />
                <Route path="/patient" component={Patient} />
                <Route path="/pharmacist" component={Pharmacist} />
                <Route path='/login'><Login sendData={this.getDoctorLogin} /></Route>
                <Route path='/patlogin'><PatLogin sendData={this.getPatientLogin}/></Route>
                <Route path='/pharmalogin'><PharmaLogin sendData={this.getPatientLogin}/></Route>
                <Route path='/docdashboard'><DocDashboard sendData={this.getPatientLogin}/></Route>
                <Route path='/patdashboard'><PatDashboard data={this.state.patId}/></Route>
                <Route path='/pharmadashboard' component={PharmaDashboard}/>
                <Route path='/patienthistory' component={PatientHistory}/>
                <Route path='/writepres'><WritePrescription data={this.state.patId}/></Route>
                <Route path='/showpres'><ShowPrescription data={this.state.presId}/></Route>
                <Route path='/viewhistory'><ViewHistory sendData={this.getPatientLogin}/></Route>
                <Route path='/writenewpres' component={WriteNewPres}/>
                <Route path='/showprespharma'><ShowPrescriptionPharma sendData={this.getPatientLogin}/></Route>
                <Route path='/viewpathistory'><ViewPatHistory patId={this.state.patId}/></Route>
               
              </Switch>
              
            </div>
            
          </div>
          {/* </div>
          </div> */}
        </Router>
    
  );
  }
}

export default App;
