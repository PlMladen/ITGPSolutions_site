import React from 'react'
import { useContext } from "react";
import { LanguageContext } from '../LanguageContext';

export default function Contact() {
    let language = useContext(LanguageContext)['language'];
    if (language == "serbian"){
        return (
        <div>
            Contact
        </div>
    );
    }
    if(language == "english") {
        return (
            <div>
                <section id="contact" class="contact-section">
                    <div class="container">
                        <h2>Contact Us</h2>
                        <p>If you have questions or need custom software solutions, feel free to get in touch with us!</p>
                        <form class="contact-form" action="submit_form.php" method="POST">
                            <div class="form-group">
                                <label for="name">Your Name</label>
                                <input type="text" id="name" name="name" placeholder="Enter your name" required />
                            </div>
                            <div class="form-group">
                                <label for="email">Your Email</label>
                                <input type="email" id="email" name="email" placeholder="Enter your email" required />
                            </div>
                            <div class="form-group">
                                <label for="message">Your Message</label>
                                <textarea id="message" name="message" rows="5" placeholder="Write your message" required></textarea>
                            </div>
                            <button type="submit" class="btn-submit">Send Message</button>
                        </form>
                    </div>
                </section>
            </div>
        );
    }
    if(language == "german") {
        return (
            <div>
                Contactd
            </div>
        );
    }
}
