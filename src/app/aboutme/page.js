import React from 'react';
import Mymission from '../component/mymission/page';

const About = () => {
    return (
        <div className='md:px-[150px]'>
            <h3 className='text-4xl font-bold'>About Me</h3>
            <p className='mt-3'>Little Brief About Myself</p>
            <hr className='w-100% mt-16'/>
            <Mymission/>
        </div>
    );
};

export default About;