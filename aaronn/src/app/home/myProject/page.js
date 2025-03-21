import Image from 'next/image';
import React from 'react';
import { IoMdArrowForward } from "react-icons/io";

const MyProject = () => {
  const data = [

    {


      id: 1,
      img: "/aseats/about-us/about1.png",
      name:
        <>
          <div className='flex gap-6'>
            <p>Brand Journey Improvements</p>
            <hr className='border-1 mt-3 border-orange-600 w-[50px] rounded-full'/>
          </div>
       
          <>
            <div className='flex gap-9'>
              <p className='text-gray-500'>Client: </p>
              <p> Organc</p>
            </div>
          </>

          
          <>
            <div className='flex gap-9'>
              <p className='text-gray-500'>Work:</p>
              <p className='flex gap-5'> Branding <strong>Logo design</strong></p>
            </div>
          </>

        </>

    },
    {


      id: 2,
      img: "/aseats/about-us/AboutBrand2.png",
      name:
        <>
          <div className='flex gap-6'>
            <p>Brand Grouping</p>
            <hr className='border-1 mt-3 border-orange-600 w-[50px] rounded-full'/>
          </div>
       
          <>
            <div className='flex gap-9'>
              <p className='text-gray-500'>Client:</p>
              <p> FR</p>
            </div>
          </>

          
          <>
            <div className='flex gap-9'>
              <p className='text-gray-500'>Work:</p>
              <p className='flex gap-5'> Branding <strong>Logo design</strong></p>
            </div>
          </>

        </>

    },
    {


      id: 3,
      img: "/aseats/about-us/AboutBrand3.png",
      name:
        <>
          <div className='flex gap-6'>
            <p>NFT Glimps</p>
            <hr className='border-1 mt-3 border-orange-600 w-[50px] rounded-full'/>
          </div>
       
          <>
            <div className='flex gap-9'>
              <p className='text-gray-500'>Client:</p>
              <p>Rumanda</p>
            </div>
          </>

          
          <>
            <div className='flex gap-9'>
              <p className='text-gray-500'>Work:</p>
              <p className='flex gap-5'> NFT Design</p>
            </div>
          </>

        </>

    },
    {


      id: 4,
      img: "",
      name:
        <>
          <div className='flex gap-6'>
            <p>Brand Suggestions</p>
            <hr className='border-1 mt-3 border-orange-600 w-[50px] rounded-full'/>
          </div>
       
          <>
            <div className='flex gap-9'>
              <p className='text-gray-500'>Client:</p>
              <p>T3d</p>
            </div>
          </>

          
          <>
            <div className='flex gap-9'>
              <p className='text-gray-500'>Work:</p>
              <p className='flex gap-5'> NFT logo</p>
            </div>
          </>

        </>

    },


  ]
  return (
    <div className='mt-[130px] px-[150px]'>
      <div>
        <h3 className='text-2xl font-bold flex justify-center items-center mx-auto '>
          My Projects Highlight
        </h3>
        <button className='flex gap-4 justify-center items-center mx-auto px-3 py-2 border-2 border-orange-300 rounded-full'>Explore More<IoMdArrowForward /></button>
      </div>
      <div>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        {
         
          data.map((data) => {
           
             return <div key={data.id}>
              <Image src={data.img} alt='hira' height={200} width={300} />
              <h3>{data.name}</h3>
              <h3>{data.title}</h3>
              <h3>{data.desc}</h3>
            </div>
           
          })
        }
        </div>
      </div>

    </div>
  );
};

export default MyProject;