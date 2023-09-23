import React from "react";
import Github from "../assets/Github.png";
import LinkedIn from "../assets/LinkedIn.png";
import Email from "../assets/Email.png";
import Phone from "../assets/Phone.png";

const Footer = () => {
    return (
        <footer>
            <div class="container text-center">
                <div id="side-text-footer">
                    <p id="contact"> Contact Me</p>
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