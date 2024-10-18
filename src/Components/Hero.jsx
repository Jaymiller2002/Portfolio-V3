import React from 'react';
import './Hero.css';
import { Typewriter } from 'react-simple-typewriter'; // You can install this package to show typewriting effect
import myImage from './assets/Blogpic.jpeg'

const Hero = () => {
    const skills = ['Full Stack Developer', 'React Enthusiast', 'Django Expert', 'UI/UX Designer'];

    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Jay Miller</h1>
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
                    <p>I'm passionate about building scalable web applications and engaging user interfaces.</p>
                    <div className="hero-buttons">
                        <a href="#projects" className="cta-button">See My Work</a>
                        <a href="#contact" className="cta-button">Let's Collaborate</a>
                    </div>
                </div>
                <div className="hero-image">
                    {/* You can add an illustration or a professional photo here */}
                    <img src={myImage} alt="Jay Miller Portrait" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
