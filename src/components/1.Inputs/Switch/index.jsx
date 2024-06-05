import React from 'react';
import cx from 'classnames';
import './index.css';
export default function Switch({ rounded = true, isToggled, onToggle }) {
  const sliderCX = cx('slider', {
    rounded: rounded,
  });
  return (
    <label className='switch'>
      {/* we use checkbox type input to manipulate slider classname with before psqeudo element or just slider classname */}
      <input
        type='checkbox'
        checked={isToggled}
        onChange={onToggle}
        name=''
        id=''
      />
      <span className={sliderCX}></span>
    </label>
  );
}
