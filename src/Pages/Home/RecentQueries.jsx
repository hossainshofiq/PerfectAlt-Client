import React, { useEffect, useState } from 'react';
import RecentQueryCard from './RecentQueryCard';
import axios from 'axios';

const RecentQueries = () => {

    const [recentQueries, setRecentQueries] = useState([]);

    useEffect(() => {
        axios.get('https://product-recommendation-system-server-zeta.vercel.app/recentQueries')
            .then(res => {
                setRecentQueries(res.data);
            })
    }, [])

    return (
        <div className='bg-base-200'>
            <div className='w-11/12 mx-auto text-center py-10'>
                <h1 className='font-bold text-2xl md:text-3xl lg:text-5xl mb-6'>Recent Queries</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {
                        recentQueries.map(query => <RecentQueryCard key={query._id} query={query}></RecentQueryCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default RecentQueries;