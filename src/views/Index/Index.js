import React, { Component } from "react"
// import logo from '../../components/Logo/logo.svg';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Doctor from '../../components/Doctor/Doctor'
import Header from '../../components/Header/Header';
import Content from './Content';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav'

class Index extends Component {
    render() {
        return (
            //     <div className="App" >
            //         <header className="App-header">
            //             <img src={logo} className="App-logo" alt="logo" />
            //             <p>
            //                 Edits <code>src/App.js</code> and save to reload.
            // </p>
            //             <a
            //                 className="App-link"
            //                 href="https://reactjs.org"
            //                 target="_blank"
            //                 rel="noopener noreferrer"
            //             >
            //                 Learn React
            // </a>
            //         </header>
            //     </div >
            
            <div class="main-container">
                <Nav />
                <Content />
                <Footer />
                <div>
                    <Router>
                        <Route path='/doctor' component={Doctor}/>
                    </Router>
                </div>

            </div>
            
        )
    }
}

export default Index;