import React, { useState, useRef } from "react";
import { validateEmail } from "../../utils/helpers";
import emailjs from "emailjs-com";
import FadeIn from "../FadeIn";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function ContactForm({ setCurrentTab }) {

    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const { name, email, message } = formState;
    const form = useRef();

    const [errorMessage, setErrorMessage] = useState("");

    function handleChange(e) {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage("Your email is invalid.");
            } else {
                setErrorMessage("");
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage("");
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function sendEmail(e) {
        e.preventDefault();

        if (formState.name !== "" && formState.email !== "" && formState.message !== "") {
            emailjs.sendForm('service_e8d0896', 'template_zmvhf4w', form.current, 'NcJNWdfU8mGyB-cao')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        } else {
            setErrorMessage("Please complete the form.")
        }
    }

    return (
        <section className="contact">
            <FadeIn setCurrentTab={setCurrentTab}>
                <h1 className='contact centerText'>contact me</h1>
                <div className='underline small'></div>
            </FadeIn>
            <FadeIn setCurrentTab={setCurrentTab}>
                <form ref={form} id="contact contact-form" onSubmit={sendEmail}>
                    <a href={'https://www.linkedin.com/in/richard-huffman-52806b137'} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /> </a>
                    
                    <div className="form-elements-container">
                        <div>
                            <label htmlFor="name">Name:</label>
                            <br></br>
                            <input type="text" name="name" defaultValue={name} onBlur={handleChange}></input>
                        </div>
                        <div>
                            <label htmlFor="email">Email address:</label>
                            <br></br>
                            <input type="email" name="email" defaultValue={email} onBlur={handleChange}></input>
                        </div>
                        <div>
                            <label htmlFor="message">Message:</label>
                            <br></br>
                            <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                        </div>
                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </FadeIn>
        </section>
    );
}

export default ContactForm;