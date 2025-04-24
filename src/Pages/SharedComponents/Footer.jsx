import React from 'react';
import footerLogo from '../../assets/quires_logo.png'
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer className="footer bg-base-200 text-base-content p-10">
                <aside>
                    <img src={footerLogo} alt="logo" />
                    <p>
                        PerfectAlt Industries Ltd.
                        <br />
                        Providing reliable tech since 2012
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a href='/about' className="link link-hover">About us</a>
                    <a href='/contact' className="link link-hover">Contact</a>
                    <a href='/faq' className="link link-hover">FAQ</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a href='/terms&conditions' className="link link-hover">Terms and Conditions</a>
                    <a href='/privacyPolicy' className="link link-hover">Privacy policy</a>
                    <a href='/imprint' className="link link-hover">Imprint</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://www.facebook.com/A.H.Shofiq/' target='blank' className='hover:cursor-pointer text-3xl'>
                            <FaFacebook className='text-blue-600'></FaFacebook>
                        </a>
                        <a href='https://www.linkedin.com/in/hossainshofiq/' target='blank' className='hover:cursor-pointer text-3xl'>
                            <FaLinkedinIn className='text-blue-600'></FaLinkedinIn>
                        </a>
                        <a href='https://github.com/hossainshofiq' target='blank' className='hover:cursor-pointer text-3xl'>
                            <FaGithub ></FaGithub>
                        </a>
                    </div>
                </nav>
            </footer>
            <footer className="footer footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by PerfectAlt Industries Ltd.</p>
                </aside>
            </footer>
        </>
    );
};

export default Footer;