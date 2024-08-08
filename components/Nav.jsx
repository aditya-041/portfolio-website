"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const links = [
    {
        name: 'home',
        path: '/',
    },
    // {
    //     name: 'services',
    //     path: '/services',
    // },
    {
        name: 'resume',
        path: '/resume',
    },
    {
        name: 'work',
        path: '/work',
    },
    {
        name: 'contact',
        path: '/contact',
    },
];

const Nav = () => {
    const pathname = usePathname()
  return (
    <nav className='flex gap-8'>
        {links.map((link, index)=>{
            return <Link href={link.path} key={index} className={`${link.path === pathname && "text-center border-b-2 border-red-500"} capitalize font-medium hover:text-red-600 transition-all`}>
                {link.name}
            </Link>
        })}
    </nav>
  )
}

export default Nav
