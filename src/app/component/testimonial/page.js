import Image from 'next/image';
import React from 'react';

const Testimonial = () => {
    return (
        <div className='sm: px-9 md:px-[150px] grid grid-cols-1 md:grid-cols-2 mt-[70px]'>
          <div className='md:w-[700px] mt-9'>
          <h2 className='text-2xl font-bold '>Testimonial</h2>
            <p className='text-gray-400'>
                “Aaronn was fantastic to work with from start to finish. We were looking for a simple, stand-out logo and he delivered. I tried designing the logo myself thinking I wouldn't need to pay the money for a professional graphic designer but I was very wrong. Working with Aaronn was worth every penny and was surprisingly affordable! I remember him saying simplicity is key to a successful logo and boy he was right. I can't thank Aaronn enough for his effort and professionalism. I would recommend him to anyone looking for a design!”
                -Martin lee</p>
          </div>
          <div className='md:ml-[300px]'>
            <Image src="/aseats/my project/coma1.png" alt='coma' height={183} width={199}/>
          </div>
          <h3 className='mt-3'>-Martin lee</h3>
        </div>
    );
};

export default Testimonial;