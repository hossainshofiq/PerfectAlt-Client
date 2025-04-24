import React from 'react';

const trendingCategories = [
    {
        name: 'Smartphones',
        image: 'https://i.ytimg.com/vi/cJKQdzopuco/maxresdefault.jpg',
        description: 'Latest mobile phones with smart features.\nTop picks and user reviews.'
    },
    {
        name: 'Laptops',
        image: 'https://assets2.razerzone.com/images/pnx.assets/7fb8deac5d3c73e360bc687ed62be6cf/gaming-laptops-og-image.webp',
        description: 'Powerful laptops for work and play.\nDiscover trending models now.'
    },
    {
        name: 'Wearables',
        image: 'https://www.wellsteps.com/blog/wp-content/uploads/2016/06/wrist-wearables.jpg',
        description: 'Track fitness and health in style.\nSmartwatches and fitness bands.'
    },
    {
        name: 'Gaming',
        image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
        description: 'Top consoles, accessories, and gear.\nFor casual to pro-level gamers.'
    },
    {
        name: 'Home Appliances',
        image: 'https://cdn.firstcry.com/education/2023/01/13101355/Names-Of-Household-Appliances-In-English.jpg',
        description: 'Smart solutions for modern homes.\nExplore trending household devices.',
    },
];

const TrendingCategories = () => {
    return (
        <div className="w-11/12 mx-auto py-10">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-green-500">Trending Categories</h2>
                <p className="text-sm md:text-base">Explore the most searched and discussed product types</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {trendingCategories.map((category, idx) => (
                    <div key={idx} className="rounded-xl shadow hover:shadow-lg transition p-4 text-center border">
                        <img src={category.image} alt={category.name} className="w-full h-32 object-cover rounded-lg mb-3" />
                        <h3 className="text-lg font-semibold">{category.name}</h3>
                        <p className="text-sm text-gray-500 whitespace-pre-line">{category.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingCategories;
