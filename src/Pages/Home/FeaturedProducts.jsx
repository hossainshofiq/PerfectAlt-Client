import React, { useState } from "react";

const featuredQueries = [
    {
        id: 1,
        title: "Best Budget Smartphones 2024",
        description: "Explore the top-rated budget smartphones under $300 with user recommendations.",
        image: "https://assets.newatlas.com/dims4/default/2fa4926/2147483647/strip/true/crop/1920x1079+0+0/resize/1920x1079!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2F2017-best-smartphones-specs-features-comparison-1.jpg",
    },
    {
        id: 2,
        title: "Top Wireless Earbuds for Music Lovers",
        description: "Discover the best wireless earbuds with excellent sound quality and battery life.",
        image: "https://assets.newatlas.com/dims4/default/2fa4926/2147483647/strip/true/crop/1920x1079+0+0/resize/1920x1079!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2F2017-best-smartphones-specs-features-comparison-1.jpg",
    },
    {
        id: 3,
        title: "High-Performance Laptops for Developers",
        description: "Find the best laptops with powerful specs tailored for programming and development.",
        image: "https://www.ryans.com/storage/blogs/Laptops-1689252776.jpg",
    },
    {
        id: 4,
        title: "Gaming Monitors for Ultimate Experience",
        description: "Check out the best gaming monitors with high refresh rates and low response time.",
        image: "https://cdn.mos.cms.futurecdn.net/FUYAofwatKBmPuUzXDNM83.jpg",
    },
    {
        id: 5,
        title: "Best Smartwatches for Fitness Enthusiasts",
        description: "Compare top-rated smartwatches with fitness tracking and health monitoring features.",
        image: "https://static1.anpoimages.com/wordpress/wp-content/uploads/2024/07/best-android-smartwatches.jpg",
    },
];

const FeaturedProducts = () => {
    const [showAll, setShowAll] = useState(false);

    return (
        <div className="pt-10">
            <div className="bg-gray-100 py-10">
                <div className="w-11/12 mx-auto text-center">
                    <div className="mb-12">
                        <p className="text-green-500 uppercase text-sm font-semibold">Featured Queries</p>
                        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800">Popular Product Recommendations</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {(showAll ? featuredQueries : featuredQueries.slice(0, 3)).map(({ id, title, description, image }) => (
                            <div key={id} className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:-translate-y-1">
                                <img src={image} alt={title} className="w-full object-cover rounded-lg mb-4" />
                                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                                <p className="text-gray-600 mt-2">{description}</p>
                                {/* <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition">View Details</button> */}
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="btn btn-success mt-8 px-6 py-3 text-white rounded"
                    >
                        {showAll ? "Show Less" : "View More"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;
