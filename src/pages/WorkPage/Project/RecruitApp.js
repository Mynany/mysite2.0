import React from 'react'
import NavBar from '../../../component/NavBar/NavBar'
import loginImg from '../../../assets/img/project/login.png'
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
                
                <div className="projectSection">
                    <div className="subSectionImg">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="subSectionDecs">dfsdf</div>
                </div>
            </div>
        )
    }
}

export default RecruitApp