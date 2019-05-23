import React from "react"

class NavBarItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isActive: false,
        };
    }
    render(){
        const {bgcolor, color, height, width, text} = this.props;
        
        const navbarClasses = className({
            [classes.fixed]: fixed,
            [classes[background-color]]:bgcolor,
            [classes[color]]:color,
        })
        return(
            <div className={navbarClasses}>{text}</div>
        )
    }
}

export default NavBarItem