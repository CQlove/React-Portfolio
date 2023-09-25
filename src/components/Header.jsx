import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import JC from '../assets/JC.jpg';
import Nav from "./Nav";
import DropdownNav from "./DropdownNav";
import '../styles/Header.css';
import '../styles/DropdownNav.css';
import '../styles/Nav.css';


const Headers = () => {
    const currentPage = useLocation().pathname;

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const resize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <header id="header" style={{ backgroundColor: '#8D9092' }}>
            <img
                id="jc"
                src={JC}
                width="50"
                height="50"
            />
            {windowWidth <= 768 ? (
                <DropdownNav currentPage={currentPage} />
            ) : (
                <Nav currentPage={currentPage} />
            )}
        </header >
    );
}

export default Headers;