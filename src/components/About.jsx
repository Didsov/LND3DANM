import { motion } from 'framer-motion'
import React from 'react'
import { Tilt } from 'react-tilt'
import { services } from '../constants'
import ServiceCard from './ServiceCard';
import { SectionWrapper } from '../hoc'

export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const About = () => {

  services
  return (
    <section className='flex flex-col items-center'>
      <motion.div variants={textVariant()}>
        <p className='sectionSubText'>Introduction</p>
        <h2 className='sectionHeadText'>Overview.</h2>
      </motion.div>
      <motion.p 
      variants={fadeIn('','',0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio asperiores placeat assumenda dolores, labore blanditiis natus doloremque, dicta magni, illo nam? Eveniet nam dolorem hic minima voluptas id ipsam quod!
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10 max-md justify-center'>
        {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service}  />
          )
          

        )}
        
      </div>
    </section>
  )
}

export default SectionWrapper(About, 'about')