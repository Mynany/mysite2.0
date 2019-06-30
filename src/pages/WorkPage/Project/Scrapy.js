import React from 'react'
import NavBar from '../../../component/NavBar/NavBar'
import loginImg from '../../../assets/img/project/login_twitter.gif'
import twitterLogin from '../../../assets/video/seleniumlogin.mov'
import searchresult from '../../../assets/video/searchresult.mov'
import elastic from '../../../assets/img/project/eleastic.png'
import kibana from '../../../assets/img/project/kibana.png'
import registerImg from '../../../assets/img/project/register.png'
import register2 from '../../../assets/img/project/register2.png'
import dashboard from '../../../assets/img/project/list.png'
import msg from '../../../assets/img/project/msg.png'
import talk from '../../../assets/img/project/talk.png'
import Texty from 'rc-texty';
import QueueAnim from 'rc-queue-anim';

import './Project.css'
class Scrapy extends React.Component{
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

                    <div className="projectTitle"><Texty>Search Engine</Texty></div>
                    <div className="projectLead">Python / Elasticsearch / Django </div>
                    <div className="projectBreif"><br />Scrapy: extracts data<br/>
                                                        Elasticsearch: builds search engine<br/>
                                                        Django: builds website backend
                                                
                    </div>
                </div>
                <div className="projectSection">

                    <div key="1" className="subSectionImg">

                    <video controls autoplay>
                        <source src={twitterLogin} type="video/mp4" />
                        <source src={twitterLogin} type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>

                    </div>
                    <div key="2" className="subSectionDecs">
                        <div className="DecsTitle">
                            selenium
                        </div>
                        <div className="DecsContent">
                            For websites requiring user authentication, used web driver + selenium to log in automatically<br/>
                            
                        </div>
                    </div>
                </div>

                <div className="projectSection">
                    <div className="subSectionDecs">
                    <div className="DecsTitle">
                            PILELINE
                        </div>
                        <div className="DecsContent">
                            Difined different ItemLoader for different spiders<br />
                            Used the same pipeline to deal with different ItemLoader.<br />
                            Used Twisted to operate MySQL asynchronously.<br />
                        </div>
                    </div>
                    <div className="subSectionImg">
                        {/* <img style={{height:'50%'}} src={registerImg} alt="" />
                        <img style={{height:'50%'}} src={register2} alt="" /> */}
                    </div>
                </div>

                <div className="projectSection">
                    <div className="subSectionImg_vert">
                        <img src={elastic} alt="" />
                        <img src={kibana} alt="" />
                    </div>
                    <div className="subSectionDecs">
                        <div className="DecsTitle">
                                ELASTICSEARCH
                        </div>
                        <div className="DecsContent">
                            -Elasticsearch-rtf provides an easy-to-config environment<br />
                            -Used Elasticsearch-head to interact with Elasticsearch cluster<br />
                            -Used kibana to operate data<br />
                        </div>
                    </div>
                    
                </div>

                <div className="projectSection">
                    <div className="subSectionDecs">
                    <div className="DecsTitle">
                            RESULT PAGE
                        </div>
                        <div className="DecsContent">
                            -Get recommendation as typing.<br />
                            -Get what is popular in your area. <br />  
                            -Get your search history. <br />
                            -pagigation
                        </div>
                    </div>
                    <div className="subSectionImg">
                    <video controls autoplay>
                        <source src={searchresult} type="video/mp4" />
                        <source src={searchresult} type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                    </div>
                </div>
                <div className="projectIntro">
                    <div className="projectTitle">WHAT'S NEXT......</div>
                </div>
            </div>
        )
    }
}

export default Scrapy