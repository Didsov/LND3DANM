import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { div } from 'three/examples/jsm/nodes/Nodes.js'

const ExpirienceCard = ({data}) => {
  return (
    <VerticalTimelineElement
    contentStyle={{background: '#1d1836', color:'#fff'}}
    contentArrowStyle={{borderRight:'7px solid #232631'}}
    date={data.date}
    iconStyle={{background: data.iconBg} }
    icon={
        <div className='flex justify-center items-center w-full h-full'> 
            <img src={data.icon} alt={data.company_name}  className='w-[60%] h-[60%] object-contain'/>
            
        </div>
    }
    >
        <div>
            <h3 className='text-white text-[24px]'>{data.title}</h3>
            <p className='text-secondary text-[16px] font-semibold' style={{margin:0}}>
                {data.company_name}
            </p>
        </div>
        <ul className='mt-5 list-disc ml-5 space-y-2'>
            {data.points.map((item,index)=>(
                <li key={'ex-point-' + index}
                className='text-white text-[14px] pl-1 tracking-wider'>
                    {item}
                </li>
            ))}

        </ul>

    </VerticalTimelineElement>
  )
}

export default ExpirienceCard