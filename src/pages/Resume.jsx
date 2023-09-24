import React from "react";
import Background from '../assets/background.jpg';
import ResumePdf from '../assets/Resume.pdf';
import ResumeImg from '../assets/Resume.png';

export default function Resume() {

    return (
        <div style={{ backgroundImage: `url(${Background})`, minHeight: '100vh', color: "#87CEEB", textAlign: 'center', padding: "20px" }}>
            <h1>Resume</h1>
            <div style={{ backgroundImage: `url(${Background})`, color: "#87CEEB", textAlign: 'center', padding: "20px" }}>
                <img
                    src={ResumeImg}
                    alt="This is my resume PDF file"
                    width="auto"
                    height="auto"
                />
                <p style={{ margin: '15px' }}>Click
                    <a href={ResumePdf} download="Resume.pdf">
                        <button>Download</button>
                    </a>
                    to get the PDF version
                </p>
            </div>
        </div>

    );
}