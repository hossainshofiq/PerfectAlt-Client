import React from "react";

const About = () => {
    return (
        <div>
            {/* Banner Section */}
            <div
                className="relative w-full h-64 flex items-center justify-center text-center text-white bg-cover bg-center"
                style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2016/09/22/10/44/banner-1686943_1280.jpg')" }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-4xl font-bold">About Our PerfectAlt</h1>
            </div>

            {/* About Section */}
            <div className="max-w-4xl mx-auto my-12 p-6 bg-white shadow-lg rounded-lg border">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">What is Our Platform?</h2>
                <p className="text-gray-600 leading-relaxed">
                    Welcome to our Product Recommendation Platform, where users can explore, discuss, and discover the best alternatives for their favorite products.
                    Whether you're searching for the best gadgets, lifestyle products, or tech recommendations, our platform helps you make informed decisions based on real user queries and suggestions.
                </p>

                <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-4">Why Use Our Platform?</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>🔍 Find the best product recommendations based on user queries.</li>
                    <li>💬 Engage in discussions by adding your own queries and recommendations.</li>
                    <li>📝 Manage your queries and recommendations easily.</li>
                    <li>🚀 Get trusted opinions before making a purchase.</li>
                </ul>
            </div>
        </div>
    );
};

export default About;
