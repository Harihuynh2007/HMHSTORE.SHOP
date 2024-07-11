import React from 'react';


const About = () => {
  return (
    <section id="about" className="default-section" data-scroll-reveal="enter from the bottom over .5s" style={{ minHeight: '720px' }}>
      <div className="section-heading">
        <h2 className="section-title">About me</h2>
      </div>

      <div className="about-container">
        <div className="container" style={{ minHeight: '584px' }}>
          <div className="row">
            <div className="col-md-3" data-scroll-reveal="enter from the right after .5s">
              <div className="profile-photo section-box">
                <img src="Avatar_cv.jpg" alt="Minh Hai" className="img-fluid img-thumbnail" />
              </div>
            </div>

            <div className="col-md-6" data-scroll-reveal="enter from the right after .5s">
              <div className="profile-details section-box">
                <h2 className="box-title">Summary</h2>
                <div className="about-content">
                  <p>
                    With expertise in FrontEnd development, UX/UI design, and mobile app development, I bring a wealth of experience using industry-standard tools like VSCode, Figma, and various mobile platforms. Proficient in HTML, CSS, and JavaScript, I've successfully utilized leading front-end frameworks such as React, Angular, and Vue.js to craft intricate web applications and mobile apps.
                  </p>
                  <p>
                    In the realm of UX/UI, I possess a profound understanding of design principles. Leveraging Figma, I create comprehensive wireframes, mockups, and high-fidelity designs for both web and mobile applications. My proficiency extends from concept to completion, collaborating closely with stakeholders to ensure the final product aligns with their needs and expectations.
                  </p>
                  <p>
                    In mobile app development, I have a track record of creating applications for iOS and Android platforms. Keeping abreast of the latest trends and best practices, I ensure that my apps are optimized for both mobile devices and desktop computers, delivering a seamless user experience across all platforms.
                  </p>
                  <p>
                    My passion for innovation, creative thinking, and collaborative approach make me a valuable asset to any organization aiming to develop top-quality applications.
                  </p>
                </div>
                <a href="#" className="btn download-btn">
                  <i className="fa fa-download"></i> Tải về CV
                </a>
              </div>
            </div>
            <div class="col-md-3 " data-scroll-reveal="enter from the right after .5s" >
              <div class="profile-details section-box">
                <h2 class="box-title">Contact Info</h2>
                <address>
                  <ul class="address-line">
                    <li><i class="fa-solid fa-location-dot fa-xl"></i> <span class="item"> Ho Chi Minh City</span></li>
                    <li><i class="fa fa-phone fa-xl"></i><span class="item"> +84 37284xxxx</span></li>
                    <li><i class="fa-solid fa-envelope fa-xl"></i><span class="item">Hminhhai2000@gmail.com</span> </li>  
                  </ul>
                </address>
              </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
