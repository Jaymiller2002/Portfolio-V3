import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import myImage from '../../../assets/Blogpic.jpeg';
import styles from './Hero.module.css';

const Home = () => {
  const skills = ['Full Stack Developer', 'React Enthusiast', 'Django Expert', 'UI/UX Designer'];

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1>Jay Miller</h1>
          <p>
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
          </p>
          <p>I'm passionate about building scalable web applications and engaging user interfaces.</p>
          <div className={styles.heroButtons}>
            <a href="/projects" className={styles.ctaButton}>See My Work</a>
            <a href="/about" className={styles.ctaButton}>About Me</a>
            <a href="/contact" className={styles.ctaButton}>Contact Me</a>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src={myImage} alt="Jay Miller Portrait" />
        </div>
      </div>
    </section>
  );
};

export default Home; 