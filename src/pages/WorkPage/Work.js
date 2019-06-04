import React from 'react'
import { Link } from 'react-router-dom'
import QueueAnim from 'rc-queue-anim';

import NavBar from '../../component/NavBar/NavBar'
import Topbar from '../../component/Topbar/Topbar'
import '../LandingPage/LandingPage.css'
import '../../assets/css/global.css'
import './Work.css'
class Work extends React.Component{
    render(){
        return (
            <div>
                <NavBar></NavBar>
                <Topbar></Topbar>
                <div className="sectionCenter">
                <QueueAnim delay={300} className="queue-simple">

                    <div key="1">
                        <Link className='awithbg' to="/" style={{fontSize:'0.3rem', textDecoration:'none', fontWeight:'50', color:'#707070'}}>Recruitment Web App&nbsp;&nbsp;</Link>
                        <Link className='awithbg' to="/" style={{fontSize:'0.17rem', textDecoration:'none', fontWeight:'50', color:'#707070'}}>FanC &nbsp;&nbsp;</Link>
                        <Link className='awithbg' to="/" style={{fontSize:'0.4rem', textDecoration:'none', fontWeight:'50', color:'#707070'}}>MySite</Link>
                    </div>
                    <div key="2">
                        <Link className='awithbg' to="/" style={{fontSize:'0.4rem', textDecoration:'none', fontWeight:'50', color:'#707070'}}>Search Engine</Link>
                    </div>
                    <div key="3">
                        <Link className='awithbg' to="/" style={{fontSize:'0.2rem', textDecoration:'none', fontWeight:'50', color:'#707070'}}>Campus Street View</Link>
                    </div>
                    <div key="4">
                        <Link className='awithbg' to="/" style={{fontSize:'0.3rem', textDecoration:'none', fontWeight:'50', color:'#707070'}}>Sentimental Analysis&nbsp;&nbsp;</Link>
                    </div>
                    <div key="5">
                    <Link className='awithbg' to="/" style={{fontSize:'0.4rem', textDecoration:'none', fontWeight:'50', color:'#707070'}}>Page Rank&nbsp;&nbsp;</Link>
                    <Link className='awithbg' to="/" style={{fontSize:'0.2rem', textDecoration:'none', fontWeight:'50', color:'#707070'}}>Vector Space Model</Link>
                    </div>
                    <div key="6" style={{fontSize:'0.4rem', textDecoration:'none', fontWeight:'50', color:'#707070'}}>•••</div>
                </QueueAnim>  
                </div>    
            </div>
                  
            
        )
    }
}

export default Work