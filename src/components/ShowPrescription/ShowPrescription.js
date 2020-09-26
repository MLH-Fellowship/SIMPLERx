import React from 'react'
import {Link} from 'react-router-dom'

export default function ShowPrescription(){
    return (<div>
         <h1>this is doc dash</h1>
        <Link to ='/patienthistory'>
            <button>History</button>
        </Link>
        <Link to ='/writepres'>
            <button>Prescription</button>
        </Link>
       



        <h1>
            THIS IS SHOW PRES PAGE
        </h1>
        <Link to = '/docdashboard'>
            <button>Next Patient</button>
        </Link>
        <Link to = '/'>
            <button>Home</button>
        </Link>
    </div>)
}