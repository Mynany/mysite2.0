import React from 'react'
import sleep from '../../assets/img/sleep.svg'

class Contact extends React.Component{
    render(){
        return (
            <div style={{display:'flex', height:'100vh', width:'100%', flexDirection:'column', justifyContent:'center', alignItems:'center', alignContent:'center',fontWeight:'100'}}>
            <div>
                <img src={sleep} alt="" />
            </div>
            <div style={{color:'#707070', fontWeight:'80'}}>
                I'm not ready
            </div>
            <div style={{color:'#707070', fontWeight:'100', fontSize:'0.3rem'}}>
                Please wait
            </div>
       </div>
        )
    }
}

export default Contact