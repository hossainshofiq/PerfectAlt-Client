import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-base-200 py-10 px-4 md:px-10 lg:px-20">
            <div className="max-w-4xl mx-auto bg-base-100 p-8 rounded-xl shadow-md">
                <h2 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h2>
                
                <p className="mb-4">
                    This Privacy Policy outlines how we collect, use, and protect your information when you use our Product Recommendation Platform. By using our platform, you agree to the practices described in this policy.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h3>
                <p className="mb-4">
                    We collect personal information you provide during registration, such as your email address and display name. We also collect activity data like product queries, recommendations, and interactions.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h3>
                <p className="mb-4">
                    We use your information to personalize your experience, improve our platform, ensure secure authentication with JWT, and communicate updates or changes to our services.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">3. Data Storage & Security</h3>
                <p className="mb-4">
                    Your data is securely stored using Firebase Authentication and MongoDB. We implement strong security measures to protect against unauthorized access, alteration, or disclosure.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">4. Sharing of Information</h3>
                <p className="mb-4">
                    We do not sell or share your personal information with third parties for marketing purposes. Your data may be accessed internally for maintenance or legal compliance purposes.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">5. User Rights</h3>
                <p className="mb-4">
                    You have the right to access, update, or delete your account information at any time. If you wish to deactivate your account, you can contact us through the Contact page.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">6. Cookies & Tracking</h3>
                <p className="mb-4">
                    We use cookies and analytics to monitor site traffic and usage patterns. These tools help us enhance user experience but do not collect personally identifiable information.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">7. Changes to this Policy</h3>
                <p className="mb-4">
                    We may update this Privacy Policy from time to time. All updates will be posted on this page. Continued use of the platform means you accept the new terms.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">8. Contact Us</h3>
                <p>
                    If you have any questions or concerns about this Privacy Policy, please contact us via the <a href='/contact' className="text-primary font-semibold">Contact</a> page.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
