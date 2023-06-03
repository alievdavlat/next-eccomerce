import React from 'react'
import { motion } from "framer-motion";
import { textContainer, textVariant2 } from '@/utils/motion';
import { useContext } from 'react';
import { Context } from '@/pages/_app';

export const  SectionTitle = ({title}) => {
  const { mode } = useContext(Context)
  return (
  <motion.h1
  initial="hidden"
  whileInView={"show"}
  variants={textContainer}
  className={`font-bold text-[40px] pb-5 border-b-[1px] ${mode ? 'border-black text-black' : 'border-white text-white'}`}>
    {Array.from(title).map((letter, idx) => (
      <motion.span variants={textVariant2} key={idx}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.h1>
 
 )
  }
     




export const SectionTexts = ({text}) => {
  const { mode } = useContext(Context)

 return(
  <motion.p
    variants={textVariant2}
    initial="hidden"
    whileInView={"show"}
    className={`mt-[20px] font-normal md:text-[16px] text-[16px] ${mode ? 'text-black' : 'text-white'}`}
    
    >
      {text}
  </motion.p>
)
}