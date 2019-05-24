import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Switch} from 'react-router-dom'
import logo from '../../assets/img/skull.png'
import NavBar from '../../component/NavBar/NavBar'
import './LandingPage.css'
class LandingPage extends React.Component{
    render(){
        return (
            <div className="landingpage">
                <style>{'body { background-color: rgb(26,26,27); }'}</style>
                <NavBar></NavBar>
                <div className="skullwrap">
                    <img className="skull" src={logo} alt=""/>
                </div>
            </div>
        )
    }
}

export default LandingPage