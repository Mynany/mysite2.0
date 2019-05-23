import React from "react"
import NavBarItem from "./NavBarItem"

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
        return(
            <div className="navbar fixright">
                <NavBarItem bgcolor="black" text={home}></NavBarItem>
                <NavBarItem bgcolor="red" text={me}></NavBarItem>
                <NavBarItem bgcolor="green" text={work}></NavBarItem>
            </div>
        )
    }
}

export default NavBar