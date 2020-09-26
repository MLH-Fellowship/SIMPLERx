import React from 'react'
import {Link} from 'react-router-dom'



export default function WritePrescription(){
    return (<div>
         <h1>this is doc dash</h1>
        <Link to ='/patienthistory'>
            <button>History</button>
        </Link>
        <Link to ='/writepres'>
            <button>Prescription</button>
        </Link>


        <h2>This is write pres page</h2>
        <Link to='/showpres'>
            <button>
                Done
            </button>
        </Link>
    </div>)
}
