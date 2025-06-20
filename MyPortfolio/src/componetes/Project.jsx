import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "motion/react"

function Project() {
  return (
    <>
        <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>Projects</h1>
        <div>{PROJECTS.map((project, index) => (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div 
                    whileInView={{
                        opacity: 1, x: 0
                    }}
                    initial={{opacity: 0, x : -100}}
                    Transition={{duration:0.5}}
                    className='w-full lg:w-1/4'>
                    <img src={project.image} alt={project.title} width={150} height={150} className='mb-6 rounded-xl w-full h-45 lg:w-45'/>
                </motion.div>
                <motion.div 
                    whileInView={{
                        opacity: 1, x: 0
                    }}
                    initial={{opacity: 0, x : 100}}
                    Transition={{duration:0.5}}
                    className='w-full max-w-xl lg:w-3/4 text-left'>
                    <h6 className='mb-2 font-semibold'>{project.title}</h6>
                    <p className='mb-4 text-neutral-400'>{project.description}</p>
                    {project.technologies.map((tech, index) => (
                        <span key = {index} className='mr-2 rounded bg-neutral-900 px-2 py-2 text-sm font-medium text-purple-00'>{tech}</span>
                    ))}
                </motion.div>
            </div>
        ))}</div>
    </div>
    </>
    
  )
}

export default Project