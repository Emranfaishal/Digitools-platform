import React from 'react';
import { AiFillSun } from "react-icons/ai";
import { FaRegPlayCircle } from "react-icons/fa";
import { BsArrowReturnRight } from "react-icons/bs";
import img from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className='container mx-auto mt-5 items-center'>
            <div className='grid grid-cols-1 lg:grid-cols-2  items-center gap-20 p-5'>
                <div className='space-y-3 lg:space-y-5'>
                    <p className='flex justify-center items-center gap-3 bg-linear-to-t from-sky-100 to-indigo-100 rounded-2xl w-70 text-[#627382]'> <AiFillSun /> New : AI-Powered Tools Available</p>
                    <h1 className='text-3xl lg:text-7xl font-extrabold'>Supercharge Your Digital Workflow</h1>

                    <p className='text-[#627382]'>Access premium AI tools, design assets, templates, and productivity
                        software—all <br /> in one place. Start creating faster today. <br /> Explore Products
                    </p>
                    <div className='flex gap-4'>
                        <button
                            className="btn btn-active btn-primary bg-linear-to-t from-sky-500 to-indigo-500 rounded-full">Explore Products <BsArrowReturnRight /></button>

                        <button
                            className="btn btn-outline btn-primary rounded-full">
                            <FaRegPlayCircle /> Watch Demo</button>
                    </div>
                </div>
                <div className='lg:ml-50'>
                    <div className='hover-3d'>
                        <figure className="rounded-2xl"><img src={img} alt="" /></figure>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;