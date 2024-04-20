import React,{useEffect, useState} from 'react'
import './About.scss'
import {motion} from 'framer-motion';
import { images } from '../../constants';

import { AppWrap, MotionWrap } from '../../wrapper'

const abouts = [
  { title:'FrontEnd Development', description:'proficient in HTML, CSS, JavaScript, React.js, and eager to learn Next.js.', imgUrl:images.frontend },
  { title:'Backend Development', description:'I am a good web developer', imgUrl:images.backend },
  { title:'Data Structures & Algorithms', description:'I am a good web developer', imgUrl:images.dsa },
  { title:'Python Programming', description:'I am a good web developer', imgUrl:images.pythonprog }
];


const About = () => {
  return (
    <>
    <h2 className='head-text'>Where Imagination <span> Meets Implementation,</span><br/> in Every <span>Line of Code</span>
    </h2>

    <div className="app__profiles">
      {abouts.map((about, index)=>(
        <motion.div
        whileInView={{opacity:1}}
        whileHover={{scale:1.1}}
        transition={{duration:0.5, type:'tween'}}
        className='app__profile-item'
        key={about.title+index}
        >
          <img src={about.imgUrl} alt={about.title} />
          <h2 className="bold-text" style={{marginTop:20}}>{about.title}</h2>
          <p className="p-text" style={{marginTop:10}}>{about.description}</p>
        </motion.div>
      ))}
    </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About,'app__about'),
  'about',
"app__whitebg");
