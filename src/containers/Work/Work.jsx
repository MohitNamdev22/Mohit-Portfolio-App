import React, { useState, useEffect } from 'react';
import './Work.scss';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import { urlFor } from '../../client'; // Remove client import

// Define a local array for works
const works = [
  { 
    title: 'Medflip', 
    description: 'Description for Project 1', 
    imgUrl: images.medflip,
    projectLink: 'link_to_project1',
    codeLink: 'link_to_code1',
    tags: ['Frontend', 'Backend', 'Full-Stack']
  },
  { 
    title: 'Course Selling App', 
    description: 'Description for Project 2', 
    imgUrl: images.course,
    projectLink: 'www.google.com',
    codeLink: 'link_to_code2',
    tags: ['Frontend', 'Backend', 'Full-Stack']
  },
  { 
    title: 'CalcMate', 
    description: 'Description for Project 2', 
    imgUrl: images.calcmate,
    projectLink: 'www.google.com',
    codeLink: 'link_to_code2',
    tags: ['Frontend']
  },
  { 
    title: 'LayerCorp Website', 
    description: 'Description for Project 2', 
    imgUrl: images.layercorp,
    projectLink: 'www.google.com',
    codeLink: 'link_to_code2',
    tags: ['Frontend']
  },
  { 
    title: 'My Notes App', 
    description: 'Description for Project 2', 
    imgUrl: images.mynotes,
    projectLink: 'www.google.com',
    codeLink: 'link_to_code2',
    tags: ['Frontend']
  },
  { 
    title: 'STIC Website', 
    description: 'Description for Project 2', 
    imgUrl: images.STIC,
    projectLink: 'www.google.com',
    codeLink: 'link_to_code2',
    tags: ['Frontend']
  },
  { 
    title: 'Text Analyzer Tool', 
    description: 'Description for Project 2', 
    imgUrl: images.textanalyser,
    projectLink: 'www.google.com',
    codeLink: 'link_to_code2',
    tags: ['Frontend']
  },
  // Add more works as needed
];

const Work = () => {
  const [activeFilter, setactiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    // Set initial filtered works to all works
    setFilterWork(works);
  }, []);

  const handleWorkFilter = (item) => {
    setactiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    });
  };

  return (
    <>
      <h2 className="head-text">My Creative <span>Projects</span> section</h2>

      <div className="app__work-filter">
        {['Frontend', 'Backend', 'Full-Stack', 'ML Project', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className='app__work-hover app__flex'
              >
                <a href={work.projectLink} target="_blank" rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                    className='app__flex'
                  >
                    <AiFillEye />
                  </motion.div>
                </a>

                <a href={work.codeLink} target="_blank" rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                    className='app__flex'
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className='p-text' style={{ marginTop: 10 }}>{work.description}</p>
              <div className="app__work-tag app__flex">
                {work.tags.map((tag, tagIndex) => (
                  <p key={tagIndex} className="p-text">{tag}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work,'app__works'),
  'work',
"app__primarybg");
