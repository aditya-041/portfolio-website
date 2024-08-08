"use client"
import React from 'react'
import { FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, SiNodedotjs, SiCplusplus, SiC, SiMongodb, SiMongoose, SiExpress } from 'react-icons/si'

const about = {
    title: 'About Me',
    description: "I am a passionate and skilled web developer with a diverse set of technical abilities. My journey in technology has equipped me with a strong foundation in programming languages like C and C++, as well as expertise in modern web development technologies. I am proficient in HTML, CSS, and JavaScript, and have hands-on experience with popular frameworks and libraries such as React and Next.js. My backend skills include working with Node.js to build scalable server-side applications. Additionally, I am well-versed in using Bootstrap and TailwindCSS for creating responsive and visually appealing designs. With a keen eye for detail and a commitment to delivering high-quality work, I am dedicated to continuously learning and evolving in the ever-changing world of web development.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Aditya Basu"
        },
        {
            fieldName: "Phone",
            fieldValue: "+91 93541 42246"
        },
        {
            fieldName: "Experience",
            fieldValue: "1 year as a Web Developer and 1 year in C/C++."
        },
        {
            fieldName: "Nationality",
            fieldValue: "Indian"
        },
        {
            fieldName: "Email",
            fieldValue: "basuaditya260@gmail.com"
        },
        {
            fieldName: "Languages",
            fieldValue: "Hindi, English, Maithili"
        },
    ]
}

const experience = {
    title: "My Experience",
    description: "I have been learning full stack development from past 1 year and I also have 1 year of experience in C and C++. I have also done a Web Development Internship.",
    items: [
        {
            company: "Techoctanet Services",
            position: "Front End Developer Intern",
            duration: "March 2024 - April 2024"
        },
    ]
}

const education = {
    title: "My Education",

    items: [
        {
            school: "Mount Olivet Senior Secondary School, Delhi",
            percentage: "89.8%",
            year_of_passing: "10th, 2020",
        },

        {
            school: "Mount Olivet Senior Secondary School, Delhi",
            percentage: "78.6%",
            year_of_passing: "12th, 2022",
        },

        {
            school: "Delhi Technological University, Delhi",
            percentage: "CSE,3rd Year,6.65 CGPA",
            // expected_graduation_year: "2026",
            year_of_passing: "B.Tech, 2022-2026"
        }
    ]
}

const skills = {
    title: "My Skills",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML",
        },
        {
            icon: <FaCss3 />,
            name: "CSS",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <FaReact />,
            name: "React.js",
        },
        {
            icon: <FaBootstrap />,
            name: "Bootstrap",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwindcss",
        },
        {
            icon: <SiNodedotjs />,
            name: "Node.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
        },
        {
            icon: <SiMongodb />,
            name: "MongoDB",
        },
        {
            icon: <SiMongoose />,
            name: "Mongoose",
        },
        {
            icon: <SiExpress />,
            name: "Express",
        },
        {
            icon: <SiCplusplus />,
            name: "C++",
        },
        {
            icon: <SiC />,
            name: "C",
        },
    ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { motion } from 'framer-motion'
import { ScrollArea } from '@radix-ui/react-scroll-area'

const Resume = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{
            opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
        }}

        className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
        >
            <div className='container mx-auto'>
                <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
                    <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                        <TabsTrigger value = "experience">Experience</TabsTrigger>
                        <TabsTrigger value = "education">Education</TabsTrigger>
                        <TabsTrigger value = "skills">Skills</TabsTrigger>
                        <TabsTrigger value = "about">About Me</TabsTrigger>
                    </TabsList>

                    <div className='min-h-[70vh] w-full'>
                        <TabsContent value="experience" className = "w-full">
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bolc'>{experience.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                {experience.description}
                                </p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                     {experience.items.map((item, index)=>{
                                        return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                            <span className='text-red-600'>{item.duration}</span>
                                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                                                {item.position}</h3>
                                            <div className='flex items-center gap-3'>
                                                <span className='w-[6px] h-[6px] rounded-full bg-red-600'></span>
                                                <p className='text-white/60'>{item.company}</p>
                                            </div>
                                        </li>
                                     })}
                                    </ul>
                                </ScrollArea>

                            </div>
                        </TabsContent>






                        <TabsContent value="education" className = "w-full">
                        <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bolc'>{education.title}</h3>
                                {/* <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                {experience.description}
                                </p> */}
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                     {education.items.map((item, index)=>{
                                        return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                            <span className='text-red-600'>{item.year_of_passing}</span>
                                            <span className='text-red-600'>{item.expected_graduation_year}</span>
                                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                                                {item.school}</h3>
                                            <div className='flex items-center gap-3'>
                                                <span className='w-[6px] h-[6px] rounded-full bg-red-600'></span>
                                                <p className='text-white/60 p-2 m-2'>{item.percentage}</p>
                                            </div>
                                        </li>
                                     })}
                                    </ul>
                                </ScrollArea>

                            </div>
                        </TabsContent>

                        <TabsContent value="skills" className = "w-full h-full">
                            <div className='flex flex-col gap-[30px]'>
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className='font-bold text-4xl'>{skills.title}</h3>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-4 xl:gap-[30px] gap-4' >
                                    {skills.skillList.map((skill, index)=>{
                                        return <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className='w-full h-[130px] bg-[#232329] rounded-xl flex justify-center items-center group' >
                                                        <div className='text-6xl group-hover:text-red-600 transition-all duration-300'>{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className='capitalize'>{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                            </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        <TabsContent value="about" className = "w-full text-center xl:text-left">
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-4xl font-bold'>{about.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                    {about.info.map((item,index)=>{
                                        return <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                                            <span className='text-white/60'>{item.fieldName}</span>
                                            <span className='text-[17px]'>{item.fieldValue}</span>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>

        </motion.div>
    )
}

export default Resume
