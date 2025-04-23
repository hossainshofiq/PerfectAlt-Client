import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyQueryCard = ({ query, queries, setQueries }) => {

    const { _id } = query;

    const handleQueryDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://product-recommendation-system-server-zeta.vercel.app/queries/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Query has been deleted.",
                                icon: "success"
                            });
                            const remainingQueries = queries.filter(qry => qry._id !== _id)
                            setQueries(remainingQueries)
                        }
                    })
            }
        })
    }
    return (

        <div className="card border rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 p-4">
            {/* <div className="bg-white shadow-lg hover:shadow-xl rounded-lg p-6 transition-transform transform hover:-translate-y-1"> */}

            <figure className="flex justify-center">
                <img
                    className="w-48 h-48 object-contain rounded-md"
                    src={query.productImageUrl}
                    alt={`${query.productName}`}
                />
            </figure>

            <div className="text-center space-y-4">
                <h2 className="text-lg font-bold pt-2 truncate">{query.productName}</h2>
                <h2 className="text-md font-medium line-clamp-2">Description: <span className=''> {query.productDescription}</span></h2>
                {/* <h3 className="text-md text-gray-500 font-medium">{productBrand}</h3> */}
                {/* <h3 className="text-md text-gray-500 font-medium">{queryTitle}</h3> */}
                {/* <h3 className="text-md text-gray-500 font-medium">
                            {formatDateTime(currentDateTime)}
                        </h3> */}

                <div className="card-actions flex justify-center space-x-3 mt-2 font-semibold">
                    <Link to={`/myQueries/queryDetails/${_id}`}>
                        <button className="btn bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow">
                            Details
                        </button>
                    </Link>
                    <Link to={`/myQueries/queryUpdate/${_id}`}>
                        <button className="btn btn-success text-white rounded-md shadow">
                            Update
                        </button>
                    </Link>
                    <button
                        onClick={() => handleQueryDelete(_id)}
                        className="btn btn-error text-black rounded-md shadow"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>

        // <div className="card bg-white shadow-lg rounded-md w-full border mx-auto transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
        //     <figure className="px-5 pt-5">
        //         <img
        //             src={query.productImageUrl}
        //             alt={query.productName}
        //             className="rounded-xl w-48 h-48 object-cover"
        //         />
        //     </figure>
        //     <div className="card-body text-center p-5">
        //         <h2 className="text-2xl font-bold text-gray-800">{query.productName}</h2>

        //         {/* <h3 className="text-lg font-semibold text-gray-900">Brand: <span className='text-lg font-semibold text-gray-500'>{query.productBrand}</span></h3> */}

        //         {/* <p className="text-gray-900 font-semibold my-3 truncate">Query Title: <span className='text-gray-600 '>{query.queryTitle}</span></p> */}

        //         {/* <p className="text-gray-900 font-semibold my-3 truncate">Boycott Reason: <span className='text-gray-600 '>{query.boycottingReasonDetails}</span></p> */}

        //         <p className="text-gray-900 font-semibold my-3 truncate">Description: <span className='text-gray-600 '>{query.productDescription}</span></p>
        //         <div className="card-actions flex justify-center space-x-3 mt-2 font-semibold">
        //             <Link to={`/myQueries/queryDetails/${_id}`}>
        //                 <button className="btn bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow">
        //                     Details
        //                 </button>
        //             </Link>
        //             <Link to={`/myQueries/queryUpdate/${_id}`}>
        //                 <button className="btn btn-success text-white rounded-md shadow">
        //                     Update
        //                 </button>
        //             </Link>
        //             <button
        //                 onClick={() => handleQueryDelete(_id)}
        //                 className="btn btn-error text-black rounded-md shadow"
        //             >
        //                 Delete
        //             </button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default MyQueryCard;