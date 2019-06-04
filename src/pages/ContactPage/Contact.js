import React from 'react'
import sleep from '../../assets/img/sleep.svg'
import Topbar from '../../component/Topbar/Topbar'
import Navbar from '../../component/NavBar/NavBar'
import facebook2 from '../../assets/img/facebook.svg'
import facebook from '../../assets/img/facebook2.svg'
import instagram from '../../assets/img/instagram.svg'
import instagram2 from '../../assets/img/instagram2.svg'
import youtube2 from '../../assets/img/youtube.svg'
import youtube from '../../assets/img/youtube2.svg'
import weibo from '../../assets/img/weibo.svg'
import weibo2 from '../../assets/img/weibo2.svg'


import '../../assets/css/global.css'
import './Contact.css'

class Contact extends React.Component{
    render(){
        return (
            <div>
                 <Navbar></Navbar>
                <Topbar></Topbar>
                <div className='sectionCenter'>
                    <div className='socialSection'>
                        <div className='socialMedia'>
                            <img src={facebook} alt="" />
                        </div>
                        <div className='socialMedia'>
                            <img src={youtube} alt="" />
                        </div>
                        <div className='socialMedia'>
                            <img src={weibo} alt="" />
                        </div>
                        <div className='socialMedia'>
                            <img src={instagram} alt="" />
                        </div>
                    </div>
            </div>
       </div>
        )
    }
}

export default Contact