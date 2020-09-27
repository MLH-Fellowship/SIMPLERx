import React from 'react'
import {Link} from 'react-router-dom'
import './WritePrescription.css'

class WritePrescription extends React.Component{
    state = {
        med : [{name:"",dosage:"",duration:""}],
        UID:"",
        Symptoms:"",
        Notes:"",
        Tests:"",
        followup:""
        
    }
    handleChange=(e)=>{
        if(["name", "dosage", "duration"].includes(e.target.className)){
            let med = [...this.state.med]

            med[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
            this.setState({med},()=>console.log(this.state.med))
        }
        else{
            this.setState({[e.target.name]:e.target.value})
        }
    }


    addMed = (e) => {
        this.setState((prevState)=>({
            med : [...prevState.med, {name:"", dosage:"", duration:""}],
        }));
    }
    handleSubmit = (e)=>{
        e.preventDefault()
    }

    
    render(){
        let {med} = this.state
        return (<div>
            <h1>THIS IS PAGE FOR EXISTING PATIENT'S PRESCRIPTION</h1>
        
        <form className="form" onSubmit={this.handleSubmit} onChange={this.handleChange}>
           
            <label htmlFor="UID" style={{marginRight:"33px"}}>Patient UID </label>
            
            <input type="text" name="UID" style={{marginRight:"60px"}}></input>
            
            <label htmlFor="Symptoms" style={{marginRight:"10px"}}>Symptoms </label>
            
            <input type="text" name="Symptoms"></input>
            <br/><br/>
            <label htmlFor="Notes" style={{marginRight:"10px"}}>Medical Notes </label>
            
            <input type="text" name="Notes" style={{marginRight:"60px"}}></input>
            
            <label htmlFor="Tests" style={{marginRight:"47px"}}>Tests </label>
            
            <input type="text" name="Tests"></input>
            <br/><br/>
            <label htmlFor="Followup" style={{marginRight:"42px"}}>Follow Up </label>
            
            <input type="text" name="followup"></input>
            <br/><br/>
            <label htmlFor="Prescription">Prescription : </label>
            <br/><br/>
            <button onClick={this.addMed}>Add Medicine</button>
            <br/>
            {
                med.map((val, idx)=>{
                    let medId = `name-${idx}`, dosageId = `dosage-${idx}`, durationId= `duration-${idx}`
                    return(<div key={idx}>
                        <br/>
                        <label htmlFor={medId}>{`Med #${idx+1}`}</label><br/>
                        <input type="text" name={medId} data-id = {idx} id={medId} className="name"></input><br/>
                        <label htmlFor={dosageId}>Dosage</label><br/>
                        <input type="text" name={dosageId} data-id={idx} id={dosageId} className="dosage"></input><br/>
                        <label htmlFor={durationId}>Duration</label><br/>
                        <input type="text" name={durationId} data-id={idx} id={durationId} className="duration"></input>
                    </div>)
                })
            }
            <br/>
            <Link to='/showpres'>
            <input type="submit" value='Submit'></input>
            </Link>
            

        </form>



        <br/>
        
        </div>
        )
    }
    
}


export default WritePrescription