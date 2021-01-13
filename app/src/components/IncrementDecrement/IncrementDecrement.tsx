import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

interface Props {
  onIncrement: (e) => void;
  onDecrement: (e) => void;
  current: number;
}

const IncDecContainer = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: ${(props) => props.theme.borderRadius};
  display: inline-block;
  width: 172px;
`;

const IncDecButton = styled.button`
  padding: 0 32px;
  height: 34px;
  border: none;
  background: linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);
`;

const IncrementDecrement: React.FC<Props> = ({
  onIncrement,
  onDecrement,
  current,
}) => {
  const { dangerColor, primaryColor } = useContext(ThemeContext);
  return (
    <IncDecContainer>
      <IncDecButton onClick={() => current > 0 && onDecrement(current - 1)}>
        <svg
          width='21'
          height='20'
          viewBox='0 0 21 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M10.6056 20C16.0386 20 20.4588 15.514 20.4588 10C20.4588 4.486 16.0386 -3.95462e-07 10.6056 -8.81546e-07C5.1725 -1.36763e-06 0.75234 4.486 0.752339 10C0.752339 15.514 5.1725 20 10.6056 20ZM10.6056 2C14.9518 2 18.4882 5.589 18.4882 10C18.4882 14.411 14.9518 18 10.6056 18C6.25931 18 2.72298 14.411 2.72299 10C2.72299 5.589 6.25931 2 10.6056 2ZM6.66428 11L14.5469 11C15.0917 11 15.5322 10.553 15.5322 10C15.5322 9.447 15.0917 9 14.5469 9L6.66428 9C6.11939 9 5.67896 9.447 5.67895 10C5.67895 10.553 6.11939 11 6.66428 11Z'
            fill={dangerColor}
          />
        </svg>
      </IncDecButton>
      <IncDecButton onClick={() => onIncrement(current + 1)}>
        <svg
          width='21'
          height='20'
          viewBox='0 0 21 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M10.0584 0C4.62536 0 0.2052 4.486 0.2052 10C0.2052 15.514 4.62536 20 10.0584 20C15.4915 20 19.9117 15.514 19.9117 10C19.9117 4.486 15.4915 0 10.0584 0ZM10.0584 18C5.71217 18 2.17585 14.411 2.17585 10C2.17585 5.589 5.71217 2 10.0584 2C14.4047 2 17.941 5.589 17.941 10C17.941 14.411 14.4047 18 10.0584 18ZM13.9997 9H11.0438V6C11.0438 5.447 10.6033 5 10.0584 5C9.51355 5 9.07311 5.447 9.07311 6V9H6.11714C5.57226 9 5.13182 9.447 5.13182 10C5.13182 10.553 5.57226 11 6.11714 11H9.07311V14C9.07311 14.553 9.51355 15 10.0584 15C10.6033 15 11.0438 14.553 11.0438 14V11H13.9997C14.5446 11 14.985 10.553 14.985 10C14.985 9.447 14.5446 9 13.9997 9Z'
            fill={primaryColor}
          />
        </svg>
      </IncDecButton>
    </IncDecContainer>
  );
};

export default IncrementDecrement;
