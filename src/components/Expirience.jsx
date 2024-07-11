import React from 'react'
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import {motion} from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { textVariant } from './About'
import { experiences } from '../constants'
import ExpirienceCard from './ExpirienceCard'

const Expirience = () => {
  return (
    <> 
    <motion.div 
        variants={textVariant()}
    > 
    <p className='sectionSubText'>What i have done so far</p>
    <h2 className='sectionHeadText'>Work Exprerience.</h2>
    </motion.div>
    <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
            {
                experiences.map((item, index)=>(
                    <ExpirienceCard key={index} data={item} />
                ))
            }
        </VerticalTimeline>
    </div>
    </>
    
  )
}

export default SectionWrapper(Expirience, 'work')