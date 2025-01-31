import React from 'react'
import { SiApmterminals } from 'react-icons/si'
import { HERO_CONTENT } from '../constants'
import profile from '../assets/profile.jpg'
import sliit from '../assets/sliitnew.jpg'
const Hero = () => {
  return (
    <div /* className=' pb-4 lg:mb-10' */>
        <div className='flex flex-wrap items-center min-h-[80vh] bg-black'>

{/* left section */}
            <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left px-6 lg:px-16'>
                <div className='flex flex-col items-center lg:items-start '>
                    <h1 className='pb-6 text-xl font-bold tracking-tight lg:text-5xl text-white'>HELLO,I'M GAYASHAN.</h1>
                    <h1 className='pb-6 text-xl font-bold tracking-tight lg:text-5xl text-white mb-5'>NICE TO MEET YOU!</h1>
                    <p className=' text-white  mb-10'>{HERO_CONTENT}</p>
                    <img src={sliit} className='w-40 h-7'></img>
                </div>
            </div>

{/* right section */}
            <div className='w-full lg:w-1/2 items-center'>
                <div className='flex justify-center'>
                    <img src={profile} className='w-full h-full ' alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
