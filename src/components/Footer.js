import React from 'react'
import {FaTwitter, FaFacebook, FaInstagram, FaGithub} from 'react-icons/fa'


export const Footer = () => {
  return (
    <div className='footer'>
      <FaTwitter className='icon'/>
      <FaFacebook className='icon'/>
      <FaInstagram className='icon'/>
      <FaGithub className='icon'/>
    </div>
  )
}
