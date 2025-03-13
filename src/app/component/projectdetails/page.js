import Image from 'next/image';
import React from 'react';
import Otherproject from '../otherproject/page';

const Projectdetails = () => {
    return (
        <div className='px-5 md:px-[150px]'>
            <h3 className="text-3xl font-bold mt-5">Project Detail</h3>
            <p className='text-gray-500 mt-3 '>Details Abouts The Porject</p>
            <hr className='w-full h-3 mt-9'/>
            <div>
                <Image src="/aseats/projectdetails/about3.png" alt='hand' width={1148} height={636}/>
            </div>
            <div className='text-gray-500 md:ml-[200px]'>
                <h3 className='text-2xl font-bold'>Project Story</h3>
                <p>The fact that photography has different meanings to different people is one of the many components of its appeal. Photography is such an important part of our life that it is now very difficult to imagine the world without it. </p>
                <p className='mt-9'>We cannot imagin a wedding without the opportunity to capture it on film, we would not be ables to remember the growing up of children or the holidays if we did not have picture.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-9 gap-7'>
                <Image src="/aseats/projectdetails/dryone.png"alt='dry' width={555} height={600}/>
                <Image src="/aseats/projectdetails/drytwo.png"alt='dry' width={555} height={600}/>
                
            </div>
            <div className='text-gray-500 md:ml-[200px] mt-9'>
                <h3 className='text-2xl font-bold'>Day One</h3>
                <p>Everywhere we are haunted by photography in newspapers, magazines, advertisements on television on the Internet, but we still crave even more. </p>
                <p className='mt-9'>And what helps to achieve a good result? We will look at these issues and some of the possibilities of photography and explain that it is a combination of thought imagination, visual design, technical skills and organizational skills</p>
            </div>
            <Otherproject/>
        </div>
    );
};

export default Projectdetails;