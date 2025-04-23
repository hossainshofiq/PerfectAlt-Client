import React from 'react';

const Imprint = () => {
    return (
        <div className="min-h-screen bg-base-200 py-10 px-4 md:px-10 lg:px-20">
            <div className="max-w-4xl mx-auto bg-base-100 p-8 rounded-xl shadow-md">
                <h2 className="text-3xl font-bold mb-6 text-center">Imprint</h2>

                <h3 className="text-xl font-semibold mb-2">Service Provider</h3>
                <p className="mb-4">
                    Product Recommendation Platform  
                    <br />
                    Developed and maintained by: Md. Ali Hossain Shofiq  
                    <br />
                    Location: Dhaka, Bangladesh
                </p>

                <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
                <p className="mb-4">
                    Email: support@productrecplatform.com  
                    <br />
                    Phone: +880 1234-567890
                </p>

                <h3 className="text-xl font-semibold mb-2">Responsible for Content</h3>
                <p className="mb-4">
                    Md. Ali Hossain Shofiq  
                    <br />
                    Web Developer & Platform Owner
                </p>

                <h3 className="text-xl font-semibold mb-2">Disclaimer</h3>
                <p className="mb-4">
                    All content on this platform has been created with great care. However, we do not guarantee the accuracy, completeness, or timeliness of the content. As a service provider, we are responsible for our own content, but not obliged to monitor third-party information transmitted or stored on our platform.
                </p>

                <h3 className="text-xl font-semibold mb-2">Copyright</h3>
                <p className="mb-4">
                    All content and code on this platform is the intellectual property of the developer unless otherwise stated. Reproduction, editing, distribution, or any kind of use beyond the scope of copyright law requires written permission from the author.
                </p>

                <h3 className="text-xl font-semibold mb-2">Legal Notice</h3>
                <p>
                    This platform uses Firebase Authentication, JWT for security, and MongoDB for data storage. All user-generated content must comply with our <a href='/terms&conditions' className="text-primary font-semibold">Terms & Conditions</a>.
                </p>
            </div>
        </div>
    );
};

export default Imprint;
