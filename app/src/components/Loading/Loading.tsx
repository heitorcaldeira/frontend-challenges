import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const Loading: React.FC = () => {
  const { primaryColor, textColor } = useContext(ThemeContext);

  return (
    <svg
      style={{ margin: '0 auto', display: 'block' }}
      width='50px'
      height='50px'
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid'
    >
      <g transform='translate(50,50)'>
        <g transform='scale(0.7)'>
          <circle cx='0' cy='0' r='50' fill={textColor}></circle>
          <circle cx='0' cy='-28' r='15' fill={primaryColor}>
            <animateTransform
              attributeName='transform'
              type='rotate'
              dur='1s'
              repeatCount='indefinite'
              keyTimes='0;1'
              values='0 0 0;360 0 0'
            ></animateTransform>
          </circle>
        </g>
      </g>
    </svg>
  );
};

export default Loading;
