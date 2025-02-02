import Image from 'next/image';
import React from 'react';

const Mymission = () => {
    return (
        <div>
         <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>
                <h3 className='text-5xl font-bold px-2 mt-9'>My mission <br/> is to make <br/> design <br/> easier.</h3>
            </div>
            <div className='mt-9 text-gray-400 pr-9'>
                <p>Create custom Designs with AARONN that converts more visitors than any website. With lots of unique design, you can easily select a logo without hassle. Create custom landing logos with AARONN that converts more visitors than any website. With lots of revisions, you can easily build a logo without porbolem.</p>
            </div>
         </div>
         <div className='grid grid-cols-1 md:grid-cols-2 mt-8'>
            <div>
                <Image src="/aseats/mymission/letus1.png" alt='abit' height={515} width={361}/>
            </div>
            <div className='h-[400px]'>
                <Image src="/aseats/mymission/aboutme2.png" alt='abit' height={100} width={750} className='h-[350px]'/>
            </div>
         </div>
         <h3 className='text-3xl font-bold mt-9'>Follow me on:</h3>
         <div className='grid grid-cols-2 md:grid-cols-4 justify-between mt-9'>
            <h2 className='font-bold text-3xl text-gray-600'>Dribble</h2>
            <h2 className='font-bold text-3xl text-gray-600'>Twitter</h2>
            <h2 className='font-bold text-3xl text-gray-600'>Facebook</h2>
            <h2 className='font-bold text-3xl text-gray-600'>Instagram</h2>
         </div>
        </div>
    );
};

export default Mymission;