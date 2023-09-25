import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const DropdownNav = ({ currentPage }) => {
    const [activeLink, setActiveLink] = useState('/');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
    };

    const handleDropdownClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isDropdownOpen && !event.target.closest(".dropdown")) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isDropdownOpen]);

    return (
        <div className="dropdown">
            <button className="dropbtn" onClick={handleDropdownClick}>Menu</button>
            <div className={`dropdown-content ${isDropdownOpen ? 'open' : ''}`}>
                <Link
                    to="/"
                    className={activeLink === '/' ? 'active' : ''}
                    onClick={() => handleLinkClick('/')}
                >
                    About Me
                </Link>
                <Link
                    to="/Portfolio"
                    className={activeLink === '/Portfolio' ? 'active' : ''}
                    onClick={() => handleLinkClick('/Portfolio')}
                >
                    Portfolio
                </Link>
                <Link
                    to="/Contact"
                    className={activeLink === '/Contact' ? 'active' : ''}
                    onClick={() => handleLinkClick('/Contact')}
                >
                    Contact
                </Link>
                <Link
                    to="/Resume"
                    className={activeLink === '/Resume' ? 'active' : ''}
                    onClick={() => handleLinkClick('/Resume')}
                >
                    Resume
                </Link>
            </div>
        </div>
    );
}

export default DropdownNav;