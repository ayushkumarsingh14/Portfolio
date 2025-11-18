import React from "react";
import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { DiCss3, DiHtml5, DiJavascript1, DiReact, DiJava } from "react-icons/di";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="mt-36 max-w-[1200px] mx-auto relative">
      <div className="grid md:grid-cols-2 place-items-center gap-8">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Fullstack Java Dev",
              1000,
              "React Developer",
              1000,
              "JS Enthusiast",
              1000,
              "Passionate Coder",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            HEY, I AM <br />
            <span className="text-purple-500">Ayush Kumar Singh</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            I am a passionate fullstack developer skilled in Java and React,
            always eager to learn and build innovative solutions.
          </motion.p>

          {/* BUTTON + SOCIALS */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            {/* Download CV Button */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
              border-purple-400 rounded-xl"
            >
              <a
                href="https://drive.google.com/file/d/17OXZh5s3cHQV7zA1vVfyxBTNIrt0zj95/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </motion.button>

            {/* Social Icons */}
            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
              <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/ayushkumarsingh14">
                <AiOutlineGithub />
              </motion.a>

              <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/ayush-kumar-singh-7ba5862ba">
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a whileHover={{ scale: 1.2 }} href="https://instagram.com/">
                <AiOutlineInstagram />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE — CIRCULAR IMAGE */}
        
{/* RIGHT SIDE — CIRCULAR IMAGE */}
{/* RIGHT SIDE — CIRCLE SAME, IMAGE BIGGER */}
<motion.div
  className="relative flex justify-center items-center"
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
>

  {/* SAME CIRCLE */}
  <div
    className="absolute w-[240px] h-[240px] md:w-[320px] md:h-[320px]
               rounded-full bg-purple-500 blur-[60px] opacity-20">
  </div>

  {/* SAME BORDER + CIRCLE FRAME */}
  <div
    className="rounded-full overflow-hidden
               border-[2px] border-purple-300
               shadow-[0_0_25px_rgba(168,85,247,0.25)]">
    <img
      src={profilepic}
      className="w-[260px] md:w-[340px] object-cover rounded-full"
      alt="profile"
    />
  </div>
</motion.div>



      </div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
      >
        <p className="text-gray-200 mr-6">My Tech Stack</p>
        <DiHtml5 className="text-orange-600 mx-2" />
        <DiCss3 className="text-blue-600 mx-2" />
        <DiJavascript1 className="text-yellow-500 mx-2" />
        <DiReact className="text-blue-500 mx-2" />
        <DiJava className="text-green-500 mx-2" />
      </motion.div>

      {/* Background Shine */}
      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
