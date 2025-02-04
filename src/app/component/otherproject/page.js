import Image from 'next/image';
import React from 'react';

const Otherproject = () => {
    const data =[
        {
            img:"/aseats/projectdetails/other1.png",
            title:"Logo Projects 1",
            desc:"Branding"
        },
        {
            img:"/aseats/projectdetails/other2.png",
            title:"Logo Project 2",
            desc:"Branding"
        },
        {
            img:"/aseats/projectdetails/other3.png",
            title:"Logo Projects 3",
            desc:"Branding"
        }
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
           {
             data.map((index)=> {
                return <div key={index.id}>
                    <Image src={index.img}alt='about' width={360} height={465}/>
                    <p className='text-xl font-bold'>{index.title}</p>
                    <p className='text-gray-500'>{index.desc}</p>
                </div>
            })
           }
        </div>
    );
};

export default Otherproject;