import React from 'react';
import { Link } from 'react-router-dom';

import '../Styles/Header.css';
import Logo from '../Images/logo.png';

const Header = () => {
    return (
        <div className = 'header'>
            <div className = 'wrap'>
                <div className = 'brand'>
                    <h3>Code<span className = 'red'>_Fu</span></h3>
                    <img className = 'logo' src = { Logo } alt = 'logo' />
                </div>
                <h5>The Art and Disipline of Software Engineering</h5>
            </div>
            <nav className = 'links'>
                <Link to = '/' className = 'link'>Home</Link>
                <Link to = '/posts' className = 'link'>Blog Posts</Link>
                <Link to = '/about' className = 'link'>About Me</Link>
                <Link to = '/contact' className = 'link'>Contact Me</Link>
            </nav>
        </div>
    )
}

export default Header;