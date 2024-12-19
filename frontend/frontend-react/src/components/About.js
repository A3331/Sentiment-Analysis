import React from 'react';
import './About.css';

const About = () => {
  const teamMembers = [
    { name: 'Ahwan Poudyal', role: '', image: '' },
    { name: 'Babita Adhikari', role: '', image: '' },
    { name: 'Deepak Gurung', role: '', image: '' },
    { name: 'Sapen Chhetri', role: '', image: '' },
  ];

  return (
    <div className="about-container">
      <section className="about-intro">
        <h1>About Us</h1>
        <p>
        This application is designed to perform sentiment analysis on various types of reviews. 
        Our goal is to provide insights into customer opinions and improve decision-making for businesses and individuals.
        </p>
      </section>

      <section className="about-features">
        <h2>Key Features</h2>
        <div className="features-container">
          <div className="feature-card">
            <h3>Fast Analysis</h3>
            <p>Quickly analyze thousands of reviews for sentiment in just seconds.</p>
          </div>
          <div className="feature-card">
            <h3>Custom Upload</h3>
            <p>Upload your datasets seamlessly for analysis.</p>
          </div>
          <div className="feature-card">
            <h3>Visual Insights</h3>
            <p>Get graphical charts and insights to understand the sentiment distribution.</p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.image} alt={member.name} className="team-image" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;