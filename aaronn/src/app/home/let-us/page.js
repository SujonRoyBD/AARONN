import Image from 'next/image';
import React from 'react';

const Lets = () => {
    return (
        <div className='px-8 md:px-[150px] mt-16'>
            <div className='grid grid-cols-1 md:grid-cols-5'>
                <div className='md:col-span-3'>
                    <h3 className='text-3xl font-bold'>Lets get know <br /> about me closer</h3>
                    <p className='text-gray-400'>
                        Aaronn is a New York-based visual designer focusing on branding and visual identity. Her portfolio showcases her wide range of work, spanning books, posters and web design.
                    </p>
                </div>
                <div className='md:col-span-2 relative'>
                    <div className='border border-orange-500 h-8 w-28 rounded-full absolute right-[86px] -top-4' />
                    <Image src="/aseats/about-us/letus1.png" alt='man' height={250} width={300} className='border border-gray-950 rounded-lg bg-black' />
                </div>
            </div>

        </div>
    );
};

export default Lets;