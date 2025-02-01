import React from 'react';
import Banner from '../banner/page';
import Lets from '../lets/page';
import MyProject from '../myProject/page';
import Testimonial from '../testimonial/page';
import Touch from '../touch/page';

const Home = () => {
    return (
        <div className='text-white'>
            <Banner/>
            <Lets/>
            <MyProject/>
            <Testimonial/>
            <Touch/>
        </div>
    );
};

export default Home;