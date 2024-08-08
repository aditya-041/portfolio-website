"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

const info = [
  {
    icon: <FaPhoneAlt/>,
    title: 'Phone',
    despcription: '(+91) 9354142246'
  },
  {
    icon: <FaEnvelope/>,
    title: 'Email',
    despcription: 'basuaditya260@gmail.com'
  },
  {
    icon: <FaMapMarkerAlt/>,
    title: 'Address',
    despcription: 'Sant Nagar, Burari, Delhi 110084'
  }
]
const Contact = () => {
  return (
    <motion.section initial = {{opacity: 0}}
    animate={{
      opacity: 1,
      transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
    }}
    className='py-6'
    >

      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          <div className='xl:w-[54%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
              <h3 className='text-4xl text-red-600'>Let's Work Together</h3>
              <p className='text-white/60'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis soluta aperiam quas.</p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input type="firstname" placeholder="Firstname"/>
                <Input type="lastname" placeholder="Lastname"/>
                <Input type="email" placeholder="Email address"/>
                <Input type="phone" placeholder="Phone number"/>
              </div>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value = "est">Front End Development</SelectItem>
                    <SelectItem value = "cst">Back End Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea className="h-[200px]" placeholder="Type your message here."/>

              <Button size="md" className="max-w-40 text-white">Send Message</Button>
            </form>
          </div>

          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-8'>
            <ul className='flex flex-col gap-10'>
              {info.map((item, index)=>{
                return <li key={index} className='flex items-center gap-6'>
                  <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-red-600 rounded-md flex items-center justify-center'>
                    <div className='text-[28px]'>{item.icon}</div>
                  </div>
                  <div className='flex-1'>
                    <p className='text-white/60'>{item.title}</p>
                    <h3 className='text-xl'>{item.despcription}</h3>
                  </div>
                </li>
              })}
            </ul>
            </div>
        </div>
      </div>
      

    </motion.section>
  )
}

export default Contact
