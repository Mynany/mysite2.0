import React from 'react'
import sleep from '../../assets/img/sleep.svg'
import Topbar from '../../component/Topbar/Topbar'
import Navbar from '../../component/NavBar/NavBar'
import facebook from '../../assets/img/facebook.svg'
import facebook2 from '../../assets/img/facebook2.svg'
import instagram from '../../assets/img/instagram.svg'
import instagram2 from '../../assets/img/instagram2.svg'
import weixin from '../../assets/img/weixin.svg'
import weixin2 from '../../assets/img/weixin2.svg'
import twitter from '../../assets/img/twitter.svg'
import twitter2 from '../../assets/img/twitter2.svg'


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
                    <div className='socialMedia' style={{justifyContent:'flex-end'}}>
                            <img src={facebook} alt="" />
                        </div>
                        <div className='socialMedia' style={{justifyContent:'flex-start'}}>
                            <img src={weixin} alt="" />
                        </div>
                        <div className='socialMedia' style={{justifyContent:'flex-end'}}>
                            <img src={twitter} alt="" />
                        </div>
                        <div className='socialMedia' style={{justifyContent:'flex-start'}}>
                            <img src={instagram} alt="" />
                        </div>
                    </div>
            </div>
       </div>
        )
    }
}

export default Contact