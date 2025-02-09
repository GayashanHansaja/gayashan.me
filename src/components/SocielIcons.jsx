import { link } from 'framer-motion/client';
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaMedium ,FaGithub , FaTwitter } from "react-icons/fa";

const socielIcons = [
    {id:1 , icon:FaGithub , link:'https://github.com/GayashanHansaja'},
    {id:2 , icon:FaLinkedin , link:'https://linkedin.com/in/gayashan-hansaja'},
    {id:3 , icon:FaMedium , link:'https://medium.com/@GayashanHansaja'},
    {id:4 , icon:FaInstagram, link: 'https://www.instagram.com/hanz_gayashan'},
    {id:5 , icon:FaFacebook },
    {id:6 , icon:FaTwitter }
    

];

const SocielIcons = () => {
    const handleClick = (link) => {
        window.open(link); // Opens the link in a new tab
      };
  return (
    <div className='flex  space-x-5'>
        {socielIcons.map(({id ,icon:Icon ,link}) => (
            <div key={id}  className='groupe w-10 h-10 flex items-center justify-center bg-transparent border border-white  transition-all duration-300' onClick={()=>handleClick(link)}>
                
                <div className='w-full h-full flex items-center justify-center'>
            <Icon className='text-lg text-white' />
          </div>
          <div className='absolute inset-0 bg-yellow-500 transition-all duration-300 transform origin-bottom scale-y-0 group-hover:scale-y-100'></div>

            </div>
        ))}
    </div>
    );
};
         
    

export default SocielIcons