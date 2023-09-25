import React from "react";
import Photo from '../assets/photo-of-mine.jpg';
import backgroundImage from '../assets/background.jpg';
import '../styles/Home.css';

const styles = {
    container: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no - repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
    },
    image: {
        maxWidth: '60%',
        transition: 'transform 2s ease-in-out, box-shadow 0.3s ease-in-out',
    },
};

// add hover affect logic to the image
const hooverImage = (e) => {
    e.target.style.transform = 'scale(1.1)';
    e.target.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
};

// without hover, reset the style back to normal
const withoutHooverImage = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.boxShadow = 'none';
};

export default function Home() {
    return (
        <div class="container-fluid p-0" style={styles.container}>
            <h1 id="about-me">About Me</h1>
            <div class="container-fluid h-100" style={{ padding: '30px' }}>
                <div class="row h-100">
                    <div class="col-lg-6 col-md-12 d-flex align-items-center">
                        <img
                            src={Photo}
                            alt="Photo of mine"
                            class="img-fluid mx-auto d-block"
                            style={styles.image}
                            // added the hoover affect to the image
                            onMouseEnter={hooverImage}
                            onMouseLeave={withoutHooverImage}
                        />
                    </div>
                    <div class="col-lg-6 col-md-12 d-flex align-items-center">
                        <div id="my-story">
                            <p>
                                &nbsp;&nbsp;This is Jianxiong Chen! A graduate of the University of Washington Foster School
                                of Business, Jianxiong took a 180-degree turn into an auto mechanic with his passion for cars
                                when it came to career choices. In the meantime, he took some self-directed programming lessons
                                when he was not at the shop. While he enjoyed getting his hands dirty on mechanical jobs, he
                                realized he had an even greater desire to "Think Big" through the lines of codes and fix the
                                invisible problems. He is taken a full-stack bootcamp at the University of Ohio to pursue his
                                dream of becoming a software developer. Check out his portfolio page to see his projects.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}