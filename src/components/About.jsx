import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import resume from "../assets/resume.pdf";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-[#FFFFFF] text-[17px] max-w-3xl leading-[30px]"
        >
        I’m a dedicated computer science student passionate about solving 
        real-world challenges through innovative technology. With expertise in artificial intelligence, 
        data structures, and software development, I thrive in dynamic environments where collaboration 
        and creativity drive impactful solutions. Whether mentoring students, contributing to research, 
        or building efficient systems, I’m committed to excellence and continuous learning. Explore my 
        journey and projects to see how I turn ideas into reality!
        </motion.p>
      </div>
      <div className="mt-5 flex space-x-4">
        <a
          href="https://github.com/Ogieriakhi17"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="text-white hover:text-[#C4CDD2] transition-colors w-6 h-6"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/osaze-ogieriakhi-62114425b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-white hover:text-[#C4CDD2] transition-colors w-6 h-6"
          />
        </a>
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#C4CDD2] transition-colors"
        >
          View Resume
        </a>
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <Tilt className="w-full" key={service.title}>
            <motion.div
              variants={fadeIn("right", "spring", index * 0.5, 0.75)}
              className="green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
            <div
              className="bg-tertiary rounded-[20px] py-5 px-12 h-auto flex justify-evenly items-center flex-col"
            >
          <img
            src={service.icon}
            alt={service.title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {service.title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  ))}
</div>

    </>
  );
};

export default SectionWrapper(About, "about");