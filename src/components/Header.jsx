import React, { useEffect, useState} from 'react'
import logo from '../assets/logo.png'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import userIcon from '../assets/user.png'
import { HiMagnifyingGlass } from "react-icons/hi2";
import { navigation } from '../constants/navigation';

const Header = () => {
    const location = useLocation()
    const removeSpace = location?.search?.slice(3)?.split('%20').join(' ')
    const [searchInput, setSearchInput] = useState(removeSpace)
    const navigate = useNavigate()

    useEffect(()=>{
        if(searchInput){
            navigate(`/search?q=${searchInput}`)
        }
    },[searchInput])

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleUser = () => {
        window.scrollTo(0, document.documentElement.scrollHeight - document.documentElement.clientHeight);
    }
  return (
    <header className='fixed top-0 w-full h-16 bg-black/75 z-40'> 
        <div className="container mx-auto px-4 flex items-center h-full">
            <Link to={'/'}>
                <img
                 src={logo} 
                 alt="logo" 
                 width={120}
                />
            </Link>

            <nav className='hidden lg:flex items-center gap-1 ml-5'>
                {
                    navigation.map((nav,index)=>{
                        return (
                            <div key={nav+"Nav"+index}>
                                <NavLink key={nav.label} to={nav.href} className={({isActive})=>`px-2 hover:text-neutral-100 ${isActive && "text-neutral-100"}`}>
                                    {nav.label}
                                </NavLink>
                            </div>
                        )
                    })
                }
            </nav>

            <div className='ml-auto flex items-center gap-5'>
                <form className='flex items-center gap-2' onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder='Search here...'
                        className='bg-transparent px-4 py-1 outline-hidden border-none hidden lg:block'
                        onChange={(e)=>setSearchInput(e.target.value)}
                        value={searchInput}
                    />
                    <NavLink to={"/search"} className='text-3xl text-white'>
                         <HiMagnifyingGlass />
                    </NavLink>
                </form>
                <div onClick={handleUser}>
                    <img 
                     src={userIcon} 
                     alt="" 
                     className='w-9 h-9 rounded-full cursor-pointer active:scale-80 transition-all'
                    />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header