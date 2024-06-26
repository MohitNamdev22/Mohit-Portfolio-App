import React,{useState} from 'react'
import {images} from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import {client} from '../../client';
import './Footer.scss'
const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="main-box">
        <div className="app__footer-cards">
          <div className="app__footer-card">
            <img src={images.email} alt="email" />
            <a href="mailto:namdevmohit0@gmail.com" className='p-text'>namdevmohit0@gmail.com</a>
          </div>
          <div className="app__footer-card">
            <img src={images.mobile} alt="mobile" />
            <a href="tel:+91 8770847520" className='p-text'>8770847520</a>
          </div>
        </div>

        {!isFormSubmitted ?
          <div className="app__footer-form app__flex">
            <div className="app__flex">
              <input type="text" className='p-text' placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} />
            </div>
            <div className="app__flex">
              <input type="email" className='p-text' placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} />
            </div>
            <div>
              <textarea name="" id="" className='p-text' placeholder='Your Message' value={message} name="message" onChange={handleChangeInput} ></textarea>
            </div>
            <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
          </div>
          : <div>
            <h3 className='head-text'>Thank You for getting in touch!</h3>
          </div>}
      </div>
    </>
  );
}

export default Footer;
