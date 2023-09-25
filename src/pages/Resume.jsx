import React from "react";
import Background from '../assets/background.jpg';
import ResumePdf from '../assets/Resume.pdf';
import ResumeImg from '../assets/Resume.png';
import '../styles/Resume.css';
export default function Resume() {

    return (
        <div style={{ backgroundImage: `url(${Background})`, minHeight: '100vh', color: "white", textAlign: 'center', padding: "20px" }}>
            <h1 id="title">Resume</h1>
            <div style={{ padding: "30px" }}>
                <img
                    id="resume-img"
                    src={ResumeImg}
                    alt="This is my resume PDF file"
                />
                <p id="text">Click download button to get the PDF version</p>
                <a href={ResumePdf} download="Resume.pdf">
                    <button id="download">Download</button>
                </a>
            </div>
            <div id="skills">
                <p id="skills-title">Skills that I have:</p>
                <p id="skills-text">
                    &nbsp;&nbsp;I possess a strong skill set in web development, including proficiency in HTML, CSS, and Bootstrap for front-end design,
                    along with JavaScript and jQuery for dynamic interactions. I have experience with server-side development using Node.js and Express.js,
                    working with both MySQL and NoSQL databases. My expertise extends to modern web technologies such as Progressive Web Apps (PWA) and React.
                    Additionally, I am well-versed in Object-Oriented Programming (OOP) principles, ES6, and tools like Vite and Sequelize.
                    This knowledge enables me to create efficient, scalable, and user-friendly web applications.
                </p>
            </div>
        </div>

    );
}