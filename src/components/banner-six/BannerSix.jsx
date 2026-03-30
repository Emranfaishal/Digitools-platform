import React from 'react';

const BannerSix = () => {
    return (
        <div className='bg-linear-to-t from-sky-500 to-indigo-500 p-30 mt-10'>
            <div className='text-center space-y-5 text-white'>
                <h1 className='text-4xl font-bold'>Ready to Transform Your Workflow?</h1>
                <p >Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
                <div className='flex justify-center items-center gap-2'>
                    <button className="btn bg-white rounded-full mr-5">Explore Products</button>
                    <button className=" btn rounded-full bg-blue-500 text-white px-4 py-2">View Pricing</button>
                </div>
                <p>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default BannerSix;