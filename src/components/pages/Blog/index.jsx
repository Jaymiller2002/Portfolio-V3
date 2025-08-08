import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { blogPosts, blogCategories } from '../../../data/blogPosts';
import styles from './Blog.module.css';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // Here you would typically send the email to your backend
      console.log('Newsletter subscription:', email);
    }
  };

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

  return (
    <section className={styles.blogSection}>
      <div className={styles.sectionContent}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Blog & Insights
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.blogIntro}
        >
          Sharing my thoughts on web development, technology trends, and lessons learned from building applications.
        </motion.p>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={styles.categoryFilter}
        >
          {blogCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`${styles.filterBtn} ${selectedCategory === category.id ? styles.active : ''}`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={styles.blogGrid}
        >
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className={styles.blogCard}
            >
              <div className={styles.blogImage}>
                <img src={post.image} alt={post.title} />
                <div className={styles.blogCategory}>{post.category}</div>
              </div>
              
              <div className={styles.blogContent}>
                <div className={styles.blogMeta}>
                  <span className={styles.blogDate}>{post.date}</span>
                  <span className={styles.blogReadTime}>{post.readTime} min read</span>
                </div>
                
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                
                <div className={styles.blogTags}>
                  {post.tags.map((tag, index) => (
                    <span key={index} className={styles.blogTag}>
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a href={post.url} className={styles.readMoreBtn}>
                  Read More →
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={styles.newsletterSection}
        >
          <div className={styles.newsletterContent}>
            <h3>Stay Updated</h3>
            <p>Subscribe to my newsletter for the latest insights on web development and technology.</p>
            
            {!isSubscribed ? (
              <form onSubmit={handleNewsletterSubmit} className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={styles.newsletterInput}
                />
                <button type="submit" className={styles.newsletterBtn}>
                  Subscribe
                </button>
              </form>
            ) : (
              <div className={styles.subscriptionSuccess}>
                <p>✅ Thank you for subscribing!</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog; 