import React from 'react'
import { Button } from '@/components/ui/button'
import {FiDownload} from "react-icons/fi"
import Socials from '@/components/Socials'
import Photo from '@/components/Photo'
import Stats from '@/components/Stats'

const Home = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl'>Software Developer</span>
            <h1 className='h1'>Hello I'm <br/> <span className='text-red-500'>Aditya Basu</span> </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>
            I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.</p>
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <a href="/Aditya Kumar Basu.pdf" download>
              <Button variant = "outline" size = "lg" className="uppercase flex items-center gap-2">
                <FiDownload className='text-xl'/>
                <span>Download CV</span>
              </Button>
                </a>
              <div className='mb-8 xl:mb-0'>
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-red-600 rounded-full flex justify-center items-center text-red-600 text-base hover:bg-red-600 hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          <div className='order-1 xl:order-none mb:8 xl:mb-0'>
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  )
}

export default Home
