import React from 'react';

function AboutUs() {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>About Us</h2>
      <p style={styles.paragraph}>
        Welcome to FitConnect! Our platform is designed to bring together fitness enthusiasts, trainers, and health professionals. Our goal is to create a community where everyone can find the support and resources needed to achieve their wellness goals.
      </p>
      <h3 style={styles.subHeader}>Our Mission</h3>
      <p style={styles.paragraph}>
        At FitConnect, we believe that fitness and wellness are essential for a healthy life. Our mission is to make fitness accessible and engaging by connecting clients with experienced trainers and nutritionists who provide personalized guidance.
      </p>
      <h3 style={styles.subHeader}>What We Offer</h3>
      <ul style={styles.list}>
        <li>Personalized workout plans</li>
        <li>Nutrition tracking and diet plans</li>
        <li>Community forums and live classes</li>
        <li>Consultations with certified trainers and nutritionists</li>
        <li>Blogs, news, and tips on fitness and wellness</li>
      </ul>
      <p style={styles.paragraph}>
        Join us today and become part of a growing fitness community. Together, let’s make wellness a priority!
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  },
  header: {
    fontSize: '2rem',
    color: '#333',
  },
  subHeader: {
    fontSize: '1.5rem',
    color: '#555',
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#666',
    marginBottom: '20px',
  },
  list: {
    textAlign: 'left',
    marginLeft: '20px',
    color: '#666',
  },
};

export default AboutUs;
