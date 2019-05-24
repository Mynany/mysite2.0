import React from "react"
import './NavBar.css'

class NavBarItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isActive: false,
        };
    }
    render(){
        const {bgcolor, txcolor, text} = this.props;
        return(
            <div className='navbaritem' style={{backgroundColor:bgcolor, color:txcolor}}>
            
            {text}
            
            </div>
        )
    }
}

export default NavBarItem