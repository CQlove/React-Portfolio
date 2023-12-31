import React from "react";
import Github from "../assets/github.png";
import LinkedIn from "../assets/linkedin.png";
import Email from "../assets/email.png";
import Phone from "../assets/phone.png";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#8D9092' }}>
            <div class="container text-center">
                <div id="text-footer" >
                    <p id="contact-text">
                        Contact Me
                    </p>
                    <p>
                        &copy; 2023 by Jianxiong Chen
                    </p>
                </div>
                <div id="contact-info">
                    {/* email link to send me email  */}
                    <a href="mailto:chenjianxiong1997@gmail.com">
                        <img
                            src={Email}
                            alt="chenjianxiong1997@gmail.com"
                            width="50"
                            height="50"
                        />
                    </a>
                    {/* web link to my github  */}
                    <a href="https://github.com/CQlove">
                        <img
                            src={Github}
                            alt="https://github.com/CQlove"
                            width="50"
                            height="50"
                        />
                    </a>
                    {/* call my number */}
                    <a href="tel:702-524-8322">
                        <img
                            src={Phone}
                            alt="702-524-8322"
                            width="50"
                            height="50"
                        />
                    </a>
                    {/* web link to LinkedIn */}
                    <a href="https://www.linkedin.com/in/jianxiong-chen-9a279b275/">
                        <img
                            src={LinkedIn}
                            alt="https://www.linkedin.com/in/jianxiong-chen-9a279b275/"
                            width="50"
                            height="50"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;