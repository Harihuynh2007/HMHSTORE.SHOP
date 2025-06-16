// Skills.js
import React from 'react';
import styles from './Skills.module.css';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Programming',
    items: ['JavaScript', 'TypeScript', 'Java', 'C++']
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'HTML', 'CSS']
  },
  {
    category: 'Mobile',
    items: ['React Native', 'Redux']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'RESTful APIs']
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'MySQL']
  },
  {
    category: 'Version Control',
    items: ['Git', 'GitHub']
  },
  
];

const Skills = () => {
  return (
    <section id="skills" className="default-section" style={{ backgroundColor: '#0a192f', color: '#ccd6f6' }}>
      <div className="section-heading">
        <h2 className="section-title" style={{ color: '#64ffda' }}>Skills</h2>
      </div>

      <div className="container">
        <div className={styles.skillsGrid}>
          {skillsData.map((skill, index) => (
            <motion.div
              className={styles.skillCard}
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <h4 className={styles.skillCategory}>{skill.category}</h4>
              <ul>
                {skill.items.map((item, i) => (
                  <li key={i} className={styles.skillItem}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;