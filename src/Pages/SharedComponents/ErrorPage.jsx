import React from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import errorImage from '../../assets/error_page.png';
import { FiHome } from 'react-icons/fi';

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen space-y-3">
            <img className="w-[400px] md:w-[550px] h-auto" src={errorImage} alt="Error" />
            <Link to="/">
                <button className="btn btn-success rounded-md text-lg text-white flex items-center gap-2">
                    {/* <FaArrowAltCircleLeft></FaArrowAltCircleLeft> Back to Home */}
                    <FiHome></FiHome> Back to Home
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;

