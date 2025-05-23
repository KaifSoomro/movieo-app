import React from 'react'
import { mobileNavigation } from '../constants/navigation'
import { NavLink } from 'react-router-dom'

const MobileNavigation = () => {
  return (
    <section className='lg:hidden h-16 w-full bg-black/30 backdrop-blur-xl fixed bottom-0 z-50'>
        <div className='flex items-center justify-between h-full text-neutral-400 px-5'>
          {
            mobileNavigation.map((nav,index)=>{
                return (
                  <NavLink 
                     to={nav.href}
                     key={nav.label+mobileNavigation}
                     className={({isActive})=>`px-3 flex h-full items-center flex-col justify-center ${isActive && 'text-white'}`}
                  >
                    <div className='text-2xl'>
                      {nav.icon}
                    </div>
                    <p className='text-sm'>{nav.label}</p>
                  </NavLink>
                )
            })
          }
        </div>
    </section>
  )
}

export default MobileNavigation