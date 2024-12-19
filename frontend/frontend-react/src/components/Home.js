import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [singleReview, setSingleReview] = useState("");

  const handleReviewChange = (event) => {
    setSingleReview(event.target.value);
  };

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    alert(`Your review: "${singleReview}" has been analyzed!`);
    setSingleReview("");
  };

  return (
    <div className="home-container">
      <h1>Welcome to Sentiment Analysis</h1>
      <p>Analyze sentiments quickly and effortlessly.</p>

      <div className="review-section">
        <h2>Analyze a Single Sentence</h2>
        <form onSubmit={handleReviewSubmit} className="review-form">
          <textarea
            className="review-input"
            rows="4"
            placeholder="Enter a sentence to analyze..."
            value={singleReview}
            onChange={handleReviewChange}
          ></textarea>
          <button type="submit" className="review-submit-button">
            Analyze Sentiment
          </button>
        </form>
      </div>

      <footer>
        <p>Contact Us | About Us | Terms of Service</p>
        <p>&copy; 2024 Sentiment Analysis Inc.</p>
      </footer>
    </div>
  );
};

export default Home;
