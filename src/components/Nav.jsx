import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Nav = ({ currentPage }) => {
    const [activeLink, setActiveLink] = useState('/');
    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
    };
    return (
        <nav>
            <ul>
                <li>
                    <Link
                        to="/"
                        className={activeLink === '/' ? 'active' : ''}
                        onClick={() => handleLinkClick('/')}
                    >
                        About Me
                    </Link>
                </li>
                <li>
                    <Link
                        to="/portfolio"
                        className={activeLink === '/portfolio' ? 'active' : ''}
                        onClick={() => handleLinkClick('/portfolio')}
                    >
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        className={activeLink === '/contact' ? 'active' : ''}
                        onClick={() => handleLinkClick('/contact')}
                    >
                        Contact
                    </Link>
                </li>
                <li>
                    <Link
                        to="/resume"
                        className={activeLink === '/resume' ? 'active' : ''}
                        onClick={() => handleLinkClick('/resume')}
                    >
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;