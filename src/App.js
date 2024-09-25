// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Row, Col } from 'antd'; // Ant Design Grid
import ButtonComponent from './components/ButtonComponent';
import { useDispatch } from 'react-redux';
import { setButtonClicked } from './redux/actions';
import adminImage from './assets/images/admin.jpg';  // Import the images
import viewerImage from './assets/images/viewer.jpg'; // Import the images
import './App.css'; // Custom styles for layout

const App = () => {
  const dispatch = useDispatch();

  const handleClick = (buttonName) => {
    dispatch(setButtonClicked(buttonName));
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My App</h1>
          
          {/* Grid layout for widescreen and responsive behavior for mobile */}
          <Row className="button-layout" justify="center" align="middle">
            <Col xs={24} md={12} className="button-container">
              <Link to="/page1">
                <ButtonComponent
                  text="ADMIN"
                  onClick={() => handleClick('Page 1')}
                  style={{
                    backgroundImage: `url(${adminImage})`,  // Set the background image using the imported image
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                  }}
                />
              </Link>
            </Col>
            <Col xs={24} md={12} className="button-container">
              <Link to="/page2">
                <ButtonComponent
                  text="VIEWER"
                  onClick={() => handleClick('Page 2')}
                  style={{
                    backgroundImage: `url(${viewerImage})`,  // Set the background image using the imported image
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                  }}
                />
              </Link>
            </Col>
          </Row>
        </header>

        <Routes>
          <Route path="/page1" element={<h2>This is Page 1</h2>} />
          <Route path="/page2" element={<h2>This is Page 2</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
