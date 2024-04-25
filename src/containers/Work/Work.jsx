import React, { useState, useEffect } from 'react';
import './Work.scss';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import { urlFor } from '../../client';

const works = [
  { 
    title: 'Medflip', 
    description: 'Medflip is a marketplace to sell your used medicine', 
    imgUrl: images.medflip,
    projectLink: 'https://med-flip.vercel.app/',
    codeLink: 'https://github.com/MohitNamdev22/MedFlip',
    tags: ['Frontend', 'Backend', 'Full-Stack']
  },
  { 
    title: 'BookStore App', 
    description: 'Bookstore MERN App', 
    imgUrl: images.bookstore,
    projectLink: 'https://github.com/MohitNamdev22/BookStore-MERN',
    codeLink: 'https://github.com/MohitNamdev22/BookStore-MERN',
    tags: ['Frontend', 'Backend', 'Full-Stack']
  },
  { 
    title: 'Course Selling App', 
    description: 'A basic Full Stack Application', 
    imgUrl: images.course,
    projectLink: 'https://github.com/MohitNamdev22/CourseSellingApp',
    codeLink: 'https://github.com/MohitNamdev22/CourseSellingApp',
    tags: ['Frontend', 'Backend', 'Full-Stack']
  },
  { 
    title: 'CalcMate', 
    description: 'Open Source Calculator', 
    imgUrl: images.calcmate,
    projectLink: 'https://calcmatecalculator.netlify.app/',
    codeLink: 'https://github.com/MohitNamdev22/CalcMate',
    tags: ['Frontend']
  },
  { 
    title: 'LayerCorp Website', 
    description: 'A Website for Marketing Agency', 
    imgUrl: images.layercorp,
    projectLink: 'https://mohitnamdev22.github.io/LayerCorp/',
    codeLink: 'https://github.com/MohitNamdev22/LayerCorp',
    tags: ['Frontend']
  },
  { 
    title: 'My Notes App', 
    description: 'It is a Note Taking Application', 
    imgUrl: images.mynotes,
    projectLink: 'https://mohitnamdev22.github.io/MyNotes/',
    codeLink: 'https://github.com/MohitNamdev22/MyNotes',
    tags: ['Frontend']
  },
  { 
    title: 'STIC Website', 
    description: 'A Website made for Coding Society', 
    imgUrl: images.STIC,
    projectLink: 'https://sticmedicaps.netlify.app/',
    codeLink: 'https://github.com/MohitNamdev22/STIC_website',
    tags: ['Frontend']
  },
  { 
    title: 'Text Analyzer Tool', 
    description: 'An utility app which performs different operations on Text', 
    imgUrl: images.textanalyser,
    projectLink: 'https://mohitnamdev22.github.io/Text-Analyzer/',
    codeLink: 'https://github.com/MohitNamdev22/Text-Analyzer',
    tags: ['Frontend']
  },
];

const Work = () => {
  const [activeFilter, setactiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
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
