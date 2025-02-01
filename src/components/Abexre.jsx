import React from 'react'
import { ABOUT_TEXT, HERO_CONTENT } from '../constants'
import profile from '../assets/kevinRushProfile.jpg'
import { motion } from 'framer-motion'
const Abexre = () => {
  return (
    <div >
            <div className='flex flex-wrap items-center min-h-[80vh] bg-black'>
    
    {/* left section */}
                <div className='w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left px-6 lg:px-16'>
                    <motion.div
                        whileInView={{opacity:1, x:0}}
                        initial={{x: 100, opacity:0}}
                        /* animate={{x:0, opacity:1}} */
                        transition={{duration:0.6}}
                        className='flex flex-col items-center lg:items-start '>
                        <h1 className='pb-6 text-xl font-thin tracking-tight lg:text-7xl text-blue-100'>ABOUT ME</h1>
                        
                        <p className=' text-blue-100'>{ABOUT_TEXT}</p>
                    </motion.div>
                </div>
    {/* middle */}
                <div className='w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left px-6 lg:px-16'>
                    <div className='flex flex-col items-center lg:items-start '>
                        <motion.h1 
                            initial={{x: 100, opacity:0}}
                            whileInView={{opacity:1, x:0}}
                            transition={{duration:0.6}}
                            className='pb-6 text-xl font-thin tracking-tight lg:text-7xl text-blue-100'>EXPERIENCE</motion.h1>
                            
                        <motion.p 
                            initial={{x: 100, opacity:0}}
                            whileInView={{opacity:1, x:0}}
                            transition={{duration:0.8}} className=' text-blue-100'>{HERO_CONTENT}</motion.p>
                    </div>
                </div>
    
    {/* right section */}
                <div className='w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left px-6 lg:px-16'>
                    <motion.div 
                        initial={{x: 100, opacity:0}}
                        whileInView={{opacity:1, x:0}}
                        transition={{duration:0.9,delay:0.2}} className='flex flex-col items-center lg:items-start '>
                        <h1 className='pb-6 text-xl font-thin tracking-tight lg:text-7xl text-blue-100'>RECENT</h1>
                        
                        <p className=' text-blue-100'>{HERO_CONTENT}</p>
                    </motion.div>
                </div>
            </div>
        </div>
  )
}

export default Abexre
