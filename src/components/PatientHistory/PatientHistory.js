import React from 'react'
import {Link} from 'react-router-dom'
class PatientHistory extends React.Component{
    constructor(){
        super ()
        this.state={
            isLoading : ""
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
                <label>
                    Patient ID:
                    <input type="text" name="UID" placeholder="PA1234"></input>
                </label>
            </form><br/>
            <Link to ='/viewhistory'>
            <button>Show Records</button>
            </Link>
        </div>)
    }
}

export default PatientHistory