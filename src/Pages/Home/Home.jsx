import React from 'react';
import Slider from './Slider';
import RecentQueries from './RecentQueries';
import HighlighterBrands from './HighlighterBrands';
import ContactUs from './ContactUs';
import Faq from './Faq';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div className=''>
            <Slider></Slider>
            <RecentQueries></RecentQueries>
            <HighlighterBrands></HighlighterBrands>
            <Faq></Faq>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;