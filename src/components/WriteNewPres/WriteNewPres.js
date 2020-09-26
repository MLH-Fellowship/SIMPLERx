import React from 'react'
import {Link} from 'react-router-dom'


class WriteNewPres extends React.Component{
    render(){
        return (<div>
            <h1>THIS IS PAGE FOR NEW PATIENT'S PRESCRIPTION</h1>
        
        <Link to='/showpres'>
            <button>
                Done
            </button>
        </Link>
        </div>
        )
    }
    
}


export default WriteNewPres