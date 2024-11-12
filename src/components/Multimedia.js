import React from 'react';
import { Row, Col } from 'antd';
import './Multimedia.css'; // Import CSS for styling (optional)

const Multimedia = () => {
  return (
    <div className="multimedia-section" id="multimedia">
      <h2>Our Platform in Action</h2>
      <Row justify="center" align="middle" gutter={[16, 16]}>
        <Col xs={24} md={12}>
          {/* Placeholder for Image */}
          <img
            src="https://via.placeholder.com/600x400"
            alt="Platform Screenshot"
            className="multimedia-image"
          />
        </Col>
        <Col xs={24} md={12}>
          {/* Placeholder for Video */}
          <video width="100%" controls>
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Col>
      </Row>
    </div>
  );
};

export default Multimedia;
