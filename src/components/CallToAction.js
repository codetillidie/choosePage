import React from 'react';
import { Button } from 'antd';
import './CallToAction.css'; // Import CSS for styling (optional)

const CallToAction = () => {
  const handleGetStarted = () => {
    // Placeholder action, e.g., navigate to signup page
    window.location.href = '#features-benefits';
  };

  return (
    <div className="call-to-action-section" id="call-to-action">
      <h2>Ready to Elevate Your Geospatial Projects?</h2>
      <Button type="primary" size="large" onClick={handleGetStarted}>
        Get Started
      </Button>
    </div>
  );
};

export default CallToAction;
