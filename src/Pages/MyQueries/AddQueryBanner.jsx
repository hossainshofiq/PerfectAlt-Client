import React from 'react';
import { motion } from 'motion/react';
import { easeOut } from 'motion';
import { Link } from 'react-router-dom';
import image1 from '../../assets/addQueryBannerImage/addQueryIMG.jpg'
import image2 from '../../assets/addQueryBannerImage/addQueryIMG2.jpg'


const AddQueryBanner = () => {
    return (
        <div className="hero bg-blue-500 min-h-96">
            <div className="hero-content flex-col lg:flex-row">
                <div className='flex-1'>

                    <motion.img
                        animate={{ y: [50, 100, 50] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        src={image1}
                        alt='Add Query1'
                        className="max-w-sm rounded-3xl md:rounded-[32px] lg:rounded-r-[40px] lg:rounded-t-[40px] shadow-2xl mb-10 w-40 md:72 lg:w-72" />
                    <motion.img
                        animate={{ x: [90, 120, 90] }}
                        transition={{ duration: 10, delay: 5, repeat: Infinity }}
                        src={image2}
                        alt='Add Query2'
                        className="max-w-sm rounded-3xl md:rounded-[32px] lg:rounded-t-[40px] lg:rounded-br-[40px] shadow-2xl mt-10 w-36 md:w-64 lg:w-64" />

                </div>
                <div className='flex-1 text-white'>
                    <motion.h1
                        // animate={{ y: -20 }}
                        // transition={{ duration: 2, delay: 1, ease: easeOut, repeat: Infinity }}
                        className="text-5xl font-bold">Add Your
                        <motion.span
                            animate={{ color: ['#ff5861', '#00a96e', '#2563eb'] }}
                            transition={{ duration: 1.75, repeat: Infinity }}
                        >Queries</motion.span></motion.h1>
                    <p className="py-6">
                    Find the perfect product tailored to your needs!
                    </p>
                    <Link to='/addQuery'>
                        <motion.button
                            whileHover={{ scale: 1.20 }}
                            whileTap={{ scale: 0.75 }}
                            className="btn btn-success rounded-md shadow text-white">Add Queries</motion.button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AddQueryBanner;