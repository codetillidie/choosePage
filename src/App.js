// src/App.js
import React from 'react'; // Import React library
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Import router components for navigation
import { Row, Col } from 'antd'; // Import Row and Col components from Ant Design for layout
import ButtonComponent from './components/ButtonComponent'; // Import custom ButtonComponent
import { useDispatch } from 'react-redux'; // Import useDispatch hook from Redux
import { setButtonClicked } from './redux/actions'; // Import action creator to update button click state
import adminImage from './assets/images/admin.jpg'; // Import admin image for button background
import viewerImage from './assets/images/viewer.jpg'; // Import viewer image for button background
import logo from './assets/images/logo.png'; // Import the logo image
import './App.css'; // Import custom CSS styles for layout

const App = () => {
  const dispatch = useDispatch(); // Initialize Redux dispatch function

  // Function to handle button click and dispatch action
  const handleClick = (buttonName) => {
    dispatch(setButtonClicked(buttonName)); // Dispatch action with button name
  };

  return (
    <Router> {/* Wrap the app in Router for routing capabilities */}
      <div className="App"> {/* Main application container */}
        <header className="App-header"> {/* Header section of the app */}
          
          <img src={logo} alt="Logo" className="logo" /> {/* Display the logo */}
          <h1>Altz Technologies Geospatial Platform</h1> {/* Main heading of the app */}
          
          <Row className="button-layout" justify="center" align="middle"> {/* Ant Design Row for layout */}
            <Col xs={24} md={12} className="button-container"> {/* Column for ADMIN button */}
              <Link to="/page1"> {/* Link to Page 1 */}
                
                <ButtonComponent
                  text="ADMIN" // Button text
                  onClick={() => handleClick({adminImage})} // Handle button click
                  
                />
                {/*
                <ButtonComponent 
                  buttonText="ADMIN" 
                  imageUrl={adminImage}
                  loading={isLoading} 
                  disabled={isDisabled} 
                />
                */}

              </Link>
            </Col>
            <Col xs={24} md={12} className="button-container"> {/* Column for VIEWER button */}
              <Link to="/page2"> {/* Link to Page 2 */}
                
                <ButtonComponent
                  text="VIEWER" // Button text
                  onClick={() => handleClick('Page 2')} // Handle button click
                  
                />
                {/*
                <ButtonComponent 
                  buttonText="VIEWER" 
                  imageUrl={viewerImage}
                  loading={isLoading} 
                  disabled={isDisabled} 
                />  
                */}              
                
              </Link>
            </Col>
          </Row>
        </header>

        <Routes> {/* Define routes for navigation */}
          <Route path="/page1" element={<h2>This is Page 1</h2>} /> {/* Route for Page 1 */}
          <Route path="/page2" element={<h2>This is Page 2</h2>} /> {/* Route for Page 2 */}
        </Routes>
      </div>
    </Router>
  );
};

export default App; // Export the App component
