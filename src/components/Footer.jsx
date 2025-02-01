import React from 'react'
import { TbWorldPin } from 'react-icons/tb'
import { MdEmail } from 'react-icons/md'
import { FaFacebook} from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { SiMedium } from 'react-icons/si'
import { BiX } from 'react-icons/bi'
const Footer = () => {
  return (
    <footer className='bg-gray-800 px-10 text-white'>
        <div className='grid grid-cols-1 md:grid-cols-4  py-10 gap-x-10'>
            <div>
                <h1 className='font-bold mb-4'>ABOUT ME</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, neque ducimus soluta commodi aut illum quis quod deleniti possimus nesciunt eos error nisi numquam maxime fugit sit, asperiores nemo. Obcaecati.</p>
            </div>
            <div>
                <h1 className='font-bold mb-4'>NAVIGATIONS</h1>
                <ul className='space-y-5'>
                    <li><a href="./Home" className='hover:underline'>Home</a></li>
                    <li><a href="./project" className='hover:underline'>Projects</a></li>
                    <li><a href="./technologies" className='hover:underline'>Technologies</a></li>
                    <li><a href="./testimony" className='hover:underline'>Testimony</a></li>
                </ul>
            </div>
            <div>
                <h1 className='font-bold mb-4'>CONTACTS</h1>
                <ul className='space-y-5'>
                    <li><a href="" className='flex items-center'><TbWorldPin className=' text-white mr-3'/><span>location</span></a></li>
                    <li><a href="" className='flex items-center'><MdEmail className=' text-white mr-3'/>email</a></li>
                </ul>



            </div>
            <div>
                <h1 className='font-bold mb-4'>FOLLOW ME HERE</h1>
                <ul className='flex space-x-5'>
                    <li><a href="" className='hover:underline'> <FaGithub/></a></li>
                    <li><a href="" className='hover:underline'> < FaLinkedin/></a></li>
                    <li><a href="" className='hover:underline'> < SiMedium/></a></li>
                    <li><a href="" className='hover:underline'> < FaInstagram/></a></li>
                    <li><a href="" className='hover:underline'> < FaFacebook/></a></li>
                    <li><a href="" className='hover:underline'> < BiX/></a></li>
                </ul>
            </div>
        </div>
        <div className=' border-t border-gray-100  py-5'>
            <p>Made with love by GAYASHAN (GH) | @copyright 2025</p>
        </div>
    </footer>
    
  )
}

export default Footer