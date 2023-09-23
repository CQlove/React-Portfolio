import React from "react";
import { useLocation } from 'react-router-dom';
import JC from '../assets/JC.jpg';
import Nav from "./Nav";

const Headers = () => {
    const currentPage = useLocation().pathname;
    return (
        <div class="container-fluid" style={{ backgroundColor: '#8D9092' }}>
            <div class="row">
                <div class="col-lg-1 col-md-1 col-sm-1">
                    <img src={JC}
                        width="50"
                        height="50"
                    />
                </div>
                <div class="col-lg-5 col-md-4 col-sm-1">
                </div>
                <div class="col-lg-6 col-md-7 col-sm-10">
                    <Nav currentPage={currentPage} />
                </div>
            </div>
        </div >
    );
}

export default Headers;
