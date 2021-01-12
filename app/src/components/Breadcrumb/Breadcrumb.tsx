import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components';

interface Props {
  title: string;
  link: string;
}

const StyledBreadcrumb = styled(Link)`
  color: ${(props) => props.theme.gray};
  display: flex;
  font-size: 15px;
  text-decoration: none;
  align-items: center;
`;

const Breadcrumb: React.FC<Props> = ({ title, link }) => {
  const { gray } = useContext(ThemeContext);

  return (
    <StyledBreadcrumb to={link}>
      <svg
        width='7'
        height='12'
        viewBox='0 0 7 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        style={{ marginRight: '7px' }}
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M6.00001 12C5.74401 12 5.48801 11.902 5.29301 11.707L0.293006 6.70701C-0.0979941 6.31601 -0.0979941 5.68401 0.293006 5.29301L5.29301 0.293006C5.68401 -0.0979941 6.31601 -0.0979941 6.70701 0.293006C7.09801 0.684006 7.09801 1.31601 6.70701 1.70701L2.41401 6.00001L6.70701 10.293C7.09801 10.684 7.09801 11.316 6.70701 11.707C6.51201 11.902 6.25601 12 6.00001 12Z'
          fill={gray}
        />
      </svg>
      {title}
    </StyledBreadcrumb>
  );
};

export default Breadcrumb;
