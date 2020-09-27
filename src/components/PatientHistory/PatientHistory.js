import React from 'react'
import {Link} from 'react-router-dom'
class PatientHistory extends React.Component{
    constructor(){
        super ()
        this.state={
            isLoading : false
        }
    }
    render(){
        return (<div>
             <h1>this is doc dash</h1>
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
            <Link to ='/viewhistory' isLoading={this.state.isLoading}>
            <button>Show Records</button>
            </Link>
        </div>)
    }
}

export default PatientHistory