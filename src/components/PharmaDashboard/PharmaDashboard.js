import React from 'react'
import {Link} from 'react-router-dom'



class PharmaDashboard extends React.Component{
    handleSubmit(event){
        event.preventDefault()
    }
    render(){
        return (<div>
            <h2>THIS IS PHARMA DASHBOARD</h2>
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="UID">Patient UID: </label>
            <input type="text" name="UID" id="UID" placeholder="Ex: PA1234"></input>
            <button type="submit">
                <Link to ='/showpres'>
                    Submit
                </Link>
            </button>
            </form>
        </div>)
    }
}

export default PharmaDashboard