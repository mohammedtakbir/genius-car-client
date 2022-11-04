import React from 'react';
import logo from '../../../assets/logo.svg'

const Footer = () => {
    return (
        <div className='bg-black mt-20'>
            <footer className="footer container mx-auto px-[130px] py-[110px] text-white">
                <div>
                    <img src={logo} alt="" />
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="text-lg font-medium mb-2">Services</span>
                    <a href="/" className="link link-hover">Branding</a>
                    <a href="/" className="link link-hover">Design</a>
                    <a href="/" className="link link-hover">Marketing</a>
                    <a href="/" className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="text-lg font-medium mb-2">Company</span>
                    <a href="/" className="link link-hover">About us</a>
                    <a href="/" className="link link-hover">Contact</a>
                    <a href="/" className="link link-hover">Jobs</a>
                    <a href="/" className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="text-lg font-medium mb-2">Legal</span>
                    <a href="/" className="link link-hover">Terms of use</a>
                    <a href="/" className="link link-hover">Privacy policy</a>
                    <a href="/" className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;