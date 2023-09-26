"use client";
import React,{useState} from 'react'
import './navbar.css'
import Link from 'next/link';


const Navbar = () => {

  return (
    <>
    <header className="header-nv">
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

    <Link className="btn-lg" href="/institutelogin">LOGIN/SIGNUP</Link>
   
               
                  

    </li>
   
      
    </ul>
    </div>
    </div>
  </header> 


  </>
  
  )
}

export default Navbar