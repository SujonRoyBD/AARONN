import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='px-[150px] mt-[45px] flex gap-[400px]'>
           <Link href="/component/home"><div>
            <Image src="/aseats/my project/logo3.png" alt='logo' height={22} width={125} className='text-white'/>
           </div></Link>
           <div > 
            <ul className='flex gap-7'> 
                <Link href="/component/home"><li>
                    HOME
                </li></Link>
                <Link href="/aboutme"><li>
                    ABOUT ME
                </li></Link>
               <Link href="/mywork"> <li>
                    MY WORKS
                </li></Link>
              <Link href="/contactme"> <button className='border-2 border-gray-700 px-3 py-2 rounded-full -mt-3'>CONTACT</button></Link>
            </ul>
           </div>
        </div>
    );
};

export default Navbar; 