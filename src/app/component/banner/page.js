import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
const Banner = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold flex justify-center items-center mx-auto mt-[100px]'>
            Adaptive Logo Design</h1>
             <strong className=' text-3xl font-bold flex justify-center items-center mx-auto'>for Your Brand</strong>
            <Link href="/component/projectdetails"> <button className='flex gap-2 mt-[60px] bg-orange-500 px-1 py-1 rounded-full justify-center items-center mx-auto'>
                EXPLORE WORKS
                <FaArrowRight className='mt-1'/>
             </button></Link>
            
        </div>
    );
};

export default Banner;