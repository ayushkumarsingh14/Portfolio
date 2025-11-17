
import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
    {
        company: 'Build for India Hackathon',
        period: '2024',
        description:
            'Reached the semifinals among 25,000+ teams, securing a position in the top 80 globally.'
    },
    {
        company: 'Microsoft Office – Ideathon Event',
        period: '2024',
        description:
            'Organized and managed an Ideathon event in collaboration with Microsoft Office, ensuring smooth coordination and participation.'
    },
    {
        company: 'Hashtag Tech Society',
        period: '2024-Present',
        description:
            'Serving as the Technical Team Head, leading and mentoring members on development-focused initiatives and events.'
    },
    {
        company: 'Data Structures and Algorithms (DSA) Mastery',
        period: '2024-2025',
        description:
            'Mastered Trees, Graphs, Linked Lists, Stacks, and Queues in Java. Solved 140+ problems on GeeksforGeeks, enhancing problem-solving and algorithmic skills.'
    }
];


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
