import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer } from '../utils/motion,js'


const SectionWrapper = (Component, idName) => function HOC(){
  return (
    <motion.section
    variants={staggerContainer()}
    initial='hidden'
    whileInView='show'
    viewport={{once:true, amount:0.25}}
    className='padding-x padding-y max-container relative z-0'
    id = {idName}
    >
        
        <Component/>
    </motion.section>
  )
}

export default SectionWrapper