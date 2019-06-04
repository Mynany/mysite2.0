import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Switch} from 'react-router-dom'
import { Parallax } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';

import logo from '../../assets/img/logo.png'
import arrow from '../../assets/img/arrowplay.svg'
import NavBar from '../../component/NavBar/NavBar'
import './LandingPage.css'


    const p0 = 'M0,100 L25,100 C34,20 40,0 100,0';
    const p1 = 'M0,100 C5,120 25,130 25,100 C30,60 40,75 58,90 C69,98.5 83,99.5 100,100';
    const ease0 = TweenOne.easing.path(p0);
    const ease1 = TweenOne.easing.path(p1);
class LandingPage extends React.Component{

    constructor(props) {
        super(props);
        this.animation = [
          {
            repeatDelay: 500,
            y: -70,
            repeat: -1,
            yoyo: true,
            ease: ease0,
            duration: 1000
          },
          {
            repeatDelay: 500,
            appearTo: 0,
            scaleX: 0,
            scaleY: 2,
            repeat: -1,
            yoyo: true,
            ease: ease1,
            duration: 1000,
          }
        ];
      }
    render(){
        return (
            <div className="landingpage">
                <div className="mainsection">
                <TweenOne
                    animation={this.animation}
                    paused={this.props.paused}
                    className="code-box-shape"
                    style={{
                        position: 'absolute',
                        transformOrigin: 'center top',
                    }}
                >
                        <div className="logo">
                        <img src={logo} alt=""/>
                    </div>
                </TweenOne>
                    
                    <div className="myname">
                        <Texty>Pixel2.0.</Texty>
                    </div>
                    <div><br /></div>
                   
                    <div style={{lineHeight:'0'}}>
                        <span style={{color:'#707070', fontSize:'0.1rem',fontWeight:'50'}}>Be Humble / Have Fun </span>
                    </div>
                </div>          
                <NavBar></NavBar>
            </div>
            
        )
    }
}

export default LandingPage