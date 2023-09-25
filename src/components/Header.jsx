import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import JC from '../assets/JC.jpg';
import Nav from "./Nav";
import DropdownNav from "./DropdownNav";
import '../styles/Header.css';
import '../styles/DropdownNav.css';
import '../styles/Nav.css';


const Headers = () => {
    // find the current page by using the useLocation hook
    const currentPage = useLocation().pathname;

    // track the window width to determine if the dropdown menu should be used
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // update the window width state when the window resizes
    useEffect(() => {
        const resize = () => {
            setWindowWidth(window.innerWidth);
        };
        // add the resize event listener
        window.addEventListener("resize", resize);

        // remove the resize event listener when component uninstall
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