import React, { useState, useEffect } from 'react';
import './Skills.scss';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip'; // Import the correct named export
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';

// Define your skills and experiences data as arrays
const skillsData = [
  { name: 'React', bgColor: '#ffffff', icon: images.react },
  { name: 'NodeJS', bgColor: '#ffffff', icon: images.node },
  { name: 'ExpressJS', bgColor: '#ffffff', icon: images.expressjs },
  { name: 'Mongo DB', bgColor: '#ffffff', icon: images.mongodb },
  { name: 'Typescript', bgColor: '#ffffff', icon: images.tscircle },
  { name: 'Tailwind', bgColor: '#ffffff', icon: images.tailwind },
  { name: 'Python', bgColor: '#ffffff', icon: images.python },
  { name: 'C++', bgColor: '#ffffff', icon: images.cpp },
];

const experiencesData = [
  { year: 'Year 1', works: [{ name: 'Work 1', company: 'Company 1', desc: 'Description 1' }] },
  { year: 'Year 2', works: [{ name: 'Work 2', company: 'Company 2', desc: 'Description 2' }] },
  // Add more experiences as needed
];

const Skills = () => {
  const [experiences, setExperiences] = useState(experiencesData);
  const [skills, setSkills] = useState(skillsData);

  useEffect(() => {
    // No need to fetch data from the client since we're using local data
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={index}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience, index) => (
            <motion.div
              className="app__skills-exp-item"
              key={index}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work, subIndex) => (
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    data-for={work.name}
                    key={subIndex}
                  >
                    <h4 className="bold-text">{work.name}</h4>
                    <p className="p-text">{work.company}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills,'app__skills'),
  'skills',);

