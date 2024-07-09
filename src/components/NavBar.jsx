import React, { useState } from 'react'
import { navLinks } from '../constants/index.js'
import { close, logo, menu } from '../assets/index.js'
import { Link } from 'react-router-dom'


const NavBar = () => {
    const [active, setActive] = useState("")
    const [toggle, setToggle] = useState(false)
  return (
    <nav className="padding-x w-full flex items-center py-5 fixed top-0 z-20 bg-primary">
        <div className=' w-full flex justify-between items-center max-container '>
            <Link 
                to='/'
                className="flex items-center gap-2"
                onClick={()=>{
                    setActive("")
                    window.scrollTo(0,0)
                }}
                >
                    <img src={logo} alt="Logo"
                    className=' w-9 h-9 object-contain' />
                    <p className='text-white ' >Nemo <span className='sm:block hidden'>Lorem ipsum</span></p>

            </Link>

            <div className='sm:hidden flex flex-1 justify-end items-center'>
                  <img 
                  src={toggle?close:menu} 
                  alt="menu" 
                  className='w-[28px] h-[28px] cursor-pointer'
                  onClick={()=>{ setToggle(!toggle)}} /> 

                <div 
                  className={`${!toggle? 'hidden':'flex'} p-6 black-gradient top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl absolute `}>
                    <ul className='list-none flex  justify-end items-start flex-col gap-4 '>
                    {
                        navLinks.map((link) => (
                            <li key={link.id}
                            className={
                                `
                                ${active === link.title? 'text-white':'text-secondary'}
                                hover:text-white text-[16px] font-poppins font-medium cursor-pointer
                                `}
                            onClick={()=>{
                                setActive(link.title)
                                setToggle(!toggle)
                            }}
                            >
                                <a href={'#'+link.id}> {link.title}   </a>
                            </li>
                        ))
                    }
                    </ul>        
                </div> 
            </div>

            <ul className='list-none hidden sm:flex flex-row gap-10'>
                {
                    navLinks.map((link) => (
                        <li key={link.id}
                        className={
                            `
                            ${active === link.title? 'text-white':'text-secondary'}
                            hover:text-white text-[18px] font-medium cursor-pointer
                            `}
                        onClick={()=>{
                            setActive(link.title)
                        }}
                        >
                            <a href={'#'+link.id}> {link.title}   </a>
                        </li>
                    ))
                }

            </ul>
        </div>
    </nav>
  )
}

export default NavBar