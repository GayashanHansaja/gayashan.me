import React from 'react'
import { DiMongodb } from 'react-icons/di'
import { FaFlutter,FaDartLang,FaJava,FaJs,FaReact } from 'react-icons/fa6'

const techIcon=[
    {id:1 ,icon:FaFlutter},
    {id:2 ,icon:FaDartLang},
    {id:3 ,icon:FaJava},
    {id:4 ,icon:FaJs},
    {id:5 ,icon:FaReact},
    {id:6 ,icon:DiMongodb},

]
const Technologies = () => {
  return (
    <div className=' pb-24'>
        <h1 className='my-20 text-center text-4xl text-white'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>

        {techIcon.map(({id,icon}) =>(
            <div key={id} className='rounded-2xl border-4 border-neutral-800 p-4'>
                <icon className='text-7xl text-blue-400'/>
            </div>
        )) }
        </div>

    </div>
  );
};

export default Technologies