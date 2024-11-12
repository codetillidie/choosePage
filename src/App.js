import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import ButtonComponent from './components/ButtonComponent';
import Navbar from './components/Navbar'; // Existing Navbar component
import SocialProof from './components/SocialProof'; // New Components
import CallToAction from './components/CallToAction';
import FeaturesBenefits from './components/FeaturesBenefits';
import Multimedia from './components/Multimedia';
import AdditionalResources from './components/AdditionalResources';
import logo from './assets/images/logo.png';
import './App.css'; // Existing CSS

const { Content } = Layout;

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Set the document title when the app loads
    document.title = "Altz Platform";

    // Handler to call on window scroll
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) { // Adjust this value as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Layout>
      {/* Navbar */}
      <Navbar isScrolled={isScrolled} title="Altz Technologies Geospatial Platform" />

      {/* Main Content */}
      <Content className="App">
        <header className="App-header">
          {/* Display the logo and title only when not scrolled */}
          {!isScrolled && (
            <>
              <img src={logo} alt="Logo" className="logo" />
              <h1>Altz Technologies Geospatial Platform</h1>
            </>
          )}

          {/* Layout for buttons using Ant Design's Row and Col components */}
          <div className="button-layout">
            <ButtonComponent
              text="ADMIN"
              onClick={() => handleClick('https://localhost/admin')}
            />
            <ButtonComponent
              text="VIEWER"
              onClick={() => handleClick('https://localhost/3D/viewer')}
            />
          </div>
        </header>

        {/* Additional Sections */}
        <SocialProof />
        <CallToAction />
        <FeaturesBenefits />
        <Multimedia />
        <AdditionalResources />
      </Content>
    </Layout>
  );
};

export default App;
