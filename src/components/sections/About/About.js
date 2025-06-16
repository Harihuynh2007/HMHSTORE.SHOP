// About.js
import React from 'react';
import styles from './About.module.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="default-section" style={{ minHeight: '720px', backgroundColor: '#0a192f', color: '#ccd6f6' }}>
      <div className="section-heading">
        <h2 className="section-title" style={{ color: '#64ffda' }}>About Me</h2>
      </div>

      <div className={styles.aboutContainer}>
        <div className="container" style={{ minHeight: '584px' }}>
          <div className="row">
            {/* Avatar */}
            <motion.div 
              className="col-md-3"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className={`${styles.profilePhoto} section-box`}>
                <img 
                  src="/avatar_cool.jpg" 
                  alt="Minh Hai" 
                  className={`img-fluid img-thumbnail ${styles.avatarImage}`}
                />
              </div>
            </motion.div>

            {/* Summary */}
            <motion.div 
              className="col-md-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="profile-details section-box">
                <h2 className="box-title" style={{ color: '#64ffda' }}>Summary</h2>
                <div className={styles.aboutContent}>
                  <p>
                    I’m a Technical Support Engineer with a strong technical foundation in web technologies and mobile platforms. Experienced with tools like VSCode, Figma, and front-end technologies such as HTML, CSS, and JavaScript, I efficiently troubleshoot and resolve technical issues.
                  </p>
                  <p>
                    With a service-oriented mindset, clear communication, and problem-solving skills, I help ensure product stability and user satisfaction across teams and platforms.
                  </p>
                </div>
                <motion.a 
                  href="#" 
                  className={`btn ${styles.downloadBtn}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fa fa-download"></i> Download CV
                </motion.a>
                <motion.a 
                  href="#projects" 
                  className={`btn ${styles.downloadBtn}`}
                  style={{ marginLeft: '10px' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="col-md-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="profile-details section-box">
                <h2 className="box-title" style={{ color: '#64ffda' }}>Contact Info</h2>
                <address>
                  <ul className={styles.addressLine}>
                    <li>
                      <i className="fa-solid fa-location-dot fa-xl style={{color: #64ffda}}"></i>
                      <span className={styles.item}> Ho Chi Minh City</span>
                    </li>
                    <li>
                      <i className="fa fa-phone fa-xl"></i>
                      <span className={styles.item}> +84 37284xxxx</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-envelope fa-xl"></i>
                      <span className={styles.item}>Hminhhai2000@gmail.com</span>
                    </li>
                  </ul>
                </address>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
