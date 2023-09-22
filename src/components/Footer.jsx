const Footer = () => {
    return (
        <footer>
            <div id="side-text-footer">
                <p id="contact"> Contact Me</p>
            </div>
            <div id="contact-info">
                {/* email link to send me email  */}
                <a href="mailto:chenjianxiong1997@gmail.com">Email</a>
                {/* web link to my github  */}
                <a href="https://github.com/CQlove">GitHub</a>
                {/* call my number */}
                <a href="tel:702-524-8322">Call Me</a>
                {/* web link to LinkedIn */}
                <a href="https://www.linkedin.com/in/jianxiong-chen-9a279b275/">LinkedIn</a>
            </div>
        </footer>
    );
}

export default Footer;