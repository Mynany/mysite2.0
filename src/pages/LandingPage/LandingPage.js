import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Switch} from 'react-router-dom'
import logo from '../../assets/img/logo.svg'
import './LandingPage.css'
class LandingPage extends React.Component{
    render(){
        return (
            <div className="landingpage">
                <style>{'body { background-color: rgb(26,26,27); }'}</style>

                <img className="logo-img" src={logo} alt="" />
            </div>
        )
    }
}

export default LandingPage