import React from 'react'
import { HERO_CONTENT } from '../constants'
import profile from '../assets/kevinRushProfile.jpg'

const Abexre = () => {
  return (
    <div className=' pb-4 lg:mb-36 ' >
            <div className='flex flex-wrap items-center min-h-[80vh] bg-black'>
    
    {/* left section */}
                <div className='w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left px-6 lg:px-16'>
                    <div className='flex flex-col items-center lg:items-start '>
                        <h1 className='pb-6 text-xl font-thin tracking-tight lg:text-7xl text-blue-100'>ABOUT ME</h1>
                        
                        <p className=' text-blue-100'>{HERO_CONTENT}</p>
                    </div>
                </div>

                <div className='w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left px-6 lg:px-16'>
                    <div className='flex flex-col items-center lg:items-start '>
                        <h1 className='pb-6 text-xl font-thin tracking-tight lg:text-7xl text-blue-100'>EXPERIENCE</h1>
                        
                        <p className=' text-blue-100'>{HERO_CONTENT}</p>
                    </div>
                </div>
    
    {/* right section */}
                <div className='w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left px-6 lg:px-16'>
                    <div className='flex flex-col items-center lg:items-start '>
                        <h1 className='pb-6 text-xl font-thin tracking-tight lg:text-7xl text-blue-100'>RECENT</h1>
                        
                        <p className=' text-blue-100'>{HERO_CONTENT}</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Abexre
