import React from 'react'
import NavBar from '../../../component/NavBar/NavBar'
import loginImg from '../../../assets/img/project/login.png'
import registerImg from '../../../assets/img/project/register.png'
import register2 from '../../../assets/img/project/register2.png'
import dashboard from '../../../assets/img/project/list.png'
import msg from '../../../assets/img/project/msg.png'
import talk from '../../../assets/img/project/talk.png'
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
                    <div className="projectLead">React / Redux / MangoDB / Express / Socket.io</div>
                    <div className="projectBreif"><br />The main parts of this project are managing user information and chat information with redux,
                                                         implementing communication between users with Socket.io.
                                                         Instead of original subscription, I use <span className="yellowbg">trunk</span> middleware to make redux easier to manage.
                                                
                    </div>
                </div>
                <div className="projectSection">

                    <div key="1" className="subSectionImg">
                        <img src={loginImg} alt="" />
                    </div>
                    <div key="2" className="subSectionDecs">
                        <div className="DecsTitle">
                            LOGIN PAGE
                        </div>
                        <div className="DecsContent">
                            Users have no access to other pages if not login. <br />
                            Any try to access other pages before authentication will be redirected to login page.
                        </div>
                    </div>
                </div>

                <div className="projectSection">
                    <div className="subSectionDecs">
                    <div className="DecsTitle">
                            REGISTER PAGE
                        </div>
                        <div className="DecsContent">
                            Encrypt password by md5.<br />
                            There are two types of users: employer and jobseeker.<br />
                            After user click register, they will be redirected to relevant information complete page. <br />
                            Jobseekers can put their desired job and self description.<br />
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
                            For employers, only jobseekers will be shown on their dashboard list.<br />
                            For jobseekers, only employers will be shown on their dashboard list.<br />
                            Users can click card to talk to their desired jobseekers or employers.<br />
                        </div>
                    </div>
                    
                </div>

                <div className="projectSection">
                    <div className="subSectionDecs">
                    <div className="DecsTitle">
                            MESSAGE & CHAT
                        </div>
                        <div className="DecsContent">
                            Message unread will be shown as badge on the right top corner of message button.<br />
                            Emoij is available on chat page. <br />  
                            Used socket.io build connection between server and client. <br />
                            socket.io listens on 'sendmsg', and then call 'recvmsg'
                        </div>
                    </div>
                    <div className="subSectionImg">
                        <img style={{height:'50%'}} src={msg} alt="" />
                        <img style={{height:'50%'}} src={talk} alt="" />
                    </div>
                </div>
                <div className="projectIntro">
                    <div className="projectTitle">WHAT'S NEXT......</div>
                </div>
            </div>
        )
    }
}

export default RecruitApp