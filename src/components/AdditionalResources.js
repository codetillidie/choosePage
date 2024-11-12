import React from 'react';
import { List, Typography } from 'antd';
import './AdditionalResources.css'; // Import CSS for styling (optional)

const { Title, Paragraph, Link } = Typography;

const resources = [
  {
    title: 'Getting Started Guide',
    url: '#',
  },
  {
    title: 'API Documentation',
    url: '#',
  },
  {
    title: 'Community Forum',
    url: '#',
  },
  {
    title: 'Support Center',
    url: '#',
  },
  // Add more resources as needed
];

const AdditionalResources = () => {
  return (
    <div className="additional-resources-section" id="additional-resources">
      <Title level={2}>Additional Resources</Title>
      <List
        bordered
        dataSource={resources}
        renderItem={(item) => (
          <List.Item>
            <Link href={item.url}>{item.title}</Link>
          </List.Item>
        )}
      />
    </div>
  );
};

export default AdditionalResources;
