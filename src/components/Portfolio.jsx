import React, { useState } from 'react';
import Background_Remover from "../assets/BGRemover.png";
import Movie_App from "../assets/Movie.jpeg";
import Indore_Plants from "../assets/IndorePlants.jpeg";
import Weather_App from "../assets/Weather.jpeg";
import Typing_Test from "../assets/TypingTest.jpeg";
import Tic_Tac_Toe from "../assets/TicTacToe.jpeg";
import Socially from "../assets/socially.png";
import SociallyVideo from "../assets/Socially.mp4"
import BackgroundRemover from "../assets/BGRemover.mp4";
import MovieApp from "../assets/Movie.mp4";
import IndorePlants from "../assets/IndorePlants.mp4";
import WeatherApp from "../assets/Weather.mp4";
import TypingTest from "../assets/TypingTest.mp4";
import TicTacToe from "../assets/TicTacToe.mp4";
import { AiFillGithub } from 'react-icons/ai';
import { FaPlayCircle } from 'react-icons/fa';

const projects = [
  {
    img: Background_Remover,
    video: BackgroundRemover,
    title: "Background Remover",
    description:
      "An AI-powered background remover tool built using React that automatically removes image backgrounds with precision and speed.",
    links: {
      site: "https://bg-remover-rouge-eta.vercel.app/",
      github: "https://github.com/ayushkumarsingh14/BG-Remover-back",
    },
  },
  {
  img: Socially,
  video: SociallyVideo,
  title: "Socially",
  description:
    "A modern social media platform built with Next.js featuring user authentication, posting, commenting, and a clean responsive UI.",
  links: {
    site: "https://socially.vercel.app/",
    github: "https://github.com/ayushkumarsingh14/Socially",
  },
},

  {
    img: Movie_App,
    video: MovieApp,
    title: "Movie App",
    description:
      "A React-based movie application with dynamic search and detailed movie information.",
    links: {
      site: "https://movie1-zeta.vercel.app/",
      github: "https://github.com/ayushkumarsingh14/Movie",
    },
  },
  {
    img: Indore_Plants,
    video: IndorePlants,
    title: "IndorePlants",
    description:
      "Frontend of an e-commerce website for indoor plants, built to sharpen Tailwind CSS skills.",
    links: {
      site: "https://ayushkumarsingh14.github.io/Indoreplants/",
      github: "https://github.com/ayushkumarsingh14/Indoreplants",
    },
  },
  {
  img: Weather_App,
video: WeatherApp,
title: "Weather App",
description:
  "A real-time weather application that shows temperature, humidity, wind speed, and conditions using live API data.",

    links: {
      site: "https://ayushkumarsingh14.github.io/TypingTest/",
      github: "https://github.com/ayushkumarsingh14/TypingTest",
    },
  },
  {
    img: Typing_Test,
    video: TypingTest,
    title: "Typing Test",
    description:
      "A typing speed test application to measure typing accuracy and speed.",
    links: {
      site: "https://ayushkumarsingh14.github.io/TypingTest/",
      github: "https://github.com/ayushkumarsingh14/TypingTest",
    },
  },
  {
    img: Tic_Tac_Toe,
    video: TicTacToe,
    title: "Tic-Tac-Toe",
    description:
      "A Tic-Tac-Toe game with Easy and Hard modes using Minimax algorithm.",
    links: {
      site: "https://ayushkumarsingh14.github.io/Tic-Tac-Toe/",
      github: "https://github.com/ayushkumarsingh14/Tic-Tac-Toe",
    },
  },
];


const Portfolio = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const handlePlay = (index) => {
    setPlayingVideo(index);
  };

  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
      <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
      {projects.map((project, index) => (
        <div 
          key={index} 
          className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}
        >
          <div className='w-full md:w-1/2 p-4 relative group'>
            {playingVideo === index ? (
              <video
                src={project.video}
                className='w-full h-full object-cover rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300'
                controls
                autoPlay
              />
            ) : (
              <div className='relative cursor-pointer' onClick={() => handlePlay(index)}>
                <img
                  src={project.img}
                  alt={project.title}
                  className='w-full h-full object-cover rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300'
                />
                <FaPlayCircle 
                  className="absolute inset-0 m-auto text-white text-6xl opacity-80 group-hover:opacity-100 transition duration-300" 
                />
              </div>
            )}
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
