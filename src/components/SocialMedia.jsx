import React from 'react';
import {BsLinkedin, BsInstagram} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://www.linkedin.com/in/mohitnamdev/" target='_blank'>
            <BsLinkedin/>
            </a>
        </div>
        <div>
          <a href="https://github.com/MohitNamdev22" target="_blank" rel="noopener noreferrer">
            <FaGithub/>
            </a>
        </div>
        <div>
          <a href="https://www.instagram.com/mohit_namdev03/" target='_blank'>
            <BsInstagram/>
            </a>
        </div>
      
    </div>
  )
}

export default SocialMedia
