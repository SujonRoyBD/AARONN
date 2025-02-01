import Image from 'next/image';
import React from 'react';

const Navbar = () => {
    return (
        <div className='px-[150px] mt-[45px] flex gap-[344px]'>
           <div>
            <Image src="/aseats/my project/logo3.png" alt='logo' height={22} width={125} className='text-white'/>
           </div>
           <div > 
            <ul className='flex gap-8'> 
                <li>
                    HOME
                </li>
                <li>
                    ABOUT ME
                </li>
                <li>
                    MY WORKS
                </li>
               <button className='border-2 border-gray-700 px-3 py-2 rounded-full -mt-3'>CONTACT</button>
            </ul>
           </div>
        </div>
    );
};

export default Navbar;