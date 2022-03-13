import React from 'react';

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
                <h6>The Art and Disipline of Software Engineering</h6>
            </div>
        </div>
    )
}

export default Header;