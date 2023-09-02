import React from 'react'
import Footer from './Footer'

function About() {
  return (
    <>
    <img className="img-fluid" style={{height:'800px',width:'100%'}}
          src={`${process.env.PUBLIC_URL}/assets/mainimages/team.jpeg`}
          alt="logo" />

<h1 className='text-center '>HealthCare Online Story</h1>
    <p className='my-5 mx-5'>The HealthCare Story    HealthCare, a platform that has been builtup to bridge a patient with the right healthcare providers. Our focus is to improve the quality of healthcare ecosystem by making it accessible and affordable for everyone.
    
    Our beta version launched on 1st Dec 2022 with tremendous features like Laboratory tests Online Appointments this initiative not only helped the people to get connected with best healthcare providers but also helped many service providers to become a part of the most advanced and highly featured healthcare platform that helped them in business growth as well better patient relationship.
    
    </p>
    
    <Footer/>
    </>
  )
};


export default About
