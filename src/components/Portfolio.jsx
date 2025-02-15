import React from 'react';
import project1 from "../assets/project1.jpeg";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpeg";
import project4 from "../assets/project4.jpeg";
import project5 from "../assets/project5.jpeg";
import project6 from "../assets/project6.jpeg";
import { AiFillGithub } from 'react-icons/ai';

const projects = [
    {
      img: project1,
      title: "Movie App",
      description: "UI for frontend development using React.",
      links: {
        site: "https://movie1-zeta.vercel.app/",
        github: "https://github.com/ayushkumarsingh14/Movie",
      },
    },
    {
      img: project2,
      title: "IndorePlants",
      description: "A fullstack application built with Node.js and MongoDB.",
      links: {
        site: "https://ayushkumarsingh14.github.io/Indoreplants/",
        github: "https://github.com/ayushkumarsingh14/Indoreplants",
      },
    },
    {
      img: project3,
      title: "Weather App",
      description: "Personal portfolio showcasing my projects.",
      links: {
        site: "https://ayushkumarsingh14.github.io/Weather/",
        github: "https://github.com/ayushkumarsingh14/Weather",
      },
    },
    {
      img: project4,
      title: "Typing Test",
      description: "An e-commerce platform with various features.",
      links: {
        site: "https://ayushkumarsingh14.github.io/TypingTest/",
        github: "https://github.com/ayushkumarsingh14/TypingTest",
      },
    },
    {
      img: project5,
      title: "Tic-Tac-Toe",
      description: "A mobile-friendly application using React Native.",
      links: {
        site: "https://ayushkumarsingh14.github.io/Tic-Tac-Toe/",
        github: "https://github.com/ayushkumarsingh14/Tic-Tac-Toe",
      },
    },
    {
      img: project6,
      title: "To-Do",
      description: "A data visualization project using D3.js and other libraries.",
      links: {
        site: "https://ayushkumarsingh14.github.io/To-Do/",
        github: "https://github.com/ayushkumarsingh14/To-Do",
      },
    },
];

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((project, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}
            >
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition duration-300'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a 
                          href={project.links.site}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 hover:shadow-lg transition duration-300'
                        >
                            View Site
                        </a>
                        <a 
                          href={project.links.github}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 hover:shadow-lg transition duration-300 flex items-center'
                        >
                            <AiFillGithub className='text-2xl' />
                        </a>
                    </div>
                </div>
            </div>
        ))}
    </div>
  );
};

export default Portfolio;
