import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/logo.png"
import InstagramLogo from "../assets/instagram.png"
import LinkdinLogo from "../assets/linkdin.png"
import FacebookLogo from "../assets/facebook.png"

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
          <div className='flex items-center justify-center gap-5 mt-3'>
             <Link to={"https://www.instagram.com/kaif__soomro/"}>
              <img src={InstagramLogo} className='w-[55px] sm:w-[70px] active:scale-80'/>
             </Link>
             <Link to={"https://www.facebook.com/people/Kaif-Soomro/pfbid0xpyftF2yqt437YhYNTXGcCkmfVy9LbSyBjkvnVxUQsPh5MYFP38yKgk95umFCimFl/"}>
             <img src={FacebookLogo} className='w-[55px] sm:w-[70px] active:scale-80'/>
             </Link>
             <Link to={"https://pk.linkedin.com/in/kaif-soomro-72368b2b8"}>
             <img src={LinkdinLogo} className='w-[43px] sm:w-[53px] active:scale-80'/>
             </Link>
          </div>
      </div>
    </footer>
  )
}

export default Footer