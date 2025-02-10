import React, { useState } from "react";

const reviews = [
    {
        id: 1,
        name: "John Doe",
        review: "This platform helped me find the best budget-friendly smartphone. The recommendations were spot on!",
        image: "https://i.ibb.co/SyJ2S2J/team-1.jpg",
    },
    {
        id: 2,
        name: "Jane Smith",
        review: "I love how I can ask for recommendations and get real user feedback. Super helpful for tech purchases!",
        image: "https://i.ibb.co/wrGY5DV/team2.webp",
    },
    {
        id: 3,
        name: "Mike Brown",
        review: "Finding the right laptop for my work was easy. The recommendation system works great!",
        image: "https://i.ibb.co/rt65nT1/team-3.jpg",
    },
    {
        id: 4,
        name: "Emma Wilson",
        review: "I was confused between two smartwatches, but the suggestions from users helped me decide!",
        image: "https://i.ibb.co/kxWfTgB/team4.jpg",
    },
    {
        id: 5,
        name: "David Miller",
        review: "A great platform for tech lovers! You can easily ask, recommend, and discuss different products.",
        image: "https://i.ibb.co/Y0pJ6Jz/team5.jpg",
    },
    {
        id: 6,
        name: "Sophia Lee",
        review: "The ability to edit and delete my recommendations is very useful. Love the user-friendly interface!",
        image: "https://i.ibb.co/ZK1Cn0Y/team6.jpg",
    },
    {
        id: 7,
        name: "Michael Johnson",
        review: "Great community-driven product suggestions! I found the perfect gaming mouse thanks to this site.",
        image: "https://i.ibb.co/1McpD91/team7.jpg",
    }
];

const CustomerReviews = () => {
    const [showAll, setShowAll] = useState(false);

    return (
        <div className="bg-white pt-10">
            <div className="w-10/12 mx-auto text-center">

                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">What Our Users Say</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {(showAll ? reviews : reviews.slice(0, 4)).map((review, id) => (
                        <div key={id} className="bg-blue-300 shadow-lg rounded-lg p-6 text-left transition-transform transform hover:-translate-y-2" >
                            <p className="text-gray-700 italic">"{review.review}"</p>
                            <div className="mt-4 flex items-center">
                                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <h4 className="text-sm font-bold text-gray-800">{review.name}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button onClick={() => setShowAll(!showAll)} className="mt-8 px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded hover:bg-green-600 transition" >
                    {showAll ? "Show Less" : "Read More Reviews"}
                </button>
            </div>
        </div>
    );
};

export default CustomerReviews;
