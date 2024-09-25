// src/components/ButtonComponent.js
import React from 'react';
import { Button } from 'antd';

const ButtonComponent = ({ text, onClick }) => {
  return (
    <Button type="primary" size="large" onClick={onClick} style={{ margin: '10px' }}>
      {text}
    </Button>
  );
};

export default ButtonComponent;
