import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { TbMoodCrazyHappyFilled } from "react-icons/tb";


const Footer = () => {
  return (
    <div className='bg text-center text-light p-5'>
      <h4>Contact Us</h4>
      <h6 className='mt-4'><FaEnvelope className='fs-5 me-2' /> resumebuilder@gmail.com</h6>
      <h6 className='mt-4'><FaPhone className='fs-5 me-2' /> 9234567823</h6>
      <br />
      <h5>Contact Us</h5>
      <div className='d-flex justify-content-center align-items-center'>
        <FaWhatsapp className='fs-4 me-3' />
        <FaInstagram className='fs-4 me-3' />
        <FaLinkedin className='fs-4 me-3' />
      </div>
      <p className='mt-3'> designed & built with <TbMoodCrazyHappyFilled /> using react </p>

    </div>
  )
}

export default Footer