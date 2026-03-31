import React from 'react';
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { TbBrandXing } from "react-icons/tb"
import FooterOne from './FooterOne';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-20">

                <nav>
                    <h6 className="text-4xl font-bold">DigiTools</h6>
                    <a className="link link-hover">Premium digital tools for creators, <br /> professionals, and businesses. <br /> Work smarter with our suite of powerful tools.</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Product</h6>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Pricing</a>
                    <a className="link link-hover">Templates</a>
                    <a className="link link-hover">Integrations</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Press</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Resources</h6>
                    <a className="link link-hover">Documentation</a>
                    <a className="link link-hover">Halp Center</a>
                    <a className="link link-hover">Community</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="text-3xl font-bold">Social Links</h6>
                    <div className='flex gap-5 mt-5'>
                        <p className='btn w-15 h-15  rounded-full bg-amber-50'><IoLogoFacebook className='h-15 w-15' /></p>
                        <p className='btn w-15 h-15  rounded-full bg-amber-50'><FaInstagramSquare className='h-15 w-15' /></p>
                        <p className='btn w-15 h-15  rounded-full bg-amber-50'><TbBrandXing className='h-15 w-15' /></p>
                    </div>
                </nav>
            </footer>
            <hr className='border-gray-500'/>
            <FooterOne></FooterOne>
        </div>
    );
};

export default Footer;