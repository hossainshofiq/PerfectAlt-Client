import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Contact = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // You can process form data here if needed

        Swal.fire({
            title: 'Message Sent!',
            text: 'We have received your message. Thank you!',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            navigate('/');
        });
    };

    return (
        <div className="min-h-screen bg-base-200 py-10 px-4 md:px-10 lg:px-20">
            <div className="max-w-4xl mx-auto bg-base-100 p-8 rounded-xl shadow-md">
                <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
                <p className="mb-8 text-center text-gray-500">
                    Have a question, feedback, or need help? Fill out the form below and we well get back to you shortly.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Subject"
                        className="input input-bordered w-full"
                        required
                    />
                    <textarea
                        className="textarea textarea-bordered w-full h-32"
                        placeholder="Your Message"
                        required
                    ></textarea>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary px-8">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
