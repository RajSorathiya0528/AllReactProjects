import React from 'react'
import Logo from '../assets/Logo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
function NaveBar() {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div classNmae='flex flex-shrink-0 items-center'>
            <img className='mx-5 w-15'src={Logo} alt='Logo'/>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedin />
            <FaGithub />
            <FaTwitter />
            <FaInstagram />
        </div>
    </nav>
  )
}

export default NaveBar