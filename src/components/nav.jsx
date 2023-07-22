import React from 'react'
import { navOptions } from '../resources/data'

const Nav = () => {
  return (
    <div className='flex justify-center gap-10 px-2 pt-3 md:gap-20 bg-nav-background
                    sticky top-0 z-10'>
        {navOptions.map((o, i) => (
            <a
            className='bg-accent rounded-full p-1 mb-4 w-[6rem] text-center font-semibold border-black border-[3px]
                        hover:border-secondary-accent hover:text-secondary-accent'
            key={i} href={o.ref}>
                {o.text}
            </a>
        ))}
    </div>
  )
}

export default Nav