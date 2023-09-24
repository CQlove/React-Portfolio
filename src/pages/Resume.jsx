import React from "react";
import Background from '../assets/background.jpg';
import ResumePdf from '../assets/Resume.pdf';
import ResumeImg from '../assets/Resume.png';
import '../styles/Resume.css';
export default function Resume() {

    return (
        <div style={{ backgroundImage: `url(${Background})`, minHeight: '100vh', color: "#87CEEB", textAlign: 'center', padding: "20px" }}>
            <h1 id="title">Resume</h1>
            <div style={{ padding: "30px" }}>
                <img
                    id="resume"
                    src={ResumeImg}
                    alt="This is my resume PDF file"
                />
                <p id="text">Click download button to get the PDF version</p>
                <a href={ResumePdf} download="Resume.pdf">
                    <button id="download">Download</button>
                </a>
            </div>
        </div>

    );
}