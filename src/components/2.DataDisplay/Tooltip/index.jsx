import { useState } from 'react';
import './index.css';
export const Tooltip = ({ text, children }) => {
  const [isVisible, setVisible] = useState(false);
  console.log(isVisible);
  return (
    <div
      className='tooltip-container'
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {isVisible && <div className='tooltip'>{text}</div>}
    </div>
  );
};
