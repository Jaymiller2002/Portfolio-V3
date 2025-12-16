import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  internshipProjects,
  projectCategories
} from '../../../data/blogPosts';
import styles from './Blog.module.css';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? internshipProjects
      : internshipProjects.filter(
          (project) => project.category === selectedCategory
        );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className={styles.blogSection}>
      <div className={styles.sectionContent}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Internship Projects & Assignments
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.blogIntro}
        >
          A collection of real projects, features, and assignments I completed
          during my 6-month internship, showcasing hands-on development
          experience and impact.
        </motion.p>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={styles.categoryFilter}
        >
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`${styles.filterBtn} ${
                selectedCategory === category.id ? styles.active : ''
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={styles.blogGrid}
        >
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className={styles.blogCard}
            >
              <div className={styles.blogImage}>
                <img src={project.image} alt={project.title} />
                <div className={styles.blogCategory}>{project.type}</div>
              </div>

              <div className={styles.blogContent}>
                <div className={styles.blogMeta}>
                  <span className={styles.projectTimeframe}>
                    {project.timeframe}
                  </span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.summary}</p>

                <div className={styles.blogTags}>
                  {project.techStack.map((tech, index) => (
                    <span key={index} className={styles.blogTag}>
                      {tech}
                    </span>
                  ))}
                </div>

                <a href={project.url} className={styles.readMoreBtn}>
                  View Project →
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog; 