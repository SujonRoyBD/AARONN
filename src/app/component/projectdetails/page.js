import Image from 'next/image';
import React from 'react';

const Projectdetails = () => {
    return (
        <div className='px-[150px]'>
            <h3 className="text-3xl font-bold mt-5">Project Detail</h3>
            <p className='text-gray-500 mt-3 '>Details About The Porject</p>
            <hr className='w-full h-3 mt-9'/>
            <div>
                <Image src="/aseats/projectdetails/about3.png" alt='hand' width={1148} height={636}/>
            </div>
            <div className='text-gray-500 md:ml-[200px]'>
                <h3 className='text-2xl font-bold'>Project Story</h3>
                <p>The fact that photography has different meanings to different people is one of the many components of its appeal. Photography is such an important part of our life that it is now very difficult to imagine the world without it. </p>
                <p className='mt-9'>We cannot imagine a wedding without the opportunity to capture it on film, we would not be able to remember the growing up of children or the holidays if we did not have pictures.</p>
            </div>
            <div>
                <Image src="/aseats/projectdetails/dryone.png"/>
            </div>
        </div>
    );
};

export default Projectdetails;