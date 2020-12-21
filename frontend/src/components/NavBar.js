import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ match }) => {
    const [navbar, setNavbar] = useState(window.location.pathname !== "/");

    useEffect(() => {
        const changeBackground = () => setNavbar(window.location.pathname !== "/" || window.scrollY >= 80);
        window.addEventListener('scroll', changeBackground);
    }, [])

    useEffect(() => {
        setNavbar(!match.isExact || window.scrollY >= 80);
    }, [match])

    return (
        <nav className={navbar ? 'navbar activ' : 'navbar'}>
            <Link to='/' className='navbar-logo'>Amra Musić</Link>
            <div className='nav-menu'>
                <div className='nav-item'>
                    <Link to='/' className='nav-links'>Home</Link>
                </div>
                <div className='nav-item'>
                    <Link to='/about' className='nav-links'>About</Link>
                </div>
                <div className='nav-item'>
                    <Link to='/contact' className='nav-links'>Contact</Link>
                </div>
            </div>
        </nav>
    );
}

export default withRouter(Navbar);
