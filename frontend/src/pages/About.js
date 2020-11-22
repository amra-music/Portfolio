import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { Button } from 'react-bootstrap';
import Pdf from '../assets/Resume.pdf';
import myImage from '../assets/Me.jpg';

const About = () => {
    return (
        <div className='content-wrap'>
            <div className='about-top'>
                <div className='about-title'>About me</div>
                <div className='about-image-container'>
                    <img className='about-image' alt='myImage' src={myImage} />
                </div>
            </div>
            <div className='animation-text'>
                <h2 className='animation'>I am <span></span></h2>
                <p className='about-text'>Honest, responsible, persistent person. Always willing to learn new skills and improve as a person. Currently at the pursuit of a master's degree in Computer Science &amp IT at the Faculty of Electrical Engineering in Sarajevo, Bosnia and Herzegowina. The ability to always discover something new, attracted me to software development which I have a deep interest in. I recently graduated with a Bachelor's degree in Computer Science & IT at
the Faculty of Electrical Engineering in Sarajevo. I learned a lot of tools and technologies while I was studying which helped me improve my skills. <br /><br />I spent my free time improving my social skills, playing board games and reading.</p>
                <div className='about-interested'>Interested?</div>
                <div className='about-connect'>Connect with me!</div>
                <div className='about-social-conteiner'>
                    <a className="connect-link" rel="noopener noreferrer" href="https://www.instagram.com/ludi.delfin" target="_blank">
                        <AiFillInstagram />
                    </a>
                    <a className="connect-link" rel="noopener noreferrer" href="https://www.linkedin.com/in/amra-music" target="_blank">
                        < AiFillLinkedin />
                    </a>
                    <a className="connect-link" rel="noopener noreferrer" href="https://www.facebook.com/amra.music.543" target="_blank">
                        <AiFillFacebook />
                    </a>
                </div>
            </div>
            <Button variant="dark" className='resumeBtn' type="submit" href={Pdf} target="_blank">
                See My Resume
            </Button>
        </div>
    )
}

export default About;
