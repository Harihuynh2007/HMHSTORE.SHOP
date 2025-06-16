import React from 'react';
import styles from './Projects.module.css';
import projects from '../../../data/projects';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <section id="projects" className="default-section"style={{ backgroundColor: '#0a192f', color: '#ccd6f6' }} >
      <div className="section-heading">
        <h2 className="section-title"  style={{ color: '#64ffda' }}>PROJECTS</h2>
      </div>

      <motion.div
        className={styles.grid}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            className={styles.card}
            variants={cardVariant}
            key={index}
            whileHover={{ scale: 1.03 }}
          >
            <img src={project.image} alt={project.title} className={styles.thumbnail} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.techList}>
              {project.tech.map((tech, i) => (
                <span key={i} className={styles.tech}>{tech}</span>
              ))}
            </div>
            <div className={styles.links}>
              {project.live && <a href={project.live} target="_blank" rel="noreferrer">Demo</a>}
              <a href={project.github} target="_blank" rel="noreferrer">View Code</a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
