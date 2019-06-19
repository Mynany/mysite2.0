import React from 'react'
import NavBar from '../../../component/NavBar/NavBar'
import loginImg from '../../../assets/img/project/login.png'
import registerImg from '../../../assets/img/project/register.png'
import register2 from '../../../assets/img/project/register2.png'
import dashboard from '../../../assets/img/project/list.png'
import Texty from 'rc-texty';
import QueueAnim from 'rc-queue-anim';

import './Project.css'
class RecruitApp extends React.Component{
    componentDidMount(){
        // this.node.scrollIntoView();
    }
    render(){
        return(
            <div>
                <NavBar>
                </NavBar>
                <div className="projectIntro">
                    {/* <QueueAnim delay={100} className="queue-simple">
                        <div key="a" className="projectTitle"><Texty>Recruitment Web App</Texty></div>
                        <div key="b" className="projectLead"><Texty>React / Redux / MangoDB / Express / Socket.io</Texty></div>
                        <div key="b" className="projectBreif"><Texty>The main part of this project is managing user information and chat information with redux,
                                                            implementing communication between users with Socket.io.
                                                            Instead of original subscribe, I use trunck middleware to make redux easier to manage.
                                                    </Texty>
                        </div>
                    </QueueAnim> */}

                    <div className="projectTitle"><Texty>Recruitment Web App</Texty></div>
                    <div className="projectLead"><Texty>React / Redux / MangoDB / Express / Socket.io</Texty></div>
                    <div className="projectBreif"><br />The main part of this project is managing user information and chat information with redux,
                                                         implementing communication between users with Socket.io.
                                                         Instead of original subscribe, I use trunck middleware to make redux easier to manage.
                                                
                    </div>
                </div>
                <div className="projectSection">
                    <div className="subSectionImg">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="subSectionDecs">
                        <div className="DecsTitle">
                            LOGIN PAGE
                        </div>
                        <div className="DecsContent">
                            User have no access to page if not login. <br />
                            Any try to access to other page before authentication will be redirected to login page.
                        </div>
                    </div>
                </div>

                <div className="projectSection">
                    
                    <div className="subSectionDecs">
                    <div className="DecsTitle">
                            REGISTER PAGE
                        </div>
                        <div className="DecsContent">
                            There are two types of user: employer and jobseeker.
                            After user click register, they will be redirect to relevant information complete page. <br />
                            Jobseekers can fill in their desired job and self description.<br />
                            Employers can put their open position and requirements.
                            
                        </div>
                    </div>
                    <div className="subSectionImg">
                        <img style={{height:'50%'}} src={registerImg} alt="" />
                        <img style={{height:'50%'}} src={register2} alt="" />
                    </div>
                </div>

                <div className="projectSection">
                    <div className="subSectionImg">
                        <img src={dashboard} alt="" />
                    </div>
                    <div className="subSectionDecs">
                        <div className="DecsTitle">
                                DASHBOARD PAGE
                        </div>
                        <div className="DecsContent">
                            For employers, only jobseekers will show on their dashboard list.<br />
                            For jobseekers, only employers will show on their dashboard list.<br />
                            Users can click card to talk to their desired jobseekers or employers.<br />
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default RecruitApp