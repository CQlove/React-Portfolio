import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Nav = ({ currentPage }) => {
    const [activeLink, setActiveLink] = useState('/');
    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
    };
    return (
        // <nav>
        //     <ul className="nav nav-pills nav-fill" aria-orientation="vertical">
        //         <li className="nav-item">
        //             <Link
        //                 to="/"
        //                 // This is a conditional (ternary) operator that checks to see if the current page is "Home"
        //                 // Home page is the About Me page
        //                 // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
        //                 className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        //             >
        //                 About Me
        //             </Link>
        //         </li>
        //         <li className="nav-item">
        //             <Link
        //                 to="/Portfolio"
        //                 // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        //                 className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
        //             >
        //                 Portfolio
        //             </Link>
        //         </li>
        //         <li className="nav-item">
        //             <Link
        //                 to="/Contact"
        //                 // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        //                 className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        //             >
        //                 Contact
        //             </Link>
        //         </li>
        //         <li className="nav-item">
        //             <Link
        //                 to="/Resume"
        //                 // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        //                 className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        //             >
        //                 Resume
        //             </Link>
        //         </li>
        //     </ul>
        // </nav>
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
