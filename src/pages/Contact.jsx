import { useState } from 'react';
import { emailCheck } from '../utils/helper';
import backgroundImage from '../assets/background.jpg';
import '../styles/Contact.css';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [userNameErrorMessage, setUserNameErrorMessage] = useState('');
    const [messageErrorMessage, setMessageErrorMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;

        // set state according to the type of input field
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'message') {
            setMessage(value);
        } else {
            setUserName(value);
        }
    };

    // handle blur event, check if the input is empty
    const handleBlur = (e) => {
        // Getting the name of the input which triggered the blur event
        const { name, value } = e.target;

        // Check if the input is empty and set the error message
        if (value.trim() === '') {
            if (name === 'email') {
                setEmailErrorMessage(`Email is a required field.`);
            } else if (name === 'userName') {
                setUserNameErrorMessage(`Name is a required field.`);
            } else {
                setMessageErrorMessage(`Text-area is a required field.`);
            }
        } else {
            if (name === 'email') {
                setEmailErrorMessage('');
            } else if (name === 'userName') {
                setUserNameErrorMessage('');
            } else {
                setMessageErrorMessage('');
            }
        }
    };
    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        setErrorMessage('');
        setEmailErrorMessage('');
        setUserNameErrorMessage('');
        setMessageErrorMessage('');

        // First we check to see if the email is not valid. If so, we set an error message to be displayed on the page.
        if (!emailCheck(email)) {
            setErrorMessage('Email is not valid');
            return;
        }
        if (userName.length < 3) {
            setErrorMessage('User name is not valid, must have at least 3 characters');
            return;
        }
        if (message.length < 10) {
            setErrorMessage('Message is not valid, must have at least 10 characters');
            return;
        }

        alert(`Hello ${userName}, we will content you soon!`);

        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setUserName('');
        setMessage('');
        setEmail('');
    };


    return (
        <div className='container-fluid' style={{ minHeight: "85vh", color: 'white', backgroundImage: `url("${backgroundImage}")` }}>
            <div className="container text-center p-5" id="outer-from">
                <h1 id="contact-title">Contact</h1>
                <br />
                <h4>Hello {userName}, please share your thoughts with me!</h4>
                <form className="form" onSubmit={handleFormSubmit}>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">E-mail:</span>
                        <input
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            type="email"
                            placeholder="Email address"
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            // check if the input is empty
                            onBlur={handleBlur}
                        />
                    </div>
                    <span className="error-text">{emailErrorMessage}</span>
                    <br />
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Name:</span>
                        <input
                            value={userName}
                            name="userName"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Name"
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onBlur={handleBlur}
                        />
                    </div>
                    <span className="error-text">{userNameErrorMessage}</span>
                    <br />
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default"> Text :</span>
                        <input
                            value={message}
                            name="message"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Leave a message here"
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onBlur={handleBlur}
                        />
                    </div>
                    <span className="error-text">{messageErrorMessage}</span>
                    <br />
                    <button type="submit" className="btn btn-secondary btn-lg">Submit</button>
                </form>
            </div>
            <div className="container text-center">
                {errorMessage && (
                    <div style={{ padding: '10px' }}>
                        <p className="error-text1" style={{ fontSize: '20px' }}>{errorMessage}</p>
                    </div>
                )}
            </div>
        </div>
    );
}