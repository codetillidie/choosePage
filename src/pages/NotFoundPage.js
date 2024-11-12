// src/pages/NotFoundPage.js
import React from 'react';

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <a href="/">Go to Home</a>
    </div>
  );
};

export default NotFoundPage;
