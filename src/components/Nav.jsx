import React from "react";
import { Link, useLocation } from 'react-router-dom';
import JC from '../assets/JC.png';

const Nav = () => {
    const currentPage = useLocation().pathname;
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-1">
                    <img src={JC}
                        width="50"
                        height="50"
                    />
                </div>
                <div class="col-md-6">
                </div>
                <div class="col-md-5">
                    <ul className="nav nav-pills nav-fill">
                        <li className="nav-item">
                            <Link
                                to="/"
                                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                                // Home page is the About Me page
                                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                            >
                                About Me
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/Portfolio"
                                // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                                className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/Contact"
                                // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                                className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                            >
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/Resume"
                                // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                                className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                            >
                                Resume
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    );
}

export default Nav;
