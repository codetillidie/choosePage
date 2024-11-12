// src/pages/AdminPage.js
import React from 'react';
import adminImage from '../assets/images/admin.jpg'; // Path to your image
import './PageStyles.css'; // Shared styles

const AdminPage = () => {
  return (
    <div 
      className="page-background"
      style={{
        backgroundImage: `url(${adminImage})`, // Set admin image as background
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        filter: 'brightness(0.7)', // Apply a filter
      }}
    >
      <h2>Admin Page</h2>
    </div>
  );
};

export default AdminPage;
