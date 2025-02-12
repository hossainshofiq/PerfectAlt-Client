import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuthHook from '../Hooks/useAuthHook';
import { MdDeleteForever } from 'react-icons/md';
import Swal from 'sweetalert2';
import Spinner from './Spinner';

const MyRecommendations = () => {
    const { user } = useAuthHook();
    const [recommendation, setRecommendation] = useState([]);
    const [reFetch, setReFetch] = useState(1);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://product-recommendation-system-server-zeta.vercel.app/myRecommendations?email=${user?.email}`, { withCredentials: true })
            .then(res => {
                setRecommendation(res.data);
                setLoading(false);
            });
    }, [user.email, reFetch]);

    if (loading) {
        return <Spinner></Spinner>
    }

    const handleDeleteRecommendation = (_id, queryId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then(result => {
            if (result.isConfirmed) {
                fetch(`https://product-recommendation-system-server-zeta.vercel.app/recommendations/${_id}`, {
                    method: 'DELETE',
                })
                    // axios.delete(`https://product-recommendation-system-server-zeta.vercel.app/recommendations/${_id}`)
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            axios.put(`https://product-recommendation-system-server-zeta.vercel.app/decrementByDelete?id=${queryId}`).then(res => {
                                setReFetch(reFetch + 1);
                                Swal.fire({
                                    title: 'Deleted!',
                                    text: 'Your Recommendation has been deleted.',
                                    icon: 'success',
                                });
                            });
                        }
                    });
            }
        });
    };

    return (
        <div>
            <div className="relative w-full h-44 flex items-center justify-center text-center text-white bg-red-400">
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="flex flex-col gap-2">
                    <h1 className="relative text-2xl md:text-3xl lg:text-4xl font-bold">My Recommendations: {recommendation.length}</h1>
                    <p className=" font-semibold">PerfectAlt / My recommendation</p>
                </div>
            </div>
            <div className="w-11/12 mx-auto text-center my-10">
                {/* <h1 className="font-bold text-xl md:text-3xl lg:text-4xl mb-6 text-gray-800">
                    My Recommendations: {recommendation.length}{' '}
                </h1> */}

                <div className="border rounded-md shadow-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full text-left border-collapse">
                            <thead className="bg-blue-600 text-white">
                                <tr>
                                    <th className="px-4 py-2">#</th>
                                    <th className="px-4 py-2">Your Product</th>
                                    <th className="px-4 py-2">Recommended User Info</th>
                                    <th className="px-4 py-2">Product Image & Name</th>
                                    <th className="px-4 py-2">Recommendation Title</th>
                                    <th className="px-4 py-2">Recommendation Reason</th>
                                    <th className="px-4 py-2">Recommend Date</th>
                                    <th className="px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-300">
                                {recommendation.map((recommend, index) => (
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
                                                        {recommend?.recommenderName}
                                                    </div>
                                                    <div className="text-sm">
                                                        {recommend?.recommenderEmail}
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
                                        <td className="flex gap-2 px-4 py-3">
                                            <button onClick={() => handleDeleteRecommendation(recommend._id, recommend.queryId)} className="flex items-center gap-2 btn btn-error text-black rounded-md shadow">
                                                <MdDeleteForever className='text-xl'></MdDeleteForever>
                                                <span>Delete</span>
                                            </button>
                                        </td>
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

export default MyRecommendations;
