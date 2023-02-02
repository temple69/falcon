import React from 'react'
import styling from './layout.module.css'
import landing_image from '../../assets/landing_image.png'
import falcon_logo from '../../assets/falcon_logo.png'
import Form from '../Forms/Form'
import VerifyEmail from '../verifyEmail/VerifyEmail'


const Layout = ({signup}) => {
    const{container,main}=styling
  return (
    <main className={main}>
    <section className={container}>
        <div>
            <img src={falcon_logo} alt="falcon-logo" />
            {signup?<Form/>:<VerifyEmail/>}
        </div>
        <div>
            <img src={landing_image} alt="logo" />
        </div>
    </section>
    </main>
  )
}

export default Layout