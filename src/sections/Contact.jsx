import React from 'react'
import { socialMedia } from '../constants'

const Contact = () => {
   return (
      <section id='contact'
         className='flex my-14 max-w-[1000px] mx-auto'>
         <ul className='flex gap-9'>
            {socialMedia.map((icon) => (
               <li key={icon.name}>
                  <a href={icon.url}>
                     <img
                        src={icon.icon}
                        alt={icon.name}
                        width={30}
                        height={30}
                        className='hover:stroke-cyan-700' />
                  </a>
               </li>
            ))}
         </ul>
      </section>
   )
}

export default Contact