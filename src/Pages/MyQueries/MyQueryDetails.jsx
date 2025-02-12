import React from 'react';
import { Link, useLoaderData, useLocation, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const MyQueryDetails = () => {

    const query = useLoaderData();

    return (
        <div>
            <div className="relative w-full h-44 flex items-center justify-center text-center text-black bg-blue-400">
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="flex flex-col gap-2">
                    <h1 className="relative text-2xl md:text-3xl lg:text-4xl font-bold">Query Details</h1>
                    <p className=" font-semibold text-black">PerfectAlt / Queries / Query details</p>
                </div>
            </div>
            <div className="w-11/12 mx-auto py-10">
                <div className='mx-5'>
                    <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl mb-6">
                        Query Details for: <span className="text-primary">{query?.productName}</span>
                    </h1>
                    <Link to="/myQueries" className="btn btn-outline items-center gap-2 mb-6">
                        <FaArrowLeft className="text-lg" />
                        Back to My Queries
                    </Link>
                </div>

                {/* Card Section */}
                <div className="card lg:card-side bg-base-100 shadow-xl border p-6 mb-10 rounded-md mx-5">
                    <figure className="flex justify-center items-center bg-gray-100 rounded-md p-4">
                        <img
                            className="w-52 h-52 object-cover rounded-lg"
                            src={query?.productImageUrl}
                            alt={query?.productName}
                        />
                    </figure>

                    <div className="card-body flex-1">
                        <h2 className="card-title text-2xl font-bold">{query?.productName}</h2>
                        <p className="">
                            <span className="font-semibold">Brand:</span> {query?.productBrand}
                        </p>
                        <p className="">
                            <span className="font-semibold">Query:</span> {query?.queryTitle}
                        </p>
                        <p className="">
                            <span className="font-semibold">Reason for Boycott:</span>{' '}
                            {query?.boycottingReasonDetails}
                        </p>
                        <p className="">
                            <span className="font-semibold">Product Description:</span>{' '}
                            {query?.productDescription}
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center lg:border-l pl-6 space-y-4">
                        <img
                            className="w-16 h-16 object-cover rounded-full shadow-lg"
                            src={query?.userProfileImage}
                            alt={query?.userName}
                        />
                        <div className="text-center">
                            <p className="font-semibold">{query?.userName}</p>
                            <p className="text-sm">{query?.userEmail}</p>
                        </div>

                        <h4 className='font-medium text-sm md:text-base'>
                            Recommendation Count: {query?.recommendationCount}
                        </h4>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default MyQueryDetails;