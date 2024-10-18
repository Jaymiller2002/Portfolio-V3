import React from 'react';
import './About.css';
import Resume from './assets/Jays_Resume.pdf';
import { Typewriter } from 'react-simple-typewriter'; // Import the Typewriter effect

const About = () => {
  const skills = ['HTML', 'CSS', 'Javascript', 'React', 'SQL', 'Django', 'Python'];

  return (
    <section id="about" className="app-section">
      <div className="section-content">
        <h2>About Me</h2>
        <div className="about-card">
          <div className="about-info">
            <h1>Jay Miller</h1>
            <p>
              I am a full stack developer with experience in both front-end and back-end development.
              My expertise includes working with modern JavaScript frameworks like React for crafting
              dynamic user interfaces, as well as utilizing Django and Django REST Framework for
              building robust back-end services and RESTful APIs.
            </p>
            <div className="skills-section">
              <p>
                <span className="typewriter-text">
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
            </div>
            <div className="resume-section">
              <h1>View My Resume!</h1>
              <button className="about-button">
                <a
                  href={Resume}
                  download="Jays_Resume.pdf"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Download Resume
                </a>
              </button>
            </div>
          </div>
        </div>
        {/* Hire Me Button */}
        <button
          className="about-button hire-me-button"
          onClick={() => window.location.href = "tel:8594758431"}
        >
          Hire Me!
        </button>
      </div>
    </section>
  );
};

export default About;


