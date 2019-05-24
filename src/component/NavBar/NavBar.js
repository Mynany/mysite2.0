import React from "react"
import NavBarItem from "./NavBarItem"
import './NavBar.css'
class NavBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            active: "home"
        }
    }
    render(){
        const home = "HOME";
        const me = "ME";
        const work = "WORK";
        const thoughts = "THOUGHTS"
        const contact = "CONTACT"
        return(
            <div className="navbar">
                <NavBarItem bgcolor="#1a1a1d" txcolor="#5B5B5D" text={home}></NavBarItem>
                <NavBarItem bgcolor="#4e4e50" txcolor="#818183" text={me}></NavBarItem>
                <NavBarItem bgcolor="#6f2232" txcolor="#4E1822" text={work}></NavBarItem>
                <NavBarItem bgcolor="#950740" txcolor="#B64D76" text={thoughts}></NavBarItem>
                <NavBarItem bgcolor="#c3073f" txcolor="#D44670" text={contact}></NavBarItem>

            </div>
        )
    }
}

export default NavBar