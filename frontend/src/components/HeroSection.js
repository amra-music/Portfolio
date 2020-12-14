import React from 'react';
import './HeroSection.css';
import { FaSmileWink } from "react-icons/fa";

const HeroSection = () => {
    return (
        <div className='hero-container'>
            <h2 className='hero-title'>I'm Amra. I'm learning React by making this website, but feel free to look at my other projects and meet me <FaSmileWink /></h2>
            <p className='hero-cite'>
                “Always remember that you’re unique. Just like everyone else.”
                    </p>
        </div>
    );
}

export default HeroSection;
