import React from "react";

const About = () => {
    return (
        <div>
            <div style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2016/09/22/10/44/banner-1686943_1280.jpg')" }} className="relative w-full h-64 flex items-center justify-center text-center text-white bg-cover bg-center">
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-4xl font-bold">About PerfectAlt</h1>
            </div>

            {/* About Section */}
            <div className="w-10/12 mx-auto my-12 p-6 bg-white shadow-lg rounded-lg border">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">What is PerfectAlt?</h2>
                <p className="text-gray-600 leading-relaxed">
                    PerfectAlt is an innovative Product Recommendation Platform designed to help users explore, discuss,
                    and discover the best alternatives for various products. Whether you're searching for top-rated
                    gadgets, must-have lifestyle items, or tech solutions, our platform connects you with real user
                    insights and valuable suggestions to make informed decisions.
                </p>

                <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-4">Why Choose PerfectAlt?</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>🔍 <strong>Discover Alternatives:</strong> Find the best product recommendations based on real user queries.</li>
                    <li>💬 <strong>Community Engagement:</strong> Join discussions, ask for recommendations, and share your own experiences.</li>
                    <li>📝 <strong>Manage Queries:</strong> Easily add, update, and delete your product-related queries and suggestions.</li>
                    <li>🚀 <strong>Trusted Insights:</strong> Get expert opinions and community-driven suggestions before making a purchase.</li>
                </ul>

                <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-4">How It Works?</h2>
                <p className="text-gray-600 leading-relaxed">
                    Using PerfectAlt is simple! Create an account, post a query about a product you're looking for,
                    browse existing recommendations, and engage with the community by providing your own insights.
                    Our platform ensures a seamless experience with easy-to-use features and an intuitive interface.
                </p>

                <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-4">Join Us Today!</h2>
                <p className="text-gray-600 leading-relaxed">
                    Become a part of a growing community that values smart shopping and informed decisions. Sign up now
                    and start exploring the best product alternatives with PerfectAlt!
                </p>
            </div>
        </div>
    );
};

export default About;

