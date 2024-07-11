import React from 'react';


const Skills = () => {
  return (
    <section id="Skills" className="default-section" data-scroll-reveal="enter from the bottom over .5s" style={{ width: '100%', minHeight: '592px' }}>
      <div className="section-heading">
        <h2 className="section-title">SKILLS</h2>
      </div>
      <div className="container" style={{ minHeight: '528px' }}>
          <div className="row">
            <div className="col-md-3" data-scroll-reveal="enter from the left after .5s">
              <div className="section-box">
                <h2 className="box-title">Programming languages</h2>
                <ul>
                  <li> C++ </li>
                  <li>Java</li>
                  <li>HTML, CSS</li>
                  <li>JavaScript</li>
                </ul>
                <h2 className="box-title">FrameWorks & platforms</h2>
                <ul>
                  <li>jSon</li>
                  <li>ReactJS & ReactNative</li>
                  <li>JQuery</li>
                  <li>ASP WebAPI / RestfulAPI / JSON, XML</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3" data-scroll-reveal="enter from the left after .5s">
              <div className="section-box">
                <h2 className="box-title">Data base</h2>
                <ul>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                </ul>
                <h2 className="box-title">VERSION CONTROL</h2>
                <ul>
                  <li>Git</li>
                </ul>
                <h2 className="box-title">IDE</h2>
                <ul>
                  <li>Visual Studio</li>
                  <li>NetBeans</li>
                  <li>Eclipse</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6" data-scroll-reveal="enter from the left after .5s">
              <div className="section-box">
                <h2 className="box-title">Foreign Language</h2>
                <ul>
                  <li>Toeic: ≈ 700/990</li>
                  <li>IELTS: 6.5/9</li>
                </ul>
                <h2 className="box-title">Knowledge</h2>
                <ul>
                  <li>Proficient in developing mobile applications using React Native.</li>
                  <li>Able to apply React principles to mobile application development, having a deep knowledge of React and JavaScript.</li>
                  <li>Managing application state and optimizing performance can be achieved by using Redux.</li>
                  <li>The adaptation of the application for both iOS and Android was successfully implemented.</li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
    </section>
  );
}

export default Skills;
