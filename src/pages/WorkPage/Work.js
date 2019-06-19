import React from 'react'
import { Link } from 'react-router-dom'
import QueueAnim from 'rc-queue-anim';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NavBar from '../../component/NavBar/NavBar'
import Topbar from '../../component/Topbar/Topbar'
import '../LandingPage/LandingPage.css'
import '../../assets/css/global.css'
import './Work.css'
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import RecruitApp from './Project/RecruitApp'

class Work extends React.Component{
    render(){
        return (
            // <BrowserRouter>
            //  <Switch>
            //     <Route path="/RecruitApp" exact component={RecruitApp} />
                
            //  </Switch>
            // </BrowserRouter>
            <div>

                <NavBar></NavBar>
                {/* <Topbar></Topbar> */}
                <div className="sectionCenter">
                <QueueAnim delay={300} className="queue-simple">
                    <div key="1">
                        <div className="workLine">
                            <Link className='awithbg firstTitle' to="/work/recruitapp">Recruitment Web App&nbsp;&nbsp;</Link>
                            <Link className='awithbg thirdTitle' to="/" >FanC &nbsp;&nbsp;</Link>
                            <Link className='awithbg secondTitle' to="/" >MySite</Link>
                        </div>
                        <div className="workLine">
                            <Link className='awithbg secondTitle' to="/" >Search Engine</Link>
                        </div>
                        <div className="workLine">
                            <Link className='awithbg firstTitle' to="/" >Campus Street View</Link>
                        </div>
                        <div className="workLine">
                            <Link className='awithbg fourthTitle' to="/" >Sentimental Analysis&nbsp;&nbsp;</Link>
                        </div>
                        <div className="workLine">
                            <Link className='awithbg firstTitle' to="/" >Page Rank&nbsp;&nbsp;</Link>
                            <Link className='awithbg thirdTitle' to="/" >Vector Space Model</Link>
                        </div>
                        <div className="workLine secondTitle" >•••</div>
                    </div>
                    
                </QueueAnim>  

                </div>    
            </div>
                  
            
        )
    }
}

export default Work