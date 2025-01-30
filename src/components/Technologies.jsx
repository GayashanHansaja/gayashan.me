import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { DiJavascript } from 'react-icons/di'
import { DiMongodb } from 'react-icons/di'
import { FcNext } from 'react-icons/fc'


const Technologies = () => {
  return (
    <div className=' pb-24'>
        <h1 className='my-20 text-center text-4xl text-white'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-blue-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiJavascript className='text-7xl text-yellow-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-blue-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiMongodb className='text-7xl text-green-700'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FcNext className='text-7xl text-blue-400'/>
            </div>
        </div>

    </div>
  )
}

export default Technologies