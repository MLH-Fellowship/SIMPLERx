import React from 'react'
import {Link} from 'react-router-dom'


class ViewHistory extends React.Component{

    constructor(){
        super ()
        this.state={
            isFirst:false
        }
    }
    render(){
        return (<div>
            <h1>This is patient history page</h1>
            {this.state.isFirst===true?<Link to ='/writepres'>
                            <button>Prescribe</button>
                            </Link>: 
                            <Link to ='/writenewpres'>
                            <button>Prescribe(N)</button>
                            </Link>}
            
        </div>)
    }
}
export default ViewHistory