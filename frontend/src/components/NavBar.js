import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ match }) => {
    const [navbar, setNavbar] = useState(false);

    useEffect(() => {
        const changeBackground = () => {
            if (!match.isExact)
                return
            if (window.scrollY >= 80) {
                setNavbar(true);
            } else {
                setNavbar(false);
            }
        }

        if (!match.isExact)
            window.removeEventListener('scroll', changeBackground);
        else
            window.addEventListener('scroll', changeBackground);

        setNavbar(!match.isExact);
    }, [match])

    return (
        <nav className={navbar ? 'navbar activ' : 'navbar'}>
            <Link to='/' className='navbar-logo'>Amra Musić</Link>
            <ul className='nav-menu'>
                <li className='nav-item'>
                    <Link to='/' className='nav-links'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about' className='nav-links'>About</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact' className='nav-links'>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default withRouter(Navbar);
