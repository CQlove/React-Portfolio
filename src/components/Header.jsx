import React from "react";
import { useLocation } from 'react-router-dom';
import JC from '../assets/JC.jpg';
import Nav from "./Nav";
import '../styles/Header.css';
import '../styles/Nav.css';

const Headers = () => {
    const currentPage = useLocation().pathname;
    return (
        <div id="header" class="container-fluid" style={{ backgroundColor: '#8D9092' }}>
            <div id="row-col" class="row">
                <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1">
                    <img
                        id="jc"
                        src={JC}
                        width="50"
                        height="50"
                    />
                </div>
                <div class="col-xl-4 col-lg-3 col-md-1">
                </div>
                <div class="col-xl-7 col-lg-8 col-md-10">
                    <div>
                        <Nav currentPage={currentPage} />
                    </div>

                </div>
            </div>
        </div >
    );
}

export default Headers;
