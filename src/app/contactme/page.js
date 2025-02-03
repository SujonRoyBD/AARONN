import Image from 'next/image';
import React from 'react';

const Contact = () => {
    return (
        <div className='px-[150px]'>
            <h3 className='text-3xl font-bold mt-9'>Contact Me</h3>
            <p className='mt-9'>For Any Project Knock Us</p>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='text-3xl font-bold'>
                    <h3>Get in <br/>Touch With<br/> Us</h3>
                </div>
                <div className='w-2/3'>
                    <p>Name</p>
                    <hr className='w-[300px] h-1  mt-3'/>
                    <p>Subject</p>
                    <hr className='w-[300px] h-1 mt-3'/>
                    <p>Message</p>
                    <hr className='w-[300px] h-1 mt-3'/>
                    <button className='bg-yellow-500 px-6 rounded-full'>SEND</button>
                    
                </div>
            </div>
            <Image src="/aseats/mymission/laptop.jpg" alt='mymission' height={636} width={1148}/>
            <div className='flex justify-between'>
                <p>Street Avenue 21, CA</p>
                <p>+9 0283353</p>
                <p>info@aaronn.com</p>
            </div>
        </div>  
    );
};

export default Contact; 