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
                        to="/Portfolio"
                        className={activeLink === '/Portfolio' ? 'active' : ''}
                        onClick={() => handleLinkClick('/Portfolio')}
                    >
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link
                        to="/Contact"
                        className={activeLink === '/Contact' ? 'active' : ''}
                        onClick={() => handleLinkClick('/Contact')}
                    >
                        Contact
                    </Link>
                </li>
                <li>
                    <Link
                        to="/Resume"
                        className={activeLink === '/Resume' ? 'active' : ''}
                        onClick={() => handleLinkClick('/Resume')}
                    >
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;