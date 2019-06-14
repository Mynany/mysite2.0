import React from 'react'
import QueueAnim from 'rc-queue-anim';

import sleep from '../../assets/img/sleep.svg'
import Topbar from '../../component/Topbar/Topbar'
import Navbar from '../../component/NavBar/NavBar'
import toplogo from '../../assets/img/logo.png'
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
        const test = document.getElementsByClassName('text')[0];
        if(window.scrollY > 0){
            test.classList.add("motionScale");
            console.log(test)
        }else {
            test.classList.remove("motionScale"); 

        }
    }
    handleScrollInfinite(obj){
        const object = document.getElementsByClassName(obj)[0];
        object.classList.add("scrollInfinite");
    }
    handleScale(obj){
        const object = document.getElementsByClassName(obj)[0];
        object.classList.add("scrollInfinite");
    }
    handleMove(){

    }
    handleRotate(){

    }
    render(){
        return (
            <div>
                <div className="meColor" onScroll={this.handleScroll}>I'm white</div>
                <div className="test"></div>
                <div className="text" onScroll={this.handleScroll}>this is a text test</div>   
                <div className="meColor"></div>

                <div className="meColor"></div>
                <div className="meColor"></div>

            </div>
        )
    }
}

export default About