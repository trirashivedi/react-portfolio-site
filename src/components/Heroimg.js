import React from 'react'
import "./HeroStyleimg.css"
import IntroImge from "../assets/images/corporate-business-team-manager-meeting-close-up-corporate-business-team-manager-meeting-131960975.webp";
import { Link } from 'react-router-dom';
const Heroimg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-image' src={IntroImge} alt='introimage' />
        </div>
        <div className='content'>
            <p> Hi, I'M A FREELANCER </p>
              <h1>React Developer</h1>
              <div>
                 <Link to="/project" className='btn'>Projects</Link>
                 <Link to="/contact" className='btn btn-light'>Contact</Link>
              </div>
        </div>
    </div>
  )
}

export default Heroimg