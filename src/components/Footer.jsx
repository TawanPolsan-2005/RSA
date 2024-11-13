import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const location = useLocation();
    return (
        <>
            <footer className='flex flex-row bg-[#6C1E1E] gap-x-48 justify-center py-10 text-white'>
                <div className='flex flex-col items-center leading-loose'>
                    <h1 className='font-bold text-xl pb-3'>Contact Us</h1>
                    <p>abc@gmail.com</p>
                    <p>+6612 345 6789</p>
                </div>
                <div className='flex flex-col items-center leading-loose'>
                    <h1 className='font-bold text-xl pb-3'>Quick Links</h1>
                    <Link to='/'>Courses</Link>
                    <Link to='/equipments'>Equipments</Link>
                    <Link to='/about'>About</Link>
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className='font-bold text-xl pb-5'>Follow Us</h1>
                    <div className='flex flex-row gap-x-5'>
                        <a href="https://www.facebook.com/" title="facebook icon" target='_blank' rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookF} className="w-6 h-6" />
                        </a>
                        <a href="https://www.instagram.com/" title='instagram icon' target='_blank' rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className='w-6 h-6' />
                        </a>
                        <a href="https://www.linkedin.com/" title='linkedin icon' target='_blank' rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className='w-6 h-6' />
                        </a>
                    </div>
                </div>
            </footer>
            <div className='text-white bg-black flex justify-center py-3'>Copyright @2024 All Right Served</div>
        </>
    )
}

export default Footer