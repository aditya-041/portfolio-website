import Link from 'next/link'
import { Button } from './ui/button'
import React from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const Header = () => {
    return (
        <header className='py-8 xl:py-12 text-white'>
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className='text-4xl font-semibold'>Aditya Basu <span className='text-red-600'>.</span>
                    </h1>
                </Link>
                
                <div className="hidden xl:flex items-center gap-8">
                <Nav/>
                <Link href = "/contact">
                <Button className="bg-red-600 text-white">Hire Me</Button>
                </Link>
                </div>
                 
                 <div className="xl:hidden">
                    <MobileNav/>
                 </div>
            </div>
        </header>
    )
}

export default Header
