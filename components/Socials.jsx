import React from 'react'
import Link from 'next/link'
import {FaGithub, FaLinkedin, FaInstagram,  FaTwitter} from "react-icons/fa"

const social =[
    {icon: <FaGithub/>, path: "https://github.com/aditya-041"},
    {icon: <FaLinkedin/>, path: "https://www.linkedin.com/in/aditya-basu-bbb882256/"},
    {icon: <FaInstagram/>, path: "https://www.instagram.com/_.aditya._041/"},
    {icon: <FaTwitter/>, path: "https://x.com/AdityaK61036935"},
]
const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index)=>{
        return <Link key={index} href = {item.path} className={iconStyles}>
            {item.icon}
        </Link>
      })}
    </div>
  )
}

export default Socials
