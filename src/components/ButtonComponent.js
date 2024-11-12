// src/components/ButtonComponent.js


import React from 'react'; // Import React for creating the component
import { Button } from 'antd'; // Import Button component from Ant Design

const ButtonComponent = ({ text, onClick }) => { 
  /* ButtonComponent: A reusable button that receives 'text' and 'onClick' as props */
  
  return (
    <Button 
      type="primary" // Ant Design button type, sets the button style to primary (blue by default)
      size="large" // Set the button size to large (Ant Design predefined sizes: 'small', 'default', 'large')
      onClick={onClick} // Trigger the passed 'onClick' function when the button is clicked
      style={{ margin: '10px' }} // Inline CSS: adds a 10px margin around the button
      color="default"
    >
      {text} {/* Display the text passed via the 'text' prop inside the button*/}
    </Button>
  );
};

export default ButtonComponent; // Export the ButtonComponent so it can be used in other parts of the app
