"use client"
import React from 'react'
import { useSwiper } from 'swiper/react'
import {PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"

const WorkSliderBtns = ({constainerStyles, btnStyles, iconStyles}) => {
    const swiper = useSwiper()
  return (
    <div className={constainerStyles}>
     <button className={btnStyles} onClick={()=> swiper.slidePrev()}>
        <PiCaretLeftBold className={iconStyles}/>
        </button>

     <button className={btnStyles}>
        <PiCaretRightBold className={iconStyles} onClick={()=> swiper.slideNext()}/>
        </button>
    </div>
  )
}

export default WorkSliderBtns
