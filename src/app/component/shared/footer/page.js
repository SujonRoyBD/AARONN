import Image from 'next/image';
import React from 'react';
import { IoLogoFacebook } from "react-icons/io";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className='px-8 md:px-[150px]'>
            <div className='px-8 md:px-[150px] mt-16'>
                <p className='text-orange-500 text-center'>Get in Touch With Us</p>
                <h3 className='text-3xl text-center'>info@aaronn.com</h3>
                <div className='flex text-center items-center justify-center'> <hr className='w-[300px] h-[130px]' /></div>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-3 md:gap-[250px]'>
                <div>
                    <Image src="/aseats/my project/logo3.png" alt='logo' height={100} width={100} />
                </div>
                <div>
                    <p>Street Avenue 21, CA</p>
                    <p>0-8-00-888-000</p>
                    <p>000</p>
                </div>
                <div>
                    <p>+9 0283353</p>
                    <p className='flex gap-4'>
                        <IoLogoFacebook />
                        < FaSquareTwitter />
                        <FaInstagram className='bg-white text-black' />
                    </p>
                </div>

            </div>
            <div className='mt-[50px]'><hr className='w-[900px] h-[60px]' /></div>
            <p className='flex justify-center items-center'>© 2023. Ideapeel. All rights reserved. </p>
        </div>
    );
};

export default Footer;