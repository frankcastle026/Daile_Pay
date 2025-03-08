import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const EmailForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [subject, setSubject] = useState('');
    const [successMessage, setSuccessMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = 'service_refbbeu';
        const templateId = 'template_antaw4g';
        const publicKey = 'hr8a9xli5hue0-hgj';

        const templateParams = {
            from_name: name,
            from_email: email,
            from_number: phoneNumber,
            subject: subject,
            to_name: 'Dhanesh',
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email Sent Successfully!', response);
                setName('');
                setEmail('');
                setMessage('');
                setPhoneNumber('');
                setSubject('');
                setSuccessMessage(true);
                setTimeout(() => setSuccessMessage(false), 5000);
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    }

    return (
        <div id="Contact" className="mx-auto">
            {successMessage && (
                <div className="bg-green-500 text-white p-2 rounded mb-4 text-center">
                    Mail Sent Successfully!
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Grid container for first two lines */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full p-2 border rounded focus:outline-none focus:border-white bg-white/50"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-2 border rounded focus:outline-none focus:border-white bg-white/50"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="tel"
                        placeholder="Your Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                        className="w-full p-2 border rounded focus:outline-none focus:border-white bg-white/50"
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        className="w-full p-2 border rounded focus:outline-none focus:border-white bg-white/50"
                    />
                </div>

                <textarea
                    placeholder="Your Message"
                    cols="30"
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full p-2 border rounded focus:outline-none focus:border-white bg-white/50"
                ></textarea>

                <button
                    type="submit"
                    className="w-full bg-black text-white py-2 rounded hover:bg-gray-600 transition duration-200"
                >
                    Send
                </button>
            </form>
        </div>
    );
}

export default EmailForm;
