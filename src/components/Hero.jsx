import React from 'react'
import Hero3D from './Hero3D'
import HeroCanvas from './Hero3D'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section
    className='relative max-container h-screen'
    >
        <div className='padding-x absolute inset-0 top-[120px] mx-auto  max-w-7xl flex items-start gap-5'>
            <div className="flex flex-col justify-center items-center mt-5">
                <div className='w-5 h-5 rounded-full bg-purple-400' />
                <div className='w-1 sm:h-80 h-40 violet-gradient' />
            </div>
            <div>
                <h1 className='heroHeadText' >Hi, I'm <span className='text-[#915eff]'>Name</span></h1>
                <p className='heroSubText max-w-xl'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nihil porro incidunt.</p>
            </div>

        </div>
        <HeroCanvas/>

        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
            <a href="#about">
                <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                <motion.div
                animate={{
                    y: [0,24,0]
                }}
                transition={
                    {
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: 'loop'
                    }
                }
                className='w-3 h-3 rounded-full bg-secondary mg-1'
                />
                </div>
            </a>

        </div>
    </section>
  )
}

export default Hero