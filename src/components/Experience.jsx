
import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
    {
        company: 'Weather Project',
        period: '2024',
        description: 'Built a weather application using HTML, CSS, and JavaScript. Implemented real-time weather data fetching using APIs.'
    },
    {
        company: 'Typing Speed Test',
        period: '2024',
        description: 'Developed a typing speed test application using HTML, CSS, and JavaScript. Added dynamic speed calculation and error tracking.'
    },
    {
        company: 'Plant Website',
        period: '2024',
        description: 'Designed a responsive plant website using Tailwind CSS with modern UI/UX practices.'
    },
    {
        company: 'Amazon Clone',
        period: '2024',
        description: 'Created an Amazon Clone using HTML, CSS, and JavaScript, with product listings and cart functionalities.'
    },
    {
        company: 'Movie App',
        period: '2025',
        description: 'Built a movie app using React with features like movie search, details, and dynamic routing.'
    },
    {
        company: 'Tic-Tac-Toe Game',
        period: '2025',
        description: 'Developed a Tic-Tac-Toe game using React with Player vs Computer mode. Implemented Minimax Algorithm for unbeatable AI in Hard mode.'
    },
    {
        company: 'NFT-Themed Web3 Project',
        period: '2025',
        description: 'Built an NFT-themed project with AI-generated images, blockchain integration, and marketplace for buying and selling NFTs.'
    }
]

const Experience = () => {
  return (
    <div className='p-8 max-w-[650px] mx-auto'>
        <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experience</h1>
        <motion.div className='space-y-8'>
            {experiences.map((experience, index) => (
                <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className='border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
                >
                    <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
                    <p className='text-gray-300'>{experience.period}</p>
                    <p className='text-gray-400 mt-4'>{experience.description}</p>
                </motion.div>
            ))}
        </motion.div>
    </div>
  )
}

export default Experience
