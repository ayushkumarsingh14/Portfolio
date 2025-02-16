import React from 'react';
import { FaGithubSquare, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto p-6 md:p-20 mt-12 text-sm md:text-lg border-t border-gray-800'>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
        <div className='space-y-2'>
          <h3 className='text-2xl text-gray-200 font-semibold'>Ayush Kumar Singh</h3>
          <p className='text-gray-500'>Java Full Stack Developer</p>
          <div className='flex gap-4 text-3xl text-gray-500'>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <FaGithubSquare className='hover:text-white transition duration-300' />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className='hover:text-pink-500 transition duration-300' />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='hover:text-blue-500 transition duration-300' />
            </a>
          </div>
        </div>

        <div className='mt-6 md:mt-0'>
          <h4 className='text-gray-400'>Contact Me:</h4>
          <p className='text-gray-500 flex items-center'>
            <FaEnvelope className='mr-2' /> aaks.feb14@gmail.com
          </p>
        </div>
      </div>

      <p className='text-gray-600 text-center mt-6'>&copy; 2025 Ayush Kumar Singh</p>
    </div>
  );
};

export default Footer;
