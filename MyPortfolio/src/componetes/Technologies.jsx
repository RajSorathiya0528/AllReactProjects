import React from 'react'
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb } from 'react-icons/si';
import { DiRedis } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { motion } from "motion/react"

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y : [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse'
        }
    }
})

function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div
                variants={iconVariants(2.5)}
                initial='initial'
                animate='animate'
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-5xl text-cyan-400' />
            </motion.div>
            <motion.div 
                variants={iconVariants(3)}
                initial='initial'
                animate='animate'
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandNextjs className='text-5xl' />
            </motion.div>
            <motion.div 
                variants={iconVariants(3.5)}
                initial='initial'
                animate='animate'
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-5xl text-green-500' />
            </motion.div>
            <motion.div
                variants={iconVariants(4)}
                initial='initial'
                animate='animate' 
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiRedis className='text-5xl text-red-700' />
            </motion.div>
            <motion.div 
                variants={iconVariants(3)}
                initial='initial'
                animate='animate'
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-5xl text-green-500' />
            </motion.div>
            <motion.div 
                variants={iconVariants(2.5)}
                initial='initial'
                animate='animate'
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoPostgresql className='text-5xl text-cyan-700' />
            </motion.div>
        </div>
    </div>
  )
}

export default Technologies