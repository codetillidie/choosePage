// src/pages/ViewerPage.js
import React from 'react';
import viewerImage from '../assets/images/viewer.jpg'; // Path to your image
import './PageStyles.css'; // Shared styles

const ViewerPage = () => {
  return (
    <div 
      className="page-background"
      style={{
        backgroundImage: `url(${viewerImage})`, // Set viewer image as background
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        filter: 'brightness(0.7)', // Apply a filter
      }}
    >
      <h2>Viewer Page</h2>
    </div>
  );
};

export default ViewerPage;
