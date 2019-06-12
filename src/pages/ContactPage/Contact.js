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
import linkedin from '../../assets/img/linkedin.svg'
import linkedin2 from '../../assets/img/linkedin2.svg'
import github from '../../assets/img/github.svg'
import github2 from '../../assets/img/github2.svg'

import '../../assets/css/global.css'
import './Contact.css'

class Contact extends React.Component{
    render(){
        return (
            <div>
                 <Navbar></Navbar>
                {/* <Topbar></Topbar> */}
                <div className='sectionCenter'>
                    <div className='socialSection'>
                    <div className='socialMedia' style={{justifyContent:'flex-end'}}>
                            <a href='https://www.facebook.com/PixelYang'><img src={facebook} alt="" /></a>
                        </div>
                        <div className='socialMedia' style={{justifyContent:'flex-start'}}>
                            <a href='https://github.com/Mynany'><img src={github} alt="" /></a>
                        </div>
                        <div className='socialMedia' style={{justifyContent:'flex-end'}}>
                            <a href='https://www.linkedin.com/in/yumengyang2/'><img src={linkedin} alt="" /></a>
                        </div>
                        <div className='socialMedia' style={{justifyContent:'flex-start'}}>
                            <a href='https://www.instagram.com/pixelnotpixie/'><img src={instagram} alt="" /></a>
                        </div>
                    </div>
            </div>
       </div>
        )
    }
}

export default Contact