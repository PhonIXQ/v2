import React from 'react';
import logo from '../logo.svg'
import { navLinks } from '../constants'

const Nav = () => {
   return (
      <nav className="flex justify-between items-center p-4">
         <a href="/">
            <img
               src={logo}
               alt="logo"
               width={71}
               height={50}
               className='m-0 w-auto h-[50px]' />
         </a>

         <div>
            <ul className='flex flex-1 font-roboto justify-center items-center gap-9'>
               {navLinks.map((link) => (
                  <li key={link.name}>
                     <a href={link.url}
                        className='text-sm font-semibold'>
                        {link.name}
                     </a>
                  </li>
               ))
               }
            </ul>
         </div>
      </nav>
   );
};

export default Nav;
