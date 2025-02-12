import React from 'react';
import Slider from './Slider';
import RecentQueries from './RecentQueries';
import HighlighterBrands from './HighlighterBrands';
import ContactUs from './ContactUs';
import Faq from './Faq';
import Reviews from './Reviews';
import FeaturedProducts from './FeaturedProducts';

const Home = () => {
    return (
        <div className='bg-base-100'>
            <Slider></Slider>
            <RecentQueries></RecentQueries>
            <FeaturedProducts></FeaturedProducts>
            <HighlighterBrands></HighlighterBrands>
            <Faq></Faq>
            <Reviews></Reviews>
            {/* <ContactUs></ContactUs> */}
        </div>
    );
};

export default Home;