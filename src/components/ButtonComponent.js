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
{/*
// src/components/ButtonComponent.js
import React from 'react';
import { Button } from 'antd';

const ButtonComponent = ({ imageUrl, buttonText, loading = false, disabled = false, style = {} }) => {
  const handleClick = () => {
    window.open(imageUrl, '_blank');
  };

  return (
    <Button
      type="primary"
      size="large"
      onClick={handleClick}
      loading={loading}
      disabled={disabled}
      style={{ margin: '10px', ...style }}
    >
      {buttonText}
    </Button>
  );
};

export default ButtonComponent;
*/}
