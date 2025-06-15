import React from 'react';
import styles from './About.module.css';


const About = () => {
  return (
    <section id="about" className="default-section" data-scroll-reveal="enter from the bottom over .5s" style={{ minHeight: '720px' }}>
      <div className="section-heading">
        <h2 className="section-title">About me</h2>
      </div>

      <div className={styles.aboutContainer}>
        <div className="container" style={{ minHeight: '584px' }}>
          <div className="row">
            <div className="col-md-3" data-scroll-reveal="enter from the right after .5s">
              <div className={`${styles.profilePhoto} section-box`}>
                <img 
                src="/avatar_about.jpg" 
                alt="Minh Hai" 
                className={`img-fluid img-thumbnail ${styles.avatarImage}`}
                Style = {{}} />

              </div>
            </div>

            <div className="col-md-6" data-scroll-reveal="enter from the right after .5s">
              <div className="profile-details section-box">
                <h2 className="box-title">Summary</h2>
                <div className={styles.aboutContent}>
                  <p>
                    I’m a Technical Support Engineer with a strong technical foundation in web technologies and mobile platforms. Experienced with tools like VSCode, Figma, and front-end technologies such as HTML, CSS, and JavaScript, I efficiently troubleshoot and resolve technical issues.
                  </p>
                  <p>
                      With a service-oriented mindset, clear communication, and problem-solving skills, I help ensure product stability and user satisfaction across teams and platforms.
                    </p>
                </div>
                <a href="#" className={`btn ${styles.downloadBtn}`}>
                  <i className="fa fa-download"></i> Tải về CV
                </a>
              </div>
            </div>

            <div className="col-md-3" data-scroll-reveal="enter from the right after .5s">
              <div className="profile-details section-box">
                <h2 className="box-title">Contact Info</h2>
                <address>
                  <ul className={styles.addressLine}>
                    <li>
                      <i className="fa-solid fa-location-dot fa-xl"></i>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
