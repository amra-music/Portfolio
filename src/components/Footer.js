import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function footer() {
  return (
    <div className="footer-container">
      <div className='footer-content'>
        <div className='footer-content-title'>GET IN TOUCH</div>
        <div className='contact-container'>
          <div>Call me at +387 61-079-824</div>
          <a class="white-nav-link" target="_blank" rel="noopener noreferrer" href="mailto:amusic5@etf.unsa.ba">amusic5@etf.unsa.ba</a>
        </div>
      </div>
      <div className='footer-content'>
        <div className='footer-content-title'>SOCIAL</div>
        <div className='social-container'>
          <a className="social-link" rel="noopener noreferrer" href="https://github.com/amra-music" target="_blank">
            <AiFillGithub />
          </a>
          <a className="social-link" rel="noopener noreferrer" href="https://www.linkedin.com/in/amra-music" target="_blank">
            < AiFillLinkedin />
          </a>
          <a className="social-link" rel="noopener noreferrer" href="https://www.facebook.com/amra.music.543" target="_blank">
            <AiFillFacebook />
          </a>
        </div>
      </div>
      <div class="break"></div>
      <div className='footer-content' style={{ marginLeft: "auto" }}>
        <div className="footer-copyright">
          &copy;{new Date().getFullYear()} <a href="https://github.com/amra-music">Amra Musić</a>. All rights reserved.
      </div>
      </div>
    </div>
  );
}

export default footer;
