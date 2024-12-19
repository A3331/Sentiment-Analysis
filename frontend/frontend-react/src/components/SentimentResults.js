import React from 'react';

const SentimentResults = ({ data }) => {
  return (
    <div>
      <h2>Sentiment Counts:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <img src="sentiment_distribution.png" alt="Sentiment Distribution" />
    </div>
  );
};

export default SentimentResults;