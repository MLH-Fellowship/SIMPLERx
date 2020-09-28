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
      patPassword:""
    }

    this.getPharmaLogin = this.getPharmaLogin.bind(this)
    this.getPatientLogin = this.getPatientLogin.bind(this)
    this.getDoctorLogin = this.getDoctorLogin.bind(this)
    
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
  
  getPatientLogin(patId,patPassword){
    this.setState({
      patId:patId
    })
  }

  
  
  render(){
    
  return (
    
        <Router>
          <div className="App">
            <NavBar />
            <div>
              <Switch>
                <Route exact path="/" component={SimpleCard}/>
                <Route path="/doctor" component={Doctor} />
                <Route path="/patient" component={Patient} />
                <Route path="/pharmacist" component={Pharmacist} />
                <Route path='/login'><Login sendData={this.getDoctorLogin} /></Route>
                <Route path='/patlogin'><PatLogin sendData={this.getPatientLogin}/></Route>
                <Route path='/pharmalogin'><PharmaLogin sendData={this.getPharmaLogin}/></Route>
                <Route path='/docdashboard'><DocDashboard data={this.state.docId}/></Route>
                <Route path='/patdashboard'><PatDashboard data={this.state.patId}/></Route>
                <Route path='/pharmadashboard' component={PharmaDashboard}/>
                <Route path='/patienthistory' component={PatientHistory}/>
                <Route path='/writepres' component={WritePrescription} />
                <Route path='/showpres' component={ShowPrescription}/>
                <Route path='/viewhistory' component={ViewHistory}/>
                <Route path='/writenewpres' component={WriteNewPres}/>
                <Route path='/showprespharma'><ShowPrescriptionPharma data={this.state.testData} /></Route>
              </Switch>
            </div>
            
          </div>
        </Router>
    
  );
  }
}

export default App;
