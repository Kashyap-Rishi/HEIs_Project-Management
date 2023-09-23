import React from 'react'
import './navbar.css'
import Link from 'next/link';
import Button from './Button';

const Navbar = () => {
  return (
    <>
    <header className="header">
    <div className="nav_main">
    <div className="navhead">
    <a href="" className="logo">R2P2</a>
    </div>
    <div className="nav_subhead">
    <input className="menu-btn" type="checkbox" id="menu-btn" />
   
    <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
   
    <ul className="menu" style={{marginRight:'75px'}}>
    <li >
    <Link  href='/' className='nav-links'>HOME</Link>
    <Link href='/multipleproj' className='nav-links'>PROJECTS</Link>
    <Link href='/services' className='nav-links'>RESEARCH PAPERS</Link>
    <Link href='/multi' className='nav-links'>FAQs</Link>
    <Link href='/contact' className='nav-links'>CONTACT US</Link>
    <a href='/login' className='nav-links2'>LOGIN/SIGNUP</a>
    </li>
   
      
    </ul>
    </div>
    </div>
  </header> 
  </>
  
  )
}

export default Navbar