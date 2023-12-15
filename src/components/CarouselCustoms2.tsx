import React from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

export const CustomPrevArrow = ({ onClick, custom }: any) => (
  <div className={`bg-main rounded-full text-white opacity-75 text-4xl absolute top-[40%] translate-y-[-40%] cursor-pointer z-10 left-4 lg:-left-4 xl:-left-8 ${custom}`} onClick={onClick}>
    <MdKeyboardArrowLeft />
  </div>
)

export const CustomNextArrow = ({ onClick, custom }: any) => (
  <div className={`bg-main rounded-full text-white opacity-75 text-4xl absolute top-[40%] translate-y-[-40%] cursor-pointer z-10 right-4 lg:-right-4 xl:-right-8 ${custom}`} onClick={onClick}>
    <MdKeyboardArrowRight />
  </div>
)
