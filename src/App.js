import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Doctor from './components/Doctor/Doctor'
import Patient from './components/Patient/Patient'
import SimpleCard from './components/Card/SimpleCard'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'




function App() {
  return (
    
        <Router>
          <div className="App">
            <NavBar />
            <div>
              <Switch>
                <Route exact path="/" component={SimpleCard}/>
                <Route path="/doctor" component={Doctor} />
                <Route path="/patient" component={Patient} />
              </Switch>
            </div>
          </div>
        </Router>
    
  );
}

export default App;
