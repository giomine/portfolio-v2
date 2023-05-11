'use client'
import { useState } from 'react'
import '../app/styles/navbar.scss'
import Link from "next/link"

export default function Navbar(){

  const [ dropdown, setDropdown ] = useState(false)

  const handleClick = () => {
    setDropdown(!dropdown)
  }

  return (
    <>
        <div className='brand'></div>
      <div className="navbar-sm">
        <div className='burger' onClick={handleClick}></div>
        { dropdown === true ? 
        (
        <div className='nav-links animate__animated animate__slideInRight'>
          <Link onClick={handleClick} href={'#about'}>About</Link>
          <Link onClick={handleClick} href={'#experience'}>Experience</Link>
          <Link onClick={handleClick} href={'#skills'}>Skills</Link>
          <Link onClick={handleClick} href={'#projects'}>Projects</Link>
          {/* <Link onClick={handleClick} href={'#work'}>Work</Link> */}
          {/* <Link onClick={handleClick} href={'#hobbies'}>Hobbies</Link> */}
          <Link onClick={handleClick} href={'#contact'}>Contact</Link>
        </div>
        )
        : '' }
      </div>


      <div className="navbar-lg">
        <div className='container'>
          <div className='brand'></div>
          <div className='link-container'>
            <Link href={'#about'}>About</Link>
            <Link href={'#experience'}>Experience</Link>
            <Link href={'#skills'}>Skills</Link>
            <Link href={'#projects'}>Projects</Link>
            {/* <Link href={'#work'}>Work</Link> */}
            {/* <Link href={'#hobbies'}>Hobbies</Link> */}
            <Link href={'#contact'}>Contact</Link>
          </div>
        </div>
      </div>

    </>
  )
}