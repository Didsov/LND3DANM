import React, { useRef, useState } from 'react'
import {motion} from 'framer-motion'
import { slideIn } from '../utils/motion,js'
import { SectionWrapper } from '../hoc';
import EarthCanvas from './canvas/EarthCanvas';

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name:'',
        email:'',
        message:'',
    })
    const [loading, setLoading] = useState(false);

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setForm(
            {
                ...form, [name]:value 
            }
        )

    }
    const handleSubmit = (e)=>{
            e.preventDefault()
            setLoading(true)
            // sendFunction...
            setLoading(false)
    }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
            variants={slideIn('left', 'tween', 0.2, 1)}
            className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        > 
        <p className='sectionSubText'>Get in touch</p>
        <h3 className='sectionHeadText' >Contact.</h3>

        <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
        >
            <label className='flex flex-col'>
                <span className='text-white font-medium bg-4 mb-4'>Your Name</span>
                <input type="text"
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
            </label>

            <label className='flex flex-col'>
                <span className='text-white font-medium bg-4 mb-4'>Your email</span>
                <input type="text"
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email?"
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
            </label>

            <label className='flex flex-col'>
                <span className='text-white font-medium bg-4 mb-4'>Your Message</span>
                <textarea 
                    rows='7'
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What do you want say?"
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
            </label>
            <button
             type='submit'
             disabled
                className='font-bold shadow-primary bg-tertiary py-3 px-8 outline-none w-fit text-white shadow-md rounded-xl disabled:bg-slate-900 disabled:text-gray-800'
            >
                {loading? 'Sending...': 'Send'}
            </button>
        </form>

        </motion.div>
        <motion.div
            variants={slideIn('right', 'tween', 0.2, 1)}
            className='xl:flex-1 xl:g-auto md:h-[550px] h-[350px]'

        >
            <EarthCanvas/>


        </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')