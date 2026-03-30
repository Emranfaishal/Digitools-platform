import React from 'react';
import BannerOne from './BannerOne';

const BannerTwo = () => {
    return (
        <div className='mt-5'>
            <div className='flex justify-center items-center gap-20 lg:gap-60 bg-linear-to-t from-sky-500 to-indigo-500 p-18 '>
                <div>
                    <h3 className='text-3xl lg:text-7xl font-bold text-white'>50k+</h3>
                    <p className='text-white mt-2'>Active Users</p>
                </div>
                <div>
                    <h3 className='text-3xl lg:text-7xl font-bold text-white'>200+</h3>
                    <p className='text-white mt-2'>Premium Tools</p>
                </div>
                <div>
                    <h3 className='text-3xl lg:text-7xl font-bold text-white'>4.9</h3>
                    <p className='text-white mt-2'>Rating</p>
                </div>
            </div>
            <BannerOne></BannerOne>
        </div>

    );
};

export default BannerTwo;