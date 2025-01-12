import React, { useState, useEffect, useRef, useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import "./Contact.css";

export default function Contact() {
    const { language } = useContext(LanguageContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [city, setCity] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            firstName,
            lastName,
            email,
            phone,
            company,
            city,
            message
        };

        try {
            const response = await fetch('http://localhost:5000/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message);
            } else {
                alert(`Greška: ${data.message}`);
            }
        } catch (error) {
            console.error('Greška prilikom slanja poruke:', error);
            alert('Došlo je do greške prilikom slanja poruke!');
        }
    };
    

    if (language === "serbian") {
        return (
            <div>
                <section id="contact" className="contact-section py-5">
                    <div className="container">
                        <h2 className="text-center mb-4">Kontaktirajte nas</h2>
                        <p className="text-center mb-5">
                            Ukoliko imate bilo kakvih pitanja ili Vam je potrebno kvalitetno softversko rješenje, budite slobodni da nam pišete!
                        </p>

                        <form onSubmit={handleSubmit} className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="firstName" className="form-label text-start d-block">Ime *</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    name="firstName"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder="Unesite Vaše ime"
                                    required
                                />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="lastName" className="form-label text-start d-block">Prezime *</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    name="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder="Unesite Vaše prezime"
                                    required
                                />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label text-start d-block">E-mail *</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Unesite Vaš E-mail"
                                    required
                                />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="phone" className="form-label text-start d-block">Kontakt telefon (Opciono)</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phone"
                                    name="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Unesite Vaš kontakt telefon"
                                />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="company" className="form-label text-start d-block">Ime firme (Opciono)</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="company"
                                    name="company"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                    placeholder="Unesite ime firme"
                                />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="city" className="form-label text-start d-block">Grad (Opciono)</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="city"
                                    name="city"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    placeholder="Unesite ime grada"
                                />
                            </div>

                            <div className="col-12">
                                <label htmlFor="message" className="form-label text-start d-block">Poruka *</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows="5"
                                    placeholder="Unesite Vašu poruku"
                                    required
                                ></textarea>
                            </div>

                            <div className="col-12 text-center">
                                <button type="submit" className="btn btn-primary btn-lg">Pošaljite</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        );
    }

    if (language === "english") {
        return (
            <div>
                <section id="contact" className="contact-section py-5">
                    <div className="container">
                        <h2 className="text-center mb-4">Contact Us</h2>
                        <p className="text-center mb-5">
                            If you have questions or need custom software solutions, feel free to get in touch with us!
                        </p>

                        <form onSubmit={handleSubmit} className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="firstName" className="form-label text-start d-block">First Name *</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    name="firstName"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder="Enter your first name"
                                    required
                                />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="lastName" className="form-label text-start d-block">Last Name *</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    name="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder="Enter your last name"
                                    required
                                />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label text-start d-block">E-mail *</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your E-mail"
                                    required
                                />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="phone" className="form-label text-start d-block">Phone Number (Optional)</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phone"
                                    name="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="company" className="form-label text-start d-block">Company Name (Optional)</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="company"
                                    name="company"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                    placeholder="Enter your company name"
                                />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="city" className="form-label text-start d-block">City (Optional)</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="city"
                                    name="city"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    placeholder="Enter your city"
                                />
                            </div>

                            <div className="col-12">
                                <label htmlFor="message" className="form-label text-start d-block">Message *</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows="5"
                                    placeholder="Write your message"
                                    required
                                ></textarea>
                            </div>

                            <div className="col-12 text-center">
                                <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        );
    }

    if (language === "german") {
        return (
            <div>
                <section id="contact" className="contact-section py-5">
                    <div className="container">
                        <h2 className="text-center mb-4">Kontaktieren Sie uns</h2>
                        <p className="text-center mb-5">
                            Wenn Sie Fragen haben oder eine hochwertige Softwarelösung benötigen, schreiben Sie uns gerne!
                        </p>

                        <form onSubmit={handleSubmit} className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="firstName" className="form-label text-start d-block">Vorname *</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    name="firstName"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder="Geben Sie Ihren Vornamen ein"
                                    required
                                />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="lastName" className="form-label text-start d-block">Nachname *</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    name="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder="Geben Sie Ihren Nachnamen ein"
                                    required
                                />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label text-start d-block">E-Mail *</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Geben Sie Ihre E-Mail-Adresse ein"
                                    required
                                />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="phone" className="form-label text-start d-block">Telefonnummer (Optional)</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phone"
                                    name="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Geben Sie Ihre Telefonnummer ein"
                                />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="company" className="form-label text-start d-block">Firmenname (Optional)</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="company"
                                    name="company"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                    placeholder="Geben Sie den Firmennamen ein"
                                />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="city" className="form-label text-start d-block">Stadt (Optional)</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="city"
                                    name="city"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    placeholder="Geben Sie den Stadtnamen ein"
                                />
                            </div>

                            <div className="col-12">
                                <label htmlFor="message" className="form-label text-start d-block">Nachricht *</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows="5"
                                    placeholder="Geben Sie Ihre Nachricht ein"
                                    required
                                ></textarea>
                            </div>

                            <div className="col-12 text-center">
                                <button type="submit" className="btn btn-primary btn-lg">Senden</button>
                            </div>
                        </form>
                    </div>
                </section>

            </div>
        );
    }
}
