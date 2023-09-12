import React from 'react'
import "./AboutContentStyle.css";
import { Link } from 'react-router-dom';
import about1 from '../assets/images/about1.png';
import about2 from "../assets/images/about2.jpg";


const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>lFunction and Class Components ... This function is a valid React component because it</p>
          <Link to="/contact">
            <button className='btn'>contact </button>
          </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={about1} alt='true' className='img'/>
                </div>

                <div className='img-stack bottom'>
                    <img src={about2} alt='true' className='img'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent