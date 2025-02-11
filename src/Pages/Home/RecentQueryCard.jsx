import React from 'react';
import { Link } from 'react-router-dom';

const RecentQueryCard = ({ query }) => {
    const { _id, productImageUrl, productName, productBrand, queryTitle, currentDateTime, productDescription } = query;

    // Function to format the date and time
    const formatDateTime = (isoDate) => {
        const date = new Date(isoDate);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${day}-${month}-${year}, ${hours}:${minutes}:${seconds}`;
    };

    return (
        <div className="card bg-white border rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 p-4">
            {/* <div className="bg-white shadow-lg hover:shadow-xl rounded-lg p-6 transition-transform transform hover:-translate-y-1"> */}

            <figure className="flex justify-center">
                <img
                    className="w-48 h-48 object-contain rounded-md"
                    src={productImageUrl}
                    alt={`${productName}`}
                />
            </figure>

            <div className="text-center space-y-4">
                <h2 className="text-lg font-bold text-gray-700 truncate">{productName}</h2>
                <h2 className="text-md text-gray-500 font-medium truncate">{productDescription}</h2>
                {/* <h3 className="text-md text-gray-500 font-medium">{productBrand}</h3> */}
                {/* <h3 className="text-md text-gray-500 font-medium">{queryTitle}</h3> */}
                {/* <h3 className="text-md text-gray-500 font-medium">
                    {formatDateTime(currentDateTime)}
                </h3> */}

                <div className="card-actions justify-center mt-4">
                    <Link to={`/recommendationForm/${query._id}`}><button className="btn btn-success px-4 py-2  text-white rounded-md shadow">
                        See More
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default RecentQueryCard;


