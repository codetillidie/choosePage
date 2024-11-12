// src/components/Navbar.js

import React from 'react';
import { Layout, Button } from 'antd';
import { ContactsOutlined } from '@ant-design/icons'; // Updated import
import logo from '../assets/images/logo.png';
import './Navbar.css'; // Import the CSS file for styling

const { Header } = Layout;

const Navbar = ({ isScrolled, title }) => {
  return (
    <Header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        {/* Logo */}
        <div className="logo-container">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </div>

        {/* Title */}
        {isScrolled && (
          <div className="navbar-title">
            {/*<h3>{title}</h3>*/}
          </div>
        )}

        {/* Contact Us Button */}
        <div className="contact-button">
          <Button
            
            type="primary"
            icon={<ContactsOutlined />} // Updated icon usage
            onClick={() => window.location.href = 'mailto:contact@altzplatform.com'}
            size='small'
            
          >
            Contact Us
          </Button>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
