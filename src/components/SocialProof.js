import React from 'react';
import { Row, Col, Card, Avatar } from 'antd';
import './SocialProof.css'; // Import CSS for styling (optional)

const { Meta } = Card;

const SocialProof = () => {
  // Placeholder data for testimonials or logos
  const testimonials = [
    {
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      name: 'John Doe',
      feedback: 'Altz Platform has revolutionized our geospatial analysis!',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      name: 'Jane Smith',
      feedback: 'Exceptional tools and support from Altz Technologies.',
    },
    // Add more testimonials or logos as needed
  ];

  return (
    <div className="social-proof-section" id="social-proof">
      <h2>What Our Clients Say</h2>
      <Row gutter={[16, 16]} justify="center">
        {testimonials.map((testimonial, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card>
              <Meta
                avatar={<Avatar src={testimonial.avatar} />}
                title={testimonial.name}
                description={testimonial.feedback}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SocialProof;
