import React from "react"
import NavBarItem from "./NavBarItem"
import { Link } from 'react-router-dom'
import ellipse from '../../assets/img/Ellipse.svg'
import './NavBar.css'
class NavBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            active: "HOME"
        }
    }

    componentWillMount(){
        if (this.state.active==="HOME"){

        }

        //which page is the active one. make this nav bar item css style active
    }
    render(){
        const home = "HOME";
        const me = "ME";
        const work = "WORK";
        const thoughts = "THOUGHTS"
        const contact = "CONTACT"
        return(
            <div className="navbar">
                <div className="homebutton">
                    <Link to="/"><img src={ellipse} alt="" /></Link>
                </div>
                <NavBarItem  text={me}></NavBarItem>
                <NavBarItem  text={work}></NavBarItem>
                <NavBarItem  text={thoughts}></NavBarItem>
                <NavBarItem  text={contact}></NavBarItem>

            </div>
        )
    }
}

export default NavBar