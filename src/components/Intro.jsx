import React from 'react'
import './intro.css';
import {Link} from 'react-scroll';
import btnImg from '../assets/hireme.png'

const Intro = () => {
  return (
    <div>
      <section id="intro">
        <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introText">
            I'm <span className="introName">Nawaraj</span>
            <br />
            Web Developer
          </span>
          <p className="introPara">I am a skilled web developer with experience in creating visually appealing websites.</p>
          <Link><button className='btn'><img src={btnImg} alt="Hire Me" className='btnImg'/>Hire me</button></Link>
        </div>
      </section>
    </div>
  )
}

export default Intro
