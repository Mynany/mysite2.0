import React from 'react'
import { Parallax, Element } from 'rc-scroll-anim';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';

import sleep from '../../assets/img/sleep.svg'
import Topbar from '../../component/Topbar/Topbar'
import Navbar from '../../component/NavBar/NavBar'
import toplogo from '../../assets/img/logo.png'
import 'rc-scroll-anim/assets/index.css'
import './About.css'
import TweenOne from 'rc-tween-one';

class About extends React.Component{

    constructor(props){
        super(props);
        this.myref=React.createRef;
        this.state={
            scrollTop:0,
        };
        this.handleScroll = this.handleScroll.bind(this)
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll)
    }
    handleScroll(event){
        const scrollTop = this.myref.scrollTop;
        if(window.scrollY!==0){
            this.setState({
                scrollTop:scrollTop
            })
        }
    }
    handleScale(){

    }
    handleMove(){

    }
    handleRotate(){

    }
    render(){
        return (
            <div >
            <div className="text">this is a text test</div>
            <div className="meColor"></div>
                <Parallax
          animation={{ x: 0 }}
          style={{ transform: 'translateX(-100px)', margin: '10px auto' }}
          className="meColor"
        />
        <Parallax
          animation={{ scale: 1 }}
          style={{ transform: 'scale(1.5)', }}
          className="text"
        />
        <Parallax
          animation={{ rotate: 360 }}
          style={{ }}
          className="test"
        />
               
            </div>
            
        )
    }
}

export default About