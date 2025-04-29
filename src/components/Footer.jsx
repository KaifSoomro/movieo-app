import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className='w-full h-[300px]'>
      <div className='container h-full mx-auto bg-gradient-to-tl from-neutral-950 to-neutral-800 py-5 px-3 flex items-center justify-center flex-col rounded'>
          <img src={Logo} className='sm:w-[200px] w-[150px]' />
          <p className='sm:text-xl mb-2'>The world of cinema, in your pocket.</p>
          <div className='sm:block flex flex-col items-center justify-center'>
            <input 
            type="text" 
            placeholder='Sign in to your account'
            className='w-[300px] h-[45px] py-5 ps-3 mb-3 border rounded outline-orange-300'
            />
            <button className='w-[300px] sm:w-[100px] h-[45px] sm:ms-2 rounded bg-gradient-to-tl from-orange-800 to-yellow-500 cursor-pointer'>Sign in</button>
          </div>
      </div>
    </footer>
  )
}

export default Footer