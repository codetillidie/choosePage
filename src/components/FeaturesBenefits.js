import React from 'react';
import { Row, Col, Card } from 'antd';
import {
  CheckCircleOutlined,
  ToolOutlined,
  GlobalOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';
import './FeaturesBenefits.css'; // Import CSS for styling (optional)

const features = [
  {
    icon: <CheckCircleOutlined style={{ fontSize: '48px', color: '#1890ff' }} />,
    title: 'Reliable Performance',
    description: 'Experience seamless and efficient geospatial data processing.',
  },
  {
    icon: <ToolOutlined style={{ fontSize: '48px', color: '#52c41a' }} />,
    title: 'Advanced Tools',
    description: 'Access a suite of cutting-edge tools for comprehensive analysis.',
  },
  {
    icon: <GlobalOutlined style={{ fontSize: '48px', color: '#faad14' }} />,
    title: 'Global Reach',
    description: 'Connect and collaborate with professionals around the world.',
  },
  {
    icon: <ThunderboltOutlined style={{ fontSize: '48px', color: '#eb2f96' }} />,
    title: 'Fast Integration',
    description: 'Easily integrate with your existing workflows and systems.',
  },
  // Add more features as needed
];

const FeaturesBenefits = () => {
  return (
    <div className="features-benefits-section" id="features-benefits">
      <h2>Features & Benefits</h2>
      <Row gutter={[16, 16]} justify="center">
        {features.map((feature, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card className="feature-card" hoverable>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeaturesBenefits;
