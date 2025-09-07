import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_imga.jpg'

const About = () => {
  return (
    
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Hi, I'm Aman. A passionate Frontend Developer with a focus on building responsive, user-friendly web interfaces. </p>
                        <p> I love turning complex problems into clean, intuitive designs using React, HTML, CSS, and JavaScript.

</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width : "50%"}} /></div>
                        <div className="about-skill"><p>React js</p><hr style={{width : "70%"}} /></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{width : "60%"}} /></div>
                        <div className="about-skill"><p>Flutter</p><hr style={{width : "50%"}} /></div>
                    </div>
                </div>
            </div>
         
            
        </div>

      
  
  )
}

export default About
