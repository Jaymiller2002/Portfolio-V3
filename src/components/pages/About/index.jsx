import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { skills, skillData } from '../../../data/skills';
import Resume from '../../../assets/Jays_Resume.pdf';
import styles from './About.module.css';

const About = () => {
  const [isSkillsExpanded, setIsSkillsExpanded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const skillsVariants = {
    collapsed: { 
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    expanded: { 
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className={styles.appSection}>
      <div className={styles.sectionContent}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={styles.aboutGrid}
        >
          <motion.div variants={itemVariants} className={styles.aboutCard}>
            <div className={styles.aboutInfo}>
              <h1>Jay Miller</h1>
              <p>
                I am a passionate full stack developer with a strong foundation in both front-end and back-end development. 
                My journey in web development started with a curiosity to build things that make a difference, and that drive 
                continues to push me forward.
              </p>
              <p>
                My expertise includes working with modern JavaScript frameworks like React for crafting dynamic user interfaces, 
                as well as utilizing Django and Django REST Framework for building robust back-end services and RESTful APIs. 
                I believe in writing clean, maintainable code and creating user experiences that are both beautiful and functional.
              </p>
              
              <div className={styles.skillsSection}>
                <h3>Technologies I work with:</h3>
                <div className={styles.typewriterContainer}>
                  <span className={styles.typewriterText}>
                    <Typewriter
                      words={skills}
                      loop={true}
                      cursor
                      cursorStyle="_"
                      typeSpeed={60}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </div>
              </div>
              
              <div className={styles.resumeSection}>
                <h3>View My Resume!</h3>
                <motion.button 
                  className={styles.aboutButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={Resume}
                    download="Jays_Resume.pdf"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    Download Resume
                  </a>
                </motion.button>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.skillsCard}>
            <div 
              className={styles.skillsHeader}
              onClick={() => setIsSkillsExpanded(!isSkillsExpanded)}
            >
              <h3>Skills & Expertise</h3>
              <motion.div
                className={styles.expandIcon}
                animate={{ rotate: isSkillsExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▼
              </motion.div>
            </div>
            
            <AnimatePresence>
              {isSkillsExpanded && (
                <motion.div
                  className={styles.skillsContent}
                  variants={skillsVariants}
                  initial="collapsed"
                  animate="expanded"
                  exit="collapsed"
                >
                  <div className={styles.skillsGrid}>
                    {skillData.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className={styles.skillItem}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className={styles.skillHeader}>
                          <span className={styles.skillName}>{skill.name}</span>
                          <span className={styles.skillLevel}>{skill.level}%</span>
                        </div>
                        <div className={styles.skillBar}>
                          <motion.div
                            className={styles.skillProgress}
                            style={{ backgroundColor: skill.color }}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Hire Me Button */}
        <motion.button
          className={styles.aboutButton + ' ' + styles.hireMeButton}
          onClick={() => window.location.href = "tel:8594758431"}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Hire Me!
        </motion.button>
      </div>
    </section>
  );
};

export default About; 