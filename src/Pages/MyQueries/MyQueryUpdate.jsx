import React from 'react';
import useAuthHook from '../../Hooks/useAuthHook';
import axios from 'axios';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaArrowLeft } from 'react-icons/fa';

const MyQueryUpdate = () => {
    const { user } = useAuthHook();
    const query = useLoaderData();
    const navigate = useNavigate();

    const { _id, productName, productBrand, productImageUrl, queryTitle, boycottingReasonDetails, productDescription } = query;

    const handleUpdateQuery = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const updatedQuery = Object.fromEntries(formData.entries());

        axios.put(`https://product-recommendation-system-server-zeta.vercel.app/queries/${_id}`, updatedQuery)
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Query Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    });
                    navigate('/myQueries');
                }
            });
    };

    return (
        <div>
            <div className="relative w-full h-44 flex items-center justify-center text-center bg-blue-400">
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="flex flex-col gap-2">
                    <h1 className="relative text-2xl md:text-3xl lg:text-4xl text-white font-bold">Query Update</h1>
                    <p className=" font-semibold text-black">PerfectAlt / Queries / Update query</p>
                </div>
            </div>
            <div className="w-11/12 mx-auto px-4 py-8">
                <div className='flex flex-col items-center'>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                        Update Query: <span className="text-primary">{productName}</span>
                    </h1>

                    <Link to="/myQueries">
                        <button className="btn btn-outline flex items-center gap-2 mb-6">
                            <FaArrowLeft></FaArrowLeft> Back to My Queries
                        </button>
                    </Link>
                </div>

                <div className="p-6 rounded-lg shadow-lg border">
                    <form onSubmit={handleUpdateQuery} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Product Name */}
                        <div className="form-control col-span-1">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input
                                defaultValue={productName}
                                name="productName"
                                type="text"
                                placeholder="Enter product name"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Product Brand */}
                        <div className="form-control col-span-1">
                            <label className="label">
                                <span className="label-text">Product Brand</span>
                            </label>
                            <input
                                defaultValue={productBrand}
                                name="productBrand"
                                type="text"
                                placeholder="Enter product brand"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Product Image-URL */}
                        <div className="form-control col-span-1">
                            <label className="label">
                                <span className="label-text">Product Image-URL</span>
                            </label>
                            <input
                                defaultValue={productImageUrl}
                                name="productImageUrl"
                                type="url"
                                placeholder="Enter product image URL"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Product Description */}
                        <div className="form-control col-span-1">
                            <label className="label">
                                <span className="label-text">Product Description</span>
                            </label>
                            <input
                                defaultValue={productDescription}
                                name="productDescription"
                                type="text"
                                placeholder="Enter product description"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Query Title */}
                        <div className="form-control col-span-1">
                            <label className="label">
                                <span className="label-text">Query Title</span>
                            </label>
                            <input
                                defaultValue={queryTitle}
                                name="queryTitle"
                                type="text"
                                placeholder="Enter your query title"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Boycotting Reason */}
                        <div className="form-control col-span-1">
                            <label className="label">
                                <span className="label-text">Boycotting Reason</span>
                            </label>
                            <input
                                defaultValue={boycottingReasonDetails}
                                name="boycottingReasonDetails"
                                type="text"
                                placeholder="Describe the reason of boycott"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* User Image-URL */}
                        <div className="form-control col-span-1 md:col-span-2">
                            <label className="label">
                                <span className="label-text">User Image-URL</span>
                            </label>
                            <input
                                defaultValue={user?.photoURL}
                                disabled
                                name="userImageUrl"
                                type="url"
                                placeholder="User profile image URL"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control col-span-1 md:col-span-2">
                            <button className="btn btn-success w-full text-white rounded-md shadow">
                                Update Query
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyQueryUpdate;
