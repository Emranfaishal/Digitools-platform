import React from 'react';
import imgOne from '../../assets/user.png'
import imgTwo from '../../assets/package.png'
import imgTree from '../../assets/rocket.png'

const BannerFour = () => {
    return (
        <div className='bg-[#F9FAFC] p-5'>
            <div className='container mx-auto '>
                <div className='mt-10'>
                    <div className='text-center'>
                        <h1 className='text-5xl font-bold text-black'>Get Started in 3 Steps</h1>
                        <p className='text-[#627382] mt-5'>Start using premium digital tools in minutes, not hours.</p>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10'>

                        <div className='card w-full bg-base-100 shadow-sm  p-20 hover:-translate-y-3 duration-300 hover:shadow-xl'>
                            <div className='text-end'>
                                <button className='btn bg-linear-to-t from-sky-500 to-indigo-500  rounded-full mb-5'>01</button>
                            </div>
                            <div className='text-center'>
                                <div className='space-y-3'>
                                    <button className='btn bg-linear-to-t from-sky-50 to-indigo-50  rounded-full h-20 w-20'><img src={imgOne} alt="" /></button>
                                    <h3 className='text-2xl font-bold '>Create Account</h3>
                                    <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                                </div>
                            </div>
                        </div>

                        <div className='card w-full bg-base-100 shadow-sm  p-20 hover:-translate-y-3 duration-300 hover:shadow-xl'>



                            <div className='text-end'>
                                <button className='btn bg-linear-to-t from-sky-500 to-indigo-500  rounded-full mb-5'>02</button>
                            </div>
                            <div className='text-center'>
                                <div className='space-y-3'>
                                    <button className='btn bg-linear-to-t from-sky-50 to-indigo-50  rounded-full h-20 w-20'><img src={imgTwo} alt="" /></button>
                                    <h3 className='text-2xl font-bold '>Choose Products</h3>
                                    <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                                </div>
                            </div>
                        </div>
                        <div className='card w-full bg-base-100 shadow-sm  p-20 hover:-translate-y-3 duration-300 hover:shadow-xl'>
                            <div className='text-end'>
                                <button className='btn bg-linear-to-t from-sky-500 to-indigo-500  rounded-full mb-5'>03</button>
                            </div>
                            <div className='text-center'>
                                <div className='space-y-3'>
                                    <button className='btn bg-linear-to-t from-sky-50 to-indigo-50  rounded-full h-20 w-20'><img src={imgTree} alt="" /></button>
                                    <h3 className='text-2xl font-bold '>Start Creating</h3>
                                    <p className='text-[#627382]'>Download and start using your premium  tools immediately.</p>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerFour;