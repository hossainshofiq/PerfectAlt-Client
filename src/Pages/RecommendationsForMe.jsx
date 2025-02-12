import React, { useEffect, useState } from 'react';
import useAuthHook from '../Hooks/useAuthHook';
import axios from 'axios';
import Spinner from './Spinner';

const RecommendationsForMe = () => {
    const { user } = useAuthHook();
    const [recommendationsForMe, setRecommendationsForMe] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`https://product-recommendation-system-server-zeta.vercel.app/recommendationsForMe?email=${user?.email}`, { withCredentials: true })
            .then(res => {
                setRecommendationsForMe(res.data);
                setLoading(false);
            });
    }, [user.email]);

    if (loading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <div className="relative w-full h-44 flex items-center justify-center text-center text-black bg-green-400">
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="flex flex-col gap-2">
                    <h1 className="relative text-2xl md:text-3xl lg:text-4xl font-bold">Recommendations For Me: {recommendationsForMe.length}</h1>
                    <p className=" font-semibold">PerfectAlt / Recommendation for me</p>
                </div>
            </div>
            <div className="w-11/12 mx-auto text-center my-10">

                <div className="border rounded-md shadow-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full text-left border-collapse">
                            <thead className="bg-blue-600 text-white">
                                <tr>
                                    <th className="px-4 py-2">#</th>
                                    <th className="px-4 py-2">My Product Name</th>
                                    <th className="px-4 py-2">Recommender User Info</th>
                                    <th className="px-4 py-2">Product Image & Name</th>
                                    <th className="px-4 py-2">Recommendation Title</th>
                                    <th className="px-4 py-2">Recommendation Reason</th>
                                    <th className="px-4 py-2">Recommend Date</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-300">
                                {recommendationsForMe.map((recommend, index) => (
                                    <tr
                                        key={recommend._id}
                                        className="hover:bg-gray-100 hover:text-black transition-colors duration-300"
                                    >
                                        <td className="px-4 py-3">{index + 1}</td>
                                        <td className="px-4 py-3">{recommend.productName}</td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-3">
                                                <div>
                                                    <div className="font-bold">
                                                        {recommend?.userName}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {recommend?.userEmail}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-2">
                                                <div className="avatar">
                                                    <div className="mask rounded-full w-16 h-16">
                                                        <img
                                                            src={recommend?.recommendationProductImage}
                                                            alt="Product Avatar"
                                                        />
                                                    </div>
                                                </div>
                                                <span className="">
                                                    {recommend.recommendationProductName}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">{recommend.recommendationTitle}</td>
                                        <td className="px-4 py-3">{recommend.recommendationReason}</td>
                                        <td className="px-4 py-3">{recommend.currentDateTime}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecommendationsForMe;
