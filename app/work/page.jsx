"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { BsArrowRight, BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
    {
        num: "01",
        category: "front-end",
        title: "Food Services Website Clone",
        description: "A Zomato Clone website made completely with HTML and CSS.",
        stack: [
            { name: "HTML" }, { name: "CSS" }
        ],
        image: '/assets/project1.png',
        live: "",
        github: "https://github.com/aditya-041/food-services-website-clone",
    },
    {
        num: "02",
        category: "front-end",
        title: "TinDog",
        description: "A single page responsive website made completely using Bootstrap.",
        stack: [
            { name: "HTML" }, { name: "Bootstrap" }
        ],
        image: '/assets/project2.png',
        live: "",
        github: "https://github.com/aditya-041/tindog",
    },
    {
        num: "03",
        category: "front-end",
        title: "Netflix Clone",
        description: "Netflix Clone Website made with HTML and CSS which is also responsive.",
        stack: [
            { name: "HTML" }, { name: "CSS" }
        ],
        image: '/assets/project3.png',
        live: "",
        github: "https://github.com/aditya-041/netflix-clone",
    },
    {
        num: "04",
        category: "fullstack",
        title: "LockBox - Your Own Password Manager",
        description: "A password managing website which helps in managing and storing all of your passwords at one place and helps in easy access of your passwords. It uses MongoDB as the backend database for storing the passwords.",
        stack: [
            { name: "HTML" }, { name: "JavaScript" }, { name: "React.js" }, { name: "TailwindCss" }, { name: "MongoDB" }, { name: "Express" }
        ],
        image: '/assets/project4.png',
        live: "https://lockbox-password-manager.netlify.app/",
        github: "https://github.com/aditya-041/LockBox",
    },
    {
        num: "05",
        category: "fullstack",
        title: "FanFunded - Get Funding From Your Fans",
        description: "A website made for creators/artists where they can showcase their skills and their fans or supporters can support them monetarily and help them grow and create more. It uses NextAuth for authentication and Razorpay integration for performing payments.",
        stack: [
            { name: "HTML" }, { name: "JavaScript" }, { name: "React.js" }, { name: "TailwindCss" }, { name: "MongoDB" }, { name: "Express" }, { name: "Next.js" }
        ],
        image: '/assets/project5.png',
        live: "https://fan-funded-five.vercel.app/",
        github: "https://github.com/aditya-041/FanFunded",
    },
    {
        num: "06",
        category: "fullstack",
        title: "Stock Management System",
        description: "A website that helps in effective management of stocks present in your store or your shop. It uses MongoDB as the backend database for storing all the details of the stocks.",
        stack: [
            { name: "HTML" }, { name: "Tailwindcss" }, { name: "MongoDB" }
        ],
        image: '/assets/project6.png',
        live: "https://stock-management-system-glb8iuv6s-aditya-kumar-basus-projects.vercel.app/",
        github: "https://github.com/aditya-041/stock-management-system",
    },
]

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    }

    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"} }} className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
            <div className="container mx-auto">
                <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                    <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
                        <div className='flex flex-col gap-[30px] h-[50%]'>
                            <div className='text-8xl leading-none font-extrabold text-outline'>{project.num}</div>
                        </div>
                        <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-red-600 transition-all duration-500 capitalize'>{project.category} project</h2>
                        <p className='text-white/60'>{project.description}</p>
                        <ul className='flex gap-4'>
                            {project.stack.map((item, index) => {
                                return <li key={index} className='text-[14px] text-red-600'>
                                    {item.name}
                                    {index !== project.stack.length - 1 && ","}
                                </li>
                            })}
                        </ul>
                        <div className='border border-white/20'></div>
                        <div className='flex items-center gap-4 mt-4'>
                            <Link href={project.live}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                            <BsArrowUpRight className='text-white text-3xl group-hover:text-red-600' />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>

                            <Link href={project.github}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                            <BsGithub className='text-white text-3xl group-hover:text-red-600' />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Github repository</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                        </div>
                    </div>
                    <div className='w-full xl:w-[50%]'>
                        <Swiper spaceBetween={30} slidesPerView={1} className='xl:h-[520px] mb-12' onSlideChange={handleSlideChange}>
                            {projects.map((project, index) => {
                                return <SwiperSlide key={index} className='w-full'>
                                    <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                                    <div className='absolute top-0 bottom-0 w-full h-full ng-black/10 z-10'></div>

                                    <div className='relative w-full h-full'>
                                        <Image src={project.image} fill className='object-cover' alt=''/>
                                    </div>
                                    </div>
                                </SwiperSlide>
                            })}
                            <WorkSliderBtns constainerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-red-600 hover:bg-red-700-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work


