import React from 'react'
import {Parallax} from 'rc-scroll-anim'
import logo from '../../assets/img/logo.png'

import './Topbar.css'

class Topbar extends React.Component{
    render(){
        return(
            <div className="topbar">
                <img src={logo} alt="" />
            </div>
        )
    }
}

export default Topbar