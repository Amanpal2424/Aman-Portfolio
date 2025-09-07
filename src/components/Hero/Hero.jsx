import React from 'react'
import './Hero.css'
import profile_img from '../../assets/new.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <section id='home' className='hero'>
      <img src={profile_img} alt="Profile" />
      <h2>
        <span>I'm Aman, </span>Frontend Developer
      </h2>
      <p>
        “Turning designs into clean, responsive interfaces. I build frontend experiences that users love.”
      </p>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a
            href='/Aman Kumar Pal Resume..pdf' /* <<------- Ider Resume ko slash lga kr add kr lena correct nam hona chiye ok */
            className='resume-link'
            download="Aman_Resume"
          >My resume</a> 

        </div>
      </div>
    </section>
  )
}

export default Hero
