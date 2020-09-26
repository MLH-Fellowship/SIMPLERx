import React from 'react'
import {Link } from 'react-router-dom'



function DocDashboard(){
    return(<div>
        <h1>this is doc dash</h1>
        <Link to ='/patienthistory'>
            <button>History</button>
        </Link>
        <Link to ='/writepres'>
            <button>Prescription</button>
        </Link>
        
        
    </div>)
}
export default DocDashboard