import React from "react"
import { Link } from 'react-router-dom'
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
        const link = "/" + text.toLowerCase();
        return(
            <div className='navbaritem'>
                <Link className='awithbg' to={link}>{text}</Link>
            </div>
        )
    }
}

export default NavBarItem