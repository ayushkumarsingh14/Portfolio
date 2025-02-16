import React from "react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <div className="grid md:grid-cols-2 place-items-center">
        <div className="text-center md:text-left">
          <div className="text-gray-300 my-3">
            <h3 className="text-4xl font-semibold mb-5">About <span>Me</span></h3>
            <p className="text-justify md:text-left leading-7 w-full md:w-11/12 mx-auto">
              I am a passionate Full Stack Developer currently pursuing B.Tech in Computer Science. 
              I love building interactive web applications and exploring new technologies.
            </p>
          </div>

          <div className="flex flex-col md:flex-row mt-10 items-center gap-7">
            <div className="bg-gray-800/40 p-4 rounded-lg w-40 text-center">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">10<span>+</span></h3>
              <p className="text-xs md:text-base"><span>Technologies Explored</span></p>
            </div>

            <div className="bg-gray-800/40 p-5 rounded-lg w-40 text-center">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">3<span>+</span></h3>
              <p className="text-xs md:text-base"><span>Certifications</span></p>
            </div>

            <div className="bg-gray-800/40 p-5 rounded-lg w-40 text-center">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">2<span>+</span></h3>
              <p className="text-xs md:text-base"><span>Hackathons</span></p>
            </div>
          </div>
        </div>

        <form
          action="https://getform.io/f/bkkykdgb"
          method="POST"
          className="max-w-6xl p-5 md:p-12 w-full"
          id="form"
        >
          <p className="text-gray-100 font-bold text-xl mb-2 text-center md:text-left">
            Let´s connect!
          </p>
          <input
            type="text"
            id="name"
            placeholder="Your Name ..."
            name="name"
            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 text-white placeholder-gray-400 bg-transparent"
          />
          <input
            type="email"
            id="email"
            placeholder="Your Email ..."
            name="email"
            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 text-white placeholder-gray-400 bg-transparent"
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="4"
            placeholder="Your Message ..."
            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 text-white placeholder-gray-400 bg-transparent"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
