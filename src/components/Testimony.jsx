import React from 'react'
import { motion } from 'framer-motion'

const Testimony = () => {
  return (
    <div className='bg-FFD700'>
       <section className="bg-orange-400 text-white py-16 px-6 lg:px-20">
      <motion.div
        initial={{x: 100, opacity:0}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:0.8}} className="max-w-4xl mx-auto text-center">
        <blockquote className="text-xl font-light leading-relaxed">
          <span className="text-4xl font-bold">“</span> 
          As a designer, I take a very pragmatic and data-informed approach to problem-solving. 
          I like to understand key business goals, metrics that the team cares about, and 
          ultimately think about how they shape the roadmap and the reasons/purposes behind my 
          initiatives. I know how to be scrappy and flexible, but I also know when to button up 
          and really think through design solutions. My strengths lie in working across multiple 
          projects, executing high-quality designs quickly, and collaborating with cross-functional 
          partners. I love growing the product, impacting the business, and have a passion for craft.
          <span className="text-4xl font-bold">”</span>
        </blockquote>
      </motion.div>
    </section>
    </div>
  )
}

export default Testimony
