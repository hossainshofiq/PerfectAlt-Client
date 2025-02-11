import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import slider1 from '../../assets/HomeSliderImages/xiaomiPhone.jpg'
import slider2 from '../../assets/HomeSliderImages/laptop3.jpg'
import slider3 from '../../assets/HomeSliderImages/watch.jpg'
import slider4 from '../../assets/HomeSliderImages/iPhone.jpg'

const Slider = () => {
    return (
        <div className=''>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
            >
                {/* slider 1 */}
                <SwiperSlide
                    className="h-[80vh] lg:h-[90vh] bg-center bg-cover"
                    style={{ backgroundImage: `url(${slider1})` }}>
                    <div className="max-w-sm md:max-w-md pl-3 md:pl-8 lg:pl-10 py-48 md:py-[196px] lg:py-[184px] text-left text-white">
                        <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold bg-slate-500 bg-opacity-70 rounded-md p-2">Redmi Note 13Pro+</h1>
                        <p className="mb-5 font-semibold text-white bg-slate-500 bg-opacity-70 rounded-md p-2">
                            The Xiaomi Redmi Note 13 Pro+ is a mid-range smartphone featuring a 6.7-inch AMOLED display with 120Hz refresh rate, 200MP main camera, and 5000mAh battery with 120W fast charging.
                        </p>
                        <Link to='/queries'>
                            <button className="btn bg-green-500 text-white rounded-md shadow hover:bg-green-600 focus:ring">Explore our Product Queries</button>
                        </Link>
                    </div>
                </SwiperSlide>

                {/* slider 2 */}
                <SwiperSlide
                    className="relative h-[80vh] lg:h-[90vh] w-full bg-center bg-cover"
                    style={{ backgroundImage: `url(${slider2})` }}>
                    <div className="max-w-sm md:max-w-md pl-3 md:pl-8 lg:pl-10 py-[202px] md:py-[196px] lg:py-52 text-left text-black">
                        <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold bg-slate-500 bg-opacity-70 rounded-md p-2">Acer laptop</h1>
                        <p className="mb-5 font-semibold bg-slate-500 bg-opacity-70 rounded-md p-2">
                            Acer offers a diverse range of laptops, including the versatile Aspire series, designed for everyday use with the latest hardware from Intel, AMD, and NVIDIA.

                        </p>
                        <Link to='/queries'>
                            <button className="btn bg-green-500 text-white rounded-md shadow hover:bg-green-600 focus:ring">Explore our Product Queries</button>
                        </Link>
                    </div>
                </SwiperSlide>

                {/* slider 3 */}
                <SwiperSlide
                    className="h-[80vh] lg:h-[90vh] bg-center bg-cover"
                    style={{ backgroundImage: `url(${slider3})` }}>
                    <div className="max-w-sm md:max-w-md pl-3 md:pl-8 lg:pl-10 py-[202px] md:py-[208px] lg:py-[220px] text-left text-black">
                        <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold bg-slate-500 bg-opacity-70 rounded-md p-2">Stylish Watch</h1>
                        <p className="mb-5 font-semibold bg-slate-500 bg-opacity-70 rounded-md p-2">
                            A watch is a portable timepiece designed to be worn on the wrist or carried in a pocket,keep track of time throughout their daily activities.
                        </p>
                        <Link to='/queries'>
                            <button className="btn bg-green-500 text-white rounded-md shadow hover:bg-green-600 focus:ring">Explore our Product Queries</button>
                        </Link>
                    </div>
                </SwiperSlide>

                {/* slider 4 */}
                <SwiperSlide
                    className="h-[80vh] lg:h-[90vh] bg-center bg-cover"
                    style={{ backgroundImage: `url(${slider4})` }}>
                    <div className="max-w-sm md:max-w-md pl-3 md:pl-8 lg:pl-10 py-[202px] md:py-[196px] lg:py-52 text-left text-white">
                        <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold bg-slate-500 bg-opacity-70 rounded-md p-2">IPhone</h1>
                        <p className="mb-5 font-semibold bg-slate-500 bg-opacity-70 rounded-md p-2">
                            The iPhone 16 series introduces new features such as the Camera Control button and the Action button, enhancing user experience and functionality.
                        </p>
                        <Link to='/queries'>
                            <button className="btn bg-green-500 text-white rounded-md shadow hover:bg-green-600 focus:ring">Explore our Product Queries</button>
                        </Link>
                    </div>
                </SwiperSlide>

            </Swiper>


        </div>
    );
};

export default Slider;