import React from 'react'
import { Parallax } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

import './Thought.css'
import logo from '../../assets/img/logo.png'
class Thoughts extends React.Component{
    render(){
        return (
            <div>
                <div className="toplogo" style={{border:'solid',position:'fixed', width:'100%',top:'0', backgroundColor:'rgb(243,242,242)'}}>
                    <img src={logo} style={{height:'0.2rem',width:'auto',border:'solid'}} alt="" />
                </div> 
                <div className="articlelist">
                    <QueueAnim delay={300} className="queue-simple">

                        <div key="a" className="articlelistitem">
                            How to deal with GUITAR BUZZLING
                        </div>
                        <div key="b" className="articlelistitem">
                            How to deal with GUITAR BUZZLING
                        </div>
                        <div key="c" className="articlelistitem">
                            How to deal with GUITAR BUZZLING
                        </div>
                        <div key="d" className="articlelistitem">
                            How to deal with GUITAR BUZZLING
                        </div>
                        <div key="e" className="articlelistitem">
                            How to deal with GUITAR BUZZLING
                        </div>
                        <div key="f" className="articlelistitem">
                            How to deal with GUITAR BUZZLING
                        </div>
                        <div key="g" className="articlelistitem">
                            How to deal with GUITAR BUZZLING
                        </div>
                        <div key="h" className="articlelistitem">
                            How to deal with GUITAR BUZZLING
                        </div>
                        <div key="i" className="articlelistitem">
                            How to deal with GUITAR BUZZLING
                        </div>
                        <div key="j" className="articlelistitem">
                            How to deal with GUITAR BUZZLING
                        </div>
                        <div key="k" className="articlelistitem">
                            How to deal with GUITAR BUZZLING
                        </div>
                        <div key="l" className="articlelistitem">
                            How to deal with GUITAR BUZZLING
                        </div>
                        <div key="m" className="articlelistitem">
                            How to deal with GUITAR BUZZLING
                        </div>
                        <div key="n" className="articlelistitem">
                            How to deal with GUITAR BUZZLING
                        </div>
                        <div key="o" className="articlelistitem">
                            How to deal with GUITAR BUZZLING
                        </div>
                        <div key="p" className="articlelistitem">
                            How to deal with GUITAR BUZZLING
                        </div>
                        <div key="q" className="articlelistitem">
                            How to deal with GUITAR BUZZLING
                        </div>
                        <div key="r" className="articlelistitem">
                            How to deal with GUITAR BUZZLING
                        </div>
                    </QueueAnim>

           </div>
            </div>
          
        )
    }
}

export default Thoughts