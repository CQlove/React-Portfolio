import React from "react";
import Photo from '../assets/photo-of-mine.jpg';
import backgroundImage from '../assets/background.jpg';

const styles = {
    container: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no - repeat',
        backgroundAttachment: 'fixed',
        color: 'aliceblue',
        height: '100vh',
    },
}
export default function Home() {
    return (
        <div class="container-fluid p-0" style={styles.container}>
            <div class="container h-100" style={{ paddingTop: '30px' }}>
                <h1 class="text-center" >About Me</h1>
                <div class="row h-100">
                    <div class="col-lg-6 d-flex align-items-center">
                        <img src={Photo} alt="Photo of mine" class="img-fluid mx-auto d-block" style={{ maxWidth: '80%' }} />
                    </div>
                    <div class="col-lg-6 d-flex align-items-center">
                        <div>
                            <p>
                                A graduate of the University of Washington Foster School of Business, Jianxiong took a 180-degree
                                turn into an auto mechanic with his passion for cars when it came to career choices. In the
                                meantime, he took some self-directed programming lessons when he was not at the shop. While he
                                enjoyed getting his hands dirty on mechanical jobs, he realized he had an even greater desire to
                                "Think Big" through the lines of codes and fix the invisible problems. He is taken a full-stack
                                bootcamp at the University of Ohio to pursue his dream of becoming a software developer. Check out
                                his portfolio page to see his projects.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}