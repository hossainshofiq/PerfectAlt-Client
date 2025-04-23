import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className="min-h-screen bg-base-200 py-10 px-4 md:px-10 lg:px-20">
            <div className="max-w-4xl mx-auto bg-base-100 p-8 rounded-xl shadow-md">
                <h2 className="text-3xl font-bold mb-6 text-center">Terms & Conditions</h2>
                <p className="mb-4">
                    Welcome to our Product Recommendation Platform. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">1. User Accounts</h3>
                <p className="mb-4">
                    You must create an account using valid information. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your device.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">2. Content & Queries</h3>
                <p className="mb-4">
                    Users may post product queries and recommendations. Content must be original, respectful, and relevant. Any form of spam, offensive, or misleading information will be removed.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">3. Intellectual Property</h3>
                <p className="mb-4">
                    All content, logos, and platform design are the property of the platform. Do not copy, reproduce, or distribute our content without permission.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">4. Data & Privacy</h3>
                <p className="mb-4">
                    We respect your privacy. Personal data is protected and only used to enhance your experience on our platform. Read our Privacy Policy for more details.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">5. Limitation of Liability</h3>
                <p className="mb-4">
                    We are not liable for any losses or damages arising from the use of this platform. Users are responsible for verifying any product-related advice they receive.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">6. Modification of Terms</h3>
                <p className="mb-4">
                    We reserve the right to modify these terms at any time. Continued use of the platform constitutes your agreement to the updated terms.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">7. Contact</h3>
                <p>
                    If you have any questions about these Terms & Conditions, feel free to contact us via the <a href='/contact' className="text-primary font-semibold">Contact</a> page.
                </p>
            </div>
        </div>
    );
};

export default TermsAndConditions;
