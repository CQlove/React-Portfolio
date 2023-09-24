import React from "react";
import { useLocation } from 'react-router-dom';
import JC from '../assets/JC.jpg';
import Nav from "./Nav";
import '../styles/Header.css';
import '../styles/Nav.css';

const Headers = () => {
    const currentPage = useLocation().pathname;
    return (
        <header id="header" style={{ backgroundColor: '#8D9092' }}>
            <img
                id="jc"
                src={JC}
                width="50"
                height="50"
            />
            <Nav currentPage={currentPage} />
        </header >
    );
}

export default Headers;
