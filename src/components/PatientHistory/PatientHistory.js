import React from 'react'
import {Link} from 'react-router-dom'
class PatientHistory extends React.Component{
    
    render(){
        return (<div>
             
            <Link to ='/patienthistory'>
            <button>History</button>
            </Link>
            <Link to ='/writepres'>
            <button>Prescribe</button>
        </Link>
            <br/>
            <br/>
            <form>
                <label style={{marginRight:"5px"}}>
                    Patient ID: 
                </label>
                <input type="text" name="UID" placeholder="Ex: PA1234"></input>
            </form><br/>
            <Link to ='/viewhistory'>
            <button>Show Records</button>
            </Link>
        </div>)
    }
}

export default PatientHistory