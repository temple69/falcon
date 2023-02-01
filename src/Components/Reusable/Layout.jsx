import React from 'react'
import styling from './layout.module.css'
import landing_image from '../../assets/landing_image.png'
import falcon_logo from '../../assets/falcon_logo.png'
import Form from '../Forms/Form'
import VerifyEmail from '../verifyEmail/VerifyEmail'


const Layout = ({signup}) => {
    const{container}=styling
  return (
    <section className={container}>
        <div>
            <img src={falcon_logo} alt="" />
            {signup?<Form/>:<VerifyEmail/>}
        </div>
        <div>
            <img src={landing_image} alt="" />
        </div>
    </section>
  )
}

export default Layout