import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../components/image.png'

export default function Navbar() {
  return (
    
        <nav>
        <Image 
         src={logo}
         alt='logo'
         width={70}
         quality={100}
         placeholder='blur'
        />
         <h1 className='capitalize font-bold text-2xl'> manuel's helpdesk</h1>
         <Link href='/'>Dashboard</Link>
         <Link href='/tickets'>Tickets</Link>
        </nav>
  )
}
