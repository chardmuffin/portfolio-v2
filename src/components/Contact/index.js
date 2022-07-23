import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {

    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const { name, email, message } = formState;

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

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h1>Contact me</h1>
            <p>
                Please leave me a message!
            </p>
            <form id="contact-form" onSubmit={handleSubmit}>
                <p></p>
                <div>
                    <label htmlFor="Name">Name:</label>
                    <input type="text" name="Name" defaultValue={name} onBlur={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="Email">Email address:</label>
                    <input type="email" name="Email" defaultValue={email} onBlur={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="Message">Message:</label>
                    <textarea name="Message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;